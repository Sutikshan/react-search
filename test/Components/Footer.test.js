import React from 'react';
import ReactDOM from 'react-dom';
import Footer from '../../src/Components/Footer';
import { shallow } from 'enzyme';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const company = { links: { } };
  ReactDOM.render(<Footer company={company} />, div);
});

it('renders anchor tags for given links', () => {
  const company = { links: {
    '&copy;2012 Adslot': 'https://www.adslot.com/',
    'Adslot Publisher': 'http://www.adslot.com/directsales/' } };

  const wrapper = shallow(<Footer company={company} />);
  expect(wrapper.find('.footer-nav-a').length).toEqual(2);
  // console.log(wrapper.find('a').length);
});
