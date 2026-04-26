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
              Data Engineer building scalable cloud pipelines and analytics systems with measurable business outcomes
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
                        href="https://www.linkedin.com/in/shiva-k-chakali/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                      >
                        linkedin.com/in/shiva-k-chakali
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
                    <strong>Data Engineer with 2+ years of experience</strong>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    I design and optimize cloud-based data pipelines, ETL workflows, and analytics platforms across big tech and
                    enterprise consulting environments. I specialize in AWS, Python, SQL, Spark, and dbt, with a focus on
                    production reliability, on-call ownership, and converting complex data requirements into business impact.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-900 dark:text-gray-100">Actively seeking full-time Data Engineer roles</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Open to remote, hybrid, and on-site data platform opportunities</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <span className="text-sm text-gray-600 dark:text-gray-400">Available for immediate start</span>
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
                          <span>Aug '24 - Dec '25</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin size={16} />
                          <span>Charlotte, NC</span>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-3">
                        Bachelor of Engineering in Information Technology, Chaitanya Bharathi Institute of Technology (Aug '19 - Jun '23, India)
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
                        Publication: "A Review on Deep Learning Techniques for Classifying Images and Generating Captions" - Springer Nature, Dec 2023
                      </p>
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
                        Deloitte
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Analyst - Data Engineer (Sep '23 - Jul '24)
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Built ELT pipelines processing 10M+ records/day with Python, dbt, and Snowflake, cutting reporting
                        latency from 24 hours to under 2 hours while improving reliability for enterprise stakeholders.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        Amazon
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Cloud Data Engineer Intern (Jan '23 - Jun '23)
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Re-engineered AWS ingestion workflows with Glue, S3, Redshift, and CloudWatch, increasing uptime
                        to 99.5% and reducing manual intervention incidents by 60%.
                      </p>
                    </div>
                    <div className="border-l-4 border-primary-600 dark:border-primary-400 pl-4">
                      <h4 className="font-semibold text-gray-900 dark:text-gray-100">
                        Lezit Transports
                      </h4>
                      <p className="text-gray-600 dark:text-gray-400">
                        Data Analyst Intern (Jan '22 - Dec '22)
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-500">
                        Analyzed logistics datasets using Python and SQL, helping drive a 12% fuel cost reduction through
                        route optimization and automated weekly reporting.
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
                  JavaScript, TypeScript, Python, Java, SQL, C++
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="text-3xl mb-4">⚛️</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Frameworks
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  React, Next.js, Node.js, Express, Angular, Tailwind CSS
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="text-3xl mb-4">☁️</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Cloud/DevOps
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  AWS, Docker, CI/CD, GitHub Actions, Terraform, Jenkins
                </p>
              </div>

              <div className="card p-6 text-center">
                <div className="text-3xl mb-4">🛠️</div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                  Databases & Tools
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  PostgreSQL, MongoDB, MySQL, Redis, Power BI, REST APIs, Git
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
                I build scalable data infrastructure and analytics systems that improve reliability, reduce latency,
                and support faster business decision-making. Across Deloitte, Amazon, and Lezit, I have delivered
                cloud-native pipelines, data quality frameworks, and operational automation with measurable outcomes.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mt-4">
                I am focused on Data Engineering roles where I can design production-grade ETL/ELT systems,
                uphold on-call reliability, and enable self-serve analytics at scale.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About; 