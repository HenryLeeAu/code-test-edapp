import React, { Component } from 'react';
import MovieListItem from 'components/MovieListItem';
import { connect } from 'react-redux';
import { fetchMovieDetail, fetchMovieList, deleteMovie } from 'actions';

class MovieList extends Component {
  handleDelete(id) {
    //this.props.fetchMovieDetail(id);
    console.log(id);
    this.props.deleteMovie(id);
  }
  componentDidMount() {
    this.props.fetchMovieList();
  }
  componentDidUpdate() {
    console.log(this.props.auth);
  }
  renderList() {
    return this.props.searchStatus.currentMovieList.map((movie, index) => {
      return (
        <MovieListItem
          key={`${movie.id}${movie.title}`}
          onClick={e => this.handleDelete(movie.id)}
          title={movie.title}
          poster={movie.poster}
          genres={movie.genres}
          auth={this.props.auth}
          currentGenre={this.props.searchStatus.currentGenre}
          clicked={movie.id === this.props.searchStatus.currentId}
        />
      );
    });
  }
  render() {
    return this.props.searchStatus.currentMovieList.length > 0 ? (
      <ul className="movieList">{this.renderList()}</ul>
    ) : (
      `No result`
    );
  }
}
function mapStateToProps(state) {
  return {
    searchStatus: state.searchStatus,
    auth: state.auth,
  };
}

export default connect(
  mapStateToProps,
  { fetchMovieDetail, fetchMovieList, deleteMovie }
)(MovieList);
