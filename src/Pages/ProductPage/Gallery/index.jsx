import { useState, useEffect} from "react";
import { images} from "./constant";
import bgImg from "../../../assets/images/bgImg.png";

import "./style.scss";

const Gallery = () => {
  const [mainImg, setMainImg] = useState(bgImg);
  const [isZoomed, setIsZoomed] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  function handleMainImgChangeOnClick(event) {
    // getting the background image of the clicked div and setting it as the background of the main.
    const target = event.target;
    const computedStyle = window.getComputedStyle(target);
    const backgroundImage = computedStyle.getPropertyValue("background-image");
    setMainImg(backgroundImage.match(/url\("(.+)"\)/)[1]);
  }

  const togleZoomClick = () => {
    setIsZoomed(!isZoomed);
  };

  const imagesRenderer = images.map((image) => {
    return (
      <div
        onClick={handleMainImgChangeOnClick}
        key={image.id}
        className="gallery__image"
        style={{ backgroundImage: `url(${image.src})` }}
      />
    );
  })

  useEffect(() => {
    if (window.innerWidth <= 768) {
      const interval = setInterval(() => {
        setCurrentIndex((currentIndex + 1) % images.length);
        setMainImg(images[currentIndex].src);
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [currentIndex]);

  return (
    <div className="gallery">
      <div
        className={`gallery__mainImg ${isZoomed ? "zoomed-in" : ""}`}
        style={{ backgroundImage: `url(${mainImg})` }}
        onClick={togleZoomClick}
      ></div>
      <div className="gallery__images">
        {imagesRenderer}
      </div>
    </div>
  );
};

export default Gallery;
