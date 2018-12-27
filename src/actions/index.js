import {
  INPUT_KEYWORD,
  GET_MOVIE_LIST,
  UPDATE_CURRENT_PAGE,
  UPDATE_CURRENT_GENRE,
  GET_GENRE_LIST,
  LOG_IN,
  LOG_OUT,
} from 'actions/types';
import axios from 'axios';
import { baseApi } from 'apis';

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
      .then(res => res.data)
      .then(data => {
        dispatch(getList(data));
      })
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
      .then(res => res.data)
      .then(data => {
        dispatch(getList(data));
      })
      .catch(error => {
        console.log(error);
      });
  };
};
export const postNewMovie = () => {
  return dispatch => {
    axios
      .post(`${baseApi}movies`, {
        title: 'They Shall Not Grow Old',
        year: '2018',
        poster:
          'https://m.media-amazon.com/images/M/MV5BNmJhMDI5NGItYTA2YS00YzNjLWE5MjktMTkyNDNiZGI2NzAzXkEyXkFqcGdeQXVyNjI2OTgxNzY@._V1_.jpg',
        descrpition:
          'A documentary about World War I with never-before-seen footage to commemorate the centennial of the end of the war.',
        director: 'Peter Jackson',
        genres: ['Documentary', 'History', 'War'],
      })
      .then(res => res.data)
      .then(data => {
        dispatch(fetchMovieList());
      })
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

export const updateCurrentPageNum = num => {
  return {
    type: UPDATE_CURRENT_PAGE,
    payload: num,
  };
};
export const increaseCurrentPage = () => {
  return (dispatch, getState) => {
    const { currentPage, totalPages, keyword } = getState().searchStatus;
    if (currentPage >= totalPages) return false;

    dispatch(fetchMovieList(keyword, currentPage + 1));
  };
};

export const decreaseCurrentPage = () => {
  return (dispatch, getState) => {
    const { currentPage, keyword } = getState().searchStatus;
    if (currentPage <= 1) return false;
    dispatch(fetchMovieList(keyword, currentPage - 1));
  };
};
