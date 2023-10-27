import Gallery from "./Gallery";
import ProductInfo from "./ProductInfo";
import DeliveryTerms from "./DeliveryTerms";
import ProductPurchaseForm from "./ProductPurchaseForm";

import "./style.scss";

const ProductPage = () => (
  <div className="productPage container">
    <Gallery />
    <div className="product__details">
      <ProductInfo />
      <ProductPurchaseForm />
      <DeliveryTerms />
    </div>
  </div>
);

export default ProductPage;
