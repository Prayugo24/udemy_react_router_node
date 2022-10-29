import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../assets/css/about.css'

const Contact = () => {
    return(
        <div>
            <Navbar/>
                <div className="about-container">
                    <h1>Contact Page</h1>
                    <p> Velit aliquip mollit sunt consequat non non magna voluptate amet 
                        laboris dolor nulla qui enim. Id esse esse non sit irure consectetur amet 
                        elit esse. Fugiat officia elit non id. </p>
                </div>
            <Footer/>
        
        </div>
    )
}

export default Contact