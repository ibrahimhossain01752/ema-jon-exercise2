import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header-img'>
            <img className='header' src={logo} alt="" />
            <div className='nav-style'>
                <nav>
                    <a href="/shop">Shopping</a>
                    <a href="/abot">About Product</a>
                    <a href="delivery">Delivery Charge</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;