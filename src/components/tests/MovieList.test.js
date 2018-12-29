import React from 'react';
import { MovieList } from 'components/MovieList';
import { shallow } from 'enzyme';

let wrappered;
const props = {
  deleteMovie: jest.fn(),
  fetchMovieList: jest.fn(),

  genreList: ['Actions', 'Music'],
  searchStatus: {
    currentGenre: 'Actions',
    currentMovieList: [
      {
        id: 1,
        title: 'Aquaman',
        year: '2018',
        poster:
          'https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        descripition: 'ddd',
        director: 'James Wan',
        genres: ['Action', 'Adventure', 'Fantasy'],
      },
      {
        id: 2,
        title: 'Bumblebee',
        year: '2018',
        poster:
          'https://m.media-amazon.com/images/M/MV5BOTM3NzE5OTE1Nl5BMl5BanBnXkFtZTgwNzQwNjM3NjM@._V1_SY1000_CR0,0,674,1000_AL_.jpg',
        descripition:
          'On the run in the year of 1987, Bumblebee finds refuge in a junkyard in a small Californian beach town. Charlie, on the cusp of turning 18 and trying to find her place in the world, discovers Bumblebee, battle-scarred and broken',
        director: 'Travis Knight',
        genres: ['Action', 'Adventure', 'Sci-Fi'],
      },
    ],
  },
};
beforeEach(() => {
  wrappered = shallow(<MovieList {...props} />);
});
describe('MovieList', () => {
  it('render 2 results ', () => {
    expect(wrappered).toMatchSnapshot();
    expect(wrappered.find('li').length).toBe(2);
  });
});
