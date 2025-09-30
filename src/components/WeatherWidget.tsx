import { motion } from 'motion/react';
import { Sun, Cloud, Waves, Wind, Droplets } from 'lucide-react';
import { useState, useEffect } from 'react';

export function WeatherWidget() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      className="fixed top-24 right-6 z-50 pointer-events-auto"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 1 }}
    >
      <motion.div
        className="relative backdrop-blur-xl bg-white/20 rounded-3xl p-6 border border-white/30 shadow-2xl min-w-[200px]"
        whileHover={{ scale: 1.05, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glassmorphic effect overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/30 to-white/10 rounded-3xl" />
        
        <div className="relative space-y-4">
          {/* Current Weather */}
          <div className="text-center">
            <motion.div
              className="inline-block"
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
            >
              <Sun className="w-12 h-12 text-[#ffdc00] drop-shadow-[0_0_15px_rgba(255,220,0,0.8)]" />
            </motion.div>
            <div className="mt-2">
              <div className="text-3xl text-white drop-shadow-lg">28°C</div>
              <div className="text-sm text-white/80">Sunny</div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Weather Details */}
          <div className="space-y-2">
            {/* Wind */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Wind className="w-5 h-5 text-[#7fdbff]" />
              </motion.div>
              <div>
                <div className="text-xs text-white/60">Wind</div>
                <div className="text-sm text-white">15 km/h</div>
              </div>
            </motion.div>

            {/* Humidity */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <motion.div
                animate={{ y: [0, -3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Droplets className="w-5 h-5 text-[#39cccc]" />
              </motion.div>
              <div>
                <div className="text-xs text-white/60">Humidity</div>
                <div className="text-sm text-white">65%</div>
              </div>
            </motion.div>

            {/* Tide */}
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.2, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Waves className="w-5 h-5 text-[#0074d9]" />
              </motion.div>
              <div>
                <div className="text-xs text-white/60">Tide</div>
                <div className="text-sm text-white">High 2:34 PM</div>
              </div>
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

          {/* Time */}
          <div className="text-center">
            <div className="text-xs text-white/60 mb-1">Local Time</div>
            <div className="text-lg text-white font-mono">
              {currentTime.toLocaleTimeString('en-US', {
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit'
              })}
            </div>
          </div>
        </div>

        {/* Floating cloud decorations */}
        <motion.div
          className="absolute -top-4 -left-4"
          animate={{
            x: [0, 10, 0],
            y: [0, -5, 0]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <Cloud className="w-8 h-8 text-white/40 drop-shadow-lg" />
        </motion.div>

        <motion.div
          className="absolute -bottom-3 -right-3"
          animate={{
            x: [0, -8, 0],
            y: [0, 5, 0]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <Cloud className="w-6 h-6 text-white/30 drop-shadow-lg" />
        </motion.div>

        {/* Animated particles around widget */}
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-[#7fdbff]"
            style={{
              top: `${30 + i * 20}%`,
              left: i % 2 === 0 ? '-10px' : 'calc(100% + 10px)'
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.5, 1]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.7
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}