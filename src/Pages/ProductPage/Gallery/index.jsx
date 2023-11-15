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
    setMainImg(target.src);
  }

  const togleZoomClick = () => {
    setIsZoomed(!isZoomed);
  };

  const imagesRenderer = images.map((image) => {
    return (
      <img
        onClick={handleMainImgChangeOnClick}
        key={image.id}
        className="gallery__image"
        src = {image.src}
        alt = 'car'
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
      <img
        className={`gallery__mainImg ${isZoomed ? "zoomed-in" : ""}`}
        src={mainImg}
        onClick={togleZoomClick}
        alt='shoes'
      />
      <div className="gallery__images">
        {imagesRenderer}
      </div>
    </div>
  );
};

export default Gallery;
