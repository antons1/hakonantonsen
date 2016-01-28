"use strict";

const Webpack = require("webpack");
const path = require("path");

const nodeModulesPath = path.resolve(__dirname, "node_modules");
const buildPath = path.resolve(__dirname, "public", "build");
const mainPath = path.resolve(__dirname, "app", "main.js");

module.exports = {
    devtool: "eval",
    entry: [
        mainPath
    ],
    output: {
        path: buildPath,
        filename: "bundle.js",
        publicPath: "/build/"
    },
    devServer: {
        inline: true,
        port: 4000
    },
    resolve: {
        extensions: [
            "",
            ".js",
            ".jsx"
        ]
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: [nodeModulesPath],
                query: {
                    presets: ["react", "es2015"]
                }
            },
            {
                test: /\.css$/,
                loader: "style!css"
            }
        ]
    }
};
