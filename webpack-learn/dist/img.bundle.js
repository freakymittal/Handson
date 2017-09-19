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
/******/ 	return __webpack_require__(__webpack_require__.s = 222);
/******/ })
/************************************************************************/
/******/ ({

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__code_png__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__code_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__code_png__);

const img = document.createElement('img')
img.src = __WEBPACK_IMPORTED_MODULE_0__code_png___default.a
img.style.backgroundColor = "#2B3A42"
img.style.padding = "20px"
img.width = 32
document.body.appendChild(img)

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAADRUlEQVR4nO2ZP0hVURzHDxIi4uggEdIUEiEhEiIiTiEhIiEhISTiIBIiDmIigoOIgzRINEhINESDQ5OIiEM0OERDQ0ODhENTRIiIyOPTcO/j/bvnz73nvPckfp/xvXu+3+/vnHvP/b3zlBIEQRAEQRAEQRCEawFwB9gHfgNfgIf1zlQzgBbgJ6VcAp3V8GuohqgnL5RS7WWfNSqlnlXD7FpNANCulJrXfN1Uyyx1AXiPnv97HwB6gZym+P16h2sAJoFdYAfoqoL+sab4K+Ceg0ZXnG03zhrm8Y7DbSfsyn1BDCKPp4Zb/7XD+L44UzHb3pMAKGBLE+zQS7zg0Qycajz+AK0OGoea8VuAV7gNw8qcZlcu8VgxeOjeCOUaugkE2MgabNUgCnCQSbjU4yZwptH/ATQ66uxbsq6mDbZgEbwEejJVXerz1uAxkkKnh8o9oJwFV7FZh+KHMldd8OlG/9o7IuWzCww5TMKsTWTKInAFjPoUHvso4JPGIwfcz6g7Gmc0MaUbPI5+RfLBxr0qLw2q442ndvo6vGYufcAm4ETjcQa0BfBwv5OBfnyfnXThFg0+iwF9XPayfgUcWC502z3dQrUBfzU+J0DQX3yWyQY4UOhvR4DP+HRSlYHKW+pingQzKvipuAYdJwrYs8zSeqAwneg3p6ATXeS5bqltL/8+vrBcuOwZxNSv54AHoYou8ly21HQBdOcvHsS+ETr15ZowIwbdd8GqLvjNW2q5BAbLBw07TMJMhjCNRH19EufArWCVR34zDsUP6waPYW8iJlIGMq3GSoiii7wmHPKbN1tHkTHHQK1Ev+mTOAWag1SuAi8eMG0QgqiTGnDQeWXQCNJWxz4D2DvZ6bSicxbBI8v4u4ZQx4Q6s4u8jixZ57IKLxlEjSdCmA8pejMF0nuZToSWfMXXNMJ7hjGPDIE+eAVK9tM1c2shxBWwWSZ8Tr6JqLz+BvBdE+gCuO0dqtKzO85UzCahust4Eh4Tnbu/BDoM1z43rL7/iuh9O+JsO3HWalkZQ7QQ/aWdxC+gpfapaghRS61jst75qg7R4UoSXwn42ru2kLwB5oD+emerGUA78DHeC76R4nxfEARBEARBEARBEGrDP7DttgMlnWLMAAAAAElFTkSuQmCC"

/***/ })

/******/ });