import { UnderHeader } from "../../components/UnderHeader";
import { Carousel } from "../../components/Carousel";
import { GalleryData } from "../../components/GalleryData";
import { ReasonsWhy } from "../../components/ReasonsWhy";
import { Wave } from "../../components/Wave";
import { AdditionalInfo } from "../../components/AdditionalInfo";
import { ImgAttr } from "../../components/ImgAttr";

export const HomeContent = () => {
  const galleryData = GalleryData.slice();

  return (
    <div className="home-content">
      <UnderHeader />
      <Carousel data={galleryData} />
      <ReasonsWhy />
      <Wave />
      <AdditionalInfo />
      <ImgAttr />
    </div>
  );
};
