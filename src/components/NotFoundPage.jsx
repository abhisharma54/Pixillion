import { Button } from "../index";

function NotFoundPage() {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <div className="flex flex-col items-center">
        <div className="relative">
          <h1 className="font_comfortaa font-light text-[7rem] sm:text-[10rem]">
            OOPS!
          </h1>
          <p className="absolute bottom-10 left-1/2 -translate-x-1/2 text-nowrap px-8 bg-[var(--bg-primary)] sm:text-xl sm:bottom-15 sm:px-16">
            4O4 - PAGE NOT FOUND
          </p>
        </div>
        <Button to="/">Go To Homepage</Button>
      </div>
    </div>
  );
}

export default NotFoundPage;
