import React , {Component} from "react";

class Page8 extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className ={this.props.Page8c}>
                <img src={require("../assets/img/page9img1.webp")} /> 

                <img src={require("../assets/img/page9img2.webp")} /> 

                <img src={require("../assets/img/page9img3.webp")} /> 

                <img src={require("../assets/img/page9img4.webp")} /> 
            </div>
            
        )
    }

}

export default Page8