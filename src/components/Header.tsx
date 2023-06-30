import { NavLink } from "react-router-dom";
import { SocialMediaIcons } from "./SocialMediaIcons";


export const Header = () => {  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <div className="header">
      <h1>
        <span className="first-symbol"></span>SeaYa Restaurant
        <span className="second-symbol"></span>
      </h1>
      <ul>
        <li className="tab">
          <NavLink to="/" onClick={scrollToTop}>Home</NavLink>
        </li>
        <li className="tab">
          <NavLink to="/menu" onClick={scrollToTop}>Menu</NavLink>
        </li>
        <li className="tab">
          <NavLink to="/contact" onClick={scrollToTop}>Contact</NavLink>
        </li>
      </ul>
      <SocialMediaIcons />
      <button>Reservation</button>
    </div>
  );
};
