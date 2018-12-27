import React, { Component } from 'react';
import { connect } from 'react-redux';
import { postNewMovie } from 'actions';
export class AddButton extends Component {
  handleClick = e => {
    this.props.postNewMovie();
  };
  render() {
    const { auth, searchStatus } = this.props;
    return auth && searchStatus.keyword.length <= 2 ? (
      <button onClick={this.handleClick} className="primary lg">
        +Add movie
      </button>
    ) : null;
  }
}
function mapStateToProps(state) {
  return {
    genreList: state.genreList,
    auth: state.auth,
    searchStatus: state.searchStatus,
  };
}

export default connect(
  mapStateToProps,
  { postNewMovie }
)(AddButton);
