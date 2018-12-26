import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchGenreList, fetchMovieListByGenre } from 'actions';
class AddModal extends Component {
  handleClick = e => {
    console.log(e);
  };
  render() {
    return (
      <div className="modal-bg">
        <div className="modal">
          <div>
            <h3>Add </h3>
            <button>Close</button>
          </div>
          <div>
            <ul>
              <li>
                title <input />
              </li>
              <li>
                title <input />
              </li>
            </ul>
          </div>
        </div>
      </div>
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
)(AddModal);
