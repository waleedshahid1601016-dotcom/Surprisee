import { memo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../components';
import { LOVE_LETTER } from '../constants';

/**
 * LoveLetterSection - Dedicated love letter with typewriter effect
 * Paper/envelope design with unfolding animation
 */
const LoveLetterSection = memo(() => {
    const [isOpened, setIsOpened] = useState(false);
    const [showFullLetter, setShowFullLetter] = useState(false);

    const handleOpen = useCallback(() => {
        setIsOpened(true);
        setTimeout(() => setShowFullLetter(true), 800);
    }, []);

    const paragraphs = LOVE_LETTER.split('\n\n');

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-pink-500/10 pointer-events-none" />

            {/* Decorative elements */}
            <motion.div
                animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-20 -right-20 w-80 h-80 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full blur-3xl"
            />

            {/* Header */}
            <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16 px-4 relative z-10">
                <motion.span
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl inline-block mb-6"
                >
                    💌
                </motion.span>
                <h2
                    className="font-elegant text-4xl md:text-6xl text-white mb-4 font-bold"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                    A Love Letter For You
                </h2>
                <p
                    className="font-cursive text-xl md:text-2xl text-white/90"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
                >
                    Words straight from my heart to yours 💕
                </p>
            </AnimatedSection>

            {/* Letter Container */}
            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <AnimatePresence mode="wait">
                    {!isOpened ? (
                        /* Envelope */
                        <motion.div
                            key="envelope"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, rotateX: 90 }}
                            transition={{ duration: 0.8 }}
                            className="relative mx-auto max-w-xs sm:max-w-md cursor-pointer"
                            onClick={handleOpen}
                        >
                            <motion.div
                                whileHover={{ scale: 1.03, y: -5 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative"
                            >
                                {/* Envelope Body */}
                                <div
                                    className="aspect-[4/3] rounded-xl sm:rounded-2xl relative overflow-hidden"
                                    style={{
                                        background: 'linear-gradient(135deg, #fce7f3, #fbcfe8)',
                                        boxShadow: '0 30px 80px rgba(157,23,77,0.3), 0 0 50px rgba(236,72,153,0.2)',
                                        border: '4px solid rgba(255,255,255,0.9)'
                                    }}
                                >
                                    {/* Envelope Flap */}
                                    <motion.div
                                        animate={{ rotateX: [0, 5, 0] }}
                                        transition={{ duration: 3, repeat: Infinity }}
                                        className="absolute top-0 left-0 right-0 h-1/2"
                                        style={{
                                            background: 'linear-gradient(180deg, #f9a8d4, #fbcfe8)',
                                            clipPath: 'polygon(0 0, 50% 80%, 100% 0)',
                                            transformOrigin: 'top center'
                                        }}
                                    />

                                    {/* Heart Seal */}
                                    <motion.div
                                        animate={{ scale: [1, 1.15, 1] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                                    >
                                        <div
                                            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
                                            style={{
                                                background: 'linear-gradient(135deg, #db2777, #ec4899)',
                                                boxShadow: '0 8px 30px rgba(219,39,119,0.5)'
                                            }}
                                        >
                                            <span className="text-3xl sm:text-4xl">💕</span>
                                        </div>
                                    </motion.div>
                                </div>

                                {/* Click instruction */}
                                <motion.p
                                    animate={{ opacity: [0.6, 1, 0.6] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-center mt-4 sm:mt-6 font-cursive text-base sm:text-lg md:text-xl text-white"
                                >
                                    ✨ Click to open your letter ✨
                                </motion.p>
                            </motion.div>
                        </motion.div>
                    ) : (
                        /* Opened Letter */
                        <motion.div
                            key="letter"
                            initial={{ opacity: 0, rotateX: -90, y: -50 }}
                            animate={{ opacity: 1, rotateX: 0, y: 0 }}
                            transition={{ duration: 0.8, ease: 'easeOut' }}
                            className="rounded-2xl sm:rounded-3xl overflow-hidden"
                            style={{
                                background: 'linear-gradient(135deg, #fffef7, #fef3e8)',
                                boxShadow: '0 30px 80px rgba(157,23,77,0.3), 0 0 50px rgba(236,72,153,0.15)',
                                border: '4px solid rgba(255,255,255,0.9)'
                            }}
                        >
                            {/* Letter Header */}
                            <div
                                className="p-6 text-center border-b-2"
                                style={{
                                    background: 'linear-gradient(135deg, #fce7f3, #fbcfe8)',
                                    borderColor: 'rgba(219,39,119,0.2)'
                                }}
                            >
                                <motion.span
                                    animate={{ scale: [1, 1.1, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-4xl inline-block"
                                >
                                    💌
                                </motion.span>
                            </div>

                            {/* Letter Content */}
                            <div className="p-6 sm:p-8 md:p-10 lg:p-12">
                                {showFullLetter && paragraphs.map((paragraph, index) => (
                                    <motion.p
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.3, duration: 0.5 }}
                                        className={`font-cursive text-base sm:text-lg md:text-xl leading-relaxed mb-4 sm:mb-6 ${index === 0 ? 'text-pink-900 font-bold text-2xl' : 'text-pink-800'
                                            }`}
                                        style={{
                                            fontFamily: index === paragraphs.length - 1
                                                ? "'Great Vibes', cursive"
                                                : "'Dancing Script', cursive"
                                        }}
                                    >
                                        {paragraph}
                                    </motion.p>
                                ))}

                                {/* Signature Hearts */}
                                {showFullLetter && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: paragraphs.length * 0.3 + 0.5 }}
                                        className="flex justify-center gap-3 mt-8 pt-6 border-t-2"
                                        style={{ borderColor: 'rgba(219,39,119,0.2)' }}
                                    >
                                        {['💕', '💖', '❤️', '💖', '💕'].map((heart, i) => (
                                            <motion.span
                                                key={i}
                                                animate={{ scale: [1, 1.2, 1], y: [0, -5, 0] }}
                                                transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
                                                className="text-3xl"
                                            >
                                                {heart}
                                            </motion.span>
                                        ))}
                                    </motion.div>
                                )}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Bottom decoration */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center gap-3 mt-12"
            >
                {['✉️', '💕', '📝', '💕', '✉️'].map((emoji, i) => (
                    <motion.span
                        key={i}
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                        className="text-3xl"
                    >
                        {emoji}
                    </motion.span>
                ))}
            </motion.div>
        </section>
    );
});

LoveLetterSection.displayName = 'LoveLetterSection';

export default LoveLetterSection;
