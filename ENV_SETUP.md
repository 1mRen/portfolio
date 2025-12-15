# Environment Variables Setup for Flowise Chatbot

## Create `.env.local` file

Create a file named `.env.local` in the root directory of your project (same level as `package.json`).

## Required Configuration

Add the following environment variables to `.env.local`:

```env
# Flowise API URL
# Format: http://your-flowise-url/api/v1/prediction/YOUR_FLOW_ID
FLOWISE_API_URL=http://localhost:3000/api/v1/prediction/YOUR_FLOW_ID

# Optional: API Key (only if your Flowise instance requires authentication)
FLOWISE_API_KEY=
```

## How to Get Your Flow ID

1. **Start your Flowise instance** (if running locally):
   ```bash
   npx flowise start
   ```
   This typically runs on `http://localhost:3000`

2. **Open Flowise in your browser**:
   - Go to `http://localhost:3000` (or your Flowise URL)

3. **Create or open your chatbot flow**:
   - Create a new flow or open an existing one
   - Build your chatbot using the drag-and-drop interface

4. **Get the Flow ID**:
   - Method 1: Look at the URL when viewing your flow
     - Example: `http://localhost:3000/flow/abc123xyz`
     - The Flow ID is `abc123xyz`
   
   - Method 2: Click on your flow → Settings/API
     - The Flow ID will be displayed there

5. **Replace `YOUR_FLOW_ID` in `.env.local`**:
   ```env
   FLOWISE_API_URL=http://localhost:3000/api/v1/prediction/abc123xyz
   ```

## Examples

### Local Flowise Instance
```env
FLOWISE_API_URL=http://localhost:3000/api/v1/prediction/abc123xyz
FLOWISE_API_KEY=
```

### Hosted Flowise Instance (e.g., on a server)
```env
FLOWISE_API_URL=https://flowise.yourdomain.com/api/v1/prediction/abc123xyz
FLOWISE_API_KEY=your_secret_api_key_here
```

### Flowise with Authentication
If your Flowise instance has authentication enabled:
```env
FLOWISE_API_URL=http://localhost:3000/api/v1/prediction/abc123xyz
FLOWISE_API_KEY=your_flowise_api_key
```

## Important Notes

- **Never commit `.env.local` to git** - it's already in `.gitignore`
- **Restart your Next.js server** after creating/updating `.env.local`
- The Flow ID is specific to each flow you create in Flowise
- If you create a new flow, you'll need to update the Flow ID in `.env.local`

## Testing

After setting up your `.env.local`:
1. Restart your Next.js dev server: `npm run dev`
2. Open your portfolio website
3. Look for the chat button in the bottom-right corner
4. Click it and try sending a message to test the connection

## Troubleshooting

- **"Flowise API URL is not configured"**: Make sure `FLOWISE_API_URL` is set in `.env.local`
- **CORS errors**: The API route should handle this, but make sure your Flowise instance allows requests
- **401/403 errors**: Check if you need to set `FLOWISE_API_KEY` and that it's correct
- **404 errors**: Verify your Flow ID is correct and the flow is deployed in Flowise


