import "./Meno.css";
import MenoItem from "./MenoItem";
import Logo from "../Logo/Logo";
import SearchBox from "./SearchBox";

export default function Meno() {
  return (
    <header>
      <nav className="navbar">
        <Logo />
        <ul className="nav-links">
          <MenoItem />
        </ul>
        <div className="nav-actions">
          <SearchBox />
        </div>
      </nav>
    </header>
  );
}
