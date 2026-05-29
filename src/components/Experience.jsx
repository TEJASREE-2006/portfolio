import { motion } from 'framer-motion'
import ihub from '../assets/ihub.png'
import ibm from '../assets/ibm.png'

function Experience() {
  return (
    <section
      id="experience"
      className="bg-[#050505] text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >

          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            Experiences
          </h2>

          <p className="text-lg md:text-2xl text-gray-400 leading-8">
            A summary of the

            <span className="text-yellow-400 font-semibold">
              {' '}Roles, Responsibilities
            </span>

            {' '}that have shaped my professional path so far
          </p>

        </motion.div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 top-0 w-[2px] h-full bg-yellow-400/40"></div>

          {/* EXPERIENCE 1 */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative grid md:grid-cols-2 gap-16 items-center mb-28"
          >

            {/* LEFT CONTENT */}
            <div className="md:pr-20">

              <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                iHub-Data,
                <br />
                IIIT Hyderabad
              </h3>

              <div className="inline-block border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full mb-8 text-sm md:text-base">
                AI/ML Intern (YOLOv8)
              </div>

              <p className="text-gray-300 text-base md:text-lg leading-8">
                Processed and annotated medical image datasets
                for training object detection models using YOLOv8
                focused on healthcare and skin lesion detection.
              </p>

              <ul className="mt-8 space-y-5 text-gray-200 text-base md:text-lg">

                <li className="flex gap-3">
                  <span className="text-yellow-400">✔</span>
                  Processed medical image datasets
                </li>

                <li className="flex gap-3">
                  <span className="text-yellow-400">✔</span>
                  Trained YOLOv8 detection models
                </li>

                <li className="flex gap-3">
                  <span className="text-yellow-400">✔</span>
                  Evaluated model performance metrics
                </li>

                <li className="flex gap-3">
                  <span className="text-yellow-400">✔</span>
                  Worked on AI healthcare use cases
                </li>

              </ul>

            </div>

            {/* CENTER DOT */}
            <div className="hidden md:flex absolute left-1/2 top-24 -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-yellow-400 z-10"></div>

            {/* RIGHT IMAGE */}
            <div className="flex flex-col items-center md:items-start">

              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={ihub}
                alt="iHub"
                className="w-36 h-36 md:w-44 md:h-44 object-contain rounded-3xl bg-white p-5 shadow-2xl"
              />

              <p className="mt-6 text-gray-400 text-base md:text-lg">
                May 2025 – Aug 2025
              </p>

            </div>

          </motion.div>

          {/* EXPERIENCE 2 */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative grid md:grid-cols-2 gap-16 items-center"
          >

            {/* LEFT IMAGE */}
            <div className="flex flex-col items-center md:items-end order-2 md:order-1 md:pr-20">

              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                src={ibm}
                alt="IBM"
                className="w-36 h-36 md:w-44 md:h-44 object-contain rounded-3xl bg-white p-5 shadow-2xl"
              />

              <p className="mt-6 text-gray-400 text-base md:text-lg">
                Jun 2024 – Aug 2024
              </p>

            </div>

            {/* CENTER DOT */}
            <div className="hidden md:flex absolute left-1/2 top-24 -translate-x-1/2 w-6 h-6 bg-white rounded-full border-4 border-yellow-400 z-10"></div>

            {/* RIGHT CONTENT */}
            <div className="md:pl-20 order-1 md:order-2">

              <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                IBM SkillsBuild
              </h3>

              <div className="inline-block border border-yellow-400 text-yellow-400 px-5 py-2 rounded-full mb-8 text-sm md:text-base">
                Frontend Development Intern
              </div>

              <p className="text-gray-300 text-base md:text-lg leading-8">
                Developed responsive UI components and improved
                user experiences using modern frontend technologies.
              </p>

              <ul className="mt-8 space-y-5 text-gray-200 text-base md:text-lg">

                <li className="flex gap-3">
                  <span className="text-yellow-400">✔</span>
                  Built responsive web components
                </li>

                <li className="flex gap-3">
                  <span className="text-yellow-400">✔</span>
                  Improved interactive layouts
                </li>

                <li className="flex gap-3">
                  <span className="text-yellow-400">✔</span>
                  Worked with HTML, CSS & JavaScript
                </li>

                <li className="flex gap-3">
                  <span className="text-yellow-400">✔</span>
                  Enhanced usability and UI design
                </li>

              </ul>

            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}

export default Experience