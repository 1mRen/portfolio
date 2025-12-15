# EmailJS Setup Guide

This guide will help you set up EmailJS to enable email functionality in your contact form.

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)
3. Verify your email address

## Step 2: Create an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. **Copy the Service ID** - you'll need this later

### For Gmail:
- You'll need to enable "Less secure app access" or use an App Password
- Or use Gmail API with OAuth (more secure)

## Step 3: Create an Email Template

1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This email was sent from your portfolio contact form.
```

4. **Copy the Template ID** - you'll need this later

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (also called API Key)
3. **Copy the Public Key** - you'll need this later

## Step 5: Configure Environment Variables

1. Create or update your `.env.local` file in the root directory:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id_here
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id_here
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key_here
```

2. Replace the placeholder values with your actual EmailJS credentials:
   - `your_service_id_here` → Your EmailJS Service ID
   - `your_template_id_here` → Your EmailJS Template ID
   - `your_public_key_here` → Your EmailJS Public Key

## Step 6: Restart Your Development Server

After adding the environment variables:

```bash
# Stop your current server (Ctrl+C)
# Then restart it
npm run dev
```

## Step 7: Test the Form

1. Fill out the contact form on your portfolio
2. Submit the form
3. Check your email inbox (mmarclawrence@gmail.com)
4. You should receive the email!

## Troubleshooting

### Email not sending?
- Check that all environment variables are set correctly
- Verify your EmailJS service is connected properly
- Check the browser console for any error messages
- Make sure you've restarted your dev server after adding env variables

### Getting "EmailJS is not configured" error?
- Make sure your `.env.local` file exists in the root directory
- Verify all three environment variables are set
- Restart your development server

### Gmail not working?
- You may need to use an App Password instead of your regular password
- Go to Google Account → Security → 2-Step Verification → App Passwords
- Generate an app password and use it in EmailJS

## Alternative: Using Formspree

If you prefer not to use EmailJS, you can use Formspree instead:

1. Sign up at [https://formspree.io/](https://formspree.io/)
2. Create a new form
3. Get your form endpoint
4. Update the `handleSubmit` function to use Formspree's API

## Security Note

- Never commit your `.env.local` file to Git (it's already in `.gitignore`)
- The `NEXT_PUBLIC_` prefix makes these variables accessible in the browser
- For production, set these in your hosting platform's environment variables

