import React , {Component} from "react";

class Page6 extends Component{
    constructor(props){
        super(props)

    }
    render(){
        return(
            <div className ={this.props.Page6c}>
                <img src={require("../assets/img/page6img1.webp")} /> 

                <img src={require("../assets/img/bpic8719_s.png")} /> 

                <img src={require("../assets/img/page6img2.webp")} /> 

                <img src={require("../assets/img/page6img3.webp")} /> 

                <img src={require("../assets/img/page6img4.webp")} /> 

                <img src={require("../assets/img/lovepng.png")} /> 
                
            </div>
            
        )
    }

}

export default Page6