import {
  INPUT_KEYWORD,
  GET_LIST,
  SHOW_DETAIL,
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
    type: GET_LIST,
    payload: data,
  };
};

export const fetchMovieListByGenre = genre => {
  const api = `http://localhost:4000/movies?genres_like=${genre}&_sort=id&_order=desc`;
  console.log(api);
  return dispatch => {
    axios
      .get(api)
      .then(res => res.data)
      .then(data => {
        console.log(data);
        dispatch(getList(data));
      })
      .catch(error => {});
  };
};
export const fetchMovieList = keyword => {
  const api =
    keyword !== undefined
      ? `http://localhost:4000/movies?title_like=${keyword}&_sort=id&_order=desc`
      : `http://localhost:4000/movies?_sort=id&_order=desc`;
  console.log(api);
  return dispatch => {
    axios
      .get(api)
      .then(res => res.data)
      .then(data => {
        console.log(data);
        dispatch(getList(data));
      })
      .catch(error => {});
  };
};
export const postNewMovie = () => {
  return dispatch => {
    axios
      .post(`http://localhost:4000/movies`, {
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
        console.log(data);
        dispatch(fetchMovieList());
      })
      .catch(error => {});
  };
};

export const deleteMovie = id => {
  return (dispatch, getState) => {
    axios
      .delete(`http://localhost:4000/movies/${id}`)
      .then(res => res.data)
      .then(data => {
        console.log(data);
        if (getState().searchStatus.keyword.length > 2) {
          dispatch(fetchMovieList(getState().searchStatus.keyword));
        } else {
          dispatch(fetchMovieList());
        }
      })
      .catch(error => {});
  };
};
/*
export const fetchMovieList = (keyword, page) => {
  const fetchPage = typeof page === 'number' && page > 0 ? page : 1;
  return dispatch => {
    axios
      .get(`${baseApi}&s=${keyword}&page=${fetchPage}`)
      .then(res => res.data)
      .then(data => {
        if (data.Response === 'False') {
          console.log(data.Error);
          return false;
        } else {
          dispatch(getList({ data, fetchPage }));
        }
      })
      .catch(error => {});
  };
};*/
export const getGenreList = data => {
  return {
    type: GET_GENRE_LIST,
    payload: data,
  };
};
export const fetchGenreList = () => {
  return dispatch => {
    axios
      .get(`http://localhost:4000/genres`)
      .then(res => {
        dispatch(getGenreList(res.data));
      })
      .catch(error => {});
  };
};

export const showMovieDetail = data => {
  return {
    type: SHOW_DETAIL,
    payload: data,
  };
};

export const fetchMovieDetail = id => {
  return (dispatch, getState) => {
    axios
      .get(`${baseApi}&i=${id}`)
      .then(res => res.data)
      .then(data => {
        dispatch(showMovieDetail({ data }));
      })
      .catch(error => {
        console.log('request fail');
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
