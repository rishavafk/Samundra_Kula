import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { Camera, Cpu, BarChart3, Globe, ArrowRight } from 'lucide-react';

export function WorkflowDiagram() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      icon: Camera,
      title: 'Capture',
      description: 'Collect sediment samples using handheld device or drone-mounted sensor',
      color: 'from-[#0074d9] to-[#39cccc]',
      iconBg: 'bg-[#0074d9]'
    },
    {
      icon: Cpu,
      title: 'AI/ML Processing',
      description: 'Advanced algorithms analyze grain size, composition, and characteristics',
      color: 'from-[#39cccc] to-[#7fdbff]',
      iconBg: 'bg-[#39cccc]'
    },
    {
      icon: BarChart3,
      title: 'Result',
      description: 'Real-time classification displayed on device screen with GPS coordinates',
      color: 'from-[#7fdbff] to-[#ffdc00]',
      iconBg: 'bg-[#7fdbff]'
    },
    {
      icon: Globe,
      title: 'Dashboard',
      description: 'Data synced to cloud dashboard for visualization and analysis',
      color: 'from-[#ffdc00] to-[#ff851b]',
      iconBg: 'bg-[#ffdc00]'
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-[#001f3f] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#39cccc] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#7fdbff] to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-[#39cccc]/20 rounded-full border border-[#39cccc]/30"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#7fdbff]">How It Works</span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Simple{' '}
            <span className="bg-gradient-to-r from-[#7fdbff] to-[#ffdc00] bg-clip-text text-transparent">
              4-Step Workflow
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-[#7fdbff]/80 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            From data capture to insights in seconds
          </motion.p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block max-w-6xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <motion.div
              className="absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-[#0074d9] via-[#39cccc] via-[#7fdbff] to-[#ffdc00]"
              initial={{ scaleX: 0 }}
              animate={isInView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5 }}
              style={{ transformOrigin: 'left' }}
            />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <motion.div
                  key={step.title}
                  className="relative"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.2 }}
                >
                  {/* Icon Circle */}
                  <div className="flex justify-center mb-6">
                    <motion.div
                      className={`relative w-40 h-40 rounded-full ${step.iconBg} flex items-center justify-center shadow-2xl`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <step.icon className="w-16 h-16 text-white" />
                      
                      {/* Pulsing Ring */}
                      <motion.div
                        className="absolute inset-0 rounded-full border-2 border-white/30"
                        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      />
                    </motion.div>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-[#7fdbff]/30 hover:border-[#7fdbff] transition-all duration-300 hover:bg-white/15">
                    <h3 className="text-xl text-white mb-3">{step.title}</h3>
                    <p className="text-sm text-[#7fdbff]/80 leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <motion.div
                      className="absolute top-20 -right-4 z-20"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                    >
                      <ArrowRight className="w-8 h-8 text-[#ffdc00]" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline - Mobile */}
        <div className="lg:hidden space-y-8 max-w-md mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              className="relative"
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className={`flex-shrink-0 w-16 h-16 rounded-full ${step.iconBg} flex items-center justify-center shadow-lg`}>
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-[#7fdbff]/30">
                  <h3 className="text-lg text-white mb-2">{step.title}</h3>
                  <p className="text-sm text-[#7fdbff]/80 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="ml-8 h-8 w-0.5 bg-gradient-to-b from-[#7fdbff] to-[#39cccc] my-2" />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}