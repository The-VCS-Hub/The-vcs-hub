import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const Ghost = () => (
    <motion.svg
        width="100"
        height="100"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        style={{ margin: '0 auto 1.5rem', display: 'block' }}
    >
        <path
            d="M50 10C30 10 15 25 15 45V90L25 80L35 90L45 80L50 85L55 80L65 90L75 80L85 90V45C85 25 70 10 50 10Z"
            fill="var(--color-bg-alt)"
            stroke="var(--color-primary)"
            strokeWidth="2"
        />
        <circle cx="35" cy="40" r="3" fill="var(--color-text-main)" />
        <circle cx="65" cy="40" r="3" fill="var(--color-text-main)" />
        <motion.path
            d="M40 55Q50 65 60 55"
            stroke="var(--color-text-main)"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{ d: ["M40 55Q50 65 60 55", "M40 55Q50 50 60 55", "M40 55Q50 65 60 55"] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
    </motion.svg>
);

const Careers = () => {
    return (
        <>
            {/* Page Hero */}
            <section className="hero" style={{ minHeight: '40vh', paddingBottom: '2rem' }}>
                <div className="container">
                    <div className="hero__content" style={{ textAlign: 'center', margin: '0 auto' }}>
                        <h1 className="hero__title">Join Our <span className="highlight">Vision</span></h1>
                        <Link to="/contact" className="btn btn-primary">Connect With Us</Link>
                    </div>
                </div>
            </section>

            {/* Openings Section */}
            <section id="openings" style={{ padding: '4rem 0', textAlign: 'center' }}>
                <div className="container">
                    <ScrollReveal>
                        <div className="card" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem' }}>
                            <Ghost />
                            <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>Current Openings</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                                It's a bit of a ghost town here right now... <br />
                                <span style={{ fontSize: '0.9rem', fontStyle: 'italic' }}>(No open positions)</span>
                            </p>
                            <p style={{ color: 'var(--color-text-muted)' }}>
                                However, we are always looking for exceptional talent. Feel free to send your portfolio to
                                <a href="mailto:thevcshub@gmail.com"
                                    style={{ color: 'var(--color-primary)', fontWeight: 600, marginLeft: '0.5rem' }}>thevcshub@gmail.com</a>.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Culture / Stats */}
            <ScrollReveal>
                <section id="culture" className="metrics-band" style={{ marginTop: '4rem' }}>
                    <div className="container">
                        <h2 className="section__title" style={{ color: 'white', fontSize: '2rem', marginBottom: '3rem' }}>Why VCS Hub?</h2>
                        <div className="metrics-grid">
                            <div className="metric-item">
                                <h3 className="stat-number">100%</h3>
                                <p>Remote First</p>
                            </div>
                            <div className="metric-item">
                                <h3 className="stat-number">∞</h3>
                                <p>Growth Potential</p>
                            </div>
                            <div className="metric-item">
                                <h3 className="stat-number">1</h3>
                                <p>Shared Vision</p>
                            </div>
                        </div>
                    </div>
                </section>
            </ScrollReveal>
        </>
    );
};

export default Careers;
