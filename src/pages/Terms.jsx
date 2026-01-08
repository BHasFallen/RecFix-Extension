import { motion } from 'framer-motion'
import { FiFileText, FiShield, FiAlertCircle, FiCheck, FiMail, FiZap } from 'react-icons/fi'
import { HiOutlineLightningBolt } from 'react-icons/hi'

const Terms = () => {
  console.log('Terms of Service Page Rendered')

  const sections = [
    {
      icon: <FiShield className="text-xl" />,
      title: "Agreement to Terms",
      content: "By installing and using the RecFix browser extension, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not use our extension."
    },
    {
      icon: <FiCheck className="text-xl" />,
      title: "License and Usage",
      subsections: [
        {
          subtitle: "Grant of License",
          items: [
            "Install and use the RecFix extension for personal use",
            "Use features within the specified rate limits",
            "Access and analyze your YouTube recommendations"
          ]
        }
      ]
    },
    {
      icon: <FiAlertCircle className="text-xl" />,
      title: "Usage Restrictions",
      items: [
        "Modify, reverse engineer, or decompile the extension",
        "Use the extension for any illegal purposes",
        "Attempt to bypass rate limits or security measures",
        "Distribute or share your API credentials"
      ],
      isRestriction: true,
      highlight: {
        icon: <HiOutlineLightningBolt className="text-xl" />,
        text: "Rate Limit: 2 recommendation fixes per day"
      }
    },
    {
      icon: <FiZap className="text-xl" />,
      title: "YouTube API Services",
      items: [
        "You may provide your own YouTube API key for enhanced features",
        "Comply with YouTube's Terms of Service",
        "Manage your own API quota usage if using a personal key"
      ]
    }
  ]

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
            <FiFileText className="text-4xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Last transparency update: January 2026
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <div className="grid gap-8">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative"
              style={{ willChange: "transform, opacity" }}
            >
              <div className={`p-8 bg-white/50 backdrop-blur-sm rounded-3xl border ${section.isRestriction ? 'border-amber-100 hover:border-amber-200' : 'border-gray-100 hover:border-indigo-100'} shadow-sm hover:shadow-xl transition-all duration-300`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${section.isRestriction ? 'bg-amber-100 text-amber-600' : 'bg-indigo-100 text-indigo-600'}`}>
                    {section.icon}
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>

                <div className="space-y-4">
                  {section.content && <p className="text-gray-600 leading-relaxed">{section.content}</p>}

                  {section.subsections && section.subsections.map((sub, i) => (
                    <div key={i} className="space-y-3">
                      <h3 className="font-semibold text-gray-900">{sub.subtitle}</h3>
                      <ul className="grid sm:grid-cols-2 gap-3">
                        {sub.items.map((item, j) => (
                          <li key={j} className="flex items-start gap-2 text-gray-600 text-sm">
                            <FiCheck className="mt-1 text-emerald-500 shrink-0" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  {section.items && (
                    <ul className="grid sm:grid-cols-2 gap-3 mt-4">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-gray-600 text-sm">
                          <span className={section.isRestriction ? "text-amber-500" : "text-indigo-500"}>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.highlight && (
                    <div className="mt-6 flex items-center gap-3 p-4 bg-amber-50 rounded-2xl border border-amber-100 text-amber-700 font-medium">
                      {section.highlight.icon}
                      <p>{section.highlight.text}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact info in terms */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 md:p-12 text-center text-white"
          style={{ willChange: "transform, opacity" }}
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Need Clarification?</h2>
          <p className="text-indigo-100 mb-8 max-w-2xl mx-auto relative z-10">We're committed to being transparent about our terms. If anything is unclear, don't hesitate to reach out.</p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a href="mailto:recfixyt@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-white text-indigo-600 rounded-xl font-bold transition-all duration-200">
              <FiMail /> Contact Us
            </a>
            <a href="https://github.com/BHasFallen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl font-bold transition-all duration-200">
              <FiShield /> GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Terms