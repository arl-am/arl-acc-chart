# ARL Network Accountability Chart

Live accountability chart hosted on GitHub Pages, data powered by JSONBin.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The live chart — share this URL with everyone |
| `uploader.html` | Your private update tool — use this to push new Paylocity exports |

---

## GitHub Pages Setup (one-time, ~5 minutes)

### Step 1 — Create a new GitHub repository

1. Go to [github.com](https://github.com) and sign in
2. Click the **+** icon (top right) → **New repository**
3. Name it something like `arl-org-chart`
4. Set visibility to **Private** (recommended) or Public
5. Do NOT initialize with a README — leave it empty
6. Click **Create repository**

### Step 2 — Upload the files

1. On your new empty repo page, click **uploading an existing file**
2. Drag and drop both `index.html` and `uploader.html`
3. At the bottom, click **Commit changes**

### Step 3 — Enable GitHub Pages

1. Go to your repo → **Settings** tab
2. Scroll down to **Pages** in the left sidebar
3. Under **Source**, select **Deploy from a branch**
4. Under **Branch**, select `main` and `/ (root)`
5. Click **Save**
6. Wait ~60 seconds, then refresh — you'll see:
   > Your site is live at `https://YOUR-USERNAME.github.io/arl-org-chart/`

### Step 4 — Share the URLs

- **Everyone**: `https://YOUR-USERNAME.github.io/arl-org-chart/` (index.html)
- **You only**: `https://YOUR-USERNAME.github.io/arl-org-chart/uploader.html`

> **Tip**: Bookmark the uploader URL — you'll use it every time you export from Paylocity.

---

## Updating the chart

1. In Paylocity, export the **Org Chart** report as CSV
2. Open your bookmarked uploader URL
3. Drop the CSV file into the uploader
4. Click **Push to Live Chart**
5. Done — everyone sees the update within seconds, no page refresh needed

---

## How it works

```
Paylocity CSV export
        ↓
   uploader.html          ← only you use this
        ↓
     JSONBin API          ← stores the latest CSV data
        ↓
    index.html            ← everyone's browser fetches from JSONBin on load
```

The chart HTML and all seat definitions (KPIs, responsibilities, level colours)
live in `index.html` on GitHub. The people data (names, titles, supervisors)
lives in JSONBin and updates independently.

---

## Making changes to the chart itself

If you need to update a seat definition, KPI, responsibility, or level assignment,
edit `index.html` directly on GitHub:

1. Go to your repo on GitHub
2. Click `index.html`
3. Click the pencil icon (Edit this file)
4. Make your change
5. Click **Commit changes**

GitHub Pages will redeploy automatically within ~30 seconds.

---

## JSONBin details

| Setting | Value |
|---------|-------|
| Bin ID | `69cd3987aaba882197b5b2de` |
| Visibility | Public (read without key) |
| Write access | Master Key (uploader only) |

Keep the Master Key private — it's only embedded in `uploader.html`,
which you control access to.
