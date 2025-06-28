import React from "react";
import { Link } from "react-router-dom";
import { ProfileIcon } from "../assets/assets";
import { ActionButtons } from "../index";

function PreviewImg({ photo, photos }) {
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
          <img
            className="bg-[#eee] h-full"
            src={photo.src.original}
            alt={photo.alt}
            loading="lazy"
          />
          <div className="absolute flex gap-2 items-center -bottom-11 left-2 text-white">
            <span className="font-semibold [text-shadow:0_0_10px_rgba(0,0,0,1)]">
              Photographer:{" "}
            </span>
            <Link
              className="credit_Photographer px-2 py-1 flex items-center gap-1 rounded-lg [text-shadow:0_0_10px_rgba(0,0,0,1)] transition duration-150 ease-in hover:bg-[var(--bgExplore)]/60"
              to={photo.photographer_url}
              target="_blank"
            >
              <img
                className="w-[25px]"
                src={ProfileIcon}
                alt="go to profile"
                loading="lazy"
              />
              <span className="text-nowrap">{photo.photographer}</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default React.memo(PreviewImg);
