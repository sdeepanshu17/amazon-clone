import React from 'react'
import "./Header.css"
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {

    const [{basket,user}, dispatch] = useStateValue();

    function handleAuth(params) {
        if(user){
            auth.signOut();
        }
    }

    return (
        <div className='header'>
        <Link to="/">
            <img className='header-logo' src="https://pnggrid.com/wp-content/uploads/2021/05/Amazon-Logo-Transparent-1024x310.png" alt="logo" />
        </Link>
            <div className='header-search'>
                <input className='header-search-inp' placeholder='Enter Keyword or Product Number' type="text" />
                <SearchIcon className='header-search-icon' />
                {/* search icon */}
            </div>
            <div className='header-nav'>
                <Link to={!user && "/login"}>
                    <div onClick={handleAuth} className='header-option'>
                        <span className='header-option-line1'>Hello {!user ? 'Guest' : user.email}</span>
                        <span className='header-option-line2'>{user ? 'Sign out' : 'Sign In'}</span>
                    </div>
                </Link>
                <Link to={(!user ? "/login" : "/orders")}>
                    <div className='header-option'>
                        <span className='header-option-line1'>Returns</span>
                        <span className='header-option-line2'>& Orders</span>
                    </div>
                </Link>
                <div className='header-option'>
                    <span className='header-option-line1'>Your</span>
                    <span className='header-option-line2'>Prime</span>
                </div>
            </div>
            <Link to="/checkout">
                <div className='header-option-cart'>
                    <ShoppingCartIcon />
                    <span className='header-option-line2 header-backet-count'>{basket?.length}</span>
                </div>
            </Link>
        </div>
    )
}

export default Header