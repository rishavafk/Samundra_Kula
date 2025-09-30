import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import { 
  Smartphone, 
  Brain, 
  MapPin, 
  Clock, 
  QrCode, 
  Plane, 
  Database 
} from 'lucide-react';

export function FeaturesGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: Smartphone,
      title: 'Handheld Portable Device',
      description: 'Lightweight and ergonomic design for easy field operation',
      gradient: 'from-[#0074d9] to-[#39cccc]',
      glow: 'group-hover:shadow-[#0074d9]/50'
    },
    {
      icon: Brain,
      title: 'AI-Based Grain Classification',
      description: 'Advanced machine learning algorithms for precise sediment analysis',
      gradient: 'from-[#39cccc] to-[#7fdbff]',
      glow: 'group-hover:shadow-[#39cccc]/50'
    },
    {
      icon: MapPin,
      title: 'GPS-Enabled Geotagging',
      description: 'Automatic location tracking for spatial mapping',
      gradient: 'from-[#7fdbff] to-[#ffdc00]',
      glow: 'group-hover:shadow-[#7fdbff]/50'
    },
    {
      icon: Clock,
      title: 'Real-Time On-Screen Results',
      description: 'Instant analysis and visualization on the device display',
      gradient: 'from-[#ffdc00] to-[#ff851b]',
      glow: 'group-hover:shadow-[#ffdc00]/50'
    },
    {
      icon: QrCode,
      title: 'QR-Code Linked Dashboard',
      description: 'Quick access to detailed analysis via QR code scanning',
      gradient: 'from-[#ff851b] to-[#0074d9]',
      glow: 'group-hover:shadow-[#ff851b]/50'
    },
    {
      icon: Plane,
      title: 'Drone Integration',
      description: 'Mountable on drones for large-scale aerial monitoring',
      gradient: 'from-[#0074d9] to-[#7fdbff]',
      glow: 'group-hover:shadow-[#0074d9]/50'
    },
    {
      icon: Database,
      title: 'Cloud Database',
      description: 'Nationwide sediment map with centralized data storage',
      gradient: 'from-[#39cccc] to-[#0074d9]',
      glow: 'group-hover:shadow-[#39cccc]/50'
    }
  ];

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#f0fffe] relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7fdbff]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#ffdc00]/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-block mb-4 px-4 py-2 bg-gradient-to-r from-[#0074d9]/10 to-[#39cccc]/10 rounded-full"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#0074d9]">Features</span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-5xl mb-6 text-[#001f3f]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Cutting-Edge{' '}
            <span className="bg-gradient-to-r from-[#0074d9] to-[#39cccc] bg-clip-text text-transparent">
              Technology
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-700 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Comprehensive features designed for modern coastal monitoring needs
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`group relative p-6 rounded-2xl bg-white border border-[#7fdbff]/20 hover:border-[#7fdbff] transition-all duration-300 shadow-lg hover:shadow-2xl ${feature.glow}`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * index }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              {/* Icon with Gradient Background */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-lg text-[#001f3f] mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#39cccc]/0 to-[#0074d9]/0 group-hover:from-[#39cccc]/5 group-hover:to-[#0074d9]/5 transition-all duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-[#0074d9]">
            All features work seamlessly together for comprehensive coastal analysis
          </p>
        </motion.div>
      </div>
    </section>
  );
}