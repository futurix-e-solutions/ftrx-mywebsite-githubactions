# Netlify Quick Start Guide 🚀

## 3 Ways to Deploy to Netlify

### Option 1: Quick Deploy (Fastest - 5 minutes)

```bash
# 1. Build the project
npm install
npm run build

# 2. Go to https://app.netlify.com/drop

# 3. Drag and drop the folder:
#    dist/my-website/browser

# 4. Done! Your site is live at:
#    https://random-name-123456.netlify.app
```

---

### Option 2: Git Deploy (Recommended - Auto Updates)

```bash
# 1. Push your code to GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/ftrx-website.git
git push -u origin main

# 2. Go to Netlify:
#    https://app.netlify.com/

# 3. Click: "Add new site" → "Import an existing project"

# 4. Connect GitHub → Select your repository

# 5. Netlify auto-detects settings from netlify.toml

# 6. Click "Deploy site"

# 7. Wait 2-5 minutes

# 8. Done! Future pushes auto-deploy!
```

---

### Option 3: CLI Deploy (Developer Friendly)

```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Login
netlify login

# 3. Run deployment script
./deploy-netlify.sh

# Or manually:
npm run build
netlify deploy --prod
```

---

## Files Created for Netlify ✅

- **netlify.toml** - Main configuration file
- **public/_redirects** - SPA routing (Angular routes)
- **public/_headers** - Security headers
- **deploy-netlify.sh** - Automated deployment script

---

## Custom Domain Setup

### After deployment, add your domain:

1. **In Netlify Dashboard:**
   - Site settings → Domain management
   - Add custom domain: `ftrxsoftsolutions.in`

2. **Update DNS at your domain registrar:**

   **Option A: Use Netlify DNS (Easiest)**
   - Copy nameservers from Netlify
   - Update at your registrar (GoDaddy, Namecheap, etc.)

   **Option B: Keep your DNS provider**
   - Add A record: `75.2.60.5`
   - Add CNAME: `www` → `your-site.netlify.app`

3. **Enable HTTPS:**
   - Automatic (1-2 hours after DNS propagation)

---

## Quick Commands

```bash
# Build
npm run build

# Deploy to production
netlify deploy --prod

# Deploy draft/preview
netlify deploy

# Open site in browser
netlify open:site

# Open Netlify dashboard
netlify open:admin

# Check status
netlify status

# View logs
netlify logs
```

---

## Troubleshooting

### Build fails on Netlify?
```bash
# Test build locally first
npm install
npm run build

# Check Node version (needs 18+)
node --version
```

### 404 on page refresh?
- Check `_redirects` file exists in `public/` folder
- Redeploy site

### CSS not loading?
- Clear browser cache
- Check browser console for errors
- Verify `dist/my-website/browser` contains all files

---

## What Happens on Deploy

1. **Netlify receives trigger** (Git push or manual)
2. **Installs dependencies:** `npm install`
3. **Runs build:** `npm run build`
4. **Publishes:** `dist/my-website/browser` folder
5. **Applies:** Redirects, headers, SSL
6. **CDN distribution:** Site available globally
7. **Total time:** 2-5 minutes

---

## Free Tier Limits

✅ **100 GB bandwidth/month**
✅ **300 build minutes/month**
✅ **Unlimited sites**
✅ **Free SSL certificates**
✅ **Continuous deployment**
✅ **CDN included**

**Perfect for FTRX website!**

---

## Post-Deployment Checklist

- [ ] Site loads at Netlify URL
- [ ] All pages accessible
- [ ] Forms work
- [ ] Images display
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] Custom domain configured (if applicable)
- [ ] Submit sitemap to Google Search Console
- [ ] Test with PageSpeed Insights

---

## Support

**Detailed Guide:** See `NETLIFY_DEPLOYMENT_GUIDE.md`

**Netlify Docs:** https://docs.netlify.com/

**Netlify Support:** https://answers.netlify.com/

---

## Next Steps After Deployment

1. **Test your site:**
   - Visit your Netlify URL
   - Test on mobile
   - Test all pages

2. **Configure custom domain:**
   - Add `ftrxsoftsolutions.in`
   - Wait for DNS propagation

3. **Submit to search engines:**
   - Google Search Console
   - Bing Webmaster Tools

4. **Monitor performance:**
   - PageSpeed Insights
   - Netlify Analytics

---

**Ready to deploy? Run:**
```bash
./deploy-netlify.sh
```

Or choose one of the 3 methods above! 🚀

---

**Version:** 1.0
**Last Updated:** 2025-10-30
