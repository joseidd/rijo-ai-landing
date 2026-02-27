# Deploy RIJO AI landing page

## 1. Push to GitHub

Create a **new repository** on [GitHub](https://github.com/new) (e.g. `rijo-ai-landing`). Do **not** add a README, .gitignore, or license (the project already has them).

Then run in this folder:

```bash
cd "/Users/joseduran/Desktop/Lading page"
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your GitHub username and repo name.

---

## 2. Deploy with Vercel (recommended)

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub.
2. Click **Add New** → **Project** and import your repository.
3. Vercel will detect **Vite**. Keep:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
4. Click **Deploy**. Your site will be live at `https://your-project.vercel.app`.

---

## 3. Or deploy with Netlify

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub.
2. **Add new site** → **Import an existing project** → choose your repo.
3. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**.
