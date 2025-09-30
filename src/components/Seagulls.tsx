import { motion } from 'motion/react';

export function Seagulls() {
  const seagullPaths = [
    { startX: -10, startY: 20, endX: 110, endY: 15, duration: 25, delay: 0 },
    { startX: -10, startY: 30, endX: 110, endY: 25, duration: 30, delay: 5 },
    { startX: 110, startY: 40, endX: -10, endY: 35, duration: 28, delay: 10 },
    { startX: -10, startY: 50, endX: 110, endY: 45, duration: 32, delay: 15 },
    { startX: 110, startY: 25, endX: -10, endY: 30, duration: 27, delay: 8 }
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {seagullPaths.map((path, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{
            left: `${path.startX}%`,
            top: `${path.startY}%`
          }}
          animate={{
            left: [`${path.startX}%`, `${path.endX}%`],
            top: [`${path.startY}%`, `${path.endY}%`],
            y: [0, -15, -8, -20, 0, -10, 0]
          }}
          transition={{
            duration: path.duration,
            repeat: Infinity,
            delay: path.delay,
            ease: "linear",
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Seagull SVG with wings flapping */}
          <motion.svg
            width="40"
            height="30"
            viewBox="0 0 40 30"
            className="drop-shadow-lg"
            animate={{
              rotateZ: [0, -5, 5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {/* Shadow */}
            <ellipse
              cx="20"
              cy="28"
              rx="12"
              ry="3"
              fill="black"
              opacity="0.15"
            />

            {/* Body */}
            <ellipse
              cx="20"
              cy="15"
              rx="6"
              ry="8"
              fill="white"
              stroke="#d1d5db"
              strokeWidth="0.5"
            />

            {/* Head */}
            <circle
              cx="20"
              cy="10"
              r="4"
              fill="white"
              stroke="#d1d5db"
              strokeWidth="0.5"
            />

            {/* Beak */}
            <path
              d="M 20 10 L 22 11 L 20 10.5 Z"
              fill="#ffa500"
            />

            {/* Left Wing - Animated */}
            <motion.path
              d="M 14 15 Q 8 12 5 13"
              stroke="#e5e7eb"
              strokeWidth="2"
              fill="none"
              animate={{
                d: [
                  "M 14 15 Q 8 12 5 13",
                  "M 14 15 Q 8 10 5 8",
                  "M 14 15 Q 8 12 5 13"
                ]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Right Wing - Animated */}
            <motion.path
              d="M 26 15 Q 32 12 35 13"
              stroke="#e5e7eb"
              strokeWidth="2"
              fill="none"
              animate={{
                d: [
                  "M 26 15 Q 32 12 35 13",
                  "M 26 15 Q 32 10 35 8",
                  "M 26 15 Q 32 12 35 13"
                ]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Tail */}
            <path
              d="M 20 22 L 18 25 L 22 25 Z"
              fill="white"
              stroke="#d1d5db"
              strokeWidth="0.5"
            />
          </motion.svg>
        </motion.div>
      ))}

      {/* Occasional seagull cries (visual indicators) */}
      {Array.from({ length: 3 }).map((_, i) => (
        <motion.div
          key={`cry-${i}`}
          className="absolute text-sm opacity-0"
          style={{
            left: `${20 + i * 30}%`,
            top: `${30 + i * 10}%`
          }}
          animate={{
            opacity: [0, 0.6, 0],
            y: [0, -10, -20],
            scale: [0.8, 1, 1.2]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            delay: i * 8 + 10,
            repeatDelay: 20
          }}
        >
          <span className="text-white/40">♪</span>
        </motion.div>
      ))}
    </div>
  );
}