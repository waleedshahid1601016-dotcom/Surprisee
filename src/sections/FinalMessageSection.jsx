import { memo, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import gsap from 'gsap';

/**
 * FinalMessageSection - The grand emotional finale
 * Darker pink theme with visible text
 */
const FinalMessageSection = memo(() => {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start']
    });

    const opacity = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
    const scale = useTransform(scrollYProgress, [0.2, 0.4], [0.8, 1]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                textRef.current,
                {
                    backgroundPosition: '200% center'
                },
                {
                    backgroundPosition: '-200% center',
                    duration: 8,
                    repeat: -1,
                    ease: 'linear'
                }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-32 min-h-screen flex items-center justify-center overflow-hidden"
        >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-400/20 to-pink-500/30 pointer-events-none" />

            {/* Glowing orbs */}
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.25, 0.45, 0.25]
                }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1.3, 1, 1.3],
                    opacity: [0.25, 0.45, 0.25]
                }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-rose-300 to-pink-500 blur-3xl"
            />

            {/* Main content */}
            <motion.div
                style={{ opacity, scale }}
                className="relative z-10 max-w-5xl mx-auto px-4 text-center"
            >
                {/* Heart icon */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, type: 'spring' }}
                    className="mb-8"
                >
                    <motion.span
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                        className="text-7xl inline-block"
                    >
                        💗
                    </motion.span>
                </motion.div>

                {/* Main message */}
                <motion.h2
                    ref={textRef}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="font-elegant text-3xl md:text-5xl lg:text-6xl leading-relaxed text-white font-bold"
                    style={{ textShadow: '0 4px 30px rgba(0,0,0,0.3)' }}
                >
                    Laraib, my heart chose you,
                    <br />
                    my soul chose you,
                    <br />
                    and I will choose you
                    <br />
                    <span className="text-pink-100">every single day</span>
                    <br />
                    for the rest of my life.
                </motion.h2>

                {/* Hearts decoration */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1, duration: 1 }}
                    className="mt-12 flex justify-center gap-4"
                >
                    {['💕', '💖', '❤️', '💖', '💕'].map((heart, i) => (
                        <motion.span
                            key={i}
                            animate={{
                                y: [0, -10, 0],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: i * 0.2
                            }}
                            className="text-4xl"
                        >
                            {heart}
                        </motion.span>
                    ))}
                </motion.div>

                {/* Signature */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="mt-16"
                >
                    <p className="font-cursive text-2xl text-white mb-2 font-semibold"
                        style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
                    >
                        Forever Yours,
                    </p>
                    <p className="font-elegant text-3xl text-white font-bold"
                        style={{ textShadow: '0 2px 15px rgba(0,0,0,0.3)' }}
                    >
                        Your Future Husband 💍
                    </p>
                </motion.div>

                {/* Final decoration */}
                <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 2, duration: 0.8, type: 'spring' }}
                    className="mt-12"
                >
                    <span className="text-6xl">🌹</span>
                </motion.div>
            </motion.div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-24 fill-pink-300/40">
                    <path d="M0,96L48,85.3C96,75,192,53,288,48C384,43,480,53,576,69.3C672,85,768,107,864,101.3C960,96,1056,64,1152,53.3C1248,43,1344,53,1392,58.7L1440,64L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
                </svg>
            </div>
        </section>
    );
});

FinalMessageSection.displayName = 'FinalMessageSection';

export default FinalMessageSection;
