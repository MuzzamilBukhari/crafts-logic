'use client';

import { motion } from 'framer-motion';
import { ImageIcon, ArrowRight } from 'lucide-react';
import { useState } from 'react';
import ImageSliderModal from './ImageSliderModal';

interface GraphicsCardProps {
  title: string;
  tags: string[];
  images: string[];
  index: number;
  gradientFrom: string;
  gradientTo: string;
}

const GraphicsCard = ({ 
  title, 
  tags, 
  images, 
  index, 
  gradientFrom, 
  gradientTo 
}: GraphicsCardProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <motion.div
        className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: index * 0.2 }}
        whileHover={{ y: -10 }}
      >
        {/* Preview Image Grid */}
        <div className="relative h-64 overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800">
          <div className="grid grid-cols-2 grid-rows-2 gap-2 p-4 h-full">
            {images.slice(0, 4).map((image, idx) => (
              <div
                key={idx}
                className="relative rounded-lg overflow-hidden bg-white dark:bg-gray-900"
              >
                <img
                  src={image}
                  alt={`${title} preview ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {idx === 3 && images.length > 4 && (
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">
                      +{images.length - 4}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <motion.div
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full flex items-center space-x-2"
              initial={{ scale: 0.8, opacity: 0 }}
              whileHover={{ scale: 1 }}
              animate={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
            >
              <ImageIcon className="w-5 h-5" />
              <span className="font-medium">{images.length} Images</span>
            </motion.div>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
              {title}
            </h3>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-700 dark:text-purple-300 text-xs font-medium rounded-full border border-purple-200 dark:border-purple-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500 dark:text-gray-400">Total Designs</span>
              <span className="font-semibold text-gray-900 dark:text-white">{images.length} Images</span>
            </div>
          </div>

          {/* View Gallery Button */}
          <motion.button
            onClick={() => setIsModalOpen(true)}
            className={`w-full bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <ImageIcon className="w-5 h-5" />
            <span>View Gallery</span>
            <ArrowRight className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>

      {/* Image Slider Modal */}
      <ImageSliderModal
        isOpen={isModalOpen}
        images={images}
        title={title}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
};

export default GraphicsCard;
