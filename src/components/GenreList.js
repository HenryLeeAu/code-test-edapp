import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGenreList, fetchMovieListByGenre } from 'actions';
class GenreList extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchGenreList();
  }
  handleClick(genre) {
    this.props.fetchMovieListByGenre(genre);
    console.log(genre);
  }
  renderList() {
    return this.props.genreList.map(genre => {
      return (
        <li key={genre}>
          <button onClick={e => this.handleClick(genre)}>{genre}</button>
        </li>
      );
    });
  }
  render() {
    return this.props.genreList.length > 0 ? (
      <ul>{this.renderList()}</ul>
    ) : (
      <div>loading</div>
    );
  }
}
function mapStateToProps(state) {
  return {
    genreList: state.genreList,
  };
}

export default connect(
  mapStateToProps,
  { fetchGenreList, fetchMovieListByGenre }
)(GenreList);
