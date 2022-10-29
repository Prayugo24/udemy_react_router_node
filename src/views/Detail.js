import React, { Component } from "react";
import MainLayout from "../layouts/MainLayout";
import { useParams, Link } from 'react-router-dom'
import '../assets/css/detail.css'

function withRouter(Component) {
    function ComponentWithRouter(props) {
      let params = useParams()
      return <Component {...props} params={params} />
    }
    return ComponentWithRouter
  }

class Detail extends Component{
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
        ],
        data:""
    }
    // lifecycle method
    componentDidMount(){
        const id = this.props.params.id
        const data = this.state.skills.find(item => item.id === parseInt(id))
        this.setState({data})
    }
    render(){
        return(
            <MainLayout>
                <div className="container-detail">
                    <h1>Details {this.state.data.name}</h1>
                    <div className="box">
                        <img className="img" src={`/img/${this.state.data.image}`} alt={this.state.data.description}/>
                        <div>
                            <p>{this.state.data.description}</p>
                            <Link to="/">Back To Home</Link>
                        </div>
                    </div>
                </div>
            </MainLayout>
        )
    }
}

const HOCTaskDetail = withRouter(Detail);

export default HOCTaskDetail;