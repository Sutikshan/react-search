import React from 'react';
import debounce from 'lodash.debounce';
import './SearchContainer.css';
import SearchResult from './SearchResult';
import SearchInput from './SearchInput';


class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [], query: '' };
    this.getSearchKey = this.getSearchKey.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentWillMount() {
    this.delayedSearch = debounce(e => this.getSearchKey(e), this.props.debounceDelay,
    { leading: true });
  }

  onChange(e) {
    this.setState({ query: e.target.value });
    this.delayedSearch(e.target.value);
  }

  getSearchKey(inputs) {
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
        <SearchInput searchKey={this.onChange} query={this.state.query} />
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
