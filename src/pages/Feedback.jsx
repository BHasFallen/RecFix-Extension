import { motion } from 'framer-motion'
import { FiSend, FiGithub, FiMessageCircle, FiMail, FiArrowRight } from 'react-icons/fi'
import { HiOutlineSparkles } from 'react-icons/hi'
import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'

const Feedback = () => {
  useEffect(() => {
    emailjs.init("8lWl3tKi1VtJme2I8")
  }, [])

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'bug',
    message: ''
  })

  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus({ submitting: true, submitted: false, error: null })

    try {
      console.log('Sending feedback email...')
      await emailjs.send(
        'service_wcbofq2',
        'template_mi3klqc',
        {
          from_name: formData.name,
          from_email: formData.email,
          reply_to: formData.email,
          category: formData.category,
          message: formData.message,
          subject: `RecFix Feedback: ${formData.category} from ${formData.name}`,
          date: new Date().toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
          })
        },
        '8lWl3tKi1VtJme2I8'
      )

      console.log('Feedback email sent successfully!')
      setStatus({ submitting: false, submitted: true, error: null })
      setFormData({ name: '', email: '', category: 'bug', message: '' })
    } catch (error) {
      console.error('Error sending feedback:', error)
      setStatus({ submitting: false, submitted: false, error: 'Failed to send message. Please try again.' })
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const contactOptions = [
    {
      icon: <FiGithub className="text-2xl" />,
      title: "GitHub Issues",
      description: "Report bugs or request features through our repository",
      link: "https://github.com/BHasFallen/RecFix-Extension-Chrome/issues/new",
      color: "from-gray-700 to-gray-900"
    },
    {
      icon: <FiMessageCircle className="text-2xl" />,
      title: "Discord Community",
      description: "Join our community for real-time support",
      link: "https://discord.com/invite/TQZauB99tD",
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: <FiMail className="text-2xl" />,
      title: "Email Support",
      description: "Send us an email for direct inquiries",
      link: "mailto:recfixyt@gmail.com",
      color: "from-emerald-500 to-teal-600"
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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-6"
          >
            <HiOutlineSparkles className="text-indigo-500" />
            <span className="text-sm font-medium text-indigo-600">We love hearing from you</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            Feedback & Support
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            We are constantly working to improve RecFix. Your feedback helps us make it better for everyone.
          </motion.p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {/* Contact Options */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {contactOptions.map((option, index) => (
            <motion.a
              key={index}
              href={option.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-white rounded-2xl p-6 text-center border border-gray-100 hover:border-transparent hover:shadow-xl transition-all overflow-hidden"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-gray-100 group-hover:bg-white/20 flex items-center justify-center mx-auto mb-4 text-gray-600 group-hover:text-white transition-colors">
                  {option.icon}
                </div>
                <h3 className="font-bold text-gray-900 group-hover:text-white mb-2 transition-colors">{option.title}</h3>
                <p className="text-gray-500 group-hover:text-white/80 text-sm transition-colors">{option.description}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl border border-gray-100 p-8 md:p-10 shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h2>
          <p className="text-gray-500 mb-8">We typically respond within 24-48 hours</p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-0 outline-none transition-colors"
                  placeholder="Your name"
                  required
                  disabled={status.submitting}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-0 outline-none transition-colors"
                  placeholder="your@email.com"
                  required
                  disabled={status.submitting}
                />
              </div>
            </div>

            <div>
              <label htmlFor="category" className="block text-sm font-semibold text-gray-700 mb-2">
                Category
              </label>
              <select
                id="category"
                name="category"
                value={formData.category}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-0 outline-none transition-colors bg-white"
                disabled={status.submitting}
              >
                <option value="bug">Bug Report</option>
                <option value="feature">Feature Request</option>
                <option value="support">Support</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-indigo-500 focus:ring-0 outline-none transition-colors resize-none"
                placeholder="Tell us what's on your mind..."
                required
                disabled={status.submitting}
              />
            </div>

            {status.error && (
              <div className="bg-red-50 text-red-600 px-4 py-3 rounded-xl text-sm">
                {status.error}
              </div>
            )}

            {status.submitted && (
              <div className="bg-emerald-50 text-emerald-600 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                <span className="text-lg">✓</span>
                Message sent successfully! We will get back to you soon.
              </div>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-xl transition-shadow flex items-center justify-center gap-3 ${status.submitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              disabled={status.submitting}
            >
              <FiSend />
              {status.submitting ? 'Sending...' : 'Send Message'}
              <FiArrowRight />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Feedback