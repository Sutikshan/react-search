import data from './data';

it('initializes the sitesCache', () => {
  data.sites = [{
    id: 1,
    siteName: 'SurferMag',
    siteUrl: 'www.surfermag.com',
    description: 'This is the description for SurferMag',
    categoryIds: [1],
  }];
  data.categories = [{
    id: 1,
    description: 'Arts & Entertainment',
  }];
  data.init();
  expect(data.sitesCache[0].keys).toEqual(['surfermag', 'arts & entertainment']);
});
