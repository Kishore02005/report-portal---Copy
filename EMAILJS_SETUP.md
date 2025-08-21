# EmailJS Setup Instructions

To enable email functionality for the contact form, follow these steps:

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

## 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

```
Subject: New Contact Form Submission - {{subject}}

From: {{from_name}} ({{from_email}})
Subject: {{subject}}

Message:
{{message}}

---
This message was sent from the Aaruchudar contact form.
```

4. Note down your **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**

## 5. Update Code
Replace the following values in `ContactUsPage.js`:

```javascript
const result = await emailjs.send(
  'YOUR_SERVICE_ID',     // Replace with your Service ID
  'YOUR_TEMPLATE_ID',    // Replace with your Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'your-email@example.com' // Replace with your email
  },
  'YOUR_PUBLIC_KEY'      // Replace with your Public Key
);
```

## 6. Test the Form
1. Fill out the contact form on your website
2. Check your email for the submission
3. Verify all fields are populated correctly

## Security Notes
- EmailJS public key is safe to use in frontend code
- No server-side configuration needed
- Free tier allows 200 emails/month
- Consider upgrading for higher volume

## Troubleshooting
- Check browser console for errors
- Verify all IDs and keys are correct
- Ensure email service is properly configured
- Test with a simple template first