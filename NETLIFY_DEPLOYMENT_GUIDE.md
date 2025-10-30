# Netlify Deployment Guide - FTRX Soft Solutions

## Overview
Complete guide for deploying the FTRX Soft Solutions website to Netlify.

**Platform:** Netlify
**Build Tool:** Angular CLI
**Node Version:** 18.x

---

## Table of Contents
1. [Prerequisites](#prerequisites)
2. [Quick Deploy (Drag & Drop)](#quick-deploy-drag--drop)
3. [Deploy via Git (Recommended)](#deploy-via-git-recommended)
4. [Deploy via Netlify CLI](#deploy-via-netlify-cli)
5. [Custom Domain Setup](#custom-domain-setup)
6. [Post-Deployment Configuration](#post-deployment-configuration)
7. [Troubleshooting](#troubleshooting)

---

## Prerequisites

### 1. Build the Project Locally
First, ensure your project builds successfully:

```bash
# Navigate to project directory
cd /home/mallik/Downloads/ftrx-mywebsite-githubactions-master

# Install dependencies
npm install

# Build for production
npm run build

# Verify build output exists
ls -la dist/my-website/browser
```

✅ **Expected Output:** `dist/my-website/browser` folder with index.html and assets

### 2. Files Required for Netlify

The following files have been created/configured:

- ✅ `netlify.toml` - Main Netlify configuration
- ✅ `public/_redirects` - SPA routing configuration
- ✅ `public/_headers` - Security headers
- ✅ `angular.json` - Build configuration (already configured)

---

## Quick Deploy (Drag & Drop)

### Method 1: Manual Deployment (Fastest for Testing)

1. **Build the Project:**
   ```bash
   npm run build
   ```

2. **Go to Netlify:**
   - Visit: https://app.netlify.com/drop
   - Or sign in to Netlify and click "Add new site" → "Deploy manually"

3. **Drag & Drop:**
   - Drag the `dist/my-website/browser` folder to the Netlify drop zone
   - Wait for deployment (usually 30-60 seconds)

4. **Get Your URL:**
   - Netlify will provide a random URL like: `https://random-name-123456.netlify.app`
   - Your site is now live!

**Pros:**
- ✅ Fastest method
- ✅ No Git required
- ✅ Good for quick testing

**Cons:**
- ❌ Manual updates required
- ❌ No automatic deployments
- ❌ No Git integration

---

## Deploy via Git (Recommended)

### Method 2: Continuous Deployment from Git

#### Step 1: Push Code to Git Repository

If not already done:

```bash
# Initialize Git (if needed)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - Ready for Netlify deployment"

# Create GitHub repository (via GitHub website)
# Then push:
git remote add origin https://github.com/YOUR_USERNAME/ftrx-website.git
git branch -M main
git push -u origin main
```

#### Step 2: Connect to Netlify

1. **Sign in to Netlify:**
   - Go to: https://app.netlify.com/
   - Sign up/Sign in (use GitHub account for easier integration)

2. **Import Project:**
   - Click "Add new site" → "Import an existing project"
   - Choose "Deploy with GitHub" (or GitLab/Bitbucket)
   - Authorize Netlify to access your repositories

3. **Select Repository:**
   - Find and select your repository
   - Click on it

4. **Configure Build Settings:**

   Netlify should auto-detect settings from `netlify.toml`, but verify:

   - **Branch to deploy:** `main` (or `master`)
   - **Build command:** `npm run build`
   - **Publish directory:** `dist/my-website/browser`
   - **Node version:** `18` (set in netlify.toml)

5. **Deploy:**
   - Click "Deploy site"
   - Wait 2-5 minutes for the first build
   - Monitor build logs

6. **Get Your URL:**
   - Netlify provides: `https://your-site-name.netlify.app`
   - Site is now live!

#### Automatic Deployments

Now, every time you push to the main branch:
- Netlify automatically rebuilds and deploys
- Takes 2-5 minutes
- You get a notification when complete

```bash
# Future updates
git add .
git commit -m "Update content"
git push origin main
# Netlify automatically deploys!
```

---

## Deploy via Netlify CLI

### Method 3: Command Line Deployment

#### Step 1: Install Netlify CLI

```bash
# Install globally
npm install -g netlify-cli

# Verify installation
netlify --version
```

#### Step 2: Login to Netlify

```bash
# Login (opens browser)
netlify login

# Authorize in browser
# Return to terminal when done
```

#### Step 3: Initialize and Deploy

```bash
# Navigate to project
cd /home/mallik/Downloads/ftrx-mywebsite-githubactions-master

# Build the project
npm run build

# Initialize Netlify (first time only)
netlify init

# Follow the prompts:
# - Create & configure a new site
# - Choose your team
# - Site name: ftrxsoftsolutions (or your preferred name)
# - Build command: npm run build
# - Directory to deploy: dist/my-website/browser

# Deploy to production
netlify deploy --prod
```

#### Quick Commands

```bash
# Build and deploy in one command
npm run build && netlify deploy --prod

# Deploy draft (preview)
netlify deploy

# Open site in browser
netlify open

# Check site status
netlify status

# View logs
netlify logs
```

---

## Custom Domain Setup

### Option 1: Use Netlify Subdomain (Free)

Your site is automatically available at: `https://your-site-name.netlify.app`

To customize:
1. Go to Site settings → Domain management
2. Click "Options" → "Edit site name"
3. Enter: `ftrxsoftsolutions`
4. Your new URL: `https://ftrxsoftsolutions.netlify.app`

### Option 2: Custom Domain (ftrxsoftsolutions.in)

#### Prerequisites:
- Own the domain `ftrxsoftsolutions.in`
- Access to domain registrar (GoDaddy, Namecheap, etc.)

#### Steps:

1. **Add Domain in Netlify:**
   - Go to Site settings → Domain management
   - Click "Add custom domain"
   - Enter: `ftrxsoftsolutions.in`
   - Click "Verify"
   - Netlify will ask to verify ownership

2. **Configure DNS (Choose One Method):**

   **Method A: Use Netlify DNS (Recommended)**

   1. Netlify provides nameservers like:
      ```
      dns1.p01.nsone.net
      dns2.p01.nsone.net
      dns3.p01.nsone.net
      dns4.p01.nsone.net
      ```

   2. Update nameservers at your domain registrar:
      - Login to your domain registrar
      - Find DNS/Nameserver settings
      - Replace with Netlify nameservers
      - Save (propagation takes 24-48 hours)

   **Method B: Custom DNS (Keep Current Provider)**

   1. Add A record pointing to Netlify:
      ```
      Type: A
      Name: @
      Value: 75.2.60.5
      ```

   2. Add CNAME for www:
      ```
      Type: CNAME
      Name: www
      Value: your-site-name.netlify.app
      ```

3. **Enable HTTPS:**
   - Netlify automatically provisions SSL certificate
   - Usually takes 1-2 hours after DNS propagation
   - Free Let's Encrypt certificate
   - Auto-renewal enabled

4. **Set Primary Domain:**
   - Choose between:
     - `ftrxsoftsolutions.in` (non-www)
     - `www.ftrxsoftsolutions.in` (www)
   - Netlify redirects the other automatically

---

## Post-Deployment Configuration

### 1. Environment Variables (If Needed)

If you have API keys or secrets:

1. Go to Site settings → Environment variables
2. Add variables:
   ```
   Key: GOOGLE_ANALYTICS_ID
   Value: G-XXXXXXXXXX

   Key: API_URL
   Value: https://api.yoursite.com
   ```
3. Redeploy for changes to take effect

### 2. Deploy Notifications

Set up notifications:

1. Go to Site settings → Build & deploy → Deploy notifications
2. Add notification:
   - Email notification on deploy success/failure
   - Slack webhook (if using Slack)
   - Discord webhook (if using Discord)

### 3. Build Hooks

Create webhooks to trigger builds:

1. Go to Site settings → Build & deploy → Build hooks
2. Add build hook
3. Name it (e.g., "Manual trigger")
4. Copy the webhook URL
5. Use it to trigger builds:
   ```bash
   curl -X POST -d {} YOUR_BUILD_HOOK_URL
   ```

### 4. Performance Optimization

Enable additional features:

1. **Asset Optimization:**
   - Site settings → Build & deploy → Post processing
   - Enable: Bundle CSS, Minify CSS, Minify JS
   - Enable: Pretty URLs

2. **Prerendering (If using SSR):**
   - Already configured in `angular.json`
   - Netlify will use prerendered pages

---

## Monitoring & Analytics

### 1. Netlify Analytics

Enable Netlify Analytics:
- Site settings → Analytics
- Enable analytics ($9/month)
- View real-time data

### 2. Google Analytics

Already configured in the website. Verify:
1. Visit your live site
2. Open browser DevTools → Network tab
3. Look for Google Analytics requests

### 3. Performance Monitoring

Monitor Core Web Vitals:
- Netlify Analytics dashboard
- Google Search Console
- PageSpeed Insights

---

## Troubleshooting

### Issue 1: Build Fails

**Error:** `Build script returned non-zero exit code`

**Solutions:**
```bash
# Check build locally first
npm run build

# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build

# Check Node version (should be 18.x)
node --version

# If build works locally but fails on Netlify,
# check netlify.toml has correct Node version
```

### Issue 2: 404 on Page Refresh

**Error:** Refreshing a page shows 404

**Solution:**
- Verify `_redirects` file exists in `dist/my-website/browser`
- Check `public/_redirects` is being copied during build
- Redeploy site

### Issue 3: CSS/JS Not Loading

**Error:** Blank page or unstyled content

**Solutions:**
- Check browser console for errors
- Verify `base href="/"` in index.html
- Check `angular.json` output path
- Clear Netlify cache and redeploy

### Issue 4: Environment Variables Not Working

**Error:** Variables undefined

**Solution:**
- Check variables are set in Netlify UI
- Redeploy site after adding variables
- Ensure you're reading them correctly in code

### Issue 5: SSL Certificate Not Provisioning

**Error:** HTTPS not working

**Solutions:**
- Wait 2-4 hours for DNS propagation
- Check domain DNS settings
- Try "Verify DNS configuration" in Netlify
- Contact Netlify support if still failing

### Issue 6: Deploy Takes Too Long

**Optimization:**
```bash
# Add to netlify.toml
[build]
  command = "npm ci && npm run build"  # Faster than npm install

# Or use caching
[[plugins]]
  package = "netlify-plugin-cache"
```

---

## Deployment Checklist

Before deploying:

- [ ] Build succeeds locally
- [ ] All environment variables configured
- [ ] `netlify.toml` configured correctly
- [ ] `_redirects` file in public folder
- [ ] `_headers` file in public folder
- [ ] Git repository is up to date
- [ ] Removed sensitive data/API keys
- [ ] Tested on multiple browsers
- [ ] Tested on mobile devices

After deploying:

- [ ] Site loads correctly
- [ ] All pages accessible
- [ ] Forms work
- [ ] Images load
- [ ] Navigation works
- [ ] Mobile responsive
- [ ] HTTPS enabled
- [ ] SSL certificate active
- [ ] Custom domain working (if configured)
- [ ] Submit sitemap to Google Search Console
- [ ] Test PageSpeed Insights
- [ ] Check browser console for errors

---

## Useful Netlify Commands

```bash
# CLI Commands
netlify login                    # Login to Netlify
netlify init                     # Initialize site
netlify deploy                   # Deploy draft
netlify deploy --prod            # Deploy to production
netlify open                     # Open site in browser
netlify open:admin               # Open Netlify dashboard
netlify status                   # Show site info
netlify logs                     # Show deploy logs
netlify env:list                 # List environment variables
netlify env:set KEY VALUE        # Set environment variable

# Build Commands
npm run build                    # Build for production
npm run build -- --configuration=development  # Dev build

# Test locally with Netlify Dev
netlify dev                      # Start local dev server
```

---

## Cost & Pricing

### Free Tier (Starter)
- ✅ 100 GB bandwidth/month
- ✅ 300 build minutes/month
- ✅ Unlimited sites
- ✅ Continuous deployment
- ✅ SSL certificate
- ✅ CDN
- ✅ DNS management
- ✅ Perfect for FTRX website

### Pro Tier ($19/month if needed)
- Everything in Free
- 400 GB bandwidth
- More build minutes
- Background functions
- Password protection
- Deploy previews

**For FTRX Soft Solutions:** Free tier is sufficient unless you get very high traffic.

---

## Support & Resources

### Documentation:
- [Netlify Docs](https://docs.netlify.com/)
- [Angular on Netlify](https://docs.netlify.com/integrations/frameworks/angular/)
- [Custom Domain Setup](https://docs.netlify.com/domains-https/custom-domains/)

### Community:
- [Netlify Community Forum](https://answers.netlify.com/)
- [Netlify Status](https://www.netlifystatus.com/)

### Contact:
- Support: support@netlify.com
- Twitter: @Netlify

---

## Next Steps After Deployment

1. **Submit to Search Engines:**
   - Google Search Console
   - Bing Webmaster Tools
   - Submit sitemap.xml

2. **Test Performance:**
   - PageSpeed Insights
   - GTmetrix
   - Lighthouse

3. **Monitor:**
   - Check analytics daily
   - Monitor error logs
   - Check uptime

4. **Optimize:**
   - Compress images
   - Minify assets
   - Enable caching

---

## Quick Reference

### Deployment URLs:

**Netlify Dashboard:** https://app.netlify.com/

**Your Site URLs:**
- Netlify subdomain: `https://ftrxsoftsolutions.netlify.app`
- Custom domain: `https://ftrxsoftsolutions.in`

### Important Files:

```
ftrx-mywebsite-githubactions-master/
├── netlify.toml              # Main config
├── public/
│   ├── _redirects            # Routing rules
│   └── _headers              # Security headers
├── angular.json              # Build config
└── dist/                     # Build output (auto-generated)
    └── my-website/
        └── browser/          # Deploy this folder
```

---

**Document Version:** 1.0
**Last Updated:** 2025-10-30
**For:** FTRX Soft Solutions Website Deployment
