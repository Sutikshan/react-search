import React from 'react';
import ReactDOM from 'react-dom';
import SearchContainer from '../../src/Components/SearchContainer';

it('renders without crashing', () => {
  const div = document.createElement('div');

  ReactDOM.render(<SearchContainer sitesCache={[]} />, div);
});
