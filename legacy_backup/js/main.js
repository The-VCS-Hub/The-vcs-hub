console.log('The VCS Hub - Premium Interactive Loaded');

document.addEventListener('DOMContentLoaded', () => {
    // Custom Cursor
    const cursor = document.createElement('div');
    cursor.classList.add('cursor');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    // Cursor Hover Effects
    const hoverElements = document.querySelectorAll('a, button, .card, .team-card');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });

    // Scroll Reveal Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Element enters viewport
                entry.target.classList.add('visible');
            } else {
                // Element leaves viewport - remove visible class to allow re-animation
                entry.target.classList.remove('visible');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px"
    });

    const revealElements = document.querySelectorAll('.reveal');
    revealElements.forEach(el => observer.observe(el));

    // Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile Navigation Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const nav = document.querySelector('.nav');

    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            nav.classList.toggle('active');
            mobileToggle.classList.toggle('active');
            header.classList.toggle('menu-open');
        });
    }
    // Stats Counter Animation
    const statsSection = document.querySelector('#stats');
    const statNumbers = document.querySelectorAll('.stat-number[data-target]');
    let started = false;

    if (statsSection) {
        const statsObserver = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !started) {
                statNumbers.forEach(stat => {
                    const target = +stat.getAttribute('data-target');
                    const suffix = stat.getAttribute('data-suffix') || '';
                    const duration = 2000; // 2 seconds
                    const increment = target / (duration / 16); // 60fps

                    let current = 0;
                    const updateCount = () => {
                        current += increment;
                        if (current < target) {
                            stat.innerText = Math.ceil(current) + suffix;
                            requestAnimationFrame(updateCount);
                        } else {
                            stat.innerText = target + suffix;
                        }
                    };
                    updateCount();
                });
                started = true;
            }
        });
        statsObserver.observe(statsSection);
    }
    // Theme Toggle
    const themeToggle = document.querySelector('.theme-toggle');
    const html = document.documentElement;
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const logo = document.getElementById('site-logo');

    html.setAttribute('data-theme', savedTheme);

    // Set initial logo
    if (logo) {
        logo.src = savedTheme === 'dark' ? 'assets/images/logo.png' : 'assets/images/logo-light.png';
    }

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);

            // Switch logo
            if (logo) {
                logo.src = newTheme === 'dark' ? 'assets/images/logo.png' : 'assets/images/logo-light.png';
            }
        });
    }
    // Services Page Pricing Logic
    const currencySelect = document.getElementById('currency-select');
    const rateToggle = document.getElementById('rate-toggle');
    const priceElements = document.querySelectorAll('.price-val');

    const exchangeRates = {
        'USD': { rate: 1, symbol: '$' },
        'EUR': { rate: 0.95, symbol: '€' },
        'GBP': { rate: 0.79, symbol: '£' },
        'CHF': { rate: 0.88, symbol: 'CHF ' },
        'AUD': { rate: 1.54, symbol: 'A$' },
        'CAD': { rate: 1.40, symbol: 'C$' },
        'JPY': { rate: 151, symbol: '¥' },
        'HKD': { rate: 7.78, symbol: 'HK$' },
        'NZD': { rate: 1.70, symbol: 'NZ$' },
        'INR': { rate: 84, symbol: '₹' },
        'ZAR': { rate: 18, symbol: 'R ' },
        'NGN': { rate: 1650, symbol: '₦' }
    };

    if (currencySelect && rateToggle) {
        let currentCurrency = 'USD';
        let currentRateType = 'standard'; // 'standard' or 'newbiz'

        function updatePrices() {
            const currencyData = exchangeRates[currentCurrency];
            const rateMultiplier = currentRateType === 'newbiz' ? 0.65 : 1; // 35% discount

            priceElements.forEach(el => {
                const basePrice = parseFloat(el.dataset.basePrice);
                if (!isNaN(basePrice)) {
                    let finalPrice = basePrice * currencyData.rate * rateMultiplier;

                    // Formatting
                    let formattedPrice;
                    // Round to whole numbers for currencies usually displayed that way
                    if (['JPY', 'NGN', 'INR'].includes(currentCurrency)) {
                        formattedPrice = Math.round(finalPrice).toLocaleString();
                    } else {
                        formattedPrice = finalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
                    }

                    el.textContent = `${currencyData.symbol}${formattedPrice}`;
                }
            });
        }

        // Currency Change
        currencySelect.addEventListener('change', (e) => {
            currentCurrency = e.target.value;
            updatePrices();
        });

        // Rate Toggle
        rateToggle.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                rateToggle.querySelector('.active').classList.remove('active');
                btn.classList.add('active');
                currentRateType = btn.dataset.value;
                updatePrices();
            });
        });

        // Initialize
        updatePrices();
    }

    // Duck animation removed
});
