import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import "./Navbar.css";


import logo from "./logo.png";

class Header extends Component {
   render() {
     return (
       <div className="navbar navbar-fullwidth auto navbar-expand-lg navbar-light bg-white fixed-top">
           <a className="navbar-brand" href="/"> &nbsp; &nbsp; &nbsp; &nbsp; 
              <img src={logo} width="110" height="40" alt="/" /> &nbsp;   
                                 </a>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                   <li className="navbar-item">
                   <Link to="/product" className="nav-link">Why us</Link>
                   </li>

      <li className="navbar-item dropdown position-centre" id="parent">
          <Link to="" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          &nbsp; Payroll and more</Link>

          <div className="dropdown-menu w-30" aria-labelledby="navbarDropdown">
            <Link to="/product/payroll" className="dropdown-item mx-auto" href="#">Payroll</Link>
            <Link to="/product/benefits" className="dropdown-item">Benefits</Link>
            <Link to="/product/hr" className="dropdown-item">Team</Link>
            <Link to="/hr_services" className="dropdown-item">HR Experts</Link>
            <Link to="/product/timing" className="dropdown-item">Time Tools</Link>
            <Link to="/product/integrations" className="dropdown-item">Integrations</Link>
            <Link to="/instant_demo" className="dropdown-item">See Demo</Link>
          </div>
        </li>
                    <li className="navbar-item">
                   <Link to="/product/pricing" className="nav-link">&nbsp; &nbsp; Pricing</Link>
                   </li>
        
         <li className="navbar-item dropdown position-centre" id="parent">
          <Link to="" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          &nbsp; &nbsp; &nbsp; Accountants</Link>

          <div className="dropdown-menu w-120" aria-labelledby="navbarDropdown">
            <Link to="/partners/accountants" className="dropdown-item mx-auto" href="#">Become a Partner</Link>
            <Link to="/partner_resources" className="dropdown-item">Accountants Blog</Link>
            <Link to="/partners/directory" className="dropdown-item">Find an accountant </Link>
          </div>
        </li>
        
        <li className="navbar-item dropdown position-centre" id="parent">
          <Link to="" className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          &nbsp; &nbsp; &nbsp; Resources</Link>

          <div className="dropdown-menu w-120" aria-labelledby="navbarDropdown">
            <Link to="/tools" className="dropdown-item mx-auto">Calculators and tools</Link>
            <Link to="/support" className="dropdown-item">Help Centre</Link>
            <Link to="/blog" className="dropdown-item">Talk shop blog</Link>
          </div>
        </li>
                   <li className="navbar-item"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                   <Link to="/register" className="nav-link" role="button"> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                   &nbsp; &nbsp;  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;Signup</Link>
                   </li>
                   <li className="navbar-item">
                   <Link to="/login" className="nav-link" role="button">Sign in</Link>
                   </li>
              </ul>
            </div>
          </div> 
    );
    }
  }



export default Header;