import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Rocket, Network, Brain, Database, Zap, Globe } from 'lucide-react';

export function FutureScope() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const futureFeatures = [
    {
      icon: Rocket,
      title: 'Autonomous Drone Fleets',
      description: 'AI-coordinated swarms for continuous coastal surveillance',
      gradient: 'from-[#0074d9] to-[#39cccc]'
    },
    {
      icon: Brain,
      title: 'Predictive Erosion Models',
      description: 'Machine learning forecasts of coastal changes months in advance',
      gradient: 'from-[#39cccc] to-[#7fdbff]'
    },
    {
      icon: Database,
      title: 'Open Research Data Sharing',
      description: 'Global platform for collaborative coastal science',
      gradient: 'from-[#7fdbff] to-[#ffdc00]'
    },
    {
      icon: Network,
      title: 'IoT Sensor Networks',
      description: 'Interconnected monitoring stations for real-time alerts',
      gradient: 'from-[#ffdc00] to-[#ff851b]'
    },
    {
      icon: Zap,
      title: 'Edge AI Processing',
      description: 'On-device analysis for instant insights without cloud dependency',
      gradient: 'from-[#ff851b] to-[#0074d9]'
    },
    {
      icon: Globe,
      title: 'Global Impact Platform',
      description: 'Connecting researchers, policymakers, and communities worldwide',
      gradient: 'from-[#0074d9] to-[#7fdbff]'
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-[#001f3f] via-[#0074d9] to-[#001f3f] relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(#39cccc 1px, transparent 1px), linear-gradient(90deg, #39cccc 1px, transparent 1px)',
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#39cccc]/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#7fdbff]/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-[#7fdbff]/20 rounded-full border border-[#7fdbff]/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#7fdbff]">Future Scope</span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            The Next{' '}
            <span className="bg-gradient-to-r from-[#7fdbff] via-[#ffdc00] to-[#ff851b] bg-clip-text text-transparent">
              Generation
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-[#7fdbff]/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Pioneering the future of coastal monitoring with cutting-edge innovations
          </motion.p>
        </div>

        {/* Main Visual */}
        <motion.div
          className="max-w-5xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative rounded-3xl overflow-hidden border-2 border-[#7fdbff]/30">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1662348316911-d6aef85f8560?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcm9uZSUyMGZsZWV0JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkxOTY5MDd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Future drone fleet technology"
              className="w-full h-[500px] object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f] via-[#001f3f]/70 to-transparent" />
            
            {/* Floating Elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="text-center">
                  <div className="inline-block p-8 bg-white/5 backdrop-blur-md rounded-3xl border border-[#7fdbff]/30">
                    <Rocket className="w-24 h-24 text-[#ffdc00] mx-auto mb-4" />
                    <p className="text-2xl text-white">Innovation in Progress</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Animated Particles */}
            {Array.from({ length: 20 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-[#7fdbff] rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  delay: Math.random() * 3
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Future Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {futureFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <div className="relative h-full bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#7fdbff]/20 hover:border-[#7fdbff] transition-all duration-300">
                {/* Gradient Overlay on Hover */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <div className={`relative w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-lg text-white mb-2 relative">{feature.title}</h3>
                <p className="text-sm text-[#7fdbff]/70 leading-relaxed relative">
                  {feature.description}
                </p>

                {/* Glow Effect */}
                <motion.div
                  className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-[#7fdbff]/0 to-[#ffdc00]/0 blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10"
                  animate={{
                    background: [
                      'linear-gradient(to bottom right, rgba(127,219,255,0), rgba(255,220,0,0))',
                      'linear-gradient(to bottom right, rgba(127,219,255,0.2), rgba(255,220,0,0.2))',
                      'linear-gradient(to bottom right, rgba(127,219,255,0), rgba(255,220,0,0))'
                    ]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
        >
          <div className="inline-block bg-gradient-to-r from-[#7fdbff]/10 to-[#ffdc00]/10 backdrop-blur-sm border border-[#7fdbff]/30 rounded-full px-6 py-3">
            <p className="text-[#7fdbff]">
              🚀 Coming soon: Next-generation coastal intelligence
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}