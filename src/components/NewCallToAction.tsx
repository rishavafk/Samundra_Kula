import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { BeachButton } from './BeachButton';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { toast } from 'sonner@2.0.3';
import { Send, Mail, User, MessageSquare } from 'lucide-react';

export function NewCallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    toast.success('Message sent successfully! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section ref={ref} className="py-20 lg:py-32 bg-gradient-to-b from-white to-[#f0fffe] relative overflow-hidden">
      {/* Abstract Ocean Waves Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-20" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="#39cccc"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,128L48,138.7C96,149,192,171,288,165.3C384,160,480,128,576,128C672,128,768,160,864,165.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,138.7C960,139,1056,117,1152,101.3C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        <svg className="absolute bottom-0 left-0 w-full h-64 opacity-10" viewBox="0 0 1440 320" preserveAspectRatio="none">
          <motion.path
            fill="#0074d9"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{
              d: [
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,234.7C672,245,768,235,864,213.3C960,192,1056,160,1152,154.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
        </svg>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl lg:text-5xl mb-6 text-[#001f3f]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Join Us in Revolutionizing{' '}
              <span className="bg-gradient-to-r from-[#0074d9] to-[#39cccc] bg-clip-text text-transparent">
                Coastal Monitoring
              </span>
            </motion.h2>

            <motion.p
              className="text-lg text-gray-700 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Get in touch to learn more about SAMUDRAKULA, request a demo, or discuss partnership opportunities
            </motion.p>
          </div>

          <motion.div
            className="bg-white rounded-3xl shadow-2xl border border-[#7fdbff]/30 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left: Form */}
              <div className="p-8 lg:p-12">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-[#001f3f]">
                      <User className="w-4 h-4 text-[#39cccc]" />
                      Your Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-[#7fdbff]/30 focus:border-[#39cccc] focus:ring-[#39cccc]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-[#001f3f]">
                      <Mail className="w-4 h-4 text-[#39cccc]" />
                      Email Address
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-[#7fdbff]/30 focus:border-[#39cccc] focus:ring-[#39cccc]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2 text-[#001f3f]">
                      <MessageSquare className="w-4 h-4 text-[#39cccc]" />
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell us about your project or inquiry..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="border-[#7fdbff]/30 focus:border-[#39cccc] focus:ring-[#39cccc] resize-none"
                    />
                  </div>

                  <BeachButton
                    size="lg"
                    variant="secondary"
                    className="w-full"
                    onClick={(e: any) => {
                      e.preventDefault();
                      handleSubmit(e);
                    }}
                  >
                    Send Message
                    <Send className="ml-2 w-5 h-5" />
                  </BeachButton>
                </form>
              </div>

              {/* Right: Info */}
              <div className="bg-gradient-to-br from-[#001f3f] to-[#0074d9] p-8 lg:p-12 text-white flex flex-col justify-center">
                <motion.div
                  className="space-y-8"
                  initial={{ opacity: 0, x: 30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <div>
                    <h3 className="text-2xl mb-4">Let's Connect</h3>
                    <p className="text-[#7fdbff]/80 leading-relaxed">
                      Whether you're a researcher, government agency, or environmental organization, 
                      we're here to help you leverage advanced coastal monitoring technology.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#39cccc] flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm text-[#7fdbff]/60 mb-1">Email</p>
                        <p>contact@samudrakula.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#7fdbff] flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="w-5 h-5 text-[#001f3f]" />
                      </div>
                      <div>
                        <p className="text-sm text-[#7fdbff]/60 mb-1">Response Time</p>
                        <p>We typically respond within 24 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-6 border-t border-[#7fdbff]/20">
                    <p className="text-sm text-[#7fdbff]/60 mb-2">Trusted by</p>
                    <div className="flex items-center gap-4 flex-wrap">
                      <span className="text-sm">Research Institutes</span>
                      <span className="text-[#7fdbff]/40">•</span>
                      <span className="text-sm">Coastal Agencies</span>
                      <span className="text-[#7fdbff]/40">•</span>
                      <span className="text-sm">Universities</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}