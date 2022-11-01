import { render } from "react-dom";
import { StrictMode } from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import Navigation from "./components/navigation/Navigation";
import RandomActivity from "./pages/random_activity/RandomActivity";
import Favourites from "./pages/favourites/Favourites";
import About from "./pages/about/About";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <StrictMode>
      <HashRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<RandomActivity />} />
          <Route path="/reload" element={<Navigate to="/" replace />} />
          <Route path="/fav" element={<Favourites />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </HashRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
