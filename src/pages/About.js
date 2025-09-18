import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, MapPin, Calendar, Mail, Linkedin } from 'lucide-react';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-50 to-blue-50 dark:from-dark-800 dark:to-dark-900">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center max-w-4xl mx-auto"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-6"
            >
              About Me
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Software Engineer passionate about building innovative solutions and creating impactful user experiences
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Personal Info */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8"
              >
                Personal Information
              </motion.h2>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Shiva Kumar Chakali
                  </h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Mail size={20} className="text-primary-600 dark:text-primary-400" />
                      <span className="text-gray-600 dark:text-gray-400">
                        schakali2000@gmail.com
                      </span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Linkedin size={20} className="text-primary-600 dark:text-primary-400" />
                      <a
                        href="https://www.linkedin.com/in/shiva-kumar-chakali"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        linkedin.com/in/shiva-kumar-chakali
                      </a>
                    </div>
                    <div className="flex items-center space-x-3">
                      <MapPin size={20} className="text-primary-600 dark:text-primary-400" />
                      <span className="text-gray-600 dark:text-gray-400">
                        Charlotte, NC (UNC Charlotte)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Current Status
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    <strong>Graduate Student & Full-Stack Software Engineer</strong>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Pursuing M.S. in Computer Science at UNC Charlotte. Previously worked as a Full-Stack Software Engineer at LEZIT Transports (Aug 2024 – Jul 2025).
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Actively seeking Full-time software engineering roles</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Open to remote and hybrid roles</span>
                    </div>
                  </div>
                  
                </div>
              </motion.div>
            </motion.div>

            {/* Education & Background */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2
                variants={itemVariants}
                className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8"
              >
                Education & Background
              </motion.h2>

              <motion.div variants={itemVariants} className="space-y-6">
                <div className="card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                      <GraduationCap size={24} className="text-primary-600 dark:text-primary-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        M.S. in Computer Science
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        University of North Carolina at Charlotte
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>Aug '24 – Dec '25</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>Charlotte, NC</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg">
                      <GraduationCap size={24} className="text-green-600 dark:text-green-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
                        Bachelor of Engineering
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400 mb-2">
                        Chaitanya Bharathi Institute of Technology
                      </p>
                      <div className="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-500">
                        <div className="flex items-center space-x-1">
                          <Calendar size={16} />
                          <span>2019 – 2023</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>Hyderabad, Telangana, India</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="card p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
                    Professional Journey
                  </h3>
                  <div className="space-y-4">
                    <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        LEZIT Transports (Startup)
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Full-Stack Software Engineer (Aug '24 – Jul '25)
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Built a real-time transportation booking platform using React, TypeScript, Node.js, Express, and MongoDB with secure auth (JWT/OAuth) and CI/CD.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        Deloitte USI
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Analyst & Software Developer (Sep '23 – Jul '24)
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Built React apps and Power BI dashboards with DAX, M, SQL Server, Azure Synapse, and APIs
                      </p>
                    </div>
                    <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        Amazon
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Cloud Infrastructure & DevOps Engineer Intern (Jan '23 – Jun '23)
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Improved CI/CD, managed cloud infra, resolved deployment and security issues
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Skills Overview */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-8 text-center"
            >
              Technical Expertise
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <div className="card p-6 text-center">
                <div className="text-3xl mb-4">💻</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Languages
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Python, Java, JavaScript, C++, SQL
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="text-3xl mb-4">⚛️</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Frameworks
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  React, Angular, Node, Express, Flask
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="text-3xl mb-4">☁️</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Cloud/DevOps
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  AWS, Docker, CI/CD, Jenkins, GitHub Actions
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="text-3xl mb-4">🛠️</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Tools
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Power BI, DAX, REST APIs, Git, MongoDB, MySQL, Agile
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Personal Statement */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16"
          >
            <motion.div
              variants={itemVariants}
              className="card p-8 text-center max-w-4xl mx-auto"
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
                My Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                I'm passionate about leveraging technology to solve real-world problems and create meaningful impact. 
                With a strong foundation in both frontend and backend development, I enjoy building full-stack applications 
                that deliver exceptional user experiences. My experience at Deloitte and Amazon has taught me the importance 
                of scalable architecture, clean code, and collaborative development practices.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                Currently pursuing my Master's in Computer Science at UNC Charlotte, I'm constantly learning and exploring 
                new technologies to stay at the forefront of software development. I believe in writing code that's not just 
                functional, but also maintainable, scalable, and user-friendly.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 