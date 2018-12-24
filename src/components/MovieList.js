import React, { Component } from 'react';
import MovieListItem from 'components/MovieListItem';
import { connect } from 'react-redux';
import { fetchMovieDetail, fetchMovieList } from 'actions';
class MovieList extends Component {
  handleClickList(id) {
    this.props.fetchMovieDetail(id);
  }
  componentDidMount() {
    this.props.fetchMovieList();
  }
  renderList() {
    return this.props.searchStatus.currentMovieList.map((movie, index) => {
      return (
        <MovieListItem
          key={`${movie.id}${movie.title}`}
          onClick={e => this.handleClickList(movie.id)}
          title={movie.title}
          poster={movie.poster}
          genres={movie.genres}
          clicked={movie.id === this.props.searchStatus.currentId}
        />
      );
    });
  }
  renderListX() {
    return <div>list</div>;
  }
  render() {
    return this.props.searchStatus.currentMovieList.length > 0 ? (
      <ul>{this.renderList()}</ul>
    ) : (
      <div>loading</div>
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
  { fetchMovieDetail, fetchMovieList }
)(MovieList);
