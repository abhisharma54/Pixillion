import { NoInternetIcon } from "../assets/assets";
import { Link } from "react-router-dom";
import { Button } from "../index";

function Error({ error }) {
  return (
    <div className="w-full h-full max-h-[60vh] flex justify-center items-center py-10">
      {error === "No internet connection" ? (
        <div className="flex flex-col items-center">
          <img
            className="w-[100px] sm:w-[120px]"
            src={NoInternetIcon}
            alt="no internet"
            loading="lazy"
          />
          <span className="sm:text-lg">{error}</span>
          <Link
            to="/"
            className="explore-btn text-[var(--text-primary)] text-nowrap bg-[var(--bg-secondary)] mt-5 sm:text-lg"
          >
            Refresh Page
          </Link>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="relative">
            <h1 className="text-[10rem] font-semibold">4O4</h1>
            <span className="absolute top-29 left-1/2 -translate-x-1/2 px-7 text-nowrap font-semibold bg-[var(--bg-primary)] text-base">
              {error}
            </span>
          </div>
          <Button
            to="/"
            className="text-[var(--text-primary)] bg-[var(--bg-secondary)] mt-5 sm:text-lg"
          >
            Refresh Page
          </Button>
        </div>
      )}
    </div>
  );
}

export default Error;
