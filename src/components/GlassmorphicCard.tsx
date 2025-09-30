import { motion } from 'motion/react';
import { ReactNode } from 'react';

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
  icon?: ReactNode;
  delay?: number;
}

export function GlassmorphicCard({ children, className = '', icon, delay = 0 }: GlassmorphicCardProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Main glassmorphic container */}
      <div className="relative backdrop-blur-xl bg-white/10 rounded-3xl p-6 border border-white/20 shadow-2xl overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Shimmer effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          initial={{ x: '-100%' }}
          whileHover={{ x: '100%' }}
          transition={{ duration: 1 }}
        />

        {/* Floating icon */}
        {icon && (
          <motion.div
            className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-[#7fdbff]/30 to-[#39cccc]/30 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, 0]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            {icon}
          </motion.div>
        )}

        {/* Content */}
        <div className="relative z-10">
          {children}
        </div>

        {/* Corner decorations */}
        <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#7fdbff]/10 to-transparent rounded-tl-full" />
        <div className="absolute top-0 left-0 w-16 h-16 bg-gradient-to-br from-[#ffdc00]/10 to-transparent rounded-br-full" />
      </div>

      {/* Outer glow effect */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#7fdbff]/0 to-[#39cccc]/0 group-hover:from-[#7fdbff]/20 group-hover:to-[#39cccc]/20 blur-xl transition-all duration-500 -z-10" />
    </motion.div>
  );
}