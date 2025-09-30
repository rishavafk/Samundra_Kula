import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { Plane, MapPin, Wifi, CloudRain, Battery, Gauge } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DroneIntegration() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const specs = [
    { icon: MapPin, label: 'GPS-Synchronized', value: '±2cm accuracy' },
    { icon: Wifi, label: 'Real-time Processing', value: '5G connectivity' },
    { icon: CloudRain, label: 'Weather Resistant', value: 'IP67 rating' },
    { icon: Battery, label: 'Flight Time', value: '45 min continuous' },
    { icon: Gauge, label: 'Max Speed', value: '65 km/h' },
  ];

  return (
    <section
      id="drone-section"
      ref={ref}
      className="relative min-h-screen py-20 bg-gradient-to-b from-[#39cccc] via-[#0074d9] to-[#001f3f] overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-turquoise rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-sandy-gold rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
            AERIAL PRECISION
          </h2>
          <h3 className="text-3xl md:text-5xl text-turquoise" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            MEETS OCEANIC SCIENCE
          </h3>
        </motion.div>

        {/* Split Screen Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Drone Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-midnight-navy/50 to-ocean-deep/50 backdrop-blur-sm border border-turquoise/30 p-8">
              {/* Drone Image */}
              <div className="relative h-full flex items-center justify-center">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1697122171927-c79709030f1d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGZseWluZyUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MTkyMTY1fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Drone with SAMUDRAKULA"
                  className="w-full h-full object-cover rounded-lg"
                />
                
                {/* Animated flight path */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <motion.path
                    d="M 50,200 Q 150,50 250,200 T 350,200"
                    fill="none"
                    stroke="#7fdbff"
                    strokeWidth="2"
                    strokeDasharray="5,5"
                    initial={{ pathLength: 0 }}
                    animate={isInView ? { pathLength: 1 } : {}}
                    transition={{ duration: 2, delay: 1 }}
                  />
                  
                  {/* Data points along path */}
                  {[0.2, 0.4, 0.6, 0.8].map((offset, i) => (
                    <motion.circle
                      key={i}
                      cx={50 + offset * 300}
                      cy={200 - Math.sin(offset * Math.PI) * 100}
                      r="6"
                      fill="#ffdc00"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={isInView ? { scale: 1, opacity: 1 } : {}}
                      transition={{ duration: 0.5, delay: 1 + i * 0.2 }}
                    />
                  ))}
                </svg>
                
                {/* Floating drone icon */}
                <motion.div
                  className="absolute top-1/4 right-1/4"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                >
                  <div className="bg-sandy-gold p-3 rounded-full shadow-xl">
                    <Plane className="w-8 h-8 text-midnight-navy" />
                  </div>
                </motion.div>
              </div>
            </div>

            {/* 3D Isometric Device Mount Illustration */}
            <motion.div
              className="mt-8 bg-gradient-to-br from-turquoise/20 to-aqua/20 rounded-xl p-6 backdrop-blur-sm border border-turquoise/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              <p className="text-seafoam/80 text-center mb-4">Automated Assembly Mechanism</p>
              <div className="relative h-32 flex items-center justify-center">
                <motion.div
                  className="absolute w-20 h-20 bg-gradient-to-br from-midnight-navy to-ocean-deep rounded-lg"
                  animate={{
                    y: [0, -20, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
                <motion.div
                  className="absolute w-16 h-16 bg-gradient-to-br from-sandy-gold to-sandy-orange rounded-full"
                  initial={{ y: 40, opacity: 0 }}
                  animate={isInView ? { y: 0, opacity: 1 } : {}}
                  transition={{ duration: 1, delay: 2 }}
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Technical Specs */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            <div className="bg-gradient-to-br from-midnight-navy/80 to-ocean-deep/80 backdrop-blur-sm rounded-2xl p-8 border border-turquoise/30">
              <h4 className="text-2xl text-sandy-gold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                Drone-Mountable Design
              </h4>
              <p className="text-seafoam/90 mb-8 leading-relaxed">
                SAMUDRAKULA seamlessly integrates with commercial drone platforms, enabling large-scale beach mapping with unprecedented precision. Our automated flight pattern optimization ensures complete coverage while our real-time processing capabilities deliver instant insights.
              </p>

              {/* Specs Grid */}
              <div className="space-y-4">
                {specs.map((spec, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                    className="group flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-turquoise/10 to-aqua/10 hover:from-turquoise/20 hover:to-aqua/20 transition-all duration-300 border border-turquoise/20 hover:border-turquoise/40"
                  >
                    <div className="p-3 rounded-lg bg-gradient-to-br from-sandy-gold to-sandy-orange group-hover:scale-110 transition-transform duration-300">
                      <spec.icon className="w-6 h-6 text-midnight-navy" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                        {spec.label}
                      </p>
                      <p className="text-turquoise" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                        {spec.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 gap-4">
              {['Large-Scale Mapping', 'Automated Patterns', 'Real-Time Data', 'Weather Adaptive'].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 1.2 + i * 0.1 }}
                  className="bg-gradient-to-br from-aqua/20 to-turquoise/20 rounded-xl p-4 text-center border border-aqua/30 hover:border-sandy-gold/50 transition-all duration-300"
                >
                  <p className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                    {feature}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}