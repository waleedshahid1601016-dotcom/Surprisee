import { useState, useEffect, useCallback, useMemo } from 'react';

/**
 * useFloatingElements - Generates and manages floating animation elements
 * Optimized for performance with memoization
 */
export const useFloatingElements = (count = 15, regenerateInterval = null) => {
    const generateElements = useCallback(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            delay: Math.random() * 5,
            duration: 6 + Math.random() * 8,
            size: 0.6 + Math.random() * 1,
            opacity: 0.4 + Math.random() * 0.4
        }));
    }, [count]);

    const [elements, setElements] = useState(() => generateElements());

    useEffect(() => {
        if (regenerateInterval) {
            const interval = setInterval(() => {
                setElements(generateElements());
            }, regenerateInterval);
            return () => clearInterval(interval);
        }
    }, [generateElements, regenerateInterval]);

    return elements;
};

/**
 * useSparkles - Generates sparkle positions for animations
 */
export const useSparkles = (count = 20) => {
    const sparkles = useMemo(() => {
        return Array.from({ length: count }, (_, i) => ({
            id: i,
            left: Math.random() * 100,
            top: 20 + Math.random() * 60,
            delay: Math.random() * 5,
            duration: 3 + Math.random() * 4,
            size: 0.5 + Math.random() * 1
        }));
    }, [count]);

    return sparkles;
};

/**
 * useHeartEmojis - Returns memoized array of heart emojis
 */
export const useHeartEmojis = () => {
    return useMemo(() => ['💕', '💖', '💗', '💓', '💞', '💝', '❤️', '🩷', '💘'], []);
};

/**
 * useAnimationConfig - Returns memoized animation configurations
 */
export const useAnimationConfig = () => {
    return useMemo(() => ({
        spring: {
            type: 'spring',
            stiffness: 80,
            damping: 18
        },
        smooth: {
            ease: [0.25, 0.1, 0.25, 1],
            duration: 0.8
        },
        gentle: {
            ease: 'easeInOut',
            duration: 1
        },
        float: {
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut'
        },
        heartbeat: {
            duration: 1.5,
            repeat: Infinity,
            ease: 'easeInOut'
        }
    }), []);
};

/**
 * useDelayedState - State that updates after a delay
 */
export const useDelayedState = (initialValue, delay) => {
    const [value, setValue] = useState(initialValue);
    const [delayedValue, setDelayedValue] = useState(initialValue);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDelayedValue(value);
        }, delay);
        return () => clearTimeout(timeout);
    }, [value, delay]);

    return [delayedValue, setValue, value];
};

/**
 * useScrollProgress - Track scroll progress
 */
export const useScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollProgress = docHeight > 0 ? scrollTop / docHeight : 0;
            setProgress(scrollProgress);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return progress;
};
