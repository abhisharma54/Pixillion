import React, { useEffect, useRef, useState } from "react";
import { Container, Loader, PhotoCard, PreviewImg } from "../index";
import { useSelector } from "react-redux";

let showChunk = 12;
function Gallery({ data, loading, setPage, setLoading }) {
  const [photosChunks, setPhotosChunks] = useState([]);
  const [limit, setLimit] = useState(Math.ceil(data.length / showChunk));
  const currPageRef = useRef(0);

  const previewImg = useSelector((state) => state.preview);

  const handleScroll = () => {
    let innerHeight = window.innerHeight;
    let scrollTop = window.document.scrollingElement.scrollTop;
    let scrollHeight = window.document.scrollingElement.scrollHeight;

    if (innerHeight + scrollTop + 1 > scrollHeight) {
      setLoading(true);
      currPageRef.current += 1;
    }
  };

  useEffect(() => {
    if (!data || data.length === 0) {
      setPhotosChunks([]);
      return;
    }

    if (currPageRef.current === 0) {
      setPhotosChunks([]);
    }

    const start = currPageRef.current * showChunk;
    const end = start + showChunk;
    const newData = data.slice(start, end);

    if (newData.length > 0) {
      setPhotosChunks((prev) => [...prev, newData]);
    } else if (photosChunks.length >= limit) {
      setLimit((prev) => prev + Math.ceil(data.length / showChunk));
      setPage((prev) => prev + 1);
    }

    setTimeout(() => setLoading(false), 2000);
  }, [data, currPageRef.current]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full h-full flex justify-center bg-white">
      <div className="relative flex flex-col items-center">
        {previewImg && <PreviewImg photo={previewImg} photos={photosChunks} />}
        <div className="columns-2 md:columns-3 max-[375px]:columns-1 p-4">
          {photosChunks.map((chunk, index) => (
            <React.Fragment key={index}>
              {chunk.map((item, i) => (
                <PhotoCard
                  key={item.id}
                  index={i}
                  photo={item}
                  photos={photosChunks}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
        {loading && <Loader />}
      </div>
    </div>
  );
}

export default Gallery;
