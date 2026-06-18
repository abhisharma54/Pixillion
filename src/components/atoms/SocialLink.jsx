import React from "react";
import { IoLogoGithub } from "react-icons/io5";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

function SocialLink({ onMenu }) {
  const socialLinks = [
    {
      id: "Github",
      path: "https://github.com/abhisharma54",
      icon: IoLogoGithub,
    },
    {
      id: "Linkedin",
      path: "https://linkedin.com/in/abhishek-sharma-8317751b4/",
      icon: FaLinkedin,
    },
  ];

  return (
    <ul className="flex gap-4">
      {socialLinks.map((link) => {
        const Icon = link.icon;

        return (
          <li key={link.id}>
            <Link
              onClick={onMenu}
              to={link.path}
              target="_blank"
              className="block transition duration-150 ease-in-out hover:scale-110 hover:-translate-y-0.5"
            >
              <Icon className="text-3xl sm:text-4xl" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default React.memo(SocialLink);
