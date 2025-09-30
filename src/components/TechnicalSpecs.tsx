import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Camera, Cpu, Battery, Ruler, Thermometer, Shield, Zap, Wifi } from 'lucide-react';

const specifications = {
  'Physical': [
    { icon: Ruler, label: 'Dimensions', value: '180 × 95 × 45 mm', detail: 'Compact drone-mountable form factor' },
    { icon: Battery, label: 'Weight', value: '385g', detail: 'Lightweight aerospace-grade materials' },
    { icon: Shield, label: 'Build', value: 'IP67 Rated', detail: 'Dust-tight and waterproof to 1m' },
    { icon: Thermometer, label: 'Operating Temp', value: '-10°C to 50°C', detail: 'All-weather operation' },
  ],
  'Imaging': [
    { icon: Camera, label: 'Camera Resolution', value: '48MP', detail: 'Sony IMX689 sensor with OIS' },
    { icon: Camera, label: 'Macro Capability', value: '2.5× magnification', detail: 'Sub-millimeter grain analysis' },
    { icon: Zap, label: 'Frame Rate', value: '120 fps', detail: 'High-speed capture mode' },
    { icon: Camera, label: 'Field of View', value: '84° diagonal', detail: 'Wide coverage area' },
  ],
  'Processing': [
    { icon: Cpu, label: 'AI Processor', value: 'Neural Engine', detail: '15 TOPS computational power' },
    { icon: Cpu, label: 'RAM', value: '8GB LPDDR5', detail: 'Real-time processing capability' },
    { icon: Cpu, label: 'Storage', value: '128GB NVMe', detail: 'High-speed data logging' },
    { icon: Zap, label: 'Processing Speed', value: '< 2s per sample', detail: 'Instant classification results' },
  ],
  'Connectivity': [
    { icon: Wifi, label: '5G/LTE', value: 'Integrated modem', detail: 'Real-time cloud sync' },
    { icon: Wifi, label: 'Wi-Fi', value: 'Wi-Fi 6E', detail: 'Tri-band connectivity' },
    { icon: Wifi, label: 'Bluetooth', value: 'BT 5.3', detail: 'Low-energy peripheral sync' },
    { icon: Wifi, label: 'GPS', value: 'Dual-band GNSS', detail: '±2cm positioning accuracy' },
  ],
  'Power': [
    { icon: Battery, label: 'Battery Capacity', value: '5200 mAh', detail: 'High-density lithium polymer' },
    { icon: Battery, label: 'Runtime', value: '6-8 hours', detail: 'Continuous operation time' },
    { icon: Zap, label: 'Charging', value: '65W USB-PD', detail: 'Full charge in 45 minutes' },
    { icon: Battery, label: 'Power Modes', value: '3 adaptive modes', detail: 'Optimized for varying conditions' },
  ],
};

const performanceMetrics = [
  { metric: 'Grain Size Accuracy', value: '98.7%', range: '±0.02mm' },
  { metric: 'Classification Speed', value: '1.8s', range: 'per sample' },
  { metric: 'Beach Coverage Rate', value: '2.5 km²/hr', range: 'with drone' },
  { metric: 'Data Precision', value: '99.2%', range: 'validated results' },
];

export function TechnicalSpecs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState('Physical');

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 bg-gradient-to-b from-[#001122] via-[#000000] to-[#001122] overflow-hidden"
    >
      {/* Submarine dashboard aesthetic */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, #39cccc 1px, transparent 1px),
            linear-gradient(#39cccc 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px',
        }} />
      </div>

      {/* Holographic scan lines */}
      {Array.from({ length: 5 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-turquoise/20 to-transparent"
          style={{ top: `${20 + i * 15}%` }}
          animate={{
            opacity: [0.2, 0.8, 0.2],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            delay: i * 0.6,
          }}
        />
      ))}

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
            TECHNICAL SPECIFICATIONS
          </h2>
          <p className="text-2xl text-turquoise" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Engineering Excellence in Every Detail
          </p>
        </motion.div>

        {/* Performance Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 bg-gradient-to-r from-midnight-navy/80 to-ocean-deep/80 backdrop-blur-sm rounded-2xl p-6 border border-turquoise/30"
        >
          <div className="grid md:grid-cols-4 gap-6">
            {performanceMetrics.map((metric, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl text-sandy-gold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
                  {metric.value}
                </div>
                <p className="text-white mb-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  {metric.metric}
                </p>
                <p className="text-turquoise/60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                  {metric.range}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.keys(specifications).map((category, i) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl border-2 transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-gradient-to-r from-sandy-gold to-sandy-orange border-sandy-gold text-midnight-navy'
                  : 'bg-midnight-navy/50 border-turquoise/30 text-turquoise hover:border-sandy-gold/50'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Specifications Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {specifications[activeCategory as keyof typeof specifications].map((spec, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-gradient-to-br from-midnight-navy/80 to-ocean-deep/80 backdrop-blur-sm rounded-2xl p-6 border border-turquoise/30 hover:border-sandy-gold/50 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-turquoise/20 to-aqua/20 group-hover:from-sandy-gold/30 group-hover:to-sandy-orange/30 transition-all duration-300">
                  <spec.icon className="w-6 h-6 text-turquoise group-hover:text-sandy-gold transition-colors" />
                </div>

                <div className="flex-1">
                  <div className="flex items-baseline justify-between mb-2">
                    <h4 className="text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                      {spec.label}
                    </h4>
                    <span className="text-sandy-gold ml-4" style={{ fontFamily: 'JetBrains Mono, monospace', fontWeight: 600 }}>
                      {spec.value}
                    </span>
                  </div>
                  <p className="text-seafoam/70">
                    {spec.detail}
                  </p>

                  {/* Animated progress bar */}
                  <motion.div
                    className="mt-3 h-1 bg-turquoise/10 rounded-full overflow-hidden"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <motion.div
                      className="h-full bg-gradient-to-r from-turquoise to-sandy-gold"
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1, delay: 0.2 + i * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 3D Device Model Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 bg-gradient-to-br from-midnight-navy/50 to-ocean-deep/50 backdrop-blur-sm rounded-2xl p-12 border border-turquoise/30 text-center"
        >
          <h3 className="text-3xl text-sandy-gold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            3D Interactive Model
          </h3>
          <div className="relative aspect-video max-w-3xl mx-auto bg-ocean-deep/30 rounded-xl flex items-center justify-center overflow-hidden">
            {/* Rotating device representation */}
            <motion.div
              className="relative w-48 h-48"
              animate={{
                rotateY: 360,
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: 'linear',
              }}
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-midnight-navy to-ocean-blue rounded-3xl border-2 border-turquoise/50 shadow-2xl" />
              <div className="absolute inset-4 bg-gradient-to-br from-ocean-deep to-midnight-navy rounded-2xl" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-br from-turquoise to-aqua rounded-full" />
            </motion.div>

            {/* Rotating text */}
            <motion.p
              className="absolute bottom-8 text-turquoise/60"
              animate={{
                opacity: [0.4, 1, 0.4],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
              style={{ fontFamily: 'JetBrains Mono, monospace' }}
            >
              Drag to rotate • Scroll to zoom
            </motion.p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}