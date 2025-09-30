import { motion, useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Send, Download, Users, Video } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { toast } from 'sonner@2.0.3';

export function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [formData, setFormData] = useState({ name: '', email: '', organization: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success('Message sent successfully! We\'ll get back to you soon.', {
        description: 'Our team will review your request within 24 hours.',
      });
      setFormData({ name: '', email: '', organization: '', message: '' });
    }, 2000);
  };

  const actions = [
    {
      icon: Video,
      title: 'Request Demo',
      description: 'See SAMUDRAKULA in action with a personalized demonstration',
      color: 'from-turquoise to-aqua',
    },
    {
      icon: Download,
      title: 'Get Pricing',
      description: 'Explore flexible pricing options for your research needs',
      color: 'from-sandy-gold to-sandy-orange',
    },
    {
      icon: Users,
      title: 'Join Research Program',
      description: 'Collaborate with our global network of researchers',
      color: 'from-ocean-blue to-turquoise',
    },
    {
      icon: Download,
      title: 'Download Specs',
      description: 'Get detailed technical specifications and documentation',
      color: 'from-aqua to-ocean-deep',
    },
  ];

  return (
    <section
      ref={ref}
      className="relative min-h-screen py-20 bg-gradient-to-b from-[#001122] via-[#001f3f] to-[#0074d9] overflow-hidden"
    >
      {/* Underwater scene with treasure chest concept */}
      <div className="absolute inset-0">
        {/* Bubbles rising */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-turquoise/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              bottom: 0,
            }}
            animate={{
              y: [0, -1000],
              x: [0, Math.random() * 50 - 25],
              scale: [0.5, 1.5, 1, 0],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              delay: Math.random() * 5,
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
            GET STARTED TODAY
          </h2>
          <p className="text-2xl text-turquoise" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
            Dive into the Future of Coastal Science
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Quick Actions */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl text-sandy-gold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
              Quick Actions
            </h3>

            {actions.map((action, i) => (
              <motion.button
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                onClick={() => toast.info(`${action.title} - Coming Soon!`, {
                  description: 'This feature will be available shortly.',
                })}
                className="group w-full text-left bg-gradient-to-br from-midnight-navy/80 to-ocean-deep/80 backdrop-blur-sm rounded-2xl p-6 border border-turquoise/30 hover:border-sandy-gold/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${action.color} group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-6 h-6 text-midnight-navy" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-xl text-white mb-2 group-hover:text-sandy-gold transition-colors" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                      {action.title}
                    </h4>
                    <p className="text-seafoam/80 group-hover:text-seafoam transition-colors">
                      {action.description}
                    </p>
                  </div>
                  <Send className="w-5 h-5 text-turquoise/50 group-hover:text-sandy-gold group-hover:translate-x-2 transition-all duration-300" />
                </div>
              </motion.button>
            ))}

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="bg-gradient-to-r from-turquoise/10 to-aqua/10 rounded-xl p-6 border border-turquoise/20"
            >
              <p className="text-seafoam/80 mb-4">
                <span className="text-sandy-gold" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  "SAMUDRAKULA has revolutionized our coastal research program. The precision and speed are unmatched."
                </span>
              </p>
              <p className="text-turquoise" style={{ fontFamily: 'JetBrains Mono, monospace' }}>
                - Dr. Sarah Johnson, Marine Research Institute
              </p>
            </motion.div>
          </motion.div>

          {/* Right - Contact Form (Styled as ship's control panel) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            {/* Treasure chest opening animation */}
            <motion.div
              initial={{ rotateX: 0 }}
              animate={isInView ? { rotateX: [0, -15, 0] } : {}}
              transition={{ duration: 1, delay: 0.5 }}
              className="bg-gradient-to-br from-midnight-navy/90 to-ocean-deep/90 backdrop-blur-sm rounded-2xl p-8 border-2 border-sandy-gold/50 shadow-2xl"
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl text-sandy-gold" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  Contact Us
                </h3>
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  className="text-4xl"
                >
                  ⚓
                </motion.div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-seafoam/80 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                    Name
                  </label>
                  <Input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-ocean-deep/50 border-turquoise/30 text-white placeholder:text-seafoam/40 focus:border-sandy-gold transition-colors"
                    placeholder="Captain Nemo"
                  />
                </div>

                <div>
                  <label className="block text-seafoam/80 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                    Email
                  </label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="bg-ocean-deep/50 border-turquoise/30 text-white placeholder:text-seafoam/40 focus:border-sandy-gold transition-colors"
                    placeholder="research@ocean.org"
                  />
                </div>

                <div>
                  <label className="block text-seafoam/80 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                    Organization
                  </label>
                  <Input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    className="bg-ocean-deep/50 border-turquoise/30 text-white placeholder:text-seafoam/40 focus:border-sandy-gold transition-colors"
                    placeholder="Marine Research Institute"
                  />
                </div>

                <div>
                  <label className="block text-seafoam/80 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                    Message
                  </label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="bg-ocean-deep/50 border-turquoise/30 text-white placeholder:text-seafoam/40 focus:border-sandy-gold transition-colors resize-none"
                    placeholder="Tell us about your research needs..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-sandy-gold to-sandy-orange hover:from-sandy-orange hover:to-sandy-gold text-midnight-navy py-6 transition-all duration-300 shadow-xl hover:shadow-2xl group"
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="mr-2"
                      >
                        🌊
                      </motion.div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <span style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                        Send Message
                      </span>
                      <Send className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </>
                  )}
                </Button>
              </form>

              {/* Success particles animation */}
              {isSubmitting && (
                <div className="absolute inset-0 pointer-events-none">
                  {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-sandy-gold rounded-full"
                      style={{
                        left: '50%',
                        top: '50%',
                      }}
                      animate={{
                        x: [0, (Math.random() - 0.5) * 200],
                        y: [0, (Math.random() - 0.5) * 200],
                        opacity: [1, 0],
                        scale: [1, 0],
                      }}
                      transition={{
                        duration: 1.5,
                        delay: i * 0.05,
                      }}
                    />
                  ))}
                </div>
              )}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}