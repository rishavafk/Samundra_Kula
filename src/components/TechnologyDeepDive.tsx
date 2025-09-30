import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Eye, Cpu, Radio, Thermometer, Wifi, Shield } from 'lucide-react';

const techLayers = [
  { depth: 0, label: 'Surface', color: 'from-turquoise/30 to-aqua/30', opacity: 0.3 },
  { depth: 20, label: 'Processing', color: 'from-ocean-blue/40 to-turquoise/40', opacity: 0.4 },
  { depth: 40, label: 'Intelligence', color: 'from-ocean-deep/50 to-ocean-blue/50', opacity: 0.5 },
  { depth: 60, label: 'Core Systems', color: 'from-midnight-navy/60 to-ocean-deep/60', opacity: 0.6 },
];

const components = [
  { id: 'optics', icon: Eye, label: 'Precision Optics', detail: '48MP sensor with macro capabilities' },
  { id: 'ai', icon: Cpu, label: 'AI Processor', detail: 'Neural engine with 15 TOPS performance' },
  { id: 'wireless', icon: Radio, label: 'Multi-band Radio', detail: '5G/LTE/Wi-Fi 6E connectivity' },
  { id: 'sensors', icon: Thermometer, label: 'Environmental Suite', detail: 'Temperature, humidity, pressure sensors' },
  { id: 'network', icon: Wifi, label: 'Data Sync', detail: 'Real-time cloud synchronization' },
  { id: 'housing', icon: Shield, label: 'Marine Housing', detail: 'IP67-rated corrosion-resistant build' },
];

export function TechnologyDeepDive() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredComponent, setHoveredComponent] = useState<string | null>(null);

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 overflow-hidden bg-gradient-to-b from-[#001f3f] via-[#001122] to-[#000000]"
    >
      {/* Ocean depth layers */}
      <div className="absolute inset-0">
        {techLayers.map((layer, i) => (
          <motion.div
            key={i}
            className={`absolute inset-x-0 h-1/4 bg-gradient-to-b ${layer.color}`}
            style={{
              top: `${layer.depth}%`,
              opacity: layer.opacity,
            }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: layer.opacity } : {}}
            transition={{ duration: 1, delay: i * 0.2 }}
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
            BENEATH THE SURFACE
          </h2>
          <p className="text-2xl text-turquoise" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Cutting-Edge Technology
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Device Cutaway Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="relative aspect-square">
              {/* Main device shell */}
              <div className="absolute inset-0 bg-gradient-to-br from-midnight-navy via-ocean-deep to-ocean-blue rounded-3xl border-2 border-turquoise/30 overflow-hidden">
                {/* Internal layers */}
                <div className="absolute inset-8 bg-gradient-to-br from-ocean-deep/50 to-midnight-navy/50 rounded-2xl border border-aqua/20" />
                <div className="absolute inset-16 bg-gradient-to-br from-ocean-blue/30 to-turquoise/30 rounded-xl border border-turquoise/20" />

                {/* Component hotspots */}
                {components.map((comp, i) => {
                  const angle = (i / components.length) * Math.PI * 2;
                  const radius = 35;
                  const x = 50 + Math.cos(angle) * radius;
                  const y = 50 + Math.sin(angle) * radius;

                  return (
                    <motion.div
                      key={comp.id}
                      className="absolute cursor-pointer"
                      style={{
                        left: `${x}%`,
                        top: `${y}%`,
                        transform: 'translate(-50%, -50%)',
                      }}
                      onHoverStart={() => setHoveredComponent(comp.id)}
                      onHoverEnd={() => setHoveredComponent(null)}
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                    >
                      <motion.div
                        className={`p-3 rounded-full ${
                          hoveredComponent === comp.id
                            ? 'bg-gradient-to-br from-sandy-gold to-sandy-orange'
                            : 'bg-gradient-to-br from-turquoise/50 to-aqua/50'
                        } transition-all duration-300`}
                        animate={{
                          scale: hoveredComponent === comp.id ? 1.2 : 1,
                        }}
                      >
                        <comp.icon className="w-6 h-6 text-midnight-navy" />
                      </motion.div>

                      {/* Connecting lines */}
                      <svg
                        className="absolute top-1/2 left-1/2 pointer-events-none"
                        style={{
                          width: '200px',
                          height: '200px',
                          transform: 'translate(-50%, -50%)',
                        }}
                      >
                        <motion.line
                          x1="100"
                          y1="100"
                          x2={100 + Math.cos(angle + Math.PI) * 80}
                          y2={100 + Math.sin(angle + Math.PI) * 80}
                          stroke={hoveredComponent === comp.id ? '#ffdc00' : '#39cccc'}
                          strokeWidth="2"
                          strokeDasharray="4,4"
                          initial={{ pathLength: 0 }}
                          animate={isInView ? { pathLength: 1 } : {}}
                          transition={{ duration: 1, delay: 1 + i * 0.1 }}
                        />
                      </svg>
                    </motion.div>
                  );
                })}

                {/* Central core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                  <motion.div
                    className="w-20 h-20 rounded-full bg-gradient-to-br from-sandy-gold to-sandy-orange flex items-center justify-center"
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: 'linear',
                    }}
                  >
                    <div className="w-16 h-16 rounded-full bg-midnight-navy flex items-center justify-center">
                      <Cpu className="w-8 h-8 text-turquoise" />
                    </div>
                  </motion.div>
                </div>

                {/* Data flow visualization */}
                {isInView && (
                  <svg className="absolute inset-0 w-full h-full">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <motion.circle
                        key={i}
                        cx="50%"
                        cy="50%"
                        r={20 + i * 30}
                        fill="none"
                        stroke="#7fdbff"
                        strokeWidth="1"
                        strokeOpacity="0.2"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: [0, 0.5, 0] }}
                        transition={{
                          duration: 3,
                          delay: i * 0.5,
                          repeat: Infinity,
                        }}
                      />
                    ))}
                  </svg>
                )}
              </div>
            </div>

            {/* Depth indicators */}
            <div className="mt-8 space-y-2">
              {techLayers.map((layer, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className={`w-16 h-2 rounded bg-gradient-to-r ${layer.color}`} />
                  <p className="text-seafoam/80" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {layer.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Component Details */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            {components.map((comp, i) => (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
                onHoverStart={() => setHoveredComponent(comp.id)}
                onHoverEnd={() => setHoveredComponent(null)}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  hoveredComponent === comp.id
                    ? 'bg-gradient-to-r from-sandy-gold/20 to-sandy-orange/20 border-sandy-gold/50 scale-105'
                    : 'bg-midnight-navy/50 border-turquoise/20'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-lg ${
                      hoveredComponent === comp.id
                        ? 'bg-gradient-to-br from-sandy-gold to-sandy-orange'
                        : 'bg-gradient-to-br from-turquoise/30 to-aqua/30'
                    } transition-all duration-300`}
                  >
                    <comp.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-white mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                      {comp.label}
                    </h4>
                    <p className="text-turquoise" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {comp.detail}
                    </p>
                  </div>
                </div>

                {/* Animated progress bar */}
                <motion.div
                  className="mt-4 h-1 bg-turquoise/20 rounded-full overflow-hidden"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredComponent === comp.id ? 1 : 0 }}
                >
                  <motion.div
                    className="h-full bg-gradient-to-r from-sandy-gold to-sandy-orange"
                    initial={{ width: 0 }}
                    animate={{ width: hoveredComponent === comp.id ? '100%' : 0 }}
                    transition={{ duration: 0.5 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}