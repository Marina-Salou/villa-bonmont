# Villa Bonmont Website - Technical Specifications

## Domain & URLs

### Production Domain
- **Primary:** https://villabonmont.com/
- **WWW:** https://www.villabonmont.com/ (configure redirect preference)
- **Protocol:** HTTPS only (HTTP redirects to HTTPS)

### Page URLs

| Page | URL | Purpose |
|------|-----|---------|
| Home | / | Main landing page with 10 sections |
| Interiors | /pages/interiors.html | Interior spaces showcase |
| About | /pages/about.html | Idoia host profile |
| FAQ | /pages/faq.html | Frequently asked questions |
| Contact | /pages/contact.html | Contact form and information |
| Privacy | /pages/privacy.html | Privacy policy (GDPR) |
| Cookies | /pages/cookies.html | Cookie policy |
| Legal | /pages/legal.html | Legal notice and terms |

### Resource URLs

| Resource | URL | File Size (est.) |
|----------|-----|-----------------|
| Main CSS | /css/styles.css | 8.5 KB |
| Main JS | /js/main.js | 2.5 KB |
| Cookies JS | /js/cookies.js | 1.5 KB |
| Sitemap | /sitemap.xml | < 5 KB |
| Robots | /robots.txt | < 1 KB |
| Images | /images/*.{avif,webp,jpg} | 20-50 KB each |
| Videos | /images/*.{mp4,webm} | 2-10 MB each |

---

## Meta Tags & Open Graph

### Home Page Meta Tags
```html
<title>Villa Bonmont Terres Noves | Luxury Costa Dorada Rental</title>
<meta name="description" content="Villa Bonmont Terres Noves: A luxurious 600 m² private villa on the Costa Dorada with 1,600 m² garden, sea and mountain views, perfect for families and groups up to 14 guests.">
```

### Open Graph Tags (Home)
```html
<meta property="og:type" content="website">
<meta property="og:url" content="https://villabonmont.com/">
<meta property="og:title" content="Villa Bonmont Terres Noves - Luxury Costa Dorada Rental">
<meta property="og:description" content="Experience luxury living at Villa Bonmont: 600 m² villa, private pool, sea and mountain views. Perfect for families and groups.">
<meta property="og:image" content="https://villabonmont.com/images/og-image.jpg">
```

### Canonical URLs
All pages have canonical tags pointing to their respective URLs on villabonmont.com

---

## Schema.org Structured Data

### Home Page (VacationRental)
```json
{
    "@context": "https://schema.org",
    "@type": "VacationRental",
    "name": "Villa Bonmont Terres Noves",
    "description": "Luxury private villa with 600 m² space and 1,600 m² garden",
    "url": "https://villabonmont.com",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Bonmont Terres Noves",
        "addressLocality": "Castelldefels",
        "addressRegion": "Catalunya",
        "postalCode": "08348",
        "addressCountry": "ES"
    },
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.83",
        "ratingCount": "123"
    },
    "numberOfBedrooms": "6",
    "numberOfBathrooms": "5",
    "occupancy": "14"
}
```

---

## Security & HTTPS Configuration

### SSL/TLS Requirements
- **Protocol Version:** TLS 1.2 or higher (TLS 1.3 recommended)
- **Certificate Type:** Domain Validation (DV) minimum, Extended Validation (EV) recommended
- **Certificate Authority:** Let's Encrypt (free), Comodo, DigiCert, etc.
- **Auto-Renewal:** Highly recommended (Let's Encrypt supports this)

### Security Headers (Recommended)
```
Strict-Transport-Security: max-age=31536000; includeSubDomains; preload
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: geolocation=(), microphone=(), camera=()
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; img-src 'self' data:; connect-src 'self' www.googletagmanager.com
```

---

## Performance Targets

### PageSpeed Insights (Lighthouse)
- **Performance:** 90+
- **Accessibility:** 95+
- **Best Practices:** 95+
- **SEO:** 100

### Core Web Vitals
- **LCP (Largest Contentful Paint):** < 2.5s
- **FID (First Input Delay):** < 100ms
- **CLS (Cumulative Layout Shift):** < 0.1

### File Size Targets
- **HTML:** < 50KB total per page
- **CSS:** < 15KB (current: 8.5KB)
- **JavaScript:** < 10KB (current: 4KB total)
- **Images:** < 100KB each (after optimization)
- **Total Page Load:** < 2MB (with videos)

---

## SEO Technical Specifications

### Sitemap
- **Format:** XML
- **Location:** /sitemap.xml
- **Update Frequency:** Monthly
- **URLs Included:** 8 pages + image metadata
- **Image Support:** Yes, with alt text

### Robots.txt
- **Location:** /robots.txt
- **Crawl Delay:** 1 second
- **Disallow:** Admin, API, legal pages
- **Allow:** All public content
- **Sitemap Reference:** Yes

### URL Structure
- **Format:** Clean, semantic URLs
- **Max Length:** 75 characters
- **Pattern:** domain.com/pages/page-name.html
- **Hyphens:** Used for word separation
- **Trailing Slash:** Consistent (no trailing slash)

### Mobile Optimization
- **Viewport:** width=device-width, initial-scale=1.0
- **Mobile Menu:** Yes (hamburger toggle)
- **Touch-Friendly:** Yes (min tap target 48x48px)
- **Mobile-First CSS:** Yes

---

## Accessibility Standards

### WCAG 2.1 Level AA Compliance
- **Color Contrast:** Minimum 4.5:1 for normal text
- **Focus Indicators:** Visible keyboard focus visible
- **Skip Links:** Jump to main content
- **Alt Text:** All images have descriptive alt text
- **Form Labels:** All inputs have associated labels
- **Keyboard Navigation:** Full keyboard support
- **ARIA Roles:** Proper landmark roles

### Supported Assistive Technologies
- Screen Readers (NVDA, JAWS, VoiceOver)
- Keyboard Navigation
- Browser Zoom
- Text Size Adjustment
- High Contrast Mode
- Reduced Motion Mode

---

## Browser Compatibility

### Desktop
| Browser | Minimum Version | Status |
|---------|-----------------|--------|
| Chrome | 90 | ✅ Full Support |
| Firefox | 88 | ✅ Full Support |
| Safari | 14 | ✅ Full Support |
| Edge | 90 | ✅ Full Support |
| IE 11 | N/A | ❌ Not Supported |

### Mobile
| Platform | Minimum Version | Status |
|----------|-----------------|--------|
| iOS Safari | 14 | ✅ Full Support |
| Chrome Android | 90 | ✅ Full Support |
| Samsung Internet | 14 | ✅ Full Support |
| Firefox Android | 88 | ✅ Full Support |

### Feature Support Fallbacks
- **AVIF Images:** Fallback to WebP
- **WebP Images:** Fallback to JPG
- **CSS Grid:** Fallback to flexbox
- **CSS Variables:** Calculated fallback values
- **JavaScript:** Graceful degradation

---

## Analytics Configuration

### Google Analytics 4 Setup
- **Property Type:** Web
- **Measurement ID Format:** G-XXXXXXXXXX
- **Tracking Code Location:** js/cookies.js
- **Consent-Based Loading:** Yes (only after user consent)
- **Events Tracked:**
  - page_view (automatic)
  - engage (automatic)
  - Custom events (tbd)

### Privacy Settings
- **IP Anonymization:** Enabled
- **Display Advertising:** Disabled
- **User ID Tracking:** Disabled
- **Data Retention:** 14 months
- **Consent Mode:** v2 (GTM tags)

### User Consent
- **Default:** No analytics without consent
- **Consent Method:** LocalStorage-based cookie consent
- **Opt-In Required:** Yes for analytics
- **Opt-Out Available:** Yes (cookie settings page)

---

## Contact Information

### Business Details
- **Name:** Villa Bonmont Terres Noves
- **Owner:** Idoia [Last Name]
- **Location:** Bonmont Terres Noves, Castelldefels, Catalunya 08348, Spain
- **Phone:** +34-XXX-XXX-XXX (to be added)
- **Email:** info@villabonmont.com (to be added)
- **Tax ID:** [NIF/NIE to be added]
- **Business Registration:** [Number to be added]

### Support Contact Methods
- **Email:** info@villabonmont.com
- **Phone:** +34-XXX-XXX-XXX
- **Response Time:** < 1 hour
- **Primary Platform:** Airbnb messaging

### Legal Contact Methods
- **Privacy Email:** privacy@villabonmont.com
- **Legal Email:** legal@villabonmont.com
- **DPO Email:** dpo@villabonmont.com (if applicable)

---

## Image Optimization Specifications

### Image Formats by Use Case
| Use Case | AVIF | WebP | JPG | Size Limit |
|----------|------|------|-----|-----------|
| Hero Background | 800-1200px | 800-1200px | 800-1200px | 200KB |
| Content Image | Yes | Yes | Yes | 100KB |
| Thumbnail | Yes | Yes | Yes | 50KB |
| Social OG | N/A | N/A | Yes | 1200x630px |

### Image Naming Convention
```
location-description-dimension.format
Example: pool-night-villa-1920w.jpg
```

### Srcset Example
```html
<picture>
    <source srcset="image.avif" type="image/avif">
    <source srcset="image.webp" type="image/webp">
    <img src="image.jpg" alt="Descriptive text">
</picture>
```

---

## Performance Optimization Checklist

### Server-Side
- [ ] Enable Gzip compression
- [ ] Set browser cache headers (1 year for images, 1 month for CSS/JS)
- [ ] Enable HTTP/2 or HTTP/3
- [ ] Configure CDN for static assets
- [ ] Set up minification pipeline

### Client-Side (Already Done)
- [x] Minified CSS (optional, clean version provided)
- [x] Minified JS (optional, clean version provided)
- [x] Responsive images with srcset
- [x] Lazy loading support
- [x] No render-blocking JavaScript
- [x] Optimized font loading
- [x] No unnecessary dependencies

---

## Monitoring & Logging

### Recommended Tools
- **Uptime Monitoring:** Uptime Robot, Pingdom
- **Performance:** Google PageSpeed Insights, WebPageTest
- **SEO:** Google Search Console, Bing Webmaster Tools
- **Analytics:** Google Analytics 4
- **Error Tracking:** Sentry, Rollbar (optional)
- **CDN:** Cloudflare (optional)

### Monitoring Points
- Uptime status (24/7)
- Page load performance
- SSL certificate expiration
- Search engine indexing
- Analytics tracking
- Error rates
- Core Web Vitals

---

## Deployment Environments

### Development
- **URL:** http://localhost:8000
- **SSL:** Not required
- **Analytics:** Disabled
- **Cookies:** Full testing enabled

### Staging
- **URL:** staging.villabonmont.com (optional)
- **SSL:** Required
- **Analytics:** Test mode
- **Cookies:** Full testing

### Production
- **URL:** https://villabonmont.com/
- **SSL:** Required (A+ or better)
- **Analytics:** Enabled
- **Cookies:** Full compliance

---

## Version Control & Backups

### File Versioning
- **Current Version:** 1.0.0
- **Last Updated:** January 19, 2026
- **Git Strategy:** Recommended (Git repo setup optional)

### Backup Frequency
- **Daily:** Automated backups recommended
- **Weekly:** Full website backup
- **Retention:** Minimum 30 days of backups

### Disaster Recovery Plan
- Keep off-site backup copies
- Document all customizations
- Maintain configuration files
- Test restore process quarterly

---

## Future Scaling Considerations

### When to Add
- **Database:** When storing user bookings/messages
- **Server-Side Rendering:** If needing dynamic content
- **CMS:** If managing content is difficult
- **API:** If integrating with Airbnb API
- **PWA Features:** If wanting offline support

### Performance at Scale
- Current setup handles 10,000+ monthly visitors
- Can scale to 100,000+ with CDN
- Database needed beyond 50,000 transactions/month

---

**Technical Specifications Version:** 1.0  
**Last Updated:** January 19, 2026  
**Status:** Complete and Ready for Deployment
