import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import SearchContainer from '../../src/Components/SearchContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const results = [];

  ReactDOM.render(<SearchContainer results={results} />, div);
});
