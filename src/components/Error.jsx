import { Link } from "react-router-dom";
import { IoMdRefresh } from "react-icons/io";
import { MdSignalWifiStatusbarConnectedNoInternet } from "react-icons/md";
import Button from "./atoms/Button";
import React from "react";

function Error({ error }) {
  const handleRefresh = () => {
    window.location.reload();
  };

  return (
    <div className="w-full h-full max-h-[60vh] flex justify-center items-center py-10">
      {error === "No internet connection" ? (
        <div className="flex flex-col items-center">
          <MdSignalWifiStatusbarConnectedNoInternet className="text-9xl" />
          <span className="font-semibold sm:text-lg">
            {error || "No Internet"}
          </span>
          <Button to="#" onClick={handleRefresh}>
            <span className="text-nowrap">Refresh Page</span>
            <IoMdRefresh className="text-2xl" />
          </Button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <div className="relative">
            <h1 className="text-[8rem] sm:text-[10rem] font-semibold">503</h1>
            <span className="absolute top-24 left-1/2 sm:top-29 -translate-x-1/2 px-7 text-nowrap font-semibold bg-default text-sm sm:text-base">
              {error || "Service temporarily unavailable"}
            </span>
          </div>
          <Button to="#" onClick={handleRefresh}>
            <span className="text-nowrap">Refresh Page</span>
            <IoMdRefresh className="text-2xl" />
          </Button>
        </div>
      )}
    </div>
  );
}

export default React.memo(Error);
