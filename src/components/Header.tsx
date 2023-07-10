import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { SocialMediaIcons } from "./SocialMediaIcons";
import { DropDown } from "./DropDown";

export const Header = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 820);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 820);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="header">
      <h1>
        <span className="first-symbol"></span>SeaYa Restaurant
        <span className="second-symbol"></span>
      </h1>
      {isDesktop ? (
        <>
          <ul>
            <li className="tab">
              <NavLink to="/" onClick={scrollToTop}>
                Home
              </NavLink>
            </li>
            <li className="tab">
              <NavLink to="/menu" onClick={scrollToTop}>
                Menu
              </NavLink>
            </li>
            <li className="tab">
              <NavLink to="/contact" onClick={scrollToTop}>
                Contact
              </NavLink>
            </li>
          </ul>
          <SocialMediaIcons />
        </>
      ) : (
        <DropDown />
      )}
      <button>Reservation</button>
    </div>
  );
};
