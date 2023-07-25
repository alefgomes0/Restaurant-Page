import { Link } from "react-router-dom";

export const Wave = () => {
  return (
    <section className="wave-container">
      <div className="wave">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
        <div className="wave-top">
          <h3>The perfect place for your next event</h3>
          <img
            src={process.env.PUBLIC_URL + "images/mark-chan.jpg"}
            alt="a dinner table setting with the sea on the background"
            className="event-image"
          />
          <button>
            <Link to="/contact">Contact us</Link>
          </button>
        </div>
        <div className="wave-bottom">
          <h3>Our menu has a perfect fit for everyone</h3>
          <img
            src={process.env.PUBLIC_URL + "images/qimono-pixabay.jpg"}
            alt="a dinner table setting with the sea on the background"
            className="event-image2"
          />
          <button>
            <Link to="/menu">Menu</Link>
          </button>
        </div>
      </div>
    </section>
  );
};
