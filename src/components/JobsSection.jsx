import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaBriefcase, FaClock, FaFilter, FaHome, FaBus, FaFire } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

// Import job images (adjust paths as needed)
import factoryHelperImg from "../assets/factory_helper.svg";
import productionForemanImg from "../assets/production_foreman.svg";
import furnitureCarpenterImg from "../assets/furniture_carpenter.svg";
import migWelderImg from "../assets/mig_welder.svg";
import painterImg from "../assets/painter.svg";
import machineOperatorImg from "../assets/machine_operator.svg";

const JobsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);

  const jobs = [
    {
      id: 1,
      title: "Factory Helper",
      location: "Dubai, UAE",
      experience: "0-2 Years",
      type: "Full Time",
      category: "Industrial",
      image: factoryHelperImg,
      urgent: true,
      accommodation: "Company provided accommodation + transportation",
    },
    {
      id: 2,
      title: "Production Foreman",
      location: "Abu Dhabi, UAE",
      experience: "5-8 Years",
      type: "Full Time",
      category: "Supervisory",
      image: productionForemanImg,
      urgent: false,
      accommodation: "Company provided accommodation + transportation",
    },
    {
      id: 3,
      title: "Furniture Carpenter",
      location: "Sharjah, UAE",
      experience: "3-6 Years",
      type: "Full Time",
      category: "Skilled Trade",
      image: furnitureCarpenterImg,
      urgent: true,
      accommodation: "Company provided accommodation + transportation",
    },
    {
      id: 4,
      title: "MIG Welder",
      location: "Ras Al Khaimah, UAE",
      experience: "4-7 Years",
      type: "Full Time",
      category: "Skilled Trade",
      image: migWelderImg,
      urgent: false,
      accommodation: "Company provided accommodation + transportation",
    },
    {
      id: 5,
      title: "Painter",
      location: "Dubai, UAE",
      experience: "2-4 Years",
      type: "Full Time",
      category: "Skilled Trade",
      image: painterImg,
      urgent: true,
      accommodation: "Company provided accommodation + transportation",
    },
    {
      id: 6,
      title: "Machine Operator",
      location: "Ajman, UAE",
      experience: "3-5 Years",
      type: "Full Time",
      category: "Industrial",
      image: machineOperatorImg,
      urgent: false,
      accommodation: "Company provided accommodation + transportation",
    },
  ];

  const categories = ["All", "Industrial", "Supervisory", "Skilled Trade"];

  const filteredJobs = activeCategory === "All" 
    ? jobs 
    : jobs.filter(job => job.category === activeCategory);

  const whatsappNumber = "+918976663732";

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
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] } 
    },
  };

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-gradient-to-b from-[#1871db]/5 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-12"
        >
          <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Featured</span>{" "}
            <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
              Openings
            </span>
          </h2>
          <p className="font-['DM_Sans'] text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            Explore exciting career opportunities across the Gulf region
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1871db] to-[#1871db]/40 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-8"
        >
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex justify-center mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-[#1871db] text-white px-5 py-2 rounded-full font-['DM_Sans'] text-sm transition-all duration-300"
            >
              <FaFilter />
              {showFilters ? "Hide Filters" : "Show Filters"}
            </button>
          </div>

          {/* Filter Chips */}
          <div className={`${showFilters ? "flex" : "hidden"} lg:flex flex-wrap gap-3 justify-center`}>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full font-['DM_Sans'] text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-[#1871db] text-white shadow-md"
                    : "bg-white text-gray-600 border border-[#1871db]/30 hover:bg-[#1871db]/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Jobs Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : {}}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filteredJobs.map((job) => (
            <motion.div
              key={job.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-[#1871db]/10 transition-all duration-300"
            >
              {/* Job Image */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-[#1871db]/10 to-[#1871db]/5">
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-full object-contain p-6 transition-all duration-500 ease-out group-hover:scale-110"
                />
                {/* Job Type Badge */}
                <span className="absolute top-3 right-3 bg-[#1871db] text-white text-xs px-3 py-1 rounded-full font-['DM_Sans'] font-medium shadow-sm">
                  {job.type}
                </span>
                {/* Urgent Badge */}
                {job.urgent && (
                  <span className="absolute top-3 left-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full font-['DM_Sans'] font-medium shadow-sm flex items-center gap-1">
                    <FaFire className="text-xs" />
                    Urgent
                  </span>
                )}
              </div>

              {/* Job Content */}
              <div className="p-5">
                <h3 className="font-['Sora'] text-xl font-bold text-gray-800 mb-3 transition-colors duration-300 group-hover:text-[#1871db]">
                  {job.title}
                </h3>
                
                {/* Job Details */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2 text-gray-600 text-sm">
                    <FaMapMarkerAlt className="text-[#1871db] text-xs flex-shrink-0 mt-0.5" />
                    <span className="font-['DM_Sans']">{job.location}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600 text-sm">
                    <FaBriefcase className="text-[#1871db] text-xs flex-shrink-0 mt-0.5" />
                    <span className="font-['DM_Sans']">{job.experience}</span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-600 text-sm">
                    <FaHome className="text-[#1871db] text-xs flex-shrink-0 mt-0.5" />
                    <span className="font-['DM_Sans'] text-xs leading-relaxed">
                      Accommodation & Transportation: <span className="font-semibold text-green-600">Provided by Company</span>
                    </span>
                  </div>
                </div>

                {/* Share Resume Button */}
                <a
                  href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(job.title)}%20position%20in%20${encodeURIComponent(job.location)}.%20Here%27s%20my%20resume.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#1871db] to-[#1460b8] text-white px-4 py-2.5 rounded-xl font-['DM_Sans'] font-semibold text-sm transition-all duration-300 hover:shadow-lg hover:from-[#1460b8] hover:to-[#0f52a0]"
                >
                  <FaWhatsapp className="text-base" />
                  Share Your Resume
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Show More Jobs Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mt-12"
        >
          <a
            href="/jobs"
            className="inline-flex items-center gap-2 bg-white text-[#1871db] border-2 border-[#1871db] px-8 py-3 rounded-full font-['DM_Sans'] font-semibold transition-all duration-300 hover:bg-[#1871db] hover:text-white hover:shadow-lg group"
          >
            Show More Jobs
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default JobsSection;