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
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Last transparency update: January 2026
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <div className="grid gap-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative group"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="flex flex-col md:flex-row gap-6 p-8 bg-white/50 backdrop-blur-sm rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 flex items-center justify-center text-indigo-600 border border-indigo-500/20">
                  {section.icon}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">{section.title}</h2>
                  <div className="prose prose-indigo max-w-none">
                    {section.content}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact info in privacy */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-900 rounded-3xl p-8 md:p-12 text-center text-white relative overflow-hidden"
          style={{ willChange: "transform, opacity" }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <h2 className="text-2xl md:text-3xl font-bold mb-4 relative z-10">Privacy Questions?</h2>
          <p className="text-gray-400 mb-8 relative z-10">If you have any questions about this Privacy Policy, please contact us.</p>
          <div className="flex flex-wrap justify-center gap-4 relative z-10">
            <a href="mailto:recfixyt@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200">
              <FiMail /> recfixyt@gmail.com
            </a>
            <a href="https://github.com/BHasFallen" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 rounded-xl transition-all duration-200">
              <FiShield /> GitHub Profile
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy