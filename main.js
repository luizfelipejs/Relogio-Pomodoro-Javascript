/******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/index */ \"./src/modules/index.js\");\n\nvar clockscreen = document.getElementById(\"interface-pomodoro\");\nvar buttonSubmit = document.getElementById(\"submit\");\nvar hourSet = {\n  minutes: 0,\n  seconds: 0\n};\n\nvar subtractSecondsFunction = function subtractSecondsFunction() {\n  return Object(_modules_index__WEBPACK_IMPORTED_MODULE_0__[\"subtractSeconds\"])(hourSet);\n};\n\nvar ClockMinutesFunction = function ClockMinutesFunction() {\n  return Object(_modules_index__WEBPACK_IMPORTED_MODULE_0__[\"ClockMinutes\"])(hourSet);\n};\n\nvar RenderFunction = function RenderFunction() {\n  return Object(_modules_index__WEBPACK_IMPORTED_MODULE_0__[\"Render\"])(clockscreen, hourSet);\n};\n\nvar Change = true;\nvar minutes = setInterval(ClockMinutesFunction, 60000);\nvar seconds = setInterval(subtractSecondsFunction, 1000);\nRenderFunction();\nbuttonSubmit.addEventListener(\"click\", function () {\n  if (hourSet.minutes == 0 & Change == true) {\n    hourSet.minutes = 25;\n    RenderFunction();\n    ClockMinutesFunction();\n    subtractSecondsFunction();\n    buttonSubmit.innerText = \"Parar Relogio\";\n  } else {\n    // Loop \n    if (Change == true) {\n      Change = false;\n      clearInterval(minutes);\n      clearInterval(seconds);\n      buttonSubmit.innerText = \"Iniciar Relogio\";\n    } else if (Change == false) {\n      Change = true;\n      minutes = setInterval(ClockMinutesFunction, 60000);\n      seconds = setInterval(subtractSecondsFunction, 1000);\n    }\n  }\n});\nsetInterval(RenderFunction, 1000);\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! exports provided: ClockMinutes, subtractSeconds, Render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ClockMinutes\", function() { return ClockMinutes; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"subtractSeconds\", function() { return subtractSeconds; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Render\", function() { return Render; });\nvar ClockMinutes = function ClockMinutes(hourSet) {\n  // A cada minuto que acaba se ganha 60 segundos \n  if (hourSet.minutes > 0) {\n    hourSet.minutes -= 1;\n    hourSet.seconds += 60;\n  }\n};\nvar subtractSeconds = function subtractSeconds(hourSet) {\n  // Tira os segundos\n  if (hourSet.seconds > 0) {\n    hourSet.seconds -= 1;\n  }\n\n  console.log(\"\".concat(hourSet.minutes, \":\").concat(hourSet.seconds));\n};\nvar Render = function Render(HtmlElement, hourSet) {\n  HtmlElement.innerText = \"\".concat(hourSet.minutes, \":\").concat(hourSet.seconds);\n};\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ })

/******/ });