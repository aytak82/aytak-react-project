import "./Menu.css";
import { Link } from "react-router-dom";

export default function SubMenu({ submenu }) {
  return (
    <ul className="submenu">
      {submenu.map((item) => (
        <li key={item.id}>
          <Link to={`/services/${item.slug}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
