import { motion } from 'motion/react';
import { useState, useEffect } from 'react';

interface Footprint {
  id: number;
  x: number;
  rotation: number;
  isLeft: boolean;
}

export function SandEffects() {
  const [footprints, setFootprints] = useState<Footprint[]>([]);

  useEffect(() => {
    // Create footprints periodically
    const interval = setInterval(() => {
      const newFootprint: Footprint = {
        id: Date.now(),
        x: Math.random() * 80 + 10, // 10% to 90% from left
        rotation: Math.random() * 30 - 15, // -15 to 15 degrees
        isLeft: Math.random() > 0.5
      };

      setFootprints(prev => [...prev.slice(-8), newFootprint]); // Keep only last 8
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none overflow-hidden">
      {/* Sand Texture Base */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ffdc00] via-[#f4d03f]/80 to-transparent opacity-90" />
      
      {/* Sand Particles/Grains */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#ffd700]/20"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: `${Math.random() * 80}%`,
              width: `${1 + Math.random() * 2}px`,
              height: `${1 + Math.random() * 2}px`
            }}
          />
        ))}
      </div>

      {/* Wind Effect - Moving sand particles */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`wind-${i}`}
          className="absolute w-8 h-0.5 bg-gradient-to-r from-transparent via-[#ffdc00]/30 to-transparent rounded-full"
          style={{
            left: `${-10 + Math.random() * 10}%`,
            bottom: `${20 + Math.random() * 60}%`
          }}
          animate={{
            x: ['0%', '120vw'],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'linear'
          }}
        />
      ))}

      {/* Animated Footprints */}
      {footprints.map((footprint) => (
        <motion.div
          key={footprint.id}
          className="absolute bottom-8"
          style={{
            left: `${footprint.x}%`,
            rotate: `${footprint.rotation}deg`
          }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: [0, 0.4, 0.4, 0], scale: 1 }}
          transition={{
            duration: 6,
            times: [0, 0.1, 0.7, 1]
          }}
        >
          {/* Footprint SVG */}
          <svg
            width="24"
            height="32"
            viewBox="0 0 24 32"
            className={footprint.isLeft ? '' : 'scale-x-[-1]'}
          >
            {/* Heel */}
            <ellipse
              cx="12"
              cy="24"
              rx="8"
              ry="6"
              fill="#d4a574"
              opacity="0.5"
            />
            {/* Ball of foot */}
            <ellipse
              cx="12"
              cy="14"
              rx="9"
              ry="7"
              fill="#d4a574"
              opacity="0.5"
            />
            {/* Toes */}
            <circle cx="8" cy="6" r="2.5" fill="#d4a574" opacity="0.5" />
            <circle cx="12" cy="4" r="2.5" fill="#d4a574" opacity="0.5" />
            <circle cx="16" cy="6" r="2.5" fill="#d4a574" opacity="0.5" />
            <circle cx="19" cy="8" r="2" fill="#d4a574" opacity="0.5" />
            <circle cx="5" cy="8" r="2" fill="#d4a574" opacity="0.5" />
          </svg>
        </motion.div>
      ))}

      {/* Shell Decorations */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={`shell-${i}`}
          className="absolute"
          style={{
            left: `${15 + i * 18}%`,
            bottom: `${10 + Math.random() * 15}%`
          }}
          animate={{
            y: [0, -2, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          <svg width="20" height="16" viewBox="0 0 20 16">
            <path
              d="M 10 2 Q 15 5 18 10 Q 15 14 10 16 Q 5 14 2 10 Q 5 5 10 2 Z"
              fill="#f0e5d8"
              stroke="#d4a574"
              strokeWidth="0.5"
              opacity="0.6"
            />
            {/* Shell lines */}
            <path d="M 10 2 L 10 16" stroke="#d4a574" strokeWidth="0.3" opacity="0.4" />
            <path d="M 6 6 L 14 14" stroke="#d4a574" strokeWidth="0.3" opacity="0.4" />
            <path d="M 14 6 L 6 14" stroke="#d4a574" strokeWidth="0.3" opacity="0.4" />
          </svg>
        </motion.div>
      ))}

      {/* Small Pebbles */}
      {Array.from({ length: 8 }).map((_, i) => (
        <div
          key={`pebble-${i}`}
          className="absolute rounded-full bg-gray-400/30"
          style={{
            left: `${10 + i * 11}%`,
            bottom: `${15 + Math.random() * 20}%`,
            width: `${3 + Math.random() * 4}px`,
            height: `${3 + Math.random() * 4}px`
          }}
        />
      ))}

      {/* Sand Ripples */}
      {Array.from({ length: 6 }).map((_, i) => (
        <motion.div
          key={`ripple-${i}`}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#e6b800]/20 to-transparent"
          style={{
            bottom: `${25 + i * 8}%`
          }}
          animate={{
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.5
          }}
        />
      ))}
    </div>
  );
}