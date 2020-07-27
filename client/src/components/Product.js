/*jshint esversion: 6 */

import React, { Component } from "react";
import "./Product.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import banner2 from "./banner2.png";
import banner3 from "./banner3.png";
import banner4 from "./banner4.jpg";
import banner5 from "./banner5.jpg";
import banner6 from "./banner6.png";
import banner7 from "./banner7.jpg";
import banner8 from "./banner8.jpg";
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
            <p1>Onboard your team</p1>
            <h2>Grow your team and make it look easy.</h2> 
                        <p>Send great offer letters and have new people set up their own accounts on the platform. Plus, sign and store new hires paperwork you need to help you stay organized</p>
         </div>
        <div className="column"> <img src={banner4} height="515"alt="/" /> </div>
         </div>
        <div className="lander4">
            <div className="column"> <img src={banner5} height="500" alt="/" /> </div>
         
            <div className="column">
                <p1>Pay your team</p1>
                <h2>Pay employees for their hard work.</h2> 
                     <p>We made payroll easy. With just a few clicks, we calculate and file your payroll taxes. And everything syncs automatically - time tracking, new hires, benefits plans, and more. </p>
                
                <Link to="/product/payroll" className="btn">See more about payroll</Link>

          </div>
         
        </div>

        <div className="lander5">
        <div className="column">
               <h2>Teamwork means taking care of each other</h2> 
               <p>Get help finding a benefits plan that fits your team and budget. Already offer benefits? We can move your plan over, so it's all auto-deducteed from payroll</p>
              
               <Link to="/product/benefits" className="btn">See more about benefits</Link>
         </div>
         
        <div className="column"> <img src={banner6} height="500"alt="/" /> </div>
         
        </div>

        <div className="lander6">
        <div className="column"> <img src={banner7} height="500" alt="/" /> </div>
         
         <div className="column">
             <p1>Support your team</p1>
             <h2>It's the little things that make a difference.</h2> 
                  <p>There are so many ways to support your team beyond payday: team surveys, Expert HR Advice, and the small celebrations that bring us together. </p>
             
            </div>
        </div>

        <div className="lander7">
        <h2>Join more than 1,000 small businesses and their teams.</h2>
            <Link to="" className="btn">See what they say</Link>

          <img src={banner8} width="95%" height="215" alt="/" />
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
