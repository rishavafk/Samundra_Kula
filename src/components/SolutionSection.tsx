import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Sparkles, Zap, Smartphone } from 'lucide-react';

export function SolutionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section 
      id="solution" 
      ref={ref} 
      className="py-20 lg:py-32 bg-gradient-to-b from-[#f0fffe] to-white relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-[#39cccc]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-[#0074d9]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#39cccc]/20 to-[#0074d9]/20 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#0074d9]">Our Solution</span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl mb-6 text-[#001f3f]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Meet{' '}
            <span className="bg-gradient-to-r from-[#0074d9] to-[#39cccc] bg-clip-text text-transparent">
              SAMUDRAKULA
            </span>
          </motion.h2>

          <motion.p
            className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            A revolutionary AI-powered device that transforms coastal sediment analysis. 
            Compact, scalable, and field-ready for real-world deployment.
          </motion.p>
        </div>

        {/* Device Showcase */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <div className="relative">
            {/* Main Device Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-[#39cccc]/30 bg-gradient-to-br from-[#001f3f] to-[#0074d9] p-12">
              <div className="relative aspect-video bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center border-2 border-[#7fdbff]/30">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1707651020192-c62134595768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwZGV2aWNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTkxOTY5MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="SAMUDRAKULA Device"
                  className="w-full h-full object-cover opacity-80 rounded-xl"
                />
                
                {/* Overlay Device Mockup */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="relative"
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="w-48 h-72 bg-gradient-to-b from-[#001f3f] to-[#0074d9] rounded-3xl shadow-2xl border-4 border-[#39cccc] relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-[#7fdbff]/20 to-transparent" />
                      <div className="p-4">
                        <div className="w-full h-8 bg-[#7fdbff] rounded-lg mb-4 flex items-center justify-center">
                          <Smartphone className="w-5 h-5 text-[#001f3f]" />
                        </div>
                        <div className="space-y-2">
                          <div className="h-3 bg-[#39cccc]/50 rounded w-3/4" />
                          <div className="h-3 bg-[#39cccc]/30 rounded w-full" />
                          <div className="h-3 bg-[#39cccc]/30 rounded w-5/6" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="h-32 bg-[#ffdc00]/20 rounded-lg" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Floating Feature Badges */}
              <motion.div
                className="absolute top-8 -left-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
                animate={{ x: [-10, 0, -10] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Zap className="w-5 h-5 text-[#ffdc00]" />
                <span className="text-sm text-[#001f3f]">Instant Results</span>
              </motion.div>

              <motion.div
                className="absolute bottom-8 -right-4 bg-white rounded-full px-4 py-2 shadow-lg flex items-center gap-2"
                animate={{ x: [10, 0, 10] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <Sparkles className="w-5 h-5 text-[#39cccc]" />
                <span className="text-sm text-[#001f3f]">AI-Powered</span>
              </motion.div>
            </div>

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#39cccc]/20 to-[#0074d9]/20 rounded-3xl blur-3xl -z-10" />
          </div>
        </motion.div>

        {/* Caption */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="inline-block bg-gradient-to-r from-[#0074d9] to-[#39cccc] text-white px-6 py-3 rounded-full shadow-lg">
            <p className="text-lg">
              Compact, scalable, field-ready solution
            </p>
          </div>
        </motion.div>

        {/* Key Highlights */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { title: 'Handheld', desc: 'Portable design for easy field deployment' },
            { title: 'Drone-Compatible', desc: 'Attachable to drones for aerial coverage' },
            { title: 'Real-Time', desc: 'Instant analysis and on-screen results' }
          ].map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center p-6 rounded-xl bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 border border-[#7fdbff]/20"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-xl text-[#0074d9] mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}