import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Container, Logo, SocialLink } from "../../index";
import "../../css/menu.css";

function Navigation() {
  const [menu, setMenu] = useState(false);
  const navLinks = [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "About",
      path: "/about",
    },
    {
      label: "Favorite",
      path: "/favorite",
    },
  ];

  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  useEffect(() => {
    document.body.style.overflow = menu ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [menu]);

  return (
    <header>
      <nav className="w-full bg-background flex justify-center relative">
        <Container className="px-8 py-4 flex justify-between items-center">
          <Logo className="text-3xl" />

          {/* Hamburger */}
          <button
            className="relative w-6.5 h-5.5 block z-[100] sm:hidden cursor-pointer"
            onClick={handleMenu}
          >
            <span
              className={`hamburger hamburger-top ${menu ? "open" : ""}`}
            ></span>
            <span
              className={`hamburger hamburger-middle ${menu ? "open" : ""}`}
            ></span>
            <span
              className={`hamburger hamburger-bottom ${menu ? "open" : ""}`}
            ></span>
          </button>

          {/* Mobile Navigation*/}
          <div
            className={`fixed inset-0 bg-background  flex flex-col justify-between py-20 z-40 items-center gap-10 transition-transform duration-300 ease-standard sm:hidden ${
              menu ? "translate-x-0" : "-translate-x-full"
            } overflow-hidden`}
          >
            <ul className="flex flex-col gap-20">
              {navLinks.map((link, i) => (
                <li key={i}>
                  <NavLink
                    onClick={handleMenu}
                    className={({ isActive }) =>
                      `inline-block text-xl font-semibold ${
                        isActive ? "text-ink/90" : "text-ink/70"
                      } transition duration-150 ease-in-out hover:text-ink/90 active:scale-95`
                    }
                    to={link.path}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <SocialLink onMenu={handleMenu} />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden sm:flex gap-12 pr-5">
            {navLinks.map((link, i) => (
              <li key={i}>
                <NavLink
                  className={({ isActive }) =>
                    `inline-block text-xl font-semibold ${
                      isActive ? "text-ink/90" : "text-ink/70"
                    } transition-transform duration-150 ease-standard hover:text-ink/90 active:scale-95`
                  }
                  to={link.path}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </Container>
      </nav>
    </header>
  );
}

export default Navigation;
