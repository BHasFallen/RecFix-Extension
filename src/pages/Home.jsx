import { motion, useScroll, useTransform } from 'framer-motion'
import { FiYoutube, FiShield, FiZap, FiCheck, FiArrowRight, FiStar, FiCoffee, FiChrome, FiGithub } from 'react-icons/fi'
import { BiAnalyse } from 'react-icons/bi'
import { MdOutlinePrivacyTip } from 'react-icons/md'
import { HiOutlineLightningBolt, HiOutlineSparkles } from 'react-icons/hi'
import { Link, useNavigate } from 'react-router-dom'
import { SiFirefox } from 'react-icons/si'
import { useRef } from 'react'

const Home = () => {
  console.log('RecFix Landing Page - Home Component Rendered')
  const navigate = useNavigate()
  const containerRef = useRef(null)

  const CHROME_STORE_URL = "https://chromewebstore.google.com/detail/recfix/eicddedljgibgkpnbmfimmicdndhlpna"

  return (
    <div ref={containerRef} className="relative overflow-hidden">
      {/* Optimized Background */}
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 via-white to-white" />
        <motion.div
          className="absolute top-[-10%] left-[10%] w-[30rem] h-[30rem] bg-indigo-200/30 rounded-full blur-[80px]"
          style={{ willChange: "transform" }}
          animate={{
            x: [0, 40, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-[-10%] right-[10%] w-[25rem] h-[25rem] bg-purple-200/30 rounded-full blur-[80px]"
          style={{ willChange: "transform" }}
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-8"
          >
            <HiOutlineSparkles className="text-indigo-400" />
            <span className="text-sm font-medium bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Official Chrome Web Store App
            </span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-gray-900">Fix Your</span>
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                YouTube Feed
              </span>
              <motion.span
                className="absolute -right-8 -top-4 text-3xl"
                style={{ willChange: "transform" }}
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                ✨
              </motion.span>
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Take control of your recommendations. Scan, select, and transform
            your YouTube feed with AI-powered suggestions tailored to what you actually want to watch.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <motion.a
              href={CHROME_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02, boxShadow: "0 20px 40px -15px rgba(79, 70, 229, 0.4)" }}
              whileTap={{ scale: 0.98 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-indigo-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FiChrome className="text-xl" />
                Add to Chrome - It's Free
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </span>
            </motion.a>

            <motion.button
              onClick={() => navigate('/guide')}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold text-lg hover:border-indigo-300 hover:bg-indigo-50/50 transition-all flex items-center gap-3"
            >
              How to Install
            </motion.button>
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500"
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(4)].map((_, i) => (
                  <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-gradient-to-br ${i === 0 ? 'from-indigo-400 to-indigo-600' :
                    i === 1 ? 'from-purple-400 to-purple-600' :
                      i === 2 ? 'from-pink-400 to-pink-600' :
                        'from-blue-400 to-blue-600'
                    }`} />
                ))}
              </div>
              <span><strong className="text-gray-900">24,893+</strong> active users</span>
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar key={i} className="text-amber-400 fill-amber-400" />
              ))}
              <span className="ml-1"><strong className="text-gray-900">4.9</strong> rating</span>
            </div>
          </motion.div>

          {/* Product Hunt Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8"
          >
            <a
              href="https://www.producthunt.com/posts/recfix-extension"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block hover:opacity-90 transition-opacity"
            >
              <img
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=770528&theme=neutral"
                alt="RecFix Extension - Fix your YouTube recommendations"
                width="250"
                height="54"
              />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent to-gray-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="text-center mb-16"
            style={{ willChange: "transform, opacity" }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
              How it works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Three simple steps to a better YouTube experience
            </p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            {/* Step 1 - Large */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2 group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300 overflow-hidden"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-3xl opacity-50 group-hover:opacity-80 transition-opacity -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white mb-6">
                  <BiAnalyse className="text-2xl" />
                </div>
                <div className="text-sm font-semibold text-indigo-600 mb-2">Step 1</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Scan Your Feed</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Open YouTube and click the RecFix icon. We instantly analyze all visible videos and show them in a beautiful grid.
                </p>
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="group relative bg-gradient-to-br from-indigo-600 to-purple-700 rounded-3xl p-8 overflow-hidden"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-sm text-white mb-6">
                  <FiCheck className="text-2xl" />
                </div>
                <div className="text-sm font-semibold text-indigo-200 mb-2">Step 2</div>
                <h3 className="text-2xl font-bold text-white mb-3">Select Favorites</h3>
                <p className="text-indigo-100 text-lg leading-relaxed">
                  Pick the videos that match your interests. These become the seeds for better recommendations.
                </p>
              </div>
            </motion.div>

            {/* Step 3 */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.3 }}
              className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-indigo-200 transition-all duration-300"
              style={{ willChange: "transform, opacity" }}
            >
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white mb-6">
                <FiZap className="text-2xl" />
              </div>
              <div className="text-sm font-semibold text-green-600 mb-2">Step 3</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Fix Your Feed</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Click Fix Feed and watch as AI generates personalized recommendations.
              </p>
            </motion.div>

            {/* Bonus - Save */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="lg:col-span-2 group relative bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-medium mb-4">
                    <FiYoutube /> Bonus Feature
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Save to Playlist</h3>
                  <p className="text-gray-400 text-lg">
                    Love your new recommendations? Save them directly to a YouTube playlist with one click.
                  </p>
                </div>
                <motion.a
                  href={CHROME_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="shrink-0 px-6 py-3 bg-white text-gray-900 rounded-xl font-semibold flex items-center gap-2 hover:bg-gray-100 transition-colors"
                >
                  Try it now
                  <FiArrowRight />
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-gray-900 via-indigo-950 to-gray-900 rounded-3xl p-8 md:p-16 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-purple-900/30" />

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="text-center mb-12"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-indigo-500/20 border border-indigo-500/30 mb-6">
                  <FiShield className="text-4xl text-indigo-400" />
                </div>
                <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                  Your Privacy, Protected
                </h2>
                <p className="text-xl text-indigo-200 max-w-2xl mx-auto">
                  We believe your data is yours alone. RecFix processes everything locally — nothing leaves your browser.
                </p>
              </motion.div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { icon: <MdOutlinePrivacyTip className="text-2xl" />, title: "Zero Tracking", desc: "No analytics, no cookies, no data collection" },
                  { icon: <FiShield className="text-2xl" />, title: "Local Processing", desc: "All data stays in your browser" },
                  { icon: <FiGithub className="text-2xl" />, title: "Open Source", desc: "Fully transparent, auditable code" },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ delay: 0.1 * i }}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
                    style={{ willChange: "transform, opacity" }}
                  >
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-300 mb-4">
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                    <p className="text-indigo-200/80">{item.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            style={{ willChange: "transform, opacity" }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ready for a better
              <br />
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
                YouTube experience?
              </span>
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Join thousands of users who have already transformed their recommendations. It only takes 30 seconds to get started.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href={CHROME_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(79, 70, 229, 0.35)" }}
                whileTap={{ scale: 0.98 }}
                className="group px-10 py-5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-2xl font-semibold text-lg shadow-xl shadow-indigo-500/25 flex items-center gap-3"
              >
                <FiChrome className="text-2xl" />
                Add to Chrome - It's Free
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.a>

              <motion.button
                onClick={() => navigate('/guide')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-10 py-5 bg-white border-2 border-gray-200 text-gray-700 rounded-2xl font-semibold text-lg hover:border-indigo-300 hover:bg-indigo-50/50 transition-all flex items-center gap-3"
              >
                Installation Guide
              </motion.button>
            </div>

            <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
              <HiOutlineLightningBolt className="text-indigo-500" />
              2 free fixes per day - No account required
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center">
                <FiYoutube className="text-white text-xl" />
              </div>
              <span className="text-xl font-bold text-white">RecFix</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/guide" className="hover:text-white transition-colors">Installation Guide</Link>
              <Link to="/faq" className="hover:text-white transition-colors">FAQ</Link>
              <Link to="/feedback" className="hover:text-white transition-colors">Contact</Link>
              <a href="https://github.com/BHasFallen" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
                <FiGithub /> GitHub
              </a>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm">
            <p>© 2026 RecFix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Home