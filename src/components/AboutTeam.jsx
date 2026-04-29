import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaLinkedin, FaEnvelope, FaQuoteLeft, FaUsers, FaTrophy, FaGlobe, FaHandsHelping } from "react-icons/fa";

const AboutTeam = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const values = [
    { icon: FaTrophy, title: "Excellence", desc: "We strive for the highest quality in every placement we make." },
    { icon: FaHandsHelping, title: "Integrity", desc: "Honest, transparent, and ethical in all our dealings." },
    { icon: FaUsers, title: "Collaboration", desc: "Working together with candidates and employers for mutual success." },
    { icon: FaGlobe, title: "Global Mindset", desc: "Understanding diverse cultures and market needs worldwide." },
  ];

  const certifications = [
    "MSME Registered",
    "Government Recognized",
    "ISO Certified",
    "Member of NAPS",
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-gradient-to-b from-[#1871db]/5 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Leadership Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <FaQuoteLeft className="text-[#1871db]/20 text-6xl mx-auto mb-4" />
          <p className="font-['DM_Sans'] text-xl md:text-2xl text-gray-700 italic max-w-3xl mx-auto leading-relaxed">
            Behind every successful placement is a team committed to excellence, 
            transparency, and genuine care for people's careers.
          </p>
          <div className="mt-4">
            <div className="w-12 h-0.5 bg-[#1871db] mx-auto rounded-full"></div>
            <p className="font-['Sora'] font-semibold text-gray-800 mt-2">- ALMOON HR Leadership Team</p>
          </div>
        </motion.div>

        {/* Our Values */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 bg-[#1871db]/10 rounded-full text-sm font-['DM_Sans'] text-[#1871db] font-semibold mb-4">
            What Drives Us
          </span>
          <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">Core Values</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1871db] to-[#1871db]/40 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {values.map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="bg-white rounded-2xl p-6 text-center shadow-md border border-[#1871db]/20 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-gradient-to-r from-[#1871db] to-[#1460b8] flex items-center justify-center mx-auto mb-4">
                <value.icon className="text-white text-2xl" />
              </div>
              <h3 className="font-['Sora'] text-lg font-bold text-gray-800 mb-2">{value.title}</h3>
              <p className="font-['DM_Sans'] text-gray-600 text-sm">{value.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications & Recognition */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-gradient-to-br from-white to-[#1871db]/5 rounded-2xl p-8 border border-[#1871db]/20"
          >
            <h3 className="font-['Sora'] text-2xl font-bold text-gray-800 mb-6 text-center">
              Certifications & Recognition
            </h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {certifications.map((cert, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-[#1871db]/10 text-[#1871db] rounded-full text-sm font-['DM_Sans'] font-medium"
                >
                  {cert}
                </span>
              ))}
            </div>
            <p className="font-['DM_Sans'] text-gray-600 text-sm text-center mt-6">
              Our government registration and certifications reflect our commitment to 
              legal compliance, ethical practices, and professional excellence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-white to-[#1871db]/5 rounded-2xl p-8 border border-[#1871db]/20"
          >
            <h3 className="font-['Sora'] text-2xl font-bold text-gray-800 mb-6 text-center">
              Our Commitment
            </h3>
            <ul className="space-y-3">
              {[
                "Zero tolerance for fraudulent job promises",
                "Complete transparency in fees and processes",
                "Regular follow-up post-placement for 3 months",
                "Free career counseling and guidance",
                "Assistance with family visa and accommodation",
                "24/7 emergency support for candidates abroad",
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center mt-0.5">
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

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/918976663732"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1871db] to-[#1460b8] text-white px-8 py-4 rounded-full font-['DM_Sans'] font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Become Part of Our Success Story
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutTeam;