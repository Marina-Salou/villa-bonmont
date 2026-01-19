# Villa Bonmont Website - Deployment Checklist

## Pre-Deployment (Development Phase)

### ✅ Content & Assets
- [ ] Replace placeholder phone numbers (+34-XXX-XXX-XXX)
- [ ] Replace placeholder emails (info@, privacy@, legal@, dpo@)
- [ ] Update tax ID / NIF in Legal page
- [ ] Update business registration details in Legal page
- [ ] Upload and optimize all images (AVIF, WebP, JPG fallback)
- [ ] Update image paths in all HTML files
- [ ] Add video files (hero-night.mp4/.webm, interior-tour.mp4/.webm)
- [ ] Update Airbnb listing URL throughout site
- [ ] Write actual content for blank pages (interiors, about expanded details)
- [ ] Review all copy for typos and accuracy

### ✅ SEO Optimization
- [ ] Verify all meta descriptions (155 characters max, unique per page)
- [ ] Check all title tags (60 characters, keyword-rich, unique)
- [ ] Update canonical URLs to match domain
- [ ] Add internal links strategy
- [ ] Optimize images with proper ALT text
- [ ] Update Schema.org data with actual property details
- [ ] Update Open Graph images and tags
- [ ] Verify sitemap.xml has all pages
- [ ] Test sitemap with Google Search Console

### ✅ Analytics & Tracking
- [ ] Get Google Analytics 4 Measurement ID
- [ ] Update GA ID in cookies.js
- [ ] Set up Google Search Console
- [ ] Configure robots.txt crawl delay if needed
- [ ] Decide on additional analytics tools if any

### ✅ Security & Privacy
- [ ] Review and update Privacy Policy with actual details
- [ ] Review and update Cookie Policy with accurate descriptions
- [ ] Review and update Legal Notice with actual terms
- [ ] Ensure GDPR compliance verified
- [ ] Add Data Protection Officer contact if applicable
- [ ] Prepare GDPR data processing agreement for analytics

### ✅ Forms & Functionality
- [ ] Set up backend for contact form (if using)
- [ ] Test form submissions
- [ ] Add form validation messaging
- [ ] Implement CSRF protection if needed
- [ ] Set up email notifications for inquiries

### ✅ Code Quality & Performance
- [ ] Minify CSS (optional, current code is clean)
- [ ] Minify JavaScript (optional, current code is minimal)
- [ ] Test all JavaScript functionality locally
- [ ] Verify responsive design on multiple devices
- [ ] Check image optimization (file sizes)
- [ ] Test site speed with PageSpeed Insights
- [ ] Verify accessibility with WAVE tool
- [ ] Test keyboard navigation throughout site
- [ ] Test color contrast ratios

---

## Deployment to Production

### ✅ Server Setup
- [ ] Choose hosting provider
- [ ] Set up domain (villabonmont.com)
- [ ] Configure DNS records
- [ ] Set up FTP/SFTP access
- [ ] Create backup of production files

