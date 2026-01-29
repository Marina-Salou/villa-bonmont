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
if (videoModal) {
    videoModal.addEventListener('click', (e) => {
        if (e.target === videoModal) {
            videoModal.classList.remove('active');
            videoModal.setAttribute('aria-hidden', 'true');
            modalVideo.pause();
            modalVideo.currentTime = 0;
            document.body.style.overflow = '';
        }
    });
}

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
if (outdoorVideoModal) {
    outdoorVideoModal.addEventListener('click', (e) => {
        if (e.target === outdoorVideoModal) {
            outdoorVideoModal.classList.remove('active');
            outdoorVideoModal.setAttribute('aria-hidden', 'true');
            outdoorModalVideo.pause();
            outdoorModalVideo.currentTime = 0;
            document.body.style.overflow = '';
        }
    });
}

// Keyboard: ESC to close either modal
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (videoModal && videoModal.classList.contains('active')) {
            videoModal.classList.remove('active');
            videoModal.setAttribute('aria-hidden', 'true');
            modalVideo.pause();
            modalVideo.currentTime = 0;
            document.body.style.overflow = '';
        }
        if (outdoorVideoModal && outdoorVideoModal.classList.contains('active')) {
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

// Analytics are handled by js/cookies.js CookieManager

// Smooth scroll for internal links (already done by html { scroll-behavior: smooth; })
// but add active state highlighting
window.addEventListener('scroll', () => {
    const nav = document.querySelectorAll('.nav-menu a');
    let current = '';

    document.querySelectorAll('section').forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    nav.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        if (href.startsWith('#') && href.slice(1) === current) {
            link.classList.add('active');
        } else if (href.includes('#')) {
            const id = href.split('#')[1];
            if (id === current) {
                link.classList.add('active');
            }
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

// Highlight current nav link based on URL (adds aria-current="page" and .active)
function highlightCurrentNav() {
    const links = document.querySelectorAll('.nav-menu a');
    const currentPath = window.location.pathname.replace(/\/$/, '') || '/';

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (!href) return;

        try {
            const url = new URL(href, window.location.origin);
            const linkPath = url.pathname.replace(/\/$/, '') || '/';

            if (linkPath === currentPath) {
                link.classList.add('active');
                link.setAttribute('aria-current', 'page');
            } else {
                link.classList.remove('active');
                if (link.getAttribute('aria-current') === 'page') link.removeAttribute('aria-current');
            }
        } catch (e) {
            // ignore malformed URLs (e.g., mailto: or anchors)
        }
    });
}

// Run on load and when history changes
window.addEventListener('load', highlightCurrentNav);
window.addEventListener('popstate', highlightCurrentNav);

// Simple lightbox implementation
(function() {
    const overlay = document.createElement('div');
    overlay.className = 'lightbox-overlay';
    overlay.innerHTML = `
        <button class="lightbox-close" aria-label="Cerrar">&times;</button>
        <div class="lightbox-content" role="dialog" aria-modal="true">
            <img src="" alt="">
            <div class="lightbox-caption"></div>
        </div>
    `;
    document.body.appendChild(overlay);

    const overlayImg = overlay.querySelector('img');
    const overlayCaption = overlay.querySelector('.lightbox-caption');
    const closeBtn = overlay.querySelector('.lightbox-close');

    let currentGallery = [];
    let currentIndex = 0;

    function openLightbox(galleryName, index) {
        currentGallery = Array.from(document.querySelectorAll(`a[data-lightbox="${galleryName}"]`));
        currentIndex = index;
        const link = currentGallery[currentIndex];
        overlayImg.src = link.href;
        overlayImg.alt = link.querySelector('img')?.alt || '';
        overlayCaption.textContent = link.dataset.caption || '';
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    function closeLightbox() {
        overlay.classList.remove('active');
        overlayImg.src = '';
        document.body.style.overflow = '';
    }

    document.addEventListener('click', (e) => {
        const anchor = e.target.closest('a[data-lightbox]');
        if (anchor) {
            e.preventDefault();
            const galleryName = anchor.dataset.lightbox;
            const all = Array.from(document.querySelectorAll(`a[data-lightbox="${galleryName}"]`));
            const idx = all.indexOf(anchor);
            openLightbox(galleryName, idx);
        }
    });

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) closeLightbox();
    });

    document.addEventListener('keydown', (e) => {
        if (!overlay.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') {
            currentIndex = (currentIndex + 1) % currentGallery.length;
            const link = currentGallery[currentIndex];
            overlayImg.src = link.href;
            overlayCaption.textContent = link.dataset.caption || '';
        }
        if (e.key === 'ArrowLeft') {
            currentIndex = (currentIndex - 1 + currentGallery.length) % currentGallery.length;
            const link = currentGallery[currentIndex];
            overlayImg.src = link.href;
            overlayCaption.textContent = link.dataset.caption || '';
        }
    });
})();

