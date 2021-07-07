import Header from './components/Header'
import Image from './components/Image'
import Body from './components/Body'
import EmailList from './components/EmailList'
import {Route, Link} from 'react-router-dom'
import Home from './Home'
import Shop from './Shop'
import AboutUs from './AboutUs'
import Contact from './Contact'



function App() {
  return (
    <div>
      
    <Header className='header' /> 
  
    <Route exact path='/' component={Home}/>
    <Route exact path='/Shop' component={Shop}/>
    <Route exact path='/AboutUS' component={AboutUs}/>
    <Route exact path='/Contact' component={Contact}/>

    
    </div>
  )
}

export default App;
//https://www.blacksheepstore.co.uk/media/catalog/product/cache/1/image/602x/9df78eab33525d08d6e5fb8d27136e95/F/1/F1453EEBB4C2465C31C1E9D28149618A.jpg
//https://www.logolynx.com/images/logolynx/52/527cbcdb2b1ee4599497eaca2de03136.jpeg