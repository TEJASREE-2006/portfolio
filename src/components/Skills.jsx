import { motion } from "framer-motion";
import { useState } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaDatabase,
  FaFileWord,
  FaFileExcel,
  FaFilePowerpoint,
  FaChartBar,
  FaTable,
} from "react-icons/fa";

function Skills() {

  const [selectedSkill, setSelectedSkill] = useState("");

  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
      level: 95,
      color: "#E44D26",
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
      level: 90,
      color: "#264DE4",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: 85,
      color: "#F7DF1E",
    },
    {
      name: "React",
      icon: <FaReact />,
      level: 85,
      color: "#61DBFB",
    },
    {
      name: "Flutter",
      icon: <FaReact />,
      level: 80,
      color: "#42A5F5",
    },
    {
      name: "Django",
      icon: <FaPython />,
      level: 82,
      color: "#2BA977",
    },
    {
      name: "Python",
      icon: <FaPython />,
      level: 90,
      color: "#3776AB",
    },
    {
      name: "Java",
      icon: <FaJava />,
      level: 82,
      color: "#E76F00",
    },
    {
      name: "MongoDB",
      icon: <FaDatabase />,
      level: 80,
      color: "#4DB33D",
    },
    {
      name: "MySQL",
      icon: <FaDatabase />,
      level: 80,
      color: "#00758F",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      level: 85,
      color: "#F05032",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      level: 90,
      color: "#FFFFFF",
    },
    {
      name: "Power BI",
      icon: <FaChartBar />,
      level: 75,
      color: "#F2C811",
    },
    {
      name: "Tableau",
      icon: <FaTable />,
      level: 70,
      color: "#E97627",
    },
    {
      name: "MS Word",
      icon: <FaFileWord />,
      level: 90,
      color: "#2B579A",
    },
    {
      name: "MS Excel",
      icon: <FaFileExcel />,
      level: 85,
      color: "#217346",
    },
    {
      name: "PowerPoint",
      icon: <FaFilePowerpoint />,
      level: 88,
      color: "#D24726",
    },
  ];

  return (
    <section id="skills" className="bg-black text-white py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >

          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            My Skills
          </h2>

          <p className="text-gray-400 text-lg md:text-xl">
            These are the{" "}
            <span className="text-yellow-400 font-semibold">
              tools
            </span>{" "}
            and{" "}
            <span className="text-yellow-400 font-semibold">
              technologies
            </span>{" "}
            that I work with
          </p>

        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedSkill(skill.name)}
              className={`
                bg-[#111111]
                border
                rounded-2xl
                p-6
                cursor-pointer
                transition-all
                duration-300

                ${
                  selectedSkill === skill.name
                    ? "border-green-400"
                    : "border-gray-800"
                }
              `}
            >

              {/* Icon */}
              <div
                className="text-5xl flex justify-center mb-4"
                style={{ color: skill.color }}
              >
                {skill.icon}
              </div>

              {/* Name */}
              <h3 className="text-center font-semibold">
                {skill.name}
              </h3>

              {/* Progress */}
              {selectedSkill === skill.name && (

                <div className="mt-5">

                  <div className="flex justify-between text-sm mb-2">

                    <span className="text-gray-400">
                      Progress
                    </span>

                    <span style={{ color: skill.color }}>
                      {skill.level}%
                    </span>

                  </div>

                  <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">

                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${skill.level}%`,
                      }}
                      transition={{ duration: 0.7 }}
                      className="h-full rounded-full"
                      style={{
                        backgroundColor: skill.color,
                      }}
                    />

                  </div>

                </div>

              )}

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;