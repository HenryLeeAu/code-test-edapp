import React from 'react';

import { SearchBox } from 'components/SearchBox';
import { shallow } from 'enzyme';

let wrappered;
let fetchMovieList = jest.fn();
let inputKeyword = jest.fn();

beforeEach(() => {
  wrappered = shallow(
    <SearchBox fetchMovieList={fetchMovieList} inputKeyword={inputKeyword} />
  );
});

describe('Searchbox', () => {
  it('render UI', () => {
    expect(wrappered).toMatchSnapshot();
  });

  it('update text greater than 3 and dispatch fetchMovieList', done => {
    wrappered.find('input').simulate('change', {
      target: { value: 'marvel' },
    });
    wrappered.update();
    expect(wrappered.find('input').prop('value')).toBe('marvel');
    setTimeout(() => {
      expect(fetchMovieList).toHaveBeenCalledTimes(1);
      done();
    }, 1000);
  });
});
