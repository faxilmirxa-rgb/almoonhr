import { motion } from "framer-motion";
import { 
  FaFileContract, 
  FaHandshake, 
  FaShieldAlt, 
  FaGavel, 
  FaUserCheck, 
  FaMoneyBillWave,
  FaGlobe,
  FaEnvelope,
  FaPhoneAlt
} from "react-icons/fa";

const TermsConditions = () => {
  const sections = [
    {
      icon: FaFileContract,
      title: "Acceptance of Terms",
      content: "By accessing and using the ALMON HR Consultancy website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services.",
      list: [
        "These terms apply to all users of our website and services",
        "We reserve the right to modify these terms at any time",
        "Continued use of our services constitutes acceptance of changes",
        "It is your responsibility to review these terms periodically"
      ]
    },
    {
      icon: FaHandshake,
      title: "Recruitment Services",
      content: "ALMON HR Consultancy provides recruitment and placement services for candidates seeking employment abroad. Our services include:",
      list: [
        "Job matching and placement assistance",
        "Documentation and visa processing support",
        "Interview coordination and preparation",
        "Pre-departure orientation and training",
        "Post-landing support in destination countries"
      ]
    },
    {
      icon: FaUserCheck,
      title: "Candidate Obligations",
      content: "As a candidate using our services, you agree to:",
      list: [
        "Provide accurate and truthful information in your application",
        "Submit genuine and verifiable documents",
        "Notify us promptly of any changes in your circumstances",
        "Attend scheduled interviews and appointments",
        "Comply with visa and immigration requirements of destination countries",
        "Inform us immediately upon accepting a job offer through other channels"
      ]
    },
    {
      icon: FaMoneyBillWave,
      title: "Fees & Payments",
      content: "Our fee structure is transparent and communicated upfront. Please note:",
      list: [
        "No fees are charged for initial registration and job matching",
        "Service fees apply only after successful job placement",
        "All fees are disclosed in writing before any payment",
        "Fees are non-refundable once services have been rendered",
        "Additional costs (visa fees, medical tests, etc.) are clearly communicated",
        "No hidden charges or surprise fees"
      ]
    },
    {
      icon: FaShieldAlt,
      title: "Employer Verification",
      content: "We strive to verify all employers and job opportunities. However:",
      list: [
        "We verify employer credentials to the best of our ability",
        "Candidates should exercise due diligence before accepting offers",
        "We are not liable for employer actions after placement",
        "Report any concerns about employers to us immediately",
        "We reserve the right to remove fraudulent employers from our network"
      ]
    },
    {
      icon: FaGavel,
      title: "Limitation of Liability",
      content: "To the maximum extent permitted by law, ALMON HR Consultancy shall not be liable for:",
      list: [
        "Any indirect, incidental, or consequential damages",
        "Loss of profits, data, or business opportunities",
        "Delays or failures caused by circumstances beyond our control",
        "Actions of employers or third-party service providers",
        "Visa rejections or immigration-related issues",
        "Any damages exceeding the fees paid for our services"
      ]
    },
    {
      icon: FaGlobe,
      title: "Governing Law",
      content: "These terms shall be governed by and construed in accordance with the laws of India.",
      list: [
        "Any disputes shall be subject to exclusive jurisdiction of Mumbai courts",
        "International users agree to comply with local laws",
        "We make no representation that services are appropriate for all locations",
        "Visa and immigration requirements vary by country"
      ]
    }
  ];

  const prohibitedActivities = [
    "Providing false or misleading information",
    "Submitting fraudulent documents or certificates",
    "Misrepresenting qualifications or experience",
    "Applying for jobs through multiple agencies simultaneously without disclosure",
    "Sharing confidential information without authorization",
    "Harassing or threatening our staff or employer representatives",
    "Attempting to bypass our recruitment process"
  ];

  const disclaimerPoints = [
    "We do not guarantee job placement or specific outcomes",
    "Employment offers are subject to employer approval",
    "Visa issuance is at the discretion of immigration authorities",
    "Job descriptions are provided by employers and may vary",
    "Salaries and benefits are as per employer offers",
    "We are not responsible for employer-employee disputes after placement"
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-[#1871db] to-[#1460b8] py-16 md:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                <FaFileContract className="text-3xl" />
              </div>
            </div>
            <h1 className="font-['Sora'] text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Terms & <span className="text-yellow-300">Conditions</span>
            </h1>
            <p className="font-['DM_Sans'] text-lg md:text-xl max-w-2xl mx-auto">
              Please read these terms carefully before using our recruitment services
            </p>
            <div className="mt-4 text-sm text-white/70">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Introduction */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-[#1871db]/5 to-transparent rounded-2xl p-6 border-l-4 border-[#1871db] mb-8"
          >
            <p className="font-['DM_Sans'] text-gray-700 leading-relaxed">
              Welcome to ALMON HR Consultancy. These Terms and Conditions govern your use of our recruitment services, 
              website, and any communications with us. By registering with us or using our services, you acknowledge 
              that you have read, understood, and agree to be bound by these terms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 px-4 bg-gradient-to-b from-white to-[#1871db]/5">
        <div className="max-w-4xl mx-auto">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="mb-8 bg-white rounded-2xl p-6 shadow-md border border-[#1871db]/20 hover:shadow-lg transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4 pb-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-[#1871db] to-[#1460b8] flex items-center justify-center">
                  <section.icon className="text-white text-lg" />
                </div>
                <h2 className="font-['Sora'] text-xl md:text-2xl font-bold text-gray-800">
                  {section.title}
                </h2>
              </div>
              <p className="font-['DM_Sans'] text-gray-600 text-sm leading-relaxed mb-3">
                {section.content}
              </p>
              <ul className="space-y-2 pl-4">
                {section.list.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1871db] mt-2"></div>
                    <span className="font-['DM_Sans'] text-gray-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          {/* Prohibited Activities */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-r from-red-50 to-transparent rounded-2xl p-6 border-l-4 border-red-500 mb-8"
          >
            <h2 className="font-['Sora'] text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <FaGavel className="text-red-500" />
              Prohibited Activities
            </h2>
            <ul className="space-y-2">
              {prohibitedActivities.map((activity, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-5 h-5 rounded-full bg-red-500 flex items-center justify-center mt-0.5">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-['DM_Sans'] text-gray-600 text-sm">{activity}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-yellow-50 to-transparent rounded-2xl p-6 border-l-4 border-yellow-500 mb-8"
          >
            <h2 className="font-['Sora'] text-xl md:text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <FaShieldAlt className="text-yellow-500" />
              Disclaimer
            </h2>
            <ul className="space-y-2">
              {disclaimerPoints.map((point, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-500 mt-2"></div>
                  <span className="font-['DM_Sans'] text-gray-600 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="bg-white rounded-2xl p-6 shadow-md border border-[#1871db]/20 text-center"
          >
            <h2 className="font-['Sora'] text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="font-['DM_Sans'] text-gray-600 text-sm mb-4">
              If you have any questions about these Terms & Conditions, please contact us:
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="mailto:Info@almoonhr.com" className="inline-flex items-center justify-center gap-2 bg-[#1871db] text-white px-5 py-2 rounded-full font-['DM_Sans'] text-sm hover:bg-[#1460b8] transition-all duration-300">
                <FaEnvelope /> Info@almoonhr.com
              </a>
              <a href="tel:+918976663732" className="inline-flex items-center justify-center gap-2 bg-gray-100 text-gray-700 px-5 py-2 rounded-full font-['DM_Sans'] text-sm hover:bg-gray-200 transition-all duration-300">
                <FaPhoneAlt /> +91 89766 663732
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;