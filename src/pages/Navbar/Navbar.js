import React from 'react'
import './Navbar.css'

import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Account = () => {
    return (
        <div className="Account">
            <p>sandeep</p>
        </div>
    );
}

const Cart = () => {
    return (
        <div className="Cart">
            <p>Cart</p>
            <ShoppingCartOutlinedIcon />
        </div>
    );
}

const Login = () => {
    return (
        <div className="Login">
            Login
        </div>
    );
}

const More = () => {
    return (
        <div className="More">
            More
        </div>
    );
}

function Navbar() {
    const login = true;
    return (
        <div className="navbar">
            <div className="navbar-left">
                <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fk-plus_3b0baa.png" alt="Flipkart" width="60%"/>
            </div>
            <div className="navbar-mid">
                <div className="searchDiv">
                    <input type="text" placeholder="Search for products, brands and more" />
                    <SearchIcon />
                </div>                
            </div>
            <div className="navbar-right">
            
                    
                <div className="right">
                    {!login && <Login />}
                    {login && <Account />}
                    <Cart />
                    <More />
                </div>
                
            </div>
        </div>
    )
}

export default Navbar
