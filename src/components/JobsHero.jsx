import { motion } from "framer-motion";
import { FaWhatsapp, FaSearch, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const JobsHero = () => {
  const [searchTerm, setSearchTerm] = useState("");

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
            Find Your <span className="text-yellow-300">Dream Job</span>
            <br />
            in the Gulf
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['DM_Sans'] text-lg md:text-xl max-w-2xl mx-auto mb-8 text-white/90"
          >
            Explore hundreds of verified job opportunities across UAE, Qatar, Saudi Arabia, Kuwait, Oman, and Bahrain
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by job title, location, or category..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-full text-gray-800 font-['DM_Sans'] focus:outline-none focus:ring-2 focus:ring-yellow-300"
                />
              </div>
              <button className="bg-yellow-300 text-[#1871db] px-6 py-3 rounded-full font-['DM_Sans'] font-semibold hover:bg-yellow-400 transition-all duration-300">
                Search Jobs
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center gap-6 md:gap-12 mt-12"
          >
            <div className="text-center">
              <div className="font-['Sora'] text-2xl font-bold">500+</div>
              <div className="font-['DM_Sans'] text-xs text-white/80">Active Jobs</div>
            </div>
            <div className="text-center">
              <div className="font-['Sora'] text-2xl font-bold">100+</div>
              <div className="font-['DM_Sans'] text-xs text-white/80">Employers</div>
            </div>
            <div className="text-center">
              <div className="font-['Sora'] text-2xl font-bold">15+</div>
              <div className="font-['DM_Sans'] text-xs text-white/80">Countries</div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JobsHero;