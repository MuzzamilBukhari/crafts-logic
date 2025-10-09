'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Code2, 
  ShoppingCart, 
  Globe, 
  Palette, 
  Bot, 
  Brain,
  ArrowRight 
} from 'lucide-react';

const ServicesHighlight = () => {
  const services = [
    {
      icon: Code2,
      title: 'Full Stack Development',
      description: 'End-to-end web applications with modern technologies',
      color: 'purple',
      href: '/services#fullstack'
    },
    {
      icon: ShoppingCart,
      title: 'Shopify Development',
      description: 'Custom e-commerce solutions that drive sales',
      color: 'green',
      href: '/services#shopify'
    },
    {
      icon: Globe,
      title: 'WordPress Development',
      description: 'Flexible CMS solutions for dynamic websites',
      color: 'blue',
      href: '/services#wordpress'
    },
    {
      icon: Palette,
      title: 'UI/UX Designing',
      description: 'Beautiful interfaces that users love to interact with',
      color: 'pink',
      href: '/services#uiux'
    },
    {
      icon: Bot,
      title: 'AI Automation',
      description: 'Intelligent automation to streamline your workflows',
      color: 'teal',
      href: '/services#ai-automation'
    },
    {
      icon: Brain,
      title: 'Agentic AI Solutions',
      description: 'Advanced AI agents that think and act intelligently',
      color: 'indigo',
      href: '/services#agentic-ai'
    },
  ];

  const colorClasses = {
    purple: {
      icon: 'text-purple-600',
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      border: 'border-purple-200 dark:border-purple-800',
      hover: 'hover:border-purple-400 dark:hover:border-purple-600'
    },
    green: {
      icon: 'text-green-600',
      bg: 'bg-green-100 dark:bg-green-900/30',
      border: 'border-green-200 dark:border-green-800',
      hover: 'hover:border-green-400 dark:hover:border-green-600'
    },
    blue: {
      icon: 'text-blue-600',
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      border: 'border-blue-200 dark:border-blue-800',
      hover: 'hover:border-blue-400 dark:hover:border-blue-600'
    },
    pink: {
      icon: 'text-pink-600',
      bg: 'bg-pink-100 dark:bg-pink-900/30',
      border: 'border-pink-200 dark:border-pink-800',
      hover: 'hover:border-pink-400 dark:hover:border-pink-600'
    },
    teal: {
      icon: 'text-teal-600',
      bg: 'bg-teal-100 dark:bg-teal-900/30',
      border: 'border-teal-200 dark:border-teal-800',
      hover: 'hover:border-teal-400 dark:hover:border-teal-600'
    },
    indigo: {
      icon: 'text-indigo-600',
      bg: 'bg-indigo-100 dark:bg-indigo-900/30',
      border: 'border-indigo-200 dark:border-indigo-800',
      hover: 'hover:border-indigo-400 dark:hover:border-indigo-600'
    },
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
            Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            We offer comprehensive digital solutions that blend creativity, technology, and intelligence 
            to deliver exceptional results for your business.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-12">
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = colorClasses[service.color as keyof typeof colorClasses];
            
            return (
              <motion.div
                key={service.title}
                className={`group bg-white dark:bg-gray-800 p-4 sm:p-6 rounded-2xl border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-lg dark:hover:shadow-purple-500/10`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-10 h-10 sm:w-12 sm:h-12 ${colors.bg} rounded-xl flex items-center justify-center mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 ${colors.icon}`} />
                </div>
                
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                  {service.title}
                </h3>
                
                <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <Link
                  href={service.href}
                  className={`inline-flex items-center text-sm font-medium ${colors.icon} group-hover:translate-x-1 transition-transform duration-300`}
                >
                  Learn more
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/services">
            <motion.button
              className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Services</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesHighlight;