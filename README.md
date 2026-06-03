# viniAI Static Website

A lightweight static website for **viniAI**, a digital growth studio for local businesses.

## Files

- `index.html` - home page
- `services.html` - service-wise pricing
- `portfolio.html` - sample local business projects
- `contact.html` - WhatsApp-first contact page
- `css/style.css` - shared design system and responsive layout
- `js/main.js` - WhatsApp links, contact form, mobile menu, reveal animation
- `assets/` - logo and image assets

## Edit Contact Links

The WhatsApp number and Instagram placeholder are in `js/main.js`.

```js
const WHATSAPP_NUMBER = "917620115788";
const INSTAGRAM_URL = "https://www.instagram.com/your-viniai-profile";
```

Update `INSTAGRAM_URL` when the final profile is ready.

## Deploy

This site has no build step. Upload the folder to Netlify, Vercel, Replit, or any static hosting service.

For local preview, open `index.html` directly in a browser or serve the folder with a simple static server.
