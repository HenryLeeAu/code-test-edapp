import React from 'react';
import App from 'components/App';
import { shallow } from 'enzyme';
let wrappered;

describe('App', () => {
  it('auth true and keyword < 2 ', () => {
    wrappered = shallow(<App />);
    expect(wrappered).toMatchSnapshot();
  });
});
