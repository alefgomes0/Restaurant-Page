import { useEffect, useRef, useState } from "react";

export const AnimatedDiv = () => {
  const h2Ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const options = {
      threshold: 0.8,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          if (entry.target === h2Ref.current) {
            setIsVisible(true);
            observer.unobserve(h2Ref.current);
          }
        }
      });
    }, options);

    if (h2Ref.current) {
      observer.observe(h2Ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <h2 className={isVisible ? "animate-slide" : ""} ref={h2Ref}>
        <span>Here you will find</span>
      </h2>
      <div
        className={`cards-container ${isVisible ? "animate-slide" : ""}`}
      >
        <div className="card card-1">
          <div className="idk">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
              className="utensils"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2M7 2v20m14-7V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"
              />
            </svg>
            <h3>Excellent Food</h3>
          </div>
          <h4>
            Ac auctor augue mauris augue neque gravida in. Consectetur purus ut
            faucibus pulvinar. Auctor urna nunc id cursus metus aliquam. Feugiat
            sed lectus vestibulum mattis.
          </h4>
        </div>
        <div className="card card-2">
          <div className="idk">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 14 14"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7 3h0a6.5 6.5 0 0 1 6.5 6.5v0a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1v0A6.5 6.5 0 0 1 7 3Zm0 0V1.5m-6.5 11h13"
              />
            </svg>
            <h3>Great Service</h3>
          </div>
          <h4>
            Pulvinar elementum integer enim neque volutpat ac tincidunt.
            Bibendum neque egestas congue quisque egestas diam. Mollis aliquam
            ut porttitor leo a diam sollicitudin tempor.
          </h4>
        </div>
        <div className="card card-3">
          <div className="idk">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="36"
              height="36"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15Z"
              />
            </svg>
            <h3 className="price">Affordable Prices</h3>
          </div>
          <h4>
            Euismod nisi porta lorem mollis aliquam ut porttitor. Mauris in
            aliquam sem fringilla ut morbi tincidunt augue. Massa sapien
            faucibus et molestie ac.
          </h4>
        </div>
      </div>
    </>
  );
};
