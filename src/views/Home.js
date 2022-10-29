import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Home extends Component{
    render(){
        return(
            <div>
                <Navbar></Navbar>
                    <h1>Home</h1>
                <Footer></Footer>
            </div>
        )
    }
}

export default Home