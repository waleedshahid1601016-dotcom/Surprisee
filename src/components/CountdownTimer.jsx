import { memo, useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { COUNTDOWN_TARGET_DATE } from '../constants';

/**
 * CountdownTimer - Countdown to wedding/special date
 * Animated flip-style numbers with romantic design
 */
const CountdownTimer = memo(() => {
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });

    const calculateTimeLeft = useCallback(() => {
        const difference = COUNTDOWN_TARGET_DATE.getTime() - new Date().getTime();

        if (difference > 0) {
            return {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60)
            };
        }

        return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }, []);

    useEffect(() => {
        setTimeLeft(calculateTimeLeft());

        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, [calculateTimeLeft]);

    const timeUnits = [
        { label: 'Days', value: timeLeft.days, emoji: '📅' },
        { label: 'Hours', value: timeLeft.hours, emoji: '⏰' },
        { label: 'Minutes', value: timeLeft.minutes, emoji: '⏳' },
        { label: 'Seconds', value: timeLeft.seconds, emoji: '💓' }
    ];

    return (
        <section className="py-12 sm:py-16 md:py-20 relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-pink-500/10 to-transparent pointer-events-none" />

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8 sm:mb-10 md:mb-12 px-4"
            >
                <motion.span
                    animate={{ scale: [1, 1.2, 1], rotate: [0, 10, -10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-6xl inline-block mb-4"
                >
                    🎂
                </motion.span>
                <h2
                    className="font-elegant text-4xl md:text-6xl text-white mb-4 font-bold"
                    style={{ textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}
                >
                    Countdown To Your Birthday
                </h2>
                <p
                    className="font-cursive text-xl md:text-2xl text-white/90"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
                >
                    Every second brings us closer to celebrating you 💕
                </p>
            </motion.div>

            {/* Countdown Cards */}
            <div className="max-w-5xl mx-auto px-4">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                    {timeUnits.map((unit, index) => (
                        <motion.div
                            key={unit.label}
                            initial={{ opacity: 0, y: 50, scale: 0.9 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                            whileHover={{ scale: 1.05, y: -5 }}
                            className="relative"
                        >
                            <div
                                className="rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 text-center"
                                style={{
                                    background: 'linear-gradient(135deg, rgba(255,255,255,0.95), rgba(255,182,193,0.3))',
                                    boxShadow: '0 20px 60px rgba(157,23,77,0.3), 0 0 40px rgba(236,72,153,0.15)',
                                    border: '3px solid rgba(255,255,255,0.8)'
                                }}
                            >
                                {/* Emoji */}
                                <motion.span
                                    animate={{ y: [0, -5, 0] }}
                                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                                    className="text-2xl sm:text-3xl md:text-4xl block mb-2 sm:mb-3"
                                >
                                    {unit.emoji}
                                </motion.span>

                                {/* Number */}
                                <motion.div
                                    key={unit.value}
                                    initial={{ scale: 1.2, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 1 }}
                                    className="font-elegant text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-1 sm:mb-2"
                                    style={{
                                        background: 'linear-gradient(135deg, #9d174d, #db2777)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent',
                                        filter: 'drop-shadow(0 2px 4px rgba(157,23,77,0.3))'
                                    }}
                                >
                                    {String(unit.value).padStart(2, '0')}
                                </motion.div>

                                {/* Label */}
                                <p className="font-cursive text-sm sm:text-base md:text-lg lg:text-xl text-pink-800 font-semibold">
                                    {unit.label}
                                </p>
                            </div>

                            {/* Decorative corner heart */}
                            <motion.span
                                animate={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 1.5, repeat: Infinity, delay: index * 0.3 }}
                                className="absolute -top-2 -right-2 text-2xl"
                            >
                                💗
                            </motion.span>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Bottom message */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-center mt-12 px-4"
            >
                <motion.p
                    animate={{ opacity: [0.7, 1, 0.7] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="font-cursive text-xl text-white/90"
                    style={{ textShadow: '0 2px 10px rgba(0,0,0,0.2)' }}
                >
                    Can't wait to celebrate your special day 🎉
                </motion.p>
            </motion.div>
        </section>
    );
});

CountdownTimer.displayName = 'CountdownTimer';

export default CountdownTimer;
