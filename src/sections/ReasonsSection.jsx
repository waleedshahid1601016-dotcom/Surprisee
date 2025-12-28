import { memo, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components';
import { REASONS_I_LOVE_YOU } from '../constants';

/**
 * ReasonsSection - 50+ reasons I love you
 * Grid of animated reason cards with shuffle option
 */
const ReasonsSection = memo(() => {
    const [displayCount, setDisplayCount] = useState(12);
    const [isShuffled, setIsShuffled] = useState(false);

    const shuffledReasons = useMemo(() => {
        if (!isShuffled) return REASONS_I_LOVE_YOU;
        return [...REASONS_I_LOVE_YOU].sort(() => Math.random() - 0.5);
    }, [isShuffled]);

    const displayedReasons = useMemo(() =>
        shuffledReasons.slice(0, displayCount),
        [shuffledReasons, displayCount]);

    const handleShowMore = useCallback(() => {
        setDisplayCount(prev => Math.min(prev + 12, REASONS_I_LOVE_YOU.length));
    }, []);

    const handleShuffle = useCallback(() => {
        setIsShuffled(prev => !prev);
    }, []);

    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1
            }
        }
    }), []);

    const cardVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 30, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: { duration: 0.4, ease: 'easeOut' }
        }
    }), []);

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-pink-500/10 pointer-events-none" />

            {/* Decorative orbs */}
            <motion.div
                animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.3, 1] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-gradient-to-br from-pink-300 to-rose-400 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ opacity: [0.2, 0.35, 0.2], scale: [1.2, 1, 1.2] }}
                transition={{ duration: 12, repeat: Infinity }}
                className="absolute bottom-1/3 -right-40 w-[600px] h-[600px] bg-gradient-to-br from-rose-300 to-pink-500 rounded-full blur-3xl"
            />

            {/* Header */}
            <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16 px-4 relative z-10">
                <motion.span
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl inline-block mb-6"
                >
                    💖
                </motion.span>
                <h2
                    className="font-elegant text-4xl md:text-6xl text-white mb-4 font-bold"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                    {REASONS_I_LOVE_YOU.length}+ Reasons I Love You
                </h2>
                <p
                    className="font-cursive text-xl md:text-2xl text-white/90 mb-8"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
                >
                    And these are just the ones I could put into words 💕
                </p>

                {/* Shuffle Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleShuffle}
                    className="px-8 py-3 rounded-full font-cursive font-bold text-lg"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.9), rgba(255,182,193,0.9))',
                        boxShadow: '0 10px 30px rgba(157,23,77,0.3)',
                        border: '2px solid white'
                    }}
                >
                    <span className="text-pink-800">🔀 Shuffle Reasons</span>
                </motion.button>
            </AnimatedSection>

            {/* Reasons Grid */}
            <motion.div
                key={isShuffled ? 'shuffled' : 'original'}
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 relative z-10"
            >
                {displayedReasons.map((item, index) => (
                    <motion.div
                        key={`${item.reason}-${index}`}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.03,
                            y: -8,
                            transition: { duration: 0.2 }
                        }}
                        className="group"
                    >
                        <div
                            className="h-full rounded-xl sm:rounded-2xl p-5 sm:p-6 relative overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,182,193,0.3))',
                                boxShadow: '0 15px 40px rgba(157,23,77,0.2), 0 0 30px rgba(236,72,153,0.1)',
                                border: '2px solid rgba(255,255,255,0.8)'
                            }}
                        >
                            {/* Number Badge */}
                            <div
                                className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold"
                                style={{
                                    background: 'linear-gradient(135deg, #db2777, #ec4899)',
                                    color: 'white',
                                    boxShadow: '0 4px 10px rgba(219,39,119,0.3)'
                                }}
                            >
                                {index + 1}
                            </div>

                            {/* Emoji */}
                            <motion.span
                                animate={{
                                    scale: [1, 1.15, 1],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 3,
                                    repeat: Infinity,
                                    delay: index * 0.1
                                }}
                                className="text-4xl block mb-4"
                            >
                                {item.emoji}
                            </motion.span>

                            {/* Reason Text */}
                            <p className="font-cursive text-base sm:text-lg text-pink-900 font-bold leading-relaxed">
                                {item.reason}
                            </p>

                            {/* Hover heart */}
                            <motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                whileHover={{ opacity: 1, scale: 1 }}
                                className="absolute bottom-3 right-3 text-2xl"
                            >
                                💗
                            </motion.span>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Show More Button */}
            {displayCount < REASONS_I_LOVE_YOU.length && (
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center mt-12 relative z-10"
                >
                    <motion.button
                        whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(157,23,77,0.4)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleShowMore}
                        className="px-12 py-5 rounded-full font-cursive font-bold text-xl"
                        style={{
                            background: 'linear-gradient(135deg, #ffb6c1, #ffc0cb)',
                            boxShadow: '0 15px 40px rgba(157,23,77,0.3)',
                            border: '3px solid white'
                        }}
                    >
                        <span className="text-pink-900 flex items-center gap-3">
                            <span>Show More Reasons</span>
                            <motion.span
                                animate={{ y: [0, 3, 0] }}
                                transition={{ duration: 1, repeat: Infinity }}
                            >
                                💕
                            </motion.span>
                        </span>
                    </motion.button>
                    <p className="font-cursive text-white mt-4">
                        Showing {displayCount} of {REASONS_I_LOVE_YOU.length} reasons
                    </p>
                </motion.div>
            )}

            {/* All shown message */}
            {displayCount >= REASONS_I_LOVE_YOU.length && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mt-12 relative z-10"
                >
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-block px-10 py-5 rounded-full"
                        style={{
                            background: 'linear-gradient(135deg, #ffb6c1, #ffc0cb)',
                            boxShadow: '0 15px 50px rgba(157,23,77,0.3)'
                        }}
                    >
                        <p className="font-elegant text-2xl text-pink-900 font-bold">
                            And infinity more reasons that words cannot express 💕
                        </p>
                    </motion.div>
                </motion.div>
            )}
        </section>
    );
});

ReasonsSection.displayName = 'ReasonsSection';

export default ReasonsSection;
