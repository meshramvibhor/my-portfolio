"use client";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";
import { SectionHeading } from "@/app/components/ui/SectionHeading";

export const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormData({ name: "", email: "", message: "" });
    toast("Thanks for contacting, will get back to you shortly.");
  };

  const contactInfo = [
    {
      Icon: Mail,
      label: "Email",
      value: isMobile ? "vibhor.meshram.work @gmail.com" : "vibhor.meshram.work@gmail.com",
      color: "text-cyan-300",
    },
    { Icon: Phone, label: "Phone", value: "+91 8308904649", color: "text-fuchsia-300" },
    { Icon: MapPin, label: "Location", value: "Pune, Maharashtra, India", color: "text-violet-300" },
  ];

  const fields = [
    { id: "name", label: "Name", type: "text", placeholder: "Your name" },
    { id: "email", label: "Email", type: "email", placeholder: "your.email@example.com" },
  ] as const;

  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading kicker="Connect" title="Let's Work Together" />

        <motion.p
          className="mx-auto -mt-8 mb-16 max-w-2xl text-center text-lg text-slate-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Ready to bring your ideas to life? Let&apos;s discuss your next project and
          create something amazing together.
        </motion.p>

        <div className="grid gap-12 md:grid-cols-2">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="glass-panel holo-border holo-card card-scan rounded-3xl p-8">
              <span className="scan" aria-hidden />
              <h3 className="mb-6 font-display text-2xl font-bold text-white">Get In Touch</h3>
              <div className="space-y-6">
                {contactInfo.map(({ Icon, label, value, color }) => (
                  <motion.div
                    key={label}
                    className="flex items-center space-x-4 rounded-xl p-2 transition-colors hover:bg-white/5"
                    whileHover={{ x: 4 }}
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl icon-orb">
                      <Icon className={color} size={20} />
                    </span>
                    <div>
                      <p className="text-sm text-slate-400">{label}</p>
                      <p className="text-white">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel holo-border holo-card rounded-3xl p-8"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {fields.map((f) => (
                <div key={f.id}>
                  <label htmlFor={f.id} className="mb-2 block text-sm font-medium text-slate-300">
                    {f.label}
                  </label>
                  <input
                    type={f.type}
                    id={f.id}
                    name={f.id}
                    value={formData[f.id]}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-white/15 bg-slate-950/40 px-4 py-3 text-white placeholder-slate-500 transition-all duration-300 focus:border-cyan-300/60 focus:outline-none focus:ring-1 focus:ring-cyan-300/40 hover:border-cyan-300/40"
                    placeholder={f.placeholder}
                    required
                  />
                </div>
              ))}

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full resize-none rounded-xl border border-white/15 bg-slate-950/40 px-4 py-3 text-white placeholder-slate-500 transition-all duration-300 focus:border-cyan-300/60 focus:outline-none focus:ring-1 focus:ring-cyan-300/40 hover:border-cyan-300/40"
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <motion.button
                type="submit"
                className="btn-neon flex w-full items-center justify-center space-x-2 rounded-xl px-8 py-3.5"
                whileHover={{ y: -2, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                <span>Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </div>

        <div className="mt-16 border-t border-cyan-400/15 pt-8 text-center">
          <p className="font-display text-sm tracking-wide text-slate-500">
            © 2026 Vibhor Meshram — Crafted in a digital universe.
          </p>
        </div>
      </div>
    </section>
  );
};
