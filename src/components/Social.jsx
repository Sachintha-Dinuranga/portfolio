import React from "react";
import { FaGithub, FaLinkedin, FaStackOverflow } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <>
      {/* For larger screens (Visible only on sm and above) */}
      <div className="hidden sm:flex fixed left-4 top-1/2 transform -translate-y-1/2 flex-col gap-4 z-50">
        <a
          href="https://github.com/Sachintha-Dinuranga"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition"
        >
          <FaGithub size={30} />
        </a>
        <a
          href="https://www.linkedin.com/in/sachintha-dinuranga/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          href="https://stackoverflow.com/users/23296129/sachintha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition"
        >
          <FaStackOverflow size={30} />
        </a>
      </div>

      {/* For smaller screens (Show at the bottom) */}
      <div className="sm:hidden fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-4 z-50 bg-black p-2 rounded-lg">
        <a
          href="https://github.com/Sachintha-Dinuranga"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition"
        >
          <FaGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/sachintha-dinuranga/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition"
        >
          <FaLinkedin size={25} />
        </a>
        <a
          href="https://stackoverflow.com/users/23296129/sachintha"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white hover:text-blue-500 transition"
        >
          <FaStackOverflow size={25} />
        </a>
      </div>
    </>
  );
};

export default SocialMedia;
