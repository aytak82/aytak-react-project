import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Menu from "./Components/Header/Menu";
import Home from "./Pages/Home";
import ServiceDetails from "./Pages/ServiceDetals";

export default function App() {
  return (
    <>
      <Menu />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services/:slug" element={<ServiceDetails />} />
      </Routes>
    </>
  );
}
