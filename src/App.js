import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import RandomActivity from "./pages/random_activity/RandomActivity";
import Favourites from "./pages/favourites/Favourites";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";

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
        <Footer />
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
