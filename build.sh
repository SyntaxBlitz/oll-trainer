#!/bin/sh
#./node-modules/.bin/babel js-src -d js-babel
#./node-modules/.bin/browserify js-babel > js/index.bundle.js
babel js-src -d js-babel
#browserify js-babel/svg.js > js/svg.bundle.js
