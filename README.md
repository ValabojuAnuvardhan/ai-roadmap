# 🤖 AI Engineer Roadmap

An interactive 6-month roadmap tracker for becoming an AI Engineer.

**Live site:** https://valabojuanuvardhan.github.io/ai-roadmap/

## Features
- ✅ Check off tasks as you complete them
- 📊 Live progress bars per month and overall
- 🔨 Build project highlighted each week

## Deploy your own

### 1. Create GitHub repo
Create a new repo named **`ai-roadmap`** on GitHub.

### 2. Push the code
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/<your-username>/ai-roadmap.git
git push -u origin main
```

### 3. Enable GitHub Pages
- Go to your repo → **Settings** → **Pages**
- Under **Source**, select **GitHub Actions**
- The site deploys automatically on every push to `main`

### 4. If your repo name is different
Edit `vite.config.js` and change:
```js
base: '/your-repo-name/',
```

## Local dev
```bash
npm install
npm run dev
```
