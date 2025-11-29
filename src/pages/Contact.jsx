import { useState } from 'react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ScrollReveal';

const PaperPlane = () => (
    <motion.svg
        width="80"
        height="80"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        animate={{
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0],
            x: [0, 5, 0]
        }}
        transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
        }}
        style={{ marginBottom: '1rem', display: 'block' }}
    >
        <path
            d="M22 2L11 13"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
        <path
            d="M22 2L15 22L11 13L2 9L22 2Z"
            stroke="var(--color-primary)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </motion.svg>
);

const Contact = () => {
    const [status, setStatus] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.target);

        try {
            const response = await fetch("https://formsubmit.co/ajax/thevcshub@gmail.com", {
                method: "POST",
                body: formData
            });

            if (response.ok) {
                setStatus('success');
                e.target.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

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
                                <PaperPlane />
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
                                            <a href="https://www.instagram.com/thevcshub/" target="_blank" aria-label="Instagram" style={{ color: 'var(--color-text-main)' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                    <path fill="currentColor"
                                                        d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.8,5.8 0 0,1 16.2,22H7.8C4.6,22 2,19.4 2,16.2V7.8A5.8,5.8 0 0,1 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M19,5A1,1 0 0,1 20,6A1,1 0 0,1 19,7A1,1 0 0,1 18,6A1,1 0 0,1 19,5Z" />
                                                </svg>
                                            </a>
                                            <a href="https://www.linkedin.com/company/thevcshub/" target="_blank" aria-label="LinkedIn" style={{ color: 'var(--color-text-main)' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                    <path fill="currentColor"
                                                        d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                                                </svg>
                                            </a>
                                            <a href="https://x.com/thevcshub" target="_blank" aria-label="X" style={{ color: 'var(--color-text-main)' }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                    <path fill="currentColor"
                                                        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Form */}
                            <div className="contact-form-card">
                                {status === 'success' ? (
                                    <div style={{ textAlign: 'center', padding: '2rem' }}>
                                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Message Sent!</h3>
                                        <p style={{ color: 'var(--color-text-muted)' }}>Thank you for reaching out. We'll get back to you shortly.</p>
                                        <button
                                            onClick={() => setStatus(null)}
                                            className="btn btn-primary"
                                            style={{ marginTop: '1.5rem' }}
                                        >
                                            Send Another
                                        </button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit}>
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
                                        <input type="hidden" name="_subject" value="New Submission from The VCS Hub Website" />
                                        <button type="submit" className="btn btn-primary" style={{ width: '100%' }} disabled={status === 'loading'}>
                                            {status === 'loading' ? 'Sending...' : 'Send Message'}
                                        </button>
                                        {status === 'error' && (
                                            <p style={{ color: 'red', marginTop: '1rem', textAlign: 'center' }}>
                                                Something went wrong. Please try again later.
                                            </p>
                                        )}
                                    </form>
                                )}
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </>
    );
};

export default Contact;
