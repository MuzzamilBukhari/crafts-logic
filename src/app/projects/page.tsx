'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Calendar,
  X,
  ArrowRight
} from 'lucide-react';
import projects from '@/data/projects/projects'
import categories from '@/data/projects/categories';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');
  
  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  const colorClasses = {
    purple: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600',
    blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600',
    pink: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600',
    green: 'bg-green-100 dark:bg-green-900/30 text-green-600',
    teal: 'bg-teal-100 dark:bg-teal-900/30 text-teal-600',
    indigo: 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600'
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 bg-[linear-gradient(120deg,#0a192f,#112240,#1e3a8a,#172554,#1e40af)]
  bg-[length:400%_400%] animate-[gradientFlow_15s_ease_infinite]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-white bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Explore our portfolio of innovative digital solutions that have helped businesses 
              achieve their goals and exceed expectations.
            </p>
            <div className="flex items-center justify-center space-x-2 text-green-600 dark:text-green-400">
              <Calendar className="w-5 h-5" />
              <span className="text-sm font-medium">{projects.length} Projects Completed</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-12 bg-white dark:bg-blue-950 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  filter === category.id
                    ? 'bg-green-600 text-white shadow-lg'
                    : 'bg-gray-100 dark:bg-blue-900 text-gray-600 dark:text-gray-300 hover:bg-green-100 dark:hover:bg-green-900/30'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name} ({category.count})
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  layout
                >
                  {/* Project Image */}
                  <div className="relative h-48 bg-gradient-to-br from-gray-400 to-gray-500 overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-bold text-white/20">
                        {project.id}
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <motion.button
                        onClick={() => setSelectedProject(project.id)}
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Eye className="w-5 h-5" />
                      </motion.button>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses[project.color as keyof typeof colorClasses]}`}>
                        {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Action Button */}
                    <motion.button
                      onClick={() => setSelectedProject(project.id)}
                      className="w-full bg-gradient-to-r from-gray-600 to-gray-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span>View Case Study</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              className="bg-white dark:bg-gray-800 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div>
                    {/* Modal Header */}
                    <div className="relative h-64 bg-gradient-to-br from-gray-400 to-gray-500 rounded-t-3xl">
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm text-white p-2 rounded-full hover:bg-white/30 transition-all duration-300"
                      >
                        <X className="w-6 h-6" />
                      </button>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-8xl font-bold text-white/20">
                          {project.id}
                        </div>
                      </div>
                    </div>

                    {/* Modal Content */}
                    <div className="p-8">
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-4">
                          <span className={`px-4 py-2 rounded-full text-sm font-medium ${colorClasses[project.color as keyof typeof colorClasses]}`}>
                            {project.category.charAt(0).toUpperCase() + project.category.slice(1)}
                          </span>
                          <span className="text-gray-500 dark:text-gray-400">{project.date}</span>
                        </div>
                        
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                          {project.title}
                        </h2>
                        
                        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
                          {project.description}
                        </p>

                        {/* Project Details */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Client</h4>
                            <p className="text-gray-600 dark:text-gray-300">{project.client}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Duration</h4>
                            <p className="text-gray-600 dark:text-gray-300">{project.duration}</p>
                          </div>
                        </div>

                        {/* Features */}
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Key Features</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            {project.features.map((feature, index) => (
                              <div key={index} className="flex items-center space-x-3">
                                <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                                <span className="text-gray-600 dark:text-gray-300">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div className="mb-8">
                          <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h4>
                          <div className="flex flex-wrap gap-3">
                            {project.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-4 py-2 bg-purple-100 dark:bg-blue-950 text-white dark:text-white rounded-full font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gradient-to-r from-blue-950 to-blue-900 text-white py-4 rounded-xl font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                          >
                            <ExternalLink className="w-5 h-5" />
                            <span>View Live Site</span>
                          </a>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white py-4 rounded-xl font-semibold text-center hover:bg-gray-200 dark:hover:bg-gray-600 transition-all duration-300 flex items-center justify-center space-x-2"
                          >
                            <Github className="w-5 h-5" />
                            <span>View Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50 ">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-609 mb-8">
              Let&apos;s create something amazing together. Get in touch and let&apos;s discuss your vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-gradient-to-r from-blue-950 to-blue-900 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-8 py-4 rounded-2xl font-semibold text-lg border-2 border-gray-200 dark:border-gray-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Quote
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;