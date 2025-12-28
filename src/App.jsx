/* eslint-disable no-unused-vars */
import { memo, useCallback, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FloatingHearts, MusicPlayer, LoadingScreen, CountdownTimer } from './components';
import {
  LandingPage,
  HeroSection,
  WishesSection,
  GallerySection,
  FinalMessageSection,
  VideoMessageSection,
  TimelineSection,
  LoveLetterSection,
  ReasonsSection,
  FutureDreamsSection
} from './sections';

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
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* Floating hearts background - always visible */}
            <FloatingHearts />

            {/* Music Player */}
            <MusicPlayer />

            {/* Main content with all sections */}
            <main className="relative z-10">
              {/* 1. Hero - Grand opening with greeting */}
              <HeroSection />

              {/* 2. Countdown Timer to Wedding */}
              <CountdownTimer />

              {/* 3. Video Messages - Personal videos */}
              <VideoMessageSection />

              {/* 4. Love Letter - Heartfelt message */}
              <LoveLetterSection />

              {/* 5. Wishes - 4 categorized message cards */}
              <WishesSection />

              {/* 6. Reasons - 50+ reasons I love you */}
              <ReasonsSection />

              {/* 7. Timeline - Relationship journey */}
              <TimelineSection />

              {/* 8. Photo Gallery */}
              <GallerySection />

              {/* 9. Future Dreams - Vision together */}
              <FutureDreamsSection />

              {/* 10. Final Love Message */}
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
                    December 2025 💍 In Sha Allah
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
