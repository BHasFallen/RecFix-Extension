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
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/30 via-white to-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />

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
            className="text-lg text-gray-500"
          >
            Last updated: January 2026
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${section.isRestriction ? 'bg-red-100 text-red-600' : 'bg-indigo-100 text-indigo-600'
                  }`}>
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
              </div>

              {section.content && (
                <p className="text-gray-600 leading-relaxed">{section.content}</p>
              )}

              {section.subsections && section.subsections.map((sub, i) => (
                <div key={i} className="mt-4 bg-gray-50 rounded-2xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3">{sub.subtitle}</h3>
                  <ul className="space-y-2">
                    {sub.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-gray-600">
                        <span className="text-emerald-500 mt-0.5">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

              {section.items && (
                <ul className="space-y-3 mt-4">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <span className={section.isRestriction ? 'text-red-500' : 'text-emerald-500'}>
                        {section.isRestriction ? '✗' : '✓'}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {section.highlight && (
                <div className="mt-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-5 border border-indigo-100">
                  <p className="text-gray-700 font-semibold flex items-center gap-2">
                    {section.highlight.icon}
                    {section.highlight.text}
                  </p>
                </div>
              )}
            </motion.div>
          ))}

          {/* Disclaimers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gray-50 rounded-3xl p-8"
          >
            <h2 className="text-xl font-bold text-gray-900 mb-4">Disclaimer of Warranties</h2>
            <p className="text-gray-600 mb-4">
              RecFix is provided "as is" without any warranties. We do not guarantee that:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start gap-3"><span className="text-gray-400">•</span>The extension will always function error-free</li>
              <li className="flex items-start gap-3"><span className="text-gray-400">•</span>Recommendations will improve to your satisfaction</li>
              <li className="flex items-start gap-3"><span className="text-gray-400">•</span>YouTube's API services will always be available</li>
            </ul>
          </motion.div>

          {/* Liability & Termination */}
          <div className="grid md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-bold text-gray-900 mb-3">Limitation of Liability</h3>
              <p className="text-gray-600 text-sm">
                We shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of the extension.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 border border-gray-100"
            >
              <h3 className="font-bold text-gray-900 mb-3">Termination</h3>
              <p className="text-gray-600 text-sm">
                We may terminate or suspend your access to RecFix immediately, without prior notice, for conduct that violates these Terms.
              </p>
            </motion.div>
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-3xl p-8 border border-indigo-100"
          >
            <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
              <FiMail className="text-indigo-600" />
              Contact Information
            </h3>
            <p className="text-gray-600 mb-4">For any questions about these Terms, please contact us:</p>
            <div className="text-gray-600 space-y-1">
              <p>Email: <a href="mailto:recfixyt@gmail.com" className="text-indigo-600 hover:underline">recfixyt@gmail.com</a></p>
              <p>GitHub: <a href="https://github.com/BHasFallen" className="text-indigo-600 hover:underline">github.com/BHasFallen</a></p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Terms