### ✅ HTTPS/SSL Setup (CRITICAL)
- [ ] Purchase or obtain SSL certificate (Let's Encrypt free option)
- [ ] Install SSL certificate on server
- [ ] Configure web server for HTTPS
- [ ] Set up HTTP → HTTPS redirect
- [ ] Verify SSL installation with SSL Labs
- [ ] Update all links to HTTPS protocol

### ✅ File Upload
- [ ] Upload all HTML files to root directory
- [ ] Upload css/ folder with all stylesheets
- [ ] Upload js/ folder with all scripts
- [ ] Upload images/ folder with optimized images
- [ ] Upload video files to appropriate location
- [ ] Upload robots.txt to root
- [ ] Upload sitemap.xml to root
- [ ] Verify all files are accessible

### ✅ Server Configuration

#### Apache (.htaccess)
```apache
# Redirect HTTP to HTTPS
<IfModule mod_rewrite.c>
    RewriteEngine On
    RewriteCond %{HTTPS} off
    RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]
</IfModule>

# Enable Gzip Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript
</IfModule>

# Cache Expiration
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/webp "access plus 1 year"
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType text/html "access plus 0 seconds"
</IfModule>
```

#### Nginx Configuration
```nginx
# HTTP to HTTPS redirect
server {
    listen 80;
    server_name villabonmont.com www.villabonmont.com;
    return 301 https://$server_name$request_uri;
}

# HTTPS Server
server {
    listen 443 ssl http2;
    server_name villabonmont.com www.villabonmont.com;
    
    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;
    
    # Enable Gzip
    gzip on;
    gzip_types text/plain text/css text/javascript application/javascript;
    
    # Root directory
    root /var/www/villabonmont;
    
    # Cache headers
    location ~* \.(jpg|jpeg|png|gif|ico|webp|avif|woff|woff2)$ {
        expires 1y;
    }
    
    location ~* \.(css|js)$ {
        expires 1M;
    }
}
```

- [ ] Enable gzip compression
- [ ] Set cache headers appropriately
- [ ] Set up redirects (HTTP → HTTPS, www → non-www or vice versa)
- [ ] Configure proper MIME types for all file extensions
- [ ] Test all configuration settings

### ✅ Post-Upload Verification
- [ ] Visit homepage and verify all sections load
- [ ] Check mobile responsiveness on actual devices
- [ ] Test navigation menu (desktop and mobile)
- [ ] Test modal video playback
- [ ] Verify all internal links work
- [ ] Test external links to Airbnb
- [ ] Check cookie banner appears on first visit
- [ ] Test cookie accept/reject functionality
- [ ] Verify all policy pages are accessible
- [ ] Test contact form (if implemented with backend)

---

## Post-Deployment Verification

### ✅ SEO & Search Engines
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify domain ownership in Google Search Console
- [ ] Monitor crawl errors in Search Console
- [ ] Set preferred domain (www vs non-www)
- [ ] Configure sitelinks in Search Console if needed
- [ ] Wait 1-2 weeks for initial indexing
- [ ] Monitor search results for brand keywords

### ✅ Performance Testing
- [ ] Run Google PageSpeed Insights
- [ ] Target scores: 90+ for Performance, 95+ for Accessibility
- [ ] Test on slow 3G network (Chrome DevTools)
- [ ] Verify images load correctly
- [ ] Check Largest Contentful Paint (LCP)
- [ ] Check Cumulative Layout Shift (CLS)
- [ ] Monitor Core Web Vitals

### ✅ Security Testing
- [ ] Run SSL Labs test (target: A or A+)
- [ ] Verify HTTPS on all pages
- [ ] Test for mixed content warnings (should be none)
- [ ] Verify security headers are set (check with online tools)
- [ ] Test for common vulnerabilities
- [ ] Verify no sensitive data exposed in frontend code
- [ ] Check for proper error handling (no stack traces)

### ✅ Accessibility Testing
- [ ] Run WAVE accessibility check
- [ ] Test keyboard navigation (Tab, Enter, Arrow keys)
- [ ] Verify skip-to-main-content link works
- [ ] Test with screen reader (NVDA, JAWS)
- [ ] Verify color contrast ratios (minimum 4.5:1)
- [ ] Test form accessibility
- [ ] Verify video captions if applicable

### ✅ Browser & Device Testing

**Browsers:**
- [ ] Chrome (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)
- [ ] Samsung Internet
- [ ] UC Browser (if targeting Asia)

**Devices:**
- [ ] iPhone (iOS latest)
- [ ] Android phone (Android latest)
- [ ] iPad/Tablet
- [ ] Desktop (Windows, Mac, Linux)
- [ ] Landscape orientation on mobile

### ✅ Functionality Testing
- [ ] Hero video autoplay and controls
- [ ] Mobile hamburger menu toggle
- [ ] Modal video open/close
- [ ] Smooth scrolling to sections
- [ ] Cookie banner appears/dismisses correctly
- [ ] Analytics tracking fires with consent
- [ ] Form validation works
- [ ] All links open in correct tabs/windows
- [ ] External links have rel="noopener noreferrer"

### ✅ Analytics & Monitoring
- [ ] Google Analytics 4 property created
- [ ] GA4 is tracking pageviews
- [ ] Verify events are being tracked
- [ ] Set up custom audiences if needed
- [ ] Configure alerts for anomalies
- [ ] Set up automated reports

### ✅ Monitoring & Maintenance
- [ ] Set up uptime monitoring (Uptime Robot, Pingdom)
- [ ] Configure error logging (Sentry, LogRocket)
- [ ] Set up performance monitoring
- [ ] Create backup routine (daily/weekly)
- [ ] Plan content update schedule
- [ ] Document any custom modifications
- [ ] Set calendar reminders for annual policy reviews

---

## Ongoing Maintenance Schedule

### Daily
- [ ] Monitor site uptime
- [ ] Check error logs
- [ ] Respond to inquiries

### Weekly
- [ ] Review analytics
- [ ] Check for broken links (SEMrush, Screaming Frog)
- [ ] Monitor performance metrics

### Monthly
- [ ] Update content if needed
- [ ] Review and respond to reviews/feedback
- [ ] Check security updates
- [ ] Verify SSL certificate status

### Quarterly
- [ ] Deep SEO audit
- [ ] Review and optimize high-traffic pages
- [ ] Update internal links strategy
- [ ] Audit for dead links

### Annually
- [ ] Renew SSL certificate (if not auto-renewal)
- [ ] Update Privacy Policy and Legal documents as needed
- [ ] Review and update house rules if changed
- [ ] Full accessibility audit
- [ ] Performance optimization review
- [ ] Backup verification

---

## Rollback Plan (If Issues Occur)

In case of serious issues post-deployment:

1. **Immediate Actions:**
   - Keep backup of previous working version
   - Use FTP to revert files if needed
   - Enable maintenance mode if available
   - Document the issue

2. **Communication:**
   - Notify relevant parties
   - Update status on relevant channels

3. **Resolution:**
   - Identify root cause
   - Fix issue locally
   - Test thoroughly
   - Re-deploy carefully

4. **Post-Mortem:**
   - Document what went wrong
   - Update processes to prevent recurrence
   - Update documentation

---

## Success Criteria

Website is successfully deployed when:

✅ All pages load without errors on all major browsers  
✅ Site is fully responsive on mobile, tablet, desktop  
✅ HTTPS/SSL is active and verified  
✅ All external links work correctly  
✅ Analytics is tracking page views  
✅ Cookie banner shows and functions properly  
✅ Google Search Console shows no critical errors  
✅ PageSpeed Insights score is 85+  
✅ All accessibility requirements met  
✅ Contact forms work if implemented  
✅ Site indexed in Google (check "site:" command)

---

## Support Contacts

- **Hosting Provider Support:** [Add details]
- **Domain Registrar:** [Add details]
- **SSL Certificate Authority:** [Add details]
- **Developer Support:** [Add details]

---

**Last Updated:** January 19, 2026  
**Version:** 1.0  
**Status:** Ready for Deployment
