import React from 'react';
import './SearchInput.css';

function SearchInput(props) {
  return (
    <input
      type="text"
      className="search-input"
      placeholder="Search Publishers"
      onKeyUp={props.searchKey}
    />
  );
}

SearchInput.propTypes = {
  searchKey: React.PropTypes.func.isRequired,
};

export default SearchInput;
