import { memo, useEffect, useState, useCallback } from 'react';
import { motion } from 'framer-motion';

/**
 * TypewriterText - Reveals text character by character like a typewriter
 * Optimized with memo for smooth performance
 */
const TypewriterText = memo(({
    text,
    className = '',
    speed = 50,
    delay = 0,
    showCursor = true,
    onComplete = () => { }
}) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isComplete, setIsComplete] = useState(false);
    const [started, setStarted] = useState(false);

    const handleComplete = useCallback(() => {
        onComplete();
    }, [onComplete]);

    useEffect(() => {
        const startTimeout = setTimeout(() => {
            setStarted(true);
        }, delay);

        return () => clearTimeout(startTimeout);
    }, [delay]);

    useEffect(() => {
        if (!started) return;

        let currentIndex = 0;
        const interval = setInterval(() => {
            if (currentIndex < text.length) {
                setDisplayedText(text.slice(0, currentIndex + 1));
                currentIndex++;
            } else {
                clearInterval(interval);
                setIsComplete(true);
                handleComplete();
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, started, handleComplete]);

    return (
        <span className={className}>
            {displayedText}
            {showCursor && !isComplete && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
                    className="inline-block ml-1 text-pink-500"
                >
                    |
                </motion.span>
            )}
        </span>
    );
});

TypewriterText.displayName = 'TypewriterText';

export default TypewriterText;
