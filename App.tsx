import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Code2, MonitorSmartphone, AppWindow, Github, Mail, Phone, MapPin } from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  const services = [
    {
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and engaging user interfaces with modern design principles and seamless user experiences.',
    },
    {
      icon: <MonitorSmartphone className="w-8 h-8 text-cyan-400" />,
      title: 'Web Design',
      description: 'Developing responsive and dynamic websites that adapt perfectly to all devices and screen sizes.',
    },
    {
      icon: <AppWindow className="w-8 h-8 text-cyan-400" />,
      title: 'App Design',
      description: 'Building native and cross-platform mobile applications with cutting-edge technologies.',
    },
  ];

  const technicalSkills = [
    { name: 'HTML', level: 90, icon: '🌐' },
    { name: 'CSS', level: 60, icon: '🎨' },
    { name: 'JavaScript', level: 85, icon: '⚡' },
    { name: 'Python', level: 50, icon: '🐍' },
    { name: 'React', level: 75, icon: '⚛️' },
  ];

  const professionalSkills = [
    { name: 'Creativity', level: 90 },
    { name: 'Communication', level: 65 },
    { name: 'Problem Solving', level: 75 },
    { name: 'Teamwork', level: 85 },
  ];

  const projects = [
    {
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop",
      title: "UI/UX Design System",
      description: "Modern design system implementation"
    },
    {
      image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop",
      title: "Web Development",
      description: "Responsive website development"
    },
    {
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=600&fit=crop",
      title: "Mobile App Design",
      description: "Cross-platform mobile application"
    },
  ];

  return (
    <div className="min-h-screen bg-[#0a192f] text-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-[#0a192f]/90 backdrop-blur-sm z-50 border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-2xl font-bold text-cyan-400"
            >
              Portfolio.
            </motion.div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Services', 'Skills', 'Project', 'Contact'].map((item) => (
                <motion.button
                  key={item}
                  whileHover={{ scale: 1.1, color: '#22d3ee' }}
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                  onClick={() => setActiveSection(item.toLowerCase())}
                >
                  {item}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:w-1/2"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Hello, I'm <span className="text-cyan-400">John Doe</span>
            </h1>
            <h2 className="text-2xl md:text-3xl mb-6">
              And I'm a <span className="text-cyan-400">Frontend Developer</span>
            </h2>
            <p className="text-gray-400 mb-8 text-lg">
              I'm a web Designer with extensive experience for over 3 years.
              My expertise is to create and website design, frontend design, and many more....
            </p>
            <div className="flex space-x-4 mb-8">
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="#"
                className="w-10 h-10 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="#"
                className="w-10 h-10 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="#"
                className="w-10 h-10 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -5 }}
                href="#"
                className="w-10 h-10 rounded-full border border-cyan-400 flex items-center justify-center text-cyan-400 hover:bg-cyan-400 hover:text-white transition-colors"
              >
                <Github size={20} />
              </motion.a>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="px-8 py-3 bg-cyan-400 text-white rounded-full font-semibold hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-400/50"
            >
              More About Me
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:w-1/2 mt-12 md:mt-0"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full blur-3xl opacity-30"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces"
                alt="Profile"
                className="relative w-72 h-72 rounded-full mx-auto object-cover border-4 border-cyan-400/50"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          My <span className="text-cyan-400">Services</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="p-6 rounded-2xl bg-gradient-to-b from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 backdrop-blur-sm hover:border-cyan-400/40 transition-colors group"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-cyan-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400">{service.description}</p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="mt-4 px-6 py-2 text-sm text-cyan-400 rounded-full border border-cyan-400/50 hover:bg-cyan-400 hover:text-white transition-colors"
              >
                Learn More
              </motion.button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          My <span className="text-cyan-400">Skills</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 border-b-2 border-cyan-400 pb-2 inline-block">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg">
                      {skill.icon} {skill.name}
                    </span>
                    <span className="text-cyan-400">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-purple-500"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Professional Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 border-b-2 border-cyan-400 pb-2 inline-block">
              Professional Skills
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {professionalSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="relative flex flex-col items-center"
                >
                  <svg className="w-32 h-32 mb-4">
                    <circle
                      className="text-gray-700"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="58"
                      cx="64"
                      cy="64"
                    />
                    <motion.circle
                      initial={{ strokeDasharray: "0 360" }}
                      whileInView={{
                        strokeDasharray: `${(skill.level / 100) * 360} 360`
                      }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="text-cyan-400"
                      strokeWidth="8"
                      stroke="currentColor"
                      fill="transparent"
                      r="58"
                      cx="64"
                      cy="64"
                      strokeDashoffset="90"
                      transform="rotate(-90 64 64)"
                    />
                  </svg>
                  <div className="text-center mt-2">
                    <span className="text-2xl font-bold text-cyan-400 block mb-1">
                      {skill.level}%
                    </span>
                    <span className="text-sm text-gray-400">{skill.name}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Latest <span className="text-cyan-400">Projects</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-300">{project.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16"
        >
          Contact <span className="text-cyan-400">Me</span>
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400">Email</p>
                <p className="text-lg">contact@example.com</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400">Phone</p>
                <p className="text-lg">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-cyan-400/10 flex items-center justify-center">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <p className="text-gray-400">Location</p>
                <p className="text-lg">New York, USA</p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-gradient-to-b from-cyan-500/10 to-purple-500/10 border border-cyan-500/20 rounded-2xl p-8"
          >
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-400"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-400"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900/50 border border-cyan-500/20 rounded-lg focus:outline-none focus:border-cyan-400"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                className="w-full px-8 py-3 bg-cyan-400 text-white rounded-lg font-semibold hover:bg-cyan-500 transition-colors shadow-lg shadow-cyan-400/50"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),rgba(0,0,0,0.5))]" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-2 w-2 bg-cyan-400/20 rounded-full"
            animate={{
              x: [
                Math.random() * window.innerWidth,
                Math.random() * window.innerWidth,
              ],
              y: [
                Math.random() * window.innerHeight,
                Math.random() * window.innerHeight,
              ],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;