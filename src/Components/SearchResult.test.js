import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import SearchResult from './SearchResult';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const results = [];

  ReactDOM.render(<SearchResult results={results} />, div);
});
