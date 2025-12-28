import { memo } from 'react';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { HeartbeatText, ImageSlider } from '../components';

/**
 * HeroSection - "Happy Birthday Laraib (My Wife to be In Sha Allah)"
 * Darker pink theme with visible text
 */
const HeroSection = memo(() => {
    const titleRef = useRef(null);
    const subtitleRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                titleRef.current,
                { opacity: 0, y: 50, scale: 0.9 },
                { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: 'power3.out', delay: 0.5 }
            );

            gsap.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 1.5 }
            );
        });

        return () => ctx.revert();
    }, []);

    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-400/30 via-transparent to-pink-400/30 pointer-events-none" />

            {/* Decorative circles */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute top-20 left-10 w-40 h-40 rounded-full bg-gradient-to-br from-pink-300 to-rose-400 blur-3xl"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-gradient-to-br from-rose-300 to-pink-500 blur-3xl"
            />

            {/* Main Content */}
            <div className="text-center z-10 px-4 max-w-4xl">
                {/* Main Title */}
                <motion.h1
                    ref={titleRef}
                    className="font-elegant text-5xl md:text-7xl lg:text-8xl mb-8 leading-tight text-white font-bold"
                    style={{
                        opacity: 0,
                        textShadow: '0 4px 30px rgba(0,0,0,0.3), 0 2px 15px rgba(0,0,0,0.2)'
                    }}
                >
                    Happy Birthday Laraib{' '}
                    <HeartbeatText className="inline-block">💖</HeartbeatText>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    ref={subtitleRef}
                    className="font-cursive text-2xl md:text-3xl lg:text-4xl text-white mb-6 font-semibold"
                    style={{
                        opacity: 0,
                        textShadow: '0 2px 15px rgba(0,0,0,0.2)'
                    }}
                >
                    (My Wife to be In Sha Allah)
                </motion.p>

                {/* Image Slider */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2, duration: 1 }}
                    className="my-12"
                >
                    <ImageSlider />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 2.5, duration: 1 }}
                    className="font-cursive text-xl md:text-2xl text-white/95 font-medium"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.15)' }}
                >
                    Every heartbeat of mine waits only for you 💕
                </motion.p>

                {/* Scroll indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { delay: 3, duration: 1 },
                        y: { delay: 3, duration: 2, repeat: Infinity, ease: 'easeInOut' }
                    }}
                    className="mt-16"
                >
                    <span className="text-4xl">💕</span>
                    <p className="text-white text-sm mt-2 font-medium">Scroll to feel the love</p>
                </motion.div>
            </div>

            {/* Bottom wave decoration */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" className="w-full h-20 fill-pink-200/40">
                    <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z" />
                </svg>
            </div>
        </section>
    );
});

HeroSection.displayName = 'HeroSection';

export default HeroSection;
