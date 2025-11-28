import { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';

const Services = () => {
    const [currency, setCurrency] = useState('USD');
    const [rateType, setRateType] = useState('standard'); // 'standard' or 'newbiz'

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

    const calculatePrice = (basePrice) => {
        const currencyData = exchangeRates[currency];
        const rateMultiplier = rateType === 'newbiz' ? 0.65 : 1; // 35% discount
        const finalPrice = basePrice * currencyData.rate * rateMultiplier;

        if (['JPY', 'NGN', 'INR'].includes(currency)) {
            return Math.round(finalPrice).toLocaleString();
        } else {
            return finalPrice.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }
    };

    const getSymbol = () => exchangeRates[currency].symbol;

    return (
        <>
            {/* Page Hero */}
            <section className="hero" style={{ minHeight: '40vh', paddingBottom: '2rem' }}>
                <div className="container">
                    <div className="hero__content" style={{ textAlign: 'center', margin: '0 auto' }}>
                        <h1 className="hero__title">Our <span className="highlight">Services</span></h1>
                        <p className="hero__subtitle">Comprehensive digital solutions tailored for enterprise growth.</p>
                    </div>
                </div>
            </section>

            <section id="services" style={{ paddingTop: 0 }}>
                <div className="container">
                    {/* Controls */}
                    <ScrollReveal>
                        <div className="pricing-controls"
                            style={{ background: 'var(--color-bg-alt)', padding: '1.5rem', borderRadius: '4px', marginBottom: '3rem', border: '1px solid var(--color-border)' }}>
                            <div className="toggle-group">
                                <span className="toggle-label"
                                    style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>Currency:</span>
                                <div className="select-wrapper">
                                    <select
                                        id="currency-select"
                                        className="currency-select"
                                        value={currency}
                                        onChange={(e) => setCurrency(e.target.value)}
                                        style={{ background: 'white', border: '1px solid var(--color-border)', color: 'var(--color-text-main)', padding: '0.5rem', borderRadius: '4px' }}>
                                        <option value="USD">USD ($)</option>
                                        <option value="NGN">NGN (₦)</option>
                                        <option value="GBP">GBP (£)</option>
                                        <option value="EUR">EUR (€)</option>
                                        <option value="CHF">CHF (CHF)</option>
                                        <option value="AUD">AUD (A$)</option>
                                        <option value="CAD">CAD (C$)</option>
                                        <option value="JPY">JPY (¥)</option>
                                        <option value="HKD">HKD (HK$)</option>
                                        <option value="NZD">NZD (NZ$)</option>
                                        <option value="INR">INR (₹)</option>
                                        <option value="ZAR">ZAR (R)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="toggle-group" id="rate-toggle">
                                <span className="toggle-label" style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>Rate:</span>
                                <div className="toggle-switch"
                                    style={{ background: 'var(--color-bg-alt)', border: '1px solid var(--color-border)' }}>
                                    <button
                                        className={`toggle-btn ${rateType === 'standard' ? 'active' : ''}`}
                                        onClick={() => setRateType('standard')}>
                                        Standard
                                    </button>
                                    <button
                                        className={`toggle-btn ${rateType === 'newbiz' ? 'active' : ''}`}
                                        onClick={() => setRateType('newbiz')}>
                                        New Biz (-35%)
                                    </button>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Pricing Grid */}
                    <div className="grid-3">
                        {/* 1. Visual Identity */}
                        <ScrollReveal>
                            <div className="card">
                                <h3 className="card__title"
                                    style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                                    Visual Identity</h3>
                                <ul className="pricing-list">
                                    <li className="pricing-item">
                                        <span className="service-name">Logo Design (from scratch)</span>
                                        <div className="price-container">
                                            <span className="price-val">{getSymbol()}{calculatePrice(55)}</span>
                                        </div>
                                    </li>
                                    <li className="pricing-item">
                                        <span className="service-name">Logo Refresh/Review</span>
                                        <div className="price-container">
                                            <span className="price-val">{getSymbol()}{calculatePrice(25)}</span>
                                        </div>
                                    </li>
                                    <li className="pricing-item">
                                        <span className="service-name">Mini Brand Kit</span>
                                        <span className="service-desc">(logo, colors, fonts guide)</span>
                                        <div className="price-container">
                                            <span className="price-val">{getSymbol()}{calculatePrice(100)}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* 2. Content Creation */}
                        <ScrollReveal>
                            <div className="card">
                                <h3 className="card__title"
                                    style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                                    Content Creation</h3>
                                <ul className="pricing-list">
                                    <li className="pricing-item">
                                        <span className="service-name">Single Graphic/Post</span>
                                        <div className="price-container">
                                            <span className="price-val">{getSymbol()}{calculatePrice(11.50)}</span>
                                        </div>
                                    </li>
                                    <li className="pricing-item">
                                        <span className="service-name">Carousel Pack</span>
                                        <span className="service-desc">(5 slides)</span>
                                        <div className="price-container">
                                            <span className="price-val">{getSymbol()}{calculatePrice(32.50)}</span>
                                        </div>
                                    </li>
                                    <li className="pricing-item">
                                        <span className="service-name">Monthly Bundle</span>
                                        <span className="service-desc">(12 posts + captions)</span>
                                        <div className="price-container">
                                            <span className="price-val">{getSymbol()}{calculatePrice(125)}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* 3. Video Editing */}
                        <ScrollReveal>
                            <div className="card">
                                <h3 className="card__title"
                                    style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                                    Video Editing</h3>
                                <ul className="pricing-list">
                                    <li className="pricing-item">
                                        <span className="service-name">Basic Short</span>
                                        <span className="service-desc">(30–60 secs reel/TikTok)</span>
                                        <div className="price-container">
                                            <span className="price-val">{getSymbol()}{calculatePrice(27.50)}</span>
                                        </div>
                                    </li>
                                    <li className="pricing-item">
                                        <span className="service-name">Standard</span>
                                        <span className="service-desc">(1–3 mins promo)</span>
                                        <div className="price-container">
                                            <span className="price-val">{getSymbol()}{calculatePrice(65)}</span>
                                        </div>
                                    </li>
                                    <li className="pricing-item">
                                        <span className="service-name">Advanced</span>
                                        <span className="service-desc">(animated explainer/ad, up to 5 mins)</span>
                                        <div className="price-container">
                                            <span className="price-val">{getSymbol()}{calculatePrice(150)}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* 4. Voice-Over Services */}
                        <ScrollReveal>
                            <div className="card">
                                <h3 className="card__title"
                                    style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '1.5rem' }}>
                                    Voice-Over</h3>
                                <ul className="pricing-list">
                                    <li className="pricing-item">
                                        <span className="service-name">Short Script</span>
                                        <span className="service-desc">(up to 1 min)</span>
                                        <div className="price-container">
                                            <span className="price-val">{getSymbol()}{calculatePrice(20)}</span>
                                        </div>
                                    </li>
                                    <li className="pricing-item">
                                        <span className="service-name">Medium Script</span>
                                        <span className="service-desc">(2–3 mins)</span>
                                        <div className="price-container">
                                            <span className="price-val">{getSymbol()}{calculatePrice(45)}</span>
                                        </div>
                                    </li>
                                    <li className="pricing-item">
                                        <span className="service-name">Long Form</span>
                                        <span className="service-desc">(ads/narrations up to 5 mins)</span>
                                        <div className="price-container">
                                            <span className="price-val">{getSymbol()}{calculatePrice(85)}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>

                        {/* 5. Starter Retainers */}
                        <ScrollReveal>
                            <div className="card" style={{ borderColor: 'var(--color-primary)', background: 'var(--color-bg-alt)' }}>
                                <h3 className="card__title"
                                    style={{ borderBottom: '1px solid var(--color-border)', paddingBottom: '1rem', marginBottom: '1.5rem', color: 'var(--color-primary)' }}>
                                    Starter Retainers</h3>
                                <ul className="pricing-list">
                                    <li className="pricing-item">
                                        <span className="service-name">Monthly Creative Support</span>
                                        <span className="service-desc">(mix of graphics + edits)</span>
                                        <div className="price-container">
                                            <span className="price-val">{getSymbol()}{calculatePrice(200)}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
