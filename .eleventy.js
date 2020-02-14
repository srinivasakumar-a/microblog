const rssPlugin = require('@11ty/eleventy-plugin-rss');

// Import filters
const cssminFilter = require('./src/filters/cssmin-filter.js');
const dateFilter = require('./src/filters/date-filter.js');
const limitFilter = require('./src/filters/limit-filter.js');
const markdownFilter = require('./src/filters/markdown-filter.js');
const w3DateFilter = require('./src/filters/w3-date-filter.js');

module.exports = function(config) {
  // Filters
  config.addFilter('cssminFilter', cssminFilter);
  config.addFilter('dateFilter', dateFilter);
  config.addFilter('limitFilter', limitFilter);
  config.addFilter('markdownFilter', markdownFilter);
  config.addFilter('w3DateFilter', w3DateFilter);

  // Plugins
  config.addPlugin(rssPlugin);

  // Pass through
  config.addPassthroughCopy('src/_redirects');
  config.addPassthroughCopy('src/images');
  config.addPassthroughCopy('src/fonts');

  // Add custom collection for items
  config.addCollection('items', collection => {
    return collection
      .getFilteredByGlob('src/posts/*.md')
      .sort((a, b) => Number(a.data.title) - Number(b.data.title));
  });

  return {
    dir: {
      input: 'src',
      output: 'dist'
    },
    passthroughFileCopy: true
  };
};
