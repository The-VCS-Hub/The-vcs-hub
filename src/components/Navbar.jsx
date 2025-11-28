import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
    const location = useLocation();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isActive = (path) => location.pathname === path ? 'active' : '';

    return (
        <header class={`header ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
            <div class="container header__container">
                <Link to="/" class="logo">
                    <img src="/assets/images/logo.png" alt="The VCS Hub Logo" id="site-logo" />
                </Link>
                <nav class={`nav ${isMenuOpen ? 'active' : ''}`}>
                    <ul class="nav__list">
                        <li class="nav__item"><Link to="/" class={`nav__link ${isActive('/')}`} onClick={() => setIsMenuOpen(false)}>Home</Link></li>
                        <li class="nav__item"><Link to="/about" class={`nav__link ${isActive('/about')}`} onClick={() => setIsMenuOpen(false)}>About</Link></li>
                        <li class="nav__item"><Link to="/services" class={`nav__link ${isActive('/services')}`} onClick={() => setIsMenuOpen(false)}>Services</Link></li>
                        <li class="nav__item"><Link to="/careers" class={`nav__link ${isActive('/careers')}`} onClick={() => setIsMenuOpen(false)}>Careers</Link></li>
                        <li class="nav__item"><Link to="/contact" class={`nav__link ${isActive('/contact')}`} onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
                    </ul>
                </nav>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button class="theme-toggle" aria-label="Toggle Dark/Light Mode" onClick={toggleTheme}>
                        <svg class="toggle-icon moon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 3a9 9 0 1 0 9 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 0 1-4.4 2.26 5.403 5.403 0 0 1-3.14-9.8c-.44-.06-.9-.1-1.36-.1z" />
                        </svg>
                        <svg class="toggle-icon sun" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                            <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.29 1.29c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 0 0-1.41 0 .996.996 0 0 0 0 1.41l1.29 1.29c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41l-1.29-1.29zm1.29-10.57l-1.29 1.29c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.29-1.29c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0zm-12.37 12.37l-1.29 1.29c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.29-1.29c.39-.39.39-1.02 0-1.41a.996.996 0 0 0-1.41 0z" />
                        </svg>
                    </button>
                    <button class={`mobile-toggle ${isMenuOpen ? 'active' : ''}`} aria-label="Toggle navigation" onClick={toggleMenu}>
                        <span class="hamburger"></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
