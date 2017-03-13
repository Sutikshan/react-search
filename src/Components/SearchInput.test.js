import React from 'react';
import SearchInput from './SearchInput';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const fn = jest.fn();

  const wrapper = shallow(<SearchInput searchKey={fn} query={''} />);
  wrapper.find('input').simulate('change');
  expect(fn).toHaveBeenCalled();
});
