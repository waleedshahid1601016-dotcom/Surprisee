import { memo, useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AnimatedSection } from '../components';

// Import all videos
import lalivid1 from '../assets/videos/lalivid1.mp4';
import lalivid2 from '../assets/videos/lalivid2.mp4';
import lalivid3 from '../assets/videos/lalivid3.mp4';
import lalivid4 from '../assets/videos/lalivid4.mp4';
import lalivid5 from '../assets/videos/lalivid5.mp4';

/**
 * VideoMessageSection - Personal video messages with custom player
 * Features multiple videos, custom controls, fullscreen support
 */
const VideoMessageSection = memo(() => {
    const [currentVideo, setCurrentVideo] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [showControls, setShowControls] = useState(true);
    const videoRef = useRef(null);

    const videos = [
        { src: lalivid1, title: 'A Special Message 💕', description: 'Just for you, my love' },
        { src: lalivid2, title: 'My Heart Speaks 💖', description: 'Words from my soul' },
        { src: lalivid3, title: 'For My Beautiful Wife 💗', description: 'You mean everything to me' },
        { src: lalivid4, title: 'Our Love Story 💝', description: 'Memories we cherish' },
        { src: lalivid5, title: 'Forever Yours 💍', description: 'My promise to you' },
    ];

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

    // Auto-play videos when they change
    useEffect(() => {
        if (!videoRef.current) return;

        const videoElement = videoRef.current;

        // Handler for when video data is loaded
        const handleLoadedData = () => {
            videoElement.play().then(() => {
                setIsPlaying(true);
            }).catch((error) => {
                console.log('Autoplay prevented:', error);
                // User interaction required - just set playing state to false
                setIsPlaying(false);
            });
        };

        // Add event listener
        videoElement.addEventListener('loadeddata', handleLoadedData);

        // Attempt immediate play for good measure
        const playTimer = setTimeout(() => {
            videoElement.play().then(() => {
                setIsPlaying(true);
            }).catch(() => {
                // Silently fail if autoplay is blocked
                setIsPlaying(false);
            });
        }, 300);

        // Cleanup
        return () => {
            videoElement.removeEventListener('loadeddata', handleLoadedData);
            clearTimeout(playTimer);
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
            />
            <motion.div
                animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.2, 1, 1.2] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute bottom-20 -right-20 w-96 h-96 bg-gradient-to-br from-rose-300 to-pink-500 rounded-full blur-3xl"
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
                    onMouseEnter={() => setShowControls(true)}
                    onMouseLeave={() => setShowControls(!isPlaying)}
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
                                onEnded={handleVideoEnd}
                                playsInline
                            >
                                <source src={videos[currentVideo].src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </motion.video>
                        </AnimatePresence>

                        {/* Play/Pause Overlay */}
                        <AnimatePresence>
                            {showControls && (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
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
