import {Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className='navBar'>

            <nav>
            <ul>
                <li><Link to='/'>HOME</Link></li>
                <li><Link to='/Shop'>SHOP</Link></li>
                <li><Link to='/AboutUs'>ABOUT US</Link></li>
                <li><Link to='/Contact'>CONTACT</Link></li>
                
            </ul>
            </nav>
        
        </div>

        
    )
}

export default Header
