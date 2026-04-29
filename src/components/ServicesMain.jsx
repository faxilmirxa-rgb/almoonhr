import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FaSearch, 
  FaFileAlt, 
  FaPlane, 
  FaHandshake, 
  FaBriefcase, 
  FaShieldAlt,
  FaUserCheck,
  FaRegClock,
  FaGlobe,
  FaChartLine
} from "react-icons/fa";
import serviceImage from "../assets/badge.svg";

const ServicesMain = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: FaSearch,
      title: "Job Matching",
      description: "Finding the right opportunities matching your skills, experience, and career goals across the Gulf region.",
      details: "We analyze your profile, understand your preferences, and connect you with verified employers looking for your exact skill set."
    },
    {
      icon: FaFileAlt,
      title: "Documentation Support",
      description: "Complete visa processing, attestation, and legal paperwork assistance.",
      details: "Our experts guide you through every document requirement — from passport to degree attestation, ensuring nothing is missed."
    },
    {
      icon: FaHandshake,
      title: "Employer Verification",
      description: "100% genuine and verified job opportunities from trusted employers.",
      details: "We personally verify each employer's credibility, license, and track record before presenting any opportunity to you."
    },
    {
      icon: FaBriefcase,
      title: "Pre-Deployment Training",
      description: "Cultural orientation, language basics, and skill enhancement for smooth transition abroad.",
      details: "Get trained on workplace culture, communication standards, and professional expectations in your destination country."
    },
    {
      icon: FaPlane,
      title: "Travel Arrangements",
      description: "Flight booking, airport transfers, and initial accommodation setup.",
      details: "We coordinate your travel logistics so you can focus on preparing for your new role without any stress."
    },
    {
      icon: FaShieldAlt,
      title: "Post-Landing Support",
      description: "Assistance after arrival — from bank accounts to settling into your new role.",
      details: "Our support doesn't end at landing. We help you with documentation, accommodation, and workplace integration."
    }
  ];

  const benefits = [
    { icon: FaUserCheck, title: "Personalized Approach", desc: "Tailored solutions for each candidate's unique needs" },
    { icon: FaRegClock, title: "Fast Processing", desc: "Efficient turnaround time for visa and documentation" },
    { icon: FaGlobe, title: "Global Network", desc: "Trusted partners across UAE, Qatar, KSA, Kuwait, Oman, Bahrain" },
    { icon: FaChartLine, title: "98% Success Rate", desc: "Proven track record of successful placements" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.5, ease: "easeOut" } 
    },
  };

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Flex Container - Left Content & Right Image */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center mb-20">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1"
          >
            <div className="mb-8">
              <span className="inline-block px-4 py-1 bg-[#1871db]/10 rounded-full text-sm font-['DM_Sans'] text-[#1871db] font-semibold mb-4">
                Our Core Services
              </span>
              <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-800">Full-Service</span>{" "}
                <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
                  Recruitment
                </span>
              </h2>
              <p className="font-['DM_Sans'] text-gray-600 text-base md:text-lg max-w-xl">
                We handle everything — from finding the right job to helping you land safely in the Gulf.
              </p>
            </div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : {}}
              className="space-y-4"
            >
              {services.slice(0, 3).map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 8 }}
                  className="flex items-start gap-4 p-3 rounded-xl hover:bg-[#1871db]/5 transition-all duration-300 cursor-default"
                >
                  <div className="bg-gradient-to-br from-[#1871db] to-[#1460b8] w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                    <service.icon className="text-white text-lg" />
                  </div>
                  <div>
                    <h3 className="font-['Sora'] font-semibold text-gray-800 text-base">
                      {service.title}
                    </h3>
                    <p className="font-['DM_Sans'] text-gray-500 text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <img
              src={serviceImage}
              alt="Recruitment Services"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
            />
          </motion.div>
        </div>

        {/* All Services Grid */}
        <div className="mt-16">
          <div className="text-center mb-12">
            <h3 className="font-['Sora'] text-2xl md:text-3xl font-bold text-gray-800 mb-3">
              Everything You Need Under <span className="text-[#1871db]">One Roof</span>
            </h3>
            <div className="w-16 h-0.5 bg-[#1871db] mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-gradient-to-br from-white to-[#1871db]/5 rounded-2xl p-6 shadow-md border border-[#1871db]/20 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-br from-[#1871db] to-[#1460b8] w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-md">
                  <service.icon className="text-white text-xl" />
                </div>
                <h3 className="font-['Sora'] text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
                <p className="font-['DM_Sans'] text-gray-500 text-sm mb-3">{service.description}</p>
                <p className="font-['DM_Sans'] text-gray-400 text-xs">{service.details}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 bg-gradient-to-r from-[#1871db]/5 to-transparent rounded-2xl p-8">
          <h3 className="font-['Sora'] text-2xl font-bold text-gray-800 text-center mb-8">
            Why Choose Our <span className="text-[#1871db]">Services?</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-[#1871db]/10 flex items-center justify-center mx-auto mb-3">
                  <benefit.icon className="text-[#1871db] text-xl" />
                </div>
                <h4 className="font-['Sora'] font-semibold text-gray-800 mb-1">{benefit.title}</h4>
                <p className="font-['DM_Sans'] text-gray-500 text-xs">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesMain;