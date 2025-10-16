'use client';

import { motion } from 'framer-motion';
import { 
  ExternalLink, 
  Github, 
  Eye, 
  Image as ImageIcon,
  Instagram,
  ArrowRight
} from 'lucide-react';
import { useState } from 'react';
import ImageLightbox from './ImageLightbox';
import { Project } from '@/types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (id: number) => void;
  colorClasses: Record<string, string>;
}

const ProjectCard = ({ project, index, onViewDetails, colorClasses }: ProjectCardProps) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Development Project Card
  if (project.type === 'development') {
    return (
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
              onClick={() => onViewDetails(project.id)}
              className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Eye className="w-5 h-5" />
            </motion.button>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
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
            onClick={() => onViewDetails(project.id)}
            className="w-full bg-gradient-to-r from-gray-600 to-gray-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <span>View Case Study</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </div>
      </motion.div>
    );
  }

  // Graphics Project Card
  return (
    <>
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
        {/* Project Thumbnail - Main Focus */}
        <div className="relative h-64 overflow-hidden cursor-pointer" onClick={() => setLightboxOpen(true)}>
          <img
            src={project.thumbnailUrl || project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-center space-x-4">
              <motion.div
                className="bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
              >
                <ImageIcon className="w-4 h-4" />
                <span className="text-sm font-medium">View Full Image</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${colorClasses[project.color as keyof typeof colorClasses]}`}>
              {project.category === 'graphicdesign' ? 'Graphic Design' : project.category.charAt(0).toUpperCase() + project.category.slice(1)}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">{project.date}</span>
          </div>
          
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {project.title}
          </h3>
          
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
            {project.shortDescription}
          </p>

          {/* Client Info */}
          <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">Client</p>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{project.client}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3">
            <motion.button
              onClick={() => setLightboxOpen(true)}
              className="w-full bg-gradient-to-r from-gray-600 to-gray-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <ImageIcon className="w-4 h-4" />
              <span>View Full Image</span>
            </motion.button>
            
            {project.platformUrl && (
              <a
                href={project.platformUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full"
              >
                <motion.button
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {project.platform === 'Instagram' && <Instagram className="w-4 h-4" />}
                  {!project.platform && <ExternalLink className="w-4 h-4" />}
                  <span>See on {project.platform || 'Platform'}</span>
                </motion.button>
              </a>
            )}
          </div>
        </div>
      </motion.div>

      {/* Lightbox for Full Image View */}
      <ImageLightbox
        isOpen={lightboxOpen}
        imageUrl={project.thumbnailUrl || project.image}
        title={project.title}
        onClose={() => setLightboxOpen(false)}
      />
    </>
  );
};

export default ProjectCard;
