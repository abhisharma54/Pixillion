import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ActionButtons } from "../index";
import { IoPersonCircleOutline } from "react-icons/io5";

function PreviewImg({ photo, photos }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="fixed inset-0 flex flex-col justify-center items-center backdrop-blur-sm bg-black/90 z-50 py-10 overflow-hidden">
      <div className="w-[90vw] max-h-[80vh] h-auto flex justify-center lg:w-[900px] shadow-xl">
        <div className="relative">
          <div className="absolute -top-12 right-0 flex gap-2">
            <ActionButtons
              photo={photo}
              photos={photos}
              showLike={true}
              showDownload={true}
              showClose={true}
            />
          </div>
          {/* Blurred Placeholder */}
          <img
            src={photo.src.tiny}
            alt={photo.alt}
            className={`absolute h-full blur-sm object-cover transition-opacity duration-500 ease-standard ${
              loaded ? "opacity-0" : "opacity-100"
            }`}
          />

          {/* Actual Image */}
          <img
            src={photo.src.large2x}
            alt={photo.alt}
            loading="lazy"
            onLoad={() => setLoaded(true)}
            className={`h-full transition-all duration-500 ease-standard ${
              loaded ? "opacity-100 blur-0" : "opacity-0 blur-sm"
            }`}
          />
          <div className="absolute top-3 left-3 flex items-center text-default bg-ink/30 backdrop-blur-sm border-b border-default/10 rounded-full p-2 active:scale-95 hover:bg-ink/40">
            <Link
              className="flex items-center gap-1"
              to={photo.photographer_url}
              target="_blank"
            >
              <IoPersonCircleOutline className="text-2xl" />
              <span className="text-nowrap">{photo.photographer}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PreviewImg);
