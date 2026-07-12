import "./App.css";
import Menu from "./Components/Header/Menu";
import Slider from "./Components/Slider/Slider";

export default function App() {
  return (
    <>
      <header>
        <Menu />
      </header>
      <main>
        <Slider />
      </main>
    </>
  );
}
