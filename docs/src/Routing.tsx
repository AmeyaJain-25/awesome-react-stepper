import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />\
        <Route path="/demo" element={<Home />} />\
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
