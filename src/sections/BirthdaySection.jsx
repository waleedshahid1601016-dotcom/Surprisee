import { motion } from 'framer-motion';
import { GlowingCard, AnimatedSection } from '../components';

/**
 * BirthdaySection - Displays animated birthday wishes in beautiful cards
 * 2 cards per row with elegant animations
 */
const BirthdaySection = () => {
  const wishes = [
    {
      emoji: '💕',
      message: 'Happy Birthday my love Laraib',
      gradient: 'from-rose-400 via-pink-400 to-fuchsia-400'
    },
    {
      emoji: '🌸',
      message: 'May your life always be filled with smiles and peace',
      gradient: 'from-pink-400 via-rose-300 to-pink-500'
    },
    {
      emoji: '🤍',
      message: 'You are the most beautiful blessing Allah gave me',
      gradient: 'from-fuchsia-400 via-pink-400 to-rose-400'
    },
    {
      emoji: '❤️',
      message: 'My heart celebrates you today and always',
      gradient: 'from-rose-500 via-pink-400 to-fuchsia-500'
    },
    {
      emoji: '✨',
      message: "I'm grateful for you every single day",
      gradient: 'from-pink-500 via-rose-400 to-pink-400'
    }
  ];

  // Staggered animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 60,
      scale: 0.9,
      rotateX: -10
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  return (
    <section className="relative py-24 min-h-screen">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-rose-50/30 via-pink-50/50 to-fuchsia-50/30 pointer-events-none" />
      
      {/* Decorative blurs */}
      <motion.div
        animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-rose-200 to-pink-300 rounded-full blur-3xl opacity-30"
      />
      <motion.div
        animate={{ opacity: [0.4, 0.6, 0.4], scale: [1.1, 1, 1.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-pink-200 to-fuchsia-300 rounded-full blur-3xl opacity-30"
      />

      {/* Section Header */}
      <AnimatedSection className="text-center mb-16 px-4 relative z-10">
        <motion.div
          animate={{ 
            rotate: [0, 5, -5, 0],
            y: [0, -8, 0]
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="text-7xl inline-block mb-6"
        >
          🎂
        </motion.div>
        <h2 className="font-elegant text-5xl md:text-7xl text-gradient mb-4">
          Birthday Wishes
        </h2>
        <p className="font-cursive text-xl md:text-2xl text-pink-500/80">
          Celebrating the day my angel was born 💫
        </p>
      </AnimatedSection>

      {/* Wishes Grid - 2 per row */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
      >
        {wishes.map((wish, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{ 
              scale: 1.03,
              y: -8,
              transition: { duration: 0.3, ease: 'easeOut' }
            }}
          >
            <GlowingCard className="h-full">
              <div className="flex flex-col items-center text-center p-6">
                {/* Floating emoji */}
                <motion.span
                  animate={{ 
                    y: [0, -12, 0],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity, 
                    delay: index * 0.2,
                    ease: 'easeInOut'
                  }}
                  className="text-5xl mb-5"
                >
                  {wish.emoji}
                </motion.span>
                
                {/* Message */}
                <p className={`font-cursive text-xl md:text-2xl bg-gradient-to-r ${wish.gradient} bg-clip-text text-transparent leading-relaxed`}>
                  {wish.message}
                </p>
                
                {/* Decorative line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-300 to-transparent mt-6"
                />
              </div>
            </GlowingCard>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom decoration */}
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.8, type: 'spring' }}
        className="text-center mt-16 relative z-10"
      >
        <motion.span
          animate={{ rotate: [0, 10, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="text-7xl inline-block"
        >
          🎁
        </motion.span>
      </motion.div>
    </section>
  );
};

export default BirthdaySection;
