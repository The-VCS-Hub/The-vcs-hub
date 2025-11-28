import ScrollReveal from '../components/ScrollReveal';

const Contact = () => {
    return (
        <>
            {/* Page Hero */}
            <section className="hero" style={{ minHeight: '40vh', paddingBottom: '2rem' }}>
                <div className="container">
                    <div className="hero__content" style={{ textAlign: 'center', margin: '0 auto' }}>
                        <h1 className="hero__title">Contact <span className="highlight">Us</span></h1>
                        <p className="hero__subtitle">Ready to build your legacy? Let's talk.</p>
                    </div>
                </div>
            </section>

            <section id="contact" style={{ paddingTop: 0 }}>
                <div className="container">
                    <ScrollReveal>
                        <div className="grid-2"
                            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'start' }}>
                            {/* Contact Info */}
                            <div>
                                <h2 className="section__title" style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '1.5rem' }}>Get
                                    in Touch</h2>
                                <p
                                    style={{ fontSize: '1.1rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.6 }}>
                                    We work with a select number of clients to ensure maximum attention and impact.
                                    If you're ready to elevate your brand, reach out.
                                </p>
                                <div className="contact-info">
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Email</h4>
                                        <a href="mailto:thevcshub@gmail.com"
                                            style={{ color: 'var(--color-primary)', fontWeight: 600, fontSize: '1.1rem' }}>thevcshub@gmail.com</a>
                                    </div>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <h4 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Socials</h4>
                                        <div className="social-links" style={{ display: 'flex', gap: '1rem' }}>
                                            <a href="https://www.instagram.com/thevcshub/" target="_blank" aria-label="Instagram" style={{ color: 'var(--color-text-main)' }}>Instagram</a>
                                            <a href="https://www.linkedin.com/company/thevcshub/" target="_blank" aria-label="LinkedIn" style={{ color: 'var(--color-text-main)' }}>LinkedIn</a>
                                            <a href="https://x.com/thevcshub" target="_blank" aria-label="X" style={{ color: 'var(--color-text-main)' }}>X (Twitter)</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="contact-form-card">
                                <form action="https://formsubmit.co/thevcshub@gmail.com" method="POST">
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label htmlFor="name" className="form-label">Name</label>
                                        <input type="text" id="name" name="name" className="form-input" required placeholder="John Doe" />
                                    </div>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label htmlFor="email" className="form-label">Email</label>
                                        <input type="email" id="email" name="email" className="form-input" required placeholder="john@example.com" />
                                    </div>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label htmlFor="subject" className="form-label">Subject</label>
                                        <input type="text" id="subject" name="subject" className="form-input" required placeholder="Project Inquiry" />
                                    </div>
                                    <div style={{ marginBottom: '1.5rem' }}>
                                        <label htmlFor="message" className="form-label">Message</label>
                                        <textarea id="message" name="message" className="form-textarea" rows="5" required
                                            placeholder="Tell us about your project..."></textarea>
                                    </div>
                                    <input type="hidden" name="_next" value="https://thevcshub.netlify.app/contact.html" />
                                    <input type="hidden" name="_subject" value="New Submission from The VCS Hub Website" />
                                    <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Send Message</button>
                                </form>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
};

export default Contact;
