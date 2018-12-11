
/**
 * kinvey-nativescript-sdk - Kinvey NativeScript SDK for developing NativeScript applications.
 * @version 4.0.0
 * @author Kinvey, Inc.
 * @license Apache-2.0
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("nativescript-sqlite"), require("tns-core-modules/http"));
	else if(typeof define === 'function' && define.amd)
		define(["nativescript-sqlite", "tns-core-modules/http"], factory);
	else if(typeof exports === 'object')
		exports["Kinvey"] = factory(require("nativescript-sqlite"), require("tns-core-modules/http"));
	else
		root["Kinvey"] = factory(root["nativescript-sqlite"], root["tns-core-modules/http"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_nativescript_sqlite__, __WEBPACK_EXTERNAL_MODULE_tns_core_modules_http__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/@babel/runtime/helpers/arrayWithHoles.js":
/*!**************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/arrayWithHoles.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

module.exports = _arrayWithHoles;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!****************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

module.exports = _asyncToGenerator;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!**************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/construct.js":
/*!*********************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/construct.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/createClass.js":
/*!***********************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/createClass.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/defineProperty.js":
/*!**************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/get.js":
/*!***************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/get.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var superPropBase = __webpack_require__(/*! ./superPropBase */ "../../node_modules/@babel/runtime/helpers/superPropBase.js");

function _get(target, property, receiver) {
  if (typeof Reflect !== "undefined" && Reflect.get) {
    module.exports = _get = Reflect.get;
  } else {
    module.exports = _get = function _get(target, property, receiver) {
      var base = superPropBase(target, property);
      if (!base) return;
      var desc = Object.getOwnPropertyDescriptor(base, property);

      if (desc.get) {
        return desc.get.call(receiver);
      }

      return desc.value;
    };
  }

  return _get(target, property, receiver || target);
}

module.exports = _get;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!**************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/inherits.js":
/*!********************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/inherits.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!*********************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!**********************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj.default = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/isNativeFunction.js":
/*!****************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js":
/*!********************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/iterableToArrayLimit.js ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

module.exports = _iterableToArrayLimit;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/nonIterableRest.js":
/*!***************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/nonIterableRest.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

module.exports = _nonIterableRest;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "../../node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!**************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/slicedToArray.js":
/*!*************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/slicedToArray.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayWithHoles = __webpack_require__(/*! ./arrayWithHoles */ "../../node_modules/@babel/runtime/helpers/arrayWithHoles.js");

var iterableToArrayLimit = __webpack_require__(/*! ./iterableToArrayLimit */ "../../node_modules/@babel/runtime/helpers/iterableToArrayLimit.js");

var nonIterableRest = __webpack_require__(/*! ./nonIterableRest */ "../../node_modules/@babel/runtime/helpers/nonIterableRest.js");

function _slicedToArray(arr, i) {
  return arrayWithHoles(arr) || iterableToArrayLimit(arr, i) || nonIterableRest();
}

module.exports = _slicedToArray;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/superPropBase.js":
/*!*************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/superPropBase.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _superPropBase(object, property) {
  while (!Object.prototype.hasOwnProperty.call(object, property)) {
    object = getPrototypeOf(object);
    if (object === null) break;
  }

  return object;
}

module.exports = _superPropBase;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/typeof.js":
/*!******************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/typeof.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "../../node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
/*!***************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "../../node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeFunction = __webpack_require__(/*! ./isNativeFunction */ "../../node_modules/@babel/runtime/helpers/isNativeFunction.js");

var construct = __webpack_require__(/*! ./construct */ "../../node_modules/@babel/runtime/helpers/construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),

/***/ "../../node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js":
/*!***************************************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ "../../node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js");

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),

/***/ "../../node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js":
/*!********************************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime.js ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),

/***/ "../../node_modules/@babel/runtime/regenerator/index.js":
/*!*********************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/@babel/runtime/regenerator/index.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "../../node_modules/@babel/runtime/node_modules/regenerator-runtime/runtime-module.js");


/***/ }),

/***/ "../../node_modules/js-base64/base64.js":
/*!*****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/js-base64/base64.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;(function (global, factory) {
     true
        ? module.exports = factory(global)
        : undefined
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
: this
), function(global) {
    'use strict';
    // existing version for noConflict()
    var _Base64 = global.Base64;
    var version = "2.4.9";
    // if node.js and NOT React Native, we use Buffer
    var buffer;
    if (typeof module !== 'undefined' && module.exports) {
        try {
            buffer = eval("require('buffer').Buffer");
        } catch (err) {
            buffer = undefined;
        }
    }
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                   + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                   + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa ? function(b) {
        return global.btoa(b);
    } : function(b) {
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function (u) {
            return (u.constructor === buffer.constructor ? u : buffer.from(u))
                .toString('base64')
        }
        :  function (u) {
            return (u.constructor === buffer.constructor ? u : new  buffer(u))
                .toString('base64')
        }
        : function (u) { return btoa(utob(u)) }
    ;
    var encode = function(u, urisafe) {
        return !urisafe
            ? _encode(String(u))
            : _encode(String(u)).replace(/[+\/]/g, function(m0) {
                return m0 == '+' ? '-' : '_';
            }).replace(/=/g, '');
    };
    var encodeURI = function(u) { return encode(u, true) };
    // decoder stuff
    var re_btou = new RegExp([
        '[\xC0-\xDF][\x80-\xBF]',
        '[\xE0-\xEF][\x80-\xBF]{2}',
        '[\xF0-\xF7][\x80-\xBF]{3}'
    ].join('|'), 'g');
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var atob = global.atob ? function(a) {
        return global.atob(a);
    } : function(a){
        return a.replace(/[\s\S]{1,4}/g, cb_decode);
    };
    var _decode = buffer ?
        buffer.from && Uint8Array && buffer.from !== Uint8Array.from
        ? function(a) {
            return (a.constructor === buffer.constructor
                    ? a : buffer.from(a, 'base64')).toString();
        }
        : function(a) {
            return (a.constructor === buffer.constructor
                    ? a : new buffer(a, 'base64')).toString();
        }
        : function(a) { return btou(atob(a)) };
    var decode = function(a){
        return _decode(
            String(a).replace(/[-_]/g, function(m0) { return m0 == '-' ? '+' : '/' })
                .replace(/[^A-Za-z0-9\+\/]/g, '')
        );
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        __buffer__: buffer
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if (typeof module !== 'undefined' && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){ return global.Base64 }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // that's it!
    return {Base64: global.Base64}
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../sdks/kinvey-html5-sdk/node_modules/webpack/buildin/global.js */ "../kinvey-html5-sdk/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/lodash/_DataView.js":
/*!*****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_DataView.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ "../../node_modules/lodash/_Map.js":
/*!************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_Map.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ "../../node_modules/lodash/_Promise.js":
/*!****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_Promise.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ "../../node_modules/lodash/_Set.js":
/*!************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_Set.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ "../../node_modules/lodash/_Symbol.js":
/*!***************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_Symbol.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ "../../node_modules/lodash/_WeakMap.js":
/*!****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_WeakMap.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(/*! ./_getNative */ "../../node_modules/lodash/_getNative.js"),
    root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ "../../node_modules/lodash/_baseGetTag.js":
/*!*******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_baseGetTag.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js"),
    getRawTag = __webpack_require__(/*! ./_getRawTag */ "../../node_modules/lodash/_getRawTag.js"),
    objectToString = __webpack_require__(/*! ./_objectToString */ "../../node_modules/lodash/_objectToString.js");

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ "../../node_modules/lodash/_baseIsArguments.js":
/*!************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_baseIsArguments.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ "../../node_modules/lodash/_baseIsNative.js":
/*!*********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_baseIsNative.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../node_modules/lodash/isFunction.js"),
    isMasked = __webpack_require__(/*! ./_isMasked */ "../../node_modules/lodash/_isMasked.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../../node_modules/lodash/_toSource.js");

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ "../../node_modules/lodash/_baseIsTypedArray.js":
/*!*************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_baseIsTypedArray.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../node_modules/lodash/isLength.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ "../../node_modules/lodash/_baseKeys.js":
/*!*****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_baseKeys.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../node_modules/lodash/_isPrototype.js"),
    nativeKeys = __webpack_require__(/*! ./_nativeKeys */ "../../node_modules/lodash/_nativeKeys.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ "../../node_modules/lodash/_baseUnary.js":
/*!******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_baseUnary.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ "../../node_modules/lodash/_coreJsData.js":
/*!*******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_coreJsData.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js");

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ "../../node_modules/lodash/_freeGlobal.js":
/*!*******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_freeGlobal.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../sdks/kinvey-html5-sdk/node_modules/webpack/buildin/global.js */ "../kinvey-html5-sdk/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/lodash/_getNative.js":
/*!******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_getNative.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(/*! ./_baseIsNative */ "../../node_modules/lodash/_baseIsNative.js"),
    getValue = __webpack_require__(/*! ./_getValue */ "../../node_modules/lodash/_getValue.js");

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ "../../node_modules/lodash/_getPrototype.js":
/*!*********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_getPrototype.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "../../node_modules/lodash/_overArg.js");

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ "../../node_modules/lodash/_getRawTag.js":
/*!******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_getRawTag.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(/*! ./_Symbol */ "../../node_modules/lodash/_Symbol.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ "../../node_modules/lodash/_getTag.js":
/*!***************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_getTag.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(/*! ./_DataView */ "../../node_modules/lodash/_DataView.js"),
    Map = __webpack_require__(/*! ./_Map */ "../../node_modules/lodash/_Map.js"),
    Promise = __webpack_require__(/*! ./_Promise */ "../../node_modules/lodash/_Promise.js"),
    Set = __webpack_require__(/*! ./_Set */ "../../node_modules/lodash/_Set.js"),
    WeakMap = __webpack_require__(/*! ./_WeakMap */ "../../node_modules/lodash/_WeakMap.js"),
    baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    toSource = __webpack_require__(/*! ./_toSource */ "../../node_modules/lodash/_toSource.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ "../../node_modules/lodash/_getValue.js":
/*!*****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_getValue.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ "../../node_modules/lodash/_isMasked.js":
/*!*****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_isMasked.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(/*! ./_coreJsData */ "../../node_modules/lodash/_coreJsData.js");

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ "../../node_modules/lodash/_isPrototype.js":
/*!********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_isPrototype.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ "../../node_modules/lodash/_nativeKeys.js":
/*!*******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_nativeKeys.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(/*! ./_overArg */ "../../node_modules/lodash/_overArg.js");

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ "../../node_modules/lodash/_nodeUtil.js":
/*!*****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_nodeUtil.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../sdks/kinvey-html5-sdk/node_modules/webpack/buildin/module.js */ "../kinvey-html5-sdk/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/lodash/_objectToString.js":
/*!***********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_objectToString.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ "../../node_modules/lodash/_overArg.js":
/*!****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_overArg.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ "../../node_modules/lodash/_root.js":
/*!*************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_root.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(/*! ./_freeGlobal */ "../../node_modules/lodash/_freeGlobal.js");

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ "../../node_modules/lodash/_toSource.js":
/*!*****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/_toSource.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ "../../node_modules/lodash/isArguments.js":
/*!*******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/isArguments.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(/*! ./_baseIsArguments */ "../../node_modules/lodash/_baseIsArguments.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ "../../node_modules/lodash/isArray.js":
/*!***************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/isArray.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ "../../node_modules/lodash/isArrayLike.js":
/*!*******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/isArrayLike.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(/*! ./isFunction */ "../../node_modules/lodash/isFunction.js"),
    isLength = __webpack_require__(/*! ./isLength */ "../../node_modules/lodash/isLength.js");

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ "../../node_modules/lodash/isBuffer.js":
/*!****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/isBuffer.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(/*! ./_root */ "../../node_modules/lodash/_root.js"),
    stubFalse = __webpack_require__(/*! ./stubFalse */ "../../node_modules/lodash/stubFalse.js");

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../sdks/kinvey-html5-sdk/node_modules/webpack/buildin/module.js */ "../kinvey-html5-sdk/node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "../../node_modules/lodash/isEmpty.js":
/*!***************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/isEmpty.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseKeys = __webpack_require__(/*! ./_baseKeys */ "../../node_modules/lodash/_baseKeys.js"),
    getTag = __webpack_require__(/*! ./_getTag */ "../../node_modules/lodash/_getTag.js"),
    isArguments = __webpack_require__(/*! ./isArguments */ "../../node_modules/lodash/isArguments.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    isArrayLike = __webpack_require__(/*! ./isArrayLike */ "../../node_modules/lodash/isArrayLike.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "../../node_modules/lodash/isBuffer.js"),
    isPrototype = __webpack_require__(/*! ./_isPrototype */ "../../node_modules/lodash/_isPrototype.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "../../node_modules/lodash/isTypedArray.js");

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    setTag = '[object Set]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if `value` is an empty object, collection, map, or set.
 *
 * Objects are considered empty if they have no own enumerable string keyed
 * properties.
 *
 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
 * jQuery-like collections are considered empty if they have a `length` of `0`.
 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
 * @example
 *
 * _.isEmpty(null);
 * // => true
 *
 * _.isEmpty(true);
 * // => true
 *
 * _.isEmpty(1);
 * // => true
 *
 * _.isEmpty([1, 2, 3]);
 * // => false
 *
 * _.isEmpty({ 'a': 1 });
 * // => false
 */
function isEmpty(value) {
  if (value == null) {
    return true;
  }
  if (isArrayLike(value) &&
      (isArray(value) || typeof value == 'string' || typeof value.splice == 'function' ||
        isBuffer(value) || isTypedArray(value) || isArguments(value))) {
    return !value.length;
  }
  var tag = getTag(value);
  if (tag == mapTag || tag == setTag) {
    return !value.size;
  }
  if (isPrototype(value)) {
    return !baseKeys(value).length;
  }
  for (var key in value) {
    if (hasOwnProperty.call(value, key)) {
      return false;
    }
  }
  return true;
}

module.exports = isEmpty;


/***/ }),

/***/ "../../node_modules/lodash/isFunction.js":
/*!******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/isFunction.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObject = __webpack_require__(/*! ./isObject */ "../../node_modules/lodash/isObject.js");

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ "../../node_modules/lodash/isLength.js":
/*!****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/isLength.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ "../../node_modules/lodash/isNumber.js":
/*!****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/isNumber.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    (isObjectLike(value) && baseGetTag(value) == numberTag);
}

module.exports = isNumber;


/***/ }),

/***/ "../../node_modules/lodash/isObject.js":
/*!****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/isObject.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ "../../node_modules/lodash/isObjectLike.js":
/*!********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/isObjectLike.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ "../../node_modules/lodash/isPlainObject.js":
/*!*********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/isPlainObject.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "../../node_modules/lodash/_getPrototype.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ "../../node_modules/lodash/isString.js":
/*!****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/isString.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(/*! ./_baseGetTag */ "../../node_modules/lodash/_baseGetTag.js"),
    isArray = __webpack_require__(/*! ./isArray */ "../../node_modules/lodash/isArray.js"),
    isObjectLike = __webpack_require__(/*! ./isObjectLike */ "../../node_modules/lodash/isObjectLike.js");

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ "../../node_modules/lodash/isTypedArray.js":
/*!********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/isTypedArray.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(/*! ./_baseIsTypedArray */ "../../node_modules/lodash/_baseIsTypedArray.js"),
    baseUnary = __webpack_require__(/*! ./_baseUnary */ "../../node_modules/lodash/_baseUnary.js"),
    nodeUtil = __webpack_require__(/*! ./_nodeUtil */ "../../node_modules/lodash/_nodeUtil.js");

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ "../../node_modules/lodash/stubFalse.js":
/*!*****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/lodash/stubFalse.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ "../../node_modules/p-queue/index.js":
/*!**************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/p-queue/index.js ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// Port of lower_bound from http://en.cppreference.com/w/cpp/algorithm/lower_bound
// Used to compute insertion index to keep queue sorted after insertion
function lowerBound(array, value, comp) {
	let first = 0;
	let count = array.length;

	while (count > 0) {
		const step = (count / 2) | 0;
		let it = first + step;

		if (comp(array[it], value) <= 0) {
			first = ++it;
			count -= step + 1;
		} else {
			count = step;
		}
	}

	return first;
}

class PriorityQueue {
	constructor() {
		this._queue = [];
	}

	enqueue(run, options) {
		options = Object.assign({
			priority: 0
		}, options);

		const element = {priority: options.priority, run};

		if (this.size && this._queue[this.size - 1].priority >= options.priority) {
			this._queue.push(element);
			return;
		}

		const index = lowerBound(this._queue, element, (a, b) => b.priority - a.priority);
		this._queue.splice(index, 0, element);
	}

	dequeue() {
		return this._queue.shift().run;
	}

	get size() {
		return this._queue.length;
	}
}

class PQueue {
	constructor(options) {
		options = Object.assign({
			carryoverConcurrencyCount: false,
			intervalCap: Infinity,
			interval: 0,
			concurrency: Infinity,
			autoStart: true,
			queueClass: PriorityQueue
		}, options);

		if (!(typeof options.concurrency === 'number' && options.concurrency >= 1)) {
			throw new TypeError(`Expected \`concurrency\` to be a number from 1 and up, got \`${options.concurrency}\` (${typeof options.concurrency})`);
		}

		if (!(typeof options.intervalCap === 'number' && options.intervalCap >= 1)) {
			throw new TypeError(`Expected \`intervalCap\` to be a number from 1 and up, got \`${options.intervalCap}\` (${typeof options.intervalCap})`);
		}

		if (!(typeof options.interval === 'number' && Number.isFinite(options.interval) && options.interval >= 0)) {
			throw new TypeError(`Expected \`interval\` to be a finite number >= 0, got \`${options.interval}\` (${typeof options.interval})`);
		}

		this._carryoverConcurrencyCount = options.carryoverConcurrencyCount;
		this._isIntervalIgnored = options.intervalCap === Infinity || options.interval === 0;
		this._intervalCount = 0;
		this._intervalCap = options.intervalCap;
		this._interval = options.interval;
		this._intervalId = null;
		this._intervalEnd = 0;
		this._timeoutId = null;

		this.queue = new options.queueClass(); // eslint-disable-line new-cap
		this._queueClass = options.queueClass;
		this._pendingCount = 0;
		this._concurrency = options.concurrency;
		this._isPaused = options.autoStart === false;
		this._resolveEmpty = () => {};
		this._resolveIdle = () => {};
	}

	get _doesIntervalAllowAnother() {
		return this._isIntervalIgnored || this._intervalCount < this._intervalCap;
	}

	get _doesConcurrentAllowAnother() {
		return this._pendingCount < this._concurrency;
	}

	_next() {
		this._pendingCount--;
		this._tryToStartAnother();
	}

	_resolvePromises() {
		this._resolveEmpty();
		this._resolveEmpty = () => {};

		if (this._pendingCount === 0) {
			this._resolveIdle();
			this._resolveIdle = () => {};
		}
	}

	_onResumeInterval() {
		this._onInterval();
		this._initializeIntervalIfNeeded();
		this._timeoutId = null;
	}

	_intervalPaused() {
		const now = Date.now();

		if (this._intervalId === null) {
			const delay = this._intervalEnd - now;
			if (delay < 0) {
				// Act as the interval was done
				// We don't need to resume it here,
				// because it'll be resumed on line 160
				this._intervalCount = (this._carryoverConcurrencyCount) ? this._pendingCount : 0;
			} else {
				// Act as the interval is pending
				if (this._timeoutId === null) {
					this._timeoutId = setTimeout(() => this._onResumeInterval(), delay);
				}

				return true;
			}
		}

		return false;
	}

	_tryToStartAnother() {
		if (this.queue.size === 0) {
			// We can clear the interval ("pause")
			// because we can redo it later ("resume")
			clearInterval(this._intervalId);
			this._intervalId = null;

			this._resolvePromises();

			return false;
		}

		if (!this._isPaused) {
			const canInitializeInterval = !this._intervalPaused();
			if (this._doesIntervalAllowAnother && this._doesConcurrentAllowAnother) {
				this.queue.dequeue()();
				if (canInitializeInterval) {
					this._initializeIntervalIfNeeded();
				}

				return true;
			}
		}

		return false;
	}

	_initializeIntervalIfNeeded() {
		if (this._isIntervalIgnored || this._intervalId !== null) {
			return;
		}

		this._intervalId = setInterval(() => this._onInterval(), this._interval);
		this._intervalEnd = Date.now() + this._interval;
	}

	_onInterval() {
		if (this._intervalCount === 0 && this._pendingCount === 0) {
			clearInterval(this._intervalId);
			this._intervalId = null;
		}

		this._intervalCount = (this._carryoverConcurrencyCount) ? this._pendingCount : 0;
		while (this._tryToStartAnother()) {} // eslint-disable-line no-empty
	}

	add(fn, options) {
		return new Promise((resolve, reject) => {
			const run = () => {
				this._pendingCount++;
				this._intervalCount++;

				try {
					Promise.resolve(fn()).then(
						val => {
							resolve(val);
							this._next();
						},
						err => {
							reject(err);
							this._next();
						}
					);
				} catch (err) {
					reject(err);
					this._next();
				}
			};

			this.queue.enqueue(run, options);
			this._tryToStartAnother();
		});
	}

	addAll(fns, options) {
		return Promise.all(fns.map(fn => this.add(fn, options)));
	}

	start() {
		if (!this._isPaused) {
			return;
		}

		this._isPaused = false;
		while (this._tryToStartAnother()) {} // eslint-disable-line no-empty
	}

	pause() {
		this._isPaused = true;
	}

	clear() {
		this.queue = new this._queueClass(); // eslint-disable-line new-cap
	}

	onEmpty() {
		// Instantly resolve if the queue is empty
		if (this.queue.size === 0) {
			return Promise.resolve();
		}

		return new Promise(resolve => {
			const existingResolve = this._resolveEmpty;
			this._resolveEmpty = () => {
				existingResolve();
				resolve();
			};
		});
	}

	onIdle() {
		// Instantly resolve if none pending and if nothing else is queued
		if (this._pendingCount === 0 && this.queue.size === 0) {
			return Promise.resolve();
		}

		return new Promise(resolve => {
			const existingResolve = this._resolveIdle;
			this._resolveIdle = () => {
				existingResolve();
				resolve();
			};
		});
	}

	get size() {
		return this.queue.size;
	}

	get pending() {
		return this._pendingCount;
	}

	get isPaused() {
		return this._isPaused;
	}
}

module.exports = PQueue;


/***/ }),

/***/ "../../node_modules/promise-queue/index.js":
/*!********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/promise-queue/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./lib */ "../../node_modules/promise-queue/lib/index.js");


/***/ }),

/***/ "../../node_modules/promise-queue/lib/index.js":
/*!************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/promise-queue/lib/index.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;/* global define, Promise */
(function (root, factory) {
    'use strict';
    if (typeof module === 'object' && module.exports && "function" === 'function') {
        // CommonJS
        module.exports = factory();
    } else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}
})
(this, function () {
    'use strict';

    /**
     * @return {Object}
     */
    var LocalPromise = typeof Promise !== 'undefined' ? Promise : function () {
        return {
            then: function () {
                throw new Error('Queue.configure() before use Queue');
            }
        };
    };

    var noop = function () {};

    /**
     * @param {*} value
     * @returns {LocalPromise}
     */
    var resolveWith = function (value) {
        if (value && typeof value.then === 'function') {
            return value;
        }

        return new LocalPromise(function (resolve) {
            resolve(value);
        });
    };

    /**
     * It limits concurrently executed promises
     *
     * @param {Number} [maxPendingPromises=Infinity] max number of concurrently executed promises
     * @param {Number} [maxQueuedPromises=Infinity]  max number of queued promises
     * @constructor
     *
     * @example
     *
     * var queue = new Queue(1);
     *
     * queue.add(function () {
     *     // resolve of this promise will resume next request
     *     return downloadTarballFromGithub(url, file);
     * })
     * .then(function (file) {
     *     doStuffWith(file);
     * });
     *
     * queue.add(function () {
     *     return downloadTarballFromGithub(url, file);
     * })
     * // This request will be paused
     * .then(function (file) {
     *     doStuffWith(file);
     * });
     */
    function Queue(maxPendingPromises, maxQueuedPromises, options) {
        this.options = options = options || {};
        this.pendingPromises = 0;
        this.maxPendingPromises = typeof maxPendingPromises !== 'undefined' ? maxPendingPromises : Infinity;
        this.maxQueuedPromises = typeof maxQueuedPromises !== 'undefined' ? maxQueuedPromises : Infinity;
        this.queue = [];
        this.paused = false;
    }

    /**
     * Defines promise promiseFactory
     * @param {Function} GlobalPromise
     */
    Queue.configure = function (GlobalPromise) {
        LocalPromise = GlobalPromise;
    };

    /**
     * @param {Function} promiseGenerator
     * @return {LocalPromise}
     */
    Queue.prototype.add = function (promiseGenerator) {
        var self = this;
        return new LocalPromise(function (resolve, reject, notify) {
            // Do not queue to much promises
            if (self.queue.length >= self.maxQueuedPromises) {
                reject(new Error('Queue limit reached'));
                return;
            }

            // Add to queue
            self.queue.push({
                promiseGenerator: promiseGenerator,
                resolve: resolve,
                reject: reject,
                notify: notify || noop
            });

            self._dequeue();
        });
    };

    /**
     * Number of simultaneously running promises (which are resolving)
     *
     * @return {number}
     */
    Queue.prototype.getPendingLength = function () {
        return this.pendingPromises;
    };

    /**
     * Number of queued promises (which are waiting)
     *
     * @return {number}
     */
    Queue.prototype.getQueueLength = function () {
        return this.queue.length;
    };

    /**
     * Pause the queue
     */
    Queue.prototype.pause = function () {
        this.paused = true;
    };

    /**
     * Start the queue
     * @returns {boolean} true if first item removed from queue
     */
    Queue.prototype.start = function () {
        this.paused = false;
        return this._dequeue();
    };

    /**
     * @returns {boolean} true if first item removed from queue
     * @private
     */
    Queue.prototype._dequeue = function () {
        var self = this;

        if (this.paused) {
            return false;
        }

        if (this.pendingPromises >= this.maxPendingPromises) {
            return false;
        }

        // Remove from queue
        var item = this.queue.shift();
        if (!item) {
            if (this.options.onEmpty) {
                this.options.onEmpty();
            }
            return false;
        }

        try {
            this.pendingPromises++;

            resolveWith(item.promiseGenerator())
            // Forward all stuff
                .then(function (value) {
                    // It is not pending now
                    self.pendingPromises--;
                    // It should pass values
                    item.resolve(value);
                    self._dequeue();
                }, function (err) {
                    // It is not pending now
                    self.pendingPromises--;
                    // It should not mask errors
                    item.reject(err);
                    self._dequeue();
                }, function (message) {
                    // It should pass notifications
                    item.notify(message);
                });
        } catch (err) {
            self.pendingPromises--;
            item.reject(err);
            self._dequeue();

        }

        return true;
    };

    return Queue;
});


