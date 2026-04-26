import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MapPin, Building, Award, Code, Database, Cloud, BarChart3 } from 'lucide-react';

const Experience = () => {
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

  const experiences = [
    {
      company: 'Deloitte',
      role: 'Analyst - Data Engineer',
      duration: 'September 2023 - July 2024',
      location: 'India',
      icon: Building,
      color: 'from-blue-500 to-blue-600',
      achievements: [
        'Architected end-to-end ELT pipelines processing 10M+ records daily using Python, dbt, and Snowflake, reducing reporting latency from 24 hours to under 2 hours',
        'Built a centralized analytics layer with star-schema models and live Power BI dashboards, cutting ad-hoc data requests by 40% across 5+ teams',
        'Implemented automated data quality checks using dbt tests and custom Python validators, reducing pipeline failures by 35%',
        'Optimized slow SQL queries and Spark jobs with partitioning, indexing, and broadcast joins, achieving 3x faster query execution',
        'Supported on-call production pipelines across 3 enterprise accounts, resolving incidents within SLA and maintaining 97%+ delivery uptime'
      ],
      technologies: ['Python', 'SQL', 'Spark', 'dbt', 'Snowflake', 'Power BI', 'AWS', 'Airflow', 'Data Quality', 'On-call Support']
    },
    {
      company: 'Amazon',
      role: 'Cloud Data Engineer Intern',
      duration: 'January 2023 - June 2023',
      location: 'India',
      icon: Cloud,
      color: 'from-orange-500 to-orange-600',
      achievements: [
        'Re-engineered AWS ingestion workflows using Glue, S3, and Redshift with CloudWatch monitoring and SQS dead-letter queues, increasing uptime to 99.5%',
        'Built a Python-based data quality framework for null checks, schema drift detection, and anomaly flagging across 50+ tables',
        'Participated in on-call support rotations for production data infrastructure, resolving ingestion failures and schema drift incidents quickly',
        'Partnered with product and data teams to define ingestion SLAs and schema standards for downstream analytics and ML workflows',
        'Authored pipeline runbooks and incident response playbooks, reducing mean time to resolution for recurring data issues'
      ],
      technologies: ['AWS Glue', 'AWS S3', 'Amazon Redshift', 'CloudWatch', 'SQS', 'Python', 'Data Quality', 'On-call Support']
    },
    {
      company: 'Lezit Transports',
      role: 'Data Analyst Intern',
      duration: 'January 2022 - December 2022',
      location: 'India',
      icon: BarChart3,
      color: 'from-green-500 to-green-600',
      achievements: [
        'Analyzed operational logistics data using Python and SQL to identify route inefficiencies and cost drivers, contributing to a 12% reduction in fuel costs',
        'Automated weekly reporting with Python scripts and Excel dashboards, saving operations managers 5+ hours per week',
        'Built EDA workflows to profile incoming logistics datasets, identifying quality gaps before downstream reporting',
        'Collaborated with operations and management to convert business questions into analytical frameworks and ad-hoc visual reports'
      ],
      technologies: ['Python', 'Pandas', 'NumPy', 'SQL', 'Excel Dashboards', 'EDA', 'Data Visualization']
    }
  ];

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
              Work Experience
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              2+ years delivering cloud data pipelines, ETL/ELT systems, and analytics platforms with measurable business outcomes
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-0 w-0.5 bg-gray-200 dark:bg-dark-700"></div>
                )}

                <div className="flex items-start space-x-6">
                  {/* Icon */}
                  <div className={`p-4 rounded-full bg-gradient-to-r ${exp.color} text-white shadow-lg`}>
                    <exp.icon size={24} />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="card p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                            {exp.role}
                          </h3>
                          <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-2">
                            {exp.company}
                          </h4>
                        </div>
                        <div className="flex flex-col md:items-end space-y-1">
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                            <Calendar size={16} />
                            <span className="text-sm">{exp.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                            <MapPin size={16} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center space-x-2">
                          <Award size={20} className="text-primary-600 dark:text-primary-400" />
                          <span>Key Achievements</span>
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                              <span className="text-gray-600 dark:text-gray-400">{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3 flex items-center space-x-2">
                          <Code size={20} className="text-primary-600 dark:text-primary-400" />
                          <span>Technologies & Tools</span>
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Skills Summary */}
      <section className="section-padding bg-gray-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
              Core Competencies
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Experience areas that consistently improved reliability, speed, and business decision quality
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <div className="card p-6 text-center">
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg mb-4 mx-auto w-fit">
                <Code size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Data Pipeline Architecture
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Batch and near-real-time pipeline design for ingestion, transformation, and analytics delivery
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg mb-4 mx-auto w-fit">
                <Database size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                ETL/ELT Engineering
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Python, SQL, Spark, Airflow, and dbt workflows focused on reliability and data quality
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg mb-4 mx-auto w-fit">
                <BarChart3 size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Data Analytics
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Star-schema modeling, KPI development, dashboard delivery, and self-serve analytics enablement
              </p>
            </div>

            <div className="card p-6 text-center">
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg mb-4 mx-auto w-fit">
                <Cloud size={24} className="text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Cloud & DevOps
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                AWS-based data infrastructure, monitoring, and incident response to maintain production uptime
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.h2
              variants={itemVariants}
              className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4"
            >
              Education
            </motion.h2>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto space-y-6"
          >
            <div className="card p-8">
              <div className="flex items-start space-x-6">
                <div className="p-4 bg-primary-100 dark:bg-primary-900/20 rounded-lg">
                  <Building size={24} className="text-primary-600 dark:text-primary-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    M.S. in Computer Science
                  </h3>
                  <h4 className="text-xl font-semibold text-primary-600 dark:text-primary-400 mb-4">
                    University of North Carolina at Charlotte
                  </h4>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-2 sm:space-y-0">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} />
                      <span>Aug 2024 – Dec 2025</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <MapPin size={16} />
                      <span>Charlotte, NC</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 mt-4">
                    Master of Science in Computer Science.
                    Bachelor of Engineering in Information Technology, Chaitanya Bharathi Institute of Technology.
                    Publication: "A Review on Deep Learning Techniques for Classifying Images and Generating Captions" (Springer Nature, Dec 2023).
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Experience; 