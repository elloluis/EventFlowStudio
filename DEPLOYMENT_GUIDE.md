# EventFlowStudio - Vercel Deployment Guide

## Prerequisites
✅ GitHub account (you have this)
✅ Vercel account (create at vercel.com)
✅ Your Squarespace domain

## Step 1: Push Code to GitHub

### Option A: Using GitHub Desktop (Easiest)
1. Download GitHub Desktop: https://desktop.github.com/
2. Sign in with your GitHub account
3. Click "File" → "Add Local Repository"
4. Select the `/app/frontend` folder
5. Create a new repository named "eventflowstudio"
6. Add a commit message: "Initial commit"
7. Click "Publish repository"
8. Make it Public (Vercel free tier requires public repos)

### Option B: Using Command Line
```bash
cd /app/frontend
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/eventflowstudio.git
git push -u origin main
```

## Step 2: Deploy to Vercel

1. **Go to Vercel:** https://vercel.com
2. **Sign in** with your GitHub account
3. **Click:** "Add New" → "Project"
4. **Import your repository:**
   - You'll see your GitHub repositories
   - Find "eventflowstudio"
   - Click "Import"

5. **Configure Project:**
   - Framework Preset: **Create React App** (should auto-detect)
   - Root Directory: `./` (leave as default)
   - Build Command: `yarn build` (should auto-fill)
   - Output Directory: `build` (should auto-fill)
   - Install Command: `yarn install` (should auto-fill)

6. **Click:** "Deploy"

7. **Wait 2-3 minutes** for deployment to complete

8. **Done!** You'll get a URL like: `https://eventflowstudio.vercel.app`

## Step 3: Connect Your Squarespace Domain

### In Vercel:
1. Go to your project dashboard
2. Click "Settings" → "Domains"
3. Enter your domain (e.g., `eventflowstudio.com`)
4. Vercel will give you DNS records to add

### In Squarespace:
1. Login to Squarespace
2. Go to **Settings** → **Domains**
3. Click on your domain
4. Go to **DNS Settings** or **Advanced Settings**
5. Add the DNS records Vercel provided:

**Typical records:**
```
Type: A
Name: @
Value: 76.76.21.21 (Vercel's IP)

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

6. **Save** and wait 24-48 hours for DNS propagation (usually faster, often just 1-2 hours)

## Step 4: Verify

1. Visit your domain: `https://yourdomain.com`
2. You should see your EventFlowStudio website!

## Troubleshooting

### Build Fails?
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Contact me if you need help

### Domain Not Working?
- DNS can take up to 48 hours to propagate
- Check DNS settings are correct in Squarespace
- Use https://dnschecker.org to verify propagation

### Need to Update the Website?
1. Make changes to your code
2. Push to GitHub (using GitHub Desktop or command line)
3. Vercel automatically deploys the new version!

## Important Files

- `vercel.json` - Vercel configuration (already created)
- `package.json` - Dependencies and build scripts
- `.gitignore` - Files to exclude from GitHub

## Support

If you run into any issues:
1. Check Vercel's documentation: https://vercel.com/docs
2. Vercel has excellent live chat support
3. Let me know and I can help troubleshoot!

## Estimated Timeline

- GitHub setup: 5 minutes
- Vercel deployment: 5 minutes
- Domain connection: 5 minutes
- DNS propagation: 1-48 hours

**Total active time: ~15 minutes**

---

## Quick Checklist

- [ ] Create GitHub account (if needed)
- [ ] Create Vercel account
- [ ] Push code to GitHub
- [ ] Import project in Vercel
- [ ] Deploy
- [ ] Add custom domain in Vercel
- [ ] Update DNS in Squarespace
- [ ] Wait for DNS propagation
- [ ] Celebrate! 🎉
