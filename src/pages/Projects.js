import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Globe, X, ArrowRight } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const projects = [
    {
      id: 1,
      title: 'Stock Fantasy Simulator',
      description: 'A full-stack web application that simulates stock trading in a gamified environment. Built with React, TypeScript, Node.js, and PostgreSQL.',
      longDescription: 'A full-stack web application that simulates stock trading in a gamified environment. Built with React, TypeScript, Node.js, and PostgreSQL. Designed transaction-safe backend logic for buy/sell operations, optimized database queries for performance, and implemented REST APIs for real-time portfolio updates. Deployed with CI/CD pipelines in a cloud environment.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'saas',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs'],
      liveUrl: null,
      githubUrl: null,
      featured: true,
      features: [
        'Transaction-safe backend logic for buy/sell operations',
        'Optimized database queries for performance',
        'REST APIs for real-time portfolio updates',
        'Gamified trading simulation environment',
        'Deployed with CI/CD pipelines',
        'Cloud-based deployment'
      ]
    },
    {
      id: 2,
      title: 'MenuVerse3D / Tech-Menu',
      description: 'A SaaS platform enabling restaurants to showcase interactive 3D menus. Built with Next.js, React, and Tailwind CSS.',
      longDescription: 'A SaaS platform enabling restaurants to showcase interactive 3D menus. Built with Next.js, React, and Tailwind CSS. Integrated AI-powered 3D generation APIs and dynamic content workflows. Focused on performance optimization, SEO, and responsive UI to deliver a production-ready marketing and ordering experience.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'saas',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'AI APIs', '3D Generation'],
      liveUrl: null,
      githubUrl: null,
      featured: true,
      features: [
        'AI-powered 3D generation APIs',
        'Dynamic content workflows',
        'Performance optimization',
        'SEO optimization',
        'Responsive UI design',
        'Production-ready marketing and ordering experience'
      ]
    },
    {
      id: 3,
      title: 'CampusCycle',
      description: 'A student marketplace platform for buying, selling, and exchanging items. Developed using React and Node.js with PostgreSQL.',
      longDescription: 'A student marketplace platform for buying, selling, and exchanging items. Developed using React and Node.js with PostgreSQL. Designed modular frontend components, built REST APIs for listings and messaging, and optimized data retrieval for scalable performance. Deployed with automated CI/CD workflows.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'REST APIs'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Modular frontend components',
        'REST APIs for listings and messaging',
        'Optimized data retrieval for scalable performance',
        'Automated CI/CD workflows',
        'Student-focused marketplace platform'
      ]
    },
    {
      id: 4,
      title: 'Rainfall Prediction & Data Analysis',
      description: 'Developed predictive models using Python, Pandas, and SQL to analyze historical weather datasets.',
      longDescription: 'Developed predictive models using Python, Pandas, and SQL to analyze historical weather datasets. Performed statistical analysis and feature engineering, visualized results using Matplotlib, and evaluated model performance to extract actionable insights.',
      image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'ai-ml',
      technologies: ['Python', 'Pandas', 'SQL', 'Matplotlib', 'Statistical Analysis'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Predictive modeling for rainfall',
        'Statistical analysis and feature engineering',
        'Data visualization with Matplotlib',
        'Model performance evaluation',
        'Actionable insights extraction'
      ]
    },
    {
      id: 5,
      title: 'Power BI Business Dashboard Project',
      description: 'Built interactive business intelligence dashboards using Power BI and SQL Server.',
      longDescription: 'Built interactive business intelligence dashboards using Power BI and SQL Server. Designed complex queries and optimized ETL-style data transformations. Delivered KPI visualizations and automated reporting workflows to improve operational decision-making.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'data',
      technologies: ['SQL', 'Power BI', 'ETL', 'Data Visualization'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Complex SQL query design',
        'Optimized ETL-style data transformations',
        'KPI visualizations',
        'Automated reporting workflows',
        'Enterprise reporting dashboards',
        'Improved operational decision-making'
      ]
    },
    {
      id: 6,
      title: 'Smart Traffic Lights with Federated Reinforcement Learning',
      description: 'Designed a reinforcement learning system to optimize traffic signal timing using SUMO simulations and TensorFlow (DQN).',
      longDescription: 'Designed a reinforcement learning system to optimize traffic signal timing using SUMO simulations and TensorFlow (DQN). Implemented federated learning concepts to simulate distributed traffic nodes, improving overall traffic flow efficiency in modeled environments. Achieved a remarkable 99.8% reduction in average wait times.',
      image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'ai-ml',
      technologies: ['SUMO', 'TensorFlow', 'DQN', 'Reinforcement Learning', 'Python'],
      liveUrl: null,
      githubUrl: 'https://github.com/ChakaliShivaKumar/Smart-Traffic-Lights',
      featured: true,
      features: [
        'Federated reinforcement learning implementation',
        'SUMO traffic simulation integration',
        'TensorFlow DQN agents',
        'Distributed traffic node simulation',
        '99.8% reduction in average wait times',
        'Traffic flow efficiency optimization'
      ]
    },
    {
      id: 7,
      title: 'Distributed Log Aggregator / Monitoring Tool',
      description: 'Built a high-throughput log ingestion and monitoring system using Node.js and Redis.',
      longDescription: 'Built a high-throughput log ingestion and monitoring system using Node.js and Redis. Implemented parallel processing for large-scale log streams and created dashboards to visualize latency and error metrics. Containerized services and deployed in a cloud environment.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'infrastructure',
      technologies: ['Node.js', 'Redis', 'Docker', 'Monitoring', 'Log Aggregation'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'High-throughput log ingestion',
        'Parallel processing for large-scale log streams',
        'Latency and error metrics dashboards',
        'Containerized services',
        'Cloud deployment',
        'Real-time monitoring capabilities'
      ]
    },
    {
      id: 8,
      title: 'Cloud Automation Scripts (AWS)',
      description: 'Developed Python-based automation tools to streamline infrastructure provisioning and deployment workflows.',
      longDescription: 'Developed Python-based automation tools to streamline infrastructure provisioning and deployment workflows. Integrated with AWS services, improving reliability and reducing manual operational overhead.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'infrastructure',
      technologies: ['Python', 'AWS', 'Automation', 'Infrastructure as Code'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Infrastructure provisioning automation',
        'Deployment workflow automation',
        'AWS service integration',
        'Improved reliability',
        'Reduced manual operational overhead'
      ]
    },
    {
      id: 9,
      title: 'CI/CD Pipeline Implementations',
      description: 'Designed and implemented CI/CD workflows using GitHub Actions and Docker.',
      longDescription: 'Designed and implemented CI/CD workflows using GitHub Actions and Docker. Automated build, test, and deployment processes to ensure reliable and consistent releases across environments.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'devops',
      technologies: ['GitHub Actions', 'Docker', 'CI/CD', 'Automation'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Automated build processes',
        'Automated testing workflows',
        'Automated deployment processes',
        'Containerized production deployments',
        'Reliable and consistent releases',
        'Multi-environment support'
      ]
    },
    {
      id: 10,
      title: 'Personal Portfolio (skchakali.onrender.com)',
      description: 'Designed and deployed a production-ready portfolio site using React/Next.js.',
      longDescription: 'Designed and deployed a production-ready portfolio site using React/Next.js. Optimized performance, implemented responsive design, and integrated cloud hosting for reliability and scalability.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'React'],
      liveUrl: 'https://skchakali.onrender.com',
      githubUrl: null,
      featured: false,
      features: [
        'Production-ready deployment',
        'Performance optimization',
        'Responsive design',
        'Cloud hosting integration',
        'Reliability and scalability'
      ]
    },
    {
      id: 11,
      title: 'NinerConnect',
      description: 'Built a founder-investor matchmaking platform to connect startups with potential investors.',
      longDescription: 'Built a founder-investor matchmaking platform to connect startups with potential investors. Designed REST APIs, authentication flows, and scalable database schema to support user onboarding and matching logic.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'platform',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Authentication'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Founder-investor matchmaking',
        'REST API design',
        'Authentication flows',
        'Scalable database schema',
        'User onboarding system',
        'Matching logic implementation'
      ]
    },
    {
      id: 12,
      title: 'Capita',
      description: 'Developed a marketplace-style web platform connecting founders and investors.',
      longDescription: 'Developed a marketplace-style web platform connecting founders and investors. Implemented modular frontend architecture, backend APIs, and secure authentication. Focused on scalable database structure and maintainable system design.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'platform',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Authentication'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Marketplace-style platform',
        'Modular frontend architecture',
        'Backend API implementation',
        'Secure authentication',
        'Scalable database structure',
        'Maintainable system design'
      ]
    },
    {
      id: 13,
      title: 'BookMyEvent (BME)',
      description: 'College capstone project using MERN-style architecture with AWS services to manage event scheduling, ticket booking, and calendar viewing with a responsive React.js frontend and secure Node.js/Express.js backend.',
      longDescription: 'BookMyEvent (BME) is a comprehensive event management platform developed as a college capstone project. The application uses MERN-style architecture with AWS services for scalable, low-latency data storage. Features include role-based authentication with JWT, QR Code generation for digital tickets, real-time availability checks, and a responsive design for both mobile and desktop users.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'fullstack',
      technologies: ['React.js', 'Node.js', 'Express.js', 'AWS DynamoDB', 'JWT', 'QR Code Generation', 'RESTful APIs', 'MongoDB'],
      liveUrl: null,
      githubUrl: 'https://github.com/ChakaliShivaKumar/BookMyEvent',
      featured: false,
      features: [
        'Event scheduling and ticket booking system',
        'Role-based authentication with JWT',
        'QR Code generation for digital tickets',
        'Real-time availability checks',
        'AWS DynamoDB for scalable data storage',
        'Responsive React.js frontend'
      ]
    },
    {
      id: 14,
      title: 'AWS Infrastructure Automation',
      description: 'DevOps project focused on automating AWS infrastructure deployment using Infrastructure as Code (IaC) principles and CI/CD pipelines.',
      longDescription: 'Developed during my role at Amazon, this project implements Infrastructure as Code using AWS CloudFormation and Terraform. The solution includes automated CI/CD pipelines with Jenkins and GitHub Actions, containerization with Docker, and comprehensive monitoring and logging solutions.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'devops',
      technologies: ['AWS', 'Terraform', 'Docker', 'Jenkins', 'GitHub Actions', 'CloudFormation', 'Monitoring'],
      liveUrl: null,
      githubUrl: 'https://github.com/ChakaliShivaKumar/AWS-Infrastructure',
      featured: false,
      features: [
        'Infrastructure as Code implementation',
        'Automated CI/CD pipelines',
        'Container orchestration with Docker',
        'Comprehensive monitoring setup',
        'Security best practices',
        'Scalable architecture design'
      ]
    }
  ];

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
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
              My Projects
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              A collection of projects showcasing my skills in full-stack development, AI/ML, and cloud technologies
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          {/* Projects Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
          >
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                className="card overflow-hidden hover:scale-105 transition-transform duration-300"
              >
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-gray-600 dark:text-gray-400 rounded text-xs">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Project Links */}
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:underline"
                        >
                          <Globe size={16} />
                          <span className="text-sm">Live</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100"
                        >
                          <Github size={16} />
                          <span className="text-sm">Code</span>
                        </a>
                      )}
                    </div>
                    <button
                      onClick={() => openProjectModal(project)}
                      className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                    >
                      <span className="text-sm font-medium">See More</span>
                      <ArrowRight size={14} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Featured Projects Section */}
      {projects.filter(p => p.featured).length > 0 && (
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
                className="text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4"
              >
                Featured Projects
              </motion.h2>
              <motion.p
                variants={itemVariants}
                className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
              >
                Highlighted projects showcasing innovative solutions and technical excellence
              </motion.p>
            </motion.div>

            <div className="space-y-12">
              {projects.filter(p => p.featured).map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="max-w-4xl mx-auto"
                >
                  <div className="card p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                          {project.title}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                          {project.longDescription}
                        </p>
                        
                        <div className="space-y-4">
                          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
                            Key Features:
                          </h4>
                          <ul className="space-y-2">
                            {project.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start space-x-2">
                                <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                                <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                          Technology Stack
                        </h3>
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((tech) => (
                            <span key={tech} className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>

                        <div className="flex flex-wrap gap-3 mt-6">
                          {project.liveUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-primary inline-flex items-center space-x-2"
                            >
                              <Globe size={20} />
                              <span>View Live</span>
                            </a>
                          )}
                          {project.githubUrl && (
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="btn-secondary inline-flex items-center space-x-2"
                            >
                              <Github size={20} />
                              <span>View Code</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Details Modal */}
      <AnimatePresence>
        {isModalOpen && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-dark-900 rounded-xl shadow-xl max-w-3xl w-full max-h-[85vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header with Image */}
              <div className="relative">
                <div className="h-48 overflow-hidden rounded-t-xl">
                  <img 
                    src={selectedProject.image} 
                    alt={selectedProject.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                <button
                  onClick={closeProjectModal}
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-dark-800/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white dark:hover:bg-dark-800 transition-all duration-200 hover:scale-110"
                >
                  <X size={18} className="text-gray-600 dark:text-gray-400" />
                </button>
                <div className="absolute bottom-4 left-4 right-4">
                  <h2 className="text-2xl font-bold text-white mb-2 drop-shadow-lg">
                    {selectedProject.title}
                  </h2>
                  <div className="flex flex-wrap gap-1">
                    {selectedProject.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {selectedProject.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white rounded-full text-xs font-medium border border-white/30">
                        +{selectedProject.technologies.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 overflow-y-auto max-h-[calc(85vh-192px)]">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Project Overview
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                    {selectedProject.longDescription}
                  </p>
                </div>

                {/* Technologies Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-3">
                    Key Features
                  </h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="text-primary-600 dark:text-primary-400 mt-1">•</span>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Project Links */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-200 dark:border-dark-700">
                  {selectedProject.liveUrl && (
                    <a
                      href={selectedProject.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium"
                    >
                      <Globe size={16} />
                      <span>View Live Project</span>
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary inline-flex items-center space-x-2 px-4 py-2 text-sm font-medium"
                    >
                      <Github size={16} />
                      <span>View Code</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects; 