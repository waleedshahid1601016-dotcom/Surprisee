import { memo, useState, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../components';

// Import all videos
import lalivid1 from '../assets/videos/lalivid1.mp4';
import lalivid2 from '../assets/videos/lalivid2.mp4';
import lalivid3 from '../assets/videos/lalivid3.mp4';
import lalivid4 from '../assets/videos/lalivid4.mp4';
import lalivid5 from '../assets/videos/lalivid5.mp4';
import lalivid6 from '../assets/videos/lalivid6.mp4';
import lalivid7 from '../assets/videos/lalivid7.mp4';
import lalivid8 from '../assets/videos/lalivid8.mp4';
import lalivid9 from '../assets/videos/lalivid9.mp4';
import lalivid10 from '../assets/videos/lalivid10.mp4';
import lalivid11 from '../assets/videos/lalivid11.mp4';
import lalivid12 from '../assets/videos/lalivid12.mp4';
import lalivid13 from '../assets/videos/lalivid13.mp4';
import lalivid14 from '../assets/videos/lalivid14.mp4';
import lalivid15 from '../assets/videos/lalivid15.mp4';
import lalivid16 from '../assets/videos/lalivid16.mp4';
import lalivid17 from '../assets/videos/lalivid17.mp4';
import lalivid18 from '../assets/videos/lalivid18.mp4';
import lalivid19 from '../assets/videos/lalivid19.mp4';
import lalivid20 from '../assets/videos/lalivid20.mp4';
import lalivid22 from '../assets/videos/lalivid22.mp4';
import lalivid23 from '../assets/videos/lalivid23.mp4';
import lalivid24 from '../assets/videos/lalivid24.mp4';
import lalivid25 from '../assets/videos/lalivid25.mp4';

/**
 * VideoGallerySection - Grid display of all video memories
 * Optimized for smooth performance with lazy loading
 */
const VideoGallerySection = memo(() => {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [playingVideos, setPlayingVideos] = useState({});

    // Memoize videos array for performance
    const videos = useMemo(() => [
        { src: lalivid1, title: 'Sweet Memory 💕' },
        { src: lalivid2, title: 'Beautiful Moment 💖' },
        { src: lalivid3, title: 'Our Story 💗' },
        { src: lalivid4, title: 'Together Forever 💝' },
        { src: lalivid5, title: 'Love & Laughter 😊' },
        { src: lalivid6, title: 'Precious Time ⏰' },
        { src: lalivid7, title: 'Cherished Memories 🌟' },
        { src: lalivid8, title: 'Happy Days ☀️' },
        { src: lalivid9, title: 'Special Moments 💫' },
        { src: lalivid10, title: 'Our Journey 🛤️' },
        { src: lalivid11, title: 'Pure Joy 😄' },
        { src: lalivid12, title: 'Heartfelt 💓' },
        { src: lalivid13, title: 'Sweet Escape 🌸' },
        { src: lalivid14, title: 'My Sunshine 🌞' },
        { src: lalivid15, title: 'Beautiful You 🌺' },
        { src: lalivid16, title: 'Lovely Times 🌹' },
        { src: lalivid17, title: 'Together Always 👫' },
        { src: lalivid18, title: 'My Everything 🌈' },
        { src: lalivid19, title: 'Dream Come True ✨' },
        { src: lalivid20, title: 'Forever Love 💍' },
        { src: lalivid22, title: 'Blessed Moments 🙏' },
        { src: lalivid23, title: 'Perfect Day 🎉' },
        { src: lalivid24, title: 'My Angel 👼' },
        { src: lalivid25, title: 'Eternal Love 💞' },
    ], []);

    const handleVideoClick = useCallback((video) => {
        setSelectedVideo(video);
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedVideo(null);
    }, []);

    const handleVideoHover = useCallback((index, isHovering) => {
        setPlayingVideos(prev => ({ ...prev, [index]: isHovering }));
    }, []);

    return (
        <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 min-h-screen">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-pink-500/10 pointer-events-none" />

            {/* Decorative orbs */}
            <motion.div
                animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/4 -right-32 w-96 h-96 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full blur-3xl"
                style={{ willChange: 'transform, opacity' }}
            />

            {/* Section Header */}
            <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16 px-4 relative z-10">
                <motion.span
                    animate={{ rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl inline-block mb-4"
                >
                    🎬
                </motion.span>
                <h2 className="font-elegant text-4xl md:text-6xl text-white mb-4 font-bold"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                    Video Memories
                </h2>
                <p className="font-cursive text-xl md:text-2xl text-white/95 font-semibold"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
                >
                    Every moment captured with love 💕
                </p>
            </AnimatedSection>

            {/* Video Grid */}
            <div className="max-w-7xl mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
                    {videos.map((video, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{
                                duration: 0.4,
                                delay: index * 0.05,
                                ease: [0.25, 0.1, 0.25, 1]
                            }}
                            whileHover={{ scale: 1.03, zIndex: 10 }}
                            onClick={() => handleVideoClick(video)}
                            onMouseEnter={() => handleVideoHover(index, true)}
                            onMouseLeave={() => handleVideoHover(index, false)}
                            className="relative group cursor-pointer"
                            style={{ willChange: 'transform' }}
                        >
                            {/* Video container */}
                            <div
                                className="relative overflow-hidden rounded-2xl aspect-[3/4]"
                                style={{
                                    boxShadow: '0 15px 40px rgba(157,23,77,0.25), 0 0 30px rgba(236,72,153,0.15)',
                                    border: '4px solid rgba(255,255,255,0.8)'
                                }}
                            >
                                <video
                                    src={video.src}
                                    className="w-full h-full object-cover"
                                    muted
                                    loop
                                    playsInline
                                    preload="metadata"
                                    ref={(el) => {
                                        if (el && playingVideos[index]) {
                                            el.play().catch(() => { });
                                        } else if (el && !playingVideos[index]) {
                                            el.pause();
                                            el.currentTime = 0;
                                        }
                                    }}
                                />

                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-pink-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                {/* Play icon */}
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center">
                                        <span className="text-3xl text-pink-600">▶️</span>
                                    </div>
                                </div>

                                {/* Title */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    className="absolute bottom-0 left-0 right-0 p-4 text-center transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                                >
                                    <p className="font-cursive text-white text-lg drop-shadow-lg font-bold">
                                        {video.title}
                                    </p>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Modal Lightbox */}
            <AnimatePresence>
                {selectedVideo && (
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
                            <video
                                src={selectedVideo.src}
                                controls
                                autoPlay
                                className="max-w-full max-h-[80vh] rounded-2xl shadow-2xl"
                            />
                            <p className="text-center mt-4 font-cursive text-2xl text-white font-bold">
                                {selectedVideo.title}
                            </p>

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
            </AnimatePresence>
        </section>
    );
});

VideoGallerySection.displayName = 'VideoGallerySection';

export default VideoGallerySection;
