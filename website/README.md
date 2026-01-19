# Villa Bonmont Terres Noves - Website Documentation

## Project Overview

This is a professional, luxury vacation rental website for Villa Bonmont Terres Noves, a 600 m² private villa on the Costa Dorada, Spain. The site is built with **HTML5 semantic markup**, **responsive CSS**, and **minimal JavaScript** for maximum performance and accessibility.

**Key Features:**
- 📱 100% responsive design (mobile-first approach)
- ⚡ Fast loading times with optimized images
- ♿ WCAG 2.1 accessibility compliance
- 🔒 GDPR-compliant cookie management
- 🔐 HTTPS/SSL ready
- 📊 SEO optimized
- 🎨 Luxury modern design where images speak for themselves
- ⚙️ Zero external dependencies (no frameworks required)

---

## Project Structure

```
website/
├── index.html                 # Main home page
├── css/
│   └── styles.css            # Single responsive stylesheet (minified ready)
├── js/
│   ├── main.js              # Core functionality (navigation, modal, analytics)
│   └── cookies.js           # GDPR-compliant cookie consent manager
├── pages/
│   ├── interiors.html       # Interior spaces showcase
│   ├── about.html           # About Idoia (host)
│   ├── faq.html             # Frequently asked questions
│   ├── contact.html         # Contact form
│   ├── privacy.html         # Privacy policy (GDPR)
│   ├── cookies.html         # Cookie policy
│   └── legal.html           # Legal notice / Terms
├── images/
│   ├── og-image.jpg         # Social media preview
│   ├── hero-poster.jpg      # Video poster
│   ├── identity-villa.{avif,webp,jpg}
│   ├── salon.{avif,webp,jpg}
│   ├── kitchen.{avif,webp,jpg}
│   ├── bedroom.{avif,webp,jpg}
│   ├── bathroom.{avif,webp,jpg}
│   ├── pool-day.{avif,webp,jpg}
│   ├── pool-night.{avif,webp,jpg}
│   ├── garden.{avif,webp,jpg}
│   ├── comfort-interior.{avif,webp,jpg}
│   ├── gathering.{avif,webp,jpg}
│   ├── golf.{avif,webp,jpg}
│   ├── beach.{avif,webp,jpg}
│   ├── culture.{avif,webp,jpg}
│   ├── gastronomy.{avif,webp,jpg}
│   └── idoia.{avif,webp,jpg}
├── sitemap.xml              # SEO sitemap
├── robots.txt               # SEO robots configuration
└── README.md               # This file
```

---

## Features & Compliance

### ✅ HTML5 Semantic Structure
- Proper use of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- One `<h1>` per page
- Correct heading hierarchy (H2–H6)
- Schema.org structured data (JSON-LD)
- Open Graph meta tags for social sharing

### ✅ Responsive Design
- Mobile-first CSS architecture
- Tablet breakpoint: 768px
- Desktop breakpoint: 1024px
- Large desktop: 1440px
- Flexible images with `<picture>` elements and srcset

### ✅ Performance
- Minified CSS ready
- No JavaScript dependencies (jQuery, frameworks)
- Image optimization (AVIF, WebP, fallback JPG)
- Lazy loading support for images
- Critical CSS inline-ready

### ✅ Accessibility (WCAG 2.1 AA)
- Skip-to-main-content link
- Proper ARIA labels and roles
- Color contrast ratios ≥ 4.5:1
- Keyboard navigation support
- Reduced motion media query support
- Form labels and error handling

### ✅ SEO Optimization
- Unique title tags (≤ 60 characters)
- Meta descriptions (≤ 155 characters)
- Clean, semantic HTML
- Canonical URLs
- Sitemap.xml with image metadata
- Robots.txt properly configured
- Internal linking strategy
- Open Graph tags for social media
- Schema.org structured data (VacationRental type)

### ✅ Security & Privacy (GDPR Compliant)
- HTTPS/SSL ready (server configuration required)
- Cookie consent banner (opt-in for non-essential)
- Privacy policy page
- Cookie policy page
- Legal notice/Terms page
- No third-party analytics by default
- Data minimization principles applied

