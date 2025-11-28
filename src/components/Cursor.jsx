import { useEffect, useState } from 'react';

const Cursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        const updatePosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseEnter = () => setIsHovered(true);
        const handleMouseLeave = () => setIsHovered(false);

        document.addEventListener('mousemove', updatePosition);

        // Add listeners to interactive elements
        const interactiveElements = document.querySelectorAll('a, button, .card, .team-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', handleMouseEnter);
            el.addEventListener('mouseleave', handleMouseLeave);
        });

        // MutationObserver to handle dynamically added elements
        const observer = new MutationObserver((mutations) => {
            const newElements = document.querySelectorAll('a, button, .card, .team-card');
            newElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
                el.addEventListener('mouseenter', handleMouseEnter);
                el.addEventListener('mouseleave', handleMouseLeave);
            });
        });

        observer.observe(document.body, { childList: true, subtree: true });

        return () => {
            document.removeEventListener('mousemove', updatePosition);
            interactiveElements.forEach(el => {
                el.removeEventListener('mouseenter', handleMouseEnter);
                el.removeEventListener('mouseleave', handleMouseLeave);
            });
            observer.disconnect();
        };
    }, []);

    return (
        <div 
            className={`cursor ${isHovered ? 'hovered' : ''}`}
            style={{ 
                left: `${position.x}px`, 
                top: `${position.y}px`,
                position: 'fixed',
                pointerEvents: 'none',
                zIndex: 9999,
                transform: 'translate(-50%, -50%)'
            }}
        />
    );
};

export default Cursor;
