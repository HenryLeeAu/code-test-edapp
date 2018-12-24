import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import _ from 'lodash';
class SearchBox extends Component {
  state = {
    value: '',
  };
  handleChange = e => {
    //console.log(this.props)
    this.setState(
      {
        value: e.target.value,
      },
      () => {}
    );
    this.props.inputKeyword(e.target.value);
    this.search();
  };
  search = _.debounce(() => {
    if (this.state.value.length <= 2) return;
    this.props.fetchMovieList(this.state.value);
  }, 500);
  render() {
    return (
      <div className="SearchBox">
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="keyword"
        />
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    searchStatus: state.searchStatus,
  };
}
export default connect(
  mapStateToProps,
  actions
)(SearchBox);
