import { useState } from "react"

type GalleryProps = {
  data: {
    url: string,
    alt: string,
    attribution: string,
    id: number
  }[]
}

export const Carousel = (props: GalleryProps) => {
  const [index, setIndex] = useState(0);

  const carouselStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "4px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${props.data[index].url})`
  }

  const leftArrow = <p>&#8678;</p>

  return (
    <div className="carousel-container">
      <div className="carousel" style={carouselStyles}></div>
    </div>
    
  );
}