# Nodemailer Setup Guide

This guide will help you set up Nodemailer to enable email functionality in your contact form.

## Step 1: Install Dependencies

```bash
npm install
```

This will install `nodemailer` and its TypeScript types.

## Step 2: Get Gmail App Password

Since we're using Gmail, you need to create an App Password (not your regular password).

### For Gmail:

1. Go to your [Google Account](https://myaccount.google.com/)
2. Click on **Security** in the left sidebar
3. Under "How you sign in to Google", make sure **2-Step Verification** is enabled
   - If not enabled, enable it first
4. Scroll down to **App passwords**
5. Click on **App passwords**
6. Select **Mail** as the app
7. Select **Other (Custom name)** as the device
8. Enter "Portfolio Contact Form" or any name you like
9. Click **Generate**
10. **Copy the 16-character password** (it will look like: `abcd efgh ijkl mnop`)
   - Remove the spaces when using it: `abcdefghijklmnop`
   - **Save this password** - you'll need it for the next step

## Step 3: Configure Environment Variables

Create or update your `.env.local` file in the root directory:

```env
# Email Configuration (Nodemailer)
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your_app_password_here
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
RECIPIENT_EMAIL=mmarclawrence@gmail.com
```

### Explanation of each variable:

- **EMAIL_USER**: Your Gmail address (e.g., `your-email@gmail.com`)
- **EMAIL_PASSWORD**: The 16-character App Password you generated (without spaces)
- **EMAIL_HOST**: `smtp.gmail.com` (for Gmail, already set as default)
- **EMAIL_PORT**: `587` (for Gmail, already set as default)
- **RECIPIENT_EMAIL**: The email address where you want to receive contact form messages (your Gmail)

### Example `.env.local`:

```env
EMAIL_USER=mmarclawrence@gmail.com
EMAIL_PASSWORD=abcdefghijklmnop
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
RECIPIENT_EMAIL=mmarclawrence@gmail.com
```

## Step 4: Restart Your Development Server

After adding the environment variables:

```bash
# Stop your current server (Ctrl+C)
# Then restart it
npm run dev
```

## Step 5: Test the Form

1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email inbox (mmarclawrence@gmail.com)
4. You should receive the email!

## Using Other Email Providers

### Outlook/Hotmail:

```env
EMAIL_USER=your-email@outlook.com
EMAIL_PASSWORD=your_app_password
EMAIL_HOST=smtp-mail.outlook.com
EMAIL_PORT=587
RECIPIENT_EMAIL=your-email@outlook.com
```

### Yahoo Mail:

```env
EMAIL_USER=your-email@yahoo.com
EMAIL_PASSWORD=your_app_password
EMAIL_HOST=smtp.mail.yahoo.com
EMAIL_PORT=587
RECIPIENT_EMAIL=your-email@yahoo.com
```

### Custom SMTP Server:

```env
EMAIL_USER=your-email@yourdomain.com
EMAIL_PASSWORD=your_password
EMAIL_HOST=smtp.yourdomain.com
EMAIL_PORT=587
RECIPIENT_EMAIL=your-email@yourdomain.com
```

## Troubleshooting

### "Email configuration is missing" error
- Make sure `EMAIL_USER` and `EMAIL_PASSWORD` are set in `.env.local`
- Make sure you restarted your dev server after adding them
- Check that there are no extra spaces or quotes around the values

### "Invalid login" or authentication error
- Make sure you're using an **App Password**, not your regular Gmail password
- Verify the App Password doesn't have spaces
- Make sure 2-Step Verification is enabled on your Google Account
- Try generating a new App Password

### Email not sending
- Check the browser console (F12) for error messages
- Check your terminal/console for server-side error messages
- Verify your email credentials are correct
- Make sure your Gmail account allows "Less secure app access" or use App Password

### Port 587 not working
- Try port `465` with `secure: true` (update the code if needed)
- Some networks block port 587, try 465 instead

## Security Notes

- **Never commit `.env.local` to Git** (it's already in `.gitignore`)
- **Never share your App Password** publicly
- For production, set these environment variables in your hosting platform:
  - Vercel: Project Settings → Environment Variables
  - Netlify: Site Settings → Environment Variables
  - Other platforms: Check their documentation

## Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Go to your hosting platform's environment variables settings
2. Add all the email environment variables:
   - `EMAIL_USER`
   - `EMAIL_PASSWORD`
   - `EMAIL_HOST` (optional, defaults to smtp.gmail.com)
   - `EMAIL_PORT` (optional, defaults to 587)
   - `RECIPIENT_EMAIL`
3. Redeploy your application

The API route will automatically use these environment variables in production.

