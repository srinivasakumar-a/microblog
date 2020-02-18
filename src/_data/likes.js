const axios = require('axios');
const parser = require('xml2json');

module.exports = async () => {
  const url = 'https://feedbin.com/starred/91894d3eb1e30664631b3d475c213f5e.xml';

  try {
    const {data} = await axios.get(url);
    const parsed = parser.toJson(data, {object: true});
    const items = parsed.rss.channel.item;
    let response = [];

    // Grab the items and smoosh them into something the front-end will like
    if (items.length) {
      response = items
        .map(item => ({
          title: item.title,
          url: item.link,
          publication: item['dc:creator']
        }))
        .reverse();
    }

    return response;
  } catch (ex) {
    console.log(ex);
    return [];
  }
};
