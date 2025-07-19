import { useEffect, useState } from "react";
import { Container, Credit, Error, Gallery } from "../index";
import { ImageIcon, ScrollUpArrowIcon, SearchIcon } from "../assets/assets";
import axios from "axios";

let per_page = 80;
function Hero() {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const handleFetch = async () => {
    let url = `https://api.pexels.com/v1/search?query=${
      input || "Mountain"
    }&per_page=${per_page}&page=${page}`;
    setError("");
    setLoading(true);
    try {
      let res = await axios.get(url, {
        headers: {
          Authorization: import.meta.env.VITE_ACCESS_KEY,
        },
      });
      let result = res.data;
      setData((prev) => [...prev, ...result.photos]);

      if (
        result.photos.length < per_page ||
        result.page * per_page >= result.total_results
      ) {
        setHasMore(false);
      }
    } catch (err) {
      if (err.message.includes("NetworkError")) {
        setError("No internet connection");
      } else {
        setError("Failed to load images");
      }
    }
  };

  const handleSearch = () => {
    if (!input.trim()) return;

    setData([]);
    setPage(1);
    setHasMore(true);
    setError("");

    setTimeout(() => {
      handleFetch();
    }, 0);
  };

  useEffect(() => {
    if (hasMore) {
      handleFetch();
    }
  }, [page]);

  return (
    <div className="w-full h-full flex justify-center">
      <Container>
        <div className="relative h-[300px] flex justify-center items-center bg-[image:var(--bg-hero-input)]">
          <div className="w-[80vw] flex bg-white rounded-full py-2 px-5 shadow-2xl sm:w-[500px] md:w-[600px]">
            <img
              className="w-[20px]"
              src={ImageIcon}
              alt="photo icon"
              loading="lazy"
            />
            <input
              type="text"
              placeholder="Search photos"
              className="w-full px-3 focus:outline-none"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
            />
            <button onClick={() => handleSearch()}>
              <img
                className="w-[30px] transition duration-150 ease-in hover:scale-110"
                src={SearchIcon}
                alt="search for free photos"
                loading="lazy"
              />
            </button>
          </div>
          <div className="absolute flex justify-center items-center mt-24">
            <Credit />
          </div>
        </div>

        {error ? (
          <Error error={error} />
        ) : (
          <Gallery
            data={data}
            loading={loading}
            setLoading={setLoading}
            page={page}
            setPage={setPage}
            perPage={per_page}
            handleFetch={handleFetch}
          />
        )}

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 w-[50px] h-[50px] p-3.5 flex justify-center items-center bg-white rounded-full shadow-xl cursor-pointer z-40"
        >
          <img
            src={ScrollUpArrowIcon}
            alt="Scroll back to top of the page"
            loading="lazy"
          />
        </button>
      </Container>
    </div>
  );
}

export default Hero;
