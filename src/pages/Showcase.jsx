import { motion } from 'framer-motion'
import { FiYoutube, FiShield, FiSettings } from 'react-icons/fi'
import { BiAnalyse, BiFilterAlt } from 'react-icons/bi'
import { HiOutlineLightningBolt } from 'react-icons/hi'

// Optimized Showcase Components
const HeaderShowcase = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 p-8 flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(79,70,229,0.25),transparent_50%)]" />
      </div>

      <div className="relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-8"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 inline-block">
            <div className="bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl p-4">
              <FiYoutube className="text-7xl text-white" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-bold text-white mb-6 font-clash"
        >
          RecFix
        </motion.h1>

        <motion.p
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl text-indigo-200 mb-8 font-cabinet max-w-2xl mx-auto"
        >
          Take Control of Your YouTube Feed with AI-Powered Recommendation Enhancement
        </motion.p>
      </div>

      {/* Simplified Background Elements */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/4 right-1/4 text-indigo-500/10 text-[150px] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <FiYoutube />
      </motion.div>
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute bottom-1/4 left-1/4 text-purple-500/10 text-[120px] pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <BiAnalyse />
      </motion.div>
    </div>
  )
}

const FeatureShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl w-full bg-white rounded-3xl shadow-xl overflow-hidden"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="p-8 md:p-12">
          <div className="flex items-center gap-4 mb-12">
            <div className="bg-indigo-100 p-3 rounded-2xl">
              <FiYoutube className="text-4xl text-indigo-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900 font-clash">RecFix for YouTube</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight font-clash">
                Take Control of Your <br /><span className="text-indigo-600">YouTube Feed</span>
              </h3>
              <p className="text-xl text-gray-600 leading-relaxed">
                Analyze, filter, and improve your recommendations with powerful AI-driven insights.
              </p>
              <div className="flex gap-6">
                <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100 flex-1">
                  <div className="text-3xl font-bold text-indigo-600 mb-1">24,000+</div>
                  <div className="text-gray-600 font-medium">Active Users</div>
                </div>
                <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100 flex-1">
                  <div className="text-3xl font-bold text-purple-600 mb-1">150k+</div>
                  <div className="text-gray-600 font-medium">Fixed Feeds</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white rounded-xl shadow-sm p-3">
                    <div className="aspect-video bg-gray-100 rounded-lg mb-3 flex items-center justify-center">
                      <FiYoutube className="text-2xl text-gray-300" />
                    </div>
                    <div className="h-3 bg-gray-100 rounded-full w-3/4 mb-2"></div>
                    <div className="h-2.5 bg-gray-100 rounded-full w-1/2"></div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <div className="flex justify-between text-sm font-semibold text-gray-600 mb-2">
                  <span>AI Analysis...</span>
                  <span>85%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '85%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}

const PrivacyShowcase = () => {
  return (
    <div className="min-h-screen bg-gray-900 p-8 flex items-center justify-center text-white overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_30%,rgba(79,70,229,0.1),transparent_50%)]" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="max-w-6xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-16 relative z-10"
        style={{ willChange: "transform, opacity" }}
      >
        <div className="text-center mb-16">
          <div className="bg-indigo-500/20 p-5 rounded-3xl w-fit mx-auto mb-8 border border-indigo-500/30">
            <FiShield className="text-5xl text-indigo-400" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-clash">Your Privacy Matters</h2>
          <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
            RecFix processes every single piece of data locally in your browser. Nothing ever leaves your device.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: <HiOutlineLightningBolt />, title: "Local Processing", desc: "Analysis happens right on your device" },
            { icon: <FiShield />, title: "Zero Tracking", desc: "We never store or share your data" },
            { icon: <FiSettings />, title: "Secure Storage", desc: "Your keys are stored encrypted locally" }
          ].map((item, i) => (
            <div key={i} className="bg-white/5 rounded-2xl p-8 border border-white/5 hover:bg-white/10 transition-colors duration-300">
              <div className="bg-indigo-500/20 p-3 rounded-xl w-fit mb-6 text-indigo-400 text-2xl">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  )
}

const Showcase = () => {
  return (
    <div className="bg-white">
      <HeaderShowcase />
      <FeatureShowcase />
      <PrivacyShowcase />
    </div>
  )
}

export default Showcase