import { LikeIcon } from "../assets/assets";
import { Container, Credit } from "../index";

function About() {
  return (
    <div className="w-full relative min-h-[90vh] flex justify-center">
      <Container className="p-5">
        <h1 className="font_bebas_neue  text-3xl sm:text-5xl sm:text-center">
          About This Website
        </h1>

        <div className="flex justify-center mb-4">
          <div className="max-w-[800px]">
            <p className="text-base font_caveat text-[var(--text-secondary)] text-center mt-5 sm:text-lg">
              Welcome to Pixillion.
            </p>
            <p className="text-xl mt-5 sm:text-2xl">
              <span className="highlight_primary">Pixillion</span> is a modern
              image gallery website. A{" "}
              <span className="highlight_secondary">personal project</span>{" "}
              built using
              <span className="highlight_secondary"> React.js</span> and powered
              by the <span className="highlight_secondary">Pexels API</span>.
            </p>
            <p className="text-base mt-5 sm:text-lg">
              Here, you can search and explore free, high-quality images. You
              can like your favorite photos, preview them in full size and
              download them all for free.
            </p>
            <p className="text-base mt-8 sm:text-lg">
              The project is designed with a strong focus on performance,
              responsiveness, and an intuitive user experience.
            </p>
            <p className="text-base mt-8 sm:text-lg">
              Whether you're browsing for design inspiration, wallpaper, or just
              to appreciate great photography,{" "}
              <span className="highlight_primary">Pixillion</span> makes it
              simple and enjoyable.
            </p>
          </div>
        </div>
        <div className="absolute bottom-4 left-[50%] -translate-x-[50%]">
          <Credit />
          <div className="text-nowrap text-sm font-semibold flex items-center gap-1 mt-2 sm:text-lg">
            <span>Created with</span>
            <img
              className="w-[22px]"
              src={LikeIcon}
              alt="like icon"
              loading="lazy"
            />
            <span>by</span>
            <span className="text-[var(--text-secondary)]">
              Abhishek Sharma.
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About;
