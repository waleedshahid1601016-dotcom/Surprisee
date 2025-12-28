import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components';
import { FUTURE_DREAMS } from '../constants';

/**
 * FutureDreamsSection - Vision for future together
 * Beautiful cards showing shared dreams and goals
 */
const FutureDreamsSection = memo(() => {
    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    }), []);

    const cardVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 50, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    }), []);

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-pink-500/10 pointer-events-none" />

            {/* Decorative orbs */}
            <motion.div
                animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ opacity: [0.2, 0.35, 0.2], scale: [1.2, 1, 1.2] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute bottom-1/4 -left-32 w-[500px] h-[500px] bg-gradient-to-br from-rose-300 to-pink-500 rounded-full blur-3xl"
            />

            {/* Header */}
            <AnimatedSection className="text-center mb-10 sm:mb-14 md:mb-20 px-4 relative z-10">
                <motion.span
                    animate={{ scale: [1, 1.15, 1], y: [0, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl inline-block mb-6"
                >
                    🌟
                </motion.span>
                <h2
                    className="font-elegant text-4xl md:text-6xl text-white mb-4 font-bold"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                    Our Beautiful Future Together
                </h2>
                <p
                    className="font-cursive text-xl md:text-2xl text-white/90"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
                >
                    Dreams we will make come true, In Sha Allah 💕
                </p>
            </AnimatedSection>

            {/* Dreams Grid */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative z-10"
            >
                {FUTURE_DREAMS.map((dream, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.03,
                            y: -10,
                            transition: { duration: 0.3 }
                        }}
                        className="group"
                    >
                        <div
                            className="h-full rounded-3xl p-8 relative overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,182,193,0.3))',
                                boxShadow: '0 25px 60px rgba(157,23,77,0.25), 0 0 40px rgba(236,72,153,0.15)',
                                border: '3px solid rgba(255,255,255,0.8)'
                            }}
                        >
                            {/* Icon Container */}
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    scale: [1, 1.1, 1]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.2
                                }}
                                className="w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto"
                                style={{
                                    background: 'linear-gradient(135deg, #ffb6c1, #ffc0cb)',
                                    boxShadow: '0 10px 30px rgba(157,23,77,0.25)'
                                }}
                            >
                                <span className="text-4xl">{dream.icon}</span>
                            </motion.div>

                            {/* Title */}
                            <h3 className="font-cursive text-xl sm:text-2xl md:text-3xl text-pink-900 font-bold text-center mb-3 sm:mb-4">
                                {dream.title}
                            </h3>

                            {/* Description */}
                            <p className="text-pink-800 text-base sm:text-lg text-center leading-relaxed font-medium">
                                {dream.description}
                            </p>

                            {/* Decorative corners */}
                            <motion.span
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                                className="absolute top-4 left-4 text-2xl"
                            >
                                ✨
                            </motion.span>
                            <motion.span
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 + 0.5 }}
                                className="absolute bottom-4 right-4 text-2xl"
                            >
                                💕
                            </motion.span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom Message */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center mt-16 px-4 relative z-10"
            >
                <motion.div
                    animate={{ scale: [1, 1.03, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="inline-block px-12 py-6 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, #ffb6c1, #ffc0cb)',
                        boxShadow: '0 20px 60px rgba(157,23,77,0.3)'
                    }}
                >
                    <p className="font-elegant text-2xl md:text-3xl text-pink-900 font-bold">
                        With you, every dream feels possible 💕
                    </p>
                </motion.div>
            </motion.div>

            {/* Floating decorations */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center gap-4 mt-12"
            >
                {['🏠', '✈️', '💑', '🌙', '💍'].map((emoji, i) => (
                    <motion.span
                        key={i}
                        animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                        className="text-3xl"
                    >
                        {emoji}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
});

FutureDreamsSection.displayName = 'FutureDreamsSection';

export default FutureDreamsSection;
