import React, { useState } from "react";
import { ActionButtons } from "../index";
import { usePhotoHandler } from "../hook/usePhotoHandler";
import { Link } from "react-router-dom";
import { IoPersonCircleOutline } from "react-icons/io5";

function PhotoCard({ photo, index, photos }) {
  const [onHoverIndex, setOnHoverIndex] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const { handlePreview } = usePhotoHandler(photos);

  return (
    <div
      onMouseEnter={() => setOnHoverIndex(index)}
      onMouseLeave={() => setOnHoverIndex(null)}
      className="relative mb-4 cursor-pointer rounded-2xl overflow-hidden"
    >
      <div
        className={`absolute top-3 right-3 flex gap-1 transition-translate duration-150 ease-standard ${
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
        onClick={() => handlePreview(photo.id)}
        style={{
          backgroundColor: photo.avg_color,
        }}
      >
        <div className="relative overflow-hidden rounded-lg">
          {/* Blurred Placeholder */}
          <img
            src={photo.src.tiny}
            alt={photo.alt}
            className={`absolute inset-0 w-full h-full object-cover blur-xl transition-opacity duration-500 ease-standard ${
              loaded ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Actual Image */}
          <img
            src={photo.src.medium}
            alt={photo.alt}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={`w-full transition-all duration-500 ease-standard ${
              loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
            }`}
          />
        </div>
      </div>
      <div
        className={`absolute bottom-3 left-3 bg-ink/30 backdrop-blur-sm border-b border-default/10 rounded-full p-1 flex items-center text-default transition-translate duration-150 ease-standard active:scale-95 hover:bg-ink/40 ${
          onHoverIndex === index ? "translate-y-0" : "translate-y-20"
        } z-20`}
      >
        <Link
          className="px-2 py-1 flex items-center gap-1 rounded-lg [text-shadow:0_0_10px_rgba(0,0,0,1)]"
          to={photo.photographer_url}
          target="_blank"
        >
          <IoPersonCircleOutline className="text-2xl" />
          <span className="text-nowrap">{photo.photographer}</span>
        </Link>
      </div>
    </div>
  );
}

export default React.memo(PhotoCard);
