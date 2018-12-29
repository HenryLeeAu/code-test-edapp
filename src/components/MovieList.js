import React, { Component } from 'react';
import MovieListItem from 'components/MovieListItem';
import { connect } from 'react-redux';
import { fetchMovieList, deleteMovie } from 'actions';

export class MovieList extends Component {
  handleDelete(id) {
    this.props.deleteMovie(id);
  }
  componentDidMount() {
    this.props.fetchMovieList();
  }
  renderList() {
    return this.props.searchStatus.currentMovieList.map((movie, index) => {
      return (
        <li key={`${movie.id}${movie.title}`}>
          <MovieListItem
            onClick={e => this.handleDelete(movie.id)}
            title={movie.title}
            poster={movie.poster}
            genres={movie.genres}
            descripition={movie.descripition}
            auth={this.props.auth}
            currentGenre={this.props.searchStatus.currentGenre}
            clicked={movie.id === this.props.searchStatus.currentId}
          />
        </li>
      );
    });
  }
  render() {
    return this.props.searchStatus.currentMovieList.length > 0 ? (
      <ul className="movieList">{this.renderList()}</ul>
    ) : (
      <div className="noresult">No result</div>
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
  { fetchMovieList, deleteMovie }
)(MovieList);
