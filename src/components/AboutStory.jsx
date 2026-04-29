import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaBullseye, FaEye, FaHeart, FaShieldAlt, FaFileAlt, FaPlane, FaHandshake, FaChartLine } from "react-icons/fa";

const AboutStory = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const milestones = [
    { year: "2014", title: "The Beginning", desc: "ALMOON HR Consultancy was founded with a vision to bridge talent gap between India and Gulf countries.", icon: FaHeart },
    { year: "2016", title: "First 1000 Placements", desc: "Reached the milestone of 1000 successful placements across UAE and Qatar.", icon: FaChartLine },
    { year: "2018", title: "Global Expansion", desc: "Expanded operations to Saudi Arabia, Kuwait, Oman, and Bahrain.", icon: FaPlane },
    { year: "2020", title: "Digital Transformation", desc: "Launched online recruitment platform for seamless candidate experience.", icon: FaHandshake },
    { year: "2022", title: "MSME Recognition", desc: "Received government recognition and MSME registration.", icon: FaShieldAlt },
    { year: "2024", title: "10+ Years of Excellence", desc: "Celebrated a decade of transforming careers and building futures.", icon: FaChartLine },
  ];

  const missionPoints = [
    { icon: FaBullseye, title: "Our Mission", text: "To empower skilled professionals with genuine international career opportunities through transparent and ethical recruitment practices." },
    { icon: FaEye, title: "Our Vision", text: "To become the most trusted recruitment bridge between India and global markets, recognized for integrity and excellence." },
    { icon: FaShieldAlt, title: "Our Promise", text: "100% transparency, verified employers, end-to-end support, and no hidden costs — guaranteed." },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Our Story Section */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-[#1871db]/10 rounded-full text-sm font-['DM_Sans'] text-[#1871db] font-semibold mb-4">
              Our Journey
            </span>
            <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              The <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">ALMOON Story</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1871db] to-[#1871db]/40 mx-auto rounded-full"></div>
          </motion.div>
        </div>

        {/* Main Description - Left Aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="font-['Sora'] text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Who We Are
            </h3>
            <p className="font-['DM_Sans'] text-gray-600 leading-relaxed mb-4">
              ALMOON HR Consultancy is more than just a recruitment agency — we are a career catalyst. 
              Headquartered in Mumbai with a strong network across the Gulf region, we have successfully 
              placed thousands of skilled professionals in leading companies across UAE, Qatar, Saudi Arabia, 
              Kuwait, Oman, and Bahrain.
            </p>
            <p className="font-['DM_Sans'] text-gray-600 leading-relaxed mb-4">
              Our deep understanding of Gulf labor markets, combined with our rigorous screening process, 
              ensures that we match the right talent with the right opportunities. We don't just fill positions; 
              we build careers and foster long-term partnerships.
            </p>
            <div className="bg-[#1871db]/5 rounded-xl p-4 border-l-4 border-[#1871db] mt-4">
              <p className="font-['DM_Sans'] text-gray-700 italic text-sm">
                "We believe that everyone deserves a chance to grow. Our mission is to remove barriers 
                and create pathways for ambitious professionals to succeed globally."
              </p>
              <p className="font-['Sora'] font-semibold text-[#1871db] text-sm mt-2">- Founder, ALMOON HR</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="font-['Sora'] text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-3">
              {[
                "Government registered & MSME certified",
                "100% verified employers and job opportunities",
                "Complete documentation and visa assistance",
                "Pre-departure orientation and training",
                "Post-landing support in destination country",
                "No hidden fees — complete transparency",
                "Dedicated relationship manager for each candidate",
                "Fast processing and timely updates",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5 flex-shrink-0">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-['DM_Sans'] text-gray-600 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Mission, Vision, Promise Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {missionPoints.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-gradient-to-br from-white to-[#1871db]/5 rounded-2xl p-6 text-center shadow-md border border-[#1871db]/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-[#1871db] to-[#1460b8] flex items-center justify-center mx-auto mb-4 shadow-md">
                <point.icon className="text-white text-2xl" />
              </div>
              <h3 className="font-['Sora'] text-xl font-bold text-gray-800 mb-3">{point.title}</h3>
              <p className="font-['DM_Sans'] text-gray-600 text-sm leading-relaxed">{point.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div className="text-center mb-12">
          <h3 className="font-['Sora'] text-2xl md:text-3xl font-bold text-gray-800 mb-4">
            Our <span className="text-[#1871db]">Milestones</span>
          </h3>
          <div className="w-16 h-0.5 bg-[#1871db] mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#1871db] to-[#1871db]/20 transform -translate-x-1/2"></div>
          
          <div className="space-y-8">
            {milestones.map((milestone, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + idx * 0.05 }}
                className={`relative flex flex-col md:flex-row gap-6 ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                <div className="md:w-1/2"></div>
                <div className="absolute left-6 md:left-1/2 transform md:-translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-r from-[#1871db] to-[#1460b8] flex items-center justify-center shadow-lg z-10">
                  <milestone.icon className="text-white text-sm" />
                </div>
                <div className={`md:w-1/2 pl-16 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white rounded-xl p-5 shadow-md border border-[#1871db]/20 hover:shadow-lg transition-all duration-300">
                    <span className="text-[#1871db] font-['Sora'] font-bold text-lg">{milestone.year}</span>
                    <h4 className="font-['Sora'] font-semibold text-gray-800 mt-1 mb-2">{milestone.title}</h4>
                    <p className="font-['DM_Sans'] text-gray-600 text-sm">{milestone.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;