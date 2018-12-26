import React, { Component } from 'react';
import { connect } from 'react-redux';
class PageTitle extends Component {
  render() {
    const { currentGenre, keyword } = this.props.searchStatus;

    return keyword.length <= 2 ? (
      <h2>{currentGenre !== null ? currentGenre : 'Home'}</h2>
    ) : null;
  }
}
function mapStateToProps(state) {
  return {
    searchStatus: state.searchStatus,
  };
}

export default connect(mapStateToProps)(PageTitle);
