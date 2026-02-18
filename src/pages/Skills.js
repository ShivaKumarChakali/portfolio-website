import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Cloud, BarChart3, Globe, Brain, Zap, Shield } from 'lucide-react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('languages');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  const skillCategories = [
    {
      id: 'languages',
      name: 'Programming Languages',
      icon: Code,
      color: 'from-blue-500 to-blue-600',
      skills: [
        { name: 'JavaScript', level: 90, icon: '⚡' },
        { name: 'TypeScript', level: 88, icon: '📘' },
        { name: 'Python', level: 85, icon: '🐍' },
        { name: 'Java', level: 80, icon: '☕' },
        { name: 'SQL', level: 88, icon: '🗄️' },
        { name: 'C++', level: 75, icon: '⚙️' }
      ]
    },
    {
      id: 'frameworks',
      name: 'Frameworks & Libraries',
      icon: Globe,
      color: 'from-green-500 to-green-600',
      skills: [
        { name: 'React', level: 92, icon: '⚛️' },
        { name: 'Next.js', level: 85, icon: '▲' },
        { name: 'Node.js', level: 88, icon: '🟢' },
        { name: 'Express.js', level: 88, icon: '🚂' },
        { name: 'Tailwind CSS', level: 90, icon: '🎨' },
        { name: 'Angular', level: 80, icon: '🅰️' },
        { name: 'Flask', level: 75, icon: '🍶' }
      ]
    },
    {
      id: 'cloud',
      name: 'Cloud & DevOps',
      icon: Cloud,
      color: 'from-orange-500 to-orange-600',
      skills: [
        { name: 'AWS', level: 80, icon: '☁️' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'CI/CD', level: 80, icon: '🔄' },
        { name: 'Jenkins', level: 75, icon: '🤖' },
        { name: 'GitHub Actions', level: 80, icon: '⚡' },
        { name: 'Terraform', level: 70, icon: '🏗️' }
      ]
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-purple-500 to-purple-600',
      skills: [
        { name: 'PostgreSQL', level: 88, icon: '🐘' },
        { name: 'MongoDB', level: 85, icon: '🍃' },
        { name: 'MySQL', level: 85, icon: '🐬' },
        { name: 'Power BI', level: 85, icon: '📊' },
        { name: 'DAX', level: 80, icon: '📈' },
        { name: 'M Query', level: 80, icon: '🔍' },
        { name: 'Azure Synapse', level: 75, icon: '🔗' },
        { name: 'Redis', level: 80, icon: '🔴' }
      ]
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-pink-500 to-pink-600',
      skills: [
        { name: 'TensorFlow', level: 78, icon: '🧠' },
        { name: 'Reinforcement Learning', level: 82, icon: '🎯' },
        { name: 'Deep Q-Network (DQN)', level: 78, icon: '🕸️' },
        { name: 'Federated Learning', level: 75, icon: '🌐' },
        { name: 'SUMO Simulation', level: 75, icon: '🚦' },
        { name: 'NumPy', level: 88, icon: '🔢' },
        { name: 'Pandas', level: 88, icon: '🐼' },
        { name: 'Scikit-learn', level: 75, icon: '🔬' }
      ]
    },
    {
      id: 'tools',
      name: 'Tools & Technologies',
      icon: Zap,
      color: 'from-yellow-500 to-yellow-600',
      skills: [
        { name: 'Git', level: 92, icon: '📝' },
        { name: 'REST APIs', level: 88, icon: '🔌' },
        { name: 'GraphQL', level: 70, icon: '📡' },
        { name: 'JWT', level: 85, icon: '🔐' },
        { name: 'OAuth', level: 78, icon: '🔑' },
        { name: 'Agile/Scrum', level: 88, icon: '🔄' },
        { name: 'Postman', level: 85, icon: '📬' }
      ]
    }
  ];

  const currentCategory = skillCategories.find(cat => cat.id === activeCategory);

  // Debug logging
  console.log('Active category:', activeCategory);
  console.log('Current category:', currentCategory);
  console.log('Available categories:', skillCategories.map(cat => ({ id: cat.id, name: cat.name, skillsCount: cat.skills.length })));

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
              Skills & Expertise
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              A comprehensive overview of my technical skills and proficiency levels
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Skills Overview */}
      <section className="section-padding bg-white dark:bg-dark-900">
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
              Skill Categories
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Explore my expertise across different technology domains
            </motion.p>
          </motion.div>

          {/* Category Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
          >
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                onClick={() => {
                  console.log('Setting category to:', category.id);
                  setActiveCategory(category.id);
                }}
                className={`p-4 rounded-lg text-center transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-primary-600 text-white shadow-lg scale-105'
                    : 'bg-gray-100 dark:bg-dark-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-dark-700 hover:scale-105'
                }`}
              >
                <category.icon size={24} className="mx-auto mb-2" />
                <span className="text-sm font-medium">{category.name}</span>
                <div className={`text-xs mt-1 px-2 py-1 rounded-full ${
                  activeCategory === category.id 
                    ? 'bg-white/20 text-white' 
                    : 'bg-gray-200 dark:bg-dark-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {category.skills.length}
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* Skills Detail */}
          <motion.div
            key={activeCategory} // Force re-render when category changes
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="card p-8"
            >
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-r ${currentCategory.color} text-white mb-4`}>
                  <currentCategory.icon size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                  {currentCategory.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mt-2">
                  {currentCategory.skills.length} skills • {currentCategory.skills.reduce((sum, skill) => sum + skill.level, 0) / currentCategory.skills.length}% average proficiency
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {currentCategory.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="space-y-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">{skill.icon}</span>
                        <span className="font-semibold text-gray-900 dark:text-gray-100">
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-dark-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Additional Skills */}
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
              Additional Competencies
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Other skills and areas of expertise
            </motion.p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            <motion.div
              variants={itemVariants}
              className="card p-6 text-center"
            >
              <div className="p-3 bg-blue-100 dark:bg-blue-900/20 rounded-lg mb-4 mx-auto w-fit">
                <Shield size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Security
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                JWT, OAuth, API Security, Data Protection, Secure Coding Practices
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card p-6 text-center"
            >
              <div className="p-3 bg-green-100 dark:bg-green-900/20 rounded-lg mb-4 mx-auto w-fit">
                <Zap size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Performance
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Optimization, Caching, Load Balancing, Performance Monitoring
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card p-6 text-center"
            >
              <div className="p-3 bg-purple-100 dark:bg-purple-900/20 rounded-lg mb-4 mx-auto w-fit">
                <Globe size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Web Technologies
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                HTML5, CSS3, Responsive Design, Progressive Web Apps, SEO
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="card p-6 text-center"
            >
              <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg mb-4 mx-auto w-fit">
                <BarChart3 size={24} className="text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                Testing
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Unit Testing, Integration Testing, E2E Testing, Test-Driven Development
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Learning Journey */}
      <section className="section-padding bg-white dark:bg-dark-900">
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
              Continuous Learning
            </motion.h2>
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            >
              Currently exploring and learning new technologies
            </motion.p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="max-w-4xl mx-auto"
          >
            <div className="card p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Currently Learning
                  </h3>
                  <div className="space-y-3">
                    {['Kubernetes', 'Microservices Architecture', 'Advanced React Patterns', 'System Design', 'Performance Optimization', 'Cloud-Native Development'].map((skill) => (
                      <div key={skill} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
                        <span className="text-gray-600 dark:text-gray-400">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                    Learning Goals
                  </h3>
                  <div className="space-y-3">
                    {[
                      'Building scalable SaaS platforms and enterprise applications',
                      'Contributing to high-impact software engineering teams',
                      'Applying advanced system design and architecture patterns',
                      'Integrating AI/ML capabilities into production applications'
                    ].map((goal) => (
                      <div key={goal} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 dark:bg-green-400 rounded-full mt-2"></div>
                        <span className="text-gray-600 dark:text-gray-400 text-sm">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Skills; 