/***/ }),

/***/ "../../node_modules/punycode/punycode.js":
/*!******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/punycode/punycode.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module, global) {var __WEBPACK_AMD_DEFINE_RESULT__;/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function(root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports &&
		!exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module &&
		!module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (
		freeGlobal.global === freeGlobal ||
		freeGlobal.window === freeGlobal ||
		freeGlobal.self === freeGlobal
	) {
		root = freeGlobal;
	}

	/**
	 * The `punycode` object.
	 * @name punycode
	 * @type Object
	 */
	var punycode,

	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647, // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	tMin = 1,
	tMax = 26,
	skew = 38,
	damp = 700,
	initialBias = 72,
	initialN = 128, // 0x80
	delimiter = '-', // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	regexNonASCII = /[^\x20-\x7E]/, // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g, // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},

	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	floor = Math.floor,
	stringFromCharCode = String.fromCharCode,

	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
	 * A generic error utility function.
	 * @private
	 * @param {String} type The error type.
	 * @returns {Error} Throws a `RangeError` with the applicable error message.
	 */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
	 * A generic `Array#map` utility function.
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} callback The function that gets called for every array
	 * item.
	 * @returns {Array} A new array of values returned by the callback function.
	 */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
	 * A simple `Array#map`-like wrapper to work with domain name strings or email
	 * addresses.
	 * @private
	 * @param {String} domain The domain name or email address.
	 * @param {Function} callback The function that gets called for every
	 * character.
	 * @returns {Array} A new string of characters returned by the callback
	 * function.
	 */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
	 * Creates an array containing the numeric code points of each Unicode
	 * character in the string. While JavaScript uses UCS-2 internally,
	 * this function will convert a pair of surrogate halves (each of which
	 * UCS-2 exposes as separate characters) into a single code point,
	 * matching UTF-16.
	 * @see `punycode.ucs2.encode`
	 * @see <https://mathiasbynens.be/notes/javascript-encoding>
	 * @memberOf punycode.ucs2
	 * @name decode
	 * @param {String} string The Unicode input string (UCS-2).
	 * @returns {Array} The new array of code points.
	 */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) { // low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
	 * Creates a string based on an array of numeric code points.
	 * @see `punycode.ucs2.decode`
	 * @memberOf punycode.ucs2
	 * @name encode
	 * @param {Array} codePoints The array of numeric code points.
	 * @returns {String} The new Unicode string (UCS-2).
	 */
	function ucs2encode(array) {
		return map(array, function(value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
	 * Converts a basic code point into a digit/integer.
	 * @see `digitToBasic()`
	 * @private
	 * @param {Number} codePoint The basic numeric code point value.
	 * @returns {Number} The numeric value of a basic code point (for use in
	 * representing integers) in the range `0` to `base - 1`, or `base` if
	 * the code point does not represent a value.
	 */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
	 * Converts a digit/integer into a basic code point.
	 * @see `basicToDigit()`
	 * @private
	 * @param {Number} digit The numeric value of a basic code point.
	 * @returns {Number} The basic code point whose value (when used for
	 * representing integers) is `digit`, which needs to be in the range
	 * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
	 * used; else, the lowercase form is used. The behavior is undefined
	 * if `flag` is non-zero and `digit` has no uppercase form.
	 */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
	 * Bias adaptation function as per section 3.4 of RFC 3492.
	 * https://tools.ietf.org/html/rfc3492#section-3.4
	 * @private
	 */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (/* no initialization */; delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
	 * Converts a Punycode string of ASCII-only symbols to a string of Unicode
	 * symbols.
	 * @memberOf punycode
	 * @param {String} input The Punycode string of ASCII-only symbols.
	 * @returns {String} The resulting string of Unicode symbols.
	 */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,
		    /** Cached calculation results */
		    baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength; /* no final expression */) {

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base; /* no condition */; k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;

			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);

		}

		return ucs2encode(output);
	}

	/**
	 * Converts a string of Unicode symbols (e.g. a domain name label) to a
	 * Punycode string of ASCII-only symbols.
	 * @memberOf punycode
	 * @param {String} input The string of Unicode symbols.
	 * @returns {String} The resulting Punycode string of ASCII-only symbols.
	 */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],
		    /** `inputLength` will hold the number of code points in `input`. */
		    inputLength,
		    /** Cached calculation results */
		    handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base; /* no condition */; k += base) {
						t = k <= bias ? tMin : (k >= bias + tMax ? tMax : k - bias);
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(
							stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0))
						);
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;

		}
		return output.join('');
	}

	/**
	 * Converts a Punycode string representing a domain name or an email address
	 * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
	 * it doesn't matter if you call it on a string that has already been
	 * converted to Unicode.
	 * @memberOf punycode
	 * @param {String} input The Punycoded domain name or email address to
	 * convert to Unicode.
	 * @returns {String} The Unicode representation of the given Punycode
	 * string.
	 */
	function toUnicode(input) {
		return mapDomain(input, function(string) {
			return regexPunycode.test(string)
				? decode(string.slice(4).toLowerCase())
				: string;
		});
	}

	/**
	 * Converts a Unicode string representing a domain name or an email address to
	 * Punycode. Only the non-ASCII parts of the domain name will be converted,
	 * i.e. it doesn't matter if you call it with a domain that's already in
	 * ASCII.
	 * @memberOf punycode
	 * @param {String} input The domain name or email address to convert, as a
	 * Unicode string.
	 * @returns {String} The Punycode representation of the given domain name or
	 * email address.
	 */
	function toASCII(input) {
		return mapDomain(input, function(string) {
			return regexNonASCII.test(string)
				? 'xn--' + encode(string)
				: string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
		 * A string representing the current Punycode.js version number.
		 * @memberOf punycode
		 * @type String
		 */
		'version': '1.4.1',
		/**
		 * An object of methods to convert from JavaScript's internal character
		 * representation (UCS-2) to Unicode code points, and back.
		 * @see <https://mathiasbynens.be/notes/javascript-encoding>
		 * @memberOf punycode
		 * @type Object
		 */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		true
	) {
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
			return punycode;
		}).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

}(this));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../sdks/kinvey-html5-sdk/node_modules/webpack/buildin/module.js */ "../kinvey-html5-sdk/node_modules/webpack/buildin/module.js")(module), __webpack_require__(/*! ./../../sdks/kinvey-html5-sdk/node_modules/webpack/buildin/global.js */ "../kinvey-html5-sdk/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../node_modules/querystring-es3/decode.js":
/*!***********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/querystring-es3/decode.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};


/***/ }),

/***/ "../../node_modules/querystring-es3/encode.js":
/*!***********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/querystring-es3/encode.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return map(objectKeys(obj), function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (isArray(obj[k])) {
        return map(obj[k], function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};

var isArray = Array.isArray || function (xs) {
  return Object.prototype.toString.call(xs) === '[object Array]';
};

function map (xs, f) {
  if (xs.map) return xs.map(f);
  var res = [];
  for (var i = 0; i < xs.length; i++) {
    res.push(f(xs[i], i));
  }
  return res;
}

var objectKeys = Object.keys || function (obj) {
  var res = [];
  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
  }
  return res;
};


/***/ }),

/***/ "../../node_modules/querystring-es3/index.js":
/*!**********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/querystring-es3/index.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "../../node_modules/querystring-es3/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "../../node_modules/querystring-es3/encode.js");


/***/ }),

/***/ "../../node_modules/sift/sift.js":
/*!**********************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/sift/sift.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
 * Sift 3.x
 *
 * Copryright 2015, Craig Condon
 * Licensed under MIT
 *
 * Filter JavaScript objects with mongodb queries
 */

(function() {

  'use strict';

  /**
   */

  function isFunction(value) {
    return typeof value === 'function';
  }

  /**
   */

  function isArray(value) {
    return Object.prototype.toString.call(value) === '[object Array]';
  }

  /**
   */

  function comparable(value) {
    if (value instanceof Date) {
      return value.getTime();
    } else if (isArray(value)) {
      return value.map(comparable);
    } else if (value && typeof value.toJSON === 'function') {
      return value.toJSON();
    } else {
      return value;
    }
  }

  function get(obj, key) {
    return isFunction(obj.get) ? obj.get(key) : obj[key];
  }

  /**
   */

  function or(validator) {
    return function(a, b) {
      if (!isArray(b) || !b.length) {
        return validator(a, b);
      }
      for (var i = 0, n = b.length; i < n; i++) {
        if (validator(a, get(b,i))) return true;
      }
      return false;
    }
  }

  /**
   */

  function and(validator) {
    return function(a, b) {
      if (!isArray(b) || !b.length) {
        return validator(a, b);
      }
      for (var i = 0, n = b.length; i < n; i++) {
        if (!validator(a, get(b, i))) return false;
      }
      return true;
    };
  }

  function validate(validator, b, k, o) {
    return validator.v(validator.a, b, k, o);
  }

  var OPERATORS = {

    /**
     */

    $eq: or(function(a, b) {
      return a(b);
    }),

    /**
     */

    $ne: and(function(a, b) {
      return !a(b);
    }),

    /**
     */

    $gt: or(function(a, b) {
      return sift.compare(comparable(b), a) > 0;
    }),

    /**
     */

    $gte: or(function(a, b) {
      return sift.compare(comparable(b), a) >= 0;
    }),

    /**
     */

    $lt: or(function(a, b) {
      return sift.compare(comparable(b), a) < 0;
    }),

    /**
     */

    $lte: or(function(a, b) {
      return sift.compare(comparable(b), a) <= 0;
    }),

    /**
     */

    $mod: or(function(a, b) {
      return b % a[0] == a[1];
    }),

    /**
     */

    $in: function(a, b) {

      if (b instanceof Array) {
        for (var i = b.length; i--;) {
          if (~a.indexOf(comparable(get(b, i)))) {
            return true;
          }
        }
      } else {
        var comparableB = comparable(b);
        if (comparableB === b && typeof b === 'object') {
          for (var i = a.length; i--;) {
            if (String(a[i]) === String(b) && String(b) !== '[object Object]') {
              return true;
            }
          }
        }

        /*
          Handles documents that are undefined, whilst also
          having a 'null' element in the parameters to $in.
        */
        if (typeof comparableB == 'undefined') {
          for (var i = a.length; i--;) {
            if (a[i] == null) {
              return true;
            }
          }
        }

        /*
          Handles the case of {'field': {$in: [/regexp1/, /regexp2/, ...]}}
        */
        for (var i = a.length; i--;) {
          var validator = createRootValidator(get(a, i), undefined);
          var result = validate(validator, b, i, a);
          if ((result) && (String(result) !== '[object Object]') && (String(b) !== '[object Object]')) {
            return true;
          }
        }

        return !!~a.indexOf(comparableB);
      }

      return false;
    },

    /**
     */

    $nin: function(a, b, k, o) {
      return !OPERATORS.$in(a, b, k, o);
    },

    /**
     */

    $not: function(a, b, k, o) {
      return !validate(a, b, k, o);
    },

    /**
     */

    $type: function(a, b) {
      return b != void 0 ? b instanceof a || b.constructor == a : false;
     },

    /**
     */

    $all: function(a, b, k, o) {
      return OPERATORS.$and(a, b, k, o);
    },

    /**
     */

    $size: function(a, b) {
      return b ? a === b.length : false;
    },

    /**
     */

    $or: function(a, b, k, o) {
      for (var i = 0, n = a.length; i < n; i++) if (validate(get(a, i), b, k, o)) return true;
      return false;
    },

    /**
     */

    $nor: function(a, b, k, o) {
      return !OPERATORS.$or(a, b, k, o);
    },

    /**
     */

    $and: function(a, b, k, o) {
      for (var i = 0, n = a.length; i < n; i++) {
        if (!validate(get(a, i), b, k, o)) {
          return false;
        }
      }
      return true;
    },

    /**
     */

    $regex: or(function(a, b) {
      return typeof b === 'string' && a.test(b);
    }),

    /**
     */

    $where: function(a, b, k, o) {
      return a.call(b, b, k, o);
    },

    /**
     */

    $elemMatch: function(a, b, k, o) {
      if (isArray(b)) {
        return !!~search(b, a);
      }
      return validate(a, b, k, o);
    },

    /**
     */

    $exists: function(a, b, k, o) {
      return o.hasOwnProperty(k) === a;
    }
  };

  /**
   */

  var prepare = {

    /**
     */

    $eq: function(a) {

      if (a instanceof RegExp) {
        return function(b) {
          return typeof b === 'string' && a.test(b);
        };
      } else if (a instanceof Function) {
        return a;
      } else if (isArray(a) && !a.length) {
        // Special case of a == []
        return function(b) {
          return (isArray(b) && !b.length);
        };
      } else if (a === null){
        return function(b){
          //will match both null and undefined
          return b == null;
        }
      }

      return function(b) {
        return sift.compare(comparable(b), a) === 0;
      };
    },

    /**
     */

    $ne: function(a) {
      return prepare.$eq(a);
    },

    /**
     */

    $and: function(a) {
      return a.map(parse);
    },

    /**
     */

    $all: function(a) {
      return prepare.$and(a);
    },

    /**
     */

    $or: function(a) {
      return a.map(parse);
    },

    /**
     */

    $nor: function(a) {
      return a.map(parse);
    },

    /**
     */

    $not: function(a) {
      return parse(a);
    },

    /**
     */

    $regex: function(a, query) {
      return new RegExp(a, query.$options);
    },

    /**
     */

    $where: function(a) {
      return typeof a === 'string' ? new Function('obj', 'return ' + a) : a;
    },

    /**
     */

    $elemMatch: function(a) {
      return parse(a);
    },

    /**
     */

    $exists: function(a) {
      return !!a;
    }
  };

  /**
   */

  function search(array, validator) {

    for (var i = 0; i < array.length; i++) {
      var result = get(array, i);
      if (validate(validator, get(array, i))) {
        return i;
      }
    }

    return -1;
  }

  /**
   */

  function createValidator(a, validate) {
    return { a: a, v: validate };
  }

  /**
   */

  function nestedValidator(a, b) {
    var values  = [];
    findValues(b, a.k, 0, b, values);

    if (values.length === 1) {
      var first = values[0];
      return validate(a.nv, first[0], first[1], first[2]);
    }

    // If the query contains $ne, need to test all elements ANDed together
    var inclusive = a && a.q && typeof a.q.$ne !== 'undefined';
    var allValid = inclusive;
    for (var i = 0; i < values.length; i++) {
      var result = values[i];
      var isValid = validate(a.nv, result[0], result[1], result[2]);
      if (inclusive) {
        allValid &= isValid;
      } else {
        allValid |= isValid;
      }
    }
    return allValid;
  }

  /**
   */

  function findValues(current, keypath, index, object, values) {

    if (index === keypath.length || current == void 0) {

      values.push([current, keypath[index - 1], object]);
      return;
    }

    var k = get(keypath, index);

    // ensure that if current is an array, that the current key
    // is NOT an array index. This sort of thing needs to work:
    // sift({'foo.0':42}, [{foo: [42]}]);
    if (isArray(current) && isNaN(Number(k))) {
      for (var i = 0, n = current.length; i < n; i++) {
        findValues(get(current, i), keypath, index, current, values);
      }
    } else {
      findValues(get(current, k), keypath, index + 1, current, values);
    }
  }

  /**
   */

  function createNestedValidator(keypath, a, q) {
    return { a: { k: keypath, nv: a, q: q }, v: nestedValidator };
  }

  /**
   * flatten the query
   */

  function isVanillaObject(value) {
    return value && value.constructor === Object;
  }

  function parse(query) {
    query = comparable(query);

    if (!query || !isVanillaObject(query)) { // cross browser support
      query = { $eq: query };
    }

    var validators = [];

    for (var key in query) {
      var a = query[key];

      if (key === '$options') {
        continue;
      }

      if (OPERATORS[key]) {
        if (prepare[key]) a = prepare[key](a, query);
        validators.push(createValidator(comparable(a), OPERATORS[key]));
      } else {

        if (key.charCodeAt(0) === 36) {
          throw new Error('Unknown operation ' + key);
        }
        validators.push(createNestedValidator(key.split('.'), parse(a), a));
      }
    }

    return validators.length === 1 ? validators[0] : createValidator(validators, OPERATORS.$and);
  }

  /**
   */

  function createRootValidator(query, getter) {
    var validator = parse(query);
    if (getter) {
      validator = {
        a: validator,
        v: function(a, b, k, o) {
          return validate(a, getter(b), k, o);
        }
      };
    }
    return validator;
  }

  /**
   */

  function sift(query, array, getter) {

    if (isFunction(array)) {
      getter = array;
      array  = void 0;
    }

    var validator = createRootValidator(query, getter);

    function filter(b, k, o) {
      return validate(validator, b, k, o);
    }

    if (array) {
      return array.filter(filter);
    }

    return filter;
  }

  /**
   */

  sift.use = function(plugin) {
    if (isFunction(plugin)) return plugin(sift);
    for (var key in plugin) {
      /* istanbul ignore else */
      if (key.charCodeAt(0) === 36) {
        OPERATORS[key] = plugin[key];
      }
    }
  };

  /**
   */

  sift.indexOf = function(query, array, getter) {
    return search(array, createRootValidator(query, getter));
  };

  /**
   */

  sift.compare = function(a, b) {
    if(a===b) return 0;
    if(typeof a === typeof b) {
      if (a > b) {
        return 1;
      }
      if (a < b) {
        return -1;
      }
    }
  };

  /* istanbul ignore next */
  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    module.exports = sift;
    exports['default'] = module.exports.default = sift;
  }

  /* istanbul ignore next */
  if (typeof window !== 'undefined') {
    window.sift = sift;
  }
})();


/***/ }),

/***/ "../../node_modules/url/url.js":
/*!********************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/url/url.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var punycode = __webpack_require__(/*! punycode */ "../../node_modules/punycode/punycode.js");
var util = __webpack_require__(/*! ./util */ "../../node_modules/url/util.js");

exports.parse = urlParse;
exports.resolve = urlResolve;
exports.resolveObject = urlResolveObject;
exports.format = urlFormat;

exports.Url = Url;

function Url() {
  this.protocol = null;
  this.slashes = null;
  this.auth = null;
  this.host = null;
  this.port = null;
  this.hostname = null;
  this.hash = null;
  this.search = null;
  this.query = null;
  this.pathname = null;
  this.path = null;
  this.href = null;
}

// Reference: RFC 3986, RFC 1808, RFC 2396

// define these here so at least they only have to be
// compiled once on the first module load.
var protocolPattern = /^([a-z0-9.+-]+:)/i,
    portPattern = /:[0-9]*$/,

    // Special case for a simple path URL
    simplePathPattern = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,

    // RFC 2396: characters reserved for delimiting URLs.
    // We actually just auto-escape these.
    delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],

    // RFC 2396: characters not allowed for various reasons.
    unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),

    // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
    autoEscape = ['\''].concat(unwise),
    // Characters that are never ever allowed in a hostname.
    // Note that any invalid chars are also handled, but these
    // are the ones that are *expected* to be seen, so we fast-path
    // them.
    nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
    hostEndingChars = ['/', '?', '#'],
    hostnameMaxLen = 255,
    hostnamePartPattern = /^[+a-z0-9A-Z_-]{0,63}$/,
    hostnamePartStart = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
    // protocols that can allow "unsafe" and "unwise" chars.
    unsafeProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that never have a hostname.
    hostlessProtocol = {
      'javascript': true,
      'javascript:': true
    },
    // protocols that always contain a // bit.
    slashedProtocol = {
      'http': true,
      'https': true,
      'ftp': true,
      'gopher': true,
      'file': true,
      'http:': true,
      'https:': true,
      'ftp:': true,
      'gopher:': true,
      'file:': true
    },
    querystring = __webpack_require__(/*! querystring */ "../../node_modules/querystring-es3/index.js");

function urlParse(url, parseQueryString, slashesDenoteHost) {
  if (url && util.isObject(url) && url instanceof Url) return url;

  var u = new Url;
  u.parse(url, parseQueryString, slashesDenoteHost);
  return u;
}

