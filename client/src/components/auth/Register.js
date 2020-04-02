import React, { Component } from "react";
import "./Register.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { registerUser } from "../../actions/authActions";
import { withRouter } from 'react-router-dom';
import classnames from 'classnames';

class Register extends Component {
  constructor() {
        super();

    this.state = {
      name: "",
      email: "",
      company_name: "",
      select_county: "",
      company_phone: "",
      number_of_employees: "",
      errors: {}
    }
  }
  
  componentDidMount() {
    if(this.props.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
    }
  }

  componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }
  
onChange = e => {
      this.setState({[e.target.name]: e.target.value});
    };
  
onSubmit = e => {
      e.preventDefault();
    
          const newUser = {
            name: this.state.name,
            email: this.state.email,
            company_name: this.state.company_name,
            select_county: this.state.select_county,
            company_phone: this.state.company_phone,
            number_of_employees: this.state.number_of_employees
          
            };
  
       this.props.registerUser(newUser, this.props.history); 
    }

render() {
    const { errors } = this.state;   
    return (

      <div className="Signup">
        
        <form noValidate onSubmit={this.onSubmit}>

        <h1>Get started with Ajirar</h1>
            <p>We offer one intuitive place to manage payroll, benefits and HR for your business. Plus, you get 1 month free.</p>

         <div className="form-group">
         <input
                  onChange={this.onChange}
                  defaultValue={this.state.name}
                  placeholder="Full Name"
                  type="text"
                  id="name"
                  error={errors.name}
                  className={classnames("", {
                    invalid: errors.name
                  })}
          />
            <span className="red-text">{errors.name}</span>
        </div>
        <div className="form-group">
         <input
                  placeholder="Company Email"
                  id="email"
                  type="email"
                  Value={this.state.email}
                  onChange={this.onChange}
                  className={classnames("", {
                    invalid: errors.email
                  })}
            />
            <span className="red-text">{errors.email}</span>
          </div> 
               
         <div className="form-group">
          <input
                  onChange={this.onChange}
                  Value={this.state.company_name}
                  placeholder="Company Name"
                  id="Company Name"
                  type="text"
                  className={classnames("", {
                    invalid: errors.company_name
                  })}
              />
           <span className="red-text">{errors.company_name}</span>
      
       </div>

        <div className="form-group">
                <input
                  onChange={this.onChange}
                  Value={this.state.select_county}
                  placeholder="Select a County"
                  error={errors.select_county}
                  id="select_county"
                  type="text"
                  className={classnames("", {
                    invalid: errors.password
                  })}
                />
                <span className="red-text">{errors.select_county}</span>
        </div>
        
        <div className="form-group">
                <input
                  onChange={this.onChange}
                  Value={this.state.company_phone}
                  placeholder="Company Phone"
                  error={errors.company_phone}
                  id="company_phone"
                  type="number"
                  className={classnames("", {
                    invalid: errors.company_phone
                  })}
                />
                <span className="red-text">{errors.company_phone}</span>
       </div>

       <div className="form-group">
                <input
                  onChange={this.onChange}
                  Value={this.state.number_of_employees}
                  placeholder="Company Phone"
                  error={errors.number_of_employees}
                  id="company_phone"
                  type="number"
                  className={classnames("", {
                    invalid: errors.number_of_employees
                  })}
                />
                <span className="red-text">{errors.number_of_employees}</span>
       </div>
       <div className="col s12">
                <button type="submit" className="btn btn-info btn-sm btn-block">
           Continue
                </button>
                </div>
        </form>
      </div>
    );
  }
}
     
Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps,{ registerUser })(withRouter(Register))