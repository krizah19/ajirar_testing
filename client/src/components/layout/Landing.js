import React, { Component } from "react";
import "./Landing.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import banner from "./banner.jpg";
import banner0 from "./banner0.png";
import banner1 from "./banner1.png";

import Footer from "./Footer"

class Landing extends Component {
  render() {
    return(
      <div className="Home">
          <div className="navi">
            <div className="col s12 center-align">
            <h4>  
              <b style={{ fontFamily: "Calibri", color: "coral"}}>Take </b> care of your team on payday{" "}
              <span style={{ fontFamily: "Calibri", color: "coral", fontSize: "20px" }}>and</span> everyday
            </h4>
            <p className="flow-text grey-text text-darken-1">
            Introducing the people platform for small businesses. One place to run payroll, manage benefits and support your team.
            </p>
            <br />
            <div className="col s6">
              <Link
                to="/register"
                className="btn btn-info btn-lg btn-block"
              >
                Try 1 month free
              </Link>
            </div>
          </div>
          </div>
          <div className="infoi"> <img src={banner} width="100%" height="700" alt="for sell" />
            </div>

          <div className="lander1">
          <h1>Grow your business with a platform service that supports your team</h1>
                       <p><Link to="" className="btn">Why Ajirar</Link></p>
                       <img src={banner0} width="60%" height="150" alt="/" />
                       <img src={banner1} width="45%" height="265" alt="/" />
                </div>
          
          <div className="lander2">
          <p>Prices start at just Kes. 1,198/month</p>
          <h1>Join more than 1000 businesses and their teams</h1>
          <Link to="" className="btn btn-info btn-lg">Try 1 month free</Link>
                                               </div>
          
          <div className="lander3">
          <Footer /></div>
       
      </div>
    ); 
  }
}

export default Landing;