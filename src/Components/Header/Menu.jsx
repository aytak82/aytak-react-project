import "./Menu.css";
import MenuItem from "./MenuItem";
import Logo from "../Logo/Logo";
import SearchBox from "./SearchBox";

export default function Meno() {
  return (
    <header>
      <nav className="navbar">
        <Logo />
        <ul className="nav-links">
          <MenuItem />
        </ul>
        <div className="nav-actions">
          <SearchBox />
        </div>
      </nav>
    </header>
  );
}
