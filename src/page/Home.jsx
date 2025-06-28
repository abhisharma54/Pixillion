import { useSelector } from "react-redux";
import { Welcome, Hero } from "../index";

function Home() {
  const explore = useSelector((state) => state.explore);

  return (
    <div className="w-full h-full">{explore ? <Hero /> : <Welcome />}</div>
  );
}

export default Home;
