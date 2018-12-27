import React from 'react';
import App from 'components/App';
import { shallow } from 'enzyme';
let wrappered;

describe('App', () => {
  it('render UI ', () => {
    wrappered = shallow(<App />);
    expect(wrappered).toMatchSnapshot();
  });
});
