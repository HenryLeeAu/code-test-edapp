import {
  INPUT_KEYWORD,
  GET_MOVIE_LIST,
  UPDATE_CURRENT_GENRE,
} from 'actions/types';

export const defaultState = {
  keyword: '',
  currentGenre: null,
  currentPage: null,
  totalNum: null,
  currentMovieList: [],
};
export default function(state = defaultState, action) {
  switch (action.type) {
    case INPUT_KEYWORD:
      return { ...state, keyword: action.payload };
    case UPDATE_CURRENT_GENRE:
      return {
        ...state,
        keyword: '',
        currentGenre: action.payload,
      };
    case GET_MOVIE_LIST:
      return {
        ...state,
        currentMovieList: action.payload,
        totalNum: action.payload.length,
      };
    default:
      return state;
  }
}
