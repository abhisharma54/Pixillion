import React from "react";
import { usePhotoHandler } from "../../hook/usePhotoHandler";
import { useSelector, useDispatch } from "react-redux";
import { setPreviewImg } from "../../store/favPhotoSlice";
import { TbHeartPlus } from "react-icons/tb";
import { FaHeart } from "react-icons/fa";
import { SlClose } from "react-icons/sl";
import { LuDownload } from "react-icons/lu";

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
      id: "like",
      icon: isLiked?.liked ? FaHeart : TbHeartPlus,
      handle: () => handleLike(photo.id),
    },
    showDownload && {
      id: "download",
      icon: LuDownload,
      handle: () => handleDownload(photo.id),
    },
    showClose && {
      id: "close",
      icon: SlClose,
      handle: () => dispatch(setPreviewImg(null)),
    },
  ].filter(Boolean);

  return (
    <div className={`flex gap-2 ${className}`}>
      {buttons.map((item) => {
        const Icon = item.icon;

        return (
          <button
            key={item.id}
            onClick={item.handle}
            className={`w-10 h-10 flex justify-center items-center bg-ink/30 backdrop-blur-xl border-b border-default/10 rounded-full p-1 transition duration-150 ease-standard cursor-pointer active:scale-90 hover:bg-ink/40`}
          >
            <Icon className="text-2xl text-default" />
          </button>
        );
      })}
    </div>
  );
}

export default React.memo(ActionButtons);
