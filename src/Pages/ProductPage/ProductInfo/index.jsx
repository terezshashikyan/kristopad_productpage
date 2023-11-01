import './style.scss';


const ProductInfo = () => {
    return (
        <section className="productInfo">
            <h3 className="productInfo__code">
            20 \ 01 \ 512 \ 0001
            </h3>
            <p className="productInfo__about">
            If you're strolling around town on a sunny Saturday afternoon, and wear KristoBad boots while wearing these, life really is pretty good.
            </p>
            <ul className="productInfo__features">
                <li>Rounded toe and lacing at the front</li>
                <li>Mesh panels</li>
                <li>Pull-tab at the back</li>
            </ul>
            <h3 className="productInfo__price">
            $ 88
            </h3>
        </section>
    )
}
export default ProductInfo;