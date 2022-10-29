import React from "react";
import '../assets/css/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return(
        <div className="nav">
            <h1>Kode Akadmeia</h1>
            <ul className="myUl">
                <li><Link to="/" className="link">Home</Link></li>
                <li><Link to="/about" className="link">About</Link></li>
                <li><Link to="/contact" className="link">Contact</Link></li>
            </ul>
        </div>
    )
}

export default Navbar


