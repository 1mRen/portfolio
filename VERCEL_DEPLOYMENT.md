# Deploying to Vercel - Step by Step Guide

## Method 1: Deploy via Vercel Dashboard (Recommended)

### Step 1: Push Your Code to GitHub

1. **Initialize Git** (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit - Portfolio website"
   ```

2. **Create a GitHub repository**:
   - Go to [GitHub](https://github.com/new)
   - Create a new repository (e.g., `portfolio`)
   - Don't initialize with README, .gitignore, or license

3. **Push your code**:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 2: Deploy to Vercel

1. **Go to Vercel**:
   - Visit [https://vercel.com](https://vercel.com)
   - Sign up or log in (you can use your GitHub account)

2. **Import your project**:
   - Click "Add New..." → "Project"
   - Import your GitHub repository
   - Select the repository you just created

3. **Configure your project**:
   - **Framework Preset**: Next.js (should be auto-detected)
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Environment Variables** (if needed):
   - If you're using Nodemailer, add these:
     - `EMAIL_USER`
     - `EMAIL_PASSWORD`
     - `EMAIL_HOST` (optional, defaults to smtp.gmail.com)
     - `EMAIL_PORT` (optional, defaults to 587)
     - `RECIPIENT_EMAIL`

5. **Deploy**:
   - Click "Deploy"
   - Wait for the build to complete
   - Your site will be live at `https://your-project.vercel.app`

## Method 2: Deploy via Vercel CLI

### Step 1: Install Vercel CLI

```bash
npm install -g vercel
```

### Step 2: Login to Vercel

```bash
vercel login
```

### Step 3: Deploy

```bash
vercel
```

Follow the prompts:
- Set up and deploy? **Yes**
- Which scope? Select your account
- Link to existing project? **No** (for first deployment)
- Project name? Enter a name (e.g., `portfolio`)
- Directory? `./` (press Enter)
- Override settings? **No**

### Step 4: Deploy to Production

```bash
vercel --prod
```

## Important Notes

### Environment Variables

If you're using Nodemailer for the contact form, make sure to add environment variables in Vercel:

1. Go to your project on Vercel
2. Click **Settings** → **Environment Variables**
3. Add:
   - `EMAIL_USER` = your-email@gmail.com
   - `EMAIL_PASSWORD` = your-app-password
   - `EMAIL_HOST` = smtp.gmail.com (optional)
   - `EMAIL_PORT` = 587 (optional)
   - `RECIPIENT_EMAIL` = mmarclawrence@gmail.com

### Custom Domain (Optional)

1. Go to your project on Vercel
2. Click **Settings** → **Domains**
3. Add your custom domain
4. Follow the DNS configuration instructions

### Build Settings

Vercel should auto-detect Next.js, but if needed:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`

## Troubleshooting

### Build Fails
- Check the build logs in Vercel dashboard
- Make sure all dependencies are in `package.json`
- Verify there are no TypeScript errors

### Environment Variables Not Working
- Make sure variables are added in Vercel dashboard
- Redeploy after adding variables
- Check variable names match exactly (case-sensitive)

### Images Not Loading
- Make sure images are in the `public` folder
- Use `/image-name.jpg` (not `./public/image-name.jpg`)

## Quick Deploy Checklist

- [ ] Code pushed to GitHub
- [ ] Vercel account created
- [ ] Project imported from GitHub
- [ ] Environment variables added (if using Nodemailer)
- [ ] Build successful
- [ ] Site is live and accessible

Your portfolio should now be live on Vercel! 🚀

