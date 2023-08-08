import { Link } from "react-router-dom";
import { useState, useRef, useEffect } from "react";

export const DropDown = () => {
  const [isVisible, setIsVisible] = useState(false);
  const dropdown = useRef<HTMLDivElement>(null);
  const divRef = useRef<HTMLDivElement>(null);
  const hide =
    !isVisible && divRef.current?.classList.contains("visible") ? "hide" : "";

  useEffect(() => {
    const hideDropdown = (e: MouseEvent) => {
      if (isVisible && e.target !== dropdown.current) {
        setIsVisible(false);
      }
    };

    window.addEventListener("click", hideDropdown);

    return () => {
      window.removeEventListener("click", hideDropdown);
    };
  }, [isVisible]);

  return (
    <div className="dropdown-container">
      <div
        className="menu-title"
        onClick={() => setIsVisible(!isVisible)}
        ref={dropdown}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="36"
          height="36"
          viewBox="0 0 36 36"
        >
          <path fill="#262B2D" d="M32 29H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z" />
          <path fill="#262B2D" d="M32 19H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z" />
          <path fill="#262B2D" d="M32 9H4a1 1 0 0 1 0-2h28a1 1 0 0 1 0 2Z" />
          <path fill="none" d="M0 0h36v36H0z" />
        </svg>
        <div
          className={`dropdown-menu ${isVisible ? "visible" : ""} ${hide}`}
          ref={divRef}
        >
          <Link to="/">
            <button type="button">Home</button>
          </Link>
          <Link to="/menu">
            <button type="button">Menu</button>
          </Link>
          <Link to="/contact">
            <button type="button">Contact</button>
          </Link>
          <div className="separator"></div>
          <div className={`sm-icons ${isVisible ? "" : "testando"}`}>
            <img
              src="https://icongr.am/entypo/instagram-with-circle.svg?size=18&color=#393939"
              alt="instagram icon"
              key="instagram"
            />
            <img
              src="https://icongr.am/entypo/facebook-with-circle.svg?size=18&color=#393939"
              alt="facebook icon"
              key="facebook"
            />
            <img
              src="https://icongr.am/entypo/twitter-with-circle.svg?size=18&color=#393939"
              alt="twitter icon"
              key="twitter"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
