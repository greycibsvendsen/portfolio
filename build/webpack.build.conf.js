/* Build config:
   ========================================================================== */


const webpack = require("webpack");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.conf");

const buildWebpackConfig = merge(baseWebpackConfig, {
  mode: "production",
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
});

module.exports = new Promise((resolve, reject) => {
  resolve(buildWebpackConfig);
});
