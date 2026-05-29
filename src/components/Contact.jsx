import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaEnvelope,
  FaPaperPlane,
} from "react-icons/fa";

import { motion } from "framer-motion";

import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

function Contact() {

  const form = useRef();

  const [messageLength, setMessageLength] = useState(0);

  const sendEmail = (e) => {

    e.preventDefault();

    emailjs
      .sendForm(
        "service_rl3130a",
        "template_3tgwtl9",
        form.current,
        "Z-GBeOPr5iNkdYkdU"
      )
      .then(
        () => {

          alert("Message sent successfully!");

          form.current.reset();

          setMessageLength(0);

        },
        () => {

          alert("Failed to send message.");

        }
      );
  };

  return (
    <section
      id="contact"
      className="bg-[#050505] text-white py-20 px-6"
    >

      <div className="max-w-4xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >

          <h2 className="text-4xl md:text-6xl font-bold mb-5">
            Do you like my work?
          </h2>

          <p className="text-gray-400 text-base md:text-lg leading-8 max-w-2xl mx-auto">

            Have a question, collaboration idea, or just want to say hello?
            Feel free to connect with me anytime.

          </p>

        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="
            bg-[#111111]
            border
            border-yellow-400/10
            rounded-3xl
            p-8
            md:p-10
            hover:border-yellow-400/40
            transition-all
            duration-300
          "
        >

          {/* Form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="space-y-6"
          >

            {/* Name */}
            <div>

              <label className="block mb-2 font-medium text-sm">
                Name *
              </label>

              <input
                type="text"
                name="user_name"
                required
                placeholder="Your name"
                className="
                  w-full
                  bg-black
                  border
                  border-gray-700
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-yellow-400
                  transition
                  text-sm
                "
              />

            </div>

            {/* Email */}
            <div>

              <label className="block mb-2 font-medium text-sm">
                E-mail *
              </label>

              <input
                type="email"
                name="user_email"
                required
                placeholder="Your e-mail"
                className="
                  w-full
                  bg-black
                  border
                  border-gray-700
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-yellow-400
                  transition
                  text-sm
                "
              />

            </div>

            {/* Message */}
            <div>

              <div className="flex justify-between mb-2">

                <label className="font-medium text-sm">
                  Message *
                </label>

                <span className="text-gray-500 text-xs">
                  {messageLength} / 300
                </span>

              </div>

              <textarea
                rows="5"
                maxLength="300"
                name="message"
                required
                placeholder="Your message"
                onChange={(e) =>
                  setMessageLength(e.target.value.length)
                }
                className="
                  w-full
                  bg-black
                  border
                  border-gray-700
                  rounded-xl
                  px-4
                  py-3
                  outline-none
                  focus:border-yellow-400
                  transition
                  resize-none
                  text-sm
                "
              ></textarea>

            </div>

            {/* Button */}
            <div className="flex justify-end">

              <button
                type="submit"
                className="
                  bg-yellow-400
                  text-black
                  px-7
                  py-3
                  rounded-xl
                  font-semibold
                  flex
                  items-center
                  gap-3
                  hover:scale-105
                  transition
                  duration-300
                  text-sm
                "
              >

                Send Message

                <FaPaperPlane />

              </button>

            </div>

          </form>

        </motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center gap-8 mt-12 text-3xl"
        >

          <a
            href="https://www.linkedin.com/in/teja-sree-chenikala-247663335"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition duration-300"
          >
            <FaLinkedin className="text-[#0A66C2]" />
          </a>

          <a
            href="#"
            className="hover:scale-110 transition duration-300"
          >
            <FaFacebook className="text-[#1877F2]" />
          </a>

          <a
            href="#"
            className="hover:scale-110 transition duration-300"
          >
            <FaInstagram className="text-pink-500" />
          </a>

          <a
            href="mailto:tejasree.chenikala@gmail.com"
            className="hover:scale-110 transition duration-300"
          >
            <FaEnvelope className="text-red-400" />
          </a>

        </motion.div>

        {/* Footer */}
        <div className="text-center mt-10 text-gray-500 text-sm md:text-base">

          Copyright © 2026 — Teja Sree. All Rights Reserved.

        </div>

      </div>

    </section>
  );
}

export default Contact;