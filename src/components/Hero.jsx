import { useEffect, useState } from "react";
import { Button, Container, Credit, Error, Gallery } from "../index";
import { BsImageFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaAngleUp } from "react-icons/fa";
import { fetchPhotos } from "../api/pexels";

const PER_PAGE = 80;

function Hero() {
  const [input, setInput] = useState("");
  const [query, setQuery] = useState("Mountain");
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const suggestionKeywords = ["Sky", "Cat", "Nature", "Flower", "Sunset"];

  const performSearch = (keyword) => {
    setQuery(keyword);
    setInput("");
    setData([]);
    setPage(1);
    setHasMore(true);
    setError("");
  };

  const handleSearch = () => {
    const trimmed = input.trim();

    if (!trimmed) return;

    performSearch(trimmed);
  };

  useEffect(() => {
    if (!hasMore) return;

    const loadPhotos = async () => {
      setError("");
      setLoading(true);

      try {
        const result = await fetchPhotos(query, page, PER_PAGE);

        setData((prev) => [...prev, ...result.photos]);

        if (
          result.photos.length < PER_PAGE ||
          result.page * PER_PAGE >= result.total_results
        ) {
          setHasMore(false);
        }
      } catch (err) {
        if (err.code === "ERR_NETWORK" || err.message?.includes("Network")) {
          setError("No internet connection");
        } else {
          setError("Failed to load images");
        }
      } finally {
        setLoading(false);
      }
    };

    loadPhotos();
  }, [hasMore, query, page]);

  return (
    <div className="w-full h-full flex justify-center">
      <Container>
        <div className="relative h-75 flex flex-col gap-4 justify-center items-center bg-hero">
          <div className="w-[80vw] flex bg-default rounded-full py-2 px-5 shadow-xl sm:w-125 md:w-150 border-2 border-t-white border-r-white border-l-muted/60 border-b-muted backdrop-blur-sm">
            <BsImageFill className="text-2xl" />
            <input
              type="text"
              placeholder="Search photos"
              className="w-full px-3 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleSearch();
                }
              }}
            />
            <button onClick={() => handleSearch()}>
              <IoSearch className="text-2xl transition duration-150 ease-standard hover:scale-110" />
            </button>
          </div>
          {/* Suggestions keywords */}
          <div className="flex h-20 items-center w-[80vw] sm:w-125 md:w-150 gap-2.5 overflow-auto">
            {suggestionKeywords.map((item) => (
              <button
                onClick={() => performSearch(item)}
                className="px-3 py-2 text-base font-semibold rounded-full min-w-max w-25 text-ink/90 shadow-md border-2 border-t-default border-r-default border-l-muted/60 border-b-muted backdrop-blur-sm transition-transform duration-150 ease-standard hover:bg-default active:scale-95"
                key={item}
              >
                {item}
              </button>
            ))}
          </div>
          <Credit />
        </div>

        {error ? (
          <Error error={error} />
        ) : (
          <Gallery data={data} loading={loading} setPage={setPage} />
        )}

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 xl:right-15 w-12 h-12 flex justify-center items-center bg-default/30 rounded-full shadow-xl cursor-pointer z-30 transition-transform duration-150 ease-standard hover:scale-110 backdrop-blur-sm"
        >
          <FaAngleUp className="text-4xl" />
        </button>
      </Container>
    </div>
  );
}

export default Hero;
