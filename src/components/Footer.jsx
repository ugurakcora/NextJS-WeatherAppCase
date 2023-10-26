import React from "react";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { IoMdGlobe } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-[#282b66] p-4 text-white flex items-center justify-between fixed w-full bottom-0">
      <div>
        Uğur Akçora <span className="text-red-500">♥</span>
      </div>
      <div className="flex">
        <a
          href="https://github.com/ugurakcora"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ugurakcora/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://ugurakcora.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="mx-2"
        >
          <IoMdGlobe />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
