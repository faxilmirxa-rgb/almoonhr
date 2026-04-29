import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { 
  FaSearch, 
  FaFileAlt, 
  FaHandshake, 
  FaPlane, 
  FaPassport, 
  FaStethoscope,
  FaClock,
  FaCheckCircle,
  FaRegCalendarAlt,
  FaRegFileAlt,
  FaRegIdCard,
  FaArrowRight
} from "react-icons/fa";

const ProcessSteps = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [activeStep, setActiveStep] = useState(0);
  const [isUserInteracting, setIsUserInteracting] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState(null);
  const [animationPaused, setAnimationPaused] = useState(false);

  const steps = [
    {
      id: 0,
      title: "Inquiry & Registration",
      shortTitle: "Inquiry",
      icon: FaSearch,
      duration: "1-2 Days",
      description: "Submit your inquiry with basic details. Our team contacts you to understand your skills, experience, and career preferences.",
      longDescription: "The journey begins when you reach out to us via WhatsApp, email, or phone. Our recruitment experts schedule a consultation to understand your professional background, career aspirations, and preferred destinations. We assess your qualifications and match them with available opportunities in our database.",
      documents: ["Resume/CV", "Basic personal details", "Preferred job role", "Education certificates"],
      color: "from-blue-500 to-[#1871db]"
    },
    {
      id: 1,
      title: "Documentation Collection",
      shortTitle: "Documents",
      icon: FaFileAlt,
      duration: "5-7 Days",
      description: "Our team guides you to collect and prepare all necessary documents for visa processing and job application.",
      longDescription: "Our documentation specialists provide a comprehensive checklist and guide you through each requirement. We help with certificate attestation, passport verification, and ensure all documents meet Gulf country specifications. We also assist with document translation if needed.",
      documents: ["Passport (minimum 2 years validity)", "Educational certificates (attested)", "Experience letters", "Passport size photos (8 copies)", "Birth certificate", "Marriage certificate (if applicable)"],
      color: "from-[#1871db] to-blue-600"
    },
    {
      id: 2,
      title: "Medical & Background Check",
      shortTitle: "Medical",
      icon: FaStethoscope,
      duration: "3-5 Days",
      description: "Complete required medical examinations and background verification as per Gulf country requirements.",
      longDescription: "We coordinate with approved medical centers for your health checkup. The medical examination includes blood tests, chest X-ray, physical examination, and vision test. Simultaneously, we process your police clearance certificate and background verification.",
      documents: ["Medical fitness certificate", "Police clearance certificate", "Blood test reports", "Chest X-ray report", "Vaccination records", "HIV test report"],
      color: "from-blue-600 to-[#1871db]"
    },
    {
      id: 3,
      title: "Employer Interview",
      shortTitle: "Interview",
      icon: FaHandshake,
      duration: "7-10 Days",
      description: "We schedule interviews with verified employers. Our team provides interview preparation and guidance.",
      longDescription: "We shortlist suitable employers based on your profile and schedule virtual or in-person interviews. Our team provides interview coaching, helps you understand company culture, and negotiates salary and benefits on your behalf. We ensure you get the best possible offer.",
      documents: ["Updated CV", "Portfolio (if applicable)", "Reference contacts", "Certification copies", "Interview preparation materials"],
      color: "from-[#1871db] to-blue-500"
    },
    {
      id: 4,
      title: "Visa Processing",
      shortTitle: "Visa",
      icon: FaPassport,
      duration: "10-15 Days",
      description: "Complete visa application, attestation, and processing through proper government channels.",
      longDescription: "Once you accept the job offer, we begin the visa application process. This includes work permit application, employer sponsorship, visa stamping, and medical insurance. We track your application status and keep you updated at every stage.",
      documents: ["Employment visa application", "Attested documents", "Employer sponsorship letter", "Insurance papers", "Work permit", "Visa fee payment receipt"],
      color: "from-blue-500 to-[#1871db]"
    },
    {
      id: 5,
      title: "Departure & Landing",
      shortTitle: "Departure",
      icon: FaPlane,
      duration: "2-3 Days",
      description: "Flight booking, exit permit, airport transfer, and post-landing support in the destination country.",
      longDescription: "We arrange your flight tickets, coordinate airport pickup, and arrange temporary accommodation. Our post-landing support team helps you with resident visa processing, bank account opening, mobile connection, and orientation about local laws and culture.",
      documents: ["Flight ticket", "Exit permit", "Accommodation details", "Emergency contacts", "Company contact details", "Local guide information"],
      color: "from-[#1871db] to-blue-600"
    }
  ];

  const totalTime = "4-6 Weeks";
  
  const requiredDocs = [
    { icon: FaPassport, text: "Valid Passport (2+ years)", highlight: true },
    { icon: FaRegIdCard, text: "Educational Certificates", highlight: false },
    { icon: FaRegFileAlt, text: "Experience Letters", highlight: false },
    { icon: FaStethoscope, text: "Medical Certificate", highlight: true },
    { icon: FaRegCalendarAlt, text: "Police Clearance", highlight: false },
    { icon: FaFileAlt, text: "Passport Size Photos", highlight: false },
  ];

  useEffect(() => {
    if (!isInView || isUserInteracting || animationPaused) return;
    
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView, isUserInteracting, animationPaused, steps.length]);

  const handleStepClick = (index) => {
    setIsUserInteracting(true);
    setAnimationPaused(true);
    setActiveStep(index);
    
    if (hoverTimeout) clearTimeout(hoverTimeout);
    
    const timeout = setTimeout(() => {
      setIsUserInteracting(false);
      setAnimationPaused(false);
    }, 10000);
    
    setHoverTimeout(timeout);
  };

  const handleMouseEnter = () => {
    setAnimationPaused(true);
    if (hoverTimeout) clearTimeout(hoverTimeout);
  };

  const handleMouseLeave = () => {
    const timeout = setTimeout(() => {
      setAnimationPaused(false);
      setIsUserInteracting(false);
    }, 2000);
    setHoverTimeout(timeout);
  };

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-gradient-to-b from-white to-[#1871db]/5 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center mb-8"
        >
          <span className="inline-block px-4 py-1 bg-[#1871db]/10 rounded-full text-sm font-['DM_Sans'] text-[#1871db] font-semibold mb-4">
            Step-by-Step Guide
          </span>
          <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gray-800">Our Recruitment</span>{" "}
            <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
              Process
            </span>
          </h2>
          <p className="font-['DM_Sans'] text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
            A transparent, efficient, and supportive journey from application to arrival
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#1871db] to-[#1871db]/40 mx-auto rounded-full mt-4"></div>
        </motion.div>

        {/* Total Time Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.4, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          className="bg-gradient-to-r from-[#1871db] to-[#1460b8] rounded-2xl p-4 mb-12 text-center text-white shadow-lg"
        >
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <FaClock className="text-xl" />
            <span className="font-['DM_Sans'] font-semibold">Total Processing Time:</span>
            <span className="font-['Sora'] text-xl font-bold">{totalTime}</span>
            <span className="font-['DM_Sans'] text-sm opacity-90">(from inquiry to departure)</span>
          </div>
        </motion.div>

        <div 
          className="flex flex-col lg:flex-row gap-10 lg:gap-12"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          
          {/* Left Side - Timeline Steps */}
          <div className="flex-1">
            <div className="relative">
              {/* Vertical Line */}
              <div className="hidden md:block absolute left-6 top-8 bottom-8 w-0.5 bg-[#1871db]/20">
                <motion.div 
                  className="absolute top-0 left-0 w-full bg-[#1871db]"
                  initial={{ height: 0 }}
                  animate={{ height: `${(activeStep / (steps.length - 1)) * 100}%` }}
                  transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                />
              </div>
              
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ x: 5 }}
                  className={`relative flex gap-5 mb-8 cursor-pointer group`}
                  onClick={() => handleStepClick(step.id)}
                >
                  <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center font-['Sora'] font-bold text-white shadow-md transition-all duration-300 bg-gradient-to-br ${step.color} 
                    ${activeStep === step.id ? 'scale-110 ring-4 ring-[#1871db]/30' : 'group-hover:scale-105'}
                    ${activeStep === step.id && !animationPaused ? 'animate-pulse' : ''}`}>
                    {step.id + 1}
                  </div>
                  
                  <div className={`flex-1 pb-6 transition-all duration-300 ${activeStep === step.id ? 'opacity-100' : 'opacity-70 group-hover:opacity-100'}`}>
                    <div className="flex items-center gap-3 flex-wrap mb-1">
                      <h3 className={`font-['Sora'] text-lg font-bold transition-colors duration-300 ${activeStep === step.id ? 'text-[#1871db]' : 'text-gray-800'}`}>
                        {step.title}
                      </h3>
                      <span className="text-xs bg-gray-100 px-2 py-0.5 rounded-full font-['DM_Sans'] text-gray-500">
                        {step.duration}
                      </span>
                    </div>
                    <p className="font-['DM_Sans'] text-gray-600 text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Side - Active Step Details */}
          <div className="flex-1">
            <motion.div 
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-[#1871db]/20 sticky top-24"
            >
              <div className="flex items-center gap-3 mb-5 pb-3 border-b border-gray-100">
                <motion.div 
                  initial={{ scale: 0.8, rotate: -10 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ duration: 0.3 }}
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${steps[activeStep].color} flex items-center justify-center shadow-md`}
                >
                  {(() => {
                    const IconComponent = steps[activeStep].icon;
                    return <IconComponent className="text-white text-xl" />;
                  })()}
                </motion.div>
                <div>
                  <h3 className="font-['Sora'] text-xl font-bold text-gray-800">{steps[activeStep].title}</h3>
                  <span className="font-['DM_Sans'] text-sm text-[#1871db]">{steps[activeStep].duration}</span>
                </div>
              </div>

              <motion.p 
                key={`desc-${activeStep}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="font-['DM_Sans'] text-gray-600 text-sm leading-relaxed mb-5"
              >
                {steps[activeStep].longDescription}
              </motion.p>

              <motion.div 
                key={`docs-${activeStep}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="bg-[#1871db]/5 rounded-xl p-4"
              >
                <h4 className="font-['Sora'] font-semibold text-gray-800 text-sm mb-3 flex items-center gap-2">
                  <FaRegFileAlt className="text-[#1871db]" />
                  Documents Required:
                </h4>
                <ul className="space-y-2">
                  {steps[activeStep].documents.map((doc, idx) => (
                    <motion.li 
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2, delay: 0.3 + (idx * 0.05) }}
                      className="flex items-center gap-2 text-sm font-['DM_Sans'] text-gray-600"
                    >
                      <FaCheckCircle className="text-green-500 text-xs" />
                      {doc}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <div className="flex justify-center gap-2 mt-5">
                {steps.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleStepClick(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeStep === idx 
                        ? "bg-[#1871db] w-6" 
                        : "bg-[#1871db]/30 w-2 hover:bg-[#1871db]/60"
                    }`}
                  />
                ))}
              </div>

              {!animationPaused && isInView && (
                <div className="mt-4 text-center">
                  <div className="inline-flex items-center gap-2 text-xs text-gray-400 font-['DM_Sans']">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Auto-playing • Click any step to pause
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </div>

        {/* Documents Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 bg-white rounded-2xl p-6 shadow-md border border-[#1871db]/20"
        >
          <h3 className="font-['Sora'] text-xl font-bold text-gray-800 mb-4 text-center">
            Key Documents You'll Need
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {requiredDocs.map((doc, idx) => (
              <span
                key={idx}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm font-['DM_Sans'] font-medium cursor-default transition-all duration-300 ${
                  doc.highlight 
                    ? "bg-gradient-to-r from-[#1871db] to-[#1460b8] text-white shadow-md" 
                    : "bg-gray-100 text-gray-700 hover:bg-[#1871db]/10"
                }`}
              >
                {(() => {
                  const IconDoc = doc.icon;
                  return <IconDoc className="text-sm" />;
                })()}
                {doc.text}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSteps;