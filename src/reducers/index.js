import { combineReducers } from 'redux';
import searchStatusReducer from 'reducers/searchStatus';
import authReducer from 'reducers/auth';
import genreListReducer from 'reducers/genreList';
export default combineReducers({
  searchStatus: searchStatusReducer,
  auth: authReducer,
  genreList: genreListReducer,
});
