'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Projects = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const projects = [
    {
      title: 'Transportation Service Management System',
      description:
        'A web-based system developed for Database Management Systems 2 (DBMS-2) subject. Streamlines the process of managing transportation service requests, schedules, and records. Features include service request tracking, admin dashboard, driver and vehicle management, and user authentication.',
      technologies: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
      image: '🚌',
      link: '#',
      github: 'https://github.com/1mRen/Transportation_Service_Mangement_Website',
      featured: true,
    },
    {
      title: 'Home Subdivision Management System',
      description:
        'A compliance project for EL-Net Subject built with ASP.NET MVC. A comprehensive web application for managing home subdivision amenities, status, and community resources. Features user management, CRUD operations, and administrative controls.',
      technologies: ['C#', 'ASP.NET MVC', '.NET', 'SQL', 'HTML', 'CSS', 'JavaScript'],
      image: '🏘️',
      link: '#',
      github: 'https://github.com/1mRen/Home_Subdiv_Web',
    },
    {
      title: 'User Management System',
      description:
        'A robust user management system designed to handle user authentication, authorization, and profile management. Features include user registration, login, role-based access control, and user administration capabilities.',
      technologies: ['JavaScript', 'Node.js', 'SQL', 'HTML', 'CSS'],
      image: '👥',
      link: '#',
      github: 'https://github.com/1mRen/user-management-system',
    },
    {
      title: 'Fabriqly',
      description:
        'A collaborative project featuring modern web development practices. Built with a focus on user experience and efficient functionality.',
      technologies: ['JavaScript', 'React', 'Node.js', 'HTML', 'CSS'],
      image: '⚡',
      link: '#',
      github: 'https://github.com/Fabriqly/Fabriqly',
    },
  ]

  return (
    <section
      id="projects"
      className="py-20 bg-white dark:bg-gray-900"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4 text-gray-900 dark:text-white">
            Projects
          </h2>
          <div className="w-24 h-1 bg-primary-500 mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group ${
                project.featured ? 'md:col-span-2 border-2 border-primary-500' : ''
              }`}
            >
              <div className={`h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-8xl ${
                project.featured ? 'relative' : ''
              }`}>
                {project.image}
                {project.featured && (
                  <span className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gray-800 dark:text-gray-200">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4">
                  {project.link && project.link !== '#' && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-semibold flex items-center gap-2 transition-colors"
                    >
                      Live Demo
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  )}
                  {project.github && project.github !== '#' && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-gray-200 font-semibold flex items-center gap-2 transition-colors"
                    >
                      GitHub
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

