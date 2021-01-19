





const systemjsInterop = require("systemjs-webpack-interop");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
  path.join(__dirname, 'tsconfig.json'),
  [/* mapped paths to share */]);

module.exports = {
  entry: './src/main.single-spa.ts',
  
  output: {
    uniqueName: "navbar",
   // pathname:"dist",
    filename:"remote.js",
    libraryTarget: "system",
  },
 // mode: 'development',
  devtool: 'source-map',
 optimization: {
  // Only needed to bypass a temporary bug
  runtimeChunk: false
},
  module: {
    rules: [{ parser: { system: false } }]
  } ,
 
  plugins: [
    new ModuleFederationPlugin({
      
        // For remotes (please adjust)
        // name: "navbar",
        // filename: "remoteEntry.js",
        // exposes: {
        //     './Component': './/src/app/app.component.ts',
        // },        
        
        // For hosts (please adjust)
        // remotes: {
        //     "mfe1": "mfe1@http://localhost:3000/remoteEntry.js",

        // },

        shared: {
          "@angular/core": { singleton: true, strictVersion: true }, 
          "@angular/common": { singleton: true, strictVersion: true }, 
          "@angular/router": { singleton: true, strictVersion: true },

          ...sharedMappings.getDescriptors()
        }
        
    }),
    sharedMappings.getPlugin(),
  ],
};

//systemjsInterop.checkWebpackConfig(module.exports);