import {
  INPUT_KEYWORD,
  GET_LIST,
  SHOW_DETAIL,
  UPDATE_CURRENT_GENRE,
} from 'actions/types';

export const defaultState = {
  keyword: '',
  currentGenre: null,
  currentPage: null,
  totalPages: null,
  totalNum: null,
  currentId: null,
  currentMovieList: [],
  currentMovieDetail: null,
  modalOpen: false,
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
    case GET_LIST:
      return {
        ...state,
        currentMovieList: action.payload,
        totalNum: action.payload.length,
      };
    case SHOW_DETAIL:
      return {
        ...state,
        currentId: action.payload.data.imdbID,
        currentMovieDetail: action.payload.data,
      };
    default:
      return state;
  }
}
