import { Footer, Logo, Button } from "../index";
import { onExplore } from "../store/favPhotoSlice";
import { useDispatch } from "react-redux";
import { useGSAP } from "@gsap/react";
import { RiArrowRightSLine } from "react-icons/ri";
import gsap from "gsap";

gsap.registerPlugin(useGSAP);

const HEADING = "PIXILLION";

function Welcome() {
  const dispatch = useDispatch();

  useGSAP(() => {
    let timeline = gsap.timeline();
    timeline
      .fromTo(
        ".logo-text",
        {
          opacity: 0,
          y: 0,
          color: "var(--color-muted)",
        },
        {
          opacity: 1,
          y: -100,
          scale: 1.2,
          color: "var(--color-ink)",
          stagger: {
            grid: [1, 9],
            from: "edges",
            amount: 0.8,
          },
        },
        "main",
      )

      .from(
        ".pattern",
        {
          opacity: 0,
          y: 100,
          stagger: 0.4,
        },
        "-=0.4",
      )

      .from(
        ".description",
        {
          opacity: 0,
          x: -200,
          delay: 1,
        },
        "main",
        "-=0.2",
      )

      .from(
        ".explore-btn",
        {
          opacity: 0,
          scale: 1.5,
          y: 10,
          delay: 1,
          ease: "bounce.out",
        },
        "main",
        "-=1.2",
      );
  }, []);

  return (
    <div className="w-full h-full overflow-hidden">
      <div className="relative w-full h-[70vh] bg-surface flex justify-center items-center px-4">
        <div className="absolute top-0 right-0 w-[50vw] h-full bg-background overflow-hidden">
          <div className="pattern absolute -top-10 -right-14 w-30 h-30 rounded-full bg-ink/80 blur-xs"></div>
          <div className="pattern absolute top-54 left-36 w-15 h-15 rounded-full bg-ink/20 blur-xs sm:w-20 sm:h-20 sm:top-48 sm:left-50"></div>
          <div className="pattern absolute top-100 left-30 w-25 h-25 rounded-xl rotate-45 bg-ink/40 blur-sm"></div>
        </div>
        <div className="flex flex-col items-center z-20">
          <div className=" font-semibold text-5xl sm:text-8xl">
            {HEADING.split("").map((letter, i) => (
              <span key={i} className="logo-text text-ink/90">
                {letter}
              </span>
            ))}
          </div>
          <p className="description text-ink/50 text-center text-base sm:text-xl">
            A modern space to explore diverse visuals in every scroll.
          </p>
          <Button
            to={"#"}
            onClick={() => dispatch(onExplore())}
            className="explore-btn"
          >
            <span>Explore</span>
            <span>
              <RiArrowRightSLine className="text-2xl" />
            </span>
          </Button>
        </div>
      </div>
      <div className="w-full h-[30vh]">
        <Footer />
      </div>
    </div>
  );
}

export default Welcome;
