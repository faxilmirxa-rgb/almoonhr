import { motion } from "motion/react";
import { ArrowRight, Users, Globe, Briefcase, Star, Shield, Clock, CheckCircle } from "lucide-react";

const WA_ICON = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.554 4.103 1.523 5.83L.057 23.428a.5.5 0 00.515.572l5.782-.953A11.944 11.944 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.882a9.877 9.877 0 01-5.031-1.375l-.361-.214-3.735.616.633-3.647-.235-.374A9.845 9.845 0 012.118 12C2.118 6.533 6.533 2.118 12 2.118S21.882 6.533 21.882 12 17.467 21.882 12 21.882z"/>
  </svg>
);

const stats = [
  { icon: Users, value: "500+", label: "Successful Placements", color: "text-blue-600" },
  { icon: Globe, value: "3", label: "Gulf Countries", color: "text-emerald-600" },
  { icon: Briefcase, value: "10+", label: "Years Experience", color: "text-purple-600" },
  { icon: Star, value: "100%", label: "Verified Employers", color: "text-amber-600" },
];

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-bg pt-28 md:pt-20">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-64 md:w-96 h-64 md:h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-72 md:w-[500px] h-72 md:h-[500px] bg-emerald-400/5 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 md:w-[600px] h-80 md:h-[600px] bg-blue-300/5 rounded-full blur-3xl" />
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%231565C0' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: "20px 20px md:30px 30px"
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-center">
          
          {/* Left Content - Center on mobile, left on desktop */}
          <div className="text-center lg:text-left px-2 sm:px-0">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 mb-5 sm:mb-6 shadow-sm border border-blue-100 mx-auto lg:mx-0"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-semibold text-blue-700 whitespace-nowrap">Actively Hiring — Gulf Placements Open</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-4 sm:mb-6"
            >
              Your Gateway to{" "}
              <span className="gradient-text">Gulf Careers</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-sm sm:text-base md:text-lg text-slate-600 mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
            >
              Almoon HR connects skilled Indian professionals with verified employers across{" "}
              <span className="font-bold text-blue-700">Dubai 🇦🇪, Kuwait 🇰🇼 & Riyadh 🇸🇦</span> — 
              handling everything from job matching to placement.
            </motion.p>

            {/* Features List */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-2 sm:gap-3 mb-6 sm:mb-8 max-w-md mx-auto lg:mx-0"
            >
              {[
                "Visa & Documentation",
                "Free Career Consultation",
                "Accommodation Support",
                "24/7 Assistance"
              ].map((feature, i) => (
                <div key={i} className="flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-slate-700 justify-center lg:justify-start">
                  <CheckCircle size={14} className="text-green-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <a
                href="https://wa.me/919999999999?text=Hello%20Almoon%20HR%2C%20I%20am%20interested%20in%20Gulf%20job%20opportunities."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp flex items-center justify-center gap-2 sm:gap-3 px-5 sm:px-8 py-3 sm:py-4 rounded-full text-white font-bold text-sm sm:text-base group hover:scale-105 transition-transform"
              >
                <WA_ICON />
                Apply on WhatsApp
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#jobs"
                className="glass-light flex items-center justify-center gap-2 px-5 sm:px-8 py-3 sm:py-4 rounded-full text-blue-700 font-semibold text-sm sm:text-base hover:bg-blue-50 hover:shadow-md transition-all border border-blue-200"
              >
                <Briefcase size={16} />
                View Open Jobs
              </a>
            </motion.div>
          </div>

          {/* Right Content - Hero Image with Worker */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative mt-8 lg:mt-0 px-2 sm:px-0"
          >
            {/* Main Image Card */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl mx-auto max-w-md lg:max-w-none">
              <img
                src="https://images.unsplash.com/photo-1595831708961-1b13c0dd2422?q=80&w=1501&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Indian professional working in Gulf - Success career opportunity"
                className="w-full h-auto object-cover"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 via-transparent to-transparent" />
              
              {/* Floating Cards on Image */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="absolute top-3 left-3 sm:top-4 sm:left-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-100 flex items-center justify-center">
                    <Shield size={14} className="text-green-600 sm:text-base" />
                  </div>
                  <div>
                    <div className="text-[10px] sm:text-xs font-bold text-slate-800">100% Verified</div>
                    <div className="text-[9px] sm:text-xs text-slate-500">Employers</div>
                  </div>
                </div>
              </motion.div>

              {/* Country Chip - Right Middle */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute top-1/2 -translate-y-1/2 right-2 sm:right-4 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 sm:px-5 sm:py-3 shadow-lg border border-blue-100"
              >
                <div className="flex flex-col items-center gap-0.5 sm:gap-1">
                  <div className="flex gap-1 sm:gap-2 text-lg sm:text-2xl">🇦🇪🇰🇼🇸🇦</div>
                  <div>
                    <div className="text-[10px] sm:text-sm font-bold text-slate-800 text-center">3 Countries</div>
                    <div className="text-[8px] sm:text-xs text-slate-500 text-center">Gulf Region</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 bg-gradient-to-r from-blue-600 to-blue-700 rounded-xl px-3 py-1.5 sm:px-4 sm:py-2 shadow-lg"
              >
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <Clock size={12} className="text-white sm:text-sm" />
                  <span className="text-[10px] sm:text-xs font-bold text-white whitespace-nowrap">Fast Placement</span>
                </div>
              </motion.div>
            </div>

            {/* Trust Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 sm:px-6 sm:py-3 shadow-xl flex items-center gap-2 sm:gap-4 whitespace-nowrap min-w-max"
            >
              <div className="flex items-center gap-0.5 sm:gap-1">
                <span className="text-yellow-400 text-[10px] sm:text-sm">★★★★★</span>
                <span className="text-[10px] sm:text-sm font-semibold text-slate-700 ml-0.5 sm:ml-1">4.9</span>
              </div>
              <div className="w-px h-4 sm:h-6 bg-gray-200" />
              <div className="text-[10px] sm:text-sm text-slate-600">
                Trusted by <span className="font-bold text-blue-600">1000+</span> professionals
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mt-12 sm:mt-16 pt-6 sm:pt-8 border-t border-blue-200/30"
        >
          {stats.map(({ icon: Icon, value, label, color }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 + i * 0.1 }}
              className="text-center p-2 sm:p-4 rounded-xl sm:rounded-2xl bg-white/50 backdrop-blur-sm hover:bg-white transition-all cursor-pointer group"
            >
              <Icon size={20} className={`${color} mx-auto mb-1 sm:mb-2 group-hover:scale-110 transition-transform sm:w-7 sm:h-7`} />
              <div className="text-lg sm:text-2xl md:text-3xl font-black text-slate-800">{value}</div>
              <div className="text-[10px] sm:text-xs md:text-sm text-slate-500 font-medium mt-0.5 sm:mt-1">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );npm 
}