'use client';

import { motion } from 'framer-motion';
import { Palette } from 'lucide-react';
import GraphicsCard from './GraphicsCard';
import graphicsProjects from '@/data/graphics/graphicsProjects';

const GraphicsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="inline-flex items-center justify-center space-x-2 mb-6"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-3 rounded-2xl">
              <Palette className="w-6 h-6 text-white" />
            </div>
          </motion.div>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Graphics <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Explore our collection of creative graphic design work, from stunning logos to intricate vector art. 
            Each gallery showcases our attention to detail and commitment to visual excellence.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {graphicsProjects.map((project, index) => (
            <GraphicsCard
              key={project.id}
              title={project.title}
              tags={project.tags}
              images={project.images}
              index={index}
              gradientFrom={project.gradientFrom}
              gradientTo={project.gradientTo}
            />
          ))}
        </div>

        {/* Divider */}
        <motion.div
          className="mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
};

export default GraphicsSection;
