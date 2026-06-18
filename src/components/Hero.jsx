import { useEffect, useState } from "react";
import { Container, Credit, Error, Gallery } from "../index";
import { BsImageFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { CiCircleChevUp } from "react-icons/ci";
import { FaAngleUp } from "react-icons/fa";
import { fetchPhotos } from "../api/pexels";

let per_page = 80;
function Hero() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("Mountain"); // term actually being searched
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [searchId, setSearchId] = useState(0); // bumps on every search, forces refetch

  const handleFetch = async (fetchQuery, fetchPage) => {
    setError("");
    setLoading(true);
    setInput("");

    try {
      const result = await fetchPhotos(fetchQuery, fetchPage, per_page);

      setData((prev) => [...prev, ...result.photos]);

      if (
        result.photos.length < per_page ||
        result.page * per_page >= result.total_results
      ) {
        setHasMore(false);
      }
    } catch (err) {
      if (err.code === "ERR_NETWORK" || err.message.includes("Network")) {
        setError("No internet connection");
      } else {
        setError("Failed to load images");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!input.trim()) return;

    setQuery(input);
    setData([]);
    setPage(1);
    setHasMore(true);
    setError("");
    setSearchId((prev) => prev + 1);
  };

  useEffect(() => {
    if (hasMore) {
      handleFetch(query, page);
    }
  }, [page, searchId]);

  return (
    <div className="w-full h-full flex justify-center">
      <Container>
        <div className="relative h-75 flex justify-center items-center bg-hero">
          <div className="w-[80vw] flex bg-default rounded-full py-2 px-5 shadow-xl sm:w-125 md:w-150 border-2 border-t-white border-r-white border-l-muted/60 border-b-muted backdrop-blur-sm">
            <BsImageFill className="text-2xl" />
            <input
              type="text"
              placeholder="Search photos"
              className="w-full px-3 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
            />
            <button onClick={() => handleSearch()}>
              <IoSearch className="text-2xl transition duration-150 ease-standard hover:scale-110" />
            </button>
          </div>
          <div className="absolute flex justify-center items-center mt-24">
            <Credit />
          </div>
        </div>

        {error ? (
          <Error error={error} />
        ) : (
          <Gallery data={data} loading={loading} setPage={setPage} />
        )}

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 xl:right-15 w-12 h-12 flex justify-center items-center bg-default/30 rounded-full shadow-xl cursor-pointer z-40 transition-transform duration-150 ease-standard hover:scale-110 backdrop-blur-sm"
        >
          <FaAngleUp className="text-4xl" />
        </button>
      </Container>
    </div>
  );
}

export default Hero;
