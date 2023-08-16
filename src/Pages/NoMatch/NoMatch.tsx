import { Link } from "react-router-dom";

export const NoMatch = () => {
  return (
    <div className="no-match">
      <img
        src="/images/undraw_Road_sign_re_3kc3.png"
        alt="a man at a crossroad"
      />
      <h4>It seems like you are lost.</h4>
      <Link to="/">
        <button>Go back home</button>
      </Link>
    </div>
  );
};
