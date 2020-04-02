import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

class Footer extends Component {
  render() {
    return(
      <div className="Footer">
         <div className="Footer1">
         <div className="Footer1a">
         <h3>Why Ajirar</h3>
         <h4>For businesses</h4>
         <p><Link to="/whyus">The people platform for payroll, benefits, and more</Link></p>
         <h4>For accountants</h4>
         <p>A rewards program for accountants and bookkeepers</p>
         <h4>Integrations - <i>Coming Soon!</i></h4>
         <p>Sage, Quickbooks, Clover, TSheets, and more</p>
         <h4>Pricing</h4>
         <p>Starting at just Kes. 1,198/month</p>
         </div>

         <div className="Footer1b">
         <h3>All in one platform</h3>
         <p><Link to="/payroll"> Payroll </Link></p>
         <p>Benefits - <i>Coming Soon!</i></p>
         <p>Team management</p>
         <p>Expert benefits advisors - <i>Coming Soon!</i></p>
         <p>Time tracking tools - <i>Coming Soon!</i></p>
         <p>Retirement Plans</p>
         <p>IT Services - <i>Coming Soon!</i></p>
         </div>

         <div className="Footer1c">
         <h3>Tools</h3>
         <p>Burn rate calculator</p>
         <p>Salary comparison tool</p>
         <p>New hire checklist</p>
         <p>Car benefits calculator</p>
         <p>Housing benefits calculator</p>
         <p>insurance relief calculator</p>
         </div>

         <div className="Footer1d">
         <h3>About Ajirar</h3>
        <p>About</p>
         <p>Careers - We're hiring</p>
         <p>Press</p>
         <p>Contacts</p>
         <p>Investors</p>
         </div>
         
         </div>

         <div className="Footer2">

         <div className="Footer2a">
         <h3>Accountants</h3>
        <p>Become a partner</p>
         <p>Ajirar partner blog</p>
         <p>Find an accountant</p>
         </div>

         <div className="Footer2b">
         <h3>Resources</h3>
        <p>Interactive demo</p>
         <p>Help Center</p>
         <p>FAQs</p>
         <p>Customer Stories</p>
         </div>

         <div className="Footer2c">
         <h3>Contact us</h3>
        <p>Talk to sales - insert phone number</p>
         <p>Talk to support - Sign in</p>
         </div>
          </div>

         <div className="Footer3">

         <div className="Footer3a">
         <h3>Talk Shop: Small business resources</h3>
        <p>Running payroll</p>
         <p>Starting a business</p>
         <p>Taxes</p>
         </div>
         <div className="Footer3b">
         <p>Workers' comp</p>
         <p>Growth</p>
         <p>People management</p>
         </div>
         <div className="Footer3c">
         <p>Hiring</p>
         <p>Health insurance</p>
         </div>
         <div className="Footer3d">
         <p>Employee benefits</p>
         <p>Business finances</p>
         </div>

         </div>

         <div className="Footer4">
         <p>Ajirar © 2019</p> 
         <p>Brokers</p> 
         <p><Link to=""> Privacy</Link></p> 
         <p>Terms</p> 
         <p>Licenses</p> 
         <p>Site map</p> 
         <p>Social media icons</p> 
         </div>

        </div>

      );
    }
  }

export default Footer;
