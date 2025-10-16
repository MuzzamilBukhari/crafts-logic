'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { 
  Github, 
  Linkedin, 
  Instagram, 
  Mail, 
  MapPin, 
  Phone,
  ArrowUp,
  Facebook
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Projects', href: '/projects' },
      { name: 'Team', href: '/team' },
    ],
    services: [
      { name: 'Full Stack Development', href: '/services#fullstack' },
      { name: 'Shopify Development', href: '/services#shopify' },
      { name: 'WordPress Development', href: '/services#wordpress' },
      { name: 'UI/UX Design', href: '/services#uiux' },
      { name: 'AI Automation', href: '/services#ai-automation' },
      { name: 'Agentic AI Solutions', href: '/services#agentic-ai' },
    ],
    resources: [
      { name: 'Blog', href: '/blog' },
      { name: 'Contact', href: '/contact' },
      { name: 'Privacy Policy', href: '/privacy' },
      { name: 'Terms of Service', href: '/terms' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/company/109463410/' },
    { name: 'Facebook', icon: Facebook, href: 'https://www.facebook.com/share/1KFhn4rmvP/' },
    { name: 'Email', icon: Mail, href: 'mailto:support@craftslogic.com' }

  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[linear-gradient(120deg,#0a192f,#112240,#1e3a8a,#172554,#1e40af)]
  bg-[length:400%_400%] animate-[gradientFlow_15s_ease_infinite]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Company Info */}
          <motion.div
            className="sm:col-span-2 lg:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
             <div className="flex items-center mb-3 sm:mb-4 space-x-2">
      <div className="rounded-lg overflow-hidden flex items-center justify-center">
        <Image
          src="/images/Cs1.png" // yahan apna logo path lagayein (public folder me e.g. public/logo.png)
          alt="CraftsLogic Logo"
          width={150}
          height={150}
          className="object-contain"
        />
      </div>
    
    </div>
            <p className="text-gray-600 dark:text-gray-400 mb-3 sm:mb-4 text-xs sm:text-sm leading-relaxed">
              We build digital experiences that merge design, code, and intelligence. 
              Crafting innovative solutions for the modern web.
            </p>
            <div className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                <span>Remote & Global</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                <span>+92 335 1848 651</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
                <span>contact.crafslogic@gmail.com</span>
              </div>
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Company
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Services
            </h3>
            <ul className="space-y-1.5 sm:space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Resources & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white mb-3 sm:mb-4">
              Resources
            </h3>
            <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6">
              {footerLinks.resources.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white dark:hover:text-white transition-colors duration-300 text-xs sm:text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Social Links */}
            <div>
              <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
                Follow Us
              </h4>
              <div className="flex space-x-2 sm:space-x-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 sm:p-2 bg-gray-200 rounded-lgtext-gray-400 hover:text-white dark:hover:text-white hover:bg-purple-100 dark:hover:bg-gray-900/30 transition-all duration-300"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Icon className="w-3 h-3 sm:w-4 sm:h-4" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <motion.div
          className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} CraftsLogic. All rights reserved. Digital Craftsmanship in Code & AI.
          </p>
          
          {/* Scroll to Top Button */}
          <motion.button
            onClick={scrollToTop}
            className="mt-3 sm:mt-0 p-2 bg-white hover:bg-gray-200 text-blue-950 rounded-full transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3 h-3 sm:w-4 sm:h-4" />
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;