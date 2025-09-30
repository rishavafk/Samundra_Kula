import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { AlertCircle, Clock, DollarSign, TrendingDown } from 'lucide-react';

export function ProblemSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const challenges = [
    {
      icon: Clock,
      title: 'Time-Consuming',
      description: 'Manual sampling takes days or weeks to cover large coastal areas'
    },
    {
      icon: TrendingDown,
      title: 'Inaccurate',
      description: 'Human error and limited sampling points lead to incomplete data'
    },
    {
      icon: DollarSign,
      title: 'Expensive',
      description: 'High costs for equipment, personnel, and laboratory analysis'
    },
    {
      icon: AlertCircle,
      title: 'Limited Scale',
      description: 'Impossible to monitor entire coastlines continuously'
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#7fdbff]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-[#0074d9]/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-2 bg-[#0074d9]/10 rounded-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[#0074d9]">The Problem</span>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl mb-6 text-[#001f3f]">
              Traditional Methods
              <br />
              <span className="text-[#0074d9]">Are Failing</span>
            </h2>

            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              Coastal sediment analysis is critical for understanding beach erosion, coastal management, 
              and climate change impacts. However, conventional manual grain-size sampling is plagued with challenges:
            </p>

            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <motion.div
                  key={challenge.title}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-[#f0fffe] transition-colors duration-300"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#0074d9] to-[#39cccc] rounded-lg flex items-center justify-center">
                    <challenge.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-[#001f3f] mb-1">{challenge.title}</h3>
                    <p className="text-gray-600">{challenge.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1711378394984-05d5b0aef61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHNlZGltZW50JTIwc2FtcGxpbmclMjBzY2llbnRpc3R8ZW58MXx8fHwxNzU5MTk2OTA1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Manual beach sediment sampling"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001f3f]/50 to-transparent" />
              
              {/* Overlay Label */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="backdrop-blur-md bg-white/90 rounded-lg p-4">
                  <p className="text-[#001f3f]">
                    Traditional manual sampling: slow, costly, and limited coverage
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#ffdc00] rounded-full opacity-20 blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#39cccc] rounded-full opacity-20 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}