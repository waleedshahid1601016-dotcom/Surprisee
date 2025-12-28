import { motion } from 'framer-motion';
import { GlowingCard, AnimatedSection } from '../components';

/**
 * SorrySection - Emotional apology messages with soft, tender styling
 * 2 cards per row with heartfelt animations
 */
const SorrySection = () => {
    const apologies = [
        {
            emoji: '🤍',
            message: "I'm sorry for every time I hurt you unintentionally",
        },
        {
            emoji: '🥺',
            message: "I'm sorry for not understanding your feelings sometimes",
        },
        {
            emoji: '❤️',
            message: 'I promise to love you better every day',
        },
        {
            emoji: '🌸',
            message: 'Please forgive my mistakes and shortcomings',
        },
        {
            emoji: '💕',
            message: 'My heart never means to cause you pain',
        }
    ];

    // Gentle staggered animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.15
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            x: -20
        },
        visible: {
            opacity: 1,
            y: 0,
            x: 0,
            transition: {
                type: 'spring',
                stiffness: 70,
                damping: 18,
                duration: 1
            }
        }
    };

    return (
        <section className="relative py-24 min-h-screen">
            {/* Soft lavender gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-violet-50/30 via-purple-50/40 to-fuchsia-50/30 pointer-events-none" />

            {/* Emotional glow */}
            <motion.div
                animate={{ opacity: [0.2, 0.35, 0.2], scale: [1, 1.15, 1] }}
                transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/3 left-1/4 w-80 h-80 bg-gradient-to-br from-violet-200 to-purple-300 rounded-full blur-3xl opacity-25"
            />
            <motion.div
                animate={{ opacity: [0.25, 0.4, 0.25], scale: [1.1, 1, 1.1] }}
                transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-200 to-fuchsia-300 rounded-full blur-3xl opacity-25"
            />

            {/* Section Header */}
            <AnimatedSection className="text-center mb-16 px-4 relative z-10">
                <motion.div
                    animate={{
                        scale: [1, 0.92, 1],
                        rotate: [0, -3, 3, 0]
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-7xl inline-block mb-6"
                >
                    🥺
                </motion.div>
                <h2 className="font-elegant text-5xl md:text-7xl bg-gradient-to-r from-violet-500 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent mb-4">
                    From My Heart
                </h2>
                <p className="font-cursive text-xl md:text-2xl text-purple-500/80">
                    Words I need you to hear 💕
                </p>
            </AnimatedSection>

            {/* Apology Cards - 2 per row */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
            >
                {apologies.map((apology, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.03,
                            y: -8,
                            transition: { duration: 0.35, ease: 'easeOut' }
                        }}
                    >
                        <div className="glow-card rounded-3xl p-8 bg-gradient-to-br from-white/90 to-violet-50/80 border border-violet-200/40 shadow-lg shadow-violet-100/50">
                            <div className="flex flex-col items-center text-center">
                                {/* Floating emoji with heartbeat */}
                                <motion.span
                                    animate={{
                                        scale: [1, 1.15, 1, 1.1, 1],
                                        y: [0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        delay: index * 0.2,
                                        ease: 'easeInOut'
                                    }}
                                    className="text-5xl mb-5"
                                >
                                    {apology.emoji}
                                </motion.span>

                                {/* Message */}
                                <p className="font-cursive text-xl md:text-2xl bg-gradient-to-r from-violet-600 via-purple-500 to-fuchsia-600 bg-clip-text text-transparent leading-relaxed">
                                    {apology.message}
                                </p>

                                {/* Heartbeat hearts */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileInView={{ opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 }}
                                    className="flex justify-center gap-2 mt-6"
                                >
                                    {['💗', '💓', '💗'].map((heart, i) => (
                                        <motion.span
                                            key={i}
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.15,
                                                ease: 'easeInOut'
                                            }}
                                            className="text-sm"
                                        >
                                            {heart}
                                        </motion.span>
                                    ))}
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Final message */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.8 }}
                className="text-center mt-16 relative z-10"
            >
                <motion.p
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="font-elegant text-2xl md:text-3xl bg-gradient-to-r from-violet-500 to-purple-500 bg-clip-text text-transparent"
                >
                    I will spend my life making it up to you 💕
                </motion.p>
            </motion.div>
        </section>
    );
};

export default SorrySection;
