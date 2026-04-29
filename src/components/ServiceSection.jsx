import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FaSearch, 
  FaFileAlt, 
  FaPlane, 
  FaHandshake, 
  FaBriefcase, 
  FaShieldAlt,
} from "react-icons/fa";
import serviceImage from "../assets/badge.svg";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: FaSearch,
      title: "Job Matching",
      description: "Finding the right opportunities matching your skills and goals.",
    },
    {
      icon: FaFileAlt,
      title: "Documentation Support",
      description: "Complete visa processing and legal paperwork assistance.",
    },
    {
      icon: FaHandshake,
      title: "Employer Verification",
      description: "100% genuine and verified job opportunities.",
    },
    {
      icon: FaBriefcase,
      title: "Pre-Deployment Training",
      description: "Cultural orientation for smooth transition abroad.",
    },
    {
      icon: FaPlane,
      title: "Travel Arrangements",
      description: "Flight booking, airport transfers, and accommodation.",
    },
    {
      icon: FaShieldAlt,
      title: "Post-Landing Support",
      description: "Assistance after arrival to settle into your new role.",
    }
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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex-1"
          >
            {/* Section Header */}
            <div className="mb-8">
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

            {/* Services List - Clean & Simple */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : {}}
              className="space-y-4"
            >
              {services.map((service, index) => (
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

          {/* Right Side - Large Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <img
              src={serviceImage}
              alt="Best Recruitment Service"
              className="w-full max-w-md md:max-w-lg lg:max-w-xl h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;