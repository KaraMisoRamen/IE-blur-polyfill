var path = require('path');

module.exports = {
  //...
  devServer: {
    contentBase: path.join(__dirname, 'test'),
    port: 8080
  }
};
