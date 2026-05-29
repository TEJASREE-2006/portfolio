import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
} from "react-icons/fa";

const projects = [
  {
    title: "SkillConnect",
    subtitle: "Team Collaboration & Skill Matching Platform",
    description:
      "A full-stack collaboration platform that connects users with projects based on their skills and interests using intelligent recommendation workflows.",

    tech: ["React", "Django", "MongoDB"],

    github:
      "https://github.com/TEJASREE-2006/SkillConnect",

    color: "from-violet-500 to-fuchsia-500",
  },

  {
    title: "VidGenie",
    subtitle: "AI Powered Educational Video Creation App",

    description:
      "An AI-driven educational platform that transforms text topics into engaging video content using scalable backend workflows and future-ready AI architecture.",

    tech: ["Flutter", "Django", "MySQL", "AI"],

    github:
      "https://github.com/TEJASREE-2006/VidGenie---An-AI-Powered-Video-Creation-App",

    color: "from-yellow-400 to-orange-500",
  },

  {
    title: "Portfolio Website",

    subtitle: "Personal Developer Portfolio",

    description:
      "A modern animated portfolio website showcasing projects, education, achievements, and technical expertise with premium UI/UX interactions.",

    tech: ["React", "Tailwind", "Framer Motion"],

    github: "#",

    color: "from-cyan-400 to-blue-500",
  },

  {
    title: "NoteVault",

    subtitle: "Smart Notes Management App",

    description:
      "A responsive note management application with authentication, CRUD operations, and organized workspace features for students and developers.",

    tech: ["React", "Node.js", "MongoDB"],

    github: "#",

    color: "from-emerald-400 to-green-600",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#050505] text-white py-28 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            Professional Projects
          </h2>

          <p className="text-gray-400 text-lg md:text-2xl max-w-3xl mx-auto leading-10">

            A reflection of my

            <span className="text-yellow-400 font-semibold">
              {" "}growth
            </span>

            , creativity, and passion for building

            <span className="text-yellow-400 font-semibold">
              {" "}real-world scalable applications
            </span>

          </p>

        </motion.div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -12,
              }}

              className="
                group
                relative
                rounded-3xl
                overflow-hidden
              "
            >

              {/* Glow Border */}
              <div
                className={`
                  absolute
                  inset-0
                  bg-gradient-to-r
                  ${project.color}
                  opacity-20
                  blur-2xl
                  group-hover:opacity-40
                  transition
                  duration-500
                `}
              />

              {/* Card */}
              <div
                className="
                  relative
                  bg-[#111111]/90
                  backdrop-blur-xl
                  border
                  border-white/10
                  rounded-3xl
                  p-8
                  h-full
                  transition-all
                  duration-500
                  group-hover:border-yellow-400/30
                "
              >

                {/* Top */}
                <div className="flex items-center justify-between mb-8">

                  <div>

                    <h3 className="text-2xl md:text-3xl font-bold mb-2">
                      {project.title}
                    </h3>

                    <p
                      className={`
                        bg-gradient-to-r
                        ${project.color}
                        bg-clip-text
                        text-transparent
                        text-lg
                        font-semibold
                      `}
                    >
                      {project.subtitle}
                    </p>

                  </div>

                  <div className="flex gap-4 text-2xl">

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="
                        text-gray-400
                        hover:text-white
                        transition
                      "
                    >
                      <FaGithub />
                    </a>

                    <a
                      href="#"
                      className="
                        text-gray-400
                        hover:text-yellow-400
                        transition
                      "
                    >
                      <FaExternalLinkAlt />
                    </a>

                  </div>

                </div>

                {/* Description */}
                <p className="text-gray-400 leading-8 text-base md:text-lg mb-10">

                  {project.description}

                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-4">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="
                        px-5
                        py-2
                        rounded-full
                        text-sm
                        border
                        border-yellow-400/40
                        text-yellow-300
                        bg-yellow-400/5
                        hover:bg-yellow-400/10
                        transition
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;