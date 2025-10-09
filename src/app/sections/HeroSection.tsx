'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Sparkles, Code, Palette } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20 px-4 sm:px-6 lg:px-8">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 -right-20 sm:-top-40 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
        <div className="absolute -bottom-20 -left-20 sm:-bottom-40 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center">
          {/* Logo Animation */}
          <motion.div
            className="mb-6 sm:mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent mb-3 sm:mb-4">
              CraftsLogic
            </div>
            <motion.div
              className="flex justify-center items-center space-x-2 text-purple-600 dark:text-purple-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="text-xs sm:text-sm font-medium tracking-wider uppercase">Digital Craftsmanship</span>
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
            </motion.div>
          </motion.div>

          {/* Main Tagline */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 leading-tight px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            We build digital experiences that merge{' '}
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              design, code, and intelligence
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 max-w-xs sm:max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            From AI-powered solutions to stunning user interfaces, we craft digital products that push boundaries and deliver exceptional results.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-12 sm:mb-16 px-4 sm:px-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link href="/projects" className="w-full sm:w-auto">
              <motion.button
                className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </motion.button>
            </Link>
            
            <Link href="/contact" className="w-full sm:w-auto">
              <motion.button
                className="group bg-white dark:bg-gray-800 text-gray-900 dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-700 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 flex items-center justify-center space-x-2 w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get in Touch</span>
              </motion.button>
            </Link>
          </motion.div>

          {/* Feature Icons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 text-gray-600 dark:text-gray-400 px-4 sm:px-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div
              className="flex flex-col items-center space-y-2"
              whileHover={{ scale: 1.1 }}
            >
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              <span className="text-xs sm:text-sm font-medium">Development</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center space-y-2"
              whileHover={{ scale: 1.1 }}
            >
              <Palette className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              <span className="text-xs sm:text-sm font-medium">Design</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center space-y-2"
              whileHover={{ scale: 1.1 }}
            >
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-teal-600" />
              <span className="text-xs sm:text-sm font-medium">AI Solutions</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <motion.div
          className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-1 h-2 sm:h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-1 sm:mt-2"></div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;