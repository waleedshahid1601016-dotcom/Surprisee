import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components';
import { useAnimationConfig } from '../hooks';

/**
 * WishesSection - All 4 categories in equal-sized cards with more content
 * Birthday Wishes, Duas, Apologies, Marriage Waiting
 */
const WishesSection = memo(() => {
    const animConfig = useAnimationConfig();

    const categories = useMemo(() => [
        {
            title: 'Birthday Wishes',
            emoji: '🎂',
            icon: '🎁',
            wishes: [
                { emoji: '💕', text: 'Happy Birthday to my beautiful wife-to-be!' },
                { emoji: '✨', text: "Every moment with you is a blessing, and I can't wait to spend forever with you." },
                { emoji: '💖', text: 'You make my world brighter, my heart fuller, and my life complete.' },
                { emoji: '🤲', text: 'May Allah bless you with endless happiness, good health, and all your heart desires.' },
                { emoji: '❤️', text: 'Your smile is my favorite sight, your laugh my favorite sound, and you are my favorite everything.' }
            ]
        },
        {
            title: 'Prayers & Duas',
            emoji: '🤲',
            icon: '🕌',
            wishes: [
                { emoji: '🕌', text: 'اللَّهُمَّ بَارِكْ لَهَا فِي عُمُرِهَا وَارْزُقْهَا السَّعَادَةَ' },
                { emoji: '💫', text: '(O Allah, bless her in her age and grant her happiness)' },
                { emoji: '💕', text: 'May Allah protect you, guide you, and shower you with His infinite mercy and love.' },
                { emoji: '📖', text: 'رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ' },
                { emoji: '🌙', text: '(Our Lord, grant us from our spouses comfort to our eyes)' },
                { emoji: '💖', text: 'May Allah make our union blessed and fill our lives with love, peace, and understanding.' }
            ]
        },
        {
            title: 'From My Heart',
            emoji: '🥺',
            icon: '💔',
            wishes: [
                { emoji: '🥺', text: "I'm sorry for the times I've hurt you or let you down. You deserve nothing but the best." },
                { emoji: '💔', text: 'Please forgive me for any moments I made you sad. Your happiness means everything to me.' },
                { emoji: '🌹', text: 'I promise to be better, to love you more deeply, and to never take you for granted.' },
                { emoji: '💗', text: "Sorry for all the silly arguments. You're always right in my heart!" },
                { emoji: '💕', text: "Every mistake I've made has taught me how precious you are. I'm truly sorry." }
            ]
        },
        {
            title: 'Waiting For You',
            emoji: '💍',
            icon: '👰',
            wishes: [
                { emoji: '💍', text: "I'm counting down the days until you become my wife." },
                { emoji: '⏳', text: "Waiting for you has been the sweetest wait of my life, and I know it will all be worth it." },
                { emoji: '😊', text: "The thought of calling you 'my wife' fills my heart with joy and excitement!" },
                { emoji: '🤲', text: "Until that beautiful day comes, know that you're always in my heart and prayers." },
                { emoji: '❤️', text: "I can't wait to start our forever together, to build a home, and to grow old with you." }
            ]
        }
    ], []);

    // Staggered animation variants
    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    }), []);

    const cardVariants = useMemo(() => ({
        hidden: {
            opacity: 0,
            y: 60,
            scale: 0.95
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                ...animConfig.spring,
                duration: 0.8
            }
        }
    }), [animConfig]);

    const wishVariants = useMemo(() => ({
        hidden: { opacity: 0, x: -15 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.4 }
        }
    }), []);

    return (
        <section className="relative py-24 min-h-screen">
            {/* Decorative background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-pink-500/10" />
                <motion.div
                    animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.2, 1] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-20 -left-20 w-96 h-96 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{ opacity: [0.2, 0.35, 0.2], scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-20 -right-20 w-[500px] h-[500px] bg-gradient-to-br from-rose-300 to-pink-500 rounded-full blur-3xl"
                />
            </div>

            {/* Section Header */}
            <AnimatedSection className="text-center mb-20 px-4 relative z-10">
                <motion.div
                    animate={{
                        rotate: [0, 5, -5, 0],
                        y: [0, -10, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                    className="text-7xl inline-block mb-6"
                >
                    💕
                </motion.div>
                <h2 className="font-elegant text-5xl md:text-7xl text-white mb-4 drop-shadow-lg font-bold"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                    Messages From My Heart
                </h2>
                <p className="font-cursive text-xl md:text-2xl text-white/95 font-semibold"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
                >
                    Every word comes straight from my soul ✨
                </p>
            </AnimatedSection>

            {/* Cards Grid - 2x2 with equal heights */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-50px' }}
                className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10"
                style={{ gridAutoRows: '1fr' }}
            >
                {categories.map((category, index) => (
                    <motion.div
                        key={index}
                        variants={cardVariants}
                        whileHover={{
                            scale: 1.02,
                            y: -10,
                            transition: { duration: 0.4, ease: 'easeOut' }
                        }}
                        className="group flex"
                    >
                        {/* Card Container with gradient border */}
                        <div
                            className="relative rounded-[2.5rem] p-1.5 overflow-hidden flex-1 flex flex-col"
                            style={{
                                background: 'linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,182,193,0.4) 50%, rgba(255,192,203,0.5) 100%)',
                                boxShadow: '0 25px 70px rgba(157,23,77,0.3), 0 0 50px rgba(236,72,153,0.2)'
                            }}
                        >
                            {/* Inner card with light pink gradient */}
                            <div
                                className="relative rounded-[2.2rem] p-10 flex-1 flex flex-col"
                                style={{
                                    background: 'linear-gradient(135deg, #ffb6c1 0%, #ffc0cb 20%, #ffb6c1 40%, #ffd1dc 60%, #ffc0cb 80%, #ffb6c1 100%)',
                                    boxShadow: 'inset 0 0 60px rgba(255,255,255,0.3), inset 0 0 100px rgba(255,182,193,0.2)'
                                }}
                            >
                                {/* Decorative corner elements */}
                                <div className="absolute top-6 right-6 text-3xl opacity-20">
                                    {category.icon}
                                </div>
                                <div className="absolute bottom-6 left-6 text-3xl opacity-20 rotate-180">
                                    {category.icon}
                                </div>

                                {/* Card Header */}
                                <div className="text-center mb-8">
                                    <motion.div
                                        animate={{
                                            y: [0, -10, 0],
                                            scale: [1, 1.12, 1]
                                        }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            delay: index * 0.2,
                                            ease: 'easeInOut'
                                        }}
                                        className="inline-block mb-5"
                                    >
                                        <span className="text-6xl drop-shadow-lg">{category.emoji}</span>
                                    </motion.div>

                                    <h3 className="font-cursive text-3xl md:text-4xl text-pink-900 font-bold mb-2">
                                        {category.title}
                                    </h3>

                                    {/* Decorative line */}
                                    <motion.div
                                        initial={{ scaleX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.8, delay: 0.3 }}
                                        className="w-32 h-1.5 mx-auto mt-4 rounded-full"
                                        style={{
                                            background: 'linear-gradient(90deg, transparent, #be185d, #db2777, #be185d, transparent)'
                                        }}
                                    />
                                </div>

                                {/* Wishes List */}
                                <motion.ul
                                    variants={containerVariants}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    className="space-y-4 flex-1"
                                >
                                    {category.wishes.map((wish, wishIndex) => (
                                        <motion.li
                                            key={wishIndex}
                                            variants={wishVariants}
                                            className="flex items-start gap-4 p-3 rounded-2xl hover:bg-white/40 transition-all duration-300"
                                            style={{
                                                boxShadow: '0 2px 10px rgba(255,255,255,0.2)'
                                            }}
                                        >
                                            <motion.span
                                                animate={{
                                                    scale: [1, 1.25, 1],
                                                    rotate: [0, 8, -8, 0]
                                                }}
                                                transition={{
                                                    duration: 2.5,
                                                    repeat: Infinity,
                                                    delay: wishIndex * 0.2,
                                                    ease: 'easeInOut'
                                                }}
                                                className="text-2xl flex-shrink-0 mt-1"
                                            >
                                                {wish.emoji}
                                            </motion.span>
                                            <p className="text-pink-950 text-lg md:text-xl leading-relaxed font-bold">
                                                {wish.text}
                                            </p>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Card footer decoration */}
                                <div className="flex justify-center mt-8 gap-3">
                                    {['💗', '💖', '💗'].map((heart, i) => (
                                        <motion.span
                                            key={i}
                                            animate={{ scale: [1, 1.2, 1] }}
                                            transition={{
                                                duration: 1.5,
                                                repeat: Infinity,
                                                delay: i * 0.2,
                                                ease: 'easeInOut'
                                            }}
                                            className="text-2xl"
                                        >
                                            {heart}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom Ameen */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.5 }}
                className="text-center mt-20 relative z-10"
            >
                <motion.div
                    animate={{
                        scale: [1, 1.05, 1],
                        opacity: [0.9, 1, 0.9]
                    }}
                    transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                    className="inline-block px-12 py-6 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, #ffb6c1, #ffc0cb, #ffd1dc)',
                        boxShadow: '0 20px 60px rgba(157,23,77,0.3), 0 0 50px rgba(236,72,153,0.2)'
                    }}
                >
                    <p className="font-elegant text-4xl text-pink-900 font-bold">
                        آمین - Ameen 🤲
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
});

WishesSection.displayName = 'WishesSection';

export default WishesSection;
