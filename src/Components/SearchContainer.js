import React from 'react';
import debounce from 'lodash.debounce';
import './SearchContainer.css';
import SearchResult from './SearchResult';
import SearchInput from './SearchInput';


class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
    this.getSearchKey = this.getSearchKey.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);
  }

  componentWillMount() {
    this.delayedSearch = debounce(e => this.getSearchKey(e), this.props.debounceDelay,
    { leading: true });
  }

  onKeyPress(e) {
    e.persist();
    this.delayedSearch(e);
  }

  getSearchKey(e) {
    const inputs = e.target.value;
    const results = [];
    const tags = inputs.split(',').map(t => t.trim().toLowerCase());

    for (const tag of tags) {
      for (const site of this.props.sitesCache) {
        if (site.keys.includes(tag)) results.push(site);
      }
    }
    this.setState({
      results,
    });
  }


  render() {
    return (
      <div className="container">
        <SearchInput searchKey={this.onKeyPress} />
        <SearchResult results={this.state.results} />
      </div>);
  }
}

SearchContainer.propTypes = {
  sitesCache: React.PropTypes.array.isRequired,
  debounceDelay: React.PropTypes.number,
};

SearchContainer.defaultProps = {
  debounceDelay: 250,
};

export default SearchContainer;
