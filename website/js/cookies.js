/* ============================================
   VILLA BONMONT - COOKIE CONSENT MANAGEMENT
   GDPR Compliant Cookie Banner & Consent Tracking
   ============================================ */

class CookieManager {
    constructor() {
        this.cookieBanner = document.getElementById('cookieBanner');
        this.cookieAccept = document.getElementById('cookieAccept');
        this.cookieReject = document.getElementById('cookieReject');
        this.CONSENT_KEY = 'villa-cookie-consent';
        this.ANALYTICS_KEY = 'villa-analytics-consent';
        this.VERSION = '1.0';

        this.init();
    }

    init() {
        // Check if consent has already been given
        if (!this.hasConsentRecorded()) {
            this.showBanner();
        } else {
            this.applyConsent();
        }

        // Bind event listeners
        this.bindEvents();
    }

    bindEvents() {
        if (this.cookieAccept) {
            this.cookieAccept.addEventListener('click', () => this.acceptAll());
        }

        if (this.cookieReject) {
            this.cookieReject.addEventListener('click', () => this.rejectAll());
        }
    }

    showBanner() {
        if (this.cookieBanner) {
            // Delay showing banner to avoid jarring experience
            setTimeout(() => {
                this.cookieBanner.classList.add('active');
            }, 500);
        }
    }

    hideBanner() {
        if (this.cookieBanner) {
            this.cookieBanner.classList.remove('active');
        }
    }

    acceptAll() {
        this.setConsent({
            technical: true,
            analytics: true,
            marketing: false,
            timestamp: new Date().toISOString(),
            version: this.VERSION
        });

        this.hideBanner();
        this.loadAnalytics();
    }

    rejectAll() {
        this.setConsent({
            technical: true,
            analytics: false,
            marketing: false,
            timestamp: new Date().toISOString(),
            version: this.VERSION
        });

        this.hideBanner();
    }

    setConsent(consentData) {
        localStorage.setItem(this.CONSENT_KEY, JSON.stringify(consentData));
        localStorage.setItem(this.ANALYTICS_KEY, consentData.analytics ? 'accepted' : 'rejected');

        // Trigger custom event for other scripts to listen to
        document.dispatchEvent(new CustomEvent('cookieConsentChanged', {
            detail: consentData
        }));
    }

    getConsent() {
        const consent = localStorage.getItem(this.CONSENT_KEY);
        return consent ? JSON.parse(consent) : null;
    }

    hasConsentRecorded() {
        return localStorage.getItem(this.CONSENT_KEY) !== null;
    }

    applyConsent() {
        const consent = this.getConsent();

        if (!consent) {
            return;
        }

        // Technical cookies are always loaded
        this.loadTechnicalCookies();

        // Analytics only if consented
        if (consent.analytics) {
            this.loadAnalytics();
        }
    }

    loadTechnicalCookies() {
        // Essential cookies for site functionality
        // Example: session tracking, CSRF tokens, etc.
        // These are implemented in the backend or via localStorage

        // Set a flag to indicate site preferences
        localStorage.setItem('villa-preferences', JSON.stringify({
            language: 'en',
            theme: this.getPreferredTheme()
        }));
    }

    loadAnalytics() {
        // Google Analytics 4 - GDPR Compliant Setup
        // Only load if user has consented
        const analyticsId = 'G-XXXXXXXXXX'; // Replace with your GA4 ID

        // Load gtag script
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsId}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }

        gtag('js', new Date());
        gtag('config', analyticsId, {
            'anonymize_ip': true,
            'cookie_flags': 'SameSite=None;Secure'
        });

        console.log('Analytics loaded with consent');
    }

    getPreferredTheme() {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    // Allow updating consent preferences
    updateConsent(newPreferences) {
        const currentConsent = this.getConsent() || {};
        const updatedConsent = {
            ...currentConsent,
            ...newPreferences,
            timestamp: new Date().toISOString()
        };

        this.setConsent(updatedConsent);
    }

    // For "Cookie Settings" page to display current preferences
    getConsentStatus() {
        return this.getConsent() || {
            technical: true,
            analytics: false,
            marketing: false
        };
    }

    // Check if specific type of cookies are allowed
    isConsentGiven(type) {
        const consent = this.getConsent();
        return consent ? consent[type] : false;
    }
}

// Initialize cookie manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new CookieManager();
    });
} else {
    new CookieManager();
}

// Export for use in other scripts
window.CookieManager = CookieManager;
