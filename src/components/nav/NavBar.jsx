import { Link } from "react-router-dom";
import "./NavBar.css";

export const NavBar = () => {
  return (
    <ul className="navbar">
      <li className="navbar-item">
        <Link to="/user-home">Home</Link>
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
      <li className="navbar-item">
        <Link to="/welcome">Logout</Link>
      </li>
    </ul>
  );
};