### ✅ Code Quality
- Clean, maintainable CSS
- Modular JavaScript (no jQuery)
- Clear file organization
- Documented code
- Scalable architecture

---

## How to Use

### 1. **Setup**

Clone or download the website files:

```bash
git clone <repository-url>
cd website
```

### 2. **Local Development**

Use a local server (required for HTTPS/cookies to work properly):

**Python 3:**
```bash
python -m http.server 8000
```

**Python 2:**
```bash
python -m SimpleHTTPServer 8000
```

**Node.js (http-server):**
```bash
npx http-server
```

Then visit: `http://localhost:8000`

### 3. **Deployment to Production**

#### Prerequisites:
- **HTTPS/SSL Certificate** (required for cookies and security)
- **Web Server** (Apache, Nginx, Node.js, etc.)
- **Domain**: `villabonmont.com`

#### Deployment Steps:

1. **Upload files** to your web hosting via FTP/SFTP or Git
2. **Verify HTTPS** is enabled on your domain
3. **Update configuration files** (see below)
4. **Test all pages** and functionality

#### Configuration Updates:

**In `index.html` and all pages:**
- Update placeholder phone numbers: `+34-XXX-XXX-XXX`
- Update email addresses: `privacy@villabonmont.com`, `legal@villabonmont.com`, `info@villabonmont.com`
- Update canonical URLs: `https://villabonmont.com/`
- Replace `[Spanish NIF/NIE]` with actual tax ID
- Add business registration number

**In `js/cookies.js`:**
- Replace `G-XXXXXXXXXX` with your Google Analytics 4 ID
- (Optional) Add other third-party scripts

**In `css/styles.css`:**
- Can be minified for production (optional)

**In `sitemap.xml`:**
- Update last modification dates
- Add any new pages
- Update image URLs to absolute paths

---

## HTTPS/SSL Setup

### Important: HTTPS is Required for:
- Cookie functionality
- Secure form submissions
- SEO rankings
- User trust

### How to Enable HTTPS:

