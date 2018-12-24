import React, { Component } from 'react';
import { connect } from 'react-redux';
import { logIn, logOut } from 'actions';
class ProfileBox extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  handleLogIn = () => {
    this.props.logIn();
  };
  handleLogOut = () => {
    this.props.logOut();
  };
  renderProfile() {
    return (
      <div>
        <img
          src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/flickr/8260117875_5ab9373bce_o.jpg?zoom=2&resize=600%2C401&ssl=1"
          alt="Henry Lee's portrait"
          width="50"
          height="50"
        />
        Henry Lee
        <button onClick={this.handleLogOut}>Logout</button>
      </div>
    );
  }
  renderLoginButton() {
    return <button onClick={this.handleLogIn}>Login</button>;
  }
  render() {
    return this.props.auth ? this.renderProfile() : this.renderLoginButton();
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
