import React from 'react';
import { debounce } from 'lodash';
import './SearchContainer.css';
import SearchResult from './SearchResult';
import SearchInput from './SearchInput';


class SearchContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
    this.getSearchKey = this.getSearchKey.bind(this);
    this.onKeyPress = this.onKeyPress.bind(this);

    this.siteCache = this.props.sites.map(s => {
      const siteObj = {
        id: s.id,
        siteUrl: s.siteUrl,
        description: s.description,
        keys: [s.siteName.toLowerCase()],
      };
      siteObj.keys = siteObj.keys.concat(s.categoryIds.map(catId =>
        this.props.categories.find(c => c.id === catId).description.toLowerCase()));

      return siteObj;
    });
  }
  componentWillMount() {
    this.delayedSearch = debounce(e => this.getSearchKey(e), 250);
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
      for (const site of this.siteCache) {
        if (site.keys.includes(tag)) results.push(site);
      }
    }
    this.setState({
      results,
    });
  }


  render() {
    return (
      <div>
        <SearchInput searchKey={this.onKeyPress} />
        <SearchResult results={this.state.results} />
      </div>);
  }
}

SearchContainer.propTypes = {
  sites: React.PropTypes.array.isRequired,
  categories: React.PropTypes.array.isRequired,
};

export default SearchContainer;
