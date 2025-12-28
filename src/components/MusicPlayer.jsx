import { memo, useState, useCallback, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/**
 * MusicPlayer - Floating music player with romantic theme
 * Features play/pause, volume control, minimize/expand states
 */
const MusicPlayer = memo(() => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [volume, setVolume] = useState(0.5);
    const [isExpanded, setIsExpanded] = useState(false);
    const [isLoaded, setIsLoaded] = useState(false);
    const audioRef = useRef(null);

    // Initialize audio
    useEffect(() => {
        audioRef.current = new Audio('/music/romantic-song.mp3');
        audioRef.current.loop = true;
        audioRef.current.volume = volume;

        audioRef.current.addEventListener('canplaythrough', () => {
            setIsLoaded(true);
        });

        audioRef.current.addEventListener('error', () => {
            console.log('Music file not found. Add your music to public/music/romantic-song.mp3');
        });

        return () => {
            if (audioRef.current) {
                audioRef.current.pause();
                audioRef.current = null;
            }
        };
    }, []);

    // Handle play/pause
    const togglePlay = useCallback(() => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play().catch(console.error);
        }
        setIsPlaying(!isPlaying);
    }, [isPlaying]);

    // Handle volume change
    const handleVolumeChange = useCallback((e) => {
        const newVolume = parseFloat(e.target.value);
        setVolume(newVolume);
        if (audioRef.current) {
            audioRef.current.volume = newVolume;
        }
    }, []);

    // Toggle expand/collapse
    const toggleExpand = useCallback(() => {
        setIsExpanded(!isExpanded);
    }, [isExpanded]);

    return (
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 2, duration: 0.5 }}
            className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50"
        >
            <AnimatePresence mode="wait">
                {isExpanded ? (
                    <motion.div
                        key="expanded"
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.8, opacity: 0 }}
                        className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 shadow-2xl w-72 sm:w-80"
                        style={{
                            background: 'linear-gradient(135deg, rgba(255,182,193,0.95), rgba(255,192,203,0.95))',
                            backdropFilter: 'blur(20px)',
                            border: '2px solid rgba(255,255,255,0.8)',
                            boxShadow: '0 20px 60px rgba(157,23,77,0.3), 0 0 40px rgba(236,72,153,0.2)'
                        }}
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center gap-2">
                                <motion.span
                                    animate={{ scale: isPlaying ? [1, 1.2, 1] : 1 }}
                                    transition={{ duration: 0.5, repeat: isPlaying ? Infinity : 0 }}
                                    className="text-2xl"
                                >
                                    🎵
                                </motion.span>
                                <span className="font-cursive text-pink-900 font-bold">Our Song</span>
                            </div>
                            <button
                                onClick={toggleExpand}
                                className="w-8 h-8 rounded-full bg-white/50 hover:bg-white/80 flex items-center justify-center text-pink-700 transition-colors"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Visualizer Bars */}
                        <div className="flex items-end justify-center gap-1 h-12 mb-4">
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    animate={{
                                        height: isPlaying
                                            ? [8, 24 + Math.random() * 20, 8]
                                            : 8
                                    }}
                                    transition={{
                                        duration: 0.4 + Math.random() * 0.3,
                                        repeat: isPlaying ? Infinity : 0,
                                        delay: i * 0.05
                                    }}
                                    className="w-2 rounded-full"
                                    style={{
                                        background: 'linear-gradient(to top, #db2777, #ec4899)',
                                        minHeight: 8
                                    }}
                                />
                            ))}
                        </div>

                        {/* Play/Pause Button */}
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={togglePlay}
                            className="w-full py-3 rounded-2xl font-cursive font-bold text-lg transition-all"
                            style={{
                                background: isPlaying
                                    ? 'linear-gradient(135deg, #be185d, #db2777)'
                                    : 'linear-gradient(135deg, #ec4899, #f472b6)',
                                color: 'white',
                                boxShadow: '0 8px 25px rgba(219,39,119,0.3)'
                            }}
                        >
                            {isPlaying ? '⏸️ Pause' : '▶️ Play'}
                        </motion.button>

                        {/* Volume Control */}
                        <div className="mt-4 flex items-center gap-3">
                            <span className="text-lg">🔈</span>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.01"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="flex-1 h-2 rounded-full appearance-none cursor-pointer"
                                style={{
                                    background: `linear-gradient(to right, #db2777 ${volume * 100}%, #fce7f3 ${volume * 100}%)`
                                }}
                            />
                            <span className="text-lg">🔊</span>
                        </div>

                        {/* Helper Text */}
                        {!isLoaded && (
                            <p className="text-xs text-pink-700 mt-3 text-center">
                                Add music to public/music/romantic-song.mp3
                            </p>
                        )}
                    </motion.div>
                ) : (
                    <motion.button
                        key="minimized"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={toggleExpand}
                        className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl"
                        style={{
                            background: 'linear-gradient(135deg, #ffb6c1, #ffc0cb)',
                            border: '3px solid rgba(255,255,255,0.9)',
                            boxShadow: '0 10px 40px rgba(157,23,77,0.3), 0 0 30px rgba(236,72,153,0.2)'
                        }}
                    >
                        <motion.span
                            animate={isPlaying ? {
                                scale: [1, 1.2, 1],
                                rotate: [0, 10, -10, 0]
                            } : {}}
                            transition={{ duration: 1, repeat: isPlaying ? Infinity : 0 }}
                            className="text-3xl"
                        >
                            {isPlaying ? '🎵' : '🎶'}
                        </motion.span>
                    </motion.button>
                )}
            </AnimatePresence>
        </motion.div>
    );
});

MusicPlayer.displayName = 'MusicPlayer';

export default MusicPlayer;
