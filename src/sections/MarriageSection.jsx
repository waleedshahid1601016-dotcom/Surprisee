import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { AnimatedSection, GlowingCard } from '../components';

/**
 * MarriageSection - Emotional "waiting for you" messages with ring animations
 * 2 cards per row with romantic gold/rose styling
 */
const MarriageSection = () => {
    const ringRef = useRef(null);

    const messages = [
        {
            emoji: '💍',
            message: "I'm eagerly waiting to marry you, Laraib",
        },
        {
            emoji: '❤️',
            message: "I can't wait to call you my wife",
        },
        {
            emoji: '🌸',
            message: 'Every dream of mine includes you',
        },
        {
            emoji: '🤍',
            message: "I'm counting days for our halal togetherness",
        },
        {
            emoji: '✨',
            message: 'My forever begins with you',
        }
    ];

    useEffect(() => {
        // GSAP animation for the ring
        const ctx = gsap.context(() => {
            gsap.to(ringRef.current, {
                rotateY: 360,
                duration: 10,
                repeat: -1,
                ease: 'linear'
            });
        });

        return () => ctx.revert();
    }, []);

    // Smooth staggered animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            scale: 0.92
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 18,
                duration: 0.9
            }
        }
    };

    return (
        <section className="relative py-24 min-h-screen overflow-hidden">
            {/* Romantic gold/rose gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-amber-50/30 via-rose-50/40 to-pink-50/30 pointer-events-none" />

            {/* Golden glows */}
            <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 left-1/6 w-80 h-80 bg-gradient-to-br from-amber-200 to-rose-300 rounded-full blur-3xl opacity-25"
            />
            <motion.div
                animate={{ opacity: [0.25, 0.45, 0.25], scale: [1.1, 1, 1.1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-1/4 right-1/6 w-72 h-72 bg-gradient-to-br from-rose-200 to-amber-300 rounded-full blur-3xl opacity-25"
            />

            {/* Floating sparkles */}
            {[...Array(8)].map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [0, -80, 0],
                        x: [0, Math.random() * 40 - 20, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0]
                    }}
                    transition={{
                        duration: 4 + Math.random() * 2,
                        repeat: Infinity,
                        delay: Math.random() * 4,
                        ease: 'easeInOut'
                    }}
                    className="absolute text-2xl pointer-events-none"
                    style={{
                        left: `${10 + Math.random() * 80}%`,
                        top: `${20 + Math.random() * 60}%`
                    }}
                >
                    ✨
                </motion.div>
            ))}

            {/* Section Header */}
            <AnimatedSection className="text-center mb-16 px-4 relative z-10">
                <div className="relative inline-block">
                    {/* Ring with rotation */}
                    <motion.span
                        ref={ringRef}
                        className="text-7xl inline-block"
                        style={{ perspective: '1000px' }}
                    >
                        💍
                    </motion.span>

                    {/* Sparkle around ring */}
                    <motion.span
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.3, 0.5],
                            rotate: [0, 180, 360]
                        }}
                        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                        className="absolute -top-3 -right-3 text-2xl"
                    >
                        ✨
                    </motion.span>
                </div>

                <h2 className="font-elegant text-5xl md:text-7xl bg-gradient-to-r from-amber-500 via-rose-500 to-pink-500 bg-clip-text text-transparent mt-6 mb-4">
                    Waiting For You
                </h2>
                <p className="font-cursive text-xl md:text-2xl text-rose-500/80">
                    My heart counts every moment 💕
                </p>
            </AnimatedSection>

            {/* Messages Grid - 2 per row */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
            >
                {messages.map((item, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.03,
                            y: -8,
                            transition: { duration: 0.35, ease: 'easeOut' }
                        }}
                    >
                        <div className="glow-card rounded-3xl p-8 bg-gradient-to-br from-white/90 to-amber-50/80 border border-amber-200/40 shadow-lg shadow-amber-100/50">
                            <div className="flex flex-col items-center text-center">
                                {/* Floating emoji */}
                                <motion.span
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        delay: index * 0.15,
                                        ease: 'easeInOut'
                                    }}
                                    className="text-5xl mb-5"
                                >
                                    {item.emoji}
                                </motion.span>

                                {/* Message */}
                                <p className="font-cursive text-xl md:text-2xl bg-gradient-to-r from-amber-600 via-rose-500 to-pink-600 bg-clip-text text-transparent leading-relaxed">
                                    {item.message}
                                </p>

                                {/* Gold ornament */}
                                <div className="flex items-center gap-3 mt-6">
                                    <div className="w-10 h-px bg-gradient-to-r from-transparent to-amber-400" />
                                    <span className="text-amber-400 text-lg">💎</span>
                                    <div className="w-10 h-px bg-gradient-to-r from-amber-400 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom decoration */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.6 }}
                className="text-center mt-16 relative z-10"
            >
                <div className="flex justify-center items-center gap-4 mb-6">
                    <motion.span
                        animate={{ rotate: [0, -10, 0], y: [0, -5, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-5xl"
                    >
                        💍
                    </motion.span>
                    <motion.span
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="text-4xl"
                    >
                        💕
                    </motion.span>
                    <motion.span
                        animate={{ rotate: [0, 10, 0], y: [0, -5, 0] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: 0.3, ease: 'easeInOut' }}
                        className="text-5xl"
                    >
                        💍
                    </motion.span>
                </div>

                <motion.p
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="font-elegant text-2xl bg-gradient-to-r from-amber-500 to-rose-500 bg-clip-text text-transparent"
                >
                    InshaAllah, very soon... 🤲
                </motion.p>
            </motion.div>
        </section>
    );
};

export default MarriageSection;
