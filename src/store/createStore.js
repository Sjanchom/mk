import config from '../system/configs';

if (config.isProduction) {
  module.exports = require('./configureStore.prod');
} else {
  module.exports = require('./configureStore.dev');
}
