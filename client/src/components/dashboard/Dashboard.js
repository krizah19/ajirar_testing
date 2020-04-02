import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import logo from "./logo.png";

class Dashboard extends Component {
  onLogoutClick (e) {
    e.preventDefault();
    this.props.logoutUser();
};


render() {
  const { user } = this.props.auth;
 
  return (
       <div className="navbar navbar-fullwidth navbar-expand-lg navbar-light bg-white fixed-top">
        <a className="navbar-brand" href="/"> &nbsp; &nbsp; &nbsp; &nbsp; 
              <img src={logo} width="110" height="40" alt="/" /> &nbsp;   
                                 </a>
        <button onClick={this.onLogoutClick}>
            <img src={user.avatar} alt={user.name} title={user.name}
                className="rounded-circle"
                style={{ width: '25px', marginRight: '5px'}} />
                    Logout
        </button>
    </div>
    )
  }
}
Dashboard.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
  auth: state.auth
});
export default connect(
  mapStateToProps,
  { logoutUser }
)(Dashboard);