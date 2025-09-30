import { motion } from 'motion/react';
import { useState } from 'react';
import { Github, Twitter, Linkedin, Mail, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { toast } from 'sonner@2.0.3';
import { BeachCreatures } from './BeachCreatures';
import { SandEffects } from './SandEffects';

export function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    setTimeout(() => {
      setIsSubscribing(false);
      toast.success('Subscribed successfully!', {
        description: 'You\'ll receive our latest updates and research insights.',
      });
      setEmail('');
    }, 1500);
  };

  const footerLinks = {
    Product: ['Features', 'Specifications', 'Pricing', 'Case Studies'],
    Research: ['Documentation', 'API Reference', 'Publications', 'Data Sets'],
    Company: ['About Us', 'Careers', 'Partners', 'Contact'],
    Legal: ['Privacy Policy', 'Terms of Service', 'License', 'Compliance'],
  };

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
    { icon: Mail, label: 'Email', href: 'mailto:info@samudrakula.com' },
  ];

  return (
    <footer className="relative bg-gradient-to-b from-[#0074d9] via-[#001f3f] to-[#001122] overflow-hidden">
      {/* Beach Creatures Animation */}
      <BeachCreatures />
      
      {/* Sand Effects */}
      <SandEffects />
      
      {/* Ocean floor with animated elements */}
      <div className="absolute inset-0 opacity-20">
        {/* Shells and starfish */}
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl"
            style={{
              left: `${(i * 12) + 5}%`,
              bottom: `${Math.random() * 20}%`,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.5,
            }}
          >
            {i % 3 === 0 ? '🐚' : i % 3 === 1 ? '⭐' : '🦀'}
          </motion.div>
        ))}
      </div>

      {/* Current effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 3 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-turquoise/20 to-transparent w-full"
            style={{
              top: `${30 + i * 20}%`,
            }}
            animate={{
              x: ['-100%', '100%'],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Newsletter Signup (Paper boat concept) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 bg-gradient-to-br from-midnight-navy/80 to-ocean-deep/80 backdrop-blur-sm rounded-2xl p-8 border border-turquoise/30"
        >
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
              className="text-6xl mb-4"
            >
              ⛵
            </motion.div>
            <h3 className="text-3xl text-sandy-gold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Stay Updated
            </h3>
            <p className="text-seafoam/80 mb-6">
              Subscribe to receive the latest research insights, product updates, and industry news
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-4 max-w-md mx-auto">
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="your.email@ocean.org"
                className="flex-1 bg-ocean-deep/50 border-turquoise/30 text-white placeholder:text-seafoam/40 focus:border-sandy-gold"
              />
              <Button
                type="submit"
                disabled={isSubscribing}
                className="bg-gradient-to-r from-sandy-gold to-sandy-orange hover:from-sandy-orange hover:to-sandy-gold text-midnight-navy group"
              >
                {isSubscribing ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                  >
                    ⚓
                  </motion.div>
                ) : (
                  <>
                    Subscribe
                    <Send className="ml-2 w-4 h-4 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-4xl text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 800 }}>
                SAMUDRAKULA
              </h3>
              <p className="text-turquoise mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                "Unveiling Ocean Secrets, One Grain at a Time"
              </p>
              <p className="text-seafoam/70 mb-6 leading-relaxed">
                Revolutionary beach sediment analysis system with drone-mountable capabilities, transforming coastal science through precision technology and AI-powered insights.
              </p>
              
              {/* Social Links as Floating Buoys */}
              <div className="flex gap-4">
                {socialLinks.map((social, i) => (
                  <motion.a
                    key={i}
                    href={social.href}
                    className="p-3 rounded-full bg-gradient-to-br from-turquoise/20 to-aqua/20 border border-turquoise/30 hover:from-sandy-gold/30 hover:to-sandy-orange/30 hover:border-sandy-gold/50 transition-all duration-300"
                    whileHover={{ scale: 1.1, y: -5 }}
                    animate={{
                      y: [0, -8, 0],
                    }}
                    transition={{
                      y: {
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.2,
                      },
                    }}
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-turquoise" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Link Sections (Message Bottles) */}
          {Object.entries(footerLinks).map(([category, links], i) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                }}
              >
                <h4 className="text-sandy-gold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  {category}
                </h4>
                <ul className="space-y-2">
                  {links.map((link, j) => (
                    <li key={j}>
                      <a
                        href="#"
                        className="text-seafoam/70 hover:text-sandy-gold transition-colors duration-300 inline-flex items-center gap-2 group"
                        onClick={(e) => {
                          e.preventDefault();
                          toast.info(`${link} - Coming Soon!`);
                        }}
                      >
                        <span className="w-1 h-1 bg-turquoise rounded-full group-hover:bg-sandy-gold transition-colors" />
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-turquoise/20"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-seafoam/60" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
              © 2025 SAMUDRAKULA. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-seafoam/60">
              <motion.span
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
                className="flex items-center gap-2"
                style={{ fontFamily: 'JetBrains Mono, monospace' }}
              >
                <span className="w-2 h-2 bg-sandy-gold rounded-full animate-pulse" />
                System Online
              </motion.span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>|</span>
              <span style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                Built with ❤️ for Ocean Science
              </span>
            </div>
          </div>

          {/* Easter Egg - Hidden Sea Creatures */}
          <div className="mt-8 text-center">
            <motion.button
              onClick={() => toast.success('🐙 You found the secret octopus! 🐙', {
                description: 'Did you know? SAMUDRAKULA has analyzed over 1,490 beaches worldwide!',
              })}
              className="text-xs text-turquoise/40 hover:text-sandy-gold transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              🌊 Click here for a surprise 🌊
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#000000] to-transparent pointer-events-none" />
    </footer>
  );
}