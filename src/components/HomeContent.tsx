import { UnderHeader } from "./UnderHeader";
import { Carousel } from "./Carousel";
import { GalleryData } from "./GalleryData";
import { ReasonsWhy } from "./ReasonsWhy";

export const HomeContent = () => {
  const galleryData = GalleryData.slice();

  return (
    <div className="home-content">
      <UnderHeader />
      <Carousel data={galleryData} />
      <ReasonsWhy />
    </div>
  );
};
