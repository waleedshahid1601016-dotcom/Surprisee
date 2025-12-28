import { memo, useState, useCallback, useMemo } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components';

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
 * GallerySection - Romantic image gallery with zoom, parallax, and hover effects
 * Optimized with all 21 photos and performance enhancements
 */
const GallerySection = memo(() => {
    const [loadedImages, setLoadedImages] = useState({});
    const [selectedImage, setSelectedImage] = useState(null);

    // Memoize images array for performance
    const images = useMemo(() => [
        { src: lali, caption: 'Your smile lights up my world 💕' },
        { src: lali1, caption: 'The most beautiful soul I know 💖' },
        { src: lali2, caption: 'Your eyes hold galaxies 🌟' },
        { src: lali3, caption: 'Graceful beyond words 💝' },
        { src: lali4, caption: 'Your beauty takes my breath away 👼' },
        { src: lali5, caption: 'Perfect in every way ✨' },
        { src: lali6, caption: 'My stunning queen 💫' },
        { src: lali7, caption: 'Pure elegance and beauty 🌸' },
        { src: lali8, caption: 'Your radiance outshines the sun ☀️' },
        { src: lali9, caption: 'Absolutely breathtaking 🌹' },
        { src: lali10, caption: 'Beauty that captivates hearts 👑' },
        { src: lali11, caption: 'My precious gem 💎' },
        { src: lali12, caption: 'Forever beautiful, forever mine 💗' },
        { src: lali13, caption: 'Your smile is my happiness 😊' },
        { src: lali14, caption: 'A beautiful soul in a beautiful form 🌟' },
        { src: lali15, caption: 'You make the world brighter 🌍' },
        { src: lali16, caption: 'Every moment with you is precious 💝' },
        { src: lali17, caption: 'My shining star ⭐' },
        { src: lali18, caption: 'Sweeter than any dream 🍬' },
        { src: lali19, caption: 'My beautiful princess 👸' },
        { src: lali20, caption: 'Eternal beauty, eternal love 🌺' },
        { src: lali30, caption: 'My forever love 💕' },
    ], []);

    const handleImageLoad = useCallback((index) => {
        setLoadedImages(prev => ({ ...prev, [index]: true }));
    }, []);

    const handleSelectImage = useCallback((image) => {
        setSelectedImage(image);
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedImage(null);
    }, []);

    const handlePrevImage = useCallback(() => {
        const currentIndex = images.findIndex(img => img.src === selectedImage.src);
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
    }, [selectedImage, images]);

    const handleNextImage = useCallback(() => {
        const currentIndex = images.findIndex(img => img.src === selectedImage.src);
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
    }, [selectedImage, images]);

    return (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-pink-500/10 pointer-events-none" />

            {/* Decorative orbs */}
            <motion.div
                animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full blur-3xl"
                style={{ willChange: 'transform, opacity' }}
            />

            {/* Section Header */}
            <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16 px-4 relative z-10">
                <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl inline-block mb-4"
                >
                    🖼️
                </motion.span>
                <h2 className="font-elegant text-4xl md:text-6xl text-white mb-4 font-bold"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                    Gallery of Love
                </h2>
                <p className="font-cursive text-xl md:text-2xl text-white/95 font-semibold"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
                >
                    Every picture tells our story 💕
                </p>
            </AnimatedSection>

            {/* Image Grid */}
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {images.map((image, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.04,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            whileHover={{
                                scale: 1.05,
                                zIndex: 10
                            }}
                            onClick={() => handleSelectImage(image)}
                            className="relative group cursor-pointer"
                            style={{ willChange: 'transform' }}
                        >
                            {/* Image container with polaroid style on mobile */}
                            <div
                                className="relative overflow-hidden rounded-lg md:rounded-2xl aspect-square"
                                style={{
                                    boxShadow: '0 15px 40px rgba(157,23,77,0.25), 0 0 30px rgba(236,72,153,0.15)',
                                    background: 'white',
                                    padding: '12px 12px 45px 12px', // Polaroid-style padding
                                }}
                            >
                                {/* Loading placeholder */}
                                {!loadedImages[index] && (
                                    <div className="absolute inset-0 bg-gradient-to-br from-pink-200 to-rose-200 animate-pulse" />
                                )}

                                <motion.img
                                    src={image.src}
                                    alt={image.caption}
                                    onLoad={() => handleImageLoad(index)}
                                    loading="lazy"
                                    className="w-full h-full object-cover rounded"
                                />

                                {/* Gradient overlay on hover - hidden on mobile */}
                                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-pink-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                {/* Caption - always visible on mobile, hover on desktop */}
                                <div className="absolute bottom-2 left-2 right-2 md:bottom-4 md:left-4 md:right-4 text-center opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="font-cursive text-pink-900 md:text-white text-sm md:text-lg font-bold drop-shadow-lg">
                                        {image.caption}
                                    </p>
                                </div>

                                {/* Heart popup on load */}
                                {loadedImages[index] && (
                                    <motion.div
                                        initial={{ scale: 0, opacity: 1 }}
                                        animate={{ scale: [0, 1.5, 0], opacity: [1, 1, 0] }}
                                        transition={{ duration: 1, delay: 0.3 }}
                                        className="absolute inset-0 flex items-center justify-center pointer-events-none"
                                    >
                                        <span className="text-6xl">💖</span>
                                    </motion.div>
                                )}
                            </div>

                            {/* Corner heart */}
                            <motion.span
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.1 }}
                                className="absolute -top-2 -right-2 text-2xl z-10"
                            >
                                💕
                            </motion.span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Lightbox Modal */}
            {selectedImage && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleCloseModal}
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="relative max-w-5xl max-h-[90vh]"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={selectedImage.src}
                            alt={selectedImage.caption}
                            className="max-w-full max-h-[80vh] object-contain rounded-2xl shadow-2xl"
                        />
                        <p className="text-center mt-4 font-cursive text-2xl text-white font-bold">
                            {selectedImage.caption}
                        </p>

                        {/* Navigation buttons */}
                        <button
                            onClick={handlePrevImage}
                            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-pink-600 hover:text-pink-700 transition-colors font-bold text-2xl shadow-lg"
                        >
                            ‹
                        </button>
                        <button
                            onClick={handleNextImage}
                            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-pink-600 hover:text-pink-700 transition-colors font-bold text-2xl shadow-lg"
                        >
                            ›
                        </button>

                        {/* Close button */}
                        <button
                            onClick={handleCloseModal}
                            className="absolute -top-4 -right-4 w-12 h-12 bg-pink-600 rounded-full flex items-center justify-center text-white hover:bg-pink-700 transition-colors font-bold text-xl shadow-lg"
                        >
                            ✕
                        </button>
                    </motion.div>
                </motion.div>
            )}

            {/* Bottom decoration */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-16 relative z-10"
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
                        Every memory with you is precious 💕
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
});

GallerySection.displayName = 'GallerySection';

export default GallerySection;
