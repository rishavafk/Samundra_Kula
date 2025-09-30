import { motion } from 'motion/react';

export function WaveBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Wave Layer 1 - Slowest */}
      <motion.div
        className="absolute bottom-0 left-0 w-[200%] h-64 opacity-20"
        animate={{
          x: ['-50%', '0%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,60 C150,100 350,0 600,60 C850,120 1050,20 1200,60 L1200,120 L0,120 Z"
            fill="url(#wave1)"
          />
          <defs>
            <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0074d9" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#39cccc" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#0074d9" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Wave Layer 2 - Medium */}
      <motion.div
        className="absolute bottom-0 left-0 w-[200%] h-48 opacity-30"
        animate={{
          x: ['0%', '-50%'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,40 C200,80 400,20 600,50 C800,80 1000,30 1200,50 L1200,120 L0,120 Z"
            fill="url(#wave2)"
          />
          <defs>
            <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#7fdbff" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#0074d9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#7fdbff" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Wave Layer 3 - Fastest */}
      <motion.div
        className="absolute bottom-0 left-0 w-[200%] h-32 opacity-40"
        animate={{
          x: ['-50%', '0%'],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path
            d="M0,30 C250,70 450,10 600,40 C750,70 950,20 1200,40 L1200,120 L0,120 Z"
            fill="url(#wave3)"
          />
          <defs>
            <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#39cccc" stopOpacity="0.5" />
              <stop offset="50%" stopColor="#7fdbff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#39cccc" stopOpacity="0.5" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </div>
  );
}