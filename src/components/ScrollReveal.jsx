import { useEffect, useRef } from 'react';

const ScrollReveal = ({ children, className = '' }) => {
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    // Optional: remove visible to re-animate
                    // entry.target.classList.remove('visible'); 
                }
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px"
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
        <div ref={ref} className={`reveal ${className}`}>
            {children}
        </div>
    );
};

export default ScrollReveal;
