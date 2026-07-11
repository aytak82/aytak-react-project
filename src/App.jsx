import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import Meno from "./Components/Header/Meno";
import Slider from "./Components/Slider/Slider";

export default function App() {
  return (
    <>
      <header>
        <Meno />
      </header>
      <main>
        <Slider />
      </main>
    </>
  );
}
