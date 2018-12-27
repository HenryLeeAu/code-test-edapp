import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn, logOut } from 'actions';
export class ProfileBox extends Component {
  handleLogIn = () => {
    this.props.logIn();
  };
  handleLogOut = () => {
    this.props.logOut();
  };
  renderProfile() {
    return (
      <div className="profileWrapper">
        <img
          src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/flickr/8260117875_5ab9373bce_o.jpg?zoom=2&resize=600%2C401&ssl=1"
          alt="Henry Lee's portrait"
          width="50"
          height="50"
        />
        <div className="profileInfo">
          <div>Henry Lee</div>
          <button
            id="logout"
            className="primary sm"
            onClick={this.handleLogOut}
          >
            Logout
          </button>
        </div>
      </div>
    );
  }
  renderLoginButton() {
    return (
      <button id="login" className="primary sm" onClick={this.handleLogIn}>
        Login
      </button>
    );
  }
  render() {
    return (
      <div className="profileBox">
        {this.props.auth ? this.renderProfile() : this.renderLoginButton()}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(
  mapStateToProps,
  { logIn, logOut }
)(ProfileBox);
