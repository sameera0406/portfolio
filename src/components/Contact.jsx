import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="my-16 px-4 text-center max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-indigo-700 mb-4">Contact</h2>
      <p className="text-gray-600 mb-4">Let's connect! Feel free to reach out 👇</p>
      <div className="flex justify-center gap-6 text-2xl text-indigo-600">
        <a
          href="mailto:raghasameeravasa@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500 hover:-translate-y-1 transition-transform transition-colors duration-300"
          aria-label="Email"
        >
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/sameera0406"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-900 hover:-translate-y-1 transition-transform transition-colors duration-300"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/vasa-ragha-sameera-750578293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-700 hover:-translate-y-1 transition-transform transition-colors duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Contact;
