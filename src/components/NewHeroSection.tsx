import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';
import { TropicalBeachBackground } from './TropicalBeachBackground';
import { Seagulls } from './Seagulls';
import { WeatherWidget } from './WeatherWidget';
import { BeachButton } from './BeachButton';
import { GlassmorphicCard } from './GlassmorphicCard';

export function NewHeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Tropical Beach Background with Animated Waves */}
      <TropicalBeachBackground />
      
      {/* Animated Seagulls */}
      <Seagulls />
      
      {/* Weather Widget */}
      <WeatherWidget />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          {/* Main Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            AI-Powered Coastal
            <br />
            <span className="bg-gradient-to-r from-[#7fdbff] via-[#39cccc] to-[#ffdc00] bg-clip-text text-transparent">
              Sediment Mapping
            </span>
          </motion.h1>

          {/* Sub-tagline */}
          <motion.p
            className="text-xl sm:text-2xl lg:text-3xl text-[#7fdbff] mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Real-time, low-cost, scalable beach monitoring
          </motion.p>

          {/* CTA Button with Pulsing Glow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <BeachButton
              size="lg"
              pulse={true}
              onClick={() => {
                document.getElementById('solution')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              Explore Now
              <ChevronRight className="ml-2" />
            </BeachButton>
          </motion.div>

          {/* Floating Stats with Glassmorphic Cards */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            {[
              { value: '99%', label: 'Accuracy' },
              { value: '10x', label: 'Faster' },
              { value: '24/7', label: 'Monitoring' }
            ].map((stat, index) => (
              <GlassmorphicCard key={stat.label} delay={0.9 + index * 0.1}>
                <div className="text-3xl sm:text-4xl text-[#ffdc00] mb-2">{stat.value}</div>
                <div className="text-white">{stat.label}</div>
              </GlassmorphicCard>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-[#7fdbff] rounded-full flex justify-center pt-2">
          <motion.div
            className="w-1.5 h-1.5 bg-[#7fdbff] rounded-full"
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}