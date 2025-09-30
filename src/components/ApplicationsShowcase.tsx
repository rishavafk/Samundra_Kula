import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { FlaskConical, Eye, TrendingDown, Waves, Building2, Globe } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const applications = [
  {
    icon: FlaskConical,
    title: 'COASTAL RESEARCH',
    description: 'Advanced sediment analysis for academic and scientific research institutions worldwide.',
    image: 'https://images.unsplash.com/photo-1534171472159-edb6d1e0b63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHNhbmQlMjB0ZXh0dXJlfGVufDF8fHx8MTc1OTE5MjE2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-ocean-blue/20 to-turquoise/20',
    hoverGradient: 'from-ocean-blue/40 to-turquoise/40',
  },
  {
    icon: Eye,
    title: 'ENVIRONMENTAL MONITORING',
    description: 'Track pollution levels, microplastic content, and ecosystem health indicators in real-time.',
    image: 'https://images.unsplash.com/photo-1626098119735-f3bc80709314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NTkxOTIxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-aqua/20 to-sandy-gold/20',
    hoverGradient: 'from-aqua/40 to-sandy-gold/40',
  },
  {
    icon: TrendingDown,
    title: 'EROSION PREDICTION',
    description: 'AI-powered forecasting of coastal erosion patterns to protect communities and infrastructure.',
    image: 'https://images.unsplash.com/photo-1719754523363-68fb4cdb2053?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bmRlcndhdGVyJTIwb2NlYW4lMjBibHVlfGVufDF8fHx8MTc1OTE0NzcxOXww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-turquoise/20 to-ocean-deep/20',
    hoverGradient: 'from-turquoise/40 to-ocean-deep/40',
  },
  {
    icon: Waves,
    title: 'MARINE CONSERVATION',
    description: 'Support habitat restoration and biodiversity monitoring in critical coastal ecosystems.',
    image: 'https://images.unsplash.com/photo-1626098119735-f3bc80709314?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvY2VhbiUyMHdhdmVzJTIwYWVyaWFsJTIwdmlld3xlbnwxfHx8fDE3NTkxOTIxNjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-sandy-gold/20 to-sandy-orange/20',
    hoverGradient: 'from-sandy-gold/40 to-sandy-orange/40',
  },
  {
    icon: Building2,
    title: 'COASTAL ENGINEERING',
    description: 'Inform infrastructure planning with precise sediment data and beach dynamics analysis.',
    image: 'https://images.unsplash.com/photo-1534171472159-edb6d1e0b63c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHNhbmQlMjB0ZXh0dXJlfGVufDF8fHx8MTc1OTE5MjE2NXww&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-ocean-deep/20 to-midnight-navy/20',
    hoverGradient: 'from-ocean-deep/40 to-midnight-navy/40',
  },
  {
    icon: Globe,
    title: 'CLIMATE STUDIES',
    description: 'Contribute to global climate change research with comprehensive coastal monitoring data.',
    image: 'https://images.unsplash.com/photo-1742415105376-43d3a5fd03fc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMG1hcCUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzU5MTkyMTY1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    gradient: 'from-turquoise/20 to-aqua/20',
    hoverGradient: 'from-turquoise/40 to-aqua/40',
  },
];

export function ApplicationsShowcase() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 bg-gradient-to-b from-[#001f3f] via-[#0074d9] to-[#39cccc] overflow-hidden"
    >
      {/* Animated background waves */}
      <div className="absolute inset-0 opacity-20">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
            style={{
              backgroundImage: `radial-gradient(circle at 50% 50%, rgba(127, 219, 255, 0.1) 0%, transparent 50%)`,
              backgroundSize: '400% 400%',
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
            REAL-WORLD APPLICATIONS
          </h2>
          <p className="text-2xl text-midnight-navy" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Transforming Coastal Science Across Industries
          </p>
        </motion.div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <ImageWithFallback
                  src={app.image}
                  alt={app.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-gradient-to-b ${app.gradient} group-hover:${app.hoverGradient} transition-all duration-500`} />
                <div className="absolute inset-0 bg-gradient-to-t from-midnight-navy via-midnight-navy/50 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative p-8 h-full min-h-[400px] flex flex-col justify-end">
                {/* Icon */}
                <motion.div
                  className="mb-4"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="inline-flex p-4 rounded-xl bg-gradient-to-br from-sandy-gold to-sandy-orange shadow-xl">
                    <app.icon className="w-8 h-8 text-midnight-navy" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-2xl text-white mb-3 group-hover:text-sandy-gold transition-colors duration-300" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  {app.title}
                </h3>

                {/* Description */}
                <p className="text-seafoam/90 leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  {app.description}
                </p>

                {/* Animated underline */}
                <motion.div
                  className="h-1 bg-gradient-to-r from-sandy-gold to-sandy-orange rounded-full"
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.5 }}
                />

                {/* Hover particles effect */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-1 h-1 bg-sandy-gold rounded-full"
                      style={{
                        left: `${20 + i * 20}%`,
                        bottom: '20%',
                      }}
                      animate={{
                        y: [0, -100],
                        opacity: [0, 1, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Corner accent */}
              <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-turquoise/50 group-hover:border-sandy-gold transition-colors duration-300" />
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-block bg-gradient-to-r from-midnight-navy/80 to-ocean-deep/80 backdrop-blur-sm rounded-2xl p-8 border border-turquoise/30">
            <p className="text-xl text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Ready to revolutionize your coastal research?
            </p>
            <p className="text-turquoise/80">
              Join leading institutions worldwide using SAMUDRAKULA
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}