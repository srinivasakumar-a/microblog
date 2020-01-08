const moment = require('moment');

module.exports = function dateFilter(value) {
  const dateObject = moment.unix(Number(value));

  return `${dateObject.format('Do MMMM')} at ${dateObject.format('HH:mm')}`;
};
