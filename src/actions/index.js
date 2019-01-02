import {
  INPUT_KEYWORD,
  GET_MOVIE_LIST,
  UPDATE_CURRENT_GENRE,
  GET_GENRE_LIST,
  LOG_IN,
  LOG_OUT,
} from 'actions/types';
import axios from 'axios';
import { baseApi, moviesReadyData } from 'apis';
import _ from 'lodash';

//auth
export const logIn = () => {
  return {
    type: LOG_IN,
    payload: true,
  };
};
export const logOut = () => {
  return {
    type: LOG_OUT,
    payload: false,
  };
};

export const updateCurrentGenre = id => {
  return {
    type: UPDATE_CURRENT_GENRE,
    payload: id,
  };
};
export function inputKeyword(keyword) {
  return {
    type: INPUT_KEYWORD,
    payload: keyword,
  };
}
export const getList = data => {
  return {
    type: GET_MOVIE_LIST,
    payload: data,
  };
};

export const fetchMovieListByGenre = genre => {
  const api = `${baseApi}movies?genres_like=${genre}&_sort=id&_order=desc`;

  return dispatch => {
    axios
      .get(api)
      .then(res => dispatch(getList(res.data)))
      .catch(error => {});
  };
};
export const fetchMovieList = keyword => {
  const api =
    keyword !== undefined
      ? `${baseApi}movies?title_like=${keyword}&_sort=id&_order=desc`
      : `${baseApi}movies?_sort=id&_order=desc`;

  return dispatch => {
    axios
      .get(api)
      .then(res => dispatch(getList(res.data)))
      .catch(error => {
        console.log(error);
      });
  };
};
export const postNewMovie = () => {
  return async (dispatch, getState) => {
    //detect if we have added all the movies
    if (
      getState().searchStatus.currentMovieList.length === moviesReadyData.length
    )
      return false;
    const GetUnfilledMovie = new Promise((resolve, reject) => {
      detectUnfilledMovie();
      function detectUnfilledMovie() {
        const id = Math.floor(Math.random() * moviesReadyData.length);
        const r = _.find(getState().searchStatus.currentMovieList, {
          title: moviesReadyData[id].title,
        });
        if (r !== undefined) {
          detectUnfilledMovie();
        } else {
          console.log(r, moviesReadyData[id]);
          return resolve(moviesReadyData[id]);
        }
      }
    });
    //wait until we find the unfilled movie
    const unfilledMovie = await GetUnfilledMovie;
    axios
      .post(`${baseApi}movies`, unfilledMovie)
      .then(res => dispatch(fetchMovieList()))
      .catch(error => {
        console.log(error);
      });
  };
};

export const deleteMovie = id => {
  return (dispatch, getState) => {
    axios
      .delete(`${baseApi}movies/${id}`)
      .then(res => res.data)
      .then(data => {
        if (getState().searchStatus.keyword.length > 2) {
          dispatch(fetchMovieList(getState().searchStatus.keyword));
        } else {
          dispatch(fetchMovieList());
        }
      })
      .catch(error => {
        console.log(error);
      });
  };
};

export const getGenreList = data => {
  return {
    type: GET_GENRE_LIST,
    payload: data,
  };
};
export const fetchGenreList = () => {
  return dispatch => {
    axios
      .get(`${baseApi}genres`)
      .then(res => {
        dispatch(getGenreList(res.data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
