import './style.scss';
import {useState, useEffect, react} from 'react';
import bgImg from '../../../Assets/Images/bgImg.png';
import img1 from '../../../Assets/Images/1.png';
import img2 from '../../../Assets/Images/2.png';
import img3 from '../../../Assets/Images/3.png';
import img4 from '../../../Assets/Images/4.png';
import img5 from '../../../Assets/Images/5.png';
import img6 from '../../../Assets/Images/6.png';


function Gallery() {
    const [mainImg, setMainImg] = useState(bgImg);
    const [isZoomed, setIsZoomed] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const imageUrls = [img1, img2, img3, img4, img5, img6];
    
    function handleMainImgChange(event) {
        // getting the background image of the clicked div and setting it as the background of the main. 
        const target = event.target;
        const computedStyle = window.getComputedStyle(target);
        const backgroundImage = computedStyle.getPropertyValue('background-image');
        setMainImg(backgroundImage.match(/url\("(.+)"\)/)[1])
    }

    const handleZoomClick = () => {
        setIsZoomed(!isZoomed);
      };

      useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % imageUrls.length)
          setMainImg(imageUrls[currentIndex]);
        }, 3000); 
    
        return () => {
          clearInterval(interval);
        };
      }, [currentIndex]);

      

    return (
        <div className="gallery">
            <div className={`gallery__mainImg ${isZoomed ? 'zoomed-in' : ''}`}  style={{backgroundImage: `url(${mainImg})`}} onClick={handleZoomClick}></div>
            <div className="gallery__images">
                {imageUrls.map((imageUrl, index) => {
                    return (
                        <div
                        onClick = {handleMainImgChange}
                        key={index}
                        className='gallery__image'
                        style={{ backgroundImage: `url(${imageUrl})`}}
                    ></div>
                    )
                })}
            </div>
        </div>
    )
}

export default Gallery;