# Shepnet Refrigeration — Cloudflare Pages website

## Replace these placeholders before launch
- `YOUR-DOMAIN.co.za` in `public/index.html`, `public/robots.txt`, and `public/sitemap.xml`
- `G-XXXXXXXXXX` in `public/index.html` if using Google Analytics 4

## Cloudflare deployment
Recommended: GitHub + Cloudflare Pages. Build command: `exit 0`. Build output directory: `public`.

The `/functions/api/lead.js` Pages Function validates the service form and stores leads in KV when a `LEADS` binding is configured. If KV is not configured, the site still opens WhatsApp after a successful form validation, so the customer can send the enquiry directly.

## Conversion tracking
The site tracks these browser events in `dataLayer`:
- `generate_lead`
- `whatsapp_click`
- `phone_click`

Enable Cloudflare Web Analytics in the Pages project. For GA4, replace `G-XXXXXXXXXX` with your real Measurement ID.
