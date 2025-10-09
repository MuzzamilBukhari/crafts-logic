'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Github, Linkedin, Twitter, ArrowRight } from 'lucide-react';

const TeamPreview = () => {
  const teamMembers = [
    {
      id: 1,
      name: 'Muzzamil Bukhari',
      role: 'Founder / Full Stack & AI Developer',
      tagline: 'Architecting intelligent solutions',
      description: 'Passionate about building scalable applications and AI-powered systems that solve real-world problems.',
      avatar: '/api/placeholder/300/300',
      skills: ['React', 'Node.js', 'Python', 'AI/ML', 'AWS'],
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      id: 2,
      name: 'Alex Thompson',
      role: 'Frontend / Shopify Specialist',
      tagline: 'Crafting seamless user experiences',
      description: 'Expert in creating beautiful, responsive frontends and powerful e-commerce solutions.',
      avatar: '/api/placeholder/300/300',
      skills: ['React', 'Vue.js', 'Shopify', 'CSS', 'TypeScript'],
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    },
    {
      id: 3,
      name: 'Sarah Wilson',
      role: 'UI/UX Designer',
      tagline: 'Turning design into experience',
      description: 'Creating intuitive and beautiful designs that users love to interact with.',
      avatar: '/api/placeholder/300/300',
      skills: ['Figma', 'Adobe XD', 'Sketch', 'Prototyping', 'User Research'],
      social: {
        github: 'https://github.com',
        linkedin: 'https://linkedin.com',
        twitter: 'https://twitter.com'
      }
    }
  ];

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
            Meet Our <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 dark:text-gray-300 max-w-xl lg:max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A passionate team of creators, developers, and innovators working together to bring your digital vision to life.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              {/* Avatar */}
              <div className="relative overflow-hidden bg-gradient-to-br from-purple-400 to-blue-500 h-48 sm:h-56 lg:h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {member.name}
                </h3>
                <p className="text-purple-600 dark:text-purple-400 font-medium mb-2 text-sm sm:text-base">
                  {member.role}
                </p>
                <p className="text-xs sm:text-sm italic text-gray-500 dark:text-gray-400 mb-3">
                  &ldquo;{member.tagline}&rdquo;
                </p>
                <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-1 sm:gap-2 mb-4">
                  {member.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 text-xs rounded-full">
                      +{member.skills.length - 3} more
                    </span>
                  )}
                </div>

                {/* Social Links */}
                <div className="flex space-x-2 sm:space-x-3">
                  <a
                    href={member.social.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300"
                  >
                    <Github className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href={member.social.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300"
                  >
                    <Linkedin className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                  <a
                    href={member.social.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-1.5 sm:p-2 bg-gray-100 dark:bg-gray-700 rounded-lg text-gray-600 dark:text-gray-400 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-all duration-300"
                  >
                    <Twitter className="w-3 h-3 sm:w-4 sm:h-4" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          className="text-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/about">
            <motion.button
              className="group bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TeamPreview;