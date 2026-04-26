import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Github, Globe, X, ArrowRight } from 'lucide-react';

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
      description: 'Problem: delayed portfolio updates in simulated trading. Solution: transaction-safe APIs with optimized queries. Impact: sub-second updates and 60% faster decision loops.',
      longDescription: 'Problem: users needed real-time portfolio visibility for simulated trading. Solution: built transaction-safe buy/sell workflows and optimized PostgreSQL access patterns with REST APIs for low-latency updates. Impact: reduced update latency by ~60%, improved platform reliability, and enabled users to make faster investment decisions. Tech: React, TypeScript, Node.js, PostgreSQL, REST APIs.',
      image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'saas',
      technologies: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'REST APIs'],
      liveUrl: null,
      githubUrl: null,
      featured: true,
      features: [
        'Problem: delayed and inconsistent portfolio state during active trading sessions',
        'Solution: implemented transaction-safe operations and optimized query/index strategy',
        'Impact: cut update latency by ~60% and improved user decision-making speed',
        'Tech: React, TypeScript, Node.js, PostgreSQL, REST APIs, CI/CD'
      ]
    },
    {
      id: 2,
      title: 'MenuVerse3D / Tech-Menu',
      description: 'Problem: low-engagement menu discovery for restaurants. Solution: AI-powered 3D menu SaaS. Impact: improved interaction rates and faster menu exploration.',
      longDescription: 'Problem: restaurant catalogs were static and conversion rates were low. Solution: built a SaaS workflow for AI-generated 3D menu content with dynamic publishing and responsive delivery. Impact: improved session engagement, reduced content publishing effort, and enabled business teams to optimize digital menu performance. Tech: Next.js, React, Tailwind CSS, AI APIs.',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'saas',
      technologies: ['Next.js', 'React', 'Tailwind CSS', 'AI APIs', '3D Generation'],
      liveUrl: null,
      githubUrl: null,
      featured: true,
      features: [
        'Problem: static menus reduced customer interaction and discovery',
        'Solution: launched AI-assisted 3D menu generation and dynamic content workflows',
        'Impact: increased engagement and reduced manual menu-update overhead',
        'Tech: Next.js, React, Tailwind CSS, AI APIs, SEO optimization'
      ]
    },
    {
      id: 3,
      title: 'CampusCycle',
      description: 'Problem: fragmented campus buy/sell channels. Solution: centralized marketplace with optimized APIs. Impact: faster listing discovery and reduced transaction friction.',
      longDescription: 'Problem: students relied on disconnected channels to buy and sell items. Solution: developed a marketplace platform with modular UI, messaging APIs, and optimized data retrieval. Impact: improved listing discovery speed, reduced user friction, and enabled better marketplace visibility for student organizations. Tech: React, Node.js, PostgreSQL, REST APIs, CI/CD.',
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'fullstack',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'REST APIs'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Problem: no unified platform for student commerce workflows',
        'Solution: built listing, messaging, and retrieval services with modular architecture',
        'Impact: improved search and response time; reduced transaction drop-offs',
        'Tech: React, Node.js, PostgreSQL, REST APIs, CI/CD'
      ]
    },
    {
      id: 4,
      title: 'Rainfall Prediction & Data Analysis',
      description: 'Problem: limited forecasting visibility in historical rainfall trends. Solution: predictive analytics pipeline. Impact: improved forecast confidence and planning readiness.',
      longDescription: 'Problem: historical weather data was underutilized for planning. Solution: built a data preparation and predictive modeling workflow with feature engineering and statistical evaluation. Impact: improved forecast confidence and enabled better planning decisions through clearer trend visibility. Tech: Python, Pandas, SQL, Matplotlib.',
      image: 'https://images.unsplash.com/photo-1534088568595-a066f410bcda?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'ai-ml',
      technologies: ['Python', 'Pandas', 'SQL', 'Matplotlib', 'Statistical Analysis'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Problem: raw weather data lacked forecasting utility',
        'Solution: engineered predictive pipeline with feature enrichment and model validation',
        'Impact: improved planning accuracy with stronger insight quality',
        'Tech: Python, Pandas, SQL, Matplotlib, statistical modeling'
      ]
    },
    {
      id: 5,
      title: 'Power BI Business Dashboard Project',
      description: 'Problem: delayed KPI reporting for business leaders. Solution: automated BI dashboards. Impact: 70% faster reporting cycles and stronger decision cadence.',
      longDescription: 'Problem: leadership teams faced delays in accessing operational KPIs. Solution: built automated BI pipelines, optimized SQL transformations, and delivered executive dashboards. Impact: reduced reporting cycle time by ~70%, improved decision-making by surfacing trends earlier, and reduced manual reporting overhead. Tech: SQL, Power BI, ETL, Data Visualization.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'data',
      technologies: ['SQL', 'Power BI', 'ETL', 'Data Visualization'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Problem: KPI reports were manual, delayed, and inconsistent',
        'Solution: automated ETL-style transformations and dashboard refresh workflows',
        'Impact: cut report cycle time by ~70% and enabled faster operational decisions',
        'Tech: SQL, Power BI, ETL, KPI visualization'
      ]
    },
    {
      id: 6,
      title: 'Smart Traffic Lights with Federated Reinforcement Learning',
      description: 'Problem: inefficient traffic signal timing. Solution: federated RL optimization. Impact: 99.8% reduction in average wait times in simulation.',
      longDescription: 'Problem: static traffic signal timing caused heavy congestion in modeled intersections. Solution: implemented federated reinforcement learning agents with SUMO and TensorFlow DQN across distributed nodes. Impact: achieved 99.8% reduction in average wait times in simulation and improved throughput consistency. Tech: SUMO, TensorFlow, DQN, Python.',
      image: 'https://images.unsplash.com/photo-1545459720-aac8509eb02c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'ai-ml',
      technologies: ['SUMO', 'TensorFlow', 'DQN', 'Reinforcement Learning', 'Python'],
      liveUrl: null,
      githubUrl: 'https://github.com/ChakaliShivaKumar/Smart-Traffic-Lights',
      featured: true,
      features: [
        'Problem: fixed-timing traffic signals increased queue depth and delays',
        'Solution: trained distributed RL agents using federated coordination',
        'Impact: 99.8% lower average wait time in simulation environments',
        'Tech: SUMO, TensorFlow DQN, Python, reinforcement learning'
      ]
    },
    {
      id: 7,
      title: 'Distributed Log Aggregator / Monitoring Tool',
      description: 'Problem: fragmented observability across services. Solution: centralized log ingestion and metrics. Impact: faster incident triage and improved uptime confidence.',
      longDescription: 'Problem: distributed services lacked unified monitoring. Solution: built high-throughput ingestion with parallel processing and real-time latency/error dashboards. Impact: shortened incident triage time and improved production visibility for engineering and operations teams. Tech: Node.js, Redis, Docker, Monitoring.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'infrastructure',
      technologies: ['Node.js', 'Redis', 'Docker', 'Monitoring', 'Log Aggregation'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Problem: logs and error signals were siloed across environments',
        'Solution: implemented centralized ingestion with streaming metric dashboards',
        'Impact: improved alert response speed and reduced MTTR',
        'Tech: Node.js, Redis, Docker, cloud monitoring'
      ]
    },
    {
      id: 8,
      title: 'Cloud Automation Scripts (AWS)',
      description: 'Problem: repetitive manual cloud provisioning tasks. Solution: Python automation on AWS. Impact: lower deployment errors and reduced operational overhead.',
      longDescription: 'Problem: manual infrastructure actions slowed delivery and increased risk. Solution: created Python-based AWS automation scripts for provisioning and release workflows. Impact: reduced manual operational overhead and improved deployment consistency across environments. Tech: Python, AWS, automation, IaC patterns.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'infrastructure',
      technologies: ['Python', 'AWS', 'Automation', 'Infrastructure as Code'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Problem: infrastructure setup and release tasks were manual and error-prone',
        'Solution: automated provisioning and deployment workflows with Python and AWS',
        'Impact: reduced manual effort and increased environment reliability',
        'Tech: Python, AWS, automation, infrastructure-as-code practices'
      ]
    },
    {
      id: 9,
      title: 'CI/CD Pipeline Implementations',
      description: 'Problem: inconsistent manual release workflows. Solution: automated CI/CD pipelines. Impact: faster, repeatable releases with lower failure rates.',
      longDescription: 'Problem: release processes were slow and inconsistent. Solution: implemented automated build, test, and deployment pipelines with containerized delivery. Impact: improved release frequency, reduced deployment risk, and enabled engineering teams to ship changes with confidence. Tech: GitHub Actions, Docker, CI/CD.',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'devops',
      technologies: ['GitHub Actions', 'Docker', 'CI/CD', 'Automation'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Problem: release execution depended on manual handoffs',
        'Solution: automated build-test-deploy flow with containerized artifacts',
        'Impact: reduced release cycle time and improved deployment consistency',
        'Tech: GitHub Actions, Docker, CI/CD automation'
      ]
    },
    {
      id: 10,
      title: 'Personal Portfolio (skchakali.onrender.com)',
      description: 'Problem: static profile lacked measurable professional context. Solution: production portfolio with outcome-focused content. Impact: clearer recruiter signal and faster profile evaluation.',
      longDescription: 'Problem: hiring stakeholders needed a fast way to evaluate technical scope and impact. Solution: deployed a responsive portfolio with performance optimization and structured project narratives. Impact: improved recruiter navigation efficiency and stronger communication of business-impact outcomes. Tech: Next.js, TypeScript, Tailwind, React.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'web',
      technologies: ['Next.js', 'TypeScript', 'Tailwind', 'React'],
      liveUrl: 'https://skchakali.onrender.com',
      githubUrl: null,
      featured: false,
      features: [
        'Problem: previous profile lacked impact-driven presentation',
        'Solution: built optimized, responsive portfolio with clear technical narratives',
        'Impact: improved profile clarity and hiring-team decision speed',
        'Tech: Next.js, TypeScript, Tailwind, React, cloud hosting'
      ]
    },
    {
      id: 11,
      title: 'NinerConnect',
      description: 'Problem: inefficient founder-investor discovery. Solution: matchmaking platform with searchable profiles. Impact: faster, higher-quality connection workflows.',
      longDescription: 'Problem: founders and investors lacked an efficient matchmaking process. Solution: developed onboarding, matching logic, and secure APIs with scalable data models. Impact: improved connection speed and enabled business users to evaluate opportunities through structured signals. Tech: React, Node.js, PostgreSQL, REST APIs, Authentication.',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'platform',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Authentication'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Problem: founder-investor matching was fragmented and manual',
        'Solution: delivered profile onboarding, scoring, and matching APIs',
        'Impact: accelerated introductions and improved match quality visibility',
        'Tech: React, Node.js, PostgreSQL, REST APIs, authentication'
      ]
    },
    {
      id: 12,
      title: 'Capita',
      description: 'Problem: founder and investor collaboration lacked structure. Solution: marketplace-style platform with secure workflows. Impact: improved opportunity tracking and engagement.',
      longDescription: 'Problem: startup collaboration workflows were inconsistent and hard to track. Solution: implemented modular APIs, authentication, and scalable persistence layers for a marketplace platform. Impact: improved opportunity visibility and reduced coordination friction for participating users. Tech: React, Node.js, PostgreSQL, REST APIs, Authentication.',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
      category: 'platform',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'REST APIs', 'Authentication'],
      liveUrl: null,
      githubUrl: null,
      featured: false,
      features: [
        'Problem: collaboration workflows lacked unified product support',
        'Solution: built modular marketplace architecture with secure API flows',
        'Impact: improved deal-tracking efficiency and reduced process friction',
        'Tech: React, Node.js, PostgreSQL, REST APIs, authentication'
      ]
    },
    {
      id: 13,
      title: 'BookMyEvent (BME)',
      description: 'Problem: manual event operations caused booking friction. Solution: end-to-end booking and ticketing platform. Impact: faster scheduling and improved event operations visibility.',
      longDescription: 'Problem: event coordination and ticket handling were manual and slow. Solution: developed role-based booking, digital ticketing, and real-time availability services on AWS-backed architecture. Impact: reduced operational friction, improved scheduling speed, and enabled business teams to track event demand in real time. Tech: React.js, Node.js, Express.js, AWS DynamoDB, JWT, REST APIs.',
      image: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'fullstack',
      technologies: ['React.js', 'Node.js', 'Express.js', 'AWS DynamoDB', 'JWT', 'QR Code Generation', 'RESTful APIs', 'MongoDB'],
      liveUrl: null,
      githubUrl: 'https://github.com/ChakaliShivaKumar/BookMyEvent',
      featured: false,
      features: [
        'Problem: event planning and booking lacked real-time coordination',
        'Solution: launched secure booking, ticketing, and availability workflows',
        'Impact: improved booking turnaround and reduced manual event operations',
        'Tech: React.js, Node.js, Express.js, AWS DynamoDB, JWT, REST APIs'
      ]
    },
    {
      id: 14,
      title: 'AWS Infrastructure Automation',
      description: 'Problem: infrastructure provisioning was slow and inconsistent. Solution: IaC and automated delivery. Impact: faster rollout cycles and improved environment reliability.',
      longDescription: 'Problem: environment setup and release consistency limited delivery speed. Solution: implemented IaC with Terraform/CloudFormation and automated pipeline governance with Docker and CI/CD. Impact: reduced provisioning lead time, improved infrastructure consistency, and lowered operational overhead. Tech: AWS, Terraform, Docker, Jenkins, GitHub Actions, CloudFormation.',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80',
      category: 'devops',
      technologies: ['AWS', 'Terraform', 'Docker', 'Jenkins', 'GitHub Actions', 'CloudFormation', 'Monitoring'],
      liveUrl: null,
      githubUrl: 'https://github.com/ChakaliShivaKumar/AWS-Infrastructure',
      featured: false,
      features: [
        'Problem: cloud setup was manual and hard to scale consistently',
        'Solution: codified infrastructure and automated deployment controls',
        'Impact: accelerated rollout cycles and reduced environment drift risk',
        'Tech: AWS, Terraform, CloudFormation, Docker, Jenkins, GitHub Actions'
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