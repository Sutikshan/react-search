const data = {};
data.sites = [{
  id: 1,
  siteName: 'SurferMag',
  siteUrl: 'www.surfermag.com',
  description: 'This is the description for SurferMag',
  categoryIds: [2],
},
{
  id: 2,
  siteName: 'Ebay',
  siteUrl: 'www.ebay.com.au',
  description: 'This is the description for ebay',
  categoryIds: [1],
},
{
  id: 3,
  siteName: 'Robs UI Tips',
  siteUrl: 'www.awesomeui.com.au',
  description: 'This is the description for the best site in the world. It is the best:)',
  categoryIds: [4, 3],
},
{
  id: 4,
  siteName: 'Table Tennis Tips - How to not come runners up',
  siteUrl: 'www.ttt.com',
  description: 'This is the description for Table Tennis Tips',
  categoryIds: [1, 2, 3, 4],
}];

data.categories = [{
  id: 1,
  description: 'Arts & Entertainment',
},
{
  id: 2,
  description: 'Automotive',
},
{
  id: 3,
  description: 'Business',
},
{
  id: 4,
  description: 'Careers',
},
];

data.company = {
  name: 'Adslot',
  logo: 'logo.png',
  links: {
    '&copy;2012 Adslot': 'https://www.adslot.com/',
    'Adslot Publisher': 'http://www.adslot.com/directsales/',
    'Adslot Create': 'https://create.adslot.com/',
    Terms: 'https://media.adslot.com/terms',
    'Privacy Policy': 'https://www.adslot.com/privacy-policy/',
    'Payment Policy': 'https://publisher.adslot.com/payment-terms',
  },
};

export default data;