Url.prototype.parse = function(url, parseQueryString, slashesDenoteHost) {
  if (!util.isString(url)) {
    throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
  }

  // Copy chrome, IE, opera backslash-handling behavior.
  // Back slashes before the query string get converted to forward slashes
  // See: https://code.google.com/p/chromium/issues/detail?id=25916
  var queryIndex = url.indexOf('?'),
      splitter =
          (queryIndex !== -1 && queryIndex < url.indexOf('#')) ? '?' : '#',
      uSplit = url.split(splitter),
      slashRegex = /\\/g;
  uSplit[0] = uSplit[0].replace(slashRegex, '/');
  url = uSplit.join(splitter);

  var rest = url;

  // trim before proceeding.
  // This is to support parse stuff like "  http://foo.com  \n"
  rest = rest.trim();

  if (!slashesDenoteHost && url.split('#').length === 1) {
    // Try fast path regexp
    var simplePath = simplePathPattern.exec(rest);
    if (simplePath) {
      this.path = rest;
      this.href = rest;
      this.pathname = simplePath[1];
      if (simplePath[2]) {
        this.search = simplePath[2];
        if (parseQueryString) {
          this.query = querystring.parse(this.search.substr(1));
        } else {
          this.query = this.search.substr(1);
        }
      } else if (parseQueryString) {
        this.search = '';
        this.query = {};
      }
      return this;
    }
  }

  var proto = protocolPattern.exec(rest);
  if (proto) {
    proto = proto[0];
    var lowerProto = proto.toLowerCase();
    this.protocol = lowerProto;
    rest = rest.substr(proto.length);
  }

  // figure out if it's got a host
  // user@server is *always* interpreted as a hostname, and url
  // resolution will treat //foo/bar as host=foo,path=bar because that's
  // how the browser resolves relative URLs.
  if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
    var slashes = rest.substr(0, 2) === '//';
    if (slashes && !(proto && hostlessProtocol[proto])) {
      rest = rest.substr(2);
      this.slashes = true;
    }
  }

  if (!hostlessProtocol[proto] &&
      (slashes || (proto && !slashedProtocol[proto]))) {

    // there's a hostname.
    // the first instance of /, ?, ;, or # ends the host.
    //
    // If there is an @ in the hostname, then non-host chars *are* allowed
    // to the left of the last @ sign, unless some host-ending character
    // comes *before* the @-sign.
    // URLs are obnoxious.
    //
    // ex:
    // http://a@b@c/ => user:a@b host:c
    // http://a@b?@c => user:a host:c path:/?@c

    // v0.12 TODO(isaacs): This is not quite how Chrome does things.
    // Review our test case against browsers more comprehensively.

    // find the first instance of any hostEndingChars
    var hostEnd = -1;
    for (var i = 0; i < hostEndingChars.length; i++) {
      var hec = rest.indexOf(hostEndingChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }

    // at this point, either we have an explicit point where the
    // auth portion cannot go past, or the last @ char is the decider.
    var auth, atSign;
    if (hostEnd === -1) {
      // atSign can be anywhere.
      atSign = rest.lastIndexOf('@');
    } else {
      // atSign must be in auth portion.
      // http://a@b/c@d => host:b auth:a path:/c@d
      atSign = rest.lastIndexOf('@', hostEnd);
    }

    // Now we have a portion which is definitely the auth.
    // Pull that off.
    if (atSign !== -1) {
      auth = rest.slice(0, atSign);
      rest = rest.slice(atSign + 1);
      this.auth = decodeURIComponent(auth);
    }

    // the host is the remaining to the left of the first non-host char
    hostEnd = -1;
    for (var i = 0; i < nonHostChars.length; i++) {
      var hec = rest.indexOf(nonHostChars[i]);
      if (hec !== -1 && (hostEnd === -1 || hec < hostEnd))
        hostEnd = hec;
    }
    // if we still have not hit it, then the entire thing is a host.
    if (hostEnd === -1)
      hostEnd = rest.length;

    this.host = rest.slice(0, hostEnd);
    rest = rest.slice(hostEnd);

    // pull out port.
    this.parseHost();

    // we've indicated that there is a hostname,
    // so even if it's empty, it has to be present.
    this.hostname = this.hostname || '';

    // if hostname begins with [ and ends with ]
    // assume that it's an IPv6 address.
    var ipv6Hostname = this.hostname[0] === '[' &&
        this.hostname[this.hostname.length - 1] === ']';

    // validate a little.
    if (!ipv6Hostname) {
      var hostparts = this.hostname.split(/\./);
      for (var i = 0, l = hostparts.length; i < l; i++) {
        var part = hostparts[i];
        if (!part) continue;
        if (!part.match(hostnamePartPattern)) {
          var newpart = '';
          for (var j = 0, k = part.length; j < k; j++) {
            if (part.charCodeAt(j) > 127) {
              // we replace non-ASCII char with a temporary placeholder
              // we need this to make sure size of hostname is not
              // broken by replacing non-ASCII by nothing
              newpart += 'x';
            } else {
              newpart += part[j];
            }
          }
          // we test again with ASCII char only
          if (!newpart.match(hostnamePartPattern)) {
            var validParts = hostparts.slice(0, i);
            var notHost = hostparts.slice(i + 1);
            var bit = part.match(hostnamePartStart);
            if (bit) {
              validParts.push(bit[1]);
              notHost.unshift(bit[2]);
            }
            if (notHost.length) {
              rest = '/' + notHost.join('.') + rest;
            }
            this.hostname = validParts.join('.');
            break;
          }
        }
      }
    }

    if (this.hostname.length > hostnameMaxLen) {
      this.hostname = '';
    } else {
      // hostnames are always lower case.
      this.hostname = this.hostname.toLowerCase();
    }

    if (!ipv6Hostname) {
      // IDNA Support: Returns a punycoded representation of "domain".
      // It only converts parts of the domain name that
      // have non-ASCII characters, i.e. it doesn't matter if
      // you call it with a domain that already is ASCII-only.
      this.hostname = punycode.toASCII(this.hostname);
    }

    var p = this.port ? ':' + this.port : '';
    var h = this.hostname || '';
    this.host = h + p;
    this.href += this.host;

    // strip [ and ] from the hostname
    // the host field still retains them, though
    if (ipv6Hostname) {
      this.hostname = this.hostname.substr(1, this.hostname.length - 2);
      if (rest[0] !== '/') {
        rest = '/' + rest;
      }
    }
  }

  // now rest is set to the post-host stuff.
  // chop off any delim chars.
  if (!unsafeProtocol[lowerProto]) {

    // First, make 100% sure that any "autoEscape" chars get
    // escaped, even if encodeURIComponent doesn't think they
    // need to be.
    for (var i = 0, l = autoEscape.length; i < l; i++) {
      var ae = autoEscape[i];
      if (rest.indexOf(ae) === -1)
        continue;
      var esc = encodeURIComponent(ae);
      if (esc === ae) {
        esc = escape(ae);
      }
      rest = rest.split(ae).join(esc);
    }
  }


  // chop off from the tail first.
  var hash = rest.indexOf('#');
  if (hash !== -1) {
    // got a fragment string.
    this.hash = rest.substr(hash);
    rest = rest.slice(0, hash);
  }
  var qm = rest.indexOf('?');
  if (qm !== -1) {
    this.search = rest.substr(qm);
    this.query = rest.substr(qm + 1);
    if (parseQueryString) {
      this.query = querystring.parse(this.query);
    }
    rest = rest.slice(0, qm);
  } else if (parseQueryString) {
    // no query string, but parseQueryString still requested
    this.search = '';
    this.query = {};
  }
  if (rest) this.pathname = rest;
  if (slashedProtocol[lowerProto] &&
      this.hostname && !this.pathname) {
    this.pathname = '/';
  }

  //to support http.request
  if (this.pathname || this.search) {
    var p = this.pathname || '';
    var s = this.search || '';
    this.path = p + s;
  }

  // finally, reconstruct the href based on what has been validated.
  this.href = this.format();
  return this;
};

// format a parsed object into a url string
function urlFormat(obj) {
  // ensure it's an object, and not a string url.
  // If it's an obj, this is a no-op.
  // this way, you can call url_format() on strings
  // to clean up potentially wonky urls.
  if (util.isString(obj)) obj = urlParse(obj);
  if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
  return obj.format();
}

Url.prototype.format = function() {
  var auth = this.auth || '';
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ':');
    auth += '@';
  }

  var protocol = this.protocol || '',
      pathname = this.pathname || '',
      hash = this.hash || '',
      host = false,
      query = '';

  if (this.host) {
    host = auth + this.host;
  } else if (this.hostname) {
    host = auth + (this.hostname.indexOf(':') === -1 ?
        this.hostname :
        '[' + this.hostname + ']');
    if (this.port) {
      host += ':' + this.port;
    }
  }

  if (this.query &&
      util.isObject(this.query) &&
      Object.keys(this.query).length) {
    query = querystring.stringify(this.query);
  }

  var search = this.search || (query && ('?' + query)) || '';

  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
  // unless they had them to begin with.
  if (this.slashes ||
      (!protocol || slashedProtocol[protocol]) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
  if (search && search.charAt(0) !== '?') search = '?' + search;

  pathname = pathname.replace(/[?#]/g, function(match) {
    return encodeURIComponent(match);
  });
  search = search.replace('#', '%23');

  return protocol + host + pathname + search + hash;
};

function urlResolve(source, relative) {
  return urlParse(source, false, true).resolve(relative);
}

Url.prototype.resolve = function(relative) {
  return this.resolveObject(urlParse(relative, false, true)).format();
};

function urlResolveObject(source, relative) {
  if (!source) return relative;
  return urlParse(source, false, true).resolveObject(relative);
}

Url.prototype.resolveObject = function(relative) {
  if (util.isString(relative)) {
    var rel = new Url();
    rel.parse(relative, false, true);
    relative = rel;
  }

  var result = new Url();
  var tkeys = Object.keys(this);
  for (var tk = 0; tk < tkeys.length; tk++) {
    var tkey = tkeys[tk];
    result[tkey] = this[tkey];
  }

  // hash is always overridden, no matter what.
  // even href="" will remove it.
  result.hash = relative.hash;

  // if the relative url is empty, then there's nothing left to do here.
  if (relative.href === '') {
    result.href = result.format();
    return result;
  }

  // hrefs like //foo/bar always cut to the protocol.
  if (relative.slashes && !relative.protocol) {
    // take everything except the protocol from relative
    var rkeys = Object.keys(relative);
    for (var rk = 0; rk < rkeys.length; rk++) {
      var rkey = rkeys[rk];
      if (rkey !== 'protocol')
        result[rkey] = relative[rkey];
    }

    //urlParse appends trailing / to urls like http://www.example.com
    if (slashedProtocol[result.protocol] &&
        result.hostname && !result.pathname) {
      result.path = result.pathname = '/';
    }

    result.href = result.format();
    return result;
  }

  if (relative.protocol && relative.protocol !== result.protocol) {
    // if it's a known url protocol, then changing
    // the protocol does weird things
    // first, if it's not file:, then we MUST have a host,
    // and if there was a path
    // to begin with, then we MUST have a path.
    // if it is file:, then the host is dropped,
    // because that's known to be hostless.
    // anything else is assumed to be absolute.
    if (!slashedProtocol[relative.protocol]) {
      var keys = Object.keys(relative);
      for (var v = 0; v < keys.length; v++) {
        var k = keys[v];
        result[k] = relative[k];
      }
      result.href = result.format();
      return result;
    }

    result.protocol = relative.protocol;
    if (!relative.host && !hostlessProtocol[relative.protocol]) {
      var relPath = (relative.pathname || '').split('/');
      while (relPath.length && !(relative.host = relPath.shift()));
      if (!relative.host) relative.host = '';
      if (!relative.hostname) relative.hostname = '';
      if (relPath[0] !== '') relPath.unshift('');
      if (relPath.length < 2) relPath.unshift('');
      result.pathname = relPath.join('/');
    } else {
      result.pathname = relative.pathname;
    }
    result.search = relative.search;
    result.query = relative.query;
    result.host = relative.host || '';
    result.auth = relative.auth;
    result.hostname = relative.hostname || relative.host;
    result.port = relative.port;
    // to support http.request
    if (result.pathname || result.search) {
      var p = result.pathname || '';
      var s = result.search || '';
      result.path = p + s;
    }
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  }

  var isSourceAbs = (result.pathname && result.pathname.charAt(0) === '/'),
      isRelAbs = (
          relative.host ||
          relative.pathname && relative.pathname.charAt(0) === '/'
      ),
      mustEndAbs = (isRelAbs || isSourceAbs ||
                    (result.host && relative.pathname)),
      removeAllDots = mustEndAbs,
      srcPath = result.pathname && result.pathname.split('/') || [],
      relPath = relative.pathname && relative.pathname.split('/') || [],
      psychotic = result.protocol && !slashedProtocol[result.protocol];

  // if the url is a non-slashed url, then relative
  // links like ../.. should be able
  // to crawl up to the hostname, as well.  This is strange.
  // result.protocol has already been set by now.
  // Later on, put the first path part into the host field.
  if (psychotic) {
    result.hostname = '';
    result.port = null;
    if (result.host) {
      if (srcPath[0] === '') srcPath[0] = result.host;
      else srcPath.unshift(result.host);
    }
    result.host = '';
    if (relative.protocol) {
      relative.hostname = null;
      relative.port = null;
      if (relative.host) {
        if (relPath[0] === '') relPath[0] = relative.host;
        else relPath.unshift(relative.host);
      }
      relative.host = null;
    }
    mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
  }

  if (isRelAbs) {
    // it's absolute.
    result.host = (relative.host || relative.host === '') ?
                  relative.host : result.host;
    result.hostname = (relative.hostname || relative.hostname === '') ?
                      relative.hostname : result.hostname;
    result.search = relative.search;
    result.query = relative.query;
    srcPath = relPath;
    // fall through to the dot-handling below.
  } else if (relPath.length) {
    // it's relative
    // throw away the existing file, and take the new path instead.
    if (!srcPath) srcPath = [];
    srcPath.pop();
    srcPath = srcPath.concat(relPath);
    result.search = relative.search;
    result.query = relative.query;
  } else if (!util.isNullOrUndefined(relative.search)) {
    // just pull out the search.
    // like href='?foo'.
    // Put this after the other two cases because it simplifies the booleans
    if (psychotic) {
      result.hostname = result.host = srcPath.shift();
      //occationaly the auth can get stuck only in host
      //this especially happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ?
                       result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }
    result.search = relative.search;
    result.query = relative.query;
    //to support http.request
    if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') +
                    (result.search ? result.search : '');
    }
    result.href = result.format();
    return result;
  }

  if (!srcPath.length) {
    // no path at all.  easy.
    // we've already handled the other stuff above.
    result.pathname = null;
    //to support http.request
    if (result.search) {
      result.path = '/' + result.search;
    } else {
      result.path = null;
    }
    result.href = result.format();
    return result;
  }

  // if a url ENDs in . or .., then it must get a trailing slash.
  // however, if it ends in anything else non-slashy,
  // then it must NOT get a trailing slash.
  var last = srcPath.slice(-1)[0];
  var hasTrailingSlash = (
      (result.host || relative.host || srcPath.length > 1) &&
      (last === '.' || last === '..') || last === '');

  // strip single dots, resolve double dots to parent dir
  // if the path tries to go above the root, `up` ends up > 0
  var up = 0;
  for (var i = srcPath.length; i >= 0; i--) {
    last = srcPath[i];
    if (last === '.') {
      srcPath.splice(i, 1);
    } else if (last === '..') {
      srcPath.splice(i, 1);
      up++;
    } else if (up) {
      srcPath.splice(i, 1);
      up--;
    }
  }

  // if the path is allowed to go above the root, restore leading ..s
  if (!mustEndAbs && !removeAllDots) {
    for (; up--; up) {
      srcPath.unshift('..');
    }
  }

  if (mustEndAbs && srcPath[0] !== '' &&
      (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
    srcPath.unshift('');
  }

  if (hasTrailingSlash && (srcPath.join('/').substr(-1) !== '/')) {
    srcPath.push('');
  }

  var isAbsolute = srcPath[0] === '' ||
      (srcPath[0] && srcPath[0].charAt(0) === '/');

  // put the host back
  if (psychotic) {
    result.hostname = result.host = isAbsolute ? '' :
                                    srcPath.length ? srcPath.shift() : '';
    //occationaly the auth can get stuck only in host
    //this especially happens in cases like
    //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
    var authInHost = result.host && result.host.indexOf('@') > 0 ?
                     result.host.split('@') : false;
    if (authInHost) {
      result.auth = authInHost.shift();
      result.host = result.hostname = authInHost.shift();
    }
  }

  mustEndAbs = mustEndAbs || (result.host && srcPath.length);

  if (mustEndAbs && !isAbsolute) {
    srcPath.unshift('');
  }

  if (!srcPath.length) {
    result.pathname = null;
    result.path = null;
  } else {
    result.pathname = srcPath.join('/');
  }

  //to support request.http
  if (!util.isNull(result.pathname) || !util.isNull(result.search)) {
    result.path = (result.pathname ? result.pathname : '') +
                  (result.search ? result.search : '');
  }
  result.auth = relative.auth || result.auth;
  result.slashes = result.slashes || relative.slashes;
  result.href = result.format();
  return result;
};

Url.prototype.parseHost = function() {
  var host = this.host;
  var port = portPattern.exec(host);
  if (port) {
    port = port[0];
    if (port !== ':') {
      this.port = port.substr(1);
    }
    host = host.substr(0, host.length - port.length);
  }
  if (host) this.hostname = host;
};


/***/ }),

/***/ "../../node_modules/url/util.js":
/*!*********************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/node_modules/url/util.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  isString: function(arg) {
    return typeof(arg) === 'string';
  },
  isObject: function(arg) {
    return typeof(arg) === 'object' && arg !== null;
  },
  isNull: function(arg) {
    return arg === null;
  },
  isNullOrUndefined: function(arg) {
    return arg == null;
  }
};


/***/ }),

/***/ "../../packages/kinvey-acl/lib/acl.js":
/*!***************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-acl/lib/acl.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! lodash/isPlainObject */ "../../node_modules/lodash/isPlainObject.js"), __webpack_require__(/*! kinvey-errors */ "../../packages/kinvey-errors/lib/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _isPlainObject, _kinveyErrors) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Acl = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _isPlainObject = _interopRequireDefault(_isPlainObject);

  /**
   * This class provides a way to access the ACL (Access Control List)
   * information for an entity and to modify the access control permissions.
   */
  var Acl =
  /*#__PURE__*/
  function () {
    function Acl(entity) {
      (0, _classCallCheck2.default)(this, Acl);

      if (!(0, _isPlainObject.default)(entity)) {
        throw new _kinveyErrors.KinveyError('entity must be an object.');
      }

      entity._acl = entity._acl || {}; // eslint-disable-line no-param-reassign

      this.entity = entity;
    }
    /**
     * Get the creator.
     *
     * @returns {string} Creator
     */


    (0, _createClass2.default)(Acl, [{
      key: "addReader",

      /**
       * Add a reader.
       *
       * @param {string} reader Reader
       * @returns {Acl} Acl
       */
      value: function addReader(reader) {
        var r = this.readers;

        if (r.indexOf(reader) === -1) {
          r.push(reader);
        }

        this.entity._acl.r = r;
        return this;
      }
      /**
       * Add a reader group.
       *
       * @param {string} group Reader group
       * @returns {Acl} Acl
       */

    }, {
      key: "addReaderGroup",
      value: function addReaderGroup(group) {
        var groups = this.readerGroups;

        if (groups.indexOf(group) === -1) {
          groups.push(group);
        }

        this.entity._acl = Object.assign({}, this.entity._acl, {
          groups: {}
        });
        this.entity._acl.groups = Object.assign({}, this.entity._acl.groups, {
          r: groups
        });
        return this;
      }
      /**
       * Add a writer.
       *
       * @param {string} writer Writer
       * @returns {Acl} Acl
       */

    }, {
      key: "addWriter",
      value: function addWriter(writer) {
        var w = this.writers;

        if (w.indexOf(writer) === -1) {
          w.push(writer);
        }

        this.entity._acl.w = w;
        return this;
      }
      /**
       * Add a writer group.
       *
       * @param {string} group Writer group
       * @returns {Acl} Acl
       */

    }, {
      key: "addWriterGroup",
      value: function addWriterGroup(group) {
        var groups = this.writerGroups;

        if (groups.indexOf(group) === -1) {
          groups.push(group);
        }

        this.entity._acl = Object.assign({}, this.entity._acl, {
          groups: {}
        });
        this.entity._acl.groups = Object.assign({}, this.entity._acl.groups, {
          w: groups
        });
        return this;
      }
      /**
       * Check if globally readable is allowed.
       *
       * @returns {boolean} True if globally readable is allowed otherwise false
       */

    }, {
      key: "isGloballyReadable",
      value: function isGloballyReadable() {
        return this.entity._acl.gr === true;
      }
      /**
       * Check if globally writable is allowed.
       *
       * @returns {boolean} True if globally writable is allowed otherwise false
       */

    }, {
      key: "isGloballyWritable",
      value: function isGloballyWritable() {
        return this.entity._acl.gw === true;
      }
      /**
       * Remove a reader.
       *
       * @param {string} reader Reader
       * @returns {Acl} Acl
       */

    }, {
      key: "removeReader",
      value: function removeReader(reader) {
        var r = this.readers;
        var index = r.indexOf(reader);

        if (index !== -1) {
          r.splice(index, 1);
        }

        this.entity._acl.r = r;
        return this;
      }
      /**
       * Remove a reader group.
       *
       * @param {string} group Reader group
       * @returns {Acl} Acl
       */

    }, {
      key: "removeReaderGroup",
      value: function removeReaderGroup(group) {
        var groups = this.readerGroups;
        var index = groups.indexOf(group);

        if (index !== -1) {
          groups.splice(index, 1);
        }

        this.entity._acl.groups = Object.assign({}, this.entity._acl.groups, {
          r: groups
        });
        return this;
      }
      /**
       * Remove a writer.
       *
       * @param {string} writer Writer
       * @returns {Acl} Acl
       */

    }, {
      key: "removeWriter",
      value: function removeWriter(writer) {
        var w = this.writers;
        var index = w.indexOf(writer);

        if (index !== -1) {
          w.splice(index, 1);
        }

        this.entity._acl.w = w;
        return this;
      }
      /**
       * Remove a writer group.
       *
       * @param {string} group Writer group
       * @returns {Acl} Acl
       */

    }, {
      key: "removeWriterGroup",
      value: function removeWriterGroup(group) {
        var groups = this.writerGroups;
        var index = groups.indexOf(group);

        if (index !== -1) {
          groups.splice(index, 1);
        }

        this.entity._acl.groups = Object.assign({}, this.entity._acl.groups, {
          w: groups
        });
        return this;
      }
      /**
       * The acl as a plain object.
       *
       * @returns {Object} Acl as a plain object.
       */

    }, {
      key: "toPlainObject",
      value: function toPlainObject() {
        return this.entity._acl;
      }
    }, {
      key: "creator",
      get: function get() {
        return this.entity._acl.creator;
      }
      /**
       * Get the readers.
       *
       * @returns {string[]} Readers
       */

    }, {
      key: "readers",
      get: function get() {
        return Array.isArray(this.entity._acl.r) ? this.entity._acl.r : [];
      }
      /**
       * Get the writers.
       *
       * @returns {string[]} Writers
       */

    }, {
      key: "writers",
      get: function get() {
        return Array.isArray(this.entity._acl.w) ? this.entity._acl.w : [];
      }
      /**
       * Get the reader groups.
       *
       * @returns {string[]} Reader groups
       */

    }, {
      key: "readerGroups",
      get: function get() {
        return this.entity._acl.groups && Array.isArray(this.entity._acl.groups.r) ? this.entity._acl.groups.r : [];
      }
      /**
       * Get the writer groups.
       *
       * @returns {string[]} Writer groups
       */

    }, {
      key: "writerGroups",
      get: function get() {
        return this.entity._acl.groups && Array.isArray(this.entity._acl.groups.w) ? this.entity._acl.groups.w : [];
      }
      /**
       * Set the globally readable permission.
       *
       * @param {boolean} gr Globally readable
       */

    }, {
      key: "globallyReadable",
      set: function set(gr) {
        this.entity._acl.gr = gr === true;
      }
      /**
       * Set the globally writable permission.
       *
       * @param {boolean} gw Globally writable
       */

    }, {
      key: "globallyWritable",
      set: function set(gw) {
        this.entity._acl.gw = gw === true;
      }
    }]);
    return Acl;
  }();

  _exports.Acl = Acl;
});

/***/ }),

/***/ "../../packages/kinvey-aggregation/lib/aggregation.js":
/*!*******************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-aggregation/lib/aggregation.js ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! lodash/isArray */ "../../node_modules/lodash/isArray.js"), __webpack_require__(/*! kinvey-query */ "../../packages/kinvey-query/lib/query.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _isArray, _kinveyQuery) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.count = count;
  _exports.sum = sum;
  _exports.min = min;
  _exports.max = max;
  _exports.average = average;
  _exports.Aggregation = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _isArray = _interopRequireDefault(_isArray);

  /**
   * This class represents an aggregation that can be used to group data.
   */
  var Aggregation =
  /*#__PURE__*/
  function () {
    function Aggregation(aggregation) {
      (0, _classCallCheck2.default)(this, Aggregation);
      var config = Object.assign({}, {
        query: null,
        initial: {},
        key: {},
        reduceFn: function reduceFn() {
          return null;
        }
      }, aggregation);
      this.query = config.query;
      this.initial = config.initial;
      this.key = config.key;
      this.reduceFn = config.reduceFn;
    }

    (0, _createClass2.default)(Aggregation, [{
      key: "by",

      /**
       * Adds the filed to the array of fields.
       *
       * @param {string} field
       * @returns {Aggregation} Aggregation
       */
      value: function by(field) {
        this.key[field] = true;
        return this;
      }
    }, {
      key: "toPlainObject",
      value: function toPlainObject() {
        return {
          key: this.key,
          initial: this.initial,
          reduce: this.reduceFn,
          reduceFn: this.reduceFn,
          condition: this.query ? this.query.toPlainObject().filter : {},
          query: this.query ? this.query.toPlainObject() : null
        };
      }
    }, {
      key: "query",
      get: function get() {
        return this._query;
      },
      set: function set(query) {
        if (query && !(query instanceof _kinveyQuery.Query)) {
          throw new Error('Query must be an instance of Query class.');
        }

        this._query = query;
      }
    }]);
    return Aggregation;
  }();
  /**
   * Creates an aggregation that will return the count for a field on an array of data.
   *
   * @param {string} field Field
   * @returns {Aggregation} Aggregation
   */


  _exports.Aggregation = Aggregation;

  function count() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var aggregation = new Aggregation({
      reduceFn: function reduceFn(result, doc, key) {
        var val = doc[key];

        if (val) {
          // eslint-disable-next-line no-param-reassign
          result[val] = typeof result[val] === 'undefined' ? 1 : result[val] + 1;
        }

        return result;
      }
    });
    aggregation.by(field);
    return aggregation;
  }
  /**
   * Creates an aggregation that will return the sum for a field on an array of data.
   *
   * @param {string} field Field
   * @returns {Aggregation} Aggregation
   */


  function sum() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var aggregation = new Aggregation({
      initial: {
        sum: 0
      },
      reduceFn: function reduceFn(result, doc, key) {
        // eslint-disable-next-line no-param-reassign
        result.sum += doc[key];
        return result;
      }
    });
    aggregation.by(field);
    return aggregation;
  }
  /**
   * Creates an aggregation that will return the min value for a field on an array of data.
   *
   * @param {string} field Field
   * @returns {Aggregation} Aggregation
   */


  function min() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var aggregation = new Aggregation({
      initial: {
        min: Infinity
      },
      reduceFn: function reduceFn(result, doc, key) {
        // eslint-disable-next-line no-param-reassign
        result.min = Math.min(result.min, doc[key]);
        return result;
      }
    });
    aggregation.by(field);
    return aggregation;
  }
  /**
   * Creates an aggregation that will return the max value for a field on an array of data.
   *
   * @param {string} field Field
   * @returns {Aggregation} Aggregation
   */


  function max() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var aggregation = new Aggregation({
      initial: {
        max: -Infinity
      },
      reduceFn: function reduceFn(result, doc, key) {
        // eslint-disable-next-line no-param-reassign
        result.max = Math.max(result.max, doc[key]);
        return result;
      }
    });
    aggregation.by(field);
    return aggregation;
  }
  /**
   * Creates an aggregation that will return the average value for a field on an array of data.
   *
   * @param {string} field Field
   * @returns {Aggregation} Aggregation
   */


  function average() {
    var field = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var aggregation = new Aggregation({
      initial: {
        count: 0,
        average: 0
      },
      reduceFn: function reduceFn(result, doc, key) {
        // eslint-disable-next-line no-param-reassign
        result.average = (result.average * result.count + doc[key]) / (result.count + 1); // eslint-disable-next-line no-param-reassign

        result.count += 1;
        return result;
      }
    });
    aggregation.by(field);
    return aggregation;
  }
});

