"use client";

import { motion } from "framer-motion";
import { Award, ArrowRight } from "lucide-react";
import Image from "next/image";
import values from "@/data/about/values";
import teamMembers from "@/data/about/teamMembers";
import stats from "@/data/about/stats";
import Link from "next/link";

const AboutPage = () => {
  return (
    <div className="min-h-screen text-white transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-20 bg-[linear-gradient(120deg,#0a192f,#112240,#1e3a8a,#172554,#1e40af)] bg-[length:400%_400%] animate-[gradientFlow_15s_ease_infinite]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl sm:max-w-4xl">
          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About <span className="text-white">CraftsLogic</span>
          </motion.h1>
          <p className="text-base sm:text-lg md:text-xl leading-relaxed">
            We are a passionate team of developers and designers dedicated to
            crafting intelligent, aesthetic, and high-performing digital
            experiences.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              Our Mission
            </h2>
            <p className="text-base sm:text-lg text-gray-600 mb-6 leading-relaxed">
              At CraftsLogic, we believe in technology’s ability to transform
              businesses and lives. Our mission is to build solutions that merge
              innovation with usability.
            </p>
            <p className="text-base sm:text-lg text-gray-600 mb-8 leading-relaxed">
              Combining AI, modern design, and robust development, we deliver
              experiences that are as powerful as they are beautiful.
            </p>
            <motion.button
              className="bg-blue-950 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-md hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href={"/contact"}>Start Your Project</Link>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="dark:bg-blue-950 p-6 sm:p-8 rounded-3xl text-white">
              <h3 className="text-xl sm:text-2xl font-bold mb-4">
                Why Choose CraftsLogic?
              </h3>
              <ul className="space-y-3 text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                <li>✅ Innovative and AI-powered solutions</li>
                <li>✅ Responsive and modern designs</li>
                <li>✅ Scalable and secure codebase</li>
                <li>✅ Dedicated long-term support</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Values
          </motion.h2>
          <p className="text-base sm:text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            These principles define who we are and how we approach every
            project.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  className="dark:bg-blue-950 p-6 rounded-2xl text-center shadow-md hover:shadow-lg transition duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                >
                  <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-7 h-7 sm:w-8 sm:h-8" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-950 dark:text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl sm:text-5xl font-bold text-blue-950 mb-2">
                {stat.number}
              </div>
              <p className="text-gray-600 font-medium text-sm sm:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 sm:py-20 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 mb-6">
              Meet Our Team
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              A team of developers, designers, and thinkers bringing your vision
              to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {teamMembers.map((member, i) => (
              <motion.div
                key={member.id}
                className="bg-blue-950 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <div className="relative overflow-hidden bg-gray-700 h-64 sm:h-72 lg:h-80 rounded-lg">
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    className="object-contain object-center"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                <div className="p-6 sm:p-8">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-blue-300 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="italic text-xs sm:text-sm text-gray-400 mb-3">
                    “{member.tagline}”
                  </p>
                  <p className="text-gray-300 text-sm sm:text-base mb-6">
                    {member.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-blue-900/40 text-blue-200 text-xs rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-1">
                    {member.achievements.map((ach, j) => (
                      <div key={j} className="flex items-center space-x-2">
                        <Award className="w-3 h-3 text-yellow-400" />
                        <span className="text-xs text-gray-300">{ach}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-gray-100 text-center">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-950 mb-6"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Ready to Work Together?
        </motion.h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8">
          Let’s bring your digital ideas to life — start your project today.
        </p>
        <motion.button
          className="bg-blue-950 hover:bg-blue-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2 mx-auto"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <a href="/contact">
            <span>Start Your Project</span>
          </a>
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </section>
    </div>
  );
};

export default AboutPage;
