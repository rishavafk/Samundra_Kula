import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Leaf, Shield, Microscope, Globe2 } from 'lucide-react';

export function ImpactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const impacts = [
    {
      icon: Leaf,
      title: 'Sustainability',
      stat: '80%',
      metric: 'Reduction in sampling waste',
      description: 'Eco-friendly digital approach eliminates traditional sampling materials',
      color: 'from-[#39cccc] to-[#7fdbff]',
      iconBg: 'bg-[#39cccc]'
    },
    {
      icon: Shield,
      title: 'Disaster Management',
      stat: '3x',
      metric: 'Faster response time',
      description: 'Real-time erosion monitoring enables proactive coastal protection',
      color: 'from-[#0074d9] to-[#39cccc]',
      iconBg: 'bg-[#0074d9]'
    },
    {
      icon: Microscope,
      title: 'Coastal Research',
      stat: '10,000+',
      metric: 'Data points per survey',
      description: 'Comprehensive datasets accelerate scientific understanding',
      color: 'from-[#7fdbff] to-[#ffdc00]',
      iconBg: 'bg-[#7fdbff]'
    },
    {
      icon: Globe2,
      title: 'National-Scale Monitoring',
      stat: '100%',
      metric: 'Coastline coverage',
      description: 'Unified sediment database for nationwide coastal management',
      color: 'from-[#ffdc00] to-[#ff851b]',
      iconBg: 'bg-[#ffdc00]'
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-[#f0fffe] to-transparent" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#7fdbff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#ffdc00]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#39cccc]/10 to-[#0074d9]/10 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#0074d9]">Impact</span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl mb-6 text-[#001f3f]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming{' '}
            <span className="bg-gradient-to-r from-[#0074d9] to-[#39cccc] bg-clip-text text-transparent">
              Coastal Conservation
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Real-world benefits for environment, safety, science, and policy
          </motion.p>
        </div>

        {/* Impact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {impacts.map((impact, index) => (
            <motion.div
              key={impact.title}
              className="group relative"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
            >
              <div className="relative bg-white rounded-2xl p-6 border border-[#7fdbff]/20 hover:border-[#7fdbff] transition-all duration-300 shadow-lg hover:shadow-2xl h-full">
                {/* Icon */}
                <div className={`w-16 h-16 rounded-xl ${impact.iconBg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <impact.icon className="w-8 h-8 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl text-[#001f3f] mb-3">{impact.title}</h3>

                {/* Stat */}
                <div className={`text-4xl bg-gradient-to-r ${impact.color} bg-clip-text text-transparent mb-1`}>
                  {impact.stat}
                </div>
                <p className="text-sm text-[#0074d9] mb-3">{impact.metric}</p>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {impact.description}
                </p>

                {/* Hover Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${impact.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section with Image */}
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1656254375283-a0000a6cc95b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwc3VzdGFpbmFiaWxpdHklMjByZXNlYXJjaHxlbnwxfHx8fDE3NTkxOTY5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Coastal sustainability"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/90 via-[#001f3f]/50 to-transparent" />
            
            {/* Overlay Content */}
            <div className="absolute inset-0 flex items-center justify-center p-8">
              <div className="text-center max-w-3xl">
                <motion.h3
                  className="text-3xl lg:text-4xl text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Building a Sustainable Future
                </motion.h3>
                <motion.p
                  className="text-lg text-[#7fdbff] mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Join us in protecting our coastlines through innovative technology and data-driven solutions
                </motion.p>

                {/* Stats Row */}
                <motion.div
                  className="flex items-center justify-center gap-8 flex-wrap"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 1 }}
                >
                  {[
                    { value: '500+', label: 'Coastal Sites' },
                    { value: '15K+', label: 'Samples Analyzed' },
                    { value: '24/7', label: 'Monitoring' }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <div className="text-3xl text-[#ffdc00] mb-1">{stat.value}</div>
                      <div className="text-sm text-[#7fdbff]">{stat.label}</div>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}