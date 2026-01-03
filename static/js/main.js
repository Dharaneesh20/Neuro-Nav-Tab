// Neuro-Nav Main JavaScript

// Theme Management
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Load saved theme or detect system preference
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
        if (savedTheme === 'dark') {
            htmlElement.classList.add('dark');
        }
    } else if (systemPrefersDark) {
        htmlElement.classList.add('dark');
        htmlElement.setAttribute('data-theme', 'dark');
    }
}

// Toggle theme
function toggleTheme() {
    if (htmlElement.classList.contains('dark')) {
        htmlElement.classList.remove('dark');
        htmlElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        htmlElement.classList.add('dark');
        htmlElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
    lucide.createIcons();
}

if (themeToggle) {
    themeToggle.addEventListener('click', toggleTheme);
}

// Load theme on page load
loadTheme();

// Mobile Menu Toggle
const mobileMenuButton = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
}

// Profile Dropdown
const profileDropdown = document.getElementById('profile-dropdown');
if (profileDropdown) {
    const dropdownButton = profileDropdown.querySelector('button');
    const dropdownMenu = profileDropdown.querySelector('.dropdown-menu');
    
    dropdownButton.addEventListener('click', (e) => {
        e.stopPropagation();
        dropdownMenu.classList.toggle('hidden');
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', () => {
        dropdownMenu.classList.add('hidden');
    });
}

// Toast Notifications
function showToast(message, type = 'info', duration = 3000) {
    const toastContainer = document.getElementById('toast-container');
    if (!toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    const icon = {
        success: '✓',
        error: '✕',
        info: 'ℹ',
        warning: '⚠'
    }[type] || 'ℹ';
    
    toast.innerHTML = `
        <div class="flex items-start space-x-3">
            <span class="text-2xl">${icon}</span>
            <div class="flex-1">
                <p class="font-medium">${message}</p>
            </div>
            <button onclick="this.parentElement.parentElement.remove()" class="text-gray-400 hover:text-gray-600">
                <i data-lucide="x" class="w-4 h-4"></i>
            </button>
        </div>
    `;
    
    toastContainer.appendChild(toast);
    lucide.createIcons();
    
    if (duration > 0) {
        setTimeout(() => {
            toast.style.opacity = '0';
            toast.style.transform = 'translateX(100%)';
            setTimeout(() => toast.remove(), 300);
        }, duration);
    }
}

// API Helper Functions
async function fetchAPI(endpoint, options = {}) {
    try {
        const response = await fetch(endpoint, {
            headers: {
                'Content-Type': 'application/json',
                ...options.headers
            },
            ...options
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        console.error('API Error:', error);
        showToast('Something went wrong. Please try again.', 'error');
        throw error;
    }
}

// Loading State Helper
function setLoading(element, isLoading, text = 'Loading...') {
    if (isLoading) {
        element.disabled = true;
        element.dataset.originalText = element.innerHTML;
        element.innerHTML = `
            <span class="spinner mr-2"></span>
            ${text}
        `;
    } else {
        element.disabled = false;
        element.innerHTML = element.dataset.originalText || text;
    }
}

// Form Validation Helper
function validateForm(formElement) {
    const inputs = formElement.querySelectorAll('input[required], textarea[required], select[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('border-red-500');
        } else {
            input.classList.remove('border-red-500');
        }
    });
    
    return isValid;
}

// Geolocation Helper
function getCurrentLocation() {
    return new Promise((resolve, reject) => {
        if (!navigator.geolocation) {
            reject(new Error('Geolocation is not supported'));
            return;
        }
        
        navigator.geolocation.getCurrentPosition(
            (position) => {
                resolve({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                });
            },
            (error) => {
                reject(error);
            },
            {
                enableHighAccuracy: true,
                timeout: 5000,
                maximumAge: 0
            }
        );
    });
}

// Format Distance
function formatDistance(miles) {
    if (miles < 0.1) {
        return `${Math.round(miles * 5280)} ft`;
    }
    return `${miles.toFixed(1)} mi`;
}

// Format Duration
function formatDuration(minutes) {
    if (minutes < 60) {
        return `${Math.round(minutes)} min`;
    }
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    return `${hours}h ${mins}m`;
}

// Calm Score Color
function getCalmScoreClass(score) {
    if (score >= 7) return 'calm-score-high';
    if (score >= 4) return 'calm-score-medium';
    return 'calm-score-low';
}

// Star Rating Generator
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    let html = '';
    
    for (let i = 0; i < fullStars; i++) {
        html += '<i data-lucide="star" class="w-4 h-4 fill-current star"></i>';
    }
    
    if (hasHalfStar) {
        html += '<i data-lucide="star-half" class="w-4 h-4 fill-current star"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        html += '<i data-lucide="star" class="w-4 h-4 star opacity-30"></i>';
    }
    
    return html;
}

// Debounce Helper
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Smooth Scroll to Element
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Copy to Clipboard
async function copyToClipboard(text) {
    try {
        await navigator.clipboard.writeText(text);
        showToast('Copied to clipboard!', 'success');
    } catch (error) {
        showToast('Failed to copy', 'error');
    }
}

// Local Storage Helpers
function saveToLocalStorage(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error('LocalStorage error:', error);
    }
}

function getFromLocalStorage(key, defaultValue = null) {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error('LocalStorage error:', error);
        return defaultValue;
    }
}

// Animation Observer (for scroll animations)
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const animationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            animationObserver.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements with data-animate attribute
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('[data-animate]');
    animateElements.forEach(el => animationObserver.observe(el));
});

// Haptic Feedback (for mobile)
function hapticFeedback(style = 'light') {
    if ('vibrate' in navigator) {
        const patterns = {
            light: 10,
            medium: 20,
            heavy: 50
        };
        navigator.vibrate(patterns[style] || 10);
    }
}

// Share API
async function shareContent(data) {
    if (navigator.share) {
        try {
            await navigator.share(data);
        } catch (error) {
            if (error.name !== 'AbortError') {
                console.error('Share error:', error);
            }
        }
    } else {
        // Fallback: copy to clipboard
        await copyToClipboard(data.url || data.text);
    }
}

// Service Worker Registration (PWA)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('ServiceWorker registered:', registration);
            })
            .catch(error => {
                console.log('ServiceWorker registration failed:', error);
            });
    });
}

// Export functions for use in other scripts
window.NeuroNav = {
    showToast,
    fetchAPI,
    setLoading,
    validateForm,
    getCurrentLocation,
    formatDistance,
    formatDuration,
    getCalmScoreClass,
    generateStars,
    debounce,
    smoothScrollTo,
    copyToClipboard,
    saveToLocalStorage,
    getFromLocalStorage,
    hapticFeedback,
    shareContent
};

// Initialize Lucide icons after DOM load
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();
});

console.log('🧠 Neuro-Nav initialized successfully!');
