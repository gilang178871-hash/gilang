// ============================================
// Animated Counter for Metrics
// ============================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16); // 60fps
    let current = start;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            // Format number based on target value
            if (target >= 1000) {
                element.textContent = Math.floor(current).toLocaleString() + '+';
            } else if (target < 10) {
                element.textContent = current.toFixed(1);
            } else {
                element.textContent = Math.floor(current);
            }
            requestAnimationFrame(updateCounter);
        } else {
            // Final value formatting
            if (target >= 1000) {
                element.textContent = Math.floor(target).toLocaleString() + '+';
            } else if (target < 10) {
                element.textContent = target.toFixed(1);
            } else {
                element.textContent = Math.floor(target);
            }
        }
    };
    
    updateCounter();
}

// Intersection Observer for counter animation
const observerOptions = {
    threshold: 0.5,
    rootMargin: '0px'
};

const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const metricNumber = entry.target.querySelector('.metric-number');
            if (metricNumber && !metricNumber.dataset.animated) {
                const target = parseFloat(metricNumber.dataset.target);
                metricNumber.dataset.animated = 'true';
                animateCounter(metricNumber, target);
            }
        }
    });
}, observerOptions);

// Initialize counter observer when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const metricItems = document.querySelectorAll('.metric-item');
    metricItems.forEach(item => {
        counterObserver.observe(item);
    });
});

// ============================================
// Smooth Scrolling for Anchor Links
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 80;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
                
                // Track click event
                trackEvent('Navigation', 'Click', href);
            }
        }
    });
});

// ============================================
// Contact Form Handling
// ============================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(this);
        const data = {
            name: formData.get('name'),
            company: formData.get('company'),
            email: formData.get('email'),
            role: formData.get('role'),
            message: formData.get('message')
        };
        
        // Basic validation
        if (!data.name || !data.email || !data.message || !data.role) {
            showFormMessage('Please fill in all required fields.', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(data.email)) {
            showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Track form submission
        trackEvent('Form', 'Submit', 'Contact Form');
        
        // Simulate form submission (replace with actual endpoint)
        showFormMessage('Thank you for your message! I\'ll get back to you within 48 hours.', 'success');
        
        // Reset form
        this.reset();
        
        // In production, you would send data to your server:
        // fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(data => {
        //     showFormMessage('Thank you for your message!', 'success');
        //     contactForm.reset();
        // })
        // .catch(error => {
        //     showFormMessage('Something went wrong. Please try again.', 'error');
        // });
    });
}

// Form message display
function showFormMessage(message, type) {
    // Remove existing message
    const existingMessage = document.querySelector('.form-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create new message
    const messageDiv = document.createElement('div');
    messageDiv.className = `form-message form-message-${type}`;
    messageDiv.textContent = message;
    messageDiv.style.cssText = `
        padding: 1rem;
        margin-top: 1rem;
        border-radius: 4px;
        background-color: ${type === 'success' ? '#10B981' : '#EF4444'};
        color: white;
        text-align: center;
        font-weight: 500;
    `;
    
    contactForm.appendChild(messageDiv);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        messageDiv.remove();
    }, 5000);
}

// ============================================
// Analytics Tracking
// ============================================

function trackEvent(category, action, label) {
    // Google Analytics 4 event tracking
    if (typeof gtag !== 'undefined') {
        gtag('event', action, {
            event_category: category,
            event_label: label
        });
    }
    
    // Console log for debugging (remove in production)
    console.log('Event tracked:', { category, action, label });
}

// Track page view
document.addEventListener('DOMContentLoaded', () => {
    trackEvent('Page', 'View', window.location.pathname);
});

// Track CTA clicks
document.querySelectorAll('.btn-primary, .btn-secondary').forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        trackEvent('CTA', 'Click', buttonText);
    });
});

// Track PDF download
document.querySelectorAll('a[download]').forEach(link => {
    link.addEventListener('click', function() {
        const filename = this.getAttribute('href');
        trackEvent('Download', 'Click', filename);
    });
});

// Track external links
document.querySelectorAll('a[href^="http"]').forEach(link => {
    link.addEventListener('click', function() {
        const url = this.getAttribute('href');
        trackEvent('External Link', 'Click', url);
    });
});

// ============================================
// Scroll to Top Button (Optional)
// ============================================

// Create scroll to top button
const scrollTopBtn = document.createElement('button');
scrollTopBtn.innerHTML = '↑';
scrollTopBtn.className = 'scroll-top-btn';
scrollTopBtn.style.cssText = `
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #0FA3A3;
    color: white;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 1000;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
`;

scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
    trackEvent('Navigation', 'Click', 'Scroll to Top');
});

document.body.appendChild(scrollTopBtn);

// Show/hide scroll to top button
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollTopBtn.style.opacity = '1';
        scrollTopBtn.style.visibility = 'visible';
    } else {
        scrollTopBtn.style.opacity = '0';
        scrollTopBtn.style.visibility = 'hidden';
    }
});

// ============================================
// Mobile Menu (if needed in future)
// ============================================

// Placeholder for mobile menu functionality
// Can be expanded if navigation menu is added

// ============================================
// Performance Optimization
// ============================================

// Lazy load images (if images are added later)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });
    
    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// Add UTM parameters to links (if needed)
// ============================================

function addUTMParameters(url, source = 'portfolio', medium = 'website', campaign = 'hire_me') {
    if (!url || url.startsWith('#') || url.startsWith('mailto:')) {
        return url;
    }
    
    try {
        const urlObj = new URL(url, window.location.origin);
        urlObj.searchParams.set('utm_source', source);
        urlObj.searchParams.set('utm_medium', medium);
        urlObj.searchParams.set('utm_campaign', campaign);
        return urlObj.toString();
    } catch (e) {
        return url;
    }
}

// Apply UTM parameters to external links (optional)
// document.querySelectorAll('a[href^="http"]').forEach(link => {
//     const originalHref = link.getAttribute('href');
//     link.setAttribute('href', addUTMParameters(originalHref));
// });
