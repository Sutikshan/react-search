import React from 'react';
import './SearchResult.css';

function SearchResult(props) {
  return (
    <div>
      {props.results.map((row) =>
      (<div key={row.id} className="result-row">
        <a className="result-row-a" href={row.siteUrl}>{row.siteUrl}</a>
        <p className="result-row-p">{row.description}</p>
      </div>))}
    </div>);
}

SearchResult.propTypes = {
  results: React.PropTypes.array.isRequired,
};

export default SearchResult;
