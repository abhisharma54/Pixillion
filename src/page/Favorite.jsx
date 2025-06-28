import {
  DarkLikeIcon,
  FavoriteStrokeIcon,
  LikeIcon,
  RightArrowIcon,
} from "../assets/assets";
import { Container, PhotoCard, PreviewImg } from "../index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Favorite() {
  const photos = useSelector((state) => state.photos);
  const previewImg = useSelector((state) => state.preview);

  return (
    <div className="w-full h-full flex justify-center">
      <Container className="py-10">
        {previewImg && <PreviewImg photo={previewImg} photos={photos} />}

        <div className="flex justify-between items-center gap-2 px-4">
          <div>
            <div className="flex items-center gap-1">
              <img
                className="w-[23px] mb-1 sm:w-[30px]"
                src={FavoriteStrokeIcon}
                alt="favorite icon"
                loading="lazy"
              />
              <h1 className="text-2xl font_bebas_neue font-semibold sm:text-3xl">
                Favorite
              </h1>
            </div>
            <p className="ml-7 -mt-1 text-sm font-semibold text-[var(--text-secondary)] sm:text-lg sm:ml-8.5 sm:-mt-2">
              Here you can find all your liked photos.
            </p>
          </div>
          <div className="px-3 py-2 flex items-center shrink-0 text-nowrap gap-1 text-lg font-medium text-[var(--text-dark)] bg-[var(--bg-welcome)]/80 rounded-xl sm:text-xl max-[425px]:gap-2">
            <img
              className="w-[20px] -mb-1 sm:w-[22px]"
              src={LikeIcon}
              alt="like icon"
              loading="lazy"
            />
            <span className="block max-[425px]:hidden">Photos - </span>
            <span className="text-[var(--text-secondary)]">
              {photos.length}
            </span>
          </div>
        </div>
        {photos.length ? (
          <div className="columns-2 md:columns-3 max-[375px]:columns-1 p-4">
            {photos.map((item, i) => (
              <PhotoCard key={item.id} index={i} photo={item} photos={photos} />
            ))}
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <div className="flex flex-col items-center gap-4">
              <img
                className="w-[100px] -mb-5"
                src={DarkLikeIcon}
                alt="no like"
                loading="lazy"
              />
              <p className="text-lg font-normal">
                You havn't liked any photos yet.
              </p>
              <Link
                to="/"
                className="flex justify-center explore-btn text-lg sm:text-xl"
              >
                <span>Explore</span>
                <img
                  className="w-[30px]"
                  src={RightArrowIcon}
                  alt="explore photos"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Favorite;
