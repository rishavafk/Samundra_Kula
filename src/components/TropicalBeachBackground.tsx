import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export function TropicalBeachBackground() {
  const [timeOfDay, setTimeOfDay] = useState<'sunrise' | 'noon' | 'sunset'>('noon');

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeOfDay(prev => {
        if (prev === 'sunrise') return 'noon';
        if (prev === 'noon') return 'sunset';
        return 'sunrise';
      });
    }, 8000); // Change scene every 8 seconds

    return () => clearInterval(interval);
  }, []);

  const gradients = {
    sunrise: 'from-[#ff6b6b] via-[#ffa500] to-[#87ceeb]',
    noon: 'from-[#001f3f] via-[#0074d9] to-[#39cccc]',
    sunset: 'from-[#ff4500] via-[#ff8c00] to-[#1e3a8a]'
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Sky with Time Transitions */}
      <motion.div
        className={`absolute inset-0 bg-gradient-to-b ${gradients[timeOfDay]}`}
        key={timeOfDay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      />

      {/* Palm Trees Silhouettes */}
      <div className="absolute bottom-0 left-0 right-0 h-1/2 pointer-events-none">
        {/* Left Palm Tree */}
        <motion.div
          className="absolute bottom-0 left-[10%]"
          animate={{
            rotate: [0, 2, -2, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <svg width="120" height="300" viewBox="0 0 120 300" className="opacity-20">
            {/* Trunk */}
            <path
              d="M 55 300 Q 60 200 58 100 Q 56 50 60 0"
              stroke="#2d1810"
              strokeWidth="8"
              fill="none"
            />
            {/* Leaves */}
            <path d="M 60 30 Q 20 20 10 0" stroke="#1a5f1a" strokeWidth="4" fill="none" />
            <path d="M 60 30 Q 40 10 20 -5" stroke="#1a5f1a" strokeWidth="4" fill="none" />
            <path d="M 60 30 Q 80 10 100 -5" stroke="#1a5f1a" strokeWidth="4" fill="none" />
            <path d="M 60 30 Q 100 20 110 0" stroke="#1a5f1a" strokeWidth="4" fill="none" />
          </svg>
        </motion.div>

        {/* Right Palm Tree */}
        <motion.div
          className="absolute bottom-0 right-[15%]"
          animate={{
            rotate: [0, -1.5, 1.5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <svg width="100" height="280" viewBox="0 0 100 280" className="opacity-20">
            {/* Trunk */}
            <path
              d="M 45 280 Q 50 180 48 80 Q 46 40 50 0"
              stroke="#2d1810"
              strokeWidth="7"
              fill="none"
            />
            {/* Leaves */}
            <path d="M 50 25 Q 15 15 5 0" stroke="#1a5f1a" strokeWidth="3" fill="none" />
            <path d="M 50 25 Q 35 8 18 -3" stroke="#1a5f1a" strokeWidth="3" fill="none" />
            <path d="M 50 25 Q 70 8 82 -3" stroke="#1a5f1a" strokeWidth="3" fill="none" />
            <path d="M 50 25 Q 85 15 95 0" stroke="#1a5f1a" strokeWidth="3" fill="none" />
          </svg>
        </motion.div>
      </div>

      {/* Ocean Layers */}
      <div className="absolute bottom-0 left-0 right-0 h-3/5">
        {/* Deep Water */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#003d5c] via-[#0074d9]/60 to-transparent"
          animate={{
            opacity: [0.7, 0.85, 0.7]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Water Reflections */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 bg-white/10 rounded-full blur-sm"
              style={{
                left: `${i * 15}%`,
                top: `${30 + Math.random() * 40}%`,
                width: `${50 + Math.random() * 100}px`
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                x: [0, 20, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}
        </div>
      </div>

      {/* Animated Waves with Foam */}
      <div className="absolute bottom-0 left-0 right-0">
        {/* Wave 1 - Far */}
        <motion.svg
          className="absolute bottom-32 left-0 w-full h-24 opacity-40"
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          animate={{
            x: [0, -100, 0]
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <motion.path
            d="M0,50 Q360,20 720,50 T1440,50 L1440,100 L0,100 Z"
            fill="url(#waveGradient1)"
            animate={{
              d: [
                "M0,50 Q360,20 720,50 T1440,50 L1440,100 L0,100 Z",
                "M0,50 Q360,60 720,50 T1440,50 L1440,100 L0,100 Z",
                "M0,50 Q360,20 720,50 T1440,50 L1440,100 L0,100 Z"
              ]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7fdbff" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#39cccc" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Wave 2 - Middle */}
        <motion.svg
          className="absolute bottom-16 left-0 w-full h-32 opacity-60"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
          animate={{
            x: [-50, 50, -50]
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <motion.path
            d="M0,60 Q360,30 720,60 T1440,60 L1440,120 L0,120 Z"
            fill="url(#waveGradient2)"
            animate={{
              d: [
                "M0,60 Q360,30 720,60 T1440,60 L1440,120 L0,120 Z",
                "M0,60 Q360,70 720,60 T1440,60 L1440,120 L0,120 Z",
                "M0,60 Q360,30 720,60 T1440,60 L1440,120 L0,120 Z"
              ]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#39cccc" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#0074d9" stopOpacity="0.6" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Wave 3 - Close with Foam */}
        <motion.svg
          className="absolute bottom-0 left-0 w-full h-40"
          viewBox="0 0 1440 150"
          preserveAspectRatio="none"
          animate={{
            x: [0, -80, 0]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <motion.path
            d="M0,80 Q360,50 720,80 T1440,80 L1440,150 L0,150 Z"
            fill="url(#waveGradient3)"
            animate={{
              d: [
                "M0,80 Q360,50 720,80 T1440,80 L1440,150 L0,150 Z",
                "M0,80 Q360,90 720,80 T1440,80 L1440,150 L0,150 Z",
                "M0,80 Q360,50 720,80 T1440,80 L1440,150 L0,150 Z"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          {/* Foam Effect */}
          <motion.path
            d="M0,80 Q360,50 720,80 T1440,80"
            stroke="white"
            strokeWidth="3"
            fill="none"
            opacity="0.6"
            animate={{
              d: [
                "M0,80 Q360,50 720,80 T1440,80",
                "M0,80 Q360,90 720,80 T1440,80",
                "M0,80 Q360,50 720,80 T1440,80"
              ]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#7fdbff" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#39cccc" stopOpacity="0.9" />
            </linearGradient>
          </defs>
        </motion.svg>

        {/* Sand */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#ffdc00] via-[#f4d03f] to-transparent" />
      </div>

      {/* Floating Foam Particles */}
      {Array.from({ length: 15 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute bottom-0 w-2 h-2 bg-white rounded-full opacity-70 blur-sm"
          style={{
            left: `${Math.random() * 100}%`,
            bottom: `${10 + Math.random() * 30}%`
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.7, 0.3, 0.7],
            scale: [1, 1.5, 1]
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2
          }}
        />
      ))}
    </div>
  );
}