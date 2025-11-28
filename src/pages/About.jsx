import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

const About = () => {
    return (
        <>
            {/* Page Hero */}
            <section className="hero" style={{ minHeight: '40vh', paddingBottom: '2rem' }}>
                <div className="container">
                    <div className="hero__content" style={{ textAlign: 'center', margin: '0 auto' }}>
                        <h1 className="hero__title">About <span className="highlight">The VCS Hub</span></h1>
                        <p className="hero__subtitle">Your name should carry weight.</p>
                    </div>
                </div>
            </section>

            <section id="about" style={{ paddingTop: 0 }}>
                <div className="container">
                    {/* Intro */}
                    <ScrollReveal>
                        <div className="about-intro"
                            style={{ maxWidth: '900px', margin: '0 auto 4rem', textAlign: 'center', fontSize: '1.25rem', lineHeight: 1.8 }}>
                            <p>We are an Identity Architecture firm that engineers credibility and visibility for high-trust
                                professionals, thought leaders, and founder-led brands. We transform experience into influence
                                through a blend of research, strategy, design, and visibility systems.</p>
                        </div>
                    </ScrollReveal>

                    {/* Vision & Mission */}
                    <ScrollReveal>
                        <div className="grid-2"
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
                            <div className="card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
                                <h3 className="card__title">Vision</h3>
                                <p className="card__text">To help silent giants turn their expertise into visible authority that
                                    opens doors, builds trust, and commands influence.</p>
                            </div>
                            <div className="card" style={{ borderLeft: '4px solid var(--color-primary)' }}>
                                <h3 className="card__title">Mission</h3>
                                <p className="card__text">To equip elite professionals and high-performing brands with the tools,
                                    narratives, and systems to transition from invisible to influential.</p>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Core Pillars */}
                    <ScrollReveal>
                        <div style={{ marginBottom: '4rem' }}>
                            <h3 className="section__title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Core Pillars</h3>
                            <div className="grid-3">
                                <div className="card">
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Strategy
                                    </h4>
                                    <p className="card__text">We begin with research, context, and insight. Identity is not
                                        aesthetics. It’s alignment.</p>
                                </div>
                                <div className="card">
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Design
                                    </h4>
                                    <p className="card__text">From visuals to language, we craft assets that convey authority and
                                        trust.</p>
                                </div>
                                <div className="card">
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Visibility
                                    </h4>
                                    <p className="card__text">We deploy content, positioning, and platform strategy to ensure great
                                        clients are seen for their worth.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Candidates */}
                    <ScrollReveal>
                        <div style={{ marginBottom: '4rem', background: 'var(--color-bg-alt)', padding: '3rem', borderRadius: '4px' }}>
                            <h3 className="section__title" style={{ fontSize: '2rem', marginBottom: '2rem' }}>Who We Help</h3>
                            <div className="grid-4">
                                <div className="card" style={{ background: 'white' }}>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 700 }}>Silent Giants</h4>
                                    <p className="card__text" style={{ fontSize: '0.9rem' }}>Experts who’ve mastered their craft but
                                        never documented it.</p>
                                </div>
                                <div className="card" style={{ background: 'white' }}>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 700 }}>Founders</h4>
                                    <p className="card__text" style={{ fontSize: '0.9rem' }}>Building something powerful, but lack
                                        narrative clarity.</p>
                                </div>
                                <div className="card" style={{ background: 'white' }}>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 700 }}>Professionals</h4>
                                    <p className="card__text" style={{ fontSize: '0.9rem' }}>Lawyers, VCs, advisors, architects,
                                        consultants.</p>
                                </div>
                                <div className="card" style={{ background: 'white' }}>
                                    <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', fontWeight: 700 }}>Founder-Led Brands
                                    </h4>
                                    <p className="card__text" style={{ fontSize: '0.9rem' }}>Brands where the identity of the founder is
                                        core to the mission.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Values & Beliefs */}
                    <ScrollReveal>
                        <div className="grid-2"
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
                            <div>
                                <h3 className="section__title" style={{ fontSize: '2rem', textAlign: 'left', marginBottom: '1.5rem' }}>
                                    Internal Values</h3>
                                <ul style={{ listStyle: 'none' }}>
                                    <li
                                        style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid var(--color-primary)' }}>
                                        <strong>Precision:</strong> Everything is intentional. No noise, only signal.
                                    </li>
                                    <li
                                        style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid var(--color-primary)' }}>
                                        <strong>Clarity:</strong> Complexity simplified. Clutter removed.
                                    </li>
                                    <li
                                        style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid var(--color-primary)' }}>
                                        <strong>Discretion:</strong> We operate with confidentiality and care.
                                    </li>
                                    <li
                                        style={{ marginBottom: '1rem', paddingLeft: '1rem', borderLeft: '3px solid var(--color-primary)' }}>
                                        <strong>Elevation:</strong> We elevate silent experts into visible authorities.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="section__title" style={{ fontSize: '2rem', textAlign: 'left', marginBottom: '1.5rem' }}>Our
                                    Beliefs</h3>
                                <div style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                                    <p style={{ marginBottom: '1rem' }}>Building is not broadcasting. Presence without positioning
                                        is noise.</p>
                                    <p style={{ marginBottom: '1rem' }}>Underqualified is often just undocumented. We fix that.</p>
                                    <p style={{ marginBottom: '1rem' }}>Being great isn't enough. You must be seen as great.</p>
                                    <p style={{ fontWeight: 600, color: 'var(--color-primary)' }}>Silent giants deserve to be heard,
                                        seen, and paid accordingly.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Team Section */}
                    <ScrollReveal>
                        <div className="team-section">
                            <h3 className="section__title" style={{ marginBottom: '3rem' }}>Meet the Co-Founders</h3>
                            <div className="grid-2"
                                style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
                                {/* Chibuzor Nwachukwu */}
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div
                                        style={{ width: '100%', aspectRatio: '1', overflow: 'hidden', borderRadius: '4px', marginBottom: '1.5rem', background: '#eee' }}>
                                        <img src="/assets/images/chibuzor-nwachukwu.jpg" alt="Chibuzor Nwachukwu"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter 0.3s' }} />
                                    </div>
                                    <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Chibuzor Nwachukwu</h4>
                                    <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1rem' }}>Co-Founder &
                                        CEO</p>
                                    <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>“We hire
                                        smart people so they can tell us what to do”</p>
                                    <div className="social-links" style={{ justifyContent: 'center', gap: '1rem', display: 'flex' }}>
                                        <a href="https://www.instagram.com/thechibuzornwachukwu/" target="_blank"
                                            aria-label="Instagram">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="currentColor"
                                                    d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M19,5A1,1 0 0,1 20,6A1,1 0 0,1 19,7A1,1 0 0,1 18,6A1,1 0 0,1 19,5Z" />
                                            </svg>
                                        </a>
                                        <a href="https://www.linkedin.com/in/thechibuzornwachukwu/" target="_blank"
                                            aria-label="LinkedIn">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="currentColor"
                                                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                            </svg>
                                        </a>
                                        <a href="https://x.com/thechibuzornwac" target="_blank" aria-label="X (Twitter)">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="currentColor"
                                                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                {/* Freda Efod */}
                                <div className="card" style={{ textAlign: 'center' }}>
                                    <div
                                        style={{ width: '100%', aspectRatio: '1', overflow: 'hidden', borderRadius: '4px', marginBottom: '1.5rem', background: '#eee' }}>
                                        <img src="/assets/images/freda-efod.png" alt="Freda Efod"
                                            style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(100%)', transition: 'filter 0.3s' }} />
                                    </div>
                                    <h4 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>Freda Efod</h4>
                                    <p style={{ color: 'var(--color-primary)', fontWeight: 600, marginBottom: '1rem' }}>Co-Founder &
                                        CCO</p>
                                    <p style={{ fontStyle: 'italic', color: 'var(--color-text-muted)', marginBottom: '1rem' }}>
                                        “Ignore the previous guy please”</p>
                                    <div className="social-links" style={{ justifyContent: 'center', gap: '1rem', display: 'flex' }}>
                                        <a href="https://www.instagram.com/mindsofrida/" target="_blank" aria-label="Instagram">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="currentColor"
                                                    d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M19,5A1,1 0 0,1 20,6A1,1 0 0,1 19,7A1,1 0 0,1 18,6A1,1 0 0,1 19,5Z" />
                                            </svg>
                                        </a>
                                        <a href="https://ng.linkedin.com/in/freda-efod-54a514137" target="_blank"
                                            aria-label="LinkedIn">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="currentColor"
                                                    d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                            </svg>
                                        </a>
                                        <a href="https://x.com/Freeeduh1" target="_blank" aria-label="X (Twitter)">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                <path fill="currentColor"
                                                    d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
};

export default About;
