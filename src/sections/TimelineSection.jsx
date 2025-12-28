import { memo, useMemo } from 'react';
import { motion } from 'framer-motion';
import { AnimatedSection } from '../components';
import { TIMELINE_EVENTS } from '../constants';

/**
 * TimelineSection - Relationship journey timeline
 * Vertical timeline with animated milestone cards
 */
const TimelineSection = memo(() => {
    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    }), []);

    const itemVariants = useMemo(() => ({
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6, ease: 'easeOut' }
        }
    }), []);

    return (
        <section className="py-12 sm:py-16 md:py-20 lg:py-24 relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 via-transparent to-pink-500/10 pointer-events-none" />

            {/* Decorative orbs */}
            <motion.div
                animate={{ opacity: [0.15, 0.3, 0.15], scale: [1, 1.2, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-1/4 -left-32 w-96 h-96 bg-gradient-to-br from-pink-300 to-rose-400 rounded-full blur-3xl"
            />
            <motion.div
                animate={{ opacity: [0.2, 0.35, 0.2], scale: [1.2, 1, 1.2] }}
                transition={{ duration: 10, repeat: Infinity }}
                className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-gradient-to-br from-rose-300 to-pink-500 rounded-full blur-3xl"
            />

            {/* Header */}
            <AnimatedSection className="text-center mb-10 sm:mb-14 md:mb-20 px-4 relative z-10">
                <motion.span
                    animate={{ rotate: [0, 10, -10, 0], y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-6xl inline-block mb-6"
                >
                    📖
                </motion.span>
                <h2
                    className="font-elegant text-4xl md:text-6xl text-white mb-4 font-bold"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                    Our Beautiful Journey
                </h2>
                <p
                    className="font-cursive text-xl md:text-2xl text-white/90"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
                >
                    Every moment with you is a treasure 💕
                </p>
            </AnimatedSection>

            {/* Timeline Container */}
            <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                className="max-w-4xl mx-auto px-4 relative z-10"
            >
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-pink-300 via-pink-400 to-pink-500 rounded-full hidden md:block" />

                {/* Timeline Events */}
                {TIMELINE_EVENTS.map((event, index) => (
                    <motion.div
                        key={index}
                        variants={itemVariants}
                        className={`relative flex items-center mb-8 sm:mb-10 md:mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                            }`}
                    >
                        {/* Timeline Dot */}
                        <div className="absolute left-1/2 transform -translate-x-1/2 hidden md:flex">
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                className="w-16 h-16 rounded-full flex items-center justify-center z-10"
                                style={{
                                    background: 'linear-gradient(135deg, #ffb6c1, #ffc0cb)',
                                    boxShadow: '0 8px 30px rgba(157,23,77,0.3), 0 0 20px rgba(236,72,153,0.2)',
                                    border: '4px solid white'
                                }}
                            >
                                <span className="text-2xl">{event.emoji}</span>
                            </motion.div>
                        </div>

                        {/* Content Card */}
                        <motion.div
                            whileHover={{ scale: 1.02, y: -5 }}
                            className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}
                        >
                            <div
                                className="rounded-2xl sm:rounded-3xl p-6 sm:p-8 relative"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,182,193,0.3))',
                                    boxShadow: '0 20px 60px rgba(157,23,77,0.25), 0 0 40px rgba(236,72,153,0.15)',
                                    border: '2px solid rgba(255,255,255,0.8)'
                                }}
                            >
                                {/* Mobile emoji */}
                                <motion.span
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="text-4xl block mb-4 md:hidden"
                                >
                                    {event.emoji}
                                </motion.span>

                                {/* Date Badge */}
                                <div
                                    className="inline-block px-4 py-1 rounded-full mb-4"
                                    style={{
                                        background: 'linear-gradient(135deg, #db2777, #ec4899)',
                                        boxShadow: '0 4px 15px rgba(219,39,119,0.3)'
                                    }}
                                >
                                    <span className="font-cursive text-white font-bold">
                                        {event.date}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="font-cursive text-xl sm:text-2xl md:text-3xl text-pink-900 font-bold mb-2 sm:mb-3">
                                    {event.title}
                                </h3>

                                {/* Description */}
                                <p className="text-pink-800 text-base sm:text-lg leading-relaxed font-medium">
                                    {event.description}
                                </p>

                                {/* Decorative arrow (desktop only) */}
                                <div
                                    className={`absolute top-1/2 transform -translate-y-1/2 hidden md:block ${index % 2 === 0 ? 'right-[-16px]' : 'left-[-16px] rotate-180'
                                        }`}
                                >
                                    <div
                                        className="w-0 h-0"
                                        style={{
                                            borderTop: '12px solid transparent',
                                            borderBottom: '12px solid transparent',
                                            borderLeft: '16px solid rgba(255,255,255,0.95)'
                                        }}
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* Empty space for alignment */}
                        <div className="hidden md:block w-5/12" />
                    </motion.div>
                ))}
            </motion.div>

            {/* Bottom decoration */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-center mt-16 relative z-10"
            >
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="inline-block px-10 py-5 rounded-full"
                    style={{
                        background: 'linear-gradient(135deg, #ffb6c1, #ffc0cb)',
                        boxShadow: '0 15px 50px rgba(157,23,77,0.3)'
                    }}
                >
                    <p className="font-elegant text-3xl text-pink-900 font-bold">
                        And this is just the beginning... 💕
                    </p>
                </motion.div>
            </motion.div>
        </section>
    );
});

TimelineSection.displayName = 'TimelineSection';

export default TimelineSection;
