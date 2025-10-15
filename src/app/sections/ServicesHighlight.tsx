"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Code2, ShoppingCart, Globe, Palette, Bot, Brain, ArrowRight } from "lucide-react"
import colorClasses from "@/data/services/colorClasses"

const ServicesHighlight = () => {
  const services = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "End-to-end web applications with modern technologies",
      color: "purple",
      href: "/services#fullstack",
    },
    {
      icon: ShoppingCart,
      title: "Shopify Development",
      description: "Custom e-commerce solutions that drive sales",
      color: "green",
      href: "/services#shopify",
    },
    {
      icon: Globe,
      title: "WordPress Development",
      description: "Flexible CMS solutions for dynamic websites",
      color: "blue",
      href: "/services#wordpress",
    },
    {
      icon: Palette,
      title: "UI/UX Designing",
      description: "Beautiful interfaces that users love to interact with",
      color: "pink",
      href: "/services#uiux",
    },
    {
      icon: Bot,
      title: "AI Automation",
      description: "Intelligent automation to streamline your workflows",
      color: "teal",
      href: "/services#ai-automation",
    },
    {
      icon: Brain,
      title: "Agentic AI Solutions",
      description: "Advanced AI agents that think and act intelligently",
      color: "indigo",
      href: "/services#agentic-ai",
    },
  ]


  return (
    <section
      className="relative py-16 sm:py-20 lg:py-24 overflow-hidden
      bg-gray-200"
    >
      {/* Subtle overlay for better contrast */}
      <div className="absolute inset-0 bg-gray-100 backdrop-blur-3xl"></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mb-4 sm:mb-6">
            Our{" "}
            <span className="bg-blue-950 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl lg:max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
            We blend creativity, technology, and intelligence to craft digital solutions that truly elevate your brand.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {services.map((service, index) => {
            const Icon = service.icon
            const colors = colorClasses[service.color as keyof typeof colorClasses]

            return (
              <motion.div
                key={service.title}
                className={`group bg-white/40 dark:bg-white/10 backdrop-blur-xl border ${colors.border} ${colors.hover}
                rounded-2xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:bg-white/60`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
              >
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 ${colors.bg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 ${colors.icon}`} />
                </div>

                <h3 className="text-lg sm:text-xl font-semibold text-blue-950 mb-2">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-700 mb-4 leading-relaxed">{service.description}</p>

                <Link
                  href={service.href}
                  className={`inline-flex items-center text-sm font-medium ${colors.icon} group-hover:translate-x-1 transition-transform duration-300`}
                >
                  Learn more
                  <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1" />
                </Link>
              </motion.div>
            )
          })}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/services">
            <motion.button
              className="group bg-blue-950 text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 flex items-center space-x-2 mx-auto w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All Services</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServicesHighlight
