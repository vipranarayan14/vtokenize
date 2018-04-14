(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["vTokenize"] = factory();
	else
		root["vTokenize"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var cannotSeek = function cannotSeek(seeked, maxSeek, inStr, i) {
  return seeked === maxSeek || i === inStr.length - 1;
};

var getTokenDetails = function getTokenDetails(tempCharDetails, foundIndex) {
  return foundIndex > -1 ? {

    foundIndex: foundIndex,
    token: tempCharDetails[foundIndex]

  } : {

    foundIndex: 0,
    token: tempCharDetails[0]

  };
};

var isTokenFound = function isTokenFound(sliceDetails) {
  return sliceDetails.type !== 'unknown' ? true : false;
};

var vTokenize = exports.vTokenize = function vTokenize(str, maxTokenLength, getSliceDetails) {

  var inStr = str.slice(0, str.length);
  var maxSeek = maxTokenLength;

  var tokens = [];

  var seeked = 0,
      strSlice = '',
      tempSliceDetails = [],
      tokenFound = [];

  for (var i = 0, l = inStr.length; i < l; i += 1) {

    seeked += 1;

    strSlice += inStr[i];

    var sliceDetails = getSliceDetails(strSlice);

    tempSliceDetails.push(sliceDetails);

    tokenFound.push(isTokenFound(sliceDetails));

    if (cannotSeek(seeked, maxSeek, inStr, i)) {

      var foundIndex = tokenFound.lastIndexOf(true);

      var tokenDetails = getTokenDetails(tempSliceDetails, foundIndex);

      foundIndex = tokenDetails.foundIndex;

      tokens.push(tokenDetails.token);

      // resetting the 'i' to pick the next untokenized char.
      i -= seeked - 1 - foundIndex;

      // reset variables
      seeked = 0;
      strSlice = '';
      tempSliceDetails = [];
      tokenFound = [];
    }
  }

  return tokens;
};

/***/ })
/******/ ]);
});