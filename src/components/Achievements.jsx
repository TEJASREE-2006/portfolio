import { motion } from "framer-motion";
import { FaAward } from "react-icons/fa";

function Achievements() {
  return (
    <section
      id="achievements"
      className="bg-black text-white py-24 px-6 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <h2 className="text-4xl md:text-7xl font-bold mb-6">
            Achievements
          </h2>

          <p className="text-lg md:text-2xl text-gray-400">
            Milestones that validate my dedication to{" "}

            <span className="text-yellow-400 font-semibold">
              leadership
            </span>

            ,{" "}

            <span className="text-yellow-400 font-semibold">
              growth
            </span>

            , and{" "}

            <span className="text-yellow-400 font-semibold">
              professional excellence
            </span>

          </p>

        </motion.div>

        {/* Achievement Card */}
        <div className="flex justify-center">

          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8 }}
            viewport={{ once: true }}
            className="
              bg-[#111111]
              border
              border-yellow-400/20
              rounded-3xl
              overflow-hidden
              max-w-6xl
              w-full
              hover:border-yellow-400/50
              transition-all
              duration-300
            "
          >

            <div className="grid md:grid-cols-2 items-center">

              {/* LEFT IMAGE */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  bg-black
                  p-6
                "
              >

                <img
                  src="/iei.jpg"
                  alt="IEI Achievement"
                  className="
                    w-full
                    max-h-[500px]
                    object-contain
                    rounded-2xl
                  "
                />

              </div>

              {/* RIGHT CONTENT */}
              <div className="p-10">

                {/* Icon */}
                <div
                  className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-yellow-400/10
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >

                  <FaAward className="text-3xl text-yellow-400" />

                </div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Vice-President
                </h3>

                {/* Organization */}
                <p className="text-yellow-400 text-lg mb-2">
                  IEI IT Student Chapter
                </p>

                {/* Duration */}
                <p className="text-gray-500 mb-6">
                  2025 - Present
                </p>

                {/* Description */}
                <p className="text-gray-300 leading-8 text-lg mb-8">

                  Serving as an Executive Body Member and actively
                  contributing to technical events, student engagement,
                  leadership activities, and collaborative initiatives
                  within the IEI IT Student Chapter.

                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-4">

                  <span
                    className="
                      border
                      border-yellow-400
                      text-yellow-400
                      px-5
                      py-2
                      rounded-full
                      text-sm
                    "
                  >
                    Leadership
                  </span>

                  <span
                    className="
                      border
                      border-yellow-400
                      text-yellow-400
                      px-5
                      py-2
                      rounded-full
                      text-sm
                    "
                  >
                    Executive Member
                  </span>

                  <span
                    className="
                      border
                      border-yellow-400
                      text-yellow-400
                      px-5
                      py-2
                      rounded-full
                      text-sm
                    "
                  >
                    Teamwork
                  </span>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Achievements;