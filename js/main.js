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
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

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
            mobileToggle.classList.toggle('active'); // Add animation class if needed
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
});