/***/ }),

/***/ "../../packages/kinvey-app/lib/app.js":
/*!***************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-app/lib/app.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! lodash/isString */ "../../node_modules/lodash/isString.js"), __webpack_require__(/*! lodash/isNumber */ "../../node_modules/lodash/isNumber.js"), __webpack_require__(/*! kinvey-errors */ "../../packages/kinvey-errors/lib/index.js"), __webpack_require__(/*! url */ "../../node_modules/url/url.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _isString, _isNumber, _kinveyErrors, _url) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.init = init;
  _exports.initialize = initialize;
  _exports.getConfig = getConfig;
  _exports.getAppVersion = getAppVersion;
  _exports.setAppVersion = setAppVersion;
  _isString = _interopRequireDefault(_isString);
  _isNumber = _interopRequireDefault(_isNumber);
  var DEFAULT_TIMEOUT = 60000;

  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  function uuidv4() {
    return "".concat(s4()).concat(s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4(), "-").concat(s4()).concat(s4()).concat(s4());
  }

  var internalConfig;

  function init() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var appKey = config.appKey,
        appSecret = config.appSecret,
        masterSecret = config.masterSecret,
        appVersion = config.appVersion,
        instanceId = config.instanceId,
        encryptionKey = config.encryptionKey,
        defaultTimeout = config.defaultTimeout;
    var apiHostname = 'https://baas.kinvey.com';
    var authHostname = 'https://auth.kinvey.com';

    if (instanceId) {
      if (!(0, _isString.default)(instanceId)) {
        throw new _kinveyErrors.KinveyError('Instance ID must be a string.');
      }

      apiHostname = "https://".concat(instanceId, "-baas.kinvey.com");
      authHostname = "https://".concat(instanceId, "-auth.kinvey.com");
    } else {
      if ((0, _isString.default)(config.apiHostname)) {
        apiHostname = /^https?:\/\//i.test(config.apiHostname) ? config.apiHostname : "https://".concat(config.apiHostname);
      }

      if ((0, _isString.default)(config.micHostname)) {
        authHostname = /^https?:\/\//i.test(config.micHostname) ? config.micHostname : "https://".concat(config.micHostname);
      }
    }

    if (!(0, _isString.default)(appKey)) {
      throw new _kinveyErrors.KinveyError('An appKey is required and must be a string.');
    }

    if (!(0, _isString.default)(appSecret) && !(0, _isString.default)(masterSecret)) {
      throw new _kinveyErrors.KinveyError('An appSecret is required and must be a string.');
    }

    if (appVersion && !(0, _isString.default)(appVersion)) {
      throw new _kinveyErrors.KinveyError('An appVersion must be a string.');
    }

    if (encryptionKey && !(0, _isString.default)(encryptionKey)) {
      throw new _kinveyErrors.KinveyError('An encryptionKey must be a string.');
    } // TODO: Add check in future
    // if (defaultTimeout != null && (!isNumber(defaultTimeout) || defaultTimeout < 1)) {
    //   throw new KineyError('A defaultTimeout must be a number greater then 0.');
    // }


    internalConfig = {
      appKey: appKey,
      appSecret: appSecret,
      masterSecret: masterSecret,
      encryptionKey: encryptionKey,
      appVersion: appVersion,
      defaultTimeout: (0, _isNumber.default)(defaultTimeout) && defaultTimeout >= 0 ? defaultTimeout : DEFAULT_TIMEOUT,
      auth: {
        protocol: (0, _url.parse)(authHostname).protocol,
        host: (0, _url.parse)(authHostname).host,
        hostname: authHostname
      },
      api: {
        protocol: (0, _url.parse)(apiHostname).protocol,
        host: (0, _url.parse)(apiHostname).host,
        hostname: apiHostname
      },
      device: {
        id: uuidv4()
      }
    }; // TODO: change to return the config provided
    // Right now we are returning the whole config for
    // backwards compatibility

    return {
      deviceId: internalConfig.device.id,
      apiProtocol: internalConfig.api.protocol,
      apiHost: internalConfig.api.host,
      apiHostname: (0, _url.format)({
        protocol: internalConfig.api.protocol,
        host: internalConfig.api.host
      }),
      micProtocol: internalConfig.auth.protocol,
      micHost: internalConfig.auth.host,
      micHostname: (0, _url.format)({
        protocol: internalConfig.auth.protocol,
        host: internalConfig.auth.host
      }),
      appKey: internalConfig.appKey,
      appSecret: internalConfig.appSecret,
      masterSecret: internalConfig.masterSecret,
      encryptionKey: internalConfig.encryptionKey,
      appVersion: internalConfig.appVersion,
      defaultTimeout: internalConfig.defaultTimeout
    };
  }
  /**
   * @deprecated Please use init().
   */


  function initialize() {
    return Promise.reject(new _kinveyErrors.KinveyError('initialize() has been deprecated. Please use init().'));
  }
  /**
   * @private
   */


  function getConfig() {
    if (!internalConfig) {
      throw new _kinveyErrors.KinveyError('You have not initialized the Kinvey JavaScript SDK.');
    }

    return internalConfig;
  }
  /**
   * The version of your app. It will sent with Kinvey API requests
   * using the X-Kinvey-Api-Version header.
   *
   * @return {string} The version of your app.
   */


  function getAppVersion() {
    var config = getConfig();
    return config.appVersion;
  }
  /**
   * Set the version of your app. It will sent with Kinvey API requests
   * using the X-Kinvey-Api-Version header.
   *
   * @param  {string} appVersion  App version.
   */


  function setAppVersion(appVersion) {
    var config = getConfig();
    config.appVersion = appVersion;
  }
});

/***/ }),

/***/ "../../packages/kinvey-cache-nativescript-sqlite/lib/index.js":
/*!***************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-cache-nativescript-sqlite/lib/index.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! kinvey-cache */ "../../packages/kinvey-cache/lib/cache.js"), __webpack_require__(/*! ./sqlite */ "../../packages/kinvey-cache-nativescript-sqlite/lib/sqlite.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _kinveyCache, SQLite) {
  "use strict";

  var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.register = register;
  SQLite = _interopRequireWildcard(SQLite);

  function register() {
    (0, _kinveyCache.register)(SQLite);
  }
});

/***/ }),

/***/ "../../packages/kinvey-cache-nativescript-sqlite/lib/sqlite.js":
/*!****************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-cache-nativescript-sqlite/lib/sqlite.js ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__(/*! @babel/runtime/helpers/slicedToArray */ "../../node_modules/@babel/runtime/helpers/slicedToArray.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _slicedToArray2) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.find = find;
  _exports.count = count;
  _exports.findById = findById;
  _exports.save = save;
  _exports.removeById = removeById;
  _exports.clear = clear;
  _exports.clearAll = clearAll;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _slicedToArray2 = _interopRequireDefault(_slicedToArray2);

  var SQLite = __webpack_require__(/*! nativescript-sqlite */ "nativescript-sqlite");

  var MASTER_TABLE_NAME = 'sqlite_master';

  function execute(dbName, tableName, sqlQueries) {
    var write = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    var escapedTableName = "\"".concat(tableName, "\"");
    var isMaster = tableName === MASTER_TABLE_NAME;
    return new SQLite(dbName).then(function (db) {
      // This will set the database to return the results as an array of objects
      db.resultType(SQLite.RESULTSASOBJECT);

      if (write && !isMaster) {
        db.execSQL("CREATE TABLE IF NOT EXISTS ".concat(escapedTableName, " (key BLOB PRIMARY KEY NOT NULL, value BLOB NOT NULL)")).then(function () {
          return db;
        });
      }

      return db;
    }).then(function (db) {
      return Promise.all(sqlQueries.map(function (_ref) {
        var _ref2 = (0, _slicedToArray2.default)(_ref, 2),
            sqlQuery = _ref2[0],
            _ref2$ = _ref2[1],
            parameters = _ref2$ === void 0 ? [] : _ref2$;

        var promise;

        if (write) {
          promise = db.execSQL(sqlQuery.replace('#{table}', escapedTableName), parameters);
        } else {
          promise = db.all(sqlQuery, parameters);
        }

        return promise.then(function () {
          var resultSet = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          if (write) {
            return resultSet;
          } else if (!write && Array.isArray(resultSet) && resultSet.length > 0) {
            return resultSet.map(function (row) {
              try {
                return isMaster ? row.value : JSON.parse(row.value);
              } catch (error) {
                // Catch the error
                return row.value;
              }
            });
          }
        });
      })).then(function (responses) {
        return db.close().then(function () {
          return responses;
        });
      }).catch(function (error) {
        return db.close().then(function () {
          throw error;
        });
      });
    });
  }

  function find(_x, _x2) {
    return _find.apply(this, arguments);
  }

  function _find() {
    _find = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(dbName, tableName) {
      var response;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return execute(dbName, tableName, [['SELECT value FROM #{table}']]);

            case 2:
              response = _context.sent;
              return _context.abrupt("return", response.result);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return _find.apply(this, arguments);
  }

  function count(_x3, _x4) {
    return _count.apply(this, arguments);
  }

  function _count() {
    _count = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee2(dbName, tableName) {
      var docs;
      return _regenerator.default.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return find(dbName, tableName);

            case 2:
              docs = _context2.sent;
              return _context2.abrupt("return", docs.length);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));
    return _count.apply(this, arguments);
  }

  function findById(_x5, _x6, _x7) {
    return _findById.apply(this, arguments);
  }

  function _findById() {
    _findById = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee3(dbName, tableName, id) {
      var response;
      return _regenerator.default.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return execute(dbName, tableName, [['SELECT value FROM #{table} WHERE key = ?', [id]]]);

            case 2:
              response = _context3.sent;
              return _context3.abrupt("return", response.result.shift());

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this);
    }));
    return _findById.apply(this, arguments);
  }

  function save(_x8, _x9) {
    return _save.apply(this, arguments);
  }

  function _save() {
    _save = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee4(dbName, tableName) {
      var docs,
          sqlQueries,
          _args4 = arguments;
      return _regenerator.default.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              docs = _args4.length > 2 && _args4[2] !== undefined ? _args4[2] : [];
              sqlQueries = docs.map(function (doc) {
                return ['REPLACE INTO #{table} (key, value) VALUES (?, ?)', [doc._id, JSON.stringify(doc)]];
              });
              _context4.next = 4;
              return execute(dbName, tableName, sqlQueries, true);

            case 4:
              return _context4.abrupt("return", docs);

            case 5:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, this);
    }));
    return _save.apply(this, arguments);
  }

  function removeById(_x10, _x11, _x12) {
    return _removeById.apply(this, arguments);
  }

  function _removeById() {
    _removeById = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee5(dbName, tableName, id) {
      return _regenerator.default.wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return execute(dbName, tableName, [['DELETE FROM #{table} WHERE key = ?', [id]]], true);

            case 2:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, this);
    }));
    return _removeById.apply(this, arguments);
  }

  function clear(_x13, _x14) {
    return _clear.apply(this, arguments);
  }

  function _clear() {
    _clear = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee6(dbName, tableName) {
      return _regenerator.default.wrap(function _callee6$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return execute(dbName, MASTER_TABLE_NAME, [["DROP TABLE IF EXISTS '".concat(tableName, "'")]], true);

            case 2:
              return _context6.abrupt("return", true);

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, _callee6, this);
    }));
    return _clear.apply(this, arguments);
  }

  function clearAll(_x15) {
    return _clearAll.apply(this, arguments);
  }

  function _clearAll() {
    _clearAll = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee7(dbName) {
      var response, tables, sqlQueries;
      return _regenerator.default.wrap(function _callee7$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return execute(dbName, MASTER_TABLE_NAME, [['SELECT name AS value FROM #{collection} WHERE type = ?', ['table']]]);

            case 2:
              response = _context7.sent;
              tables = response.result;

              if (!(tables.length > 0)) {
                _context7.next = 8;
                break;
              }

              sqlQueries = tables.filter(function (table) {
                return /^[a-zA-Z0-9-]{1,128}/.test(table);
              }).map(function (table) {
                return ["DROP TABLE IF EXISTS '".concat(table, "'")];
              });
              _context7.next = 8;
              return execute(dbName, MASTER_TABLE_NAME, sqlQueries, true);

            case 8:
              return _context7.abrupt("return", true);

            case 9:
            case "end":
              return _context7.stop();
          }
        }
      }, _callee7, this);
    }));
    return _clearAll.apply(this, arguments);
  }
});

/***/ }),

/***/ "../../packages/kinvey-cache/lib/cache.js":
/*!*******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-cache/lib/cache.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! kinvey-query */ "../../packages/kinvey-query/lib/query.js"), __webpack_require__(/*! kinvey-aggregation */ "../../packages/kinvey-aggregation/lib/aggregation.js"), __webpack_require__(/*! sift */ "../../node_modules/sift/sift.js"), __webpack_require__(/*! lodash/isEmpty */ "../../node_modules/lodash/isEmpty.js"), __webpack_require__(/*! lodash/isArray */ "../../node_modules/lodash/isArray.js"), __webpack_require__(/*! kinvey-errors */ "../../packages/kinvey-errors/lib/index.js"), __webpack_require__(/*! p-queue */ "../../node_modules/p-queue/index.js"), __webpack_require__(/*! ./utils */ "../../packages/kinvey-cache/lib/utils.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _classCallCheck2, _createClass2, _kinveyQuery, _kinveyAggregation, _sift, _isEmpty, _isArray, _kinveyErrors, _pQueue, _utils) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.register = register;
  _exports.clear = clear;
  _exports.Cache = void 0;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _sift = _interopRequireDefault(_sift);
  _isEmpty = _interopRequireDefault(_isEmpty);
  _isArray = _interopRequireDefault(_isArray);
  _pQueue = _interopRequireDefault(_pQueue);
  var queue = new _pQueue.default({
    concurrency: 1
  });
  var store = {
    find: function find() {
      throw new Error('You must override the default cache adapter.');
    },
    reduce: function reduce() {
      throw new Error('You must override the default cache adapter.');
    },
    count: function count() {
      throw new Error('You must override the default cache adapter.');
    },
    findById: function findById() {
      throw new Error('You must override the default cache adapter.');
    },
    save: function save() {
      throw new Error('You must override the default cache adapter.');
    },
    remove: function remove() {
      throw new Error('You must override the default cache adapter.');
    },
    removeById: function removeById() {
      throw new Error('You must override the default cache adapter.');
    },
    clear: function clear() {
      throw new Error('You must override the default cache adapter.');
    },
    clearAll: function clearAll() {
      throw new Error('You must override the default cache adapter.');
    }
  };
  /**
   * @private
   */

  function register(cacheStore) {
    if (cacheStore) {
      store = cacheStore;
    }
  }

  function generateId() {
    var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 24;
    var chars = 'abcdef0123456789';
    var id = '';

    for (var i = 0, j = chars.length; i < length; i += 1) {
      var pos = Math.floor(Math.random() * j);
      id += chars.substring(pos, pos + 1);
    }

    return id;
  }

  var Cache =
  /*#__PURE__*/
  function () {
    function Cache(storeName, collectionName) {
      (0, _classCallCheck2.default)(this, Cache);
      this.storeName = storeName;
      this.collectionName = collectionName;
    }

    (0, _createClass2.default)(Cache, [{
      key: "find",
      value: function find(query) {
        var _this = this;

        return queue.add(
        /*#__PURE__*/
        (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee() {
          var docs, filter, sort, limit, skip, fields;
          return _regenerator.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return store.find(_this.storeName, _this.collectionName);

                case 2:
                  docs = _context.sent;

                  if (!(query && !(query instanceof _kinveyQuery.Query))) {
                    _context.next = 5;
                    break;
                  }

                  throw new _kinveyErrors.KinveyError('Invalid query. It must be an instance of the Query class.');

                case 5:
                  if (docs.length > 0 && query) {
                    filter = query.filter, sort = query.sort, limit = query.limit, skip = query.skip, fields = query.fields;

                    if (filter && !(0, _isEmpty.default)(filter)) {
                      docs = (0, _sift.default)(filter, docs);
                    }

                    if (!(0, _isEmpty.default)(sort)) {
                      // eslint-disable-next-line arrow-body-style
                      docs.sort(function (a, b) {
                        return Object.keys(sort).reduce(function (result, field) {
                          if (typeof result !== 'undefined') {
                            return result;
                          }

                          if (Object.prototype.hasOwnProperty.call(sort, field)) {
                            var aField = (0, _utils.nested)(a, field);
                            var bField = (0, _utils.nested)(b, field);
                            var modifier = sort[field]; // -1 (descending) or 1 (ascending)

                            if (aField !== null && typeof aField !== 'undefined' && (bField === null || typeof bField === 'undefined')) {
                              return 1 * modifier;
                            } else if (bField !== null && typeof bField !== 'undefined' && (aField === null || typeof aField === 'undefined')) {
                              return -1 * modifier;
                            } else if (typeof aField === 'undefined' && bField === null) {
                              return 0;
                            } else if (aField === null && typeof bField === 'undefined') {
                              return 0;
                            } else if (aField !== bField) {
                              return (aField < bField ? -1 : 1) * modifier;
                            }
                          }

                          return 0;
                        }, undefined);
                      });
                    }

                    if (skip > 0) {
                      if (limit < Infinity) {
                        docs = docs.slice(skip, skip + limit);
                      } else {
                        docs = docs.slice(skip);
                      }
                    } else if (limit < Infinity) {
                      docs = docs.slice(0, limit);
                    }

                    if ((0, _isArray.default)(fields) && fields.length > 0) {
                      docs = docs.map(function (doc) {
                        var modifiedDoc = doc;
                        Object.keys(modifiedDoc).forEach(function (key) {
                          if (fields.indexOf(key) === -1) {
                            delete modifiedDoc[key];
                          }
                        });
                        return modifiedDoc;
                      });
                    }
                  }

                  return _context.abrupt("return", docs);

                case 7:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        })));
      }
    }, {
      key: "group",
      value: function () {
        var _group = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2(aggregation) {
          var query, initial, key, reduceFn, fields, docs;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (aggregation instanceof _kinveyAggregation.Aggregation) {
                    _context2.next = 2;
                    break;
                  }

                  throw new _kinveyErrors.KinveyError('Invalid aggregation. It must be an instance of the Aggregation class.');

                case 2:
                  query = aggregation.query, initial = aggregation.initial, key = aggregation.key, reduceFn = aggregation.reduceFn;
                  fields = Object.keys(key);
                  _context2.next = 6;
                  return this.find(query);

                case 6:
                  docs = _context2.sent;

                  if (!(fields.length > 0)) {
                    _context2.next = 9;
                    break;
                  }

                  return _context2.abrupt("return", fields.reduce(function (results, field) {
                    results[field] = docs.reduce(function (result, doc) {
                      return reduceFn(result, doc, field) || result;
                    }, initial);
                    return results;
                  }, {}));

                case 9:
                  return _context2.abrupt("return", docs.reduce(function (result, doc) {
                    return reduceFn(doc, result) || result;
                  }, Object.assign({}, initial)));

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function group(_x) {
          return _group.apply(this, arguments);
        };
      }()
    }, {
      key: "count",
      value: function () {
        var _count = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3(query) {
          var _this2 = this;

          var docs;
          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  if (!query) {
                    _context3.next = 5;
                    break;
                  }

                  _context3.next = 3;
                  return this.find(query);

                case 3:
                  docs = _context3.sent;
                  return _context3.abrupt("return", docs.length);

                case 5:
                  return _context3.abrupt("return", queue.add(function () {
                    return store.count(_this2.storeName, _this2.collectionName);
                  }));

                case 6:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        return function count(_x2) {
          return _count.apply(this, arguments);
        };
      }()
    }, {
      key: "findById",
      value: function findById(id) {
        var _this3 = this;

        return queue.add(function () {
          return store.findById(_this3.storeName, _this3.collectionName, id);
        });
      }
    }, {
      key: "save",
      value: function save(docs) {
        var _this4 = this;

        return queue.add(
        /*#__PURE__*/
        (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee4() {
          var docsToSave, singular;
          return _regenerator.default.wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  docsToSave = docs;
                  singular = false;

                  if (docs) {
                    _context4.next = 4;
                    break;
                  }

                  return _context4.abrupt("return", null);

                case 4:
                  if (!(0, _isArray.default)(docs)) {
                    singular = true;
                    docsToSave = [docs];
                  } // Clone the docs


                  docsToSave = docsToSave.slice(0, docsToSave.length); // Save the docs

                  if (!(docsToSave.length > 0)) {
                    _context4.next = 11;
                    break;
                  }

                  docsToSave = docsToSave.map(function (doc) {
                    if (!doc._id) {
                      return Object.assign({}, {
                        _id: generateId(),
                        _kmd: Object.assign({}, doc._kmd, {
                          local: true
                        })
                      }, doc);
                    }

                    return doc;
                  });
                  _context4.next = 10;
                  return store.save(_this4.storeName, _this4.collectionName, docsToSave);

                case 10:
                  return _context4.abrupt("return", singular ? docsToSave.shift() : docsToSave);

                case 11:
                  return _context4.abrupt("return", docs);

                case 12:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, this);
        })));
      }
    }, {
      key: "remove",
      value: function () {
        var _remove = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee5(query) {
          var _this5 = this;

          var docs, results;
          return _regenerator.default.wrap(function _callee5$(_context5) {
            while (1) {
              switch (_context5.prev = _context5.next) {
                case 0:
                  _context5.next = 2;
                  return this.find(query);

                case 2:
                  docs = _context5.sent;

                  if (!query) {
                    _context5.next = 8;
                    break;
                  }

                  _context5.next = 6;
                  return Promise.all(docs.map(function (doc) {
                    return _this5.removeById(doc._id);
                  }));

                case 6:
                  results = _context5.sent;
                  return _context5.abrupt("return", results.reduce(function (totalCount, count) {
                    return totalCount + count;
                  }, 0));

                case 8:
                  _context5.next = 10;
                  return this.clear();

                case 10:
                  return _context5.abrupt("return", docs.length);

                case 11:
                case "end":
                  return _context5.stop();
              }
            }
          }, _callee5, this);
        }));

        return function remove(_x3) {
          return _remove.apply(this, arguments);
        };
      }()
    }, {
      key: "removeById",
      value: function removeById(id) {
        var _this6 = this;

        return queue.add(function () {
          return store.removeById(_this6.storeName, _this6.collectionName, id);
        });
      }
    }, {
      key: "clear",
      value: function clear() {
        var _this7 = this;

        return queue.add(function () {
          return store.clear(_this7.storeName, _this7.collectionName);
        });
      }
    }]);
    return Cache;
  }();

  _exports.Cache = Cache;

  function clear(storeName) {
    return queue.add(function () {
      return store.clearAll(storeName);
    });
  }
});

/***/ }),

