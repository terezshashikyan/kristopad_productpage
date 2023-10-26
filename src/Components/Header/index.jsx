import './style.scss';
import logo from '../../Assets/Icons/Logo.png';
import US from '../../Assets/Icons/US.png';
import arrow from '../../Assets/Icons/arrow.png';
import heartIcon from '../../Assets/Icons/heartIcon.png';
import searchIcon from '../../Assets/Icons/searchIcon.png';
import cartIcon from '../../Assets/Icons/cartIcon.png';
import menuIcon from '../../Assets/Icons/Menu.png';

const MENU_ITEMS = ['Home', 'Women', 'Men', 'Gifts', 'About us']

function Header() {
    return (
        <header> 
        <section className="header container">
            <div className="header__block header__block1">
                    <div className="header__block1_logo">
                        <img src= {logo} alt="logo" />
                    </div>
                    <div className="header__block1_language">
                        <img src= {US} alt="logo" />
                        <img src= {arrow} alt="arrow" />
                    </div>
                    <div className="header__block1_currency">
                        $
                        <img src= {arrow} alt="arrow" />
                    </div>
            </div>
            <div className="header__block header__block2">
                    {
                        MENU_ITEMS.map((item) => {
                            return (
                                <div className="header__block2_item">
                                    <p className="subtitle">{item}</p>
                                </div>
                            )
                        })}
            </div>
            <div className="header__block header__block3">
                    <div className="header__block3_wishList">
                        <img src= {heartIcon} alt="heart icon" />
                    </div>
                    <div className="header__block3_search">
                        <img src= {searchIcon} alt="search icon" />
                    </div>
                    <div className="header__block3_cart">
                        <img src= {cartIcon} alt="cart icon" />
                    </div>
                    <div className="header__block3_signin">
                        <span className="subtitle">Sign In </span>
                        <img src= {arrow} alt="sign in" />
                    </div>
                    <div className="header__block3_hamburgerMenu">
                        <img src= {menuIcon} alt="menu icon" />
                    </div>
            </div>
        </section>
        </header> 

    )
}
export default Header;
