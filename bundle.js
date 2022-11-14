/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n* {\n  font-family: \"Merriweather\", serif;\n}\n\n/* STYLES */\n\n.input-container {\n  background-color: rgba(73, 73, 73, 0.85);\n  color: whitesmoke;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  margin: 32px 0 32px 0;\n  border-radius: 10px;\n}\n\n.content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 400px;\n  margin: auto;\n  margin-bottom: 40px;\n  /* height: 1vh; */\n}\n\n.weather-card {\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.summary,\n.details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: whitesmoke;\n  background-color: rgba(73, 73, 73, 0.85);\n  padding: 28px 0 42px 0;\n  width: 80%;\n  margin: 74px auto 24px auto;\n  border-radius: 10px;\n}\n\n.details {\n  padding: 14px 0 21px 0;\n  margin-top: 24px;\n}\n\n.summary > p:first-of-type {\n  font-size: 1.9rem;\n}\n\n.summary > p:last-of-type {\n  font-size: 1.6rem;\n}\n\n.temp-container,\n.high-container,\n.low-container,\n.feels-container {\n  display: flex;\n  gap: 10px;\n  align-items: flex-end;\n}\n\n.temp-container > p {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n.description {\n  font-size: 1.4rem;\n}\n\n.detail-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0px 20px 0px 20px;\n}\n\n.detail-container > p:first-of-type {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.detail-container > p:nth-of-type(2) {\n  font-size: 18px;\n}\n\n.temp-details-container > * {\n  font-size: 20px;\n}\n\n.temp-details-container {\n  display: flex;\n  gap: 2px;\n}\n\n.toggle-units {\n  color: whitesmoke;\n  background-color: rgba(73, 73, 73, 0.85);\n  font-size: 12px;\n  padding: 8px;\n  font-weight: bold;\n  border: 0;\n  border-radius: 10px;\n}\n\n.location-input {\n  margin-bottom: 12px;\n  margin-bottom: 12px;\n  color: black;\n  font-weight: bold;\n}\n\n.location-input::placeholder {\n  color: rgba(73, 73, 73, 0.85);\n}\n\n.wind-speed-unit-container {\n  display: flex;\n  gap: 3px;\n  font-size: 18px;\n}\n\n.hidden {\n  display: none;\n}\n\n.forecast-container {\n  display: flex;\n  overflow-x: scroll;\n  width: 80%;\n  margin-bottom: 40px;\n  scrollbar-color: rgba(0, 0, 0, 0.774) whitesmoke;\n  padding: 20px;\n  background-color: rgba(73, 73, 73, 0.85);\n  color: whitesmoke;\n  border-radius: 10px;\n}\n\n.forecast {\n  margin-right: 20px;\n  background-color: rgba(73, 73, 73, 0.85);\n  border-radius: 10px;\n  padding: 20px;\n}\n\n.forecast-icon {\n  height: 50px;\n  width: 50px;\n  filter: invert(95%);\n}\n\n.forecast-description {\n  font-size: 22px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,iBAAiB;;AAEjB;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;;EAEE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;AACpC;;AAEA,WAAW;;AAEX;EACE,wCAAwC;EACxC,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,wCAAwC;EACxC,sBAAsB;EACtB,UAAU;EACV,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;;EAIE,aAAa;EACb,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,8BAA8B;EAC9B,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,iBAAiB;EACjB,wCAAwC;EACxC,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,mBAAmB;EACnB,gDAAgD;EAChD,aAAa;EACb,wCAAwC;EACxC,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,wCAAwC;EACxC,mBAAmB;EACnB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB","sourcesContent":["/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n* {\n  font-family: \"Merriweather\", serif;\n}\n\n/* STYLES */\n\n.input-container {\n  background-color: rgba(73, 73, 73, 0.85);\n  color: whitesmoke;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  margin: 32px 0 32px 0;\n  border-radius: 10px;\n}\n\n.content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 400px;\n  margin: auto;\n  margin-bottom: 40px;\n  /* height: 1vh; */\n}\n\n.weather-card {\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.summary,\n.details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: whitesmoke;\n  background-color: rgba(73, 73, 73, 0.85);\n  padding: 28px 0 42px 0;\n  width: 80%;\n  margin: 74px auto 24px auto;\n  border-radius: 10px;\n}\n\n.details {\n  padding: 14px 0 21px 0;\n  margin-top: 24px;\n}\n\n.summary > p:first-of-type {\n  font-size: 1.9rem;\n}\n\n.summary > p:last-of-type {\n  font-size: 1.6rem;\n}\n\n.temp-container,\n.high-container,\n.low-container,\n.feels-container {\n  display: flex;\n  gap: 10px;\n  align-items: flex-end;\n}\n\n.temp-container > p {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n.description {\n  font-size: 1.4rem;\n}\n\n.detail-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0px 20px 0px 20px;\n}\n\n.detail-container > p:first-of-type {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.detail-container > p:nth-of-type(2) {\n  font-size: 18px;\n}\n\n.temp-details-container > * {\n  font-size: 20px;\n}\n\n.temp-details-container {\n  display: flex;\n  gap: 2px;\n}\n\n.toggle-units {\n  color: whitesmoke;\n  background-color: rgba(73, 73, 73, 0.85);\n  font-size: 12px;\n  padding: 8px;\n  font-weight: bold;\n  border: 0;\n  border-radius: 10px;\n}\n\n.location-input {\n  margin-bottom: 12px;\n  margin-bottom: 12px;\n  color: black;\n  font-weight: bold;\n}\n\n.location-input::placeholder {\n  color: rgba(73, 73, 73, 0.85);\n}\n\n.wind-speed-unit-container {\n  display: flex;\n  gap: 3px;\n  font-size: 18px;\n}\n\n.hidden {\n  display: none;\n}\n\n.forecast-container {\n  display: flex;\n  overflow-x: scroll;\n  width: 80%;\n  margin-bottom: 40px;\n  scrollbar-color: rgba(0, 0, 0, 0.774) whitesmoke;\n  padding: 20px;\n  background-color: rgba(73, 73, 73, 0.85);\n  color: whitesmoke;\n  border-radius: 10px;\n}\n\n.forecast {\n  margin-right: 20px;\n  background-color: rgba(73, 73, 73, 0.85);\n  border-radius: 10px;\n  padding: 20px;\n}\n\n.forecast-icon {\n  height: 50px;\n  width: 50px;\n  filter: invert(95%);\n}\n\n.forecast-description {\n  font-size: 22px;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/apikey.js":
/*!***********************!*\
  !*** ./src/apikey.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "apiKey": () => (/* binding */ apiKey)
/* harmony export */ });
const apiKey = "e56641446ad3c7610403e3c17d8ce886";




/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "processInput": () => (/* binding */ processInput),
/* harmony export */   "test": () => (/* binding */ test)
/* harmony export */ });
/* harmony import */ var _obtainWeather__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./obtainWeather */ "./src/obtainWeather.js");
/* harmony import */ var _conversions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conversions */ "./src/conversions.js");
/* harmony import */ var _crs_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crs.min */ "./src/crs.min.js");
/* harmony import */ var _crs_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_crs_min__WEBPACK_IMPORTED_MODULE_2__);




const convertWind = (deg) => {
  // Takes wind direction as degrees and returns a human-readable string
  let direction;
  let index;
  switch (true) {
    case deg >= 337.5 || deg < 22.5:
      direction = "North";
      index = 0;
      break;
    case deg < 67.5:
      direction = "North-East";
      index = 1;
      break;
    case deg < 112.5:
      direction = "East";
      index = 2;
      break;
    case deg < 157.5:
      direction = "South-East";
      index = 3;
      break;
    case deg < 202.5:
      direction = "South";
      index = 4;
      break;
    case deg < 247.5:
      direction = "South-West";
      index = 5;
      break;
    case deg < 292.5:
      direction = "West";
      index = 6;
      break;
    default:
      direction = "North-West";
  }
  return [direction, index];
};

const weatherFactory = (weather) => {
  // Takes the object received from Open Weather's API and returns a weather object containing
  // only the weather data we will use in this app
  const placeName = weather.name;
  const { country, sunrise, sunset } = weather.sys;
  const clouds = weather.clouds.all;
  const { humidity, pressure } = weather.main;
  const { id } = weather.weather[0];
  const { dt, forecast } = weather;
  const feelsLike = (0,_conversions__WEBPACK_IMPORTED_MODULE_1__.convertFromKelvin)(weather.main["feels_like"]);
  const tempMin = (0,_conversions__WEBPACK_IMPORTED_MODULE_1__.convertFromKelvin)(weather.main["temp_min"]);
  const tempMax = (0,_conversions__WEBPACK_IMPORTED_MODULE_1__.convertFromKelvin)(weather.main["temp_max"]);
  const airTemp = (0,_conversions__WEBPACK_IMPORTED_MODULE_1__.convertFromKelvin)(weather.main["temp"]);
  const offset = weather.timezone;
  const sunriseTime = (0,_conversions__WEBPACK_IMPORTED_MODULE_1__.convertTimesFromUnix)(sunrise, offset);
  const sunsetTime = (0,_conversions__WEBPACK_IMPORTED_MODULE_1__.convertTimesFromUnix)(sunset, offset);
  const readingTime = (0,_conversions__WEBPACK_IMPORTED_MODULE_1__.convertTimesFromUnix)(dt, offset);
  const { visibility } = weather;
  const windConverted = convertWind(weather.wind.deg);
  const windSpeedkmh = Math.round(weather.wind.speed * 3.6);
  const wind = [windSpeedkmh, windConverted];
  return {
    placeName,
    country,
    clouds,
    humidity,
    pressure,
    airTemp,
    feelsLike,
    tempMax,
    tempMin,
    sunriseTime,
    sunsetTime,
    visibility,
    wind,
    id,
    readingTime,
    forecast,
    offset,
  };
};

const test = async () => {
  const testResponse = await (0,_obtainWeather__WEBPACK_IMPORTED_MODULE_0__.obtainWeather)("Atlanta");
  const testProcessed = weatherFactory(testResponse);
  return testProcessed;
};

const processInput = async (input) => {
  const weather = await (0,_obtainWeather__WEBPACK_IMPORTED_MODULE_0__.obtainWeather)(input);
  if (typeof weather === "number") {
    return weather;
  }
  const weatherProcessed = weatherFactory(weather);
  return weatherProcessed;
};




/***/ }),

/***/ "./src/componentFactory.js":
/*!*********************************!*\
  !*** ./src/componentFactory.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "componentFactory": () => (/* binding */ componentFactory)
/* harmony export */ });
const componentFactory = (element) => {
  const {
    name,
    nodeType,
    parent,
    text,
    inputType,
    value,
    class1,
    class2,
    class3,
    taskID,
    placeholder,
    dataAttr,
    id,
    shortcode,
    preferred,
  } = element;
  const createDOMNode = () => {
    const parentNode = document.querySelector(parent);
    const newDOMNode = document.createElement(nodeType);
    if (text) {
      newDOMNode.innerHTML = text;
    }
    if (inputType) {
      newDOMNode.type = inputType;
    }
    if (value) {
      newDOMNode.value = value;
    }
    if (class1) {
      newDOMNode.classList.add(class1);
    }
    if (class2) {
      newDOMNode.classList.add(class2);
    }
    if (class3) {
      newDOMNode.classList.add(class3);
    }
    if (placeholder) {
      newDOMNode.placeholder = placeholder;
    }
    if (text) {
      newDOMNode.textContent = text;
    }
    if (dataAttr) {
      newDOMNode.setAttribute("data-region-id", "USA");
    }
    if (shortcode) {
      newDOMNode.setAttribute("data-value", "shortcode");
    }
    if (id) {
      newDOMNode.id = id;
    }
    if (preferred) {
      newDOMNode.setAttribute("data-preferred", preferred);
      newDOMNode.setAttribute("data-preferred-delim", "-----");
    }
    parentNode.append(newDOMNode);
  };
  createDOMNode();

  return {
    name,
    nodeType,
    parent,
    text,
    inputType,
    value,
    class1,
    class2,
    taskID,
  };
};




/***/ }),

/***/ "./src/conversions.js":
/*!****************************!*\
  !*** ./src/conversions.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "convertFromKelvin": () => (/* binding */ convertFromKelvin),
/* harmony export */   "convertTemps": () => (/* binding */ convertTemps),
/* harmony export */   "convertTime": () => (/* binding */ convertTime),
/* harmony export */   "convertTimes": () => (/* binding */ convertTimes),
/* harmony export */   "convertTimesFromUnix": () => (/* binding */ convertTimesFromUnix),
/* harmony export */   "convertVis": () => (/* binding */ convertVis),
/* harmony export */   "convertWind": () => (/* binding */ convertWind),
/* harmony export */   "roundTemp": () => (/* binding */ roundTemp)
/* harmony export */ });
const convertTemp = (temp, unit) => {
  let newTemp;
  if (unit === 0) {
    newTemp = temp * 1.8 + 32;
  } else {
    newTemp = (temp - 32) * 0.5556;
  }
  return newTemp;
};

const roundTemp = (temp) => {
  let newTemp = temp;
  newTemp = Math.round(temp * 10) / 10;
  return newTemp;
};

const convertTime = (oldTime, unit) => {
  if (unit === 0) {
    // i.e. if time is currently in AM/PM notation
    const oldTimeSplit = oldTime.split(" ");
    const timeSplit = oldTimeSplit[0].split(":");
    let newTime;
    if (timeSplit[0] < 10 && oldTimeSplit[1] === "AM") {
      newTime = `0${timeSplit[0]}:${timeSplit[1]}`;
    }
    if (timeSplit[0] >= 10 && oldTimeSplit[1] === "AM") {
      newTime = `${timeSplit[0]}:${timeSplit[1]}`;
    }
    if (timeSplit[0] === 12 && oldTimeSplit[1] === "PM") {
      newTime = `0${timeSplit[0]}:${timeSplit[1]}`;
    }
    if (timeSplit[0] <= 11 && oldTimeSplit[1] === "PM") {
      newTime = `${Number(timeSplit[0]) + 12}:${timeSplit[1]}`;
    }
    return newTime;
  }
  // time is in 24h notation
  const oldTimeSplit = oldTime.split(":");
  const char1 = oldTimeSplit[0].charAt(0);
  if (Number(char1) === 0) {
    oldTimeSplit[0] = oldTimeSplit[0].charAt(1);
  }
  let newTime;
  if (oldTimeSplit[0] <= 11) {
    newTime = `${oldTimeSplit[0]}:${oldTimeSplit[1]} AM`;
  }
  if (oldTimeSplit[0] === 12) {
    newTime = `${oldTimeSplit[0]}:${oldTimeSplit[1]} PM`;
  }
  if (oldTimeSplit[0] > 12) {
    newTime = `${oldTimeSplit[0] - 12}:${oldTimeSplit[1]} PM`;
  }
  return newTime;
};

const convertTimesFromUnix = (time, offset) => {
  // Takes unix time from Open Weather and returns a string with the remote
  // time (i.e. the place we're getting weather for) in human-readable format
  const timeOffset = time + offset;
  const timeConverted = timeOffset * 1000;
  const d = new Date(timeConverted);
  const dString = JSON.stringify(d);
  const regex = /([01]\d|2[0-3]):[0-5]\d/;
  const time24h = dString.match(regex)[0];
  return time24h;
};

const convertTimes = (unit) => {
  const times = document.querySelectorAll(".time");
  if (unit === 0) {
    // i.e. if time is currently in AM/PM notation
    for (let i = 0; i < times.length; i += 1) {
      const element = times[i].textContent;
      const newTime = convertTime(element, 0);
      times[i].textContent = newTime;
    }
  } else {
    // i.e. if time is currently in 24h notation
    for (let i = 0; i < times.length; i += 1) {
      const element = times[i].textContent;
      const newTime = convertTime(element, 1);
      times[i].textContent = newTime;
    }
  }
};

const convertTemps = (unit) => {
  const temperatures = document.querySelectorAll(".temperature");
  if (unit === 0) {
    for (let i = 0; i < temperatures.length; i += 1) {
      const el = temperatures[i].textContent;
      const newTemp = convertTemp(el, 0);
      const newTempRounded = roundTemp(newTemp);
      temperatures[i].textContent = newTempRounded;
    }
  } else {
    for (let i = 0; i < temperatures.length; i += 1) {
      const el = temperatures[i].textContent;
      const newTemp = convertTemp(el, 1);
      const newTempRounded = roundTemp(newTemp);
      temperatures[i].textContent = newTempRounded;
    }
  }
};

const convertWind = (unit) => {
  const wind = document.querySelector(".wind-speed");
  const windUnits = document.querySelector(".wind-units");
  if (unit === 0) {
    wind.dataset.kmh = wind.textContent;
    const kmToM = wind.textContent * 0.621371;
    wind.textContent = Math.round(kmToM);
    windUnits.textContent = "mph";
  } else {
    wind.textContent = wind.dataset.kmh;
    windUnits.textContent = "km/h";
  }
};

const convertVis = (value, unit) => {
  const vis = document.querySelector(".vis");
  if (unit === 0) {
    vis.textContent = Math.round(vis.textContent * 1.09361);
  } else {
    vis.textContent = Math.round(vis.textContent * 0.9144);
  }
};

const convertFromKelvin = (temp) => {
  const newTemp = temp - 273.15;
  const tempRounded = Math.round(newTemp * 100) / 100;
  return tempRounded;
};




/***/ }),

/***/ "./src/crs.min.js":
/*!************************!*\
  !*** ./src/crs.min.js ***!
  \************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
* country-region-selector
* ------------------------
* 0.5.0
* @author Ben Keen
* @repo https://github.com/benkeen/country-region-selector
* @licence MIT
*/

!function(a,n){if(true)!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (n),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}}(this,function(){"use strict";var m=!0,h=!0,l=[],t={},s=[["Afghanistan","AF","Badakhshan~BDS|Badghis~BDG|Baghlan~BGL|Balkh~BAL|Bamyan~BAM|Daykundi~DAY|Farah~FRA|Faryab~FYB|Ghazni~GHA|Ghor~GHO|Helmand~HEL|Herat~HER|Jowzjan~JOW|Kabul~KAB|Kandahar~KAN|Kapisa~KAP|Khost~KHO|Kunar~KNR|Kunduz~KDZ|Laghman~LAG|Logar~LOW|Maidan Wardak~WAR|Nangarhar~NAN|Nimruz~NIM|Nuristan~NUR|Paktia~PIA|Paktika~PKA|Panjshir~PAN|Parwan~PAR|Samangan~SAM|Sar-e Pol~SAR|Takhar~TAK|Urozgan~ORU|Zabul~ZAB"],["Åland Islands","AX","Brändö~BR|Eckerö~EC|Finström~FN|Föglö~FG|Geta~GT|Hammarland~HM|Jomala~JM|Kumlinge~KM|Kökar~KK|Lemland~LE|Lumparland~LU|Mariehamn~MH|Saltvik~SV|Sottunga~ST|Sund~SD|Vårdö~VR"],["Albania","AL","Berat~01|Dibër~09|Durrës~02|Elbasan~03|Fier~04|Gjirokastër~05|Korçë~06|Kukës~07|Lezhë~08|Shkodër~10|Tirana~11|Vlorë~12"],["Algeria","DZ","Adrar~01|Aïn Defla~44|Aïn Témouchent~46|Algiers~16|Annaba~23|Batna~05|Béchar~08|Béjaïa~06|Biskra~07|Blida~09|Bordj Bou Arréridj~34|Bouïra~10|Boumerdès~35|Chlef~02|Constantine~25|Djelfa~17|El Bayadh~32|El Oued~39|El Tarf~36|Ghardaïa~47|Guelma~24|Illizi~33|Jijel~18|Khenchela~40|Laghouat~03|Mascara~29|Médéa~26|Mila~43|Mostaganem~27|Msila~28|Naâma~45|Oran~31|Ouargla~30|Oum el Bouaghi~04|Relizane~48|Saïda~20|Sétif~19|Sidi Bel Abbès~22|Skikda~21|Souk Ahras~41|Tamanghasset~11|Tébessa~12|Tiaret~14|Tindouf~37|Tipaza~42|Tissemsilt~38|Tizi Ouzou~15|Tlemcen~13"],["American Samoa","AS","Tutuila~01|Aunu'u~02|Ta'ū~03|Ofu‑Olosega~04|Rose Atoll~21|Swains Island~22"],["Andorra","AD","Andorra la Vella~07|Canillo~02|Encamp~03|Escaldes-Engordany~08|La Massana~04|Ordino~05|Sant Julià de Lòria~06"],["Angola","AO","Bengo~BGO|Benguela~BGU|Bié~BIE|Cabinda~CAB|Cuando Cubango~CCU|Cuanza Norte~CNO|Cuanza Sul~CUS|Cunene~CNN|Huambo~HUA|Huíla~HUI|Luanda~LUA|Lunda Norte~LNO|Lunda Sul~LSU|Malanje~MAL|Moxico~MOX|Namibe~NAM|Uíge~UIG|Zaire~ZAI"],["Anguilla","AI","Anguilla~01|Anguillita Island~02|Blowing Rock~03|Cove Cay~04|Crocus Cay~05|Deadman's Cay~06|Dog Island~07|East Cay~08|Little Island~09|Little Scrub Island~10|Mid Cay~11|North Cay~12|Prickly Pear Cays~13|Rabbit Island~14|Sandy Island/Sand Island~15|Scilly Cay~16|Scrub Island~17|Seal Island~18|Sombrero/Hat Island~19|South Cay~20|South Wager Island~21|West Cay~22"],["Antarctica","AQ","Antarctica~AQ"],["Antigua and Barbuda","AG","Antigua Island~01|Barbuda Island~02|Bird Island~04|Bishop Island~05|Blake Island~06|Crump Island~09|Dulcina Island~10|Exchange Island~11|Five Islands~12|Great Bird Island~13|Green Island~14|Guiana Island~15|Hawes Island~17|Hells Gate Island~16|Henry Island~18|Johnson Island~19|Kid Island~20|Lobster Island~22|Maiden Island~24|Moor Island~25|Nanny Island~26|Pelican Island~27|Prickly Pear Island~28|Rabbit Island~29|Red Head Island~31|Redonda Island~03|Sandy Island~32|Smith Island~33|The Sisters~34|Vernon Island~35|Wicked Will Island~36|York Island~37"],["Argentina","AR","Buenos Aires~B|Capital Federal~C|Catamarca~K|Chaco~H|Chubut~U|Córdoba~X|Corrientes~W|Entre Ríos~E|Formosa~P|Jujuy~Y|La Pampa~L|La Rioja~F|Mendoza~M|Misiones~N|Neuquén~Q|Río Negro~R|Salta~A|San Juan~J|San Luis~D|Santa Cruz~Z|Santa Fe~S|Santiago del Estero~G|Tierra del Fuego~V|Tucumán~T"],["Armenia","AM","Aragatsotn~AG|Ararat~AR|Armavir~AV|Gegharkunik~GR|Kotayk~KT|Lori~LO|Shirak~SH|Syunik~SU|Tavush~TV|Vayots Dzor~VD|Yerevan~ER"],["Aruba","AW","Aruba~AW"],["Australia","AU","Australian Capital Territory~ACT|New South Wales~NSW|Northern Territory~NT|Queensland~QLD|South Australia~SA|Tasmania~TAS|Victoria~VIC|Western Australia~WA"],["Austria","AT","Burgenland~1|Kärnten~2|Niederösterreich~3|Oberösterreich~4|Salzburg~5|Steiermark~6|Tirol~7|Vorarlberg~8|Wien~9"],["Azerbaijan","AZ","Abşeron~ABS|Ağcabədi~AGC|Ağdam~AGM|Ağdaş~AGS|Ağstafa~AGA|Ağsu~AGU|Astara~AST|Babək~BAB|Balakən~BAL|Bərdə~BAR|Beyləqan~BEY|Biləsuvar~BIL|Cəbrayıl~CAB|Cəlilabad~CAL|Culfa~CUL|Daşkəsən~DAS|Füzuli~FUZ|Gədəbəy~GAD|Goranboy~GOR|Göyçay~GOY|Göygöl~GYG|Hacıqabul~HAC|İmişli~IMI|İsmayıllı~ISM|Kəlbəcər~KAL|Kǝngǝrli~KAN|Kürdəmir~KUR|Laçın~LAC|Lənkəran~LAN|Lerik~LER|Masallı~MAS|Neftçala~NEF|Oğuz~OGU|Ordubad~ORD|Qəbələ~QAB|Qax~QAX|Qazax~QAZ|Qobustan~QOB|Quba~QBA|Qubadli~QBI|Qusar~QUS|Saatlı~SAT|Sabirabad~SAB|Şabran~SBN|Sədərək~SAD|Şahbuz~SAH|Şəki~SAK|Salyan~SAL|Şamaxı~SMI|Şəmkir~SKR|Samux~SMX|Şərur~SAR|Siyəzən~SIY|Şuşa~SUS|Tərtər~TAR|Tovuz~TOV|Ucar~UCA|Xaçmaz~XAC|Xızı~XIZ|Xocalı~XCI|Xocavənd~XVD|Yardımlı~YAR|Yevlax~YEV|Zəngilan~ZAN|Zaqatala~ZAQ|Zərdab~ZAR"],["Bahamas","BS","Acklins Island~01|Berry Islands~22|Bimini~02|Black Point~23|Cat Island~03|Central Abaco~24|Crooked Island and Long Cay~28|East Grand Bahama~29|Exuma~04|Freeport~05|Fresh Creek~06|Governor's Harbour~07|Green Turtle Cay~08|Harbour Island~09|High Rock~10|Inagua~11|Kemps Bay~12|Long Island~13|Marsh Harbour~14|Mayaguana~15|Moore’s Island~40|New Providence~16|Nichollstown and Berry Islands~17|North Abaco~42|North Andros~41|North Eleuthera~33|Ragged Island~18|Rock Sound~19|San Salvador and Rum Cay~20|Sandy Point~21|South Abaco~35|South Andros~36|South Eleuthera~37|West Grand Bahama~39"],["Bahrain","BH","Al Janūbīyah~14|Al Manāmah~13|Al Muḩarraq~15|Al Wusţá~16|Ash Shamālīyah~17"],["Bangladesh","BD","Barisal~A|Chittagong~B|Dhaka~C|Khulna~D|Mymensingh~M|Rajshahi~E|Rangpur~F|Sylhet~G"],["Barbados","BB","Christ Church~01|Saint Andrew~02|Saint George~03|Saint James~04|Saint John~05|Saint Joseph~06|Saint Lucy~07|Saint Michael~08|Saint Peter~09|Saint Philip~10|Saint Thomas~11"],["Belarus","BY","Brest voblast~BR|Gorod Minsk~HO|Homiel voblast~HO|Hrodna voblast~HR|Mahilyow voblast~MA|Minsk voblast~MI|Vitsebsk voblast~VI"],["Belgium","BE","Bruxelles-Capitale~BRU|Région Flamande~VLG|Région Wallonië~WAL"],["Belize","BZ","Belize District~BZ|Cayo District~CY|Corozal District~CZL|Orange Walk District~OW|Stann Creek District~SC|Toledo District~TOL"],["Benin","BJ","Alibori~AL|Atakora~AK|Atlantique~AQ|Borgou~BO|Collines Department~CO|Donga~DO|Kouffo~KO|Littoral Department~LI|Mono Department~MO|Ouémé~OU|Plateau~PL|Zou~ZO"],["Bermuda","BM","City of Hamilton~03|Devonshire Parish~01|Hamilton Parish~02|Paget Parish~04|Pembroke Parish~05|Sandys Parish~08|Smith's Parish~09|Southampton Parish~10|St. George's Parish~07|Town of St. George~06|Warwick Parish~11"],["Bhutan","BT","Bumthang~33|Chhukha~12|Dagana~22|Gasa~GA|Haa~13|Lhuntse~44|Mongar~42|Paro~11|Pemagatshel~43|Punakha~23|Samdrup Jongkhar~45|Samtse~14|Sarpang~31|Thimphu~15|Trashigang~41|Trashiyangtse~TY|Trongsa~32|Tsirang~21|Wangdue Phodrang~24|Zhemgang~34"],["Bolivia","BO","Beni~B|Chuquisaca~H|Cochabamba~C|La Paz~L|Oruro~O|Pando~N|Potosí~P|Santa Cruz~S|Tarija~T"],["Bonaire, Sint Eustatius and Saba","BQ","Bonaire~BO|Saba Isand~SA|Sint Eustatius~SE"],["Bosnia and Herzegovina","BA","Brčko Distrikt~BRC|Federacija Bosne i Hercegovine~BIH|Republika Srpska~SRP"],["Botswana","BW","Central~CE|Ghanzi~GH|Kgalagadi~KG|Kgatleng~KL|Kweneng~KW|North West~NW|North-East~NE|South East~SE|Southern~SO"],["Bouvet Island","BV","Bouvet Island~BV"],["Brazil","BR","Acre~AC|Alagoas~AL|Amapá~AP|Amazonas~AM|Bahia~BA|Ceará~CE|Distrito Federal~DF|Espírito Santo~ES|Goiás~GO|Maranhão~MA|Mato Grosso~MT|Mato Grosso do Sul~MS|Minas Gerais~MG|Pará~PA|Paraíba~PB|Paraná~PR|Pernambuco~PE|Piauí~PI|Rio de Janeiro~RJ|Rio Grande do Norte~RN|Rio Grande do Sul~RS|Rondônia~RO|Roraima~RR|Santa Catarina~SC|São Paulo~SP|Sergipe~SE|Tocantins~TO"],["British Indian Ocean Territory","IO","British Indian Ocean Territory~IO"],["Brunei Darussalam","BN","Belait~BE|Brunei Muara~BM|Temburong~TE|Tutong~TU"],["Bulgaria","BG","Blagoevgrad~01|Burgas~02|Dobrich~08|Gabrovo~07|Jambol~28|Khaskovo~26|Kjustendil~10|Kurdzhali~09|Lovech~11|Montana~12|Pazardzhik~13|Pernik~14|Pleven~15|Plovdiv~16|Razgrad~17|Ruse~18|Shumen~27|Silistra~19|Sliven~20|Smoljan~21|Sofija~23|Sofija-Grad~22|Stara Zagora~24|Turgovishhe~25|Varna~03|Veliko Turnovo~04|Vidin~05|Vraca~06"],["Burkina Faso","BF","Balé~BAL|Bam/Lake Bam~BAM|Banwa Province~BAN|Bazèga~BAZ|Bougouriba~BGR|Boulgou Province~BLG|Boulkiemdé~BLK|Comoé/Komoe~COM|Ganzourgou Province~GAN|Gnagna~GNA|Gourma Province~GOU|Houet~HOU|Ioba~IOB|Kadiogo~KAD|Kénédougou~KEN|Komondjari~KMD|Kompienga~KMP|Kossi Province~KOS|Koulpélogo~KOP|Kouritenga~KOT|Kourwéogo~KOW|Léraba~LER|Loroum~LOR|Mouhoun~MOU|Namentenga~NAM|Naouri/Nahouri~NAO|Nayala~NAY|Noumbiel~NOU|Oubritenga~OUB|Oudalan~OUD|Passoré~PAS|Poni~PON|Sanguié~SNG|Sanmatenga~SMT|Séno~SEN|Sissili~SIS|Soum~SOM|Sourou~SOR|Tapoa~TAP|Tui/Tuy~TUI|Yagha~YAG|Yatenga~YAT|Ziro~ZIR|Zondoma~ZON|Zoundwéogo~ZOU"],["Burundi","BI","Bubanza~BB|Bujumbura Mairie~BM|Bujumbura Rural~BL|Bururi~BR|Cankuzo~CA|Cibitoke~CI|Gitega~GI|Karuzi~KR|Kayanza~KY|Kirundo~KI|Makamba~MA|Muramvya~MU|Muyinga~MY|Mwaro~MW|Ngozi~NG|Rutana~RT|Ruyigi~RY"],["Cambodia","KH","Baat Dambang~2|Banteay Mean Chey~1|Kampong Chaam~3|Kampong Chhnang~4|Kampong Spueu~5|Kampong Thum~6|Kampot~7|Kandaal~8|Kaoh Kong~9|Kracheh~10|Krong Kaeb~23|Krong Pailin~24|Krong Preah Sihanouk~18|Mondol Kiri~11|Otdar Mean Chey~22|Phnom Penh~12|Pousaat~15|Preah Vihear~13|Prey Veaeng~14|Rotanah Kiri~16|Siem Reab~17|Stueng Treng~19|Svaay Rieng~20|Taakaev~21|Tbong Khmum~25"],["Cameroon","CM","Adamaoua~AD|Centre~CE|Est~ES|Extrême-Nord~EN|Littoral~LT|Nord~NO|Nord-Ouest~NW|Ouest~OU|Sud~SU|Sud-Ouest~SW"],["Canada","CA","Alberta~AB|British Columbia~BC|Manitoba~MB|New Brunswick~NB|Newfoundland and Labrador~NL|Northwest Territories~NT|Nova Scotia~NS|Nunavut~NU|Ontario~ON|Prince Edward Island~PE|Quebec~QC|Saskatchewan~SK|Yukon~YT"],["Cape Verde","CV","Boa Vista~BV|Brava~BR|Calheta de São Miguel~CS|Maio~MA|Mosteiros~MO|Paúl~PA|Porto Novo~PN|Praia~PR|Ribeira Brava~RB|Ribeira Grande~RG|Sal~SL|Santa Catarina~CA|Santa Cruz~CR|São Domingos~SD|São Filipe~SF|São Nicolau~SN|São Vicente~SV|Tarrafal~TA|Tarrafal de São Nicolau~TS"],["Cayman Islands","KY","Creek|Eastern|Midland|South Town|Spot Bay|Stake Bay|West End|Western"],["Central African Republic","CF","Bamingui-Bangoran~BB|Bangui~BGF|Basse-Kotto~BK|Haute-Kotto~HK|Haut-Mbomou~HM|Kémo~KG|Lobaye~LB|Mambéré-Kadéï~HS|Mbomou~MB|Nana-Grebizi~10|Nana-Mambéré~NM|Ombella-M'Poko~MP|Ouaka~UK|Ouham~AC|Ouham Péndé~OP|Sangha-Mbaéré~SE|Vakaga~VK"],["Chad","TD","Bahr el Ghazal~BG|Batha~BA|Borkou~BO|Chari-Baguirmi~CB|Ennedi-Est~EE|Ennedi-Ouest~EO|Guéra~GR|Hadjer Lamis~HL|Kanem~KA|Lac~LC|Logone Occidental~LO|Logone Oriental~LR|Mondoul~MA|Mayo-Kébbi-Est~ME|Moyen-Chari~MC|Ouaddai~OD|Salamat~SA|Sila~SI|Tandjilé~TA|Tibesti~TI|Ville de Ndjamena~ND|Wadi Fira~WF"],["Chile","CL","Aisén del General Carlos Ibáñez del Campo~AI|Antofagasta~AN|Araucanía~AR|Arica y Parinacota~AP|Atacama~AT|Bío-Bío~BI|Coquimbo~CO|Libertador General Bernardo O'Higgins~LI|Los Lagos~LL|Los Ríos~LR|Magallanes y Antartica Chilena~MA|Marga-Marga~|Maule~ML|Región Metropolitana de Santiago~RM|Tarapacá~TA|Valparaíso~VS"],["China","CN","Anhui~34|Beijing~11|Chongqing~50|Fujian~35|Gansu~62|Guangdong~44|Guangxi~45|Guizhou~52|Hainan~46|Hebei~13|Heilongjiang~23|Henan~41|Hong Kong~91|Hubei~42|Hunan~43|Inner Mongolia~15|Jiangsu~32|Jiangxi~36|Jilin~22|Liaoning~21|Macau~92|Ningxia~64|Qinghai~63|Shaanxi~61|Shandong~37|Shanghai~31|Shanxi~14|Sichuan~51|Tianjin~12|Tibet~54|Xinjiang~65|Yunnan~53|Zhejiang~33"],["Christmas Island","CX","Christmas Island~CX"],["Cocos (Keeling) Islands","CC","Direction Island~DI|Home Island~HM|Horsburgh Island~HR|North Keeling Island~NK|South Island~SI|West Island~WI"],["Colombia","CO","Amazonas~AMA|Antioquia~ANT|Arauca~ARA|Archipiélago de San Andrés~SAP|Atlántico~ATL|Bogotá D.C.~DC|Bolívar~BOL|Boyacá~BOY|Caldas~CAL|Caquetá~CAQ|Casanare~CAS|Cauca~CAU|Cesar~CES|Chocó~CHO|Córdoba~COR|Cundinamarca~CUN|Guainía~GUA|Guaviare~GUV|Huila~HUI|La Guajira~LAG|Magdalena~MAG|Meta~MET|Nariño~NAR|Norte de Santander~NSA|Putumayo~PUT|Quindío~QUI|Risaralda~RIS|Santander~SAN|Sucre~SUC|Tolima~TOL|Valle del Cauca~VAC|Vaupés~VAU|Vichada~VID"],["Comoros","KM","Andjazîdja~G|Andjouân~A|Moûhîlî~M"],["Congo, Republic of the (Brazzaville)","CG","Bouenza~11|Brazzaville~BZV|Cuvette~8|Cuvette-Ouest~15|Kouilou~5|Lékoumou~2|Likouala~7|Niari~9|Plateaux~14|Pointe-Noire~16|Pool~12|Sangha~13"],["Congo, the Democratic Republic of the (Kinshasa)","CD","Bandundu~BN|Bas-Congo~BC|Équateur~EQ|Kasaï-Occidental~KE|Kasaï-Oriental~KW|Katanga~KA|Kinshasa~KN|Maniema~MA|Nord-Kivu~NK|Orientale~OR|Sud-Kivu~SK"],["Cook Islands","CK","Aitutaki|Atiu|Avarua|Mangaia|Manihiki|Ma'uke|Mitiaro|Nassau|Palmerston|Penrhyn|Pukapuka|Rakahanga"],["Costa Rica","CR","Alajuela~2|Cartago~3|Guanacaste~5|Heredia~4|Limón~7|Puntarenas~6|San José~1"],["Côte d'Ivoire, Republic of","CI","Agnéby~16|Bafing~17|Bas-Sassandra~09|Denguélé~10|Dix-Huit Montagnes~06|Fromager~18|Haut-Sassandra~02|Lacs~07|Lagunes~01|Marahoué~12|Moyen-Cavally~19|Moyen-Comoé~05|N'zi-Comoé~11|Savanes~03|Sud-Bandama~15|Sud-Comoé~13|Vallée du Bandama~04|Worodougou~14|Zanzan~08"],["Croatia","HR","Bjelovarsko-Bilogorska Županija~07|Brodsko-Posavska Županija~12|Dubrovačko-Neretvanska Županija~19|Grad Zagreb~21|Istarska Županija~18|Karlovačka Županija~04|Koprivničko-Krizevačka Županija~06|Krapinsko-Zagorska Županija~02|Ličko-Senjska Županija~09|Međimurska Županija~20|Osječko-Baranjska Županija~14|Požeško-Slavonska Županija~11|Primorsko-Goranska Županija~08|Sisačko-Moslavačka Županija~03|Splitsko-Dalmatinska Županija~17|Sibensko-Kninska Županija~15|Varaždinska Županija~05|Virovitičko-Podravska Županija~10|Vukovarsko-Srijemska Županija~16|Zadarska Županija~13|Zagrebacka Zupanija~01"],["Cuba","CU","Artemisa~15|Camagüey~09|Ciego de Ávila~08|Cienfuegos~06|Granma~12|Guantánamo~14|Holguín~11|Isla de la Juventud~99|La Habana~03|Las Tunas~10|Matanzas~04|Mayabeque~16|Pinar del Río~01|Sancti Spíritus~07|Santiago de Cuba~13|Villa Clara~05"],["Curaçao","CW","Curaçao~CW"],["Cyprus","CY","Ammochostos~04|Keryneia~05|Larnaka~03|Lefkosia~01|Lemesos~02|Pafos~05"],["Czech Republic","CZ","Hlavní město Praha~PR|Jihočeský kraj~JC|Jihomoravský kraj~JM|Karlovarský kraj~KA|Královéhradecký kraj~KR|Liberecký kraj~LI|Moravskoslezský kraj~MO|Olomoucký kraj~OL|Pardubický kraj~PA|Plzeňský kraj~PL|Středočeský kraj~ST|Ústecký kraj~US|Vysočina~VY|Zlínský kraj~ZL"],["Denmark","DK","Hovedstaden~84|Kujalleq~GL-KU|Midtjylland~82|Norderøerne~FO-01|Nordjylland~81|Østerø~FO-06|Qaasuitsup~GL-QA|Qeqqata~GL-QE|Sandø~FO-02|Sermersooq~GL-SM|Sjælland~85|Strømø~FO-03|Suderø~FO-04|Syddanmark~83|Vågø~FO-05"],["Djibouti","DJ","Ali Sabieh~AS|Arta~AR|Dikhil~DI|Obock~OB|Tadjourah~TA"],["Dominica","DM","Saint Andrew Parish~02|Saint David Parish~03|Saint George Parish~04|Saint John Parish~05|Saint Joseph Parish~06|Saint Luke Parish~07|Saint Mark Parish~08|Saint Patrick Parish~09|Saint Paul Parish~10|Saint Peter Parish~11"],["Dominican Republic","DO","Cibao Central~02|Del Valle~37|Distrito Nacional~01|Enriquillo~38|Norcentral~04|Nordeste~34|Noroeste~34|Norte~35|Valdesia~42"],["Ecuador","EC","Azuay~A|Bolívar~B|Cañar~F|Carchi~C|Chimborazo~H|Cotopaxi~X|El Oro~O|Esmeraldas~E|Galápagos~W|Guayas~G|Imbabura~I|Loja~L|Los Ríos~R|Manabí~M|Morona-Santiago~S|Napo~N|Orellana~D|Pastaza~Y|Pichincha~P|Santa Elena~SE|Santo Domingo de los Tsáchilas~SD|Sucumbíos~U|Tungurahua~T|Zamora-Chinchipe~Z"],["Egypt","EG","Alexandria~ALX|Aswan~ASN|Asyout~AST|Bani Sueif~BNS|Beheira~BH|Cairo~C|Daqahlia~DK|Dumiat~DT|El Bahr El Ahmar~BA|El Ismailia~IS|El Suez~SUZ|El Wadi El Gedeed~WAD|Fayoum~FYM|Gharbia~GH|Giza~SUZ|Helwan~HU|Kafr El Sheikh~KFS|Luxor~LX|Matrouh~MT|Menia~MN|Menofia~MNF|North Sinai~SIN|Port Said~PTS|Qalubia~KB|Qena~KN|Sharqia~SHR|Sixth of October~SU|Sohag~SHG|South Sinai~JS"],["El Salvador","SV","Ahuachapán~AH|Cabañas~CA|Cuscatlán~CU|Chalatenango~CH|La Libertad~LI|La Paz~PA|La Unión~UN|Morazán~MO|San Miguel~SM|San Salvador~SS|Santa Ana~SA|San Vicente~SV|Sonsonate~SO|Usulután~US"],["Equatorial Guinea","GQ","Annobón~AN|Bioko Norte~BN|Bioko Sur~BS|Centro Sur~CS|Kié-Ntem~KN|Litoral~LI|Wele-Nzas~WN"],["Eritrea","ER","Anseba~AN|Debub~DU|Debub-Keih-Bahri~DK|Gash-Barka~GB|Maekel~MA|Semien-Keih-Bahri~SK"],["Estonia","EE","Harjumaa (Tallinn)~37|Hiiumaa (Kardla)~39|Ida-Virumaa (Johvi)~44|Järvamaa (Paide)~41|Jõgevamaa (Jogeva)~49|Läänemaa~57|Lääne-Virumaa (Rakvere)~59|Pärnumaa (Parnu)~67|Põlvamaa (Polva)~65|Raplamaa (Rapla)~70|Saaremaa (Kuessaare)~74|Tartumaa (Tartu)~78|Valgamaa (Valga)~82|Viljandimaa (Viljandi)~84|Võrumaa (Voru)~86"],["Ethiopia","ET","Addis Ababa~AA|Afar~AF|Amhara~AM|Benshangul-Gumaz~BE|Dire Dawa~DD|Gambela~GA|Harari~HA|Oromia~OR|Somali~SO|Southern Nations Nationalities and People's Region~SN|Tigray~TI"],["Falkland Islands (Islas Malvinas)","FK","Falkland Islands (Islas Malvinas)"],["Faroe Islands","FO","Bordoy|Eysturoy|Mykines|Sandoy|Skuvoy|Streymoy|Suduroy|Tvoroyri|Vagar"],["Fiji","FJ","Ba~01|Bua~01|Cakaudrove~03|Kadavu~04|Lau~05|Lomaiviti~06|Macuata~07|Nadroga and Navosa~08|Naitasiri~09|Namosi~10|Ra~011|Rewa~12|Rotuma~R|Serua~12|Tailevu~14"],["Finland","FI","Ahvenanmaan lääni~AL|Etelä-Suomen lääni~ES|Itä-Suomen lääni~IS|Länsi-Suomen lääni~LS|Lapin lääni~LL|Oulun lääni~OL"],["France","FR","Auvergne-Rhône-Alpes~ARA|Bourgogne-Franche-Comté~BFC|Bretagne~BRE|Centre-Val de Loire~CVL|Corse~COR|Grand Est~GES|Hauts-de-France~HDF|Île-de-France~IDF|Normandie~NOR|Nouvelle-Aquitaine~NAQ|Occitanie~OCC|Pays de la Loire~PDL|Provence-Alpes-Cote d'Azur~PAC|Clipperton~CP|Guadeloupe~GP|Guyane~GF|Martinique~MQ|Mayotte~YT|Novelle-Calédonie~NC|Polynésie~PF|Saint-Pierre-et-Miquelon~PM|Saint Barthélemy~BL|Saint Martin~MF|Réunion~RE|Terres Australes Françaises~TF|Wallis-et-Futuna~WF"],["French Guiana","GF","French Guiana"],["French Polynesia","PF","Archipel des Marquises|Archipel des Tuamotu|Archipel des Tubuai|Iles du Vent|Iles Sous-le-Vent"],["French Southern and Antarctic Lands","TF","Adelie Land|Ile Crozet|Iles Kerguelen|Iles Saint-Paul et Amsterdam"],["Gabon","GA","Estuaire~1|Haut-Ogooué~2|Moyen-Ogooué~3|Ngounié~4|Nyanga~5|Ogooué-Ivindo~6|Ogooué-Lolo~7|Ogooué-Maritime~8|Woleu-Ntem~9"],["Gambia, The","GM","Banjul~B|Central River~M|Lower River~L|North Bank~N|Upper River~U|Western~W"],["Georgia","GE","Abkhazia (Sokhumi)~AB|Ajaria (Bat'umi)~AJ|Guria~GU|Imereti~IM|K'akheti~KA|Kvemo Kartli~KK|Mtshkheta-Mtianeti~MM|Rach'a-Lexhkumi-KvemoSvaneti~RL|Samegrelo-Zemo Svaneti~SZ|Samtskhe-Javakheti~SJ|Shida Kartli~SK|Tbilisi~TB"],["Germany","DE","Baden-Württemberg~BW|Bayern~BY|Berlin~BE|Brandenburg~BB|Bremen~HB|Hamburg~HH|Hessen~HE|Mecklenburg-Vorpommern~MV|Niedersachsen~NI|Nordrhein-Westfalen~NW|Rheinland-Pfalz~RP|Saarland~SL|Sachsen~SN|Sachsen-Anhalt~ST|Schleswig-Holstein~SH|Thüringen~TH"],["Ghana","GH","Ashanti~AH|Brong-Ahafo~BA|Central~CP|Eastern~EP|Greater Accra~AA|Northern~NP|Upper East~UE|Upper West~UW|Volta~TV|Western~WP"],["Gibraltar","GI","Gibraltar"],["Greece","GR","Anatolikí Makedonía kai Thráki~A|Attikḯ~I|Dytikí Elláda~G|Dytikí Makedonía~C|Ionía Nísia~F|Kentrikí Makedonía~B|Krítí~M|Notío Aigaío~L|Peloponnísos~J|Stereá Elláda~H|Thessalía~E|Voreío Aigaío~K|Ípeiros~D|Ágion Óros~69"],["Greenland","GL","Kommune Kujalleq~KU|Kommuneqarfik Sermersooq~SM|Qaasuitsup Kommunia~QA|Qeqqata Kommunia~QE"],["Grenada","GD","Saint Andrew~01|Saint David~02|Saint George~03|Saint John~04|Saint Mark~05|Saint Patrick~06|Southern Grenadine Islands~10"],["Guadeloupe","GP","Guadeloupe"],["Guam","GU","Guam"],["Guatemala","GT","Alta Verapaz~AV|Baja Verapaz~BV|Chimaltenango~CM|Chiquimula~CQ|El Progreso~PR|Escuintla~ES|Guatemala~GU|Huehuetenango~HU|Izabal~IZ|Jalapa~JA|Jutiapa~JU|Petén~PE|Quetzaltenango~QZ|Quiché~QC|Retalhuleu~Re|Sacatepéquez~SA|San Marcos~SM|Santa Rosa~SR|Sololá~SO|Suchitepéquez~SU|Totonicapán~TO|Zacapa~ZA"],["Guernsey","GG","Castel|Forest|St. Andrew|St. Martin|St. Peter Port|St. Pierre du Bois|St. Sampson|St. Saviour|Torteval|Vale"],["Guinea","GN","Boké~B|Conakry~C|Faranah~F|Kankan~K|Kindia~D|Labé~L|Mamou~M|Nzérékoré~N"],["Guinea-Bissau","GW","Bafatá~BA|Biombo~BM|Bissau~BS|Bolama-Bijagos~BL|Cacheu~CA|Gabú~GA|Oio~OI|Quinara~QU|Tombali~TO"],["Guyana","GY","Barima-Waini~BA|Cuyuni-Mazaruni~CU|Demerara-Mahaica~DE|East Berbice-Corentyne~EB|Essequibo Islands-West Demerara~ES|Mahaica-Berbice~MA|Pomeroon-Supenaam~PM|Potaro-Siparuni~PT|Upper Demerara-Berbice~UD|Upper Takutu-Upper Essequibo~UT"],["Haiti","HT","Artibonite~AR|Centre~CE|Grand'Anse~GA|Nippes~NI|Nord~ND|Nord-Est~NE|Nord-Ouest~NO|Ouest~OU|Sud~SD|Sud-Est~SE"],["Heard Island and McDonald Islands","HM","Heard Island and McDonald Islands"],["Holy See (Vatican City)","VA","Holy See (Vatican City)~01"],["Honduras","HN","Atlántida~AT|Choluteca~CH|Colón~CL|Comayagua~CM|Copán~CP|Cortés~CR|El Paraíso~EP|Francisco Morazan~FM|Gracias a Dios~GD|Intibucá~IN|Islas de la Bahía~IB|La Paz~LP|Lempira~LE|Ocotepeque~OC|Olancho~OL|Santa Bárbara~SB|Valle~VA|Yoro~YO"],["Hong Kong","HK","Hong Kong"],["Hungary","HU","Bács-Kiskun~BK|Baranya~BA|Békés~BE|Békéscsaba~BC|Borsod-Abauj-Zemplen~BZ|Budapest~BU|Csongrád~CS|Debrecen~DE|Dunaújváros~DU|Eger~EG|Érd~ER|Fejér~FE|Győr~GY|Győr-Moson-Sopron~GS|Hajdú-Bihar~HB|Heves~HE|Hódmezővásárhely~HV|Jász-Nagykun-Szolnok~N|Kaposvár~KV|Kecskemét~KM|Komárom-Esztergom~KE|Miskolc~MI|Nagykanizsa~NK|Nógrád~NO|Nyíregyháza~NY|Pécs~PS|Pest~PE|Salgótarján~ST|Somogy~SO|Sopron~SN|Szabolcs-á-Bereg~SZ|Szeged~SD|Székesfehérvár~SF|Szekszárd~SS|Szolnok~SK|Szombathely~SH|Tatabánya~TB|Tolna~TO|Vas~VA|Veszprém~VE|Veszprém (City)~VM|Zala~ZA|Zalaegerszeg~ZE"],["Iceland","IS","Austurland~7|Höfuðborgarsvæði utan Reykjavíkur~1|Norðurland eystra~6|Norðurland vestra~5|Suðurland~8|Suðurnes~2|Vestfirðir~4|Vesturland~3"],["India","IN","Andaman and Nicobar Islands~AN|Andhra Pradesh~AP|Arunachal Pradesh~AR|Assam~AS|Bihar~BR|Chandigarh~CH|Chhattisgarh~CT|Dadra and Nagar Haveli~DN|Daman and Diu~DD|Delhi~DL|Goa~GA|Gujarat~GJ|Haryana~HR|Himachal Pradesh~HP|Jammu and Kashmir~JK|Jharkhand~JH|Karnataka~KA|Kerala~KL|Lakshadweep~LD|Madhya Pradesh~MP|Maharashtra~MH|Manipur~MN|Meghalaya~ML|Mizoram~MZ|Nagaland~NL|Odisha~OR|Puducherry~PY|Punjab~PB|Rajasthan~RJ|Sikkim~WK|Tamil Nadu~TN|Telangana~TG|Tripura~TR|Uttarakhand~UT|Uttar Pradesh~UP|West Bengal~WB"],["Indonesia","ID","Aceh~AC|Bali~BA|Bangka Belitung~BB|Banten~BT|Bengkulu~BE|Gorontalo~GO|Jakarta Raya~JK|Jambi~JA|Jawa Barat~JB|Jawa Tengah~JT|Jawa Timur~JI|Kalimantan Barat~KB|Kalimantan Selatan~KS|Kalimantan Tengah~KT|Kalimantan Timur~KI|Kalimantan Utara~KU|Kepulauan Riau~KR|Lampung~LA|Maluku~MA|Maluku Utara~MU|Nusa Tenggara Barat~NB|Nusa Tenggara Timur~NT|Papua~PA|Papua Barat~PB|Riau~RI|Sulawesi Selatan~SR|Sulawesi Tengah~ST|Sulawesi Tenggara~SG|Sulawesi Utara~SA|Sumatera Barat~SB|Sumatera Selatan~SS|Sumatera Utara~SU|Yogyakarta~YO"],["Iran, Islamic Republic of","IR","Alborz~32|Ardabīl~03|Āz̄arbāyjān-e Gharbī~02|Āz̄arbāyjān-e Sharqī~01|Būshehr~06|Chahār Maḩāl va Bakhtīārī~08|Eşfahān~04|Fārs~14|Gīlān~19|Golestān~27|Hamadān~24|Hormozgān~23|Īlām~05|Kermān~15|Kermānshāh~17|Khorāsān-e Jonūbī~29|Khorāsān-e Raẕavī~30|Khorāsān-e Shomālī~61|Khūzestān~10|Kohgīlūyeh va Bowyer Aḩmad~18|Kordestān~16|Lorestān~20|Markazi~22|Māzandarān~21|Qazvīn~28|Qom~26|Semnān~12|Sīstān va Balūchestān~13|Tehrān~07|Yazd~25|Zanjān~11"],["Iraq","IQ","Al Anbār~AN|Al Başrah~BA|Al Muthanná~MU|Al Qādisīyah~QA|An Najaf~NA|Arbīl~AR|As Sulaymānīyah~SU|Bābil~BB|Baghdād~BG|Dohuk~DA|Dhī Qār~DQ|Diyālá~DI|Karbalā'~KA|Kirkuk~KI|Maysān~MA|Nīnawá~NI|Şalāḩ ad Dīn~SD|Wāsiţ~WA"],["Ireland","IE","Carlow~CW|Cavan~CN|Clare~CE|Cork~CO|Donegal~DL|Dublin~D|Galway~G|Kerry~KY|Kildare~KE|Kilkenny~KK|Laois~LS|Leitrim~LM|Limerick~LK|Longford~LD|Louth~LH|Mayo~MO|Meath~MH|Monaghan~MN|Offaly~OY|Roscommon~RN|Sligo~SO|Tipperary~TA|Waterford~WD|Westmeath~WH|Wexford~WX|Wicklow~WW"],["Isle of Man","IM","Isle of Man"],["Israel","IL","HaDarom~D|HaMerkaz~M|HaTsafon~Z|H̱efa~HA|Tel-Aviv~TA|Yerushalayim~JM"],["Italy","IT","Abruzzo~65|Basilicata~77|Calabria~78|Campania~72|Emilia-Romagna~45|Friuli-Venezia Giulia~36|Lazio~62|Liguria~42|Lombardia~25|Marche~57|Molise~67|Piemonte~21|Puglia~75|Sardegna~88|Sicilia~82|Toscana~52|Trentino-Alto Adige~32|Umbria~55|Valle d'Aosta~23|Veneto~34"],["Jamaica","JM","Clarendon~13|Hanover~09|Kingston~01|Manchester~12|Portland~04|Saint Andrew~02|Saint Ann~06|Saint Catherine~14|Saint Elizabeth~11|Saint James~08|Saint Mary~05|Saint Thomas~03|Trelawny~07|Westmoreland~10"],["Japan","JP","Aichi~23|Akita~05|Aomori~02|Chiba~12|Ehime~38|Fukui~18|Fukuoka~40|Fukushima~07|Gifu~21|Gunma~10|Hiroshima~34|Hokkaido~01|Hyogo~28|Ibaraki~08|Ishikawa~17|Iwate~03|Kagawa~37|Kagoshima~46|Kanagawa~14|Kochi~39|Kumamoto~43|Kyoto~26|Mie~24|Miyagi~04|Miyazaki~45|Nagano~20|Nagasaki~42|Nara~29|Niigata~15|Oita~44|Okayama~33|Okinawa~47|Osaka~27|Saga~41|Saitama~11|Shiga~25|Shimane~32|Shizuoka~22|Tochigi~09|Tokushima~36|Tokyo~13|Tottori~31|Toyama~16|Wakayama~30|Yamagata~06|Yamaguchi~35|Yamanashi~19"],["Jersey","JE","Jersey"],["Jordan","JO","‘Ajlūn~AJ|Al 'Aqabah~AQ|Al Balqā’~BA|Al Karak~KA|Al Mafraq~MA|Al ‘A̅şimah~AM|Aţ Ţafīlah~AT|Az Zarqā’~AZ|Irbid~IR|Jarash~JA|Ma‘ān~MN|Mādabā~MD"],["Kazakhstan","KZ","Almaty~ALA|Aqmola~AKM|Aqtobe~AKT|Astana~AST|Atyrau~ATY|Batys Qazaqstan~ZAP|Bayqongyr|Mangghystau~MAN|Ongtustik Qazaqstan~YUZ|Pavlodar~PAV|Qaraghandy~KAR|Qostanay~KUS|Qyzylorda~KZY|Shyghys Qazaqstan~VOS|Soltustik Qazaqstan~SEV|Zhambyl~ZHA"],["Kenya","KE","Baringo~01|Bomet~02|Bungoma~03|Busia~04|Eleyo/Marakwet~05|Embu~06|Garissa~07|Homa Bay~08|Isiolo~09|Kajiado~10|Kakamega~11|Kericho~12|Kiambu~13|Kilifi~14|Kirinyaga~15|Kisii~16|Kisumu~17|Kitui~18|Kwale~19|Laikipia~20|Lamu~21|Machakos~22|Makueni~23|Mandera~24|Marsabit~25|Meru~26|Migori~27|Mombasa~28|Murang'a~29|Nairobi City~30|Nakuru~31|Nandi~32|Narok~33|Nyamira~34|Nyandarua~35|Nyeri~36|Samburu~37|Siaya~38|Taita/Taveta~39|Tana River~40|Tharaka-Nithi~41|Trans Nzoia~42|Turkana~43|Uasin Gishu~44|Vihiga~45|Wajir~46|West Pokot~47"],["Kiribati","KI","Abaiang|Abemama|Aranuka|Arorae|Banaba|Beru|Butaritari|Central Gilberts|Gilbert Islands~G|Kanton|Kiritimati|Kuria|Line Islands~L|Maiana|Makin|Marakei|Nikunau|Nonouti|Northern Gilberts|Onotoa|Phoenix Islands~P|Southern Gilberts|Tabiteuea|Tabuaeran|Tamana|Tarawa|Teraina"],["Korea, Democratic People's Republic of","KP","Chagang-do (Chagang Province)~04|Hamgyong-bukto (North Hamgyong Province)~09|Hamgyong-namdo (South Hamgyong Province)~08|Hwanghae-bukto (North Hwanghae Province)~06|Hwanghae-namdo (South Hwanghae Province)~05|Kangwon-do (Kangwon Province)~07|Nasŏn (Najin-Sŏnbong)~13|P'yongan-bukto (North P'yongan Province)~03|P'yongan-namdo (South P'yongan Province)~02|P'yongyang-si (P'yongyang City)~01|Yanggang-do (Yanggang Province)~10"],["Korea, Republic of","KR","Ch'ungch'ongbuk-do~43|Ch'ungch'ongnam-do~44|Cheju-do~49|Chollabuk-do~45|Chollanam-do~46|Inch'on-Kwangyokhi~28|Kang-won-do~42|Kwangju-Kwangyokshi~28|Kyonggi-do~41|Kyongsangbuk-do~47|Kyongsangnam-do~48|Pusan-Kwangyokshi~26|Seoul-T'ukpyolshi~11|Sejong~50|Taegu-Kwangyokshi~27|Taejon-Kwangyokshi~30|Ulsan-Kwangyokshi~31"],["Kuwait","KW","Al Aḩmadi~AH|Al Farwānīyah~FA|Al Jahrā’~JA|Al ‘Āşimah~KU|Ḩawallī~HA|Mubārak al Kabir~MU"],["Kyrgyzstan","KG","Batken Oblasty~B|Bishkek Shaary~GB|Chuy Oblasty (Bishkek)~C|Jalal-Abad Oblasty~J|Naryn Oblasty~N|Osh Oblasty~O|Talas Oblasty~T|Ysyk-Kol Oblasty (Karakol)~Y"],["Laos","LA","Attapu~AT|Bokèo~BK|Bolikhamxai~BL|Champasak~CH|Houaphan~HO|Khammouan~KH|Louang Namtha~LM|Louangphabang~LP|Oudômxai~OU|Phôngsali~PH|Salavan~SL|Savannakhét~SV|Vientiane~VI|Xaignabouli~XA|Xékong~XE|Xaisomboun~XS|Xiangkhouang~XI"],["Latvia","LV","Aglona~001|Aizkraukle~002|Aizpute~003|Aknīste~004|Aloja~005|Alsunga~06|Alūksne~007|Amata~008|Ape~009|Auce~010|Ādaži~011|Babīte~012|Baldone~013|Baltinava~014|Balvi~015|Bauska~016|Beverīna~017|Brocēni~018|Burtnieki~019|Carnikava~020|Cesvaine~021|Cēsis~022|Cibla~023|Dagda~024|Daugavpils~025|Daugavpils (City)~DGV|Dobele~026|Dundaga~027|Durbe~028|Engure~029|Ērgļi~030|Garkalne~031|Grobiņa~032|Gulbene~033|Iecava~034|Ikšķile~035|Ilūkste~036|Inčukalns~037|Jaunjelgava~038|Jaunpiebalga~039|Jaunpils~040|Jelgava~041|Jelgava (City)~JEL|Jēkabpils~042|Jēkabpils (City)~JKB|Jūrmala (City)~JUR|Kandava~043|Kārsava~044|Kocēni~045|Koknese~046|Krāslava~047|Krimulda~048|Krustpils~049|Kuldīga~050|Ķegums~051|Ķekava~052|Lielvārde~053|Liepāja~LPX|Limbaži~054|Līgatne~055|Līvāni~056|Lubāna~057|Ludza~058|Madona~059|Mazsalaca~060|Mālpils~061|Mārupe~062|Mērsrags~063|Naukšēni~064|Nereta~065|Nīca~066|Ogre~067|Olaine~068|Ozolnieki~069|Pārgauja~070|Pāvilosta~071|Pļaviņas~072|Preiļi~073|Priekule~074|Priekuļi~075|Rauna~076|Rēzekne~077|Rēzekne (City)~REZ|Riebiņi~078|Rīga~RIX|Roja~079|Ropaži~080|Rucava~081|Rugāji~082|Rundāle~083|Rūjiena~084|Sala~085|Salacgrīva~086|Salaspils~087|Saldus~088|Saulkrasti~089|Sēja~090|Sigulda~091|Skrīveri~092|Skrunda~093|Smiltene~094|Stopiņi~095|Strenči~096|Talsi~097|Tērvete~098|Tukums~099|Vaiņode~100|Valka~101|Valmiera~VMR|Varakļāni~102|Vārkava~103|Vecpiebalga~104|Vecumnieki~105|Ventspils~106|Ventspils (City)~VEN|Viesīte~107|Viļaka~108|Viļāni~109|Zilupe~110"],["Lebanon","LB","Aakkâr~AK|Baalbelk-Hermel~BH|Béqaa~BI|Beyrouth~BA|Liban-Nord~AS|Liban-Sud~JA|Mont-Liban~JL|Nabatîyé~NA"],["Lesotho","LS","Berea~D|Butha-Buthe~B|Leribe~C|Mafeteng~E|Maseru~A|Mohales Hoek~F|Mokhotlong~J|Qacha's Nek~H|Quthing~G|Thaba-Tseka~K"],["Liberia","LR","Bomi~BM|Bong~BG|Gbarpolu~GP|Grand Bassa~GB|Grand Cape Mount~CM|Grand Gedeh~GG|Grand Kru~GK|Lofa~LO|Margibi~MG|Maryland~MY|Montserrado~MO|Nimba~NI|River Cess~RI|River Geee~RG|Sinoe~SI"],["Libya","LY","Al Buţnān~BU|Al Jabal al Akhḑar~JA|Al Jabal al Gharbī~JG|Al Jafārah~JA|Al Jufrah~JU|Al Kufrah~FK|Al Marj~MJ|Al Marquab~MB|Al Wāḩāt~WA|An Nuqaţ al Khams~NQ|Az Zāwiyah~ZA|Banghāzī~BA|Darnah~DR|Ghāt~GH|Mişrātah~MI|Murzuq~MQ|Nālūt~NL|Sabhā~SB|Surt~SR|Ţarābulus~TB|Yafran~WD|Wādī ash Shāţiʾ~WS"],["Liechtenstein","LI","Balzers~01|Eschen~02|Gamprin~03|Mauren~04|Planken~05|Ruggell~06|Schaan~07|Schellenberg~08|Triesen~09|Triesenberg~10|Vaduz~11"],["Lithuania","LT","Alytaus~AL|Kauno~KU|Klaipėdos~KL|Marijampolės~MR|Panevėžio~PN|Šiaulių~SA|Tauragės~TA|Telšių~TE|Utenos~UT|Vilniaus~VL"],["Luxembourg","LU","Capellen~CA|Clevaux~CL|Diekirch~DI|Echternach~EC|Esch-sur-Alzette~ES|Grevenmacher~GR|Luxembourg~LU|Mersch~ME|Redange~RD|Remich~RM|Vianden~VD|Wiltz~WI"],["Macao","MO","Macao"],["Macedonia, Republic of","MK","Aračinovo~02|Berovo~03|Bitola~04|Bogdanci~05|Bogovinje~06|Bosilovo~07|Brvenica~08|Centar Župa~78|Čaška~08|Češinovo-Obleševo~81|Čučer Sandevo~82|Debar~21|Debarca~22|Delčevo~23|Demir Hisar~25|Demir Kapija~24|Doran~26|Dolneni~27|Gevgelija~18|Gostivar~19|Gradsko~20|Ilinden~34|Jegunovce~35|Karbinci~37|Kavadarci~36|Kičevo~40|Kočani~42|Konče~41|Kratovo~43|Kriva Palanka~44|Krivogaštani~45|Kruševo~46|Kumanovo~47|Lipkovo~48|Lozovo~49|Makedonska Kamenica~51|Makedonski Brod~52|Mavrovo i Rostuša~50|Mogila~53|Negotino~54|Novaci~55|Novo Selo~56|Ohrid~58|Pehčevo~60|Petrovec~59|Plasnica~61|Prilep~62|Probištip~63|Radoviš~|Rankovce~65|Resen~66|Rosoman~67|Skopje~85|Sopište~70|Staro Nagoričane~71|Struga~72|Strumica~73|Studeničani~74|Sveti Nikole~69|Štip~83|Tearce~75|Tetovo~76|Valandovo~10|Vasilevo~11|Veles~13|Vevčani~12|Vinica~14|Vrapčište~16|Zelenikovo~32|Zrnovci~33|Želino~30"],["Madagascar","MG","Antananarivo~T|Antsiranana~D|Fianarantsoa~F|Mahajanga~M|Toamasina~A|Toliara~U"],["Malawi","MW","Balaka~BA|Blantyre~BL|Chikwawa~CK|Chiradzulu~CR|Chitipa~CT|Dedza~DE|Dowa~DO|Karonga~KR|Kasungu~KS|Likoma~LK|Lilongwe~LI|Machinga~MH|Mangochi~MG|Mchinji~MC|Mulanje~MU|Mwanza~MW|Mzimba~MZ|Nkhata Bay~NE|Nkhotakota~NB|Nsanje~NS|Ntcheu~NU|Ntchisi~NI|Phalombe~PH|Rumphi~RU|Salima~SA|Thyolo~TH|Zomba~ZO"],["Malaysia","MY","Johor~01|Kedah~02|Kelantan~03|Melaka~04|Negeri Sembilan~05|Pahang~06|Perak~08|Perlis~09|Pulau Pinang~07|Sabah~12|Sarawak~13|Selangor~10|Terengganu~11|Wilayah Persekutuan (Kuala Lumpur)~14|Wilayah Persekutuan (Labuan)~15|Wilayah Persekutuan (Putrajaya)~16"],["Maldives","MV","Alifu Alifu~02|Alifu Dhaalu~00|Baa~20|Dhaalu~17|Faafu~14|Gaafu Alifu~27|Gaafu Dhaalu~28|Gnaviyani~29|Haa Alifu~07|Haa Dhaalu~23|Kaafu~29|Laamu~05|Lhaviyani~03|Malé~MLE|Meemu~12|Noonu~25|Raa~13|Seenu~01|Shaviyani~24|Thaa~08|Vaavu~04"],["Mali","ML","Bamako~BKO|Gao~7|Kayes~1|Kidal~8|Koulikoro~2|Mopti~5|Segou~4|Sikasso~3|Tombouctou~6"],["Malta","MT","Attard~01|Balzan~02|Birgu~03|Birkirkara~04|Birżebbuġa~05|Bormla~06|Dingli~07|Fgura~08|Floriana~09|Fontana~10|Guda~11|Gżira~12|Għajnsielem~13|Għarb~14|Għargħur~15|Għasri~16|Għaxaq~17|Ħamrun~18|Iklin~19|Isla~20|Kalkara~21|Kerċem~22|Kirkop~23|Lija~24|Luqa~25|Marsa~26|Marsaskala~27|Marsaxlokk~28|Mdina~29|Mellieħa~30|Mġarr~31|Mosta~32|Mqabba~33|Msida~34|Mtarfa~35|Munxar~36|Nadur~37|Naxxar~38|Paola~39|Pembroke~40|Pietà~41|Qala~42|Qormi~43|Qrendi~44|Rabat Għawdex~45|Rabat Malta~46|Safi~47|San Ġiljan~48|San Ġwann~49|San Lawrenz~50|San Pawl il-Baħar~51|Sannat~52|Santa Luċija~53|Santa Venera~54|Siġġiewi~55|Sliema~56|Swieqi~57|Tai Xbiex~58|Tarzien~59|Valletta~60|Xagħra~61|Xewkija~62|Xgħajra~63|Żabbar~64|Żebbuġ Għawde~65|Żebbuġ Malta~66|Żejtun~67|Żurrieq~68"],["Marshall Islands","MH","Ailinglaplap~ALL|Ailuk~ALK|Arno~ARN|Aur~AUR|Bikini and Kili~KIL|Ebon~EBO|Jabat~JAB|Jaluit~JAL|Kwajalein~KWA|Lae~LAE|Lib~LIB|Likiep~LIK|Majuro~MAJ|Maloelap~MAL|Mejit~MEJ|Namdrik~NMK|Namu~NMU|Rongelap~RON|Ujae~UJA|Utrik~UTI|Wotho~WTH|Wotje~WTJ"],["Martinique","MQ","Martinique"],["Mauritania","MR","Adrar~07|Assaba~03|Brakna~05|Dakhlet Nouadhibou~08|Gorgol~04|Guidimaka~10|Hodh Ech Chargui~01|Hodh El Gharbi~02|Inchiri~12|Nouakchott Nord~14|Nouakchott Ouest~13|Nouakchott Sud~15|Tagant~09|Tiris Zemmour~11|Trarza~06"],["Mauritius","MU","Agalega Islands~AG|Beau Bassin-Rose Hill~BR|Black River~BL|Cargados Carajos Shoals~CC|Curepipe~CU|Flacq~FL|Grand Port~GP|Moka~MO|Pamplemousses~PA|Plaines Wilhems~PW|Port Louis (City)~PU|Port Louis~PL|Riviere du Rempart~RR|Rodrigues Island~RO|Savanne~SA|Vacoas-Phoenix~CP"],["Mayotte","YT","Dzaoudzi~01|Pamandzi~02|Mamoudzou~03|Dembeni~04|Bandrélé~05|Kani-Kéli~06|Bouéni~07|Chirongui~08|Sada~09|Ouangani~10|Chiconi~11|Tsingoni~12|M'Tsangamouji~13|Acoua~14|Mtsamboro~15|Bandraboua~16|Koungou~17"],["Mexico","MX","Aguascalientes~AGU|Baja California~BCN|Baja California Sur~BCS|Campeche~CAM|Ciudad de México~DIF|Chiapas~CHP|Chihuahua~CHH|Coahuila de Zaragoza~COA|Colima~COL|Durango~DUR|Estado de México~MEX|Guanajuato~GUA|Guerrero~GRO|Hidalgo~HID|Jalisco~JAL|Michoacán de Ocampo~MIC|Morelos~MOR|Nayarit~NAY|Nuevo León~NLE|Oaxaca~OAX|Puebla~PUE|Querétaro de Arteaga~QUE|Quintana Roo~ROO|San Luis Potosí~SLP|Sinaloa~SIN|Sonora~SON|Tabasco~TAB|Tamaulipas~TAM|Tlaxcala~TLA|Veracruz~VER|Yucatán~YUC|Zacatecas~ZAC"],["Micronesia, Federated States of","FM","Chuuk (Truk)~TRK|Kosrae~KSA|Pohnpei~PNI|Yap~YAP"],["Moldova","MD","Aenii Noi~AN|Basarabeasca~BS|Bălți~BA|Bender~BD|Briceni~BR|Cahul~CA|Cantemir~CT|Călărași~CL|Căușeni~CS|Chișinău~CU|Cimișlia~CM|Criuleni~CR|Dondușeni~DO|Drochia~DR|Dubăsari~DU|Edineț~ED|Fălești~FA|Florești~FL|Găgăuzia~GA|Glodeni~GL|Hîncești~HI|Ialoveni~IA|Leova~LE|Nisporeni~NI|Ocnița~OC|Orhei~OR|Rezina~RE|Rîșcani~RI|Sîngerei~SI|Soroca~SO|Stînga Nistrului~SN|Strășeni~ST|Șoldănești~SD|Ștefan Vodă~SV|Taraclia~TA|Telenești~TE|Ungheni~UN"],["Monaco","MC","Colle~CL|Condamine~CO|Fontvieille~FO|Gare~GA|Jardin Exotique~JE|Larvotto~LA|Malbousquet~MA|Monaco-Ville~MO|Moneghetti~MG|Monte-Carlo~MC|Moulins~MU|Port-Hercule~PH|Saint-Roman~SR|Sainte-Dévote~SD|Source~SO|Spélugues~SP|Vallon de la Rousse~VR"],["Mongolia","MN","Arhangay~073|Bayan-Olgiy~071|Bayanhongor~069|Bulgan~067|Darhan~037|Dornod~061|Dornogovi~063|Dundgovi~059|Dzavhan~065|Govi-Altay~065|Govi-Sumber~064|Hovd~043|Hovsgol~041|Omnogovi~053|Ovorhangay~055|Selenge~049|Suhbaatar~051|Tov~047|Ulaanbaatar~1|Uvs~046"],["Montenegro","ME","Andrijevica~01|Bar~02|Berane~03|Bijelo Polje~04|Budva~05|Cetinje~06|Danilovgrad~07|Gusinje~22|Herceg Novi~08|Kolašin~09|Kotor~10|Mojkovac~11|Nikšić~12|Petnica~23|Plav~13|Plužine~14|Pljevlja~15|Podgorica~16|Rožaje~17|Šavnik~18|Tivat~19|Ulcinj~20|Žabljak~21"],["Montserrat","MS","Saint Anthony|Saint Georges|Saint Peter's"],["Morocco","MA","Chaouia-Ouardigha~09|Doukhala-Abda~10|Fès-Boulemane~05|Gharb-Chrarda-Beni Hssen~02|Grand Casablanca~08|Guelmim-Es Semara~14|Laâyoune-Boujdour-Sakia el Hamra~15|Marrakech-Tensift-Al Haouz~11|Meknès-Tafilalet~06|Oriental~04|Oued ed Dahab-Lagouira~16|Souss-Massa-Drâa~13|Tadla-Azilal~12|Tanger-Tétouan~01|Taza-Al Hoceima-Taounate~03"],["Mozambique","MZ","Cabo Delgado~P|Gaza~G|Inhambane~I|Manica~B|Maputo~L|Maputo (City)~MPM|Nampula~N|Niassa~A|Sofala~S|Tete~T|Zambezia~Q"],["Myanmar","MM","Ayeyarwady~07|Bago~02|Chin~14|Kachin~11|Kayah~12|Kayin~13|Magway~03|Mandalay~04|Mon~15|Nay Pyi Taw~18|Rakhine~16|Sagaing~01|Shan~17|Tanintharyi~05|Yangon~06"],["Namibia","NA","Erongo~ER|Hardap~HA|Kavango East~KE|Kavango West~KW|Karas~KA|Khomas~KH|Kunene~KU|Ohangwena~OW|Omaheke~OH|Omusati~OS|Oshana~ON|Oshikoto~OT|Otjozondjupa~OD|Zambezi~CA"],["Nauru","NR","Aiwo~01|Anabar~02|Anetan~03|Anibare~04|Baiti~05|Boe~06|Buada~07|Denigomodu~08|Ewa~09|Ijuw~10|Meneng~11|Nibok~12|Uaboe~13|Yaren~14"],["Nepal","NP","Bagmati~BA|Bheri~BH|Dhawalagiri~DH|Gandaki~GA|Janakpur~JA|Karnali~KA|Kosi~KO|Lumbini~LU|Mahakali~MA|Mechi~ME|Narayani~NA|Rapti~RA|Sagarmatha~SA|Seti~SE"],["Netherlands","NL","Drenthe~DR|Flevoland~FL|Friesland~FR|Gelderland~GE|Groningen~GR|Limburg~LI|Noord-Brabant~NB|Noord-Holland~NH|Overijssel~OV|Utrecht~UT|Zeeland~ZE|Zuid-Holland~ZH"],["New Caledonia","NC","Iles Loyaute|Nord|Sud"],["New Zealand","NZ","Auckland~AUK|Bay of Plenty~BOP|Canterbury~CAN|Gisborne~GIS|Hawke's Bay~HKB|Marlborough~MBH|Manawatu-Wanganui~MWT|Northland~NTL|Nelson~NSN|Otago~OTA|Southland~STL|Taranaki~TKI|Tasman~TAS|Waikato~WKO|Wellington~WGN|West Coast~WTC|Chatham Islands Territory~CIT"],["Nicaragua","NI","Boaco~BO|Carazo~CA|Chinandega~CI|Chontales~CO|Estelí~ES|Granada~GR|Jinotega~JI|León~LE|Madriz~MD|Managua~MN|Masaya~MS|Matagalpa~MT|Nueva Segovia~NS|Río San Juan~SJ|Rivas~RI|Atlántico Norte~AN|Atlántico Sur~AS"],["Niger","NE","Agadez~1|Diffa~2|Dosso~3|Maradi~4|Niamey~8|Tahoua~5|Tillabéri~6|Zinder~7"],["Nigeria","NG","Abia~AB|Abuja Federal Capital Territory~FC|Adamawa~AD|Akwa Ibom~AK|Anambra~AN|Bauchi~BA|Bayelsa~BY|Benue~BE|Borno~BO|Cross River~CR|Delta~DE|Ebonyi~EB|Edo~ED|Ekiti~EK|Enugu~EN|Gombe~GO|Imo~IM|Jigawa~JI|Kaduna~KD|Kano~KN|Katsina~KT|Kebbi~KE|Kogi~KO|Kwara~KW|Lagos~LA|Nassarawa~NA|Niger~NI|Ogun~OG|Ondo~ON|Osun~OS|Oyo~OY|Plateau~PL|Rivers~RI|Sokoto~SO|Taraba~TA|Yobe~YO|Zamfara~ZA"],["Niue","NU","Niue"],["Norfolk Island","NF","Norfolk Island"],["Northern Mariana Islands","MP","Northern Islands|Rota|Saipan|Tinian"],["Norway","NO","Akershus~02|Aust-Agder~09|Buskerud~06|Finnmark~20|Hedmark~04|Hordaland~12|Møre og Romsdal~15|Nordland~18|Nord-Trøndelag~17|Oppland~05|Oslo~03|Rogaland~11|Sogn og Fjordane~14|Sør-Trøndelag~16|Telemark~08|Troms~19|Vest-Agder~10|Vestfold~07|Østfold~01|Jan Mayen~22|Svalbard~21"],["Oman","OM","Ad Dakhiliyah~DA|Al Buraymi~BU|Al Wusta~WU|Az Zahirah~ZA|Janub al Batinah~BS|Janub ash Sharqiyah~SS|Masqat~MA|Musandam~MU|Shamal al Batinah~BJ|Shamal ash Sharqiyah~SJ|Zufar~ZU"],["Pakistan","PK","Āzād Kashmīr~JK|Balōchistān~BA|Gilgit-Baltistān~GB|Islāmābād~IS|Khaībar Pakhtūnkhwās~KP|Punjāb~PB|Sindh~SD|Federally Administered Tribal Areas~TA"],["Palau","PW","Aimeliik~002|Airai~004|Angaur~010|Hatobohei~050|Kayangel~100|Koror~150|Melekeok~212|Ngaraard~214|Ngarchelong~218|Ngardmau~222|Ngatpang~224|Ngchesar~226|Ngeremlengui~227|Ngiwal~228|Peleliu~350|Sonsoral~350"],["Palestine, State of","PS","Ak Khalīl~HBN|Al Quds~JEM|Arīḩā wal Aghwār~JRH|Bayt Laḩm~BTH|Dayr al Balaḩ~DEB|Ghazzah~GZA|Janīn~JEN|Khān Yūnis~KYS|Nāblus~NBS|Qalqīyah~QQA|Rafaḩ~RFH|Rām Allāh wal Bīrah~RBH|Salfīt~SLT|Shamāl Ghazzah~NGZ|Ţūbās~TBS|Ţūlkarm~TKM"],["Panama","PA","Bocas del Toro~1|Chiriquí~4|Coclé~2|Colón~3|Darién~5|Emberá~EM|Herrera~6|Kuna Yala~KY|Los Santos~7|Ngäbe-Buglé~NB|Panamá~8|Panamá Oeste~10|Veraguas~9"],["Papua New Guinea","PG","Bougainville~NSB|Central~CPM|Chimbu~CPK|East New Britain~EBR|East Sepik~ESW|Eastern Highlands~EHG|Enga~EPW|Gulf~GPK|Hela~HLA|Jiwaka~JWK|Madang~MOM|Manus~MRL|Milne Bay~MBA|Morobe~MPL|Port Moresby~NCD|New Ireland~NIK|Northern~NPP|Southern Highlands~SHM|West New Britain~WBK|West Sepik~SAN|Western~WPD|Western Highlands~WHM"],["Paraguay","PY","Alto Paraguay~16|Alto Parana~10|Amambay~13|Asuncion~ASU|Caaguazu~5|Caazapa~6|Canindeyu~14|Central~11|Concepcion~1|Cordillera~3|Guaira~4|Itapua~7|Misiones~8|Neembucu~12|Paraguari~9|Presidente Hayes~15|San Pedro~2"],["Peru","PE","Amazonas~AMA|Ancash~ANC|Apurimac~APU|Arequipa~ARE|Ayacucho~AYA|Cajamarca~CAJ|Callao~CAL|Cusco~CUS|Huancavelica~HUV|Huanuco~HUC|Ica~ICA|Junin~JUN|La Libertad~LAL|Lambayeque~LAM|Lima~LIM|Loreto~LOR|Madre de Dios~MDD|Moquegua~MOQ|Municipalidad Metropolitana de Lima~LMA|Pasco~PAS|Piura~PIU|Puno~PUN|San Martin~SAM|Tacna~TAC|Tumbes~TUM|Ucayali~UCA"],["Philippines","PH","Abra~ABR|Agusan del Norte~AGN|Agusan del Sur~AGS|Aklan~AKL|Albay~ALB|Antique~ANT|Apayao~APA|Aurora~AUR|Basilan~BAS|Bataan~BAN|Batanes~BTN|Batangas~BTG|Benguet~BEN|Biliran~BIL|Bohol~BOH|Bukidnon~BUK|Bulacan~BUL|Cagayan~CAG|Camarines Norte~CAN|Camarines Sur~CAS|Camiguin~CAM|Capiz~CAP|Catanduanes~CAT|Cavite~CAV|Cebu~CEB|Compostela~COM|Cotabato~NCO|Davao del Norte~DAV|Davao del Sur~DAS|Davao Occidental~DVO|Davao Oriental~DAO|Dinagat Islands~DIN|Eastern Samar~EAS|Guimaras~GUI|Ifugao~IFU|Ilocos Norte~ILN|Ilocos Sur~ILS|Iloilo~ILI|Isabela~ISA|Kalinga~KAL|La Union~LUN|Laguna~LAG|Lanao del Norte~LAN|Lanao del Sur~LAS|Leyte~LEY|Maguindanao~MAG|Masbate~MAS|Metro Manila~00|Mindoro Occidental~MDC|Mindoro Oriental~MDR|Misamis Occidental~MSC|Misamis Oriental~MSR|Mountain Province~MOU|Negros Occidental~NEC|Negros Oriental~NER|Northern Samar~NSA|Nueva Ecija~NUE|Nueva Vizcaya~NUV|Palawan~PLW|Pampanga~PAM|Pangasinan~PAN|Quezon~QUE|Quirino~QUI|Rizal~RIZ|Romblon~ROM|Samar~WSA|Sarangani~SAR|Siquijor~SIG|Sorsogon~SOR|Southern Leyte~SLE|Sultan Kudarat~AUK|Sulu~SLU|Surigao del Norte~SUN|Surigao del Sur~SUR|Tarlac~TAR|Tawi-Tawi~TAW|Zambales~ZMB|Zamboanga del Norte~ZAN|Zamboanga del Sur~ZAS|Zamboanga Sibugay~ZSI"],["Pitcairn","PN","Pitcairn Islands"],["Poland","PL","Dolnośląskie~DS|Kujawsko-pomorskie~KP|Łódzkie~LD|Lubelskie~LU|Lubuskie~LB|Malopolskie~MA|Mazowieckie~MZ|Opolskie~OP|Podkarpackie~PK|Podlaskie~PD|Pomorskie~PM|Śląskie~SL|Świętokrzyskie~SK|Warmińsko-mazurskie~WN|Wielkopolskie~WP|Zachodniopomorskie~ZP"],["Portugal","PT","Acores~20|Aveiro~01|Beja~02|Braga~03|Braganca~04|Castelo Branco~05|Coimbra~06|Evora~07|Faro~08|Guarda~09|Leiria~10|Lisboa~11|Madeira~30|Portalegre~12|Porto~13|Santarem~14|Setubal~15|Viana do Castelo~16|Vila Real~17|Viseu~18"],["Puerto Rico","PR","Adjuntas|Aguada|Aguadilla|Aguas Buenas|Aibonito|Anasco|Arecibo|Arroyo|Barceloneta|Barranquitas|Bayamon|Cabo Rojo|Caguas|Camuy|Canovanas|Carolina|Cat|Ceiba|Ciales|Cidra|Coamo|Comerio|Corozal|Culebra|Dorado|Fajardo|Florida|Guanica|Guayama|Guayanilla|Guaynabo|Gurabo|Hatillo|Hormigueros|Humacao|Isabe|Juana Diaz|Juncos|Lajas|Lares|Las Marias|Las oiza|Luquillo|Manati|Maricao|Maunabo|Mayaguez|Moca|Morovis|Naguabo|Naranjito|Orocovis|Patillas|Penuelas|Ponce|Quebradillas|Rincon|Rio Grande|Sabana linas|San German|San Juan|San Lorenzo|San Sebastian|Santa Isabel|Toa Alta|Toa Baja|Trujillo Alto|Utuado|Vega Alta|Vega ues|Villalba|Yabucoa|Yauco"],["Qatar","QA","Ad Dawḩah~DA|Al Khawr wa adh Dhakhīrah~KH|Al Wakrah~WA|Ar Rayyān~RA|Ash Shamāl~MS|Az̧ Za̧`āyin~ZA|Umm Şalāl~US"],["Réunion","RE","Réunion"],["Romania","RO","Alba~AB|Arad~AR|Arges~AG|Bacau~BC|Bihor~BH|Bistrita-Nasaud~BN|Botosani~BT|Braila~BR|Brasov~BV|Bucuresti~B|Buzau~BZ|Calarasi~CL|Caras-Severin~CS|Cluj~CJ|Constanta~CT|Covasna~CV|Dambovita~DB|Dolj~DJ|Galati~GL|Giurgiu~GR|Gorj~GJ|Harghita~HR|Hunedoara~HD|Ialomita~IL|Iasi~IS|Maramures~MM|Mehedinti~MH|Mures~MS|Neamt~NT|Olt~OT|Prahova~PH|Salaj~SJ|Satu Mare~SM|Sibiu~SB|Suceava~SV|Teleorman~TR|Timis~TM|Tulcea~TL|Valcea~VL|Vaslui~VS|Vrancea~VN"],["Russian Federation","RU","Republic of Adygea~AD|Republic of Altai (Gorno-Altaysk)~AL|Altai Krai~ALT|Amur Oblast~AMU|Arkhangelsk Oblast~ARK|Astrakhan Oblast~AST|Republic of Bashkortostan~BA|Belgorod Oblast~BEL|Bryansk Oblast~BRY|Republic of Buryatia~BU|Chechen Republic~CE|Chelyabinsk Oblast~CHE|Chukotka Autonomous Okrug~CHU|Chuvash Republic~CU|Republic of Dagestan~DA|Republic of Ingushetia~IN|Irkutsk Oblast~IRK|Ivanovo Oblast~IVA|Jewish Autonomous Oblast~JEW|Kabardino-Balkar Republic~KB|Kaliningrad Oblast~KLN|Republic of Kalmykia~KL|Kaluga Oblast~KLU|Kamchatka Krai~KAM|Karachay-Cherkess Republic~KC|Republic of Karelia~KR|Khabarovsk Krai~KHA|Republic of Khakassia~KK|Khanty-Mansi Autonomous Okrug - Yugra~KHM|Kemerovo Oblast~KEM|Kirov Oblast~KIR|Komi Republic~KO|Kostroma Oblast~KOS|Krasnodar Krai~KDA|Krasnoyarsk Krai~KYA|Kurgan Oblast~KGN|Kursk Oblast~KRS|Leningrad Oblast~LEN|Lipetsk Oblast~LIP|Magadan Oblast~MAG|Mari El Republic~ME|Republic of Mordovia~MO|Moscow Oblast~MOS|Moscow~MOW|Murmansk Oblast~MU|Nenets Autonomous Okrug~NEN|Nizhny Novgorod Oblast~NIZ|Novgorod Oblast~NGR|Novosibirsk Oblast~NVS|Omsk Oblast~OMS|Orenburg Oblast~ORE|Oryol Oblast~ORL|Penza Oblast~PNZ|Perm Krai~PER|Primorsky Krai~PRI|Pskov Oblast~PSK|Rostov Oblast~ROS|Ryazan Oblast~RYA|Saint Petersburg~SPE|Sakha (Yakutia) Republic~SA|Sakhalin Oblast~SAK|Samara Oblast~SAM|Saratov Oblast~SAR|Republic of North Ossetia-Alania~NOA|Smolensk Oblast~SMO|Stavropol Krai~STA|Sverdlovsk Oblast~SVE|Tambov Oblast~TAM|Republic of Tatarstan~TA|Tomsk Oblast~TOM|Tuva Republic~TU|Tula Oblast~TUL|Tver Oblast~TVE|Tyumen Oblast~TYU|Udmurt Republic~UD|Ulyanovsk Oblast~ULY|Vladimir Oblast~VLA|Volgograd Oblast~VGG|Vologda Oblast~VLG|Voronezh Oblast~VOR|Yamalo-Nenets Autonomous Okrug~YAN|Yaroslavl Oblast~YAR|Zabaykalsky Krai~ZAB"],["Rwanda","RW","Kigali~01|Eastern~02|Northern~03|Western~04|Southern~05"],["Saint Barthélemy","BL","Au Vent~02|Sous le Vent~01"],["Saint Helena, Ascension and Tristan da Cunha","SH","Ascension~AC|Saint Helena~HL|Tristan da Cunha~TA"],["Saint Kitts and Nevis","KN","Saint Kitts~K|Nevis~N"],["Saint Lucia","LC","Anse-la-Raye~01|Canaries~12|Castries~02|Choiseul~03|Dennery~05|Gros Islet~06|Laborie~07|Micoud~08|Soufriere~10|Vieux Fort~11"],["Saint Martin","MF","Saint Martin"],["Saint Pierre and Miquelon","PM","Miquelon|Saint Pierre"],["Saint Vincent and the Grenadines","VC","Charlotte~01|Grenadines~06|Saint Andrew~02|Saint David~03|Saint George~04|Saint Patrick~05"],["Samoa","WS","A'ana~AA|Aiga-i-le-Tai~AL|Atua~AT|Fa'asaleleaga~FA|Gaga'emauga~GE|Gagaifomauga~GI|Palauli~PA|Satupa'itea~SA|Tuamasaga~TU|Va'a-o-Fonoti~VF|Vaisigano~VS"],["San Marino","SM","Acquaviva~01|Borgo Maggiore~06|Chiesanuova~02|Domagnano~03|Faetano~04|Fiorentino~05|Montegiardino~08|San Marino~07|Serravalle~09"],["Sao Tome and Principe","ST","Principe~P|Sao Tome~S"],["Saudi Arabia","SA","'Asir~14|Al Bahah~11|Al Hudud ash Shamaliyah~08|Al Jawf~12|Al Madinah al Munawwarah~03|Al Qasim~05|Ar Riyad~01|Ash Sharqiyah~04|Ha'il~06|Jazan~09|Makkah al Mukarramah~02|Najran~10|Tabuk~07"],["Senegal","SN","Dakar~DK|Diourbel~DB|Fatick~FK|Kaffrine~KA|Kaolack~KL|Kedougou~KE|Kolda~KD|Louga~LG|Matam~MT|Saint-Louis~SL|Sedhiou~SE|Tambacounda~TC|Thies~TH|Ziguinchor~ZG"],["Serbia","RS","Beograd (Belgrade)~00|Borski~14|Braničevski~11|Jablanički~23|Južnobački~06|Južnobanatski~04|Kolubarski~09|Kosovski~25|Kosovsko-Mitrovački~28|Kosovsko-Pomoravski~29|Mačvanski~08|Moravički~17|Nišavski~20|Pčinjski~24|Pećki~26|Pirotski~22|Podunavski~10|Pomoravski~13|Prizrenski~27|Rasinski~19|Raški~18|Severnobački~01|Severnobanatski~03|Srednjebanatski~02|Sremski~07|Šumadijski~12|Toplički~21|Zaječarski~15|Zapadnobački~05|Zlatiborski~16"],["Seychelles","SC","Anse aux Pins~01|Anse Boileau~02|Anse Etoile~03|Anse Royale~05|Anu Cap~04|Baie Lazare~06|Baie Sainte Anne~07|Beau Vallon~08|Bel Air~09|Bel Ombre~10|Cascade~11|Glacis~12|Grand'Anse Mahe~13|Grand'Anse Praslin~14|La Digue~15|La Riviere Anglaise~16|Les Mamelles~24|Mont Buxton~17|Mont Fleuri~18|Plaisance~19|Pointe La Rue~20|Port Glaud~21|Roche Caiman~25|Saint Louis~22|Takamaka~23"],["Sierra Leone","SL","Eastern~E|Northern~N|Southern~S|Western~W"],["Singapore","SG","Central Singapore~01|North East~02|North West~03|South East~04|South West~05"],["Sint Maarten (Dutch part)","SX","Sint Maarten"],["Slovakia","SK","Banskobystricky~BC|Bratislavsky~BL|Kosicky~KI|Nitriansky~NI|Presovsky~PV|Trenciansky~TC|Trnavsky~TA|Zilinsky~ZI"],["Slovenia","SI","Ajdovscina~001|Apace~195|Beltinci~002|Benedikt~148|Bistrica ob Sotli~149|Bled~003|Bloke~150|Bohinj~004|Borovnica~005|Bovec~006|Braslovce~151|Brda~007|Brezice~009|Brezovica~008|Cankova~152|Celje~011|Cerklje na Gorenjskem~012|Cerknica~013|Cerkno~014|Cerkvenjak~153|Cirkulane~196|Crensovci~015|Crna na Koroskem~016|Crnomelj~017|Destrnik~018|Divaca~019|Dobje~154|Dobrepolje~020|Dobrna~155|Dobrova-Polhov Gradec~021|Dobrovnik~156|Dol pri Ljubljani~022|Dolenjske Toplice~157|Domzale~023|Dornava~024|Dravograd~025|Duplek~026|Gorenja Vas-Poljane~027|Gorisnica~028|Gorje~207|Gornja Radgona~029|Gornji Grad~030|Gornji Petrovci~031|Grad~158|Grosuplje~032|Hajdina~159|Hoce-Slivnica~160|Hodos~161|Horjul~162|Hrastnik~034|Hrpelje-Kozina~035|Idrija~036|Ig~037|Ilirska Bistrica~038|Ivancna Gorica~039|Izola~040s|Jesenice~041|Jursinci~042|Kamnik~043|Kanal~044|Kidricevo~045|Kobarid~046|Kobilje~047|Kocevje~048|Komen~049|Komenda~164|Koper~050|Kodanjevica na Krki~197|Kostel~165|Kozje~051|Kranj~052|Kranjska Gora~053|Krizevci~166|Krsko~054|Kungota~055|Kuzma~056|Lasko~057|Lenart~058|Lendava~059|Litija~068|Ljubljana~061|Ljubno~062|Ljutomer~063|Log-Dragomer~208|Logatec~064|Loska Dolina~065|Loski Potok~066|Lovrenc na Pohorju~167|Lukovica~068|Luce~067|Majsperk~069|Makole~198|Maribor~070|Markovci~168|Medvode~071|Menges~072|Metlika~073|Mezica~074|Miklavz na Dravskem Polju~169|Miren-Kostanjevica~075|Mirna~212|Mirna Pec~170|Mislinja~076|Mokronog-Trebelno~199|Moravce~077|Moravske Toplice~078|Mozirje~079|Murska Sobota~080|Naklo~082|Nazarje~083|Nova Gorica~084|Novo Mesto~085|Odranci~086|Ormoz~087|Osilnica~088|Pesnica~089|Piran~090|Pivka~091|Podcetrtek~092|Podlehnik~172|Podvelka~093|Poljcane~200|Postojna~094|Prebold~174|Preddvor~095|Prevalje~175|Ptuj~096|Race-Fram~098|Radece~099|Radenci~100|Radlje ob Dravi~101|Radovljica~102|Ravne na Koroskem~103|Razkrizje~176|Recica ob Savinji~209|Rence-Vogrsko~201|Ribnica~104|Ribnica na Poboriu~177|Rogaska Slatina~106|Rogasovci~105|Rogatec~107|Ruse~108|Salovci~033|Selnica ob Dravi~178|Semic~109|Sempeter-Vrtojba~183|Sencur~117|Sentilj~118|Sentjernej~119|Sentjur~120|Sentrupert~211|Sevnica~110|Sezana~111|Skocjan~121|Skofja Loka~122|Skofljica~123|Slovenj Gradec~112|Slovenska Bistrica~113|Slovenske Konjice~114|Smarje pri elsah~124|Smarjeske Toplice~206|Smartno ob Paki~125|Smartno pri Litiji~194|Sodrazica~179|Solcava~180|Sostanj~126|Sredisce ob Dravi~202|Starse~115|Store~127|Straza~203|Sveta Ana~181|Sveta Trojica v Slovenskih Goricah~204|Sveta Andraz v Slovenskih Goricah~182|Sveti Jurij~116|Sveti Jurij v Slovenskih Goricah~210|Sveti Tomaz~205|Tabor~184|Tisina~128|Tolmin~128|Trbovlje~129|Trebnje~130|Trnovska Vas~185|Trzin~186|Trzic~131|Turnisce~132|Velenje~133|Velika Polana~187|Velike Lasce~134|Verzej~188|Videm~135|Vipava~136|Vitanje~137|Vodice~138|Vojnik~139|Vransko~189|Vrhnika~140|Vuzenica~141|Zagorje ob Savi~142|Zavrc~143|Zrece~144|Zalec~190|Zelezniki~146|Zetale~191|Ziri~147|Zirovnica~192|Zuzemberk~193"],["Solomon Islands","SB","Central~CE|Choiseul~CH|Guadalcanal~GU|Honiara~CT|Isabel~IS|Makira-Ulawa~MK|Malaita~ML|Rennell and Bellona~RB|Temotu~TE|Western~WE"],["Somalia","SO","Awdal~AW|Bakool~BK|Banaadir~BN|Bari~BR|Bay~BY|Galguduud~GA|Gedo~GE|Hiiraan~HI|Jubbada Dhexe~JD|Jubbada Hoose~JH|Mudug~MU|Nugaal~NU|Sanaag~SA|Shabeellaha Dhexe~SD|Shabeellaha Hoose~SH|Sool~SO|Togdheer~TO|Woqooyi Galbeed~WO"],["South Africa","ZA","Eastern Cape~EC|Free State~FS|Gauteng~GT|KwaZulu-Natal~NL|Limpopo~LP|Mpumalanga~MP|Northern Cape~NC|North West~NW|Western Cape~WC"],["South Georgia and South Sandwich Islands","GS","Bird Island|Bristol Island|Clerke Rocks|Montagu Island|Saunders Island|South Georgia|Southern Thule|Traversay Islands"],["South Sudan","SS","Central Equatoria~CE|Eastern Equatoria~EE|Jonglei~JG|Lakes~LK|Northern Bahr el Ghazal~BN|Unity~UY|Upper Nile~NU|Warrap~WR|Western Bahr el Ghazal~BW|Western Equatoria~EW"],["Spain","ES","Albacete~CM|Alicante~VC|Almería~AN|Araba/Álava~VI|Asturias~O|Ávila~AV|Badajoz~BA|Barcelona~B|Bizkaia~BI|Burgos~BU|Cáceres~CC|Cádiz~CA|Cantabria~S|Castellón~CS|Cueta~CU|Ciudad Real~CR|Córdoba~CO|A Coruña~C|Cuenca~CU|Gipuzkoa~SS|Girona~GI|Granada~GR|Guadalajara~GU|Huelva~H|Huesca~HU|Illes Balears~PM|Jaén~J|León~LE|Lleida~L|Lugo~LU|Madrid~M|Málaga~MA|Melilla~ML|Murcia~MU|Navarre~NA|Ourense~OR|Palencia~P|Las Palmas~GC|Pontevedra~PO|La Rioja~LO|Salamanca~SA|Santa Cruz de Tenerife~TF|Segovia~SG|Sevilla~SE|Soria~SO|Tarragona~T|Teruel~TE|Toledo~TO|Valencia~V|Valladolid~VA|Zamora~ZA|Zaragoza~Z"],["Sri Lanka","LK","Basnahira~1|Dakunu~3|Madhyama~2|Naegenahira~5|Sabaragamuwa~9|Uturu~4|Uturumaeda~7|Vayamba~6|Uva~8"],["Sudan","SD","Al Bahr al Ahmar~RS|Al Jazirah~GZ|Al Khartum~KH|Al Qadarif~GD|An Nil al Abyad~NW|An Nil al Azraq~NB|Ash Shamaliyah~NO|Gharb Darfur~DW|Gharb Kurdufan~GK|Janub Darfur~DS|Janub Kurdufan~KS|Kassala~KA|Nahr an Nil~NR|Shamal Darfur~DN|Sharq Darfur~DE|Shiamal Kurdufan~KN|Sinnar~SI|Wasat Darfur Zalinjay~DC"],["Suriname","SR","Brokopondo~BR|Commewijne~CM|Coronie~CR|Marowijne~MA|Nickerie~NI|Para~PR|Paramaribo~PM|Saramacca~SA|Sipaliwini~SI|Wanica~WA"],["Swaziland","SZ","Hhohho~HH|Lubombo~LU|Manzini~MA|Shiselweni~SH"],["Sweden","SE","Blekinge~K|Dalarnas~W|Gotlands~X|Gavleborgs~I|Hallands~N|Jamtlands~Z|Jonkopings~F|Kalmar~H|Kronobergs~G|Norrbottens~BD|Orebro~T|Ostergotlands~E|Skane~M|Sodermanlands~D|Stockholm~AB|Varmlands~S|Vasterbottens~AC|Vasternorrlands~Y|Vastmanlands~U|Vastra Gotalands~O"],["Switzerland","CH","Aargau~AG|Appenzell Ausserrhoden~AR|Appenzell Innerhoden~AI|Basel-Landschaft~BL|Basel-Stadt~BS|Bern~BE|Fribourg~FR|Genève~GE|Glarus~GL|Graubünden~GR|Jura~JU|Luzern~LU|Neuchâtel~NE|Nidwalden~NW|Obwalden~OW|Sankt Gallen~SG|Schaffhausen~SH|Schwyz~SZ|Solothurn~SO|Thurgau~TG|Ticino~TI|Uri~UR|Valais~VS|Vaud~VD|Zug~ZG|Zürich~ZH"],["Syrian Arab Republic","SY","Al Hasakah~HA|Al Ladhiqiyah~LA|Al Qunaytirah~QU|Ar Raqqah~RA|As Suwayda'~SU|Dar'a~DR|Dayr az Zawr~DY|Dimashq~DI|Halab~HL|Hamah~HM|Hims~HI|Idlib~ID|Rif Dimashq~RD|Tartus~TA"],["Taiwan","TW","Chang-hua~CHA|Chia-i~CYQ|Hsin-chu~HSQ|Hua-lien~HUA|Kao-hsiung~KHH|Keelung~KEE|Kinmen~KIN|Lienchiang~LIE|Miao-li~MIA|Nan-t'ou~NAN|P'eng-hu~PEN|New Taipei~NWT|P'ing-chung~PIF|T'ai-chung~TXG|T'ai-nan~TNN|T'ai-pei~TPE|T'ai-tung~TTT|T'ao-yuan~TAO|Yi-lan~ILA|Yun-lin~YUN"],["Tajikistan","TJ","Dushanbe~DU|Kŭhistoni Badakhshon~GB|Khatlon~KT|Sughd~SU"],["Tanzania, United Republic of","TZ","Arusha~01|Coast~19|Dar es Salaam~02|Dodoma~03|Iringa~04|Kagera~05|Kigoma~08|Kilimanjaro~09|Lindi~12|Manyara~26|Mara~13|Mbeya~14|Morogoro~16|Mtwara~17|Mwanza~18|Pemba North~06|Pemba South~10|Rukwa~20|Ruvuma~21|Shinyanga~22|Singida~23|Tabora~24|Tanga~25|Zanzibar North~07|Zanzibar Central/South~11|Zanzibar Urban/West~15"],["Thailand","TH","Amnat Charoen~37|Ang Thong~15|Bueng Kan~38|Buri Ram~31|Chachoengsao~24|Chai Nat~18|Chaiyaphum~36|Chanthaburi~22|Chiang Mai~50|Chiang Rai~57|Chon Buri~20|Chumphon~86|Kalasin~46|Kamphaeng Phet~62|Kanchanaburi~71|Khon Kaen~40|Krabi~81|Krung Thep Mahanakhon (Bangkok)~10|Lampang~52|Lamphun~51|Loei~42|Lop Buri~16|Mae Hong Son~58|Maha Sarakham~44|Mukdahan~49|Nakhon Nayok~26|Nakhon Phathom~73|Nakhon Phanom~48|Nakhon Ratchasima~30|Nakhon Sawan~60|Nakhon Si Thammarat~80|Nan~55|Narathiwat~96|Nong Bua Lam Phu~39|Nong Khai~43|Nonthaburi~12|Pathum Thani~13|Pattani~94|Phangnga~82|Phatthalung~93|Phayao~56|Phetchabun~76|Phetchaburi~76|Phichit~66|Phitsanulok~65|Phra Nakhon Si Ayutthaya~14|Phrae~54|Phuket~83|Prachin Buri~25|Prachuap Khiri Khan~77|Ranong~85|Ratchaburi~70|Rayong~21|Roi Et~45|Sa Kaeo~27|Sakon Nakhon~47|Samut Prakan~11|Samut Sakhon~74|Samut Songkhram~75|Saraburi~19|Satun~91|Sing Buri~17|Si Sa ket~33|Songkhla~90|Sukhothai~64|Suphan Buri~72|Surat Thani~84|Surin~32|Tak~63|Trang~92|Trat~23|Ubon Ratchathani~34|Udon Thani~41|Uthai Thani~61|Uttaradit~53|Yala~95|Yasothon~35"],["Timor-Leste","TL","Aileu~AL|Ainaro~AN|Baucau~BA|Bobonaro~BO|Cova Lima~CO|Dili~DI|Ermera~ER|Lautem~LA|Liquica~LI|Manatuto~MT|Manufahi~MF|Oecussi~OE|Viqueque~VI"],["Togo","TG","Centre~C|Kara~K|Maritime~M|Plateaux~P|Savannes~S"],["Tokelau","TK","Atafu|Fakaofo|Nukunonu"],["Tonga","TO","'Eua~01|Ha'apai~02|Niuas~03|Tongatapu~04|Vava'u~05"],["Trinidad and Tobago","TT","Arima~ARI|Chaguanas~CHA|Couva-Tabaquite-Talparo~CTT|Diefo Martin~DMN|Mayaro-Rio Claro~MRC|Penal-Debe~PED|Point Fortin~PTF|Port-of-Spain~POS|Princes Town~PRT|San Fernando~SFO|San Juan-Laventille~SJL|Sangre Grande~SGE|Siparia~SIP|Tobago~TOB|Tunapuna-Piarco~TUP"],["Tunisia","TN","Ariana~12|Beja~31|Ben Arous~13|Bizerte~23|Gabes~81|Gafsa~71|Jendouba~32|Kairouan~41|Kasserine~42|Kebili~73|Kef~33|Mahdia~53|Medenine~82|Monastir~52|Nabeul~21|Sfax~61|Sidi Bouzid~43|Siliana~34|Sousse~51|Tataouine~83|Tozeur~72|Tunis~11|Zaghouan~22"],["Turkey","TR","Adana~01|Adiyaman~02|Afyonkarahisar~03|Agri~04|Aksaray~68|Amasya~05|Ankara~06|Antalya~07|Ardahan~75|Artvin~08|Aydin~09|Balikesir~10|Bartin~74|Batman~72|Bayburt~69|Bilecik~11|Bingol~12|Bitlis~13|Bolu~14|Burdur~15|Bursa~16|Canakkale~17|Cankiri~18|Corum~19|Denizli~20|Diyarbakir~21|Duzce~81|Edirne~22|Elazig~23|Erzincan~24|Erzurum~25|Eskisehir~26|Gaziantep~27|Giresun~28|Gumushane~29|Hakkari~30|Hatay~31|Igdir~76|Isparta~32|Istanbul~34|Izmir~35|Kahramanmaras~46|Karabuk~78|Karaman~70|Kars~36|Kastamonu~37|Kayseri~38|Kilis~79|Kirikkale~71|Kirklareli~39|Kirsehir~40|Kocaeli~41|Konya~42|Kutahya~43|Malatya~44|Manisa~45|Mardin~47|Mersin~33|Mugla~48|Mus~49|Nevsehir~50|Nigde~51|Ordu~52|Osmaniye~80|Rize~53|Sakarya~54|Samsun~55|Sanliurfa~63|Siirt~56|Sinop~57|Sirnak~73|Sivas~58|Tekirdag~59|Tokat~60|Trabzon~61|Tunceli~62|Usak~64|Van~65|Yalova~77|Yozgat~66|Zonguldak~67"],["Turkmenistan","TM","Ahal~A|Asgabat~S|Balkan~B|Dashoguz~D|Lebap~L|Mary~M"],["Turks and Caicos Islands","TC","Turks and Caicos Islands"],["Tuvalu","TV","Funafuti~FUN|Nanumanga~NMG|Nanumea~NMA|Niutao~NIT|Nui~NUI|Nukufetau~NKF|Nukulaelae~NKL|Vaitupu~VAU"],["Uganda","UG","Abim~317|Adjumani~301|Amolatar~314|Amuria~216|Amuru~319|Apac~302|Arua~303|Budaka~217|Bududa~223|Bugiri~201|Bukedea~224|Bukwa~218|Buliisa~419|Bundibugyo~401|Bushenyi~402|Busia~202|Butaleja~219|Dokolo~318|Gulu~304|Hoima~403|Ibanda~416|Iganga~203|Isingiro~417|Jinja~204|Kaabong~315|Kabale~404|Kabarole~405|Kaberamaido~213|Kalangala~101|Kaliro~220|Kampala~102|Kamuli~205|Kamwenge~413|Kanungu~414|Kapchorwa~206|Kasese~406|Katakwi~207|Kayunga~112|Kibaale~407|Kiboga~103|Kiruhura~418|Kisoro~408|Kitgum~305|Koboko~316|Kotido~306|Kumi~208|Kyenjojo~415|Lira~307|Luwero~104|Lyantonde~116|Manafwa~221|Maracha~320|Masaka~105|Masindi~409|Mayuge~214|Mbale~209|Mbarara~410|Mityana~114|Moroto~308|Moyo~309|Mpigi~106|Mubende~107|Mukono~108|Nakapiripirit~311|Nakaseke~115|Nakasongola~109|Namutumba~222|Nebbi~310|Ntungamo~411|Oyam~321|Pader~312|Pallisa~210|Rakai~110|Rukungiri~412|Sembabule~111|Sironko~215|Soroti~211|Tororo~212|Wakiso~113|Yumbe~313"],["Ukraine","UA","Cherkasy~71|Chernihiv~74|Chernivtsi~77|Dnipropetrovsk~12|Donetsk~14|Ivano-Frankivsk~26|Kharkiv~63|Kherson~65|Khmelnytskyi~68|Kiev~32|Kirovohrad~35|Luhansk~09|Lviv~46|Mykolaiv~48|Odessa~51|Poltava~53|Rivne~56|Sumy~59|Ternopil~61|Vinnytsia~05|Volyn~07|Zakarpattia~21|Zaporizhia~23|Zhytomyr~18|Avtonomna Respublika Krym~43|Kyïv~30|Sevastopol~40"],["United Arab Emirates","AE","Abu Dhabi~AZ|Ajman~AJ|Dubai~DU|Fujairah~FU|Ras al Khaimah~RK|Sharjah~SH|Umm Al Quwain~UQ"],["United Kingdom","GB","Avon~AVN|Bedfordshire~BDF|Berkshire~BRK|Bristol, City of~COB|Buckinghamshire~BKM|Cambridgeshire~CAM|Cheshire~CHS|Cleveland~CLV|Cornwall~CON|Cumbria~CMA|Derbyshire~DBY|Devon~DEV|Dorset~DOR|Durham~DUR|East Sussex~SXE|Essex~ESS|Gloucestershire~GLS|Greater London~LND|Greater Manchester~GTM|Hampshire (County of Southampton)~HAM|Hereford and Worcester~HWR|Herefordshire~HEF|Hertfordshire~HRT|Isle of Wight~IOW|Kent~KEN|Lancashire~LAN|Leicestershire~LEI|Lincolnshire~LIN|London~LDN|Merseyside~MSY|Middlesex~MDX|Norfolk~NFK|Northamptonshire~NTH|Northumberland~NBL|North Humberside~NHM|North Yorkshire~NYK|Nottinghamshire~NTT|Oxfordshire~OXF|Rutland~RUT|Shropshire~SAL|Somerset~SOM|South Humberside~SHM|South Yorkshire~SYK|Staffordshire~STS|Suffolk~SFK|Surrey~SRY|Tyne and Wear~TWR|Warwickshire~WAR|West Midlands~WMD|West Sussex~SXW|West Yorkshire~WYK|Wiltshire~WIL|Worcestershire~WOR|Antrim~ANT|Armagh~ARM|Belfast, City of~BLF|Down~DOW|Fermanagh~FER|Londonderry~LDY|Derry, City of~DRY|Tyrone~TYR|Aberdeen, City of~AN|Aberdeenshire~ABD|Angus (Forfarshire)~ANS|Argyll~AGB|Ayrshire~ARG|Banffshire~BAN|Berwickshire~BEW|Bute~BUT|Caithness~CAI|Clackmannanshire~CLK|Cromartyshire~COC|Dumfriesshire~DFS|Dunbartonshire (Dumbarton)~DNB|Dundee, City of~DD|East Lothian (Haddingtonshire)~ELN|Edinburgh, City of~EB|Fife~FIF|Glasgow, City of~GLA|Inverness-shire~INV|Kincardineshire~KCD|Kinross-shire~KRS|Kirkcudbrightshire~KKD|Lanarkshire~LKS|Midlothian (County of Edinburgh)~MLN|Moray (Elginshire)~MOR|Nairnshire~NAI|Orkney~OKI|Peeblesshire~PEE|Perthshire~PER|Renfrewshire~RFW|Ross and Cromarty~ROC|Ross-shire~ROS|Roxburghshire~ROX|Selkirkshire~SEL|Shetland (Zetland)~SHI|Stirlingshire~STI|Sutherland~SUT|West Lothian (Linlithgowshire)~WLN|Wigtownshire~WIG|Clwyd~CWD|Dyfed~DFD|Gwent~GNT|Gwynedd~GWN|Mid Glamorgan~MGM|Powys~POW|South Glamorgan~SGM|West Glamorgan~WGM"],["United States","US","Alabama~AL|Alaska~AK|American Samoa~AS|Arizona~AZ|Arkansas~AR|California~CA|Colorado~CO|Connecticut~CT|Delaware~DE|District of Columbia~DC|Micronesia~FM|Florida~FL|Georgia~GA|Guam~GU|Hawaii~HI|Idaho~ID|Illinois~IL|Indiana~IN|Iowa~IA|Kansas~KS|Kentucky~KY|Louisiana~LA|Maine~ME|Marshall Islands~MH|Maryland~MD|Massachusetts~MA|Michigan~MI|Minnesota~MN|Mississippi~MS|Missouri~MO|Montana~MT|Nebraska~NE|Nevada~NV|New Hampshire~NH|New Jersey~NJ|New Mexico~NM|New York~NY|North Carolina~NC|North Dakota~ND|Northern Mariana Islands~MP|Ohio~OH|Oklahoma~OK|Oregon~OR|Palau~PW|Pennsylvania~PA|Puerto Rico~PR|Rhode Island~RI|South Carolina~SC|South Dakota~SD|Tennessee~TN|Texas~TX|Utah~UT|Vermont~VT|Virgin Islands~VI|Virginia~VA|Washington~WA|West Virginia~WV|Wisconsin~WI|Wyoming~WY|Armed Forces Americas~AA|Armed Forces Europe, Canada, Africa and Middle East~AE|Armed Forces Pacific~AP"],["United States Minor Outlying Islands","UM","Baker Island~81|Howland Island~84|Jarvis Island~86|Johnston Atoll~67|Kingman Reef~89|Midway Islands~71|Navassa Island~76|Palmyra Atoll~95|Wake Island~79|Bajo Nuevo Bank~BN|Serranilla Bank~SB"],["Uruguay","UY","Artigas~AR|Canelones~CA|Cerro Largo~CL|Colonia~CO|Durazno~DU|Flores~FS|Florida~FD|Lavalleja~LA|Maldonado~MA|Montevideo~MO|Paysandú~PA|Río Negro~RN|Rivera~RV|Rocha~RO|Salto~SA|San José~SJ|Soriano~SO|Tacuarembó~TA|Treinta y Tres~TT"],["Uzbekistan","UZ","Toshkent shahri~TK|Andijon~AN|Buxoro~BU|Farg‘ona~FA|Jizzax~JI|Namangan~NG|Navoiy~NW|Qashqadaryo (Qarshi)~QA|Samarqand~SA|Sirdaryo (Guliston)~SI|Surxondaryo (Termiz)~SU|Toshkent wiloyati~TO|Xorazm (Urganch)~XO|Qoraqalpog‘iston Respublikasi (Nukus)~QR"],["Vanuatu","VU","Malampa~MAP|Pénama~PAM|Sanma~SAM|Shéfa~SEE|Taféa~TAE|Torba~TOB"],["Venezuela, Bolivarian Republic of","VE","Dependencias Federales~W|Distrito Federal~A|Amazonas~Z|Anzoátegui~B|Apure~C|Aragua~D|Barinas~E|Bolívar~F|Carabobo~G|Cojedes~H|Delta Amacuro~Y|Falcón~I|Guárico~J|Lara~K|Mérida~L|Miranda~M|Monagas~N|Nueva Esparta~O|Portuguesa~P|Sucre~R|Táchira~S|Trujillo~T|Vargas~X|Yaracuy~U|Zulia~V"],["Vietnam","VN","Đồng Nai~39|Đồng Tháp~45|Gia Lai~30|Hà Giang~03|Hà Nam~63|Hà Tây~15|Hà Tĩnh~23|Hải Dương~61|Hậu Giang~73|Hòa Bình~14|Hưng Yên~66|Khánh Hòa~34|Kiên Giang~47|Kon Tum~28|Lai Châu~01|Lâm Đồng~35|Lạng Sơn~09|Lào Cai~02|Long An~41|Nam Định~67|Nghệ An~22|Ninh Bình~18|Ninh Thuận~36|Phú Thọ~68|Phú Yên~32|Quảng Bình~24|Quảng Nam~27|Quảng Ngãi~29|Quảng Ninh~13|Quảng Trị~25|Sóc Trăng~52|Sơn La~05|Tây Ninh~37|Thái Bình~20|Thái Nguyên~69|Thanh Hóa~21|Thừa Thiên–Huế~26|Tiền Giang~46|Trà Vinh~51|Tuyên Quang~07|Vĩnh Long~49|Vĩnh Phúc~70|Yên Bái~06|Cần Thơ~CT|Đà Nẵng~DN|Hà Nội~HN|Hải Phòng~HP|Hồ Chí Minh (Sài Gòn)~SG"],["Virgin Islands, British","VG","Anegada~ANG|Jost Van Dyke~JVD|Tortola~TTA|Virgin Gorda~VGD"],["Virgin Islands, U.S.","VI","St. Thomas~STH|St. John~SJO|St. Croix~SCR"],["Wallis and Futuna","WF","Alo~ALO|Sigave~SIG|Wallis~WAL"],["Western Sahara","EH","Es Smara~ESM|Boujdour~BOD|Laâyoune~LAA|Aousserd~AOU|Oued ed Dahab~OUD"],["Yemen","YE","Abyān~AB|'Adan~AD|Aḑ Ḑāli'~DA|Al Bayḑā'~BA|Al Ḩudaydah~HU|Al Jawf~JA|Al Mahrah~MR|Al Maḩwīt~MW|'Amrān~AM|Dhamār~DH|Ḩaḑramawt~HD|Ḩajjah~HJ|Ibb~IB|Laḩij~LA|Ma'rib~MA|Raymah~RA|Şā‘dah~SD|Şan‘ā'~SN|Shabwah~SH|Tā‘izz~TA"],["Zambia","ZM","Central~02|Copperbelt~08|Eastern~03|Luapula~04|Lusaka~09|Northern~05|North-Western~06|Southern~07|Western~01"],["Zimbabwe","ZW","Bulawayo~BU|Harare~HA|Manicaland~MA|Mashonaland Central~MC|Mashonaland East~ME|Mashonaland West~MW|Masvingo~MV|Matabeleland North~MN|Matabeleland South~MS|Midlands~MI"]],a=function(){l=s;for(var a=document.getElementsByClassName("crs-country"),n=0;n<a.length;n++)e(a[n])},e=function(a){if("true"!==a.getAttribute("data-crs-loaded")){a.length=0;var n=a.getAttribute("data-default-option"),e=n||"Select country",i=a.getAttribute("data-show-default-option");m=null===i||"true"===i;var r=a.getAttribute("data-default-value"),o=a.getAttribute("data-value"),l=0;m&&(a.options[0]=new Option(e,"")),B();var t=b(a);console.log(o);for(var s=0;s<t.length;s++){var u="shortcode"===o||"2-char"===o?t[s][1]:t[s][0];t[s][4]&&(u=""),a.options[a.length]=new Option(t[s][0],u),null!=r&&r===u&&(l=s,m&&l++)}a.selectedIndex=l;var d=a.getAttribute("data-region-id");if(d){var h=document.getElementById(d);if(h)if(M(h),a.onchange=function(){c(a,h)},null!==r&&0<a.selectedIndex){c(a,h);var S=h.getAttribute("data-default-value"),A="shortcode"===h.getAttribute("data-value");if(null!==S){var g=t[m?a.selectedIndex-1:a.selectedIndex][3];k(h,g,S,A)}}else!1===m&&c(a,h);else console.error("Region dropdown DOM node with ID "+d+" not found.");a.setAttribute("data-crs-loaded","true")}else console.error("Missing data-region-id on country-region-selector country field.")}},M=function(a){var n=a.getAttribute("data-blank-option"),e=n||"-",i=a.getAttribute("data-show-default-option");h=null===i||"true"===i,a.length=0,h&&(a.options[0]=new Option(e,""),a.selectedIndex=0)},B=function(){for(var a=0;a<l.length;a++){for(var n={hasShortcodes:/~/.test(l[a][2]),regions:[]},e=l[a][2].split("|"),i=0;i<e.length;i++){var r=e[i].split("~");n.regions.push([r[0],r[1]])}l[a][3]=n}},k=function(a,n,e,i){for(var r=0;r<n.regions.length;r++){if((i&&n.hasShortcodes&&n.regions[r][1]?n.regions[r][1]:n.regions[r][0])===e){a.selectedIndex=h?r+1:r;break}}},c=function(a,n){var e=m?a.selectedIndex-1:a.selectedIndex,i=n.getAttribute("data-default-option"),r=n.getAttribute("data-value"),o=i||"Select region";if(""===a.value)M(n);else{n.length=0,h&&(n.options[0]=new Option(o,""));var l=b(a)[e][3],t="shortcode"===r&&l.hasShortcodes,s=t?1:0;l.regions.sort(function(a,n){var e=a[s].toLowerCase(),i=n[s].toLowerCase();return e<i?-1:i<e?1:0});for(var u=0;u<l.regions.length;u++){var d=t?l.regions[u][1]:l.regions[u][0];n.options[n.length]=new Option(l.regions[u][0],d)}n.selectedIndex=0}},b=function(a){var n=a.getAttribute("data-whitelist"),e=a.getAttribute("data-blacklist"),i=a.getAttribute("data-preferred"),r=a.getAttribute("data-preferred-delim"),o=l;return(n||e)&&(o=function(a){var n=a.whitelist+"|"+a.blacklist,e=0;if(!t.hasOwnProperty(n))if(t[n]=[],a.whitelist){var i=a.whitelist.split(",");for(e=0;e<s.length;e++)-1!==i.indexOf(s[e][1])&&t[n].push(e)}else if(a.blacklist){var r=a.blacklist.split(",");for(e=0;e<s.length;e++)-1===r.indexOf(s[e][1])&&t[n].push(e)}var o=[];for(e=0;e<t[n].length;e++)o.push(s[t[n][e]]);return o}({whitelist:n,blacklist:e})),i&&(o=u(o,i,r)),o},u=function(a,n,e){var i=n.split(",").reverse(),r={},o=!1,l=a.filter(function(a){return-1===i.indexOf(a[1])||(r[a[1]]=a,!(o=!0))});o&&e&&l.unshift([e,"","",{},!0]);for(var t=0;t<i.length;t++){var s=i[t];l.unshift(r[s])}return l};return function(n,e){var i=!1,a=!0,r=n.document,o=r.documentElement,l=r.addEventListener?"addEventListener":"attachEvent",t=r.addEventListener?"removeEventListener":"detachEvent",s=r.addEventListener?"":"on",u=function(a){"readystatechange"==a.type&&"complete"!=r.readyState||(("load"==a.type?n:r)[t](s+a.type,u,!1),!i&&(i=!0)&&e.call(n,a.type||a))},d=function(){try{o.doScroll("left")}catch(a){return void setTimeout(d,50)}u("poll")};if("complete"==r.readyState)e.call(n,"lazy");else{if(r.createEventObject&&o.doScroll){try{a=!n.frameElement}catch(a){}a&&d()}r[l](s+"DOMContentLoaded",u,!1),r[l](s+"readystatechange",u,!1),n[l](s+"load",u,!1)}}(window,a),{init:a}});

/***/ }),

/***/ "./src/displayObjects.js":
/*!*******************************!*\
  !*** ./src/displayObjects.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cardObjects": () => (/* binding */ cardObjects),
/* harmony export */   "displayObjects": () => (/* binding */ displayObjects),
/* harmony export */   "errors": () => (/* binding */ errors)
/* harmony export */ });
const displayObjects = [
  {
    name: "main",
    nodeType: "main",
    parent: "body",
  },
  {
    name: "contentContainer",
    nodeType: "div",
    parent: "main",
    class1: "content",
  },
  {
    name: "centralContainer",
    nodeType: "div",
    parent: ".content",
    class1: "input-container",
  },
  {
    name: "title",
    nodeType: "h1",
    parent: ".input-container",
    class1: "title",
    text: "Weather",
  },
  {
    name: "input",
    nodeType: "input",
    parent: ".input-container",
    class1: "location-input",
    inputType: "text",
    value: "",
    placeholder: "Please enter a town or city",
  },
  {
    name: "countryInput",
    nodeType: "select",
    parent: ".input-container",
    class1: "crs-country",
    value: "",
    // dataAttrType: 'region-id',
    dataAttr: 'USA',
    shortcode: true,
    preferred: 'ES,US,GB',
  },
  {
    name: "stateInput",
    nodeType: "select",
    parent: ".input-container",
    class1: "state-input",
    class2: "hidden",
    value: "",
    id: 'USA',
    shortcode: true,
  },
  {
    name: "submit",
    nodeType: "input",
    parent: ".input-container",
    class1: "location-submit",
    value: "Submit",
    inputType: "button",
  },
];

const cardObjects = {
  card: {
    nodeType: "div",
    parent: ".content",
    class1: "weather-card",
  },
  summary: {
    nodeType: "div",
    parent: ".weather-card",
    class1: "summary",
  },
  details: {
    nodeType: "div",
    parent: ".weather-card",
    class1: "details",
  },
  location: {
    nodeType: "p",
    parent: ".summary",
    class1: "location",
  },
  tempContainer: {
    nodeType: "div",
  },
  mainTempContainer: {
    nodeType: "div",
  },
  temp: {
    nodeType: "p",
    parent: ".temp-container",
    class1: "temp",
    class2: "temperature",
  },
  tempUnits: {
    nodeType: "p",
    class1: "temp-unit",
  },
  description: {
    nodeType: "p",
    parent: ".summary",
    class1: "description",
  },
  forecastDescription: {
    nodeType: "p",
    parent: ".summary",
    class1: "forecast-description",
  },
  humidity: {
    nodeType: "p",
    parent: ".humidity-container",
    class1: "humidity",
  },
  humidityTitle: {
    nodeType: "p",
    parent: ".humidity-container",
    class1: "humidity-title",
    text: "Humidity (%)",
  },
  high: {
    nodeType: "p",
    parent: ".high-temp-container",
    class1: "high",
    class2: "temperature",
  },
  highTitle: {
    nodeType: "p",
    parent: ".high-container",
    class1: "high-title",
    text: "High",
  },
  low: {
    nodeType: "p",
    parent: ".low-temp-container",
    class1: "low",
    class2: "temperature",
  },
  lowTitle: {
    nodeType: "p",
    parent: ".low-container",
    class1: "low-title",
    text: "Low",
  },
  feelsLike: {
    nodeType: "p",
    parent: ".feels-temp-container",
    class1: "feelsLike",
    class2: "temperature",
  },
  feelsLikeTitle: {
    nodeType: "p",
    parent: ".feels-container",
    class1: "feels-title",
    text: "Feels like",
  },
  clouds: {
    nodeType: "p",
    parent: ".clouds-container",
    class1: "clouds",
  },
  cloudsTitle: {
    nodeType: "p",
    parent: ".clouds-container",
    class1: "clouds-title",
    text: "Cloud cover (%)",
  },
  pressure: {
    nodeType: "p",
    parent: ".pressure-container",
    class1: "pressure",
  },
  pressureTitle: {
    nodeType: "p",
    parent: ".pressure-container",
    class1: "pressure-title",
    text: "Pressure (mbar)",
  },
  sunrise: {
    nodeType: "p",
    parent: ".sunrise-container",
    class1: "sunrise",
    class2: "time",
  },
  sunriseTitle: {
    nodeType: "p",
    parent: ".sunrise-container",
    class1: "sunrise-title",
    text: "Sunrise today",
  },
  sunset: {
    nodeType: "p",
    parent: ".sunset-container",
    class1: "sunset",
    class2: "time",
  },
  sunsetTitle: {
    nodeType: "p",
    parent: ".sunset-container",
    class1: "sunset-title",
    text: "Sunset today",
  },
  vis: {
    nodeType: "p",
    parent: ".vis-container",
    class1: "vis",
  },
  visTitle: {
    nodeType: "p",
    parent: ".vis-container",
    class1: "vis-title",
    text: "Visibility (meters)",
  },
  windDirTitle: {
    nodeType: "p",
    parent: ".wind-dir-container",
    class1: "wind-dir-title",
    text: "Wind direction",
  },
  windDir: {
    nodeType: "p",
    parent: ".wind-dir-container",
    class1: "wind-dir",
  },
  windSpeedTitle: {
    nodeType: "p",
    parent: ".wind-speed-container",
    class1: "wind-speed-title",
    text: "Wind speed",
  },
  windSpeed: {
    nodeType: "p",
    parent: ".wind-speed-unit-container",
    class1: "wind-speed",
  },
  detailContainer: {
    nodeType: "div",
    parent: ".details",
    class1: "detail-container",
  },
  detailTitle: {
    nodeType: "div",
  },
  tempUnitContainer: {
    nodeType: "div",
  },
  windUnitContainer: {
    nodeType: "div",
    parent: ".wind-speed-container",
  },
  windUnits: {
    nodeType: "p",
    parent: ".wind-speed-unit-container",
    text: "km/h",
    class1: "wind-units",
  },
  toggleUnits: {
    nodeType: "input",
    parent: ".weather-card",
    class1: "toggle-units",
    value: "Click to toggle units",
    inputType: "button",
  },
  forecastContainer: {
    nodeType: "div",
    parent: ".weather-card",
    class1: "forecast-container",
  },
  forecastCard: {
    nodeType: "div",
    parent: ".forecast-container",
    class1: "forecast",
  },
  forecastTime: {
    nodeType: "p",
    class1: "forecast-time",
    class3: "time",
  },
  forecastTemp: {
   nodeType: "p",
   class1: "forecast-temp",
   class3: "temperature",
  },
  forecastSummary: {
    nodeType: "p",
    class1: "forecast-summary",
  },
  forecastHumidity: {
   nodeType: "p",
   class1: "forecast-humidity",
  },
  forecastCount: {
    nodeType: "p",
    class1: "forecast-count",
  },
  forecastIcon: {
    nodeType: "div",
    class1: "forecast-icon",
  }
};

const errors = {
  404: {
    nodeType: "h2",
    parent: ".content",
    class1: "error",
    text: "Error 404: Location not found. Please enter a valid location.",
  },
  520: {
    nodeType: "h2",
    parent: ".content",
    class1: "error",
    text: "Error 520: Empty, unknown, unexpected, or no response",
  },
};




/***/ }),

/***/ "./src/drawCard.js":
/*!*************************!*\
  !*** ./src/drawCard.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawCard": () => (/* binding */ drawCard)
/* harmony export */ });
/* harmony import */ var _componentFactory__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./componentFactory */ "./src/componentFactory.js");
/* harmony import */ var _displayObjects__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./displayObjects */ "./src/displayObjects.js");



const drawCard = () => {
  if (document.querySelector(".weather-card")) {
    document.querySelector(".weather-card").remove();
  }
  if (document.querySelector(".error")) {
    document.querySelector(".error").remove();
  }
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.card);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.summary);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.toggleUnits);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.details);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.location);
  //
  const tempContainer1 = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.mainTempContainer;
  tempContainer1.parent = ".summary";
  tempContainer1.class1 = "temp-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(tempContainer1);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.temp);
  const tempUnit0 = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.tempUnits;
  tempUnit0.parent = ".temp-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(tempUnit0);
  //
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.description);
  //
  const feelsContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.tempContainer;
  feelsContainer.parent = ".details";
  feelsContainer.class1 = "feels-container";
  feelsContainer.class2 = "detail-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(feelsContainer);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.feelsLikeTitle);
  const feelsTempContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.tempUnitContainer;
  feelsTempContainer.class1 = "feels-temp-container";
  feelsTempContainer.class2 = "temp-details-container";
  feelsTempContainer.parent = ".feels-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(feelsTempContainer);

  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.feelsLike);
  const feelsUnits = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.tempUnits;
  feelsUnits.parent = ".feels-temp-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(feelsUnits);
  //
  const humidityContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.detailContainer;
  humidityContainer.class2 = "humidity-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(humidityContainer);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.humidityTitle);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.humidity);
  //

  const highContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.tempContainer;
  highContainer.parent = ".details";
  highContainer.class1 = "high-container";
  highContainer.class2 = "detail-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(highContainer);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.highTitle);
  const highTempContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.tempUnitContainer;
  highTempContainer.class1 = "high-temp-container";
  highTempContainer.class2 = "temp-details-container";
  highTempContainer.parent = ".high-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(highTempContainer);

  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.high);
  const highUnits = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.tempUnits;
  highUnits.parent = ".high-temp-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(highUnits);

  const lowContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.tempContainer;
  lowContainer.parent = ".details";
  lowContainer.class1 = "low-container";
  lowContainer.class2 = "detail-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(lowContainer);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.lowTitle);
  const lowTempContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.tempUnitContainer;
  lowTempContainer.class1 = "low-temp-container";
  lowTempContainer.class2 = "temp-details-container";
  lowTempContainer.parent = ".low-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(lowTempContainer);

  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.low);
  const lowUnits = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.tempUnits;
  lowUnits.parent = ".low-temp-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(lowUnits);

  const cloudsContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.detailContainer;
  cloudsContainer.class2 = "clouds-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(cloudsContainer);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.cloudsTitle);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.clouds);

  const pressureContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.detailContainer;
  pressureContainer.class2 = "pressure-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(pressureContainer);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.pressureTitle);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.pressure);

  const sunriseContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.detailContainer;
  sunriseContainer.class2 = "sunrise-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(sunriseContainer);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.sunriseTitle);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.sunrise);

  const sunsetContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.detailContainer;
  sunsetContainer.class2 = "sunset-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(sunsetContainer);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.sunsetTitle);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.sunset);

  const visContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.detailContainer;
  visContainer.class2 = "vis-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(visContainer);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.visTitle);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.vis);

  const windDirContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.detailContainer;
  windDirContainer.class2 = "wind-dir-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(windDirContainer);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.windDirTitle);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.windDir);

  const windSpeedContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.detailContainer;
  windSpeedContainer.class2 = "wind-speed-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(windSpeedContainer);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.windSpeedTitle);
  const windSpeedUnitContainer = _displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.windUnitContainer;
  windSpeedUnitContainer.class1 = "wind-speed-unit-container";
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(windSpeedUnitContainer);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.windSpeed);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.windUnits);

  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_0__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_1__.cardObjects.forecastContainer);
};




/***/ }),

/***/ "./src/forecastCards.js":
/*!******************************!*\
  !*** ./src/forecastCards.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "drawForecastCard": () => (/* binding */ drawForecastCard),
/* harmony export */   "populateForecastCard": () => (/* binding */ populateForecastCard),
/* harmony export */   "populateForecasts": () => (/* binding */ populateForecasts)
/* harmony export */ });
/* harmony import */ var _displayObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayObjects */ "./src/displayObjects.js");
/* harmony import */ var _componentFactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./componentFactory */ "./src/componentFactory.js");
/* harmony import */ var _setForecastIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./setForecastIcon */ "./src/setForecastIcon.js");
/* harmony import */ var _conversions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./conversions */ "./src/conversions.js");





const populateForecastCard = (forecast, i, offset) => {
  const forecastSummary = document.querySelector(`.forecast-summary${i}`);
  const forecastTemp = document.querySelector(`.forecast-temp${i}`);
  const forecastHumidity = document.querySelector(`.forecast-humidity${i}`);
  const forecastTime = document.querySelector(`.forecast-time${i}`);
  const forecastCount = document.querySelector(`.forecast-count${i}`);
  (0,_setForecastIcon__WEBPACK_IMPORTED_MODULE_2__.setForecastIcon)(forecast.weather[0].id, i);
  forecastSummary.textContent = forecast.weather[0].main;
  forecastTemp.textContent = `Temp: ${(0,_conversions__WEBPACK_IMPORTED_MODULE_3__.convertFromKelvin)(forecast.main.temp)}`;
  forecastHumidity.textContent = `Humidity: ${forecast.main.humidity} %`;
  const { dt } = forecast;
  const forecastTime24h = (0,_conversions__WEBPACK_IMPORTED_MODULE_3__.convertTimesFromUnix)(dt, offset);
  forecastTime.textContent = forecastTime24h;
  if (i === 0) {
    forecastCount.textContent = "";
  } else {
    const hours = i * 3;
    if (hours < 24) {
      forecastCount.textContent = `+ ${hours} hours`;
    } else {
      const days = hours / 24;
      const daysRemainder = days % 1;
      const daysRounded = days - daysRemainder;
      forecastCount.textContent = `+ ${daysRounded} days`;
    }
  }
};

const drawForecastCard = (forecast, i, offset) => {
  const {
    forecastCard,
    forecastTime,
    forecastTemp,
    forecastDescription,
    forecastHumidity,
    tempContainer,
    tempUnits,
    forecastCount,
    forecastIcon,
  } = _displayObjects__WEBPACK_IMPORTED_MODULE_0__.cardObjects;
  forecastCard.class2 = `forecast${i}`;
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_1__.componentFactory)(forecastCard);
  forecastTime.class2 = `forecast-time${i}`;
  forecastTime.parent = `.forecast${i}`;
  forecastTemp.class2 = `forecast-temp${i}`;
  forecastTemp.parent = `.forecast-temp-container${i}`;
  forecastHumidity.class2 = `forecast-humidity${i}`;
  forecastHumidity.parent = `.forecast${i}`;
  forecastDescription.class2 = `forecast-summary${i}`;
  forecastDescription.parent = `.forecast${i}`;
  tempUnits.class2 = `forecast-temp-units${i}`;
  tempUnits.parent = `.forecast-temp-container${i}`;
  tempContainer.parent = `.forecast${i}`;
  tempContainer.class2 = `forecast-temp-container${i}`;
  forecastCount.parent = `.forecast${i}`;
  forecastCount.class2 = `forecast-count${i}`;
  forecastIcon.parent = `.forecast${i}`;
  forecastIcon.class2 = `forecast-icon${i}`;
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_1__.componentFactory)(forecastIcon);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_1__.componentFactory)(forecastDescription);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_1__.componentFactory)(forecastTime);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_1__.componentFactory)(forecastCount);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_1__.componentFactory)(tempContainer);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_1__.componentFactory)(forecastTemp);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_1__.componentFactory)(tempUnits);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_1__.componentFactory)(forecastHumidity);

  populateForecastCard(forecast, i, offset);
};

const populateForecasts = (forecasts, offset) => {
  for (let i = 0; i < forecasts.length; i += 1) {
    const element = forecasts[i];
    drawForecastCard(element, i, offset);
  }
};




/***/ }),

/***/ "./src/getDescription.js":
/*!*******************************!*\
  !*** ./src/getDescription.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDescription": () => (/* binding */ getDescription)
/* harmony export */ });
const getDescription = (id) => {
  let weather;
  let img;
  switch (id) {
    case 200:
      weather = "Thunderstorm with light rain";
      img = "Storm";
      break;
    case 201:
      weather = "Thunderstorm with rain";
      img = "Storm";
      break;
    case 202:
      weather = "Thunderstorm with heavy rain";
      img = "Storm";
      break;
    case 210:
      weather = "Light thunderstorm";
      img = "Storm";
      break;
    case 211:
      weather = "Thunderstorm";
      img = "Storm";
      break;
    case 212:
      weather = "Heavy thunderstorm";
      img = "Storm";
      break;
    case 221:
      weather = "Ragged thunderstorm";
      img = "Storm";
      break;
    case 230:
      weather = "Thunderstorm with light drizzle";
      img = "Storm";
      break;
    case 231:
      weather = "Thunderstorm with drizzle";
      img = "Storm";
      break;
    case 232:
      weather = "Thunderstorm with heavy drizzle";
      img = "Storm";
      break;
    case 300:
      weather = "Light intensity drizzle";
      img = "Rain";
      break;
    case 301:
      weather = "Drizzle";
      img = "Rain";
      break;
    case 302:
      weather = "Heavy intensity drizzle";
      img = "Rain";
      break;
    case 310:
      weather = "Light intensity drizzle rain";
      img = "Rain";
      break;
    case 311:
      weather = "Drizzle rain";
      img = "Rain";
      break;
    case 312:
      weather = "Heavy intensity drizzle rain";
      img = "Rain";
      break;
    case 313:
      weather = "Shower rain and drizzle";
      img = "Rain";
      break;
    case 314:
      weather = "Heavy shower rain and drizzle";
      img = "Rain";
      break;
    case 321:
      weather = "Shower drizzle";
      img = "Rain";
      break;
    case 500:
      weather = "Light rain";
      img = "Rain";
      break;
    case 501:
      weather = "Moderate rain";
      img = "Rain";
      break;
    case 502:
      weather = "Heavy intensity rain";
      img = "Rain";
      break;
    case 503:
      weather = "Very heavy rain";
      img = "Rain";
      break;
    case 504:
      weather = "Extreme rain";
      img = "Rain";
      break;
    case 520:
      weather = "Light intensity shower rain";
      img = "Rain";
      break;
    case 521:
      weather = "Shower rain ";
      img = "Rain";
      break;
    case 522:
      weather = "Heavy intensity shower rain ";
      img = "Rain";
      break;
    case 531:
      weather = "Ragged shower rain";
      img = "Rain";
      break;
    case 600:
      weather = "Light snow";
      img = "Snow";
      break;
    case 601:
      weather = "Snow";
      img = "Snow";
      break;
    case 602:
      weather = "Heavy snow";
      img = "Snow";
      break;
    case 611:
      weather = "Sleet";
      img = "Snow";
      break;
    case 612:
      weather = "Light shower sleet";
      img = "Snow";
      break;
    case 613:
      weather = "Shower sleet";
      img = "Snow";
      break;
    case 615:
      weather = "Light rain and snow";
      img = "Snow";
      break;
    case 616:
      weather = "Rain and snow";
      img = "Snow";
      break;
    case 620:
      weather = "Light shower snow";
      img = "Snow";
      break;
    case 621:
      weather = "Shower snow";
      img = "Snow";
      break;
    case 622:
      weather = "Heavy shower snow";
      img = "Snow";
      break;
    case 701:
      weather = "Mist";
      img = "Fog";
      break;
    case 711:
      weather = "Smoke";
      img = "Smoke";
      break;
    case 721:
      weather = "Haze";
      img = "Haze";
      break;
    case 731:
      weather = "Dust";
      img = "Dust";
      break;
    case 741:
      weather = "Fog";
      img = "Fog";
      break;
    case 751:
      weather = "Sand";
      img = "Dust";
      break;
    case 761:
      weather = "Dust";
      img = "Dust";
      break;
    case 762:
      weather = "Ash";
      img = "Ash";
      break;
    case 771:
      weather = "Squalls";
      img = "Wind";
      break;
    case 781:
      weather = "Tornado";
      img = "Storm";
      break;
    case 800:
      weather = "Clear";
      img = "Clear";
      break;
    case 801:
      weather = "Few clouds: 11-25% ";
      img = "LClouds";
      break;
    case 802:
      weather = "Scattered clouds: 25-50%";
      img = "LClouds";
      break;
    case 803:
      weather = "Broken clouds: 51-84%";
      img = "Clouds";
      break;
    case 804:
      weather = "overcast clouds: 85-100%";
      img = "Clouds";
      break;
    default:
      weather = "Error! Couldn't find weather code.";
      img = "Clear";
  }
  return [weather, img];
};




/***/ }),

/***/ "./src/interface.js":
/*!**************************!*\
  !*** ./src/interface.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "buildInterface": () => (/* binding */ buildInterface)
/* harmony export */ });
/* harmony import */ var _displayObjects__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./displayObjects */ "./src/displayObjects.js");
/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app */ "./src/app.js");
/* harmony import */ var _getDescription__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./getDescription */ "./src/getDescription.js");
/* harmony import */ var _drawCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drawCard */ "./src/drawCard.js");
/* harmony import */ var _componentFactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./componentFactory */ "./src/componentFactory.js");
/* harmony import */ var _setBackground__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./setBackground */ "./src/setBackground.js");
/* harmony import */ var _forecastCards__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./forecastCards */ "./src/forecastCards.js");
/* harmony import */ var _conversions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conversions */ "./src/conversions.js");









const getInput = async () => {
  const townCityInput = document.querySelector(".location-input");
  const townCityValue = townCityInput.value;
  const countrySelect = document.querySelector(".crs-country");
  const countrySelectValue = countrySelect.value;
  let stateSelectValue;
  let weatherObject;
  if (countrySelectValue === "US") {
    stateSelectValue = document.querySelector(".state-input").value;
    weatherObject = await (0,_app__WEBPACK_IMPORTED_MODULE_1__.processInput)([
      townCityValue,
      countrySelectValue,
      stateSelectValue,
    ]);
    return weatherObject;
  }
  weatherObject = await (0,_app__WEBPACK_IMPORTED_MODULE_1__.processInput)([townCityValue, countrySelectValue]);
  return weatherObject;
};

const toggleUnits = () => {
  const units = document.querySelectorAll(".temp-unit");
  if (units[0].textContent === "°C") {
    for (let i = 0; i < units.length; i += 1) {
      units[i].textContent = "°F";
    }
    (0,_conversions__WEBPACK_IMPORTED_MODULE_7__.convertTemps)(0);
    (0,_conversions__WEBPACK_IMPORTED_MODULE_7__.convertTimes)(1);
    (0,_conversions__WEBPACK_IMPORTED_MODULE_7__.convertWind)(0);
    const visTitle = document.querySelector(".vis-title");
    visTitle.textContent = "Visibility (yards)";
    const visibility = document.querySelector(".vis").textContent;
    (0,_conversions__WEBPACK_IMPORTED_MODULE_7__.convertVis)(visibility, 0);
  } else {
    for (let i = 0; i < units.length; i += 1) {
      units[i].textContent = "°C";
    }
    (0,_conversions__WEBPACK_IMPORTED_MODULE_7__.convertTemps)(1);
    (0,_conversions__WEBPACK_IMPORTED_MODULE_7__.convertTimes)(0);
    (0,_conversions__WEBPACK_IMPORTED_MODULE_7__.convertWind)(1);
    const visTitle = document.querySelector(".vis-title");
    visTitle.textContent = "Visibility (meters)";
    const visibility = document.querySelector(".vis").textContent;
    (0,_conversions__WEBPACK_IMPORTED_MODULE_7__.convertVis)(visibility, 1);
  }
};

const populateCard = async () => {
  const weather = await getInput();
  if (typeof weather === "number") {
    if (document.querySelector(".weather-card")) {
      document.querySelector(".weather-card").remove();
    }
    if (document.querySelector(".error")) {
      document.querySelector(".error").remove();
    }
    if (weather === 404) {
      (0,_componentFactory__WEBPACK_IMPORTED_MODULE_4__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_0__.errors[404]);
    } else {
      (0,_componentFactory__WEBPACK_IMPORTED_MODULE_4__.componentFactory)(_displayObjects__WEBPACK_IMPORTED_MODULE_0__.errors[520]);
    }
  } else {
    (0,_drawCard__WEBPACK_IMPORTED_MODULE_3__.drawCard)();
    document
      .querySelector(".toggle-units")
      .addEventListener("click", toggleUnits);
    weather.units = 0;
    document.querySelector(
      ".location"
    ).textContent = `${weather.placeName}, ${weather.country}`;
    const airTempRounded = (0,_conversions__WEBPACK_IMPORTED_MODULE_7__.roundTemp)(weather.airTemp);
    document.querySelector(".temp").textContent = airTempRounded;
    const sunrise = weather.sunriseTime;
    const sunset = weather.sunsetTime;
    const description = (0,_getDescription__WEBPACK_IMPORTED_MODULE_2__.getDescription)(weather.id);
    (0,_setBackground__WEBPACK_IMPORTED_MODULE_5__.setBackground)(description[1]);
    document.querySelector(".sunrise").textContent = sunrise;
    document.querySelector(".sunset").textContent = sunset;
    document.querySelector(".description").textContent = description[0];
    document.querySelector(".humidity").textContent = weather.humidity;
    const maxRounded = (0,_conversions__WEBPACK_IMPORTED_MODULE_7__.roundTemp)(weather.tempMax);
    document.querySelector(".high").textContent = maxRounded;
    const minRounded = (0,_conversions__WEBPACK_IMPORTED_MODULE_7__.roundTemp)(weather.tempMin);
    document.querySelector(".low").textContent = minRounded;
    const feelsRounded = (0,_conversions__WEBPACK_IMPORTED_MODULE_7__.roundTemp)(weather.feelsLike);
    document.querySelector(".feelsLike").textContent = feelsRounded;
    document.querySelector(".clouds").textContent = weather.clouds;
    document.querySelector(".pressure").textContent = weather.pressure;
    document.querySelector(".vis").textContent = weather.visibility;
    document.querySelector(".wind-dir").textContent = weather.wind[1][0];
    document.querySelector(".wind-speed").textContent = weather.wind[0];
    (0,_forecastCards__WEBPACK_IMPORTED_MODULE_6__.populateForecasts)(weather.forecast, weather.offset);
    const tempUnits = document.querySelectorAll(".temp-unit");
    if (weather.units === 0) {
      for (let i = 0; i < tempUnits.length; i += 1) {
        tempUnits[i].textContent = "°C";
      }
    }
  }
};

const showStateifUS = () => {
  const country = document.querySelector(".crs-country");
  if (country.value === "US") {
    const stateInput = document.querySelector(".state-input");
    stateInput.classList.remove("hidden");
  }
  if (country.value !== "US") {
    const stateInput = document.querySelector(".state-input");
    stateInput.classList.add("hidden");
  }
};

const addListeners = () => {
  document
    .querySelector(".location-submit")
    .addEventListener("click", populateCard);
  document
    .querySelector(".crs-country")
    .addEventListener("click", showStateifUS);
};

const buildInterface = () => {
  for (let i = 0; i < _displayObjects__WEBPACK_IMPORTED_MODULE_0__.displayObjects.length; i += 1) {
    const element = _displayObjects__WEBPACK_IMPORTED_MODULE_0__.displayObjects[i];
    (0,_componentFactory__WEBPACK_IMPORTED_MODULE_4__.componentFactory)(element);
  }
  addListeners();
};








/***/ }),

/***/ "./src/obtainWeather.js":
/*!******************************!*\
  !*** ./src/obtainWeather.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "obtainWeather": () => (/* binding */ obtainWeather)
/* harmony export */ });
/* harmony import */ var _apikey__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apikey */ "./src/apikey.js");


const obtainWeather = async (location) => {
  try {
    let fetchCoords;
    if (location[2]) {
      fetchCoords = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location[0]},${location[2]},${location[1]}&limit=5&appid=${_apikey__WEBPACK_IMPORTED_MODULE_0__.apiKey}`,
        {
          mode: "cors",
        }
      );
    } else {
      fetchCoords = await fetch(
        `https://api.openweathermap.org/geo/1.0/direct?q=${location[0]},${location[1]}&limit=5&appid=${_apikey__WEBPACK_IMPORTED_MODULE_0__.apiKey}`,
        {
          mode: "cors",
        }
      );
    }

    const remoteCoords = await fetchCoords.json();

    const fetchForecast = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${remoteCoords[0].lat}&lon=${remoteCoords[0].lon}&APPID=${_apikey__WEBPACK_IMPORTED_MODULE_0__.apiKey}`,
      {
        mode: "cors",
      }
    );

    const currentWeather = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${remoteCoords[0].lat}&lon=${remoteCoords[0].lon}&APPID=${_apikey__WEBPACK_IMPORTED_MODULE_0__.apiKey}`,
      {
        mode: "cors",
      }
    );

    const weather = await currentWeather.json();
    // console.log('weather is', weather);
    const forecast = await fetchForecast.json();
    // console.log('forecast is', forecast);
    weather.forecast = forecast.list;

    if (weather.cod === "404") {
      return 404;
    }
    return weather;
  } catch (error) {
    return 520;
  }
};




/***/ }),

/***/ "./src/setBackground.js":
/*!******************************!*\
  !*** ./src/setBackground.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setBackground": () => (/* binding */ setBackground)
/* harmony export */ });
/* harmony import */ var _images_ash_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/ash.jpg */ "./src/images/ash.jpg");
/* harmony import */ var _images_clear_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/clear.jpg */ "./src/images/clear.jpg");
/* harmony import */ var _images_clouds_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/clouds.jpg */ "./src/images/clouds.jpg");
/* harmony import */ var _images_dust_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/dust.jpg */ "./src/images/dust.jpg");
/* harmony import */ var _images_fog_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/fog.jpg */ "./src/images/fog.jpg");
/* harmony import */ var _images_haze_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/haze.jpg */ "./src/images/haze.jpg");
/* harmony import */ var _images_lclouds_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/lclouds.jpg */ "./src/images/lclouds.jpg");
/* harmony import */ var _images_rain_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/rain.jpg */ "./src/images/rain.jpg");
/* harmony import */ var _images_smoke_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/smoke.jpg */ "./src/images/smoke.jpg");
/* harmony import */ var _images_snow_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/snow.jpg */ "./src/images/snow.jpg");
/* harmony import */ var _images_storm_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/storm.jpg */ "./src/images/storm.jpg");
/* harmony import */ var _images_wind_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/wind.jpg */ "./src/images/wind.jpg");













const setBackground = (img) => {
  const card = document.querySelector(".weather-card");
  let imgStr;
  switch (img) {
    case "Ash":
      imgStr = `url('${_images_ash_jpg__WEBPACK_IMPORTED_MODULE_0__}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Clear":
      imgStr = `url('${_images_clear_jpg__WEBPACK_IMPORTED_MODULE_1__}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Clouds":
      imgStr = `url('${_images_clouds_jpg__WEBPACK_IMPORTED_MODULE_2__}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Dust":
      imgStr = `url('${_images_dust_jpg__WEBPACK_IMPORTED_MODULE_3__}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Fog":
      imgStr = `url('${_images_fog_jpg__WEBPACK_IMPORTED_MODULE_4__}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Haze":
      imgStr = `url('${_images_haze_jpg__WEBPACK_IMPORTED_MODULE_5__}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "LClouds":
      imgStr = `url('${_images_lclouds_jpg__WEBPACK_IMPORTED_MODULE_6__}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Rain":
      imgStr = `url('${_images_rain_jpg__WEBPACK_IMPORTED_MODULE_7__}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Smoke":
      imgStr = `url('${_images_smoke_jpg__WEBPACK_IMPORTED_MODULE_8__}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Storm":
      imgStr = `url('${_images_storm_jpg__WEBPACK_IMPORTED_MODULE_10__}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Snow":
      imgStr = `url('${_images_snow_jpg__WEBPACK_IMPORTED_MODULE_9__}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Wind":
      imgStr = `url('${_images_wind_jpg__WEBPACK_IMPORTED_MODULE_11__}')`;
      card.style.backgroundImage = imgStr;
      break;
    default:
      imgStr = `url('${_images_clear_jpg__WEBPACK_IMPORTED_MODULE_1__}')`;
      card.style.backgroundImage = imgStr;
  }
};




/***/ }),

/***/ "./src/setForecastIcon.js":
/*!********************************!*\
  !*** ./src/setForecastIcon.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setForecastIcon": () => (/* binding */ setForecastIcon)
/* harmony export */ });
/* harmony import */ var _images_cloud_alert_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/cloud-alert.svg */ "./src/images/cloud-alert.svg");
/* harmony import */ var _images_cloud_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/cloud.svg */ "./src/images/cloud.svg");
/* harmony import */ var _images_fog_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/fog.svg */ "./src/images/fog.svg");
/* harmony import */ var _images_rain_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/rain.svg */ "./src/images/rain.svg");
/* harmony import */ var _images_sleet_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/sleet.svg */ "./src/images/sleet.svg");
/* harmony import */ var _images_snow_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/snow.svg */ "./src/images/snow.svg");
/* harmony import */ var _images_storm_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/storm.svg */ "./src/images/storm.svg");
/* harmony import */ var _images_sun_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/sun.svg */ "./src/images/sun.svg");
/* harmony import */ var _images_weather_dust_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/weather-dust.svg */ "./src/images/weather-dust.svg");
/* harmony import */ var _images_weather_windy_svg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/weather-windy.svg */ "./src/images/weather-windy.svg");











const setForecastIcon = (forecast, i) => {
  const icon = document.querySelector(`.forecast-icon${i}`);
  let weather;
  switch (forecast) {
    case 200:
      icon.style.backgroundImage = `url('${_images_storm_svg__WEBPACK_IMPORTED_MODULE_6__}')`;
      break;
    case 201:
      icon.style.backgroundImage = `url('${_images_storm_svg__WEBPACK_IMPORTED_MODULE_6__}')`;
      break;
    case 202:
      icon.style.backgroundImage = `url('${_images_storm_svg__WEBPACK_IMPORTED_MODULE_6__}')`;
      break;
    case 210:
      icon.style.backgroundImage = `url('${_images_storm_svg__WEBPACK_IMPORTED_MODULE_6__}')`;
      break;
    case 211:
      icon.style.backgroundImage = `url('${_images_storm_svg__WEBPACK_IMPORTED_MODULE_6__}')`;
      break;
    case 212:
      icon.style.backgroundImage = `url('${_images_storm_svg__WEBPACK_IMPORTED_MODULE_6__}')`;
      break;
    case 221:
      icon.style.backgroundImage = `url('${_images_storm_svg__WEBPACK_IMPORTED_MODULE_6__}')`;
      break;
    case 230:
      icon.style.backgroundImage = `url('${_images_storm_svg__WEBPACK_IMPORTED_MODULE_6__}')`;
      break;
    case 231:
      icon.style.backgroundImage = `url('${_images_storm_svg__WEBPACK_IMPORTED_MODULE_6__}')`;
      break;
    case 232:
      icon.style.backgroundImage = `url('${_images_storm_svg__WEBPACK_IMPORTED_MODULE_6__}')`;
      break;
    case 300:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 301:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 302:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 310:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 311:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 312:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 313:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 314:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 321:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 500:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 501:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 502:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 503:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 504:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 520:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 521:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 522:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 531:
      icon.style.backgroundImage = `url('${_images_rain_svg__WEBPACK_IMPORTED_MODULE_3__}')`;
      break;
    case 600:
      icon.style.backgroundImage = `url('${_images_snow_svg__WEBPACK_IMPORTED_MODULE_5__}')`;
      break;
    case 601:
      icon.style.backgroundImage = `url('${_images_snow_svg__WEBPACK_IMPORTED_MODULE_5__}')`;
      break;
    case 602:
      icon.style.backgroundImage = `url('${_images_snow_svg__WEBPACK_IMPORTED_MODULE_5__}')`;
      break;
    case 611:
      icon.style.backgroundImage = `url('${_images_sleet_svg__WEBPACK_IMPORTED_MODULE_4__}')`;
      break;
    case 612:
      icon.style.backgroundImage = `url('${_images_sleet_svg__WEBPACK_IMPORTED_MODULE_4__}')`;
      break;
    case 613:
      icon.style.backgroundImage = `url('${_images_sleet_svg__WEBPACK_IMPORTED_MODULE_4__}')`;
      break;
    case 615:
      icon.style.backgroundImage = `url('${_images_sleet_svg__WEBPACK_IMPORTED_MODULE_4__}')`;
      break;
    case 616:
      icon.style.backgroundImage = `url('${_images_sleet_svg__WEBPACK_IMPORTED_MODULE_4__}')`;
      break;
    case 620:
      icon.style.backgroundImage = `url('${_images_snow_svg__WEBPACK_IMPORTED_MODULE_5__}')`;
      break;
    case 621:
      icon.style.backgroundImage = `url('${_images_snow_svg__WEBPACK_IMPORTED_MODULE_5__}')`;
      break;
    case 622:
      icon.style.backgroundImage = `url('${_images_snow_svg__WEBPACK_IMPORTED_MODULE_5__}')`;
      break;
    case 701:
      icon.style.backgroundImage = `url('${_images_fog_svg__WEBPACK_IMPORTED_MODULE_2__}')`;
      break;
    case 711:
      icon.style.backgroundImage = `url('${_images_fog_svg__WEBPACK_IMPORTED_MODULE_2__}')`;
      break;
    case 721:
      icon.style.backgroundImage = `url('${_images_fog_svg__WEBPACK_IMPORTED_MODULE_2__}')`;
      break;
    case 731:
      icon.style.backgroundImage = `url('${_images_fog_svg__WEBPACK_IMPORTED_MODULE_2__}')`;
      break;
    case 741:
      icon.style.backgroundImage = `url('${_images_fog_svg__WEBPACK_IMPORTED_MODULE_2__}')`;
      break;
    case 751:
      icon.style.backgroundImage = `url('${_images_weather_dust_svg__WEBPACK_IMPORTED_MODULE_8__}')`;
      break;
    case 761:
      icon.style.backgroundImage = `url('${_images_weather_dust_svg__WEBPACK_IMPORTED_MODULE_8__}')`;
      break;
    case 762:
      icon.style.backgroundImage = `url('${_images_cloud_alert_svg__WEBPACK_IMPORTED_MODULE_0__}')`;
      break;
    case 771:
      icon.style.backgroundImage = `url('${_images_weather_windy_svg__WEBPACK_IMPORTED_MODULE_9__}')`;
      break;
    case 781:
      icon.style.backgroundImage = `url('${_images_storm_svg__WEBPACK_IMPORTED_MODULE_6__}')`;
      break;
    case 800:
      icon.style.backgroundImage = `url('${_images_sun_svg__WEBPACK_IMPORTED_MODULE_7__}')`;
      break;
    case 801:
      icon.style.backgroundImage = `url('${_images_sun_svg__WEBPACK_IMPORTED_MODULE_7__}')`;
      break;
    case 802:
      icon.style.backgroundImage = `url('${_images_cloud_svg__WEBPACK_IMPORTED_MODULE_1__}')`;
      break;
    case 803:
      icon.style.backgroundImage = `url('${_images_cloud_svg__WEBPACK_IMPORTED_MODULE_1__}')`;
      break;
    default:
      icon.style.backgroundImage = `url('${_images_cloud_svg__WEBPACK_IMPORTED_MODULE_1__}')`;
      break;
  }
};




/***/ }),

/***/ "./src/images/ash.jpg":
/*!****************************!*\
  !*** ./src/images/ash.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d1080961fc82a4f76bca.jpg";

/***/ }),

/***/ "./src/images/clear.jpg":
/*!******************************!*\
  !*** ./src/images/clear.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c43c7536ab2c6ee62ce2.jpg";

/***/ }),

/***/ "./src/images/cloud-alert.svg":
/*!************************************!*\
  !*** ./src/images/cloud-alert.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6303b642a048ca60efd7.svg";

/***/ }),

/***/ "./src/images/cloud.svg":
/*!******************************!*\
  !*** ./src/images/cloud.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4d0d8215675966c9dcdc.svg";

/***/ }),

/***/ "./src/images/clouds.jpg":
/*!*******************************!*\
  !*** ./src/images/clouds.jpg ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f8b47a16d791e93f1a0e.jpg";

/***/ }),

/***/ "./src/images/dust.jpg":
/*!*****************************!*\
  !*** ./src/images/dust.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "224c5d53b8a148a25123.jpg";

/***/ }),

/***/ "./src/images/fog.jpg":
/*!****************************!*\
  !*** ./src/images/fog.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "d9b68d3083c43935d0ee.jpg";

/***/ }),

/***/ "./src/images/fog.svg":
/*!****************************!*\
  !*** ./src/images/fog.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "911b3b6e9c527aa8094a.svg";

/***/ }),

/***/ "./src/images/haze.jpg":
/*!*****************************!*\
  !*** ./src/images/haze.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c29b489de54ff5f1eab2.jpg";

/***/ }),

/***/ "./src/images/lclouds.jpg":
/*!********************************!*\
  !*** ./src/images/lclouds.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "952ca4ff909ff3c73495.jpg";

/***/ }),

/***/ "./src/images/rain.jpg":
/*!*****************************!*\
  !*** ./src/images/rain.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cdf3d0a4534e488c5777.jpg";

/***/ }),

/***/ "./src/images/rain.svg":
/*!*****************************!*\
  !*** ./src/images/rain.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "105e4d8334493ba05685.svg";

/***/ }),

/***/ "./src/images/sleet.svg":
/*!******************************!*\
  !*** ./src/images/sleet.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "83197239ba8848852d30.svg";

/***/ }),

/***/ "./src/images/smoke.jpg":
/*!******************************!*\
  !*** ./src/images/smoke.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "97aeaaa7a9d665462b56.jpg";

/***/ }),

/***/ "./src/images/snow.jpg":
/*!*****************************!*\
  !*** ./src/images/snow.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "feba88b68d4fad410622.jpg";

/***/ }),

/***/ "./src/images/snow.svg":
/*!*****************************!*\
  !*** ./src/images/snow.svg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e44f98c8769e46140bc3.svg";

/***/ }),

/***/ "./src/images/storm.jpg":
/*!******************************!*\
  !*** ./src/images/storm.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4a5a55c8dad07a48d02e.jpg";

/***/ }),

/***/ "./src/images/storm.svg":
/*!******************************!*\
  !*** ./src/images/storm.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "39455fbcb9cf0e39d183.svg";

/***/ }),

/***/ "./src/images/sun.svg":
/*!****************************!*\
  !*** ./src/images/sun.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "83fa0c9fe1ff51982b36.svg";

/***/ }),

/***/ "./src/images/weather-dust.svg":
/*!*************************************!*\
  !*** ./src/images/weather-dust.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "670f6048978688ddf67b.svg";

/***/ }),

/***/ "./src/images/weather-windy.svg":
/*!**************************************!*\
  !*** ./src/images/weather-windy.svg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9a5e68987c5e27b759b6.svg";

/***/ }),

/***/ "./src/images/wind.jpg":
/*!*****************************!*\
  !*** ./src/images/wind.jpg ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6d24f0da59edaad14e54.jpg";

/***/ })

/******/ 	});
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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./interface */ "./src/interface.js");
/* import { test } from "./app"; */



/* const runTest = async () => {
  const result = await test();
  console.log("result is", result);
};

runTest(); */
(0,_interface__WEBPACK_IMPORTED_MODULE_1__.buildInterface)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25PZ0M7QUFDckI7QUFDYTtBQUNaO0FBQ2dCO0FBQ047QUFDSTtBQU83Qjs7QUFFdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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aEQ7QUFDQTtBQUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsNkNBQUksQ0FBQztBQUNoRDtBQUNBO0FBQ0EsMkNBQTJDLDZDQUFJLENBQUM7QUFDaEQ7QUFDQTtBQUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsNkNBQUksQ0FBQztBQUNoRDtBQUNBO0FBQ0EsMkNBQTJDLDZDQUFJLENBQUM7QUFDaEQ7QUFDQTtBQUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsNkNBQUksQ0FBQztBQUNoRDtBQUNBO0FBQ0EsMkNBQTJDLDZDQUFJLENBQUM7QUFDaEQ7QUFDQTtBQUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsNkNBQUksQ0FBQztBQUNoRDtBQUNBO0FBQ0EsMkNBQTJDLDZDQUFJLENBQUM7QUFDaEQ7QUFDQTtBQUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsNkNBQUksQ0FBQztBQUNoRDtBQUNBO0FBQ0EsMkNBQTJDLDZDQUFJLENBQUM7QUFDaEQ7QUFDQTtBQUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsOENBQUssQ0FBQztBQUNqRDtBQUNBO0FBQ0EsMkNBQTJDLDhDQUFLLENBQUM7QUFDakQ7QUFDQTtBQUNBLDJDQUEyQyw4Q0FBSyxDQUFDO0FBQ2pEO0FBQ0E7QUFDQSwyQ0FBMkMsOENBQUssQ0FBQztBQUNqRDtBQUNBO0FBQ0EsMkNBQTJDLDhDQUFLLENBQUM7QUFDakQ7QUFDQTtBQUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsNkNBQUksQ0FBQztBQUNoRDtBQUNBO0FBQ0EsMkNBQTJDLDZDQUFJLENBQUM7QUFDaEQ7QUFDQTtBQUNBLDJDQUEyQyw0Q0FBRyxDQUFDO0FBQy9DO0FBQ0E7QUFDQSwyQ0FBMkMsNENBQUcsQ0FBQztBQUMvQztBQUNBO0FBQ0EsMkNBQTJDLDRDQUFHLENBQUM7QUFDL0M7QUFDQTtBQUNBLDJDQUEyQyw0Q0FBRyxDQUFDO0FBQy9DO0FBQ0E7QUFDQSwyQ0FBMkMsNENBQUcsQ0FBQztBQUMvQztBQUNBO0FBQ0EsMkNBQTJDLHFEQUFJLENBQUM7QUFDaEQ7QUFDQTtBQUNBLDJDQUEyQyxxREFBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsb0RBQVUsQ0FBQztBQUN0RDtBQUNBO0FBQ0EsMkNBQTJDLHNEQUFJLENBQUM7QUFDaEQ7QUFDQTtBQUNBLDJDQUEyQyw4Q0FBSyxDQUFDO0FBQ2pEO0FBQ0E7QUFDQSwyQ0FBMkMsNENBQUcsQ0FBQztBQUMvQztBQUNBO0FBQ0EsMkNBQTJDLDRDQUFHLENBQUM7QUFDL0M7QUFDQTtBQUNBLDJDQUEyQyw4Q0FBSyxDQUFDO0FBQ2pEO0FBQ0E7QUFDQSwyQ0FBMkMsOENBQUssQ0FBQztBQUNqRDtBQUNBO0FBQ0EsMkNBQTJDLDhDQUFLLENBQUM7QUFDakQ7QUFDQTtBQUNBOztBQUUyQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDcEwzQjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBQSxZQUFZLE9BQU8sY0FBYztBQUNaO0FBQ3dCOztBQUU3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsMERBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXBpa2V5LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY29tcG9uZW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2NvbnZlcnNpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3JzLm1pbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Rpc3BsYXlPYmplY3RzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZHJhd0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9mb3JlY2FzdENhcmRzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZ2V0RGVzY3JpcHRpb24uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9pbnRlcmZhY2UuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9vYnRhaW5XZWF0aGVyLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2V0QmFja2dyb3VuZC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3NldEZvcmVjYXN0SWNvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogUkVTRVQgU1RZTEVTICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJyaXdlYXRoZXJcXFwiLCBzZXJpZjtcXG59XFxuXFxuLyogU1RZTEVTICovXFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuODUpO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAzMnB4IDAgMzJweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgLyogaGVpZ2h0OiAxdmg7ICovXFxufVxcblxcbi53ZWF0aGVyLWNhcmQge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnN1bW1hcnksXFxuLmRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuODUpO1xcbiAgcGFkZGluZzogMjhweCAwIDQycHggMDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDc0cHggYXV0byAyNHB4IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICBwYWRkaW5nOiAxNHB4IDAgMjFweCAwO1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG59XFxuXFxuLnN1bW1hcnkgPiBwOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC1zaXplOiAxLjlyZW07XFxufVxcblxcbi5zdW1tYXJ5ID4gcDpsYXN0LW9mLXR5cGUge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi50ZW1wLWNvbnRhaW5lcixcXG4uaGlnaC1jb250YWluZXIsXFxuLmxvdy1jb250YWluZXIsXFxuLmZlZWxzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4udGVtcC1jb250YWluZXIgPiBwIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5kZXRhaWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcbn1cXG5cXG4uZGV0YWlsLWNvbnRhaW5lciA+IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmRldGFpbC1jb250YWluZXIgPiBwOm50aC1vZi10eXBlKDIpIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnRlbXAtZGV0YWlscy1jb250YWluZXIgPiAqIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRlbXAtZGV0YWlscy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4udG9nZ2xlLXVuaXRzIHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MywgNzMsIDczLCAwLjg1KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC44NSk7XFxufVxcblxcbi53aW5kLXNwZWVkLXVuaXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc3NCkgd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuODUpO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MywgNzMsIDczLCAwLjg1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3QtaWNvbiB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDk1JSk7XFxufVxcblxcbi5mb3JlY2FzdC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDIycHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUJBQWlCOztBQUVqQjs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7QUFDQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBOzs7O0VBSUUsYUFBYTtBQUNmO0FBQ0E7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsd0NBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7RUFJRSxhQUFhO0VBQ2IsU0FBUztFQUNULHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLDhCQUE4QjtFQUM5QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsZUFBZTtFQUNmLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsU0FBUztFQUNULG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixRQUFRO0VBQ1IsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLG1CQUFtQjtFQUNuQixnREFBZ0Q7RUFDaEQsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHdDQUF3QztFQUN4QyxtQkFBbUI7RUFDbkIsYUFBYTtBQUNmOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIFJFU0VUIFNUWUxFUyAqL1xcblxcbiosXFxuKjo6YmVmb3JlLFxcbio6OmFmdGVyIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbioge1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5odG1sLFxcbmJvZHkge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXG59XFxuaW1nLFxcbnBpY3R1cmUsXFxudmlkZW8sXFxuY2FudmFzLFxcbnN2ZyB7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuaW5wdXQsXFxuYnV0dG9uLFxcbnRleHRhcmVhLFxcbnNlbGVjdCB7XFxuICBmb250OiBpbmhlcml0O1xcbn1cXG5wLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2IHtcXG4gIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XFxufVxcbiNyb290LFxcbiNfX25leHQge1xcbiAgaXNvbGF0aW9uOiBpc29sYXRlO1xcbn1cXG5cXG4qIHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiTWVycml3ZWF0aGVyXFxcIiwgc2VyaWY7XFxufVxcblxcbi8qIFNUWUxFUyAqL1xcblxcbi5pbnB1dC1jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MywgNzMsIDczLCAwLjg1KTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIG1hcmdpbjogMzJweCAwIDMycHggMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgbWFyZ2luOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIC8qIGhlaWdodDogMXZoOyAqL1xcbn1cXG5cXG4ud2VhdGhlci1jYXJkIHtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5zdW1tYXJ5LFxcbi5kZXRhaWxzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MywgNzMsIDczLCAwLjg1KTtcXG4gIHBhZGRpbmc6IDI4cHggMCA0MnB4IDA7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luOiA3NHB4IGF1dG8gMjRweCBhdXRvO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmRldGFpbHMge1xcbiAgcGFkZGluZzogMTRweCAwIDIxcHggMDtcXG4gIG1hcmdpbi10b3A6IDI0cHg7XFxufVxcblxcbi5zdW1tYXJ5ID4gcDpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtc2l6ZTogMS45cmVtO1xcbn1cXG5cXG4uc3VtbWFyeSA+IHA6bGFzdC1vZi10eXBlIHtcXG4gIGZvbnQtc2l6ZTogMS42cmVtO1xcbn1cXG5cXG4udGVtcC1jb250YWluZXIsXFxuLmhpZ2gtY29udGFpbmVyLFxcbi5sb3ctY29udGFpbmVyLFxcbi5mZWVscy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMTBweDtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcXG59XFxuXFxuLnRlbXAtY29udGFpbmVyID4gcCB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4uZGV0YWlsLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBwYWRkaW5nOiAwcHggMjBweCAwcHggMjBweDtcXG59XFxuXFxuLmRldGFpbC1jb250YWluZXIgPiBwOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5kZXRhaWwtY29udGFpbmVyID4gcDpudGgtb2YtdHlwZSgyKSB7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi50ZW1wLWRldGFpbHMtY29udGFpbmVyID4gKiB7XFxuICBmb250LXNpemU6IDIwcHg7XFxufVxcblxcbi50ZW1wLWRldGFpbHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDJweDtcXG59XFxuXFxuLnRvZ2dsZS11bml0cyB7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC44NSk7XFxuICBmb250LXNpemU6IDEycHg7XFxuICBwYWRkaW5nOiA4cHg7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGJvcmRlcjogMDtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dCB7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIGNvbG9yOiBibGFjaztcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4ubG9jYXRpb24taW5wdXQ6OnBsYWNlaG9sZGVyIHtcXG4gIGNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuODUpO1xcbn1cXG5cXG4ud2luZC1zcGVlZC11bml0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAzcHg7XFxuICBmb250LXNpemU6IDE4cHg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmZvcmVjYXN0LWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICBzY3JvbGxiYXItY29sb3I6IHJnYmEoMCwgMCwgMCwgMC43NzQpIHdoaXRlc21va2U7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MywgNzMsIDczLCAwLjg1KTtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmZvcmVjYXN0IHtcXG4gIG1hcmdpbi1yaWdodDogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC44NSk7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgcGFkZGluZzogMjBweDtcXG59XFxuXFxuLmZvcmVjYXN0LWljb24ge1xcbiAgaGVpZ2h0OiA1MHB4O1xcbiAgd2lkdGg6IDUwcHg7XFxuICBmaWx0ZXI6IGludmVydCg5NSUpO1xcbn1cXG5cXG4uZm9yZWNhc3QtZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAyMnB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFwaUtleSA9IFwiZTU2NjQxNDQ2YWQzYzc2MTA0MDNlM2MxN2Q4Y2U4ODZcIjtcblxuZXhwb3J0IHsgYXBpS2V5IH07XG4iLCJpbXBvcnQgeyBvYnRhaW5XZWF0aGVyIH0gZnJvbSBcIi4vb2J0YWluV2VhdGhlclwiO1xuaW1wb3J0IHsgY29udmVydEZyb21LZWx2aW4sIGNvbnZlcnRUaW1lc0Zyb21Vbml4IH0gZnJvbSBcIi4vY29udmVyc2lvbnNcIjtcbmltcG9ydCBjcnNNaW4gZnJvbSBcIi4vY3JzLm1pblwiO1xuXG5jb25zdCBjb252ZXJ0V2luZCA9IChkZWcpID0+IHtcbiAgLy8gVGFrZXMgd2luZCBkaXJlY3Rpb24gYXMgZGVncmVlcyBhbmQgcmV0dXJucyBhIGh1bWFuLXJlYWRhYmxlIHN0cmluZ1xuICBsZXQgZGlyZWN0aW9uO1xuICBsZXQgaW5kZXg7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgZGVnID49IDMzNy41IHx8IGRlZyA8IDIyLjU6XG4gICAgICBkaXJlY3Rpb24gPSBcIk5vcnRoXCI7XG4gICAgICBpbmRleCA9IDA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA8IDY3LjU6XG4gICAgICBkaXJlY3Rpb24gPSBcIk5vcnRoLUVhc3RcIjtcbiAgICAgIGluZGV4ID0gMTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnIDwgMTEyLjU6XG4gICAgICBkaXJlY3Rpb24gPSBcIkVhc3RcIjtcbiAgICAgIGluZGV4ID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnIDwgMTU3LjU6XG4gICAgICBkaXJlY3Rpb24gPSBcIlNvdXRoLUVhc3RcIjtcbiAgICAgIGluZGV4ID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnIDwgMjAyLjU6XG4gICAgICBkaXJlY3Rpb24gPSBcIlNvdXRoXCI7XG4gICAgICBpbmRleCA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA8IDI0Ny41OlxuICAgICAgZGlyZWN0aW9uID0gXCJTb3V0aC1XZXN0XCI7XG4gICAgICBpbmRleCA9IDU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA8IDI5Mi41OlxuICAgICAgZGlyZWN0aW9uID0gXCJXZXN0XCI7XG4gICAgICBpbmRleCA9IDY7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZGlyZWN0aW9uID0gXCJOb3J0aC1XZXN0XCI7XG4gIH1cbiAgcmV0dXJuIFtkaXJlY3Rpb24sIGluZGV4XTtcbn07XG5cbmNvbnN0IHdlYXRoZXJGYWN0b3J5ID0gKHdlYXRoZXIpID0+IHtcbiAgLy8gVGFrZXMgdGhlIG9iamVjdCByZWNlaXZlZCBmcm9tIE9wZW4gV2VhdGhlcidzIEFQSSBhbmQgcmV0dXJucyBhIHdlYXRoZXIgb2JqZWN0IGNvbnRhaW5pbmdcbiAgLy8gb25seSB0aGUgd2VhdGhlciBkYXRhIHdlIHdpbGwgdXNlIGluIHRoaXMgYXBwXG4gIGNvbnN0IHBsYWNlTmFtZSA9IHdlYXRoZXIubmFtZTtcbiAgY29uc3QgeyBjb3VudHJ5LCBzdW5yaXNlLCBzdW5zZXQgfSA9IHdlYXRoZXIuc3lzO1xuICBjb25zdCBjbG91ZHMgPSB3ZWF0aGVyLmNsb3Vkcy5hbGw7XG4gIGNvbnN0IHsgaHVtaWRpdHksIHByZXNzdXJlIH0gPSB3ZWF0aGVyLm1haW47XG4gIGNvbnN0IHsgaWQgfSA9IHdlYXRoZXIud2VhdGhlclswXTtcbiAgY29uc3QgeyBkdCwgZm9yZWNhc3QgfSA9IHdlYXRoZXI7XG4gIGNvbnN0IGZlZWxzTGlrZSA9IGNvbnZlcnRGcm9tS2VsdmluKHdlYXRoZXIubWFpbltcImZlZWxzX2xpa2VcIl0pO1xuICBjb25zdCB0ZW1wTWluID0gY29udmVydEZyb21LZWx2aW4od2VhdGhlci5tYWluW1widGVtcF9taW5cIl0pO1xuICBjb25zdCB0ZW1wTWF4ID0gY29udmVydEZyb21LZWx2aW4od2VhdGhlci5tYWluW1widGVtcF9tYXhcIl0pO1xuICBjb25zdCBhaXJUZW1wID0gY29udmVydEZyb21LZWx2aW4od2VhdGhlci5tYWluW1widGVtcFwiXSk7XG4gIGNvbnN0IG9mZnNldCA9IHdlYXRoZXIudGltZXpvbmU7XG4gIGNvbnN0IHN1bnJpc2VUaW1lID0gY29udmVydFRpbWVzRnJvbVVuaXgoc3VucmlzZSwgb2Zmc2V0KTtcbiAgY29uc3Qgc3Vuc2V0VGltZSA9IGNvbnZlcnRUaW1lc0Zyb21Vbml4KHN1bnNldCwgb2Zmc2V0KTtcbiAgY29uc3QgcmVhZGluZ1RpbWUgPSBjb252ZXJ0VGltZXNGcm9tVW5peChkdCwgb2Zmc2V0KTtcbiAgY29uc3QgeyB2aXNpYmlsaXR5IH0gPSB3ZWF0aGVyO1xuICBjb25zdCB3aW5kQ29udmVydGVkID0gY29udmVydFdpbmQod2VhdGhlci53aW5kLmRlZyk7XG4gIGNvbnN0IHdpbmRTcGVlZGttaCA9IE1hdGgucm91bmQod2VhdGhlci53aW5kLnNwZWVkICogMy42KTtcbiAgY29uc3Qgd2luZCA9IFt3aW5kU3BlZWRrbWgsIHdpbmRDb252ZXJ0ZWRdO1xuICByZXR1cm4ge1xuICAgIHBsYWNlTmFtZSxcbiAgICBjb3VudHJ5LFxuICAgIGNsb3VkcyxcbiAgICBodW1pZGl0eSxcbiAgICBwcmVzc3VyZSxcbiAgICBhaXJUZW1wLFxuICAgIGZlZWxzTGlrZSxcbiAgICB0ZW1wTWF4LFxuICAgIHRlbXBNaW4sXG4gICAgc3VucmlzZVRpbWUsXG4gICAgc3Vuc2V0VGltZSxcbiAgICB2aXNpYmlsaXR5LFxuICAgIHdpbmQsXG4gICAgaWQsXG4gICAgcmVhZGluZ1RpbWUsXG4gICAgZm9yZWNhc3QsXG4gICAgb2Zmc2V0LFxuICB9O1xufTtcblxuY29uc3QgdGVzdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgdGVzdFJlc3BvbnNlID0gYXdhaXQgb2J0YWluV2VhdGhlcihcIkF0bGFudGFcIik7XG4gIGNvbnN0IHRlc3RQcm9jZXNzZWQgPSB3ZWF0aGVyRmFjdG9yeSh0ZXN0UmVzcG9uc2UpO1xuICByZXR1cm4gdGVzdFByb2Nlc3NlZDtcbn07XG5cbmNvbnN0IHByb2Nlc3NJbnB1dCA9IGFzeW5jIChpbnB1dCkgPT4ge1xuICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgb2J0YWluV2VhdGhlcihpbnB1dCk7XG4gIGlmICh0eXBlb2Ygd2VhdGhlciA9PT0gXCJudW1iZXJcIikge1xuICAgIHJldHVybiB3ZWF0aGVyO1xuICB9XG4gIGNvbnN0IHdlYXRoZXJQcm9jZXNzZWQgPSB3ZWF0aGVyRmFjdG9yeSh3ZWF0aGVyKTtcbiAgcmV0dXJuIHdlYXRoZXJQcm9jZXNzZWQ7XG59O1xuXG5leHBvcnQgeyB0ZXN0LCBwcm9jZXNzSW5wdXQgfTtcbiIsImNvbnN0IGNvbXBvbmVudEZhY3RvcnkgPSAoZWxlbWVudCkgPT4ge1xuICBjb25zdCB7XG4gICAgbmFtZSxcbiAgICBub2RlVHlwZSxcbiAgICBwYXJlbnQsXG4gICAgdGV4dCxcbiAgICBpbnB1dFR5cGUsXG4gICAgdmFsdWUsXG4gICAgY2xhc3MxLFxuICAgIGNsYXNzMixcbiAgICBjbGFzczMsXG4gICAgdGFza0lELFxuICAgIHBsYWNlaG9sZGVyLFxuICAgIGRhdGFBdHRyLFxuICAgIGlkLFxuICAgIHNob3J0Y29kZSxcbiAgICBwcmVmZXJyZWQsXG4gIH0gPSBlbGVtZW50O1xuICBjb25zdCBjcmVhdGVET01Ob2RlID0gKCkgPT4ge1xuICAgIGNvbnN0IHBhcmVudE5vZGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHBhcmVudCk7XG4gICAgY29uc3QgbmV3RE9NTm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobm9kZVR5cGUpO1xuICAgIGlmICh0ZXh0KSB7XG4gICAgICBuZXdET01Ob2RlLmlubmVySFRNTCA9IHRleHQ7XG4gICAgfVxuICAgIGlmIChpbnB1dFR5cGUpIHtcbiAgICAgIG5ld0RPTU5vZGUudHlwZSA9IGlucHV0VHlwZTtcbiAgICB9XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBuZXdET01Ob2RlLnZhbHVlID0gdmFsdWU7XG4gICAgfVxuICAgIGlmIChjbGFzczEpIHtcbiAgICAgIG5ld0RPTU5vZGUuY2xhc3NMaXN0LmFkZChjbGFzczEpO1xuICAgIH1cbiAgICBpZiAoY2xhc3MyKSB7XG4gICAgICBuZXdET01Ob2RlLmNsYXNzTGlzdC5hZGQoY2xhc3MyKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzMykge1xuICAgICAgbmV3RE9NTm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzMyk7XG4gICAgfVxuICAgIGlmIChwbGFjZWhvbGRlcikge1xuICAgICAgbmV3RE9NTm9kZS5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgIH1cbiAgICBpZiAodGV4dCkge1xuICAgICAgbmV3RE9NTm9kZS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfVxuICAgIGlmIChkYXRhQXR0cikge1xuICAgICAgbmV3RE9NTm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXJlZ2lvbi1pZFwiLCBcIlVTQVwiKTtcbiAgICB9XG4gICAgaWYgKHNob3J0Y29kZSkge1xuICAgICAgbmV3RE9NTm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIsIFwic2hvcnRjb2RlXCIpO1xuICAgIH1cbiAgICBpZiAoaWQpIHtcbiAgICAgIG5ld0RPTU5vZGUuaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKHByZWZlcnJlZCkge1xuICAgICAgbmV3RE9NTm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByZWZlcnJlZFwiLCBwcmVmZXJyZWQpO1xuICAgICAgbmV3RE9NTm9kZS5zZXRBdHRyaWJ1dGUoXCJkYXRhLXByZWZlcnJlZC1kZWxpbVwiLCBcIi0tLS0tXCIpO1xuICAgIH1cbiAgICBwYXJlbnROb2RlLmFwcGVuZChuZXdET01Ob2RlKTtcbiAgfTtcbiAgY3JlYXRlRE9NTm9kZSgpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBub2RlVHlwZSxcbiAgICBwYXJlbnQsXG4gICAgdGV4dCxcbiAgICBpbnB1dFR5cGUsXG4gICAgdmFsdWUsXG4gICAgY2xhc3MxLFxuICAgIGNsYXNzMixcbiAgICB0YXNrSUQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBjb21wb25lbnRGYWN0b3J5IH07XG4iLCJjb25zdCBjb252ZXJ0VGVtcCA9ICh0ZW1wLCB1bml0KSA9PiB7XG4gIGxldCBuZXdUZW1wO1xuICBpZiAodW5pdCA9PT0gMCkge1xuICAgIG5ld1RlbXAgPSB0ZW1wICogMS44ICsgMzI7XG4gIH0gZWxzZSB7XG4gICAgbmV3VGVtcCA9ICh0ZW1wIC0gMzIpICogMC41NTU2O1xuICB9XG4gIHJldHVybiBuZXdUZW1wO1xufTtcblxuY29uc3Qgcm91bmRUZW1wID0gKHRlbXApID0+IHtcbiAgbGV0IG5ld1RlbXAgPSB0ZW1wO1xuICBuZXdUZW1wID0gTWF0aC5yb3VuZCh0ZW1wICogMTApIC8gMTA7XG4gIHJldHVybiBuZXdUZW1wO1xufTtcblxuY29uc3QgY29udmVydFRpbWUgPSAob2xkVGltZSwgdW5pdCkgPT4ge1xuICBpZiAodW5pdCA9PT0gMCkge1xuICAgIC8vIGkuZS4gaWYgdGltZSBpcyBjdXJyZW50bHkgaW4gQU0vUE0gbm90YXRpb25cbiAgICBjb25zdCBvbGRUaW1lU3BsaXQgPSBvbGRUaW1lLnNwbGl0KFwiIFwiKTtcbiAgICBjb25zdCB0aW1lU3BsaXQgPSBvbGRUaW1lU3BsaXRbMF0uc3BsaXQoXCI6XCIpO1xuICAgIGxldCBuZXdUaW1lO1xuICAgIGlmICh0aW1lU3BsaXRbMF0gPCAxMCAmJiBvbGRUaW1lU3BsaXRbMV0gPT09IFwiQU1cIikge1xuICAgICAgbmV3VGltZSA9IGAwJHt0aW1lU3BsaXRbMF19OiR7dGltZVNwbGl0WzFdfWA7XG4gICAgfVxuICAgIGlmICh0aW1lU3BsaXRbMF0gPj0gMTAgJiYgb2xkVGltZVNwbGl0WzFdID09PSBcIkFNXCIpIHtcbiAgICAgIG5ld1RpbWUgPSBgJHt0aW1lU3BsaXRbMF19OiR7dGltZVNwbGl0WzFdfWA7XG4gICAgfVxuICAgIGlmICh0aW1lU3BsaXRbMF0gPT09IDEyICYmIG9sZFRpbWVTcGxpdFsxXSA9PT0gXCJQTVwiKSB7XG4gICAgICBuZXdUaW1lID0gYDAke3RpbWVTcGxpdFswXX06JHt0aW1lU3BsaXRbMV19YDtcbiAgICB9XG4gICAgaWYgKHRpbWVTcGxpdFswXSA8PSAxMSAmJiBvbGRUaW1lU3BsaXRbMV0gPT09IFwiUE1cIikge1xuICAgICAgbmV3VGltZSA9IGAke051bWJlcih0aW1lU3BsaXRbMF0pICsgMTJ9OiR7dGltZVNwbGl0WzFdfWA7XG4gICAgfVxuICAgIHJldHVybiBuZXdUaW1lO1xuICB9XG4gIC8vIHRpbWUgaXMgaW4gMjRoIG5vdGF0aW9uXG4gIGNvbnN0IG9sZFRpbWVTcGxpdCA9IG9sZFRpbWUuc3BsaXQoXCI6XCIpO1xuICBjb25zdCBjaGFyMSA9IG9sZFRpbWVTcGxpdFswXS5jaGFyQXQoMCk7XG4gIGlmIChOdW1iZXIoY2hhcjEpID09PSAwKSB7XG4gICAgb2xkVGltZVNwbGl0WzBdID0gb2xkVGltZVNwbGl0WzBdLmNoYXJBdCgxKTtcbiAgfVxuICBsZXQgbmV3VGltZTtcbiAgaWYgKG9sZFRpbWVTcGxpdFswXSA8PSAxMSkge1xuICAgIG5ld1RpbWUgPSBgJHtvbGRUaW1lU3BsaXRbMF19OiR7b2xkVGltZVNwbGl0WzFdfSBBTWA7XG4gIH1cbiAgaWYgKG9sZFRpbWVTcGxpdFswXSA9PT0gMTIpIHtcbiAgICBuZXdUaW1lID0gYCR7b2xkVGltZVNwbGl0WzBdfToke29sZFRpbWVTcGxpdFsxXX0gUE1gO1xuICB9XG4gIGlmIChvbGRUaW1lU3BsaXRbMF0gPiAxMikge1xuICAgIG5ld1RpbWUgPSBgJHtvbGRUaW1lU3BsaXRbMF0gLSAxMn06JHtvbGRUaW1lU3BsaXRbMV19IFBNYDtcbiAgfVxuICByZXR1cm4gbmV3VGltZTtcbn07XG5cbmNvbnN0IGNvbnZlcnRUaW1lc0Zyb21Vbml4ID0gKHRpbWUsIG9mZnNldCkgPT4ge1xuICAvLyBUYWtlcyB1bml4IHRpbWUgZnJvbSBPcGVuIFdlYXRoZXIgYW5kIHJldHVybnMgYSBzdHJpbmcgd2l0aCB0aGUgcmVtb3RlXG4gIC8vIHRpbWUgKGkuZS4gdGhlIHBsYWNlIHdlJ3JlIGdldHRpbmcgd2VhdGhlciBmb3IpIGluIGh1bWFuLXJlYWRhYmxlIGZvcm1hdFxuICBjb25zdCB0aW1lT2Zmc2V0ID0gdGltZSArIG9mZnNldDtcbiAgY29uc3QgdGltZUNvbnZlcnRlZCA9IHRpbWVPZmZzZXQgKiAxMDAwO1xuICBjb25zdCBkID0gbmV3IERhdGUodGltZUNvbnZlcnRlZCk7XG4gIGNvbnN0IGRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkKTtcbiAgY29uc3QgcmVnZXggPSAvKFswMV1cXGR8MlswLTNdKTpbMC01XVxcZC87XG4gIGNvbnN0IHRpbWUyNGggPSBkU3RyaW5nLm1hdGNoKHJlZ2V4KVswXTtcbiAgcmV0dXJuIHRpbWUyNGg7XG59O1xuXG5jb25zdCBjb252ZXJ0VGltZXMgPSAodW5pdCkgPT4ge1xuICBjb25zdCB0aW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZVwiKTtcbiAgaWYgKHVuaXQgPT09IDApIHtcbiAgICAvLyBpLmUuIGlmIHRpbWUgaXMgY3VycmVudGx5IGluIEFNL1BNIG5vdGF0aW9uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRpbWVzW2ldLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgbmV3VGltZSA9IGNvbnZlcnRUaW1lKGVsZW1lbnQsIDApO1xuICAgICAgdGltZXNbaV0udGV4dENvbnRlbnQgPSBuZXdUaW1lO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpLmUuIGlmIHRpbWUgaXMgY3VycmVudGx5IGluIDI0aCBub3RhdGlvblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aW1lc1tpXS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IG5ld1RpbWUgPSBjb252ZXJ0VGltZShlbGVtZW50LCAxKTtcbiAgICAgIHRpbWVzW2ldLnRleHRDb250ZW50ID0gbmV3VGltZTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNvbnZlcnRUZW1wcyA9ICh1bml0KSA9PiB7XG4gIGNvbnN0IHRlbXBlcmF0dXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVtcGVyYXR1cmVcIik7XG4gIGlmICh1bml0ID09PSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wZXJhdHVyZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsID0gdGVtcGVyYXR1cmVzW2ldLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgbmV3VGVtcCA9IGNvbnZlcnRUZW1wKGVsLCAwKTtcbiAgICAgIGNvbnN0IG5ld1RlbXBSb3VuZGVkID0gcm91bmRUZW1wKG5ld1RlbXApO1xuICAgICAgdGVtcGVyYXR1cmVzW2ldLnRleHRDb250ZW50ID0gbmV3VGVtcFJvdW5kZWQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcGVyYXR1cmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBlbCA9IHRlbXBlcmF0dXJlc1tpXS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IG5ld1RlbXAgPSBjb252ZXJ0VGVtcChlbCwgMSk7XG4gICAgICBjb25zdCBuZXdUZW1wUm91bmRlZCA9IHJvdW5kVGVtcChuZXdUZW1wKTtcbiAgICAgIHRlbXBlcmF0dXJlc1tpXS50ZXh0Q29udGVudCA9IG5ld1RlbXBSb3VuZGVkO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY29udmVydFdpbmQgPSAodW5pdCkgPT4ge1xuICBjb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kLXNwZWVkXCIpO1xuICBjb25zdCB3aW5kVW5pdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtdW5pdHNcIik7XG4gIGlmICh1bml0ID09PSAwKSB7XG4gICAgd2luZC5kYXRhc2V0LmttaCA9IHdpbmQudGV4dENvbnRlbnQ7XG4gICAgY29uc3Qga21Ub00gPSB3aW5kLnRleHRDb250ZW50ICogMC42MjEzNzE7XG4gICAgd2luZC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoa21Ub00pO1xuICAgIHdpbmRVbml0cy50ZXh0Q29udGVudCA9IFwibXBoXCI7XG4gIH0gZWxzZSB7XG4gICAgd2luZC50ZXh0Q29udGVudCA9IHdpbmQuZGF0YXNldC5rbWg7XG4gICAgd2luZFVuaXRzLnRleHRDb250ZW50ID0gXCJrbS9oXCI7XG4gIH1cbn07XG5cbmNvbnN0IGNvbnZlcnRWaXMgPSAodmFsdWUsIHVuaXQpID0+IHtcbiAgY29uc3QgdmlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXNcIik7XG4gIGlmICh1bml0ID09PSAwKSB7XG4gICAgdmlzLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh2aXMudGV4dENvbnRlbnQgKiAxLjA5MzYxKTtcbiAgfSBlbHNlIHtcbiAgICB2aXMudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHZpcy50ZXh0Q29udGVudCAqIDAuOTE0NCk7XG4gIH1cbn07XG5cbmNvbnN0IGNvbnZlcnRGcm9tS2VsdmluID0gKHRlbXApID0+IHtcbiAgY29uc3QgbmV3VGVtcCA9IHRlbXAgLSAyNzMuMTU7XG4gIGNvbnN0IHRlbXBSb3VuZGVkID0gTWF0aC5yb3VuZChuZXdUZW1wICogMTAwKSAvIDEwMDtcbiAgcmV0dXJuIHRlbXBSb3VuZGVkO1xufTtcblxuZXhwb3J0IHtcbiAgcm91bmRUZW1wLFxuICBjb252ZXJ0VGltZXMsXG4gIGNvbnZlcnRUaW1lLFxuICBjb252ZXJ0VGVtcHMsXG4gIGNvbnZlcnRWaXMsXG4gIGNvbnZlcnRXaW5kLFxuICBjb252ZXJ0RnJvbUtlbHZpbixcbiAgY29udmVydFRpbWVzRnJvbVVuaXgsXG59O1xuIiwiLyohXG4qIGNvdW50cnktcmVnaW9uLXNlbGVjdG9yXG4qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuKiAwLjUuMFxuKiBAYXV0aG9yIEJlbiBLZWVuXG4qIEByZXBvIGh0dHBzOi8vZ2l0aHViLmNvbS9iZW5rZWVuL2NvdW50cnktcmVnaW9uLXNlbGVjdG9yXG4qIEBsaWNlbmNlIE1JVFxuKi9cblxuIWZ1bmN0aW9uKGEsbil7aWYoXCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kKWRlZmluZShbXSxuKTtlbHNlIGlmKFwib2JqZWN0XCI9PXR5cGVvZiBleHBvcnRzKXRyeXttb2R1bGUuZXhwb3J0cz1uKHJlcXVpcmUoKSl9Y2F0Y2goYSl7bW9kdWxlLmV4cG9ydHM9bigpfWVsc2UgYS5jcnM9bigpfSh0aGlzLGZ1bmN0aW9uKCl7XCJ1c2Ugc3RyaWN0XCI7dmFyIG09ITAsaD0hMCxsPVtdLHQ9e30scz1bW1wiQWZnaGFuaXN0YW5cIixcIkFGXCIsXCJCYWRha2hzaGFufkJEU3xCYWRnaGlzfkJER3xCYWdobGFufkJHTHxCYWxraH5CQUx8QmFteWFufkJBTXxEYXlrdW5kaX5EQVl8RmFyYWh+RlJBfEZhcnlhYn5GWUJ8R2hhem5pfkdIQXxHaG9yfkdIT3xIZWxtYW5kfkhFTHxIZXJhdH5IRVJ8Sm93emphbn5KT1d8S2FidWx+S0FCfEthbmRhaGFyfktBTnxLYXBpc2F+S0FQfEtob3N0fktIT3xLdW5hcn5LTlJ8S3VuZHV6fktEWnxMYWdobWFufkxBR3xMb2dhcn5MT1d8TWFpZGFuIFdhcmRha35XQVJ8TmFuZ2FyaGFyfk5BTnxOaW1ydXp+TklNfE51cmlzdGFufk5VUnxQYWt0aWF+UElBfFBha3Rpa2F+UEtBfFBhbmpzaGlyflBBTnxQYXJ3YW5+UEFSfFNhbWFuZ2FuflNBTXxTYXItZSBQb2x+U0FSfFRha2hhcn5UQUt8VXJvemdhbn5PUlV8WmFidWx+WkFCXCJdLFtcIsOFbGFuZCBJc2xhbmRzXCIsXCJBWFwiLFwiQnLDpG5kw7Z+QlJ8RWNrZXLDtn5FQ3xGaW5zdHLDtm1+Rk58RsO2Z2zDtn5GR3xHZXRhfkdUfEhhbW1hcmxhbmR+SE18Sm9tYWxhfkpNfEt1bWxpbmdlfktNfEvDtmthcn5LS3xMZW1sYW5kfkxFfEx1bXBhcmxhbmR+TFV8TWFyaWVoYW1ufk1IfFNhbHR2aWt+U1Z8U290dHVuZ2F+U1R8U3VuZH5TRHxWw6VyZMO2flZSXCJdLFtcIkFsYmFuaWFcIixcIkFMXCIsXCJCZXJhdH4wMXxEaWLDq3J+MDl8RHVycsOrc34wMnxFbGJhc2FufjAzfEZpZXJ+MDR8R2ppcm9rYXN0w6tyfjA1fEtvcsOnw6t+MDZ8S3Vrw6tzfjA3fExlemjDq34wOHxTaGtvZMOrcn4xMHxUaXJhbmF+MTF8VmxvcsOrfjEyXCJdLFtcIkFsZ2VyaWFcIixcIkRaXCIsXCJBZHJhcn4wMXxBw69uIERlZmxhfjQ0fEHDr24gVMOpbW91Y2hlbnR+NDZ8QWxnaWVyc34xNnxBbm5hYmF+MjN8QmF0bmF+MDV8QsOpY2hhcn4wOHxCw6lqYcOvYX4wNnxCaXNrcmF+MDd8QmxpZGF+MDl8Qm9yZGogQm91IEFycsOpcmlkan4zNHxCb3XDr3JhfjEwfEJvdW1lcmTDqHN+MzV8Q2hsZWZ+MDJ8Q29uc3RhbnRpbmV+MjV8RGplbGZhfjE3fEVsIEJheWFkaH4zMnxFbCBPdWVkfjM5fEVsIFRhcmZ+MzZ8R2hhcmRhw69hfjQ3fEd1ZWxtYX4yNHxJbGxpeml+MzN8SmlqZWx+MTh8S2hlbmNoZWxhfjQwfExhZ2hvdWF0fjAzfE1hc2NhcmF+Mjl8TcOpZMOpYX4yNnxNaWxhfjQzfE1vc3RhZ2FuZW1+Mjd8TXNpbGF+Mjh8TmHDom1hfjQ1fE9yYW5+MzF8T3VhcmdsYX4zMHxPdW0gZWwgQm91YWdoaX4wNHxSZWxpemFuZX40OHxTYcOvZGF+MjB8U8OpdGlmfjE5fFNpZGkgQmVsIEFiYsOoc34yMnxTa2lrZGF+MjF8U291ayBBaHJhc340MXxUYW1hbmdoYXNzZXR+MTF8VMOpYmVzc2F+MTJ8VGlhcmV0fjE0fFRpbmRvdWZ+Mzd8VGlwYXphfjQyfFRpc3NlbXNpbHR+Mzh8VGl6aSBPdXpvdX4xNXxUbGVtY2VufjEzXCJdLFtcIkFtZXJpY2FuIFNhbW9hXCIsXCJBU1wiLFwiVHV0dWlsYX4wMXxBdW51J3V+MDJ8VGEnxat+MDN8T2Z14oCRT2xvc2VnYX4wNHxSb3NlIEF0b2xsfjIxfFN3YWlucyBJc2xhbmR+MjJcIl0sW1wiQW5kb3JyYVwiLFwiQURcIixcIkFuZG9ycmEgbGEgVmVsbGF+MDd8Q2FuaWxsb34wMnxFbmNhbXB+MDN8RXNjYWxkZXMtRW5nb3JkYW55fjA4fExhIE1hc3NhbmF+MDR8T3JkaW5vfjA1fFNhbnQgSnVsacOgIGRlIEzDsnJpYX4wNlwiXSxbXCJBbmdvbGFcIixcIkFPXCIsXCJCZW5nb35CR098QmVuZ3VlbGF+QkdVfEJpw6l+QklFfENhYmluZGF+Q0FCfEN1YW5kbyBDdWJhbmdvfkNDVXxDdWFuemEgTm9ydGV+Q05PfEN1YW56YSBTdWx+Q1VTfEN1bmVuZX5DTk58SHVhbWJvfkhVQXxIdcOtbGF+SFVJfEx1YW5kYX5MVUF8THVuZGEgTm9ydGV+TE5PfEx1bmRhIFN1bH5MU1V8TWFsYW5qZX5NQUx8TW94aWNvfk1PWHxOYW1pYmV+TkFNfFXDrWdlflVJR3xaYWlyZX5aQUlcIl0sW1wiQW5ndWlsbGFcIixcIkFJXCIsXCJBbmd1aWxsYX4wMXxBbmd1aWxsaXRhIElzbGFuZH4wMnxCbG93aW5nIFJvY2t+MDN8Q292ZSBDYXl+MDR8Q3JvY3VzIENheX4wNXxEZWFkbWFuJ3MgQ2F5fjA2fERvZyBJc2xhbmR+MDd8RWFzdCBDYXl+MDh8TGl0dGxlIElzbGFuZH4wOXxMaXR0bGUgU2NydWIgSXNsYW5kfjEwfE1pZCBDYXl+MTF8Tm9ydGggQ2F5fjEyfFByaWNrbHkgUGVhciBDYXlzfjEzfFJhYmJpdCBJc2xhbmR+MTR8U2FuZHkgSXNsYW5kL1NhbmQgSXNsYW5kfjE1fFNjaWxseSBDYXl+MTZ8U2NydWIgSXNsYW5kfjE3fFNlYWwgSXNsYW5kfjE4fFNvbWJyZXJvL0hhdCBJc2xhbmR+MTl8U291dGggQ2F5fjIwfFNvdXRoIFdhZ2VyIElzbGFuZH4yMXxXZXN0IENheX4yMlwiXSxbXCJBbnRhcmN0aWNhXCIsXCJBUVwiLFwiQW50YXJjdGljYX5BUVwiXSxbXCJBbnRpZ3VhIGFuZCBCYXJidWRhXCIsXCJBR1wiLFwiQW50aWd1YSBJc2xhbmR+MDF8QmFyYnVkYSBJc2xhbmR+MDJ8QmlyZCBJc2xhbmR+MDR8QmlzaG9wIElzbGFuZH4wNXxCbGFrZSBJc2xhbmR+MDZ8Q3J1bXAgSXNsYW5kfjA5fER1bGNpbmEgSXNsYW5kfjEwfEV4Y2hhbmdlIElzbGFuZH4xMXxGaXZlIElzbGFuZHN+MTJ8R3JlYXQgQmlyZCBJc2xhbmR+MTN8R3JlZW4gSXNsYW5kfjE0fEd1aWFuYSBJc2xhbmR+MTV8SGF3ZXMgSXNsYW5kfjE3fEhlbGxzIEdhdGUgSXNsYW5kfjE2fEhlbnJ5IElzbGFuZH4xOHxKb2huc29uIElzbGFuZH4xOXxLaWQgSXNsYW5kfjIwfExvYnN0ZXIgSXNsYW5kfjIyfE1haWRlbiBJc2xhbmR+MjR8TW9vciBJc2xhbmR+MjV8TmFubnkgSXNsYW5kfjI2fFBlbGljYW4gSXNsYW5kfjI3fFByaWNrbHkgUGVhciBJc2xhbmR+Mjh8UmFiYml0IElzbGFuZH4yOXxSZWQgSGVhZCBJc2xhbmR+MzF8UmVkb25kYSBJc2xhbmR+MDN8U2FuZHkgSXNsYW5kfjMyfFNtaXRoIElzbGFuZH4zM3xUaGUgU2lzdGVyc34zNHxWZXJub24gSXNsYW5kfjM1fFdpY2tlZCBXaWxsIElzbGFuZH4zNnxZb3JrIElzbGFuZH4zN1wiXSxbXCJBcmdlbnRpbmFcIixcIkFSXCIsXCJCdWVub3MgQWlyZXN+QnxDYXBpdGFsIEZlZGVyYWx+Q3xDYXRhbWFyY2F+S3xDaGFjb35IfENodWJ1dH5VfEPDs3Jkb2Jhflh8Q29ycmllbnRlc35XfEVudHJlIFLDrW9zfkV8Rm9ybW9zYX5QfEp1anV5fll8TGEgUGFtcGF+THxMYSBSaW9qYX5GfE1lbmRvemF+TXxNaXNpb25lc35OfE5ldXF1w6luflF8UsOtbyBOZWdyb35SfFNhbHRhfkF8U2FuIEp1YW5+SnxTYW4gTHVpc35EfFNhbnRhIENydXp+WnxTYW50YSBGZX5TfFNhbnRpYWdvIGRlbCBFc3Rlcm9+R3xUaWVycmEgZGVsIEZ1ZWdvflZ8VHVjdW3DoW5+VFwiXSxbXCJBcm1lbmlhXCIsXCJBTVwiLFwiQXJhZ2F0c290bn5BR3xBcmFyYXR+QVJ8QXJtYXZpcn5BVnxHZWdoYXJrdW5pa35HUnxLb3RheWt+S1R8TG9yaX5MT3xTaGlyYWt+U0h8U3l1bmlrflNVfFRhdnVzaH5UVnxWYXlvdHMgRHpvcn5WRHxZZXJldmFufkVSXCJdLFtcIkFydWJhXCIsXCJBV1wiLFwiQXJ1YmF+QVdcIl0sW1wiQXVzdHJhbGlhXCIsXCJBVVwiLFwiQXVzdHJhbGlhbiBDYXBpdGFsIFRlcnJpdG9yeX5BQ1R8TmV3IFNvdXRoIFdhbGVzfk5TV3xOb3J0aGVybiBUZXJyaXRvcnl+TlR8UXVlZW5zbGFuZH5RTER8U291dGggQXVzdHJhbGlhflNBfFRhc21hbmlhflRBU3xWaWN0b3JpYX5WSUN8V2VzdGVybiBBdXN0cmFsaWF+V0FcIl0sW1wiQXVzdHJpYVwiLFwiQVRcIixcIkJ1cmdlbmxhbmR+MXxLw6RybnRlbn4yfE5pZWRlcsO2c3RlcnJlaWNofjN8T2JlcsO2c3RlcnJlaWNofjR8U2FsemJ1cmd+NXxTdGVpZXJtYXJrfjZ8VGlyb2x+N3xWb3JhcmxiZXJnfjh8V2llbn45XCJdLFtcIkF6ZXJiYWlqYW5cIixcIkFaXCIsXCJBYsWfZXJvbn5BQlN8QcSfY2FiyZlkaX5BR0N8QcSfZGFtfkFHTXxBxJ9kYcWffkFHU3xBxJ9zdGFmYX5BR0F8QcSfc3V+QUdVfEFzdGFyYX5BU1R8QmFiyZlrfkJBQnxCYWxha8mZbn5CQUx8QsmZcmTJmX5CQVJ8QmV5bMmZcWFufkJFWXxCaWzJmXN1dmFyfkJJTHxDyZlicmF5xLFsfkNBQnxDyZlsaWxhYmFkfkNBTHxDdWxmYX5DVUx8RGHFn2vJmXPJmW5+REFTfEbDvHp1bGl+RlVafEfJmWTJmWLJmXl+R0FEfEdvcmFuYm95fkdPUnxHw7Z5w6dheX5HT1l8R8O2eWfDtmx+R1lHfEhhY8SxcWFidWx+SEFDfMSwbWnFn2xpfklNSXzEsHNtYXnEsWxsxLF+SVNNfEvJmWxiyZljyZlyfktBTHxLx51uZ8edcmxpfktBTnxLw7xyZMmZbWlyfktVUnxMYcOnxLFufkxBQ3xMyZlua8mZcmFufkxBTnxMZXJpa35MRVJ8TWFzYWxsxLF+TUFTfE5lZnTDp2FsYX5ORUZ8T8SfdXp+T0dVfE9yZHViYWR+T1JEfFHJmWLJmWzJmX5RQUJ8UWF4flFBWHxRYXpheH5RQVp8UW9idXN0YW5+UU9CfFF1YmF+UUJBfFF1YmFkbGl+UUJJfFF1c2FyflFVU3xTYWF0bMSxflNBVHxTYWJpcmFiYWR+U0FCfMWeYWJyYW5+U0JOfFPJmWTJmXLJmWt+U0FEfMWeYWhidXp+U0FIfMWeyZlraX5TQUt8U2FseWFuflNBTHzFnmFtYXjEsX5TTUl8xZ7JmW1raXJ+U0tSfFNhbXV4flNNWHzFnsmZcnVyflNBUnxTaXnJmXrJmW5+U0lZfMWedcWfYX5TVVN8VMmZcnTJmXJ+VEFSfFRvdnV6flRPVnxVY2FyflVDQXxYYcOnbWF6flhBQ3xYxLF6xLF+WElafFhvY2FsxLF+WENJfFhvY2F2yZluZH5YVkR8WWFyZMSxbWzEsX5ZQVJ8WWV2bGF4fllFVnxayZluZ2lsYW5+WkFOfFphcWF0YWxhflpBUXxayZlyZGFiflpBUlwiXSxbXCJCYWhhbWFzXCIsXCJCU1wiLFwiQWNrbGlucyBJc2xhbmR+MDF8QmVycnkgSXNsYW5kc34yMnxCaW1pbml+MDJ8QmxhY2sgUG9pbnR+MjN8Q2F0IElzbGFuZH4wM3xDZW50cmFsIEFiYWNvfjI0fENyb29rZWQgSXNsYW5kIGFuZCBMb25nIENheX4yOHxFYXN0IEdyYW5kIEJhaGFtYX4yOXxFeHVtYX4wNHxGcmVlcG9ydH4wNXxGcmVzaCBDcmVla34wNnxHb3Zlcm5vcidzIEhhcmJvdXJ+MDd8R3JlZW4gVHVydGxlIENheX4wOHxIYXJib3VyIElzbGFuZH4wOXxIaWdoIFJvY2t+MTB8SW5hZ3VhfjExfEtlbXBzIEJheX4xMnxMb25nIElzbGFuZH4xM3xNYXJzaCBIYXJib3VyfjE0fE1heWFndWFuYX4xNXxNb29yZeKAmXMgSXNsYW5kfjQwfE5ldyBQcm92aWRlbmNlfjE2fE5pY2hvbGxzdG93biBhbmQgQmVycnkgSXNsYW5kc34xN3xOb3J0aCBBYmFjb340MnxOb3J0aCBBbmRyb3N+NDF8Tm9ydGggRWxldXRoZXJhfjMzfFJhZ2dlZCBJc2xhbmR+MTh8Um9jayBTb3VuZH4xOXxTYW4gU2FsdmFkb3IgYW5kIFJ1bSBDYXl+MjB8U2FuZHkgUG9pbnR+MjF8U291dGggQWJhY29+MzV8U291dGggQW5kcm9zfjM2fFNvdXRoIEVsZXV0aGVyYX4zN3xXZXN0IEdyYW5kIEJhaGFtYX4zOVwiXSxbXCJCYWhyYWluXCIsXCJCSFwiLFwiQWwgSmFuxatixKt5YWh+MTR8QWwgTWFuxIFtYWh+MTN8QWwgTXXhuKlhcnJhcX4xNXxBbCBXdXPFo8OhfjE2fEFzaCBTaGFtxIFsxKt5YWh+MTdcIl0sW1wiQmFuZ2xhZGVzaFwiLFwiQkRcIixcIkJhcmlzYWx+QXxDaGl0dGFnb25nfkJ8RGhha2F+Q3xLaHVsbmF+RHxNeW1lbnNpbmdofk18UmFqc2hhaGl+RXxSYW5ncHVyfkZ8U3lsaGV0fkdcIl0sW1wiQmFyYmFkb3NcIixcIkJCXCIsXCJDaHJpc3QgQ2h1cmNofjAxfFNhaW50IEFuZHJld34wMnxTYWludCBHZW9yZ2V+MDN8U2FpbnQgSmFtZXN+MDR8U2FpbnQgSm9obn4wNXxTYWludCBKb3NlcGh+MDZ8U2FpbnQgTHVjeX4wN3xTYWludCBNaWNoYWVsfjA4fFNhaW50IFBldGVyfjA5fFNhaW50IFBoaWxpcH4xMHxTYWludCBUaG9tYXN+MTFcIl0sW1wiQmVsYXJ1c1wiLFwiQllcIixcIkJyZXN0IHZvYmxhc3R+QlJ8R29yb2QgTWluc2t+SE98SG9taWVsIHZvYmxhc3R+SE98SHJvZG5hIHZvYmxhc3R+SFJ8TWFoaWx5b3cgdm9ibGFzdH5NQXxNaW5zayB2b2JsYXN0fk1JfFZpdHNlYnNrIHZvYmxhc3R+VklcIl0sW1wiQmVsZ2l1bVwiLFwiQkVcIixcIkJydXhlbGxlcy1DYXBpdGFsZX5CUlV8UsOpZ2lvbiBGbGFtYW5kZX5WTEd8UsOpZ2lvbiBXYWxsb25pw6t+V0FMXCJdLFtcIkJlbGl6ZVwiLFwiQlpcIixcIkJlbGl6ZSBEaXN0cmljdH5CWnxDYXlvIERpc3RyaWN0fkNZfENvcm96YWwgRGlzdHJpY3R+Q1pMfE9yYW5nZSBXYWxrIERpc3RyaWN0fk9XfFN0YW5uIENyZWVrIERpc3RyaWN0flNDfFRvbGVkbyBEaXN0cmljdH5UT0xcIl0sW1wiQmVuaW5cIixcIkJKXCIsXCJBbGlib3JpfkFMfEF0YWtvcmF+QUt8QXRsYW50aXF1ZX5BUXxCb3Jnb3V+Qk98Q29sbGluZXMgRGVwYXJ0bWVudH5DT3xEb25nYX5ET3xLb3VmZm9+S098TGl0dG9yYWwgRGVwYXJ0bWVudH5MSXxNb25vIERlcGFydG1lbnR+TU98T3XDqW3DqX5PVXxQbGF0ZWF1flBMfFpvdX5aT1wiXSxbXCJCZXJtdWRhXCIsXCJCTVwiLFwiQ2l0eSBvZiBIYW1pbHRvbn4wM3xEZXZvbnNoaXJlIFBhcmlzaH4wMXxIYW1pbHRvbiBQYXJpc2h+MDJ8UGFnZXQgUGFyaXNofjA0fFBlbWJyb2tlIFBhcmlzaH4wNXxTYW5keXMgUGFyaXNofjA4fFNtaXRoJ3MgUGFyaXNofjA5fFNvdXRoYW1wdG9uIFBhcmlzaH4xMHxTdC4gR2VvcmdlJ3MgUGFyaXNofjA3fFRvd24gb2YgU3QuIEdlb3JnZX4wNnxXYXJ3aWNrIFBhcmlzaH4xMVwiXSxbXCJCaHV0YW5cIixcIkJUXCIsXCJCdW10aGFuZ34zM3xDaGh1a2hhfjEyfERhZ2FuYX4yMnxHYXNhfkdBfEhhYX4xM3xMaHVudHNlfjQ0fE1vbmdhcn40MnxQYXJvfjExfFBlbWFnYXRzaGVsfjQzfFB1bmFraGF+MjN8U2FtZHJ1cCBKb25na2hhcn40NXxTYW10c2V+MTR8U2FycGFuZ34zMXxUaGltcGh1fjE1fFRyYXNoaWdhbmd+NDF8VHJhc2hpeWFuZ3RzZX5UWXxUcm9uZ3NhfjMyfFRzaXJhbmd+MjF8V2FuZ2R1ZSBQaG9kcmFuZ34yNHxaaGVtZ2FuZ34zNFwiXSxbXCJCb2xpdmlhXCIsXCJCT1wiLFwiQmVuaX5CfENodXF1aXNhY2F+SHxDb2NoYWJhbWJhfkN8TGEgUGF6fkx8T3J1cm9+T3xQYW5kb35OfFBvdG9zw61+UHxTYW50YSBDcnV6flN8VGFyaWphflRcIl0sW1wiQm9uYWlyZSwgU2ludCBFdXN0YXRpdXMgYW5kIFNhYmFcIixcIkJRXCIsXCJCb25haXJlfkJPfFNhYmEgSXNhbmR+U0F8U2ludCBFdXN0YXRpdXN+U0VcIl0sW1wiQm9zbmlhIGFuZCBIZXJ6ZWdvdmluYVwiLFwiQkFcIixcIkJyxI1rbyBEaXN0cmlrdH5CUkN8RmVkZXJhY2lqYSBCb3NuZSBpIEhlcmNlZ292aW5lfkJJSHxSZXB1Ymxpa2EgU3Jwc2thflNSUFwiXSxbXCJCb3Rzd2FuYVwiLFwiQldcIixcIkNlbnRyYWx+Q0V8R2hhbnppfkdIfEtnYWxhZ2FkaX5LR3xLZ2F0bGVuZ35LTHxLd2VuZW5nfktXfE5vcnRoIFdlc3R+Tld8Tm9ydGgtRWFzdH5ORXxTb3V0aCBFYXN0flNFfFNvdXRoZXJuflNPXCJdLFtcIkJvdXZldCBJc2xhbmRcIixcIkJWXCIsXCJCb3V2ZXQgSXNsYW5kfkJWXCJdLFtcIkJyYXppbFwiLFwiQlJcIixcIkFjcmV+QUN8QWxhZ29hc35BTHxBbWFww6F+QVB8QW1hem9uYXN+QU18QmFoaWF+QkF8Q2VhcsOhfkNFfERpc3RyaXRvIEZlZGVyYWx+REZ8RXNww61yaXRvIFNhbnRvfkVTfEdvacOhc35HT3xNYXJhbmjDo29+TUF8TWF0byBHcm9zc29+TVR8TWF0byBHcm9zc28gZG8gU3Vsfk1TfE1pbmFzIEdlcmFpc35NR3xQYXLDoX5QQXxQYXJhw61iYX5QQnxQYXJhbsOhflBSfFBlcm5hbWJ1Y29+UEV8UGlhdcOtflBJfFJpbyBkZSBKYW5laXJvflJKfFJpbyBHcmFuZGUgZG8gTm9ydGV+Uk58UmlvIEdyYW5kZSBkbyBTdWx+UlN8Um9uZMO0bmlhflJPfFJvcmFpbWF+UlJ8U2FudGEgQ2F0YXJpbmF+U0N8U8OjbyBQYXVsb35TUHxTZXJnaXBlflNFfFRvY2FudGluc35UT1wiXSxbXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnlcIixcIklPXCIsXCJCcml0aXNoIEluZGlhbiBPY2VhbiBUZXJyaXRvcnl+SU9cIl0sW1wiQnJ1bmVpIERhcnVzc2FsYW1cIixcIkJOXCIsXCJCZWxhaXR+QkV8QnJ1bmVpIE11YXJhfkJNfFRlbWJ1cm9uZ35URXxUdXRvbmd+VFVcIl0sW1wiQnVsZ2FyaWFcIixcIkJHXCIsXCJCbGFnb2V2Z3JhZH4wMXxCdXJnYXN+MDJ8RG9icmljaH4wOHxHYWJyb3ZvfjA3fEphbWJvbH4yOHxLaGFza292b34yNnxLanVzdGVuZGlsfjEwfEt1cmR6aGFsaX4wOXxMb3ZlY2h+MTF8TW9udGFuYX4xMnxQYXphcmR6aGlrfjEzfFBlcm5pa34xNHxQbGV2ZW5+MTV8UGxvdmRpdn4xNnxSYXpncmFkfjE3fFJ1c2V+MTh8U2h1bWVufjI3fFNpbGlzdHJhfjE5fFNsaXZlbn4yMHxTbW9samFufjIxfFNvZmlqYX4yM3xTb2ZpamEtR3JhZH4yMnxTdGFyYSBaYWdvcmF+MjR8VHVyZ292aXNoaGV+MjV8VmFybmF+MDN8VmVsaWtvIFR1cm5vdm9+MDR8VmlkaW5+MDV8VnJhY2F+MDZcIl0sW1wiQnVya2luYSBGYXNvXCIsXCJCRlwiLFwiQmFsw6l+QkFMfEJhbS9MYWtlIEJhbX5CQU18QmFud2EgUHJvdmluY2V+QkFOfEJhesOoZ2F+QkFafEJvdWdvdXJpYmF+QkdSfEJvdWxnb3UgUHJvdmluY2V+QkxHfEJvdWxraWVtZMOpfkJMS3xDb21vw6kvS29tb2V+Q09NfEdhbnpvdXJnb3UgUHJvdmluY2V+R0FOfEduYWduYX5HTkF8R291cm1hIFByb3ZpbmNlfkdPVXxIb3VldH5IT1V8SW9iYX5JT0J8S2FkaW9nb35LQUR8S8OpbsOpZG91Z291fktFTnxLb21vbmRqYXJpfktNRHxLb21waWVuZ2F+S01QfEtvc3NpIFByb3ZpbmNlfktPU3xLb3VscMOpbG9nb35LT1B8S291cml0ZW5nYX5LT1R8S291cnfDqW9nb35LT1d8TMOpcmFiYX5MRVJ8TG9yb3VtfkxPUnxNb3Vob3Vufk1PVXxOYW1lbnRlbmdhfk5BTXxOYW91cmkvTmFob3VyaX5OQU98TmF5YWxhfk5BWXxOb3VtYmllbH5OT1V8T3Vicml0ZW5nYX5PVUJ8T3VkYWxhbn5PVUR8UGFzc29yw6l+UEFTfFBvbml+UE9OfFNhbmd1acOpflNOR3xTYW5tYXRlbmdhflNNVHxTw6lub35TRU58U2lzc2lsaX5TSVN8U291bX5TT018U291cm91flNPUnxUYXBvYX5UQVB8VHVpL1R1eX5UVUl8WWFnaGF+WUFHfFlhdGVuZ2F+WUFUfFppcm9+WklSfFpvbmRvbWF+Wk9OfFpvdW5kd8Opb2dvflpPVVwiXSxbXCJCdXJ1bmRpXCIsXCJCSVwiLFwiQnViYW56YX5CQnxCdWp1bWJ1cmEgTWFpcmllfkJNfEJ1anVtYnVyYSBSdXJhbH5CTHxCdXJ1cml+QlJ8Q2Fua3V6b35DQXxDaWJpdG9rZX5DSXxHaXRlZ2F+R0l8S2FydXppfktSfEtheWFuemF+S1l8S2lydW5kb35LSXxNYWthbWJhfk1BfE11cmFtdnlhfk1VfE11eWluZ2F+TVl8TXdhcm9+TVd8Tmdveml+Tkd8UnV0YW5hflJUfFJ1eWlnaX5SWVwiXSxbXCJDYW1ib2RpYVwiLFwiS0hcIixcIkJhYXQgRGFtYmFuZ34yfEJhbnRlYXkgTWVhbiBDaGV5fjF8S2FtcG9uZyBDaGFhbX4zfEthbXBvbmcgQ2hobmFuZ340fEthbXBvbmcgU3B1ZXV+NXxLYW1wb25nIFRodW1+NnxLYW1wb3R+N3xLYW5kYWFsfjh8S2FvaCBLb25nfjl8S3JhY2hlaH4xMHxLcm9uZyBLYWVifjIzfEtyb25nIFBhaWxpbn4yNHxLcm9uZyBQcmVhaCBTaWhhbm91a34xOHxNb25kb2wgS2lyaX4xMXxPdGRhciBNZWFuIENoZXl+MjJ8UGhub20gUGVuaH4xMnxQb3VzYWF0fjE1fFByZWFoIFZpaGVhcn4xM3xQcmV5IFZlYWVuZ34xNHxSb3RhbmFoIEtpcml+MTZ8U2llbSBSZWFifjE3fFN0dWVuZyBUcmVuZ34xOXxTdmFheSBSaWVuZ34yMHxUYWFrYWV2fjIxfFRib25nIEtobXVtfjI1XCJdLFtcIkNhbWVyb29uXCIsXCJDTVwiLFwiQWRhbWFvdWF+QUR8Q2VudHJlfkNFfEVzdH5FU3xFeHRyw6ptZS1Ob3JkfkVOfExpdHRvcmFsfkxUfE5vcmR+Tk98Tm9yZC1PdWVzdH5OV3xPdWVzdH5PVXxTdWR+U1V8U3VkLU91ZXN0flNXXCJdLFtcIkNhbmFkYVwiLFwiQ0FcIixcIkFsYmVydGF+QUJ8QnJpdGlzaCBDb2x1bWJpYX5CQ3xNYW5pdG9iYX5NQnxOZXcgQnJ1bnN3aWNrfk5CfE5ld2ZvdW5kbGFuZCBhbmQgTGFicmFkb3J+Tkx8Tm9ydGh3ZXN0IFRlcnJpdG9yaWVzfk5UfE5vdmEgU2NvdGlhfk5TfE51bmF2dXR+TlV8T250YXJpb35PTnxQcmluY2UgRWR3YXJkIElzbGFuZH5QRXxRdWViZWN+UUN8U2Fza2F0Y2hld2FuflNLfFl1a29ufllUXCJdLFtcIkNhcGUgVmVyZGVcIixcIkNWXCIsXCJCb2EgVmlzdGF+QlZ8QnJhdmF+QlJ8Q2FsaGV0YSBkZSBTw6NvIE1pZ3VlbH5DU3xNYWlvfk1BfE1vc3RlaXJvc35NT3xQYcO6bH5QQXxQb3J0byBOb3ZvflBOfFByYWlhflBSfFJpYmVpcmEgQnJhdmF+UkJ8UmliZWlyYSBHcmFuZGV+Ukd8U2FsflNMfFNhbnRhIENhdGFyaW5hfkNBfFNhbnRhIENydXp+Q1J8U8OjbyBEb21pbmdvc35TRHxTw6NvIEZpbGlwZX5TRnxTw6NvIE5pY29sYXV+U058U8OjbyBWaWNlbnRlflNWfFRhcnJhZmFsflRBfFRhcnJhZmFsIGRlIFPDo28gTmljb2xhdX5UU1wiXSxbXCJDYXltYW4gSXNsYW5kc1wiLFwiS1lcIixcIkNyZWVrfEVhc3Rlcm58TWlkbGFuZHxTb3V0aCBUb3dufFNwb3QgQmF5fFN0YWtlIEJheXxXZXN0IEVuZHxXZXN0ZXJuXCJdLFtcIkNlbnRyYWwgQWZyaWNhbiBSZXB1YmxpY1wiLFwiQ0ZcIixcIkJhbWluZ3VpLUJhbmdvcmFufkJCfEJhbmd1aX5CR0Z8QmFzc2UtS290dG9+Qkt8SGF1dGUtS290dG9+SEt8SGF1dC1NYm9tb3V+SE18S8OpbW9+S0d8TG9iYXllfkxCfE1hbWLDqXLDqS1LYWTDqcOvfkhTfE1ib21vdX5NQnxOYW5hLUdyZWJpeml+MTB8TmFuYS1NYW1iw6lyw6l+Tk18T21iZWxsYS1NJ1Bva29+TVB8T3Vha2F+VUt8T3VoYW1+QUN8T3VoYW0gUMOpbmTDqX5PUHxTYW5naGEtTWJhw6lyw6l+U0V8VmFrYWdhflZLXCJdLFtcIkNoYWRcIixcIlREXCIsXCJCYWhyIGVsIEdoYXphbH5CR3xCYXRoYX5CQXxCb3Jrb3V+Qk98Q2hhcmktQmFndWlybWl+Q0J8RW5uZWRpLUVzdH5FRXxFbm5lZGktT3Vlc3R+RU98R3XDqXJhfkdSfEhhZGplciBMYW1pc35ITHxLYW5lbX5LQXxMYWN+TEN8TG9nb25lIE9jY2lkZW50YWx+TE98TG9nb25lIE9yaWVudGFsfkxSfE1vbmRvdWx+TUF8TWF5by1Lw6liYmktRXN0fk1FfE1veWVuLUNoYXJpfk1DfE91YWRkYWl+T0R8U2FsYW1hdH5TQXxTaWxhflNJfFRhbmRqaWzDqX5UQXxUaWJlc3RpflRJfFZpbGxlIGRlIE5kamFtZW5hfk5EfFdhZGkgRmlyYX5XRlwiXSxbXCJDaGlsZVwiLFwiQ0xcIixcIkFpc8OpbiBkZWwgR2VuZXJhbCBDYXJsb3MgSWLDocOxZXogZGVsIENhbXBvfkFJfEFudG9mYWdhc3RhfkFOfEFyYXVjYW7DrWF+QVJ8QXJpY2EgeSBQYXJpbmFjb3RhfkFQfEF0YWNhbWF+QVR8QsOtby1Cw61vfkJJfENvcXVpbWJvfkNPfExpYmVydGFkb3IgR2VuZXJhbCBCZXJuYXJkbyBPJ0hpZ2dpbnN+TEl8TG9zIExhZ29zfkxMfExvcyBSw61vc35MUnxNYWdhbGxhbmVzIHkgQW50YXJ0aWNhIENoaWxlbmF+TUF8TWFyZ2EtTWFyZ2F+fE1hdWxlfk1MfFJlZ2nDs24gTWV0cm9wb2xpdGFuYSBkZSBTYW50aWFnb35STXxUYXJhcGFjw6F+VEF8VmFscGFyYcOtc29+VlNcIl0sW1wiQ2hpbmFcIixcIkNOXCIsXCJBbmh1aX4zNHxCZWlqaW5nfjExfENob25ncWluZ341MHxGdWppYW5+MzV8R2Fuc3V+NjJ8R3Vhbmdkb25nfjQ0fEd1YW5neGl+NDV8R3VpemhvdX41MnxIYWluYW5+NDZ8SGViZWl+MTN8SGVpbG9uZ2ppYW5nfjIzfEhlbmFufjQxfEhvbmcgS29uZ345MXxIdWJlaX40MnxIdW5hbn40M3xJbm5lciBNb25nb2xpYX4xNXxKaWFuZ3N1fjMyfEppYW5neGl+MzZ8SmlsaW5+MjJ8TGlhb25pbmd+MjF8TWFjYXV+OTJ8TmluZ3hpYX42NHxRaW5naGFpfjYzfFNoYWFueGl+NjF8U2hhbmRvbmd+Mzd8U2hhbmdoYWl+MzF8U2hhbnhpfjE0fFNpY2h1YW5+NTF8VGlhbmppbn4xMnxUaWJldH41NHxYaW5qaWFuZ342NXxZdW5uYW5+NTN8Wmhlamlhbmd+MzNcIl0sW1wiQ2hyaXN0bWFzIElzbGFuZFwiLFwiQ1hcIixcIkNocmlzdG1hcyBJc2xhbmR+Q1hcIl0sW1wiQ29jb3MgKEtlZWxpbmcpIElzbGFuZHNcIixcIkNDXCIsXCJEaXJlY3Rpb24gSXNsYW5kfkRJfEhvbWUgSXNsYW5kfkhNfEhvcnNidXJnaCBJc2xhbmR+SFJ8Tm9ydGggS2VlbGluZyBJc2xhbmR+Tkt8U291dGggSXNsYW5kflNJfFdlc3QgSXNsYW5kfldJXCJdLFtcIkNvbG9tYmlhXCIsXCJDT1wiLFwiQW1hem9uYXN+QU1BfEFudGlvcXVpYX5BTlR8QXJhdWNhfkFSQXxBcmNoaXBpw6lsYWdvIGRlIFNhbiBBbmRyw6lzflNBUHxBdGzDoW50aWNvfkFUTHxCb2dvdMOhIEQuQy5+REN8Qm9sw612YXJ+Qk9MfEJveWFjw6F+Qk9ZfENhbGRhc35DQUx8Q2FxdWV0w6F+Q0FRfENhc2FuYXJlfkNBU3xDYXVjYX5DQVV8Q2VzYXJ+Q0VTfENob2PDs35DSE98Q8OzcmRvYmF+Q09SfEN1bmRpbmFtYXJjYX5DVU58R3VhaW7DrWF+R1VBfEd1YXZpYXJlfkdVVnxIdWlsYX5IVUl8TGEgR3VhamlyYX5MQUd8TWFnZGFsZW5hfk1BR3xNZXRhfk1FVHxOYXJpw7Fvfk5BUnxOb3J0ZSBkZSBTYW50YW5kZXJ+TlNBfFB1dHVtYXlvflBVVHxRdWluZMOtb35RVUl8UmlzYXJhbGRhflJJU3xTYW50YW5kZXJ+U0FOfFN1Y3JlflNVQ3xUb2xpbWF+VE9MfFZhbGxlIGRlbCBDYXVjYX5WQUN8VmF1cMOpc35WQVV8VmljaGFkYX5WSURcIl0sW1wiQ29tb3Jvc1wiLFwiS01cIixcIkFuZGphesOuZGphfkd8QW5kam91w6JufkF8TW/Du2jDrmzDrn5NXCJdLFtcIkNvbmdvLCBSZXB1YmxpYyBvZiB0aGUgKEJyYXp6YXZpbGxlKVwiLFwiQ0dcIixcIkJvdWVuemF+MTF8QnJhenphdmlsbGV+QlpWfEN1dmV0dGV+OHxDdXZldHRlLU91ZXN0fjE1fEtvdWlsb3V+NXxMw6lrb3Vtb3V+MnxMaWtvdWFsYX43fE5pYXJpfjl8UGxhdGVhdXh+MTR8UG9pbnRlLU5vaXJlfjE2fFBvb2x+MTJ8U2FuZ2hhfjEzXCJdLFtcIkNvbmdvLCB0aGUgRGVtb2NyYXRpYyBSZXB1YmxpYyBvZiB0aGUgKEtpbnNoYXNhKVwiLFwiQ0RcIixcIkJhbmR1bmR1fkJOfEJhcy1Db25nb35CQ3zDiXF1YXRldXJ+RVF8S2FzYcOvLU9jY2lkZW50YWx+S0V8S2FzYcOvLU9yaWVudGFsfktXfEthdGFuZ2F+S0F8S2luc2hhc2F+S058TWFuaWVtYX5NQXxOb3JkLUtpdnV+Tkt8T3JpZW50YWxlfk9SfFN1ZC1LaXZ1flNLXCJdLFtcIkNvb2sgSXNsYW5kc1wiLFwiQ0tcIixcIkFpdHV0YWtpfEF0aXV8QXZhcnVhfE1hbmdhaWF8TWFuaWhpa2l8TWEndWtlfE1pdGlhcm98TmFzc2F1fFBhbG1lcnN0b258UGVucmh5bnxQdWthcHVrYXxSYWthaGFuZ2FcIl0sW1wiQ29zdGEgUmljYVwiLFwiQ1JcIixcIkFsYWp1ZWxhfjJ8Q2FydGFnb34zfEd1YW5hY2FzdGV+NXxIZXJlZGlhfjR8TGltw7Nufjd8UHVudGFyZW5hc342fFNhbiBKb3PDqX4xXCJdLFtcIkPDtHRlIGQnSXZvaXJlLCBSZXB1YmxpYyBvZlwiLFwiQ0lcIixcIkFnbsOpYnl+MTZ8QmFmaW5nfjE3fEJhcy1TYXNzYW5kcmF+MDl8RGVuZ3XDqWzDqX4xMHxEaXgtSHVpdCBNb250YWduZXN+MDZ8RnJvbWFnZXJ+MTh8SGF1dC1TYXNzYW5kcmF+MDJ8TGFjc34wN3xMYWd1bmVzfjAxfE1hcmFob3XDqX4xMnxNb3llbi1DYXZhbGx5fjE5fE1veWVuLUNvbW/DqX4wNXxOJ3ppLUNvbW/DqX4xMXxTYXZhbmVzfjAzfFN1ZC1CYW5kYW1hfjE1fFN1ZC1Db21vw6l+MTN8VmFsbMOpZSBkdSBCYW5kYW1hfjA0fFdvcm9kb3Vnb3V+MTR8WmFuemFufjA4XCJdLFtcIkNyb2F0aWFcIixcIkhSXCIsXCJCamVsb3ZhcnNrby1CaWxvZ29yc2thIMW9dXBhbmlqYX4wN3xCcm9kc2tvLVBvc2F2c2thIMW9dXBhbmlqYX4xMnxEdWJyb3ZhxI1rby1OZXJldHZhbnNrYSDFvXVwYW5pamF+MTl8R3JhZCBaYWdyZWJ+MjF8SXN0YXJza2Egxb11cGFuaWphfjE4fEthcmxvdmHEjWthIMW9dXBhbmlqYX4wNHxLb3ByaXZuacSNa28tS3JpemV2YcSNa2Egxb11cGFuaWphfjA2fEtyYXBpbnNrby1aYWdvcnNrYSDFvXVwYW5pamF+MDJ8TGnEjWtvLVNlbmpza2Egxb11cGFuaWphfjA5fE1lxJFpbXVyc2thIMW9dXBhbmlqYX4yMHxPc2plxI1rby1CYXJhbmpza2Egxb11cGFuaWphfjE0fFBvxb5lxaFrby1TbGF2b25za2Egxb11cGFuaWphfjExfFByaW1vcnNrby1Hb3JhbnNrYSDFvXVwYW5pamF+MDh8U2lzYcSNa28tTW9zbGF2YcSNa2Egxb11cGFuaWphfjAzfFNwbGl0c2tvLURhbG1hdGluc2thIMW9dXBhbmlqYX4xN3xTaWJlbnNrby1Lbmluc2thIMW9dXBhbmlqYX4xNXxWYXJhxb5kaW5za2Egxb11cGFuaWphfjA1fFZpcm92aXRpxI1rby1Qb2RyYXZza2Egxb11cGFuaWphfjEwfFZ1a292YXJza28tU3JpamVtc2thIMW9dXBhbmlqYX4xNnxaYWRhcnNrYSDFvXVwYW5pamF+MTN8WmFncmViYWNrYSBadXBhbmlqYX4wMVwiXSxbXCJDdWJhXCIsXCJDVVwiLFwiQXJ0ZW1pc2F+MTV8Q2FtYWfDvGV5fjA5fENpZWdvIGRlIMOBdmlsYX4wOHxDaWVuZnVlZ29zfjA2fEdyYW5tYX4xMnxHdWFudMOhbmFtb34xNHxIb2xndcOtbn4xMXxJc2xhIGRlIGxhIEp1dmVudHVkfjk5fExhIEhhYmFuYX4wM3xMYXMgVHVuYXN+MTB8TWF0YW56YXN+MDR8TWF5YWJlcXVlfjE2fFBpbmFyIGRlbCBSw61vfjAxfFNhbmN0aSBTcMOtcml0dXN+MDd8U2FudGlhZ28gZGUgQ3ViYX4xM3xWaWxsYSBDbGFyYX4wNVwiXSxbXCJDdXJhw6dhb1wiLFwiQ1dcIixcIkN1cmHDp2FvfkNXXCJdLFtcIkN5cHJ1c1wiLFwiQ1lcIixcIkFtbW9jaG9zdG9zfjA0fEtlcnluZWlhfjA1fExhcm5ha2F+MDN8TGVma29zaWF+MDF8TGVtZXNvc34wMnxQYWZvc34wNVwiXSxbXCJDemVjaCBSZXB1YmxpY1wiLFwiQ1pcIixcIkhsYXZuw60gbcSbc3RvIFByYWhhflBSfEppaG/EjWVza8O9IGtyYWp+SkN8Smlob21vcmF2c2vDvSBrcmFqfkpNfEthcmxvdmFyc2vDvSBrcmFqfktBfEtyw6Fsb3bDqWhyYWRlY2vDvSBrcmFqfktSfExpYmVyZWNrw70ga3Jhan5MSXxNb3JhdnNrb3NsZXpza8O9IGtyYWp+TU98T2xvbW91Y2vDvSBrcmFqfk9MfFBhcmR1Ymlja8O9IGtyYWp+UEF8UGx6ZcWIc2vDvSBrcmFqflBMfFN0xZllZG/EjWVza8O9IGtyYWp+U1R8w5pzdGVja8O9IGtyYWp+VVN8Vnlzb8SNaW5hflZZfFpsw61uc2vDvSBrcmFqflpMXCJdLFtcIkRlbm1hcmtcIixcIkRLXCIsXCJIb3ZlZHN0YWRlbn44NHxLdWphbGxlcX5HTC1LVXxNaWR0anlsbGFuZH44MnxOb3JkZXLDuGVybmV+Rk8tMDF8Tm9yZGp5bGxhbmR+ODF8w5hzdGVyw7h+Rk8tMDZ8UWFhc3VpdHN1cH5HTC1RQXxRZXFxYXRhfkdMLVFFfFNhbmTDuH5GTy0wMnxTZXJtZXJzb29xfkdMLVNNfFNqw6ZsbGFuZH44NXxTdHLDuG3DuH5GTy0wM3xTdWRlcsO4fkZPLTA0fFN5ZGRhbm1hcmt+ODN8VsOlZ8O4fkZPLTA1XCJdLFtcIkRqaWJvdXRpXCIsXCJESlwiLFwiQWxpIFNhYmllaH5BU3xBcnRhfkFSfERpa2hpbH5ESXxPYm9ja35PQnxUYWRqb3VyYWh+VEFcIl0sW1wiRG9taW5pY2FcIixcIkRNXCIsXCJTYWludCBBbmRyZXcgUGFyaXNofjAyfFNhaW50IERhdmlkIFBhcmlzaH4wM3xTYWludCBHZW9yZ2UgUGFyaXNofjA0fFNhaW50IEpvaG4gUGFyaXNofjA1fFNhaW50IEpvc2VwaCBQYXJpc2h+MDZ8U2FpbnQgTHVrZSBQYXJpc2h+MDd8U2FpbnQgTWFyayBQYXJpc2h+MDh8U2FpbnQgUGF0cmljayBQYXJpc2h+MDl8U2FpbnQgUGF1bCBQYXJpc2h+MTB8U2FpbnQgUGV0ZXIgUGFyaXNofjExXCJdLFtcIkRvbWluaWNhbiBSZXB1YmxpY1wiLFwiRE9cIixcIkNpYmFvIENlbnRyYWx+MDJ8RGVsIFZhbGxlfjM3fERpc3RyaXRvIE5hY2lvbmFsfjAxfEVucmlxdWlsbG9+Mzh8Tm9yY2VudHJhbH4wNHxOb3JkZXN0ZX4zNHxOb3JvZXN0ZX4zNHxOb3J0ZX4zNXxWYWxkZXNpYX40MlwiXSxbXCJFY3VhZG9yXCIsXCJFQ1wiLFwiQXp1YXl+QXxCb2zDrXZhcn5CfENhw7Fhcn5GfENhcmNoaX5DfENoaW1ib3Jhem9+SHxDb3RvcGF4aX5YfEVsIE9yb35PfEVzbWVyYWxkYXN+RXxHYWzDoXBhZ29zfld8R3VheWFzfkd8SW1iYWJ1cmF+SXxMb2phfkx8TG9zIFLDrW9zflJ8TWFuYWLDrX5NfE1vcm9uYS1TYW50aWFnb35TfE5hcG9+TnxPcmVsbGFuYX5EfFBhc3RhemF+WXxQaWNoaW5jaGF+UHxTYW50YSBFbGVuYX5TRXxTYW50byBEb21pbmdvIGRlIGxvcyBUc8OhY2hpbGFzflNEfFN1Y3VtYsOtb3N+VXxUdW5ndXJhaHVhflR8WmFtb3JhLUNoaW5jaGlwZX5aXCJdLFtcIkVneXB0XCIsXCJFR1wiLFwiQWxleGFuZHJpYX5BTFh8QXN3YW5+QVNOfEFzeW91dH5BU1R8QmFuaSBTdWVpZn5CTlN8QmVoZWlyYX5CSHxDYWlyb35DfERhcWFobGlhfkRLfER1bWlhdH5EVHxFbCBCYWhyIEVsIEFobWFyfkJBfEVsIElzbWFpbGlhfklTfEVsIFN1ZXp+U1VafEVsIFdhZGkgRWwgR2VkZWVkfldBRHxGYXlvdW1+RllNfEdoYXJiaWF+R0h8R2l6YX5TVVp8SGVsd2FufkhVfEthZnIgRWwgU2hlaWtofktGU3xMdXhvcn5MWHxNYXRyb3Vofk1UfE1lbmlhfk1OfE1lbm9maWF+TU5GfE5vcnRoIFNpbmFpflNJTnxQb3J0IFNhaWR+UFRTfFFhbHViaWF+S0J8UWVuYX5LTnxTaGFycWlhflNIUnxTaXh0aCBvZiBPY3RvYmVyflNVfFNvaGFnflNIR3xTb3V0aCBTaW5haX5KU1wiXSxbXCJFbCBTYWx2YWRvclwiLFwiU1ZcIixcIkFodWFjaGFww6FufkFIfENhYmHDsWFzfkNBfEN1c2NhdGzDoW5+Q1V8Q2hhbGF0ZW5hbmdvfkNIfExhIExpYmVydGFkfkxJfExhIFBhen5QQXxMYSBVbmnDs25+VU58TW9yYXrDoW5+TU98U2FuIE1pZ3VlbH5TTXxTYW4gU2FsdmFkb3J+U1N8U2FudGEgQW5hflNBfFNhbiBWaWNlbnRlflNWfFNvbnNvbmF0ZX5TT3xVc3VsdXTDoW5+VVNcIl0sW1wiRXF1YXRvcmlhbCBHdWluZWFcIixcIkdRXCIsXCJBbm5vYsOzbn5BTnxCaW9rbyBOb3J0ZX5CTnxCaW9rbyBTdXJ+QlN8Q2VudHJvIFN1cn5DU3xLacOpLU50ZW1+S058TGl0b3JhbH5MSXxXZWxlLU56YXN+V05cIl0sW1wiRXJpdHJlYVwiLFwiRVJcIixcIkFuc2ViYX5BTnxEZWJ1Yn5EVXxEZWJ1Yi1LZWloLUJhaHJpfkRLfEdhc2gtQmFya2F+R0J8TWFla2Vsfk1BfFNlbWllbi1LZWloLUJhaHJpflNLXCJdLFtcIkVzdG9uaWFcIixcIkVFXCIsXCJIYXJqdW1hYSAoVGFsbGlubil+Mzd8SGlpdW1hYSAoS2FyZGxhKX4zOXxJZGEtVmlydW1hYSAoSm9odmkpfjQ0fErDpHJ2YW1hYSAoUGFpZGUpfjQxfErDtWdldmFtYWEgKEpvZ2V2YSl+NDl8TMOkw6RuZW1hYX41N3xMw6TDpG5lLVZpcnVtYWEgKFJha3ZlcmUpfjU5fFDDpHJudW1hYSAoUGFybnUpfjY3fFDDtWx2YW1hYSAoUG9sdmEpfjY1fFJhcGxhbWFhIChSYXBsYSl+NzB8U2FhcmVtYWEgKEt1ZXNzYWFyZSl+NzR8VGFydHVtYWEgKFRhcnR1KX43OHxWYWxnYW1hYSAoVmFsZ2EpfjgyfFZpbGphbmRpbWFhIChWaWxqYW5kaSl+ODR8VsO1cnVtYWEgKFZvcnUpfjg2XCJdLFtcIkV0aGlvcGlhXCIsXCJFVFwiLFwiQWRkaXMgQWJhYmF+QUF8QWZhcn5BRnxBbWhhcmF+QU18QmVuc2hhbmd1bC1HdW1hen5CRXxEaXJlIERhd2F+RER8R2FtYmVsYX5HQXxIYXJhcml+SEF8T3JvbWlhfk9SfFNvbWFsaX5TT3xTb3V0aGVybiBOYXRpb25zIE5hdGlvbmFsaXRpZXMgYW5kIFBlb3BsZSdzIFJlZ2lvbn5TTnxUaWdyYXl+VElcIl0sW1wiRmFsa2xhbmQgSXNsYW5kcyAoSXNsYXMgTWFsdmluYXMpXCIsXCJGS1wiLFwiRmFsa2xhbmQgSXNsYW5kcyAoSXNsYXMgTWFsdmluYXMpXCJdLFtcIkZhcm9lIElzbGFuZHNcIixcIkZPXCIsXCJCb3Jkb3l8RXlzdHVyb3l8TXlraW5lc3xTYW5kb3l8U2t1dm95fFN0cmV5bW95fFN1ZHVyb3l8VHZvcm95cml8VmFnYXJcIl0sW1wiRmlqaVwiLFwiRkpcIixcIkJhfjAxfEJ1YX4wMXxDYWthdWRyb3ZlfjAzfEthZGF2dX4wNHxMYXV+MDV8TG9tYWl2aXRpfjA2fE1hY3VhdGF+MDd8TmFkcm9nYSBhbmQgTmF2b3NhfjA4fE5haXRhc2lyaX4wOXxOYW1vc2l+MTB8UmF+MDExfFJld2F+MTJ8Um90dW1hflJ8U2VydWF+MTJ8VGFpbGV2dX4xNFwiXSxbXCJGaW5sYW5kXCIsXCJGSVwiLFwiQWh2ZW5hbm1hYW4gbMOkw6RuaX5BTHxFdGVsw6QtU3VvbWVuIGzDpMOkbml+RVN8SXTDpC1TdW9tZW4gbMOkw6RuaX5JU3xMw6Ruc2ktU3VvbWVuIGzDpMOkbml+TFN8TGFwaW4gbMOkw6RuaX5MTHxPdWx1biBsw6TDpG5pfk9MXCJdLFtcIkZyYW5jZVwiLFwiRlJcIixcIkF1dmVyZ25lLVJow7RuZS1BbHBlc35BUkF8Qm91cmdvZ25lLUZyYW5jaGUtQ29tdMOpfkJGQ3xCcmV0YWduZX5CUkV8Q2VudHJlLVZhbCBkZSBMb2lyZX5DVkx8Q29yc2V+Q09SfEdyYW5kIEVzdH5HRVN8SGF1dHMtZGUtRnJhbmNlfkhERnzDjmxlLWRlLUZyYW5jZX5JREZ8Tm9ybWFuZGllfk5PUnxOb3V2ZWxsZS1BcXVpdGFpbmV+TkFRfE9jY2l0YW5pZX5PQ0N8UGF5cyBkZSBsYSBMb2lyZX5QREx8UHJvdmVuY2UtQWxwZXMtQ290ZSBkJ0F6dXJ+UEFDfENsaXBwZXJ0b25+Q1B8R3VhZGVsb3VwZX5HUHxHdXlhbmV+R0Z8TWFydGluaXF1ZX5NUXxNYXlvdHRlfllUfE5vdmVsbGUtQ2Fsw6lkb25pZX5OQ3xQb2x5bsOpc2llflBGfFNhaW50LVBpZXJyZS1ldC1NaXF1ZWxvbn5QTXxTYWludCBCYXJ0aMOpbGVteX5CTHxTYWludCBNYXJ0aW5+TUZ8UsOpdW5pb25+UkV8VGVycmVzIEF1c3RyYWxlcyBGcmFuw6dhaXNlc35URnxXYWxsaXMtZXQtRnV0dW5hfldGXCJdLFtcIkZyZW5jaCBHdWlhbmFcIixcIkdGXCIsXCJGcmVuY2ggR3VpYW5hXCJdLFtcIkZyZW5jaCBQb2x5bmVzaWFcIixcIlBGXCIsXCJBcmNoaXBlbCBkZXMgTWFycXVpc2VzfEFyY2hpcGVsIGRlcyBUdWFtb3R1fEFyY2hpcGVsIGRlcyBUdWJ1YWl8SWxlcyBkdSBWZW50fElsZXMgU291cy1sZS1WZW50XCJdLFtcIkZyZW5jaCBTb3V0aGVybiBhbmQgQW50YXJjdGljIExhbmRzXCIsXCJURlwiLFwiQWRlbGllIExhbmR8SWxlIENyb3pldHxJbGVzIEtlcmd1ZWxlbnxJbGVzIFNhaW50LVBhdWwgZXQgQW1zdGVyZGFtXCJdLFtcIkdhYm9uXCIsXCJHQVwiLFwiRXN0dWFpcmV+MXxIYXV0LU9nb291w6l+MnxNb3llbi1PZ29vdcOpfjN8TmdvdW5pw6l+NHxOeWFuZ2F+NXxPZ29vdcOpLUl2aW5kb342fE9nb291w6ktTG9sb343fE9nb291w6ktTWFyaXRpbWV+OHxXb2xldS1OdGVtfjlcIl0sW1wiR2FtYmlhLCBUaGVcIixcIkdNXCIsXCJCYW5qdWx+QnxDZW50cmFsIFJpdmVyfk18TG93ZXIgUml2ZXJ+THxOb3J0aCBCYW5rfk58VXBwZXIgUml2ZXJ+VXxXZXN0ZXJufldcIl0sW1wiR2VvcmdpYVwiLFwiR0VcIixcIkFia2hhemlhIChTb2todW1pKX5BQnxBamFyaWEgKEJhdCd1bWkpfkFKfEd1cmlhfkdVfEltZXJldGl+SU18Sydha2hldGl+S0F8S3ZlbW8gS2FydGxpfktLfE10c2hraGV0YS1NdGlhbmV0aX5NTXxSYWNoJ2EtTGV4aGt1bWktS3ZlbW9TdmFuZXRpflJMfFNhbWVncmVsby1aZW1vIFN2YW5ldGl+U1p8U2FtdHNraGUtSmF2YWtoZXRpflNKfFNoaWRhIEthcnRsaX5TS3xUYmlsaXNpflRCXCJdLFtcIkdlcm1hbnlcIixcIkRFXCIsXCJCYWRlbi1Xw7xydHRlbWJlcmd+Qld8QmF5ZXJufkJZfEJlcmxpbn5CRXxCcmFuZGVuYnVyZ35CQnxCcmVtZW5+SEJ8SGFtYnVyZ35ISHxIZXNzZW5+SEV8TWVja2xlbmJ1cmctVm9ycG9tbWVybn5NVnxOaWVkZXJzYWNoc2Vufk5JfE5vcmRyaGVpbi1XZXN0ZmFsZW5+Tld8UmhlaW5sYW5kLVBmYWx6flJQfFNhYXJsYW5kflNMfFNhY2hzZW5+U058U2FjaHNlbi1BbmhhbHR+U1R8U2NobGVzd2lnLUhvbHN0ZWluflNIfFRow7xyaW5nZW5+VEhcIl0sW1wiR2hhbmFcIixcIkdIXCIsXCJBc2hhbnRpfkFIfEJyb25nLUFoYWZvfkJBfENlbnRyYWx+Q1B8RWFzdGVybn5FUHxHcmVhdGVyIEFjY3JhfkFBfE5vcnRoZXJufk5QfFVwcGVyIEVhc3R+VUV8VXBwZXIgV2VzdH5VV3xWb2x0YX5UVnxXZXN0ZXJufldQXCJdLFtcIkdpYnJhbHRhclwiLFwiR0lcIixcIkdpYnJhbHRhclwiXSxbXCJHcmVlY2VcIixcIkdSXCIsXCJBbmF0b2xpa8OtIE1ha2Vkb27DrWEga2FpIFRocsOha2l+QXxBdHRpa+G4r35JfER5dGlrw60gRWxsw6FkYX5HfER5dGlrw60gTWFrZWRvbsOtYX5DfElvbsOtYSBOw61zaWF+RnxLZW50cmlrw60gTWFrZWRvbsOtYX5CfEtyw610w61+TXxOb3TDrW8gQWlnYcOtb35MfFBlbG9wb25uw61zb3N+SnxTdGVyZcOhIEVsbMOhZGF+SHxUaGVzc2Fsw61hfkV8Vm9yZcOtbyBBaWdhw61vfkt8w41wZWlyb3N+RHzDgWdpb24gw5Nyb3N+NjlcIl0sW1wiR3JlZW5sYW5kXCIsXCJHTFwiLFwiS29tbXVuZSBLdWphbGxlcX5LVXxLb21tdW5lcWFyZmlrIFNlcm1lcnNvb3F+U018UWFhc3VpdHN1cCBLb21tdW5pYX5RQXxRZXFxYXRhIEtvbW11bmlhflFFXCJdLFtcIkdyZW5hZGFcIixcIkdEXCIsXCJTYWludCBBbmRyZXd+MDF8U2FpbnQgRGF2aWR+MDJ8U2FpbnQgR2VvcmdlfjAzfFNhaW50IEpvaG5+MDR8U2FpbnQgTWFya34wNXxTYWludCBQYXRyaWNrfjA2fFNvdXRoZXJuIEdyZW5hZGluZSBJc2xhbmRzfjEwXCJdLFtcIkd1YWRlbG91cGVcIixcIkdQXCIsXCJHdWFkZWxvdXBlXCJdLFtcIkd1YW1cIixcIkdVXCIsXCJHdWFtXCJdLFtcIkd1YXRlbWFsYVwiLFwiR1RcIixcIkFsdGEgVmVyYXBhen5BVnxCYWphIFZlcmFwYXp+QlZ8Q2hpbWFsdGVuYW5nb35DTXxDaGlxdWltdWxhfkNRfEVsIFByb2dyZXNvflBSfEVzY3VpbnRsYX5FU3xHdWF0ZW1hbGF+R1V8SHVlaHVldGVuYW5nb35IVXxJemFiYWx+SVp8SmFsYXBhfkpBfEp1dGlhcGF+SlV8UGV0w6luflBFfFF1ZXR6YWx0ZW5hbmdvflFafFF1aWNow6l+UUN8UmV0YWxodWxldX5SZXxTYWNhdGVww6lxdWV6flNBfFNhbiBNYXJjb3N+U018U2FudGEgUm9zYX5TUnxTb2xvbMOhflNPfFN1Y2hpdGVww6lxdWV6flNVfFRvdG9uaWNhcMOhbn5UT3xaYWNhcGF+WkFcIl0sW1wiR3Vlcm5zZXlcIixcIkdHXCIsXCJDYXN0ZWx8Rm9yZXN0fFN0LiBBbmRyZXd8U3QuIE1hcnRpbnxTdC4gUGV0ZXIgUG9ydHxTdC4gUGllcnJlIGR1IEJvaXN8U3QuIFNhbXBzb258U3QuIFNhdmlvdXJ8VG9ydGV2YWx8VmFsZVwiXSxbXCJHdWluZWFcIixcIkdOXCIsXCJCb2vDqX5CfENvbmFrcnl+Q3xGYXJhbmFofkZ8S2Fua2Fufkt8S2luZGlhfkR8TGFiw6l+THxNYW1vdX5NfE56w6lyw6lrb3LDqX5OXCJdLFtcIkd1aW5lYS1CaXNzYXVcIixcIkdXXCIsXCJCYWZhdMOhfkJBfEJpb21ib35CTXxCaXNzYXV+QlN8Qm9sYW1hLUJpamFnb3N+Qkx8Q2FjaGV1fkNBfEdhYsO6fkdBfE9pb35PSXxRdWluYXJhflFVfFRvbWJhbGl+VE9cIl0sW1wiR3V5YW5hXCIsXCJHWVwiLFwiQmFyaW1hLVdhaW5pfkJBfEN1eXVuaS1NYXphcnVuaX5DVXxEZW1lcmFyYS1NYWhhaWNhfkRFfEVhc3QgQmVyYmljZS1Db3JlbnR5bmV+RUJ8RXNzZXF1aWJvIElzbGFuZHMtV2VzdCBEZW1lcmFyYX5FU3xNYWhhaWNhLUJlcmJpY2V+TUF8UG9tZXJvb24tU3VwZW5hYW1+UE18UG90YXJvLVNpcGFydW5pflBUfFVwcGVyIERlbWVyYXJhLUJlcmJpY2V+VUR8VXBwZXIgVGFrdXR1LVVwcGVyIEVzc2VxdWlib35VVFwiXSxbXCJIYWl0aVwiLFwiSFRcIixcIkFydGlib25pdGV+QVJ8Q2VudHJlfkNFfEdyYW5kJ0Fuc2V+R0F8TmlwcGVzfk5JfE5vcmR+TkR8Tm9yZC1Fc3R+TkV8Tm9yZC1PdWVzdH5OT3xPdWVzdH5PVXxTdWR+U0R8U3VkLUVzdH5TRVwiXSxbXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIixcIkhNXCIsXCJIZWFyZCBJc2xhbmQgYW5kIE1jRG9uYWxkIElzbGFuZHNcIl0sW1wiSG9seSBTZWUgKFZhdGljYW4gQ2l0eSlcIixcIlZBXCIsXCJIb2x5IFNlZSAoVmF0aWNhbiBDaXR5KX4wMVwiXSxbXCJIb25kdXJhc1wiLFwiSE5cIixcIkF0bMOhbnRpZGF+QVR8Q2hvbHV0ZWNhfkNIfENvbMOzbn5DTHxDb21heWFndWF+Q018Q29ww6FufkNQfENvcnTDqXN+Q1J8RWwgUGFyYcOtc29+RVB8RnJhbmNpc2NvIE1vcmF6YW5+Rk18R3JhY2lhcyBhIERpb3N+R0R8SW50aWJ1Y8OhfklOfElzbGFzIGRlIGxhIEJhaMOtYX5JQnxMYSBQYXp+TFB8TGVtcGlyYX5MRXxPY290ZXBlcXVlfk9DfE9sYW5jaG9+T0x8U2FudGEgQsOhcmJhcmF+U0J8VmFsbGV+VkF8WW9yb35ZT1wiXSxbXCJIb25nIEtvbmdcIixcIkhLXCIsXCJIb25nIEtvbmdcIl0sW1wiSHVuZ2FyeVwiLFwiSFVcIixcIkLDoWNzLUtpc2t1bn5CS3xCYXJhbnlhfkJBfELDqWvDqXN+QkV8QsOpa8Opc2NzYWJhfkJDfEJvcnNvZC1BYmF1ai1aZW1wbGVufkJafEJ1ZGFwZXN0fkJVfENzb25ncsOhZH5DU3xEZWJyZWNlbn5ERXxEdW5hw7pqdsOhcm9zfkRVfEVnZXJ+RUd8w4lyZH5FUnxGZWrDqXJ+RkV8R3nFkXJ+R1l8R3nFkXItTW9zb24tU29wcm9ufkdTfEhhamTDui1CaWhhcn5IQnxIZXZlc35IRXxIw7NkbWV6xZF2w6Fzw6FyaGVseX5IVnxKw6Fzei1OYWd5a3VuLVN6b2xub2t+TnxLYXBvc3bDoXJ+S1Z8S2Vjc2tlbcOpdH5LTXxLb23DoXJvbS1Fc3p0ZXJnb21+S0V8TWlza29sY35NSXxOYWd5a2FuaXpzYX5OS3xOw7NncsOhZH5OT3xOecOtcmVneWjDoXphfk5ZfFDDqWNzflBTfFBlc3R+UEV8U2FsZ8OzdGFyasOhbn5TVHxTb21vZ3l+U098U29wcm9uflNOfFN6YWJvbGNzLcOhLUJlcmVnflNafFN6ZWdlZH5TRHxTesOpa2VzZmVow6lydsOhcn5TRnxTemVrc3rDoXJkflNTfFN6b2xub2t+U0t8U3pvbWJhdGhlbHl+U0h8VGF0YWLDoW55YX5UQnxUb2xuYX5UT3xWYXN+VkF8VmVzenByw6ltflZFfFZlc3pwcsOpbSAoQ2l0eSl+Vk18WmFsYX5aQXxaYWxhZWdlcnN6ZWd+WkVcIl0sW1wiSWNlbGFuZFwiLFwiSVNcIixcIkF1c3R1cmxhbmR+N3xIw7ZmdcOwYm9yZ2Fyc3bDpsOwaSB1dGFuIFJleWtqYXbDrWt1cn4xfE5vcsOwdXJsYW5kIGV5c3RyYX42fE5vcsOwdXJsYW5kIHZlc3RyYX41fFN1w7B1cmxhbmR+OHxTdcOwdXJuZXN+MnxWZXN0Zmlyw7Bpcn40fFZlc3R1cmxhbmR+M1wiXSxbXCJJbmRpYVwiLFwiSU5cIixcIkFuZGFtYW4gYW5kIE5pY29iYXIgSXNsYW5kc35BTnxBbmRocmEgUHJhZGVzaH5BUHxBcnVuYWNoYWwgUHJhZGVzaH5BUnxBc3NhbX5BU3xCaWhhcn5CUnxDaGFuZGlnYXJofkNIfENoaGF0dGlzZ2FyaH5DVHxEYWRyYSBhbmQgTmFnYXIgSGF2ZWxpfkROfERhbWFuIGFuZCBEaXV+RER8RGVsaGl+REx8R29hfkdBfEd1amFyYXR+R0p8SGFyeWFuYX5IUnxIaW1hY2hhbCBQcmFkZXNofkhQfEphbW11IGFuZCBLYXNobWlyfkpLfEpoYXJraGFuZH5KSHxLYXJuYXRha2F+S0F8S2VyYWxhfktMfExha3NoYWR3ZWVwfkxEfE1hZGh5YSBQcmFkZXNofk1QfE1haGFyYXNodHJhfk1IfE1hbmlwdXJ+TU58TWVnaGFsYXlhfk1MfE1pem9yYW1+TVp8TmFnYWxhbmR+Tkx8T2Rpc2hhfk9SfFB1ZHVjaGVycnl+UFl8UHVuamFiflBCfFJhamFzdGhhbn5SSnxTaWtraW1+V0t8VGFtaWwgTmFkdX5UTnxUZWxhbmdhbmF+VEd8VHJpcHVyYX5UUnxVdHRhcmFraGFuZH5VVHxVdHRhciBQcmFkZXNoflVQfFdlc3QgQmVuZ2FsfldCXCJdLFtcIkluZG9uZXNpYVwiLFwiSURcIixcIkFjZWh+QUN8QmFsaX5CQXxCYW5na2EgQmVsaXR1bmd+QkJ8QmFudGVufkJUfEJlbmdrdWx1fkJFfEdvcm9udGFsb35HT3xKYWthcnRhIFJheWF+Skt8SmFtYml+SkF8SmF3YSBCYXJhdH5KQnxKYXdhIFRlbmdhaH5KVHxKYXdhIFRpbXVyfkpJfEthbGltYW50YW4gQmFyYXR+S0J8S2FsaW1hbnRhbiBTZWxhdGFufktTfEthbGltYW50YW4gVGVuZ2FofktUfEthbGltYW50YW4gVGltdXJ+S0l8S2FsaW1hbnRhbiBVdGFyYX5LVXxLZXB1bGF1YW4gUmlhdX5LUnxMYW1wdW5nfkxBfE1hbHVrdX5NQXxNYWx1a3UgVXRhcmF+TVV8TnVzYSBUZW5nZ2FyYSBCYXJhdH5OQnxOdXNhIFRlbmdnYXJhIFRpbXVyfk5UfFBhcHVhflBBfFBhcHVhIEJhcmF0flBCfFJpYXV+Ukl8U3VsYXdlc2kgU2VsYXRhbn5TUnxTdWxhd2VzaSBUZW5nYWh+U1R8U3VsYXdlc2kgVGVuZ2dhcmF+U0d8U3VsYXdlc2kgVXRhcmF+U0F8U3VtYXRlcmEgQmFyYXR+U0J8U3VtYXRlcmEgU2VsYXRhbn5TU3xTdW1hdGVyYSBVdGFyYX5TVXxZb2d5YWthcnRhfllPXCJdLFtcIklyYW4sIElzbGFtaWMgUmVwdWJsaWMgb2ZcIixcIklSXCIsXCJBbGJvcnp+MzJ8QXJkYWLEq2x+MDN8xIB6zIRhcmLEgXlqxIFuLWUgR2hhcmLEq34wMnzEgHrMhGFyYsSBeWrEgW4tZSBTaGFyccSrfjAxfELFq3NoZWhyfjA2fENoYWjEgXIgTWHhuKnEgWwgdmEgQmFraHTEq8SBcsSrfjA4fEXFn2ZhaMSBbn4wNHxGxIFyc34xNHxHxKtsxIFufjE5fEdvbGVzdMSBbn4yN3xIYW1hZMSBbn4yNHxIb3Jtb3pnxIFufjIzfMSqbMSBbX4wNXxLZXJtxIFufjE1fEtlcm3EgW5zaMSBaH4xN3xLaG9yxIFzxIFuLWUgSm9uxatixKt+Mjl8S2hvcsSBc8SBbi1lIFJh4bqVYXbEq34zMHxLaG9yxIFzxIFuLWUgU2hvbcSBbMSrfjYxfEtoxat6ZXN0xIFufjEwfEtvaGfEq2zFq3llaCB2YSBCb3d5ZXIgQeG4qW1hZH4xOHxLb3JkZXN0xIFufjE2fExvcmVzdMSBbn4yMHxNYXJrYXppfjIyfE3EgXphbmRhcsSBbn4yMXxRYXp2xKtufjI4fFFvbX4yNnxTZW1uxIFufjEyfFPEq3N0xIFuIHZhIEJhbMWrY2hlc3TEgW5+MTN8VGVocsSBbn4wN3xZYXpkfjI1fFphbmrEgW5+MTFcIl0sW1wiSXJhcVwiLFwiSVFcIixcIkFsIEFuYsSBcn5BTnxBbCBCYcWfcmFofkJBfEFsIE11dGhhbm7DoX5NVXxBbCBRxIFkaXPEq3lhaH5RQXxBbiBOYWphZn5OQXxBcmLEq2x+QVJ8QXMgU3VsYXltxIFuxKt5YWh+U1V8QsSBYmlsfkJCfEJhZ2hkxIFkfkJHfERvaHVrfkRBfERoxKsgUcSBcn5EUXxEaXnEgWzDoX5ESXxLYXJiYWzEgSd+S0F8S2lya3VrfktJfE1heXPEgW5+TUF8TsSrbmF3w6F+Tkl8xZ5hbMSB4bipIGFkIETEq25+U0R8V8SBc2nFo35XQVwiXSxbXCJJcmVsYW5kXCIsXCJJRVwiLFwiQ2FybG93fkNXfENhdmFufkNOfENsYXJlfkNFfENvcmt+Q098RG9uZWdhbH5ETHxEdWJsaW5+RHxHYWx3YXl+R3xLZXJyeX5LWXxLaWxkYXJlfktFfEtpbGtlbm55fktLfExhb2lzfkxTfExlaXRyaW1+TE18TGltZXJpY2t+TEt8TG9uZ2ZvcmR+TER8TG91dGh+TEh8TWF5b35NT3xNZWF0aH5NSHxNb25hZ2hhbn5NTnxPZmZhbHl+T1l8Um9zY29tbW9uflJOfFNsaWdvflNPfFRpcHBlcmFyeX5UQXxXYXRlcmZvcmR+V0R8V2VzdG1lYXRofldIfFdleGZvcmR+V1h8V2lja2xvd35XV1wiXSxbXCJJc2xlIG9mIE1hblwiLFwiSU1cIixcIklzbGUgb2YgTWFuXCJdLFtcIklzcmFlbFwiLFwiSUxcIixcIkhhRGFyb21+RHxIYU1lcmthen5NfEhhVHNhZm9uflp8SMyxZWZhfkhBfFRlbC1Bdml2flRBfFllcnVzaGFsYXlpbX5KTVwiXSxbXCJJdGFseVwiLFwiSVRcIixcIkFicnV6em9+NjV8QmFzaWxpY2F0YX43N3xDYWxhYnJpYX43OHxDYW1wYW5pYX43MnxFbWlsaWEtUm9tYWduYX40NXxGcml1bGktVmVuZXppYSBHaXVsaWF+MzZ8TGF6aW9+NjJ8TGlndXJpYX40MnxMb21iYXJkaWF+MjV8TWFyY2hlfjU3fE1vbGlzZX42N3xQaWVtb250ZX4yMXxQdWdsaWF+NzV8U2FyZGVnbmF+ODh8U2ljaWxpYX44MnxUb3NjYW5hfjUyfFRyZW50aW5vLUFsdG8gQWRpZ2V+MzJ8VW1icmlhfjU1fFZhbGxlIGQnQW9zdGF+MjN8VmVuZXRvfjM0XCJdLFtcIkphbWFpY2FcIixcIkpNXCIsXCJDbGFyZW5kb25+MTN8SGFub3Zlcn4wOXxLaW5nc3Rvbn4wMXxNYW5jaGVzdGVyfjEyfFBvcnRsYW5kfjA0fFNhaW50IEFuZHJld34wMnxTYWludCBBbm5+MDZ8U2FpbnQgQ2F0aGVyaW5lfjE0fFNhaW50IEVsaXphYmV0aH4xMXxTYWludCBKYW1lc34wOHxTYWludCBNYXJ5fjA1fFNhaW50IFRob21hc34wM3xUcmVsYXdueX4wN3xXZXN0bW9yZWxhbmR+MTBcIl0sW1wiSmFwYW5cIixcIkpQXCIsXCJBaWNoaX4yM3xBa2l0YX4wNXxBb21vcml+MDJ8Q2hpYmF+MTJ8RWhpbWV+Mzh8RnVrdWl+MTh8RnVrdW9rYX40MHxGdWt1c2hpbWF+MDd8R2lmdX4yMXxHdW5tYX4xMHxIaXJvc2hpbWF+MzR8SG9ra2FpZG9+MDF8SHlvZ29+Mjh8SWJhcmFraX4wOHxJc2hpa2F3YX4xN3xJd2F0ZX4wM3xLYWdhd2F+Mzd8S2Fnb3NoaW1hfjQ2fEthbmFnYXdhfjE0fEtvY2hpfjM5fEt1bWFtb3RvfjQzfEt5b3RvfjI2fE1pZX4yNHxNaXlhZ2l+MDR8TWl5YXpha2l+NDV8TmFnYW5vfjIwfE5hZ2FzYWtpfjQyfE5hcmF+Mjl8TmlpZ2F0YX4xNXxPaXRhfjQ0fE9rYXlhbWF+MzN8T2tpbmF3YX40N3xPc2FrYX4yN3xTYWdhfjQxfFNhaXRhbWF+MTF8U2hpZ2F+MjV8U2hpbWFuZX4zMnxTaGl6dW9rYX4yMnxUb2NoaWdpfjA5fFRva3VzaGltYX4zNnxUb2t5b34xM3xUb3R0b3JpfjMxfFRveWFtYX4xNnxXYWtheWFtYX4zMHxZYW1hZ2F0YX4wNnxZYW1hZ3VjaGl+MzV8WWFtYW5hc2hpfjE5XCJdLFtcIkplcnNleVwiLFwiSkVcIixcIkplcnNleVwiXSxbXCJKb3JkYW5cIixcIkpPXCIsXCLigJhBamzFq25+QUp8QWwgJ0FxYWJhaH5BUXxBbCBCYWxxxIHigJl+QkF8QWwgS2FyYWt+S0F8QWwgTWFmcmFxfk1BfEFsIOKAmEHMhcWfaW1haH5BTXxBxaMgxaJhZsSrbGFofkFUfEF6IFphcnHEgeKAmX5BWnxJcmJpZH5JUnxKYXJhc2h+SkF8TWHigJjEgW5+TU58TcSBZGFixIF+TURcIl0sW1wiS2F6YWtoc3RhblwiLFwiS1pcIixcIkFsbWF0eX5BTEF8QXFtb2xhfkFLTXxBcXRvYmV+QUtUfEFzdGFuYX5BU1R8QXR5cmF1fkFUWXxCYXR5cyBRYXphcXN0YW5+WkFQfEJheXFvbmd5cnxNYW5nZ2h5c3RhdX5NQU58T25ndHVzdGlrIFFhemFxc3Rhbn5ZVVp8UGF2bG9kYXJ+UEFWfFFhcmFnaGFuZHl+S0FSfFFvc3RhbmF5fktVU3xReXp5bG9yZGF+S1pZfFNoeWdoeXMgUWF6YXFzdGFuflZPU3xTb2x0dXN0aWsgUWF6YXFzdGFuflNFVnxaaGFtYnlsflpIQVwiXSxbXCJLZW55YVwiLFwiS0VcIixcIkJhcmluZ29+MDF8Qm9tZXR+MDJ8QnVuZ29tYX4wM3xCdXNpYX4wNHxFbGV5by9NYXJha3dldH4wNXxFbWJ1fjA2fEdhcmlzc2F+MDd8SG9tYSBCYXl+MDh8SXNpb2xvfjA5fEthamlhZG9+MTB8S2FrYW1lZ2F+MTF8S2VyaWNob34xMnxLaWFtYnV+MTN8S2lsaWZpfjE0fEtpcmlueWFnYX4xNXxLaXNpaX4xNnxLaXN1bXV+MTd8S2l0dWl+MTh8S3dhbGV+MTl8TGFpa2lwaWF+MjB8TGFtdX4yMXxNYWNoYWtvc34yMnxNYWt1ZW5pfjIzfE1hbmRlcmF+MjR8TWFyc2FiaXR+MjV8TWVydX4yNnxNaWdvcml+Mjd8TW9tYmFzYX4yOHxNdXJhbmcnYX4yOXxOYWlyb2JpIENpdHl+MzB8TmFrdXJ1fjMxfE5hbmRpfjMyfE5hcm9rfjMzfE55YW1pcmF+MzR8TnlhbmRhcnVhfjM1fE55ZXJpfjM2fFNhbWJ1cnV+Mzd8U2lheWF+Mzh8VGFpdGEvVGF2ZXRhfjM5fFRhbmEgUml2ZXJ+NDB8VGhhcmFrYS1OaXRoaX40MXxUcmFucyBOem9pYX40MnxUdXJrYW5hfjQzfFVhc2luIEdpc2h1fjQ0fFZpaGlnYX40NXxXYWppcn40NnxXZXN0IFBva290fjQ3XCJdLFtcIktpcmliYXRpXCIsXCJLSVwiLFwiQWJhaWFuZ3xBYmVtYW1hfEFyYW51a2F8QXJvcmFlfEJhbmFiYXxCZXJ1fEJ1dGFyaXRhcml8Q2VudHJhbCBHaWxiZXJ0c3xHaWxiZXJ0IElzbGFuZHN+R3xLYW50b258S2lyaXRpbWF0aXxLdXJpYXxMaW5lIElzbGFuZHN+THxNYWlhbmF8TWFraW58TWFyYWtlaXxOaWt1bmF1fE5vbm91dGl8Tm9ydGhlcm4gR2lsYmVydHN8T25vdG9hfFBob2VuaXggSXNsYW5kc35QfFNvdXRoZXJuIEdpbGJlcnRzfFRhYml0ZXVlYXxUYWJ1YWVyYW58VGFtYW5hfFRhcmF3YXxUZXJhaW5hXCJdLFtcIktvcmVhLCBEZW1vY3JhdGljIFBlb3BsZSdzIFJlcHVibGljIG9mXCIsXCJLUFwiLFwiQ2hhZ2FuZy1kbyAoQ2hhZ2FuZyBQcm92aW5jZSl+MDR8SGFtZ3lvbmctYnVrdG8gKE5vcnRoIEhhbWd5b25nIFByb3ZpbmNlKX4wOXxIYW1neW9uZy1uYW1kbyAoU291dGggSGFtZ3lvbmcgUHJvdmluY2UpfjA4fEh3YW5naGFlLWJ1a3RvIChOb3J0aCBId2FuZ2hhZSBQcm92aW5jZSl+MDZ8SHdhbmdoYWUtbmFtZG8gKFNvdXRoIEh3YW5naGFlIFByb3ZpbmNlKX4wNXxLYW5nd29uLWRvIChLYW5nd29uIFByb3ZpbmNlKX4wN3xOYXPFj24gKE5hamluLVPFj25ib25nKX4xM3xQJ3lvbmdhbi1idWt0byAoTm9ydGggUCd5b25nYW4gUHJvdmluY2UpfjAzfFAneW9uZ2FuLW5hbWRvIChTb3V0aCBQJ3lvbmdhbiBQcm92aW5jZSl+MDJ8UCd5b25neWFuZy1zaSAoUCd5b25neWFuZyBDaXR5KX4wMXxZYW5nZ2FuZy1kbyAoWWFuZ2dhbmcgUHJvdmluY2UpfjEwXCJdLFtcIktvcmVhLCBSZXB1YmxpYyBvZlwiLFwiS1JcIixcIkNoJ3VuZ2NoJ29uZ2J1ay1kb340M3xDaCd1bmdjaCdvbmduYW0tZG9+NDR8Q2hlanUtZG9+NDl8Q2hvbGxhYnVrLWRvfjQ1fENob2xsYW5hbS1kb340NnxJbmNoJ29uLUt3YW5neW9raGl+Mjh8S2FuZy13b24tZG9+NDJ8S3dhbmdqdS1Ld2FuZ3lva3NoaX4yOHxLeW9uZ2dpLWRvfjQxfEt5b25nc2FuZ2J1ay1kb340N3xLeW9uZ3NhbmduYW0tZG9+NDh8UHVzYW4tS3dhbmd5b2tzaGl+MjZ8U2VvdWwtVCd1a3B5b2xzaGl+MTF8U2Vqb25nfjUwfFRhZWd1LUt3YW5neW9rc2hpfjI3fFRhZWpvbi1Ld2FuZ3lva3NoaX4zMHxVbHNhbi1Ld2FuZ3lva3NoaX4zMVwiXSxbXCJLdXdhaXRcIixcIktXXCIsXCJBbCBB4bipbWFkaX5BSHxBbCBGYXJ3xIFuxKt5YWh+RkF8QWwgSmFocsSB4oCZfkpBfEFsIOKAmMSAxZ9pbWFofktVfOG4qGF3YWxsxKt+SEF8TXVixIFyYWsgYWwgS2FiaXJ+TVVcIl0sW1wiS3lyZ3l6c3RhblwiLFwiS0dcIixcIkJhdGtlbiBPYmxhc3R5fkJ8QmlzaGtlayBTaGFhcnl+R0J8Q2h1eSBPYmxhc3R5IChCaXNoa2VrKX5DfEphbGFsLUFiYWQgT2JsYXN0eX5KfE5hcnluIE9ibGFzdHl+TnxPc2ggT2JsYXN0eX5PfFRhbGFzIE9ibGFzdHl+VHxZc3lrLUtvbCBPYmxhc3R5IChLYXJha29sKX5ZXCJdLFtcIkxhb3NcIixcIkxBXCIsXCJBdHRhcHV+QVR8Qm9rw6hvfkJLfEJvbGlraGFteGFpfkJMfENoYW1wYXNha35DSHxIb3VhcGhhbn5IT3xLaGFtbW91YW5+S0h8TG91YW5nIE5hbXRoYX5MTXxMb3VhbmdwaGFiYW5nfkxQfE91ZMO0bXhhaX5PVXxQaMO0bmdzYWxpflBIfFNhbGF2YW5+U0x8U2F2YW5uYWtow6l0flNWfFZpZW50aWFuZX5WSXxYYWlnbmFib3VsaX5YQXxYw6lrb25nflhFfFhhaXNvbWJvdW5+WFN8WGlhbmdraG91YW5nflhJXCJdLFtcIkxhdHZpYVwiLFwiTFZcIixcIkFnbG9uYX4wMDF8QWl6a3JhdWtsZX4wMDJ8QWl6cHV0ZX4wMDN8QWtuxKtzdGV+MDA0fEFsb2phfjAwNXxBbHN1bmdhfjA2fEFsxatrc25lfjAwN3xBbWF0YX4wMDh8QXBlfjAwOXxBdWNlfjAxMHzEgGRhxb5pfjAxMXxCYWLEq3RlfjAxMnxCYWxkb25lfjAxM3xCYWx0aW5hdmF+MDE0fEJhbHZpfjAxNXxCYXVza2F+MDE2fEJldmVyxKtuYX4wMTd8QnJvY8STbml+MDE4fEJ1cnRuaWVraX4wMTl8Q2FybmlrYXZhfjAyMHxDZXN2YWluZX4wMjF8Q8STc2lzfjAyMnxDaWJsYX4wMjN8RGFnZGF+MDI0fERhdWdhdnBpbHN+MDI1fERhdWdhdnBpbHMgKENpdHkpfkRHVnxEb2JlbGV+MDI2fER1bmRhZ2F+MDI3fER1cmJlfjAyOHxFbmd1cmV+MDI5fMSScmfEvGl+MDMwfEdhcmthbG5lfjAzMXxHcm9iacWGYX4wMzJ8R3VsYmVuZX4wMzN8SWVjYXZhfjAzNHxJa8WhxLdpbGV+MDM1fElsxatrc3RlfjAzNnxJbsSNdWthbG5zfjAzN3xKYXVuamVsZ2F2YX4wMzh8SmF1bnBpZWJhbGdhfjAzOXxKYXVucGlsc34wNDB8SmVsZ2F2YX4wNDF8SmVsZ2F2YSAoQ2l0eSl+SkVMfErEk2thYnBpbHN+MDQyfErEk2thYnBpbHMgKENpdHkpfkpLQnxKxatybWFsYSAoQ2l0eSl+SlVSfEthbmRhdmF+MDQzfEvEgXJzYXZhfjA0NHxLb2PEk25pfjA0NXxLb2tuZXNlfjA0NnxLcsSBc2xhdmF+MDQ3fEtyaW11bGRhfjA0OHxLcnVzdHBpbHN+MDQ5fEt1bGTEq2dhfjA1MHzEtmVndW1zfjA1MXzEtmVrYXZhfjA1MnxMaWVsdsSBcmRlfjA1M3xMaWVwxIFqYX5MUFh8TGltYmHFvml+MDU0fEzEq2dhdG5lfjA1NXxMxKt2xIFuaX4wNTZ8THVixIFuYX4wNTd8THVkemF+MDU4fE1hZG9uYX4wNTl8TWF6c2FsYWNhfjA2MHxNxIFscGlsc34wNjF8TcSBcnVwZX4wNjJ8TcSTcnNyYWdzfjA2M3xOYXVrxaHEk25pfjA2NHxOZXJldGF+MDY1fE7Eq2NhfjA2NnxPZ3JlfjA2N3xPbGFpbmV+MDY4fE96b2xuaWVraX4wNjl8UMSBcmdhdWphfjA3MHxQxIF2aWxvc3RhfjA3MXxQxLxhdmnFhmFzfjA3MnxQcmVpxLxpfjA3M3xQcmlla3VsZX4wNzR8UHJpZWt1xLxpfjA3NXxSYXVuYX4wNzZ8UsSTemVrbmV+MDc3fFLEk3pla25lIChDaXR5KX5SRVp8UmllYmnFhml+MDc4fFLEq2dhflJJWHxSb2phfjA3OXxSb3Bhxb5pfjA4MHxSdWNhdmF+MDgxfFJ1Z8SBaml+MDgyfFJ1bmTEgWxlfjA4M3xSxatqaWVuYX4wODR8U2FsYX4wODV8U2FsYWNncsSrdmF+MDg2fFNhbGFzcGlsc34wODd8U2FsZHVzfjA4OHxTYXVsa3Jhc3RpfjA4OXxTxJNqYX4wOTB8U2lndWxkYX4wOTF8U2tyxKt2ZXJpfjA5MnxTa3J1bmRhfjA5M3xTbWlsdGVuZX4wOTR8U3RvcGnFhml+MDk1fFN0cmVuxI1pfjA5NnxUYWxzaX4wOTd8VMSTcnZldGV+MDk4fFR1a3Vtc34wOTl8VmFpxYZvZGV+MTAwfFZhbGthfjEwMXxWYWxtaWVyYX5WTVJ8VmFyYWvEvMSBbml+MTAyfFbEgXJrYXZhfjEwM3xWZWNwaWViYWxnYX4xMDR8VmVjdW1uaWVraX4xMDV8VmVudHNwaWxzfjEwNnxWZW50c3BpbHMgKENpdHkpflZFTnxWaWVzxKt0ZX4xMDd8VmnEvGFrYX4xMDh8VmnEvMSBbml+MTA5fFppbHVwZX4xMTBcIl0sW1wiTGViYW5vblwiLFwiTEJcIixcIkFha2vDonJ+QUt8QmFhbGJlbGstSGVybWVsfkJIfELDqXFhYX5CSXxCZXlyb3V0aH5CQXxMaWJhbi1Ob3JkfkFTfExpYmFuLVN1ZH5KQXxNb250LUxpYmFufkpMfE5hYmF0w655w6l+TkFcIl0sW1wiTGVzb3Rob1wiLFwiTFNcIixcIkJlcmVhfkR8QnV0aGEtQnV0aGV+QnxMZXJpYmV+Q3xNYWZldGVuZ35FfE1hc2VydX5BfE1vaGFsZXMgSG9la35GfE1va2hvdGxvbmd+SnxRYWNoYSdzIE5la35IfFF1dGhpbmd+R3xUaGFiYS1Uc2VrYX5LXCJdLFtcIkxpYmVyaWFcIixcIkxSXCIsXCJCb21pfkJNfEJvbmd+Qkd8R2JhcnBvbHV+R1B8R3JhbmQgQmFzc2F+R0J8R3JhbmQgQ2FwZSBNb3VudH5DTXxHcmFuZCBHZWRlaH5HR3xHcmFuZCBLcnV+R0t8TG9mYX5MT3xNYXJnaWJpfk1HfE1hcnlsYW5kfk1ZfE1vbnRzZXJyYWRvfk1PfE5pbWJhfk5JfFJpdmVyIENlc3N+Ukl8Uml2ZXIgR2VlZX5SR3xTaW5vZX5TSVwiXSxbXCJMaWJ5YVwiLFwiTFlcIixcIkFsIEJ1xaNuxIFufkJVfEFsIEphYmFsIGFsIEFraOG4kWFyfkpBfEFsIEphYmFsIGFsIEdoYXJixKt+Skd8QWwgSmFmxIFyYWh+SkF8QWwgSnVmcmFofkpVfEFsIEt1ZnJhaH5GS3xBbCBNYXJqfk1KfEFsIE1hcnF1YWJ+TUJ8QWwgV8SB4bipxIF0fldBfEFuIE51cWHFoyBhbCBLaGFtc35OUXxBeiBaxIF3aXlhaH5aQXxCYW5naMSBesSrfkJBfERhcm5haH5EUnxHaMSBdH5HSHxNacWfcsSBdGFofk1JfE11cnp1cX5NUXxOxIFsxat0fk5MfFNhYmjEgX5TQnxTdXJ0flNSfMWiYXLEgWJ1bHVzflRCfFlhZnJhbn5XRHxXxIFkxKsgYXNoIFNoxIHFo2nKvn5XU1wiXSxbXCJMaWVjaHRlbnN0ZWluXCIsXCJMSVwiLFwiQmFsemVyc34wMXxFc2NoZW5+MDJ8R2FtcHJpbn4wM3xNYXVyZW5+MDR8UGxhbmtlbn4wNXxSdWdnZWxsfjA2fFNjaGFhbn4wN3xTY2hlbGxlbmJlcmd+MDh8VHJpZXNlbn4wOXxUcmllc2VuYmVyZ34xMHxWYWR1en4xMVwiXSxbXCJMaXRodWFuaWFcIixcIkxUXCIsXCJBbHl0YXVzfkFMfEthdW5vfktVfEtsYWlwxJdkb3N+S0x8TWFyaWphbXBvbMSXc35NUnxQYW5ldsSXxb5pb35QTnzFoGlhdWxpxbN+U0F8VGF1cmFnxJdzflRBfFRlbMWhacWzflRFfFV0ZW5vc35VVHxWaWxuaWF1c35WTFwiXSxbXCJMdXhlbWJvdXJnXCIsXCJMVVwiLFwiQ2FwZWxsZW5+Q0F8Q2xldmF1eH5DTHxEaWVraXJjaH5ESXxFY2h0ZXJuYWNofkVDfEVzY2gtc3VyLUFsemV0dGV+RVN8R3JldmVubWFjaGVyfkdSfEx1eGVtYm91cmd+TFV8TWVyc2Nofk1FfFJlZGFuZ2V+UkR8UmVtaWNoflJNfFZpYW5kZW5+VkR8V2lsdHp+V0lcIl0sW1wiTWFjYW9cIixcIk1PXCIsXCJNYWNhb1wiXSxbXCJNYWNlZG9uaWEsIFJlcHVibGljIG9mXCIsXCJNS1wiLFwiQXJhxI1pbm92b34wMnxCZXJvdm9+MDN8Qml0b2xhfjA0fEJvZ2RhbmNpfjA1fEJvZ292aW5qZX4wNnxCb3NpbG92b34wN3xCcnZlbmljYX4wOHxDZW50YXIgxb11cGF+Nzh8xIxhxaFrYX4wOHzEjGXFoWlub3ZvLU9ibGXFoWV2b344MXzEjHXEjWVyIFNhbmRldm9+ODJ8RGViYXJ+MjF8RGViYXJjYX4yMnxEZWzEjWV2b34yM3xEZW1pciBIaXNhcn4yNXxEZW1pciBLYXBpamF+MjR8RG9yYW5+MjZ8RG9sbmVuaX4yN3xHZXZnZWxpamF+MTh8R29zdGl2YXJ+MTl8R3JhZHNrb34yMHxJbGluZGVufjM0fEplZ3Vub3ZjZX4zNXxLYXJiaW5jaX4zN3xLYXZhZGFyY2l+MzZ8S2nEjWV2b340MHxLb8SNYW5pfjQyfEtvbsSNZX40MXxLcmF0b3ZvfjQzfEtyaXZhIFBhbGFua2F+NDR8S3Jpdm9nYcWhdGFuaX40NXxLcnXFoWV2b340NnxLdW1hbm92b340N3xMaXBrb3ZvfjQ4fExvem92b340OXxNYWtlZG9uc2thIEthbWVuaWNhfjUxfE1ha2Vkb25za2kgQnJvZH41MnxNYXZyb3ZvIGkgUm9zdHXFoWF+NTB8TW9naWxhfjUzfE5lZ290aW5vfjU0fE5vdmFjaX41NXxOb3ZvIFNlbG9+NTZ8T2hyaWR+NTh8UGVoxI1ldm9+NjB8UGV0cm92ZWN+NTl8UGxhc25pY2F+NjF8UHJpbGVwfjYyfFByb2JpxaF0aXB+NjN8UmFkb3ZpxaF+fFJhbmtvdmNlfjY1fFJlc2VufjY2fFJvc29tYW5+Njd8U2tvcGplfjg1fFNvcGnFoXRlfjcwfFN0YXJvIE5hZ29yacSNYW5lfjcxfFN0cnVnYX43MnxTdHJ1bWljYX43M3xTdHVkZW5pxI1hbml+NzR8U3ZldGkgTmlrb2xlfjY5fMWgdGlwfjgzfFRlYXJjZX43NXxUZXRvdm9+NzZ8VmFsYW5kb3ZvfjEwfFZhc2lsZXZvfjExfFZlbGVzfjEzfFZldsSNYW5pfjEyfFZpbmljYX4xNHxWcmFwxI1pxaF0ZX4xNnxaZWxlbmlrb3ZvfjMyfFpybm92Y2l+MzN8xb1lbGlub34zMFwiXSxbXCJNYWRhZ2FzY2FyXCIsXCJNR1wiLFwiQW50YW5hbmFyaXZvflR8QW50c2lyYW5hbmF+RHxGaWFuYXJhbnRzb2F+RnxNYWhhamFuZ2F+TXxUb2FtYXNpbmF+QXxUb2xpYXJhflVcIl0sW1wiTWFsYXdpXCIsXCJNV1wiLFwiQmFsYWthfkJBfEJsYW50eXJlfkJMfENoaWt3YXdhfkNLfENoaXJhZHp1bHV+Q1J8Q2hpdGlwYX5DVHxEZWR6YX5ERXxEb3dhfkRPfEthcm9uZ2F+S1J8S2FzdW5ndX5LU3xMaWtvbWF+TEt8TGlsb25nd2V+TEl8TWFjaGluZ2F+TUh8TWFuZ29jaGl+TUd8TWNoaW5qaX5NQ3xNdWxhbmplfk1VfE13YW56YX5NV3xNemltYmF+TVp8TmtoYXRhIEJheX5ORXxOa2hvdGFrb3Rhfk5CfE5zYW5qZX5OU3xOdGNoZXV+TlV8TnRjaGlzaX5OSXxQaGFsb21iZX5QSHxSdW1waGl+UlV8U2FsaW1hflNBfFRoeW9sb35USHxab21iYX5aT1wiXSxbXCJNYWxheXNpYVwiLFwiTVlcIixcIkpvaG9yfjAxfEtlZGFofjAyfEtlbGFudGFufjAzfE1lbGFrYX4wNHxOZWdlcmkgU2VtYmlsYW5+MDV8UGFoYW5nfjA2fFBlcmFrfjA4fFBlcmxpc34wOXxQdWxhdSBQaW5hbmd+MDd8U2FiYWh+MTJ8U2FyYXdha34xM3xTZWxhbmdvcn4xMHxUZXJlbmdnYW51fjExfFdpbGF5YWggUGVyc2VrdXR1YW4gKEt1YWxhIEx1bXB1cil+MTR8V2lsYXlhaCBQZXJzZWt1dHVhbiAoTGFidWFuKX4xNXxXaWxheWFoIFBlcnNla3V0dWFuIChQdXRyYWpheWEpfjE2XCJdLFtcIk1hbGRpdmVzXCIsXCJNVlwiLFwiQWxpZnUgQWxpZnV+MDJ8QWxpZnUgRGhhYWx1fjAwfEJhYX4yMHxEaGFhbHV+MTd8RmFhZnV+MTR8R2FhZnUgQWxpZnV+Mjd8R2FhZnUgRGhhYWx1fjI4fEduYXZpeWFuaX4yOXxIYWEgQWxpZnV+MDd8SGFhIERoYWFsdX4yM3xLYWFmdX4yOXxMYWFtdX4wNXxMaGF2aXlhbml+MDN8TWFsw6l+TUxFfE1lZW11fjEyfE5vb251fjI1fFJhYX4xM3xTZWVudX4wMXxTaGF2aXlhbml+MjR8VGhhYX4wOHxWYWF2dX4wNFwiXSxbXCJNYWxpXCIsXCJNTFwiLFwiQmFtYWtvfkJLT3xHYW9+N3xLYXllc34xfEtpZGFsfjh8S291bGlrb3JvfjJ8TW9wdGl+NXxTZWdvdX40fFNpa2Fzc29+M3xUb21ib3VjdG91fjZcIl0sW1wiTWFsdGFcIixcIk1UXCIsXCJBdHRhcmR+MDF8QmFsemFufjAyfEJpcmd1fjAzfEJpcmtpcmthcmF+MDR8QmlyxbxlYmJ1xKFhfjA1fEJvcm1sYX4wNnxEaW5nbGl+MDd8Rmd1cmF+MDh8RmxvcmlhbmF+MDl8Rm9udGFuYX4xMHxHdWRhfjExfEfFvGlyYX4xMnxHxKdham5zaWVsZW1+MTN8R8SnYXJifjE0fEfEp2FyZ8SndXJ+MTV8R8SnYXNyaX4xNnxHxKdheGFxfjE3fMSmYW1ydW5+MTh8SWtsaW5+MTl8SXNsYX4yMHxLYWxrYXJhfjIxfEtlcsSLZW1+MjJ8S2lya29wfjIzfExpamF+MjR8THVxYX4yNXxNYXJzYX4yNnxNYXJzYXNrYWxhfjI3fE1hcnNheGxva2t+Mjh8TWRpbmF+Mjl8TWVsbGllxKdhfjMwfE3EoWFycn4zMXxNb3N0YX4zMnxNcWFiYmF+MzN8TXNpZGF+MzR8TXRhcmZhfjM1fE11bnhhcn4zNnxOYWR1cn4zN3xOYXh4YXJ+Mzh8UGFvbGF+Mzl8UGVtYnJva2V+NDB8UGlldMOgfjQxfFFhbGF+NDJ8UW9ybWl+NDN8UXJlbmRpfjQ0fFJhYmF0IEfEp2F3ZGV4fjQ1fFJhYmF0IE1hbHRhfjQ2fFNhZml+NDd8U2FuIMSgaWxqYW5+NDh8U2FuIMSgd2Fubn40OXxTYW4gTGF3cmVuen41MHxTYW4gUGF3bCBpbC1CYcSnYXJ+NTF8U2FubmF0fjUyfFNhbnRhIEx1xItpamF+NTN8U2FudGEgVmVuZXJhfjU0fFNpxKHEoWlld2l+NTV8U2xpZW1hfjU2fFN3aWVxaX41N3xUYWkgWGJpZXh+NTh8VGFyemllbn41OXxWYWxsZXR0YX42MHxYYWfEp3JhfjYxfFhld2tpamF+NjJ8WGfEp2FqcmF+NjN8xbthYmJhcn42NHzFu2ViYnXEoSBHxKdhd2RlfjY1fMW7ZWJidcShIE1hbHRhfjY2fMW7ZWp0dW5+Njd8xbt1cnJpZXF+NjhcIl0sW1wiTWFyc2hhbGwgSXNsYW5kc1wiLFwiTUhcIixcIkFpbGluZ2xhcGxhcH5BTEx8QWlsdWt+QUxLfEFybm9+QVJOfEF1cn5BVVJ8QmlraW5pIGFuZCBLaWxpfktJTHxFYm9ufkVCT3xKYWJhdH5KQUJ8SmFsdWl0fkpBTHxLd2FqYWxlaW5+S1dBfExhZX5MQUV8TGlifkxJQnxMaWtpZXB+TElLfE1hanVyb35NQUp8TWFsb2VsYXB+TUFMfE1laml0fk1FSnxOYW1kcmlrfk5NS3xOYW11fk5NVXxSb25nZWxhcH5ST058VWphZX5VSkF8VXRyaWt+VVRJfFdvdGhvfldUSHxXb3RqZX5XVEpcIl0sW1wiTWFydGluaXF1ZVwiLFwiTVFcIixcIk1hcnRpbmlxdWVcIl0sW1wiTWF1cml0YW5pYVwiLFwiTVJcIixcIkFkcmFyfjA3fEFzc2FiYX4wM3xCcmFrbmF+MDV8RGFraGxldCBOb3VhZGhpYm91fjA4fEdvcmdvbH4wNHxHdWlkaW1ha2F+MTB8SG9kaCBFY2ggQ2hhcmd1aX4wMXxIb2RoIEVsIEdoYXJiaX4wMnxJbmNoaXJpfjEyfE5vdWFrY2hvdHQgTm9yZH4xNHxOb3Vha2Nob3R0IE91ZXN0fjEzfE5vdWFrY2hvdHQgU3VkfjE1fFRhZ2FudH4wOXxUaXJpcyBaZW1tb3VyfjExfFRyYXJ6YX4wNlwiXSxbXCJNYXVyaXRpdXNcIixcIk1VXCIsXCJBZ2FsZWdhIElzbGFuZHN+QUd8QmVhdSBCYXNzaW4tUm9zZSBIaWxsfkJSfEJsYWNrIFJpdmVyfkJMfENhcmdhZG9zIENhcmFqb3MgU2hvYWxzfkNDfEN1cmVwaXBlfkNVfEZsYWNxfkZMfEdyYW5kIFBvcnR+R1B8TW9rYX5NT3xQYW1wbGVtb3Vzc2VzflBBfFBsYWluZXMgV2lsaGVtc35QV3xQb3J0IExvdWlzIChDaXR5KX5QVXxQb3J0IExvdWlzflBMfFJpdmllcmUgZHUgUmVtcGFydH5SUnxSb2RyaWd1ZXMgSXNsYW5kflJPfFNhdmFubmV+U0F8VmFjb2FzLVBob2VuaXh+Q1BcIl0sW1wiTWF5b3R0ZVwiLFwiWVRcIixcIkR6YW91ZHppfjAxfFBhbWFuZHppfjAyfE1hbW91ZHpvdX4wM3xEZW1iZW5pfjA0fEJhbmRyw6lsw6l+MDV8S2FuaS1Lw6lsaX4wNnxCb3XDqW5pfjA3fENoaXJvbmd1aX4wOHxTYWRhfjA5fE91YW5nYW5pfjEwfENoaWNvbml+MTF8VHNpbmdvbml+MTJ8TSdUc2FuZ2Ftb3VqaX4xM3xBY291YX4xNHxNdHNhbWJvcm9+MTV8QmFuZHJhYm91YX4xNnxLb3VuZ291fjE3XCJdLFtcIk1leGljb1wiLFwiTVhcIixcIkFndWFzY2FsaWVudGVzfkFHVXxCYWphIENhbGlmb3JuaWF+QkNOfEJhamEgQ2FsaWZvcm5pYSBTdXJ+QkNTfENhbXBlY2hlfkNBTXxDaXVkYWQgZGUgTcOpeGljb35ESUZ8Q2hpYXBhc35DSFB8Q2hpaHVhaHVhfkNISHxDb2FodWlsYSBkZSBaYXJhZ296YX5DT0F8Q29saW1hfkNPTHxEdXJhbmdvfkRVUnxFc3RhZG8gZGUgTcOpeGljb35NRVh8R3VhbmFqdWF0b35HVUF8R3VlcnJlcm9+R1JPfEhpZGFsZ29+SElEfEphbGlzY29+SkFMfE1pY2hvYWPDoW4gZGUgT2NhbXBvfk1JQ3xNb3JlbG9zfk1PUnxOYXlhcml0fk5BWXxOdWV2byBMZcOzbn5OTEV8T2F4YWNhfk9BWHxQdWVibGF+UFVFfFF1ZXLDqXRhcm8gZGUgQXJ0ZWFnYX5RVUV8UXVpbnRhbmEgUm9vflJPT3xTYW4gTHVpcyBQb3Rvc8OtflNMUHxTaW5hbG9hflNJTnxTb25vcmF+U09OfFRhYmFzY29+VEFCfFRhbWF1bGlwYXN+VEFNfFRsYXhjYWxhflRMQXxWZXJhY3J1en5WRVJ8WXVjYXTDoW5+WVVDfFphY2F0ZWNhc35aQUNcIl0sW1wiTWljcm9uZXNpYSwgRmVkZXJhdGVkIFN0YXRlcyBvZlwiLFwiRk1cIixcIkNodXVrIChUcnVrKX5UUkt8S29zcmFlfktTQXxQb2hucGVpflBOSXxZYXB+WUFQXCJdLFtcIk1vbGRvdmFcIixcIk1EXCIsXCJBZW5paSBOb2l+QU58QmFzYXJhYmVhc2NhfkJTfELEg2zIm2l+QkF8QmVuZGVyfkJEfEJyaWNlbml+QlJ8Q2FodWx+Q0F8Q2FudGVtaXJ+Q1R8Q8SDbMSDcmHImWl+Q0x8Q8SDdciZZW5pfkNTfENoaciZaW7Eg3V+Q1V8Q2ltaciZbGlhfkNNfENyaXVsZW5pfkNSfERvbmR1yJllbml+RE98RHJvY2hpYX5EUnxEdWLEg3Nhcml+RFV8RWRpbmXIm35FRHxGxINsZciZdGl+RkF8RmxvcmXImXRpfkZMfEfEg2fEg3V6aWF+R0F8R2xvZGVuaX5HTHxIw65uY2XImXRpfkhJfElhbG92ZW5pfklBfExlb3ZhfkxFfE5pc3BvcmVuaX5OSXxPY25pyJthfk9DfE9yaGVpfk9SfFJlemluYX5SRXxSw67ImWNhbml+Ukl8U8OubmdlcmVpflNJfFNvcm9jYX5TT3xTdMOubmdhIE5pc3RydWx1aX5TTnxTdHLEg8iZZW5pflNUfMiYb2xkxINuZciZdGl+U0R8yJh0ZWZhbiBWb2TEg35TVnxUYXJhY2xpYX5UQXxUZWxlbmXImXRpflRFfFVuZ2hlbml+VU5cIl0sW1wiTW9uYWNvXCIsXCJNQ1wiLFwiQ29sbGV+Q0x8Q29uZGFtaW5lfkNPfEZvbnR2aWVpbGxlfkZPfEdhcmV+R0F8SmFyZGluIEV4b3RpcXVlfkpFfExhcnZvdHRvfkxBfE1hbGJvdXNxdWV0fk1BfE1vbmFjby1WaWxsZX5NT3xNb25lZ2hldHRpfk1HfE1vbnRlLUNhcmxvfk1DfE1vdWxpbnN+TVV8UG9ydC1IZXJjdWxlflBIfFNhaW50LVJvbWFuflNSfFNhaW50ZS1Ew6l2b3RlflNEfFNvdXJjZX5TT3xTcMOpbHVndWVzflNQfFZhbGxvbiBkZSBsYSBSb3Vzc2V+VlJcIl0sW1wiTW9uZ29saWFcIixcIk1OXCIsXCJBcmhhbmdheX4wNzN8QmF5YW4tT2xnaXl+MDcxfEJheWFuaG9uZ29yfjA2OXxCdWxnYW5+MDY3fERhcmhhbn4wMzd8RG9ybm9kfjA2MXxEb3Jub2dvdml+MDYzfER1bmRnb3ZpfjA1OXxEemF2aGFufjA2NXxHb3ZpLUFsdGF5fjA2NXxHb3ZpLVN1bWJlcn4wNjR8SG92ZH4wNDN8SG92c2dvbH4wNDF8T21ub2dvdml+MDUzfE92b3JoYW5nYXl+MDU1fFNlbGVuZ2V+MDQ5fFN1aGJhYXRhcn4wNTF8VG92fjA0N3xVbGFhbmJhYXRhcn4xfFV2c34wNDZcIl0sW1wiTW9udGVuZWdyb1wiLFwiTUVcIixcIkFuZHJpamV2aWNhfjAxfEJhcn4wMnxCZXJhbmV+MDN8QmlqZWxvIFBvbGplfjA0fEJ1ZHZhfjA1fENldGluamV+MDZ8RGFuaWxvdmdyYWR+MDd8R3VzaW5qZX4yMnxIZXJjZWcgTm92aX4wOHxLb2xhxaFpbn4wOXxLb3Rvcn4xMHxNb2prb3ZhY34xMXxOaWvFoWnEh34xMnxQZXRuaWNhfjIzfFBsYXZ+MTN8UGx1xb5pbmV+MTR8UGxqZXZsamF+MTV8UG9kZ29yaWNhfjE2fFJvxb5hamV+MTd8xaBhdm5pa34xOHxUaXZhdH4xOXxVbGNpbmp+MjB8xb1hYmxqYWt+MjFcIl0sW1wiTW9udHNlcnJhdFwiLFwiTVNcIixcIlNhaW50IEFudGhvbnl8U2FpbnQgR2Vvcmdlc3xTYWludCBQZXRlcidzXCJdLFtcIk1vcm9jY29cIixcIk1BXCIsXCJDaGFvdWlhLU91YXJkaWdoYX4wOXxEb3VraGFsYS1BYmRhfjEwfEbDqHMtQm91bGVtYW5lfjA1fEdoYXJiLUNocmFyZGEtQmVuaSBIc3Nlbn4wMnxHcmFuZCBDYXNhYmxhbmNhfjA4fEd1ZWxtaW0tRXMgU2VtYXJhfjE0fExhw6J5b3VuZS1Cb3VqZG91ci1TYWtpYSBlbCBIYW1yYX4xNXxNYXJyYWtlY2gtVGVuc2lmdC1BbCBIYW91en4xMXxNZWtuw6hzLVRhZmlsYWxldH4wNnxPcmllbnRhbH4wNHxPdWVkIGVkIERhaGFiLUxhZ291aXJhfjE2fFNvdXNzLU1hc3NhLURyw6JhfjEzfFRhZGxhLUF6aWxhbH4xMnxUYW5nZXItVMOpdG91YW5+MDF8VGF6YS1BbCBIb2NlaW1hLVRhb3VuYXRlfjAzXCJdLFtcIk1vemFtYmlxdWVcIixcIk1aXCIsXCJDYWJvIERlbGdhZG9+UHxHYXphfkd8SW5oYW1iYW5lfkl8TWFuaWNhfkJ8TWFwdXRvfkx8TWFwdXRvIChDaXR5KX5NUE18TmFtcHVsYX5OfE5pYXNzYX5BfFNvZmFsYX5TfFRldGV+VHxaYW1iZXppYX5RXCJdLFtcIk15YW5tYXJcIixcIk1NXCIsXCJBeWV5YXJ3YWR5fjA3fEJhZ29+MDJ8Q2hpbn4xNHxLYWNoaW5+MTF8S2F5YWh+MTJ8S2F5aW5+MTN8TWFnd2F5fjAzfE1hbmRhbGF5fjA0fE1vbn4xNXxOYXkgUHlpIFRhd34xOHxSYWtoaW5lfjE2fFNhZ2Fpbmd+MDF8U2hhbn4xN3xUYW5pbnRoYXJ5aX4wNXxZYW5nb25+MDZcIl0sW1wiTmFtaWJpYVwiLFwiTkFcIixcIkVyb25nb35FUnxIYXJkYXB+SEF8S2F2YW5nbyBFYXN0fktFfEthdmFuZ28gV2VzdH5LV3xLYXJhc35LQXxLaG9tYXN+S0h8S3VuZW5lfktVfE9oYW5nd2VuYX5PV3xPbWFoZWtlfk9IfE9tdXNhdGl+T1N8T3NoYW5hfk9OfE9zaGlrb3Rvfk9UfE90am96b25kanVwYX5PRHxaYW1iZXppfkNBXCJdLFtcIk5hdXJ1XCIsXCJOUlwiLFwiQWl3b34wMXxBbmFiYXJ+MDJ8QW5ldGFufjAzfEFuaWJhcmV+MDR8QmFpdGl+MDV8Qm9lfjA2fEJ1YWRhfjA3fERlbmlnb21vZHV+MDh8RXdhfjA5fElqdXd+MTB8TWVuZW5nfjExfE5pYm9rfjEyfFVhYm9lfjEzfFlhcmVufjE0XCJdLFtcIk5lcGFsXCIsXCJOUFwiLFwiQmFnbWF0aX5CQXxCaGVyaX5CSHxEaGF3YWxhZ2lyaX5ESHxHYW5kYWtpfkdBfEphbmFrcHVyfkpBfEthcm5hbGl+S0F8S29zaX5LT3xMdW1iaW5pfkxVfE1haGFrYWxpfk1BfE1lY2hpfk1FfE5hcmF5YW5pfk5BfFJhcHRpflJBfFNhZ2FybWF0aGF+U0F8U2V0aX5TRVwiXSxbXCJOZXRoZXJsYW5kc1wiLFwiTkxcIixcIkRyZW50aGV+RFJ8Rmxldm9sYW5kfkZMfEZyaWVzbGFuZH5GUnxHZWxkZXJsYW5kfkdFfEdyb25pbmdlbn5HUnxMaW1idXJnfkxJfE5vb3JkLUJyYWJhbnR+TkJ8Tm9vcmQtSG9sbGFuZH5OSHxPdmVyaWpzc2Vsfk9WfFV0cmVjaHR+VVR8WmVlbGFuZH5aRXxadWlkLUhvbGxhbmR+WkhcIl0sW1wiTmV3IENhbGVkb25pYVwiLFwiTkNcIixcIklsZXMgTG95YXV0ZXxOb3JkfFN1ZFwiXSxbXCJOZXcgWmVhbGFuZFwiLFwiTlpcIixcIkF1Y2tsYW5kfkFVS3xCYXkgb2YgUGxlbnR5fkJPUHxDYW50ZXJidXJ5fkNBTnxHaXNib3JuZX5HSVN8SGF3a2UncyBCYXl+SEtCfE1hcmxib3JvdWdofk1CSHxNYW5hd2F0dS1XYW5nYW51aX5NV1R8Tm9ydGhsYW5kfk5UTHxOZWxzb25+TlNOfE90YWdvfk9UQXxTb3V0aGxhbmR+U1RMfFRhcmFuYWtpflRLSXxUYXNtYW5+VEFTfFdhaWthdG9+V0tPfFdlbGxpbmd0b25+V0dOfFdlc3QgQ29hc3R+V1RDfENoYXRoYW0gSXNsYW5kcyBUZXJyaXRvcnl+Q0lUXCJdLFtcIk5pY2FyYWd1YVwiLFwiTklcIixcIkJvYWNvfkJPfENhcmF6b35DQXxDaGluYW5kZWdhfkNJfENob250YWxlc35DT3xFc3RlbMOtfkVTfEdyYW5hZGF+R1J8Smlub3RlZ2F+Skl8TGXDs25+TEV8TWFkcml6fk1EfE1hbmFndWF+TU58TWFzYXlhfk1TfE1hdGFnYWxwYX5NVHxOdWV2YSBTZWdvdmlhfk5TfFLDrW8gU2FuIEp1YW5+U0p8Uml2YXN+Ukl8QXRsw6FudGljbyBOb3J0ZX5BTnxBdGzDoW50aWNvIFN1cn5BU1wiXSxbXCJOaWdlclwiLFwiTkVcIixcIkFnYWRlen4xfERpZmZhfjJ8RG9zc29+M3xNYXJhZGl+NHxOaWFtZXl+OHxUYWhvdWF+NXxUaWxsYWLDqXJpfjZ8WmluZGVyfjdcIl0sW1wiTmlnZXJpYVwiLFwiTkdcIixcIkFiaWF+QUJ8QWJ1amEgRmVkZXJhbCBDYXBpdGFsIFRlcnJpdG9yeX5GQ3xBZGFtYXdhfkFEfEFrd2EgSWJvbX5BS3xBbmFtYnJhfkFOfEJhdWNoaX5CQXxCYXllbHNhfkJZfEJlbnVlfkJFfEJvcm5vfkJPfENyb3NzIFJpdmVyfkNSfERlbHRhfkRFfEVib255aX5FQnxFZG9+RUR8RWtpdGl+RUt8RW51Z3V+RU58R29tYmV+R098SW1vfklNfEppZ2F3YX5KSXxLYWR1bmF+S0R8S2Fub35LTnxLYXRzaW5hfktUfEtlYmJpfktFfEtvZ2l+S098S3dhcmF+S1d8TGFnb3N+TEF8TmFzc2FyYXdhfk5BfE5pZ2Vyfk5JfE9ndW5+T0d8T25kb35PTnxPc3Vufk9TfE95b35PWXxQbGF0ZWF1flBMfFJpdmVyc35SSXxTb2tvdG9+U098VGFyYWJhflRBfFlvYmV+WU98WmFtZmFyYX5aQVwiXSxbXCJOaXVlXCIsXCJOVVwiLFwiTml1ZVwiXSxbXCJOb3Jmb2xrIElzbGFuZFwiLFwiTkZcIixcIk5vcmZvbGsgSXNsYW5kXCJdLFtcIk5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc1wiLFwiTVBcIixcIk5vcnRoZXJuIElzbGFuZHN8Um90YXxTYWlwYW58VGluaWFuXCJdLFtcIk5vcndheVwiLFwiTk9cIixcIkFrZXJzaHVzfjAyfEF1c3QtQWdkZXJ+MDl8QnVza2VydWR+MDZ8Rmlubm1hcmt+MjB8SGVkbWFya34wNHxIb3JkYWxhbmR+MTJ8TcO4cmUgb2cgUm9tc2RhbH4xNXxOb3JkbGFuZH4xOHxOb3JkLVRyw7huZGVsYWd+MTd8T3BwbGFuZH4wNXxPc2xvfjAzfFJvZ2FsYW5kfjExfFNvZ24gb2cgRmpvcmRhbmV+MTR8U8O4ci1UcsO4bmRlbGFnfjE2fFRlbGVtYXJrfjA4fFRyb21zfjE5fFZlc3QtQWdkZXJ+MTB8VmVzdGZvbGR+MDd8w5hzdGZvbGR+MDF8SmFuIE1heWVufjIyfFN2YWxiYXJkfjIxXCJdLFtcIk9tYW5cIixcIk9NXCIsXCJBZCBEYWtoaWxpeWFofkRBfEFsIEJ1cmF5bWl+QlV8QWwgV3VzdGF+V1V8QXogWmFoaXJhaH5aQXxKYW51YiBhbCBCYXRpbmFofkJTfEphbnViIGFzaCBTaGFycWl5YWh+U1N8TWFzcWF0fk1BfE11c2FuZGFtfk1VfFNoYW1hbCBhbCBCYXRpbmFofkJKfFNoYW1hbCBhc2ggU2hhcnFpeWFoflNKfFp1ZmFyflpVXCJdLFtcIlBha2lzdGFuXCIsXCJQS1wiLFwixIB6xIFkIEthc2htxKtyfkpLfEJhbMWNY2hpc3TEgW5+QkF8R2lsZ2l0LUJhbHRpc3TEgW5+R0J8SXNsxIFtxIFixIFkfklTfEtoYcSrYmFyIFBha2h0xatua2h3xIFzfktQfFB1bmrEgWJ+UEJ8U2luZGh+U0R8RmVkZXJhbGx5IEFkbWluaXN0ZXJlZCBUcmliYWwgQXJlYXN+VEFcIl0sW1wiUGFsYXVcIixcIlBXXCIsXCJBaW1lbGlpa34wMDJ8QWlyYWl+MDA0fEFuZ2F1cn4wMTB8SGF0b2JvaGVpfjA1MHxLYXlhbmdlbH4xMDB8S29yb3J+MTUwfE1lbGVrZW9rfjIxMnxOZ2FyYWFyZH4yMTR8TmdhcmNoZWxvbmd+MjE4fE5nYXJkbWF1fjIyMnxOZ2F0cGFuZ34yMjR8TmdjaGVzYXJ+MjI2fE5nZXJlbWxlbmd1aX4yMjd8Tmdpd2FsfjIyOHxQZWxlbGl1fjM1MHxTb25zb3JhbH4zNTBcIl0sW1wiUGFsZXN0aW5lLCBTdGF0ZSBvZlwiLFwiUFNcIixcIkFrIEtoYWzEq2x+SEJOfEFsIFF1ZHN+SkVNfEFyxKvhuKnEgSB3YWwgQWdod8SBcn5KUkh8QmF5dCBMYeG4qW1+QlRIfERheXIgYWwgQmFsYeG4qX5ERUJ8R2hhenphaH5HWkF8SmFuxKtufkpFTnxLaMSBbiBZxatuaXN+S1lTfE7EgWJsdXN+TkJTfFFhbHHEq3lhaH5RUUF8UmFmYeG4qX5SRkh8UsSBbSBBbGzEgWggd2FsIELEq3JhaH5SQkh8U2FsZsSrdH5TTFR8U2hhbcSBbCBHaGF6emFofk5HWnzFosWrYsSBc35UQlN8xaLFq2xrYXJtflRLTVwiXSxbXCJQYW5hbWFcIixcIlBBXCIsXCJCb2NhcyBkZWwgVG9yb34xfENoaXJpcXXDrX40fENvY2zDqX4yfENvbMOzbn4zfERhcmnDqW5+NXxFbWJlcsOhfkVNfEhlcnJlcmF+NnxLdW5hIFlhbGF+S1l8TG9zIFNhbnRvc343fE5nw6RiZS1CdWdsw6l+TkJ8UGFuYW3DoX44fFBhbmFtw6EgT2VzdGV+MTB8VmVyYWd1YXN+OVwiXSxbXCJQYXB1YSBOZXcgR3VpbmVhXCIsXCJQR1wiLFwiQm91Z2FpbnZpbGxlfk5TQnxDZW50cmFsfkNQTXxDaGltYnV+Q1BLfEVhc3QgTmV3IEJyaXRhaW5+RUJSfEVhc3QgU2VwaWt+RVNXfEVhc3Rlcm4gSGlnaGxhbmRzfkVIR3xFbmdhfkVQV3xHdWxmfkdQS3xIZWxhfkhMQXxKaXdha2F+SldLfE1hZGFuZ35NT018TWFudXN+TVJMfE1pbG5lIEJheX5NQkF8TW9yb2Jlfk1QTHxQb3J0IE1vcmVzYnl+TkNEfE5ldyBJcmVsYW5kfk5JS3xOb3J0aGVybn5OUFB8U291dGhlcm4gSGlnaGxhbmRzflNITXxXZXN0IE5ldyBCcml0YWlufldCS3xXZXN0IFNlcGlrflNBTnxXZXN0ZXJufldQRHxXZXN0ZXJuIEhpZ2hsYW5kc35XSE1cIl0sW1wiUGFyYWd1YXlcIixcIlBZXCIsXCJBbHRvIFBhcmFndWF5fjE2fEFsdG8gUGFyYW5hfjEwfEFtYW1iYXl+MTN8QXN1bmNpb25+QVNVfENhYWd1YXp1fjV8Q2FhemFwYX42fENhbmluZGV5dX4xNHxDZW50cmFsfjExfENvbmNlcGNpb25+MXxDb3JkaWxsZXJhfjN8R3VhaXJhfjR8SXRhcHVhfjd8TWlzaW9uZXN+OHxOZWVtYnVjdX4xMnxQYXJhZ3Vhcml+OXxQcmVzaWRlbnRlIEhheWVzfjE1fFNhbiBQZWRyb34yXCJdLFtcIlBlcnVcIixcIlBFXCIsXCJBbWF6b25hc35BTUF8QW5jYXNofkFOQ3xBcHVyaW1hY35BUFV8QXJlcXVpcGF+QVJFfEF5YWN1Y2hvfkFZQXxDYWphbWFyY2F+Q0FKfENhbGxhb35DQUx8Q3VzY29+Q1VTfEh1YW5jYXZlbGljYX5IVVZ8SHVhbnVjb35IVUN8SWNhfklDQXxKdW5pbn5KVU58TGEgTGliZXJ0YWR+TEFMfExhbWJheWVxdWV+TEFNfExpbWF+TElNfExvcmV0b35MT1J8TWFkcmUgZGUgRGlvc35NRER8TW9xdWVndWF+TU9RfE11bmljaXBhbGlkYWQgTWV0cm9wb2xpdGFuYSBkZSBMaW1hfkxNQXxQYXNjb35QQVN8UGl1cmF+UElVfFB1bm9+UFVOfFNhbiBNYXJ0aW5+U0FNfFRhY25hflRBQ3xUdW1iZXN+VFVNfFVjYXlhbGl+VUNBXCJdLFtcIlBoaWxpcHBpbmVzXCIsXCJQSFwiLFwiQWJyYX5BQlJ8QWd1c2FuIGRlbCBOb3J0ZX5BR058QWd1c2FuIGRlbCBTdXJ+QUdTfEFrbGFufkFLTHxBbGJheX5BTEJ8QW50aXF1ZX5BTlR8QXBheWFvfkFQQXxBdXJvcmF+QVVSfEJhc2lsYW5+QkFTfEJhdGFhbn5CQU58QmF0YW5lc35CVE58QmF0YW5nYXN+QlRHfEJlbmd1ZXR+QkVOfEJpbGlyYW5+QklMfEJvaG9sfkJPSHxCdWtpZG5vbn5CVUt8QnVsYWNhbn5CVUx8Q2FnYXlhbn5DQUd8Q2FtYXJpbmVzIE5vcnRlfkNBTnxDYW1hcmluZXMgU3VyfkNBU3xDYW1pZ3Vpbn5DQU18Q2FwaXp+Q0FQfENhdGFuZHVhbmVzfkNBVHxDYXZpdGV+Q0FWfENlYnV+Q0VCfENvbXBvc3RlbGF+Q09NfENvdGFiYXRvfk5DT3xEYXZhbyBkZWwgTm9ydGV+REFWfERhdmFvIGRlbCBTdXJ+REFTfERhdmFvIE9jY2lkZW50YWx+RFZPfERhdmFvIE9yaWVudGFsfkRBT3xEaW5hZ2F0IElzbGFuZHN+RElOfEVhc3Rlcm4gU2FtYXJ+RUFTfEd1aW1hcmFzfkdVSXxJZnVnYW9+SUZVfElsb2NvcyBOb3J0ZX5JTE58SWxvY29zIFN1cn5JTFN8SWxvaWxvfklMSXxJc2FiZWxhfklTQXxLYWxpbmdhfktBTHxMYSBVbmlvbn5MVU58TGFndW5hfkxBR3xMYW5hbyBkZWwgTm9ydGV+TEFOfExhbmFvIGRlbCBTdXJ+TEFTfExleXRlfkxFWXxNYWd1aW5kYW5hb35NQUd8TWFzYmF0ZX5NQVN8TWV0cm8gTWFuaWxhfjAwfE1pbmRvcm8gT2NjaWRlbnRhbH5NREN8TWluZG9ybyBPcmllbnRhbH5NRFJ8TWlzYW1pcyBPY2NpZGVudGFsfk1TQ3xNaXNhbWlzIE9yaWVudGFsfk1TUnxNb3VudGFpbiBQcm92aW5jZX5NT1V8TmVncm9zIE9jY2lkZW50YWx+TkVDfE5lZ3JvcyBPcmllbnRhbH5ORVJ8Tm9ydGhlcm4gU2FtYXJ+TlNBfE51ZXZhIEVjaWphfk5VRXxOdWV2YSBWaXpjYXlhfk5VVnxQYWxhd2FuflBMV3xQYW1wYW5nYX5QQU18UGFuZ2FzaW5hbn5QQU58UXVlem9uflFVRXxRdWlyaW5vflFVSXxSaXphbH5SSVp8Um9tYmxvbn5ST018U2FtYXJ+V1NBfFNhcmFuZ2FuaX5TQVJ8U2lxdWlqb3J+U0lHfFNvcnNvZ29uflNPUnxTb3V0aGVybiBMZXl0ZX5TTEV8U3VsdGFuIEt1ZGFyYXR+QVVLfFN1bHV+U0xVfFN1cmlnYW8gZGVsIE5vcnRlflNVTnxTdXJpZ2FvIGRlbCBTdXJ+U1VSfFRhcmxhY35UQVJ8VGF3aS1UYXdpflRBV3xaYW1iYWxlc35aTUJ8WmFtYm9hbmdhIGRlbCBOb3J0ZX5aQU58WmFtYm9hbmdhIGRlbCBTdXJ+WkFTfFphbWJvYW5nYSBTaWJ1Z2F5flpTSVwiXSxbXCJQaXRjYWlyblwiLFwiUE5cIixcIlBpdGNhaXJuIElzbGFuZHNcIl0sW1wiUG9sYW5kXCIsXCJQTFwiLFwiRG9sbm/Fm2zEhXNraWV+RFN8S3VqYXdza28tcG9tb3Jza2llfktQfMWBw7NkemtpZX5MRHxMdWJlbHNraWV+TFV8THVidXNraWV+TEJ8TWFsb3BvbHNraWV+TUF8TWF6b3dpZWNraWV+TVp8T3BvbHNraWV+T1B8UG9ka2FycGFja2llflBLfFBvZGxhc2tpZX5QRHxQb21vcnNraWV+UE18xZpsxIVza2llflNMfMWad2nEmXRva3J6eXNraWV+U0t8V2FybWnFhHNrby1tYXp1cnNraWV+V058V2llbGtvcG9sc2tpZX5XUHxaYWNob2RuaW9wb21vcnNraWV+WlBcIl0sW1wiUG9ydHVnYWxcIixcIlBUXCIsXCJBY29yZXN+MjB8QXZlaXJvfjAxfEJlamF+MDJ8QnJhZ2F+MDN8QnJhZ2FuY2F+MDR8Q2FzdGVsbyBCcmFuY29+MDV8Q29pbWJyYX4wNnxFdm9yYX4wN3xGYXJvfjA4fEd1YXJkYX4wOXxMZWlyaWF+MTB8TGlzYm9hfjExfE1hZGVpcmF+MzB8UG9ydGFsZWdyZX4xMnxQb3J0b34xM3xTYW50YXJlbX4xNHxTZXR1YmFsfjE1fFZpYW5hIGRvIENhc3RlbG9+MTZ8VmlsYSBSZWFsfjE3fFZpc2V1fjE4XCJdLFtcIlB1ZXJ0byBSaWNvXCIsXCJQUlwiLFwiQWRqdW50YXN8QWd1YWRhfEFndWFkaWxsYXxBZ3VhcyBCdWVuYXN8QWlib25pdG98QW5hc2NvfEFyZWNpYm98QXJyb3lvfEJhcmNlbG9uZXRhfEJhcnJhbnF1aXRhc3xCYXlhbW9ufENhYm8gUm9qb3xDYWd1YXN8Q2FtdXl8Q2Fub3ZhbmFzfENhcm9saW5hfENhdHxDZWliYXxDaWFsZXN8Q2lkcmF8Q29hbW98Q29tZXJpb3xDb3JvemFsfEN1bGVicmF8RG9yYWRvfEZhamFyZG98RmxvcmlkYXxHdWFuaWNhfEd1YXlhbWF8R3VheWFuaWxsYXxHdWF5bmFib3xHdXJhYm98SGF0aWxsb3xIb3JtaWd1ZXJvc3xIdW1hY2FvfElzYWJlfEp1YW5hIERpYXp8SnVuY29zfExhamFzfExhcmVzfExhcyBNYXJpYXN8TGFzIG9pemF8THVxdWlsbG98TWFuYXRpfE1hcmljYW98TWF1bmFib3xNYXlhZ3VlenxNb2NhfE1vcm92aXN8TmFndWFib3xOYXJhbmppdG98T3JvY292aXN8UGF0aWxsYXN8UGVudWVsYXN8UG9uY2V8UXVlYnJhZGlsbGFzfFJpbmNvbnxSaW8gR3JhbmRlfFNhYmFuYSBsaW5hc3xTYW4gR2VybWFufFNhbiBKdWFufFNhbiBMb3JlbnpvfFNhbiBTZWJhc3RpYW58U2FudGEgSXNhYmVsfFRvYSBBbHRhfFRvYSBCYWphfFRydWppbGxvIEFsdG98VXR1YWRvfFZlZ2EgQWx0YXxWZWdhIHVlc3xWaWxsYWxiYXxZYWJ1Y29hfFlhdWNvXCJdLFtcIlFhdGFyXCIsXCJRQVwiLFwiQWQgRGF34bipYWh+REF8QWwgS2hhd3Igd2EgYWRoIERoYWtoxKtyYWh+S0h8QWwgV2FrcmFofldBfEFyIFJheXnEgW5+UkF8QXNoIFNoYW3EgWx+TVN8QXrMpyBaYcynYMSBeWluflpBfFVtbSDFnmFsxIFsflVTXCJdLFtcIlLDqXVuaW9uXCIsXCJSRVwiLFwiUsOpdW5pb25cIl0sW1wiUm9tYW5pYVwiLFwiUk9cIixcIkFsYmF+QUJ8QXJhZH5BUnxBcmdlc35BR3xCYWNhdX5CQ3xCaWhvcn5CSHxCaXN0cml0YS1OYXNhdWR+Qk58Qm90b3Nhbml+QlR8QnJhaWxhfkJSfEJyYXNvdn5CVnxCdWN1cmVzdGl+QnxCdXphdX5CWnxDYWxhcmFzaX5DTHxDYXJhcy1TZXZlcmlufkNTfENsdWp+Q0p8Q29uc3RhbnRhfkNUfENvdmFzbmF+Q1Z8RGFtYm92aXRhfkRCfERvbGp+REp8R2FsYXRpfkdMfEdpdXJnaXV+R1J8R29yan5HSnxIYXJnaGl0YX5IUnxIdW5lZG9hcmF+SER8SWFsb21pdGF+SUx8SWFzaX5JU3xNYXJhbXVyZXN+TU18TWVoZWRpbnRpfk1IfE11cmVzfk1TfE5lYW10fk5UfE9sdH5PVHxQcmFob3ZhflBIfFNhbGFqflNKfFNhdHUgTWFyZX5TTXxTaWJpdX5TQnxTdWNlYXZhflNWfFRlbGVvcm1hbn5UUnxUaW1pc35UTXxUdWxjZWF+VEx8VmFsY2VhflZMfFZhc2x1aX5WU3xWcmFuY2VhflZOXCJdLFtcIlJ1c3NpYW4gRmVkZXJhdGlvblwiLFwiUlVcIixcIlJlcHVibGljIG9mIEFkeWdlYX5BRHxSZXB1YmxpYyBvZiBBbHRhaSAoR29ybm8tQWx0YXlzayl+QUx8QWx0YWkgS3JhaX5BTFR8QW11ciBPYmxhc3R+QU1VfEFya2hhbmdlbHNrIE9ibGFzdH5BUkt8QXN0cmFraGFuIE9ibGFzdH5BU1R8UmVwdWJsaWMgb2YgQmFzaGtvcnRvc3Rhbn5CQXxCZWxnb3JvZCBPYmxhc3R+QkVMfEJyeWFuc2sgT2JsYXN0fkJSWXxSZXB1YmxpYyBvZiBCdXJ5YXRpYX5CVXxDaGVjaGVuIFJlcHVibGljfkNFfENoZWx5YWJpbnNrIE9ibGFzdH5DSEV8Q2h1a290a2EgQXV0b25vbW91cyBPa3J1Z35DSFV8Q2h1dmFzaCBSZXB1YmxpY35DVXxSZXB1YmxpYyBvZiBEYWdlc3Rhbn5EQXxSZXB1YmxpYyBvZiBJbmd1c2hldGlhfklOfElya3V0c2sgT2JsYXN0fklSS3xJdmFub3ZvIE9ibGFzdH5JVkF8SmV3aXNoIEF1dG9ub21vdXMgT2JsYXN0fkpFV3xLYWJhcmRpbm8tQmFsa2FyIFJlcHVibGljfktCfEthbGluaW5ncmFkIE9ibGFzdH5LTE58UmVwdWJsaWMgb2YgS2FsbXlraWF+S0x8S2FsdWdhIE9ibGFzdH5LTFV8S2FtY2hhdGthIEtyYWl+S0FNfEthcmFjaGF5LUNoZXJrZXNzIFJlcHVibGljfktDfFJlcHVibGljIG9mIEthcmVsaWF+S1J8S2hhYmFyb3ZzayBLcmFpfktIQXxSZXB1YmxpYyBvZiBLaGFrYXNzaWF+S0t8S2hhbnR5LU1hbnNpIEF1dG9ub21vdXMgT2tydWcgLSBZdWdyYX5LSE18S2VtZXJvdm8gT2JsYXN0fktFTXxLaXJvdiBPYmxhc3R+S0lSfEtvbWkgUmVwdWJsaWN+S098S29zdHJvbWEgT2JsYXN0fktPU3xLcmFzbm9kYXIgS3JhaX5LREF8S3Jhc25veWFyc2sgS3JhaX5LWUF8S3VyZ2FuIE9ibGFzdH5LR058S3Vyc2sgT2JsYXN0fktSU3xMZW5pbmdyYWQgT2JsYXN0fkxFTnxMaXBldHNrIE9ibGFzdH5MSVB8TWFnYWRhbiBPYmxhc3R+TUFHfE1hcmkgRWwgUmVwdWJsaWN+TUV8UmVwdWJsaWMgb2YgTW9yZG92aWF+TU98TW9zY293IE9ibGFzdH5NT1N8TW9zY293fk1PV3xNdXJtYW5zayBPYmxhc3R+TVV8TmVuZXRzIEF1dG9ub21vdXMgT2tydWd+TkVOfE5pemhueSBOb3Znb3JvZCBPYmxhc3R+TklafE5vdmdvcm9kIE9ibGFzdH5OR1J8Tm92b3NpYmlyc2sgT2JsYXN0fk5WU3xPbXNrIE9ibGFzdH5PTVN8T3JlbmJ1cmcgT2JsYXN0fk9SRXxPcnlvbCBPYmxhc3R+T1JMfFBlbnphIE9ibGFzdH5QTlp8UGVybSBLcmFpflBFUnxQcmltb3Jza3kgS3JhaX5QUkl8UHNrb3YgT2JsYXN0flBTS3xSb3N0b3YgT2JsYXN0flJPU3xSeWF6YW4gT2JsYXN0flJZQXxTYWludCBQZXRlcnNidXJnflNQRXxTYWtoYSAoWWFrdXRpYSkgUmVwdWJsaWN+U0F8U2FraGFsaW4gT2JsYXN0flNBS3xTYW1hcmEgT2JsYXN0flNBTXxTYXJhdG92IE9ibGFzdH5TQVJ8UmVwdWJsaWMgb2YgTm9ydGggT3NzZXRpYS1BbGFuaWF+Tk9BfFNtb2xlbnNrIE9ibGFzdH5TTU98U3RhdnJvcG9sIEtyYWl+U1RBfFN2ZXJkbG92c2sgT2JsYXN0flNWRXxUYW1ib3YgT2JsYXN0flRBTXxSZXB1YmxpYyBvZiBUYXRhcnN0YW5+VEF8VG9tc2sgT2JsYXN0flRPTXxUdXZhIFJlcHVibGljflRVfFR1bGEgT2JsYXN0flRVTHxUdmVyIE9ibGFzdH5UVkV8VHl1bWVuIE9ibGFzdH5UWVV8VWRtdXJ0IFJlcHVibGljflVEfFVseWFub3ZzayBPYmxhc3R+VUxZfFZsYWRpbWlyIE9ibGFzdH5WTEF8Vm9sZ29ncmFkIE9ibGFzdH5WR0d8Vm9sb2dkYSBPYmxhc3R+VkxHfFZvcm9uZXpoIE9ibGFzdH5WT1J8WWFtYWxvLU5lbmV0cyBBdXRvbm9tb3VzIE9rcnVnfllBTnxZYXJvc2xhdmwgT2JsYXN0fllBUnxaYWJheWthbHNreSBLcmFpflpBQlwiXSxbXCJSd2FuZGFcIixcIlJXXCIsXCJLaWdhbGl+MDF8RWFzdGVybn4wMnxOb3J0aGVybn4wM3xXZXN0ZXJufjA0fFNvdXRoZXJufjA1XCJdLFtcIlNhaW50IEJhcnRow6lsZW15XCIsXCJCTFwiLFwiQXUgVmVudH4wMnxTb3VzIGxlIFZlbnR+MDFcIl0sW1wiU2FpbnQgSGVsZW5hLCBBc2NlbnNpb24gYW5kIFRyaXN0YW4gZGEgQ3VuaGFcIixcIlNIXCIsXCJBc2NlbnNpb25+QUN8U2FpbnQgSGVsZW5hfkhMfFRyaXN0YW4gZGEgQ3VuaGF+VEFcIl0sW1wiU2FpbnQgS2l0dHMgYW5kIE5ldmlzXCIsXCJLTlwiLFwiU2FpbnQgS2l0dHN+S3xOZXZpc35OXCJdLFtcIlNhaW50IEx1Y2lhXCIsXCJMQ1wiLFwiQW5zZS1sYS1SYXllfjAxfENhbmFyaWVzfjEyfENhc3RyaWVzfjAyfENob2lzZXVsfjAzfERlbm5lcnl+MDV8R3JvcyBJc2xldH4wNnxMYWJvcmllfjA3fE1pY291ZH4wOHxTb3VmcmllcmV+MTB8VmlldXggRm9ydH4xMVwiXSxbXCJTYWludCBNYXJ0aW5cIixcIk1GXCIsXCJTYWludCBNYXJ0aW5cIl0sW1wiU2FpbnQgUGllcnJlIGFuZCBNaXF1ZWxvblwiLFwiUE1cIixcIk1pcXVlbG9ufFNhaW50IFBpZXJyZVwiXSxbXCJTYWludCBWaW5jZW50IGFuZCB0aGUgR3JlbmFkaW5lc1wiLFwiVkNcIixcIkNoYXJsb3R0ZX4wMXxHcmVuYWRpbmVzfjA2fFNhaW50IEFuZHJld34wMnxTYWludCBEYXZpZH4wM3xTYWludCBHZW9yZ2V+MDR8U2FpbnQgUGF0cmlja34wNVwiXSxbXCJTYW1vYVwiLFwiV1NcIixcIkEnYW5hfkFBfEFpZ2EtaS1sZS1UYWl+QUx8QXR1YX5BVHxGYSdhc2FsZWxlYWdhfkZBfEdhZ2EnZW1hdWdhfkdFfEdhZ2FpZm9tYXVnYX5HSXxQYWxhdWxpflBBfFNhdHVwYSdpdGVhflNBfFR1YW1hc2FnYX5UVXxWYSdhLW8tRm9ub3RpflZGfFZhaXNpZ2Fub35WU1wiXSxbXCJTYW4gTWFyaW5vXCIsXCJTTVwiLFwiQWNxdWF2aXZhfjAxfEJvcmdvIE1hZ2dpb3JlfjA2fENoaWVzYW51b3ZhfjAyfERvbWFnbmFub34wM3xGYWV0YW5vfjA0fEZpb3JlbnRpbm9+MDV8TW9udGVnaWFyZGlub34wOHxTYW4gTWFyaW5vfjA3fFNlcnJhdmFsbGV+MDlcIl0sW1wiU2FvIFRvbWUgYW5kIFByaW5jaXBlXCIsXCJTVFwiLFwiUHJpbmNpcGV+UHxTYW8gVG9tZX5TXCJdLFtcIlNhdWRpIEFyYWJpYVwiLFwiU0FcIixcIidBc2lyfjE0fEFsIEJhaGFofjExfEFsIEh1ZHVkIGFzaCBTaGFtYWxpeWFofjA4fEFsIEphd2Z+MTJ8QWwgTWFkaW5haCBhbCBNdW5hd3dhcmFofjAzfEFsIFFhc2ltfjA1fEFyIFJpeWFkfjAxfEFzaCBTaGFycWl5YWh+MDR8SGEnaWx+MDZ8SmF6YW5+MDl8TWFra2FoIGFsIE11a2FycmFtYWh+MDJ8TmFqcmFufjEwfFRhYnVrfjA3XCJdLFtcIlNlbmVnYWxcIixcIlNOXCIsXCJEYWthcn5ES3xEaW91cmJlbH5EQnxGYXRpY2t+Rkt8S2FmZnJpbmV+S0F8S2FvbGFja35LTHxLZWRvdWdvdX5LRXxLb2xkYX5LRHxMb3VnYX5MR3xNYXRhbX5NVHxTYWludC1Mb3Vpc35TTHxTZWRoaW91flNFfFRhbWJhY291bmRhflRDfFRoaWVzflRIfFppZ3VpbmNob3J+WkdcIl0sW1wiU2VyYmlhXCIsXCJSU1wiLFwiQmVvZ3JhZCAoQmVsZ3JhZGUpfjAwfEJvcnNraX4xNHxCcmFuacSNZXZza2l+MTF8SmFibGFuacSNa2l+MjN8SnXFvm5vYmHEjWtpfjA2fEp1xb5ub2JhbmF0c2tpfjA0fEtvbHViYXJza2l+MDl8S29zb3Zza2l+MjV8S29zb3Zza28tTWl0cm92YcSNa2l+Mjh8S29zb3Zza28tUG9tb3JhdnNraX4yOXxNYcSNdmFuc2tpfjA4fE1vcmF2acSNa2l+MTd8TmnFoWF2c2tpfjIwfFDEjWluanNraX4yNHxQZcSHa2l+MjZ8UGlyb3Rza2l+MjJ8UG9kdW5hdnNraX4xMHxQb21vcmF2c2tpfjEzfFByaXpyZW5za2l+Mjd8UmFzaW5za2l+MTl8UmHFoWtpfjE4fFNldmVybm9iYcSNa2l+MDF8U2V2ZXJub2JhbmF0c2tpfjAzfFNyZWRuamViYW5hdHNraX4wMnxTcmVtc2tpfjA3fMWgdW1hZGlqc2tpfjEyfFRvcGxpxI1raX4yMXxaYWplxI1hcnNraX4xNXxaYXBhZG5vYmHEjWtpfjA1fFpsYXRpYm9yc2tpfjE2XCJdLFtcIlNleWNoZWxsZXNcIixcIlNDXCIsXCJBbnNlIGF1eCBQaW5zfjAxfEFuc2UgQm9pbGVhdX4wMnxBbnNlIEV0b2lsZX4wM3xBbnNlIFJveWFsZX4wNXxBbnUgQ2FwfjA0fEJhaWUgTGF6YXJlfjA2fEJhaWUgU2FpbnRlIEFubmV+MDd8QmVhdSBWYWxsb25+MDh8QmVsIEFpcn4wOXxCZWwgT21icmV+MTB8Q2FzY2FkZX4xMXxHbGFjaXN+MTJ8R3JhbmQnQW5zZSBNYWhlfjEzfEdyYW5kJ0Fuc2UgUHJhc2xpbn4xNHxMYSBEaWd1ZX4xNXxMYSBSaXZpZXJlIEFuZ2xhaXNlfjE2fExlcyBNYW1lbGxlc34yNHxNb250IEJ1eHRvbn4xN3xNb250IEZsZXVyaX4xOHxQbGFpc2FuY2V+MTl8UG9pbnRlIExhIFJ1ZX4yMHxQb3J0IEdsYXVkfjIxfFJvY2hlIENhaW1hbn4yNXxTYWludCBMb3Vpc34yMnxUYWthbWFrYX4yM1wiXSxbXCJTaWVycmEgTGVvbmVcIixcIlNMXCIsXCJFYXN0ZXJufkV8Tm9ydGhlcm5+TnxTb3V0aGVybn5TfFdlc3Rlcm5+V1wiXSxbXCJTaW5nYXBvcmVcIixcIlNHXCIsXCJDZW50cmFsIFNpbmdhcG9yZX4wMXxOb3J0aCBFYXN0fjAyfE5vcnRoIFdlc3R+MDN8U291dGggRWFzdH4wNHxTb3V0aCBXZXN0fjA1XCJdLFtcIlNpbnQgTWFhcnRlbiAoRHV0Y2ggcGFydClcIixcIlNYXCIsXCJTaW50IE1hYXJ0ZW5cIl0sW1wiU2xvdmFraWFcIixcIlNLXCIsXCJCYW5za29ieXN0cmlja3l+QkN8QnJhdGlzbGF2c2t5fkJMfEtvc2lja3l+S0l8Tml0cmlhbnNreX5OSXxQcmVzb3Zza3l+UFZ8VHJlbmNpYW5za3l+VEN8VHJuYXZza3l+VEF8WmlsaW5za3l+WklcIl0sW1wiU2xvdmVuaWFcIixcIlNJXCIsXCJBamRvdnNjaW5hfjAwMXxBcGFjZX4xOTV8QmVsdGluY2l+MDAyfEJlbmVkaWt0fjE0OHxCaXN0cmljYSBvYiBTb3RsaX4xNDl8QmxlZH4wMDN8Qmxva2V+MTUwfEJvaGluan4wMDR8Qm9yb3ZuaWNhfjAwNXxCb3ZlY34wMDZ8QnJhc2xvdmNlfjE1MXxCcmRhfjAwN3xCcmV6aWNlfjAwOXxCcmV6b3ZpY2F+MDA4fENhbmtvdmF+MTUyfENlbGplfjAxMXxDZXJrbGplIG5hIEdvcmVuanNrZW1+MDEyfENlcmtuaWNhfjAxM3xDZXJrbm9+MDE0fENlcmt2ZW5qYWt+MTUzfENpcmt1bGFuZX4xOTZ8Q3JlbnNvdmNpfjAxNXxDcm5hIG5hIEtvcm9za2VtfjAxNnxDcm5vbWVsan4wMTd8RGVzdHJuaWt+MDE4fERpdmFjYX4wMTl8RG9iamV+MTU0fERvYnJlcG9samV+MDIwfERvYnJuYX4xNTV8RG9icm92YS1Qb2xob3YgR3JhZGVjfjAyMXxEb2Jyb3ZuaWt+MTU2fERvbCBwcmkgTGp1YmxqYW5pfjAyMnxEb2xlbmpza2UgVG9wbGljZX4xNTd8RG9temFsZX4wMjN8RG9ybmF2YX4wMjR8RHJhdm9ncmFkfjAyNXxEdXBsZWt+MDI2fEdvcmVuamEgVmFzLVBvbGphbmV+MDI3fEdvcmlzbmljYX4wMjh8R29yamV+MjA3fEdvcm5qYSBSYWRnb25hfjAyOXxHb3JuamkgR3JhZH4wMzB8R29ybmppIFBldHJvdmNpfjAzMXxHcmFkfjE1OHxHcm9zdXBsamV+MDMyfEhhamRpbmF+MTU5fEhvY2UtU2xpdm5pY2F+MTYwfEhvZG9zfjE2MXxIb3JqdWx+MTYyfEhyYXN0bmlrfjAzNHxIcnBlbGplLUtvemluYX4wMzV8SWRyaWphfjAzNnxJZ34wMzd8SWxpcnNrYSBCaXN0cmljYX4wMzh8SXZhbmNuYSBHb3JpY2F+MDM5fEl6b2xhfjA0MHN8SmVzZW5pY2V+MDQxfEp1cnNpbmNpfjA0MnxLYW1uaWt+MDQzfEthbmFsfjA0NHxLaWRyaWNldm9+MDQ1fEtvYmFyaWR+MDQ2fEtvYmlsamV+MDQ3fEtvY2V2amV+MDQ4fEtvbWVufjA0OXxLb21lbmRhfjE2NHxLb3Blcn4wNTB8S29kYW5qZXZpY2EgbmEgS3JraX4xOTd8S29zdGVsfjE2NXxLb3pqZX4wNTF8S3Jhbmp+MDUyfEtyYW5qc2thIEdvcmF+MDUzfEtyaXpldmNpfjE2NnxLcnNrb34wNTR8S3VuZ290YX4wNTV8S3V6bWF+MDU2fExhc2tvfjA1N3xMZW5hcnR+MDU4fExlbmRhdmF+MDU5fExpdGlqYX4wNjh8TGp1YmxqYW5hfjA2MXxManVibm9+MDYyfExqdXRvbWVyfjA2M3xMb2ctRHJhZ29tZXJ+MjA4fExvZ2F0ZWN+MDY0fExvc2thIERvbGluYX4wNjV8TG9za2kgUG90b2t+MDY2fExvdnJlbmMgbmEgUG9ob3JqdX4xNjd8THVrb3ZpY2F+MDY4fEx1Y2V+MDY3fE1hanNwZXJrfjA2OXxNYWtvbGV+MTk4fE1hcmlib3J+MDcwfE1hcmtvdmNpfjE2OHxNZWR2b2RlfjA3MXxNZW5nZXN+MDcyfE1ldGxpa2F+MDczfE1lemljYX4wNzR8TWlrbGF2eiBuYSBEcmF2c2tlbSBQb2xqdX4xNjl8TWlyZW4tS29zdGFuamV2aWNhfjA3NXxNaXJuYX4yMTJ8TWlybmEgUGVjfjE3MHxNaXNsaW5qYX4wNzZ8TW9rcm9ub2ctVHJlYmVsbm9+MTk5fE1vcmF2Y2V+MDc3fE1vcmF2c2tlIFRvcGxpY2V+MDc4fE1vemlyamV+MDc5fE11cnNrYSBTb2JvdGF+MDgwfE5ha2xvfjA4MnxOYXphcmplfjA4M3xOb3ZhIEdvcmljYX4wODR8Tm92byBNZXN0b34wODV8T2RyYW5jaX4wODZ8T3Jtb3p+MDg3fE9zaWxuaWNhfjA4OHxQZXNuaWNhfjA4OXxQaXJhbn4wOTB8UGl2a2F+MDkxfFBvZGNldHJ0ZWt+MDkyfFBvZGxlaG5pa34xNzJ8UG9kdmVsa2F+MDkzfFBvbGpjYW5lfjIwMHxQb3N0b2puYX4wOTR8UHJlYm9sZH4xNzR8UHJlZGR2b3J+MDk1fFByZXZhbGplfjE3NXxQdHVqfjA5NnxSYWNlLUZyYW1+MDk4fFJhZGVjZX4wOTl8UmFkZW5jaX4xMDB8UmFkbGplIG9iIERyYXZpfjEwMXxSYWRvdmxqaWNhfjEwMnxSYXZuZSBuYSBLb3Jvc2tlbX4xMDN8UmF6a3JpemplfjE3NnxSZWNpY2Egb2IgU2F2aW5qaX4yMDl8UmVuY2UtVm9ncnNrb34yMDF8UmlibmljYX4xMDR8UmlibmljYSBuYSBQb2Jvcml1fjE3N3xSb2dhc2thIFNsYXRpbmF+MTA2fFJvZ2Fzb3ZjaX4xMDV8Um9nYXRlY34xMDd8UnVzZX4xMDh8U2Fsb3ZjaX4wMzN8U2VsbmljYSBvYiBEcmF2aX4xNzh8U2VtaWN+MTA5fFNlbXBldGVyLVZydG9qYmF+MTgzfFNlbmN1cn4xMTd8U2VudGlsan4xMTh8U2VudGplcm5lan4xMTl8U2VudGp1cn4xMjB8U2VudHJ1cGVydH4yMTF8U2V2bmljYX4xMTB8U2V6YW5hfjExMXxTa29jamFufjEyMXxTa29mamEgTG9rYX4xMjJ8U2tvZmxqaWNhfjEyM3xTbG92ZW5qIEdyYWRlY34xMTJ8U2xvdmVuc2thIEJpc3RyaWNhfjExM3xTbG92ZW5za2UgS29uamljZX4xMTR8U21hcmplIHByaSBlbHNhaH4xMjR8U21hcmplc2tlIFRvcGxpY2V+MjA2fFNtYXJ0bm8gb2IgUGFraX4xMjV8U21hcnRubyBwcmkgTGl0aWppfjE5NHxTb2RyYXppY2F+MTc5fFNvbGNhdmF+MTgwfFNvc3Rhbmp+MTI2fFNyZWRpc2NlIG9iIERyYXZpfjIwMnxTdGFyc2V+MTE1fFN0b3JlfjEyN3xTdHJhemF+MjAzfFN2ZXRhIEFuYX4xODF8U3ZldGEgVHJvamljYSB2IFNsb3ZlbnNraWggR29yaWNhaH4yMDR8U3ZldGEgQW5kcmF6IHYgU2xvdmVuc2tpaCBHb3JpY2FofjE4MnxTdmV0aSBKdXJpan4xMTZ8U3ZldGkgSnVyaWogdiBTbG92ZW5za2loIEdvcmljYWh+MjEwfFN2ZXRpIFRvbWF6fjIwNXxUYWJvcn4xODR8VGlzaW5hfjEyOHxUb2xtaW5+MTI4fFRyYm92bGplfjEyOXxUcmVibmplfjEzMHxUcm5vdnNrYSBWYXN+MTg1fFRyemlufjE4NnxUcnppY34xMzF8VHVybmlzY2V+MTMyfFZlbGVuamV+MTMzfFZlbGlrYSBQb2xhbmF+MTg3fFZlbGlrZSBMYXNjZX4xMzR8VmVyemVqfjE4OHxWaWRlbX4xMzV8VmlwYXZhfjEzNnxWaXRhbmplfjEzN3xWb2RpY2V+MTM4fFZvam5pa34xMzl8VnJhbnNrb34xODl8VnJobmlrYX4xNDB8VnV6ZW5pY2F+MTQxfFphZ29yamUgb2IgU2F2aX4xNDJ8WmF2cmN+MTQzfFpyZWNlfjE0NHxaYWxlY34xOTB8WmVsZXpuaWtpfjE0NnxaZXRhbGV+MTkxfFppcml+MTQ3fFppcm92bmljYX4xOTJ8WnV6ZW1iZXJrfjE5M1wiXSxbXCJTb2xvbW9uIElzbGFuZHNcIixcIlNCXCIsXCJDZW50cmFsfkNFfENob2lzZXVsfkNIfEd1YWRhbGNhbmFsfkdVfEhvbmlhcmF+Q1R8SXNhYmVsfklTfE1ha2lyYS1VbGF3YX5NS3xNYWxhaXRhfk1MfFJlbm5lbGwgYW5kIEJlbGxvbmF+UkJ8VGVtb3R1flRFfFdlc3Rlcm5+V0VcIl0sW1wiU29tYWxpYVwiLFwiU09cIixcIkF3ZGFsfkFXfEJha29vbH5CS3xCYW5hYWRpcn5CTnxCYXJpfkJSfEJheX5CWXxHYWxndWR1dWR+R0F8R2Vkb35HRXxIaWlyYWFufkhJfEp1YmJhZGEgRGhleGV+SkR8SnViYmFkYSBIb29zZX5KSHxNdWR1Z35NVXxOdWdhYWx+TlV8U2FuYWFnflNBfFNoYWJlZWxsYWhhIERoZXhlflNEfFNoYWJlZWxsYWhhIEhvb3NlflNIfFNvb2x+U098VG9nZGhlZXJ+VE98V29xb295aSBHYWxiZWVkfldPXCJdLFtcIlNvdXRoIEFmcmljYVwiLFwiWkFcIixcIkVhc3Rlcm4gQ2FwZX5FQ3xGcmVlIFN0YXRlfkZTfEdhdXRlbmd+R1R8S3dhWnVsdS1OYXRhbH5OTHxMaW1wb3BvfkxQfE1wdW1hbGFuZ2F+TVB8Tm9ydGhlcm4gQ2FwZX5OQ3xOb3J0aCBXZXN0fk5XfFdlc3Rlcm4gQ2FwZX5XQ1wiXSxbXCJTb3V0aCBHZW9yZ2lhIGFuZCBTb3V0aCBTYW5kd2ljaCBJc2xhbmRzXCIsXCJHU1wiLFwiQmlyZCBJc2xhbmR8QnJpc3RvbCBJc2xhbmR8Q2xlcmtlIFJvY2tzfE1vbnRhZ3UgSXNsYW5kfFNhdW5kZXJzIElzbGFuZHxTb3V0aCBHZW9yZ2lhfFNvdXRoZXJuIFRodWxlfFRyYXZlcnNheSBJc2xhbmRzXCJdLFtcIlNvdXRoIFN1ZGFuXCIsXCJTU1wiLFwiQ2VudHJhbCBFcXVhdG9yaWF+Q0V8RWFzdGVybiBFcXVhdG9yaWF+RUV8Sm9uZ2xlaX5KR3xMYWtlc35MS3xOb3J0aGVybiBCYWhyIGVsIEdoYXphbH5CTnxVbml0eX5VWXxVcHBlciBOaWxlfk5VfFdhcnJhcH5XUnxXZXN0ZXJuIEJhaHIgZWwgR2hhemFsfkJXfFdlc3Rlcm4gRXF1YXRvcmlhfkVXXCJdLFtcIlNwYWluXCIsXCJFU1wiLFwiQWxiYWNldGV+Q018QWxpY2FudGV+VkN8QWxtZXLDrWF+QU58QXJhYmEvw4FsYXZhflZJfEFzdHVyaWFzfk98w4F2aWxhfkFWfEJhZGFqb3p+QkF8QmFyY2Vsb25hfkJ8Qml6a2FpYX5CSXxCdXJnb3N+QlV8Q8OhY2VyZXN+Q0N8Q8OhZGl6fkNBfENhbnRhYnJpYX5TfENhc3RlbGzDs25+Q1N8Q3VldGF+Q1V8Q2l1ZGFkIFJlYWx+Q1J8Q8OzcmRvYmF+Q098QSBDb3J1w7FhfkN8Q3VlbmNhfkNVfEdpcHV6a29hflNTfEdpcm9uYX5HSXxHcmFuYWRhfkdSfEd1YWRhbGFqYXJhfkdVfEh1ZWx2YX5IfEh1ZXNjYX5IVXxJbGxlcyBCYWxlYXJzflBNfEphw6lufkp8TGXDs25+TEV8TGxlaWRhfkx8THVnb35MVXxNYWRyaWR+TXxNw6FsYWdhfk1BfE1lbGlsbGF+TUx8TXVyY2lhfk1VfE5hdmFycmV+TkF8T3VyZW5zZX5PUnxQYWxlbmNpYX5QfExhcyBQYWxtYXN+R0N8UG9udGV2ZWRyYX5QT3xMYSBSaW9qYX5MT3xTYWxhbWFuY2F+U0F8U2FudGEgQ3J1eiBkZSBUZW5lcmlmZX5URnxTZWdvdmlhflNHfFNldmlsbGF+U0V8U29yaWF+U098VGFycmFnb25hflR8VGVydWVsflRFfFRvbGVkb35UT3xWYWxlbmNpYX5WfFZhbGxhZG9saWR+VkF8WmFtb3JhflpBfFphcmFnb3phflpcIl0sW1wiU3JpIExhbmthXCIsXCJMS1wiLFwiQmFzbmFoaXJhfjF8RGFrdW51fjN8TWFkaHlhbWF+MnxOYWVnZW5haGlyYX41fFNhYmFyYWdhbXV3YX45fFV0dXJ1fjR8VXR1cnVtYWVkYX43fFZheWFtYmF+NnxVdmF+OFwiXSxbXCJTdWRhblwiLFwiU0RcIixcIkFsIEJhaHIgYWwgQWhtYXJ+UlN8QWwgSmF6aXJhaH5HWnxBbCBLaGFydHVtfktIfEFsIFFhZGFyaWZ+R0R8QW4gTmlsIGFsIEFieWFkfk5XfEFuIE5pbCBhbCBBenJhcX5OQnxBc2ggU2hhbWFsaXlhaH5OT3xHaGFyYiBEYXJmdXJ+RFd8R2hhcmIgS3VyZHVmYW5+R0t8SmFudWIgRGFyZnVyfkRTfEphbnViIEt1cmR1ZmFufktTfEthc3NhbGF+S0F8TmFociBhbiBOaWx+TlJ8U2hhbWFsIERhcmZ1cn5ETnxTaGFycSBEYXJmdXJ+REV8U2hpYW1hbCBLdXJkdWZhbn5LTnxTaW5uYXJ+U0l8V2FzYXQgRGFyZnVyIFphbGluamF5fkRDXCJdLFtcIlN1cmluYW1lXCIsXCJTUlwiLFwiQnJva29wb25kb35CUnxDb21tZXdpam5lfkNNfENvcm9uaWV+Q1J8TWFyb3dpam5lfk1BfE5pY2tlcmllfk5JfFBhcmF+UFJ8UGFyYW1hcmlib35QTXxTYXJhbWFjY2F+U0F8U2lwYWxpd2luaX5TSXxXYW5pY2F+V0FcIl0sW1wiU3dhemlsYW5kXCIsXCJTWlwiLFwiSGhvaGhvfkhIfEx1Ym9tYm9+TFV8TWFuemluaX5NQXxTaGlzZWx3ZW5pflNIXCJdLFtcIlN3ZWRlblwiLFwiU0VcIixcIkJsZWtpbmdlfkt8RGFsYXJuYXN+V3xHb3RsYW5kc35YfEdhdmxlYm9yZ3N+SXxIYWxsYW5kc35OfEphbXRsYW5kc35afEpvbmtvcGluZ3N+RnxLYWxtYXJ+SHxLcm9ub2Jlcmdzfkd8Tm9ycmJvdHRlbnN+QkR8T3JlYnJvflR8T3N0ZXJnb3RsYW5kc35FfFNrYW5lfk18U29kZXJtYW5sYW5kc35EfFN0b2NraG9sbX5BQnxWYXJtbGFuZHN+U3xWYXN0ZXJib3R0ZW5zfkFDfFZhc3Rlcm5vcnJsYW5kc35ZfFZhc3RtYW5sYW5kc35VfFZhc3RyYSBHb3RhbGFuZHN+T1wiXSxbXCJTd2l0emVybGFuZFwiLFwiQ0hcIixcIkFhcmdhdX5BR3xBcHBlbnplbGwgQXVzc2VycmhvZGVufkFSfEFwcGVuemVsbCBJbm5lcmhvZGVufkFJfEJhc2VsLUxhbmRzY2hhZnR+Qkx8QmFzZWwtU3RhZHR+QlN8QmVybn5CRXxGcmlib3VyZ35GUnxHZW7DqHZlfkdFfEdsYXJ1c35HTHxHcmF1YsO8bmRlbn5HUnxKdXJhfkpVfEx1emVybn5MVXxOZXVjaMOidGVsfk5FfE5pZHdhbGRlbn5OV3xPYndhbGRlbn5PV3xTYW5rdCBHYWxsZW5+U0d8U2NoYWZmaGF1c2VuflNIfFNjaHd5en5TWnxTb2xvdGh1cm5+U098VGh1cmdhdX5UR3xUaWNpbm9+VEl8VXJpflVSfFZhbGFpc35WU3xWYXVkflZEfFp1Z35aR3xaw7xyaWNoflpIXCJdLFtcIlN5cmlhbiBBcmFiIFJlcHVibGljXCIsXCJTWVwiLFwiQWwgSGFzYWthaH5IQXxBbCBMYWRoaXFpeWFofkxBfEFsIFF1bmF5dGlyYWh+UVV8QXIgUmFxcWFoflJBfEFzIFN1d2F5ZGEnflNVfERhcidhfkRSfERheXIgYXogWmF3cn5EWXxEaW1hc2hxfkRJfEhhbGFifkhMfEhhbWFofkhNfEhpbXN+SEl8SWRsaWJ+SUR8UmlmIERpbWFzaHF+UkR8VGFydHVzflRBXCJdLFtcIlRhaXdhblwiLFwiVFdcIixcIkNoYW5nLWh1YX5DSEF8Q2hpYS1pfkNZUXxIc2luLWNodX5IU1F8SHVhLWxpZW5+SFVBfEthby1oc2l1bmd+S0hIfEtlZWx1bmd+S0VFfEtpbm1lbn5LSU58TGllbmNoaWFuZ35MSUV8TWlhby1saX5NSUF8TmFuLXQnb3V+TkFOfFAnZW5nLWh1flBFTnxOZXcgVGFpcGVpfk5XVHxQJ2luZy1jaHVuZ35QSUZ8VCdhaS1jaHVuZ35UWEd8VCdhaS1uYW5+VE5OfFQnYWktcGVpflRQRXxUJ2FpLXR1bmd+VFRUfFQnYW8teXVhbn5UQU98WWktbGFufklMQXxZdW4tbGlufllVTlwiXSxbXCJUYWppa2lzdGFuXCIsXCJUSlwiLFwiRHVzaGFuYmV+RFV8S8WtaGlzdG9uaSBCYWRha2hzaG9ufkdCfEtoYXRsb25+S1R8U3VnaGR+U1VcIl0sW1wiVGFuemFuaWEsIFVuaXRlZCBSZXB1YmxpYyBvZlwiLFwiVFpcIixcIkFydXNoYX4wMXxDb2FzdH4xOXxEYXIgZXMgU2FsYWFtfjAyfERvZG9tYX4wM3xJcmluZ2F+MDR8S2FnZXJhfjA1fEtpZ29tYX4wOHxLaWxpbWFuamFyb34wOXxMaW5kaX4xMnxNYW55YXJhfjI2fE1hcmF+MTN8TWJleWF+MTR8TW9yb2dvcm9+MTZ8TXR3YXJhfjE3fE13YW56YX4xOHxQZW1iYSBOb3J0aH4wNnxQZW1iYSBTb3V0aH4xMHxSdWt3YX4yMHxSdXZ1bWF+MjF8U2hpbnlhbmdhfjIyfFNpbmdpZGF+MjN8VGFib3JhfjI0fFRhbmdhfjI1fFphbnppYmFyIE5vcnRofjA3fFphbnppYmFyIENlbnRyYWwvU291dGh+MTF8WmFuemliYXIgVXJiYW4vV2VzdH4xNVwiXSxbXCJUaGFpbGFuZFwiLFwiVEhcIixcIkFtbmF0IENoYXJvZW5+Mzd8QW5nIFRob25nfjE1fEJ1ZW5nIEthbn4zOHxCdXJpIFJhbX4zMXxDaGFjaG9lbmdzYW9+MjR8Q2hhaSBOYXR+MTh8Q2hhaXlhcGh1bX4zNnxDaGFudGhhYnVyaX4yMnxDaGlhbmcgTWFpfjUwfENoaWFuZyBSYWl+NTd8Q2hvbiBCdXJpfjIwfENodW1waG9ufjg2fEthbGFzaW5+NDZ8S2FtcGhhZW5nIFBoZXR+NjJ8S2FuY2hhbmFidXJpfjcxfEtob24gS2Flbn40MHxLcmFiaX44MXxLcnVuZyBUaGVwIE1haGFuYWtob24gKEJhbmdrb2spfjEwfExhbXBhbmd+NTJ8TGFtcGh1bn41MXxMb2VpfjQyfExvcCBCdXJpfjE2fE1hZSBIb25nIFNvbn41OHxNYWhhIFNhcmFraGFtfjQ0fE11a2RhaGFufjQ5fE5ha2hvbiBOYXlva34yNnxOYWtob24gUGhhdGhvbX43M3xOYWtob24gUGhhbm9tfjQ4fE5ha2hvbiBSYXRjaGFzaW1hfjMwfE5ha2hvbiBTYXdhbn42MHxOYWtob24gU2kgVGhhbW1hcmF0fjgwfE5hbn41NXxOYXJhdGhpd2F0fjk2fE5vbmcgQnVhIExhbSBQaHV+Mzl8Tm9uZyBLaGFpfjQzfE5vbnRoYWJ1cml+MTJ8UGF0aHVtIFRoYW5pfjEzfFBhdHRhbml+OTR8UGhhbmduZ2F+ODJ8UGhhdHRoYWx1bmd+OTN8UGhheWFvfjU2fFBoZXRjaGFidW5+NzZ8UGhldGNoYWJ1cml+NzZ8UGhpY2hpdH42NnxQaGl0c2FudWxva342NXxQaHJhIE5ha2hvbiBTaSBBeXV0dGhheWF+MTR8UGhyYWV+NTR8UGh1a2V0fjgzfFByYWNoaW4gQnVyaX4yNXxQcmFjaHVhcCBLaGlyaSBLaGFufjc3fFJhbm9uZ344NXxSYXRjaGFidXJpfjcwfFJheW9uZ34yMXxSb2kgRXR+NDV8U2EgS2Flb34yN3xTYWtvbiBOYWtob25+NDd8U2FtdXQgUHJha2FufjExfFNhbXV0IFNha2hvbn43NHxTYW11dCBTb25na2hyYW1+NzV8U2FyYWJ1cml+MTl8U2F0dW5+OTF8U2luZyBCdXJpfjE3fFNpIFNhIGtldH4zM3xTb25na2hsYX45MHxTdWtob3RoYWl+NjR8U3VwaGFuIEJ1cml+NzJ8U3VyYXQgVGhhbml+ODR8U3VyaW5+MzJ8VGFrfjYzfFRyYW5nfjkyfFRyYXR+MjN8VWJvbiBSYXRjaGF0aGFuaX4zNHxVZG9uIFRoYW5pfjQxfFV0aGFpIFRoYW5pfjYxfFV0dGFyYWRpdH41M3xZYWxhfjk1fFlhc290aG9ufjM1XCJdLFtcIlRpbW9yLUxlc3RlXCIsXCJUTFwiLFwiQWlsZXV+QUx8QWluYXJvfkFOfEJhdWNhdX5CQXxCb2JvbmFyb35CT3xDb3ZhIExpbWF+Q098RGlsaX5ESXxFcm1lcmF+RVJ8TGF1dGVtfkxBfExpcXVpY2F+TEl8TWFuYXR1dG9+TVR8TWFudWZhaGl+TUZ8T2VjdXNzaX5PRXxWaXF1ZXF1ZX5WSVwiXSxbXCJUb2dvXCIsXCJUR1wiLFwiQ2VudHJlfkN8S2FyYX5LfE1hcml0aW1lfk18UGxhdGVhdXh+UHxTYXZhbm5lc35TXCJdLFtcIlRva2VsYXVcIixcIlRLXCIsXCJBdGFmdXxGYWthb2ZvfE51a3Vub251XCJdLFtcIlRvbmdhXCIsXCJUT1wiLFwiJ0V1YX4wMXxIYSdhcGFpfjAyfE5pdWFzfjAzfFRvbmdhdGFwdX4wNHxWYXZhJ3V+MDVcIl0sW1wiVHJpbmlkYWQgYW5kIFRvYmFnb1wiLFwiVFRcIixcIkFyaW1hfkFSSXxDaGFndWFuYXN+Q0hBfENvdXZhLVRhYmFxdWl0ZS1UYWxwYXJvfkNUVHxEaWVmbyBNYXJ0aW5+RE1OfE1heWFyby1SaW8gQ2xhcm9+TVJDfFBlbmFsLURlYmV+UEVEfFBvaW50IEZvcnRpbn5QVEZ8UG9ydC1vZi1TcGFpbn5QT1N8UHJpbmNlcyBUb3duflBSVHxTYW4gRmVybmFuZG9+U0ZPfFNhbiBKdWFuLUxhdmVudGlsbGV+U0pMfFNhbmdyZSBHcmFuZGV+U0dFfFNpcGFyaWF+U0lQfFRvYmFnb35UT0J8VHVuYXB1bmEtUGlhcmNvflRVUFwiXSxbXCJUdW5pc2lhXCIsXCJUTlwiLFwiQXJpYW5hfjEyfEJlamF+MzF8QmVuIEFyb3VzfjEzfEJpemVydGV+MjN8R2FiZXN+ODF8R2Fmc2F+NzF8SmVuZG91YmF+MzJ8S2Fpcm91YW5+NDF8S2Fzc2VyaW5lfjQyfEtlYmlsaX43M3xLZWZ+MzN8TWFoZGlhfjUzfE1lZGVuaW5lfjgyfE1vbmFzdGlyfjUyfE5hYmV1bH4yMXxTZmF4fjYxfFNpZGkgQm91emlkfjQzfFNpbGlhbmF+MzR8U291c3NlfjUxfFRhdGFvdWluZX44M3xUb3pldXJ+NzJ8VHVuaXN+MTF8WmFnaG91YW5+MjJcIl0sW1wiVHVya2V5XCIsXCJUUlwiLFwiQWRhbmF+MDF8QWRpeWFtYW5+MDJ8QWZ5b25rYXJhaGlzYXJ+MDN8QWdyaX4wNHxBa3NhcmF5fjY4fEFtYXN5YX4wNXxBbmthcmF+MDZ8QW50YWx5YX4wN3xBcmRhaGFufjc1fEFydHZpbn4wOHxBeWRpbn4wOXxCYWxpa2VzaXJ+MTB8QmFydGlufjc0fEJhdG1hbn43MnxCYXlidXJ0fjY5fEJpbGVjaWt+MTF8QmluZ29sfjEyfEJpdGxpc34xM3xCb2x1fjE0fEJ1cmR1cn4xNXxCdXJzYX4xNnxDYW5ha2thbGV+MTd8Q2Fua2lyaX4xOHxDb3J1bX4xOXxEZW5pemxpfjIwfERpeWFyYmFraXJ+MjF8RHV6Y2V+ODF8RWRpcm5lfjIyfEVsYXppZ34yM3xFcnppbmNhbn4yNHxFcnp1cnVtfjI1fEVza2lzZWhpcn4yNnxHYXppYW50ZXB+Mjd8R2lyZXN1bn4yOHxHdW11c2hhbmV+Mjl8SGFra2FyaX4zMHxIYXRheX4zMXxJZ2Rpcn43NnxJc3BhcnRhfjMyfElzdGFuYnVsfjM0fEl6bWlyfjM1fEthaHJhbWFubWFyYXN+NDZ8S2FyYWJ1a343OHxLYXJhbWFufjcwfEthcnN+MzZ8S2FzdGFtb251fjM3fEtheXNlcml+Mzh8S2lsaXN+Nzl8S2lyaWtrYWxlfjcxfEtpcmtsYXJlbGl+Mzl8S2lyc2VoaXJ+NDB8S29jYWVsaX40MXxLb255YX40MnxLdXRhaHlhfjQzfE1hbGF0eWF+NDR8TWFuaXNhfjQ1fE1hcmRpbn40N3xNZXJzaW5+MzN8TXVnbGF+NDh8TXVzfjQ5fE5ldnNlaGlyfjUwfE5pZ2RlfjUxfE9yZHV+NTJ8T3NtYW5peWV+ODB8Uml6ZX41M3xTYWthcnlhfjU0fFNhbXN1bn41NXxTYW5saXVyZmF+NjN8U2lpcnR+NTZ8U2lub3B+NTd8U2lybmFrfjczfFNpdmFzfjU4fFRla2lyZGFnfjU5fFRva2F0fjYwfFRyYWJ6b25+NjF8VHVuY2VsaX42MnxVc2FrfjY0fFZhbn42NXxZYWxvdmF+Nzd8WW96Z2F0fjY2fFpvbmd1bGRha342N1wiXSxbXCJUdXJrbWVuaXN0YW5cIixcIlRNXCIsXCJBaGFsfkF8QXNnYWJhdH5TfEJhbGthbn5CfERhc2hvZ3V6fkR8TGViYXB+THxNYXJ5fk1cIl0sW1wiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCIsXCJUQ1wiLFwiVHVya3MgYW5kIENhaWNvcyBJc2xhbmRzXCJdLFtcIlR1dmFsdVwiLFwiVFZcIixcIkZ1bmFmdXRpfkZVTnxOYW51bWFuZ2F+Tk1HfE5hbnVtZWF+Tk1BfE5pdXRhb35OSVR8TnVpfk5VSXxOdWt1ZmV0YXV+TktGfE51a3VsYWVsYWV+TktMfFZhaXR1cHV+VkFVXCJdLFtcIlVnYW5kYVwiLFwiVUdcIixcIkFiaW1+MzE3fEFkanVtYW5pfjMwMXxBbW9sYXRhcn4zMTR8QW11cmlhfjIxNnxBbXVydX4zMTl8QXBhY34zMDJ8QXJ1YX4zMDN8QnVkYWthfjIxN3xCdWR1ZGF+MjIzfEJ1Z2lyaX4yMDF8QnVrZWRlYX4yMjR8QnVrd2F+MjE4fEJ1bGlpc2F+NDE5fEJ1bmRpYnVneW9+NDAxfEJ1c2hlbnlpfjQwMnxCdXNpYX4yMDJ8QnV0YWxlamF+MjE5fERva29sb34zMTh8R3VsdX4zMDR8SG9pbWF+NDAzfEliYW5kYX40MTZ8SWdhbmdhfjIwM3xJc2luZ2lyb340MTd8SmluamF+MjA0fEthYWJvbmd+MzE1fEthYmFsZX40MDR8S2FiYXJvbGV+NDA1fEthYmVyYW1haWRvfjIxM3xLYWxhbmdhbGF+MTAxfEthbGlyb34yMjB8S2FtcGFsYX4xMDJ8S2FtdWxpfjIwNXxLYW13ZW5nZX40MTN8S2FudW5ndX40MTR8S2FwY2hvcndhfjIwNnxLYXNlc2V+NDA2fEthdGFrd2l+MjA3fEtheXVuZ2F+MTEyfEtpYmFhbGV+NDA3fEtpYm9nYX4xMDN8S2lydWh1cmF+NDE4fEtpc29yb340MDh8S2l0Z3VtfjMwNXxLb2Jva29+MzE2fEtvdGlkb34zMDZ8S3VtaX4yMDh8S3llbmpvam9+NDE1fExpcmF+MzA3fEx1d2Vyb34xMDR8THlhbnRvbmRlfjExNnxNYW5hZndhfjIyMXxNYXJhY2hhfjMyMHxNYXNha2F+MTA1fE1hc2luZGl+NDA5fE1heXVnZX4yMTR8TWJhbGV+MjA5fE1iYXJhcmF+NDEwfE1pdHlhbmF+MTE0fE1vcm90b34zMDh8TW95b34zMDl8TXBpZ2l+MTA2fE11YmVuZGV+MTA3fE11a29ub34xMDh8TmFrYXBpcmlwaXJpdH4zMTF8TmFrYXNla2V+MTE1fE5ha2Fzb25nb2xhfjEwOXxOYW11dHVtYmF+MjIyfE5lYmJpfjMxMHxOdHVuZ2Ftb340MTF8T3lhbX4zMjF8UGFkZXJ+MzEyfFBhbGxpc2F+MjEwfFJha2FpfjExMHxSdWt1bmdpcml+NDEyfFNlbWJhYnVsZX4xMTF8U2lyb25rb34yMTV8U29yb3RpfjIxMXxUb3Jvcm9+MjEyfFdha2lzb34xMTN8WXVtYmV+MzEzXCJdLFtcIlVrcmFpbmVcIixcIlVBXCIsXCJDaGVya2FzeX43MXxDaGVybmloaXZ+NzR8Q2hlcm5pdnRzaX43N3xEbmlwcm9wZXRyb3Zza34xMnxEb25ldHNrfjE0fEl2YW5vLUZyYW5raXZza34yNnxLaGFya2l2fjYzfEtoZXJzb25+NjV8S2htZWxueXRza3lpfjY4fEtpZXZ+MzJ8S2lyb3ZvaHJhZH4zNXxMdWhhbnNrfjA5fEx2aXZ+NDZ8TXlrb2xhaXZ+NDh8T2Rlc3NhfjUxfFBvbHRhdmF+NTN8Uml2bmV+NTZ8U3VteX41OXxUZXJub3BpbH42MXxWaW5ueXRzaWF+MDV8Vm9seW5+MDd8WmFrYXJwYXR0aWF+MjF8WmFwb3JpemhpYX4yM3xaaHl0b215cn4xOHxBdnRvbm9tbmEgUmVzcHVibGlrYSBLcnltfjQzfEt5w692fjMwfFNldmFzdG9wb2x+NDBcIl0sW1wiVW5pdGVkIEFyYWIgRW1pcmF0ZXNcIixcIkFFXCIsXCJBYnUgRGhhYml+QVp8QWptYW5+QUp8RHViYWl+RFV8RnVqYWlyYWh+RlV8UmFzIGFsIEtoYWltYWh+Ukt8U2hhcmphaH5TSHxVbW0gQWwgUXV3YWluflVRXCJdLFtcIlVuaXRlZCBLaW5nZG9tXCIsXCJHQlwiLFwiQXZvbn5BVk58QmVkZm9yZHNoaXJlfkJERnxCZXJrc2hpcmV+QlJLfEJyaXN0b2wsIENpdHkgb2Z+Q09CfEJ1Y2tpbmdoYW1zaGlyZX5CS018Q2FtYnJpZGdlc2hpcmV+Q0FNfENoZXNoaXJlfkNIU3xDbGV2ZWxhbmR+Q0xWfENvcm53YWxsfkNPTnxDdW1icmlhfkNNQXxEZXJieXNoaXJlfkRCWXxEZXZvbn5ERVZ8RG9yc2V0fkRPUnxEdXJoYW1+RFVSfEVhc3QgU3Vzc2V4flNYRXxFc3NleH5FU1N8R2xvdWNlc3RlcnNoaXJlfkdMU3xHcmVhdGVyIExvbmRvbn5MTkR8R3JlYXRlciBNYW5jaGVzdGVyfkdUTXxIYW1wc2hpcmUgKENvdW50eSBvZiBTb3V0aGFtcHRvbil+SEFNfEhlcmVmb3JkIGFuZCBXb3JjZXN0ZXJ+SFdSfEhlcmVmb3Jkc2hpcmV+SEVGfEhlcnRmb3Jkc2hpcmV+SFJUfElzbGUgb2YgV2lnaHR+SU9XfEtlbnR+S0VOfExhbmNhc2hpcmV+TEFOfExlaWNlc3RlcnNoaXJlfkxFSXxMaW5jb2xuc2hpcmV+TElOfExvbmRvbn5MRE58TWVyc2V5c2lkZX5NU1l8TWlkZGxlc2V4fk1EWHxOb3Jmb2xrfk5GS3xOb3J0aGFtcHRvbnNoaXJlfk5USHxOb3J0aHVtYmVybGFuZH5OQkx8Tm9ydGggSHVtYmVyc2lkZX5OSE18Tm9ydGggWW9ya3NoaXJlfk5ZS3xOb3R0aW5naGFtc2hpcmV+TlRUfE94Zm9yZHNoaXJlfk9YRnxSdXRsYW5kflJVVHxTaHJvcHNoaXJlflNBTHxTb21lcnNldH5TT018U291dGggSHVtYmVyc2lkZX5TSE18U291dGggWW9ya3NoaXJlflNZS3xTdGFmZm9yZHNoaXJlflNUU3xTdWZmb2xrflNGS3xTdXJyZXl+U1JZfFR5bmUgYW5kIFdlYXJ+VFdSfFdhcndpY2tzaGlyZX5XQVJ8V2VzdCBNaWRsYW5kc35XTUR8V2VzdCBTdXNzZXh+U1hXfFdlc3QgWW9ya3NoaXJlfldZS3xXaWx0c2hpcmV+V0lMfFdvcmNlc3RlcnNoaXJlfldPUnxBbnRyaW1+QU5UfEFybWFnaH5BUk18QmVsZmFzdCwgQ2l0eSBvZn5CTEZ8RG93bn5ET1d8RmVybWFuYWdofkZFUnxMb25kb25kZXJyeX5MRFl8RGVycnksIENpdHkgb2Z+RFJZfFR5cm9uZX5UWVJ8QWJlcmRlZW4sIENpdHkgb2Z+QU58QWJlcmRlZW5zaGlyZX5BQkR8QW5ndXMgKEZvcmZhcnNoaXJlKX5BTlN8QXJneWxsfkFHQnxBeXJzaGlyZX5BUkd8QmFuZmZzaGlyZX5CQU58QmVyd2lja3NoaXJlfkJFV3xCdXRlfkJVVHxDYWl0aG5lc3N+Q0FJfENsYWNrbWFubmFuc2hpcmV+Q0xLfENyb21hcnR5c2hpcmV+Q09DfER1bWZyaWVzc2hpcmV+REZTfER1bmJhcnRvbnNoaXJlIChEdW1iYXJ0b24pfkROQnxEdW5kZWUsIENpdHkgb2Z+RER8RWFzdCBMb3RoaWFuIChIYWRkaW5ndG9uc2hpcmUpfkVMTnxFZGluYnVyZ2gsIENpdHkgb2Z+RUJ8RmlmZX5GSUZ8R2xhc2dvdywgQ2l0eSBvZn5HTEF8SW52ZXJuZXNzLXNoaXJlfklOVnxLaW5jYXJkaW5lc2hpcmV+S0NEfEtpbnJvc3Mtc2hpcmV+S1JTfEtpcmtjdWRicmlnaHRzaGlyZX5LS0R8TGFuYXJrc2hpcmV+TEtTfE1pZGxvdGhpYW4gKENvdW50eSBvZiBFZGluYnVyZ2gpfk1MTnxNb3JheSAoRWxnaW5zaGlyZSl+TU9SfE5haXJuc2hpcmV+TkFJfE9ya25leX5PS0l8UGVlYmxlc3NoaXJlflBFRXxQZXJ0aHNoaXJlflBFUnxSZW5mcmV3c2hpcmV+UkZXfFJvc3MgYW5kIENyb21hcnR5flJPQ3xSb3NzLXNoaXJlflJPU3xSb3hidXJnaHNoaXJlflJPWHxTZWxraXJrc2hpcmV+U0VMfFNoZXRsYW5kIChaZXRsYW5kKX5TSEl8U3RpcmxpbmdzaGlyZX5TVEl8U3V0aGVybGFuZH5TVVR8V2VzdCBMb3RoaWFuIChMaW5saXRoZ293c2hpcmUpfldMTnxXaWd0b3duc2hpcmV+V0lHfENsd3lkfkNXRHxEeWZlZH5ERkR8R3dlbnR+R05UfEd3eW5lZGR+R1dOfE1pZCBHbGFtb3JnYW5+TUdNfFBvd3lzflBPV3xTb3V0aCBHbGFtb3JnYW5+U0dNfFdlc3QgR2xhbW9yZ2FufldHTVwiXSxbXCJVbml0ZWQgU3RhdGVzXCIsXCJVU1wiLFwiQWxhYmFtYX5BTHxBbGFza2F+QUt8QW1lcmljYW4gU2Ftb2F+QVN8QXJpem9uYX5BWnxBcmthbnNhc35BUnxDYWxpZm9ybmlhfkNBfENvbG9yYWRvfkNPfENvbm5lY3RpY3V0fkNUfERlbGF3YXJlfkRFfERpc3RyaWN0IG9mIENvbHVtYmlhfkRDfE1pY3JvbmVzaWF+Rk18RmxvcmlkYX5GTHxHZW9yZ2lhfkdBfEd1YW1+R1V8SGF3YWlpfkhJfElkYWhvfklEfElsbGlub2lzfklMfEluZGlhbmF+SU58SW93YX5JQXxLYW5zYXN+S1N8S2VudHVja3l+S1l8TG91aXNpYW5hfkxBfE1haW5lfk1FfE1hcnNoYWxsIElzbGFuZHN+TUh8TWFyeWxhbmR+TUR8TWFzc2FjaHVzZXR0c35NQXxNaWNoaWdhbn5NSXxNaW5uZXNvdGF+TU58TWlzc2lzc2lwcGl+TVN8TWlzc291cml+TU98TW9udGFuYX5NVHxOZWJyYXNrYX5ORXxOZXZhZGF+TlZ8TmV3IEhhbXBzaGlyZX5OSHxOZXcgSmVyc2V5fk5KfE5ldyBNZXhpY29+Tk18TmV3IFlvcmt+Tll8Tm9ydGggQ2Fyb2xpbmF+TkN8Tm9ydGggRGFrb3Rhfk5EfE5vcnRoZXJuIE1hcmlhbmEgSXNsYW5kc35NUHxPaGlvfk9IfE9rbGFob21hfk9LfE9yZWdvbn5PUnxQYWxhdX5QV3xQZW5uc3lsdmFuaWF+UEF8UHVlcnRvIFJpY29+UFJ8UmhvZGUgSXNsYW5kflJJfFNvdXRoIENhcm9saW5hflNDfFNvdXRoIERha290YX5TRHxUZW5uZXNzZWV+VE58VGV4YXN+VFh8VXRhaH5VVHxWZXJtb250flZUfFZpcmdpbiBJc2xhbmRzflZJfFZpcmdpbmlhflZBfFdhc2hpbmd0b25+V0F8V2VzdCBWaXJnaW5pYX5XVnxXaXNjb25zaW5+V0l8V3lvbWluZ35XWXxBcm1lZCBGb3JjZXMgQW1lcmljYXN+QUF8QXJtZWQgRm9yY2VzIEV1cm9wZSwgQ2FuYWRhLCBBZnJpY2EgYW5kIE1pZGRsZSBFYXN0fkFFfEFybWVkIEZvcmNlcyBQYWNpZmljfkFQXCJdLFtcIlVuaXRlZCBTdGF0ZXMgTWlub3IgT3V0bHlpbmcgSXNsYW5kc1wiLFwiVU1cIixcIkJha2VyIElzbGFuZH44MXxIb3dsYW5kIElzbGFuZH44NHxKYXJ2aXMgSXNsYW5kfjg2fEpvaG5zdG9uIEF0b2xsfjY3fEtpbmdtYW4gUmVlZn44OXxNaWR3YXkgSXNsYW5kc343MXxOYXZhc3NhIElzbGFuZH43NnxQYWxteXJhIEF0b2xsfjk1fFdha2UgSXNsYW5kfjc5fEJham8gTnVldm8gQmFua35CTnxTZXJyYW5pbGxhIEJhbmt+U0JcIl0sW1wiVXJ1Z3VheVwiLFwiVVlcIixcIkFydGlnYXN+QVJ8Q2FuZWxvbmVzfkNBfENlcnJvIExhcmdvfkNMfENvbG9uaWF+Q098RHVyYXpub35EVXxGbG9yZXN+RlN8RmxvcmlkYX5GRHxMYXZhbGxlamF+TEF8TWFsZG9uYWRvfk1BfE1vbnRldmlkZW9+TU98UGF5c2FuZMO6flBBfFLDrW8gTmVncm9+Uk58Uml2ZXJhflJWfFJvY2hhflJPfFNhbHRvflNBfFNhbiBKb3PDqX5TSnxTb3JpYW5vflNPfFRhY3VhcmVtYsOzflRBfFRyZWludGEgeSBUcmVzflRUXCJdLFtcIlV6YmVraXN0YW5cIixcIlVaXCIsXCJUb3Noa2VudCBzaGFocml+VEt8QW5kaWpvbn5BTnxCdXhvcm9+QlV8RmFyZ+KAmG9uYX5GQXxKaXp6YXh+Skl8TmFtYW5nYW5+Tkd8TmF2b2l5fk5XfFFhc2hxYWRhcnlvIChRYXJzaGkpflFBfFNhbWFycWFuZH5TQXxTaXJkYXJ5byAoR3VsaXN0b24pflNJfFN1cnhvbmRhcnlvIChUZXJtaXopflNVfFRvc2hrZW50IHdpbG95YXRpflRPfFhvcmF6bSAoVXJnYW5jaCl+WE98UW9yYXFhbHBvZ+KAmGlzdG9uIFJlc3B1Ymxpa2FzaSAoTnVrdXMpflFSXCJdLFtcIlZhbnVhdHVcIixcIlZVXCIsXCJNYWxhbXBhfk1BUHxQw6luYW1hflBBTXxTYW5tYX5TQU18U2jDqWZhflNFRXxUYWbDqWF+VEFFfFRvcmJhflRPQlwiXSxbXCJWZW5lenVlbGEsIEJvbGl2YXJpYW4gUmVwdWJsaWMgb2ZcIixcIlZFXCIsXCJEZXBlbmRlbmNpYXMgRmVkZXJhbGVzfld8RGlzdHJpdG8gRmVkZXJhbH5BfEFtYXpvbmFzflp8QW56b8OhdGVndWl+QnxBcHVyZX5DfEFyYWd1YX5EfEJhcmluYXN+RXxCb2zDrXZhcn5GfENhcmFib2Jvfkd8Q29qZWRlc35IfERlbHRhIEFtYWN1cm9+WXxGYWxjw7Nufkl8R3XDoXJpY29+SnxMYXJhfkt8TcOpcmlkYX5MfE1pcmFuZGF+TXxNb25hZ2Fzfk58TnVldmEgRXNwYXJ0YX5PfFBvcnR1Z3Vlc2F+UHxTdWNyZX5SfFTDoWNoaXJhflN8VHJ1amlsbG9+VHxWYXJnYXN+WHxZYXJhY3V5flV8WnVsaWF+VlwiXSxbXCJWaWV0bmFtXCIsXCJWTlwiLFwixJDhu5NuZyBOYWl+Mzl8xJDhu5NuZyBUaMOhcH40NXxHaWEgTGFpfjMwfEjDoCBHaWFuZ34wM3xIw6AgTmFtfjYzfEjDoCBUw6J5fjE1fEjDoCBUxKluaH4yM3xI4bqjaSBExrDGoW5nfjYxfEjhuq11IEdpYW5nfjczfEjDsmEgQsOsbmh+MTR8SMawbmcgWcOqbn42NnxLaMOhbmggSMOyYX4zNHxLacOqbiBHaWFuZ340N3xLb24gVHVtfjI4fExhaSBDaMOidX4wMXxMw6JtIMSQ4buTbmd+MzV8TOG6oW5nIFPGoW5+MDl8TMOgbyBDYWl+MDJ8TG9uZyBBbn40MXxOYW0gxJDhu4tuaH42N3xOZ2jhu4cgQW5+MjJ8TmluaCBCw6xuaH4xOHxOaW5oIFRodeG6rW5+MzZ8UGjDuiBUaOG7jX42OHxQaMO6IFnDqm5+MzJ8UXXhuqNuZyBCw6xuaH4yNHxRdeG6o25nIE5hbX4yN3xRdeG6o25nIE5nw6NpfjI5fFF14bqjbmcgTmluaH4xM3xRdeG6o25nIFRy4buLfjI1fFPDs2MgVHLEg25nfjUyfFPGoW4gTGF+MDV8VMOieSBOaW5ofjM3fFRow6FpIELDrG5ofjIwfFRow6FpIE5ndXnDqm5+Njl8VGhhbmggSMOzYX4yMXxUaOG7q2EgVGhpw6pu4oCTSHXhur9+MjZ8VGnhu4FuIEdpYW5nfjQ2fFRyw6AgVmluaH41MXxUdXnDqm4gUXVhbmd+MDd8VsSpbmggTG9uZ340OXxWxKluaCBQaMO6Y343MHxZw6puIELDoWl+MDZ8Q+G6p24gVGjGoX5DVHzEkMOgIE7hurVuZ35ETnxIw6AgTuG7mWl+SE58SOG6o2kgUGjDsm5nfkhQfEjhu5MgQ2jDrSBNaW5oIChTw6BpIEfDsm4pflNHXCJdLFtcIlZpcmdpbiBJc2xhbmRzLCBCcml0aXNoXCIsXCJWR1wiLFwiQW5lZ2FkYX5BTkd8Sm9zdCBWYW4gRHlrZX5KVkR8VG9ydG9sYX5UVEF8VmlyZ2luIEdvcmRhflZHRFwiXSxbXCJWaXJnaW4gSXNsYW5kcywgVS5TLlwiLFwiVklcIixcIlN0LiBUaG9tYXN+U1RIfFN0LiBKb2huflNKT3xTdC4gQ3JvaXh+U0NSXCJdLFtcIldhbGxpcyBhbmQgRnV0dW5hXCIsXCJXRlwiLFwiQWxvfkFMT3xTaWdhdmV+U0lHfFdhbGxpc35XQUxcIl0sW1wiV2VzdGVybiBTYWhhcmFcIixcIkVIXCIsXCJFcyBTbWFyYX5FU018Qm91amRvdXJ+Qk9EfExhw6J5b3VuZX5MQUF8QW91c3NlcmR+QU9VfE91ZWQgZWQgRGFoYWJ+T1VEXCJdLFtcIlllbWVuXCIsXCJZRVwiLFwiQWJ5xIFufkFCfCdBZGFufkFEfEHhuJEg4biQxIFsaSd+REF8QWwgQmF54biRxIEnfkJBfEFsIOG4qHVkYXlkYWh+SFV8QWwgSmF3Zn5KQXxBbCBNYWhyYWh+TVJ8QWwgTWHhuKl3xKt0fk1XfCdBbXLEgW5+QU18RGhhbcSBcn5ESHzhuKhh4biRcmFtYXd0fkhEfOG4qGFqamFofkhKfEliYn5JQnxMYeG4qWlqfkxBfE1hJ3JpYn5NQXxSYXltYWh+UkF8xZ7EgeKAmGRhaH5TRHzFnmFu4oCYxIEnflNOfFNoYWJ3YWh+U0h8VMSB4oCYaXp6flRBXCJdLFtcIlphbWJpYVwiLFwiWk1cIixcIkNlbnRyYWx+MDJ8Q29wcGVyYmVsdH4wOHxFYXN0ZXJufjAzfEx1YXB1bGF+MDR8THVzYWthfjA5fE5vcnRoZXJufjA1fE5vcnRoLVdlc3Rlcm5+MDZ8U291dGhlcm5+MDd8V2VzdGVybn4wMVwiXSxbXCJaaW1iYWJ3ZVwiLFwiWldcIixcIkJ1bGF3YXlvfkJVfEhhcmFyZX5IQXxNYW5pY2FsYW5kfk1BfE1hc2hvbmFsYW5kIENlbnRyYWx+TUN8TWFzaG9uYWxhbmQgRWFzdH5NRXxNYXNob25hbGFuZCBXZXN0fk1XfE1hc3Zpbmdvfk1WfE1hdGFiZWxlbGFuZCBOb3J0aH5NTnxNYXRhYmVsZWxhbmQgU291dGh+TVN8TWlkbGFuZHN+TUlcIl1dLGE9ZnVuY3Rpb24oKXtsPXM7Zm9yKHZhciBhPWRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJjcnMtY291bnRyeVwiKSxuPTA7bjxhLmxlbmd0aDtuKyspZShhW25dKX0sZT1mdW5jdGlvbihhKXtpZihcInRydWVcIiE9PWEuZ2V0QXR0cmlidXRlKFwiZGF0YS1jcnMtbG9hZGVkXCIpKXthLmxlbmd0aD0wO3ZhciBuPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS1kZWZhdWx0LW9wdGlvblwiKSxlPW58fFwiU2VsZWN0IGNvdW50cnlcIixpPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93LWRlZmF1bHQtb3B0aW9uXCIpO209bnVsbD09PWl8fFwidHJ1ZVwiPT09aTt2YXIgcj1hLmdldEF0dHJpYnV0ZShcImRhdGEtZGVmYXVsdC12YWx1ZVwiKSxvPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKSxsPTA7bSYmKGEub3B0aW9uc1swXT1uZXcgT3B0aW9uKGUsXCJcIikpLEIoKTt2YXIgdD1iKGEpO2NvbnNvbGUubG9nKG8pO2Zvcih2YXIgcz0wO3M8dC5sZW5ndGg7cysrKXt2YXIgdT1cInNob3J0Y29kZVwiPT09b3x8XCIyLWNoYXJcIj09PW8/dFtzXVsxXTp0W3NdWzBdO3Rbc11bNF0mJih1PVwiXCIpLGEub3B0aW9uc1thLmxlbmd0aF09bmV3IE9wdGlvbih0W3NdWzBdLHUpLG51bGwhPXImJnI9PT11JiYobD1zLG0mJmwrKyl9YS5zZWxlY3RlZEluZGV4PWw7dmFyIGQ9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXJlZ2lvbi1pZFwiKTtpZihkKXt2YXIgaD1kb2N1bWVudC5nZXRFbGVtZW50QnlJZChkKTtpZihoKWlmKE0oaCksYS5vbmNoYW5nZT1mdW5jdGlvbigpe2MoYSxoKX0sbnVsbCE9PXImJjA8YS5zZWxlY3RlZEluZGV4KXtjKGEsaCk7dmFyIFM9aC5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRlZmF1bHQtdmFsdWVcIiksQT1cInNob3J0Y29kZVwiPT09aC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpO2lmKG51bGwhPT1TKXt2YXIgZz10W20/YS5zZWxlY3RlZEluZGV4LTE6YS5zZWxlY3RlZEluZGV4XVszXTtrKGgsZyxTLEEpfX1lbHNlITE9PT1tJiZjKGEsaCk7ZWxzZSBjb25zb2xlLmVycm9yKFwiUmVnaW9uIGRyb3Bkb3duIERPTSBub2RlIHdpdGggSUQgXCIrZCtcIiBub3QgZm91bmQuXCIpO2Euc2V0QXR0cmlidXRlKFwiZGF0YS1jcnMtbG9hZGVkXCIsXCJ0cnVlXCIpfWVsc2UgY29uc29sZS5lcnJvcihcIk1pc3NpbmcgZGF0YS1yZWdpb24taWQgb24gY291bnRyeS1yZWdpb24tc2VsZWN0b3IgY291bnRyeSBmaWVsZC5cIil9fSxNPWZ1bmN0aW9uKGEpe3ZhciBuPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS1ibGFuay1vcHRpb25cIiksZT1ufHxcIi1cIixpPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS1zaG93LWRlZmF1bHQtb3B0aW9uXCIpO2g9bnVsbD09PWl8fFwidHJ1ZVwiPT09aSxhLmxlbmd0aD0wLGgmJihhLm9wdGlvbnNbMF09bmV3IE9wdGlvbihlLFwiXCIpLGEuc2VsZWN0ZWRJbmRleD0wKX0sQj1mdW5jdGlvbigpe2Zvcih2YXIgYT0wO2E8bC5sZW5ndGg7YSsrKXtmb3IodmFyIG49e2hhc1Nob3J0Y29kZXM6L34vLnRlc3QobFthXVsyXSkscmVnaW9uczpbXX0sZT1sW2FdWzJdLnNwbGl0KFwifFwiKSxpPTA7aTxlLmxlbmd0aDtpKyspe3ZhciByPWVbaV0uc3BsaXQoXCJ+XCIpO24ucmVnaW9ucy5wdXNoKFtyWzBdLHJbMV1dKX1sW2FdWzNdPW59fSxrPWZ1bmN0aW9uKGEsbixlLGkpe2Zvcih2YXIgcj0wO3I8bi5yZWdpb25zLmxlbmd0aDtyKyspe2lmKChpJiZuLmhhc1Nob3J0Y29kZXMmJm4ucmVnaW9uc1tyXVsxXT9uLnJlZ2lvbnNbcl1bMV06bi5yZWdpb25zW3JdWzBdKT09PWUpe2Euc2VsZWN0ZWRJbmRleD1oP3IrMTpyO2JyZWFrfX19LGM9ZnVuY3Rpb24oYSxuKXt2YXIgZT1tP2Euc2VsZWN0ZWRJbmRleC0xOmEuc2VsZWN0ZWRJbmRleCxpPW4uZ2V0QXR0cmlidXRlKFwiZGF0YS1kZWZhdWx0LW9wdGlvblwiKSxyPW4uZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKSxvPWl8fFwiU2VsZWN0IHJlZ2lvblwiO2lmKFwiXCI9PT1hLnZhbHVlKU0obik7ZWxzZXtuLmxlbmd0aD0wLGgmJihuLm9wdGlvbnNbMF09bmV3IE9wdGlvbihvLFwiXCIpKTt2YXIgbD1iKGEpW2VdWzNdLHQ9XCJzaG9ydGNvZGVcIj09PXImJmwuaGFzU2hvcnRjb2RlcyxzPXQ/MTowO2wucmVnaW9ucy5zb3J0KGZ1bmN0aW9uKGEsbil7dmFyIGU9YVtzXS50b0xvd2VyQ2FzZSgpLGk9bltzXS50b0xvd2VyQ2FzZSgpO3JldHVybiBlPGk/LTE6aTxlPzE6MH0pO2Zvcih2YXIgdT0wO3U8bC5yZWdpb25zLmxlbmd0aDt1Kyspe3ZhciBkPXQ/bC5yZWdpb25zW3VdWzFdOmwucmVnaW9uc1t1XVswXTtuLm9wdGlvbnNbbi5sZW5ndGhdPW5ldyBPcHRpb24obC5yZWdpb25zW3VdWzBdLGQpfW4uc2VsZWN0ZWRJbmRleD0wfX0sYj1mdW5jdGlvbihhKXt2YXIgbj1hLmdldEF0dHJpYnV0ZShcImRhdGEtd2hpdGVsaXN0XCIpLGU9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJsYWNrbGlzdFwiKSxpPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmVmZXJyZWRcIikscj1hLmdldEF0dHJpYnV0ZShcImRhdGEtcHJlZmVycmVkLWRlbGltXCIpLG89bDtyZXR1cm4obnx8ZSkmJihvPWZ1bmN0aW9uKGEpe3ZhciBuPWEud2hpdGVsaXN0K1wifFwiK2EuYmxhY2tsaXN0LGU9MDtpZighdC5oYXNPd25Qcm9wZXJ0eShuKSlpZih0W25dPVtdLGEud2hpdGVsaXN0KXt2YXIgaT1hLndoaXRlbGlzdC5zcGxpdChcIixcIik7Zm9yKGU9MDtlPHMubGVuZ3RoO2UrKyktMSE9PWkuaW5kZXhPZihzW2VdWzFdKSYmdFtuXS5wdXNoKGUpfWVsc2UgaWYoYS5ibGFja2xpc3Qpe3ZhciByPWEuYmxhY2tsaXN0LnNwbGl0KFwiLFwiKTtmb3IoZT0wO2U8cy5sZW5ndGg7ZSsrKS0xPT09ci5pbmRleE9mKHNbZV1bMV0pJiZ0W25dLnB1c2goZSl9dmFyIG89W107Zm9yKGU9MDtlPHRbbl0ubGVuZ3RoO2UrKylvLnB1c2goc1t0W25dW2VdXSk7cmV0dXJuIG99KHt3aGl0ZWxpc3Q6bixibGFja2xpc3Q6ZX0pKSxpJiYobz11KG8saSxyKSksb30sdT1mdW5jdGlvbihhLG4sZSl7dmFyIGk9bi5zcGxpdChcIixcIikucmV2ZXJzZSgpLHI9e30sbz0hMSxsPWEuZmlsdGVyKGZ1bmN0aW9uKGEpe3JldHVybi0xPT09aS5pbmRleE9mKGFbMV0pfHwoclthWzFdXT1hLCEobz0hMCkpfSk7byYmZSYmbC51bnNoaWZ0KFtlLFwiXCIsXCJcIix7fSwhMF0pO2Zvcih2YXIgdD0wO3Q8aS5sZW5ndGg7dCsrKXt2YXIgcz1pW3RdO2wudW5zaGlmdChyW3NdKX1yZXR1cm4gbH07cmV0dXJuIGZ1bmN0aW9uKG4sZSl7dmFyIGk9ITEsYT0hMCxyPW4uZG9jdW1lbnQsbz1yLmRvY3VtZW50RWxlbWVudCxsPXIuYWRkRXZlbnRMaXN0ZW5lcj9cImFkZEV2ZW50TGlzdGVuZXJcIjpcImF0dGFjaEV2ZW50XCIsdD1yLmFkZEV2ZW50TGlzdGVuZXI/XCJyZW1vdmVFdmVudExpc3RlbmVyXCI6XCJkZXRhY2hFdmVudFwiLHM9ci5hZGRFdmVudExpc3RlbmVyP1wiXCI6XCJvblwiLHU9ZnVuY3Rpb24oYSl7XCJyZWFkeXN0YXRlY2hhbmdlXCI9PWEudHlwZSYmXCJjb21wbGV0ZVwiIT1yLnJlYWR5U3RhdGV8fCgoXCJsb2FkXCI9PWEudHlwZT9uOnIpW3RdKHMrYS50eXBlLHUsITEpLCFpJiYoaT0hMCkmJmUuY2FsbChuLGEudHlwZXx8YSkpfSxkPWZ1bmN0aW9uKCl7dHJ5e28uZG9TY3JvbGwoXCJsZWZ0XCIpfWNhdGNoKGEpe3JldHVybiB2b2lkIHNldFRpbWVvdXQoZCw1MCl9dShcInBvbGxcIil9O2lmKFwiY29tcGxldGVcIj09ci5yZWFkeVN0YXRlKWUuY2FsbChuLFwibGF6eVwiKTtlbHNle2lmKHIuY3JlYXRlRXZlbnRPYmplY3QmJm8uZG9TY3JvbGwpe3RyeXthPSFuLmZyYW1lRWxlbWVudH1jYXRjaChhKXt9YSYmZCgpfXJbbF0ocytcIkRPTUNvbnRlbnRMb2FkZWRcIix1LCExKSxyW2xdKHMrXCJyZWFkeXN0YXRlY2hhbmdlXCIsdSwhMSksbltsXShzK1wibG9hZFwiLHUsITEpfX0od2luZG93LGEpLHtpbml0OmF9fSk7IiwiY29uc3QgZGlzcGxheU9iamVjdHMgPSBbXG4gIHtcbiAgICBuYW1lOiBcIm1haW5cIixcbiAgICBub2RlVHlwZTogXCJtYWluXCIsXG4gICAgcGFyZW50OiBcImJvZHlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiY29udGVudENvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCJtYWluXCIsXG4gICAgY2xhc3MxOiBcImNvbnRlbnRcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiY2VudHJhbENvbnRhaW5lclwiLFxuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuY29udGVudFwiLFxuICAgIGNsYXNzMTogXCJpbnB1dC1jb250YWluZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwidGl0bGVcIixcbiAgICBub2RlVHlwZTogXCJoMVwiLFxuICAgIHBhcmVudDogXCIuaW5wdXQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInRpdGxlXCIsXG4gICAgdGV4dDogXCJXZWF0aGVyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImlucHV0XCIsXG4gICAgbm9kZVR5cGU6IFwiaW5wdXRcIixcbiAgICBwYXJlbnQ6IFwiLmlucHV0LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJsb2NhdGlvbi1pbnB1dFwiLFxuICAgIGlucHV0VHlwZTogXCJ0ZXh0XCIsXG4gICAgdmFsdWU6IFwiXCIsXG4gICAgcGxhY2Vob2xkZXI6IFwiUGxlYXNlIGVudGVyIGEgdG93biBvciBjaXR5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImNvdW50cnlJbnB1dFwiLFxuICAgIG5vZGVUeXBlOiBcInNlbGVjdFwiLFxuICAgIHBhcmVudDogXCIuaW5wdXQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImNycy1jb3VudHJ5XCIsXG4gICAgdmFsdWU6IFwiXCIsXG4gICAgLy8gZGF0YUF0dHJUeXBlOiAncmVnaW9uLWlkJyxcbiAgICBkYXRhQXR0cjogJ1VTQScsXG4gICAgc2hvcnRjb2RlOiB0cnVlLFxuICAgIHByZWZlcnJlZDogJ0VTLFVTLEdCJyxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwic3RhdGVJbnB1dFwiLFxuICAgIG5vZGVUeXBlOiBcInNlbGVjdFwiLFxuICAgIHBhcmVudDogXCIuaW5wdXQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInN0YXRlLWlucHV0XCIsXG4gICAgY2xhc3MyOiBcImhpZGRlblwiLFxuICAgIHZhbHVlOiBcIlwiLFxuICAgIGlkOiAnVVNBJyxcbiAgICBzaG9ydGNvZGU6IHRydWUsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInN1Ym1pdFwiLFxuICAgIG5vZGVUeXBlOiBcImlucHV0XCIsXG4gICAgcGFyZW50OiBcIi5pbnB1dC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwibG9jYXRpb24tc3VibWl0XCIsXG4gICAgdmFsdWU6IFwiU3VibWl0XCIsXG4gICAgaW5wdXRUeXBlOiBcImJ1dHRvblwiLFxuICB9LFxuXTtcblxuY29uc3QgY2FyZE9iamVjdHMgPSB7XG4gIGNhcmQ6IHtcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmNvbnRlbnRcIixcbiAgICBjbGFzczE6IFwid2VhdGhlci1jYXJkXCIsXG4gIH0sXG4gIHN1bW1hcnk6IHtcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLndlYXRoZXItY2FyZFwiLFxuICAgIGNsYXNzMTogXCJzdW1tYXJ5XCIsXG4gIH0sXG4gIGRldGFpbHM6IHtcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLndlYXRoZXItY2FyZFwiLFxuICAgIGNsYXNzMTogXCJkZXRhaWxzXCIsXG4gIH0sXG4gIGxvY2F0aW9uOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuc3VtbWFyeVwiLFxuICAgIGNsYXNzMTogXCJsb2NhdGlvblwiLFxuICB9LFxuICB0ZW1wQ29udGFpbmVyOiB7XG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gIH0sXG4gIG1haW5UZW1wQ29udGFpbmVyOiB7XG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gIH0sXG4gIHRlbXA6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi50ZW1wLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJ0ZW1wXCIsXG4gICAgY2xhc3MyOiBcInRlbXBlcmF0dXJlXCIsXG4gIH0sXG4gIHRlbXBVbml0czoge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBjbGFzczE6IFwidGVtcC11bml0XCIsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuc3VtbWFyeVwiLFxuICAgIGNsYXNzMTogXCJkZXNjcmlwdGlvblwiLFxuICB9LFxuICBmb3JlY2FzdERlc2NyaXB0aW9uOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuc3VtbWFyeVwiLFxuICAgIGNsYXNzMTogXCJmb3JlY2FzdC1kZXNjcmlwdGlvblwiLFxuICB9LFxuICBodW1pZGl0eToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLmh1bWlkaXR5LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJodW1pZGl0eVwiLFxuICB9LFxuICBodW1pZGl0eVRpdGxlOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuaHVtaWRpdHktY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImh1bWlkaXR5LXRpdGxlXCIsXG4gICAgdGV4dDogXCJIdW1pZGl0eSAoJSlcIixcbiAgfSxcbiAgaGlnaDoge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLmhpZ2gtdGVtcC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiaGlnaFwiLFxuICAgIGNsYXNzMjogXCJ0ZW1wZXJhdHVyZVwiLFxuICB9LFxuICBoaWdoVGl0bGU6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5oaWdoLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJoaWdoLXRpdGxlXCIsXG4gICAgdGV4dDogXCJIaWdoXCIsXG4gIH0sXG4gIGxvdzoge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLmxvdy10ZW1wLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJsb3dcIixcbiAgICBjbGFzczI6IFwidGVtcGVyYXR1cmVcIixcbiAgfSxcbiAgbG93VGl0bGU6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5sb3ctY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImxvdy10aXRsZVwiLFxuICAgIHRleHQ6IFwiTG93XCIsXG4gIH0sXG4gIGZlZWxzTGlrZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLmZlZWxzLXRlbXAtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImZlZWxzTGlrZVwiLFxuICAgIGNsYXNzMjogXCJ0ZW1wZXJhdHVyZVwiLFxuICB9LFxuICBmZWVsc0xpa2VUaXRsZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLmZlZWxzLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJmZWVscy10aXRsZVwiLFxuICAgIHRleHQ6IFwiRmVlbHMgbGlrZVwiLFxuICB9LFxuICBjbG91ZHM6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5jbG91ZHMtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImNsb3Vkc1wiLFxuICB9LFxuICBjbG91ZHNUaXRsZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLmNsb3Vkcy1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiY2xvdWRzLXRpdGxlXCIsXG4gICAgdGV4dDogXCJDbG91ZCBjb3ZlciAoJSlcIixcbiAgfSxcbiAgcHJlc3N1cmU6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5wcmVzc3VyZS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwicHJlc3N1cmVcIixcbiAgfSxcbiAgcHJlc3N1cmVUaXRsZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLnByZXNzdXJlLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJwcmVzc3VyZS10aXRsZVwiLFxuICAgIHRleHQ6IFwiUHJlc3N1cmUgKG1iYXIpXCIsXG4gIH0sXG4gIHN1bnJpc2U6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5zdW5yaXNlLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzdW5yaXNlXCIsXG4gICAgY2xhc3MyOiBcInRpbWVcIixcbiAgfSxcbiAgc3VucmlzZVRpdGxlOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuc3VucmlzZS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwic3VucmlzZS10aXRsZVwiLFxuICAgIHRleHQ6IFwiU3VucmlzZSB0b2RheVwiLFxuICB9LFxuICBzdW5zZXQ6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5zdW5zZXQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInN1bnNldFwiLFxuICAgIGNsYXNzMjogXCJ0aW1lXCIsXG4gIH0sXG4gIHN1bnNldFRpdGxlOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuc3Vuc2V0LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzdW5zZXQtdGl0bGVcIixcbiAgICB0ZXh0OiBcIlN1bnNldCB0b2RheVwiLFxuICB9LFxuICB2aXM6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi52aXMtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInZpc1wiLFxuICB9LFxuICB2aXNUaXRsZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLnZpcy1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwidmlzLXRpdGxlXCIsXG4gICAgdGV4dDogXCJWaXNpYmlsaXR5IChtZXRlcnMpXCIsXG4gIH0sXG4gIHdpbmREaXJUaXRsZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLndpbmQtZGlyLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJ3aW5kLWRpci10aXRsZVwiLFxuICAgIHRleHQ6IFwiV2luZCBkaXJlY3Rpb25cIixcbiAgfSxcbiAgd2luZERpcjoge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLndpbmQtZGlyLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJ3aW5kLWRpclwiLFxuICB9LFxuICB3aW5kU3BlZWRUaXRsZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLndpbmQtc3BlZWQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcIndpbmQtc3BlZWQtdGl0bGVcIixcbiAgICB0ZXh0OiBcIldpbmQgc3BlZWRcIixcbiAgfSxcbiAgd2luZFNwZWVkOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIud2luZC1zcGVlZC11bml0LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJ3aW5kLXNwZWVkXCIsXG4gIH0sXG4gIGRldGFpbENvbnRhaW5lcjoge1xuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuZGV0YWlsc1wiLFxuICAgIGNsYXNzMTogXCJkZXRhaWwtY29udGFpbmVyXCIsXG4gIH0sXG4gIGRldGFpbFRpdGxlOiB7XG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gIH0sXG4gIHRlbXBVbml0Q29udGFpbmVyOiB7XG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gIH0sXG4gIHdpbmRVbml0Q29udGFpbmVyOiB7XG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi53aW5kLXNwZWVkLWNvbnRhaW5lclwiLFxuICB9LFxuICB3aW5kVW5pdHM6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi53aW5kLXNwZWVkLXVuaXQtY29udGFpbmVyXCIsXG4gICAgdGV4dDogXCJrbS9oXCIsXG4gICAgY2xhc3MxOiBcIndpbmQtdW5pdHNcIixcbiAgfSxcbiAgdG9nZ2xlVW5pdHM6IHtcbiAgICBub2RlVHlwZTogXCJpbnB1dFwiLFxuICAgIHBhcmVudDogXCIud2VhdGhlci1jYXJkXCIsXG4gICAgY2xhc3MxOiBcInRvZ2dsZS11bml0c1wiLFxuICAgIHZhbHVlOiBcIkNsaWNrIHRvIHRvZ2dsZSB1bml0c1wiLFxuICAgIGlucHV0VHlwZTogXCJidXR0b25cIixcbiAgfSxcbiAgZm9yZWNhc3RDb250YWluZXI6IHtcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLndlYXRoZXItY2FyZFwiLFxuICAgIGNsYXNzMTogXCJmb3JlY2FzdC1jb250YWluZXJcIixcbiAgfSxcbiAgZm9yZWNhc3RDYXJkOiB7XG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5mb3JlY2FzdC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiZm9yZWNhc3RcIixcbiAgfSxcbiAgZm9yZWNhc3RUaW1lOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIGNsYXNzMTogXCJmb3JlY2FzdC10aW1lXCIsXG4gICAgY2xhc3MzOiBcInRpbWVcIixcbiAgfSxcbiAgZm9yZWNhc3RUZW1wOiB7XG4gICBub2RlVHlwZTogXCJwXCIsXG4gICBjbGFzczE6IFwiZm9yZWNhc3QtdGVtcFwiLFxuICAgY2xhc3MzOiBcInRlbXBlcmF0dXJlXCIsXG4gIH0sXG4gIGZvcmVjYXN0U3VtbWFyeToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBjbGFzczE6IFwiZm9yZWNhc3Qtc3VtbWFyeVwiLFxuICB9LFxuICBmb3JlY2FzdEh1bWlkaXR5OiB7XG4gICBub2RlVHlwZTogXCJwXCIsXG4gICBjbGFzczE6IFwiZm9yZWNhc3QtaHVtaWRpdHlcIixcbiAgfSxcbiAgZm9yZWNhc3RDb3VudDoge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBjbGFzczE6IFwiZm9yZWNhc3QtY291bnRcIixcbiAgfSxcbiAgZm9yZWNhc3RJY29uOiB7XG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgY2xhc3MxOiBcImZvcmVjYXN0LWljb25cIixcbiAgfVxufTtcblxuY29uc3QgZXJyb3JzID0ge1xuICA0MDQ6IHtcbiAgICBub2RlVHlwZTogXCJoMlwiLFxuICAgIHBhcmVudDogXCIuY29udGVudFwiLFxuICAgIGNsYXNzMTogXCJlcnJvclwiLFxuICAgIHRleHQ6IFwiRXJyb3IgNDA0OiBMb2NhdGlvbiBub3QgZm91bmQuIFBsZWFzZSBlbnRlciBhIHZhbGlkIGxvY2F0aW9uLlwiLFxuICB9LFxuICA1MjA6IHtcbiAgICBub2RlVHlwZTogXCJoMlwiLFxuICAgIHBhcmVudDogXCIuY29udGVudFwiLFxuICAgIGNsYXNzMTogXCJlcnJvclwiLFxuICAgIHRleHQ6IFwiRXJyb3IgNTIwOiBFbXB0eSwgdW5rbm93biwgdW5leHBlY3RlZCwgb3Igbm8gcmVzcG9uc2VcIixcbiAgfSxcbn07XG5cbmV4cG9ydCB7IGRpc3BsYXlPYmplY3RzLCBjYXJkT2JqZWN0cywgZXJyb3JzIH07XG4iLCJpbXBvcnQgeyBjb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4vY29tcG9uZW50RmFjdG9yeVwiO1xuaW1wb3J0IHsgY2FyZE9iamVjdHMgfSBmcm9tIFwiLi9kaXNwbGF5T2JqZWN0c1wiO1xuXG5jb25zdCBkcmF3Q2FyZCA9ICgpID0+IHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jYXJkXCIpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWNhcmRcIikucmVtb3ZlKCk7XG4gIH1cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JcIikpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpLnJlbW92ZSgpO1xuICB9XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuY2FyZCk7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuc3VtbWFyeSk7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMudG9nZ2xlVW5pdHMpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLmRldGFpbHMpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLmxvY2F0aW9uKTtcbiAgLy9cbiAgY29uc3QgdGVtcENvbnRhaW5lcjEgPSBjYXJkT2JqZWN0cy5tYWluVGVtcENvbnRhaW5lcjtcbiAgdGVtcENvbnRhaW5lcjEucGFyZW50ID0gXCIuc3VtbWFyeVwiO1xuICB0ZW1wQ29udGFpbmVyMS5jbGFzczEgPSBcInRlbXAtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkodGVtcENvbnRhaW5lcjEpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLnRlbXApO1xuICBjb25zdCB0ZW1wVW5pdDAgPSBjYXJkT2JqZWN0cy50ZW1wVW5pdHM7XG4gIHRlbXBVbml0MC5wYXJlbnQgPSBcIi50ZW1wLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KHRlbXBVbml0MCk7XG4gIC8vXG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuZGVzY3JpcHRpb24pO1xuICAvL1xuICBjb25zdCBmZWVsc0NvbnRhaW5lciA9IGNhcmRPYmplY3RzLnRlbXBDb250YWluZXI7XG4gIGZlZWxzQ29udGFpbmVyLnBhcmVudCA9IFwiLmRldGFpbHNcIjtcbiAgZmVlbHNDb250YWluZXIuY2xhc3MxID0gXCJmZWVscy1jb250YWluZXJcIjtcbiAgZmVlbHNDb250YWluZXIuY2xhc3MyID0gXCJkZXRhaWwtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkoZmVlbHNDb250YWluZXIpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLmZlZWxzTGlrZVRpdGxlKTtcbiAgY29uc3QgZmVlbHNUZW1wQ29udGFpbmVyID0gY2FyZE9iamVjdHMudGVtcFVuaXRDb250YWluZXI7XG4gIGZlZWxzVGVtcENvbnRhaW5lci5jbGFzczEgPSBcImZlZWxzLXRlbXAtY29udGFpbmVyXCI7XG4gIGZlZWxzVGVtcENvbnRhaW5lci5jbGFzczIgPSBcInRlbXAtZGV0YWlscy1jb250YWluZXJcIjtcbiAgZmVlbHNUZW1wQ29udGFpbmVyLnBhcmVudCA9IFwiLmZlZWxzLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KGZlZWxzVGVtcENvbnRhaW5lcik7XG5cbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5mZWVsc0xpa2UpO1xuICBjb25zdCBmZWVsc1VuaXRzID0gY2FyZE9iamVjdHMudGVtcFVuaXRzO1xuICBmZWVsc1VuaXRzLnBhcmVudCA9IFwiLmZlZWxzLXRlbXAtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkoZmVlbHNVbml0cyk7XG4gIC8vXG4gIGNvbnN0IGh1bWlkaXR5Q29udGFpbmVyID0gY2FyZE9iamVjdHMuZGV0YWlsQ29udGFpbmVyO1xuICBodW1pZGl0eUNvbnRhaW5lci5jbGFzczIgPSBcImh1bWlkaXR5LWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KGh1bWlkaXR5Q29udGFpbmVyKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5odW1pZGl0eVRpdGxlKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5odW1pZGl0eSk7XG4gIC8vXG5cbiAgY29uc3QgaGlnaENvbnRhaW5lciA9IGNhcmRPYmplY3RzLnRlbXBDb250YWluZXI7XG4gIGhpZ2hDb250YWluZXIucGFyZW50ID0gXCIuZGV0YWlsc1wiO1xuICBoaWdoQ29udGFpbmVyLmNsYXNzMSA9IFwiaGlnaC1jb250YWluZXJcIjtcbiAgaGlnaENvbnRhaW5lci5jbGFzczIgPSBcImRldGFpbC1jb250YWluZXJcIjtcbiAgY29tcG9uZW50RmFjdG9yeShoaWdoQ29udGFpbmVyKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5oaWdoVGl0bGUpO1xuICBjb25zdCBoaWdoVGVtcENvbnRhaW5lciA9IGNhcmRPYmplY3RzLnRlbXBVbml0Q29udGFpbmVyO1xuICBoaWdoVGVtcENvbnRhaW5lci5jbGFzczEgPSBcImhpZ2gtdGVtcC1jb250YWluZXJcIjtcbiAgaGlnaFRlbXBDb250YWluZXIuY2xhc3MyID0gXCJ0ZW1wLWRldGFpbHMtY29udGFpbmVyXCI7XG4gIGhpZ2hUZW1wQ29udGFpbmVyLnBhcmVudCA9IFwiLmhpZ2gtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkoaGlnaFRlbXBDb250YWluZXIpO1xuXG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuaGlnaCk7XG4gIGNvbnN0IGhpZ2hVbml0cyA9IGNhcmRPYmplY3RzLnRlbXBVbml0cztcbiAgaGlnaFVuaXRzLnBhcmVudCA9IFwiLmhpZ2gtdGVtcC1jb250YWluZXJcIjtcbiAgY29tcG9uZW50RmFjdG9yeShoaWdoVW5pdHMpO1xuXG4gIGNvbnN0IGxvd0NvbnRhaW5lciA9IGNhcmRPYmplY3RzLnRlbXBDb250YWluZXI7XG4gIGxvd0NvbnRhaW5lci5wYXJlbnQgPSBcIi5kZXRhaWxzXCI7XG4gIGxvd0NvbnRhaW5lci5jbGFzczEgPSBcImxvdy1jb250YWluZXJcIjtcbiAgbG93Q29udGFpbmVyLmNsYXNzMiA9IFwiZGV0YWlsLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KGxvd0NvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMubG93VGl0bGUpO1xuICBjb25zdCBsb3dUZW1wQ29udGFpbmVyID0gY2FyZE9iamVjdHMudGVtcFVuaXRDb250YWluZXI7XG4gIGxvd1RlbXBDb250YWluZXIuY2xhc3MxID0gXCJsb3ctdGVtcC1jb250YWluZXJcIjtcbiAgbG93VGVtcENvbnRhaW5lci5jbGFzczIgPSBcInRlbXAtZGV0YWlscy1jb250YWluZXJcIjtcbiAgbG93VGVtcENvbnRhaW5lci5wYXJlbnQgPSBcIi5sb3ctY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkobG93VGVtcENvbnRhaW5lcik7XG5cbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5sb3cpO1xuICBjb25zdCBsb3dVbml0cyA9IGNhcmRPYmplY3RzLnRlbXBVbml0cztcbiAgbG93VW5pdHMucGFyZW50ID0gXCIubG93LXRlbXAtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkobG93VW5pdHMpO1xuXG4gIGNvbnN0IGNsb3Vkc0NvbnRhaW5lciA9IGNhcmRPYmplY3RzLmRldGFpbENvbnRhaW5lcjtcbiAgY2xvdWRzQ29udGFpbmVyLmNsYXNzMiA9IFwiY2xvdWRzLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KGNsb3Vkc0NvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuY2xvdWRzVGl0bGUpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLmNsb3Vkcyk7XG5cbiAgY29uc3QgcHJlc3N1cmVDb250YWluZXIgPSBjYXJkT2JqZWN0cy5kZXRhaWxDb250YWluZXI7XG4gIHByZXNzdXJlQ29udGFpbmVyLmNsYXNzMiA9IFwicHJlc3N1cmUtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkocHJlc3N1cmVDb250YWluZXIpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLnByZXNzdXJlVGl0bGUpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLnByZXNzdXJlKTtcblxuICBjb25zdCBzdW5yaXNlQ29udGFpbmVyID0gY2FyZE9iamVjdHMuZGV0YWlsQ29udGFpbmVyO1xuICBzdW5yaXNlQ29udGFpbmVyLmNsYXNzMiA9IFwic3VucmlzZS1jb250YWluZXJcIjtcbiAgY29tcG9uZW50RmFjdG9yeShzdW5yaXNlQ29udGFpbmVyKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5zdW5yaXNlVGl0bGUpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLnN1bnJpc2UpO1xuXG4gIGNvbnN0IHN1bnNldENvbnRhaW5lciA9IGNhcmRPYmplY3RzLmRldGFpbENvbnRhaW5lcjtcbiAgc3Vuc2V0Q29udGFpbmVyLmNsYXNzMiA9IFwic3Vuc2V0LWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KHN1bnNldENvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuc3Vuc2V0VGl0bGUpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLnN1bnNldCk7XG5cbiAgY29uc3QgdmlzQ29udGFpbmVyID0gY2FyZE9iamVjdHMuZGV0YWlsQ29udGFpbmVyO1xuICB2aXNDb250YWluZXIuY2xhc3MyID0gXCJ2aXMtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkodmlzQ29udGFpbmVyKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy52aXNUaXRsZSk7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMudmlzKTtcblxuICBjb25zdCB3aW5kRGlyQ29udGFpbmVyID0gY2FyZE9iamVjdHMuZGV0YWlsQ29udGFpbmVyO1xuICB3aW5kRGlyQ29udGFpbmVyLmNsYXNzMiA9IFwid2luZC1kaXItY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3Rvcnkod2luZERpckNvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMud2luZERpclRpdGxlKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy53aW5kRGlyKTtcblxuICBjb25zdCB3aW5kU3BlZWRDb250YWluZXIgPSBjYXJkT2JqZWN0cy5kZXRhaWxDb250YWluZXI7XG4gIHdpbmRTcGVlZENvbnRhaW5lci5jbGFzczIgPSBcIndpbmQtc3BlZWQtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3Rvcnkod2luZFNwZWVkQ29udGFpbmVyKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy53aW5kU3BlZWRUaXRsZSk7XG4gIGNvbnN0IHdpbmRTcGVlZFVuaXRDb250YWluZXIgPSBjYXJkT2JqZWN0cy53aW5kVW5pdENvbnRhaW5lcjtcbiAgd2luZFNwZWVkVW5pdENvbnRhaW5lci5jbGFzczEgPSBcIndpbmQtc3BlZWQtdW5pdC1jb250YWluZXJcIjtcbiAgY29tcG9uZW50RmFjdG9yeSh3aW5kU3BlZWRVbml0Q29udGFpbmVyKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy53aW5kU3BlZWQpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLndpbmRVbml0cyk7XG5cbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5mb3JlY2FzdENvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgeyBkcmF3Q2FyZCB9O1xuIiwiaW1wb3J0IHsgY2FyZE9iamVjdHMgfSBmcm9tIFwiLi9kaXNwbGF5T2JqZWN0c1wiO1xuaW1wb3J0IHsgY29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuL2NvbXBvbmVudEZhY3RvcnlcIjtcbmltcG9ydCB7IHNldEZvcmVjYXN0SWNvbiB9IGZyb20gXCIuL3NldEZvcmVjYXN0SWNvblwiO1xuaW1wb3J0IHsgY29udmVydFRpbWVzRnJvbVVuaXgsIGNvbnZlcnRGcm9tS2VsdmluIH0gZnJvbSBcIi4vY29udmVyc2lvbnNcIjtcblxuY29uc3QgcG9wdWxhdGVGb3JlY2FzdENhcmQgPSAoZm9yZWNhc3QsIGksIG9mZnNldCkgPT4ge1xuICBjb25zdCBmb3JlY2FzdFN1bW1hcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3Qtc3VtbWFyeSR7aX1gKTtcbiAgY29uc3QgZm9yZWNhc3RUZW1wID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0LXRlbXAke2l9YCk7XG4gIGNvbnN0IGZvcmVjYXN0SHVtaWRpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3QtaHVtaWRpdHkke2l9YCk7XG4gIGNvbnN0IGZvcmVjYXN0VGltZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JlY2FzdC10aW1lJHtpfWApO1xuICBjb25zdCBmb3JlY2FzdENvdW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0LWNvdW50JHtpfWApO1xuICBzZXRGb3JlY2FzdEljb24oZm9yZWNhc3Qud2VhdGhlclswXS5pZCwgaSk7XG4gIGZvcmVjYXN0U3VtbWFyeS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LndlYXRoZXJbMF0ubWFpbjtcbiAgZm9yZWNhc3RUZW1wLnRleHRDb250ZW50ID0gYFRlbXA6ICR7Y29udmVydEZyb21LZWx2aW4oZm9yZWNhc3QubWFpbi50ZW1wKX1gO1xuICBmb3JlY2FzdEh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAke2ZvcmVjYXN0Lm1haW4uaHVtaWRpdHl9ICVgO1xuICBjb25zdCB7IGR0IH0gPSBmb3JlY2FzdDtcbiAgY29uc3QgZm9yZWNhc3RUaW1lMjRoID0gY29udmVydFRpbWVzRnJvbVVuaXgoZHQsIG9mZnNldCk7XG4gIGZvcmVjYXN0VGltZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0VGltZTI0aDtcbiAgaWYgKGkgPT09IDApIHtcbiAgICBmb3JlY2FzdENvdW50LnRleHRDb250ZW50ID0gXCJcIjtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBob3VycyA9IGkgKiAzO1xuICAgIGlmIChob3VycyA8IDI0KSB7XG4gICAgICBmb3JlY2FzdENvdW50LnRleHRDb250ZW50ID0gYCsgJHtob3Vyc30gaG91cnNgO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBkYXlzID0gaG91cnMgLyAyNDtcbiAgICAgIGNvbnN0IGRheXNSZW1haW5kZXIgPSBkYXlzICUgMTtcbiAgICAgIGNvbnN0IGRheXNSb3VuZGVkID0gZGF5cyAtIGRheXNSZW1haW5kZXI7XG4gICAgICBmb3JlY2FzdENvdW50LnRleHRDb250ZW50ID0gYCsgJHtkYXlzUm91bmRlZH0gZGF5c2A7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBkcmF3Rm9yZWNhc3RDYXJkID0gKGZvcmVjYXN0LCBpLCBvZmZzZXQpID0+IHtcbiAgY29uc3Qge1xuICAgIGZvcmVjYXN0Q2FyZCxcbiAgICBmb3JlY2FzdFRpbWUsXG4gICAgZm9yZWNhc3RUZW1wLFxuICAgIGZvcmVjYXN0RGVzY3JpcHRpb24sXG4gICAgZm9yZWNhc3RIdW1pZGl0eSxcbiAgICB0ZW1wQ29udGFpbmVyLFxuICAgIHRlbXBVbml0cyxcbiAgICBmb3JlY2FzdENvdW50LFxuICAgIGZvcmVjYXN0SWNvbixcbiAgfSA9IGNhcmRPYmplY3RzO1xuICBmb3JlY2FzdENhcmQuY2xhc3MyID0gYGZvcmVjYXN0JHtpfWA7XG4gIGNvbXBvbmVudEZhY3RvcnkoZm9yZWNhc3RDYXJkKTtcbiAgZm9yZWNhc3RUaW1lLmNsYXNzMiA9IGBmb3JlY2FzdC10aW1lJHtpfWA7XG4gIGZvcmVjYXN0VGltZS5wYXJlbnQgPSBgLmZvcmVjYXN0JHtpfWA7XG4gIGZvcmVjYXN0VGVtcC5jbGFzczIgPSBgZm9yZWNhc3QtdGVtcCR7aX1gO1xuICBmb3JlY2FzdFRlbXAucGFyZW50ID0gYC5mb3JlY2FzdC10ZW1wLWNvbnRhaW5lciR7aX1gO1xuICBmb3JlY2FzdEh1bWlkaXR5LmNsYXNzMiA9IGBmb3JlY2FzdC1odW1pZGl0eSR7aX1gO1xuICBmb3JlY2FzdEh1bWlkaXR5LnBhcmVudCA9IGAuZm9yZWNhc3Qke2l9YDtcbiAgZm9yZWNhc3REZXNjcmlwdGlvbi5jbGFzczIgPSBgZm9yZWNhc3Qtc3VtbWFyeSR7aX1gO1xuICBmb3JlY2FzdERlc2NyaXB0aW9uLnBhcmVudCA9IGAuZm9yZWNhc3Qke2l9YDtcbiAgdGVtcFVuaXRzLmNsYXNzMiA9IGBmb3JlY2FzdC10ZW1wLXVuaXRzJHtpfWA7XG4gIHRlbXBVbml0cy5wYXJlbnQgPSBgLmZvcmVjYXN0LXRlbXAtY29udGFpbmVyJHtpfWA7XG4gIHRlbXBDb250YWluZXIucGFyZW50ID0gYC5mb3JlY2FzdCR7aX1gO1xuICB0ZW1wQ29udGFpbmVyLmNsYXNzMiA9IGBmb3JlY2FzdC10ZW1wLWNvbnRhaW5lciR7aX1gO1xuICBmb3JlY2FzdENvdW50LnBhcmVudCA9IGAuZm9yZWNhc3Qke2l9YDtcbiAgZm9yZWNhc3RDb3VudC5jbGFzczIgPSBgZm9yZWNhc3QtY291bnQke2l9YDtcbiAgZm9yZWNhc3RJY29uLnBhcmVudCA9IGAuZm9yZWNhc3Qke2l9YDtcbiAgZm9yZWNhc3RJY29uLmNsYXNzMiA9IGBmb3JlY2FzdC1pY29uJHtpfWA7XG4gIGNvbXBvbmVudEZhY3RvcnkoZm9yZWNhc3RJY29uKTtcbiAgY29tcG9uZW50RmFjdG9yeShmb3JlY2FzdERlc2NyaXB0aW9uKTtcbiAgY29tcG9uZW50RmFjdG9yeShmb3JlY2FzdFRpbWUpO1xuICBjb21wb25lbnRGYWN0b3J5KGZvcmVjYXN0Q291bnQpO1xuICBjb21wb25lbnRGYWN0b3J5KHRlbXBDb250YWluZXIpO1xuICBjb21wb25lbnRGYWN0b3J5KGZvcmVjYXN0VGVtcCk7XG4gIGNvbXBvbmVudEZhY3RvcnkodGVtcFVuaXRzKTtcbiAgY29tcG9uZW50RmFjdG9yeShmb3JlY2FzdEh1bWlkaXR5KTtcblxuICBwb3B1bGF0ZUZvcmVjYXN0Q2FyZChmb3JlY2FzdCwgaSwgb2Zmc2V0KTtcbn07XG5cbmNvbnN0IHBvcHVsYXRlRm9yZWNhc3RzID0gKGZvcmVjYXN0cywgb2Zmc2V0KSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3RzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGZvcmVjYXN0c1tpXTtcbiAgICBkcmF3Rm9yZWNhc3RDYXJkKGVsZW1lbnQsIGksIG9mZnNldCk7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHBvcHVsYXRlRm9yZWNhc3RDYXJkLCBwb3B1bGF0ZUZvcmVjYXN0cywgZHJhd0ZvcmVjYXN0Q2FyZCB9O1xuIiwiY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoaWQpID0+IHtcbiAgbGV0IHdlYXRoZXI7XG4gIGxldCBpbWc7XG4gIHN3aXRjaCAoaWQpIHtcbiAgICBjYXNlIDIwMDpcbiAgICAgIHdlYXRoZXIgPSBcIlRodW5kZXJzdG9ybSB3aXRoIGxpZ2h0IHJhaW5cIjtcbiAgICAgIGltZyA9IFwiU3Rvcm1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjAxOlxuICAgICAgd2VhdGhlciA9IFwiVGh1bmRlcnN0b3JtIHdpdGggcmFpblwiO1xuICAgICAgaW1nID0gXCJTdG9ybVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyMDI6XG4gICAgICB3ZWF0aGVyID0gXCJUaHVuZGVyc3Rvcm0gd2l0aCBoZWF2eSByYWluXCI7XG4gICAgICBpbWcgPSBcIlN0b3JtXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDIxMDpcbiAgICAgIHdlYXRoZXIgPSBcIkxpZ2h0IHRodW5kZXJzdG9ybVwiO1xuICAgICAgaW1nID0gXCJTdG9ybVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyMTE6XG4gICAgICB3ZWF0aGVyID0gXCJUaHVuZGVyc3Rvcm1cIjtcbiAgICAgIGltZyA9IFwiU3Rvcm1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjEyOlxuICAgICAgd2VhdGhlciA9IFwiSGVhdnkgdGh1bmRlcnN0b3JtXCI7XG4gICAgICBpbWcgPSBcIlN0b3JtXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDIyMTpcbiAgICAgIHdlYXRoZXIgPSBcIlJhZ2dlZCB0aHVuZGVyc3Rvcm1cIjtcbiAgICAgIGltZyA9IFwiU3Rvcm1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjMwOlxuICAgICAgd2VhdGhlciA9IFwiVGh1bmRlcnN0b3JtIHdpdGggbGlnaHQgZHJpenpsZVwiO1xuICAgICAgaW1nID0gXCJTdG9ybVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyMzE6XG4gICAgICB3ZWF0aGVyID0gXCJUaHVuZGVyc3Rvcm0gd2l0aCBkcml6emxlXCI7XG4gICAgICBpbWcgPSBcIlN0b3JtXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDIzMjpcbiAgICAgIHdlYXRoZXIgPSBcIlRodW5kZXJzdG9ybSB3aXRoIGhlYXZ5IGRyaXp6bGVcIjtcbiAgICAgIGltZyA9IFwiU3Rvcm1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzAwOlxuICAgICAgd2VhdGhlciA9IFwiTGlnaHQgaW50ZW5zaXR5IGRyaXp6bGVcIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMDE6XG4gICAgICB3ZWF0aGVyID0gXCJEcml6emxlXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzAyOlxuICAgICAgd2VhdGhlciA9IFwiSGVhdnkgaW50ZW5zaXR5IGRyaXp6bGVcIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMTA6XG4gICAgICB3ZWF0aGVyID0gXCJMaWdodCBpbnRlbnNpdHkgZHJpenpsZSByYWluXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzExOlxuICAgICAgd2VhdGhlciA9IFwiRHJpenpsZSByYWluXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzEyOlxuICAgICAgd2VhdGhlciA9IFwiSGVhdnkgaW50ZW5zaXR5IGRyaXp6bGUgcmFpblwiO1xuICAgICAgaW1nID0gXCJSYWluXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMxMzpcbiAgICAgIHdlYXRoZXIgPSBcIlNob3dlciByYWluIGFuZCBkcml6emxlXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzE0OlxuICAgICAgd2VhdGhlciA9IFwiSGVhdnkgc2hvd2VyIHJhaW4gYW5kIGRyaXp6bGVcIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMjE6XG4gICAgICB3ZWF0aGVyID0gXCJTaG93ZXIgZHJpenpsZVwiO1xuICAgICAgaW1nID0gXCJSYWluXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDUwMDpcbiAgICAgIHdlYXRoZXIgPSBcIkxpZ2h0IHJhaW5cIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MDE6XG4gICAgICB3ZWF0aGVyID0gXCJNb2RlcmF0ZSByYWluXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTAyOlxuICAgICAgd2VhdGhlciA9IFwiSGVhdnkgaW50ZW5zaXR5IHJhaW5cIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MDM6XG4gICAgICB3ZWF0aGVyID0gXCJWZXJ5IGhlYXZ5IHJhaW5cIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MDQ6XG4gICAgICB3ZWF0aGVyID0gXCJFeHRyZW1lIHJhaW5cIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MjA6XG4gICAgICB3ZWF0aGVyID0gXCJMaWdodCBpbnRlbnNpdHkgc2hvd2VyIHJhaW5cIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MjE6XG4gICAgICB3ZWF0aGVyID0gXCJTaG93ZXIgcmFpbiBcIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MjI6XG4gICAgICB3ZWF0aGVyID0gXCJIZWF2eSBpbnRlbnNpdHkgc2hvd2VyIHJhaW4gXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTMxOlxuICAgICAgd2VhdGhlciA9IFwiUmFnZ2VkIHNob3dlciByYWluXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjAwOlxuICAgICAgd2VhdGhlciA9IFwiTGlnaHQgc25vd1wiO1xuICAgICAgaW1nID0gXCJTbm93XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDYwMTpcbiAgICAgIHdlYXRoZXIgPSBcIlNub3dcIjtcbiAgICAgIGltZyA9IFwiU25vd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MDI6XG4gICAgICB3ZWF0aGVyID0gXCJIZWF2eSBzbm93XCI7XG4gICAgICBpbWcgPSBcIlNub3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjExOlxuICAgICAgd2VhdGhlciA9IFwiU2xlZXRcIjtcbiAgICAgIGltZyA9IFwiU25vd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MTI6XG4gICAgICB3ZWF0aGVyID0gXCJMaWdodCBzaG93ZXIgc2xlZXRcIjtcbiAgICAgIGltZyA9IFwiU25vd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MTM6XG4gICAgICB3ZWF0aGVyID0gXCJTaG93ZXIgc2xlZXRcIjtcbiAgICAgIGltZyA9IFwiU25vd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MTU6XG4gICAgICB3ZWF0aGVyID0gXCJMaWdodCByYWluIGFuZCBzbm93XCI7XG4gICAgICBpbWcgPSBcIlNub3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjE2OlxuICAgICAgd2VhdGhlciA9IFwiUmFpbiBhbmQgc25vd1wiO1xuICAgICAgaW1nID0gXCJTbm93XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDYyMDpcbiAgICAgIHdlYXRoZXIgPSBcIkxpZ2h0IHNob3dlciBzbm93XCI7XG4gICAgICBpbWcgPSBcIlNub3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjIxOlxuICAgICAgd2VhdGhlciA9IFwiU2hvd2VyIHNub3dcIjtcbiAgICAgIGltZyA9IFwiU25vd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MjI6XG4gICAgICB3ZWF0aGVyID0gXCJIZWF2eSBzaG93ZXIgc25vd1wiO1xuICAgICAgaW1nID0gXCJTbm93XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDcwMTpcbiAgICAgIHdlYXRoZXIgPSBcIk1pc3RcIjtcbiAgICAgIGltZyA9IFwiRm9nXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDcxMTpcbiAgICAgIHdlYXRoZXIgPSBcIlNtb2tlXCI7XG4gICAgICBpbWcgPSBcIlNtb2tlXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDcyMTpcbiAgICAgIHdlYXRoZXIgPSBcIkhhemVcIjtcbiAgICAgIGltZyA9IFwiSGF6ZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3MzE6XG4gICAgICB3ZWF0aGVyID0gXCJEdXN0XCI7XG4gICAgICBpbWcgPSBcIkR1c3RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzQxOlxuICAgICAgd2VhdGhlciA9IFwiRm9nXCI7XG4gICAgICBpbWcgPSBcIkZvZ1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3NTE6XG4gICAgICB3ZWF0aGVyID0gXCJTYW5kXCI7XG4gICAgICBpbWcgPSBcIkR1c3RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzYxOlxuICAgICAgd2VhdGhlciA9IFwiRHVzdFwiO1xuICAgICAgaW1nID0gXCJEdXN0XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc2MjpcbiAgICAgIHdlYXRoZXIgPSBcIkFzaFwiO1xuICAgICAgaW1nID0gXCJBc2hcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzcxOlxuICAgICAgd2VhdGhlciA9IFwiU3F1YWxsc1wiO1xuICAgICAgaW1nID0gXCJXaW5kXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc4MTpcbiAgICAgIHdlYXRoZXIgPSBcIlRvcm5hZG9cIjtcbiAgICAgIGltZyA9IFwiU3Rvcm1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODAwOlxuICAgICAgd2VhdGhlciA9IFwiQ2xlYXJcIjtcbiAgICAgIGltZyA9IFwiQ2xlYXJcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODAxOlxuICAgICAgd2VhdGhlciA9IFwiRmV3IGNsb3VkczogMTEtMjUlIFwiO1xuICAgICAgaW1nID0gXCJMQ2xvdWRzXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDgwMjpcbiAgICAgIHdlYXRoZXIgPSBcIlNjYXR0ZXJlZCBjbG91ZHM6IDI1LTUwJVwiO1xuICAgICAgaW1nID0gXCJMQ2xvdWRzXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDgwMzpcbiAgICAgIHdlYXRoZXIgPSBcIkJyb2tlbiBjbG91ZHM6IDUxLTg0JVwiO1xuICAgICAgaW1nID0gXCJDbG91ZHNcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODA0OlxuICAgICAgd2VhdGhlciA9IFwib3ZlcmNhc3QgY2xvdWRzOiA4NS0xMDAlXCI7XG4gICAgICBpbWcgPSBcIkNsb3Vkc1wiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHdlYXRoZXIgPSBcIkVycm9yISBDb3VsZG4ndCBmaW5kIHdlYXRoZXIgY29kZS5cIjtcbiAgICAgIGltZyA9IFwiQ2xlYXJcIjtcbiAgfVxuICByZXR1cm4gW3dlYXRoZXIsIGltZ107XG59O1xuXG5leHBvcnQgeyBnZXREZXNjcmlwdGlvbiB9O1xuIiwiaW1wb3J0IHsgZGlzcGxheU9iamVjdHMsIGVycm9ycyB9IGZyb20gXCIuL2Rpc3BsYXlPYmplY3RzXCI7XG5pbXBvcnQgeyBwcm9jZXNzSW5wdXQgfSBmcm9tIFwiLi9hcHBcIjtcbmltcG9ydCB7IGdldERlc2NyaXB0aW9uIH0gZnJvbSBcIi4vZ2V0RGVzY3JpcHRpb25cIjtcbmltcG9ydCB7IGRyYXdDYXJkIH0gZnJvbSBcIi4vZHJhd0NhcmRcIjtcbmltcG9ydCB7IGNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi9jb21wb25lbnRGYWN0b3J5XCI7XG5pbXBvcnQgeyBzZXRCYWNrZ3JvdW5kIH0gZnJvbSBcIi4vc2V0QmFja2dyb3VuZFwiO1xuaW1wb3J0IHsgcG9wdWxhdGVGb3JlY2FzdHMgfSBmcm9tIFwiLi9mb3JlY2FzdENhcmRzXCI7XG5pbXBvcnQge1xuICByb3VuZFRlbXAsXG4gIGNvbnZlcnRUaW1lcyxcbiAgY29udmVydFRlbXBzLFxuICBjb252ZXJ0VmlzLFxuICBjb252ZXJ0V2luZCxcbn0gZnJvbSBcIi4vY29udmVyc2lvbnNcIjtcblxuY29uc3QgZ2V0SW5wdXQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRvd25DaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLWlucHV0XCIpO1xuICBjb25zdCB0b3duQ2l0eVZhbHVlID0gdG93bkNpdHlJbnB1dC52YWx1ZTtcbiAgY29uc3QgY291bnRyeVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JzLWNvdW50cnlcIik7XG4gIGNvbnN0IGNvdW50cnlTZWxlY3RWYWx1ZSA9IGNvdW50cnlTZWxlY3QudmFsdWU7XG4gIGxldCBzdGF0ZVNlbGVjdFZhbHVlO1xuICBsZXQgd2VhdGhlck9iamVjdDtcbiAgaWYgKGNvdW50cnlTZWxlY3RWYWx1ZSA9PT0gXCJVU1wiKSB7XG4gICAgc3RhdGVTZWxlY3RWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdGUtaW5wdXRcIikudmFsdWU7XG4gICAgd2VhdGhlck9iamVjdCA9IGF3YWl0IHByb2Nlc3NJbnB1dChbXG4gICAgICB0b3duQ2l0eVZhbHVlLFxuICAgICAgY291bnRyeVNlbGVjdFZhbHVlLFxuICAgICAgc3RhdGVTZWxlY3RWYWx1ZSxcbiAgICBdKTtcbiAgICByZXR1cm4gd2VhdGhlck9iamVjdDtcbiAgfVxuICB3ZWF0aGVyT2JqZWN0ID0gYXdhaXQgcHJvY2Vzc0lucHV0KFt0b3duQ2l0eVZhbHVlLCBjb3VudHJ5U2VsZWN0VmFsdWVdKTtcbiAgcmV0dXJuIHdlYXRoZXJPYmplY3Q7XG59O1xuXG5jb25zdCB0b2dnbGVVbml0cyA9ICgpID0+IHtcbiAgY29uc3QgdW5pdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXAtdW5pdFwiKTtcbiAgaWYgKHVuaXRzWzBdLnRleHRDb250ZW50ID09PSBcIsKwQ1wiKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bml0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgdW5pdHNbaV0udGV4dENvbnRlbnQgPSBcIsKwRlwiO1xuICAgIH1cbiAgICBjb252ZXJ0VGVtcHMoMCk7XG4gICAgY29udmVydFRpbWVzKDEpO1xuICAgIGNvbnZlcnRXaW5kKDApO1xuICAgIGNvbnN0IHZpc1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXMtdGl0bGVcIik7XG4gICAgdmlzVGl0bGUudGV4dENvbnRlbnQgPSBcIlZpc2liaWxpdHkgKHlhcmRzKVwiO1xuICAgIGNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpc1wiKS50ZXh0Q29udGVudDtcbiAgICBjb252ZXJ0VmlzKHZpc2liaWxpdHksIDApO1xuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5pdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIHVuaXRzW2ldLnRleHRDb250ZW50ID0gXCLCsENcIjtcbiAgICB9XG4gICAgY29udmVydFRlbXBzKDEpO1xuICAgIGNvbnZlcnRUaW1lcygwKTtcbiAgICBjb252ZXJ0V2luZCgxKTtcbiAgICBjb25zdCB2aXNUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlzLXRpdGxlXCIpO1xuICAgIHZpc1RpdGxlLnRleHRDb250ZW50ID0gXCJWaXNpYmlsaXR5IChtZXRlcnMpXCI7XG4gICAgY29uc3QgdmlzaWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlzXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnZlcnRWaXModmlzaWJpbGl0eSwgMSk7XG4gIH1cbn07XG5cbmNvbnN0IHBvcHVsYXRlQ2FyZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGdldElucHV0KCk7XG4gIGlmICh0eXBlb2Ygd2VhdGhlciA9PT0gXCJudW1iZXJcIikge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItY2FyZFwiKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWNhcmRcIikucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAod2VhdGhlciA9PT0gNDA0KSB7XG4gICAgICBjb21wb25lbnRGYWN0b3J5KGVycm9yc1s0MDRdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50RmFjdG9yeShlcnJvcnNbNTIwXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRyYXdDYXJkKCk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS11bml0c1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVVbml0cyk7XG4gICAgd2VhdGhlci51bml0cyA9IDA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmxvY2F0aW9uXCJcbiAgICApLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5wbGFjZU5hbWV9LCAke3dlYXRoZXIuY291bnRyeX1gO1xuICAgIGNvbnN0IGFpclRlbXBSb3VuZGVkID0gcm91bmRUZW1wKHdlYXRoZXIuYWlyVGVtcCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wXCIpLnRleHRDb250ZW50ID0gYWlyVGVtcFJvdW5kZWQ7XG4gICAgY29uc3Qgc3VucmlzZSA9IHdlYXRoZXIuc3VucmlzZVRpbWU7XG4gICAgY29uc3Qgc3Vuc2V0ID0gd2VhdGhlci5zdW5zZXRUaW1lO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZ2V0RGVzY3JpcHRpb24od2VhdGhlci5pZCk7XG4gICAgc2V0QmFja2dyb3VuZChkZXNjcmlwdGlvblsxXSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5yaXNlXCIpLnRleHRDb250ZW50ID0gc3VucmlzZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bnNldFwiKS50ZXh0Q29udGVudCA9IHN1bnNldDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25bMF07XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKS50ZXh0Q29udGVudCA9IHdlYXRoZXIuaHVtaWRpdHk7XG4gICAgY29uc3QgbWF4Um91bmRlZCA9IHJvdW5kVGVtcCh3ZWF0aGVyLnRlbXBNYXgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlnaFwiKS50ZXh0Q29udGVudCA9IG1heFJvdW5kZWQ7XG4gICAgY29uc3QgbWluUm91bmRlZCA9IHJvdW5kVGVtcCh3ZWF0aGVyLnRlbXBNaW4pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG93XCIpLnRleHRDb250ZW50ID0gbWluUm91bmRlZDtcbiAgICBjb25zdCBmZWVsc1JvdW5kZWQgPSByb3VuZFRlbXAod2VhdGhlci5mZWVsc0xpa2UpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNMaWtlXCIpLnRleHRDb250ZW50ID0gZmVlbHNSb3VuZGVkO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvdWRzXCIpLnRleHRDb250ZW50ID0gd2VhdGhlci5jbG91ZHM7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzc3VyZVwiKS50ZXh0Q29udGVudCA9IHdlYXRoZXIucHJlc3N1cmU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXNcIikudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnZpc2liaWxpdHk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kLWRpclwiKS50ZXh0Q29udGVudCA9IHdlYXRoZXIud2luZFsxXVswXTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtc3BlZWRcIikudGV4dENvbnRlbnQgPSB3ZWF0aGVyLndpbmRbMF07XG4gICAgcG9wdWxhdGVGb3JlY2FzdHMod2VhdGhlci5mb3JlY2FzdCwgd2VhdGhlci5vZmZzZXQpO1xuICAgIGNvbnN0IHRlbXBVbml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVtcC11bml0XCIpO1xuICAgIGlmICh3ZWF0aGVyLnVuaXRzID09PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBVbml0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB0ZW1wVW5pdHNbaV0udGV4dENvbnRlbnQgPSBcIsKwQ1wiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3Qgc2hvd1N0YXRlaWZVUyA9ICgpID0+IHtcbiAgY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JzLWNvdW50cnlcIik7XG4gIGlmIChjb3VudHJ5LnZhbHVlID09PSBcIlVTXCIpIHtcbiAgICBjb25zdCBzdGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGF0ZS1pbnB1dFwiKTtcbiAgICBzdGF0ZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cbiAgaWYgKGNvdW50cnkudmFsdWUgIT09IFwiVVNcIikge1xuICAgIGNvbnN0IHN0YXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXRlLWlucHV0XCIpO1xuICAgIHN0YXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxufTtcblxuY29uc3QgYWRkTGlzdGVuZXJzID0gKCkgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLXN1Ym1pdFwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wdWxhdGVDYXJkKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5jcnMtY291bnRyeVwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1N0YXRlaWZVUyk7XG59O1xuXG5jb25zdCBidWlsZEludGVyZmFjZSA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNwbGF5T2JqZWN0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkaXNwbGF5T2JqZWN0c1tpXTtcbiAgICBjb21wb25lbnRGYWN0b3J5KGVsZW1lbnQpO1xuICB9XG4gIGFkZExpc3RlbmVycygpO1xufTtcblxuXG5cblxuXG5leHBvcnQgeyBidWlsZEludGVyZmFjZSB9O1xuIiwiaW1wb3J0IHsgYXBpS2V5IH0gZnJvbSBcIi4vYXBpa2V5XCI7XG5cbmNvbnN0IG9idGFpbldlYXRoZXIgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgdHJ5IHtcbiAgICBsZXQgZmV0Y2hDb29yZHM7XG4gICAgaWYgKGxvY2F0aW9uWzJdKSB7XG4gICAgICBmZXRjaENvb3JkcyA9IGF3YWl0IGZldGNoKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvblswXX0sJHtsb2NhdGlvblsyXX0sJHtsb2NhdGlvblsxXX0mbGltaXQ9NSZhcHBpZD0ke2FwaUtleX1gLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZldGNoQ29vcmRzID0gYXdhaXQgZmV0Y2goXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9uWzBdfSwke2xvY2F0aW9uWzFdfSZsaW1pdD01JmFwcGlkPSR7YXBpS2V5fWAsXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW1vdGVDb29yZHMgPSBhd2FpdCBmZXRjaENvb3Jkcy5qc29uKCk7XG5cbiAgICBjb25zdCBmZXRjaEZvcmVjYXN0ID0gYXdhaXQgZmV0Y2goXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke3JlbW90ZUNvb3Jkc1swXS5sYXR9Jmxvbj0ke3JlbW90ZUNvb3Jkc1swXS5sb259JkFQUElEPSR7YXBpS2V5fWAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke3JlbW90ZUNvb3Jkc1swXS5sYXR9Jmxvbj0ke3JlbW90ZUNvb3Jkc1swXS5sb259JkFQUElEPSR7YXBpS2V5fWAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgY3VycmVudFdlYXRoZXIuanNvbigpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd3ZWF0aGVyIGlzJywgd2VhdGhlcik7XG4gICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBmZXRjaEZvcmVjYXN0Lmpzb24oKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZm9yZWNhc3QgaXMnLCBmb3JlY2FzdCk7XG4gICAgd2VhdGhlci5mb3JlY2FzdCA9IGZvcmVjYXN0Lmxpc3Q7XG5cbiAgICBpZiAod2VhdGhlci5jb2QgPT09IFwiNDA0XCIpIHtcbiAgICAgIHJldHVybiA0MDQ7XG4gICAgfVxuICAgIHJldHVybiB3ZWF0aGVyO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiA1MjA7XG4gIH1cbn07XG5cbmV4cG9ydCB7IG9idGFpbldlYXRoZXIgfTtcbiIsImltcG9ydCBBc2ggZnJvbSBcIi4vaW1hZ2VzL2FzaC5qcGdcIjtcbmltcG9ydCBDbGVhciBmcm9tIFwiLi9pbWFnZXMvY2xlYXIuanBnXCI7XG5pbXBvcnQgQ2xvdWRzIGZyb20gXCIuL2ltYWdlcy9jbG91ZHMuanBnXCI7XG5pbXBvcnQgRHVzdCBmcm9tIFwiLi9pbWFnZXMvZHVzdC5qcGdcIjtcbmltcG9ydCBGb2cgZnJvbSBcIi4vaW1hZ2VzL2ZvZy5qcGdcIjtcbmltcG9ydCBIYXplIGZyb20gXCIuL2ltYWdlcy9oYXplLmpwZ1wiO1xuaW1wb3J0IExDbG91ZHMgZnJvbSBcIi4vaW1hZ2VzL2xjbG91ZHMuanBnXCI7XG5pbXBvcnQgUmFpbiBmcm9tIFwiLi9pbWFnZXMvcmFpbi5qcGdcIjtcbmltcG9ydCBTbW9rZSBmcm9tIFwiLi9pbWFnZXMvc21va2UuanBnXCI7XG5pbXBvcnQgU25vdyBmcm9tIFwiLi9pbWFnZXMvc25vdy5qcGdcIjtcbmltcG9ydCBTdG9ybSBmcm9tIFwiLi9pbWFnZXMvc3Rvcm0uanBnXCI7XG5pbXBvcnQgV2luZCBmcm9tIFwiLi9pbWFnZXMvd2luZC5qcGdcIjtcblxuY29uc3Qgc2V0QmFja2dyb3VuZCA9IChpbWcpID0+IHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jYXJkXCIpO1xuICBsZXQgaW1nU3RyO1xuICBzd2l0Y2ggKGltZykge1xuICAgIGNhc2UgXCJBc2hcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7QXNofScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNsZWFyXCI6XG4gICAgICBpbWdTdHIgPSBgdXJsKCcke0NsZWFyfScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNsb3Vkc1wiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtDbG91ZHN9JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRHVzdFwiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtEdXN0fScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkZvZ1wiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtGb2d9JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiSGF6ZVwiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtIYXplfScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkxDbG91ZHNcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7TENsb3Vkc30nKWA7XG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGltZ1N0cjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJSYWluXCI6XG4gICAgICBpbWdTdHIgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiU21va2VcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7U21va2V9JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiU3Rvcm1cIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7U3Rvcm19JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiU25vd1wiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtTbm93fScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIldpbmRcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7V2luZH0nKWA7XG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGltZ1N0cjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpbWdTdHIgPSBgdXJsKCcke0NsZWFyfScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICB9XG59O1xuXG5leHBvcnQgeyBzZXRCYWNrZ3JvdW5kIH07XG4iLCJpbXBvcnQgQ2xvdWRBbGVydCBmcm9tIFwiLi9pbWFnZXMvY2xvdWQtYWxlcnQuc3ZnXCI7XG5pbXBvcnQgQ2xvdWQgZnJvbSBcIi4vaW1hZ2VzL2Nsb3VkLnN2Z1wiO1xuaW1wb3J0IEZvZyBmcm9tIFwiLi9pbWFnZXMvZm9nLnN2Z1wiO1xuaW1wb3J0IFJhaW4gZnJvbSBcIi4vaW1hZ2VzL3JhaW4uc3ZnXCI7XG5pbXBvcnQgU2xlZXQgZnJvbSBcIi4vaW1hZ2VzL3NsZWV0LnN2Z1wiO1xuaW1wb3J0IFNub3cgZnJvbSBcIi4vaW1hZ2VzL3Nub3cuc3ZnXCI7XG5pbXBvcnQgU3Rvcm0gZnJvbSBcIi4vaW1hZ2VzL3N0b3JtLnN2Z1wiO1xuaW1wb3J0IFN1biBmcm9tIFwiLi9pbWFnZXMvc3VuLnN2Z1wiO1xuaW1wb3J0IER1c3QgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXItZHVzdC5zdmdcIjtcbmltcG9ydCBXaW5kIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLXdpbmR5LnN2Z1wiO1xuXG5jb25zdCBzZXRGb3JlY2FzdEljb24gPSAoZm9yZWNhc3QsIGkpID0+IHtcbiAgY29uc3QgaWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JlY2FzdC1pY29uJHtpfWApO1xuICBsZXQgd2VhdGhlcjtcbiAgc3dpdGNoIChmb3JlY2FzdCkge1xuICAgIGNhc2UgMjAwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjAxOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjAyOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjEwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjExOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjEyOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjIxOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjMwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjMxOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjMyOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzAwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMDE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7UmFpbn0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMwMjpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtSYWlufScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzEwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMTE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7UmFpbn0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMxMjpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtSYWlufScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzEzOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMTQ6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7UmFpbn0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMyMTpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtSYWlufScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTAwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MDE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7UmFpbn0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDUwMjpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtSYWlufScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTAzOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MDQ6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7UmFpbn0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDUyMDpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtSYWlufScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTIxOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MjI6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7UmFpbn0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDUzMTpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtSYWlufScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjAwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1Nub3d9JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MDE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7U25vd30nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDYwMjpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtTbm93fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjExOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1NsZWV0fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjEyOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1NsZWV0fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjEzOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1NsZWV0fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjE1OlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1NsZWV0fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjE2OlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1NsZWV0fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjIwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1Nub3d9JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MjE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7U25vd30nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDYyMjpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtTbm93fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzAxOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke0ZvZ30nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDcxMTpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtGb2d9JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3MjE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7Rm9nfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzMxOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke0ZvZ30nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc0MTpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtGb2d9JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3NTE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7RHVzdH0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc2MTpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtEdXN0fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzYyOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke0Nsb3VkQWxlcnR9JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3NzE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7V2luZH0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc4MTpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtTdG9ybX0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDgwMDpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtTdW59JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA4MDE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7U3VufScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODAyOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke0Nsb3VkfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODAzOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke0Nsb3VkfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7Q2xvdWR9JylgO1xuICAgICAgYnJlYWs7XG4gIH1cbn07XG5cbmV4cG9ydCB7IHNldEZvcmVjYXN0SWNvbiB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qIGltcG9ydCB7IHRlc3QgfSBmcm9tIFwiLi9hcHBcIjsgKi9cbmltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBidWlsZEludGVyZmFjZSB9IGZyb20gXCIuL2ludGVyZmFjZVwiO1xuXG4vKiBjb25zdCBydW5UZXN0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCByZXN1bHQgPSBhd2FpdCB0ZXN0KCk7XG4gIGNvbnNvbGUubG9nKFwicmVzdWx0IGlzXCIsIHJlc3VsdCk7XG59O1xuXG5ydW5UZXN0KCk7ICovXG5idWlsZEludGVyZmFjZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9