import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./Navigation";
import RandomActivity from "./RandomActivity";
import Favourites from "./Favourites";
import About from "./About";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<RandomActivity />} />
          <Route path="/fav" element={<Favourites />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
