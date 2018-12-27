import React from 'react';
import { ProfileBox } from 'components/ProfileBox';
import { shallow } from 'enzyme';

const props = {
  logIn: jest.fn(),
  logOut: jest.fn(),
};

describe('ProfileBox', () => {
  it('Log in', () => {
    const wrappered = shallow(<ProfileBox {...props} auth={false} />);
    expect(wrappered).toMatchSnapshot();
    wrappered.find('#login').simulate('click');
    wrappered.update();
    expect(props.logIn).toBeCalled();
  });
  it('Log out ', () => {
    const wrappered = shallow(<ProfileBox {...props} auth={true} />);
    expect(wrappered).toMatchSnapshot();
    wrappered.find('#logout').simulate('click');
    wrappered.update();
    expect(props.logOut).toBeCalled();
  });
});
