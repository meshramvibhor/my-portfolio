import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setIsMobile(isMobile);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    toast("Thanks for contacting, will get back to you shortly.");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <p className="section-kicker mb-3">Connect</p>
          <h2 className="section-title mb-5">
            Let&apos;s Work Together
          </h2>
          <div className="w-28 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent mx-auto mb-6"></div>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let&apos;s discuss your next
            project and create something amazing together.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45 }}
          >
            <motion.div
              className="glass-panel holo-border p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              whileHover={{ y: -6 }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                Get In Touch
              </h3>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-magenta-500/20 rounded-lg flex items-center justify-center border border-cyan-400/30">
                    <Mail className="text-cyan-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">
                      {isMobile?"vibhor.meshram.work @gmail.com":"vibhor.meshram.work@gmail.com"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-magenta-500/20 to-purple-500/20 rounded-lg flex items-center justify-center border border-magenta-400/30">
                    <Phone className="text-magenta-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white">+91 8308904649</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-lg flex items-center justify-center border border-purple-400/30">
                    <MapPin className="text-purple-400" size={20} />
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Pune, Maharashtra, India</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="glass-panel holo-border p-8 rounded-2xl transition-all duration-300 hover:-translate-y-1"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: 0.06 }}
            whileHover={{ y: -6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950/40 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-300/50 transition-colors hover:border-cyan-300/40"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950/40 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-300/50 transition-colors hover:border-cyan-300/40"
                  placeholder="your.email@example.com"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-300 text-sm font-medium mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 bg-slate-950/40 border border-white/20 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-cyan-300/50 transition-colors resize-none hover:border-cyan-300/40"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-slate-950 px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-[1.02] flex items-center justify-center space-x-2"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-cyan-400/20">
          <p className="text-gray-400">© 2026 Vibhor Meshram.</p>
        </div>
      </div>
    </section>
  );
};