import { motion } from 'framer-motion';
import { GlowingCard, AnimatedSection } from '../components';

/**
 * DuaSection - Islamic duas in softly glowing cards
 * 2 cards per row with peaceful, elegant styling
 */
const DuaSection = () => {
    const duas = [
        {
            emoji: '🤍',
            message: 'Ya Allah, protect Laraib and keep her safe always',
        },
        {
            emoji: '🌸',
            message: 'Ya Allah, fill her life with happiness and health',
        },
        {
            emoji: '💍',
            message: 'Ya Allah, bless our future and our marriage',
        },
        {
            emoji: '❤️',
            message: 'Ya Allah, keep love and mercy between our hearts',
        },
        {
            emoji: '🤲',
            message: 'Ya Allah, make us the best for each other',
        }
    ];

    // Smooth staggered animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
                delayChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 40,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                type: 'spring',
                stiffness: 80,
                damping: 20,
                duration: 0.9
            }
        }
    };

    return (
        <section className="relative py-24 min-h-screen">
            {/* Soft spiritual gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-50/20 via-teal-50/30 to-cyan-50/20 pointer-events-none" />

            {/* Peaceful glow */}
            <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-emerald-100 to-teal-200 rounded-full blur-3xl opacity-30"
            />

            {/* Section Header */}
            <AnimatedSection className="text-center mb-16 px-4 relative z-10">
                <motion.div
                    animate={{
                        scale: [1, 1.08, 1],
                        y: [0, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-7xl inline-block mb-6"
                >
                    🤲
                </motion.div>
                <h2 className="font-elegant text-5xl md:text-7xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 bg-clip-text text-transparent mb-4">
                    Prayers & Duas
                </h2>
                <p className="font-cursive text-xl md:text-2xl text-teal-500/80">
                    My heartfelt prayers for us 💫
                </p>
            </AnimatedSection>

            {/* Duas Grid - 2 per row */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
            >
                {duas.map((dua, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.02,
                            y: -6,
                            transition: { duration: 0.35, ease: 'easeOut' }
                        }}
                    >
                        <div className="glow-card rounded-3xl p-8 bg-gradient-to-br from-white/90 to-emerald-50/80 border border-emerald-200/40 shadow-lg shadow-emerald-100/50">
                            <div className="flex flex-col items-center text-center">
                                {/* Floating emoji */}
                                <motion.span
                                    animate={{
                                        y: [0, -8, 0],
                                        scale: [1, 1.05, 1]
                                    }}
                                    transition={{
                                        duration: 3.5,
                                        repeat: Infinity,
                                        delay: index * 0.15,
                                        ease: 'easeInOut'
                                    }}
                                    className="text-5xl mb-5"
                                >
                                    {dua.emoji}
                                </motion.span>

                                {/* Dua message */}
                                <p className="font-cursive text-xl md:text-2xl bg-gradient-to-r from-emerald-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent leading-relaxed">
                                    {dua.message}
                                </p>

                                {/* Decorative ornament */}
                                <div className="flex items-center gap-3 mt-6">
                                    <div className="w-12 h-px bg-gradient-to-r from-transparent to-teal-300" />
                                    <span className="text-teal-400 text-sm">✦</span>
                                    <div className="w-12 h-px bg-gradient-to-r from-teal-300 to-transparent" />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Ameen */}
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
                    className="font-elegant text-4xl bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent"
                >
                    آمین - Ameen 🤲
                </motion.p>
            </motion.div>
        </section>
    );
};

export default DuaSection;
