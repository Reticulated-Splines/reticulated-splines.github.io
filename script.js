// script.js
// =============================================
// Vanilla JS – tiny footprint (~2KB minified)

let isDark = false;

// Load saved theme
function loadTheme() {
    const saved = localStorage.getItem('darkMode');
    if (saved === 'true') {
        document.body.classList.add('dark');
        isDark = true;
        updateToggleIcon();
    }
}

// Toggle dark mode
function toggleDarkMode() {
    isDark = !isDark;
    document.body.classList.toggle('dark', isDark);
    localStorage.setItem('darkMode', isDark);
    updateToggleIcon();
}

function updateToggleIcon() {
    const sun = document.querySelector('.sun');
    const moon = document.querySelector('.moon');
    if (isDark) {
        sun.style.display = 'none';
        moon.style.display = 'inline';
    } else {
        sun.style.display = 'inline';
        moon.style.display = 'none';
    }
}

// Mobile menu
function toggleMobileMenu() {
    const links = document.getElementById('nav-links');
    const hamburger = document.getElementById('hamburger');
    const expanded = hamburger.getAttribute('aria-expanded') === 'true';
    
    links.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', !expanded);
    
    // Animate hamburger
    if (!expanded) {
        hamburger.style.transform = 'rotate(90deg)';
    } else {
        hamburger.style.transform = 'rotate(0)';
    }
}

function closeMobileMenu() {
    const links = document.getElementById('nav-links');
    const hamburger = document.getElementById('hamburger');
    links.classList.remove('active');
    hamburger.setAttribute('aria-expanded', 'false');
    hamburger.style.transform = 'rotate(0)';
}

// Project search filter
function filterProjects() {
    const query = document.getElementById('global-search').value.toLowerCase().trim();
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        const desc = card.getAttribute('data-desc').toLowerCase();
        
        if (!query) {
            card.style.display = 'block';
            return;
        }
        
        if (title.includes(query) || desc.includes(query)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Fake resume download
function downloadResumePlaceholder() {
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'your-name-resume.pdf';
    link.click();
    
    // Toast notification
    const toast = document.createElement('div');
    toast.style.cssText = 'position:fixed;bottom:24px;right:24px;background:#b38b4d;color:#fff;padding:16px 24px;border-radius:9999px;box-shadow:0 10px 20px rgba(0,0,0,.2);font-weight:600;';
    toast.textContent = '✅ Resume downloaded (demo)';
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.transition = 'opacity 0.4s';
        toast.style.opacity = '0';
        setTimeout(() => toast.remove(), 400);
    }, 2800);
}

// Contact form handler
function handleSubmit(e) {
    e.preventDefault();
    
    const form = document.getElementById('contact-form');
    const submitBtn = form.querySelector('button');
    
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate network delay
    setTimeout(() => {
        // Success state
        const success = document.createElement('div');
        success.style.cssText = 'background:#f0f4e8;color:#2e5c2e;padding:1rem 2rem;border-radius:12px;margin-top:2rem;text-align:center;font-weight:600;';
        success.innerHTML = `
            Thank you! Your message has been received.<br>
            <small>I will get back to you within 24 hours.</small>
        `;
        
        form.parentNode.insertBefore(success, form.nextSibling);
        form.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        
        // Auto-remove success after 6s
        setTimeout(() => success.remove(), 6000);
    }, 1350);
}

// Initialize everything
function init() {
    loadTheme();
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Keyboard accessibility for search
    const searchInput = document.getElementById('global-search');
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') filterProjects();
    });
    
    console.log('%c✅ Portfolio template loaded – white & polished business-card aesthetic ready.', 'color:#b38b4d;font-family:monospace');
}

window.onload = init;
