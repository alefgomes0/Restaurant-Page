import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <h2>
        <span className="first-symbol"></span>SeaYa Restaurant
        <span className="second-symbol"></span>
      </h2>
      <ul>
        <li>
          <NavLink to="/">HOME</NavLink>
        </li>
        <li>
          <NavLink to="/menu">MENU</NavLink>
        </li>
        <li>
          <NavLink to="/contact">CONTACT</NavLink>
        </li>
      </ul>
      <button>Reservation</button>
    </div>
  );
};
