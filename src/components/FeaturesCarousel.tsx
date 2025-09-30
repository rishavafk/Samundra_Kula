import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Microscope, Map, Satellite, Cloud, Brain, Database, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './ui/button';

const features = [
  {
    icon: Microscope,
    title: 'INTELLIGENT GRAIN ANALYSIS',
    description: 'Advanced computer vision algorithms analyze sediment composition with microscopic precision, identifying grain size, shape, and mineral content.',
    color: 'from-turquoise to-aqua',
  },
  {
    icon: Map,
    title: 'REAL-TIME BEACH CLASSIFICATION',
    description: 'Dynamic beach profiling that adapts to changing conditions, providing instant classification across different coastal environments.',
    color: 'from-sandy-gold to-sandy-orange',
  },
  {
    icon: Satellite,
    title: 'GPS-PRECISION MAPPING',
    description: 'Sub-centimeter GPS accuracy ensures every data point is precisely georeferenced for comprehensive spatial analysis.',
    color: 'from-ocean-blue to-turquoise',
  },
  {
    icon: Cloud,
    title: 'WEATHER-ADAPTIVE PROCESSING',
    description: 'Smart algorithms automatically adjust to environmental conditions, maintaining accuracy in varying weather and lighting.',
    color: 'from-aqua to-ocean-blue',
  },
  {
    icon: Brain,
    title: 'AI-POWERED PREDICTIONS',
    description: 'Machine learning models predict coastal evolution, erosion patterns, and environmental changes with unprecedented accuracy.',
    color: 'from-sandy-orange to-sandy-gold',
  },
  {
    icon: Database,
    title: 'CLOUD-SYNCHRONIZED ANALYTICS',
    description: 'Seamless data synchronization with cloud infrastructure enables global collaboration and real-time insights sharing.',
    color: 'from-turquoise to-ocean-blue',
  },
];

export function FeaturesCarousel() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => setActiveIndex((prev) => (prev + 1) % features.length);
  const prev = () => setActiveIndex((prev) => (prev - 1 + features.length) % features.length);

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 bg-gradient-to-b from-[#001f3f] via-[#001122] to-[#001f3f] overflow-hidden"
    >
      {/* Bioluminescent particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-turquoise rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
            CORE FEATURES
          </h2>
          <div className="h-1 w-32 mx-auto bg-gradient-to-r from-sandy-gold to-sandy-orange rounded-full" />
        </motion.div>

        {/* Mobile Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-gradient-to-br from-midnight-navy/80 to-ocean-deep/80 backdrop-blur-sm rounded-2xl p-8 border border-turquoise/30 min-h-[400px]"
            >
              {(() => {
                const ActiveIcon = features[activeIndex].icon;
                return (
                  <motion.div
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${features[activeIndex].color} mb-6`}
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <ActiveIcon className="w-12 h-12 text-midnight-navy" />
                  </motion.div>
                );
              })()}

              <h3 className="text-2xl text-sandy-gold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                {features[activeIndex].title}
              </h3>
              <p className="text-seafoam/90 leading-relaxed">
                {features[activeIndex].description}
              </p>
            </motion.div>

            <div className="flex justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prev}
                className="bg-turquoise/20 border-turquoise/50 hover:bg-turquoise/30"
              >
                <ChevronLeft className="w-6 h-6 text-white" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={next}
                className="bg-turquoise/20 border-turquoise/50 hover:bg-turquoise/30"
              >
                <ChevronRight className="w-6 h-6 text-white" />
              </Button>
            </div>

            <div className="flex justify-center gap-2 mt-4">
              {features.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'bg-sandy-gold w-8' : 'bg-turquoise/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative bg-gradient-to-br from-midnight-navy/80 to-ocean-deep/80 backdrop-blur-sm rounded-2xl p-8 border border-turquoise/30 hover:border-sandy-gold/50 transition-all duration-500 overflow-hidden"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-turquoise/0 to-aqua/0 group-hover:from-turquoise/10 group-hover:to-aqua/10 transition-all duration-500" />

              {/* Animated particles on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-sandy-gold rounded-full"
                    animate={{
                      y: [0, -100],
                      x: [0, Math.random() * 20 - 10],
                      opacity: [0, 1, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                    style={{
                      left: `${20 + i * 20}%`,
                      bottom: 0,
                    }}
                  />
                ))}
              </div>

              <div className="relative z-10">
                {/* Icon with rotation animation on hover */}
                <motion.div
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform duration-300`}
                  whileHover={{
                    rotate: 360,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                >
                  <feature.icon className="w-10 h-10 text-midnight-navy" />
                </motion.div>

                <h3 className="text-xl text-sandy-gold mb-4 group-hover:text-white transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  {feature.title}
                </h3>
                <p className="text-seafoam/80 group-hover:text-seafoam transition-colors duration-300 leading-relaxed">
                  {feature.description}
                </p>

                {/* Animated underline */}
                <motion.div
                  className="mt-4 h-0.5 bg-gradient-to-r from-sandy-gold to-sandy-orange"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}