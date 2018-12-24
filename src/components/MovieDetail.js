import React from 'react';
import { connect } from 'react-redux';

function MovieDetail(props) {
  const { currentMovieDetail } = props.searchStatus;
  if (currentMovieDetail !== null) {
    const {
      Title,
      Year,
      Genre,
      Language,
      Director,
      Actors,
      Runtime,
      Poster,
      Plot,
    } = currentMovieDetail;
    return (
      <div>
        <div className="detailLeft">
          <h2 className="movie-title">{Title}</h2>
          <div className="movie-year">{Year}</div>
          <p className="movie-desc">{Plot}</p>
          <div>genere: {Genre}</div>
          <p>movie description</p>
          <div>language: {Language}</div>
          <div>Director: {Director}</div>
          <div>Actor(s): {Actors}</div>
          <div>Duration : {Runtime}</div>
        </div>
        {Poster !== 'N/A' && <img src={Poster} alt={Title} />}
      </div>
    );
  } else {
    return (
      <div className="before-select">You haven't selected any movie yet!</div>
    );
  }
}
function mapStateToProps(state) {
  return {
    searchStatus: state.searchStatus,
  };
}

export default connect(mapStateToProps)(MovieDetail);
