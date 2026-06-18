import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, About, Favorite, Layout, NotFound } from "../../index";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="favorite" element={<Favorite />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
