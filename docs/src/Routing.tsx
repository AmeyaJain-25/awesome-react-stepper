import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/";
import Demo from "./components/Demo";

const Routing = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />\
        <Route path="/demo" element={<Demo />} />\
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
