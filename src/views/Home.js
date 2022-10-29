import React, { Component } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import '../assets/css/home.css'

class Home extends Component{
    state ={
        skills:[
            {
                id:1,
                name:"javascript",
                description:"Javascript Description",
                image: "5968292.png"
            },
            {
                id:2,
                name:"Vue",
                description:"Vue Description",
                image: "vueart.png"
            },
            {
                id:3,
                name:"React",
                description:"React Description",
                image: "react-logo@3x.svg"
            },
            {
                id:4,
                name:"Savelte",
                description:"Savelte Description",
                image: "savelte.png"
            }
        ]
    }
    render(){
        const { skills } = this.state
        return(
            <div>
                <Navbar/>
                    <h1 style={{paddingLeft:"6rem"}}>Home</h1>
                    <div className="container">
                        { skills.map((item) => (
                            <div className="card">
                                <img className="img" src={"/img/"+item.image} alt={item.description}></img>
                                <h3>{item.name}</h3>
                            </div>
                        ))}
                    </div>
                <Footer/>
            </div>
        )
    }
}

export default Home