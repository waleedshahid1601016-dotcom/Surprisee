/* eslint-disable no-unused-vars */
import { memo, useCallback, useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingHearts, FloatingPolaroids, MusicPlayer, LoadingScreen, CountdownTimer } from './components';
import {
  LandingPage,
  HeroSection,
  WishesSection,
  FinalMessageSection,
  TimelineSection,
  LoveLetterSection,
  ReasonsSection,
  FutureDreamsSection
} from './sections';

// Lazy load heavy sections for better performance
const GallerySection = lazy(() => import('./sections/GallerySection'));
const VideoGallerySection = lazy(() => import('./sections/VideoGallerySection'));
const VideoMessageSection = lazy(() => import('./sections/VideoMessageSection'));

/**
 * Main App Component - Comprehensive romantic surprise for Laraib 💕
 * 
 * Features:
 * - Loading screen with beautiful animation
 * - Landing page with surprise reveal button
 * - Floating hearts background
 * - Music player with romantic background music
 * - Hero section with image slider
 * - Countdown timer to wedding date
 * - Video messages section
 * - Love letter section
 * - 4 categorized wish cards
 * - 50+ reasons I love you
 * - Relationship timeline
 * - Photo gallery
 * - Future dreams section
 * - Final emotional message
 */
const App = memo(() => {
  const [isLoading, setIsLoading] = useState(true);
  const [showSurprise, setShowSurprise] = useState(false);

  const handleLoadComplete = useCallback(() => {
    setIsLoading(false);
  }, []);

  const handleReveal = useCallback(() => {
    setShowSurprise(true);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen onLoadComplete={handleLoadComplete} />
        )}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {!isLoading && !showSurprise && (
          <LandingPage key="landing" onReveal={handleReveal} />
        )}

        {!isLoading && showSurprise && (
          <motion.div
            key="surprise"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            style={{ willChange: 'opacity' }}
          >
            {/* Floating hearts background - always visible */}
            <FloatingHearts />

            {/* Floating polaroid decorations */}
            <FloatingPolaroids />

            {/* Music Player */}
            <MusicPlayer />

            {/* Main content with all sections */}
            <main className="relative z-10">
              {/* 1. Hero - Grand opening with greeting */}
              <HeroSection />

              {/* 2. Countdown Timer to Wedding */}
              <CountdownTimer />

              {/* 3. Video Messages - Personal videos */}
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-2xl text-white">Loading...</div></div>}>
                <VideoMessageSection />
              </Suspense>

              {/* 4. Love Letter - Heartfelt message */}
              <LoveLetterSection />

              {/* 5. Wishes - 4 categorized message cards */}
              <WishesSection />

              {/* 6. Reasons - 50+ reasons I love you */}
              <ReasonsSection />

              {/* 7. Timeline - Relationship journey */}
              <TimelineSection />

              {/* 8. Photo Gallery */}
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-2xl text-white">Loading...</div></div>}>
                <GallerySection />
              </Suspense>

              {/* 9. Video Gallery - All video memories */}
              <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="text-2xl text-white">Loading...</div></div>}>
                <VideoGallerySection />
              </Suspense>

              {/* 10. Future Dreams - Vision together */}
              <FutureDreamsSection />

              {/* 11. Final Love Message */}
              <FinalMessageSection />

              {/* Footer */}
              <footer className="py-16 text-center bg-gradient-to-t from-pink-400/60 to-transparent">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <p className="font-cursive text-2xl text-white mb-4 font-bold"
                    style={{ textShadow: '0 2px 15px rgba(0,0,0,0.2)' }}>
                    Made with 💕 for the most beautiful person in my world
                  </p>
                  <p className="text-lg text-white/90 font-medium">
                    Laraib - My Forever Love 💖
                  </p>

                  {/* Footer hearts */}
                  <div className="flex justify-center gap-3 mt-8">
                    {['💕', '💖', '❤️', '💗', '💝', '💖', '💕'].map((heart, i) => (
                      <motion.span
                        key={i}
                        animate={{ y: [0, -8, 0], scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.15 }}
                        className="text-2xl"
                      >
                        {heart}
                      </motion.span>
                    ))}
                  </div>

                  <p className="text-sm text-white/70 mt-8">
                    2026 💍 In Sha Allah
                  </p>
                </motion.div>
              </footer>
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

App.displayName = 'App';

export default App;
