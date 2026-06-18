import React, { useEffect, useMemo, useState } from "react";
import { Container, Loader, PhotoCard, PreviewImg } from "../index";
import { useSelector } from "react-redux";
import { useInView } from "react-intersection-observer";
import Masonry from "react-masonry-css";

const SHOW_CHUNK = 10;

function Gallery({ data, loading, setPage }) {
  const [chunks, setChunks] = useState([]);
  const [chunkPage, setChunkPage] = useState(0);
  const [chunkLoading, setChunkLoading] = useState(true);
  const previewImg = useSelector((state) => state.preview);

  const { ref, inView } = useInView({
    threshold: 0,
    rootMargin: "300px",
  });

  useMemo(() => {
    // fresh search
    if (!data || data.length === 0) {
      setChunks([]);
      setChunkPage(0);
      return;
    }

    const start = chunkPage * SHOW_CHUNK;
    const end = start + SHOW_CHUNK;
    const visiblePhotos = data.slice(start, end);

    if (visiblePhotos.length > 0) {
      setChunks((prev) => [...prev, ...visiblePhotos]);
      setChunkLoading(false);
    } else {
      setPage((prev) => prev + 1);
    }
  }, [data, chunkPage, setPage]);

  useEffect(() => {
    if (inView && !chunkLoading) {
      setChunkLoading(true);
      setChunkPage((prev) => prev + 1);
    }
  }, [inView, chunkLoading]);

  useEffect(() => {
    document.body.style.overflow = previewImg ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [previewImg]);

  // Masonry Layout breakpoints
  const breakpointColumnsObj = {
    default: 3,
    900: 2,
    650: 1,
  };

  return (
    <div className="w-full h-full flex flex-col items-center bg-default">
      <div className="relative flex flex-col items-center">
        {previewImg && <PreviewImg photo={previewImg} photos={chunks} />}
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid p-4"
          columnClassName="my-masonry-grid_column"
        >
          {chunks.map((chunk, index) => (
            <PhotoCard
              key={chunk.id}
              index={index}
              photo={chunk}
              photos={chunks}
            />
          ))}
        </Masonry>
        {(chunkLoading || loading) && <Loader />}
        <div ref={ref}></div>
      </div>
    </div>
  );
}
export default Gallery;
