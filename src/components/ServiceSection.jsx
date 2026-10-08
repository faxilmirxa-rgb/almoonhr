import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  FaSearch,
  FaUserCheck,
  FaClipboardCheck,
  FaCalendarCheck,
  FaFileAlt,
  FaPlane,
} from "react-icons/fa";

// 🔁 Replace this with your professional GCC manpower / workforce image
import serviceImage from "../assets/right.svg";

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    {
      icon: FaSearch,
      title: "Manpower Sourcing",
      description: "Skilled, semi-skilled, and unskilled candidates from across India.",
    },
    {
      icon: FaUserCheck,
      title: "Candidate Screening",
      description: "Pre-screened candidates matched to your specific requirements.",
    },
    {
      icon: FaClipboardCheck,
      title: "Trade & Skill Assessment",
      description: "Relevant experience and skills evaluated before final selection.",
    },
    {
      icon: FaCalendarCheck,
      title: "Interview Coordination",
      description: "Efficient scheduling and candidate coordination for interviews.",
    },
    {
      icon: FaFileAlt,
      title: "Documentation Support",
      description: "Assistance with recruitment documentation and mobilization.",
    },
    {
      icon: FaPlane,
      title: "Deployment Support",
      description: "Coordinated mobilization to help your workforce arrive ready.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -24 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* Flex Container - Left Content & Right Image */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex-1"
          >
            {/* Section Header */}
            <div className="mb-10">
              <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                <span className="text-gray-800">End-to-End</span>{" "}
                <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
                  Manpower Recruitment
                </span>
              </h2>
              <p className="font-['DM_Sans'] text-gray-600 text-base md:text-lg max-w-xl">
                We manage the recruitment journey from sourcing the right candidates to
                supporting successful deployment across the Gulf.
              </p>
            </div>

            {/* Services List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : {}}
              className="space-y-3"
            >
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 6, y: -2 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative flex items-start gap-4 p-3 rounded-xl cursor-default overflow-hidden"
                >
                  {/* Soft background glow on hover */}
                  <span className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-r from-[#1871db]/0 via-[#1871db]/5 to-[#1871db]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  {/* Left accent bar */}
                  <span className="absolute left-0 top-1/2 -translate-y-1/2 h-0 w-[3px] rounded-full bg-[#1871db] transition-all duration-400 group-hover:h-3/4" />

                  {/* Icon */}
                  <div className="relative bg-gradient-to-br from-[#1871db] to-[#1460b8] w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm transition-all duration-400 group-hover:scale-110 group-hover:shadow-[0_6px_20px_rgba(24,113,219,0.35)] group-hover:rotate-[-3deg]">
                    <service.icon className="text-white text-lg transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  {/* Text */}
                  <div className="relative">
                    <h3 className="font-['Sora'] font-semibold text-gray-800 text-base transition-colors duration-300 group-hover:text-[#1871db]">
                      {service.title}
                    </h3>
                    <p className="font-['DM_Sans'] text-gray-500 text-sm transition-colors duration-300 group-hover:text-gray-700">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Image (no shadow, no box, larger) */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.95 }}
            animate={isInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            className="flex-1 flex justify-center lg:justify-end"
          >
            <img
              src={serviceImage}
              alt="Manpower recruitment and global workforce deployment"
              className="w-full max-w-lg md:max-w-xl lg:max-w-2xl h-auto object-contain"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;