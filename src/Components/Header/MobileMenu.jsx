import "./MobileMenu.css";
import menuItems from "./MenuData";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import SearchBox from "./SearchBox";
export default function MobileMenu({ showMenu, setShowMenu }) {
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <>
      <div
        className={showMenu ? "overlay active" : "overlay"}
        onClick={() => setShowMenu(false)}
      ></div>

      <div className={showMenu ? "mobile-menu active" : "mobile-menu"}>
        <ul className="mobile-links">
          <div className="mobile-search">
            <SearchBox mobile />
          </div>
          {menuItems.map((item) => (
            <li key={item.id}>
              {item.submenu ? (
                <>
                  <button
                    className="mobile-btn"
                    onClick={() =>
                      setOpenMenu(openMenu === item.id ? null : item.id)
                    }
                  >
                    {item.title}

                    <FaChevronDown
                      className={
                        openMenu === item.id ? "arrow active" : "arrow"
                      }
                    />
                  </button>

                  <div
                    className={
                      openMenu === item.id
                        ? "mobile-submenu active"
                        : "mobile-submenu"
                    }
                  >
                    {item.submenu.map((sub) => (
                      <a href="#" key={sub.id}>
                        {sub.title}
                      </a>
                    ))}
                  </div>
                </>
              ) : (
                <a href="#">{item.title}</a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
