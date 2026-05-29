import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

function Hero() {
  return (
    <section
      id="home"
      className="
        min-h-screen
        bg-black
        text-white
        flex
        items-center
        px-6
        relative
        overflow-hidden
      "
    >

      {/* Background Glow */}
      <div
        className="
          absolute
          top-0
          left-0
          w-[500px]
          h-[500px]
          bg-yellow-400/10
          blur-[120px]
          rounded-full
        "
      ></div>

      <div
        className="
          max-w-7xl
          mx-auto
          w-full
          grid
          md:grid-cols-2
          gap-16
          items-center
        "
      >

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* Small Intro */}
          <p
            className="
              text-yellow-400
              uppercase
              tracking-[4px]
              text-sm
              mb-6
            "
          >
            Software Engineer • AI Enthusiast
          </p>

          {/* Heading */}
          <h1
            className="
              text-5xl
              md:text-7xl
              font-bold
              leading-tight
              mb-6
            "
          >

            Hi, I'm{" "}

            <span className="text-yellow-400">
              Teja Sree
            </span>

          </h1>

          {/* Description */}
          <p
            className="
              text-gray-400
              text-lg
              md:text-xl
              leading-9
              max-w-2xl
              mb-10
            "
          >

            A passionate Computer Science student focused on
            Full Stack Development, AI & ML, and building
            scalable applications using modern technologies
            like React, Django, Flutter, and MongoDB.

          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-5">

            <a
              href="#projects"
              className="
                bg-yellow-400
                text-black
                px-8
                py-4
                rounded-full
                font-semibold
                hover:scale-105
                transition
              "
            >
              View Projects
            </a>

            <a
              href="/resume.pdf"
              download="Teja_Sree_Chenikala_Resume.pdf"
              className="
                border
                border-yellow-400
                text-yellow-400
                px-8
                py-4
                rounded-full
                font-semibold
                hover:bg-yellow-400
                hover:text-black
                transition
              "
            >
              Download Resume
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-6 mt-10">

            <a
              href="https://github.com/TEJASREE-2006"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-3xl
                text-gray-400
                hover:text-yellow-400
                transition
              "
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/teja-sree-chenikala-247663335"
              target="_blank"
              rel="noopener noreferrer"
              className="
                text-3xl
                text-gray-400
                hover:text-yellow-400
                transition
              "
            >
              <FaLinkedin />
            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >

          <img
            src="/profile.png"
            alt="Teja Sree"
            className="
              w-[320px]
              md:w-[450px]
              object-contain
              drop-shadow-[0_0_30px_rgba(250,204,21,0.25)]
              hover:scale-105
              transition
              duration-500
            "
          />

        </motion.div>

      </div>

      {/* Scroll Down */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="
          absolute
          bottom-10
          left-1/2
          -translate-x-1/2
          text-yellow-400
          text-3xl
        "
      >
        <FaArrowDown />
      </motion.div>

    </section>
  );
}

export default Hero;