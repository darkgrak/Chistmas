import React , {Component} from "react";

class Page4 extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className = {this.props.Page4c}>
                <img src={require("../assets/img/page3img1.webp")} /> 

                <img src={require("../assets/img/page3img2.webp")} /> 

                <img src={require("../assets/img/page4img1.webp")} /> 

                <img src={require("../assets/img/page4img2.webp")} /> 

                <img src={require("../assets/img/page4img3.webp")} /> 

                <img src={require("../assets/img/page4img4.webp")} /> 

            </div>
            
        )
    }

}

export default Page4