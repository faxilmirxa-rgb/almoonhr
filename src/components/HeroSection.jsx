import { motion } from "framer-motion";
import { FaCheckCircle, FaGlobe, FaUsers } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";



const HeroSection = () => {
  const whatsappNumber = "+918976663732";

  // Animated chips data
  const chips = [
    { icon: FaCheckCircle, text: "100% Verified Employers", color: "text-green-400" },
    { icon: FaGlobe, text: "20+ Countries", color: "text-blue-400" },
    { icon: FaUsers, text: "50000+ Placed", color: "text-purple-400" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-8 sm:pt-16 md:pt-20 lg:pt-28 pb-12 px-4 overflow-hidden">

      {/* ✅ Background Video (served from /public) */}
      <div className="absolute inset-0 -z-20">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="w-full h-full object-cover"
          poster="/fallback-poster.jpg"
        >
          <source src="/COUNTRY.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60 backdrop-brightness-75"></div>
      </div>

      {/* Animated Background Blur Effect */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#1871db]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#1871db]/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#1871db]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      {/* ✅ Centered Content */}
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center"
        >
          {/* Heading */}
          <h1 className="font-['Sora'] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-5 drop-shadow-lg">
            <span className="bg-gradient-to-r from-[#4da3ff] to-[#1871db] bg-clip-text text-transparent">
              Bridging Talent
            </span>
            <br />
            <span className="text-white drop-shadow-md">Beyond Boundaries</span>
          </h1>

          {/* Description */}
          <p className="font-['DM_Sans'] text-white/90 text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-8 leading-relaxed drop-shadow">
            Helping ambitious individuals step beyond boundaries and discover
            career opportunities across the globe.
          </p>

          {/* Animated Chips */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            {chips.map((chip, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                }}
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm font-['DM_Sans'] shadow-sm hover:shadow-md hover:border-white/50 hover:bg-white/20 transition-all duration-300 cursor-default"
              >
                <chip.icon className={`${chip.color} text-sm md:text-base`} />
                <span className="text-white font-medium">{chip.text}</span>
              </motion.span>
            ))}
          </div>

          {/* ✅ Elegant Divider with Center Sparkle */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
            className="flex items-center justify-center gap-3 w-full max-w-md mx-auto mb-8"
          >
            <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/30 to-white/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#4da3ff] shadow-[0_0_10px_2px_rgba(77,163,255,0.7)]" />
            <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/30 to-white/40" />
          </motion.div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto">
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="relative overflow-hidden inline-flex items-center justify-center bg-[#1871db] text-white px-7 sm:px-10 py-3 sm:py-3.5 rounded-full font-['DM_Sans'] font-semibold text-sm sm:text-base md:text-lg hover:bg-[#1460b8] transition-all duration-300 shadow-lg hover:shadow-[0_0_25px_rgba(24,113,219,0.55)] w-auto group"
            >
              {/* Shine sweep */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              <span className="relative z-10">Start a Conversation</span>
            </motion.a>

            <motion.a
              href="/jobs"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border-2 border-white/60 px-7 sm:px-10 py-3 sm:py-3.5 rounded-full font-['DM_Sans'] font-semibold text-sm sm:text-base md:text-lg hover:bg-white hover:text-[#1871db] transition-all duration-300 shadow-lg group w-auto"
            >
              View Open Jobs
              <HiArrowRight className="text-base sm:text-lg md:text-xl group-hover:translate-x-1 transition-transform" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;