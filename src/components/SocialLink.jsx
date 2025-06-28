import React from "react";
import {
  GithubDarkIcon,
  GithubIcon,
  LinkedInDarkIcon,
  LinkedInIcon,
} from "../assets/assets";
import { Link } from "react-router-dom";

function SocialLink({ component, onMenu }) {
  const socialLinks = [
    {
      path: "https://github.com/abhisharma54",
      imgSrc: component === "footer" ? GithubIcon : GithubDarkIcon,
      imgAlt: "Github Profile",
    },
    {
      path: "https://linkedin.com/in/abhishek-sharma-8317751b4/",
      imgSrc: component === "footer" ? LinkedInIcon : LinkedInDarkIcon,
      imgAlt: "LinkedIn Profile",
    },
  ];
  return (
    <ul className="flex gap-4">
      {socialLinks.map((link, i) => (
        <li key={i}>
          <Link
            onClick={onMenu}
            to={link.path}
            target="_blank"
            className="block text-xl font-semibold transition duration-150 ease-in-out hover:scale-110"
          >
            <img
              className="w-[24px]"
              src={link.imgSrc}
              alt={link.imgAlt}
              loading="lazy"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default React.memo(SocialLink);
