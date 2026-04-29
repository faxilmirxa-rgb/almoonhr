import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactHero = () => {
  return (
    <div className="relative min-h-[50vh] flex items-center overflow-hidden pt-20 md:pt-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1871db] via-[#1460b8] to-[#0f4a8a]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 z-10">
        <div className="text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Sora'] text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            We'd Love to Hear
            <br />
            <span className="text-yellow-300">From You</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['DM_Sans'] text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90"
          >
            Have questions about working abroad? Need assistance with your job search? Our team is here to help.
          </motion.p>

          {/* Quick Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mt-8"
          >
            <a href="tel:+918976663732" className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2 rounded-full hover:bg-white/30 transition-all duration-300">
              <FaPhoneAlt className="text-yellow-300 text-sm" />
              <span className="font-['DM_Sans'] text-sm">Call Us</span>
            </a>
            <a href="mailto:Info@almoonhr.com" className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2 rounded-full hover:bg-white/30 transition-all duration-300">
              <FaEnvelope className="text-yellow-300 text-sm" />
              <span className="font-['DM_Sans'] text-sm">Email Us</span>
            </a>
            <a href="https://wa.me/918976663732" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2 rounded-full hover:bg-white/30 transition-all duration-300">
              <FaWhatsapp className="text-yellow-300 text-sm" />
              <span className="font-['DM_Sans'] text-sm">WhatsApp</span>
            </a>
            <a href="#map" className="flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 px-5 py-2 rounded-full hover:bg-white/30 transition-all duration-300">
              <FaMapMarkerAlt className="text-yellow-300 text-sm" />
              <span className="font-['DM_Sans'] text-sm">Visit Us</span>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactHero;