import { memo, useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all images
import lali from '../assets/lali.jpeg';
import lali1 from '../assets/lali1.jpeg';
import lali2 from '../assets/lali2.jpeg';
import lali3 from '../assets/lali3.jpeg';
import lali4 from '../assets/lali4.jpeg';
import lali5 from '../assets/lali5.jpeg';
import lali6 from '../assets/lali6.jpeg';
import lali7 from '../assets/lali7.jpeg';
import lali8 from '../assets/lali8.jpeg';
import lali9 from '../assets/lali9.jpeg';
import lali10 from '../assets/lali10.jpeg';
import lali11 from '../assets/lali11.jpg';
import lali12 from '../assets/lali12.jpg';
import lali13 from '../assets/lali13.jpg';
import lali14 from '../assets/lali14.jpg';
import lali15 from '../assets/lali15.jpg';
import lali16 from '../assets/lali16.jpg';
import lali17 from '../assets/lali17.jpg';
import lali18 from '../assets/lali18.jpg';
import lali19 from '../assets/lali19.jpg';
import lali20 from '../assets/lali20.jpg';
import lali30 from '../assets/lali30.jpg';

/**
 * ImageSlider - Beautiful auto-playing image slider with smooth transitions
 * Updated with all 22 photos of Laraib with elegant animations
 */
const ImageSlider = memo(() => {
    // Memoize images array for performance
    const images = useMemo(() => [
        { src: lali, caption: 'My Beautiful Laraib 💕' },
        { src: lali1, caption: 'The Love of My Life 💖' },
        { src: lali2, caption: 'My Heart Belongs to You 💗' },
        { src: lali3, caption: 'Forever My Favorite 💝' },
        { src: lali4, caption: 'My Precious Angel 👼' },
        { src: lali5, caption: 'Dream Come True ✨' },
        { src: lali6, caption: 'My Everything 💫' },
        { src: lali7, caption: 'Pure Beauty 🌸' },
        { src: lali8, caption: 'My Sunshine ☀️' },
        { src: lali9, caption: 'Absolutely Stunning 🌹' },
        { src: lali10, caption: 'My Queen 👑' },
        { src: lali11, caption: 'My Treasure 💎' },
        { src: lali12, caption: 'Forever Mine 💗' },
        { src: lali13, caption: 'My Happiness 😊' },
        { src: lali14, caption: 'Beautiful Soul 🌟' },
        { src: lali15, caption: 'My World 🌍' },
        { src: lali16, caption: 'Precious Moments 💝' },
        { src: lali17, caption: 'My Star ⭐' },
        { src: lali18, caption: 'Sweet Love 🍬' },
        { src: lali19, caption: 'My Princess 👸' },
        { src: lali20, caption: 'Eternal Beauty 🌺' },
        { src: lali30, caption: 'My Forever 💕' },
    ], []);

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // Auto-advance slides
    useEffect(() => {
        if (isPaused) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length, isPaused]);

    const goToSlide = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    const goToPrevious = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, [images.length]);

    const goToNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
    }, [images.length]);

    return (
        <div
            className="relative w-full max-w-4xl mx-auto px-4"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            {/* Slider Container */}
            <div className="relative rounded-3xl overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,182,193,0.3))',
                    boxShadow: '0 30px 80px rgba(157,23,77,0.4), 0 0 60px rgba(236,72,153,0.3)',
                    border: '4px solid rgba(255,255,255,0.9)'
                }}
            >
                {/* Image Display */}
                <div
                    className="relative aspect-[16/9] overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, #ffb6c1 0%, #ffc0cb 20%, #ffb6c1 40%, #ffd1dc 60%, #ffc0cb 80%, #ffb6c1 100%)'
                    }}
                >
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.7, ease: 'easeInOut' }}
                            className="absolute inset-0"
                        >
                            <img
                                src={images[currentIndex].src}
                                alt={images[currentIndex].caption}
                                className="w-full h-full object-contain"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-pink-900/60 via-transparent to-transparent" />

                            {/* Caption */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.5 }}
                                className="absolute bottom-0 left-0 right-0 p-6 text-center"
                            >
                                <p className="font-cursive text-2xl md:text-3xl text-white font-bold drop-shadow-lg">
                                    {images[currentIndex].caption}
                                </p>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={goToPrevious}
                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-pink-600 hover:text-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl z-10"
                    >
                        <span className="text-2xl font-bold">‹</span>
                    </button>
                    <button
                        onClick={goToNext}
                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white flex items-center justify-center text-pink-600 hover:text-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl z-10"
                    >
                        <span className="text-2xl font-bold">›</span>
                    </button>

                    {/* Image counter */}
                    <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-white/80 text-pink-700 font-bold text-sm shadow-lg">
                        {currentIndex + 1} / {images.length}
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center gap-2 p-4 bg-gradient-to-b from-transparent to-pink-50/50 flex-wrap">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`transition-all duration-300 rounded-full ${index === currentIndex
                                ? 'w-8 h-3 bg-gradient-to-r from-pink-500 to-rose-500'
                                : 'w-3 h-3 bg-pink-300 hover:bg-pink-400'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Decorative hearts around slider */}
            <motion.span
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -left-4 text-4xl"
            >
                💕
            </motion.span>
            <motion.span
                animate={{
                    y: [0, -10, 0],
                    rotate: [0, -10, 10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                className="absolute -top-4 -right-4 text-4xl"
            >
                💖
            </motion.span>
            <motion.span
                animate={{
                    scale: [1, 1.2, 1]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 text-4xl"
            >
                💗
            </motion.span>
        </div>
    );
});

ImageSlider.displayName = 'ImageSlider';

export default ImageSlider;
