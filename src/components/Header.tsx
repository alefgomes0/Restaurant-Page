import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <h2>
        <span className="first-symbol"></span>SeaYa Restaurant
        <span className="second-symbol"></span>
      </h2>
      <ul>
        <Link to="/"><li>HOME</li></Link>
        <Link to="/menu"><li>MENU</li></Link>
        <Link to="/contact"><li>CONTACT</li></Link>
      </ul>
      <button>Reservation</button>
    </div>
  );
};
