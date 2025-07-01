import React, { useState } from "react";
import { ActionButtons } from "../index";
import { usePhotoHandler } from "../hook/usePhotoHandler";

function PhotoCard({ photo, index, photos }) {
  const [onHoverIndex, setOnHoverIndex] = useState(null);
  const { handlePreview } = usePhotoHandler(photos);

  return (
    <div
      onMouseEnter={() => setOnHoverIndex(index)}
      onMouseLeave={() => setOnHoverIndex(null)}
      className="relative mb-4 cursor-pointer overflow-hidden"
    >
      <div
        className={`absolute top-3 right-3 flex gap-1 transition-translate duration-150 ease-in ${
          onHoverIndex === index ? "translate-y-0" : "-translate-y-20"
        } z-20`}
      >
        <ActionButtons
          photo={photo}
          photos={photos}
          showLike={true}
          showDownload={true}
        />
      </div>

      <div
        className={`bg-[${photo.avg_color}]`}
        onClick={() => handlePreview(photo.id)}
      >
        <img
          className="w-full h-full bg-[#eee]"
          src={photo.src.original}
          alt={photo.alt}
          loading="lazy"
        />
      </div>
    </div>
  );
}

export default React.memo(PhotoCard);
