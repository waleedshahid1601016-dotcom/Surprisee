import { memo, useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Import all images for polaroids
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
 * FloatingPolaroids - Decorative polaroid images on screen edges
 * Features vintage polaroid styling with floating animations and random image cycling
 * Optimized for smooth performance
 */
const FloatingPolaroids = memo(() => {
    // Memoize all available images for performance
    const allImages = useMemo(() => [
        { src: lali, caption: 'My Love 💕' },
        { src: lali1, caption: 'Beautiful You 💖' },
        { src: lali2, caption: 'My Queen 👑' },
        { src: lali3, caption: 'My Angel 👼' },
        { src: lali4, caption: 'Beautiful 🌸' },
        { src: lali5, caption: 'My Star ✨' },
        { src: lali6, caption: 'Precious 💝' },
        { src: lali7, caption: 'My Sunshine ☀️' },
        { src: lali8, caption: 'Forever 💖' },
        { src: lali9, caption: 'My World 🌍' },
        { src: lali10, caption: 'My Heart ❤️' },
        { src: lali11, caption: 'My Treasure 💎' },
        { src: lali12, caption: 'Sweetness 🍬' },
        { src: lali13, caption: 'My Joy 😊' },
        { src: lali14, caption: 'Radiant 🌟' },
        { src: lali15, caption: 'My Dream ✨' },
        { src: lali16, caption: 'Cherished 💗' },
        { src: lali17, caption: 'Shining Star ⭐' },
        { src: lali18, caption: 'My Wish 🌠' },
        { src: lali19, caption: 'Beautiful Soul 🌸' },
        { src: lali20, caption: 'Forever Love 💞' },
        { src: lali30, caption: 'My Forever 💕' },
    ], []);

    // State to track current images for each polaroid
    const [leftImages, setLeftImages] = useState([0, 7, 14]);
    const [rightImages, setRightImages] = useState([3, 10, 17]);

    // Function to get random image index different from current
    const getRandomIndex = (currentIndex, max) => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * max);
        } while (newIndex === currentIndex);
        return newIndex;
    };

    // Randomly change images every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            // Randomly pick which side and which polaroid to change
            const changeSide = Math.random() > 0.5 ? 'left' : 'right';
            const polaroidIndex = Math.floor(Math.random() * 3);

            if (changeSide === 'left') {
                setLeftImages(prev => {
                    const newImages = [...prev];
                    newImages[polaroidIndex] = getRandomIndex(prev[polaroidIndex], allImages.length);
                    return newImages;
                });
            } else {
                setRightImages(prev => {
                    const newImages = [...prev];
                    newImages[polaroidIndex] = getRandomIndex(prev[polaroidIndex], allImages.length);
                    return newImages;
                });
            }
        }, 5000);

        return () => clearInterval(interval);
    }, [allImages.length]);

    // Polaroid configurations for left and right sides (highly visible positions)
    const leftPolaroidsConfig = [
        {
            position: { top: '10%', left: '20px' },
            rotation: -8,
            delay: 0
        },
        {
            position: { top: '40%', left: '30px' },
            rotation: 12,
            delay: 1.2
        },
        {
            position: { top: '70%', left: '25px' },
            rotation: -5,
            delay: 2.4
        },
    ];

    const rightPolaroidsConfig = [
        {
            position: { top: '15%', right: '20px' },
            rotation: 10,
            delay: 0.6
        },
        {
            position: { top: '45%', right: '30px' },
            rotation: -12,
            delay: 1.8
        },
        {
            position: { top: '75%', right: '25px' },
            rotation: 6,
            delay: 3
        },
    ];

    // Polaroid component
    const Polaroid = ({ imageData, position, rotation, delay }) => (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            animate={{
                opacity: 1,
                scale: 1,
                y: 0,
                rotate: rotation
            }}
            transition={{
                duration: 1,
                delay,
                ease: [0.25, 0.1, 0.25, 1]
            }}
            style={{
                position: 'fixed',
                ...position,
                zIndex: 5,
                willChange: 'transform'
            }}
            className="hidden lg:block"
        >
            <motion.div
                animate={{
                    y: [0, -10, 0],
                    rotate: [rotation, rotation + 2, rotation]
                }}
                transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="relative"
                style={{
                    width: '200px',
                    padding: '16px 16px 50px 16px',
                    background: 'white',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.3), 0 20px 60px rgba(157,23,77,0.2)',
                    borderRadius: '4px',
                    willChange: 'transform'
                }}
            >
                {/* Image with transition */}
                <div className="relative w-full aspect-square overflow-hidden bg-pink-100">
                    <AnimatePresence mode="wait">
                        <motion.img
                            key={imageData.src}
                            src={imageData.src}
                            alt={imageData.caption}
                            loading="lazy"
                            className="w-full h-full object-cover"
                            initial={{ opacity: 0, scale: 1.1 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            style={{ willChange: 'transform, opacity' }}
                        />
                    </AnimatePresence>
                </div>

                {/* Caption with transition */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                    <AnimatePresence mode="wait">
                        <motion.p
                            key={imageData.caption}
                            className="font-cursive text-pink-900 font-bold text-lg"
                            style={{
                                fontFamily: "'Dancing Script', cursive"
                            }}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                        >
                            {imageData.caption}
                        </motion.p>
                    </AnimatePresence>
                </div>

                {/* Decorative tape */}
                <div
                    className="absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-6 bg-pink-100/70 -rotate-3"
                    style={{
                        boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
                    }}
                />
            </motion.div>
        </motion.div>
    );

    return (
        <>
            {/* Left side polaroids */}
            {leftPolaroidsConfig.map((config, index) => (
                <Polaroid
                    key={`left-${index}`}
                    imageData={allImages[leftImages[index]]}
                    {...config}
                />
            ))}

            {/* Right side polaroids */}
            {rightPolaroidsConfig.map((config, index) => (
                <Polaroid
                    key={`right-${index}`}
                    imageData={allImages[rightImages[index]]}
                    {...config}
                />
            ))}
        </>
    );
});

FloatingPolaroids.displayName = 'FloatingPolaroids';

export default FloatingPolaroids;
