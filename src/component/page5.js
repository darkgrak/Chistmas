import React , {Component} from "react";

class Page5 extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className ={this.props.Page5c}>
                <img src={require("../assets/img/page5img1.webp")} /> 

                <img src={require("../assets/img/page5img2.webp")} /> 

                <img src={require("../assets/img/FireShot Capture 22 - React App - http___localhost_3000_.png")} /> 
            </div>
            
        )
    }

}

export default Page5