import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../assets/logo.png'
import search from '../assets/search-solid.svg'
import { jwtDecode } from 'jwt-decode';
import Avatar from '../components/Avatar.jsx'
import Button from '../components/Button'
import { setCurrentUser } from '../actions/currentUser.jsx'

const Navbar = () => {

    const dispatch = useDispatch()
    const Navigate= useNavigate()

    const User = useSelector(state => state.currentUserReducer)

    const handleLogout= ()=> {
        dispatch({ type: 'LOGOUT'})
        Navigate('/')
        dispatch(setCurrentUser(null))
    }

    useEffect(() => {
        const token = User?.token;
        if (token) {
          const decodedToken = jwtDecode(token);
          if (decodedToken.exp * 1000 < new Date().getTime()) {
            handleLogout();
          }
        }
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile"))));
      }, [User?.token, dispatch]);
    

    return (

        <nav className='main-nav'>
            <div className='navbar '>
                <Link to='/' className='nav-item nav-logo'>
                    <img src={logo} alt="logo " />
                </Link>
                <Link to='/' className='nav-item nav-btn'>About </Link>
                <Link to='/' className='nav-item nav-btn'>Product  </Link>
                <Link to='/' className='nav-item nav-btn'> For Teams </Link>

                <form>
                    <input type="text" placeholder='Search...' />
                    <img src={search} alt="" width={18} className='search-icon' />
                </form>
                {
                    User === null ?
                        <Link to='/Auth' className='nav-item nav-links'> Log In</Link> :
                        <>
                            <Link to='/user' style={{ color: 'white', textDecoration: "none" }}>
                                <Avatar backgroundColor='#009dff' px='10px' py='7px' borderRadius='50%' color='white'>
                                    {User.result.name.charAt(0).toUpperCase()}
                                </Avatar>
                            </Link>
                            <button className='nav-item nav-links' onClick={handleLogout}>  Log out</button>


                        </>
                }
            </div>
        </nav>
    )
}

export default Navbar