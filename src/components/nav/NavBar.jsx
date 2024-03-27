import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/creatures">All Creatures</Link>
        </li>
        <li className="navbar-item">
          <Link to="/user-creature">My Creatures</Link>
        </li>
        <li className="navbar-item">
          <Link to="/new-creature">New Creature</Link>
        </li>
        {localStorage.getItem("creature_user") ? (
          <li className="navbar-item navbar-logout">
            <Link
              className="navbar-link"
              to="/login"
              onClick={() => {
                localStorage.removeItem("creature_user");
                Navigate("/", { replace: true });
              }}
            >
              Logout
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
};
