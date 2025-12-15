# How to Get Your EmailJS Credentials

Follow these steps to get all three values you need for your `.env.local` file.

## Step 1: Sign Up / Log In to EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click **Sign Up** (or **Log In** if you already have an account)
3. Complete the registration (it's free - 200 emails/month)
4. Verify your email address if prompted

## Step 2: Get Your SERVICE ID

1. In your EmailJS dashboard, click on **Email Services** in the left sidebar
2. Click **Add New Service** button
3. Choose your email provider:
   - **Gmail** (recommended if you use Gmail)
   - **Outlook** (if you use Outlook)
   - Or any other provider you use
4. Follow the setup instructions:
   - For Gmail: You'll need to connect your Gmail account
   - You may need to use an App Password (see Gmail setup below)
5. Once connected, you'll see your service listed
6. **Click on the service name** to view details
7. You'll see a **Service ID** - this is what you need!
   - It looks like: `service_abc123xyz`
   - **Copy this value** - this is your `NEXT_PUBLIC_EMAILJS_SERVICE_ID`

### Gmail Setup (If using Gmail):

If you're using Gmail, you have two options:

**Option A: App Password (Easier)**
1. Go to your Google Account → Security
2. Enable 2-Step Verification (if not already enabled)
3. Go to App Passwords
4. Generate a new app password for "Mail"
5. Use this app password in EmailJS instead of your regular password

**Option B: Gmail API (More Secure)**
1. Follow EmailJS's Gmail API setup guide
2. This requires OAuth setup but is more secure

## Step 3: Get Your TEMPLATE ID

1. In your EmailJS dashboard, click on **Email Templates** in the left sidebar
2. Click **Create New Template** button
3. Fill in the template details:

   **Template Name:** Contact Form Template (or any name you like)
   
   **Subject:** `New Contact Form Message from {{from_name}}`
   
   **Content:**
   ```
   You have received a new message from your portfolio contact form.
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   
   ---
   This email was sent from your portfolio website.
   ```

4. In the template editor, you'll see variables like:
   - `{{from_name}}` - The sender's name
   - `{{from_email}}` - The sender's email
   - `{{message}}` - The message content
   - `{{to_email}}` - Your email (optional)

5. Click **Save** button
6. After saving, you'll see your template listed
7. **Click on the template name** to view details
8. You'll see a **Template ID** - this is what you need!
   - It looks like: `template_abc123xyz`
   - **Copy this value** - this is your `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`

## Step 4: Get Your PUBLIC KEY

1. In your EmailJS dashboard, click on **Account** in the left sidebar
2. Click on **General** tab
3. Scroll down to find **API Keys** section
4. You'll see your **Public Key** (also called API Key)
   - It looks like: `abc123xyz789` (a long string of characters)
   - **Copy this value** - this is your `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Step 5: Add to Your `.env.local` File

1. Open or create `.env.local` file in your project root directory
2. Add these three lines with your actual values:

```env
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_abc123xyz
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_abc123xyz
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=abc123xyz789
```

**Important:** Replace the example values with your actual copied values!

3. Save the file

## Step 6: Restart Your Server

After adding the credentials:

```bash
# Stop your server (Ctrl+C)
# Then restart it
npm run dev
```

## Quick Reference: Where to Find Each Value

| Credential | Where to Find It |
|------------|------------------|
| **SERVICE ID** | Dashboard → Email Services → Click on your service → Service ID |
| **TEMPLATE ID** | Dashboard → Email Templates → Click on your template → Template ID |
| **PUBLIC KEY** | Dashboard → Account → General → API Keys → Public Key |

## Testing

1. Fill out your contact form
2. Submit it
3. Check your email inbox (mmarclawrence@gmail.com)
4. You should receive the email!

## Troubleshooting

### "EmailJS is not configured" error
- Make sure all three values are in your `.env.local` file
- Make sure you restarted your dev server after adding them
- Check that there are no extra spaces or quotes around the values

### Email not sending
- Check the browser console (F12) for error messages
- Verify your EmailJS service is properly connected
- Make sure your template variables match: `{{from_name}}`, `{{from_email}}`, `{{message}}`
- Check your EmailJS dashboard for any error logs

### Gmail connection issues
- Make sure you're using an App Password (not your regular password)
- Verify 2-Step Verification is enabled on your Google Account
- Try disconnecting and reconnecting the Gmail service in EmailJS

