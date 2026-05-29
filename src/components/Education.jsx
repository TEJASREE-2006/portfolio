import { motion } from "framer-motion";
import { useState } from "react";

import brecw from "../assets/brecw.png";
import narayana from "../assets/narayana.png";
import sav from "../assets/sav.png";

function Education() {

  const [selected, setSelected] = useState(0);

  const educationData = [
    {
      year: "2023 – Present",

      title: "B.Tech in Computer Science Engineering",

      institute: "Bhoj Reddy Engineering College for Women",

      score: "CGPA: 9.10",

      image: brecw,

      description:
        "My engineering journey shaped my passion for software development, AI, and problem-solving. Here, I explored full-stack development, leadership, teamwork, and real-world project building through practical learning and technical activities.",
    },

    {
      year: "2021 – 2023",

      title: "Intermediate – MPC",

      institute: "Narayana Junior College",

      score: "Percentage: 97.8%",

      image: narayana,

      description:
        "Intermediate taught me discipline, consistency, and how competitive the world can be. It strengthened my analytical thinking, time management, and ability to perform under pressure while balancing academics and personal growth.",
    },

    {
      year: "2011 – 2021",

      title: "Secondary School Education",

      institute: "Sai Baba Adarsh Vidyaniketan",

      score: "CGPA: 10",

      image: sav,

      description:
        "School laid the foundation for my curiosity, confidence, and communication skills. It helped me develop creativity, leadership qualities, and the habit of continuous learning from an early stage.",
    },
  ];

  return (
    <section
      id="education"
      className="bg-[#050505] text-white py-24 px-6 overflow-hidden"
    >

      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            Education
          </h2>

          <p className="text-lg md:text-2xl text-gray-400 max-w-4xl mx-auto leading-9">

            The journey that shaped my{" "}

            <span className="text-yellow-400 font-semibold">
              mindset
            </span>

            , strengthened my{" "}

            <span className="text-yellow-400 font-semibold">
              discipline
            </span>

            , and inspired my passion for{" "}

            <span className="text-yellow-400 font-semibold">
              technology
            </span>

          </p>

        </motion.div>

        {/* Timeline */}
        <div className="relative mb-16">

          {/* Line */}
          <div
            className="
              absolute
              top-5
              left-0
              right-0
              h-[2px]
              bg-yellow-400/30
            "
          />

          {/* Nodes */}
          <div className="flex justify-between relative z-10">

            {educationData.map((edu, index) => (

              <div
                key={index}
                className="flex flex-col items-center w-full cursor-pointer"
                onClick={() => setSelected(index)}
              >

                {/* Circle */}
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  className={`
                    w-10
                    h-10
                    rounded-full
                    border-4
                    border-black
                    transition-all
                    duration-300
                    flex
                    items-center
                    justify-center

                    ${
                      selected === index
                        ? "bg-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.7)]"
                        : "bg-[#222]"
                    }
                  `}
                >

                  <div
                    className={`
                      w-3
                      h-3
                      rounded-full

                      ${
                        selected === index
                          ? "bg-black"
                          : "bg-yellow-400"
                      }
                    `}
                  />

                </motion.div>

                {/* Year */}
                <p
                  className={`
                    mt-4
                    text-sm
                    md:text-base
                    transition-all

                    ${
                      selected === index
                        ? "text-yellow-400"
                        : "text-gray-500"
                    }
                  `}
                >
                  {edu.year}
                </p>

              </div>

            ))}

          </div>

        </div>

        {/* Dynamic Card Position */}
        <div
          className={`
            flex
            mt-10

            ${
              selected === 0
                ? "justify-start"
                : selected === 1
                ? "justify-center"
                : "justify-end"
            }
          `}
        >

          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="
              bg-[#111111]
              border
              border-yellow-400/20
              rounded-3xl
              overflow-hidden
              hover:border-yellow-400/50
              transition-all
              duration-300
              max-w-4xl
              w-full
              md:w-[70%]
            "
          >

            <div className="grid md:grid-cols-[220px_1fr] items-center">

              {/* Left */}
              <div className="flex justify-center p-6 bg-black">

                <img
                  src={educationData[selected].image}
                  alt={educationData[selected].title}
                  className="
                    w-[140px]
                    h-[140px]
                    object-contain
                    rounded-2xl
                    bg-white
                    p-3
                    border-2
                    border-yellow-400
                  "
                />

              </div>

              {/* Right */}
              <div className="p-6 md:p-8">

                <p className="text-yellow-400 mb-2 text-sm">
                  {educationData[selected].year}
                </p>

                <h3 className="text-2xl md:text-3xl font-bold mb-3 leading-tight">
                  {educationData[selected].title}
                </h3>

                <p className="text-lg text-gray-300 mb-4">
                  {educationData[selected].institute}
                </p>

                <div className="mb-5">

                  <span
                    className="
                      bg-yellow-400
                      text-black
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-semibold
                    "
                  >
                    {educationData[selected].score}
                  </span>

                </div>

                <p className="text-gray-400 leading-8 text-base">

                  {educationData[selected].description}

                </p>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default Education;