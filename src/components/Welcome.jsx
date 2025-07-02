import { RightArrowIcon } from "../assets/assets";
import { Footer, Logo } from "../index";
import { onExplore } from "../store/favPhotoSlice";
import { useDispatch } from "react-redux";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

function Welcome() {
  const dispatch = useDispatch();

  useGSAP(() => {
    gsap.fromTo(
      ".logo-text",
      {
        opacity: 0,
        y: 0,
        color: "green",
      },
      {
        opacity: 1,
        y: -100,
        color: "var(--text-secondary)",
        scale: 1.2,
        stagger: {
          grid: [1, 9],
          from: "edges",
          amount: 0.8,
        },
      }
    );
    gsap.from(".pattern", {
      opacity: 0,
      y: 100,
      stagger: 0.4,
    });

    gsap.from(".description", {
      opacity: 0,
      x: -200,
      delay: 1,
    });
  }, []);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="relative w-full h-[70vh] bg-[var(--bg-welcome)] flex justify-center items-center px-4">
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-[var(--bg-primary)] overflow-hidden">
          <div className="pattern absolute -top-10 -right-14 w-[120px] h-[120px] rounded-full bg-[var(--bg-secondary)]"></div>
          <div className="pattern absolute top-54 left-36 w-[60px] h-[60px] rounded-full bg-[var(--bg-dark)]/20 sm:w-[80px] sm:h-[80px] sm:top-48 sm:left-50"></div>
          <div className="pattern absolute top-100 left-30 w-[100px] h-[100px] rounded-xl rotate-45 bg-[var(--bg-dark)]/8"></div>
        </div>
        <div className="flex flex-col items-center z-20">
          <div className="font_bebas_neue text-[var(--text-dark)] text-7xl sm:text-8xl">
            <span className="logo-text">P</span>
            <span className="logo-text">I</span>
            <span className="logo-text">X</span>
            <span className="logo-text">I</span>
            <span className="logo-text">L</span>
            <span className="logo-text">L</span>
            <span className="logo-text">I</span>
            <span className="logo-text">O</span>
            <span className="logo-text">N</span>
          </div>
          <p className="description text-xs sm:text-base">
            A modern space to explore diverse visuals in every scroll.
          </p>
          <button
            onClick={() => dispatch(onExplore())}
            className="explore-btn flex justify-center items-center mt-10 text-lg sm:text-xl"
          >
            <span>Explore</span>
            <img
              className="w-[30px]"
              src={RightArrowIcon}
              alt="explore photos"
              loading="lazy"
            />
          </button>
        </div>
      </div>
      <div className="w-full h-[30vh]">
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;
