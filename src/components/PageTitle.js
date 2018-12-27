import React, { Component } from 'react';
import { connect } from 'react-redux';
class PageTitle extends Component {
  render() {
    const { currentGenre } = this.props.searchStatus;

    return <h2>{currentGenre !== null ? currentGenre : 'Home'}</h2>;
  }
}
function mapStateToProps(state) {
  return {
    searchStatus: state.searchStatus,
  };
}

export default connect(mapStateToProps)(PageTitle);
