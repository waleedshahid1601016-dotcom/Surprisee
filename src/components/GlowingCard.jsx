import { memo } from 'react';
import { motion } from 'framer-motion';
import { useAnimationConfig } from '../hooks';

/**
 * GlowingCard - A beautiful card with glowing borders and soft shadows
 * Optimized with memo for smooth performance
 */
const GlowingCard = memo(({
    children,
    className = '',
    pulse = false,
    hover = true,
    delay = 0
}) => {
    const animConfig = useAnimationConfig();

    return (
        <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
                duration: 0.7,
                delay,
                ...animConfig.smooth
            }}
            whileHover={hover ? {
                scale: 1.02,
                y: -5,
                transition: { duration: 0.3 }
            } : {}}
            className={`
        glow-card rounded-3xl p-8
        ${pulse ? 'glow-pulse' : ''}
        ${className}
      `}
        >
            {children}
        </motion.div>
    );
});

GlowingCard.displayName = 'GlowingCard';

export default GlowingCard;
