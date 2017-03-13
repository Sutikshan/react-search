import React from 'react';
import ReactDOM from 'react-dom';
import SearchContainer from './SearchContainer';
import { mount } from 'enzyme';

const sitesCache = [{
  id: 1,
  siteName: 'SurferMag',
  siteUrl: 'www.surfermag.com',
  description: 'This is the description for SurferMag',
  keys: ['surfermag', 'arts & entertainment'],
}, {
  id: 2,
  siteName: 'Cats',
  siteUrl: 'www.surfermag.com',
  description: 'second SurferMag',
  keys: ['cats', 'surfermag'],
}, {
  id: 3,
  siteName: 'Dogs',
  siteUrl: 'www.dog.com',
  description: 'Last dog',
  keys: ['dogs', 'golden retriever'],
}];

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<SearchContainer sitesCache={[]} />, div);
});

it('searches on siteName and category both', () => {
  const wrapper = mount(<SearchContainer sitesCache={sitesCache} debounceDelay={0} />);

  wrapper.find('input').simulate('change', { target: { value: 'Surfermag' } });

  expect(wrapper.find('.result-row-a').length).toEqual(2);

  expect(wrapper.find('p').first().text()).toEqual('This is the description for SurferMag');
  expect(wrapper.find('p').last().text()).toEqual('second SurferMag');
});

it('searches on multiple tag separated by ,', () => {
  const wrapper = mount(<SearchContainer sitesCache={sitesCache} debounceDelay={0} />);

  wrapper.find('input').simulate('change', { target: { value: 'Cats,Dogs' } });

  expect(wrapper.find('.result-row-a').length).toEqual(2);

  expect(wrapper.find('p').first().text()).toEqual('second SurferMag');
  expect(wrapper.find('p').last().text()).toEqual('Last dog');
});


it('searches one siteName match', () => {
  const wrapper = mount(<SearchContainer sitesCache={sitesCache} debounceDelay={0} />);

  wrapper.find('input').simulate('change', { target: { value: 'Cats' } });

  expect(wrapper.find('.result-row-a').length).toEqual(1);

  expect(wrapper.find('p').first().text()).toEqual('second SurferMag');
});
