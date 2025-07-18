# EmailJS Setup Instructions

## 1. Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Connect Email Service
1. Go to **Email Services** in your EmailJS dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your `narenvaithiyaa@gmail.com` account
5. Note down your **Service ID** (something like `service_xxxxxxx`)

## 3. Create Email Template
1. Go to **Email Templates** in your EmailJS dashboard
2. Click **Create New Template**
3. Use this template content:

**Template Name:** `contact_form`

**Subject:** `New Contact Form Message from {{from_name}}`

**Content Type:** Select "HTML" instead of "Text"

**HTML Content:**
```html
<div style="font-family: system-ui, sans-serif, Arial; font-size: 12px">
  <div>A message by {{from_name}} has been received. Kindly respond at your earliest convenience.</div>
  <div
    style="
      margin-top: 20px;
      padding: 15px 0;
      border-width: 1px 0;
      border-style: dashed;
      border-color: lightgrey;
    "
  >
    <table role="presentation">
      <tr>
        <td style="vertical-align: top">
          <div
            style="
              padding: 6px 10px;
              margin: 0 10px;
              background-color: aliceblue;
              border-radius: 5px;
              font-size: 26px;
            "
            role="img"
          >
            👤
          </div>
        </td>
        <td style="vertical-align: top">
          <div style="color: #2c3e50; font-size: 16px">
            <strong>{{from_name}}</strong>
          </div>
          <div style="color: #cccccc; font-size: 13px">{{from_email}}</div>
          <p style="font-size: 16px">{{message}}</p>
          <p style="font-size: 14px; color: #666; font-style: italic; margin-top: 15px; padding-top: 10px; border-top: 1px dotted #ddd;">
            My email is {{from_email}}
          </p>
        </td>
      </tr>
    </table>
  </div>
  <div style="margin-top: 20px; padding-top: 15px; border-top: 1px solid #eee; color: #666; font-size: 11px;">
    <p>📧 Sent from your portfolio contact form at narenvaithiyaa.dev</p>
    <p>⏰ Received on {{current_date}}</p>
  </div>
</div>
```

**Template Variables to Set:**
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email address  
- `{{message}}` - The message content
- `{{current_date}}` - Will be populated automatically by EmailJS

4. Note down your **Template ID** (something like `template_xxxxxxx`)

## 4. Get Public Key
1. Go to **Account** → **General**
2. Find your **Public Key** (something like `xxxxxxxxxxxxxxxxxx`)

## 5. Update Your Code
Replace the placeholders in `script.js`:

```javascript
// Replace these values in script.js:
emailjs.init('YOUR_PUBLIC_KEY'); // Replace with your actual public key
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData) // Replace with actual IDs
```

## 6. Test the Form
1. Open your website
2. Fill out the contact form
3. Submit the form
4. Check your inbox for the email

## Example Configuration
After setup, your code should look like:
```javascript
emailjs.init('abc123def456ghi789'); // Your public key
emailjs.send('service_gmail', 'template_contact', formData) // Your service and template IDs
```

## Troubleshooting
- Make sure all IDs are correct
- Check browser console for errors
- Verify your email service is properly connected
- Ensure your template variables match the form field names

## Free Plan Limits
- 200 emails per month
- No credit card required
- Perfect for portfolio websites
