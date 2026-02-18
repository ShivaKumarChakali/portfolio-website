import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, Linkedin } from 'lucide-react';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-blue-50 dark:from-dark-800 dark:to-dark-900">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%239C92AC%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        </div>

        <div className="container-custom section-padding relative z-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            {/* Profile Picture */}
            <motion.div variants={itemVariants} className="mb-8">
              <div className="flex justify-center">
                <div className="relative">
                  <img 
                    src="/profile-photo.jpg" 
                    alt="Shiva Kumar Chakali" 
                    className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white dark:border-gray-800 shadow-xl scale-100"
                  />
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm">👋</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Greeting */}
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium">
                <span>Hello, I'm</span>
              </div>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-gray-100 mb-6"
            >
              Shiva Kumar{' '}
              <span className="text-primary-600 dark:text-primary-400">Chakali</span>
            </motion.h1>

            {/* Title */}
            <motion.h2
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-8"
            >
              Full-Stack Software Engineer & M.S. Graduate
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Full-Stack Software Engineer with an M.S. in Computer Science from UNC Charlotte. Previously at LEZIT Transports (Aug 2024 – Jul 2025). I build fast, accessible web apps with React, TypeScript, and Node.js and ship to the cloud. <strong className="text-primary-600 dark:text-primary-400">Actively seeking full-time software engineering opportunities.</strong>
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/projects"
                className="btn-primary flex items-center space-x-2 group"
              >
                <span>View My Work</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <a
                href="mailto:schakali2000@gmail.com"
                className="btn-secondary flex items-center space-x-2"
              >
                <Mail size={20} />
                <span>Get In Touch</span>
              </a>

            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex justify-center space-x-6 mt-12"
            >
              <a
                href="https://www.linkedin.com/in/shiva-kumar-chakali"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
              <a
                href="mailto:schakali2000@gmail.com"
                className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <Mail size={24} className="text-gray-600 dark:text-gray-400" />
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Experience Overview Section */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              My journey in software development and technology
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* LEZIT Transports */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6 relative overflow-hidden"
            >
              {/* Past Role Badge removed */}
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">L</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    LEZIT Transports
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    Full-Stack Software Engineer
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                    Aug 2024 – Jul 2025 • Remote
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Executed end-to-end software solution design and development for a real-time transportation booking platform.
                    Developed secure code using React.js, TypeScript, and Node.js with scalable backend architecture.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Deloitte Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <img 
                    src="/deloitte-logo.png" 
                    alt="Deloitte Logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Deloitte USI
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    Analyst & Software Developer
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                    Sep 2023 – Jul 2024 • Telangana, India
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Executed software development tasks, created Power BI dashboards with SQL Server and Azure cloud. 
                    Reduced manual reporting processes by 40% through automation and improved application performance by 20%.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Amazon Experience */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6 relative overflow-hidden"
            >
              {/* Accolade Badge */}
              <div className="absolute top-4 right-4">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                  🏆 Accolade Award
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                  <img 
                    src="/amazon-logo.png" 
                    alt="Amazon Logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    Amazon
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    Cloud Infrastructure & DevOps Engineer Intern
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 mb-3">
                    Jan 2023 – Jun 2023 • Development Center, Telangana, India
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
                    Enhanced CI/CD automation pipelines, reducing manual toil by 50%. Implemented secure IAM-based authentication 
                    systems and cloud migration solutions using AWS CloudFormation and ECS.
                  </p>
                  <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 pl-3 py-2">
                    <p className="text-sm text-yellow-800 dark:text-yellow-200 font-medium">
                      🎉 Received accolade from senior manager for exceptional performance and contributions
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recent Work Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
              Recent Work
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Here are some of my latest projects and contributions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Smart Traffic Lights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1545459720-aac8509eb02c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Smart Traffic Lights" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Smart Traffic Lights
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Reinforcement learning solution achieving 99.8% reduction in wait times
              </p>
              <span className="text-gray-500 dark:text-gray-500 text-sm">
                Research Project
              </span>
            </motion.div>

            {/* BookMyEvent */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="BookMyEvent" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                BookMyEvent (BME)
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Event management platform with MERN architecture and AWS services
              </p>
              <span className="text-gray-500 dark:text-gray-500 text-sm">
                Capstone Project
              </span>
            </motion.div>

            {/* Power BI Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="card p-6 hover:scale-105 transition-transform duration-300"
            >
              <div className="h-48 rounded-lg mb-4 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80" 
                  alt="Power BI Dashboard" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                React & Power BI Development
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Built React apps and Power BI dashboards with DAX, M, and Azure Synapse
              </p>
              <span className="text-gray-500 dark:text-gray-500 text-sm">
                Deloitte USI
              </span>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Link
              to="/projects"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>View All Projects</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 
