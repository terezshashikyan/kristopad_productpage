import './style.scss';
import bgImg from '../../../Assets/Images/bgImg.png';
import img1 from '../../../Assets/Images/1.png';
import img2 from '../../../Assets/Images/2.png';
import img3 from '../../../Assets/Images/3.png';
import img4 from '../../../Assets/Images/4.png';
import img5 from '../../../Assets/Images/5.png';
import img6 from '../../../Assets/Images/6.png';


function Gallery() {
    const [mainImg, setMainImg] = useState()
    return (
        <div className="gallery">
        <div className="gallery__mainImg">
        <img src= {bgImg} alt="carImg"/>
        </div>
        <div className="gallery__images_container">
        <img src= {img1} alt="carImg"/>
        <img src= {img2} alt="carImg"/>
        <img src= {img3} alt="carImg"/>
        <img src= {img4} alt="carImg"/>
        <img src= {img5} alt="carImg"/>
        <img src= {img6} alt="carImg"/>
        </div>
        </div>
    )
}

export default Gallery;