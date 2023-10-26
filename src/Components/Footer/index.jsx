import './style.scss';
import logo from '../../Assets/Icons/whiteLogo.png';
import instagram from '../../Assets/Icons/instagram.png';
import facebook from '../../Assets/Icons/facebook.png';
import mail from '../../Assets/Icons/mail.png';

function Footer() {
    return (
    <footer>
      <div className="footer container">
        <div className="footer__block footer__block1">
            <div className="footer__block1_logo">
              <img src= {logo} alt="logo" />
            </div>
            <div className="footer__block1_adressess">
              <p className='subtitle__light'>Northern Avenue 10/1</p>
              <p className='subtitle__light'>Sayat Nova 23</p>
            </div>
        </div>
        <div className="footer__block footer__block2">
            <div className="footer__block2_socialMediaLinks">
                <div className="footer__block2_socialMediaLink">
                    <img src={instagram} alt="Social Media Link" />
                </div>
                <div className="footer__block2_socialMediaLink">
                    <img src={facebook} alt="Social Media Link" />
                </div>
                <div className="footer__block2_socialMediaLink">
                    <img src={mail} alt="Social Media Link" />
                </div>
            </div>
            <div className="footer__block2_otherLinks">
                <a href="#" className="subtitle__light">Contact Us</a>
                <a href="#" className="subtitle__light">Return Policy</a>
                <a href="#" className="subtitle__light">Terms&Conditions</a>
                <a href="#" className="subtitle__light">Delivery Terms</a>
            </div>
            <div className="footer__block2_signature">
                <p className = 'subtitle__light'>©2021 Kristobad. All rights reserved.</p>
                <p className = 'subtitle__light'>Powered By ShellLogix</p>
            </div>
        </div>
        <div className="footer__block footer__block3">
                <h3 className="footer__block3_formHeader">Newsletter</h3>
                <input className="footer__block3_formInput" type="text" placeholder='Enter your email'/>
                <button className="footer__block3_formButton">Subscribe</button>
        </div>
      </div>
      </footer>
    )
}

export default Footer;