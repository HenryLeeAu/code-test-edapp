import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchGenreList,
  fetchMovieListByGenre,
  updateCurrentGenre,
  fetchMovieList,
} from 'actions';
class GenreList extends Component {
  componentDidMount() {
    this.props.fetchGenreList();
  }
  handleClick(genre) {
    console.log(this.props.searchStatus.currentGenre, genre);
    if (this.props.searchStatus.currentGenre === genre) return false;
    this.props.fetchMovieListByGenre(genre);
    this.props.updateCurrentGenre(genre);
  }
  handleClick2(genre) {
    console.log(this.props.searchStatus.currentGenre, genre);
    if (this.props.searchStatus.currentGenre === genre) return false;
    this.props.fetchMovieList();
    this.props.updateCurrentGenre(genre);
  }
  renderList() {
    return this.props.genreList.map(genre => {
      return (
        <li key={genre}>
          <button
            onClick={e => this.handleClick(genre)}
            className={
              this.props.searchStatus.currentGenre === genre ? 'clicked' : ''
            }
          >
            {genre}
          </button>
        </li>
      );
    });
  }
  render() {
    return this.props.genreList.length > 0 ? (
      <ul className="genreList">
        <li>
          <button
            onClick={e => this.handleClick2(null)}
            className={
              this.props.searchStatus.currentGenre === null ? 'clicked' : ''
            }
          >
            Home
          </button>
        </li>
        {this.renderList()}
      </ul>
    ) : (
      <div>loading</div>
    );
  }
}
function mapStateToProps(state) {
  return {
    genreList: state.genreList,
    searchStatus: state.searchStatus,
  };
}

export default connect(
  mapStateToProps,
  { fetchGenreList, fetchMovieListByGenre, updateCurrentGenre, fetchMovieList }
)(GenreList);
