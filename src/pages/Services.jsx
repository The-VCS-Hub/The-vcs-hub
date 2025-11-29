import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';
import TypingText from '../components/TypingText';

import Blueprint from '../components/Blueprint';

const Toggle = ({ value, onChange, options }) => {
    return (
        <div className="toggle-switch" style={{ position: 'relative', display: 'inline-flex', background: 'var(--color-bg-alt)', padding: '4px', borderRadius: '8px', border: '1px solid var(--color-border)' }}>
            {options.map((option) => (
                <button
                    key={option.value}
                    onClick={() => onChange(option.value)}
                    style={{
                        position: 'relative',
                        zIndex: 1,
                        background: 'transparent',
                        border: 'none',
                        padding: '8px 16px',
                        fontSize: '0.9rem',
                        fontWeight: value === option.value ? 600 : 500,
                        color: value === option.value ? 'var(--color-primary)' : 'var(--color-text-muted)',
                        cursor: 'pointer',
                        transition: 'color 0.2s',
                        whiteSpace: 'nowrap'
                    }}
                >
                    {value === option.value && (
                        <motion.div
                            layoutId="active-toggle"
                            style={{
                                position: 'absolute',
                                inset: 0,
                                background: 'var(--color-bg-card)',
                                borderRadius: '6px',
                                boxShadow: '0 2px 4px rgba(0,0,0,0.08)',
                                zIndex: -1,
                            }}
                            transition={{ type: "spring", stiffness: 500, damping: 30 }}
                        />
                    )}
                    {option.label}
                </button>
            ))}
        </div>
    );
};



const Services = () => {
    const [currency, setCurrency] = useState('USD');
    const [rateType, setRateType] = useState('standard'); // 'standard' or 'newbiz'

    const heroTexts = [
        "Comprehensive digital solutions tailored for enterprise growth.",
        "Strategic design that commands authority.",
        "Premium content creation for high-impact brands."
    ];

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

    const currencyOptions = [
        { value: "NGN", label: "NGN (₦)" },
        { value: "USD", label: "USD ($)" },
        { value: "GBP", label: "GBP (£)" },
        { value: "EUR", label: "EUR (€)" }
    ];

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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <>
            {/* Page Hero */}
            <section className="hero" style={{ minHeight: '40vh', paddingBottom: '2rem' }}>
                <div className="container">
                    <div className="hero__content" style={{ textAlign: 'center', margin: '0 auto' }}>
                        <h1 className="hero__title">Our <span className="highlight">Services</span></h1>
                        <div className="hero__subtitle" style={{ minHeight: '3.2em' }}>
                            <TypingText texts={heroTexts} />
                        </div>
                    </div>
                </div>
            </section>

            <section id="services" style={{ paddingTop: 0, position: 'relative', overflow: 'hidden' }}>
                <div className="container">
                    {/* Controls */}
                    <ScrollReveal>
                        <div className="pricing-controls"
                            style={{ background: 'var(--color-bg-alt)', padding: '1.5rem', borderRadius: '4px', marginBottom: '3rem', border: '1px solid var(--color-border)' }}>
                            <div className="toggle-group">
                                <span className="toggle-label"
                                    style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>Currency:</span>
                                <Toggle
                                    value={currency}
                                    onChange={setCurrency}
                                    options={currencyOptions}
                                />
                            </div>

                            <div className="toggle-group" id="rate-toggle">
                                <span className="toggle-label" style={{ fontWeight: 600, color: 'var(--color-text-main)' }}>Rate:</span>
                                <Toggle
                                    value={rateType}
                                    onChange={setRateType}
                                    options={[
                                        { value: 'standard', label: 'Standard' },
                                        { value: 'newbiz', label: 'New Biz (-35%)' }
                                    ]}
                                />
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Pricing Grid */}
                    <div style={{ position: 'relative' }}>
                        <Blueprint />
                        <motion.div
                            className="grid-3"
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            style={{ position: 'relative', zIndex: 1 }}
                        >
                            {/* 1. Visual Identity */}
                            <motion.div className="card" variants={itemVariants}>
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
                            </motion.div>

                            {/* 2. Content Creation */}
                            <motion.div className="card" variants={itemVariants}>
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
                            </motion.div>

                            {/* 3. Video Editing */}
                            <motion.div className="card" variants={itemVariants}>
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
                            </motion.div>

                            {/* 4. Voice-Over Services */}
                            <motion.div className="card" variants={itemVariants}>
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
                            </motion.div>

                            {/* 5. Starter Retainers */}
                            <motion.div className="card" variants={itemVariants} style={{ borderColor: 'var(--color-primary)', background: 'var(--color-bg-alt)' }}>
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
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Services;
