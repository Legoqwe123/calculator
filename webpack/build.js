const webpack = require("webpack");
const webpackConfig = require("./webpack.config");
const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
    if (err) {
      console.error(err.stack || err);
  
      if (err.details) {
        console.error(err.details);
      }
  
      return null;
    }
  
    const info = stats.toString({
      hash: true,
      colors: true,
      env: true,
      version: true,
      modules: false,
      entrypoints: false,
    });
  
    console.log("Build completed");
    console.log(info);
    
  
    if (stats.hasErrors()) {
      console.log("Error compiler");
    }
  
    if (stats.hasWarnings()) {
      console.log("Warning compiler");
    }
  });