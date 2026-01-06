import { motion } from 'framer-motion'
import { FiShield, FiLock, FiEye, FiDatabase, FiUsers, FiMail } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'
import { MdOutlinePrivacyTip } from 'react-icons/md'

const PrivacyPolicy = () => {
  console.log('Privacy Policy Page Rendered')

  const sections = [
    {
      icon: <FiEye className="text-xl" />,
      title: "Information We Collect",
      content: (
        <>
          <div className="grid md:grid-cols-2 gap-4 mt-4">
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">YouTube Data</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><span className="text-indigo-500">•</span>Your YouTube recommendations data for analysis</li>
                <li className="flex items-start gap-2"><span className="text-indigo-500">•</span>Watch history patterns (only when explicitly requested)</li>
                <li className="flex items-start gap-2"><span className="text-indigo-500">•</span>Interaction data with recommended videos</li>
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-5 border border-gray-100">
              <h4 className="font-semibold text-gray-900 mb-3">Technical Data</h4>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li className="flex items-start gap-2"><span className="text-indigo-500">•</span>Browser type and version</li>
                <li className="flex items-start gap-2"><span className="text-indigo-500">•</span>Extension settings and preferences</li>
                <li className="flex items-start gap-2"><span className="text-indigo-500">•</span>Error logs for troubleshooting</li>
              </ul>
            </div>
          </div>
        </>
      )
    },
    {
      icon: <FiDatabase className="text-xl" />,
      title: "How We Use Your Information",
      content: (
        <>
          <ul className="space-y-3 text-gray-600 mt-4">
            <li className="flex items-start gap-3"><span className="text-indigo-500">✓</span>Analyzing and improving your YouTube recommendations</li>
            <li className="flex items-start gap-3"><span className="text-indigo-500">✓</span>Providing personalized filtering options</li>
            <li className="flex items-start gap-3"><span className="text-indigo-500">✓</span>Improving the RecFix extension functionality</li>
            <li className="flex items-start gap-3"><span className="text-indigo-500">✓</span>Technical troubleshooting</li>
          </ul>
          <div className="mt-6 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl p-5 border border-indigo-100">
            <p className="text-gray-700 font-semibold flex items-center gap-2">
              <FiLock className="text-indigo-600" />
              All data processing happens locally in your browser. We do not store or transmit your personal data to our servers.
            </p>
          </div>
        </>
      )
    },
    {
      icon: <FiLock className="text-xl" />,
      title: "Data Storage and Security",
      content: (
        <ul className="space-y-3 text-gray-600 mt-4">
          <li className="flex items-start gap-3"><span className="text-emerald-500">🔒</span>Local browser storage encryption</li>
          <li className="flex items-start gap-3"><span className="text-emerald-500">🔒</span>Secure handling of YouTube API credentials</li>
          <li className="flex items-start gap-3"><span className="text-emerald-500">🔒</span>Regular security updates</li>
        </ul>
      )
    },
    {
      icon: <FiUsers className="text-xl" />,
      title: "Your Rights",
      content: (
        <div className="grid sm:grid-cols-2 gap-3 mt-4">
          {['Access your stored data', 'Delete your data', 'Opt-out of data collection', 'Export your data'].map((right, i) => (
            <div key={i} className="bg-white rounded-xl p-4 border border-gray-100 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 text-sm font-bold">{i + 1}</span>
              <span className="text-gray-700">{right}</span>
            </div>
          ))}
        </div>
      )
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
            <MdOutlinePrivacyTip className="text-4xl" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Privacy Policy
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
        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-gray-900 to-indigo-950 rounded-3xl p-8 mb-8 text-white"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center">
              <FiShield className="text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold mb-2">Our Commitment to Privacy</h2>
              <p className="text-indigo-200 leading-relaxed">
                At RecFix, we take your privacy seriously. This Privacy Policy explains how we collect, use, and protect your personal information when you use our browser extension.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Sections */}
        <div className="space-y-6">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center text-indigo-600">
                  {section.icon}
                </div>
                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
              </div>
              {section.content}
            </motion.div>
          ))}
        </div>

        {/* Changes & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 grid md:grid-cols-2 gap-6"
        >
          <div className="bg-white rounded-2xl p-6 border border-gray-100">
            <h3 className="font-bold text-gray-900 mb-3">Changes to This Policy</h3>
            <p className="text-gray-600 text-sm">
              We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </div>
          <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl p-6 border border-indigo-100">
            <h3 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
              <FiMail className="text-indigo-600" />
              Contact Us
            </h3>
            <div className="text-gray-600 text-sm space-y-1">
              <p>Email: <a href="mailto:recfixyt@gmail.com" className="text-indigo-600 hover:underline">recfixyt@gmail.com</a></p>
              <p>GitHub: <a href="https://github.com/BHasFallen" className="text-indigo-600 hover:underline">github.com/BHasFallen</a></p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy