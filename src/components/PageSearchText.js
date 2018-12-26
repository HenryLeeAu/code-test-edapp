import React, { Component } from 'react';
import { connect } from 'react-redux';
class PageSearchText extends Component {
  render() {
    const { totalNum, keyword } = this.props.searchStatus;
    return keyword.length > 2 ? (
      <h2>We have foound {totalNum} results</h2>
    ) : null;
  }
}
function mapStateToProps(state) {
  return {
    searchStatus: state.searchStatus,
  };
}

export default connect(mapStateToProps)(PageSearchText);
