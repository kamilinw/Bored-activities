import { render } from "react-dom";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HelloComponent from "./HelloComponent";

const App = () => {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HelloComponent />} />
        </Routes>
      </BrowserRouter>
    </StrictMode>
  );
};

render(<App />, document.getElementById("root"));
