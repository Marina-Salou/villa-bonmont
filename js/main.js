/* ============================================
   VILLA BONMONT - MAIN JAVASCRIPT
   Navigation, Modal, and DOM Manipulation
   ============================================ */

// Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        menuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Modal functionality
const videoModal = document.getElementById('videoModal');
const interiorModalBtn = document.getElementById('interiorModal');
const modalClose = document.getElementById('modalClose');
const modalVideo = document.getElementById('modalVideo');

const outdoorVideoModal = document.getElementById('outdoorVideoModal');
const outdoorModalBtn = document.getElementById('outdoorModal');
const outdoorModalClose = document.getElementById('outdoorModalClose');
const outdoorModalVideo = document.getElementById('outdoorModalVideo');

// Interior modal
if (interiorModalBtn) {
    interiorModalBtn.addEventListener('click', () => {
        videoModal.classList.add('active');
        videoModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        modalVideo.play();
    });
}
if (modalClose) {
    modalClose.addEventListener('click', () => {
        videoModal.classList.remove('active');
        videoModal.setAttribute('aria-hidden', 'true');
        modalVideo.pause();
        modalVideo.currentTime = 0;
        document.body.style.overflow = '';
    });
}
videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        videoModal.setAttribute('aria-hidden', 'true');
        modalVideo.pause();
        modalVideo.currentTime = 0;
        document.body.style.overflow = '';
    }
});

// Outdoor modal
if (outdoorModalBtn) {
    outdoorModalBtn.addEventListener('click', () => {
        outdoorVideoModal.classList.add('active');
        outdoorVideoModal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        outdoorModalVideo.play();
    });
}
if (outdoorModalClose) {
    outdoorModalClose.addEventListener('click', () => {
        outdoorVideoModal.classList.remove('active');
        outdoorVideoModal.setAttribute('aria-hidden', 'true');
        outdoorModalVideo.pause();
        outdoorModalVideo.currentTime = 0;
        document.body.style.overflow = '';
    });
}
outdoorVideoModal.addEventListener('click', (e) => {
    if (e.target === outdoorVideoModal) {
        outdoorVideoModal.classList.remove('active');
        outdoorVideoModal.setAttribute('aria-hidden', 'true');
        outdoorModalVideo.pause();
        outdoorModalVideo.currentTime = 0;
        document.body.style.overflow = '';
    }
});

// Keyboard: ESC to close either modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (videoModal.classList.contains('active')) {
            videoModal.classList.remove('active');
            videoModal.setAttribute('aria-hidden', 'true');
            modalVideo.pause();
            modalVideo.currentTime = 0;
            document.body.style.overflow = '';
        }
        if (outdoorVideoModal.classList.contains('active')) {
            outdoorVideoModal.classList.remove('active');
            outdoorVideoModal.setAttribute('aria-hidden', 'true');
            outdoorModalVideo.pause();
            outdoorModalVideo.currentTime = 0;
            document.body.style.overflow = '';
        }
    }
});

// Lazy loading for images (native)
if ('IntersectionObserver' in window) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}

// Analytics placeholder (GDPR compliant - only if consent given)
function initializeAnalytics() {
    const cookieConsent = localStorage.getItem('villa-analytics-consent');
    if (cookieConsent === 'accepted') {
        // Add your analytics script here (e.g., Google Analytics)
        console.log('Analytics initialized with user consent');
        // Example: window.dataLayer = window.dataLayer || [];
    }
}

document.addEventListener('DOMContentLoaded', initializeAnalytics);

// Smooth scroll for internal links (already done by html { scroll-behavior: smooth; })
// but add active state highlighting
window.addEventListener('scroll', () => {
    const nav = document.querySelectorAll('.nav-menu a');
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    nav.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Print-friendly styles
const printButton = document.querySelector('.print-btn');
if (printButton) {
    printButton.addEventListener('click', () => {
        window.print();
    });
}

// Form validation (if contact form exists)
const contactForm = document.querySelector('form[name="contact"]');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = contactForm.querySelector('input[type="email"]');
        const message = contactForm.querySelector('textarea');

        // Basic validation
        if (!email.value || !message.value) {
            alert('Please fill in all fields');
            return;
        }

        // Simulate form submission
        console.log('Form submitted:', {
            email: email.value,
            message: message.value
        });

        // Reset form
        contactForm.reset();
        alert('Thank you for your message. We will be in touch soon!');
    });
}

console.log('Villa Bonmont - Main JS loaded');
