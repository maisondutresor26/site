# Maison du Trésor - API Endpoint for Form Submissions

This API endpoint handles form submissions from the Maison du Trésor website and sends emails using Resend.

## Setup

1. Install dependencies:
```bash
cd api
npm install resend
```

2. Configure environment variables:
   - For local development, update the `.dev.vars` file with your Resend API key
   - For production, set the environment variables in the Cloudflare dashboard

3. Deploy to Cloudflare Workers:
```bash
cd api
npx wrangler deploy
```

## Environment Variables

- `RESEND_API_KEY`: Your Resend API key (get one at https://resend.com)
- `RECIPIENT_EMAIL`: The email address that will receive form submissions

## API Usage

The API accepts POST requests with the following structure:

### Contact Form
```json
{
  "formType": "contact",
  "name": "Full Name",
  "email": "email@example.com",
  "subject": "Message Subject",
  "message": "Message content..."
}
```

### Reservation Form
```json
{
  "formType": "reservation",
  "firstName": "First Name",
  "lastName": "Last Name",
  "email": "email@example.com",
  "phone": "+33123456789",
  "roomType": "suite-jasmin",
  "guests": "2",
  "checkIn": "2025-07-20",
  "checkOut": "2025-07-25",
  "specialRequests": "Any special requests..."
}
```

## Local Development

To test locally:
```bash
cd api
npx wrangler dev
```

This will start a local server that you can use to test your API endpoint.
