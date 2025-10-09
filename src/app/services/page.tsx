'use client';

import { motion } from 'framer-motion';
import { 
  Code2, 
  ShoppingCart, 
  Globe, 
  Palette, 
  Bot, 
  Brain,
  CheckCircle,
  ArrowRight,
  Star
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'fullstack',
      icon: Code2,
      title: 'Full Stack Development',
      subtitle: 'End-to-end web solutions',
      description: 'We build robust, scalable web applications using modern technologies like React, Node.js, Next.js, and more. From concept to deployment, we handle every aspect of your web development needs.',
      features: [
        'React & Next.js Development',
        'Node.js & Express Backend',
        'Database Design & Integration',
        'API Development & Integration',
        'Cloud Deployment & DevOps',
        'Performance Optimization'
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'TypeScript', 'MongoDB', 'PostgreSQL', 'AWS'],
      color: 'purple',
      pricing: 'Starting from $2,500'
    },
    {
      id: 'shopify',
      icon: ShoppingCart,
      title: 'Shopify Development',
      subtitle: 'E-commerce excellence',
      description: 'Custom Shopify stores that convert visitors into customers. We create stunning, high-performance e-commerce solutions tailored to your brand and business goals.',
      features: [
        'Custom Shopify Theme Development',
        'App Integration & Development',
        'Payment Gateway Setup',
        'Inventory Management',
        'SEO Optimization',
        'Mobile-First Design'
      ],
      technologies: ['Shopify', 'Liquid', 'JavaScript', 'CSS', 'Shopify Plus', 'GraphQL'],
      color: 'green',
      pricing: 'Starting from $1,800'
    },
    {
      id: 'wordpress',
      icon: Globe,
      title: 'WordPress Development',
      subtitle: 'Flexible CMS solutions',
      description: 'Dynamic WordPress websites and custom plugins that grow with your business. We create user-friendly, SEO-optimized sites that are easy to manage.',
      features: [
        'Custom WordPress Themes',
        'Plugin Development',
        'WooCommerce Integration',
        'Performance Optimization',
        'Security Hardening',
        'Content Management Training'
      ],
      technologies: ['WordPress', 'PHP', 'MySQL', 'WooCommerce', 'ACF', 'Elementor'],
      color: 'blue',
      pricing: 'Starting from $1,200'
    },
    {
      id: 'uiux',
      icon: Palette,
      title: 'UI/UX Designing',
      subtitle: 'Beautiful user experiences',
      description: 'Intuitive designs that users love to interact with. We create visually stunning interfaces that provide exceptional user experiences across all devices.',
      features: [
        'User Research & Analysis',
        'Wireframing & Prototyping',
        'Visual Design & Branding',
        'Responsive Design',
        'Usability Testing',
        'Design System Creation'
      ],
      technologies: ['Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Zeplin'],
      color: 'pink',
      pricing: 'Starting from $800'
    },
    {
      id: 'ai-automation',
      icon: Bot,
      title: 'AI Automation',
      subtitle: 'Intelligent workflow automation',
      description: 'Streamline your business processes with AI-powered automation. We implement intelligent solutions that save time, reduce errors, and boost productivity.',
      features: [
        'Process Analysis & Optimization',
        'Custom AI Model Development',
        'Workflow Automation',
        'Data Processing & Analysis',
        'Integration with Existing Systems',
        'Performance Monitoring'
      ],
      technologies: ['Python', 'TensorFlow', 'OpenAI API', 'Zapier', 'Microsoft Power Automate', 'AWS Lambda'],
      color: 'teal',
      pricing: 'Starting from $3,000'
    },
    {
      id: 'agentic-ai',
      icon: Brain,
      title: 'Agentic AI Solutions',
      subtitle: 'Advanced AI agents',
      description: 'Cutting-edge AI agents that think, learn, and act autonomously. We develop sophisticated AI systems that can handle complex tasks and decision-making.',
      features: [
        'Intelligent Agent Development',
        'Natural Language Processing',
        'Decision-Making Systems',
        'Learning & Adaptation',
        'Multi-Agent Coordination',
        'Custom AI Workflows'
      ],
      technologies: ['Python', 'LangChain', 'OpenAI', 'Anthropic', 'Hugging Face', 'Vector Databases'],
      color: 'indigo',
      pricing: 'Starting from $5,000'
    }
  ];

  const colorClasses = {
    purple: {
      icon: 'text-purple-600',
      bg: 'bg-purple-100 dark:bg-purple-900/30',
      border: 'border-purple-200 dark:border-purple-800',
      hover: 'hover:border-purple-400 dark:hover:border-purple-600',
      gradient: 'from-purple-600 to-purple-700'
    },
    green: {
      icon: 'text-green-600',
      bg: 'bg-green-100 dark:bg-green-900/30',
      border: 'border-green-200 dark:border-green-800',
      hover: 'hover:border-green-400 dark:hover:border-green-600',
      gradient: 'from-green-600 to-green-700'
    },
    blue: {
      icon: 'text-blue-600',
      bg: 'bg-blue-100 dark:bg-blue-900/30',
      border: 'border-blue-200 dark:border-blue-800',
      hover: 'hover:border-blue-400 dark:hover:border-blue-600',
      gradient: 'from-blue-600 to-blue-700'
    },
    pink: {
      icon: 'text-pink-600',
      bg: 'bg-pink-100 dark:bg-pink-900/30',
      border: 'border-pink-200 dark:border-pink-800',
      hover: 'hover:border-pink-400 dark:hover:border-pink-600',
      gradient: 'from-pink-600 to-pink-700'
    },
    teal: {
      icon: 'text-teal-600',
      bg: 'bg-teal-100 dark:bg-teal-900/30',
      border: 'border-teal-200 dark:border-teal-800',
      hover: 'hover:border-teal-400 dark:hover:border-teal-600',
      gradient: 'from-teal-600 to-teal-700'
    },
    indigo: {
      icon: 'text-indigo-600',
      bg: 'bg-indigo-100 dark:bg-indigo-900/30',
      border: 'border-indigo-200 dark:border-indigo-800',
      hover: 'hover:border-indigo-400 dark:hover:border-indigo-600',
      gradient: 'from-indigo-600 to-indigo-700'
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-purple-900/20 dark:to-blue-900/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Comprehensive digital solutions that blend creativity, technology, and intelligence 
              to deliver exceptional results for your business.
            </p>
            <div className="flex items-center justify-center space-x-2 text-purple-600 dark:text-purple-400">
              <Star className="w-5 h-5 fill-current" />
              <span className="text-sm font-medium">Trusted by 30+ clients worldwide</span>
              <Star className="w-5 h-5 fill-current" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const colors = colorClasses[service.color as keyof typeof colorClasses];
              
              return (
                <motion.div
                  key={service.id}
                  className={`group bg-white dark:bg-gray-800 p-6 sm:p-8 rounded-3xl border-2 ${colors.border} ${colors.hover} transition-all duration-300 hover:shadow-2xl dark:hover:shadow-purple-500/10`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  {/* Service Header */}
                  <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                    <div className={`w-14 h-14 sm:w-16 sm:h-16 ${colors.bg} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                      <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${colors.icon}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">
                        {service.title}
                      </h3>
                      <p className={`text-sm font-medium ${colors.icon} mb-2`}>
                        {service.subtitle}
                      </p>
                      <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
                      What&apos;s Included:
                    </h4>
                    <div className="grid grid-cols-1 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className={`w-4 h-4 ${colors.icon} flex-shrink-0 mt-0.5`} />
                          <span className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                      Technologies:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 ${colors.bg} ${colors.icon} text-xs rounded-full font-medium`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-gray-700">
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Starting from</span>
                      <div className="text-2xl font-bold text-gray-900 dark:text-white">
                        {service.pricing}
                      </div>
                    </div>
                    <motion.button
                      className={`bg-gradient-to-r ${colors.gradient} text-white px-6 py-3 rounded-xl font-semibold flex items-center space-x-2 hover:shadow-lg transition-all duration-300`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span>Get Quote</span>
                      <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 leading-relaxed px-4 sm:px-0">
              Let&apos;s discuss how we can help bring your vision to life with our comprehensive digital solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4 sm:px-0">
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get Free Consultation</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.button>
              <motion.button
                className="bg-white dark:bg-gray-700 text-gray-900 dark:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg border-2 border-gray-200 dark:border-gray-600 hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;