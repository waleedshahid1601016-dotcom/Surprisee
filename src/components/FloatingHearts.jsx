import { memo, useEffect, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeartEmojis } from '../hooks';

/**
 * FloatingHearts - Creates a beautiful background of continuously floating hearts
 * Optimized with memo and hooks for smooth performance
 */
const FloatingHearts = memo(() => {
    const [hearts, setHearts] = useState([]);
    const heartEmojis = useHeartEmojis();

    // Generate a single heart with random properties
    const generateHeart = useCallback((id) => ({
        id,
        emoji: heartEmojis[Math.floor(Math.random() * heartEmojis.length)],
        left: Math.random() * 100,
        size: Math.random() * 1.2 + 0.8,
        duration: Math.random() * 8 + 12,
        delay: Math.random() * 2,
        opacity: Math.random() * 0.35 + 0.25,
    }), [heartEmojis]);

    useEffect(() => {
        // Initialize with hearts
        const initialHearts = Array.from({ length: 12 }, (_, i) => generateHeart(i));
        setHearts(initialHearts);

        // Add new hearts periodically
        const interval = setInterval(() => {
            setHearts(prev => {
                const newHeart = generateHeart(Date.now());
                // Keep only last 18 hearts to prevent memory issues
                return [...prev, newHeart].slice(-18);
            });
        }, 2500);

        return () => clearInterval(interval);
    }, [generateHeart]);

    return (
        <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
            <AnimatePresence>
                {hearts.map((heart) => (
                    <motion.div
                        key={heart.id}
                        initial={{
                            y: '110vh',
                            x: `${heart.left}vw`,
                            opacity: 0,
                            scale: 0,
                            rotate: -15
                        }}
                        animate={{
                            y: '-10vh',
                            opacity: [0, heart.opacity, heart.opacity, 0],
                            scale: heart.size,
                            rotate: [0, 8, -8, 4, 0]
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                            duration: heart.duration,
                            delay: heart.delay,
                            ease: 'linear',
                            rotate: {
                                duration: 5,
                                repeat: Infinity,
                                ease: 'easeInOut'
                            }
                        }}
                        className="absolute text-3xl md:text-4xl"
                        style={{ left: `${heart.left}%` }}
                    >
                        {heart.emoji}
                    </motion.div>
                ))}
            </AnimatePresence>
        </div>
    );
});

FloatingHearts.displayName = 'FloatingHearts';

export default FloatingHearts;
