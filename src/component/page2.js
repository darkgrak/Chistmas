import React , {Component} from "react";

class Page2 extends Component{
    constructor(props){
        super(props)
        }
    render(){
        return(
            <div className ={this.props.Page2c}>
                <img src={require("../assets/img/page2img1.webp")} /> 

                <img src={require("../assets/img/page2img2.webp")} /> 

                <img src={require("../assets/img/page2img3.webp")} /> 

                <img src={require("../assets/img/page2img4.webp")} /> 

                <img src={require("../assets/img/page2img5.webp")} /> 

                <img src={require("../assets/img/page2img6.webp")} /> 

                <img src={require("../assets/img/page2img8.webp")} /> 

                <img src={require("../assets/img/page2img7.webp")} /> 

                <img src={require("../assets/img/bpic8718_s.png")} /> 
            </div>
            
        )
    }

}

export default Page2