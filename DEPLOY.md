# Deploy RIJO AI landing page to GitHub Pages

## 1. Push to GitHub

Create a **new repository** on [GitHub](https://github.com/new) (e.g. `rijo-ai-landing` or `Lading-page`). Do **not** add a README, .gitignore, or license.

Then run:

```bash
cd "/Users/joseduran/Desktop/Lading page"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.

---

## 2. Turn on GitHub Pages

1. In your repo on GitHub, go to **Settings** → **Pages**.
2. Under **Build and deployment**, set **Source** to **GitHub Actions**.
3. Save. No need to choose a branch — the workflow deploys the built site.

---

## 3. Deploy

Every push to `main` will run the workflow, build the Vite app, and deploy to GitHub Pages.

Your site will be live at:

**https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/**

(First deployment can take 1–2 minutes. Check the **Actions** tab for status.)
