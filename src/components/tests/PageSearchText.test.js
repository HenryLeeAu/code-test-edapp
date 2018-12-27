import React from 'react';
import { PageSearchText } from 'components/PageSearchText';
import { shallow } from 'enzyme';
describe('PageSearchText', () => {
  it('keword length > 2', () => {
    const props = {
      searchStatus: {
        keyword: {
          length: 3,
        },
        totalNum: 4,
      },
    };
    const wrappered = shallow(<PageSearchText {...props} />);
    expect(wrappered).toMatchSnapshot();
  });
  it('keword length < =2', () => {
    const props = {
      searchStatus: {
        keyword: {
          length: 2,
        },
      },
    };
    const wrappered = shallow(<PageSearchText {...props} />);
    expect(wrappered).toMatchSnapshot();
    expect(wrappered.find('h3').length).toBe(0);
  });
});
