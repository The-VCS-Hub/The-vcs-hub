import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ScrollReveal from '../components/ScrollReveal';
import Stats from '../components/Stats';

const TypingText = ({ texts, typingSpeed = 20, deletingSpeed = 30, pauseDuration = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [textIndex, setTextIndex] = useState(0);

    useEffect(() => {
        const currentText = texts[textIndex];
        let timer;

        if (isDeleting) {
            timer = setTimeout(() => {
                setDisplayedText(currentText.substring(0, displayedText.length - 1));
            }, deletingSpeed);
        } else {
            timer = setTimeout(() => {
                setDisplayedText(currentText.substring(0, displayedText.length + 1));
            }, typingSpeed);
        }

        if (!isDeleting && displayedText === currentText) {
            clearTimeout(timer);
            timer = setTimeout(() => setIsDeleting(true), pauseDuration);
        } else if (isDeleting && displayedText === '') {
            setIsDeleting(false);
            setTextIndex((prev) => (prev + 1) % texts.length);
        }

        return () => clearTimeout(timer);
    }, [displayedText, isDeleting, textIndex, texts, typingSpeed, deletingSpeed, pauseDuration]);

    return <span>{displayedText}<span className="cursor-blink">|</span></span>;
};

const Home = () => {
    const heroTexts = [
        "We build the digital infrastructure that defines your legacy.",
        "We engineer credibility and visibility for high-trust professionals.",
        "We transform experience into influence through strategic design."
    ];

    return (
        <>
            {/* Hero Section */}
            <section id="home" className="hero">
                <div className="container">
                    <div className="hero__grid">
                        <div className="hero__content">
                            <h1 className="hero__title">Architecting Your <span className="highlight">Digital Authority</span></h1>
                            <div className="hero__subtitle">
                                <TypingText texts={heroTexts} />
                            </div>
                            <div className="hero__cta">
                                <Link to="/services" className="btn btn-primary">Our Services</Link>
                                <Link to="/contact" className="btn btn-outline">Start a Project</Link>
                            </div>
                        </div>
                        <div className="hero__visual">
                            <img src="/assets/images/hero-visual.png" alt="Abstract Visual"
                                style={{ width: '100%', height: 'auto', borderRadius: '8px' }} />
                        </div>
                    </div>
                </div>
            </section>

            {/* Metrics Band */}
            <Stats />

            {/* Story Section */}
            <ScrollReveal>
                <section id="story">
                    <div className="container">
                        <div className="hero__grid">
                            <div className="story-content">
                                <h2 className="section__title">Our Story</h2>
                                <p className="section__subtitle">Where Vision Meets Architecture</p>
                                <div className="story-text" style={{ textAlign: 'left' }}>
                                    <p>There's so much noise online, and in the world. As a result, there's a
                                        dire need for
                                        creative rebellion.</p>
                                    <p>VCS Hub was born from the strategic foresight needed to define a brand's
                                        legacy. We don't
                                        just design; we architect.</p>
                                    <p>We make your digital outlook a living, breathing infrastructure that
                                        commands authority.
                                    </p>
                                    <p style={{ fontWeight: 600, marginTop: '1rem' }}>- The VCS Team</p>
                                </div>
                            </div>
                            <div style={{ background: 'var(--color-bg-alt)', height: '100%', minHeight: '300px', borderRadius: '4px' }}>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Portfolio Grid */}
            <ScrollReveal>
                <section id="portfolio">
                    <div className="container">
                        <h2 className="section__title">Selected Works</h2>
                        <p className="section__subtitle">A curated selection of our digital architecture.</p>

                        <div className="grid-3">
                            <div className="card">
                                <div style={{ background: '#eee', height: '200px', marginBottom: '1rem', borderRadius: '2px' }}>
                                    <img src="/assets/images/portfolio-1.png" alt="Project 1"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h3 className="card__title">Identity Architecture</h3>
                                <p className="card__text">Brand Strategy & Design for a leading fintech firm.</p>
                                <Link to="#"
                                    style={{ color: 'var(--color-primary)', fontWeight: 600, marginTop: '1rem', display: 'inline-block' }}>View
                                    Case Study &rarr;</Link>
                            </div>
                            <div className="card">
                                <div style={{ background: '#eee', height: '200px', marginBottom: '1rem', borderRadius: '2px' }}>
                                    <img src="/assets/images/portfolio-2.png" alt="Project 2"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h3 className="card__title">Digital Dashboard</h3>
                                <p className="card__text">UI/UX Design for a global logistics platform.</p>
                                <Link to="#"
                                    style={{ color: 'var(--color-primary)', fontWeight: 600, marginTop: '1rem', display: 'inline-block' }}>View
                                    Case Study &rarr;</Link>
                            </div>
                            <div className="card">
                                <div style={{ background: '#eee', height: '200px', marginBottom: '1rem', borderRadius: '2px' }}>
                                    <img src="/assets/images/portfolio-3.png" alt="Project 3"
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                </div>
                                <h3 className="card__title">Infrastructure</h3>
                                <p className="card__text">Web Development for a high-growth startup.</p>
                                <Link to="#"
                                    style={{ color: 'var(--color-primary)', fontWeight: 600, marginTop: '1rem', display: 'inline-block' }}>View
                                    Case Study &rarr;</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Testimonials Grid */}
            <ScrollReveal>
                <section id="testimonials" style={{ background: 'var(--color-bg-alt)' }}>
                    <div className="container">
                        <h2 className="section__title">Client Voices</h2>
                        <p className="section__subtitle">What our partners say about our collaboration.</p>

                        <div className="grid-3">
                            <div className="card">
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>"The VCS Hub transformed
                                    our digital
                                    presence. Their attention to detail and premium aesthetic is unmatched."</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div
                                        style={{ width: '40px', height: '40px', background: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                                        JD</div>
                                    <div>
                                        <h5 style={{ margin: 0, fontSize: '0.9rem' }}>John Doe</h5>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>CEO,
                                            TechCorp</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>"A truly visionary team.
                                    They understood
                                    our brand identity and elevated it to a new level."</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div
                                        style={{ width: '40px', height: '40px', background: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                                        AS</div>
                                    <div>
                                        <h5 style={{ margin: 0, fontSize: '0.9rem' }}>Alice Smith</h5>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Founder,
                                            CreativeStudio</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card">
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>"Professional, innovative,
                                    and efficient.
                                    The best digital architecture firm we've worked with."</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                    <div
                                        style={{ width: '40px', height: '40px', background: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                                        MR</div>
                                    <div>
                                        <h5 style={{ margin: 0, fontSize: '0.9rem' }}>Michael Ross</h5>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Director,
                                            FutureInc</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </>
    );
};

export default Home;
