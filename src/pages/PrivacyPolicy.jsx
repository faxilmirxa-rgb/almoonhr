import { motion } from "framer-motion";
import { FaShieldAlt, FaLock, FaUserSecret, FaDatabase, FaCookie, FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa";

const PrivacyPolicy = () => {
  const sections = [
    {
      icon: FaShieldAlt,
      title: "Information We Collect",
      content: "We collect personal information that you voluntarily provide to us when you express an interest in obtaining information about us or our products and services. This includes:",
      list: [
        "Personal identification information (Name, email address, phone number, etc.)",
        "Professional information (Resume, work experience, education qualifications)",
        "Technical information (IP address, browser type, device information)",
        "Communication preferences and interaction history"
      ]
    },
    {
      icon: FaLock,
      title: "How We Use Your Information",
      content: "We use the information we collect or receive to:",
      list: [
        "Process and evaluate your job applications",
        "Match your profile with suitable job opportunities",
        "Communicate with employers on your behalf",
        "Send you job alerts and career-related updates",
        "Improve our recruitment services and user experience",
        "Comply with legal obligations and regulatory requirements"
      ]
    },
    {
      icon: FaUserSecret,
      title: "Information Sharing & Disclosure",
      content: "We may share your information in the following situations:",
      list: [
        "With potential employers for job placement purposes",
        "With third-party service providers who assist our operations",
        "To comply with legal obligations or respond to lawful requests",
        "To protect our rights, privacy, safety, or property",
        "With your consent or at your direction"
      ]
    },
    {
      icon: FaDatabase,
      title: "Data Security",
      content: "We implement appropriate technical and organizational security measures to protect your personal information. This includes:",
      list: [
        "Secure servers and encrypted data transmission",
        "Regular security assessments and updates",
        "Restricted access to personal information",
        "Employee training on data protection practices",
        "Secure document storage and disposal procedures"
      ]
    },
    {
      icon: FaCookie,
      title: "Cookies & Tracking Technologies",
      content: "We use cookies and similar tracking technologies to enhance your browsing experience. These technologies help us:",
      list: [
        "Remember your preferences and settings",
        "Understand how you use our website",
        "Improve our services based on usage patterns",
        "Provide personalized content and recommendations",
        "You can control cookie settings through your browser preferences"
      ]
    },
    {
      icon: FaGlobe,
      title: "International Data Transfers",
      content: "As a recruitment consultancy operating globally, we may transfer your information to countries outside your home country. This includes:",
      list: [
        "Sharing information with employers in Gulf countries (UAE, Qatar, Saudi Arabia, Kuwait, Oman, Bahrain)",
        "Transferring data to service providers in different jurisdictions",
        "Ensuring adequate protection measures are in place for international transfers",
        "Complying with applicable data protection laws for cross-border data transfers"
      ]
    }
  ];

  const yourRights = [
    "Access your personal information",
    "Correct inaccurate or incomplete information",
    "Request deletion of your personal information",
    "Object to or restrict certain processing activities",
    "Request data portability",
    "Withdraw consent at any time",
    "Lodge a complaint with supervisory authority"
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
                <FaShieldAlt className="text-3xl" />
              </div>
            </div>
            <h1 className="font-['Sora'] text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Privacy <span className="text-yellow-300">Policy</span>
            </h1>
            <p className="font-['DM_Sans'] text-lg md:text-xl max-w-2xl mx-auto">
              Your privacy matters to us. Learn how we collect, use, and protect your information.
            </p>
            <div className="mt-4 text-sm text-white/70">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-[#1871db]/5 to-transparent rounded-2xl p-6 border-l-4 border-[#1871db] mb-8"
          >
            <p className="font-['DM_Sans'] text-gray-700 leading-relaxed">
              ALMON HR Consultancy ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you use our services, website, or interact with us. Please read this policy carefully 
              to understand our practices regarding your personal data.
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
              className="mb-10 bg-white rounded-2xl p-6 shadow-md border border-[#1871db]/20 hover:shadow-lg transition-all duration-300"
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

          {/* Your Rights Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-gradient-to-r from-[#1871db]/20 to-[#1871db]/5 rounded-2xl p-6 border border-[#1871db]/20 mb-8"
          >
            <div className="flex items-center gap-3 mb-4">
              <FaUserSecret className="text-[#1871db] text-2xl" />
              <h2 className="font-['Sora'] text-xl md:text-2xl font-bold text-gray-800">
                Your Rights & Choices
              </h2>
            </div>
            <p className="font-['DM_Sans'] text-gray-600 text-sm mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {yourRights.map((right, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="font-['DM_Sans'] text-gray-600 text-sm">{right}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-white rounded-2xl p-6 shadow-md border border-[#1871db]/20 text-center"
          >
            <h2 className="font-['Sora'] text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Contact Us About Privacy
            </h2>
            <p className="font-['DM_Sans'] text-gray-600 text-sm mb-4">
              If you have questions about this Privacy Policy or wish to exercise your rights, please contact us:
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

export default PrivacyPolicy;