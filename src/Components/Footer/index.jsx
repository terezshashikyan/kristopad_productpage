import { mail, whiteLogo, facebook, instagram } from "../../assets/icons";

import "./style.scss";

const Footer = () => (
  <footer>
    <div className="footer container">
      <div className="footer__block1">
        <div className="footer__logo">
          <img src={whiteLogo} alt="logo" />
        </div>
        <div className="footer__addresses">
          <p className="footer__addresses_text">Northern Avenue 10/1</p>
          <p className="footer__addresses_text">Sayat Nova 23</p>
        </div>
      </div>
      <div className="footer__block2">
        <div className="footer__socialMediaLinks">
          <div className="footer__socialMediaLinks_item">
            <img src={instagram} alt="Social Media Link" />
          </div>
          <div className="footer__socialMediaLinks_item">
            <img src={facebook} alt="Social Media Link" />
          </div>
          <div className="footer__socialMediaLinks_item">
            <img src={mail} alt="Social Media Link" />
          </div>
        </div>
        <div className="footer__otherLinks">
          <a href="#" className="footer__otherLinks_a">
            Contact Us
          </a>
          <a href="#" className="footer__otherLinks_a">
            Return Policy
          </a>
          <a href="#" className="footer__otherLinks_a">
            Terms & Conditions
          </a>
          <a href="#" className="footer__otherLinks_a">
            Delivery Terms
          </a>
        </div>
        <div className="footer__signature">
          <p className="footer__signature_text1">
            ©2021 Kristobad. All rights reserved.
          </p>
          <p className="footer__signature_text2">Powered By ShellLogix</p>
        </div>
      </div>
      <div className="footer__form">
        <h3 className="footer__form_header">Newsletter</h3>
        <input
          className="footer__form_input"
          type="text"
          placeholder="kristobad.com"
        />
        <button className="footer__form_button">Subscribe</button>
      </div>
    </div>

    {/* mobile version of the footer */}
    <div className="footerMobile container">
      <div className="footer__form">
        <h3 className="footer__form_header">Newsletter</h3>
        <input
          className="footer__form_input"
          type="text"
          placeholder='@kristobad.com'
          />
        <button className="footer__form_button">Subscribe</button>
      </div>
      <div className="footer__logo">
        <img src={whiteLogo} alt="logo" />
      </div>
      <div className="footer__socialMediaLinks">
        <div className="footer__socialMediaLinks_item">
          <img src={instagram} alt="Social Media Link" />
        </div>
        <div className="footer__socialMediaLinks_item">
          <img src={facebook} alt="Social Media Link" />
        </div>
        <div className="footer__socialMediaLinks_item">
          <img src={mail} alt="Social Media Link" />
        </div>
      </div>
      <div className="footer__addresses">
        <p className="footer__addresses_text">Northern Avenue 10/1</p>
        <p className="footer__addresses_text">Sayat Nova 23</p>
      </div>
      <div className="footer__otherLinks">
        <a href="#" className="footer__otherLinks_a">
          Contact Us
        </a>
        <a href="#" className="footer__otherLinks_a">
          Return Policy
        </a>
        <a href="#" className="footer__otherLinks_a">
          Terms & Conditions
        </a>
        <a href="#" className="footer__otherLinks_a">
          Delivery Terms
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
