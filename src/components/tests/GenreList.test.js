import React from 'react';
import { GenreList } from 'components/GenreList';
import { shallow } from 'enzyme';

let wrappered;
const props = {
  fetchGenreList: jest.fn(),
  fetchMovieListByGenre: jest.fn(),
  updateCurrentGenre: jest.fn(),
  fetchMovieList: jest.fn(),

  genreList: ['Actions', 'Music'],
  searchStatus: {
    currentGenre: 'Actions',
  },
};
beforeEach(() => {
  wrappered = shallow(<GenreList {...props} />);
});
describe('GenreList', () => {
  it('render 3 genres ', () => {
    expect(wrappered).toMatchSnapshot();
    expect(wrappered.find('li').length).toBe(3);
  });
  it('click one of the Genres', () => {
    wrappered
      .find('button')
      .at(2)
      .simulate('click');
    wrappered.update();
    expect(props.updateCurrentGenre).toBeCalledWith(props.genreList[1]);
    expect(props.fetchMovieListByGenre).toBeCalledWith(props.genreList[1]);
  });
});
