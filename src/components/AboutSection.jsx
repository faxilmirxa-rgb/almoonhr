import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGlobe, FaHandshake, FaFileAlt, FaRocket, FaShieldAlt, FaUsers, FaBriefcase, FaRegClock, FaQuoteLeft } from "react-icons/fa";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const stats = [
    { number: "10K+", label: "Candidates Placed", icon: FaUsers },
    { number: "15+", label: "Global Countries", icon: FaGlobe },
    { number: "98%", label: "Client Satisfaction", icon: FaHandshake },
    { number: "35+", label: "Combined Experience", icon: FaRegClock },
  ];

  const experienceCards = [
    { years: "10+", label: "Years of Experience", icon: FaRocket },
    { years: "25+", label: "Years in Crew Management", icon: FaBriefcase },
  ];

  const industries = [
    "CNC Operations",
    "Factory Helper",
    "Manufacturing",
    "General Labour",
    "Industrial Work",
    "Skilled Trades",
    "Machine Operator",
  ];

  const features = [
    { icon: FaFileAlt, title: "Documentation Support", desc: "Complete visa & paperwork assistance" },
    { icon: FaShieldAlt, title: "Verified Employers", desc: "100% genuine job opportunities" },
    { icon: FaHandshake, title: "End-to-End Support", desc: "From application to deployment" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-[#1871db]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Connecting Talent to{" "}
            <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
              Global Opportunities
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1871db] to-[#1871db]/40 mx-auto rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Side - Main Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : {}}
            className="flex-[1.5]"
          >
            {/* Main Description */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                <span className="font-bold text-[#1871db]">Almoon HR Consultancy</span> is a trusted recruitment partner based in India, 
                dedicated to helping skilled professionals build successful careers abroad. 
                With deep industry understanding and a strong international network, 
                we connect the right talent with the right opportunities across the 
                Gulf region and selected parts of Europe.
              </p>
              <p className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed mb-4">
                Backed by years of hands-on experience in workforce management and recruitment, 
                we work closely with leading companies in manufacturing, construction, 
                and industrial sectors to ensure reliable placements.
              </p>
              <p className="font-['DM_Sans'] text-gray-700 text-base md:text-lg leading-relaxed">
                From identifying the right opportunity to handling documentation, visa processing, 
                and deployment — our team supports candidates at every step, making the journey 
                smooth, transparent, and stress-free.
              </p>
            </motion.div>

            {/* Features Grid */}
            <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-white to-[#1871db]/5 rounded-xl p-4 shadow-sm border border-[#1871db]/20 text-center hover:shadow-md transition-all duration-300"
                >
                  <feature.icon className="text-[#1871db] text-3xl mx-auto mb-2" />
                  <h4 className="font-['Sora'] font-semibold text-gray-800 text-sm mb-1">{feature.title}</h4>
                  <p className="font-['DM_Sans'] text-gray-500 text-xs">{feature.desc}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Industries We Recruit For */}
            <motion.div variants={itemVariants} className="bg-gradient-to-br from-white to-[#1871db]/5 rounded-2xl p-6 shadow-md border border-[#1871db]/20">
              <h3 className="font-['Sora'] text-xl md:text-2xl font-bold bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent mb-4 text-center">
                Industries We Recruit For
              </h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {industries.map((industry, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.05 }}
                    whileHover={{ scale: 1.05, background: "linear-gradient(135deg, #1871db, #1460b8)", color: "white" }}
                    className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs md:text-sm font-['DM_Sans'] font-medium cursor-default transition-all duration-300"
                  >
                    {industry}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Stats, Experience & Quote */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : {}}
            className="flex-1"
          >
            {/* Experience Cards - Side by Side with Gradient Background */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-6">
              {experienceCards.map((card, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gradient-to-br from-[#1871db] to-[#1460b8] rounded-2xl p-4 text-center shadow-lg"
                >
                  <card.icon className="text-white text-3xl mx-auto mb-2" />
                  <h3 className="font-['Sora'] text-2xl md:text-3xl font-bold text-white">{card.years}</h3>
                  <p className="font-['DM_Sans'] text-white/90 text-xs md:text-sm">{card.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Stats Grid - 2x2 with Gradient */}
            <motion.div variants={itemVariants} className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-br from-white to-[#1871db]/5 rounded-2xl p-4 text-center shadow-md border border-[#1871db]/20"
                >
                  <stat.icon className="text-[#1871db] text-2xl md:text-3xl mx-auto mb-2" />
                  <h3 className="font-['Sora'] text-xl md:text-2xl font-bold text-gray-800">{stat.number}</h3>
                  <p className="font-['DM_Sans'] text-gray-500 text-xs md:text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote Card - Previous Design */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-[#1871db]/10 to-transparent rounded-xl p-4 border-l-4 border-[#1871db]"
            >
              <p className="font-['DM_Sans'] text-gray-700 text-sm italic">
                "Your trusted partner in building global careers with transparency, integrity, and excellence."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;