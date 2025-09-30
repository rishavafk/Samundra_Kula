import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';

const grainData = [
  { size: '< 0.063mm', percentage: 15, color: '#ffdc00' },
  { size: '0.063-0.125mm', percentage: 25, color: '#ff851b' },
  { size: '0.125-0.25mm', percentage: 35, color: '#39cccc' },
  { size: '0.25-0.5mm', percentage: 18, color: '#7fdbff' },
  { size: '> 0.5mm', percentage: 7, color: '#0074d9' },
];

const beachEvolution = [
  { month: 'Jan', erosion: 2.3, deposition: 1.8, prediction: 2.1 },
  { month: 'Feb', erosion: 1.9, deposition: 2.2, prediction: 2.0 },
  { month: 'Mar', erosion: 3.1, deposition: 1.5, prediction: 2.8 },
  { month: 'Apr', erosion: 2.7, deposition: 2.0, prediction: 2.5 },
  { month: 'May', erosion: 2.2, deposition: 2.5, prediction: 2.3 },
  { month: 'Jun', erosion: 3.5, deposition: 1.2, prediction: 3.2 },
];

const radarData = [
  { metric: 'Accuracy', value: 98 },
  { metric: 'Speed', value: 95 },
  { metric: 'Coverage', value: 92 },
  { metric: 'Precision', value: 96 },
  { metric: 'Reliability', value: 99 },
];

export function ResultsVisualization() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [counter, setCounter] = useState({ beaches: 0, samples: 0, accuracy: 0 });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        setCounter({
          beaches: Math.floor(1247 * progress),
          samples: Math.floor(45678 * progress),
          accuracy: Math.floor(98.7 * progress * 10) / 10,
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 bg-gradient-to-b from-[#000000] via-[#001122] to-[#001f3f] overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(#39cccc 1px, transparent 1px), linear-gradient(90deg, #39cccc 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }} />
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
            DATA IN ACTION
          </h2>
          <p className="text-2xl text-turquoise" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Real Results, Real Impact
          </p>
        </motion.div>

        {/* Stats Counter */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { label: 'Beaches Analyzed', value: counter.beaches, suffix: '+' },
            { label: 'Samples Processed', value: counter.samples.toLocaleString(), suffix: '+' },
            { label: 'Accuracy Rate', value: counter.accuracy, suffix: '%' },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gradient-to-br from-midnight-navy/80 to-ocean-deep/80 backdrop-blur-sm rounded-2xl p-8 border border-turquoise/30 text-center"
            >
              <div className="text-5xl md:text-6xl text-sandy-gold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
                {stat.value}{stat.suffix}
              </div>
              <p className="text-xl text-seafoam/80" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Visualizations Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Grain Size Distribution */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="bg-gradient-to-br from-midnight-navy/80 to-ocean-deep/80 backdrop-blur-sm rounded-2xl p-8 border border-turquoise/30"
          >
            <h3 className="text-2xl text-sandy-gold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Grain Size Distribution
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={grainData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#39cccc33" />
                <XAxis dataKey="size" stroke="#7fdbff" style={{ fontFamily: 'JetBrains Mono, monospace' }} />
                <YAxis stroke="#7fdbff" style={{ fontFamily: 'JetBrains Mono, monospace' }} />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(0, 17, 34, 0.9)',
                    border: '1px solid #39cccc',
                    borderRadius: '8px',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                />
                <Bar dataKey="percentage" fill="#39cccc">
                  {grainData.map((entry, index) => (
                    <motion.rect
                      key={index}
                      initial={{ height: 0 }}
                      animate={isInView ? { height: 'auto' } : {}}
                      transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <div className="mt-4 grid grid-cols-5 gap-2">
              {grainData.map((item, i) => (
                <div key={i} className="text-center">
                  <div className="w-full h-2 rounded-full" style={{ backgroundColor: item.color }} />
                  <p className="text-xs text-seafoam/60 mt-1" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                    {item.percentage}%
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Beach Evolution Prediction */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-midnight-navy/80 to-ocean-deep/80 backdrop-blur-sm rounded-2xl p-8 border border-turquoise/30"
          >
            <h3 className="text-2xl text-sandy-gold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Beach Evolution Trends
            </h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={beachEvolution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#39cccc33" />
                <XAxis dataKey="month" stroke="#7fdbff" style={{ fontFamily: 'JetBrains Mono, monospace' }} />
                <YAxis stroke="#7fdbff" style={{ fontFamily: 'JetBrains Mono, monospace' }} />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(0, 17, 34, 0.9)',
                    border: '1px solid #39cccc',
                    borderRadius: '8px',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                />
                <Line type="monotone" dataKey="erosion" stroke="#ff851b" strokeWidth={2} />
                <Line type="monotone" dataKey="deposition" stroke="#39cccc" strokeWidth={2} />
                <Line type="monotone" dataKey="prediction" stroke="#ffdc00" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
            <div className="mt-4 flex justify-center gap-6">
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-[#ff851b]" />
                <span className="text-xs text-seafoam/80" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Erosion</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-[#39cccc]" />
                <span className="text-xs text-seafoam/80" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Deposition</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-0.5 bg-[#ffdc00]" style={{ borderTop: '2px dashed #ffdc00', background: 'none' }} />
                <span className="text-xs text-seafoam/80" style={{ fontFamily: 'JetBrains Mono, monospace' }}>Prediction</span>
              </div>
            </div>
          </motion.div>

          {/* Performance Radar */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="bg-gradient-to-br from-midnight-navy/80 to-ocean-deep/80 backdrop-blur-sm rounded-2xl p-8 border border-turquoise/30 lg:col-span-2"
          >
            <h3 className="text-2xl text-sandy-gold mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              System Performance Metrics
            </h3>
            <ResponsiveContainer width="100%" height={400}>
              <RadarChart data={radarData}>
                <PolarGrid stroke="#39cccc33" />
                <PolarAngleAxis dataKey="metric" stroke="#7fdbff" style={{ fontFamily: 'Montserrat, sans-serif' }} />
                <PolarRadiusAxis angle={90} domain={[0, 100]} stroke="#7fdbff" />
                <Radar name="Performance" dataKey="value" stroke="#ffdc00" fill="#39cccc" fillOpacity={0.6} />
                <Tooltip
                  contentStyle={{
                    background: 'rgba(0, 17, 34, 0.9)',
                    border: '1px solid #39cccc',
                    borderRadius: '8px',
                    fontFamily: 'JetBrains Mono, monospace',
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </motion.div>
        </div>

        {/* Data streaming simulation */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 1 }}
          className="mt-8 bg-gradient-to-r from-midnight-navy/50 to-ocean-deep/50 rounded-xl p-6 border border-turquoise/20"
        >
          <div className="flex items-center justify-between mb-4">
            <p className="text-seafoam/80" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Live Data Stream
            </p>
            <motion.div
              className="flex items-center gap-2"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="w-2 h-2 bg-sandy-gold rounded-full" />
              <span className="text-sandy-gold" style={{ fontFamily: 'JetBrains Mono, monospace' }}>STREAMING</span>
            </motion.div>
          </div>
          <div className="space-y-2 font-mono text-sm text-turquoise/60">
            {['Sample #45679 processed - Classification: Fine Sand', 'GPS: 13.0827° N, 80.2707° E - Accuracy: 98.3%', 'Environmental conditions: Optimal - Proceeding...'].map((line, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 1.5 + i * 0.3 }}
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <span className="text-sandy-gold">&gt;</span> {line}
              </motion.p>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}