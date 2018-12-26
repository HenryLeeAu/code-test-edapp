import React, { Component } from 'react';
import SearchBox from 'components/SearchBox';
import AddButton from 'components/AddButton';
import { connect } from 'react-redux';
class PageToolBar extends Component {
  render() {
    return this.props.searchStatus.currentGenre === null ? (
      <div className="SearchBox">
        <SearchBox />
        <AddButton />
      </div>
    ) : null;
  }
}
function mapStateToProps(state) {
  return {
    searchStatus: state.searchStatus,
  };
}

export default connect(mapStateToProps)(PageToolBar);
