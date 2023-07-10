import { Link } from "react-router-dom";
import { useState } from "react";

export const DropDown = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="dropdown-container">
      <div className="menu-title" onClick={toggleVisibility}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 15 15"
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M15 2H0V1h15v1Zm0 4H0V5h15v1Zm0 4H0V9h15v1Zm0 4H0v-1h15v1Z"
            clip-rule="evenodd"
          />
        </svg>
        <div className={`dropdown-menu ${isVisible ? "visible" : "hide"}`}>
          <Link to="/"><button type="button">Home</button></Link>
          <Link to="/menu"><button type="button">Menu</button></Link>
          <Link to="/contact"><button type="button">Contact</button></Link>
          <div className="separator"></div>
          <div className="sm-icons">
            <img src="https://icongr.am/entypo/instagram-with-circle.svg?size=18&color=#393939" alt="instagram icon" key="instagram"/>
            <img src="https://icongr.am/entypo/facebook-with-circle.svg?size=18&color=#393939" alt="facebook icon" key="facebook"/>
            <img src="https://icongr.am/entypo/twitter-with-circle.svg?size=18&color=#393939" alt="twitter icon" key="twitter"/>
          </div>
        </div>
    </div>
  </div>
  )
};
