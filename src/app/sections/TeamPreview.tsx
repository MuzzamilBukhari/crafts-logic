"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

const TeamPreview = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Muzzamil Bukhari",
      role: "Founder / Full Stack & AI Developer",
      tagline: "Architecting intelligent solutions",
      description:
        "Passionate about building scalable applications and AI-powered systems that solve real-world problems with precision and efficiency.",
      avatar: "/api/placeholder/300/300",
      skills: ["React", "Node.js", "Python", "AI/ML", "AWS"],
    },
    {
      id: 2,
      name: "Huzaifa Naeem",
      role: "Frontend Developer / Graphic Designer",
      tagline: "Designing and developing seamless experiences",
      description:
        "Focused on crafting responsive, visually appealing, and high-performance websites using Next.js, React, and Tailwind CSS.",
      avatar: "/api/placeholder/300/300",
      skills: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Design"],
    },
    {
      id: 3,
      name: "Hijaabi Girl",
      role: "UI/UX Designer",
      tagline: "Turning design into experience",
      description:
        "Creates intuitive and user-friendly designs that combine beauty and usability for a perfect digital experience.",
      avatar: "/api/placeholder/300/300",
      skills: ["Figma", "Wireframing", "Prototyping", "UX Research", "Adobe XD"],
    },
  ]

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-100 transition-colors duration-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-blue-950 mb-4 sm:mb-6">
            Meet Our <span className="text-blue-950">Team</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-xl lg:max-w-3xl mx-auto leading-relaxed">
            A passionate team of developers, designers, and innovators working together to bring your digital vision to life.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              className="group bg-blue-950 border border-gray-200/20 
                         rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Avatar Section */}
              <div className="relative overflow-hidden bg-gray-700 h-48 sm:h-56 lg:h-64">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <span className="text-3xl sm:text-4xl font-bold text-white">
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content Section */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-blue-950 dark:text-white mb-1">{member.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mb-2">{member.role}</p>
                <p className="italic text-gray-500 dark:text-gray-400 mb-3 text-sm">&ldquo;{member.tagline}&rdquo;</p>
                <p className="text-gray-700 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {member.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {member.skills.slice(0, 3).map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-xs rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                  {member.skills.length > 3 && (
                    <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-xs rounded-full">
                      +{member.skills.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <Link href="/about">
            <motion.button
              className="group bg-blue-950 hover:bg-blue-950/90 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2 mx-auto w-fit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Learn More About Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default TeamPreview
