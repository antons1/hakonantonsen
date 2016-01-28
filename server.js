"use strict";

const express = require("express");
const path = require("path");
const httpProxy = require("http-proxy");

const app = express();

const isProduction = process.env.NODE_ENV === "production";
const port = isProduction ? process.env.PORT : 4000;
const publicPath = path.resolve(__dirname, "public");

app.use(express.static(publicPath));

/*if (!isProduction) {
    const bundle = require("./server/bundle");
    bundle();
    
}*/

app.listen(port, function() {
    console.log("Hakonantonsen.no running on port", port);
});