import React, { Component } from "react";
import "./blog.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import banner2 from "./banner2.png";
import banner3 from "./banner3.png";
import banner4 from "./banner4.jpg";
import banner5 from "./banner5.jpg";
import Footer from "./layout/Footer";

export default class Product extends Component {
  render() {
    return(
        <div className="Product">
        <div className="lander1">
            <p>Welcome to the people platform</p>
            <h2>Ajirar makes it easy to onboard, pay, insure, and support your hardworking team.</h2>
            <Link to="" className="btn">Try 1 month free</Link>

          <img src={banner2} width="95%" height="415" alt="/" />
                                               </div>
                    
          <div className="lander2">
          <h3>A successful business starts with a successfull team.</h3>
                       <p>Build an incredible workplace and grow your business with Ajirar's all-in-one platform</p>
                       
          <img src={banner3} width="50%" height="165" alt="/" />
                       
                </div>
        
        <div className="lander3">
            <div className="column">
            <p1>Onboard your staff</p1>
            <h2>Grow your staff and make it look easy.</h2> 
                        <p>Send great offer letters and have new people set up their own accounts on the platform. Plus, sign and store new hires paperwork you need to help you stay organized</p>
         </div>
         
        <div className="column"> <img src={banner4} alt="/" /> </div>
         </div>

        <div className="lander4">
       
            <div className="column"> <img src={banner5} height="565" alt="/" /> </div>
         
            <div className="column">
                <p1>Pay your team</p1>
                <h2>Pay employees for their hard work.</h2> 
                     <p>We made payroll easy. With just a few clicks, we calculate and file your payroll taxes. And everything syncs automatically - time tracking, new hires, benefits plans, and more. </p>
                
                <Link to="" className="btn">See more about payroll</Link>

          </div>
         
        </div>

        <div className="lander5">row example

        </div>

        <div className="lander6">row example

        </div>

        <div className="lander7">row example

        </div>

        <div className="lander8">
          <p>Prices start at just Kes. 1,198/month</p>
          <h1>Get your team working with Ajirar</h1>
          <Link to="" className="btn">Try 1 month free</Link>
                                               </div>
          
          <div className="lander9">
          <Footer /></div>
       
      </div>
    ); 
  }
}
