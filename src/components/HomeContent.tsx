import { UnderHeader } from "./UnderHeader";
import { Carousel } from "./Carousel";
import { GalleryData } from "./GalleryData";
import { ReasonsWhy } from "./ReasonsWhy";
import { Wave } from "./Wave";
import { AdditionalInfo } from "./AdditionalInfo";

export const HomeContent = () => {
  const galleryData = GalleryData.slice();

  return (
    <div className="home-content">
      <UnderHeader />
      <Carousel data={galleryData} />
      <ReasonsWhy />
      <Wave />
      <AdditionalInfo />
    </div>
  );
};
