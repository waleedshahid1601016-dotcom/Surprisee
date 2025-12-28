import { memo } from 'react';
import { motion } from 'framer-motion';

/**
 * HeartbeatText - Text with a pulsing heartbeat animation
 * Optimized with memo for smooth performance
 */
const HeartbeatText = memo(({
    children,
    className = '',
    delay = 0
}) => {
    return (
        <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className={`inline-block heartbeat ${className}`}
            style={{ animationDelay: `${delay}s` }}
        >
            {children}
        </motion.span>
    );
});

HeartbeatText.displayName = 'HeartbeatText';

export default HeartbeatText;
