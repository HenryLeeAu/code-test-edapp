import React, { Component } from 'react';
import { connect } from 'react-redux';
import { inputKeyword, fetchMovieList } from 'actions';
import _ from 'lodash';
export class SearchBox extends Component {
  state = {
    value: '',
  };
  handleChange = e => {
    //console.log(this.props)
    this.setState({
      value: e.target.value,
    });
    this.props.inputKeyword(e.target.value);
    this.search();
  };
  search = _.debounce(() => {
    if (this.state.value.length <= 2) {
      this.props.fetchMovieList();
    } else {
      this.props.fetchMovieList(this.state.value);
    }
  }, 500);
  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Search by title (more than 2 letters)"
        />
      </form>
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
  {
    inputKeyword,
    fetchMovieList,
  }
)(SearchBox);
