import { motion } from 'motion/react';
import { ReactNode, useState, MouseEvent } from 'react';

interface BeachButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  pulse?: boolean;
}

interface Ripple {
  id: number;
  x: number;
  y: number;
}

export function BeachButton({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  pulse = false
}: BeachButtonProps) {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const newRipple: Ripple = {
      id: Date.now(),
      x,
      y
    };

    setRipples(prev => [...prev, newRipple]);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 600);

    onClick?.();
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  const variantClasses = {
    primary: 'bg-gradient-to-r from-[#ffdc00] via-[#ffd700] to-[#ff851b]',
    secondary: 'bg-gradient-to-r from-[#39cccc] via-[#7fdbff] to-[#0074d9]'
  };

  return (
    <motion.button
      className={`relative overflow-hidden rounded-full ${sizeClasses[size]} ${variantClasses[variant]} text-[#001f3f] shadow-lg hover:shadow-2xl transition-all duration-300 group ${className}`}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      animate={pulse ? {
        boxShadow: [
          '0 0 20px rgba(255, 220, 0, 0.5)',
          '0 0 40px rgba(255, 220, 0, 0.8)',
          '0 0 20px rgba(255, 220, 0, 0.5)'
        ]
      } : {}}
      transition={pulse ? {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      } : {}}
    >
      {/* Sandy texture overlay */}
      <div className="absolute inset-0 opacity-30">
        <svg width="100%" height="100%">
          <filter id="sandTexture">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" result="noise" />
            <feColorMatrix
              in="noise"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 0.3 0"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#sandTexture)" />
        </svg>
      </div>

      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent"
        initial={{ x: '-100%' }}
        animate={{ x: '100%' }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 3,
          ease: "easeInOut"
        }}
      />

      {/* Ripple effects */}
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-white/50"
          style={{
            left: ripple.x,
            top: ripple.y,
            width: 0,
            height: 0
          }}
          initial={{ width: 0, height: 0, opacity: 1 }}
          animate={{
            width: 300,
            height: 300,
            opacity: 0,
            x: -150,
            y: -150
          }}
          transition={{ duration: 0.6 }}
        />
      ))}

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>

      {/* Bottom sand particles */}
      <div className="absolute bottom-0 left-0 right-0 h-1 opacity-0 group-hover:opacity-100 transition-opacity">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-[#ffd700] rounded-full"
            style={{ left: `${i * 7}%` }}
            animate={{
              y: [0, -10, -20],
              opacity: [1, 0.5, 0],
              scale: [1, 0.5, 0]
            }}
            transition={{
              duration: 1,
              delay: i * 0.05,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
        ))}
      </div>

      {/* Glow effect for pulse variant */}
      {pulse && (
        <motion.div
          className="absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              '0 0 20px rgba(255, 220, 0, 0.5)',
              '0 0 40px rgba(255, 220, 0, 0.8)',
              '0 0 60px rgba(255, 133, 27, 0.6)',
              '0 0 40px rgba(255, 220, 0, 0.8)',
              '0 0 20px rgba(255, 220, 0, 0.5)'
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
    </motion.button>
  );
}