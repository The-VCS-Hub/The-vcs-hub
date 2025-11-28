import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';

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
                            <h2 style={{ marginBottom: '1.5rem', color: 'var(--color-text-main)' }}>Current Openings</h2>
                            <p style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
                                There are no current openings at this time.
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
