import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { 
  FaInstagram, 
  FaFacebook, 
  FaWhatsapp, 
  FaLinkedin,
  FaTwitter,
  FaYoutube,
  FaGlobe,
  FaArrowRight
} from "react-icons/fa";

const ContactSocial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const socialPlatforms = [
    { 
      icon: FaInstagram, 
      name: "Instagram", 
      username: "@almoon_hr", 
      link: "https://www.instagram.com/almoon_hr",
      bg: "from-pink-500 to-purple-600",
      description: "Follow us for daily updates and success stories"
    },
    { 
      icon: FaFacebook, 
      name: "Facebook", 
      username: "Al Moon HR", 
      link: "https://www.facebook.com/share/1LNXLn8bsA/",
      bg: "from-blue-600 to-blue-700",
      description: "Like our page for job alerts and news"
    },
    { 
      icon: FaWhatsapp, 
      name: "WhatsApp", 
      username: "+91 89766 663732", 
      link: "https://wa.me/918976663732",
      bg: "from-green-500 to-green-600",
      description: "Chat with us directly for quick support"
    },
  ];

  const followers = [
    { platform: "Instagram", count: "2.5K+", color: "text-pink-500" },
    { platform: "Facebook", count: "5K+", color: "text-blue-600" },
    { platform: "WhatsApp", count: "10K+", color: "text-green-500" },
  ];

  return (
    <section ref={ref} className="py-20 md:py-28 px-4 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-1 bg-[#1871db]/10 rounded-full text-sm font-['DM_Sans'] text-[#1871db] font-semibold mb-4">
              Connect Socially
            </span>
            <h2 className="font-['Sora'] text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-gray-800">Follow Us on</span>{" "}
              <span className="bg-gradient-to-r from-[#1871db] to-[#1871db]/60 bg-clip-text text-transparent">
                Social Media
              </span>
            </h2>
            <p className="font-['DM_Sans'] text-gray-600 text-base md:text-lg max-w-2xl mx-auto">
              Stay connected with us for the latest job updates, success stories, and industry insights
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-[#1871db] to-[#1871db]/40 mx-auto rounded-full mt-4"></div>
          </motion.div>
        </div>

        {/* Social Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {socialPlatforms.map((social, idx) => (
            <motion.a
              key={idx}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className={`bg-gradient-to-br ${social.bg} rounded-2xl p-6 text-white shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                  <social.icon className="text-white text-2xl" />
                </div>
                <div>
                  <h3 className="font-['Sora'] text-xl font-bold">{social.name}</h3>
                  <p className="text-white/80 text-sm">{social.username}</p>
                </div>
              </div>
              <p className="text-white/90 text-sm mb-4">{social.description}</p>
              <div className="flex items-center gap-2 text-white/80 text-sm group-hover:gap-3 transition-all duration-300">
                <span>Follow us</span>
                <FaArrowRight className="text-sm transition-all duration-300 group-hover:translate-x-1" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Follower Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-[#1871db]/5 to-transparent rounded-2xl p-6 border border-[#1871db]/20 text-center"
        >
          <h3 className="font-['Sora'] text-xl font-bold text-gray-800 mb-4">Our Growing Community</h3>
          <div className="flex flex-wrap justify-center gap-8">
            {followers.map((item, idx) => (
              <div key={idx} className="text-center">
                <div className={`font-['Sora'] text-2xl font-bold ${item.color}`}>{item.count}</div>
                <p className="font-['DM_Sans'] text-gray-500 text-sm">{item.platform} Followers</p>
              </div>
            ))}
            <div className="text-center">
              <div className="font-['Sora'] text-2xl font-bold text-[#1871db]">15K+</div>
              <p className="font-['DM_Sans'] text-gray-500 text-sm">Total Reach</p>
            </div>
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 bg-white rounded-2xl p-6 shadow-md border border-[#1871db]/20 text-center"
        >
          <FaGlobe className="text-[#1871db] text-3xl mx-auto mb-3" />
          <h3 className="font-['Sora'] text-xl font-bold text-gray-800 mb-2">Stay Updated</h3>
          <p className="font-['DM_Sans'] text-gray-600 text-sm mb-4">
            Get the latest job openings and career tips directly on your social media feed
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <a href="https://www.instagram.com/almoon_hr" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-5 py-2 rounded-full text-sm font-['DM_Sans'] hover:shadow-lg transition-all duration-300">
              <FaInstagram /> Follow on Instagram
            </a>
            <a href="https://www.facebook.com/share/1LNXLn8bsA/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-2 rounded-full text-sm font-['DM_Sans'] hover:shadow-lg transition-all duration-300">
              <FaFacebook /> Like on Facebook
            </a>
            <a href="https://wa.me/918976663732" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-2 rounded-full text-sm font-['DM_Sans'] hover:shadow-lg transition-all duration-300">
              <FaWhatsapp /> Join WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSocial;
