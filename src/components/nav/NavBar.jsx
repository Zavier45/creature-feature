import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <div className="navbar">
      <span className="navbar-item">
        <Link to="/">Home</Link>
      </span>
      <span className="navbar-item">
        <Link to="/creatures">All Creatures</Link>
      </span>
      <span className="navbar-item">
        <Link to="/user-creature">My Creatures</Link>
      </span>
      <span className="navbar-item">
        <Link to="/new-creature">New Creature</Link>
      </span>
      <span className="navbar-item">
        <Link to="/user-profile">Profile</Link>
      </span>
      {localStorage.getItem("creature_user") ? (
        <span className="navbar-item navbar-logout">
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
        </span>
      ) : (
        ""
      )}
    </div>
  );
};
