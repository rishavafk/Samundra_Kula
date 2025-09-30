import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { MapPin, Users, Lightbulb, Award } from 'lucide-react';

const locations = [
  { name: 'North America', x: 25, y: 35, count: 234 },
  { name: 'South America', x: 30, y: 65, count: 156 },
  { name: 'Europe', x: 50, y: 30, count: 389 },
  { name: 'Africa', x: 52, y: 55, count: 178 },
  { name: 'Asia', x: 70, y: 40, count: 421 },
  { name: 'Australia', x: 80, y: 70, count: 112 },
];

const timeline = [
  { year: '2021', event: 'Project Launch', description: 'Initial prototype development' },
  { year: '2022', event: 'First Deployment', description: '50 beaches analyzed across 3 continents' },
  { year: '2023', event: 'AI Integration', description: 'Machine learning models achieve 95% accuracy' },
  { year: '2024', event: 'Drone Integration', description: 'Aerial mapping capabilities introduced' },
  { year: '2025', event: 'Global Expansion', description: '1000+ beaches analyzed worldwide' },
];

export function GlobalImpact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [metrics, setMetrics] = useState({ beaches: 0, institutions: 0, insights: 0, awards: 0 });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setMetrics({
          beaches: Math.floor(1490 * progress),
          institutions: Math.floor(127 * progress),
          insights: Math.floor(8642 * progress),
          awards: Math.floor(12 * progress),
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 bg-gradient-to-b from-[#39cccc] via-[#001f3f] to-[#001122] overflow-hidden"
    >
      {/* Ocean currents animation */}
      <div className="absolute inset-0">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-turquoise/30 to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              width: '200%',
              left: '-50%',
            }}
            animate={{
              x: ['0%', '50%'],
            }}
            transition={{
              duration: 15 + i * 5,
              repeat: Infinity,
              ease: 'linear',
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
            GLOBAL IMPACT
          </h2>
          <p className="text-2xl text-turquoise" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Making Waves Worldwide
          </p>
        </motion.div>

        {/* World Map Visualization */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-16 bg-gradient-to-br from-midnight-navy/50 to-ocean-deep/50 backdrop-blur-sm rounded-2xl p-8 border border-turquoise/30"
        >
          <div className="relative w-full aspect-[2/1] bg-ocean-deep/30 rounded-xl overflow-hidden">
            {/* Simple world map representation using gradients */}
            <div className="absolute inset-0">
              <svg viewBox="0 0 1000 500" className="w-full h-full opacity-20">
                {/* Simplified continents */}
                <path d="M 100,150 Q 150,100 200,120 L 250,140 Q 280,130 300,150 L 280,200 Q 250,220 200,200 L 150,190 Q 120,180 100,150 Z" fill="#7fdbff" />
                <path d="M 150,280 Q 180,250 220,270 L 240,320 Q 230,350 200,340 L 160,320 Q 140,300 150,280 Z" fill="#7fdbff" />
                <path d="M 450,120 Q 500,100 550,110 L 600,130 Q 620,150 600,180 L 550,200 Q 500,210 450,190 L 430,150 Q 440,130 450,120 Z" fill="#7fdbff" />
                <path d="M 480,220 Q 520,200 560,220 L 580,270 Q 570,300 540,290 L 500,280 Q 480,260 480,220 Z" fill="#7fdbff" />
                <path d="M 650,160 Q 700,140 750,160 L 800,200 Q 810,240 780,260 L 730,250 Q 680,230 650,200 L 640,180 Q 645,170 650,160 Z" fill="#7fdbff" />
                <path d="M 750,320 Q 800,300 850,330 L 870,360 Q 860,390 820,380 L 770,370 Q 740,350 750,320 Z" fill="#7fdbff" />
              </svg>

              {/* Project locations */}
              {locations.map((location, i) => (
                <motion.div
                  key={i}
                  className="absolute"
                  style={{
                    left: `${location.x}%`,
                    top: `${location.y}%`,
                    transform: 'translate(-50%, -50%)',
                  }}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={isInView ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                >
                  <motion.div
                    className="relative"
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  >
                    {/* Pulsing ring */}
                    <motion.div
                      className="absolute inset-0 rounded-full border-2 border-sandy-gold"
                      animate={{
                        scale: [1, 2, 2],
                        opacity: [1, 0, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.3,
                      }}
                    />
                    
                    {/* Pin */}
                    <div className="relative w-6 h-6 bg-sandy-gold rounded-full flex items-center justify-center shadow-lg">
                      <div className="w-3 h-3 bg-midnight-navy rounded-full" />
                    </div>
                  </motion.div>

                  {/* Tooltip */}
                  <motion.div
                    className="absolute top-full mt-2 left-1/2 -translate-x-1/2 bg-midnight-navy/90 px-3 py-1 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                  >
                    <p className="text-xs text-white" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                      {location.name}
                    </p>
                    <p className="text-xs text-turquoise" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                      {location.count} sites
                    </p>
                  </motion.div>
                </motion.div>
              ))}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {locations.map((location, i) => {
                  if (i === 0) return null;
                  const prev = locations[i - 1];
                  return (
                    <motion.line
                      key={i}
                      x1={`${prev.x}%`}
                      y1={`${prev.y}%`}
                      x2={`${location.x}%`}
                      y2={`${location.y}%`}
                      stroke="#39cccc"
                      strokeWidth="1"
                      strokeDasharray="4,4"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 1, delay: 1 + i * 0.2 }}
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </motion.div>

        {/* Impact Metrics */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {[
            { icon: MapPin, label: 'Beaches Analyzed', value: metrics.beaches, color: 'from-turquoise to-aqua' },
            { icon: Users, label: 'Research Institutions', value: metrics.institutions, color: 'from-sandy-gold to-sandy-orange' },
            { icon: Lightbulb, label: 'Environmental Insights', value: metrics.insights, color: 'from-ocean-blue to-turquoise' },
            { icon: Award, label: 'Industry Awards', value: metrics.awards, color: 'from-aqua to-ocean-blue' },
          ].map((metric, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              className="bg-gradient-to-br from-midnight-navy/80 to-ocean-deep/80 backdrop-blur-sm rounded-2xl p-6 border border-turquoise/30 text-center"
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${metric.color} mb-4`}>
                <metric.icon className="w-8 h-8 text-midnight-navy" />
              </div>
              <div className="text-4xl text-sandy-gold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
                {metric.value.toLocaleString()}+
              </div>
              <p className="text-seafoam/80" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="bg-gradient-to-br from-midnight-navy/50 to-ocean-deep/50 backdrop-blur-sm rounded-2xl p-8 border border-turquoise/30"
        >
          <h3 className="text-3xl text-sandy-gold mb-8 text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Our Journey
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-turquoise/30 -translate-x-1/2" />

            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 1 + i * 0.2 }}
                className={`relative mb-8 md:mb-12 flex items-center ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                  <div className="bg-gradient-to-br from-ocean-blue/20 to-turquoise/20 rounded-xl p-6 border border-turquoise/30">
                    <h4 className="text-2xl text-sandy-gold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                      {item.event}
                    </h4>
                    <p className="text-seafoam/80">{item.description}</p>
                  </div>
                </div>

                {/* Timeline node */}
                <motion.div
                  className="absolute left-0 md:left-1/2 w-6 h-6 bg-sandy-gold rounded-full border-4 border-midnight-navy -translate-x-1/2"
                  animate={{
                    scale: [1, 1.3, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                  }}
                />

                {/* Year badge */}
                <div className={`hidden md:block flex-1 ${i % 2 === 0 ? 'pl-8' : 'pr-8 text-right'}`}>
                  <span className="inline-block bg-gradient-to-br from-sandy-gold to-sandy-orange px-4 py-2 rounded-lg text-midnight-navy" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
                    {item.year}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}