import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaWhatsapp, FaMapMarkerAlt, FaBriefcase, FaClock, FaFilter, FaHome, FaFire, FaTimes, FaBuilding, FaDollarSign } from "react-icons/fa";
import { HiArrowRight } from "react-icons/hi";

// Import job images
import factoryHelperImg from "../assets/factory_helper.svg";
import productionForemanImg from "../assets/production_foreman.svg";
import furnitureCarpenterImg from "../assets/furniture_carpenter.svg";
import migWelderImg from "../assets/mig_welder.svg";
import painterImg from "../assets/painter.svg";
import machineOperatorImg from "../assets/machine_operator.svg";
import electricianImg from "../assets/electrician.svg";
import welderImg from "../assets/security.svg";
import driverImg from "../assets/busbar.svg";
import supervisorImg from "../assets/pipe_fitter.svg";

const JobsList = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeCategory, setActiveCategory] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const jobs = [
    {
      id: 1,
      title: "Factory Helper",
      location: "Dubai, UAE",
      experience: "0-2 Years",
      type: "Full Time",
      salary: "AED 1,500 - 2,000",
      category: "Industrial",
      image: factoryHelperImg,
      urgent: true,
      accommodation: true,
      description: "Looking for hardworking factory helpers for a leading manufacturing company in Dubai.",
      requirements: ["Physically fit", "Basic English", "Team player"],
    },
    {
      id: 2,
      title: "Production Foreman",
      location: "Abu Dhabi, UAE",
      experience: "5-8 Years",
      type: "Full Time",
      salary: "AED 4,000 - 6,000",
      category: "Supervisory",
      image: productionForemanImg,
      urgent: false,
      accommodation: true,
      description: "Experienced production foreman needed for a large-scale manufacturing facility.",
      requirements: ["Leadership skills", "Production planning", "Quality control experience"],
    },
    {
      id: 3,
      title: "Furniture Carpenter",
      location: "Sharjah, UAE",
      experience: "3-6 Years",
      type: "Full Time",
      salary: "AED 2,500 - 3,500",
      category: "Skilled Trade",
      image: furnitureCarpenterImg,
      urgent: true,
      accommodation: true,
      description: "Skilled furniture carpenters for a leading furniture manufacturing company.",
      requirements: ["Carpentry skills", "Blueprint reading", "Tool handling"],
    },
    {
      id: 4,
      title: "MIG Welder",
      location: "Ras Al Khaimah, UAE",
      experience: "4-7 Years",
      type: "Full Time",
      salary: "AED 2,000 - 3,000",
      category: "Skilled Trade",
      image: migWelderImg,
      urgent: false,
      accommodation: true,
      description: "Experienced MIG welders for construction and fabrication projects.",
      requirements: ["MIG welding certification", "Safety knowledge", "Team work"],
    },
    {
      id: 5,
      title: "Painter",
      location: "Dubai, UAE",
      experience: "2-4 Years",
      type: "Full Time",
      salary: "AED 1,800 - 2,500",
      category: "Skilled Trade",
      image: painterImg,
      urgent: true,
      accommodation: true,
      description: "Professional painters for residential and commercial projects.",
      requirements: ["Painting experience", "Color mixing", "Surface preparation"],
    },
    {
      id: 6,
      title: "Machine Operator",
      location: "Ajman, UAE",
      experience: "3-5 Years",
      type: "Full Time",
      salary: "AED 2,200 - 3,000",
      category: "Industrial",
      image: machineOperatorImg,
      urgent: false,
      accommodation: true,
      description: "Machine operators for automated manufacturing lines.",
      requirements: ["Machine operation", "Basic maintenance", "Safety compliance"],
    },
    {
      id: 7,
      title: "Electrician",
      location: "Dubai, UAE",
      experience: "3-6 Years",
      type: "Full Time",
      salary: "AED 2,000 - 3,200",
      category: "Skilled Trade",
      image: electricianImg,
      urgent: true,
      accommodation: true,
      description: "Licensed electricians for commercial and industrial projects.",
      requirements: ["Electrical license", "Wiring experience", "Troubleshooting"],
    },
    {
      id: 8,
      title: "Heavy Driver",
      location: "Sharjah, UAE",
      experience: "3-5 Years",
      type: "Full Time",
      salary: "AED 2,500 - 3,500",
      category: "Industrial",
      image: driverImg,
      urgent: true,
      accommodation: true,
      description: "Heavy vehicle drivers with valid UAE license for logistics company.",
      requirements: ["Valid heavy license", "Route planning", "Safety record"],
    },
    {
      id: 9,
      title: "Site Supervisor",
      location: "Abu Dhabi, UAE",
      experience: "5-8 Years",
      type: "Full Time",
      salary: "AED 5,000 - 7,000",
      category: "Supervisory",
      image: supervisorImg,
      urgent: false,
      accommodation: true,
      description: "Construction site supervisor for large-scale infrastructure project.",
      requirements: ["Supervisory experience", "Safety certification", "Team management"],
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
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } 
    },
  };

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-[#1871db]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="mb-10"
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

        {/* Results Count */}
        <div className="mb-6 text-right">
          <p className="font-['DM_Sans'] text-sm text-gray-500">
            Showing <span className="font-semibold text-[#1871db]">{filteredJobs.length}</span> jobs
          </p>
        </div>

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
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-[#1871db]/10 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedJob(job)}
            >
              {/* Job Image */}
              <div className="relative h-44 overflow-hidden bg-gradient-to-br from-[#1871db]/10 to-[#1871db]/5">
                <img
                  src={job.image}
                  alt={job.title}
                  className="w-full h-full object-contain p-5 transition-all duration-500 ease-out group-hover:scale-110"
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
                <h3 className="font-['Sora'] text-lg font-bold text-gray-800 mb-2 transition-colors duration-300 group-hover:text-[#1871db]">
                  {job.title}
                </h3>
                
                {/* Job Details */}
                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaMapMarkerAlt className="text-[#1871db] text-xs flex-shrink-0" />
                    <span className="font-['DM_Sans']">{job.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaBriefcase className="text-[#1871db] text-xs flex-shrink-0" />
                    <span className="font-['DM_Sans']">{job.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <FaDollarSign className="text-[#1871db] text-xs flex-shrink-0" />
                    <span className="font-['DM_Sans']">{job.salary}</span>
                  </div>
                  {job.accommodation && (
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                      <FaHome className="text-[#1871db] text-xs flex-shrink-0" />
                      <span className="font-['DM_Sans'] text-xs">
                        Accommodation: <span className="font-semibold text-green-600">Provided</span>
                      </span>
                    </div>
                  )}
                </div>

                {/* View Details Button */}
                <button className="flex items-center justify-center gap-2 w-full bg-gray-100 text-[#1871db] px-4 py-2 rounded-xl font-['DM_Sans'] font-semibold text-sm hover:bg-[#1871db]/10 transition-all duration-300 group/btn">
                  View Details
                  <HiArrowRight className="text-sm transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mt-12"
        >
          <button className="inline-flex items-center gap-2 bg-white text-[#1871db] border-2 border-[#1871db] px-8 py-3 rounded-full font-['DM_Sans'] font-semibold transition-all duration-300 hover:bg-[#1871db] hover:text-white hover:shadow-lg group">
            Load More Jobs
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </motion.div>
      </div>

      {/* Job Details Modal */}
      {selectedJob && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4" onClick={() => setSelectedJob(null)}>
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center">
              <h3 className="font-['Sora'] text-xl font-bold text-gray-800">{selectedJob.title}</h3>
              <button onClick={() => setSelectedJob(null)} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition-colors">
                <FaTimes />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-6 mb-6">
                <img src={selectedJob.image} alt={selectedJob.title} className="w-24 h-24 object-contain" />
                <div>
                  <div className="flex gap-2 mb-2">
                    <span className="bg-[#1871db] text-white text-xs px-3 py-1 rounded-full">{selectedJob.type}</span>
                    {selectedJob.urgent && <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1"><FaFire /> Urgent</span>}
                  </div>
                  <p className="font-['DM_Sans'] text-gray-600 text-sm">{selectedJob.location}</p>
                  <p className="font-['DM_Sans'] text-gray-600 text-sm">{selectedJob.salary}</p>
                </div>
              </div>

              <div className="mb-6">
                <h4 className="font-['Sora'] font-semibold text-gray-800 mb-2">Job Description</h4>
                <p className="font-['DM_Sans'] text-gray-600 text-sm">{selectedJob.description}</p>
              </div>

              <div className="mb-6">
                <h4 className="font-['Sora'] font-semibold text-gray-800 mb-2">Requirements</h4>
                <ul className="list-disc list-inside space-y-1">
                  {selectedJob.requirements?.map((req, idx) => (
                    <li key={idx} className="font-['DM_Sans'] text-gray-600 text-sm">{req}</li>
                  ))}
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="font-['Sora'] font-semibold text-gray-800 mb-2">Benefits</h4>
                <ul className="list-disc list-inside space-y-1">
                  <li className="font-['DM_Sans'] text-gray-600 text-sm">Accommodation provided by company</li>
                  <li className="font-['DM_Sans'] text-gray-600 text-sm">Transportation provided</li>
                  <li className="font-['DM_Sans'] text-gray-600 text-sm">Medical insurance</li>
                  <li className="font-['DM_Sans'] text-gray-600 text-sm">Annual leave as per labor law</li>
                </ul>
              </div>

              <a
                href={`https://wa.me/${whatsappNumber}?text=Hi%2C%20I%27m%20interested%20in%20the%20${encodeURIComponent(selectedJob.title)}%20position.%20Here%27s%20my%20resume.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-[#1871db] to-[#1460b8] text-white px-6 py-3 rounded-xl font-['DM_Sans'] font-semibold hover:shadow-lg transition-all duration-300"
              >
                <FaWhatsapp className="text-lg" />
                Apply Now via WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default JobsList;