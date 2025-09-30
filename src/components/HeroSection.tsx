import { motion } from 'motion/react';
import { WaveBackground } from './WaveBackground';
import { ParticleSystem } from './ParticleSystem';
import { ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#001f3f] via-[#0074d9] to-[#39cccc]">
      <WaveBackground />
      <ParticleSystem count={40} />

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8"
        >
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tight text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
            SAMUDRAKULA
          </h1>
          <motion.div
            className="h-1 w-32 mx-auto bg-gradient-to-r from-sandy-gold to-sandy-orange rounded-full"
            initial={{ width: 0 }}
            animate={{ width: 128 }}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </motion.div>

        {/* Tagline with typewriter effect */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mb-12 overflow-hidden"
        >
          <p className="text-2xl md:text-4xl text-[#f0fffe] tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            "Unveiling Ocean Secrets, One Grain at a Time"
          </p>
        </motion.div>

        {/* Floating Device Mockup */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.5 }}
          className="mb-12 relative"
        >
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateY: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="inline-block"
          >
            <div className="relative w-64 h-64 md:w-96 md:h-96 mx-auto">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-turquoise/30 to-aqua/30 rounded-3xl blur-3xl animate-pulse-glow" />
              
              {/* Device representation */}
              <div className="relative w-full h-full bg-gradient-to-br from-[#001122] to-[#0074d9] rounded-3xl shadow-2xl border-4 border-turquoise/30 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
                
                {/* Camera lens simulation */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#39cccc] to-[#0074d9] flex items-center justify-center shadow-xl">
                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#001122] to-[#001f3f] flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-turquoise/50 to-aqua/30 animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Scanning beam effect */}
                  <motion.div
                    className="absolute inset-0"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-turquoise to-transparent" />
                  </motion.div>
                </div>
                
                {/* Corner accents */}
                <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-sandy-gold" />
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-sandy-gold" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-sandy-gold" />
                <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-sandy-gold" />
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 2 }}
        >
          <Button
            size="lg"
            className="group relative px-12 py-6 bg-gradient-to-r from-sandy-gold to-sandy-orange hover:from-sandy-orange hover:to-sandy-gold text-midnight-navy transition-all duration-300 shadow-xl hover:shadow-2xl overflow-hidden"
            onClick={() => document.getElementById('drone-section')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Dive Into Innovation
            </span>
            
            {/* Ripple effect on hover */}
            <span className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-100 rounded-full transition-transform duration-500" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        <ChevronDown className="w-8 h-8 text-white/60" />
      </motion.div>
    </section>
  );
}