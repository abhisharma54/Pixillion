import { useEffect } from "react";
import { Button, Container, PhotoCard, PreviewImg } from "../index";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiStar } from "react-icons/ci";
import { IoHeartDislikeOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri";
import { FaHeart } from "react-icons/fa";

function Favorite() {
  const photos = useSelector((state) => state.photos);
  const previewImg = useSelector((state) => state.preview);

  useEffect(() => {
    document.body.style.overflow = previewImg ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [previewImg]);

  return (
    <div className="w-full h-full flex justify-center">
      <Container className="py-10">
        {previewImg && <PreviewImg photo={previewImg} photos={photos} />}

        <div className="flex justify-between items-center gap-2 px-4 pb-5">
          <div className="flex flex-col">
            <div className="flex items-center gap-1">
              <CiStar className="text-3xl sm:text-4xl" />
              <h1 className="text-2xl font-semibold sm:text-3xl">Favorite</h1>
            </div>
            <p className="ml-8.5 -mt-1 text-sm font-semibold text-ink/70 sm:text-lg sm:ml-10 sm:-mt-2">
              Here you can find all your liked photos.
            </p>
          </div>
          <div className="px-3 py-2 flex items-center shrink-0 text-nowrap gap-1 text-lg font-medium text-ink bg-surface shadow-xl rounded-full border-2 border-t-white border-r-white border-l-muted/60 border-b-muted backdrop-blur-sm sm:text-xl max-[425px]:gap-2">
            <FaHeart className="text-xl text-red-500" />
            <span className="block max-[425px]:hidden">Photos - </span>
            <span className="text-ink/80">{photos.length}</span>
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
              <IoHeartDislikeOutline className="text-8xl sm:text-9xl" />
              <p className="text-lg font-normal">
                You havn't liked any photos yet.
              </p>
              <Button to="/">
                <span>Explore</span>
                <RiArrowRightSLine className="text-2xl" />
              </Button>
            </div>
          </div>
        )}
      </Container>
    </div>
  );
}

export default Favorite;