// Comments panel toggle (accessible, minimal)
(function initCommentsToggle(){
    const btn = document.querySelector('.comments-toggle');
    const panel = document.getElementById('comments-panel');
    if (!btn || !panel) return;

    function collapse(){
        panel.classList.add('collapsed');
        panel.classList.remove('expanded');
        panel.setAttribute('aria-hidden','true');
        btn.setAttribute('aria-expanded','false');
        const shortLabel = btn.querySelector('.label-short');
        const longLabel = btn.querySelector('.label-long');
        if (shortLabel) shortLabel.textContent = 'Ver';
        if (longLabel) longLabel.textContent = 'Ver comentarios';
        panel.style.maxHeight = '0';
    }
    function expand(){
        panel.classList.remove('collapsed');
        panel.classList.add('expanded');
        panel.setAttribute('aria-hidden','false');
        btn.setAttribute('aria-expanded','true');
        const shortLabel = btn.querySelector('.label-short');
        const longLabel = btn.querySelector('.label-long');
        if (shortLabel) shortLabel.textContent = 'Ocultar';
        if (longLabel) longLabel.textContent = 'Ocultar comentarios';
        panel.style.maxHeight = panel.scrollHeight + 'px';
    }

    // initialize collapsed
    collapse();

    btn.addEventListener('click', ()=>{
        const expanded = btn.getAttribute('aria-expanded') === 'true';
        if (expanded) collapse(); else expand();
    });

    // keep height correct when resizing
    window.addEventListener('resize', ()=>{
        if (panel.classList.contains('expanded')) panel.style.maxHeight = panel.scrollHeight + 'px';
    });
})();

// Theme toggle (persisted, accessible)
(function initThemeToggle(){
    const btn = document.getElementById('themeToggle');
    const storageKey = 'villa-theme';
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    function applyTheme(theme){
        try{ document.documentElement.setAttribute('data-theme', theme); }catch(e){}
        if (btn){
            btn.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
            btn.textContent = theme === 'dark' ? '🌙' : '🌞';
            btn.title = theme === 'dark' ? 'Activar tema claro' : 'Activar tema oscuro';
        }
    }

    // initialize
    const saved = localStorage.getItem(storageKey);
    let theme = saved || (prefersDark ? 'dark' : 'light');
    applyTheme(theme);

    // listen to system changes if user has no preference stored
    if (!saved && window.matchMedia){
        const mq = window.matchMedia('(prefers-color-scheme: dark)');
        if (mq.addEventListener) mq.addEventListener('change', (e)=> applyTheme(e.matches ? 'dark' : 'light'));
        else if (mq.addListener) mq.addListener((e)=> applyTheme(e.matches ? 'dark' : 'light'));
    }

    if (btn){
        btn.addEventListener('click', ()=>{
            const current = document.documentElement.getAttribute('data-theme') || 'light';
            const next = current === 'dark' ? 'light' : 'dark';
            localStorage.setItem(storageKey, next);
            applyTheme(next);
        });
    }
})();

console.log('Villa Bonmont - Main JS loaded');
