import React from 'react';
import './SearchInput.css';

function SearchInput(props) {
  return (
    <input
      type="search"
      className="search-input"
      placeholder="Search Publishers"
      onChange={props.searchKey}
      value={props.query}
    />
  );
}

SearchInput.propTypes = {
  searchKey: React.PropTypes.func.isRequired,
  query: React.PropTypes.string.isRequired,
};

export default SearchInput;
