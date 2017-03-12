import React from 'react';
import './SearchInput.css';

function SearchInput(props) {
  return (
    <input
      type="search"
      className="search-input"
      placeholder="Search Publishers"
      onChange={props.searchKey}
    />
  );
}

SearchInput.propTypes = {
  searchKey: React.PropTypes.func.isRequired,
};

export default SearchInput;
