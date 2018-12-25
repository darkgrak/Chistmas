import React , {Component} from "react";

class Page7 extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className ={this.props.Page7c}>
                <img src={require("../assets/img/page7img1.webp")} /> 

                <img src={require("../assets/img/page7img2.webp")} /> 

                <img src={require("../assets/img/page7img3.webp")} /> 

                <img src={require("../assets/img/lovepng.png")} /> 

            </div>
            
        )
    }

}

export default Page7