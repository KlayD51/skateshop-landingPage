import ShopPageContent from "./components/ShopPageContent"
import ProductData from './data/ProductData'


const Shop = () => {
    return (
        <div>
           <h1 className='shopName'>Riptide Skate Shop</h1> 
           <div className='container-shop'>
               <ShopPageContent />
           </div>
        </div>
    )
}

export default Shop
