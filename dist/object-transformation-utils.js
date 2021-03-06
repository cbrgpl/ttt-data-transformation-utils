(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



var Transformer = __webpack_require__(1);

var TwoWayTransformer = __webpack_require__(4);

module.exports = {
  Transformer: Transformer,
  TwoWayTransformer: TwoWayTransformer
};

/***/ }),
/* 1 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var TransformationChain = __webpack_require__(2);

module.exports = /*#__PURE__*/function () {
  function Transformer(transformationChain) {
    _classCallCheck(this, Transformer);

    this.chain = new TransformationChain(transformationChain);
  }

  _createClass(Transformer, [{
    key: "applyTransformations",
    value: function applyTransformations(transformativeValue) {
      var keepTypeof = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      var valueRef = transformativeValue;

      for (var i = 0; i < this.chain.transformationArray.length; ++i) {
        var transformation = this.chain.transformationArray[i];
        valueRef = transformation(valueRef);

        if (keepTypeof) {
          this.compareValuesTypeof(transformativeValue, valueRef, i);
        } // if transformativeValue is reference and transformation changes reference value, but transformation returns nothing


        valueRef = valueRef === undefined ? transformativeValue : valueRef;
      }

      return valueRef;
    }
  }, {
    key: "compareValuesTypeof",
    value: function compareValuesTypeof(transformativeValue, valueRef, transformationIndex) {
      if (_typeof(valueRef) !== _typeof(transformativeValue)) {
        throw TypeError("One of functions return changed type of value;\n\n            Transformation index is ".concat(transformationIndex));
      }
    }
  }]);

  return Transformer;
}();

/***/ }),
/* 2 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var _require = __webpack_require__(3),
    isFunction = _require.isFunction;

module.exports = /*#__PURE__*/_createClass(function TransformationChain(transformationArray) {
  _classCallCheck(this, TransformationChain);

  this.transformationArray = [];

  var _iterator = _createForOfIteratorHelper(transformationArray),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var transformation = _step.value;

      if (!isFunction(transformation)) {
        throw new TypeError('One of passed transformations is not typeof \'function\'');
      } else {
        this.transformationArray.push(transformation);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});

/***/ }),
/* 3 */
/***/ ((module) => {



module.exports.isFunction = function (val) {
  return typeof val === 'function';
};

/***/ }),
/* 4 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Tranformer = __webpack_require__(1);

var TransformationChain = __webpack_require__(2);

module.exports = (_temp = _class = /*#__PURE__*/function (_Tranformer) {
  _inherits(TwoWayTransformer, _Tranformer);

  var _super = _createSuper(TwoWayTransformer);

  function TwoWayTransformer(transformationMods) {
    var _this;

    _classCallCheck(this, TwoWayTransformer);

    _this = _super.call(this, []);
    _this.transformationMods = {};
    _this.transformationMods[TwoWayTransformer.MODS.DIRECT] = _this.createChain(transformationMods[TwoWayTransformer.MODS.DIRECT]);
    _this.transformationMods[TwoWayTransformer.MODS.INVERSE] = _this.createChain(transformationMods[TwoWayTransformer.MODS.INVERSE]);
    return _this;
  }

  _createClass(TwoWayTransformer, [{
    key: "createChain",
    value: function createChain(transformationArray) {
      return new TransformationChain(transformationArray);
    }
  }, {
    key: "directTranform",
    value: function directTranform(transformativeValue, keepTypeof) {
      // switch this.chain ref to transformation chain in accordance with mode
      this.chain = this.transformationMods[TwoWayTransformer.MODS.DIRECT];
      return this.applyTransformations(transformativeValue, keepTypeof);
    }
  }, {
    key: "inverseTransform",
    value: function inverseTransform(transformativeValue, keepTypeof) {
      this.chain = this.transformationMods[TwoWayTransformer.MODS.INVERSE];
      return this.applyTransformations(transformativeValue, keepTypeof);
    }
  }]);

  return TwoWayTransformer;
}(Tranformer), _defineProperty(_class, "MODS", {
  DIRECT: 'DIRECT_MODE',
  INVERSE: 'INVERSE_MODE'
}), _temp);

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(0);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=object-transformation-utils.js.map