/***/ "../../packages/kinvey-cache/lib/utils.js":
/*!*******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-cache/lib/utils.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.nested = nested;

  function nested(obj, dotProperty, value) {
    if (!dotProperty) {
      return value || obj;
    }

    var parts = dotProperty.split('.');
    var currentProperty = parts.shift();
    var currentObj = obj;

    while (currentProperty && typeof currentObj !== 'undefined') {
      currentObj = currentObj[currentProperty];
      currentProperty = parts.shift();
    }

    return typeof currentObj === 'undefined' ? value : currentObj;
  }
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/activeUser.js":
/*!*************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/activeUser.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var ActiveUserError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(ActiveUserError, _BaseError);

    function ActiveUserError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'An active user already exists.';
      (0, _classCallCheck2.default)(this, ActiveUserError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ActiveUserError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), ActiveUserError);
      } // Custom debugging information


      _this.name = 'ActiveUserError';
      return _this;
    }

    return ActiveUserError;
  }(_base.default);

  _exports.default = ActiveUserError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/apiVersionNotAvailable.js":
/*!*************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/apiVersionNotAvailable.js ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var APIVersionNotAvailableError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(APIVersionNotAvailableError, _BaseError);

    function APIVersionNotAvailableError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'This API version is not available for your app.';
      (0, _classCallCheck2.default)(this, APIVersionNotAvailableError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(APIVersionNotAvailableError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), APIVersionNotAvailableError);
      } // Custom debugging information


      _this.name = 'APIVersionNotAvailableError';
      return _this;
    }

    return APIVersionNotAvailableError;
  }(_base.default);

  _exports.default = APIVersionNotAvailableError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/apiVersionNotImplemented.js":
/*!***************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/apiVersionNotImplemented.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var APIVersionNotImplementedError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(APIVersionNotImplementedError, _BaseError);

    function APIVersionNotImplementedError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'This API version is not implemented.';
      (0, _classCallCheck2.default)(this, APIVersionNotImplementedError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(APIVersionNotImplementedError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), APIVersionNotImplementedError);
      } // Custom debugging information


      _this.name = 'APIVersionNotImplementedError';
      return _this;
    }

    return APIVersionNotImplementedError;
  }(_base.default);

  _exports.default = APIVersionNotImplementedError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/appProblem.js":
/*!*************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/appProblem.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var AppProblemError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(AppProblemError, _BaseError);

    function AppProblemError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'There is a problem with this app backend that prevents execution of this operation. Please contact support@kinvey.com for assistance.';
      (0, _classCallCheck2.default)(this, AppProblemError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(AppProblemError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), AppProblemError);
      } // Custom debugging information


      _this.name = 'AppProblemError';
      return _this;
    }

    return AppProblemError;
  }(_base.default);

  _exports.default = AppProblemError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/badRequest.js":
/*!*************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/badRequest.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var BadRequestError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(BadRequestError, _BaseError);

    function BadRequestError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unable to understand request.';
      (0, _classCallCheck2.default)(this, BadRequestError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(BadRequestError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), BadRequestError);
      } // Custom debugging information


      _this.name = 'BadRequestError';
      return _this;
    }

    return BadRequestError;
  }(_base.default);

  _exports.default = BadRequestError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/base.js":
/*!*******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/base.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "../../node_modules/@babel/runtime/helpers/wrapNativeSuper.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _wrapNativeSuper2) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _wrapNativeSuper2 = _interopRequireDefault(_wrapNativeSuper2);

  var BaseError =
  /*#__PURE__*/
  function (_Error) {
    (0, _inherits2.default)(BaseError, _Error);

    function BaseError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'An error occurred.';
      var debug = arguments.length > 1 ? arguments[1] : undefined;
      var code = arguments.length > 2 ? arguments[2] : undefined;
      var kinveyRequestId = arguments.length > 3 ? arguments[3] : undefined;
      (0, _classCallCheck2.default)(this, BaseError);

      for (var _len = arguments.length, args = new Array(_len > 4 ? _len - 4 : 0), _key = 4; _key < _len; _key++) {
        args[_key - 4] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(BaseError)).call.apply(_getPrototypeOf2, [this].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), BaseError);
      } // Custom debugging information


      _this.name = 'BaseError';
      _this.message = message;
      _this.debug = debug;
      _this.code = code;
      _this.kinveyRequestId = kinveyRequestId;
      return _this;
    }

    return BaseError;
  }((0, _wrapNativeSuper2.default)(Error));

  _exports.default = BaseError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/bl.js":
/*!*****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/bl.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var BLError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(BLError, _BaseError);

    function BLError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The Business Logic script did not complete.';
      (0, _classCallCheck2.default)(this, BLError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(BLError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), BLError);
      } // Custom debugging information


      _this.name = 'BLError';
      return _this;
    }

    return BLError;
  }(_base.default);

  _exports.default = BLError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/corsDisabled.js":
/*!***************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/corsDisabled.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var CORSDisabledError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(CORSDisabledError, _BaseError);

    function CORSDisabledError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Cross Origin Support is disabled for this application.';
      (0, _classCallCheck2.default)(this, CORSDisabledError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(CORSDisabledError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), CORSDisabledError);
      } // Custom debugging information


      _this.name = 'CORSDisabledError';
      return _this;
    }

    return CORSDisabledError;
  }(_base.default);

  _exports.default = CORSDisabledError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/duplicateEndUsers.js":
/*!********************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/duplicateEndUsers.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var DuplicateEndUsersError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(DuplicateEndUsersError, _BaseError);

    function DuplicateEndUsersError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'More than one user registered with this username for this application.';
      (0, _classCallCheck2.default)(this, DuplicateEndUsersError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(DuplicateEndUsersError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), DuplicateEndUsersError);
      } // Custom debugging information


      _this.name = 'DuplicateEndUsersError';
      return _this;
    }

    return DuplicateEndUsersError;
  }(_base.default);

  _exports.default = DuplicateEndUsersError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/featureUnavailable.js":
/*!*********************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/featureUnavailable.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var FeatureUnavailableError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(FeatureUnavailableError, _BaseError);

    function FeatureUnavailableError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Requested functionality is unavailable in this API version.';
      (0, _classCallCheck2.default)(this, FeatureUnavailableError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(FeatureUnavailableError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), FeatureUnavailableError);
      } // Custom debugging information


      _this.name = 'FeatureUnavailableError';
      return _this;
    }

    return FeatureUnavailableError;
  }(_base.default);

  _exports.default = FeatureUnavailableError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/incompleteRequestBody.js":
/*!************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/incompleteRequestBody.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var IncompleteRequestBodyError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(IncompleteRequestBodyError, _BaseError);

    function IncompleteRequestBodyError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The request body is either missing or incomplete.';
      (0, _classCallCheck2.default)(this, IncompleteRequestBodyError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(IncompleteRequestBodyError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), IncompleteRequestBodyError);
      } // Custom debugging information


      _this.name = 'IncompleteRequestBodyError';
      return _this;
    }

    return IncompleteRequestBodyError;
  }(_base.default);

  _exports.default = IncompleteRequestBodyError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/index.js":
/*!********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/index.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./activeUser */ "../../packages/kinvey-errors/lib/activeUser.js"), __webpack_require__(/*! ./apiVersionNotAvailable */ "../../packages/kinvey-errors/lib/apiVersionNotAvailable.js"), __webpack_require__(/*! ./apiVersionNotImplemented */ "../../packages/kinvey-errors/lib/apiVersionNotImplemented.js"), __webpack_require__(/*! ./appProblem */ "../../packages/kinvey-errors/lib/appProblem.js"), __webpack_require__(/*! ./badRequest */ "../../packages/kinvey-errors/lib/badRequest.js"), __webpack_require__(/*! ./bl */ "../../packages/kinvey-errors/lib/bl.js"), __webpack_require__(/*! ./corsDisabled */ "../../packages/kinvey-errors/lib/corsDisabled.js"), __webpack_require__(/*! ./duplicateEndUsers */ "../../packages/kinvey-errors/lib/duplicateEndUsers.js"), __webpack_require__(/*! ./featureUnavailable */ "../../packages/kinvey-errors/lib/featureUnavailable.js"), __webpack_require__(/*! ./incompleteRequestBody */ "../../packages/kinvey-errors/lib/incompleteRequestBody.js"), __webpack_require__(/*! ./indirectCollectionAccessDisallowed */ "../../packages/kinvey-errors/lib/indirectCollectionAccessDisallowed.js"), __webpack_require__(/*! ./insufficientCredentials */ "../../packages/kinvey-errors/lib/insufficientCredentials.js"), __webpack_require__(/*! ./invalidCachedQuery */ "../../packages/kinvey-errors/lib/invalidCachedQuery.js"), __webpack_require__(/*! ./invalidCredentials */ "../../packages/kinvey-errors/lib/invalidCredentials.js"), __webpack_require__(/*! ./invalidIdentifier */ "../../packages/kinvey-errors/lib/invalidIdentifier.js"), __webpack_require__(/*! ./invalidQuerySyntax */ "../../packages/kinvey-errors/lib/invalidQuerySyntax.js"), __webpack_require__(/*! ./jsonParse */ "../../packages/kinvey-errors/lib/jsonParse.js"), __webpack_require__(/*! ./kinvey */ "../../packages/kinvey-errors/lib/kinvey.js"), __webpack_require__(/*! ./kinveyInternalErrorRetry */ "../../packages/kinvey-errors/lib/kinveyInternalErrorRetry.js"), __webpack_require__(/*! ./kinveyInternalErrorStop */ "../../packages/kinvey-errors/lib/kinveyInternalErrorStop.js"), __webpack_require__(/*! ./missingConfiguration */ "../../packages/kinvey-errors/lib/missingConfiguration.js"), __webpack_require__(/*! ./missingQuery */ "../../packages/kinvey-errors/lib/missingQuery.js"), __webpack_require__(/*! ./missingRequestHeader */ "../../packages/kinvey-errors/lib/missingRequestHeader.js"), __webpack_require__(/*! ./missingRequestParameter */ "../../packages/kinvey-errors/lib/missingRequestParameter.js"), __webpack_require__(/*! ./mobileIdentityConnect */ "../../packages/kinvey-errors/lib/mobileIdentityConnect.js"), __webpack_require__(/*! ./networkConnection */ "../../packages/kinvey-errors/lib/networkConnection.js"), __webpack_require__(/*! ./noActiveUser */ "../../packages/kinvey-errors/lib/noActiveUser.js"), __webpack_require__(/*! ./noResponse */ "../../packages/kinvey-errors/lib/noResponse.js"), __webpack_require__(/*! ./notFound */ "../../packages/kinvey-errors/lib/notFound.js"), __webpack_require__(/*! ./parameterValueOutOfRange */ "../../packages/kinvey-errors/lib/parameterValueOutOfRange.js"), __webpack_require__(/*! ./popup */ "../../packages/kinvey-errors/lib/popup.js"), __webpack_require__(/*! ./query */ "../../packages/kinvey-errors/lib/query.js"), __webpack_require__(/*! ./resultSetSizeExceeded */ "../../packages/kinvey-errors/lib/resultSetSizeExceeded.js"), __webpack_require__(/*! ./server */ "../../packages/kinvey-errors/lib/server.js"), __webpack_require__(/*! ./staleRequest */ "../../packages/kinvey-errors/lib/staleRequest.js"), __webpack_require__(/*! ./sync */ "../../packages/kinvey-errors/lib/sync.js"), __webpack_require__(/*! ./timeout */ "../../packages/kinvey-errors/lib/timeout.js"), __webpack_require__(/*! ./userAlreadyExists */ "../../packages/kinvey-errors/lib/userAlreadyExists.js"), __webpack_require__(/*! ./writesToCollectionDisallowed */ "../../packages/kinvey-errors/lib/writesToCollectionDisallowed.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _activeUser, _apiVersionNotAvailable, _apiVersionNotImplemented, _appProblem, _badRequest, _bl, _corsDisabled, _duplicateEndUsers, _featureUnavailable, _incompleteRequestBody, _indirectCollectionAccessDisallowed, _insufficientCredentials, _invalidCachedQuery, _invalidCredentials, _invalidIdentifier, _invalidQuerySyntax, _jsonParse, _kinvey, _kinveyInternalErrorRetry, _kinveyInternalErrorStop, _missingConfiguration, _missingQuery, _missingRequestHeader, _missingRequestParameter, _mobileIdentityConnect, _networkConnection, _noActiveUser, _noResponse, _notFound, _parameterValueOutOfRange, _popup, _query, _resultSetSizeExceeded, _server, _staleRequest, _sync, _timeout, _userAlreadyExists, _writesToCollectionDisallowed) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.defineProperty(_exports, "ActiveUserError", {
    enumerable: true,
    get: function get() {
      return _activeUser.default;
    }
  });
  Object.defineProperty(_exports, "APIVersionNotAvailableError", {
    enumerable: true,
    get: function get() {
      return _apiVersionNotAvailable.default;
    }
  });
  Object.defineProperty(_exports, "APIVersionNotImplementedError", {
    enumerable: true,
    get: function get() {
      return _apiVersionNotImplemented.default;
    }
  });
  Object.defineProperty(_exports, "AppProblemError", {
    enumerable: true,
    get: function get() {
      return _appProblem.default;
    }
  });
  Object.defineProperty(_exports, "BadRequestError", {
    enumerable: true,
    get: function get() {
      return _badRequest.default;
    }
  });
  Object.defineProperty(_exports, "BLError", {
    enumerable: true,
    get: function get() {
      return _bl.default;
    }
  });
  Object.defineProperty(_exports, "CORSDisabledError", {
    enumerable: true,
    get: function get() {
      return _corsDisabled.default;
    }
  });
  Object.defineProperty(_exports, "DuplicateEndUsersError", {
    enumerable: true,
    get: function get() {
      return _duplicateEndUsers.default;
    }
  });
  Object.defineProperty(_exports, "FeatureUnavailableError", {
    enumerable: true,
    get: function get() {
      return _featureUnavailable.default;
    }
  });
  Object.defineProperty(_exports, "IncompleteRequestBodyError", {
    enumerable: true,
    get: function get() {
      return _incompleteRequestBody.default;
    }
  });
  Object.defineProperty(_exports, "IndirectCollectionAccessDisallowedError", {
    enumerable: true,
    get: function get() {
      return _indirectCollectionAccessDisallowed.default;
    }
  });
  Object.defineProperty(_exports, "InsufficientCredentialsError", {
    enumerable: true,
    get: function get() {
      return _insufficientCredentials.default;
    }
  });
  Object.defineProperty(_exports, "InvalidCachedQueryError", {
    enumerable: true,
    get: function get() {
      return _invalidCachedQuery.default;
    }
  });
  Object.defineProperty(_exports, "InvalidCredentialsError", {
    enumerable: true,
    get: function get() {
      return _invalidCredentials.default;
    }
  });
  Object.defineProperty(_exports, "InvalidIdentifierError", {
    enumerable: true,
    get: function get() {
      return _invalidIdentifier.default;
    }
  });
  Object.defineProperty(_exports, "InvalidQuerySyntaxError", {
    enumerable: true,
    get: function get() {
      return _invalidQuerySyntax.default;
    }
  });
  Object.defineProperty(_exports, "JSONParseError", {
    enumerable: true,
    get: function get() {
      return _jsonParse.default;
    }
  });
  Object.defineProperty(_exports, "KinveyError", {
    enumerable: true,
    get: function get() {
      return _kinvey.default;
    }
  });
  Object.defineProperty(_exports, "KinveyInternalErrorRetry", {
    enumerable: true,
    get: function get() {
      return _kinveyInternalErrorRetry.default;
    }
  });
  Object.defineProperty(_exports, "KinveyInternalErrorStop", {
    enumerable: true,
    get: function get() {
      return _kinveyInternalErrorStop.default;
    }
  });
  Object.defineProperty(_exports, "MissingConfigurationError", {
    enumerable: true,
    get: function get() {
      return _missingConfiguration.default;
    }
  });
  Object.defineProperty(_exports, "MissingQueryError", {
    enumerable: true,
    get: function get() {
      return _missingQuery.default;
    }
  });
  Object.defineProperty(_exports, "MissingRequestHeaderError", {
    enumerable: true,
    get: function get() {
      return _missingRequestHeader.default;
    }
  });
  Object.defineProperty(_exports, "MissingRequestParameterError", {
    enumerable: true,
    get: function get() {
      return _missingRequestParameter.default;
    }
  });
  Object.defineProperty(_exports, "MobileIdentityConnectError", {
    enumerable: true,
    get: function get() {
      return _mobileIdentityConnect.default;
    }
  });
  Object.defineProperty(_exports, "NetworkConnectionError", {
    enumerable: true,
    get: function get() {
      return _networkConnection.default;
    }
  });
  Object.defineProperty(_exports, "NoActiveUserError", {
    enumerable: true,
    get: function get() {
      return _noActiveUser.default;
    }
  });
  Object.defineProperty(_exports, "NoResponseError", {
    enumerable: true,
    get: function get() {
      return _noResponse.default;
    }
  });
  Object.defineProperty(_exports, "NotFoundError", {
    enumerable: true,
    get: function get() {
      return _notFound.default;
    }
  });
  Object.defineProperty(_exports, "ParameterValueOutOfRangeError", {
    enumerable: true,
    get: function get() {
      return _parameterValueOutOfRange.default;
    }
  });
  Object.defineProperty(_exports, "PopupError", {
    enumerable: true,
    get: function get() {
      return _popup.default;
    }
  });
  Object.defineProperty(_exports, "QueryError", {
    enumerable: true,
    get: function get() {
      return _query.default;
    }
  });
  Object.defineProperty(_exports, "ResultSetSizeExceededError", {
    enumerable: true,
    get: function get() {
      return _resultSetSizeExceeded.default;
    }
  });
  Object.defineProperty(_exports, "ServerError", {
    enumerable: true,
    get: function get() {
      return _server.default;
    }
  });
  Object.defineProperty(_exports, "StaleRequestError", {
    enumerable: true,
    get: function get() {
      return _staleRequest.default;
    }
  });
  Object.defineProperty(_exports, "SyncError", {
    enumerable: true,
    get: function get() {
      return _sync.default;
    }
  });
  Object.defineProperty(_exports, "TimeoutError", {
    enumerable: true,
    get: function get() {
      return _timeout.default;
    }
  });
  Object.defineProperty(_exports, "UserAlreadyExistsError", {
    enumerable: true,
    get: function get() {
      return _userAlreadyExists.default;
    }
  });
  Object.defineProperty(_exports, "WritesToCollectionDisallowedError", {
    enumerable: true,
    get: function get() {
      return _writesToCollectionDisallowed.default;
    }
  });
  _activeUser = _interopRequireDefault(_activeUser);
  _apiVersionNotAvailable = _interopRequireDefault(_apiVersionNotAvailable);
  _apiVersionNotImplemented = _interopRequireDefault(_apiVersionNotImplemented);
  _appProblem = _interopRequireDefault(_appProblem);
  _badRequest = _interopRequireDefault(_badRequest);
  _bl = _interopRequireDefault(_bl);
  _corsDisabled = _interopRequireDefault(_corsDisabled);
  _duplicateEndUsers = _interopRequireDefault(_duplicateEndUsers);
  _featureUnavailable = _interopRequireDefault(_featureUnavailable);
  _incompleteRequestBody = _interopRequireDefault(_incompleteRequestBody);
  _indirectCollectionAccessDisallowed = _interopRequireDefault(_indirectCollectionAccessDisallowed);
  _insufficientCredentials = _interopRequireDefault(_insufficientCredentials);
  _invalidCachedQuery = _interopRequireDefault(_invalidCachedQuery);
  _invalidCredentials = _interopRequireDefault(_invalidCredentials);
  _invalidIdentifier = _interopRequireDefault(_invalidIdentifier);
  _invalidQuerySyntax = _interopRequireDefault(_invalidQuerySyntax);
  _jsonParse = _interopRequireDefault(_jsonParse);
  _kinvey = _interopRequireDefault(_kinvey);
  _kinveyInternalErrorRetry = _interopRequireDefault(_kinveyInternalErrorRetry);
  _kinveyInternalErrorStop = _interopRequireDefault(_kinveyInternalErrorStop);
  _missingConfiguration = _interopRequireDefault(_missingConfiguration);
  _missingQuery = _interopRequireDefault(_missingQuery);
  _missingRequestHeader = _interopRequireDefault(_missingRequestHeader);
  _missingRequestParameter = _interopRequireDefault(_missingRequestParameter);
  _mobileIdentityConnect = _interopRequireDefault(_mobileIdentityConnect);
  _networkConnection = _interopRequireDefault(_networkConnection);
  _noActiveUser = _interopRequireDefault(_noActiveUser);
  _noResponse = _interopRequireDefault(_noResponse);
  _notFound = _interopRequireDefault(_notFound);
  _parameterValueOutOfRange = _interopRequireDefault(_parameterValueOutOfRange);
  _popup = _interopRequireDefault(_popup);
  _query = _interopRequireDefault(_query);
  _resultSetSizeExceeded = _interopRequireDefault(_resultSetSizeExceeded);
  _server = _interopRequireDefault(_server);
  _staleRequest = _interopRequireDefault(_staleRequest);
  _sync = _interopRequireDefault(_sync);
  _timeout = _interopRequireDefault(_timeout);
  _userAlreadyExists = _interopRequireDefault(_userAlreadyExists);
  _writesToCollectionDisallowed = _interopRequireDefault(_writesToCollectionDisallowed);
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/indirectCollectionAccessDisallowed.js":
/*!*************************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/indirectCollectionAccessDisallowed.js ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var IndirectCollectionAccessDisallowedError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(IndirectCollectionAccessDisallowedError, _BaseError);

    function IndirectCollectionAccessDisallowedError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Please use the appropriate API to access this collection for this app backend.';
      (0, _classCallCheck2.default)(this, IndirectCollectionAccessDisallowedError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(IndirectCollectionAccessDisallowedError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), IndirectCollectionAccessDisallowedError);
      } // Custom debugging information


      _this.name = 'IndirectCollectionAccessDisallowedError';
      return _this;
    }

    return IndirectCollectionAccessDisallowedError;
  }(_base.default);

  _exports.default = IndirectCollectionAccessDisallowedError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/insufficientCredentials.js":
/*!**************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/insufficientCredentials.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var InsufficientCredentialsError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(InsufficientCredentialsError, _BaseError);

    function InsufficientCredentialsError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The credentials used to authenticate this request are not authorized to run this operation. Please retry your request with appropriate credentials.';
      (0, _classCallCheck2.default)(this, InsufficientCredentialsError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InsufficientCredentialsError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), InsufficientCredentialsError);
      } // Custom debugging information


      _this.name = 'InsufficientCredentialsError';
      return _this;
    }

    return InsufficientCredentialsError;
  }(_base.default);

  _exports.default = InsufficientCredentialsError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/invalidCachedQuery.js":
/*!*********************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/invalidCachedQuery.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var InvalidCachedQuery =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(InvalidCachedQuery, _BaseError);

    function InvalidCachedQuery() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Invalid cached query.';
      (0, _classCallCheck2.default)(this, InvalidCachedQuery);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InvalidCachedQuery)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), InvalidCachedQuery);
      } // Custom debugging information


      _this.name = 'InvalidCachedQuery';
      return _this;
    }

    return InvalidCachedQuery;
  }(_base.default);

  _exports.default = InvalidCachedQuery;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/invalidCredentials.js":
/*!*********************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/invalidCredentials.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var InvalidCredentialsError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(InvalidCredentialsError, _BaseError);

    function InvalidCredentialsError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Invalid credentials. Please retry your request with correct credentials.';
      (0, _classCallCheck2.default)(this, InvalidCredentialsError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InvalidCredentialsError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), InvalidCredentialsError);
      } // Custom debugging information


      _this.name = 'InvalidCredentialsError';
      return _this;
    }

    return InvalidCredentialsError;
  }(_base.default);

  _exports.default = InvalidCredentialsError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/invalidIdentifier.js":
/*!********************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/invalidIdentifier.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var InvalidIdentifierError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(InvalidIdentifierError, _BaseError);

    function InvalidIdentifierError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'One of more identifier names in the request has an invalid format.';
      (0, _classCallCheck2.default)(this, InvalidIdentifierError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InvalidIdentifierError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), InvalidIdentifierError);
      } // Custom debugging information


      _this.name = 'InvalidIdentifierError';
      return _this;
    }

    return InvalidIdentifierError;
  }(_base.default);

  _exports.default = InvalidIdentifierError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/invalidQuerySyntax.js":
/*!*********************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/invalidQuerySyntax.js ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var InvalidQuerySyntaxError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(InvalidQuerySyntaxError, _BaseError);

    function InvalidQuerySyntaxError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The query string in the request has an invalid syntax.';
      (0, _classCallCheck2.default)(this, InvalidQuerySyntaxError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(InvalidQuerySyntaxError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), InvalidQuerySyntaxError);
      } // Custom debugging information


      _this.name = 'InvalidQuerySyntaxError';
      return _this;
    }

    return InvalidQuerySyntaxError;
  }(_base.default);

  _exports.default = InvalidQuerySyntaxError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/jsonParse.js":
/*!************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/jsonParse.js ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var JSONParseError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(JSONParseError, _BaseError);

    function JSONParseError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unable to parse the JSON in the request.';
      (0, _classCallCheck2.default)(this, JSONParseError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(JSONParseError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), JSONParseError);
      } // Custom debugging information


      _this.name = 'JSONParseError';
      return _this;
    }

    return JSONParseError;
  }(_base.default);

  _exports.default = JSONParseError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/kinvey.js":
/*!*********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/kinvey.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var KinveyError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(KinveyError, _BaseError);

    function KinveyError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'An error occurred.';
      (0, _classCallCheck2.default)(this, KinveyError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(KinveyError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), KinveyError);
      } // Custom debugging information


      _this.name = 'KinveyError';
      return _this;
    }

    return KinveyError;
  }(_base.default);

  _exports.default = KinveyError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/kinveyInternalErrorRetry.js":
/*!***************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/kinveyInternalErrorRetry.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var KinveyInternalErrorRetry =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(KinveyInternalErrorRetry, _BaseError);

    function KinveyInternalErrorRetry() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The Kinvey server encountered an unexpected error. Please retry your request.';
      (0, _classCallCheck2.default)(this, KinveyInternalErrorRetry);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(KinveyInternalErrorRetry)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), KinveyInternalErrorRetry);
      } // Custom debugging information


      _this.name = 'KinveyInternalErrorRetry';
      return _this;
    }

    return KinveyInternalErrorRetry;
  }(_base.default);

  _exports.default = KinveyInternalErrorRetry;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/kinveyInternalErrorStop.js":
/*!**************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/kinveyInternalErrorStop.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var KinveyInternalErrorStop =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(KinveyInternalErrorStop, _BaseError);

    function KinveyInternalErrorStop() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The Kinvey server encountered an unexpected error. Please contact support@kinvey.com for assistance.';
      (0, _classCallCheck2.default)(this, KinveyInternalErrorStop);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(KinveyInternalErrorStop)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), KinveyInternalErrorStop);
      } // Custom debugging information


      _this.name = 'KinveyInternalErrorStop';
      return _this;
    }

    return KinveyInternalErrorStop;
  }(_base.default);

  _exports.default = KinveyInternalErrorStop;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/missingConfiguration.js":
/*!***********************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/missingConfiguration.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var MissingConfigurationError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(MissingConfigurationError, _BaseError);

    function MissingConfigurationError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Missing configuration error.';
      (0, _classCallCheck2.default)(this, MissingConfigurationError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MissingConfigurationError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), MissingConfigurationError);
      } // Custom debugging information


      _this.name = 'MissingConfigurationError';
      return _this;
    }

    return MissingConfigurationError;
  }(_base.default);

  _exports.default = MissingConfigurationError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/missingQuery.js":
/*!***************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/missingQuery.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var MissingQueryError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(MissingQueryError, _BaseError);

    function MissingQueryError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The request is missing a query string.';
      (0, _classCallCheck2.default)(this, MissingQueryError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MissingQueryError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), MissingQueryError);
      } // Custom debugging information


      _this.name = 'MissingQueryError';
      return _this;
    }

    return MissingQueryError;
  }(_base.default);

  _exports.default = MissingQueryError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/missingRequestHeader.js":
/*!***********************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/missingRequestHeader.js ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var MissingRequestHeaderError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(MissingRequestHeaderError, _BaseError);

    function MissingRequestHeaderError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The request is missing a required header.';
      (0, _classCallCheck2.default)(this, MissingRequestHeaderError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MissingRequestHeaderError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), MissingRequestHeaderError);
      } // Custom debugging information


      _this.name = 'MissingRequestHeaderError';
      return _this;
    }

    return MissingRequestHeaderError;
  }(_base.default);

  _exports.default = MissingRequestHeaderError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/missingRequestParameter.js":
/*!**************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/missingRequestParameter.js ***!
  \**************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var MissingRequestParameterError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(MissingRequestParameterError, _BaseError);

    function MissingRequestParameterError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'A required parameter is missing from the request.';
      (0, _classCallCheck2.default)(this, MissingRequestParameterError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MissingRequestParameterError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), MissingRequestParameterError);
      } // Custom debugging information


      _this.name = 'MissingRequestParameterError';
      return _this;
    }

    return MissingRequestParameterError;
  }(_base.default);

  _exports.default = MissingRequestParameterError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/mobileIdentityConnect.js":
/*!************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/mobileIdentityConnect.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var MobileIdentityConnectError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(MobileIdentityConnectError, _BaseError);

    function MobileIdentityConnectError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'An error has occurred with Mobile Identity Connect.';
      (0, _classCallCheck2.default)(this, MobileIdentityConnectError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(MobileIdentityConnectError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), MobileIdentityConnectError);
      } // Custom debugging information


      _this.name = 'MobileIdentityConnectError';
      return _this;
    }

    return MobileIdentityConnectError;
  }(_base.default);

  _exports.default = MobileIdentityConnectError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/networkConnection.js":
/*!********************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/networkConnection.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var NetworkConnectionError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(NetworkConnectionError, _BaseError);

    function NetworkConnectionError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'There was an error connecting to the network.';
      (0, _classCallCheck2.default)(this, NetworkConnectionError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(NetworkConnectionError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), NetworkConnectionError);
      } // Custom debugging information


      _this.name = 'NetworkConnectionError';
      return _this;
    }

    return NetworkConnectionError;
  }(_base.default);

  _exports.default = NetworkConnectionError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/noActiveUser.js":
/*!***************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/noActiveUser.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var NoActiveUserError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(NoActiveUserError, _BaseError);

    function NoActiveUserError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'There is not an active user.';
      (0, _classCallCheck2.default)(this, NoActiveUserError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(NoActiveUserError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), NoActiveUserError);
      } // Custom debugging information


      _this.name = 'NoActiveUserError';
      return _this;
    }

    return NoActiveUserError;
  }(_base.default);

  _exports.default = NoActiveUserError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/noResponse.js":
/*!*************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/noResponse.js ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var NoResponseError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(NoResponseError, _BaseError);

    function NoResponseError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'No response was provided.';
      (0, _classCallCheck2.default)(this, NoResponseError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(NoResponseError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), NoResponseError);
      } // Custom debugging information


      _this.name = 'NoResponseError';
      return _this;
    }

    return NoResponseError;
  }(_base.default);

  _exports.default = NoResponseError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/notFound.js":
/*!***********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/notFound.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var NotFoundError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(NotFoundError, _BaseError);

    function NotFoundError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The entity was not found.';
      var debug = arguments.length > 1 ? arguments[1] : undefined;
      var code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 404;
      (0, _classCallCheck2.default)(this, NotFoundError);

      for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        args[_key - 3] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(NotFoundError)).call.apply(_getPrototypeOf2, [this, message, debug, code].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), NotFoundError);
      } // Custom debugging information


      _this.name = 'NotFoundError';
      return _this;
    }

    return NotFoundError;
  }(_base.default);

  _exports.default = NotFoundError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/parameterValueOutOfRange.js":
/*!***************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/parameterValueOutOfRange.js ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var ParameterValueOutOfRangeError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(ParameterValueOutOfRangeError, _BaseError);

    function ParameterValueOutOfRangeError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The value specified for one of the request parameters is out of range.';
      (0, _classCallCheck2.default)(this, ParameterValueOutOfRangeError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ParameterValueOutOfRangeError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), ParameterValueOutOfRangeError);
      } // Custom debugging information


      _this.name = 'ParameterValueOutOfRangeError';
      return _this;
    }

    return ParameterValueOutOfRangeError;
  }(_base.default);

  _exports.default = ParameterValueOutOfRangeError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/popup.js":
/*!********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/popup.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var PopupError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(PopupError, _BaseError);

    function PopupError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Unable to open a popup on this platform.';
      (0, _classCallCheck2.default)(this, PopupError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(PopupError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), PopupError);
      } // Custom debugging information


      _this.name = 'PopupError';
      return _this;
    }

    return PopupError;
  }(_base.default);

  _exports.default = PopupError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/query.js":
/*!********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/query.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var QueryError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(QueryError, _BaseError);

    function QueryError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'An error occurred with the query.';
      (0, _classCallCheck2.default)(this, QueryError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(QueryError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), QueryError);
      } // Custom debugging information


      _this.name = 'QueryError';
      return _this;
    }

    return QueryError;
  }(_base.default);

  _exports.default = QueryError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/resultSetSizeExceeded.js":
/*!************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/resultSetSizeExceeded.js ***!
  \************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var ResultSetSizeExceededError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(ResultSetSizeExceededError, _BaseError);

    function ResultSetSizeExceededError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Result set size exceeded.';
      (0, _classCallCheck2.default)(this, ResultSetSizeExceededError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ResultSetSizeExceededError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), ResultSetSizeExceededError);
      } // Custom debugging information


      _this.name = 'ResultSetSizeExceededError';
      return _this;
    }

    return ResultSetSizeExceededError;
  }(_base.default);

  _exports.default = ResultSetSizeExceededError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/server.js":
/*!*********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/server.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var ServerError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(ServerError, _BaseError);

    function ServerError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'An error occurred on the server.';
      var debug = arguments.length > 1 ? arguments[1] : undefined;
      var code = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 500;
      (0, _classCallCheck2.default)(this, ServerError);

      for (var _len = arguments.length, args = new Array(_len > 3 ? _len - 3 : 0), _key = 3; _key < _len; _key++) {
        args[_key - 3] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(ServerError)).call.apply(_getPrototypeOf2, [this, message, debug, code].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), ServerError);
      } // Custom debugging information


      _this.name = 'ServerError';
      return _this;
    }

    return ServerError;
  }(_base.default);

  _exports.default = ServerError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/staleRequest.js":
/*!***************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/staleRequest.js ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var StaleRequestError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(StaleRequestError, _BaseError);

    function StaleRequestError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The time window for this request has expired.';
      (0, _classCallCheck2.default)(this, StaleRequestError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(StaleRequestError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), StaleRequestError);
      } // Custom debugging information


      _this.name = 'StaleRequestError';
      return _this;
    }

    return StaleRequestError;
  }(_base.default);

  _exports.default = StaleRequestError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/sync.js":
/*!*******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/sync.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var SyncError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(SyncError, _BaseError);

    function SyncError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'An error occurred during sync.';
      (0, _classCallCheck2.default)(this, SyncError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(SyncError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), SyncError);
      } // Custom debugging information


      _this.name = 'SyncError';
      return _this;
    }

    return SyncError;
  }(_base.default);

  _exports.default = SyncError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/timeout.js":
/*!**********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/timeout.js ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var TimeoutError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(TimeoutError, _BaseError);

    function TimeoutError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'The request timed out.';
      (0, _classCallCheck2.default)(this, TimeoutError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(TimeoutError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), TimeoutError);
      } // Custom debugging information


      _this.name = 'TimeoutError';
      return _this;
    }

    return TimeoutError;
  }(_base.default);

  _exports.default = TimeoutError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/userAlreadyExists.js":
/*!********************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/userAlreadyExists.js ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var UserAlreadyExistsError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(UserAlreadyExistsError, _BaseError);

    function UserAlreadyExistsError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'This username is already taken. Please retry your request with a different username.';
      (0, _classCallCheck2.default)(this, UserAlreadyExistsError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(UserAlreadyExistsError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), UserAlreadyExistsError);
      } // Custom debugging information


      _this.name = 'UserAlreadyExistsError';
      return _this;
    }

    return UserAlreadyExistsError;
  }(_base.default);

  _exports.default = UserAlreadyExistsError;
});

/***/ }),

/***/ "../../packages/kinvey-errors/lib/writesToCollectionDisallowed.js":
/*!*******************************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-errors/lib/writesToCollectionDisallowed.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ "../../node_modules/@babel/runtime/helpers/assertThisInitialized.js"), __webpack_require__(/*! ./base */ "../../packages/kinvey-errors/lib/base.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _possibleConstructorReturn2, _getPrototypeOf3, _inherits2, _assertThisInitialized2, _base) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.default = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf3 = _interopRequireDefault(_getPrototypeOf3);
  _inherits2 = _interopRequireDefault(_inherits2);
  _assertThisInitialized2 = _interopRequireDefault(_assertThisInitialized2);
  _base = _interopRequireDefault(_base);

  var WritesToCollectionDisallowedError =
  /*#__PURE__*/
  function (_BaseError) {
    (0, _inherits2.default)(WritesToCollectionDisallowedError, _BaseError);

    function WritesToCollectionDisallowedError() {
      var _getPrototypeOf2;

      var _this;

      var message = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'This collection is configured to disallow any modifications to an existing entity or creation of new entities.';
      (0, _classCallCheck2.default)(this, WritesToCollectionDisallowedError);

      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }

      // Pass remaining arguments (including vendor specific ones) to parent constructor
      _this = (0, _possibleConstructorReturn2.default)(this, (_getPrototypeOf2 = (0, _getPrototypeOf3.default)(WritesToCollectionDisallowedError)).call.apply(_getPrototypeOf2, [this, message].concat(args))); // Maintains proper stack trace for where our error was thrown (only available on V8)

      if (Error.captureStackTrace) {
        Error.captureStackTrace((0, _assertThisInitialized2.default)((0, _assertThisInitialized2.default)(_this)), WritesToCollectionDisallowedError);
      } // Custom debugging information


      _this.name = 'WritesToCollectionDisallowedError';
      return _this;
    }

    return WritesToCollectionDisallowedError;
  }(_base.default);

  _exports.default = WritesToCollectionDisallowedError;
});

/***/ }),

/***/ "../../packages/kinvey-http-nativescript/lib/http.js":
/*!******************************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-http-nativescript/lib/http.js ***!
  \******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__(/*! kinvey-http */ "../../packages/kinvey-http/lib/index.js"), __webpack_require__(/*! tns-core-modules/http */ "tns-core-modules/http")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _regenerator, _asyncToGenerator2, _kinveyHttp, _http2) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.register = register;
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);

  function http(_x) {
    return _http.apply(this, arguments);
  }

  function _http() {
    _http = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee(request) {
      var response, data;
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return (0, _http2.request)({
                headers: request.headers,
                method: request.method,
                url: request.url,
                content: request.body
              });

            case 2:
              response = _context.sent;
              data = response.content.raw;

              try {
                data = response.content.toString();
              } catch (e) {// TODO: Log error
              }

              return _context.abrupt("return", {
                statusCode: response.statusCode,
                headers: response.headers,
                data: data
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));
    return _http.apply(this, arguments);
  }

  function register() {
    (0, _kinveyHttp.register)(http);
  }
});

/***/ }),

/***/ "../../packages/kinvey-http/lib/auth.js":
/*!*****************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-http/lib/auth.js ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! js-base64 */ "../../node_modules/js-base64/base64.js"), __webpack_require__(/*! kinvey-errors */ "../../packages/kinvey-errors/lib/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _jsBase, _kinveyErrors) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.app = app;
  _exports.master = master;
  _exports.session = session;
  _exports.basic = basic;
  _exports.defaultAuth = defaultAuth;
  _exports.all = all;
  _exports.Auth = void 0;

  function app(appKey, appSecret) {
    var credentials = _jsBase.Base64.encode("".concat(appKey, ":").concat(appSecret));

    return "Basic ".concat(credentials);
  }

  function master(appKey, masterSecret) {
    var credentials = _jsBase.Base64.encode("".concat(appKey, ":").concat(masterSecret));

    return "Basic ".concat(credentials);
  }

  function session(session) {
    if (!session || !session._kmd || !session._kmd.authtoken) {
      throw new _kinveyErrors.ActiveUserError('There is no active user to authorize the request. Please login and retry the request.');
    }

    return "Kinvey ".concat(session._kmd.authtoken);
  }

  function basic(appKey, appSecret, masterSecret) {
    try {
      return app(appKey, appSecret);
    } catch (error) {
      return master(appKey, masterSecret);
    }
  }

  function defaultAuth(session, appKey, masterSecret) {
    try {
      return session(session);
    } catch (error) {
      return master(appKey, masterSecret);
    }
  }

  function all(session, appKey, appSecret, masterSecret) {
    try {
      return session(session);
    } catch (error) {
      return basic(appKey, appSecret, masterSecret);
    }
  }

  var Auth = {
    All: 'All',
    App: 'App',
    Basic: 'Basic',
    Default: 'Default',
    Master: 'Master',
    Session: 'Session'
  }; // Client(appKey, clientId) {
  //   return function authFn() {
  //     const credentials = Base64.encode(`${appKey}:${clientId}`);
  //     return `Basic ${credentials}`;
  //   };
  // }

  _exports.Auth = Auth;
});

/***/ }),

/***/ "../../packages/kinvey-http/lib/headers.js":
/*!********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-http/lib/headers.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! lodash/isArray */ "../../node_modules/lodash/isArray.js"), __webpack_require__(/*! lodash/isString */ "../../node_modules/lodash/isString.js"), __webpack_require__(/*! lodash/isFunction */ "../../node_modules/lodash/isFunction.js"), __webpack_require__(/*! lodash/isEmpty */ "../../node_modules/lodash/isEmpty.js"), __webpack_require__(/*! kinvey-errors */ "../../packages/kinvey-errors/lib/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _possibleConstructorReturn2, _getPrototypeOf2, _inherits2, _classCallCheck2, _createClass2, _isArray, _isString, _isFunction, _isEmpty, _kinveyErrors) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.KinveyHeaders = _exports.Headers = void 0;
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _isArray = _interopRequireDefault(_isArray);
  _isString = _interopRequireDefault(_isString);
  _isFunction = _interopRequireDefault(_isFunction);
  _isEmpty = _interopRequireDefault(_isEmpty);
  var X_KINVEY_REQUEST_START_HEADER = 'X-Kinvey-Request-Start';
  var X_KINVEY_CUSTOM_REQUEST_PROPERTIES_HEADER = 'X-Kinvey-Custom-Request-Properties';

  function isNotString(val) {
    return !(0, _isString.default)(val);
  }
  /**
   * @private
   */


  var Headers =
  /*#__PURE__*/
  function () {
    function Headers(headers) {
      var _this = this;

      (0, _classCallCheck2.default)(this, Headers);
      this.headers = new Map();
      this.normalizedNames = new Map();

      if (headers) {
        if (headers instanceof Headers) {
          headers.keys().forEach(function (header) {
            var value = headers.get(header);

            _this.set(header, value);
          });
        } else {
          Object.keys(headers).forEach(function (header) {
            var value = headers[header];

            _this.set(header, value);
          });
        }
      }
    }

    (0, _createClass2.default)(Headers, [{
      key: "has",
      value: function has(name) {
        if (!(0, _isString.default)(name)) {
          throw new Error('Please provide a name. Name must be a string.');
        }

        return this.headers.has(name.toLowerCase());
      }
    }, {
      key: "get",
      value: function get(name) {
        if (!(0, _isString.default)(name)) {
          throw new Error('Please provide a name. Name must be a string.');
        }

        return this.headers.get(name.toLowerCase());
      }
    }, {
      key: "keys",
      value: function keys() {
        return Array.from(this.normalizedNames.values());
      }
    }, {
      key: "set",
      value: function set(name, value) {
        if (!(0, _isString.default)(name)) {
          throw new Error('Please provide a name. Name must be a string.');
        }

        if (!(0, _isString.default)(value) && !(0, _isArray.default)(value) && !(0, _isFunction.default)(value) || (0, _isArray.default)(value) && value.some(isNotString)) {
          throw new Error('Please provide a value. Value must be a string or an array that contains only strings.');
        }

        var key = name.toLowerCase();

        if ((0, _isArray.default)(value)) {
          this.headers.set(key, value.join(','));
        } else if ((0, _isFunction.default)(value)) {
          var val = value();
          return this.set(name, val);
        } else {
          this.headers.set(key, value);
        }

        if (!this.normalizedNames.has(key)) {
          this.normalizedNames.set(key, name);
        }

        return this;
      }
    }, {
      key: "join",
      value: function join(headers) {
        var _this2 = this;

        if (headers instanceof Headers) {
          headers.keys().forEach(function (header) {
            var value = headers.get(header);

            _this2.set(header, value);
          });
        } else {
          Object.keys(headers).forEach(function (header) {
            var value = headers[header];

            _this2.set(header, value);
          });
        }

        return this;
      }
    }, {
      key: "delete",
      value: function _delete(name) {
        if (!(0, _isString.default)(name)) {
          throw new Error('Please provide a name. Name must be a string.');
        }

        return this.headers.delete(name.toLowerCase());
      }
    }, {
      key: "toObject",
      value: function toObject() {
        var _this3 = this;

        return this.keys().reduce(function (headers, header) {
          // eslint-disable-next-line no-param-reassign
          headers[header] = _this3.get(header);
          return headers;
        }, {});
      }
    }, {
      key: "contentType",
      get: function get() {
        return this.get('Content-Type');
      }
    }]);
    return Headers;
  }();

  _exports.Headers = Headers;

  function byteCount(str) {
    if (str) {
      var count = 0;
      var stringLength = str.length;

      for (var i = 0; i < stringLength; i += 1) {
        var partCount = encodeURI(str[i]).split('%').length;
        count += partCount === 1 ? 1 : partCount - 1;
      }

      return count;
    }

    return 0;
  }

  var KinveyHeaders =
  /*#__PURE__*/
  function (_Headers) {
    (0, _inherits2.default)(KinveyHeaders, _Headers);

    function KinveyHeaders(headers) {
      var _this4;

      (0, _classCallCheck2.default)(this, KinveyHeaders);
      _this4 = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(KinveyHeaders).call(this, headers)); // Add the Accept header

      if (!_this4.has('Accept')) {
        _this4.set('Accept', 'application/json; charset=utf-8');
      } // Add Content-Type header


      if (!_this4.has('Content-Type')) {
        _this4.set('Content-Type', 'application/json; charset=utf-8');
      } // Add the X-Kinvey-API-Version header


      if (!_this4.has('X-Kinvey-Api-Version')) {
        _this4.set('X-Kinvey-Api-Version', '4');
      }

      return _this4;
    }

    (0, _createClass2.default)(KinveyHeaders, [{
      key: "requestStart",
      get: function get() {
        return this.get(X_KINVEY_REQUEST_START_HEADER);
      }
    }, {
      key: "customRequestProperties",
      get: function get() {
        return this.get(X_KINVEY_CUSTOM_REQUEST_PROPERTIES_HEADER);
      },
      set: function set(properties) {
        var customRequestPropertiesVal = JSON.stringify(properties);

        if (!(0, _isEmpty.default)(customRequestPropertiesVal)) {
          var customRequestPropertiesByteCount = byteCount(customRequestPropertiesVal);

          if (customRequestPropertiesByteCount >= 2000) {
            throw new _kinveyErrors.KinveyError("The custom properties are ".concat(customRequestPropertiesByteCount, " bytes.") + 'It must be less then 2000 bytes.', 'Please remove some custom properties.');
          }

          this.set(X_KINVEY_CUSTOM_REQUEST_PROPERTIES_HEADER, customRequestPropertiesVal);
        } else {
          this.delete('X-Kinvey-Custom-Request-Properties');
        }
      }
    }]);
    return KinveyHeaders;
  }(Headers);

  _exports.KinveyHeaders = KinveyHeaders;
});

/***/ }),

/***/ "../../packages/kinvey-http/lib/index.js":
/*!******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-http/lib/index.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./auth */ "../../packages/kinvey-http/lib/auth.js"), __webpack_require__(/*! ./headers */ "../../packages/kinvey-http/lib/headers.js"), __webpack_require__(/*! ./request */ "../../packages/kinvey-http/lib/request.js"), __webpack_require__(/*! ./response */ "../../packages/kinvey-http/lib/response.js"), __webpack_require__(/*! ./utils */ "../../packages/kinvey-http/lib/utils.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _auth, _headers, _request, _response, _utils) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  Object.keys(_auth).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _auth[key];
      }
    });
  });
  Object.keys(_headers).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _headers[key];
      }
    });
  });
  Object.keys(_request).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _request[key];
      }
    });
  });
  Object.keys(_response).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _response[key];
      }
    });
  });
  Object.keys(_utils).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(_exports, key, {
      enumerable: true,
      get: function get() {
        return _utils[key];
      }
    });
  });
});

/***/ }),

/***/ "../../packages/kinvey-http/lib/request.js":
/*!********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-http/lib/request.js ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "../../node_modules/@babel/runtime/helpers/defineProperty.js"), __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ "../../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js"), __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ "../../node_modules/@babel/runtime/helpers/getPrototypeOf.js"), __webpack_require__(/*! @babel/runtime/helpers/get */ "../../node_modules/@babel/runtime/helpers/get.js"), __webpack_require__(/*! @babel/runtime/helpers/inherits */ "../../node_modules/@babel/runtime/helpers/inherits.js"), __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! @babel/runtime/regenerator */ "../../node_modules/@babel/runtime/regenerator/index.js"), __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"), __webpack_require__(/*! lodash/isNumber */ "../../node_modules/lodash/isNumber.js"), __webpack_require__(/*! kinvey-errors */ "../../packages/kinvey-errors/lib/index.js"), __webpack_require__(/*! kinvey-app */ "../../packages/kinvey-app/lib/app.js"), __webpack_require__(/*! kinvey-session */ "../../packages/kinvey-session/lib/session.js"), __webpack_require__(/*! kinvey-cache */ "../../packages/kinvey-cache/lib/cache.js"), __webpack_require__(/*! promise-queue */ "../../node_modules/promise-queue/index.js"), __webpack_require__(/*! js-base64 */ "../../node_modules/js-base64/base64.js"), __webpack_require__(/*! ./headers */ "../../packages/kinvey-http/lib/headers.js"), __webpack_require__(/*! ./utils */ "../../packages/kinvey-http/lib/utils.js"), __webpack_require__(/*! ./response */ "../../packages/kinvey-http/lib/response.js"), __webpack_require__(/*! ./auth */ "../../packages/kinvey-http/lib/auth.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _defineProperty2, _possibleConstructorReturn2, _getPrototypeOf2, _get2, _inherits2, _classCallCheck2, _createClass2, _regenerator, _asyncToGenerator2, _isNumber, _kinveyErrors, _kinveyApp, _kinveySession, _kinveyCache, _promiseQueue, _jsBase, _headers, _utils, _response2, _auth) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.register = register;
  _exports.KinveyRequest = _exports.Request = _exports.RequestMethod = void 0;
  _defineProperty2 = _interopRequireDefault(_defineProperty2);
  _possibleConstructorReturn2 = _interopRequireDefault(_possibleConstructorReturn2);
  _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf2);
  _get2 = _interopRequireDefault(_get2);
  _inherits2 = _interopRequireDefault(_inherits2);
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _regenerator = _interopRequireDefault(_regenerator);
  _asyncToGenerator2 = _interopRequireDefault(_asyncToGenerator2);
  _isNumber = _interopRequireDefault(_isNumber);
  _promiseQueue = _interopRequireDefault(_promiseQueue);
  var requestQueue = new _promiseQueue.default();
  var AUTHORIZATION_HEADER = 'Authorization';
  var RequestMethod = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
  };
  _exports.RequestMethod = RequestMethod;

  var http =
  /*#__PURE__*/
  function () {
    var _ref = (0, _asyncToGenerator2.default)(
    /*#__PURE__*/
    _regenerator.default.mark(function _callee() {
      return _regenerator.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              throw new Error('You must override the default http function.');

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    return function http() {
      return _ref.apply(this, arguments);
    };
  }();

  function register(httpAdapter) {
    http = httpAdapter;
  }

  var Request =
  /*#__PURE__*/
  function () {
    function Request() {
      var request = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      (0, _classCallCheck2.default)(this, Request);

      var _getConfig = (0, _kinveyApp.getConfig)(),
          defaultTimeout = _getConfig.defaultTimeout;

      var headers = request.headers,
          method = request.method,
          url = request.url,
          body = request.body,
          _request$timeout = request.timeout,
          timeout = _request$timeout === void 0 ? defaultTimeout : _request$timeout;
      this.headers = headers;
      this.method = method;
      this.url = url;
      this.body = body;
      this.timeout = timeout;
    }

    (0, _createClass2.default)(Request, [{
      key: "execute",
      value: function () {
        var _execute = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee2() {
          var responseObject, response;
          return _regenerator.default.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.next = 2;
                  return http({
                    headers: this.headers.toObject(),
                    method: this.method,
                    url: this.url,
                    body: (0, _utils.serialize)(this.headers.contentType, this.body)
                  });

                case 2:
                  responseObject = _context2.sent;
                  // Create a response
                  response = new _response2.Response({
                    statusCode: responseObject.statusCode,
                    headers: responseObject.headers,
                    data: responseObject.data
                  }); // Return the response if it was successful

                  if (!response.isSuccess()) {
                    _context2.next = 6;
                    break;
                  }

                  return _context2.abrupt("return", response);

                case 6:
                  throw response.error;

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function execute() {
          return _execute.apply(this, arguments);
        };
      }()
    }, {
      key: "headers",
      get: function get() {
        return this._headers;
      },
      set: function set(headers) {
        this._headers = new _headers.Headers(headers);
      }
    }, {
      key: "timeout",
      get: function get() {
        return this._timeout;
      },
      set: function set(timeout) {
        if (!(0, _isNumber.default)(timeout) || isNaN(timeout)) {
          throw new _kinveyErrors.KinveyError('Invalid timeout. Timeout must be a number.');
        }

        this._timeout = timeout;
      }
    }]);
    return Request;
  }();

  _exports.Request = Request;

  var KinveyRequest =
  /*#__PURE__*/
  function (_Request) {
    (0, _inherits2.default)(KinveyRequest, _Request);

    function KinveyRequest(request) {
      var _this;

      (0, _classCallCheck2.default)(this, KinveyRequest);
      _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(KinveyRequest).call(this, request));
      _this.headers = request.headers;
      _this.auth = request.auth;
      return _this;
    }

    (0, _createClass2.default)(KinveyRequest, [{
      key: "execute",
      value: function () {
        var _execute2 = (0, _asyncToGenerator2.default)(
        /*#__PURE__*/
        _regenerator.default.mark(function _callee3() {
          var _this2 = this;

          var retry,
              response,
              _getConfig2,
              appKey,
              appSecret,
              auth,
              api,
              activeSession,
              socialIdentity,
              micIdentityKey,
              micIdentity,
              refreshRequest,
              refreshResponse,
              newMicIdentity,
              loginRequest,
              loginResponse,
              newSession,
              _response,
              url,
              request,
              _args3 = arguments;

          return _regenerator.default.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  retry = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : true;
                  _context3.prev = 1;

                  // Set the authorization header
                  if (this.auth) {
                    this.headers.set(AUTHORIZATION_HEADER, this.authorizationHeader);
                  } // Execute the request


                  _context3.next = 5;
                  return (0, _get2.default)((0, _getPrototypeOf2.default)(KinveyRequest.prototype), "execute", this).call(this);

                case 5:
                  response = _context3.sent;
                  return _context3.abrupt("return", response);

                case 9:
                  _context3.prev = 9;
                  _context3.t0 = _context3["catch"](1);

                  if (!retry) {
                    _context3.next = 56;
                    break;
                  }

                  if (!(_context3.t0 instanceof _kinveyErrors.InvalidCredentialsError)) {
                    _context3.next = 55;
                    break;
                  }

                  _getConfig2 = (0, _kinveyApp.getConfig)(), appKey = _getConfig2.appKey, appSecret = _getConfig2.appSecret, auth = _getConfig2.auth, api = _getConfig2.api;
                  activeSession = (0, _kinveySession.get)();
                  socialIdentity = activeSession && activeSession._socialIdentity || {};
                  micIdentityKey = Object.keys(socialIdentity).find(function (sessionKey) {
                    return socialIdentity[sessionKey].identity === 'kinveyAuth';
                  });
                  micIdentity = socialIdentity[micIdentityKey]; // Queue the request if the request que is paused

                  if (!requestQueue.paused) {
                    _context3.next = 20;
                    break;
                  }

                  return _context3.abrupt("return", requestQueue.add(function () {
                    return _this2.execute(false).catch(function () {
                      return Promise.reject(_context3.t0);
                    });
                  }));

                case 20:
                  if (!micIdentity) {
                    _context3.next = 44;
                    break;
                  }

                  _context3.prev = 21;
                  // Pause the request queue
                  requestQueue.pause(); // Refresh the session

                  refreshRequest = new KinveyRequest({
                    method: RequestMethod.POST,
                    headers: {
                      'Content-Type': 'application/x-www-form-urlencoded',
                      Authorization: function Authorization() {
                        var credentials = _jsBase.Base64.encode("".concat(micIdentity.client_id, ":").concat(appSecret));

                        return "Basic ".concat(credentials);
                      }
                    },
                    url: (0, _utils.formatKinveyUrl)(auth.protocol, auth.host, '/oauth/token'),
                    body: {
                      grant_type: 'refresh_token',
                      client_id: micIdentity.client_id,
                      redirect_uri: micIdentity.redirect_uri,
                      refresh_token: micIdentity.refresh_token
                    }
                  });
                  _context3.next = 26;
                  return refreshRequest.execute();

                case 26:
                  refreshResponse = _context3.sent;
                  // Create a new session
                  newMicIdentity = Object.assign({}, refreshResponse.data, {
                    client_id: micIdentity.client_id,
                    redirect_uri: micIdentity.redirect_uri,
                    protocol: auth.protocol,
                    host: auth.host
                  }); // Login the new MIC identity

                  loginRequest = new KinveyRequest({
                    method: RequestMethod.POST,
                    auth: _auth.Auth.App,
                    url: (0, _utils.formatKinveyUrl)(api.protocol, api.host, "/user/".concat(appKey, "/login")),
                    properties: this.properties,
                    body: {
                      _socialIdentity: (0, _defineProperty2.default)({}, micIdentityKey, newMicIdentity)
                    }
                  });
                  _context3.next = 31;
                  return loginRequest.execute();

                case 31:
                  loginResponse = _context3.sent;
                  newSession = loginResponse.data;
                  newSession._socialIdentity[micIdentityKey] = Object.assign({}, newSession._socialIdentity[micIdentityKey], newMicIdentity); // Set the new session

                  (0, _kinveySession.set)(newSession); // Redo the original request

                  _context3.next = 37;
                  return this.execute(false);

                case 37:
                  _response = _context3.sent;
                  // Start the request queue
                  requestQueue.start(); // Return the response

                  return _context3.abrupt("return", _response);

                case 42:
                  _context3.prev = 42;
                  _context3.t1 = _context3["catch"](21);

                case 44:
                  _context3.prev = 44;
                  // TODO: Unregister from live service
                  // Logout
                  url = (0, _utils.formatKinveyUrl)(api.protocol, api.host, "/user/".concat(appKey, "/_logout"));
                  request = new KinveyRequest({
                    method: RequestMethod.POST,
                    auth: _auth.Auth.Session,
                    url: url
                  });
                  _context3.next = 49;
                  return request.execute(false);

                case 49:
                  // Remove the session
                  (0, _kinveySession.remove)(); // Clear data

                  (0, _kinveyCache.clear)(appKey);
                  _context3.next = 55;
                  break;

                case 53:
                  _context3.prev = 53;
                  _context3.t2 = _context3["catch"](44);

                case 55:
                  // Start the request queue
                  requestQueue.start();

                case 56:
                  throw _context3.t0;

                case 57:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this, [[1, 9], [21, 42], [44, 53]]);
        }));

        return function execute() {
          return _execute2.apply(this, arguments);
        };
      }()
    }, {
      key: "headers",
      get: function get() {
        return this._headers;
      },
      set: function set(headers) {
        this._headers = new _headers.KinveyHeaders(headers);
      }
    }, {
      key: "authorizationHeader",
      get: function get() {
        var _getConfig3 = (0, _kinveyApp.getConfig)(),
            appKey = _getConfig3.appKey,
            appSecret = _getConfig3.appSecret,
            masterSecret = _getConfig3.masterSecret;

        var session = (0, _kinveySession.get)();

        if (this.auth === _auth.Auth.App) {
          return (0, _auth.app)(appKey, appSecret);
        } else if (this.auth === _auth.Auth.Master) {
          return (0, _auth.master)(appKey, masterSecret);
        } else if (this.auth === _auth.Auth.Session) {
          return (0, _auth.session)(session);
        } else if (this.auth === _auth.Auth.Basic) {
          return (0, _auth.basic)(appKey, appSecret, masterSecret);
        } else if (this.auth === _auth.Auth.Default) {
          return (0, _auth.defaultAuth)(session, appKey, masterSecret);
        } else if (this.auth === _auth.Auth.All) {
          return (0, _auth.all)(session, appKey, appSecret, masterSecret);
        }

        return null;
      }
    }]);
    return KinveyRequest;
  }(Request);

  _exports.KinveyRequest = KinveyRequest;
});

/***/ }),

/***/ "../../packages/kinvey-http/lib/response.js":
/*!*********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-http/lib/response.js ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! kinvey-errors */ "../../packages/kinvey-errors/lib/index.js"), __webpack_require__(/*! ./headers */ "../../packages/kinvey-http/lib/headers.js"), __webpack_require__(/*! ./utils */ "../../packages/kinvey-http/lib/utils.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _kinveyErrors, _headers, _utils) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Response = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  var StatusCode = {
    Ok: 200,
    Created: 201,
    Empty: 204,
    MovedPermanently: 301,
    Found: 302,
    NotModified: 304,
    TemporaryRedirect: 307,
    PermanentRedirect: 308,
    Unauthorized: 401,
    Forbidden: 403,
    NotFound: 404,
    ServerError: 500
  };

  var Response =
  /*#__PURE__*/
  function () {
    function Response(response) {
      (0, _classCallCheck2.default)(this, Response);
      this.statusCode = response.statusCode;
      this.headers = response.headers;
      this.data = response.data;
    }

    (0, _createClass2.default)(Response, [{
      key: "isSuccess",
      value: function isSuccess() {
        return this.statusCode >= 200 && this.statusCode < 300 || this.statusCode === StatusCode.MovedPermanently || this.statusCode === StatusCode.Found || this.statusCode === StatusCode.NotModified || this.statusCode === StatusCode.TemporaryRedirect || this.statusCode === StatusCode.PermanentRedirect;
      }
    }, {
      key: "headers",
      get: function get() {
        return this._headers;
      },
      set: function set(headers) {
        this._headers = new _headers.Headers(headers);
      }
    }, {
      key: "data",
      get: function get() {
        return this._data;
      },
      set: function set(data) {
        this._data = (0, _utils.parse)(this.headers.contentType, data);
      }
    }, {
      key: "error",
      get: function get() {
        if (!this.isSuccess()) {
          var data = this.data || {};
          var name = data.name || data.error;
          var message = data.message || data.description;
          var debug = data.debug;
          var code = this.statusCode;
          var kinveyRequestId = this.headers.get('X-Kinvey-Request-ID');

          if (code === 'ESOCKETTIMEDOUT' || code === 'ETIMEDOUT') {
            return new _kinveyErrors.TimeoutError('The network request timed out.');
          } else if (code === 'ENOENT') {
            return new _kinveyErrors.NetworkConnectionError('You do not have a network connection.');
          } else if (name === 'APIVersionNotAvailable') {
            return new _kinveyErrors.APIVersionNotAvailableError(message, debug, code, kinveyRequestId);
          } else if (name === 'APIVersionNotImplemented') {
            return new _kinveyErrors.APIVersionNotImplementedError(message, debug, code, kinveyRequestId);
          } else if (name === 'AppProblem') {
            return new _kinveyErrors.AppProblemError(message, debug, code, kinveyRequestId);
          } else if (name === 'AppProblem') {
            return new _kinveyErrors.AppProblemError(message, debug, code, kinveyRequestId);
          } else if (name === 'BadRequest') {
            return new _kinveyErrors.BadRequestError(message, debug, code, kinveyRequestId);
          } else if (name === 'BLInternalError' || name === 'BLRuntimeError' || name === 'BLSyntaxError' || name === 'BLTimeoutError' || name === 'BLViolationError') {
            return new _kinveyErrors.BLError(message, debug, code, kinveyRequestId);
          } else if (name === 'CORSDisabled') {
            return new _kinveyErrors.CORSDisabledError(message, debug, code, kinveyRequestId);
          } else if (name === 'DuplicateEndUsers') {
            return new _kinveyErrors.DuplicateEndUsersError(message, debug, code, kinveyRequestId);
          } else if (name === 'FeatureUnavailable') {
            return new _kinveyErrors.FeatureUnavailableError(message, debug, code, kinveyRequestId);
          } else if (name === 'IncompleteRequestBody') {
            return new _kinveyErrors.IncompleteRequestBodyError(message, debug, code, kinveyRequestId);
          } else if (name === 'IndirectCollectionAccessDisallowed') {
            return new _kinveyErrors.IndirectCollectionAccessDisallowedError(message, debug, code, kinveyRequestId);
          } else if (name === 'InsufficientCredentials') {
            return new _kinveyErrors.InsufficientCredentialsError(message, debug, code, kinveyRequestId);
          } else if (name === 'InvalidCredentials') {
            return new _kinveyErrors.InvalidCredentialsError(message, debug, code, kinveyRequestId);
          } else if (name === 'InvalidIdentifier') {
            return new _kinveyErrors.InvalidIdentifierError(message, debug, code, kinveyRequestId);
          } else if (name === 'InvalidQuerySyntax') {
            return new _kinveyErrors.InvalidQuerySyntaxError(message, debug, code, kinveyRequestId);
          } else if (name === 'JSONParseError') {
            return new _kinveyErrors.JSONParseError(message, debug, code, kinveyRequestId);
          } else if (name === 'KinveyInternalErrorRetry') {
            return new _kinveyErrors.KinveyInternalErrorRetry(message, debug, code, kinveyRequestId);
          } else if (name === 'KinveyInternalErrorStop') {
            return new _kinveyErrors.KinveyInternalErrorStop(message, debug, code, kinveyRequestId);
          } else if (name === 'MissingQuery') {
            return new _kinveyErrors.MissingQueryError(message, debug, code, kinveyRequestId);
          } else if (name === 'MissingRequestHeader') {
            return new _kinveyErrors.MissingRequestHeaderError(message, debug, code, kinveyRequestId);
          } else if (name === 'MissingRequestParameter') {
            return new _kinveyErrors.MissingRequestParameterError(message, debug, code, kinveyRequestId);
          } else if (name === 'MissingConfiguration') {
            return new _kinveyErrors.MissingConfigurationError(message, debug, code, kinveyRequestId);
          } else if (name === 'EntityNotFound' || name === 'CollectionNotFound' || name === 'AppNotFound' || name === 'UserNotFound' || name === 'BlobNotFound' || name === 'DocumentNotFound') {
            return new _kinveyErrors.NotFoundError(message, debug, code, kinveyRequestId);
          } else if (name === 'ParameterValueOutOfRange') {
            return new _kinveyErrors.ParameterValueOutOfRangeError(message, debug, code, kinveyRequestId);
          } else if (name === 'ResultSetSizeExceeded') {
            return new _kinveyErrors.ResultSetSizeExceededError(message, debug, code, kinveyRequestId);
          } else if (name === 'ServerError') {
            return new _kinveyErrors.ServerError(message, debug, code, kinveyRequestId);
          } else if (name === 'StaleRequest') {
            return new _kinveyErrors.StaleRequestError(message, debug, code, kinveyRequestId);
          } else if (name === 'UserAlreadyExists') {
            return new _kinveyErrors.UserAlreadyExistsError(message, debug, code, kinveyRequestId);
          } else if (name === 'WritesToCollectionDisallowed') {
            return new _kinveyErrors.WritesToCollectionDisallowedError(message, debug, code, kinveyRequestId);
          } else if (code === StatusCode.Unauthorized || code === StatusCode.Forbidden) {
            return new _kinveyErrors.InsufficientCredentialsError(message, debug, code, kinveyRequestId);
          } else if (code === StatusCode.NotFound) {
            return new _kinveyErrors.NotFoundError(message, debug, code, kinveyRequestId);
          } else if (code === StatusCode.ServerError) {
            return new _kinveyErrors.ServerError(message, debug, code, kinveyRequestId);
          }

          return new _kinveyErrors.KinveyError(message, debug, code, kinveyRequestId);
        }

        return null;
      }
    }]);
    return Response;
  }();

  _exports.Response = Response;
});

/***/ }),

/***/ "../../packages/kinvey-http/lib/utils.js":
/*!******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-http/lib/utils.js ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! url */ "../../node_modules/url/url.js"), __webpack_require__(/*! lodash/isString */ "../../node_modules/lodash/isString.js"), __webpack_require__(/*! lodash/isPlainObject */ "../../node_modules/lodash/isPlainObject.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _url, _isString, _isPlainObject) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.formatKinveyUrl = formatKinveyUrl;
  _exports.serialize = serialize;
  _exports.parse = parse;
  _isString = _interopRequireDefault(_isString);
  _isPlainObject = _interopRequireDefault(_isPlainObject);

  function clean(value) {
    if ((0, _isPlainObject.default)(value)) {
      return Object.keys(value).reduce(function (cleanVal, key) {
        var objVal = value[key];

        if ((0, _isPlainObject.default)(objVal)) {
          objVal = clean(objVal);
        }

        if (typeof objVal !== 'undefined' && objVal !== null) {
          cleanVal[key] = objVal;
        }

        return cleanVal;
      }, {});
    }

    return value;
  }

  function formatKinveyUrl(protocol, host, pathname, query) {
    var cleanQuery = clean(query);
    return (0, _url.format)({
      protocol: protocol,
      host: host,
      pathname: pathname,
      query: cleanQuery
    });
  }

  function serialize(contentType, body) {
    if (body && !(0, _isString.default)(body)) {
      if (contentType.indexOf('application/x-www-form-urlencoded') === 0) {
        var str = [];
        Object.keys(body).forEach(function (key) {
          str.push("".concat(global.encodeURIComponent(key), "=").concat(global.encodeURIComponent(body[key])));
        });
        return str.join('&');
      } else if (contentType.indexOf('application/json') === 0) {
        return JSON.stringify(body);
      }
    }

    return body;
  }

  function parse() {
    var contentType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'application/json';
    var data = arguments.length > 1 ? arguments[1] : undefined;

    if ((0, _isString.default)(data)) {
      if (contentType.indexOf('application/json') === 0) {
        try {
          return JSON.parse(data);
        } catch (error) {// TODO: log error
        }
      }
    }

    return data;
  }
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../sdks/kinvey-html5-sdk/node_modules/webpack/buildin/global.js */ "../kinvey-html5-sdk/node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "../../packages/kinvey-query/lib/query.js":
/*!*******************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-query/lib/query.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "../../node_modules/@babel/runtime/helpers/classCallCheck.js"), __webpack_require__(/*! @babel/runtime/helpers/createClass */ "../../node_modules/@babel/runtime/helpers/createClass.js"), __webpack_require__(/*! lodash/isNumber */ "../../node_modules/lodash/isNumber.js"), __webpack_require__(/*! lodash/isString */ "../../node_modules/lodash/isString.js"), __webpack_require__(/*! lodash/isPlainObject */ "../../node_modules/lodash/isPlainObject.js"), __webpack_require__(/*! lodash/isObject */ "../../node_modules/lodash/isObject.js"), __webpack_require__(/*! kinvey-errors */ "../../packages/kinvey-errors/lib/index.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _classCallCheck2, _createClass2, _isNumber, _isString, _isPlainObject, _isObject, _kinveyErrors) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.Query = void 0;
  _classCallCheck2 = _interopRequireDefault(_classCallCheck2);
  _createClass2 = _interopRequireDefault(_createClass2);
  _isNumber = _interopRequireDefault(_isNumber);
  _isString = _interopRequireDefault(_isString);
  _isPlainObject = _interopRequireDefault(_isPlainObject);
  _isObject = _interopRequireDefault(_isObject);
  var PROTECTED_FIELDS = ['_id', '_acl'];
  var UNSUPPORTED_CONDITIONS = ['$nearSphere'];

  var Query =
  /*#__PURE__*/
  function () {
    function Query(query) {
      (0, _classCallCheck2.default)(this, Query);
      var config = Object.assign({}, {
        fields: [],
        filter: {},
        sort: {},
        limit: Infinity,
        skip: 0
      }, query);
      this.fields = config.fields;
      this.filter = config.filter;
      this.sort = config.sort;
      this.limit = config.limit;
      this.skip = config.skip;
    }

    (0, _createClass2.default)(Query, [{
      key: "isSupportedOffline",

      /**
       * Returns true or false depending on if the query is able to be processed offline.
       *
       * @returns {boolean} True if the query is supported offline otherwise false.
       */
      value: function isSupportedOffline() {
        var _this = this;

        return Object.keys(this.filter).reduce(function (supported, key) {
          if (supported) {
            var value = _this.filter[key];
            return UNSUPPORTED_CONDITIONS.some(function (unsupportedConditions) {
              if (!value) {
                return true;
              }

              if (!(0, _isObject.default)(value)) {
                return true;
              }

              return !Object.keys(value).some(function (condition) {
                return condition === unsupportedConditions;
              });
            });
          }

          return supported;
        }, true);
      }
      /**
       * Adds an equal to filter to the query. Requires field to equal value.
       * Any existing filters on field will be discarded.
       * @see https://docs.mongodb.com/manual/reference/operator/query/#comparison
       *
       * @param {string} field Field
       * @param {*} value Value
       * @returns {Query} Query
       */

    }, {
      key: "equalTo",
      value: function equalTo(field, value) {
        return this.addFilter(field, value);
      }
      /**
       * Adds a not equal to filter to the query. Requires field not to equal
       * value.
       * @see https://docs.mongodb.com/manual/reference/operator/query/ne
       *
       * @param {string} field Field
       * @param {*} value Value
       * @returns {Query} Query
       */

    }, {
      key: "notEqualTo",
      value: function notEqualTo(field, value) {
        return this.addFilter(field, '$ne', value);
      }
      /**
       * Adds a contains filter to the query. Requires field to contain at least
       * one of the members of list.
       * @see https://docs.mongodb.com/manual/reference/operator/query/in
       *
       * @param {string} field Field
       * @param {Array} values List of values.
       * @throws {Error} A value is required.
       * @returns {Query} Query
       */

    }, {
      key: "contains",
      value: function contains(field, values) {
        if (!values) {
          throw new _kinveyErrors.QueryError('You must supply a value.');
        }

        if (!Array.isArray(values)) {
          return this.addFilter(field, '$in', [values]);
        }

        return this.addFilter(field, '$in', values);
      }
      /**
       * Adds a not contained in filter to the query. Requires `field` not to
       * contain any of the members of `list`.
       * @see https://docs.mongodb.com/manual/reference/operator/query/nin
       *
       * @param {string} field Field
       * @param {Array} values List of values.
       * @throws {Error} A value is required.
       * @returns {Query} Query
       */

    }, {
      key: "notContainedIn",
      value: function notContainedIn(field, values) {
        if (!values) {
          throw new _kinveyErrors.QueryError('You must supply a value.');
        }

        if (!Array.isArray(values)) {
          return this.addFilter(field, '$nin', [values]);
        }

        return this.addFilter(field, '$nin', values);
      }
      /**
       * Adds a contains all filter to the query. Requires `field` to contain all
       * members of `list`.
       * @see https://docs.mongodb.com/manual/reference/operator/query/all
       *
       * @param {string} field Field
       * @param {object|Array} values List of values.
       * @throws {Error} A value is required.
       * @returns {Query} Query
       */

    }, {
      key: "containsAll",
      value: function containsAll(field, values) {
        if (!values) {
          throw new _kinveyErrors.QueryError('You must supply a value.');
        }

        if (!Array.isArray(values)) {
          return this.addFilter(field, '$all', [values]);
        }

        return this.addFilter(field, '$all', values);
      }
      /**
       * Adds a greater than filter to the query. Requires `field` to be greater
       * than `value`.
       * @see https://docs.mongodb.com/manual/reference/operator/query/gt
       *
       * @param {string} field Field
       * @param {number|string} value Value
       * @throws {Error} The value must be a number or string.
       * @returns {Query} Query
       */

    }, {
      key: "greaterThan",
      value: function greaterThan(field, value) {
        if (!(0, _isNumber.default)(value) && !(0, _isString.default)(value)) {
          throw new _kinveyErrors.QueryError('You must supply a number or string.');
        }

        return this.addFilter(field, '$gt', value);
      }
      /**
       * Adds a greater than or equal to filter to the query. Requires `field` to
       * be greater than or equal to `value`.
       * @see https://docs.mongodb.com/manual/reference/operator/query/gte
       *
       * @param {string} field Field.
       * @param {number|string} value Value.
       * @throws {Error} The value must be a number or string.
       * @returns {Query} Query
       */

    }, {
      key: "greaterThanOrEqualTo",
      value: function greaterThanOrEqualTo(field, value) {
        if (!(0, _isNumber.default)(value) && !(0, _isString.default)(value)) {
          throw new _kinveyErrors.QueryError('You must supply a number or string.');
        }

        return this.addFilter(field, '$gte', value);
      }
      /**
       * Adds a less than filter to the query. Requires `field` to be less than
       * `value`.
       * @see https://docs.mongodb.com/manual/reference/operator/query/lt
       *
       * @param {string} field Field
       * @param {number|string} value Value
       * @throws {Error} The value must be a number or string.
       * @returns {Query} Query
       */

    }, {
      key: "lessThan",
      value: function lessThan(field, value) {
        if (!(0, _isNumber.default)(value) && !(0, _isString.default)(value)) {
          throw new _kinveyErrors.QueryError('You must supply a number or string.');
        }

        return this.addFilter(field, '$lt', value);
      }
      /**
       * Adds a less than or equal to filter to the query. Requires `field` to be
       * less than or equal to `value`.
       * @see https://docs.mongodb.com/manual/reference/operator/query/lte
       *
       * @param {string} field Field
       * @param {number|string} value Value
       * @throws {Error} The value must be a number or string.
       * @returns {Query} Query
       */

    }, {
      key: "lessThanOrEqualTo",
      value: function lessThanOrEqualTo(field, value) {
        if (!(0, _isNumber.default)(value) && !(0, _isString.default)(value)) {
          throw new _kinveyErrors.QueryError('You must supply a number or string.');
        }

        return this.addFilter(field, '$lte', value);
      }
      /**
       * Adds an exists filter to the query. Requires `field` to exist if `flag` is
       * `true`, or not to exist if `flag` is `false`.
       * @see https://docs.mongodb.com/manual/reference/operator/query/exists
       *
       * @param {string} field Field
       * @param {boolean} [flag=true] The exists flag.
       * @returns {Query} Query
       */

    }, {
      key: "exists",
      value: function exists(field) {
        var flag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
        return this.addFilter(field, '$exists', flag === true);
      }
      /**
       * Adds a modulus filter to the query. Requires `field` modulo `divisor` to
       * have remainder `remainder`.
       * @see https://docs.mongodb.com/manual/reference/operator/query/mod
       *
       * @param {string} field Field
       * @param {number} divisor Divisor
       * @param {number} [remainder=0] Remainder
       * @throws {Error} The divisor must be a number.
       * @throws {Error} The remainder must be a number.
       * @returns {Query} Query
       */

    }, {
      key: "mod",
      value: function mod(field, divisor) {
        var remainder = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;

        if (!(0, _isNumber.default)(divisor)) {
          throw new _kinveyErrors.QueryError('divisor must be a number');
        }

        if (!(0, _isNumber.default)(remainder)) {
          throw new _kinveyErrors.QueryError('remainder must be a number');
        }

        return this.addFilter(field, '$mod', [divisor, remainder]);
      }
      /**
       * Adds a match filter to the query. Requires `field` to match `regExp`.
       * @see https://docs.mongodb.com/manual/reference/operator/query/regex
       *
       * @param {string} field Field
       * @param {RegExp|string} regExp Regular expression.
       * @param {Object} [options] Options
       * @param {boolean} [options.ignoreCase=inherit] Toggles case-insensitivity.
       * @param {boolean} [options.multiline=inherit] Toggles multiline matching.
       * @param {boolean} [options.extended=false] Toggles extended capability.
       * @param {boolean} [options.dotMatchesAll=false] Toggles dot matches all.
       * @throws {Error} The regExp must have '^' at the beginning of the expression to make it an anchored expression.
       * @throws {Error} The ignoreCase flag is not supported.
       * @returns {Query} Query
       */

    }, {
      key: "matches",
      value: function matches(field, expression) {
        var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
        var flags = [];
        var regExp = expression;

        if (!(regExp instanceof RegExp)) {
          regExp = new RegExp(regExp);
        }

        if (regExp.source.indexOf('^') !== 0) {
          throw new _kinveyErrors.QueryError('regExp must have \'^\' at the beginning of the expression to make it an anchored expression.');
        }

        if ((regExp.ignoreCase || options.ignoreCase) && options.ignoreCase !== false) {
          throw new _kinveyErrors.QueryError('ignoreCase flag is not supported');
        }

        if ((regExp.multiline || options.multiline) && options.multiline !== false) {
          flags.push('m');
        }

        if (options.extended === true) {
          flags.push('x');
        }

        if (options.dotMatchesAll === true) {
          flags.push('s');
        }

        if (flags.length > 0) {
          this.addFilter(field, '$options', flags.join(''));
        }

        return this.addFilter(field, '$regex', regExp.source);
      }
      /**
       * Adds a near filter to the query. Requires `field` to be a coordinate
       * within `maxDistance` of `coord`. Sorts documents from nearest to farthest.
       * @see https://docs.mongodb.com/manual/reference/operator/query/near
       *
       * @param {string} field The field.
       * @param {Array<number, number>} coord The coordinate (longitude, latitude).
       * @param {number} [maxDistance] The maximum distance (miles).
       * @throws {Error} The coord must be a [number, number].
       * @returns {Query} Query
       */

    }, {
      key: "near",
      value: function near(field, coord, maxDistance) {
        if (!Array.isArray(coord) || !(0, _isNumber.default)(coord[0]) || !(0, _isNumber.default)(coord[1])) {
          throw new _kinveyErrors.QueryError('coord must be a [number, number]');
        }

        var result = this.addFilter(field, '$nearSphere', [coord[0], coord[1]]);

        if ((0, _isNumber.default)(maxDistance)) {
          this.addFilter(field, '$maxDistance', maxDistance);
        }

        return result;
      }
      /**
       * Adds a within box filter to the query. Requires `field` to be a coordinate
       * within the bounds of the rectangle defined by `bottomLeftCoord`,
       * `bottomRightCoord`.
       * @see https://docs.mongodb.com/manual/reference/operator/query/box
       *
       * @param {string} field The field.
       * @param {Array<number, number>} bottomLeftCoord The bottom left coordinate (longitude, latitude).
       * @param {Array<number, number>} upperRightCoord The bottom right coordinate (longitude, latitude).
       * @throws {Error} The bottomLeftCoord must be a [number, number].
       * @throws {Error} The upperRightCoord must be a [number, number].
       * @returns {Query} Query
       */

    }, {
      key: "withinBox",
      value: function withinBox(field, bottomLeftCoord, upperRightCoord) {
        if (!Array.isArray(bottomLeftCoord) || !(0, _isNumber.default)(bottomLeftCoord[0]) || !(0, _isNumber.default)(bottomLeftCoord[1])) {
          throw new _kinveyErrors.QueryError('bottomLeftCoord must be a [number, number]');
        }

        if (!Array.isArray(upperRightCoord) || !(0, _isNumber.default)(upperRightCoord[0]) || !(0, _isNumber.default)(upperRightCoord[1])) {
          throw new _kinveyErrors.QueryError('upperRightCoord must be a [number, number]');
        }

        var coords = [[bottomLeftCoord[0], bottomLeftCoord[1]], [upperRightCoord[0], upperRightCoord[1]]];
        return this.addFilter(field, '$within', {
          $box: coords
        });
      }
      /**
       * Adds a within polygon filter to the query. Requires `field` to be a
       * coordinate within the bounds of the polygon defined by `coords`.
       * @see https://docs.mongodb.com/manual/reference/operator/query/polygon
       *
       * @param {string} field The field.
       * @param {Array<Array<number, number>>} coords List of coordinates.
       * @throws {Error} The coords must be a [[number, number]].
       * @returns {Query} Query
       */

    }, {
      key: "withinPolygon",
      value: function withinPolygon(field, coords) {
        if (Array.isArray(coords) === false || coords.length === 0 || coords[0].length > 3) {
          throw new _kinveyErrors.QueryError('coords must be a [[number, number]]');
        }

        var withinCoords = coords.map(function (coord) {
          if (!(0, _isNumber.default)(coord[0]) || !(0, _isNumber.default)(coord[1])) {
            throw new _kinveyErrors.QueryError('coords argument must be a [number, number]');
          }

          return [coord[0], coord[1]];
        });
        return this.addFilter(field, '$within', {
          $polygon: withinCoords
        });
      }
      /**
       * Adds a size filter to the query. Requires `field` to be an `Array` with
       * exactly `size` members.
       * @see https://docs.mongodb.com/manual/reference/operator/query/size
       *
       * @param {string} field Field
       * @param {number} size Size
       * @throws {Error} The size must be a number.
       * @returns {Query} Query
       */

    }, {
      key: "size",
      value: function size(field, _size) {
        if (!(0, _isNumber.default)(_size)) {
          throw new _kinveyErrors.QueryError('size must be a number');
        }

        return this.addFilter(field, '$size', _size);
      }
      /**
       * Adds an ascending sort modifier to the query. Sorts by `field`, ascending.
       *
       * @param {string} field Field
       * @returns {Query} Query
       */

    }, {
      key: "ascending",
      value: function ascending(field) {
        if (this._parent) {
          this._parent.ascending(field);
        } else {
          if (!this.sort) {
            this.sort = {};
          }

          this.sort[field] = 1;
        }

        return this;
      }
      /**
       * Adds an descending sort modifier to the query. Sorts by `field`,
       * descending.
       *
       * @param {string} field Field
       * @returns {Query} Query
       */

    }, {
      key: "descending",
      value: function descending(field) {
        if (this._parent) {
          this._parent.descending(field);
        } else {
          if (!this.sort) {
            this.sort = {};
          }

          this.sort[field] = -1;
        }

        return this;
      }
      /**
       * Performs a logical AND operation on the query and the provided queries.
       * @see https://docs.mongodb.com/manual/reference/operator/query/and
       *
       * @param {...Query|...Object} args Queries
       * @throws {Error} Queries must be an array of Query instances or objects.
       * @returns {Query} Query
       */

    }, {
      key: "and",
      value: function and() {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        // AND has highest precedence. Therefore, even if this query is part of a
        // JOIN already, apply it on this query.
        return this.join('$and', args);
      }
      /**
       * Performs a logical NOR operation on the query and the provided queries.
       * @see https://docs.mongodb.com/manual/reference/operator/query/nor
       *
       * @param {...Query|...Object} args Queries
       * @throws {Error} Queries must be an array of Query instances or objects.
       * @returns {Query} Query
       */

    }, {
      key: "nor",
      value: function nor() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        // NOR is preceded by AND. Therefore, if this query is part of an AND-join,
        // apply the NOR onto the parent to make sure AND indeed precedes NOR.
        if (this._parent && Object.hasOwnProperty.call(this._parent.filter, '$and')) {
          var _this$_parent;

          return (_this$_parent = this._parent).nor.apply(_this$_parent, args);
        }

        return this.join('$nor', args);
      }
      /**
       * Performs a logical OR operation on the query and the provided queries.
       * @see https://docs.mongodb.com/manual/reference/operator/query/or
       *
       * @param {...Query|...Object} args Queries.
       * @throws {Error} Queries must be an array of Query instances or objects.
       * @returns {Query} Query
       */

    }, {
      key: "or",
      value: function or() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        // OR has lowest precedence. Therefore, if this query is part of any join,
        // apply the OR onto the parent to make sure OR has indeed the lowest
        // precedence.
        if (this._parent) {
          var _this$_parent2;

          return (_this$_parent2 = this._parent).or.apply(_this$_parent2, args);
        }

        return this.join('$or', args);
      }
      /**
       * Returns query string representation of the query as a JavaScript object.
       *
       * @returns {Object} Query string object.
       */

    }, {
      key: "toQueryObject",
      value: function toQueryObject() {
        var queryObject = {};

        if (Object.keys(this.filter).length > 0) {
          queryObject.query = this.filter;
        }

        if (this.fields.length > 0) {
          queryObject.fields = this.fields.join(',');
        }

        if ((0, _isNumber.default)(this.limit) && this.limit < Infinity) {
          queryObject.limit = this.limit;
        }

        if ((0, _isNumber.default)(this.skip) && this.skip > 0) {
          queryObject.skip = this.skip;
        }

        if (this.sort && Object.keys(this.sort).length > 0) {
          queryObject.sort = this.sort;
        }

        var keys = Object.keys(queryObject);
        keys.forEach(function (key) {
          queryObject[key] = (0, _isString.default)(queryObject[key]) ? queryObject[key] : JSON.stringify(queryObject[key]);
        });
        return queryObject;
      }
      /**
       * @deprecated
       * Please use Query.prototype.toQueryObject() instead.
       */

    }, {
      key: "toQueryString",
      value: function toQueryString() {
        return this.toQueryObject();
      }
      /**
       * Returns Object representation of the query.
       *
       * @returns {Object} Object
       */

    }, {
      key: "toPlainObject",
      value: function toPlainObject() {
        if (this._parent) {
          return this._parent.toPlainObject();
        } // Return set of parameters.


        var json = {
          fields: this.fields,
          filter: this.filter,
          sort: this.sort,
          skip: this.skip,
          limit: this.limit
        };
        return json;
      }
      /**
       * Returns query string representation of the query.
       *
       * @return {string} Query string string.
       */

    }, {
      key: "toString",
      value: function toString() {
        return JSON.stringify(this.toQueryString());
      }
      /**
       * @private
       * Adds a filter to the query.
       *
       * @param {string} field Field
       * @param {string} condition Condition
       * @param {*} values Values
       * @returns {Query} Query
       */

    }, {
      key: "addFilter",
      value: function addFilter(field) {
        var _ref = (arguments.length <= 1 ? 0 : arguments.length - 1) === 2 ? {
          condition: arguments.length <= 1 ? undefined : arguments[1],
          values: arguments.length <= 2 ? undefined : arguments[2]
        } : {
          condition: undefined,
          values: arguments.length <= 1 ? undefined : arguments[1]
        },
            condition = _ref.condition,
            values = _ref.values;

        if (!this.filter) {
          this.filter = {};
        }

        if (condition) {
          if (!this.filter[field]) {
            this.filter[field] = {};
          }

          this.filter[field][condition] = values;
        } else {
          this.filter[field] = values;
        }

        return this;
      }
      /**
       * @private
       * Joins the current query with another query using an operator.
       *
       * @param {string} operator Operator
       * @param {Query[]|object[]} queries Queries
       * @throws {Error} Queries must be an array of Query instances or objects.
       * @returns {Query} Query
       */

    }, {
      key: "join",
      value: function join(operator, queries) {
        var _this2 = this;

        var that = this;
        var filters = queries.map(function (query) {
          return query.filter;
        });

        if (filters.length === 0) {
          that = new Query();
          filters = [that.filter];
          that._parent = this; // Required for operator precedence
        }

        var currentFilter = Object.keys(this.filter).reduce(function (filter, key) {
          // eslint-disable-next-line no-param-reassign
          filter[key] = _this2.filter[key];
          delete _this2.filter[key];
          return filter;
        }, {});
        this.addFilter(operator, [currentFilter].concat(filters));
        return that;
      }
    }, {
      key: "fields",
      get: function get() {
        if (this._fields.length > 0) {
          return [].concat(this._fields, PROTECTED_FIELDS);
        }

        return [];
      },
      set: function set(fields) {
        if (!Array.isArray(fields)) {
          throw new _kinveyErrors.QueryError('fields must be an Array');
        }

        if (this._parent) {
          this._parent.fields = fields;
        } else {
          this._fields = fields;
        }
      }
    }, {
      key: "sort",
      get: function get() {
        return this._sort;
      },
      set: function set(sort) {
        if (sort && !(0, _isPlainObject.default)(sort)) {
          throw new _kinveyErrors.QueryError('sort must an Object');
        }

        if (this._parent) {
          this._parent.sort = sort;
        } else {
          this._sort = sort;
        }
      }
    }, {
      key: "limit",
      get: function get() {
        return this._limit;
      },
      set: function set(limit) {
        var _limit = limit;

        if ((0, _isString.default)(_limit)) {
          _limit = parseFloat(_limit);
        }

        if (limit && !(0, _isNumber.default)(_limit)) {
          throw new _kinveyErrors.QueryError('limit must be a number');
        }

        if (this._parent) {
          this._parent.limit = _limit;
        } else {
          this._limit = _limit;
        }
      }
    }, {
      key: "skip",
      get: function get() {
        return this._skip;
      },
      set: function set(skip) {
        var _skip = skip;

        if ((0, _isString.default)(_skip)) {
          _skip = parseFloat(_skip);
        }

        if (!(0, _isNumber.default)(_skip)) {
          throw new _kinveyErrors.QueryError('skip must be a number');
        }

        if (this._parent) {
          this._parent.skip = _skip;
        } else {
          this._skip = _skip;
        }
      }
    }]);
    return Query;
  }();

  _exports.Query = Query;
});

/***/ }),

/***/ "../../packages/kinvey-session/lib/session.js":
/*!***********************************************************************************************!*\
  !*** /Users/thomas/Development/Kinvey/SDKs/JavaScript/packages/kinvey-session/lib/session.js ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! lodash/isFunction */ "../../node_modules/lodash/isFunction.js"), __webpack_require__(/*! kinvey-app */ "../../packages/kinvey-app/lib/app.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else { var mod; }
})(this, function (_exports, _isFunction, _kinveyApp) {
  "use strict";

  var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.register = register;
  _exports.get = get;
  _exports.set = set;
  _exports.remove = remove;
  _isFunction = _interopRequireDefault(_isFunction);
  var KEY = 'active_user';
  var store = new Map();

  function register(sessionStore) {
    if (sessionStore) {
      store = sessionStore;
    }
  }

  function get() {
    var _getConfig = (0, _kinveyApp.getConfig)(),
        appKey = _getConfig.appKey;

    return store.get("".concat(appKey, ".").concat(KEY));
  }

  function set(session) {
    var _getConfig2 = (0, _kinveyApp.getConfig)(),
        appKey = _getConfig2.appKey;

    if (session) {
      store.set("".concat(appKey, ".").concat(KEY), session);
    }

    return session;
  }

  function remove() {
    var _getConfig3 = (0, _kinveyApp.getConfig)(),
        appKey = _getConfig3.appKey;

    if ((0, _isFunction.default)(store.delete)) {
      store.delete("".concat(appKey, ".").concat(KEY));
    } else {
      store.remove("".concat(appKey, ".").concat(KEY));
    }

    return null;
  }
});

/***/ }),

/***/ "../kinvey-html5-sdk/node_modules/webpack/buildin/global.js":
/*!******************************************************************!*\
  !*** ../kinvey-html5-sdk/node_modules/webpack/buildin/global.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "../kinvey-html5-sdk/node_modules/webpack/buildin/module.js":
/*!******************************************************************!*\
  !*** ../kinvey-html5-sdk/node_modules/webpack/buildin/module.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function(module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),

/***/ "./lib/app.js":
/*!********************!*\
  !*** ./lib/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.init = init;
Object.defineProperty(exports, "initialize", {
  enumerable: true,
  get: function get() {
    return _kinveyApp.initialize;
  }
});
Object.defineProperty(exports, "getAppVersion", {
  enumerable: true,
  get: function get() {
    return _kinveyApp.getAppVersion;
  }
});
Object.defineProperty(exports, "setAppVersion", {
  enumerable: true,
  get: function get() {
    return _kinveyApp.setAppVersion;
  }
});
exports.StorageProvider = void 0;

var _kinveyApp = __webpack_require__(/*! kinvey-app */ "../../packages/kinvey-app/lib/app.js");

var _kinveyHttpNativescript = __webpack_require__(/*! kinvey-http-nativescript */ "../../packages/kinvey-http-nativescript/lib/http.js");

var _kinveyCacheNativescriptSqlite = __webpack_require__(/*! kinvey-cache-nativescript-sqlite */ "../../packages/kinvey-cache-nativescript-sqlite/lib/index.js");

// import { register as registerPopup } from 'kinvey-popup-nativescript';
// import { register as registerMemoryCache } from 'kinvey-cache-memory';
var StorageProvider = {
  // Memory: 'Memory',
  SQLite: 'SQLite'
};
exports.StorageProvider = StorageProvider;

function init(config) {
  var _config$storage = config.storage,
      storage = _config$storage === void 0 ? StorageProvider.SQLite : _config$storage; // Register storage
  // if (storage === StorageProvider.Memory) {
  //   registerMemoryCache();
  // } else

  if (storage === StorageProvider.SQLite) {
    (0, _kinveyCacheNativescriptSqlite.register)();
  } // Register http


  (0, _kinveyHttpNativescript.register)(); // Register popup
  // registerPopup();
  // Init the SDK

  return (0, _kinveyApp.init)(config);
}

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "../../node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _kinveyAcl = __webpack_require__(/*! kinvey-acl */ "../../packages/kinvey-acl/lib/acl.js");

var App = _interopRequireWildcard(__webpack_require__(/*! ./app */ "./lib/app.js"));

// import { Aggregation } from 'kinvey-aggregation';
// import * as DataStore from 'kinvey-datastore';
// import { Kmd } from 'kinvey-kmd';
// import { Query } from 'kinvey-query';
// import * as Files from 'kinvey-files';
// import { endpoint } from 'kinvey-endpoint';
// import { User } from './user';
// SDK
var SDK = {
  // Acl
  Acl: _kinveyAcl.Acl // Aggregation
  // Aggregation,
  // // DataStore
  // DataStore,
  // DataStoreType: DataStore.DataStoreType,
  // // Custom Endpoint
  // CustomEndpoint: endpoint,
  // // Files
  // Files,
  // // Kmd
  // Kmd,
  // Metadata: Kmd,
  // // Query
  // Query,
  // // User
  // User,
  // AuthorizationGrant: User.AuthorizationGrant

}; // Flatten App onto SDK

Object.keys(App).forEach(function (key) {
  SDK[key] = App[key];
}); // Export

module.exports = SDK;

/***/ }),

/***/ "nativescript-sqlite":
/*!**************************************!*\
  !*** external "nativescript-sqlite" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_nativescript_sqlite__;

/***/ }),

/***/ "tns-core-modules/http":
/*!****************************************!*\
  !*** external "tns-core-modules/http" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_tns_core_modules_http__;

/***/ })

/******/ });
});