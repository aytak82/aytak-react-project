import "./Menu.css";
import MenuItem from "./MenuItem";
import Logo from "../../Logo/Logo";
import SearchBox from "./SearchBox";
import { useState } from "react";
import { MenuIcon, Times } from "../Icon/Icon";
import MobileMenu from "./MobileMenu";
export default function Menu() {
  let [showMenu, setShowMenu] = useState(false);

  return (
    <header className="navbar">
      <Logo />

      <nav>
        <ul className="nav-links">
          <MenuItem />
        </ul>
      </nav>

      <div className="nav-actions">
        <SearchBox />
      </div>

      <div className="menu-toggle" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <Times /> : <MenuIcon />}
      </div>

      <MobileMenu showMenu={showMenu} setShowMenu={setShowMenu} />
    </header>
  );
}
