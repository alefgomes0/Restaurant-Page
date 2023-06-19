import { useState } from "react";

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

  const carouselStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "4px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${props.data[index].url})`,
  };

  const handleRightArrowClick = () => {
    if (index + 1 === numberOfImages) {
      setIndex(0);
    }
    else setIndex((prevIndex) => prevIndex + 1);
  };

  const handleLeftArrowClick = () => {
    if (index === 0) {
      setIndex(numberOfImages - 1);
    }
    else setIndex((prevIndex) => prevIndex - 1);
  };

  const handleCircledClick = (someIndex: number) => {
    setIndex(someIndex);
  };

  const getSlideStyles = (slideIndex: number) => {
    return {
      opacity: slideIndex === index ? 1 : 0,
    };
  };

  return (
    <div className="carousel-container">
      <div className="carousel" style={carouselStyles}></div>
      <p className="left-arrow" onClick={handleLeftArrowClick}>
        ⇦
      </p>
      <p className="right-arrow"  onClick={handleRightArrowClick}>
        ⇨
      </p>
      <div className="circles-container">
        {props.data.map((circle, slideIndex) => {
          return (
            <div
              key={slideIndex}
              onClick={() => handleCircledClick(slideIndex)}
              style={getSlideStyles(slideIndex)}
            >
              {slideIndex === index ?  "⬤" : "○" }
            </div>
          );
        })}
      </div>
    </div>
  );
};
