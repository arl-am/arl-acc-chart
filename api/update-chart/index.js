const { BlobServiceClient } = require("@azure/storage-blob");

module.exports = async function (context, req) {
  const apiKey = req.headers["x-api-key"];
  if (!apiKey || apiKey !== process.env.CHART_API_KEY) {
    context.res = { status: 401, body: "Unauthorized" };
    return;
  }

  if (!req.body) {
    context.res = { status: 400, body: "No body provided" };
    return;
  }

  try {
    const client = BlobServiceClient.fromConnectionString(
      process.env.AZURE_STORAGE_CONNECTION_STRING
    );
    const container = client.getContainerClient("chart-data");
    const blob = container.getBlockBlobClient("chart.json");
    const data = JSON.stringify(req.body);

    await blob.upload(data, Buffer.byteLength(data), {
      overwrite: true,
      blobHTTPHeaders: { blobContentType: "application/json" }
    });

    context.res = { status: 200, body: { success: true } };
  } catch (err) {
    context.log.error("Blob upload failed:", err.message);
    context.res = { status: 500, body: "Storage error" };
  }
};
