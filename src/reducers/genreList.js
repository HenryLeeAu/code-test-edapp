import { GET_GENRE_LIST } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {
    case GET_GENRE_LIST:
      return action.payload;
    default:
      return state;
  }
}
