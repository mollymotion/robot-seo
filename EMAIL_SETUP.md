# Email Setup for Contact Form (Using Resend)

The contact form uses Resend to send evaluation requests to evaluation@robot-seo.com. This is much simpler than traditional SMTP!

## Quick Setup (2 minutes)

1. **Create a Resend account:**
   - Go to [https://resend.com](https://resend.com)
   - Sign up for free (100 emails/month)

2. **Get your API key:**
   - In Resend dashboard, go to [API Keys](https://resend.com/api-keys) 
   - Create a new API key
   - Copy the key

3. **Add it to your environment file:**
   ```bash
   # In .env.local
   RESEND_API_KEY=re_your_actual_key_here
   ```

4. **Restart your development server:**
   ```bash
   npm run dev
   ```

## Domain Setup (Optional for Production)

For production, you'll want to verify your domain (robot-seo.com) with Resend:
- In Resend dashboard, go to Domains
- Add and verify robot-seo.com
- This allows emails to come from `noreply@robot-seo.com` instead of Resend's domain

## How It Works

- Form submissions are sent to `/api/contact`
- The API route uses Resend to email `evaluation@robot-seo.com`
- Users get confirmation when the email is sent successfully
- Failed submissions show an error message with fallback to direct email

That's it! Much simpler than traditional SMTP setup.