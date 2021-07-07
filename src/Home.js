import Header from './components/Header'
import Image from './components/Image'
import Body from './components/Body'
import EmailList from './components/EmailList'


const Home = () => {
    return (
        <div>
    <Header className='header' /> 
    <h1 className='shopName'>Riptide Skate Shop</h1>
    

   <div className='container-div'>
    <Image address='https://static6.depositphotos.com/1106232/600/i/600/depositphotos_6003140-stock-photo-skateboard.jpg' 
    alt='Skateboard' className='container-div'/>
    </div>
    <Body />
    <EmailList />
        </div>
    )
}

export default Home
