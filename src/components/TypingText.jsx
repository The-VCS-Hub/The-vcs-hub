import { useState, useEffect } from 'react';

const TypingText = ({ texts, typingSpeed = 50, deletingSpeed = 30, pauseDuration = 2000, className = '' }) => {
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

    return <span className={className}>{displayedText}<span className="cursor-blink">|</span></span>;
};

export default TypingText;
