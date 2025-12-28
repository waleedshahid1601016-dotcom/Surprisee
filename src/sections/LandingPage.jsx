import { memo, useCallback } from 'react';
import { motion } from 'framer-motion';
import { useSparkles, useHeartEmojis } from '../hooks';

/**
 * LandingPage - Beautiful initial page with elegant reveal button
 * Darker pink theme with visible text and beautiful button
 */
const LandingPage = memo(({ onReveal }) => {
    const sparkles = useSparkles(20);
    const heartEmojis = useHeartEmojis();

    const handleReveal = useCallback(() => {
        onReveal();
    }, [onReveal]);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
            className="fixed inset-0 flex flex-col items-center justify-center overflow-hidden z-50"
            style={{
                background: 'linear-gradient(135deg, #db2777 0%, #be185d 25%, #9d174d 50%, #be185d 75%, #db2777 100%)'
            }}
        >
            {/* Animated gradient overlay */}
            <motion.div
                animate={{
                    background: [
                        'radial-gradient(circle at 30% 70%, rgba(244,114,182,0.3) 0%, transparent 50%)',
                        'radial-gradient(circle at 70% 30%, rgba(244,114,182,0.3) 0%, transparent 50%)',
                        'radial-gradient(circle at 30% 70%, rgba(244,114,182,0.3) 0%, transparent 50%)'
                    ]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
                className="absolute inset-0 pointer-events-none"
            />

            {/* Floating hearts background */}
            {heartEmojis.map((heart, i) => (
                <motion.span
                    key={`heart-${i}`}
                    initial={{ y: '110vh', opacity: 0 }}
                    animate={{
                        y: '-10vh',
                        opacity: [0, 0.8, 0.8, 0],
                        rotate: [0, 15, -15, 0],
                        scale: [0.8, 1.2, 1, 0.8]
                    }}
                    transition={{
                        duration: 12 + i * 0.8,
                        repeat: Infinity,
                        delay: i * 1.2,
                        ease: 'linear'
                    }}
                    className="absolute text-3xl md:text-4xl pointer-events-none"
                    style={{ left: `${5 + i * 10}%` }}
                >
                    {heart}
                </motion.span>
            ))}

            {/* Sparkles */}
            {sparkles.map((sparkle) => (
                <motion.span
                    key={`sparkle-${sparkle.id}`}
                    animate={{
                        y: [0, -100, 0],
                        opacity: [0, 1, 0],
                        scale: [0, sparkle.size, 0],
                        rotate: [0, 180, 360]
                    }}
                    transition={{
                        duration: sparkle.duration,
                        repeat: Infinity,
                        delay: sparkle.delay,
                        ease: 'easeInOut'
                    }}
                    className="absolute text-xl pointer-events-none"
                    style={{ left: `${sparkle.left}%`, top: `${sparkle.top}%` }}
                >
                    ✨
                </motion.span>
            ))}

            {/* Glowing orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, 30, 0],
                    y: [0, -20, 0]
                }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-pink-300 to-pink-400 blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1.3, 1, 1.3],
                    opacity: [0.2, 0.4, 0.2],
                    x: [0, -30, 0],
                    y: [0, 20, 0]
                }}
                transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-br from-pink-400 to-rose-400 blur-3xl"
            />

            {/* Main content */}
            <div className="relative z-10 text-center px-6 max-w-2xl">
                {/* Animated heart decoration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
                    className="mb-10"
                >
                    <motion.div
                        animate={{
                            scale: [1, 1.15, 1, 1.1, 1],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                        className="relative inline-block"
                    >
                        <span className="text-7xl md:text-8xl drop-shadow-2xl">💕</span>
                        <motion.span
                            animate={{
                                opacity: [0, 1, 0],
                                scale: [0.5, 1.2, 0.5],
                                rotate: [0, 180, 360]
                            }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                            className="absolute -top-2 -right-2 text-2xl"
                        >
                            ✨
                        </motion.span>
                    </motion.div>
                </motion.div>

                {/* Title */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="font-elegant text-5xl md:text-7xl lg:text-8xl text-white mb-8 font-bold"
                    style={{
                        textShadow: '0 4px 30px rgba(0,0,0,0.3), 0 2px 15px rgba(0,0,0,0.2)'
                    }}
                >
                    For My Beloved
                </motion.h1>

                {/* Name with glow */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.7 }}
                    className="font-cursive text-4xl md:text-6xl mb-12 font-bold"
                    style={{
                        color: '#ffffff',
                        textShadow: '0 0 40px rgba(255,255,255,0.6), 0 0 80px rgba(244,114,182,0.5), 0 4px 20px rgba(0,0,0,0.2)'
                    }}
                >
                    Laraib ❤️
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-lg md:text-xl text-white mb-16 font-medium tracking-wide"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
                >
                    I have prepared something special just for you...
                </motion.p>

                {/* Beautiful Reveal Button */}
                <motion.div
                    initial={{ opacity: 0, y: 30, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 1, delay: 1.3, type: 'spring', stiffness: 80 }}
                >
                    <motion.button
                        whileHover={{
                            scale: 1.08,
                            boxShadow: '0 0 60px rgba(255,255,255,0.7), 0 0 120px rgba(255,182,193,0.6), 0 35px 70px rgba(157,23,77,0.5)'
                        }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleReveal}
                        className="relative px-20 py-11 rounded-full text-xl md:text-2xl font-cursive font-bold cursor-pointer overflow-hidden button-shine"
                        style={{
                            background: 'linear-gradient(135deg, #ffb6c1 0%, #ffc0cb 30%, #ffd1dc 50%, #ffc0cb 70%, #ffb6c1 100%)',
                            boxShadow: '0 0 40px rgba(255,182,193,0.5), 0 25px 60px rgba(157,23,77,0.4), 0 0 80px rgba(255,192,203,0.3), inset 0 0 50px rgba(255,255,255,0.4)',
                            border: '3px solid rgba(255,255,255,0.9)'
                        }}
                    >
                        {/* Button content */}
                        <span className="relative z-10 flex items-center gap-4 text-pink-900">
                            <motion.span
                                animate={{
                                    scale: [1, 1.3, 1],
                                    rotate: [0, 10, -10, 0]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                                className="text-3xl"
                            >
                                🎁
                            </motion.span>
                            <span className="drop-shadow-sm font-bold">Open Your Surprise</span>
                            <motion.span
                                animate={{
                                    scale: [1, 1.3, 1],
                                    rotate: [0, -10, 10, 0]
                                }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                                className="text-3xl"
                            >
                                💖
                            </motion.span>
                        </span>
                    </motion.button>
                </motion.div>

                {/* Hint text */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ duration: 3, repeat: Infinity, delay: 2.5 }}
                    className="mt-14 text-white text-sm tracking-widest font-medium"
                >
                    ✨ Tap the button, my love ✨
                </motion.p>
            </div>

            {/* Bottom decoration */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 flex gap-5"
            >
                {['💕', '💖', '❤️', '💖', '💕'].map((heart, i) => (
                    <motion.span
                        key={`bottom-heart-${i}`}
                        animate={{
                            y: [0, -12, 0],
                            scale: [1, 1.15, 1]
                        }}
                        transition={{
                            duration: 2,
                            repeat: Infinity,
                            delay: i * 0.25,
                            ease: 'easeInOut'
                        }}
                        className="text-2xl md:text-3xl"
                    >
                        {heart}
                    </motion.span>
                ))}
            </motion.div>
        </motion.div>
    );
});

LandingPage.displayName = 'LandingPage';

export default LandingPage;
