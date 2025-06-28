import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Logo, Menu, SocialLink } from "../index";
import { HomeIcon, AboutIcon, FavoriteIcon } from "../assets/assets";

function Header() {
  const [menu, setMenu] = useState(false);
  const navLinks = [
    { name: "Home", path: "/", imgSrc: HomeIcon, imgAlt: "Go to Home Page" },
    {
      name: "About",
      path: "/about",
      imgSrc: AboutIcon,
      imgAlt: "About project",
    },
    {
      name: "Favorite",
      path: "/favorite",
      imgSrc: FavoriteIcon,
      imgAlt: "View favorite Images",
    },
  ];

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <nav className="w-full flex justify-center relative">
      <Container className="px-8 py-4 flex justify-between items-center">
        <Logo className="text-3xl" />
        <button className="block sm:hidden" onClick={handleMenu}>
          <Menu menu={menu} />
        </button>

        <div
          className={`fixed top-0 left-0 w-[50vw] h-full bg-[#fff] shadow-xl flex flex-col justify-between py-20 items-center gap-10 transition-transform duration-300 z-50 sm:hidden ${
            menu ? "translate-x-0" : "-translate-x-full"
          } overflow-hidden`}
        >
          <ul className="flex flex-col gap-10">
            {navLinks.map((link, i) => (
              <li key={i}>
                <NavLink
                  onClick={handleMenu}
                  className={({ isActive }) =>
                    `flex items-center gap-2 text-xl font-semibold ${
                      isActive
                        ? "text-[var(--text-secondary)]"
                        : "text-[var(--text-dark)]"
                    } transition duration-150 ease-in-out hover:text-[var(--text-secondary)]`
                  }
                  to={link.path}
                >
                  <img
                    className="w-[30px]"
                    src={link.imgSrc}
                    alt={link.imgAlt}
                    loading="lazy"
                  />
                  <span>{link.name}</span>
                </NavLink>
              </li>
            ))}
          </ul>
          <SocialLink onMenu={handleMenu} />
        </div>

        <ul className="hidden sm:flex gap-12 pr-5">
          {navLinks.map((link, i) => (
            <li key={i}>
              <NavLink
                className={({ isActive }) =>
                  `text-xl font-semibold ${
                    isActive
                      ? "text-[var(--text-secondary)]"
                      : "text-[var(--text-dark)]"
                  } transition duration-150 ease-in-out hover:text-[var(--text-secondary)]`
                }
                to={link.path}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </Container>
    </nav>
  );
}

export default Header;
