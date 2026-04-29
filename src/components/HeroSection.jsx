import { motion } from "framer-motion";
import { FaWhatsapp, FaCheckCircle, FaGlobe, FaUsers, FaBriefcase } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";
import heroImage from "../assets/right.svg";

const HeroSection = () => {
  const whatsappNumber = "+918976663732";

  // Animated chips data
  const chips = [
    { icon: FaCheckCircle, text: "100% Verified Employers", color: "text-green-500" },
    { icon: FaGlobe, text: "20+ Countries", color: "text-blue-500" },
    { icon: FaUsers, text: "5000+ Placed", color: "text-purple-500" },
  ];

  return (
    <section className="relative min-h-screen flex items-center pt-8 sm:pt-16 md:pt-20 lg:pt-28 pb-12 px-4 overflow-hidden">
      {/* Animated Background Blur Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1871db]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1871db]/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1871db]/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            {/* Heading */}
            <h1 className="font-['Sora'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
              <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
                Bridging Talent
              </span>
              <br />
              <span className="text-gray-800">Beyond Boundaries</span>
            </h1>

            {/* Description */}
            <p className="font-['DM_Sans'] text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto lg:mx-0 mb-6 leading-relaxed">
              Helping ambitious individuals step beyond boundaries and discover 
              career opportunities across the globe.
            </p>

            {/* Animated Chips - Hidden on mobile, visible from sm */}
            <div className="hidden sm:flex flex-wrap gap-3 justify-center lg:justify-start mb-6">
              {chips.map((chip, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 12
                  }}
                  whileHover={{ scale: 1.05 }}
                  className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-sm border border-[#1871db]/20 rounded-full px-3 py-1.5 text-xs md:text-sm font-['DM_Sans'] shadow-sm hover:shadow-md hover:border-[#1871db]/40 transition-all duration-300 cursor-default"
                >
                  <chip.icon className={`${chip.color} text-sm md:text-base`} />
                  <span className="text-gray-700 font-medium">{chip.text}</span>
                </motion.span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <motion.a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center justify-center gap-2 bg-[#1871db] text-white px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full font-['DM_Sans'] font-semibold text-sm sm:text-base md:text-lg hover:bg-[#1460b8] transition-all duration-300 shadow-md group"
              >
                <FaWhatsapp className="text-base sm:text-lg md:text-xl group-hover:scale-110 transition-transform" />
                Apply on WhatsApp
              </motion.a>

              <motion.a
                href="/jobs"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-flex items-center justify-center gap-2 bg-white text-[#1871db] border-2 border-[#1871db] px-5 sm:px-7 py-2.5 sm:py-3.5 rounded-full font-['DM_Sans'] font-semibold text-sm sm:text-base md:text-lg hover:bg-[#1871db] hover:text-white transition-all duration-300 shadow-sm group"
              >
                View Open Jobs
                <HiArrowRight className="text-base sm:text-lg md:text-xl group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </div>
          </motion.div>

          {/* Right Image - ENLARGED */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end mt-4 sm:mt-0"
          >
            <img
              src={heroImage}
              alt="Global Talent Bridge"
              className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl h-auto scale-110 md:scale-125"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;