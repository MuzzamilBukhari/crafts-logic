"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Sparkles, Code, Palette } from "lucide-react"

const HeroSection = () => {
  return (
<section
  className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 
  bg-[linear-gradient(120deg,#0a192f,#112240,#1e3a8a,#172554,#1e40af)]
  bg-[length:400%_400%] animate-[gradientFlow_15s_ease_infinite]"
>
  {/* Soft overlay for readability */}
  <div className="absolute inset-0 bg-white/5 backdrop-blur-2xl"></div>




      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Mobile Layout: Text on left, buttons on right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          
          {/* Left Side - Text Content */}
          <motion.div 
            className="flex-1 text-left md:text-center"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Logo and Tagline */}
            <motion.div
              className="mb-6 sm:mb-8"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white text-balance mb-4 sm:mb-6 drop-shadow-lg">
                CraftsLogic
              </h1>
              <motion.div
                className="flex flex-wrap items-center gap-2 sm:gap-3 text-white/80 justify-start md:justify-center"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm font-medium tracking-wider uppercase text-gray-400">Digital Craftsmanship</span>
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-balance mb-4 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We build digital experiences that merge{" "}
              <span className="bg-white  bg-clip-text text-transparent">
                design, code, and intelligence
              </span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              From AI-powered solutions to stunning user interfaces, we craft digital products that push boundaries and
              deliver exceptional results.
            </motion.p>

            {/* Icons - Hidden on mobile, shown on medium+ */}
            <motion.div
              className="hidden md:flex justify-start md:justify-center items-center gap-4 sm:gap-6 text-white/80 mt-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center space-y-1">
                <Code className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                <span className="text-sm">Development</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center space-y-1">
                <Palette className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                <span className="text-sm">Design</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center space-y-1">
                <Sparkles className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                <span className="text-sm">AI Solutions</span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Side - Buttons (Mobile) and Additional Content */}
          <motion.div 
            className="flex-1 flex flex-col items-end md:items-center justify-center w-full md:w-auto"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Buttons */}
          <motion.div
  className="flex flex-col items-center gap-3 sm:gap-4 w-full max-w-xs mx-auto"
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
>
  <Link href="/projects" className="w-full">
    <motion.button
      className="group bg-white text-blue-950 px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 w-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>View Projects</span>
      <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform duration-300" />
    </motion.button>
  </Link>

  <Link href="/contact" className="w-full">
    <motion.button
      className="group border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg hover:bg-white/10 transition-all duration-300 w-full"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span>Get in Touch</span>
    </motion.button>
  </Link>
</motion.div>


            {/* Icons - Only shown on mobile */}
            <motion.div
              className="flex md:hidden justify-center items-center gap-4 sm:gap-6 text-white/80 mt-6 w-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center space-y-1">
                <Code className="w-6 h-6 text-white" />
                <span className="text-xs">Development</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center space-y-1">
                <Palette className="w-6 h-6 text-white" />
                <span className="text-xs">Design</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="flex flex-col items-center space-y-1">
                <Sparkles className="w-6 h-6 text-white" />
                <span className="text-xs">AI Solutions</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection