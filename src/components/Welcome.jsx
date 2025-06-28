import { RightArrowIcon } from "../assets/assets";
import { Footer, Logo } from "../index";
import { onExplore } from "../store/favPhotoSlice";
import { useDispatch } from "react-redux";

function Welcome() {
  const dispatch = useDispatch();

  return (
    <div className="w-full h-full">
      <div className="w-full h-[70vh] bg-[var(--bg-welcome)] flex justify-center items-center px-4">
        <div className="flex flex-col items-center">
          <Logo className="text-7xl sm:text-8xl" />
          <p className="text-xs sm:text-base">
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
