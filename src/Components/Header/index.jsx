import { MENU_ITEMS } from "./constants";

import {
  logo,
  US,
  menuIcon,
  heartIcon,
  searchIcon,
  cartIcon,
  arrow,
  dollar,
} from "../../assets/icons";

import "./style.scss";

const Header = () => {
  const menuItemsRenderer = MENU_ITEMS.map(({ id, name }) => {
    return (
      <div key={id} className="header__block2_item">
        <p className="header__block2_item_title">{name}</p>
      </div>
    );
  });

  return (
    <header>
      <section className="header container">
        <div className="header__block header__block1">
          <div className="header__block1_logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="header__block1_language">
            <img src={US} alt="logo" />
            <img src={arrow} alt="arrow" />
          </div>
          <div className="header__block1_currency">
            <img src={dollar} alt="dollar" />
            <img src={arrow} alt="arrow" />
          </div>
        </div>
        <div className="header__block header__block2">{menuItemsRenderer}</div>
        <div className="header__block header__block3">
          <div className="header__block3_wishList">
            <img src={heartIcon} alt="heart icon" />
          </div>
          <div className="header__block3_search">
            <img src={searchIcon} alt="search icon" />
          </div>
          <div className="header__block3_cart">
            <img src={cartIcon} alt="cart icon" />
          </div>
          <div className="header__block3_signin">
            <span>Sign In </span>
            <img src={arrow} alt="sign in" />
          </div>
          <div className="header__block3_hamburgerMenu">
            <img src={menuIcon} alt="menu icon" />
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
