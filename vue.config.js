const BundleTracker = require("webpack-bundle-tracker");
const path = require('path');


module.exports = {
  

  runtimeCompiler: true,
  // on Windows you might want to set publicPath: "http://127.0.0.1:8080/"
  publicPath: '/staticfiles/src/vue/dist/',
  outputDir: path.resolve(__dirname, '../staticfiles/src/vue/dist/'), // Output to a directory in STATICFILES_DIRS
  filenameHashing: false, // Django will hash file names, not webpack
  runtimeCompiler: true, // See: https://vuejs.org/v2/guide/installation.html#Runtime-Compiler-vs-Runtime-only
  devServer: {
    writeToDisk: true, // Write files to disk in dev mode, so Django can serve the assets
  },



  chainWebpack: (config) => {
    config
      .plugin("BundleTracker")
      .use(BundleTracker, [{ filename: "./webpack-stats.json" }]);

    config.output.filename("bundle.js");

    config.optimization.splitChunks(false);

    config.resolve.alias.set("__STATIC__", "static");

    config.devServer
      // the first 3 lines of the following code have been added to the configuration
      .public("http://127.0.0.1:8080")
      .host("127.0.0.1")
      .port(8080)
      .hotOnly(true)
      .watchOptions({ poll: 1000 })
      .https(false)
      .disableHostCheck(true)
      //.headers({ "Access-Control-Allow-Origin": ["*"] });
  }

  // uncomment before executing 'npm run build'
  // css: {
  //     extract: {
  //       filename: 'bundle.css',
  //       chunkFilename: 'bundle.css',
  //     },
  // }
};