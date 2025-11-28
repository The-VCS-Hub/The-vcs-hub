import { useEffect, useRef, useState } from 'react';

const Stats = () => {
    const [hasStarted, setHasStarted] = useState(false);
    const sectionRef = useRef(null);

    // State for numbers
    const [projects, setProjects] = useState(0);
    const [partners, setPartners] = useState(0);
    const [retention, setRetention] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasStarted) {
                    setHasStarted(true);
                    animateValue(setProjects, 50, 2000);
                    animateValue(setPartners, 15, 2000);
                    animateValue(setRetention, 100, 2000);
                }
            },
            { threshold: 0.15 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [hasStarted]);

    const animateValue = (setter, target, duration) => {
        const start = 0;
        const increment = target / (duration / 16);
        let current = start;

        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setter(target);
                clearInterval(timer);
            } else {
                setter(Math.ceil(current));
            }
        }, 16);
    };

    return (
        <section id="stats" className="metrics-band reveal visible" ref={sectionRef}>
            <div className="container">
                <div className="metrics-grid">
                    <div className="metric-item">
                        <h3 className="stat-number">{projects}+</h3>
                        <p>Projects Architected</p>
                    </div>
                    <div className="metric-item">
                        <h3 className="stat-number">{partners}+</h3>
                        <p>Global Partners</p>
                    </div>
                    <div className="metric-item">
                        <h3 className="stat-number">{retention}%</h3>
                        <p>Client Retention</p>
                    </div>
                    <div className="metric-item">
                        <h3 className="infinity-icon">∞</h3>
                        <p>Possibilities</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;
