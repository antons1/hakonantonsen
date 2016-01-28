"use strict";

const Webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./../webpack.config");
const path = require("path");
const fs = require("fs");

const mainPath = path.resolve(__dirname, "..", "app", "main.js");

module.exports = function() {
    let bundleStart = null;
    const compiler = Webpack(webpackConfig);
    
    compiler.plugin("compile", function() {
        console.log("Bundling...");
        bundleStart = Date.now();
    });
    
    compiler.plugin("done", function() {
        console.log("Bundled in", (Date.now() - bundleStart), "ms");
    })
    
    compiler.compile(function(empt, comp) {
        
    });
    
};