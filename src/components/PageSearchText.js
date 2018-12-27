import React from 'react';
import { connect } from 'react-redux';
export function PageSearchText(props) {
  const { totalNum, keyword } = props.searchStatus;
  return keyword.length > 2 ? (
    <h3>We have found {totalNum} result(s)</h3>
  ) : null;
}
function mapStateToProps(state) {
  return {
    searchStatus: state.searchStatus,
  };
}

export default connect(mapStateToProps)(PageSearchText);
