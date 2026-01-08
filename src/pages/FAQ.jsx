import { motion } from 'framer-motion'
import { FiChevronDown, FiChevronUp, FiHelpCircle, FiArrowRight } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/30 via-white to-white relative overflow-hidden">
      {/* Optimized Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white to-white" />
        <div className="absolute top-[-10%] left-[10%] w-[30rem] h-[30rem] bg-indigo-200/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[10%] w-[25rem] h-[25rem] bg-purple-200/20 rounded-full blur-[100px]" />
      </div>

      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-6 shadow-lg shadow-indigo-500/25"
          >
            <FiHelpCircle className="text-4xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Everything you need to know about RecFix
          </motion.p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden ${openIndex === index
                ? 'border-indigo-200 shadow-lg shadow-indigo-100'
                : 'border-gray-100 hover:border-gray-200'
                }`}
              style={{ willChange: "transform, opacity" }}
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <span className={`font-semibold transition-colors duration-200 ${openIndex === index ? 'text-indigo-600' : 'text-gray-900'
                  }`}>
                  {faq.question}
                </span>
                <div className={`shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${openIndex === index
                  ? 'bg-indigo-100 text-indigo-600'
                  : 'bg-gray-100 text-gray-500'
                  }`}>
                  {openIndex === index ? (
                    <FiChevronUp className="text-lg" />
                  ) : (
                    <FiChevronDown className="text-lg" />
                  )}
                </div>
              </button>

              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-5 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                  {faq.answer}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions? */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 text-center text-white"
          style={{ willChange: "transform, opacity" }}
        >
          <HiOutlineSparkles className="text-3xl mx-auto mb-4 text-indigo-200" />
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-indigo-100 mb-6">We are here to help! Reach out to us anytime.</p>
          <Link
            to="/feedback"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors duration-200"
          >
            Contact Support
            <FiArrowRight />
          </Link>
        </motion.div>
      </div>
    </div>
  )
}

const faqs = [
  {
    question: "What is RecFix?",
    answer: "RecFix is a browser extension for Chrome and Firefox that helps you improve your YouTube recommendations by analyzing your current recommendations, filtering out unwanted content, and guiding YouTube's algorithm towards content you actually want to see."
  },
  {
    question: "Which browsers are supported?",
    answer: "RecFix is currently available for both Google Chrome and Mozilla Firefox. We're actively working on supporting additional browsers in the future."
  },
  {
    question: "How does RecFix work?",
    answer: "RecFix works by analyzing your YouTube recommendations, allowing you to mark videos you like, and using that information to help guide YouTube's algorithm. It operates entirely in your browser and uses the official YouTube API to make improvements to your recommendations."
  },
  {
    question: "Is RecFix free to use?",
    answer: "Yes, RecFix is completely free to use! To ensure optimal performance and prevent API quota exhaustion, you get 2 recommendation fixes per day."
  },
  {
    question: "Do I need a YouTube API key?",
    answer: "No, RecFix comes with a built-in API key that works out of the box. However, power users can optionally provide their own YouTube API key for enhanced features or if they need more daily quota."
  },
  {
    question: "Is my data safe?",
    answer: "Absolutely! RecFix operates entirely in your browser. Your data and preferences are stored locally and are never sent to third-party servers. Your API key is stored securely, and all processing happens on your device."
  },
  {
    question: "Is RecFix available on the Chrome Web Store?",
    answer: "Yes! RecFix is now available on the Chrome Web Store. You can also download it directly from our GitHub repository for manual installation if you prefer."
  },
  {
    question: "How do I update RecFix?",
    answer: "If you installed from the Chrome Web Store, updates happen automatically. For manual installations, download the latest version from our GitHub repository and follow the same installation steps. Your browser will update the existing installation while preserving your settings."
  },
  {
    question: "What should I do if RecFix isn't working?",
    answer: "First, try refreshing the YouTube page and clicking the scan button again. If issues persist: 1) Disable and re-enable the extension, 2) Check the console for error messages (F12), 3) Verify you're using the latest version, 4) Contact us through the feedback form for support."
  }
]

export default FAQ