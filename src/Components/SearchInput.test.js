import React from 'react';
import SearchInput from './SearchInput';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const fn = jest.fn();

  const wrapper = shallow(<SearchInput searchKey={fn} />);
  wrapper.find('input').simulate('keyup');
  expect(fn).toHaveBeenCalled();
});
