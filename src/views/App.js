import React, { Component } from 'react';
import Page1 from "../component/page1";
import Page2 from "../component/page2";
import Page3 from "../component/page3";
import Page4 from "../component/page4";
import Page5 from "../component/page5";
import Page6 from "../component/page6";
import Page7 from "../component/page7";
import Page8 from "../component/page8";

import Swiper from "swiper";


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      mySwiper:{},
      Page1c:{},
      Page2c:{},
      Page3c:{},
      Page4c:{},
      Page5c:{},
      Page6c:{},
      Page7c:{},
      Page8c:{}
    }
  }
  render() {
    return (
      <div className="App">
      <audio src={require("../assets/mucis/jingle bells.mp3")} autoplay="autoplay" loop="loop"></audio>
        <div className="swiper-container">
            <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <Page1  Page1c = {this.state.Page1c}/>
                </div>
                <div className="swiper-slide">
                <Page2 Page2c = {this.state.Page2c}
                        // 个页面加载样式
                    />
                </div>
                <div className="swiper-slide">
                <Page3 Page3c = {this.state.Page3c}
                        // 个页面加载样式
                    />
                 </div>
                <div className="swiper-slide"> 
                <Page4 Page4c = {this.state.Page4c}
                        // 个页面加载样式
                    />
                </div>
                <div className="swiper-slide">  
                <Page5 Page5c = {this.state.Page5c}
                        // 个页面加载样式
                    /></div>
                <div className="swiper-slide"> 
                 <Page6 Page6c = {this.state.Page6c}
                        // 个页面加载样式
                    /></div>
                <div className="swiper-slide"> 
                <Page7 Page7c = {this.state.Page7c}
                        // 个页面加载样式
                    /></div>
                <div className="swiper-slide">  
                <Page8 Page8c = {this.state.Page8c}
                        // 个页面加载样式
                /></div>
               
            </div>
          
            {/* <div className="swiper-pagination"></div> */}
            
            
            {/* <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div> */}
            
           
            {/* <div className="swiper-scrollbar"></div> */}
        </div>
      </div>
    );
  }
  componentDidMount() {
    var that = this
    var mySwiper = new Swiper('.swiper-container', {
      direction: 'vertical', // 垂直切换选项
      loop: false, // 循环模式选项

      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination',
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      on: {
        init:function(){
          that.setState({
            Page1c:'page1'
          })
        },
      

        slideChangeTransitionStart: function () {
            console.log(this.activeIndex);
            switch (this.activeIndex) {
              case 0:
              that.setState({
                Page1c:'page1'

              })
                break;
              case 1:
              that.setState({
                Page2c:'page2'
              })
              console.log(123)
                break;
              case 2:
              that.setState({
                Page3c:'page3'
              })
            
                break;
              case 3:
              that.setState({
                Page4c:'page4'
              })
                break;
              case 4:
              that.setState({
                Page5c:'page5'
              })
                break;
              case 5:
              that.setState({
                Page6c:'page6'
              })
                break;
              case 6:
              that.setState({
                Page7c:'page7'
              })
                break;
              case 7:
                that.setState({
                  Page8c:'page8'
                })
                break;
              default:
              that.setState({
                Page1c:'page1'
              })

                break;
            }
          },
          transitionStart:function(){
           that.setState( {
             Page1c:'',
             Page2c:'',
             Page3c:'',
             Page4c:'',
             Page5c:'',
             Page6c:'',
             Page7c:'',
             Page8c:'',          
             }
             )
          }
      }
    })

    this.setState({
      mySwiper:mySwiper
    })
    
  }
}

export default App;
