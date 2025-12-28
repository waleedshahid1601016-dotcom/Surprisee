import { memo, useState, useRef, useCallback, useEffect, useMemo } from 'react';
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
 * VideoMessageSection - Personal video messages with custom player
 * Features all 24 videos, custom controls, fullscreen support
 * Optimized for smooth performance
 */
const VideoMessageSection = memo(() => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const videoRef = useRef(null);

    // Memoize videos array for performance - All 24 videos
    const videos = useMemo(() => [
        { src: lalivid1, title: 'Message 1 💕', description: 'For you, my love' },
        { src: lalivid2, title: 'Message 2 💖', description: 'From my heart' },
        { src: lalivid3, title: 'Message 3 💗', description: 'You mean everything' },
        { src: lalivid4, title: 'Message 4 💝', description: 'Our love story' },
        { src: lalivid5, title: 'Message 5 💍', description: 'Forever yours' },
        { src: lalivid6, title: 'Message 6 💞', description: 'My everything' },
        { src: lalivid7, title: 'Message 7 💓', description: 'Always together' },
        { src: lalivid8, title: 'Message 8 💘', description: 'Endless love' },
        { src: lalivid9, title: 'Message 9 💖', description: 'You and me' },
        { src: lalivid10, title: 'Message 10 💕', description: 'Beautiful moments' },
        { src: lalivid11, title: 'Message 11 💗', description: 'Sweet memories' },
        { src: lalivid12, title: 'Message 12 💝', description: 'Special times' },
        { src: lalivid13, title: 'Message 13 💞', description: 'Our journey' },
        { src: lalivid14, title: 'Message 14 💓', description: 'Forever love' },
        { src: lalivid15, title: 'Message 15 💘', description: 'My heart speaks' },
        { src: lalivid16, title: 'Message 16 💖', description: 'True love' },
        { src: lalivid17, title: 'Message 17 💕', description: 'My soulmate' },
        { src: lalivid18, title: 'Message 18 💗', description: 'Precious you' },
        { src: lalivid19, title: 'Message 19 💝', description: 'My treasure' },
        { src: lalivid20, title: 'Message 20 💞', description: 'Beautiful soul' },
        { src: lalivid22, title: 'Message 21 💓', description: 'My angel' },
        { src: lalivid23, title: 'Message 22 💘', description: 'Dream girl' },
        { src: lalivid24, title: 'Message 23 💖', description: 'My world' },
        { src: lalivid25, title: 'Message 24 💕', description: 'Eternal love' },
    ], []);

    const handlePlayPause = useCallback(() => {
        if (!videoRef.current) return;

        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    }, [isPlaying]);

    const handleVideoChange = useCallback((index) => {
        setCurrentVideo(index);
        setIsPlaying(false); // Will be set to true by useEffect when video loads
        if (videoRef.current) {
            videoRef.current.load();
        }
    }, []);

    const handleFullscreen = useCallback(() => {
        if (!videoRef.current) return;

        if (videoRef.current.requestFullscreen) {
            videoRef.current.requestFullscreen();
        } else if (videoRef.current.webkitRequestFullscreen) {
            videoRef.current.webkitRequestFullscreen();
        }
    }, []);

    const handleVideoEnd = useCallback(() => {
        setIsPlaying(false);
        // Auto-advance to next video
        if (currentVideo < videos.length - 1) {
            setTimeout(() => {
                setCurrentVideo(prev => prev + 1);
            }, 500);
        }
    }, [currentVideo, videos.length]);

    // Auto-play videos when they change and sync playing state
    useEffect(() => {
        if (!videoRef.current) return;

        const videoElement = videoRef.current;

        // Handlers for video events
        const handlePlay = () => {
            setIsPlaying(true);
            setShowControls(false);
        };

        const handlePause = () => {
            setIsPlaying(false);
            setShowControls(true);
        };

        const handleLoadedData = () => {
            // Smooth autoplay with slight delay for better UX
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
                playPromise.catch((error) => {
                    console.log('Autoplay prevented:', error);
                    setIsPlaying(false);
                    setShowControls(true);
                });
            }
        };

        // Add event listeners
        videoElement.addEventListener('loadeddata', handleLoadedData);
        videoElement.addEventListener('play', handlePlay);
        videoElement.addEventListener('pause', handlePause);

        // Cleanup
        return () => {
            videoElement.removeEventListener('loadeddata', handleLoadedData);
            videoElement.removeEventListener('play', handlePlay);
            videoElement.removeEventListener('pause', handlePause);
        };
    }, [currentVideo]);

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-pink-500/10 pointer-events-none" />

            {/* Decorative elements */}
            <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity }}
                className="absolute top-20 -left-20 w-80 h-80 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full blur-3xl"
                style={{ willChange: 'transform, opacity' }}
            />
            <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.2, 1, 1.2] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-rose-300 to-pink-500 rounded-full blur-3xl"
                style={{ willChange: 'transform, opacity' }}
            />

            {/* Header */}
            <AnimatedSection className="text-center mb-8 sm:mb-12 md:mb-16 px-4 relative z-10">
                <motion.span
                    animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="text-6xl inline-block mb-6"
                >
                    🎥
                </motion.span>
                <h2
                    className="font-elegant text-4xl md:text-6xl text-white mb-4 font-bold"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                    Video Messages For You
                </h2>
                <p
                    className="font-cursive text-xl md:text-2xl text-white/90"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
                >
                    Press play to hear my heart speak 💕
                </p>
            </AnimatedSection>

            {/* Video Player Container */}
            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="rounded-xl sm:rounded-2xl md:rounded-[2rem] overflow-hidden"
                    style={{
                        background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,182,193,0.3))',
                        boxShadow: '0 30px 80px rgba(157,23,77,0.4), 0 0 60px rgba(236,72,153,0.2)',
                        border: '4px solid rgba(255,255,255,0.9)'
                    }}
                >
                    {/* Video Title Bar */}
                    <div
                        className="p-4 text-center"
                        style={{
                            background: 'linear-gradient(135deg, #ffb6c1, #ffc0cb)'
                        }}
                    >
                        <h3 className="font-cursive text-lg sm:text-xl md:text-2xl text-pink-900 font-bold">
                            {videos[currentVideo].title}
                        </h3>
                        <p className="text-sm sm:text-base text-pink-700 font-medium">
                            {videos[currentVideo].description}
                        </p>
                    </div>

                    {/* Video Element */}
                    <div className="relative aspect-video bg-pink-100">
                        <AnimatePresence mode="wait">
                            <motion.video
                                key={currentVideo}
                                ref={videoRef}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="w-full h-full object-contain bg-black"
                                style={{ willChange: 'transform, opacity' }}
                                onEnded={handleVideoEnd}
                                playsInline
                                autoPlay
                                muted
                                preload="metadata"
                            >
                                <source src={videos[currentVideo].src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </motion.video>
                        </AnimatePresence>

                        {/* Play/Pause Overlay - Only show when NOT playing */}
                        <AnimatePresence>
                            {!isPlaying && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="absolute inset-0 flex items-center justify-center bg-black/20"
                                >
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={handlePlayPause}
                                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center"
                                        style={{
                                            background: 'linear-gradient(135deg, rgba(255,182,193,0.95), rgba(255,192,203,0.95))',
                                            boxShadow: '0 10px 40px rgba(157,23,77,0.4)'
                                        }}
                                    >
                                        <span className="text-3xl sm:text-4xl">
                                            {isPlaying ? '⏸️' : '▶️'}
                                        </span>
                                    </motion.button>
                                </motion.div>
                            )}
                        </AnimatePresence>

                        {/* Fullscreen Button */}
                        <button
                            onClick={handleFullscreen}
                            className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/80 hover:bg-white flex items-center justify-center text-pink-700 transition-all shadow-lg text-sm sm:text-base"
                        >
                            ⛶
                        </button>
                    </div>

                    {/* Video Selector */}
                    <div className="p-3 sm:p-4 bg-gradient-to-b from-pink-50 to-white">
                        <div className="flex gap-2 sm:gap-3 overflow-x-auto pb-2 scrollbar-hide">
                            {videos.map((video, index) => (
                                <motion.button
                                    key={index}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => handleVideoChange(index)}
                                    className={`flex-shrink-0 px-3 sm:px-4 md:px-6 py-2 sm:py-3 rounded-full font-cursive font-bold transition-all text-sm sm:text-base ${currentVideo === index
                                        ? 'text-white'
                                        : 'bg-pink-100 text-pink-700 hover:bg-pink-200'
                                        }`}
                                    style={currentVideo === index ? {
                                        background: 'linear-gradient(135deg, #db2777, #ec4899)',
                                        boxShadow: '0 5px 20px rgba(219,39,119,0.4)'
                                    } : {}}
                                >
                                    {index + 1}. {video.title.split(' ')[0]}
                                </motion.button>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Bottom decoration */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="flex justify-center gap-3 mt-12"
            >
                {['🎬', '💕', '🎥', '💕', '🎬'].map((emoji, i) => (
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

VideoMessageSection.displayName = 'VideoMessageSection';

export default VideoMessageSection;
