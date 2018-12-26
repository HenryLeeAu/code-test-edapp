import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGenreList, fetchMovieListByGenre, postNewMovie } from 'actions';
class AddButton extends Component {
  handleClick = e => {
    this.props.postNewMovie();
  };
  render() {
    return this.props.auth ? (
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
  };
}

export default connect(
  mapStateToProps,
  { fetchGenreList, fetchMovieListByGenre, postNewMovie }
)(AddButton);
