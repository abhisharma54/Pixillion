import React from "react";
import { usePhotoHandler } from "../hook/usePhotoHandler";
import {
  DefaultLikeIcon,
  LikeIcon,
  DownloadIcon,
  CloseIcon,
} from "../assets/assets";
import { useSelector, useDispatch } from "react-redux";
import { setPreviewImg } from "../store/favPhotoSlice";

function ActionButtons({
  photo,
  photos,
  showLike = false,
  showDownload = false,
  showClose = false,
  className,
}) {
  const { handleLike, handleDownload } = usePhotoHandler(photos);
  const favPhotos = useSelector((state) => state.photos);
  let isLiked = favPhotos.find((prev) => prev.id === photo.id);
  const dispatch = useDispatch();

  const buttons = [
    showLike && {
      imgSrc: isLiked?.liked ? LikeIcon : DefaultLikeIcon,
      imgAlt: "like icon to add/remove image from favorite",
      bgColor: `bgExplore`,
      handle: () => handleLike(photo.id),
    },
    showDownload && {
      imgSrc: DownloadIcon,
      imgAlt: "download icon to download the image",
      bgColor: `bgExplore`,
      handle: () => handleDownload(photo.id),
    },
    showClose && {
      imgSrc: CloseIcon,
      imgAlt: "close icon to close the image preview",
      bgColor: `closeBtnBg`,
      handle: () => dispatch(setPreviewImg(null)),
    },
  ].filter(Boolean);

  return (
    <div className={`flex gap-2 ${className}`}>
      {buttons.map((item, i) => (
        <button
          key={i}
          onClick={item.handle}
          className={`w-[35px] p-1 rounded-lg transition duration-150 ease-in cursor-pointer hover:bg-[var(--${item.bgColor})]/60`}
        >
          <img src={item.imgSrc} alt={item.imgAlt} loading="lazy" />
        </button>
      ))}
    </div>
  );
}

export default React.memo(ActionButtons);
