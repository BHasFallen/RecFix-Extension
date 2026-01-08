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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 border border-indigo-500/20 mb-6"
          >
            <HiOutlineSparkles className="text-indigo-500" />
            <span className="text-sm font-medium text-indigo-600">Get in Touch</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4"
          >
            We'd Love to Hear From You
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Have a bug to report or a feature idea? Our team is all ears.
          </motion.p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Methods */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Other Ways to Connect</h2>
            {contactOptions.map((option, index) => (
              <motion.a
                key={index}
                href={option.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="block group"
                style={{ willChange: "transform, opacity" }}
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm group-hover:shadow-md transition-all duration-300 group-hover:border-indigo-100">
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${option.color} flex items-center justify-center text-white shadow-lg`}>
                      {option.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{option.title}</h3>
                      <p className="text-gray-500 text-sm">{option.description}</p>
                    </div>
                    <FiArrowRight className="text-gray-400 group-hover:text-indigo-500 group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

          {/* Feedback Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl"
            style={{ willChange: "transform, opacity" }}
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-indigo-500 focus:bg-white focus:outline-none transition-all duration-200"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-indigo-500 focus:bg-white focus:outline-none transition-all duration-200"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Category</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-indigo-500 focus:bg-white focus:outline-none transition-all duration-200"
                >
                  <option value="bug">Report a Bug</option>
                  <option value="feature">Feature Request</option>
                  <option value="improvement">General Suggestion</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700">Message</label>
                <textarea
                  name="message"
                  required
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-100 focus:border-indigo-500 focus:bg-white focus:outline-none transition-all duration-200 resize-none"
                  placeholder="Tell us what's on your mind..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status.submitting}
                className={`w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold text-white shadow-lg transition-all duration-300 ${status.submitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-600 to-purple-600 hover:shadow-indigo-500/25 active:scale-[0.98]'
                  }`}
              >
                {status.submitting ? 'Sending...' : (
                  <>
                    Send Feedback
                    <FiSend />
                  </>
                )}
              </button>

              {status.submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-emerald-50 border border-emerald-100 rounded-xl text-emerald-700 text-center font-medium"
                >
                  Message sent! We'll get back to you soon.
                </motion.div>
              )}

              {status.error && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-100 rounded-xl text-red-700 text-center font-medium"
                >
                  {status.error}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Feedback