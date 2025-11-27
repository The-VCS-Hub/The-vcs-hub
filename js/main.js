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
                entry.target.classList.remove('scrolled-past');
            } else {
                // Element leaves viewport
                if (entry.boundingClientRect.top < 0) {
                    // Scrolled past (leaves to the top)
                    entry.target.classList.add('scrolled-past');
                    entry.target.classList.remove('visible');
                } else {
                    // Below viewport (waiting to enter)
                    // Optional: remove visible if you want it to fade out when scrolling back up
                    // entry.target.classList.remove('visible'); 
                }
            }
        });
    }, {
        threshold: 0.15, // Trigger slightly later
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

    html.setAttribute('data-theme', savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = html.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }
    // Services Page Toggles
    const currencyToggle = document.getElementById('currency-toggle');
    const rateToggle = document.getElementById('rate-toggle');

    if (currencyToggle && rateToggle) {
        let currentCurrency = 'usd';
        let currentRate = 'standard';

        function updatePrices() {
            // Hide all prices first
            document.querySelectorAll('.price-val').forEach(el => {
                el.classList.add('hidden');
            });

            // Show relevant prices
            const selector = `.price-${currentCurrency}.price-${currentRate === 'standard' ? 'std' : 'biz'}`;
            document.querySelectorAll(selector).forEach(el => {
                el.classList.remove('hidden');
            });
        }

        // Currency Toggle
        currencyToggle.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                currencyToggle.querySelector('.active').classList.remove('active');
                btn.classList.add('active');

                // Update state and UI
                currentCurrency = btn.dataset.value;
                updatePrices();
            });
        });

        // Rate Toggle
        rateToggle.querySelectorAll('.toggle-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                // Update active state
                rateToggle.querySelector('.active').classList.remove('active');
                btn.classList.add('active');

                // Update state and UI
                currentRate = btn.dataset.value;
                updatePrices();
            });
        });

        // Initialize
        updatePrices();
    }
});
