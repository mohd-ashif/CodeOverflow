import React  from 'react'
import {Link} from 'react-router-dom'
import logo from '../assets/logo.png'
import search from '../assets/search-solid.svg'
import Avatar from '../components/Avatar.jsx'
import Button from '../components/Button'

const Navbar = () => {

    let User = null ;
  return (
    
    <nav>
        <div className='navbar '>
            <Link to='/' className='nav-item nav-logo'>
                <img src={logo} alt="logo " />
            </Link>
            <Link to='/' className='nav-item nav-btn'>About </Link>
            <Link to='/' className='nav-item nav-btn'>Product  </Link>
            <Link to='/' className='nav-item nav-btn'> For Teams </Link>
            
            <form>
                <input type="text"  placeholder='Search...' />
                <img src={search} alt="" width={18} className='search-icon'/>
            </form> 
            {
                User === null ? 
                <Link to='/Auth' className='nav-item nav-links'> Log In</Link> :
                <> 
                <Link to='/user'  style={{color: 'white', textDecoration: "none"}}>  <Avatar backgroundColor='#009dff' px='10px'  py='7px' borderRadius='50%' color='white'> M </Avatar>  </Link>
           <button className='nav-item nav-links' >  Log out</button>

            
                </>
            }
        </div>
    </nav>
  )
}

export default Navbar