import { useState, useEffect } from "react";

type GalleryProps = {
  data: {
    url: string;
    alt: string;
    attribution: string;
    id: number;
  }[];
};

export const Carousel = (props: GalleryProps) => {
  const [index, setIndex] = useState(0);
  const [timerActive, setTimerActive] = useState(true);
  const numberOfImages = props.data.length;

  const handleRightArrowClick = () => {
    if (index + 1 === numberOfImages) {
      setIndex(0);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
    setTimerActive(true);
  };

  const handleLeftArrowClick = () => {
    if (index === 0) {
      setIndex(numberOfImages - 1);
    } else {
      setIndex((prevIndex) => prevIndex - 1);
    }
    setTimerActive(true);
  };

  const handleCircledClick = (someIndex: number) => {
    setIndex(someIndex);
    setTimerActive(true);
  };

  useEffect(() => {
    let interval: NodeJS.Timer | null = null;

    if (timerActive) {
      interval = setInterval(() => {
        handleRightArrowClick();
      }, 5000);
    }

    return () => {
      if (interval) {
        clearInterval(interval);
      }
    };
  }, [index, timerActive]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleRightArrowClick();
      } else if (event.key === "ArrowLeft") {
        handleLeftArrowClick();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [index]);

  return (
    <section aria-label="restaurant-photos">
      <div className="carousel-container">
        <ul>
          {props.data.map((slide, slideIndex) => {
            return (
              <li
                key={slide.id}
                className={index === slideIndex ? "slide show" : "slide"}
              >
                <img
                  src={process.env.PUBLIC_URL + slide.url}
                  alt={slide.alt}
                  key={slide.id}
                />
              </li>
            );
          })}
        </ul>
        <div className="left-arrow" onClick={handleLeftArrowClick}>
          ⇦
        </div>
        <div className="right-arrow" onClick={handleRightArrowClick}>
          ⇨
        </div>

        <div className="circles-container">
          {props.data.map((circle, circleIndex) => {
            return (
              <div
                onClick={() => handleCircledClick(circleIndex)}
                key={circleIndex}
              >
                {index === circleIndex ? "⬤" : "○"}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
