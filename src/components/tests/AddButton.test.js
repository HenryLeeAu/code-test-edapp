import React from 'react';
import { AddButton } from 'components/AddButton';
import { shallow } from 'enzyme';

let wrappered;

describe('AddButton', () => {
  it('auth true and keyword < 2 ', () => {
    const props = {
      auth: true,
      searchStatus: {
        keyword: {
          keyword: 'ab',
          length: 2,
        },
      },
    };
    wrappered = shallow(<AddButton {...props} />);
    expect(wrappered).toMatchSnapshot();
    expect(wrappered.find('button').length).toBe(1);
  });
  it('auth false', () => {
    const props = {
      auth: false,
    };
    wrappered = shallow(<AddButton {...props} />);
    expect(wrappered).toMatchSnapshot();
    expect(wrappered.find('button').length).toBe(0);
  });
  it('auth true and keyword > 2 ', () => {
    const props = {
      auth: true,
      searchStatus: {
        keyword: {
          keyword: 'abc',
          length: 3,
        },
      },
    };
    wrappered = shallow(<AddButton {...props} />);
    expect(wrappered).toMatchSnapshot();
    expect(wrappered.find('button').length).toBe(0);
  });
});
