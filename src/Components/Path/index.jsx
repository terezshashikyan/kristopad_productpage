import './style.scss';

const Path = () => 
    
 (
        <section className='path container'>
            <div className='path__items'>
                <span className='path__item'>Home</span>
                <span> &gt; </span>
                <span className='path__item'>Women</span>
                <span> &gt; </span>
                <span className='path__item'>Shoes</span>
                <span> &gt; </span>
                <span className='path__item'>Boots</span>
                <span> &gt; </span>
                <span className='path__item'>Product Name</span> 
            </div>
            <div className='path__mobileItems'>
                <span> &lt; </span>
                <span className='path__item'>Boots</span>
            </div>
        </section>
    )


export default Path;