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
  const numberOfImages = props.data.length;

  const handleRightArrowClick = () => {
    if (index + 1 === numberOfImages) {
      setIndex(0);
    } else setIndex((prevIndex) => prevIndex + 1);
  };

  const handleLeftArrowClick = () => {
    if (index === 0) {
      setIndex(numberOfImages - 1);
    } else setIndex((prevIndex) => prevIndex - 1);
  };

  const handleCircledClick = (someIndex: number) => {
    setIndex(someIndex);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % numberOfImages);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [index, numberOfImages]);


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
                <img src={process.env.PUBLIC_URL + slide.url} alt={slide.alt} />
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
            return <div onClick={() => handleCircledClick(circleIndex)}>{index === circleIndex ? "⬤" : "○"}</div>
          })}
        </div>
        

      </div>
    </section>
  );
};
