import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Login.css";

import logo from "./logo.png";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import classnames from "classnames";

class Login extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
      errors: {}
    }
  }
  
  componentDidMount() {
    // If logged in and user navigates to Login page, should redirect them to dashboard
    if(this.props.auth.isAuthenticated) {
        this.props.history.push('/dashboard');
    }
}

  componentWillReceiveProps(nextProps) {
      if (nextProps.auth.isAuthenticated) {
        this.props.history.push("/dashboard"); // push user to dashboard when they login
      }
    
      if (nextProps.errors) {
        this.setState({
          errors: nextProps.errors
        });
      }
    }

onChange = e => {
     this.setState({[e.target.id]: e.target.value});
    }

 onSubmit = e => {
     e.preventDefault();
  
const userData = {
      email: this.state.email,
      password: this.state.password
    };

this.props.loginUser(userData); // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
  };

render() {
    const { errors } = this.state;

    return (
      <div className="Login">
        <img src={logo} width="120" height="46" alt="/" />
        <h4>
            <b>Login</b> below
       </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/register">Register</Link>
              </p>
        <form noValidate onSubmit={this.onSubmit}>
        <div className="form-group">
                <input
                  onChange={this.onChange}
                  defaultValue={this.state.email}
                  error={errors.email}
                  type="email"
                  id="email"
                  placeholder="Email"
                  className={classnames("", {
                    invalid: errors.email || errors.emailnotfound
                  })}
                />
              <span className="pink-text">
                  {errors.email}
                  {errors.emailnotfound}
                </span>
              </div>
              
              <div className="input-field col s12 block">
                <input
                  onChange={this.onChange}
                  defaultValue={this.state.password}
                  type="password"
                  placeholder="Password"
                  id="password"
                  className={classnames("", {
                    invalid: errors.password || errors.passwordincorrect
                  })}
                 />
              <span className="red-text">
                  {errors.password}
                  {errors.passwordincorrect}
                </span>
              </div>

              <div className="col s12">
                    <button 
                    style={{
                      width: "100%",
                      borderRadius: "3px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-info btn-sm btn-block"
                  >
                  Login
                </button>
              </div>
        </form>
      </div>
      );
  }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth,
  errors: state.errors
});
export default connect(
  mapStateToProps,
  { loginUser }
)(Login);
