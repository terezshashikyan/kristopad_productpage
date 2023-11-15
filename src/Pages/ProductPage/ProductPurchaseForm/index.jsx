import { useState } from "react";
import {
  plusIcon,
  minusIcon,
  checkIcon,
  checkIconSmall,
} from "../../../assets/icons";

import "./style.scss";

const ProductPurchaseForm = () => {
  const [color, setColor] = useState("black");
  const [colorMenuOpen, setColorMenuOpen] = useState(false);
  const [size, setSize] = useState("Select Size");
  const [sizesMenuOpen, setSizesMenuOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleSizeChange = (event) => {
    setSize(event.target.innerHTML);
    setSizesMenuOpen(!sizesMenuOpen);
  };

  const handleColorChange = (event) => {
    setColor(event.target.innerText);
    setColorMenuOpen(!colorMenuOpen);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity(quantity - 1);
  };

  return (
    <form className="productPurchaseForm">
      <div className="productPurchaseForm__color">
        <p className="productPurchaseForm__color_p">Color</p>
        <div className="productPurchaseForm__color_menu">
          <div
            className="productPurchaseForm__color_menu_item"
            onClick={() => setColorMenuOpen(!colorMenuOpen)}
          >
            <div
              className="productPurchaseForm__color_menu_item_clrHolder"
              style={{ backgroundColor: color }}
            >
              <img src={checkIconSmall} />
            </div>
            <div className="productPurchaseForm__color_menu_item_clrName">
              {color}
            </div>
          </div>
          {colorMenuOpen ? (
            <div className="productPurchaseForm__color_menu_dropdown">
              <div
                className="productPurchaseForm__color_menu_item"
                value="beige"
                onClick={handleColorChange}
              >
                <div
                  className="productPurchaseForm__color_menu_item_clrHolder"
                  style={{ backgroundColor: "beige" }}
                >
                  <img src={checkIconSmall} />
                </div>
                beige
              </div>
              <div
                className="productPurchaseForm__color_menu_item"
                value="brown"
                onClick={handleColorChange}
              >
                <div
                  className="productPurchaseForm__color_menu_item_clrHolder"
                  style={{ backgroundColor: "brown" }}
                >
                  <img src={checkIconSmall} />
                </div>
                brown
              </div>
              <div
                className="productPurchaseForm__color_menu_item"
                value="black"
                onClick={handleColorChange}
              >
                <div
                  className="productPurchaseForm__color_menu_item_clrHolder"
                  style={{ backgroundColor: "black" }}
                >
                  <img src={checkIconSmall} />
                </div>
                black
              </div>
            </div>
          ) : null}
        </div>
      </div>
      <div className="productPurchaseForm__size">
        <p className="productPurchaseForm__size_p">Size</p>
        <div className="productPurchaseForm__size_menu">
        <div
          className="productPurchaseForm__size_menu_button"
          onClick={() => setSizesMenuOpen(!sizesMenuOpen)}
        >
          {" "}
          {size}{" "}
        </div>
        {sizesMenuOpen ? (
          <div className="productPurchaseForm__size_menu_dropdown">
            <div
              className="productPurchaseForm__size_menu_dropdown_item"
              onClick={handleSizeChange}
            >
              36
            </div>
            <div
              className="productPurchaseForm__size_menu_dropdown_item"
              onClick={handleSizeChange}
            >
              37
            </div>
            <div
              className="productPurchaseForm__size_menu_dropdown_item"
              onClick={handleSizeChange}
            >
              38
            </div>
          </div>
        ) : null}
        </div>
        <a className="productPurchaseForm__size_guideLink" href="#sizeguide">
          size guide
        </a>
      </div>
      <div className="productPurchaseForm__quantity">
        <p className="productPurchaseForm__quantity_p">Quantity</p>
        <div className="productPurchaseForm__quantity_holder">
          <div
            className="productPurchaseForm__quantity_holder_item"
            onClick={decrementQuantity}
          >
            <img src={minusIcon} alt="minus" />
          </div>
          <div className="productPurchaseForm__quantity_holder_value productPurchaseForm__quantity_holder_item">
            {quantity}
          </div>
          <div
            className="productPurchaseForm__quantity_holder_item"
            onClick={incrementQuantity}
          >
            <img src={plusIcon} alt="plus" />
          </div>
        </div>
      </div>
      <div>
        <button className="productPurchaseForm__button">
          <img src={checkIcon} alt="check" />
        </button>
      </div>
    </form>
  );
};

export default ProductPurchaseForm;
