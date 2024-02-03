import React from "react";
import { useState } from "react";
import './Navbar.css';
import Logo from '../Assets/BuildingStorefront.svg'
import { BuildingStorefrontIcon, ShoppingCartIcon } from '@heroicons/react/24/outline';

const Navbar = () => {

    const [menu, setMenu] = useState("shop");

    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={Logo} alt=""/>
                <p>SHOPPER</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=> {setMenu("shop")}}>Shop{menu==="shop"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("mens")}}>Men{menu==="mens"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("womens")}}>Women{menu==="womens"?<hr/>:<></>}</li>
                <li onClick={()=> {setMenu("kids")}}>Kids{menu==="kids"?<hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
                <button>Login</button>
                <ShoppingCartIcon className="h-6 w-6 text-gray-500" />
                <div className="nav-cart-count">0</div>
            </div>
        </div>
    )
}

export default Navbar