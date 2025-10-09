'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const TestimonialsPreview = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStartup Inc.',
      content: 'CraftsLogic transformed our vision into a stunning reality. Their attention to detail and innovative approach exceeded all our expectations.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager, E-commerce Co.',
      content: 'The AI automation solutions they built for us increased our efficiency by 300%. Absolutely phenomenal work and professional service.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Marketing Director, Creative Agency',
      content: 'Their UI/UX design skills are unmatched. Our new website not only looks amazing but also delivers incredible user experience.',
      rating: 5,
      avatar: '/api/placeholder/60/60'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gray-50 dark:bg-gray-800">
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
            What Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Clients Say</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say about their experience working with us.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              className="bg-white dark:bg-gray-700 p-5 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 relative"
              variants={cardVariants}
              whileHover={{ y: -5 }}
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 -left-3 w-6 h-6 sm:w-8 sm:h-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                <Quote className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
              </div>

              {/* Rating Stars */}
              <div className="flex space-x-1 mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Content */}
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 leading-relaxed italic">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Client Info */}
              <div className="flex items-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full flex items-center justify-center mr-3 sm:mr-4 flex-shrink-0">
                  <span className="text-white font-semibold text-sm sm:text-lg">
                    {testimonial.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="min-w-0">
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm sm:text-base truncate">
                    {testimonial.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 truncate">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16 pt-12 sm:pt-16 border-t border-gray-200 dark:border-gray-700"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-purple-600 mb-1 sm:mb-2">50+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-blue-600 mb-1 sm:mb-2">30+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-600 mb-1 sm:mb-2">99%</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Satisfaction Rate</div>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-pink-600 mb-1 sm:mb-2">3+</div>
            <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">Years Experience</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsPreview;