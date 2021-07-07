
import Header from './components/Header'
import Image from './components/Image'

const AboutUs = () => {
    return (
        <div>
            <Header className='header' /> 
    <h1 className='shopName'>Riptide Skate Shop</h1>
    < div className='AboutUs-body'>
    <h2 style={{fontSize:'40px'}}>OUR STORY</h2>
    <p className='p-about'>
    Founded in 2019, Tenant®'s sole intention has always been to support 
    New York City’s skateboarders and the individuals that inspire it. With a 
    thoughtfully curated assortment, stretching from household names to more obscure 
    local companies, our main focus is to offer a well rounded selection of the brands we 
    love presented through our lens. Sitting on the border of Bushwick and Bedstuy, Tenant® 
    has become a hub for the dense local Brooklyn community it exists within.​
    </p>
    </div>
    <div className='AboutUs-footer'>
        <Image address='https://i1.feedspot.com/200/4543503.jpg?t=1614585561'
         alt='board picture 1'/>
         <Image address='https://rideoo.com/media/catalog/product/cache/1/small_image/200x/9df78eab33525d08d6e5fb8d27136e95/e/n/enuff-classic-logo-mini-complete-skateboards-red-7-x-29.5-1.jpg'
         alt='board picture 2'/>
         <Image address='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7kXHTdELFrmFByeaZ-dLWxN3gyAiIJ7dPSw&usqp=CAU'
         alt='board picture 3'/>
    </div>
        </div>
    )
}

export default AboutUs
