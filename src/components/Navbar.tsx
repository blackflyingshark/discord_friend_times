import burger from "../burger-menu-svgrepo-com.svg";
import home from "../home-svgrepo-com.svg";
import plus from "../plus-large-svgrepo-com.svg";
import settings from "../settings-svgrepo-com.svg";
import { Outlet, Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul className="flex flex-col flex-initial bg-primary-dark p-2 gap-2">
      <li>
        <Link to="/">
          <img className="size-10" src={home} alt="home" />
        </Link>
      </li>
      <li>
        <Link to="/create">
          <img className="size-10" src={plus} alt="plus" />
        </Link>
      </li>
      <li>
        <Link to="/settings">
          <img className="size-10" src={settings} alt="settings" />
        </Link>
      </li>
    </ul>
  );
}
