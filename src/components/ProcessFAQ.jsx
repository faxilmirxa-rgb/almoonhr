import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaPlus, FaMinus, FaClock, FaFileAlt, FaPassport, FaHeart } from "react-icons/fa";

const ProcessFAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "How long does the entire process take?",
      answer: "The complete process from inquiry to departure typically takes 4-6 weeks. However, this can vary based on document availability, employer response time, and visa processing in the destination country.",
      icon: FaClock
    },
    {
      question: "What documents do I need to prepare?",
      answer: "Key documents include: valid passport (2+ years validity), educational certificates (attested), experience letters, medical certificate, police clearance certificate, and passport size photos. Our team provides a detailed checklist upon registration.",
      icon: FaFileAlt
    },
    {
      question: "Do I need to pay any fees upfront?",
      answer: "We believe in complete transparency. There are no hidden fees. The fee structure is clearly explained during the initial consultation. We only charge after successful job placement.",
      icon: FaHeart
    },
    {
      question: "Will you help with visa processing?",
      answer: "Yes, absolutely! We handle the complete visa processing including document attestation, application submission, and follow-up with embassies. We ensure all paperwork meets the destination country's requirements.",
      icon: FaPassport
    },
    {
      question: "What happens after I reach the destination country?",
      answer: "We provide post-landing support including airport pickup, temporary accommodation, assistance with resident visa processing, bank account opening, mobile connection, and workplace orientation.",
      icon: FaHeart
    },
    {
      question: "Is accommodation provided by the employer?",
      answer: "Most employers in the Gulf region provide accommodation or housing allowance. This is clearly mentioned in your offer letter. We ensure this benefit is included in your employment contract.",
      icon: FaHeart
    }
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-[#1871db]/10 rounded-full text-sm font-['DM_Sans'] text-[#1871db] font-semibold mb-4">
              Common Questions
            </span>
            <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              Frequently Asked{" "}
              <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
                Questions
              </span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1871db] to-[#1871db]/40 mx-auto rounded-full mt-4"></div>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-xl border border-[#1871db]/20 overflow-hidden hover:shadow-md transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full flex items-center justify-between p-5 text-left font-['DM_Sans'] font-semibold text-gray-800 hover:bg-[#1871db]/5 transition-colors duration-300"
              >
                <div className="flex items-center gap-3">
                  <faq.icon className="text-[#1871db] text-lg" />
                  <span>{faq.question}</span>
                </div>
                {openIndex === idx ? (
                  <FaMinus className="text-[#1871db] text-sm" />
                ) : (
                  <FaPlus className="text-[#1871db] text-sm" />
                )}
              </button>
              
              {openIndex === idx && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-5 pb-5"
                >
                  <p className="font-['DM_Sans'] text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessFAQ;