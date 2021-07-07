import ProductData from '../data/ProductData';


const ShopPageContent = () => {
    const listItems = ProductData.map((item)=>
    <div className="prodCell" key={item.id}>
            <div className="cellImg">
                <img src={item.thumb} />
            </div>
            <div className="cellHeader">
                <h2>{item.product_name}</h2>
                <p>{item.description}</p>
                <p className="itemPrice">{item.price}<span>{item.currency}</span></p>
                <div className="btn-shop" >Add to cart</div>
            </div>
        </div>
    );
    return (
       <div className='MainContent'>
          
        {listItems}
       </div>
    )
}

export default ShopPageContent
