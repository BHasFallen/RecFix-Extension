import { motion } from 'framer-motion'
import { FiDownload, FiYoutube, FiSettings, FiCheck, FiAlertTriangle, FiChevronDown, FiChevronUp, FiChrome, FiArrowRight, FiExternalLink } from 'react-icons/fi'
import { HiOutlineLightningBolt, HiOutlineSparkles } from 'react-icons/hi'
import { SiFirefox } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Guide = () => {
  const [showOptionalSteps, setShowOptionalSteps] = useState(false)
  const [selectedBrowser, setSelectedBrowser] = useState('chrome')

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50/30 via-white to-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-6"
          >
            <HiOutlineSparkles className="text-indigo-500" />
            <span className="text-sm font-medium text-indigo-600">Quick Setup</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Installation Guide
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Get RecFix running in less than 2 minutes
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Browser Selection */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button
            onClick={() => setSelectedBrowser('chrome')}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all ${selectedBrowser === 'chrome'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-indigo-200'
              }`}
          >
            <FiChrome className="text-2xl" />
            Chrome
          </button>
          <button
            onClick={() => setSelectedBrowser('firefox')}
            className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all ${selectedBrowser === 'firefox'
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/25'
                : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-indigo-200'
              }`}
          >
            <SiFirefox className="text-2xl" />
            Firefox
          </button>
        </motion.div>

        <div className="space-y-6">
          {/* Step 1: Download */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-shadow overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity -translate-y-1/2 translate-x-1/2" />

            <div className="relative z-10 flex items-start gap-6">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-500/25">
                <FiDownload className="text-2xl" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full">STEP 1</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Download RecFix</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Click the download button below to get the latest version. After downloading, extract the ZIP file to a location you can easily find.
                </p>
                <div className="flex flex-wrap gap-4">
                  {selectedBrowser === 'chrome' ? (
                    <motion.a
                      href="https://github.com/BHasFallen/RecFix-Extension/releases/download/v2.0.0/RecFix.Extension.v2.0.zip"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-xl transition-shadow"
                    >
                      <FiChrome className="text-xl" />
                      Download for Chrome
                      <FiArrowRight />
                    </motion.a>
                  ) : (
                    <motion.a
                      href="https://github.com/BHasFallen/RecFix-Extension-Firefox/archive/refs/heads/main.zip"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-6 py-3 rounded-xl inline-flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-xl transition-shadow"
                    >
                      <SiFirefox className="text-xl" />
                      Download for Firefox
                      <FiArrowRight />
                    </motion.a>
                  )}
                  <a
                    href={selectedBrowser === 'chrome'
                      ? "https://github.com/BHasFallen/RecFix-Extension-Chrome"
                      : "https://github.com/BHasFallen/RecFix-Extension-Firefox"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 rounded-xl inline-flex items-center gap-2 text-gray-600 font-semibold border-2 border-gray-200 hover:border-indigo-200 hover:text-indigo-600 transition-colors"
                  >
                    <FiExternalLink />
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Step 2: Browser Setup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative bg-white rounded-3xl border border-gray-100 p-8 shadow-sm hover:shadow-xl transition-shadow"
          >
            <div className="flex items-start gap-6">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center text-white shadow-lg shadow-amber-500/25">
                <HiOutlineLightningBolt className="text-2xl" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xs font-bold text-amber-600 bg-amber-50 px-3 py-1 rounded-full">STEP 2</span>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">Enable Developer Mode</h2>
                {selectedBrowser === 'chrome' ? (
                  <ol className="space-y-4">
                    {[
                      'Open Google Chrome',
                      <>Type <code className="bg-gray-100 px-3 py-1 rounded-lg text-indigo-600 font-mono text-sm">chrome://extensions/</code> in the address bar</>,
                      'Enable "Developer mode" in the top-right corner',
                      'Click "Load unpacked" button',
                      'Select the extracted RecFix folder'
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600">
                          {i + 1}
                        </span>
                        <span className="text-gray-600 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                ) : (
                  <ol className="space-y-4">
                    {[
                      'Open Firefox',
                      <>Type <code className="bg-gray-100 px-3 py-1 rounded-lg text-indigo-600 font-mono text-sm">about:debugging#/runtime/this-firefox</code> in the address bar</>,
                      'Click "Load Temporary Add-on"',
                      'Navigate to the extracted RecFix folder and select the manifest.json file'
                    ].map((step, i) => (
                      <li key={i} className="flex items-start gap-4">
                        <span className="shrink-0 w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-bold text-gray-600">
                          {i + 1}
                        </span>
                        <span className="text-gray-600 pt-1">{step}</span>
                      </li>
                    ))}
                  </ol>
                )}
              </div>
            </div>
          </motion.div>

          {/* Optional Steps Toggle */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-4"
          >
            <button
              onClick={() => setShowOptionalSteps(!showOptionalSteps)}
              className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold group"
            >
              {showOptionalSteps ? (
                <>
                  Hide Optional Steps <FiChevronUp className="text-xl group-hover:-translate-y-0.5 transition-transform" />
                </>
              ) : (
                <>
                  Show Optional Steps (For Power Users) <FiChevronDown className="text-xl group-hover:translate-y-0.5 transition-transform" />
                </>
              )}
            </button>
          </motion.div>

          {/* Optional Steps */}
          {showOptionalSteps && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="space-y-6"
            >
              {/* Step 3: API Setup */}
              <div className="relative bg-gray-50 rounded-3xl border border-gray-100 p-8">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-pink-600 flex items-center justify-center text-white">
                    <FiYoutube className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-gray-500 bg-gray-200 px-3 py-1 rounded-full">OPTIONAL</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Get YouTube API Key</h2>
                    <p className="text-gray-600 mb-4">For enhanced features and updates:</p>
                    <ol className="space-y-2 text-gray-600">
                      <li>1. Go to the <a href="https://console.cloud.google.com/" className="text-indigo-600 hover:underline">Google Cloud Console</a></li>
                      <li>2. Create a new project or select an existing one</li>
                      <li>3. Enable the YouTube Data API v3</li>
                      <li>4. Create credentials (API key)</li>
                      <li>5. Copy your API key</li>
                    </ol>
                  </div>
                </div>
              </div>

              {/* Step 4: Configuration */}
              <div className="relative bg-gray-50 rounded-3xl border border-gray-100 p-8">
                <div className="flex items-start gap-6">
                  <div className="shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white">
                    <FiSettings className="text-2xl" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-gray-500 bg-gray-200 px-3 py-1 rounded-full">OPTIONAL</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Configure RecFix</h2>
                    <ol className="space-y-2 text-gray-600">
                      <li>1. Click the puzzle piece icon in your browser toolbar</li>
                      <li>2. Find and pin RecFix</li>
                      <li>3. Click the RecFix icon</li>
                      <li>4. Open settings (gear icon)</li>
                      <li>5. Paste your YouTube API key</li>
                      <li>6. Save settings</li>
                    </ol>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Success Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl p-8 text-white"
          >
            <div className="flex items-center gap-4">
              <div className="shrink-0 w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
                <FiCheck className="text-3xl" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-1">You are All Set!</h2>
                <p className="text-emerald-100">
                  RecFix is now ready to help you improve your YouTube recommendations.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Troubleshooting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 border border-amber-100"
          >
            <div className="flex items-start gap-4">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center">
                <FiAlertTriangle className="text-2xl text-amber-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">Troubleshooting</h2>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    If the extension does not load, try disabling and re-enabling Developer mode
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    Make sure all required files are present in the directory
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    Check for error messages in Developer Tools console (F12)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-amber-500 mt-1">•</span>
                    For Firefox users, you may need to reload the extension after browser restart
                  </li>
                </ul>
                <div className="mt-6">
                  <Link
                    to="/feedback"
                    className="inline-flex items-center gap-2 text-amber-700 hover:text-amber-800 font-semibold"
                  >
                    Still having issues? Contact support
                    <FiArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Guide
