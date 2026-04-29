import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

const ServicesHero = () => {
  return (
    <div className="relative min-h-[60vh] flex items-center overflow-hidden pt-20 md:pt-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1871db] via-[#1460b8] to-[#0f4a8a]">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-16 md:py-20 z-10">
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
            className="font-['Sora'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Comprehensive{" "}
            <br />
            <span className="text-yellow-300">Recruitment Solutions</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['DM_Sans'] text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90"
          >
            From job matching to post-landing support — we handle everything to ensure your smooth transition abroad.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="https://wa.me/918976663732"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-300 text-[#1871db] px-8 py-3 rounded-full font-['DM_Sans'] font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <FaWhatsapp className="text-lg" />
              Start Your Journey
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-['DM_Sans'] font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              <FaArrowRight className="text-lg" />
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesHero;