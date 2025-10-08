/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (() => {

eval("\nvar Calculator = /** @class */ (function () {\n    function Calculator() {\n        this.currentInput = '';\n        this.previousInput = '';\n        this.operator = null;\n    }\n    Calculator.prototype.appendNumber = function (number) {\n        if (this.currentInput === '0' && number !== '.') {\n            this.currentInput = number;\n        }\n        else if (number === '.' && !this.currentInput.includes('.')) {\n            this.currentInput += number;\n        }\n        else {\n            this.currentInput += number;\n        }\n        this.updateDisplay();\n    };\n    Calculator.prototype.chooseOperator = function (operator) {\n        if (this.currentInput === '')\n            return;\n        if (this.previousInput !== '') {\n            this.compute();\n        }\n        this.operator = operator;\n        this.previousInput = this.currentInput;\n        this.currentInput = '';\n    };\n    Calculator.prototype.compute = function () {\n        var computation;\n        var prev = parseFloat(this.previousInput);\n        var current = parseFloat(this.currentInput);\n        if (isNaN(prev) || isNaN(current))\n            return;\n        switch (this.operator) {\n            case '+':\n                computation = prev + current;\n                break;\n            case '-':\n                computation = prev - current;\n                break;\n            case '*':\n                computation = prev * current;\n                break;\n            case '/':\n                computation = prev / current;\n                break;\n            default:\n                return;\n        }\n        this.currentInput = computation.toString();\n        this.operator = null;\n        this.previousInput = '';\n        this.updateDisplay();\n    };\n    Calculator.prototype.updateDisplay = function () {\n        var display = document.getElementById('display');\n        display.value = this.currentInput;\n    };\n    Calculator.prototype.clear = function () {\n        this.currentInput = '';\n        this.previousInput = '';\n        this.operator = null;\n        this.updateDisplay();\n    };\n    return Calculator;\n}());\nvar calculator = new Calculator();\ndocument.getElementById('buttons').addEventListener('click', function (event) {\n    var target = event.target;\n    if (target.classList.contains('number')) {\n        calculator.appendNumber(target.innerText);\n    }\n    else if (target.classList.contains('operator')) {\n        calculator.chooseOperator(target.innerText);\n    }\n    else if (target.classList.contains('equals')) {\n        calculator.compute();\n    }\n    else if (target.classList.contains('clear')) {\n        calculator.clear();\n    }\n});\n\n\n//# sourceURL=webpack://typescript-project/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.ts"]();
/******/ 	
/******/ })()
;