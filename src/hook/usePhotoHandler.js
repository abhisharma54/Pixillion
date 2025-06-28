import { useDispatch, useSelector } from "react-redux";
import { setPhotos, setPreviewImg } from "../store/favPhotoSlice";

export const usePhotoHandler = (photos) => {
  const favPhotos = useSelector((state) => state.photos);
  const dispatch = useDispatch();

  const handleLike = (itemId) => {
    let photoExist = favPhotos.findIndex((prev) => prev.id === itemId);

    if (photoExist !== -1) {
      let photos = favPhotos.map((prev) =>
        prev.id === itemId ? { ...prev, liked: false } : prev
      );
      let updateFavPhoto = photos.filter((prev) => prev.id !== itemId);
      dispatch(setPhotos(updateFavPhoto));
    } else {
      let photo = photos.flat().find((prev) => prev.id === itemId);
      dispatch(setPhotos([...favPhotos, { ...photo, liked: true }]));
    }
  };

  const handleDownload = async (itemId) => {
    const photo = photos.flat().find((prev) => prev.id === itemId);

    if (!photo || !photo.src?.original) return;

    try {
      const res = await fetch(photo.src.original, { mode: "cors" }); // sometimes needed
      const blob = await res.blob();
      const blobUrl = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = blobUrl;
      link.download = `${photo.photographer}-${photo.id}.jpeg`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      URL.revokeObjectURL(blobUrl);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };

  const handlePreview = (itemId) => {
    const photo = photos.flat().find((prev) => prev.id === itemId);
    dispatch(setPreviewImg(photo));
  };

  return {
    handleLike,
    handleDownload,
    handlePreview,
  };
};
