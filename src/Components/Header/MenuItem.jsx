import { Link } from "react-router-dom";
import SubMenu from "./Submenu";
import menuItems from "./MenuData";
export default function MenuItem() {
  return (
    <>
      {menuItems.map((item) => (
        <li className="menu-item" key={item.id}>
          {item.path.startsWith("#") ? (
            <a href={item.path}>{item.title}</a>
          ) : (
            <Link to={item.path}>{item.title}</Link>
          )}

          {item.submenu && <SubMenu submenu={item.submenu} />}
        </li>
      ))}
    </>
  );
}
