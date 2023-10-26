
import './style.scss';
import ProductInfo from './ProductInfo';
import ProductPurchaseForm from './ProductPurchaseForm';
import DeliveryTerms from './DeliveryTerms';
import Gallery from './Gallery';

function ProductPage() {
  return (
    <div className="productPage container">
      <Gallery/>
      <div className='product__details'>
      <ProductInfo/>
      <ProductPurchaseForm/>
      <DeliveryTerms/>
      </div>
    </div>
  );
}

export default ProductPage;