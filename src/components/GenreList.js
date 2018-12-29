import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchGenreList,
  fetchMovieListByGenre,
  updateCurrentGenre,
  fetchMovieList,
} from 'actions';
export class GenreList extends Component {
  componentDidMount() {
    this.props.fetchGenreList();
  }

  handleClick(genre) {
    if (this.props.searchStatus.currentGenre === genre) return false;
    genre !== null
      ? this.props.fetchMovieListByGenre(genre)
      : this.props.fetchMovieList();
    this.props.updateCurrentGenre(genre);
  }
  renderButton(genre) {
    return (
      <button
        onClick={e => this.handleClick(genre)}
        className={
          this.props.searchStatus.currentGenre === genre ? 'clicked' : ''
        }
      >
        {genre === null ? 'Home' : genre}
      </button>
    );
  }
  renderList() {
    return this.props.genreList.map(genre => {
      return <li key={genre}>{this.renderButton(genre)}</li>;
    });
  }
  render() {
    return this.props.genreList.length > 0 ? (
      <nav>
        <ul className="genreList">
          <li>{this.renderButton(null)}</li>
          {this.renderList()}
        </ul>
      </nav>
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
