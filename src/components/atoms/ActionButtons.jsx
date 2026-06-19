import React, { useCallback, useMemo } from "react";
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
  const dispatch = useDispatch();
  const { handleLike, handleDownload } = usePhotoHandler(photos);

  const isLiked = useSelector((state) =>
    state.photos.some((item) => item.id === photo.id),
  );

  const onLike = useCallback(() => {
    handleLike(photo.id);
  }, [handleLike, photo.id]);

  const onDownload = useCallback(() => {
    handleDownload(photo.id);
  }, [handleDownload, photo.id]);

  const onClose = useCallback(() => {
    dispatch(setPreviewImg(null));
  }, [dispatch]);

  const buttons = useMemo(
    () =>
      [
        showLike && {
          id: "like",
          icon: isLiked ? FaHeart : TbHeartPlus,
          handle: onLike,
        },
        showDownload && {
          id: "download",
          icon: LuDownload,
          handle: onDownload,
        },
        showClose && {
          id: "close",
          icon: SlClose,
          handle: onClose,
        },
      ].filter(Boolean),
    [showLike, showDownload, showClose, isLiked, onLike, onDownload, onClose],
  );

  return (
    <div className={`flex gap-2 ${className}`}>
      {buttons.map(({ id, icon, handle }) => {
        const Icon = icon;
        return (
          <button
            key={id}
            onClick={handle}
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
