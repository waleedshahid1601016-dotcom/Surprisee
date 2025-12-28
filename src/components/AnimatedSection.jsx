import { memo } from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { useAnimationConfig } from '../hooks';

/**
 * AnimatedSection - A reusable wrapper that triggers animations when scrolled into view
 * Optimized with memo for smooth performance
 */
const AnimatedSection = memo(({
    children,
    className = '',
    delay = 0,
    direction = 'up', // 'up', 'down', 'left', 'right', 'fade'
    duration = 0.8
}) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const animConfig = useAnimationConfig();

    // Animation variants based on direction
    const getInitialPosition = () => {
        switch (direction) {
            case 'up': return { y: 60, opacity: 0 };
            case 'down': return { y: -60, opacity: 0 };
            case 'left': return { x: 60, opacity: 0 };
            case 'right': return { x: -60, opacity: 0 };
            case 'fade': return { opacity: 0, scale: 0.95 };
            default: return { y: 60, opacity: 0 };
        }
    };

    const getFinalPosition = () => {
        switch (direction) {
            case 'up':
            case 'down': return { y: 0, opacity: 1 };
            case 'left':
            case 'right': return { x: 0, opacity: 1 };
            case 'fade': return { opacity: 1, scale: 1 };
            default: return { y: 0, opacity: 1 };
        }
    };

    return (
        <motion.div
            ref={ref}
            initial={getInitialPosition()}
            animate={isInView ? getFinalPosition() : getInitialPosition()}
            transition={{
                duration,
                delay,
                ...animConfig.smooth
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;
