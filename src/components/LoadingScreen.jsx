import { memo, useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * LoadingScreen - Beautiful loading animation with progress
 */
const LoadingScreen = memo(({ onLoadComplete }) => {
    const [progress, setProgress] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Simulate loading progress
        const interval = setInterval(() => {
            setProgress(prev => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsComplete(true);
                        onLoadComplete?.();
                    }, 500);
                    return 100;
                }
                return prev + Math.random() * 15;
            });
        }, 200);

        return () => clearInterval(interval);
    }, [onLoadComplete]);

    const hearts = useMemo(() =>
        [...Array(12)].map((_, i) => ({
            id: i,
            left: 10 + (i * 7),
            delay: i * 0.3,
            duration: 3 + Math.random() * 2,
            emoji: ['💕', '💖', '💗', '❤️', '💝'][i % 5]
        })),
        []);

    return (
        <AnimatePresence>
            {!isComplete && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    transition={{ duration: 0.8, ease: 'easeInOut' }}
                    className="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #db2777 0%, #be185d 25%, #9d174d 50%, #be185d 75%, #db2777 100%)'
                    }}
                >
                    {/* Floating Hearts Background */}
                    {hearts.map(heart => (
                        <motion.span
                            key={heart.id}
                            initial={{ y: '100vh', opacity: 0 }}
                            animate={{
                                y: '-100vh',
                                opacity: [0, 0.8, 0.8, 0],
                                rotate: [0, 20, -20, 0]
                            }}
                            transition={{
                                duration: heart.duration,
                                repeat: Infinity,
                                delay: heart.delay,
                                ease: 'linear'
                            }}
                            className="absolute text-3xl pointer-events-none"
                            style={{ left: `${heart.left}%` }}
                        >
                            {heart.emoji}
                        </motion.span>
                    ))}

                    {/* Glowing Orbs */}
                    <motion.div
                        animate={{
                            scale: [1, 1.3, 1],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-pink-400/30 blur-3xl"
                    />
                    <motion.div
                        animate={{
                            scale: [1.3, 1, 1.3],
                            opacity: [0.3, 0.5, 0.3]
                        }}
                        transition={{ duration: 4, repeat: Infinity }}
                        className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-rose-400/30 blur-3xl"
                    />

                    {/* Main Content */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1 }}
                        className="relative z-10 text-center px-6 max-w-2xl"
                    >
                        {/* Animated Heart */}
                        <motion.div
                            animate={{
                                scale: [1, 1.2, 1, 1.15, 1],
                            }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="mb-8"
                        >
                            <span className="text-8xl drop-shadow-2xl">💕</span>
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-4 font-bold"
                            style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
                        >
                            Loading Your Surprise
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="font-cursive text-lg sm:text-xl md:text-2xl text-white/90 mb-8 sm:mb-12"
                        >
                            Something beautiful is being prepared... 💖
                        </motion.p>

                        {/* Progress Bar */}
                        <div className="w-full max-w-xs sm:max-w-sm mx-auto">
                            <div
                                className="h-3 rounded-full overflow-hidden"
                                style={{
                                    background: 'rgba(255,255,255,0.2)',
                                    boxShadow: 'inset 0 2px 10px rgba(0,0,0,0.1)'
                                }}
                            >
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: `${Math.min(progress, 100)}%` }}
                                    className="h-full rounded-full"
                                    style={{
                                        background: 'linear-gradient(90deg, #ffb6c1, #ffc0cb, #ffffff)',
                                        boxShadow: '0 0 20px rgba(255,182,193,0.8)'
                                    }}
                                />
                            </div>
                            <motion.p
                                className="text-white text-sm mt-3 font-medium"
                                animate={{ opacity: [0.7, 1, 0.7] }}
                                transition={{ duration: 1.5, repeat: Infinity }}
                            >
                                {Math.round(Math.min(progress, 100))}% with love 💕
                            </motion.p>
                        </div>

                        {/* Loading dots */}
                        <div className="flex justify-center gap-2 mt-8">
                            {[0, 1, 2].map(i => (
                                <motion.span
                                    key={i}
                                    animate={{
                                        y: [0, -10, 0],
                                        opacity: [0.5, 1, 0.5]
                                    }}
                                    transition={{
                                        duration: 1,
                                        repeat: Infinity,
                                        delay: i * 0.2
                                    }}
                                    className="text-2xl"
                                >
                                    💗
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
});

LoadingScreen.displayName = 'LoadingScreen';

export default LoadingScreen;
