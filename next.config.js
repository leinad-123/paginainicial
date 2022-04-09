const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const webpack = require("webpack")
const path = require("path");

module.exports = withPlugins([[withImages]], {
  webpack(config, options) {
    config.resolve.modules.push(path.resolve("./"));
    if (!config.resolve.plugins) {
      config.resolve.plugins = []
    }
    config.resolve.plugins.push(new TsconfigPathsPlugin())
    
    return config;
  },
  images: {
     domains: ["d33wubrfki0l68.cloudfront.net", "oddshero.io", "psweb.s3-eu-west-1.amazonaws.com"]
  }
});
