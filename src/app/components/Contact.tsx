import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

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
    console.log("Form submitted:", formData);
    // Handle form submission here
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    toast("Thanks for contacting, will get back to you shortly.");
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-370 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Work Together
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-magenta-400 mx-auto mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project
            and create something amazing together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-black/40 to-purple-900/20 p-8 rounded-2xl backdrop-blur-sm border border-cyan-400/30 hover:border-magenta-400/40 transition-all duration-300">
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
                    <p className="text-white">vibhor.meshram.work@gmail.com</p>
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
                    <p className="text-white">Pune, Mahrashtra, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-black/40 to-purple-900/20 p-8 rounded-2xl backdrop-blur-sm border border-cyan-400/30 hover:border-magenta-400/40 transition-all duration-300">
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
                  className="w-full px-4 py-3 bg-black/20 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-magenta-400 transition-colors hover:border-cyan-400/50"
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
                  className="w-full px-4 py-3 bg-black/20 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-magenta-400 transition-colors hover:border-cyan-400/50"
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
                  className="w-full px-4 py-3 bg-black/20 border border-cyan-400/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-magenta-400 transition-colors resize-none hover:border-cyan-400/50"
                  placeholder="Tell me about your project..."
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-cyan-600 to-magenta-600 hover:from-cyan-700 hover:to-magenta-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-400/25 hover:shadow-magenta-400/25"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mt-16 pt-8 border-t border-cyan-400/20">
          <p className="text-gray-400">© 2025 Vibhor Meshram.</p>
        </div>
      </div>
    </section>
  );
};