1. **Buy SSL Certificate** (or use free Let's Encrypt)
2. **Install on server** (provider documentation)
3. **Redirect HTTP → HTTPS** in `.htaccess` or server config

**Apache `.htaccess` example:**
```apache
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>
```

**Nginx example:**
```nginx
server {
    listen 80;
    server_name villabonmont.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name villabonmont.com;
    ssl_certificate /path/to/cert.crt;
    ssl_certificate_key /path/to/key.key;
}
```

---

## Analytics Setup (GDPR Compliant)

### Google Analytics 4:

1. **Create GA4 property** at `analytics.google.com`
2. **Get Measurement ID** (format: `G-XXXXXXXXXX`)
3. **Update in `js/cookies.js`:**
   ```javascript
   const analyticsId = 'G-XXXXXXXXXX'; // Your ID here
   ```

**Important:** Analytics only loads **after user consent**

### Privacy Settings (Already Configured):
- IP anonymization enabled
- No cookie consent = no analytics
- Data retention: 14 months
- No personal data collection

---

## Images & Media

### Adding Images:

1. **Prepare in multiple formats:**
   - AVIF (best compression)
   - WebP (wide support)
   - JPG/PNG (fallback)

2. **Tools for conversion:**
   - ImageMagick: `convert image.jpg -quality 80 image.webp`
   - Online converters: CloudConvert, Cloudinary
   - Online AVIF converter

3. **Update HTML:**
   ```html
   <picture>
       <source srcset="image.avif" type="image/avif">
       <source srcset="image.webp" type="image/webp">
       <img src="image.jpg" alt="Descriptive text">
   </picture>
   ```

### Image Optimization Tips:
- Keep file sizes under 500KB
- Use descriptive filenames (SEO)
- Always add ALT text (accessibility)
- Compress before uploading
- Use responsive images (srcset)

---

## Customization Guide

### Change Colors:

Edit CSS variables in `css/styles.css`:

```css
:root {
    --color-primary: #1a1a1a;        /* Dark text/buttons */
    --color-secondary: #c9a866;      /* Gold accent */
    --color-accent: #f5f5f5;         /* Light background */
    --color-text: #2c2c2c;           /* Body text */
}
```

### Change Fonts:

Update in `index.html` head:

```html
<link href="https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700&display=swap" rel="stylesheet">
```

Then update in `css/styles.css`:

```css
:root {
    --font-serif: 'YourFont', serif;
    --font-sans: 'YourFont', sans-serif;
}
```

### Add New Pages:

1. Create `pages/newpage.html`
2. Copy structure from `pages/privacy.html`
3. Update title, meta description
4. Add link to nav menu in `index.html`
5. Update `sitemap.xml`
6. Update `robots.txt` if needed

### Update Content:

All main content is in `index.html` and `pages/` files. Edit directly in any text editor.

---

## Testing Checklist

### Before Launching:

- [ ] All links work (internal and external)
- [ ] All images load properly
- [ ] Mobile menu toggles correctly
- [ ] Modal video opens/closes
- [ ] Form submissions work
- [ ] Cookie banner appears on first visit
- [ ] Analytics fires after consent
- [ ] All pages are accessible via keyboard
- [ ] HTTPS works properly
- [ ] Sitemap is XML valid
- [ ] Robots.txt is properly configured
- [ ] Social media preview shows correct og: tags

### Tools to Use:

- **Google Lighthouse**: Built into Chrome DevTools
- **PageSpeed Insights**: https://pagespeed.web.dev/
- **Wave Accessibility**: https://wave.webaim.org/
- **XML Validator**: https://www.xml-sitemaps.com/
- **Mobile Test**: https://search.google.com/test/mobile-friendly
- **SEO Audit**: https://www.screaming-frog.co.uk/

---

## Browser Compatibility

**Desktop:**
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+

**Mobile:**
- iOS Safari 14+
- Chrome Android 90+
- Samsung Internet 14+

**Graceful Degradation:**
- Older browsers will show JPG images instead of AVIF/WebP
- Missing CSS features fallback to standard properties
- JavaScript features degrade gracefully if JS disabled

---

## Performance Optimization

### Further Minification:

**CSS Minifier:**
```bash
npx cssnano input.css -o output.min.css
```

**JavaScript Minifier:**
```bash
npx terser input.js -o output.min.js
```

### Server-Side Optimization:

1. Enable gzip compression
2. Set browser cache headers
3. Use CDN for images
4. Enable HTTP/2

**Apache `.htaccess`:**
```apache
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
</IfModule>
```

---

## Maintenance

### Regular Tasks:

- **Monthly**: Check analytics, update content if needed
- **Quarterly**: Review and update privacy/legal pages if necessary
- **Yearly**: Audit links, test forms, update policies if needed
- **As Needed**: Fix broken images, update rates or availability

### Updating Content:

1. Edit the relevant HTML file
2. Test locally
3. Upload to server
4. Clear browser cache (Ctrl+Shift+Del)
5. Verify changes live

---

## Support & Resources

### Documentation Links:
- **HTML Semantics**: https://developer.mozilla.org/en-US/docs/Glossary/semantics
- **Responsive Design**: https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design
- **WCAG Accessibility**: https://www.w3.org/WAI/WCAG21/quickref/
- **Schema.org**: https://schema.org/
- **Google SEO Guide**: https://developers.google.com/search/docs

### Common Issues:

**Cookies not showing:**
- Ensure HTTPS is enabled
- Check browser privacy settings
- Clear browser cache and try again

**Images not loading:**
- Verify file paths are correct
- Check file permissions (755 for files)
- Ensure images are in `/images/` directory

**Mobile menu not working:**
- Ensure `js/main.js` is loaded
- Check browser console for errors
- Verify JavaScript is enabled

---

## Contact & Support

For questions about this website:

- **Email**: info@villabonmont.com
- **Phone**: +34-XXX-XXX-XXX
- **Legal**: legal@villabonmont.com
- **Privacy**: privacy@villabonmont.com

---

## License & Copyright

© 2026 Villa Bonmont Terres Noves. All rights reserved.

Developed with ❤️ for luxury vacation rental marketing.

**Created**: January 19, 2026
**Last Updated**: January 19, 2026
**Version**: 1.0
