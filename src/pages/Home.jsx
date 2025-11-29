import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import Stats from '../components/Stats';
import TypingText from '../components/TypingText';

const Home = () => {
    const heroTexts = [
        "We build the digital infrastructure that defines your legacy.",
        "We engineer credibility and visibility for high-trust professionals.",
        "We transform experience into influence through strategic design."
    ];

    const storyTexts = [
        "There's too much noise online. The world needs creative rebellion.",
        "VCS Hub was born to architect your brand's legacy, not just design it.",
        "We turn your digital outlook into infrastructure that commands authority."
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
                                <div className="story-text" style={{ textAlign: 'left', minHeight: '120px', fontSize: '1.1rem', lineHeight: '1.8' }}>
                                    <TypingText texts={storyTexts} typingSpeed={30} pauseDuration={3000} />
                                    <p style={{ fontWeight: 600, marginTop: '2rem' }}>- The VCS Team</p>
                                </div>
                            </div>
                            <div style={{ background: 'var(--color-bg-alt)', height: '100%', minHeight: '300px', borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src="/assets/images/logo-light.png" alt="The VCS Hub Logo" style={{ maxWidth: '50%', maxHeight: '50%', objectFit: 'contain', opacity: 0.8 }} />
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>

            {/* Portfolio Grid */}
            <ScrollReveal>
                <section id="portfolio">
                    <div className="container">
                        <h2 className="section__title" style={{ textAlign: 'center' }}>Selected Works</h2>
                        <p className="section__subtitle" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>A curated selection of our digital architecture.</p>

                        <div className="grid-3">
                            <div className="card" style={{ textAlign: 'center' }}>
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
                            <div className="card" style={{ textAlign: 'center' }}>
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
                            <div className="card" style={{ textAlign: 'center' }}>
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
                        <h2 className="section__title" style={{ textAlign: 'center' }}>Client Voices</h2>
                        <p className="section__subtitle" style={{ textAlign: 'center', margin: '0 auto 3rem' }}>What our partners say about our collaboration.</p>

                        <div className="grid-3">
                            <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>"The VCS Hub transformed
                                    our digital
                                    presence. Their attention to detail and premium aesthetic is unmatched."</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
                                    <div
                                        style={{ width: '40px', height: '40px', background: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                                        JD</div>
                                    <div style={{ textAlign: 'left' }}>
                                        <h5 style={{ margin: 0, fontSize: '0.9rem' }}>John Doe</h5>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>CEO,
                                            TechCorp</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>"A truly visionary team.
                                    They understood
                                    our brand identity and elevated it to a new level."</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
                                    <div
                                        style={{ width: '40px', height: '40px', background: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                                        AS</div>
                                    <div style={{ textAlign: 'left' }}>
                                        <h5 style={{ margin: 0, fontSize: '0.9rem' }}>Alice Smith</h5>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>Founder,
                                            CreativeStudio</span>
                                    </div>
                                </div>
                            </div>
                            <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem' }}>"Professional, innovative,
                                    and efficient.
                                    The best digital architecture firm we've worked with."</p>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
                                    <div
                                        style={{ width: '40px', height: '40px', background: 'var(--color-primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontWeight: 'bold' }}>
                                        MR</div>
                                    <div style={{ textAlign: 'left' }}>
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
