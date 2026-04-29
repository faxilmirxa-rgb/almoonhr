import { motion } from "framer-motion";
import { FaWhatsapp, FaArrowRight } from "react-icons/fa";

const ProcessCTA = () => {
  return (
    <section className="py-16 md:py-20 px-4 bg-gradient-to-r from-[#1871db] to-[#1460b8]">
      <div className="max-w-4xl mx-auto text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="font-['Sora'] text-3xl md:text-4xl font-bold mb-4">
            Ready to Begin Your Journey?
          </h2>
          <p className="font-['DM_Sans'] text-white/90 mb-6 max-w-2xl mx-auto">
            Our team is ready to guide you through every step. Start your application today and take the first step toward your global career.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/918976663732"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-yellow-300 text-[#1871db] px-8 py-3 rounded-full font-['DM_Sans'] font-semibold hover:bg-yellow-400 transition-all duration-300 hover:scale-105"
            >
              <FaWhatsapp className="text-lg" />
              Start Your Journey
            </a>
            <a
              href="/jobs"
              className="inline-flex items-center justify-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-full font-['DM_Sans'] font-semibold hover:bg-white/30 transition-all duration-300 hover:scale-105"
            >
              View Open Jobs
              <FaArrowRight />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessCTA;