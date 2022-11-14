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
  console.log('weatherFactory! weather is', weather);
  const placeName = weather.name; 
  const { country, sunrise, sunset } = weather.sys;
  const clouds = weather.clouds.all;
  const { humidity, pressure, temp } = weather.main;
  const { id } = weather.weather[0];
  const { dt, forecast } = weather;
  const feelsLike = (0,_conversions__WEBPACK_IMPORTED_MODULE_1__.convertFromKelvin)(weather["main"]["feels_like"]);
  const tempMin = (0,_conversions__WEBPACK_IMPORTED_MODULE_1__.convertFromKelvin)(weather["main"]["temp_min"]);
  const tempMax = (0,_conversions__WEBPACK_IMPORTED_MODULE_1__.convertFromKelvin)(weather["main"]["temp_max"]);
  const airTemp = (0,_conversions__WEBPACK_IMPORTED_MODULE_1__.convertFromKelvin)(weather["main"]["temp"]);
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
      newDOMNode.setAttribute('data-region-id', 'USA');
    }
    if (shortcode) {
      newDOMNode.setAttribute('data-value', 'shortcode');
    }
    if (id) {
      newDOMNode.id = id;
    }
    if (preferred) {
      newDOMNode.setAttribute('data-preferred', preferred);
      newDOMNode.setAttribute('data-preferred-delim', '-----');
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
/* harmony import */ var _crs_min__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./crs.min */ "./src/crs.min.js");
/* harmony import */ var _crs_min__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_crs_min__WEBPACK_IMPORTED_MODULE_2__);




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
/* harmony import */ var _setForecastIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./setForecastIcon */ "./src/setForecastIcon.js");
/* harmony import */ var _conversions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./conversions */ "./src/conversions.js");









const buildInterface = () => {
  for (let i = 0; i < _displayObjects__WEBPACK_IMPORTED_MODULE_0__.displayObjects.length; i += 1) {
    const element = _displayObjects__WEBPACK_IMPORTED_MODULE_0__.displayObjects[i];
    (0,_componentFactory__WEBPACK_IMPORTED_MODULE_4__.componentFactory)(element);
  }
  addListeners();
};

const toggleUnits = () => {
  const units = document.querySelectorAll(".temp-unit");
  if (units[0].textContent === "°C") {
    for (let i = 0; i < units.length; i++) {
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
    for (let i = 0; i < units.length; i++) {
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

const populateForecastCard = (forecast, i, offset) => {
  console.log(
    "populateForecastCard! forecast, i, offset is",
    forecast,
    i,
    offset
  );
  const forecastSummary = document.querySelector(`.forecast-summary${i}`);
  const forecastTemp = document.querySelector(`.forecast-temp${i}`);
  const forecastHumidity = document.querySelector(`.forecast-humidity${i}`);
  const forecastTime = document.querySelector(`.forecast-time${i}`);
  const forecastCount = document.querySelector(`.forecast-count${i}`);
  (0,_setForecastIcon__WEBPACK_IMPORTED_MODULE_6__.setForecastIcon)(forecast.weather[0].id, i);
  forecastSummary.textContent = forecast.weather[0].main;
  forecastTemp.textContent = `Temp: ${(0,_conversions__WEBPACK_IMPORTED_MODULE_7__.convertFromKelvin)(forecast.main.temp)}`;
  forecastHumidity.textContent = `Humidity: ${forecast.main.humidity} %`;
  const { dt } = forecast;
  const forecastTime24h = (0,_conversions__WEBPACK_IMPORTED_MODULE_7__.convertTimesFromUnix)(dt, offset);
  forecastTime.textContent = forecastTime24h;
  if (i === 0) {
    console.log("forecastCount is", forecastCount);
    forecastCount.textContent = "First forecast";
  } else {
    let hours = i * 3;
    if (hours < 24) {
      forecastCount.textContent = `+ ${hours} hours`;
    } else {
      let days = hours / 24;
      //const remainder = 24 % hours;
      console.log("days is", days);
      //console.log('remainder is', remainder);
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
  console.log("drawForecastCard. forecast, i is", forecast, i);
  forecastCard.class2 = `forecast${i}`;
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_4__.componentFactory)(forecastCard);
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
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_4__.componentFactory)(forecastIcon);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_4__.componentFactory)(forecastDescription);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_4__.componentFactory)(tempContainer);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_4__.componentFactory)(forecastTemp);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_4__.componentFactory)(tempUnits);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_4__.componentFactory)(forecastHumidity);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_4__.componentFactory)(forecastTime);
  (0,_componentFactory__WEBPACK_IMPORTED_MODULE_4__.componentFactory)(forecastCount);
  populateForecastCard(forecast, i, offset);
};

const populateForecasts = (forecasts, offset) => {
  console.log("populateForecasts! forecasts is", forecasts);
  for (let i = 0; i < forecasts.length; i++) {
    const element = forecasts[i];
    drawForecastCard(element, i, offset);
  }
};

const populateCard = async () => {
  console.log("populateCard!");
  const weather = await getInput();
  console.log("populateCard! weather is", weather);
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
    populateForecasts(weather.forecast, weather.offset);
    const tempUnits = document.querySelectorAll(".temp-unit");
    if (weather.units === 0) {
      for (let i = 0; i < tempUnits.length; i += 1) {
        tempUnits[i].textContent = "°C";
      }
    }
  }
};

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
    console.log("weatherObject is", weatherObject);
    return weatherObject;
  }
  weatherObject = await (0,_app__WEBPACK_IMPORTED_MODULE_1__.processInput)([townCityValue, countrySelectValue]);
  console.log("weatherObject is", weatherObject);
  return weatherObject;
};

const showStateifUS = () => {
  const country = document.querySelector(".crs-country");
  console.log("country is", country, "value is", country.value);
  if (country.value == "US") {
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
  console.log('obtainWeather! location is', location);
  try {
    let fetchCoords;
    if (location[2]) {
      fetchCoords = await fetch (
        `https://api.openweathermap.org/geo/1.0/direct?q=${location[0]},${location[2]},${location[1]}&limit=5&appid=${_apikey__WEBPACK_IMPORTED_MODULE_0__.apiKey}`,
        {
          mode: "cors",
        }
      );
    } else {
      fetchCoords = await fetch (
        `https://api.openweathermap.org/geo/1.0/direct?q=${location[0]},${location[1]}&limit=5&appid=${_apikey__WEBPACK_IMPORTED_MODULE_0__.apiKey}`,
        {
          mode: "cors",
        }
      );
    }
    
    const remoteCoords = await fetchCoords.json();
    console.log('remoteCoords is', remoteCoords);
    
    const fetchForecast = await fetch (
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
    console.log('weather is', weather);
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
/* harmony import */ var _images_thermometer_svg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/thermometer.svg */ "./src/images/thermometer.svg");
/* harmony import */ var _getDescription__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./getDescription */ "./src/getDescription.js");














const setForecastIcon = (forecast, i) => {
  console.log('setForecastIcon! forecast, i are', forecast, i );
  const icon = document.querySelector(`.forecast-icon${i}`);
  console.log('ICON IS', icon);
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
    case 804:
      icon.style.backgroundImage = `url('${_images_cloud_svg__WEBPACK_IMPORTED_MODULE_1__}')`;
      break;
    default:
      weather = "Error! Couldn't find weather code.";
      img = "Clear";
  }
  //icon.style.backgroundImage = 
  /*
  let imgStr;
  switch (img) {
    case "Ash":
      imgStr = `url('${Ash}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Clear":
      imgStr = `url('${Clear}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Clouds":
      imgStr = `url('${Clouds}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Dust":
      imgStr = `url('${Dust}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Fog":
      imgStr = `url('${Fog}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Haze":
      imgStr = `url('${Haze}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "LClouds":
      imgStr = `url('${LClouds}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Rain":
      imgStr = `url('${Rain}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Smoke":
      imgStr = `url('${Smoke}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Storm":
      imgStr = `url('${Storm}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Snow":
      imgStr = `url('${Snow}')`;
      card.style.backgroundImage = imgStr;
      break;
    case "Wind":
      imgStr = `url('${Wind}')`;
      card.style.backgroundImage = imgStr;
      break;
    default:
      imgStr = `url('${Clear}')`;
      card.style.backgroundImage = imgStr;
  }
  */
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

/***/ "./src/images/thermometer.svg":
/*!************************************!*\
  !*** ./src/images/thermometer.svg ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "473ffac0bc4294dc470b.svg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTzZDO0FBQ2xDO0FBQ2E7QUFDWjtBQUNnQjtBQUNOO0FBQ0k7QUFTN0I7O0FBRXZCO0FBQ0Esa0JBQWtCLElBQUksa0VBQXFCLEVBQUU7QUFDN0Msb0JBQW9CLDJEQUFjO0FBQ2xDLElBQUksbUVBQWdCO0FBQ3BCO0FBQ0E7QUFDQTs7QUFFQTtB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QUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsNkNBQUksQ0FBQztBQUNoRDtBQUNBO0FBQ0EsMkNBQTJDLDZDQUFJLENBQUM7QUFDaEQ7QUFDQTtBQUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsNkNBQUksQ0FBQztBQUNoRDtBQUNBO0FBQ0EsMkNBQTJDLDZDQUFJLENBQUM7QUFDaEQ7QUFDQTtBQUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsNkNBQUksQ0FBQztBQUNoRDtBQUNBO0FBQ0EsMkNBQTJDLDZDQUFJLENBQUM7QUFDaEQ7QUFDQTtBQUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsNkNBQUksQ0FBQztBQUNoRDtBQUNBO0FBQ0EsMkNBQTJDLDZDQUFJLENBQUM7QUFDaEQ7QUFDQTtBQUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsNkNBQUksQ0FBQztBQUNoRDtBQUNBO0FBQ0EsMkNBQTJDLDZDQUFJLENBQUM7QUFDaEQ7QUFDQTtBQUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsNkNBQUksQ0FBQztBQUNoRDtBQUNBO0FBQ0EsMkNBQTJDLDZDQUFJLENBQUM7QUFDaEQ7QUFDQTtBQUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsOENBQUssQ0FBQztBQUNqRDtBQUNBO0FBQ0EsMkNBQTJDLDhDQUFLLENBQUM7QUFDakQ7QUFDQTtBQUNBLDJDQUEyQyw4Q0FBSyxDQUFDO0FBQ2pEO0FBQ0E7QUFDQSwyQ0FBMkMsOENBQUssQ0FBQztBQUNqRDtBQUNBO0FBQ0EsMkNBQTJDLDhDQUFLLENBQUM7QUFDakQ7QUFDQTtBQUNBLDJDQUEyQyw2Q0FBSSxDQUFDO0FBQ2hEO0FBQ0E7QUFDQSwyQ0FBMkMsNkNBQUksQ0FBQztBQUNoRDtBQUNBO0FBQ0EsMkNBQTJDLDZDQUFJ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LCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXBpa2V5LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY29tcG9uZW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2NvbnZlcnNpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3JzLm1pbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Rpc3BsYXlPYmplY3RzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZHJhd0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9nZXREZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29idGFpbldlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zZXRCYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvc2V0Rm9yZWNhc3RJY29uLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBSRVNFVCBTVFlMRVMgKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIk1lcnJpd2VhdGhlclxcXCIsIHNlcmlmO1xcbn1cXG5cXG4vKiBTVFlMRVMgKi9cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC44NSk7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDMycHggMCAzMnB4IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAvKiBoZWlnaHQ6IDF2aDsgKi9cXG59XFxuXFxuLndlYXRoZXItY2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc3VtbWFyeSxcXG4uZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC44NSk7XFxuICBwYWRkaW5nOiAyOHB4IDAgNDJweCAwO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogNzRweCBhdXRvIDI0cHggYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIHBhZGRpbmc6IDE0cHggMCAyMXB4IDA7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG5cXG4uc3VtbWFyeSA+IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LXNpemU6IDEuOXJlbTtcXG59XFxuXFxuLnN1bW1hcnkgPiBwOmxhc3Qtb2YtdHlwZSB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLnRlbXAtY29udGFpbmVyLFxcbi5oaWdoLWNvbnRhaW5lcixcXG4ubG93LWNvbnRhaW5lcixcXG4uZmVlbHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxuICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XFxufVxcblxcbi50ZW1wLWNvbnRhaW5lciA+IHAge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLmRldGFpbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XFxufVxcblxcbi5kZXRhaWwtY29udGFpbmVyID4gcDpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uZGV0YWlsLWNvbnRhaW5lciA+IHA6bnRoLW9mLXR5cGUoMikge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzLWNvbnRhaW5lciA+ICoge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi50b2dnbGUtdW5pdHMge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuODUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24taW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSg3MywgNzMsIDczLCAwLjg1KTtcXG59XFxuXFxuLndpbmQtc3BlZWQtdW5pdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3B4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzc0KSB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC44NSk7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuODUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi5mb3JlY2FzdC1pY29uIHtcXG4gIGhlaWdodDogNTBweDtcXG4gIHdpZHRoOiA1MHB4O1xcbiAgZmlsdGVyOiBpbnZlcnQoOTUlKTtcXG59XFxuXFxuLmZvcmVjYXN0LWRlc2NyaXB0aW9uIHtcXG4gIGZvbnQtc2l6ZTogMjJweDtcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxpQkFBaUI7O0FBRWpCOzs7RUFHRSxzQkFBc0I7QUFDeEI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBOztFQUVFLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQztBQUNBOzs7OztFQUtFLGNBQWM7RUFDZCxlQUFlO0FBQ2pCO0FBQ0E7Ozs7RUFJRSxhQUFhO0FBQ2Y7QUFDQTs7Ozs7OztFQU9FLHlCQUF5QjtBQUMzQjtBQUNBOztFQUVFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFFQSxXQUFXOztBQUVYO0VBQ0Usd0NBQXdDO0VBQ3hDLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IscUJBQXFCO0VBQ3JCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsbUJBQW1CO0FBQ3JCOztBQUVBOztFQUVFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQix3Q0FBd0M7RUFDeEMsc0JBQXNCO0VBQ3RCLFVBQVU7RUFDViwyQkFBMkI7RUFDM0IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7OztFQUlFLGFBQWE7RUFDYixTQUFTO0VBQ1QscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdEQUFnRDtFQUNoRCxhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7QUFDakJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUkVTRVQgU1RZTEVTICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJyaXdlYXRoZXJcXFwiLCBzZXJpZjtcXG59XFxuXFxuLyogU1RZTEVTICovXFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuODUpO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAzMnB4IDAgMzJweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgLyogaGVpZ2h0OiAxdmg7ICovXFxufVxcblxcbi53ZWF0aGVyLWNhcmQge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnN1bW1hcnksXFxuLmRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuODUpO1xcbiAgcGFkZGluZzogMjhweCAwIDQycHggMDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDc0cHggYXV0byAyNHB4IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICBwYWRkaW5nOiAxNHB4IDAgMjFweCAwO1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG59XFxuXFxuLnN1bW1hcnkgPiBwOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC1zaXplOiAxLjlyZW07XFxufVxcblxcbi5zdW1tYXJ5ID4gcDpsYXN0LW9mLXR5cGUge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi50ZW1wLWNvbnRhaW5lcixcXG4uaGlnaC1jb250YWluZXIsXFxuLmxvdy1jb250YWluZXIsXFxuLmZlZWxzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbn1cXG5cXG4udGVtcC1jb250YWluZXIgPiBwIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5kZXRhaWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcbn1cXG5cXG4uZGV0YWlsLWNvbnRhaW5lciA+IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmRldGFpbC1jb250YWluZXIgPiBwOm50aC1vZi10eXBlKDIpIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnRlbXAtZGV0YWlscy1jb250YWluZXIgPiAqIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRlbXAtZGV0YWlscy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4udG9nZ2xlLXVuaXRzIHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MywgNzMsIDczLCAwLjg1KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC44NSk7XFxufVxcblxcbi53aW5kLXNwZWVkLXVuaXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc3NCkgd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuODUpO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MywgNzMsIDczLCAwLjg1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3QtaWNvbiB7XFxuICBoZWlnaHQ6IDUwcHg7XFxuICB3aWR0aDogNTBweDtcXG4gIGZpbHRlcjogaW52ZXJ0KDk1JSk7XFxufVxcblxcbi5mb3JlY2FzdC1kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDIycHg7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcblxuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gdXBkYXRlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuXG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cblxuICBjc3MgKz0gb2JqLmNzcztcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgYXBpS2V5ID0gXCJlNTY2NDE0NDZhZDNjNzYxMDQwM2UzYzE3ZDhjZTg4NlwiO1xuXG5leHBvcnQgeyBhcGlLZXkgfTtcbiIsImltcG9ydCB7IG9idGFpbldlYXRoZXIgfSBmcm9tIFwiLi9vYnRhaW5XZWF0aGVyXCI7XG5pbXBvcnQgeyBjb252ZXJ0RnJvbUtlbHZpbiwgY29udmVydFRpbWVzRnJvbVVuaXggfSBmcm9tIFwiLi9jb252ZXJzaW9uc1wiO1xuXG5cblxuXG5jb25zdCBjb252ZXJ0V2luZCA9IChkZWcpID0+IHtcbiAgLy8gVGFrZXMgd2luZCBkaXJlY3Rpb24gYXMgZGVncmVlcyBhbmQgcmV0dXJucyBhIGh1bWFuLXJlYWRhYmxlIHN0cmluZ1xuICBsZXQgZGlyZWN0aW9uO1xuICBsZXQgaW5kZXg7XG4gIHN3aXRjaCAodHJ1ZSkge1xuICAgIGNhc2UgZGVnID49IDMzNy41IHx8IGRlZyA8IDIyLjU6XG4gICAgICBkaXJlY3Rpb24gPSBcIk5vcnRoXCI7XG4gICAgICBpbmRleCA9IDA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA8IDY3LjU6XG4gICAgICBkaXJlY3Rpb24gPSBcIk5vcnRoLUVhc3RcIjtcbiAgICAgIGluZGV4ID0gMTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnIDwgMTEyLjU6XG4gICAgICBkaXJlY3Rpb24gPSBcIkVhc3RcIjtcbiAgICAgIGluZGV4ID0gMjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnIDwgMTU3LjU6XG4gICAgICBkaXJlY3Rpb24gPSBcIlNvdXRoLUVhc3RcIjtcbiAgICAgIGluZGV4ID0gMztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgZGVnIDwgMjAyLjU6XG4gICAgICBkaXJlY3Rpb24gPSBcIlNvdXRoXCI7XG4gICAgICBpbmRleCA9IDQ7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA8IDI0Ny41OlxuICAgICAgZGlyZWN0aW9uID0gXCJTb3V0aC1XZXN0XCI7XG4gICAgICBpbmRleCA9IDU7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA8IDI5Mi41OlxuICAgICAgZGlyZWN0aW9uID0gXCJXZXN0XCI7XG4gICAgICBpbmRleCA9IDY7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgZGlyZWN0aW9uID0gXCJOb3J0aC1XZXN0XCI7XG4gIH1cbiAgcmV0dXJuIFtkaXJlY3Rpb24sIGluZGV4XTtcbn07XG5cbmNvbnN0IHdlYXRoZXJGYWN0b3J5ID0gKHdlYXRoZXIpID0+IHtcbiAgLy8gVGFrZXMgdGhlIG9iamVjdCByZWNlaXZlZCBmcm9tIE9wZW4gV2VhdGhlcidzIEFQSSBhbmQgcmV0dXJucyBhIHdlYXRoZXIgb2JqZWN0IGNvbnRhaW5pbmdcbiAgLy8gb25seSB0aGUgd2VhdGhlciBkYXRhIHdlIHdpbGwgdXNlIGluIHRoaXMgYXBwXG4gIGNvbnNvbGUubG9nKCd3ZWF0aGVyRmFjdG9yeSEgd2VhdGhlciBpcycsIHdlYXRoZXIpO1xuICBjb25zdCBwbGFjZU5hbWUgPSB3ZWF0aGVyLm5hbWU7IFxuICBjb25zdCB7IGNvdW50cnksIHN1bnJpc2UsIHN1bnNldCB9ID0gd2VhdGhlci5zeXM7XG4gIGNvbnN0IGNsb3VkcyA9IHdlYXRoZXIuY2xvdWRzLmFsbDtcbiAgY29uc3QgeyBodW1pZGl0eSwgcHJlc3N1cmUsIHRlbXAgfSA9IHdlYXRoZXIubWFpbjtcbiAgY29uc3QgeyBpZCB9ID0gd2VhdGhlci53ZWF0aGVyWzBdO1xuICBjb25zdCB7IGR0LCBmb3JlY2FzdCB9ID0gd2VhdGhlcjtcbiAgY29uc3QgZmVlbHNMaWtlID0gY29udmVydEZyb21LZWx2aW4od2VhdGhlcltcIm1haW5cIl1bXCJmZWVsc19saWtlXCJdKTtcbiAgY29uc3QgdGVtcE1pbiA9IGNvbnZlcnRGcm9tS2VsdmluKHdlYXRoZXJbXCJtYWluXCJdW1widGVtcF9taW5cIl0pO1xuICBjb25zdCB0ZW1wTWF4ID0gY29udmVydEZyb21LZWx2aW4od2VhdGhlcltcIm1haW5cIl1bXCJ0ZW1wX21heFwiXSk7XG4gIGNvbnN0IGFpclRlbXAgPSBjb252ZXJ0RnJvbUtlbHZpbih3ZWF0aGVyW1wibWFpblwiXVtcInRlbXBcIl0pO1xuICBjb25zdCBvZmZzZXQgPSB3ZWF0aGVyLnRpbWV6b25lO1xuICBjb25zdCBzdW5yaXNlVGltZSA9IGNvbnZlcnRUaW1lc0Zyb21Vbml4KHN1bnJpc2UsIG9mZnNldCk7XG4gIGNvbnN0IHN1bnNldFRpbWUgPSBjb252ZXJ0VGltZXNGcm9tVW5peChzdW5zZXQsIG9mZnNldCk7XG4gIGNvbnN0IHJlYWRpbmdUaW1lID0gY29udmVydFRpbWVzRnJvbVVuaXgoZHQsIG9mZnNldCk7XG4gIGNvbnN0IHsgdmlzaWJpbGl0eSB9ID0gd2VhdGhlcjtcbiAgY29uc3Qgd2luZENvbnZlcnRlZCA9IGNvbnZlcnRXaW5kKHdlYXRoZXIud2luZC5kZWcpO1xuICBjb25zdCB3aW5kU3BlZWRrbWggPSBNYXRoLnJvdW5kKHdlYXRoZXIud2luZC5zcGVlZCAqIDMuNik7XG4gIGNvbnN0IHdpbmQgPSBbd2luZFNwZWVka21oLCB3aW5kQ29udmVydGVkXTtcbiAgcmV0dXJuIHtcbiAgICBwbGFjZU5hbWUsXG4gICAgY291bnRyeSxcbiAgICBjbG91ZHMsXG4gICAgaHVtaWRpdHksXG4gICAgcHJlc3N1cmUsXG4gICAgYWlyVGVtcCxcbiAgICBmZWVsc0xpa2UsXG4gICAgdGVtcE1heCxcbiAgICB0ZW1wTWluLFxuICAgIHN1bnJpc2VUaW1lLFxuICAgIHN1bnNldFRpbWUsXG4gICAgdmlzaWJpbGl0eSxcbiAgICB3aW5kLFxuICAgIGlkLFxuICAgIHJlYWRpbmdUaW1lLFxuICAgIGZvcmVjYXN0LFxuICAgIG9mZnNldCxcbiAgfTtcbn07XG5cbmNvbnN0IHRlc3QgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRlc3RSZXNwb25zZSA9IGF3YWl0IG9idGFpbldlYXRoZXIoXCJBdGxhbnRhXCIpO1xuICBjb25zdCB0ZXN0UHJvY2Vzc2VkID0gd2VhdGhlckZhY3RvcnkodGVzdFJlc3BvbnNlKTtcbiAgcmV0dXJuIHRlc3RQcm9jZXNzZWQ7XG59O1xuXG5jb25zdCBwcm9jZXNzSW5wdXQgPSBhc3luYyAoaW5wdXQpID0+IHtcbiAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IG9idGFpbldlYXRoZXIoaW5wdXQpO1xuICBpZiAodHlwZW9mIHdlYXRoZXIgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gd2VhdGhlcjtcbiAgfVxuICBjb25zdCB3ZWF0aGVyUHJvY2Vzc2VkID0gd2VhdGhlckZhY3Rvcnkod2VhdGhlcik7XG4gIHJldHVybiB3ZWF0aGVyUHJvY2Vzc2VkO1xufTtcblxuZXhwb3J0IHsgdGVzdCwgcHJvY2Vzc0lucHV0IH07XG4iLCJjb25zdCBjb21wb25lbnRGYWN0b3J5ID0gKGVsZW1lbnQpID0+IHtcbiAgY29uc3Qge1xuICAgIG5hbWUsXG4gICAgbm9kZVR5cGUsXG4gICAgcGFyZW50LFxuICAgIHRleHQsXG4gICAgaW5wdXRUeXBlLFxuICAgIHZhbHVlLFxuICAgIGNsYXNzMSxcbiAgICBjbGFzczIsXG4gICAgY2xhc3MzLFxuICAgIHRhc2tJRCxcbiAgICBwbGFjZWhvbGRlcixcbiAgICBkYXRhQXR0cixcbiAgICBpZCxcbiAgICBzaG9ydGNvZGUsXG4gICAgcHJlZmVycmVkLFxuICB9ID0gZWxlbWVudDtcbiAgY29uc3QgY3JlYXRlRE9NTm9kZSA9ICgpID0+IHtcbiAgICBjb25zdCBwYXJlbnROb2RlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihwYXJlbnQpO1xuICAgIGNvbnN0IG5ld0RPTU5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5vZGVUeXBlKTtcbiAgICBpZiAodGV4dCkge1xuICAgICAgbmV3RE9NTm9kZS5pbm5lckhUTUwgPSB0ZXh0O1xuICAgIH1cbiAgICBpZiAoaW5wdXRUeXBlKSB7XG4gICAgICBuZXdET01Ob2RlLnR5cGUgPSBpbnB1dFR5cGU7XG4gICAgfVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbmV3RE9NTm9kZS52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICBpZiAoY2xhc3MxKSB7XG4gICAgICBuZXdET01Ob2RlLmNsYXNzTGlzdC5hZGQoY2xhc3MxKTtcbiAgICB9XG4gICAgaWYgKGNsYXNzMikge1xuICAgICAgbmV3RE9NTm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzMik7XG4gICAgfVxuICAgIGlmIChjbGFzczMpIHtcbiAgICAgIG5ld0RPTU5vZGUuY2xhc3NMaXN0LmFkZChjbGFzczMpO1xuICAgIH1cbiAgICBpZiAocGxhY2Vob2xkZXIpIHtcbiAgICAgIG5ld0RPTU5vZGUucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICB9XG4gICAgaWYgKHRleHQpIHtcbiAgICAgIG5ld0RPTU5vZGUudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgIH1cbiAgICBpZiAoZGF0YUF0dHIpIHtcbiAgICAgIG5ld0RPTU5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXJlZ2lvbi1pZCcsICdVU0EnKTtcbiAgICB9XG4gICAgaWYgKHNob3J0Y29kZSkge1xuICAgICAgbmV3RE9NTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtdmFsdWUnLCAnc2hvcnRjb2RlJyk7XG4gICAgfVxuICAgIGlmIChpZCkge1xuICAgICAgbmV3RE9NTm9kZS5pZCA9IGlkO1xuICAgIH1cbiAgICBpZiAocHJlZmVycmVkKSB7XG4gICAgICBuZXdET01Ob2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1wcmVmZXJyZWQnLCBwcmVmZXJyZWQpO1xuICAgICAgbmV3RE9NTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZmVycmVkLWRlbGltJywgJy0tLS0tJyk7XG4gICAgfVxuICAgIHBhcmVudE5vZGUuYXBwZW5kKG5ld0RPTU5vZGUpO1xuICAgIFxuICB9O1xuICBjcmVhdGVET01Ob2RlKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lLFxuICAgIG5vZGVUeXBlLFxuICAgIHBhcmVudCxcbiAgICB0ZXh0LFxuICAgIGlucHV0VHlwZSxcbiAgICB2YWx1ZSxcbiAgICBjbGFzczEsXG4gICAgY2xhc3MyLFxuICAgIHRhc2tJRCxcbiAgfTtcbn07XG5cbmV4cG9ydCB7IGNvbXBvbmVudEZhY3RvcnkgfTtcbiIsImNvbnN0IGNvbnZlcnRUZW1wID0gKHRlbXAsIHVuaXQpID0+IHtcbiAgbGV0IG5ld1RlbXA7XG4gIGlmICh1bml0ID09PSAwKSB7XG4gICAgbmV3VGVtcCA9IHRlbXAgKiAxLjggKyAzMjtcbiAgfSBlbHNlIHtcbiAgICBuZXdUZW1wID0gKHRlbXAgLSAzMikgKiAwLjU1NTY7XG4gIH1cbiAgcmV0dXJuIG5ld1RlbXA7XG59O1xuXG5jb25zdCByb3VuZFRlbXAgPSAodGVtcCkgPT4ge1xuICBsZXQgbmV3VGVtcCA9IHRlbXA7XG4gIG5ld1RlbXAgPSBNYXRoLnJvdW5kKHRlbXAgKiAxMCkgLyAxMDtcbiAgcmV0dXJuIG5ld1RlbXA7XG59O1xuXG5jb25zdCBjb252ZXJ0VGltZSA9IChvbGRUaW1lLCB1bml0KSA9PiB7XG4gIGlmICh1bml0ID09PSAwKSB7XG4gICAgLy8gaS5lLiBpZiB0aW1lIGlzIGN1cnJlbnRseSBpbiBBTS9QTSBub3RhdGlvblxuICAgIGNvbnN0IG9sZFRpbWVTcGxpdCA9IG9sZFRpbWUuc3BsaXQoXCIgXCIpO1xuICAgIGNvbnN0IHRpbWVTcGxpdCA9IG9sZFRpbWVTcGxpdFswXS5zcGxpdChcIjpcIik7XG4gICAgbGV0IG5ld1RpbWU7XG4gICAgaWYgKHRpbWVTcGxpdFswXSA8IDEwICYmIG9sZFRpbWVTcGxpdFsxXSA9PT0gXCJBTVwiKSB7XG4gICAgICBuZXdUaW1lID0gYDAke3RpbWVTcGxpdFswXX06JHt0aW1lU3BsaXRbMV19YDtcbiAgICB9XG4gICAgaWYgKHRpbWVTcGxpdFswXSA+PSAxMCAmJiBvbGRUaW1lU3BsaXRbMV0gPT09IFwiQU1cIikge1xuICAgICAgbmV3VGltZSA9IGAke3RpbWVTcGxpdFswXX06JHt0aW1lU3BsaXRbMV19YDtcbiAgICB9XG4gICAgaWYgKHRpbWVTcGxpdFswXSA9PT0gMTIgJiYgb2xkVGltZVNwbGl0WzFdID09PSBcIlBNXCIpIHtcbiAgICAgIG5ld1RpbWUgPSBgMCR7dGltZVNwbGl0WzBdfToke3RpbWVTcGxpdFsxXX1gO1xuICAgIH1cbiAgICBpZiAodGltZVNwbGl0WzBdIDw9IDExICYmIG9sZFRpbWVTcGxpdFsxXSA9PT0gXCJQTVwiKSB7XG4gICAgICBuZXdUaW1lID0gYCR7TnVtYmVyKHRpbWVTcGxpdFswXSkgKyAxMn06JHt0aW1lU3BsaXRbMV19YDtcbiAgICB9XG4gICAgcmV0dXJuIG5ld1RpbWU7XG4gIH1cbiAgLy8gdGltZSBpcyBpbiAyNGggbm90YXRpb25cbiAgY29uc3Qgb2xkVGltZVNwbGl0ID0gb2xkVGltZS5zcGxpdChcIjpcIik7XG4gIGNvbnN0IGNoYXIxID0gb2xkVGltZVNwbGl0WzBdLmNoYXJBdCgwKTtcbiAgaWYgKE51bWJlcihjaGFyMSkgPT09IDApIHtcbiAgICBvbGRUaW1lU3BsaXRbMF0gPSBvbGRUaW1lU3BsaXRbMF0uY2hhckF0KDEpO1xuICB9XG4gIGxldCBuZXdUaW1lO1xuICBpZiAob2xkVGltZVNwbGl0WzBdIDw9IDExKSB7XG4gICAgbmV3VGltZSA9IGAke29sZFRpbWVTcGxpdFswXX06JHtvbGRUaW1lU3BsaXRbMV19IEFNYDtcbiAgfVxuICBpZiAob2xkVGltZVNwbGl0WzBdID09PSAxMikge1xuICAgIG5ld1RpbWUgPSBgJHtvbGRUaW1lU3BsaXRbMF19OiR7b2xkVGltZVNwbGl0WzFdfSBQTWA7XG4gIH1cbiAgaWYgKG9sZFRpbWVTcGxpdFswXSA+IDEyKSB7XG4gICAgbmV3VGltZSA9IGAke29sZFRpbWVTcGxpdFswXSAtIDEyfToke29sZFRpbWVTcGxpdFsxXX0gUE1gO1xuICB9XG4gIHJldHVybiBuZXdUaW1lO1xufTtcblxuY29uc3QgY29udmVydFRpbWVzRnJvbVVuaXggPSAodGltZSwgb2Zmc2V0KSA9PiB7XG4gIC8vIFRha2VzIHVuaXggdGltZSBmcm9tIE9wZW4gV2VhdGhlciBhbmQgcmV0dXJucyBhIHN0cmluZyB3aXRoIHRoZSByZW1vdGVcbiAgLy8gdGltZSAoaS5lLiB0aGUgcGxhY2Ugd2UncmUgZ2V0dGluZyB3ZWF0aGVyIGZvcikgaW4gaHVtYW4tcmVhZGFibGUgZm9ybWF0XG4gIGNvbnN0IHRpbWVPZmZzZXQgPSB0aW1lICsgb2Zmc2V0O1xuICBjb25zdCB0aW1lQ29udmVydGVkID0gdGltZU9mZnNldCAqIDEwMDA7XG4gIGNvbnN0IGQgPSBuZXcgRGF0ZSh0aW1lQ29udmVydGVkKTtcbiAgY29uc3QgZFN0cmluZyA9IEpTT04uc3RyaW5naWZ5KGQpO1xuICBjb25zdCByZWdleCA9IC8oWzAxXVxcZHwyWzAtM10pOlswLTVdXFxkLztcbiAgY29uc3QgdGltZTI0aCA9IGRTdHJpbmcubWF0Y2gocmVnZXgpWzBdO1xuICByZXR1cm4gdGltZTI0aDtcbn07XG5cbmNvbnN0IGNvbnZlcnRUaW1lcyA9ICh1bml0KSA9PiB7XG4gIGNvbnN0IHRpbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50aW1lXCIpO1xuICBpZiAodW5pdCA9PT0gMCkge1xuICAgIC8vIGkuZS4gaWYgdGltZSBpcyBjdXJyZW50bHkgaW4gQU0vUE0gbm90YXRpb25cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRpbWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBlbGVtZW50ID0gdGltZXNbaV0udGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBuZXdUaW1lID0gY29udmVydFRpbWUoZWxlbWVudCwgMCk7XG4gICAgICB0aW1lc1tpXS50ZXh0Q29udGVudCA9IG5ld1RpbWU7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIC8vIGkuZS4gaWYgdGltZSBpcyBjdXJyZW50bHkgaW4gMjRoIG5vdGF0aW9uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRpbWVzW2ldLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgbmV3VGltZSA9IGNvbnZlcnRUaW1lKGVsZW1lbnQsIDEpO1xuICAgICAgdGltZXNbaV0udGV4dENvbnRlbnQgPSBuZXdUaW1lO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY29udmVydFRlbXBzID0gKHVuaXQpID0+IHtcbiAgY29uc3QgdGVtcGVyYXR1cmVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZW1wZXJhdHVyZVwiKTtcbiAgaWYgKHVuaXQgPT09IDApIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBlcmF0dXJlcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZWwgPSB0ZW1wZXJhdHVyZXNbaV0udGV4dENvbnRlbnQ7XG4gICAgICBjb25zdCBuZXdUZW1wID0gY29udmVydFRlbXAoZWwsIDApO1xuICAgICAgY29uc3QgbmV3VGVtcFJvdW5kZWQgPSByb3VuZFRlbXAobmV3VGVtcCk7XG4gICAgICB0ZW1wZXJhdHVyZXNbaV0udGV4dENvbnRlbnQgPSBuZXdUZW1wUm91bmRlZDtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wZXJhdHVyZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsID0gdGVtcGVyYXR1cmVzW2ldLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgbmV3VGVtcCA9IGNvbnZlcnRUZW1wKGVsLCAxKTtcbiAgICAgIGNvbnN0IG5ld1RlbXBSb3VuZGVkID0gcm91bmRUZW1wKG5ld1RlbXApO1xuICAgICAgdGVtcGVyYXR1cmVzW2ldLnRleHRDb250ZW50ID0gbmV3VGVtcFJvdW5kZWQ7XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBjb252ZXJ0V2luZCA9ICh1bml0KSA9PiB7XG4gIGNvbnN0IHdpbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtc3BlZWRcIik7XG4gIGNvbnN0IHdpbmRVbml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZC11bml0c1wiKTtcbiAgaWYgKHVuaXQgPT09IDApIHtcbiAgICB3aW5kLmRhdGFzZXQua21oID0gd2luZC50ZXh0Q29udGVudDtcbiAgICBjb25zdCBrbVRvTSA9IHdpbmQudGV4dENvbnRlbnQgKiAwLjYyMTM3MTtcbiAgICB3aW5kLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZChrbVRvTSk7XG4gICAgd2luZFVuaXRzLnRleHRDb250ZW50ID0gXCJtcGhcIjtcbiAgfSBlbHNlIHtcbiAgICB3aW5kLnRleHRDb250ZW50ID0gd2luZC5kYXRhc2V0LmttaDtcbiAgICB3aW5kVW5pdHMudGV4dENvbnRlbnQgPSBcImttL2hcIjtcbiAgfVxufTtcblxuY29uc3QgY29udmVydFZpcyA9ICh2YWx1ZSwgdW5pdCkgPT4ge1xuICBjb25zdCB2aXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpc1wiKTtcbiAgaWYgKHVuaXQgPT09IDApIHtcbiAgICB2aXMudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHZpcy50ZXh0Q29udGVudCAqIDEuMDkzNjEpO1xuICB9IGVsc2Uge1xuICAgIHZpcy50ZXh0Q29udGVudCA9IE1hdGgucm91bmQodmlzLnRleHRDb250ZW50ICogMC45MTQ0KTtcbiAgfVxufTtcblxuY29uc3QgY29udmVydEZyb21LZWx2aW4gPSAodGVtcCkgPT4ge1xuICBjb25zdCBuZXdUZW1wID0gdGVtcCAtIDI3My4xNTtcbiAgY29uc3QgdGVtcFJvdW5kZWQgPSBNYXRoLnJvdW5kKG5ld1RlbXAgKiAxMDApIC8gMTAwO1xuICByZXR1cm4gdGVtcFJvdW5kZWQ7XG59O1xuXG5leHBvcnQge1xuICByb3VuZFRlbXAsXG4gIGNvbnZlcnRUaW1lcyxcbiAgY29udmVydFRpbWUsXG4gIGNvbnZlcnRUZW1wcyxcbiAgY29udmVydFZpcyxcbiAgY29udmVydFdpbmQsXG4gIGNvbnZlcnRGcm9tS2VsdmluLFxuICBjb252ZXJ0VGltZXNGcm9tVW5peFxufTtcbiIsIi8qIVxuKiBjb3VudHJ5LXJlZ2lvbi1zZWxlY3RvclxuKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiogMC41LjBcbiogQGF1dGhvciBCZW4gS2VlblxuKiBAcmVwbyBodHRwczovL2dpdGh1Yi5jb20vYmVua2Vlbi9jb3VudHJ5LXJlZ2lvbi1zZWxlY3RvclxuKiBAbGljZW5jZSBNSVRcbiovXG5cbiFmdW5jdGlvbihhLG4pe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIGRlZmluZSYmZGVmaW5lLmFtZClkZWZpbmUoW10sbik7ZWxzZSBpZihcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyl0cnl7bW9kdWxlLmV4cG9ydHM9bihyZXF1aXJlKCkpfWNhdGNoKGEpe21vZHVsZS5leHBvcnRzPW4oKX1lbHNlIGEuY3JzPW4oKX0odGhpcyxmdW5jdGlvbigpe1widXNlIHN0cmljdFwiO3ZhciBtPSEwLGg9ITAsbD1bXSx0PXt9LHM9W1tcIkFmZ2hhbmlzdGFuXCIsXCJBRlwiLFwiQmFkYWtoc2hhbn5CRFN8QmFkZ2hpc35CREd8QmFnaGxhbn5CR0x8QmFsa2h+QkFMfEJhbXlhbn5CQU18RGF5a3VuZGl+REFZfEZhcmFofkZSQXxGYXJ5YWJ+RllCfEdoYXpuaX5HSEF8R2hvcn5HSE98SGVsbWFuZH5IRUx8SGVyYXR+SEVSfEpvd3pqYW5+Sk9XfEthYnVsfktBQnxLYW5kYWhhcn5LQU58S2FwaXNhfktBUHxLaG9zdH5LSE98S3VuYXJ+S05SfEt1bmR1en5LRFp8TGFnaG1hbn5MQUd8TG9nYXJ+TE9XfE1haWRhbiBXYXJkYWt+V0FSfE5hbmdhcmhhcn5OQU58TmltcnV6fk5JTXxOdXJpc3Rhbn5OVVJ8UGFrdGlhflBJQXxQYWt0aWthflBLQXxQYW5qc2hpcn5QQU58UGFyd2FuflBBUnxTYW1hbmdhbn5TQU18U2FyLWUgUG9sflNBUnxUYWtoYXJ+VEFLfFVyb3pnYW5+T1JVfFphYnVsflpBQlwiXSxbXCLDhWxhbmQgSXNsYW5kc1wiLFwiQVhcIixcIkJyw6RuZMO2fkJSfEVja2Vyw7Z+RUN8Rmluc3Ryw7ZtfkZOfEbDtmdsw7Z+Rkd8R2V0YX5HVHxIYW1tYXJsYW5kfkhNfEpvbWFsYX5KTXxLdW1saW5nZX5LTXxLw7ZrYXJ+S0t8TGVtbGFuZH5MRXxMdW1wYXJsYW5kfkxVfE1hcmllaGFtbn5NSHxTYWx0dmlrflNWfFNvdHR1bmdhflNUfFN1bmR+U0R8VsOlcmTDtn5WUlwiXSxbXCJBbGJhbmlhXCIsXCJBTFwiLFwiQmVyYXR+MDF8RGliw6tyfjA5fER1cnLDq3N+MDJ8RWxiYXNhbn4wM3xGaWVyfjA0fEdqaXJva2FzdMOrcn4wNXxLb3LDp8OrfjA2fEt1a8Orc34wN3xMZXpow6t+MDh8U2hrb2TDq3J+MTB8VGlyYW5hfjExfFZsb3LDq34xMlwiXSxbXCJBbGdlcmlhXCIsXCJEWlwiLFwiQWRyYXJ+MDF8QcOvbiBEZWZsYX40NHxBw69uIFTDqW1vdWNoZW50fjQ2fEFsZ2llcnN+MTZ8QW5uYWJhfjIzfEJhdG5hfjA1fELDqWNoYXJ+MDh8QsOpamHDr2F+MDZ8Qmlza3JhfjA3fEJsaWRhfjA5fEJvcmRqIEJvdSBBcnLDqXJpZGp+MzR8Qm91w69yYX4xMHxCb3VtZXJkw6hzfjM1fENobGVmfjAyfENvbnN0YW50aW5lfjI1fERqZWxmYX4xN3xFbCBCYXlhZGh+MzJ8RWwgT3VlZH4zOXxFbCBUYXJmfjM2fEdoYXJkYcOvYX40N3xHdWVsbWF+MjR8SWxsaXppfjMzfEppamVsfjE4fEtoZW5jaGVsYX40MHxMYWdob3VhdH4wM3xNYXNjYXJhfjI5fE3DqWTDqWF+MjZ8TWlsYX40M3xNb3N0YWdhbmVtfjI3fE1zaWxhfjI4fE5hw6JtYX40NXxPcmFufjMxfE91YXJnbGF+MzB8T3VtIGVsIEJvdWFnaGl+MDR8UmVsaXphbmV+NDh8U2HDr2RhfjIwfFPDqXRpZn4xOXxTaWRpIEJlbCBBYmLDqHN+MjJ8U2tpa2RhfjIxfFNvdWsgQWhyYXN+NDF8VGFtYW5naGFzc2V0fjExfFTDqWJlc3NhfjEyfFRpYXJldH4xNHxUaW5kb3VmfjM3fFRpcGF6YX40MnxUaXNzZW1zaWx0fjM4fFRpemkgT3V6b3V+MTV8VGxlbWNlbn4xM1wiXSxbXCJBbWVyaWNhbiBTYW1vYVwiLFwiQVNcIixcIlR1dHVpbGF+MDF8QXVudSd1fjAyfFRhJ8WrfjAzfE9mdeKAkU9sb3NlZ2F+MDR8Um9zZSBBdG9sbH4yMXxTd2FpbnMgSXNsYW5kfjIyXCJdLFtcIkFuZG9ycmFcIixcIkFEXCIsXCJBbmRvcnJhIGxhIFZlbGxhfjA3fENhbmlsbG9+MDJ8RW5jYW1wfjAzfEVzY2FsZGVzLUVuZ29yZGFueX4wOHxMYSBNYXNzYW5hfjA0fE9yZGlub34wNXxTYW50IEp1bGnDoCBkZSBMw7JyaWF+MDZcIl0sW1wiQW5nb2xhXCIsXCJBT1wiLFwiQmVuZ29+QkdPfEJlbmd1ZWxhfkJHVXxCacOpfkJJRXxDYWJpbmRhfkNBQnxDdWFuZG8gQ3ViYW5nb35DQ1V8Q3VhbnphIE5vcnRlfkNOT3xDdWFuemEgU3VsfkNVU3xDdW5lbmV+Q05OfEh1YW1ib35IVUF8SHXDrWxhfkhVSXxMdWFuZGF+TFVBfEx1bmRhIE5vcnRlfkxOT3xMdW5kYSBTdWx+TFNVfE1hbGFuamV+TUFMfE1veGljb35NT1h8TmFtaWJlfk5BTXxVw61nZX5VSUd8WmFpcmV+WkFJXCJdLFtcIkFuZ3VpbGxhXCIsXCJBSVwiLFwiQW5ndWlsbGF+MDF8QW5ndWlsbGl0YSBJc2xhbmR+MDJ8Qmxvd2luZyBSb2NrfjAzfENvdmUgQ2F5fjA0fENyb2N1cyBDYXl+MDV8RGVhZG1hbidzIENheX4wNnxEb2cgSXNsYW5kfjA3fEVhc3QgQ2F5fjA4fExpdHRsZSBJc2xhbmR+MDl8TGl0dGxlIFNjcnViIElzbGFuZH4xMHxNaWQgQ2F5fjExfE5vcnRoIENheX4xMnxQcmlja2x5IFBlYXIgQ2F5c34xM3xSYWJiaXQgSXNsYW5kfjE0fFNhbmR5IElzbGFuZC9TYW5kIElzbGFuZH4xNXxTY2lsbHkgQ2F5fjE2fFNjcnViIElzbGFuZH4xN3xTZWFsIElzbGFuZH4xOHxTb21icmVyby9IYXQgSXNsYW5kfjE5fFNvdXRoIENheX4yMHxTb3V0aCBXYWdlciBJc2xhbmR+MjF8V2VzdCBDYXl+MjJcIl0sW1wiQW50YXJjdGljYVwiLFwiQVFcIixcIkFudGFyY3RpY2F+QVFcIl0sW1wiQW50aWd1YSBhbmQgQmFyYnVkYVwiLFwiQUdcIixcIkFudGlndWEgSXNsYW5kfjAxfEJhcmJ1ZGEgSXNsYW5kfjAyfEJpcmQgSXNsYW5kfjA0fEJpc2hvcCBJc2xhbmR+MDV8Qmxha2UgSXNsYW5kfjA2fENydW1wIElzbGFuZH4wOXxEdWxjaW5hIElzbGFuZH4xMHxFeGNoYW5nZSBJc2xhbmR+MTF8Rml2ZSBJc2xhbmRzfjEyfEdyZWF0IEJpcmQgSXNsYW5kfjEzfEdyZWVuIElzbGFuZH4xNHxHdWlhbmEgSXNsYW5kfjE1fEhhd2VzIElzbGFuZH4xN3xIZWxscyBHYXRlIElzbGFuZH4xNnxIZW5yeSBJc2xhbmR+MTh8Sm9obnNvbiBJc2xhbmR+MTl8S2lkIElzbGFuZH4yMHxMb2JzdGVyIElzbGFuZH4yMnxNYWlkZW4gSXNsYW5kfjI0fE1vb3IgSXNsYW5kfjI1fE5hbm55IElzbGFuZH4yNnxQZWxpY2FuIElzbGFuZH4yN3xQcmlja2x5IFBlYXIgSXNsYW5kfjI4fFJhYmJpdCBJc2xhbmR+Mjl8UmVkIEhlYWQgSXNsYW5kfjMxfFJlZG9uZGEgSXNsYW5kfjAzfFNhbmR5IElzbGFuZH4zMnxTbWl0aCBJc2xhbmR+MzN8VGhlIFNpc3RlcnN+MzR8VmVybm9uIElzbGFuZH4zNXxXaWNrZWQgV2lsbCBJc2xhbmR+MzZ8WW9yayBJc2xhbmR+MzdcIl0sW1wiQXJnZW50aW5hXCIsXCJBUlwiLFwiQnVlbm9zIEFpcmVzfkJ8Q2FwaXRhbCBGZWRlcmFsfkN8Q2F0YW1hcmNhfkt8Q2hhY29+SHxDaHVidXR+VXxDw7NyZG9iYX5YfENvcnJpZW50ZXN+V3xFbnRyZSBSw61vc35FfEZvcm1vc2F+UHxKdWp1eX5ZfExhIFBhbXBhfkx8TGEgUmlvamF+RnxNZW5kb3phfk18TWlzaW9uZXN+TnxOZXVxdcOpbn5RfFLDrW8gTmVncm9+UnxTYWx0YX5BfFNhbiBKdWFufkp8U2FuIEx1aXN+RHxTYW50YSBDcnV6flp8U2FudGEgRmV+U3xTYW50aWFnbyBkZWwgRXN0ZXJvfkd8VGllcnJhIGRlbCBGdWVnb35WfFR1Y3Vtw6FuflRcIl0sW1wiQXJtZW5pYVwiLFwiQU1cIixcIkFyYWdhdHNvdG5+QUd8QXJhcmF0fkFSfEFybWF2aXJ+QVZ8R2VnaGFya3VuaWt+R1J8S290YXlrfktUfExvcml+TE98U2hpcmFrflNIfFN5dW5pa35TVXxUYXZ1c2h+VFZ8VmF5b3RzIER6b3J+VkR8WWVyZXZhbn5FUlwiXSxbXCJBcnViYVwiLFwiQVdcIixcIkFydWJhfkFXXCJdLFtcIkF1c3RyYWxpYVwiLFwiQVVcIixcIkF1c3RyYWxpYW4gQ2FwaXRhbCBUZXJyaXRvcnl+QUNUfE5ldyBTb3V0aCBXYWxlc35OU1d8Tm9ydGhlcm4gVGVycml0b3J5fk5UfFF1ZWVuc2xhbmR+UUxEfFNvdXRoIEF1c3RyYWxpYX5TQXxUYXNtYW5pYX5UQVN8VmljdG9yaWF+VklDfFdlc3Rlcm4gQXVzdHJhbGlhfldBXCJdLFtcIkF1c3RyaWFcIixcIkFUXCIsXCJCdXJnZW5sYW5kfjF8S8Okcm50ZW5+MnxOaWVkZXLDtnN0ZXJyZWljaH4zfE9iZXLDtnN0ZXJyZWljaH40fFNhbHpidXJnfjV8U3RlaWVybWFya342fFRpcm9sfjd8Vm9yYXJsYmVyZ344fFdpZW5+OVwiXSxbXCJBemVyYmFpamFuXCIsXCJBWlwiLFwiQWLFn2Vyb25+QUJTfEHEn2NhYsmZZGl+QUdDfEHEn2RhbX5BR018QcSfZGHFn35BR1N8QcSfc3RhZmF+QUdBfEHEn3N1fkFHVXxBc3RhcmF+QVNUfEJhYsmZa35CQUJ8QmFsYWvJmW5+QkFMfELJmXJkyZl+QkFSfEJleWzJmXFhbn5CRVl8QmlsyZlzdXZhcn5CSUx8Q8mZYnJhecSxbH5DQUJ8Q8mZbGlsYWJhZH5DQUx8Q3VsZmF+Q1VMfERhxZ9ryZlzyZlufkRBU3xGw7x6dWxpfkZVWnxHyZlkyZliyZl5fkdBRHxHb3JhbmJveX5HT1J8R8O2ecOnYXl+R09ZfEfDtnlnw7ZsfkdZR3xIYWPEsXFhYnVsfkhBQ3zEsG1pxZ9saX5JTUl8xLBzbWF5xLFsbMSxfklTTXxLyZlsYsmZY8mZcn5LQUx8S8edbmfHnXJsaX5LQU58S8O8cmTJmW1pcn5LVVJ8TGHDp8Sxbn5MQUN8TMmZbmvJmXJhbn5MQU58TGVyaWt+TEVSfE1hc2FsbMSxfk1BU3xOZWZ0w6dhbGF+TkVGfE/En3V6fk9HVXxPcmR1YmFkfk9SRHxRyZliyZlsyZl+UUFCfFFheH5RQVh8UWF6YXh+UUFafFFvYnVzdGFuflFPQnxRdWJhflFCQXxRdWJhZGxpflFCSXxRdXNhcn5RVVN8U2FhdGzEsX5TQVR8U2FiaXJhYmFkflNBQnzFnmFicmFuflNCTnxTyZlkyZlyyZlrflNBRHzFnmFoYnV6flNBSHzFnsmZa2l+U0FLfFNhbHlhbn5TQUx8xZ5hbWF4xLF+U01JfMWeyZlta2lyflNLUnxTYW11eH5TTVh8xZ7JmXJ1cn5TQVJ8U2l5yZl6yZluflNJWXzFnnXFn2F+U1VTfFTJmXJ0yZlyflRBUnxUb3Z1en5UT1Z8VWNhcn5VQ0F8WGHDp21hen5YQUN8WMSxesSxflhJWnxYb2NhbMSxflhDSXxYb2NhdsmZbmR+WFZEfFlhcmTEsW1sxLF+WUFSfFlldmxheH5ZRVZ8WsmZbmdpbGFuflpBTnxaYXFhdGFsYX5aQVF8WsmZcmRhYn5aQVJcIl0sW1wiQmFoYW1hc1wiLFwiQlNcIixcIkFja2xpbnMgSXNsYW5kfjAxfEJlcnJ5IElzbGFuZHN+MjJ8QmltaW5pfjAyfEJsYWNrIFBvaW50fjIzfENhdCBJc2xhbmR+MDN8Q2VudHJhbCBBYmFjb34yNHxDcm9va2VkIElzbGFuZCBhbmQgTG9uZyBDYXl+Mjh8RWFzdCBHcmFuZCBCYWhhbWF+Mjl8RXh1bWF+MDR8RnJlZXBvcnR+MDV8RnJlc2ggQ3JlZWt+MDZ8R292ZXJub3IncyBIYXJib3VyfjA3fEdyZWVuIFR1cnRsZSBDYXl+MDh8SGFyYm91ciBJc2xhbmR+MDl8SGlnaCBSb2NrfjEwfEluYWd1YX4xMXxLZW1wcyBCYXl+MTJ8TG9uZyBJc2xhbmR+MTN8TWFyc2ggSGFyYm91cn4xNHxNYXlhZ3VhbmF+MTV8TW9vcmXigJlzIElzbGFuZH40MHxOZXcgUHJvdmlkZW5jZX4xNnxOaWNob2xsc3Rvd24gYW5kIEJlcnJ5IElzbGFuZHN+MTd8Tm9ydGggQWJhY29+NDJ8Tm9ydGggQW5kcm9zfjQxfE5vcnRoIEVsZXV0aGVyYX4zM3xSYWdnZWQgSXNsYW5kfjE4fFJvY2sgU291bmR+MTl8U2FuIFNhbHZhZG9yIGFuZCBSdW0gQ2F5fjIwfFNhbmR5IFBvaW50fjIxfFNvdXRoIEFiYWNvfjM1fFNvdXRoIEFuZHJvc34zNnxTb3V0aCBFbGV1dGhlcmF+Mzd8V2VzdCBHcmFuZCBCYWhhbWF+MzlcIl0sW1wiQmFocmFpblwiLFwiQkhcIixcIkFsIEphbsWrYsSreWFofjE0fEFsIE1hbsSBbWFofjEzfEFsIE114bipYXJyYXF+MTV8QWwgV3VzxaPDoX4xNnxBc2ggU2hhbcSBbMSreWFofjE3XCJdLFtcIkJhbmdsYWRlc2hcIixcIkJEXCIsXCJCYXJpc2FsfkF8Q2hpdHRhZ29uZ35CfERoYWthfkN8S2h1bG5hfkR8TXltZW5zaW5naH5NfFJhanNoYWhpfkV8UmFuZ3B1cn5GfFN5bGhldH5HXCJdLFtcIkJhcmJhZG9zXCIsXCJCQlwiLFwiQ2hyaXN0IENodXJjaH4wMXxTYWludCBBbmRyZXd+MDJ8U2FpbnQgR2VvcmdlfjAzfFNhaW50IEphbWVzfjA0fFNhaW50IEpvaG5+MDV8U2FpbnQgSm9zZXBofjA2fFNhaW50IEx1Y3l+MDd8U2FpbnQgTWljaGFlbH4wOHxTYWludCBQZXRlcn4wOXxTYWludCBQaGlsaXB+MTB8U2FpbnQgVGhvbWFzfjExXCJdLFtcIkJlbGFydXNcIixcIkJZXCIsXCJCcmVzdCB2b2JsYXN0fkJSfEdvcm9kIE1pbnNrfkhPfEhvbWllbCB2b2JsYXN0fkhPfEhyb2RuYSB2b2JsYXN0fkhSfE1haGlseW93IHZvYmxhc3R+TUF8TWluc2sgdm9ibGFzdH5NSXxWaXRzZWJzayB2b2JsYXN0flZJXCJdLFtcIkJlbGdpdW1cIixcIkJFXCIsXCJCcnV4ZWxsZXMtQ2FwaXRhbGV+QlJVfFLDqWdpb24gRmxhbWFuZGV+VkxHfFLDqWdpb24gV2FsbG9uacOrfldBTFwiXSxbXCJCZWxpemVcIixcIkJaXCIsXCJCZWxpemUgRGlzdHJpY3R+Qlp8Q2F5byBEaXN0cmljdH5DWXxDb3JvemFsIERpc3RyaWN0fkNaTHxPcmFuZ2UgV2FsayBEaXN0cmljdH5PV3xTdGFubiBDcmVlayBEaXN0cmljdH5TQ3xUb2xlZG8gRGlzdHJpY3R+VE9MXCJdLFtcIkJlbmluXCIsXCJCSlwiLFwiQWxpYm9yaX5BTHxBdGFrb3JhfkFLfEF0bGFudGlxdWV+QVF8Qm9yZ291fkJPfENvbGxpbmVzIERlcGFydG1lbnR+Q098RG9uZ2F+RE98S291ZmZvfktPfExpdHRvcmFsIERlcGFydG1lbnR+TEl8TW9ubyBEZXBhcnRtZW50fk1PfE91w6ltw6l+T1V8UGxhdGVhdX5QTHxab3V+Wk9cIl0sW1wiQmVybXVkYVwiLFwiQk1cIixcIkNpdHkgb2YgSGFtaWx0b25+MDN8RGV2b25zaGlyZSBQYXJpc2h+MDF8SGFtaWx0b24gUGFyaXNofjAyfFBhZ2V0IFBhcmlzaH4wNHxQZW1icm9rZSBQYXJpc2h+MDV8U2FuZHlzIFBhcmlzaH4wOHxTbWl0aCdzIFBhcmlzaH4wOXxTb3V0aGFtcHRvbiBQYXJpc2h+MTB8U3QuIEdlb3JnZSdzIFBhcmlzaH4wN3xUb3duIG9mIFN0LiBHZW9yZ2V+MDZ8V2Fyd2ljayBQYXJpc2h+MTFcIl0sW1wiQmh1dGFuXCIsXCJCVFwiLFwiQnVtdGhhbmd+MzN8Q2hodWtoYX4xMnxEYWdhbmF+MjJ8R2FzYX5HQXxIYWF+MTN8TGh1bnRzZX40NHxNb25nYXJ+NDJ8UGFyb34xMXxQZW1hZ2F0c2hlbH40M3xQdW5ha2hhfjIzfFNhbWRydXAgSm9uZ2toYXJ+NDV8U2FtdHNlfjE0fFNhcnBhbmd+MzF8VGhpbXBodX4xNXxUcmFzaGlnYW5nfjQxfFRyYXNoaXlhbmd0c2V+VFl8VHJvbmdzYX4zMnxUc2lyYW5nfjIxfFdhbmdkdWUgUGhvZHJhbmd+MjR8WmhlbWdhbmd+MzRcIl0sW1wiQm9saXZpYVwiLFwiQk9cIixcIkJlbml+QnxDaHVxdWlzYWNhfkh8Q29jaGFiYW1iYX5DfExhIFBhen5MfE9ydXJvfk98UGFuZG9+TnxQb3Rvc8OtflB8U2FudGEgQ3J1en5TfFRhcmlqYX5UXCJdLFtcIkJvbmFpcmUsIFNpbnQgRXVzdGF0aXVzIGFuZCBTYWJhXCIsXCJCUVwiLFwiQm9uYWlyZX5CT3xTYWJhIElzYW5kflNBfFNpbnQgRXVzdGF0aXVzflNFXCJdLFtcIkJvc25pYSBhbmQgSGVyemVnb3ZpbmFcIixcIkJBXCIsXCJCcsSNa28gRGlzdHJpa3R+QlJDfEZlZGVyYWNpamEgQm9zbmUgaSBIZXJjZWdvdmluZX5CSUh8UmVwdWJsaWthIFNycHNrYX5TUlBcIl0sW1wiQm90c3dhbmFcIixcIkJXXCIsXCJDZW50cmFsfkNFfEdoYW56aX5HSHxLZ2FsYWdhZGl+S0d8S2dhdGxlbmd+S0x8S3dlbmVuZ35LV3xOb3J0aCBXZXN0fk5XfE5vcnRoLUVhc3R+TkV8U291dGggRWFzdH5TRXxTb3V0aGVybn5TT1wiXSxbXCJCb3V2ZXQgSXNsYW5kXCIsXCJCVlwiLFwiQm91dmV0IElzbGFuZH5CVlwiXSxbXCJCcmF6aWxcIixcIkJSXCIsXCJBY3JlfkFDfEFsYWdvYXN+QUx8QW1hcMOhfkFQfEFtYXpvbmFzfkFNfEJhaGlhfkJBfENlYXLDoX5DRXxEaXN0cml0byBGZWRlcmFsfkRGfEVzcMOtcml0byBTYW50b35FU3xHb2nDoXN+R098TWFyYW5ow6Nvfk1BfE1hdG8gR3Jvc3Nvfk1UfE1hdG8gR3Jvc3NvIGRvIFN1bH5NU3xNaW5hcyBHZXJhaXN+TUd8UGFyw6F+UEF8UGFyYcOtYmF+UEJ8UGFyYW7DoX5QUnxQZXJuYW1idWNvflBFfFBpYXXDrX5QSXxSaW8gZGUgSmFuZWlyb35SSnxSaW8gR3JhbmRlIGRvIE5vcnRlflJOfFJpbyBHcmFuZGUgZG8gU3VsflJTfFJvbmTDtG5pYX5ST3xSb3JhaW1hflJSfFNhbnRhIENhdGFyaW5hflNDfFPDo28gUGF1bG9+U1B8U2VyZ2lwZX5TRXxUb2NhbnRpbnN+VE9cIl0sW1wiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5XCIsXCJJT1wiLFwiQnJpdGlzaCBJbmRpYW4gT2NlYW4gVGVycml0b3J5fklPXCJdLFtcIkJydW5laSBEYXJ1c3NhbGFtXCIsXCJCTlwiLFwiQmVsYWl0fkJFfEJydW5laSBNdWFyYX5CTXxUZW1idXJvbmd+VEV8VHV0b25nflRVXCJdLFtcIkJ1bGdhcmlhXCIsXCJCR1wiLFwiQmxhZ29ldmdyYWR+MDF8QnVyZ2FzfjAyfERvYnJpY2h+MDh8R2Ficm92b34wN3xKYW1ib2x+Mjh8S2hhc2tvdm9+MjZ8S2p1c3RlbmRpbH4xMHxLdXJkemhhbGl+MDl8TG92ZWNofjExfE1vbnRhbmF+MTJ8UGF6YXJkemhpa34xM3xQZXJuaWt+MTR8UGxldmVufjE1fFBsb3ZkaXZ+MTZ8UmF6Z3JhZH4xN3xSdXNlfjE4fFNodW1lbn4yN3xTaWxpc3RyYX4xOXxTbGl2ZW5+MjB8U21vbGphbn4yMXxTb2ZpamF+MjN8U29maWphLUdyYWR+MjJ8U3RhcmEgWmFnb3JhfjI0fFR1cmdvdmlzaGhlfjI1fFZhcm5hfjAzfFZlbGlrbyBUdXJub3ZvfjA0fFZpZGlufjA1fFZyYWNhfjA2XCJdLFtcIkJ1cmtpbmEgRmFzb1wiLFwiQkZcIixcIkJhbMOpfkJBTHxCYW0vTGFrZSBCYW1+QkFNfEJhbndhIFByb3ZpbmNlfkJBTnxCYXrDqGdhfkJBWnxCb3Vnb3VyaWJhfkJHUnxCb3VsZ291IFByb3ZpbmNlfkJMR3xCb3Vsa2llbWTDqX5CTEt8Q29tb8OpL0tvbW9lfkNPTXxHYW56b3VyZ291IFByb3ZpbmNlfkdBTnxHbmFnbmF+R05BfEdvdXJtYSBQcm92aW5jZX5HT1V8SG91ZXR+SE9VfElvYmF+SU9CfEthZGlvZ29+S0FEfEvDqW7DqWRvdWdvdX5LRU58S29tb25kamFyaX5LTUR8S29tcGllbmdhfktNUHxLb3NzaSBQcm92aW5jZX5LT1N8S291bHDDqWxvZ29+S09QfEtvdXJpdGVuZ2F+S09UfEtvdXJ3w6lvZ29+S09XfEzDqXJhYmF+TEVSfExvcm91bX5MT1J8TW91aG91bn5NT1V8TmFtZW50ZW5nYX5OQU18TmFvdXJpL05haG91cml+TkFPfE5heWFsYX5OQVl8Tm91bWJpZWx+Tk9VfE91YnJpdGVuZ2F+T1VCfE91ZGFsYW5+T1VEfFBhc3NvcsOpflBBU3xQb25pflBPTnxTYW5ndWnDqX5TTkd8U2FubWF0ZW5nYX5TTVR8U8Opbm9+U0VOfFNpc3NpbGl+U0lTfFNvdW1+U09NfFNvdXJvdX5TT1J8VGFwb2F+VEFQfFR1aS9UdXl+VFVJfFlhZ2hhfllBR3xZYXRlbmdhfllBVHxaaXJvflpJUnxab25kb21hflpPTnxab3VuZHfDqW9nb35aT1VcIl0sW1wiQnVydW5kaVwiLFwiQklcIixcIkJ1YmFuemF+QkJ8QnVqdW1idXJhIE1haXJpZX5CTXxCdWp1bWJ1cmEgUnVyYWx+Qkx8QnVydXJpfkJSfENhbmt1em9+Q0F8Q2liaXRva2V+Q0l8R2l0ZWdhfkdJfEthcnV6aX5LUnxLYXlhbnphfktZfEtpcnVuZG9+S0l8TWFrYW1iYX5NQXxNdXJhbXZ5YX5NVXxNdXlpbmdhfk1ZfE13YXJvfk1XfE5nb3ppfk5HfFJ1dGFuYX5SVHxSdXlpZ2l+UllcIl0sW1wiQ2FtYm9kaWFcIixcIktIXCIsXCJCYWF0IERhbWJhbmd+MnxCYW50ZWF5IE1lYW4gQ2hleX4xfEthbXBvbmcgQ2hhYW1+M3xLYW1wb25nIENoaG5hbmd+NHxLYW1wb25nIFNwdWV1fjV8S2FtcG9uZyBUaHVtfjZ8S2FtcG90fjd8S2FuZGFhbH44fEthb2ggS29uZ345fEtyYWNoZWh+MTB8S3JvbmcgS2FlYn4yM3xLcm9uZyBQYWlsaW5+MjR8S3JvbmcgUHJlYWggU2loYW5vdWt+MTh8TW9uZG9sIEtpcml+MTF8T3RkYXIgTWVhbiBDaGV5fjIyfFBobm9tIFBlbmh+MTJ8UG91c2FhdH4xNXxQcmVhaCBWaWhlYXJ+MTN8UHJleSBWZWFlbmd+MTR8Um90YW5haCBLaXJpfjE2fFNpZW0gUmVhYn4xN3xTdHVlbmcgVHJlbmd+MTl8U3ZhYXkgUmllbmd+MjB8VGFha2Fldn4yMXxUYm9uZyBLaG11bX4yNVwiXSxbXCJDYW1lcm9vblwiLFwiQ01cIixcIkFkYW1hb3VhfkFEfENlbnRyZX5DRXxFc3R+RVN8RXh0csOqbWUtTm9yZH5FTnxMaXR0b3JhbH5MVHxOb3Jkfk5PfE5vcmQtT3Vlc3R+Tld8T3Vlc3R+T1V8U3VkflNVfFN1ZC1PdWVzdH5TV1wiXSxbXCJDYW5hZGFcIixcIkNBXCIsXCJBbGJlcnRhfkFCfEJyaXRpc2ggQ29sdW1iaWF+QkN8TWFuaXRvYmF+TUJ8TmV3IEJydW5zd2lja35OQnxOZXdmb3VuZGxhbmQgYW5kIExhYnJhZG9yfk5MfE5vcnRod2VzdCBUZXJyaXRvcmllc35OVHxOb3ZhIFNjb3RpYX5OU3xOdW5hdnV0fk5VfE9udGFyaW9+T058UHJpbmNlIEVkd2FyZCBJc2xhbmR+UEV8UXVlYmVjflFDfFNhc2thdGNoZXdhbn5TS3xZdWtvbn5ZVFwiXSxbXCJDYXBlIFZlcmRlXCIsXCJDVlwiLFwiQm9hIFZpc3RhfkJWfEJyYXZhfkJSfENhbGhldGEgZGUgU8OjbyBNaWd1ZWx+Q1N8TWFpb35NQXxNb3N0ZWlyb3N+TU98UGHDumx+UEF8UG9ydG8gTm92b35QTnxQcmFpYX5QUnxSaWJlaXJhIEJyYXZhflJCfFJpYmVpcmEgR3JhbmRlflJHfFNhbH5TTHxTYW50YSBDYXRhcmluYX5DQXxTYW50YSBDcnV6fkNSfFPDo28gRG9taW5nb3N+U0R8U8OjbyBGaWxpcGV+U0Z8U8OjbyBOaWNvbGF1flNOfFPDo28gVmljZW50ZX5TVnxUYXJyYWZhbH5UQXxUYXJyYWZhbCBkZSBTw6NvIE5pY29sYXV+VFNcIl0sW1wiQ2F5bWFuIElzbGFuZHNcIixcIktZXCIsXCJDcmVla3xFYXN0ZXJufE1pZGxhbmR8U291dGggVG93bnxTcG90IEJheXxTdGFrZSBCYXl8V2VzdCBFbmR8V2VzdGVyblwiXSxbXCJDZW50cmFsIEFmcmljYW4gUmVwdWJsaWNcIixcIkNGXCIsXCJCYW1pbmd1aS1CYW5nb3Jhbn5CQnxCYW5ndWl+QkdGfEJhc3NlLUtvdHRvfkJLfEhhdXRlLUtvdHRvfkhLfEhhdXQtTWJvbW91fkhNfEvDqW1vfktHfExvYmF5ZX5MQnxNYW1iw6lyw6ktS2Fkw6nDr35IU3xNYm9tb3V+TUJ8TmFuYS1HcmViaXppfjEwfE5hbmEtTWFtYsOpcsOpfk5NfE9tYmVsbGEtTSdQb2tvfk1QfE91YWthflVLfE91aGFtfkFDfE91aGFtIFDDqW5kw6l+T1B8U2FuZ2hhLU1iYcOpcsOpflNFfFZha2FnYX5WS1wiXSxbXCJDaGFkXCIsXCJURFwiLFwiQmFociBlbCBHaGF6YWx+Qkd8QmF0aGF+QkF8Qm9ya291fkJPfENoYXJpLUJhZ3Vpcm1pfkNCfEVubmVkaS1Fc3R+RUV8RW5uZWRpLU91ZXN0fkVPfEd1w6lyYX5HUnxIYWRqZXIgTGFtaXN+SEx8S2FuZW1+S0F8TGFjfkxDfExvZ29uZSBPY2NpZGVudGFsfkxPfExvZ29uZSBPcmllbnRhbH5MUnxNb25kb3Vsfk1BfE1heW8tS8OpYmJpLUVzdH5NRXxNb3llbi1DaGFyaX5NQ3xPdWFkZGFpfk9EfFNhbGFtYXR+U0F8U2lsYX5TSXxUYW5kamlsw6l+VEF8VGliZXN0aX5USXxWaWxsZSBkZSBOZGphbWVuYX5ORHxXYWRpIEZpcmF+V0ZcIl0sW1wiQ2hpbGVcIixcIkNMXCIsXCJBaXPDqW4gZGVsIEdlbmVyYWwgQ2FybG9zIEliw6HDsWV6IGRlbCBDYW1wb35BSXxBbnRvZmFnYXN0YX5BTnxBcmF1Y2Fuw61hfkFSfEFyaWNhIHkgUGFyaW5hY290YX5BUHxBdGFjYW1hfkFUfELDrW8tQsOtb35CSXxDb3F1aW1ib35DT3xMaWJlcnRhZG9yIEdlbmVyYWwgQmVybmFyZG8gTydIaWdnaW5zfkxJfExvcyBMYWdvc35MTHxMb3MgUsOtb3N+TFJ8TWFnYWxsYW5lcyB5IEFudGFydGljYSBDaGlsZW5hfk1BfE1hcmdhLU1hcmdhfnxNYXVsZX5NTHxSZWdpw7NuIE1ldHJvcG9saXRhbmEgZGUgU2FudGlhZ29+Uk18VGFyYXBhY8OhflRBfFZhbHBhcmHDrXNvflZTXCJdLFtcIkNoaW5hXCIsXCJDTlwiLFwiQW5odWl+MzR8QmVpamluZ34xMXxDaG9uZ3Fpbmd+NTB8RnVqaWFufjM1fEdhbnN1fjYyfEd1YW5nZG9uZ340NHxHdWFuZ3hpfjQ1fEd1aXpob3V+NTJ8SGFpbmFufjQ2fEhlYmVpfjEzfEhlaWxvbmdqaWFuZ34yM3xIZW5hbn40MXxIb25nIEtvbmd+OTF8SHViZWl+NDJ8SHVuYW5+NDN8SW5uZXIgTW9uZ29saWF+MTV8SmlhbmdzdX4zMnxKaWFuZ3hpfjM2fEppbGlufjIyfExpYW9uaW5nfjIxfE1hY2F1fjkyfE5pbmd4aWF+NjR8UWluZ2hhaX42M3xTaGFhbnhpfjYxfFNoYW5kb25nfjM3fFNoYW5naGFpfjMxfFNoYW54aX4xNHxTaWNodWFufjUxfFRpYW5qaW5+MTJ8VGliZXR+NTR8WGluamlhbmd+NjV8WXVubmFufjUzfFpoZWppYW5nfjMzXCJdLFtcIkNocmlzdG1hcyBJc2xhbmRcIixcIkNYXCIsXCJDaHJpc3RtYXMgSXNsYW5kfkNYXCJdLFtcIkNvY29zIChLZWVsaW5nKSBJc2xhbmRzXCIsXCJDQ1wiLFwiRGlyZWN0aW9uIElzbGFuZH5ESXxIb21lIElzbGFuZH5ITXxIb3JzYnVyZ2ggSXNsYW5kfkhSfE5vcnRoIEtlZWxpbmcgSXNsYW5kfk5LfFNvdXRoIElzbGFuZH5TSXxXZXN0IElzbGFuZH5XSVwiXSxbXCJDb2xvbWJpYVwiLFwiQ09cIixcIkFtYXpvbmFzfkFNQXxBbnRpb3F1aWF+QU5UfEFyYXVjYX5BUkF8QXJjaGlwacOpbGFnbyBkZSBTYW4gQW5kcsOpc35TQVB8QXRsw6FudGljb35BVEx8Qm9nb3TDoSBELkMufkRDfEJvbMOtdmFyfkJPTHxCb3lhY8OhfkJPWXxDYWxkYXN+Q0FMfENhcXVldMOhfkNBUXxDYXNhbmFyZX5DQVN8Q2F1Y2F+Q0FVfENlc2FyfkNFU3xDaG9jw7N+Q0hPfEPDs3Jkb2JhfkNPUnxDdW5kaW5hbWFyY2F+Q1VOfEd1YWluw61hfkdVQXxHdWF2aWFyZX5HVVZ8SHVpbGF+SFVJfExhIEd1YWppcmF+TEFHfE1hZ2RhbGVuYX5NQUd8TWV0YX5NRVR8TmFyacOxb35OQVJ8Tm9ydGUgZGUgU2FudGFuZGVyfk5TQXxQdXR1bWF5b35QVVR8UXVpbmTDrW9+UVVJfFJpc2FyYWxkYX5SSVN8U2FudGFuZGVyflNBTnxTdWNyZX5TVUN8VG9saW1hflRPTHxWYWxsZSBkZWwgQ2F1Y2F+VkFDfFZhdXDDqXN+VkFVfFZpY2hhZGF+VklEXCJdLFtcIkNvbW9yb3NcIixcIktNXCIsXCJBbmRqYXrDrmRqYX5HfEFuZGpvdcOibn5BfE1vw7tow65sw65+TVwiXSxbXCJDb25nbywgUmVwdWJsaWMgb2YgdGhlIChCcmF6emF2aWxsZSlcIixcIkNHXCIsXCJCb3VlbnphfjExfEJyYXp6YXZpbGxlfkJaVnxDdXZldHRlfjh8Q3V2ZXR0ZS1PdWVzdH4xNXxLb3VpbG91fjV8TMOpa291bW91fjJ8TGlrb3VhbGF+N3xOaWFyaX45fFBsYXRlYXV4fjE0fFBvaW50ZS1Ob2lyZX4xNnxQb29sfjEyfFNhbmdoYX4xM1wiXSxbXCJDb25nbywgdGhlIERlbW9jcmF0aWMgUmVwdWJsaWMgb2YgdGhlIChLaW5zaGFzYSlcIixcIkNEXCIsXCJCYW5kdW5kdX5CTnxCYXMtQ29uZ29+QkN8w4lxdWF0ZXVyfkVRfEthc2HDry1PY2NpZGVudGFsfktFfEthc2HDry1PcmllbnRhbH5LV3xLYXRhbmdhfktBfEtpbnNoYXNhfktOfE1hbmllbWF+TUF8Tm9yZC1LaXZ1fk5LfE9yaWVudGFsZX5PUnxTdWQtS2l2dX5TS1wiXSxbXCJDb29rIElzbGFuZHNcIixcIkNLXCIsXCJBaXR1dGFraXxBdGl1fEF2YXJ1YXxNYW5nYWlhfE1hbmloaWtpfE1hJ3VrZXxNaXRpYXJvfE5hc3NhdXxQYWxtZXJzdG9ufFBlbnJoeW58UHVrYXB1a2F8UmFrYWhhbmdhXCJdLFtcIkNvc3RhIFJpY2FcIixcIkNSXCIsXCJBbGFqdWVsYX4yfENhcnRhZ29+M3xHdWFuYWNhc3RlfjV8SGVyZWRpYX40fExpbcOzbn43fFB1bnRhcmVuYXN+NnxTYW4gSm9zw6l+MVwiXSxbXCJDw7R0ZSBkJ0l2b2lyZSwgUmVwdWJsaWMgb2ZcIixcIkNJXCIsXCJBZ27DqWJ5fjE2fEJhZmluZ34xN3xCYXMtU2Fzc2FuZHJhfjA5fERlbmd1w6lsw6l+MTB8RGl4LUh1aXQgTW9udGFnbmVzfjA2fEZyb21hZ2VyfjE4fEhhdXQtU2Fzc2FuZHJhfjAyfExhY3N+MDd8TGFndW5lc34wMXxNYXJhaG91w6l+MTJ8TW95ZW4tQ2F2YWxseX4xOXxNb3llbi1Db21vw6l+MDV8Tid6aS1Db21vw6l+MTF8U2F2YW5lc34wM3xTdWQtQmFuZGFtYX4xNXxTdWQtQ29tb8OpfjEzfFZhbGzDqWUgZHUgQmFuZGFtYX4wNHxXb3JvZG91Z291fjE0fFphbnphbn4wOFwiXSxbXCJDcm9hdGlhXCIsXCJIUlwiLFwiQmplbG92YXJza28tQmlsb2dvcnNrYSDFvXVwYW5pamF+MDd8QnJvZHNrby1Qb3NhdnNrYSDFvXVwYW5pamF+MTJ8RHVicm92YcSNa28tTmVyZXR2YW5za2Egxb11cGFuaWphfjE5fEdyYWQgWmFncmVifjIxfElzdGFyc2thIMW9dXBhbmlqYX4xOHxLYXJsb3ZhxI1rYSDFvXVwYW5pamF+MDR8S29wcml2bmnEjWtvLUtyaXpldmHEjWthIMW9dXBhbmlqYX4wNnxLcmFwaW5za28tWmFnb3Jza2Egxb11cGFuaWphfjAyfExpxI1rby1TZW5qc2thIMW9dXBhbmlqYX4wOXxNZcSRaW11cnNrYSDFvXVwYW5pamF+MjB8T3NqZcSNa28tQmFyYW5qc2thIMW9dXBhbmlqYX4xNHxQb8W+ZcWha28tU2xhdm9uc2thIMW9dXBhbmlqYX4xMXxQcmltb3Jza28tR29yYW5za2Egxb11cGFuaWphfjA4fFNpc2HEjWtvLU1vc2xhdmHEjWthIMW9dXBhbmlqYX4wM3xTcGxpdHNrby1EYWxtYXRpbnNrYSDFvXVwYW5pamF+MTd8U2liZW5za28tS25pbnNrYSDFvXVwYW5pamF+MTV8VmFyYcW+ZGluc2thIMW9dXBhbmlqYX4wNXxWaXJvdml0acSNa28tUG9kcmF2c2thIMW9dXBhbmlqYX4xMHxWdWtvdmFyc2tvLVNyaWplbXNrYSDFvXVwYW5pamF+MTZ8WmFkYXJza2Egxb11cGFuaWphfjEzfFphZ3JlYmFja2EgWnVwYW5pamF+MDFcIl0sW1wiQ3ViYVwiLFwiQ1VcIixcIkFydGVtaXNhfjE1fENhbWFnw7xleX4wOXxDaWVnbyBkZSDDgXZpbGF+MDh8Q2llbmZ1ZWdvc34wNnxHcmFubWF+MTJ8R3VhbnTDoW5hbW9+MTR8SG9sZ3XDrW5+MTF8SXNsYSBkZSBsYSBKdXZlbnR1ZH45OXxMYSBIYWJhbmF+MDN8TGFzIFR1bmFzfjEwfE1hdGFuemFzfjA0fE1heWFiZXF1ZX4xNnxQaW5hciBkZWwgUsOtb34wMXxTYW5jdGkgU3DDrXJpdHVzfjA3fFNhbnRpYWdvIGRlIEN1YmF+MTN8VmlsbGEgQ2xhcmF+MDVcIl0sW1wiQ3VyYcOnYW9cIixcIkNXXCIsXCJDdXJhw6dhb35DV1wiXSxbXCJDeXBydXNcIixcIkNZXCIsXCJBbW1vY2hvc3Rvc34wNHxLZXJ5bmVpYX4wNXxMYXJuYWthfjAzfExlZmtvc2lhfjAxfExlbWVzb3N+MDJ8UGFmb3N+MDVcIl0sW1wiQ3plY2ggUmVwdWJsaWNcIixcIkNaXCIsXCJIbGF2bsOtIG3Em3N0byBQcmFoYX5QUnxKaWhvxI1lc2vDvSBrcmFqfkpDfEppaG9tb3JhdnNrw70ga3Jhan5KTXxLYXJsb3ZhcnNrw70ga3Jhan5LQXxLcsOhbG92w6locmFkZWNrw70ga3Jhan5LUnxMaWJlcmVja8O9IGtyYWp+TEl8TW9yYXZza29zbGV6c2vDvSBrcmFqfk1PfE9sb21vdWNrw70ga3Jhan5PTHxQYXJkdWJpY2vDvSBrcmFqflBBfFBsemXFiHNrw70ga3Jhan5QTHxTdMWZZWRvxI1lc2vDvSBrcmFqflNUfMOac3RlY2vDvSBrcmFqflVTfFZ5c2/EjWluYX5WWXxabMOtbnNrw70ga3Jhan5aTFwiXSxbXCJEZW5tYXJrXCIsXCJES1wiLFwiSG92ZWRzdGFkZW5+ODR8S3VqYWxsZXF+R0wtS1V8TWlkdGp5bGxhbmR+ODJ8Tm9yZGVyw7hlcm5lfkZPLTAxfE5vcmRqeWxsYW5kfjgxfMOYc3RlcsO4fkZPLTA2fFFhYXN1aXRzdXB+R0wtUUF8UWVxcWF0YX5HTC1RRXxTYW5kw7h+Rk8tMDJ8U2VybWVyc29vcX5HTC1TTXxTasOmbGxhbmR+ODV8U3Ryw7htw7h+Rk8tMDN8U3VkZXLDuH5GTy0wNHxTeWRkYW5tYXJrfjgzfFbDpWfDuH5GTy0wNVwiXSxbXCJEamlib3V0aVwiLFwiREpcIixcIkFsaSBTYWJpZWh+QVN8QXJ0YX5BUnxEaWtoaWx+REl8T2JvY2t+T0J8VGFkam91cmFoflRBXCJdLFtcIkRvbWluaWNhXCIsXCJETVwiLFwiU2FpbnQgQW5kcmV3IFBhcmlzaH4wMnxTYWludCBEYXZpZCBQYXJpc2h+MDN8U2FpbnQgR2VvcmdlIFBhcmlzaH4wNHxTYWludCBKb2huIFBhcmlzaH4wNXxTYWludCBKb3NlcGggUGFyaXNofjA2fFNhaW50IEx1a2UgUGFyaXNofjA3fFNhaW50IE1hcmsgUGFyaXNofjA4fFNhaW50IFBhdHJpY2sgUGFyaXNofjA5fFNhaW50IFBhdWwgUGFyaXNofjEwfFNhaW50IFBldGVyIFBhcmlzaH4xMVwiXSxbXCJEb21pbmljYW4gUmVwdWJsaWNcIixcIkRPXCIsXCJDaWJhbyBDZW50cmFsfjAyfERlbCBWYWxsZX4zN3xEaXN0cml0byBOYWNpb25hbH4wMXxFbnJpcXVpbGxvfjM4fE5vcmNlbnRyYWx+MDR8Tm9yZGVzdGV+MzR8Tm9yb2VzdGV+MzR8Tm9ydGV+MzV8VmFsZGVzaWF+NDJcIl0sW1wiRWN1YWRvclwiLFwiRUNcIixcIkF6dWF5fkF8Qm9sw612YXJ+QnxDYcOxYXJ+RnxDYXJjaGl+Q3xDaGltYm9yYXpvfkh8Q290b3BheGl+WHxFbCBPcm9+T3xFc21lcmFsZGFzfkV8R2Fsw6FwYWdvc35XfEd1YXlhc35HfEltYmFidXJhfkl8TG9qYX5MfExvcyBSw61vc35SfE1hbmFiw61+TXxNb3JvbmEtU2FudGlhZ29+U3xOYXBvfk58T3JlbGxhbmF+RHxQYXN0YXphfll8UGljaGluY2hhflB8U2FudGEgRWxlbmF+U0V8U2FudG8gRG9taW5nbyBkZSBsb3MgVHPDoWNoaWxhc35TRHxTdWN1bWLDrW9zflV8VHVuZ3VyYWh1YX5UfFphbW9yYS1DaGluY2hpcGV+WlwiXSxbXCJFZ3lwdFwiLFwiRUdcIixcIkFsZXhhbmRyaWF+QUxYfEFzd2FufkFTTnxBc3lvdXR+QVNUfEJhbmkgU3VlaWZ+Qk5TfEJlaGVpcmF+Qkh8Q2Fpcm9+Q3xEYXFhaGxpYX5ES3xEdW1pYXR+RFR8RWwgQmFociBFbCBBaG1hcn5CQXxFbCBJc21haWxpYX5JU3xFbCBTdWV6flNVWnxFbCBXYWRpIEVsIEdlZGVlZH5XQUR8RmF5b3VtfkZZTXxHaGFyYmlhfkdIfEdpemF+U1VafEhlbHdhbn5IVXxLYWZyIEVsIFNoZWlraH5LRlN8THV4b3J+TFh8TWF0cm91aH5NVHxNZW5pYX5NTnxNZW5vZmlhfk1ORnxOb3J0aCBTaW5haX5TSU58UG9ydCBTYWlkflBUU3xRYWx1YmlhfktCfFFlbmF+S058U2hhcnFpYX5TSFJ8U2l4dGggb2YgT2N0b2Jlcn5TVXxTb2hhZ35TSEd8U291dGggU2luYWl+SlNcIl0sW1wiRWwgU2FsdmFkb3JcIixcIlNWXCIsXCJBaHVhY2hhcMOhbn5BSHxDYWJhw7Fhc35DQXxDdXNjYXRsw6FufkNVfENoYWxhdGVuYW5nb35DSHxMYSBMaWJlcnRhZH5MSXxMYSBQYXp+UEF8TGEgVW5pw7NuflVOfE1vcmF6w6Fufk1PfFNhbiBNaWd1ZWx+U018U2FuIFNhbHZhZG9yflNTfFNhbnRhIEFuYX5TQXxTYW4gVmljZW50ZX5TVnxTb25zb25hdGV+U098VXN1bHV0w6FuflVTXCJdLFtcIkVxdWF0b3JpYWwgR3VpbmVhXCIsXCJHUVwiLFwiQW5ub2LDs25+QU58Qmlva28gTm9ydGV+Qk58Qmlva28gU3VyfkJTfENlbnRybyBTdXJ+Q1N8S2nDqS1OdGVtfktOfExpdG9yYWx+TEl8V2VsZS1OemFzfldOXCJdLFtcIkVyaXRyZWFcIixcIkVSXCIsXCJBbnNlYmF+QU58RGVidWJ+RFV8RGVidWItS2VpaC1CYWhyaX5ES3xHYXNoLUJhcmthfkdCfE1hZWtlbH5NQXxTZW1pZW4tS2VpaC1CYWhyaX5TS1wiXSxbXCJFc3RvbmlhXCIsXCJFRVwiLFwiSGFyanVtYWEgKFRhbGxpbm4pfjM3fEhpaXVtYWEgKEthcmRsYSl+Mzl8SWRhLVZpcnVtYWEgKEpvaHZpKX40NHxKw6RydmFtYWEgKFBhaWRlKX40MXxKw7VnZXZhbWFhIChKb2dldmEpfjQ5fEzDpMOkbmVtYWF+NTd8TMOkw6RuZS1WaXJ1bWFhIChSYWt2ZXJlKX41OXxQw6RybnVtYWEgKFBhcm51KX42N3xQw7VsdmFtYWEgKFBvbHZhKX42NXxSYXBsYW1hYSAoUmFwbGEpfjcwfFNhYXJlbWFhIChLdWVzc2FhcmUpfjc0fFRhcnR1bWFhIChUYXJ0dSl+Nzh8VmFsZ2FtYWEgKFZhbGdhKX44MnxWaWxqYW5kaW1hYSAoVmlsamFuZGkpfjg0fFbDtXJ1bWFhIChWb3J1KX44NlwiXSxbXCJFdGhpb3BpYVwiLFwiRVRcIixcIkFkZGlzIEFiYWJhfkFBfEFmYXJ+QUZ8QW1oYXJhfkFNfEJlbnNoYW5ndWwtR3VtYXp+QkV8RGlyZSBEYXdhfkREfEdhbWJlbGF+R0F8SGFyYXJpfkhBfE9yb21pYX5PUnxTb21hbGl+U098U291dGhlcm4gTmF0aW9ucyBOYXRpb25hbGl0aWVzIGFuZCBQZW9wbGUncyBSZWdpb25+U058VGlncmF5flRJXCJdLFtcIkZhbGtsYW5kIElzbGFuZHMgKElzbGFzIE1hbHZpbmFzKVwiLFwiRktcIixcIkZhbGtsYW5kIElzbGFuZHMgKElzbGFzIE1hbHZpbmFzKVwiXSxbXCJGYXJvZSBJc2xhbmRzXCIsXCJGT1wiLFwiQm9yZG95fEV5c3R1cm95fE15a2luZXN8U2FuZG95fFNrdXZveXxTdHJleW1veXxTdWR1cm95fFR2b3JveXJpfFZhZ2FyXCJdLFtcIkZpamlcIixcIkZKXCIsXCJCYX4wMXxCdWF+MDF8Q2FrYXVkcm92ZX4wM3xLYWRhdnV+MDR8TGF1fjA1fExvbWFpdml0aX4wNnxNYWN1YXRhfjA3fE5hZHJvZ2EgYW5kIE5hdm9zYX4wOHxOYWl0YXNpcml+MDl8TmFtb3NpfjEwfFJhfjAxMXxSZXdhfjEyfFJvdHVtYX5SfFNlcnVhfjEyfFRhaWxldnV+MTRcIl0sW1wiRmlubGFuZFwiLFwiRklcIixcIkFodmVuYW5tYWFuIGzDpMOkbml+QUx8RXRlbMOkLVN1b21lbiBsw6TDpG5pfkVTfEl0w6QtU3VvbWVuIGzDpMOkbml+SVN8TMOkbnNpLVN1b21lbiBsw6TDpG5pfkxTfExhcGluIGzDpMOkbml+TEx8T3VsdW4gbMOkw6RuaX5PTFwiXSxbXCJGcmFuY2VcIixcIkZSXCIsXCJBdXZlcmduZS1SaMO0bmUtQWxwZXN+QVJBfEJvdXJnb2duZS1GcmFuY2hlLUNvbXTDqX5CRkN8QnJldGFnbmV+QlJFfENlbnRyZS1WYWwgZGUgTG9pcmV+Q1ZMfENvcnNlfkNPUnxHcmFuZCBFc3R+R0VTfEhhdXRzLWRlLUZyYW5jZX5IREZ8w45sZS1kZS1GcmFuY2V+SURGfE5vcm1hbmRpZX5OT1J8Tm91dmVsbGUtQXF1aXRhaW5lfk5BUXxPY2NpdGFuaWV+T0NDfFBheXMgZGUgbGEgTG9pcmV+UERMfFByb3ZlbmNlLUFscGVzLUNvdGUgZCdBenVyflBBQ3xDbGlwcGVydG9ufkNQfEd1YWRlbG91cGV+R1B8R3V5YW5lfkdGfE1hcnRpbmlxdWV+TVF8TWF5b3R0ZX5ZVHxOb3ZlbGxlLUNhbMOpZG9uaWV+TkN8UG9seW7DqXNpZX5QRnxTYWludC1QaWVycmUtZXQtTWlxdWVsb25+UE18U2FpbnQgQmFydGjDqWxlbXl+Qkx8U2FpbnQgTWFydGlufk1GfFLDqXVuaW9uflJFfFRlcnJlcyBBdXN0cmFsZXMgRnJhbsOnYWlzZXN+VEZ8V2FsbGlzLWV0LUZ1dHVuYX5XRlwiXSxbXCJGcmVuY2ggR3VpYW5hXCIsXCJHRlwiLFwiRnJlbmNoIEd1aWFuYVwiXSxbXCJGcmVuY2ggUG9seW5lc2lhXCIsXCJQRlwiLFwiQXJjaGlwZWwgZGVzIE1hcnF1aXNlc3xBcmNoaXBlbCBkZXMgVHVhbW90dXxBcmNoaXBlbCBkZXMgVHVidWFpfElsZXMgZHUgVmVudHxJbGVzIFNvdXMtbGUtVmVudFwiXSxbXCJGcmVuY2ggU291dGhlcm4gYW5kIEFudGFyY3RpYyBMYW5kc1wiLFwiVEZcIixcIkFkZWxpZSBMYW5kfElsZSBDcm96ZXR8SWxlcyBLZXJndWVsZW58SWxlcyBTYWludC1QYXVsIGV0IEFtc3RlcmRhbVwiXSxbXCJHYWJvblwiLFwiR0FcIixcIkVzdHVhaXJlfjF8SGF1dC1PZ29vdcOpfjJ8TW95ZW4tT2dvb3XDqX4zfE5nb3VuacOpfjR8TnlhbmdhfjV8T2dvb3XDqS1JdmluZG9+NnxPZ29vdcOpLUxvbG9+N3xPZ29vdcOpLU1hcml0aW1lfjh8V29sZXUtTnRlbX45XCJdLFtcIkdhbWJpYSwgVGhlXCIsXCJHTVwiLFwiQmFuanVsfkJ8Q2VudHJhbCBSaXZlcn5NfExvd2VyIFJpdmVyfkx8Tm9ydGggQmFua35OfFVwcGVyIFJpdmVyflV8V2VzdGVybn5XXCJdLFtcIkdlb3JnaWFcIixcIkdFXCIsXCJBYmtoYXppYSAoU29raHVtaSl+QUJ8QWphcmlhIChCYXQndW1pKX5BSnxHdXJpYX5HVXxJbWVyZXRpfklNfEsnYWtoZXRpfktBfEt2ZW1vIEthcnRsaX5LS3xNdHNoa2hldGEtTXRpYW5ldGl+TU18UmFjaCdhLUxleGhrdW1pLUt2ZW1vU3ZhbmV0aX5STHxTYW1lZ3JlbG8tWmVtbyBTdmFuZXRpflNafFNhbXRza2hlLUphdmFraGV0aX5TSnxTaGlkYSBLYXJ0bGl+U0t8VGJpbGlzaX5UQlwiXSxbXCJHZXJtYW55XCIsXCJERVwiLFwiQmFkZW4tV8O8cnR0ZW1iZXJnfkJXfEJheWVybn5CWXxCZXJsaW5+QkV8QnJhbmRlbmJ1cmd+QkJ8QnJlbWVufkhCfEhhbWJ1cmd+SEh8SGVzc2VufkhFfE1lY2tsZW5idXJnLVZvcnBvbW1lcm5+TVZ8TmllZGVyc2FjaHNlbn5OSXxOb3JkcmhlaW4tV2VzdGZhbGVufk5XfFJoZWlubGFuZC1QZmFsen5SUHxTYWFybGFuZH5TTHxTYWNoc2VuflNOfFNhY2hzZW4tQW5oYWx0flNUfFNjaGxlc3dpZy1Ib2xzdGVpbn5TSHxUaMO8cmluZ2VuflRIXCJdLFtcIkdoYW5hXCIsXCJHSFwiLFwiQXNoYW50aX5BSHxCcm9uZy1BaGFmb35CQXxDZW50cmFsfkNQfEVhc3Rlcm5+RVB8R3JlYXRlciBBY2NyYX5BQXxOb3J0aGVybn5OUHxVcHBlciBFYXN0flVFfFVwcGVyIFdlc3R+VVd8Vm9sdGF+VFZ8V2VzdGVybn5XUFwiXSxbXCJHaWJyYWx0YXJcIixcIkdJXCIsXCJHaWJyYWx0YXJcIl0sW1wiR3JlZWNlXCIsXCJHUlwiLFwiQW5hdG9saWvDrSBNYWtlZG9uw61hIGthaSBUaHLDoWtpfkF8QXR0aWvhuK9+SXxEeXRpa8OtIEVsbMOhZGF+R3xEeXRpa8OtIE1ha2Vkb27DrWF+Q3xJb27DrWEgTsOtc2lhfkZ8S2VudHJpa8OtIE1ha2Vkb27DrWF+QnxLcsOtdMOtfk18Tm90w61vIEFpZ2HDrW9+THxQZWxvcG9ubsOtc29zfkp8U3RlcmXDoSBFbGzDoWRhfkh8VGhlc3NhbMOtYX5FfFZvcmXDrW8gQWlnYcOtb35LfMONcGVpcm9zfkR8w4FnaW9uIMOTcm9zfjY5XCJdLFtcIkdyZWVubGFuZFwiLFwiR0xcIixcIktvbW11bmUgS3VqYWxsZXF+S1V8S29tbXVuZXFhcmZpayBTZXJtZXJzb29xflNNfFFhYXN1aXRzdXAgS29tbXVuaWF+UUF8UWVxcWF0YSBLb21tdW5pYX5RRVwiXSxbXCJHcmVuYWRhXCIsXCJHRFwiLFwiU2FpbnQgQW5kcmV3fjAxfFNhaW50IERhdmlkfjAyfFNhaW50IEdlb3JnZX4wM3xTYWludCBKb2hufjA0fFNhaW50IE1hcmt+MDV8U2FpbnQgUGF0cmlja34wNnxTb3V0aGVybiBHcmVuYWRpbmUgSXNsYW5kc34xMFwiXSxbXCJHdWFkZWxvdXBlXCIsXCJHUFwiLFwiR3VhZGVsb3VwZVwiXSxbXCJHdWFtXCIsXCJHVVwiLFwiR3VhbVwiXSxbXCJHdWF0ZW1hbGFcIixcIkdUXCIsXCJBbHRhIFZlcmFwYXp+QVZ8QmFqYSBWZXJhcGF6fkJWfENoaW1hbHRlbmFuZ29+Q018Q2hpcXVpbXVsYX5DUXxFbCBQcm9ncmVzb35QUnxFc2N1aW50bGF+RVN8R3VhdGVtYWxhfkdVfEh1ZWh1ZXRlbmFuZ29+SFV8SXphYmFsfklafEphbGFwYX5KQXxKdXRpYXBhfkpVfFBldMOpbn5QRXxRdWV0emFsdGVuYW5nb35RWnxRdWljaMOpflFDfFJldGFsaHVsZXV+UmV8U2FjYXRlcMOpcXVlen5TQXxTYW4gTWFyY29zflNNfFNhbnRhIFJvc2F+U1J8U29sb2zDoX5TT3xTdWNoaXRlcMOpcXVlen5TVXxUb3RvbmljYXDDoW5+VE98WmFjYXBhflpBXCJdLFtcIkd1ZXJuc2V5XCIsXCJHR1wiLFwiQ2FzdGVsfEZvcmVzdHxTdC4gQW5kcmV3fFN0LiBNYXJ0aW58U3QuIFBldGVyIFBvcnR8U3QuIFBpZXJyZSBkdSBCb2lzfFN0LiBTYW1wc29ufFN0LiBTYXZpb3VyfFRvcnRldmFsfFZhbGVcIl0sW1wiR3VpbmVhXCIsXCJHTlwiLFwiQm9rw6l+QnxDb25ha3J5fkN8RmFyYW5haH5GfEthbmthbn5LfEtpbmRpYX5EfExhYsOpfkx8TWFtb3V+TXxOesOpcsOpa29yw6l+TlwiXSxbXCJHdWluZWEtQmlzc2F1XCIsXCJHV1wiLFwiQmFmYXTDoX5CQXxCaW9tYm9+Qk18Qmlzc2F1fkJTfEJvbGFtYS1CaWphZ29zfkJMfENhY2hldX5DQXxHYWLDun5HQXxPaW9+T0l8UXVpbmFyYX5RVXxUb21iYWxpflRPXCJdLFtcIkd1eWFuYVwiLFwiR1lcIixcIkJhcmltYS1XYWluaX5CQXxDdXl1bmktTWF6YXJ1bml+Q1V8RGVtZXJhcmEtTWFoYWljYX5ERXxFYXN0IEJlcmJpY2UtQ29yZW50eW5lfkVCfEVzc2VxdWlibyBJc2xhbmRzLVdlc3QgRGVtZXJhcmF+RVN8TWFoYWljYS1CZXJiaWNlfk1BfFBvbWVyb29uLVN1cGVuYWFtflBNfFBvdGFyby1TaXBhcnVuaX5QVHxVcHBlciBEZW1lcmFyYS1CZXJiaWNlflVEfFVwcGVyIFRha3V0dS1VcHBlciBFc3NlcXVpYm9+VVRcIl0sW1wiSGFpdGlcIixcIkhUXCIsXCJBcnRpYm9uaXRlfkFSfENlbnRyZX5DRXxHcmFuZCdBbnNlfkdBfE5pcHBlc35OSXxOb3Jkfk5EfE5vcmQtRXN0fk5FfE5vcmQtT3Vlc3R+Tk98T3Vlc3R+T1V8U3VkflNEfFN1ZC1Fc3R+U0VcIl0sW1wiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCIsXCJITVwiLFwiSGVhcmQgSXNsYW5kIGFuZCBNY0RvbmFsZCBJc2xhbmRzXCJdLFtcIkhvbHkgU2VlIChWYXRpY2FuIENpdHkpXCIsXCJWQVwiLFwiSG9seSBTZWUgKFZhdGljYW4gQ2l0eSl+MDFcIl0sW1wiSG9uZHVyYXNcIixcIkhOXCIsXCJBdGzDoW50aWRhfkFUfENob2x1dGVjYX5DSHxDb2zDs25+Q0x8Q29tYXlhZ3VhfkNNfENvcMOhbn5DUHxDb3J0w6lzfkNSfEVsIFBhcmHDrXNvfkVQfEZyYW5jaXNjbyBNb3JhemFufkZNfEdyYWNpYXMgYSBEaW9zfkdEfEludGlidWPDoX5JTnxJc2xhcyBkZSBsYSBCYWjDrWF+SUJ8TGEgUGF6fkxQfExlbXBpcmF+TEV8T2NvdGVwZXF1ZX5PQ3xPbGFuY2hvfk9MfFNhbnRhIELDoXJiYXJhflNCfFZhbGxlflZBfFlvcm9+WU9cIl0sW1wiSG9uZyBLb25nXCIsXCJIS1wiLFwiSG9uZyBLb25nXCJdLFtcIkh1bmdhcnlcIixcIkhVXCIsXCJCw6Fjcy1LaXNrdW5+Qkt8QmFyYW55YX5CQXxCw6lrw6lzfkJFfELDqWvDqXNjc2FiYX5CQ3xCb3Jzb2QtQWJhdWotWmVtcGxlbn5CWnxCdWRhcGVzdH5CVXxDc29uZ3LDoWR+Q1N8RGVicmVjZW5+REV8RHVuYcO6anbDoXJvc35EVXxFZ2VyfkVHfMOJcmR+RVJ8RmVqw6lyfkZFfEd5xZFyfkdZfEd5xZFyLU1vc29uLVNvcHJvbn5HU3xIYWpkw7otQmloYXJ+SEJ8SGV2ZXN+SEV8SMOzZG1lesWRdsOhc8OhcmhlbHl+SFZ8SsOhc3otTmFneWt1bi1Tem9sbm9rfk58S2Fwb3N2w6FyfktWfEtlY3NrZW3DqXR+S018S29tw6Fyb20tRXN6dGVyZ29tfktFfE1pc2tvbGN+TUl8TmFneWthbml6c2F+Tkt8TsOzZ3LDoWR+Tk98TnnDrXJlZ3low6F6YX5OWXxQw6ljc35QU3xQZXN0flBFfFNhbGfDs3RhcmrDoW5+U1R8U29tb2d5flNPfFNvcHJvbn5TTnxTemFib2xjcy3DoS1CZXJlZ35TWnxTemVnZWR+U0R8U3rDqWtlc2ZlaMOpcnbDoXJ+U0Z8U3pla3N6w6FyZH5TU3xTem9sbm9rflNLfFN6b21iYXRoZWx5flNIfFRhdGFiw6FueWF+VEJ8VG9sbmF+VE98VmFzflZBfFZlc3pwcsOpbX5WRXxWZXN6cHLDqW0gKENpdHkpflZNfFphbGF+WkF8WmFsYWVnZXJzemVnflpFXCJdLFtcIkljZWxhbmRcIixcIklTXCIsXCJBdXN0dXJsYW5kfjd8SMO2ZnXDsGJvcmdhcnN2w6bDsGkgdXRhbiBSZXlramF2w61rdXJ+MXxOb3LDsHVybGFuZCBleXN0cmF+NnxOb3LDsHVybGFuZCB2ZXN0cmF+NXxTdcOwdXJsYW5kfjh8U3XDsHVybmVzfjJ8VmVzdGZpcsOwaXJ+NHxWZXN0dXJsYW5kfjNcIl0sW1wiSW5kaWFcIixcIklOXCIsXCJBbmRhbWFuIGFuZCBOaWNvYmFyIElzbGFuZHN+QU58QW5kaHJhIFByYWRlc2h+QVB8QXJ1bmFjaGFsIFByYWRlc2h+QVJ8QXNzYW1+QVN8QmloYXJ+QlJ8Q2hhbmRpZ2FyaH5DSHxDaGhhdHRpc2dhcmh+Q1R8RGFkcmEgYW5kIE5hZ2FyIEhhdmVsaX5ETnxEYW1hbiBhbmQgRGl1fkREfERlbGhpfkRMfEdvYX5HQXxHdWphcmF0fkdKfEhhcnlhbmF+SFJ8SGltYWNoYWwgUHJhZGVzaH5IUHxKYW1tdSBhbmQgS2FzaG1pcn5KS3xKaGFya2hhbmR+Skh8S2FybmF0YWthfktBfEtlcmFsYX5LTHxMYWtzaGFkd2VlcH5MRHxNYWRoeWEgUHJhZGVzaH5NUHxNYWhhcmFzaHRyYX5NSHxNYW5pcHVyfk1OfE1lZ2hhbGF5YX5NTHxNaXpvcmFtfk1afE5hZ2FsYW5kfk5MfE9kaXNoYX5PUnxQdWR1Y2hlcnJ5flBZfFB1bmphYn5QQnxSYWphc3RoYW5+Ukp8U2lra2ltfldLfFRhbWlsIE5hZHV+VE58VGVsYW5nYW5hflRHfFRyaXB1cmF+VFJ8VXR0YXJha2hhbmR+VVR8VXR0YXIgUHJhZGVzaH5VUHxXZXN0IEJlbmdhbH5XQlwiXSxbXCJJbmRvbmVzaWFcIixcIklEXCIsXCJBY2VofkFDfEJhbGl+QkF8QmFuZ2thIEJlbGl0dW5nfkJCfEJhbnRlbn5CVHxCZW5na3VsdX5CRXxHb3JvbnRhbG9+R098SmFrYXJ0YSBSYXlhfkpLfEphbWJpfkpBfEphd2EgQmFyYXR+SkJ8SmF3YSBUZW5nYWh+SlR8SmF3YSBUaW11cn5KSXxLYWxpbWFudGFuIEJhcmF0fktCfEthbGltYW50YW4gU2VsYXRhbn5LU3xLYWxpbWFudGFuIFRlbmdhaH5LVHxLYWxpbWFudGFuIFRpbXVyfktJfEthbGltYW50YW4gVXRhcmF+S1V8S2VwdWxhdWFuIFJpYXV+S1J8TGFtcHVuZ35MQXxNYWx1a3V+TUF8TWFsdWt1IFV0YXJhfk1VfE51c2EgVGVuZ2dhcmEgQmFyYXR+TkJ8TnVzYSBUZW5nZ2FyYSBUaW11cn5OVHxQYXB1YX5QQXxQYXB1YSBCYXJhdH5QQnxSaWF1flJJfFN1bGF3ZXNpIFNlbGF0YW5+U1J8U3VsYXdlc2kgVGVuZ2FoflNUfFN1bGF3ZXNpIFRlbmdnYXJhflNHfFN1bGF3ZXNpIFV0YXJhflNBfFN1bWF0ZXJhIEJhcmF0flNCfFN1bWF0ZXJhIFNlbGF0YW5+U1N8U3VtYXRlcmEgVXRhcmF+U1V8WW9neWFrYXJ0YX5ZT1wiXSxbXCJJcmFuLCBJc2xhbWljIFJlcHVibGljIG9mXCIsXCJJUlwiLFwiQWxib3J6fjMyfEFyZGFixKtsfjAzfMSAesyEYXJixIF5asSBbi1lIEdoYXJixKt+MDJ8xIB6zIRhcmLEgXlqxIFuLWUgU2hhcnHEq34wMXxCxatzaGVocn4wNnxDaGFoxIFyIE1h4bipxIFsIHZhIEJha2h0xKvEgXLEq34wOHxFxZ9mYWjEgW5+MDR8RsSBcnN+MTR8R8SrbMSBbn4xOXxHb2xlc3TEgW5+Mjd8SGFtYWTEgW5+MjR8SG9ybW96Z8SBbn4yM3zEqmzEgW1+MDV8S2VybcSBbn4xNXxLZXJtxIFuc2jEgWh+MTd8S2hvcsSBc8SBbi1lIEpvbsWrYsSrfjI5fEtob3LEgXPEgW4tZSBSYeG6lWF2xKt+MzB8S2hvcsSBc8SBbi1lIFNob23EgWzEq342MXxLaMWremVzdMSBbn4xMHxLb2hnxKtsxat5ZWggdmEgQm93eWVyIEHhuKltYWR+MTh8S29yZGVzdMSBbn4xNnxMb3Jlc3TEgW5+MjB8TWFya2F6aX4yMnxNxIF6YW5kYXLEgW5+MjF8UWF6dsSrbn4yOHxRb21+MjZ8U2VtbsSBbn4xMnxTxKtzdMSBbiB2YSBCYWzFq2NoZXN0xIFufjEzfFRlaHLEgW5+MDd8WWF6ZH4yNXxaYW5qxIFufjExXCJdLFtcIklyYXFcIixcIklRXCIsXCJBbCBBbmLEgXJ+QU58QWwgQmHFn3JhaH5CQXxBbCBNdXRoYW5uw6F+TVV8QWwgUcSBZGlzxKt5YWh+UUF8QW4gTmFqYWZ+TkF8QXJixKtsfkFSfEFzIFN1bGF5bcSBbsSreWFoflNVfELEgWJpbH5CQnxCYWdoZMSBZH5CR3xEb2h1a35EQXxEaMSrIFHEgXJ+RFF8RGl5xIFsw6F+REl8S2FyYmFsxIEnfktBfEtpcmt1a35LSXxNYXlzxIFufk1BfE7Eq25hd8Ohfk5JfMWeYWzEgeG4qSBhZCBExKtuflNEfFfEgXNpxaN+V0FcIl0sW1wiSXJlbGFuZFwiLFwiSUVcIixcIkNhcmxvd35DV3xDYXZhbn5DTnxDbGFyZX5DRXxDb3JrfkNPfERvbmVnYWx+REx8RHVibGlufkR8R2Fsd2F5fkd8S2Vycnl+S1l8S2lsZGFyZX5LRXxLaWxrZW5ueX5LS3xMYW9pc35MU3xMZWl0cmltfkxNfExpbWVyaWNrfkxLfExvbmdmb3JkfkxEfExvdXRofkxIfE1heW9+TU98TWVhdGh+TUh8TW9uYWdoYW5+TU58T2ZmYWx5fk9ZfFJvc2NvbW1vbn5STnxTbGlnb35TT3xUaXBwZXJhcnl+VEF8V2F0ZXJmb3JkfldEfFdlc3RtZWF0aH5XSHxXZXhmb3JkfldYfFdpY2tsb3d+V1dcIl0sW1wiSXNsZSBvZiBNYW5cIixcIklNXCIsXCJJc2xlIG9mIE1hblwiXSxbXCJJc3JhZWxcIixcIklMXCIsXCJIYURhcm9tfkR8SGFNZXJrYXp+TXxIYVRzYWZvbn5afEjMsWVmYX5IQXxUZWwtQXZpdn5UQXxZZXJ1c2hhbGF5aW1+Sk1cIl0sW1wiSXRhbHlcIixcIklUXCIsXCJBYnJ1enpvfjY1fEJhc2lsaWNhdGF+Nzd8Q2FsYWJyaWF+Nzh8Q2FtcGFuaWF+NzJ8RW1pbGlhLVJvbWFnbmF+NDV8RnJpdWxpLVZlbmV6aWEgR2l1bGlhfjM2fExhemlvfjYyfExpZ3VyaWF+NDJ8TG9tYmFyZGlhfjI1fE1hcmNoZX41N3xNb2xpc2V+Njd8UGllbW9udGV+MjF8UHVnbGlhfjc1fFNhcmRlZ25hfjg4fFNpY2lsaWF+ODJ8VG9zY2FuYX41MnxUcmVudGluby1BbHRvIEFkaWdlfjMyfFVtYnJpYX41NXxWYWxsZSBkJ0Fvc3RhfjIzfFZlbmV0b34zNFwiXSxbXCJKYW1haWNhXCIsXCJKTVwiLFwiQ2xhcmVuZG9ufjEzfEhhbm92ZXJ+MDl8S2luZ3N0b25+MDF8TWFuY2hlc3Rlcn4xMnxQb3J0bGFuZH4wNHxTYWludCBBbmRyZXd+MDJ8U2FpbnQgQW5ufjA2fFNhaW50IENhdGhlcmluZX4xNHxTYWludCBFbGl6YWJldGh+MTF8U2FpbnQgSmFtZXN+MDh8U2FpbnQgTWFyeX4wNXxTYWludCBUaG9tYXN+MDN8VHJlbGF3bnl+MDd8V2VzdG1vcmVsYW5kfjEwXCJdLFtcIkphcGFuXCIsXCJKUFwiLFwiQWljaGl+MjN8QWtpdGF+MDV8QW9tb3JpfjAyfENoaWJhfjEyfEVoaW1lfjM4fEZ1a3VpfjE4fEZ1a3Vva2F+NDB8RnVrdXNoaW1hfjA3fEdpZnV+MjF8R3VubWF+MTB8SGlyb3NoaW1hfjM0fEhva2thaWRvfjAxfEh5b2dvfjI4fEliYXJha2l+MDh8SXNoaWthd2F+MTd8SXdhdGV+MDN8S2FnYXdhfjM3fEthZ29zaGltYX40NnxLYW5hZ2F3YX4xNHxLb2NoaX4zOXxLdW1hbW90b340M3xLeW90b34yNnxNaWV+MjR8TWl5YWdpfjA0fE1peWF6YWtpfjQ1fE5hZ2Fub34yMHxOYWdhc2FraX40MnxOYXJhfjI5fE5paWdhdGF+MTV8T2l0YX40NHxPa2F5YW1hfjMzfE9raW5hd2F+NDd8T3Nha2F+Mjd8U2FnYX40MXxTYWl0YW1hfjExfFNoaWdhfjI1fFNoaW1hbmV+MzJ8U2hpenVva2F+MjJ8VG9jaGlnaX4wOXxUb2t1c2hpbWF+MzZ8VG9reW9+MTN8VG90dG9yaX4zMXxUb3lhbWF+MTZ8V2FrYXlhbWF+MzB8WWFtYWdhdGF+MDZ8WWFtYWd1Y2hpfjM1fFlhbWFuYXNoaX4xOVwiXSxbXCJKZXJzZXlcIixcIkpFXCIsXCJKZXJzZXlcIl0sW1wiSm9yZGFuXCIsXCJKT1wiLFwi4oCYQWpsxatufkFKfEFsICdBcWFiYWh+QVF8QWwgQmFsccSB4oCZfkJBfEFsIEthcmFrfktBfEFsIE1hZnJhcX5NQXxBbCDigJhBzIXFn2ltYWh+QU18QcWjIMWiYWbEq2xhaH5BVHxBeiBaYXJxxIHigJl+QVp8SXJiaWR+SVJ8SmFyYXNofkpBfE1h4oCYxIFufk1OfE3EgWRhYsSBfk1EXCJdLFtcIkthemFraHN0YW5cIixcIktaXCIsXCJBbG1hdHl+QUxBfEFxbW9sYX5BS018QXF0b2JlfkFLVHxBc3RhbmF+QVNUfEF0eXJhdX5BVFl8QmF0eXMgUWF6YXFzdGFuflpBUHxCYXlxb25neXJ8TWFuZ2doeXN0YXV+TUFOfE9uZ3R1c3RpayBRYXphcXN0YW5+WVVafFBhdmxvZGFyflBBVnxRYXJhZ2hhbmR5fktBUnxRb3N0YW5heX5LVVN8UXl6eWxvcmRhfktaWXxTaHlnaHlzIFFhemFxc3Rhbn5WT1N8U29sdHVzdGlrIFFhemFxc3Rhbn5TRVZ8WmhhbWJ5bH5aSEFcIl0sW1wiS2VueWFcIixcIktFXCIsXCJCYXJpbmdvfjAxfEJvbWV0fjAyfEJ1bmdvbWF+MDN8QnVzaWF+MDR8RWxleW8vTWFyYWt3ZXR+MDV8RW1idX4wNnxHYXJpc3NhfjA3fEhvbWEgQmF5fjA4fElzaW9sb34wOXxLYWppYWRvfjEwfEtha2FtZWdhfjExfEtlcmljaG9+MTJ8S2lhbWJ1fjEzfEtpbGlmaX4xNHxLaXJpbnlhZ2F+MTV8S2lzaWl+MTZ8S2lzdW11fjE3fEtpdHVpfjE4fEt3YWxlfjE5fExhaWtpcGlhfjIwfExhbXV+MjF8TWFjaGFrb3N+MjJ8TWFrdWVuaX4yM3xNYW5kZXJhfjI0fE1hcnNhYml0fjI1fE1lcnV+MjZ8TWlnb3JpfjI3fE1vbWJhc2F+Mjh8TXVyYW5nJ2F+Mjl8TmFpcm9iaSBDaXR5fjMwfE5ha3VydX4zMXxOYW5kaX4zMnxOYXJva34zM3xOeWFtaXJhfjM0fE55YW5kYXJ1YX4zNXxOeWVyaX4zNnxTYW1idXJ1fjM3fFNpYXlhfjM4fFRhaXRhL1RhdmV0YX4zOXxUYW5hIFJpdmVyfjQwfFRoYXJha2EtTml0aGl+NDF8VHJhbnMgTnpvaWF+NDJ8VHVya2FuYX40M3xVYXNpbiBHaXNodX40NHxWaWhpZ2F+NDV8V2FqaXJ+NDZ8V2VzdCBQb2tvdH40N1wiXSxbXCJLaXJpYmF0aVwiLFwiS0lcIixcIkFiYWlhbmd8QWJlbWFtYXxBcmFudWthfEFyb3JhZXxCYW5hYmF8QmVydXxCdXRhcml0YXJpfENlbnRyYWwgR2lsYmVydHN8R2lsYmVydCBJc2xhbmRzfkd8S2FudG9ufEtpcml0aW1hdGl8S3VyaWF8TGluZSBJc2xhbmRzfkx8TWFpYW5hfE1ha2lufE1hcmFrZWl8TmlrdW5hdXxOb25vdXRpfE5vcnRoZXJuIEdpbGJlcnRzfE9ub3RvYXxQaG9lbml4IElzbGFuZHN+UHxTb3V0aGVybiBHaWxiZXJ0c3xUYWJpdGV1ZWF8VGFidWFlcmFufFRhbWFuYXxUYXJhd2F8VGVyYWluYVwiXSxbXCJLb3JlYSwgRGVtb2NyYXRpYyBQZW9wbGUncyBSZXB1YmxpYyBvZlwiLFwiS1BcIixcIkNoYWdhbmctZG8gKENoYWdhbmcgUHJvdmluY2UpfjA0fEhhbWd5b25nLWJ1a3RvIChOb3J0aCBIYW1neW9uZyBQcm92aW5jZSl+MDl8SGFtZ3lvbmctbmFtZG8gKFNvdXRoIEhhbWd5b25nIFByb3ZpbmNlKX4wOHxId2FuZ2hhZS1idWt0byAoTm9ydGggSHdhbmdoYWUgUHJvdmluY2UpfjA2fEh3YW5naGFlLW5hbWRvIChTb3V0aCBId2FuZ2hhZSBQcm92aW5jZSl+MDV8S2FuZ3dvbi1kbyAoS2FuZ3dvbiBQcm92aW5jZSl+MDd8TmFzxY9uIChOYWppbi1TxY9uYm9uZyl+MTN8UCd5b25nYW4tYnVrdG8gKE5vcnRoIFAneW9uZ2FuIFByb3ZpbmNlKX4wM3xQJ3lvbmdhbi1uYW1kbyAoU291dGggUCd5b25nYW4gUHJvdmluY2UpfjAyfFAneW9uZ3lhbmctc2kgKFAneW9uZ3lhbmcgQ2l0eSl+MDF8WWFuZ2dhbmctZG8gKFlhbmdnYW5nIFByb3ZpbmNlKX4xMFwiXSxbXCJLb3JlYSwgUmVwdWJsaWMgb2ZcIixcIktSXCIsXCJDaCd1bmdjaCdvbmdidWstZG9+NDN8Q2gndW5nY2gnb25nbmFtLWRvfjQ0fENoZWp1LWRvfjQ5fENob2xsYWJ1ay1kb340NXxDaG9sbGFuYW0tZG9+NDZ8SW5jaCdvbi1Ld2FuZ3lva2hpfjI4fEthbmctd29uLWRvfjQyfEt3YW5nanUtS3dhbmd5b2tzaGl+Mjh8S3lvbmdnaS1kb340MXxLeW9uZ3NhbmdidWstZG9+NDd8S3lvbmdzYW5nbmFtLWRvfjQ4fFB1c2FuLUt3YW5neW9rc2hpfjI2fFNlb3VsLVQndWtweW9sc2hpfjExfFNlam9uZ341MHxUYWVndS1Ld2FuZ3lva3NoaX4yN3xUYWVqb24tS3dhbmd5b2tzaGl+MzB8VWxzYW4tS3dhbmd5b2tzaGl+MzFcIl0sW1wiS3V3YWl0XCIsXCJLV1wiLFwiQWwgQeG4qW1hZGl+QUh8QWwgRmFyd8SBbsSreWFofkZBfEFsIEphaHLEgeKAmX5KQXxBbCDigJjEgMWfaW1haH5LVXzhuKhhd2FsbMSrfkhBfE11YsSBcmFrIGFsIEthYmlyfk1VXCJdLFtcIkt5cmd5enN0YW5cIixcIktHXCIsXCJCYXRrZW4gT2JsYXN0eX5CfEJpc2hrZWsgU2hhYXJ5fkdCfENodXkgT2JsYXN0eSAoQmlzaGtlayl+Q3xKYWxhbC1BYmFkIE9ibGFzdHl+SnxOYXJ5biBPYmxhc3R5fk58T3NoIE9ibGFzdHl+T3xUYWxhcyBPYmxhc3R5flR8WXN5ay1Lb2wgT2JsYXN0eSAoS2FyYWtvbCl+WVwiXSxbXCJMYW9zXCIsXCJMQVwiLFwiQXR0YXB1fkFUfEJva8Oob35CS3xCb2xpa2hhbXhhaX5CTHxDaGFtcGFzYWt+Q0h8SG91YXBoYW5+SE98S2hhbW1vdWFufktIfExvdWFuZyBOYW10aGF+TE18TG91YW5ncGhhYmFuZ35MUHxPdWTDtG14YWl+T1V8UGjDtG5nc2FsaX5QSHxTYWxhdmFuflNMfFNhdmFubmFraMOpdH5TVnxWaWVudGlhbmV+Vkl8WGFpZ25hYm91bGl+WEF8WMOpa29uZ35YRXxYYWlzb21ib3VuflhTfFhpYW5na2hvdWFuZ35YSVwiXSxbXCJMYXR2aWFcIixcIkxWXCIsXCJBZ2xvbmF+MDAxfEFpemtyYXVrbGV+MDAyfEFpenB1dGV+MDAzfEFrbsSrc3RlfjAwNHxBbG9qYX4wMDV8QWxzdW5nYX4wNnxBbMWra3NuZX4wMDd8QW1hdGF+MDA4fEFwZX4wMDl8QXVjZX4wMTB8xIBkYcW+aX4wMTF8QmFixKt0ZX4wMTJ8QmFsZG9uZX4wMTN8QmFsdGluYXZhfjAxNHxCYWx2aX4wMTV8QmF1c2thfjAxNnxCZXZlcsSrbmF+MDE3fEJyb2PEk25pfjAxOHxCdXJ0bmlla2l+MDE5fENhcm5pa2F2YX4wMjB8Q2VzdmFpbmV+MDIxfEPEk3Npc34wMjJ8Q2libGF+MDIzfERhZ2RhfjAyNHxEYXVnYXZwaWxzfjAyNXxEYXVnYXZwaWxzIChDaXR5KX5ER1Z8RG9iZWxlfjAyNnxEdW5kYWdhfjAyN3xEdXJiZX4wMjh8RW5ndXJlfjAyOXzEknJnxLxpfjAzMHxHYXJrYWxuZX4wMzF8R3JvYmnFhmF+MDMyfEd1bGJlbmV+MDMzfEllY2F2YX4wMzR8SWvFocS3aWxlfjAzNXxJbMWra3N0ZX4wMzZ8SW7EjXVrYWxuc34wMzd8SmF1bmplbGdhdmF+MDM4fEphdW5waWViYWxnYX4wMzl8SmF1bnBpbHN+MDQwfEplbGdhdmF+MDQxfEplbGdhdmEgKENpdHkpfkpFTHxKxJNrYWJwaWxzfjA0MnxKxJNrYWJwaWxzIChDaXR5KX5KS0J8SsWrcm1hbGEgKENpdHkpfkpVUnxLYW5kYXZhfjA0M3xLxIFyc2F2YX4wNDR8S29jxJNuaX4wNDV8S29rbmVzZX4wNDZ8S3LEgXNsYXZhfjA0N3xLcmltdWxkYX4wNDh8S3J1c3RwaWxzfjA0OXxLdWxkxKtnYX4wNTB8xLZlZ3Vtc34wNTF8xLZla2F2YX4wNTJ8TGllbHbEgXJkZX4wNTN8TGllcMSBamF+TFBYfExpbWJhxb5pfjA1NHxMxKtnYXRuZX4wNTV8TMSrdsSBbml+MDU2fEx1YsSBbmF+MDU3fEx1ZHphfjA1OHxNYWRvbmF+MDU5fE1henNhbGFjYX4wNjB8TcSBbHBpbHN+MDYxfE3EgXJ1cGV+MDYyfE3Ek3JzcmFnc34wNjN8TmF1a8WhxJNuaX4wNjR8TmVyZXRhfjA2NXxOxKtjYX4wNjZ8T2dyZX4wNjd8T2xhaW5lfjA2OHxPem9sbmlla2l+MDY5fFDEgXJnYXVqYX4wNzB8UMSBdmlsb3N0YX4wNzF8UMS8YXZpxYZhc34wNzJ8UHJlacS8aX4wNzN8UHJpZWt1bGV+MDc0fFByaWVrdcS8aX4wNzV8UmF1bmF+MDc2fFLEk3pla25lfjA3N3xSxJN6ZWtuZSAoQ2l0eSl+UkVafFJpZWJpxYZpfjA3OHxSxKtnYX5SSVh8Um9qYX4wNzl8Um9wYcW+aX4wODB8UnVjYXZhfjA4MXxSdWfEgWppfjA4MnxSdW5kxIFsZX4wODN8UsWramllbmF+MDg0fFNhbGF+MDg1fFNhbGFjZ3LEq3ZhfjA4NnxTYWxhc3BpbHN+MDg3fFNhbGR1c34wODh8U2F1bGtyYXN0aX4wODl8U8STamF+MDkwfFNpZ3VsZGF+MDkxfFNrcsSrdmVyaX4wOTJ8U2tydW5kYX4wOTN8U21pbHRlbmV+MDk0fFN0b3BpxYZpfjA5NXxTdHJlbsSNaX4wOTZ8VGFsc2l+MDk3fFTEk3J2ZXRlfjA5OHxUdWt1bXN+MDk5fFZhacWGb2RlfjEwMHxWYWxrYX4xMDF8VmFsbWllcmF+Vk1SfFZhcmFrxLzEgW5pfjEwMnxWxIFya2F2YX4xMDN8VmVjcGllYmFsZ2F+MTA0fFZlY3Vtbmlla2l+MTA1fFZlbnRzcGlsc34xMDZ8VmVudHNwaWxzIChDaXR5KX5WRU58Vmllc8SrdGV+MTA3fFZpxLxha2F+MTA4fFZpxLzEgW5pfjEwOXxaaWx1cGV+MTEwXCJdLFtcIkxlYmFub25cIixcIkxCXCIsXCJBYWtrw6JyfkFLfEJhYWxiZWxrLUhlcm1lbH5CSHxCw6lxYWF+Qkl8QmV5cm91dGh+QkF8TGliYW4tTm9yZH5BU3xMaWJhbi1TdWR+SkF8TW9udC1MaWJhbn5KTHxOYWJhdMOuecOpfk5BXCJdLFtcIkxlc290aG9cIixcIkxTXCIsXCJCZXJlYX5EfEJ1dGhhLUJ1dGhlfkJ8TGVyaWJlfkN8TWFmZXRlbmd+RXxNYXNlcnV+QXxNb2hhbGVzIEhvZWt+RnxNb2tob3Rsb25nfkp8UWFjaGEncyBOZWt+SHxRdXRoaW5nfkd8VGhhYmEtVHNla2F+S1wiXSxbXCJMaWJlcmlhXCIsXCJMUlwiLFwiQm9taX5CTXxCb25nfkJHfEdiYXJwb2x1fkdQfEdyYW5kIEJhc3NhfkdCfEdyYW5kIENhcGUgTW91bnR+Q018R3JhbmQgR2VkZWh+R0d8R3JhbmQgS3J1fkdLfExvZmF+TE98TWFyZ2liaX5NR3xNYXJ5bGFuZH5NWXxNb250c2VycmFkb35NT3xOaW1iYX5OSXxSaXZlciBDZXNzflJJfFJpdmVyIEdlZWV+Ukd8U2lub2V+U0lcIl0sW1wiTGlieWFcIixcIkxZXCIsXCJBbCBCdcWjbsSBbn5CVXxBbCBKYWJhbCBhbCBBa2jhuJFhcn5KQXxBbCBKYWJhbCBhbCBHaGFyYsSrfkpHfEFsIEphZsSBcmFofkpBfEFsIEp1ZnJhaH5KVXxBbCBLdWZyYWh+Rkt8QWwgTWFyan5NSnxBbCBNYXJxdWFifk1CfEFsIFfEgeG4qcSBdH5XQXxBbiBOdXFhxaMgYWwgS2hhbXN+TlF8QXogWsSBd2l5YWh+WkF8QmFuZ2jEgXrEq35CQXxEYXJuYWh+RFJ8R2jEgXR+R0h8TWnFn3LEgXRhaH5NSXxNdXJ6dXF+TVF8TsSBbMWrdH5OTHxTYWJoxIF+U0J8U3VydH5TUnzFomFyxIFidWx1c35UQnxZYWZyYW5+V0R8V8SBZMSrIGFzaCBTaMSBxaNpyr5+V1NcIl0sW1wiTGllY2h0ZW5zdGVpblwiLFwiTElcIixcIkJhbHplcnN+MDF8RXNjaGVufjAyfEdhbXByaW5+MDN8TWF1cmVufjA0fFBsYW5rZW5+MDV8UnVnZ2VsbH4wNnxTY2hhYW5+MDd8U2NoZWxsZW5iZXJnfjA4fFRyaWVzZW5+MDl8VHJpZXNlbmJlcmd+MTB8VmFkdXp+MTFcIl0sW1wiTGl0aHVhbmlhXCIsXCJMVFwiLFwiQWx5dGF1c35BTHxLYXVub35LVXxLbGFpcMSXZG9zfktMfE1hcmlqYW1wb2zEl3N+TVJ8UGFuZXbEl8W+aW9+UE58xaBpYXVsacWzflNBfFRhdXJhZ8SXc35UQXxUZWzFoWnFs35URXxVdGVub3N+VVR8VmlsbmlhdXN+VkxcIl0sW1wiTHV4ZW1ib3VyZ1wiLFwiTFVcIixcIkNhcGVsbGVufkNBfENsZXZhdXh+Q0x8RGlla2lyY2h+REl8RWNodGVybmFjaH5FQ3xFc2NoLXN1ci1BbHpldHRlfkVTfEdyZXZlbm1hY2hlcn5HUnxMdXhlbWJvdXJnfkxVfE1lcnNjaH5NRXxSZWRhbmdlflJEfFJlbWljaH5STXxWaWFuZGVuflZEfFdpbHR6fldJXCJdLFtcIk1hY2FvXCIsXCJNT1wiLFwiTWFjYW9cIl0sW1wiTWFjZWRvbmlhLCBSZXB1YmxpYyBvZlwiLFwiTUtcIixcIkFyYcSNaW5vdm9+MDJ8QmVyb3ZvfjAzfEJpdG9sYX4wNHxCb2dkYW5jaX4wNXxCb2dvdmluamV+MDZ8Qm9zaWxvdm9+MDd8QnJ2ZW5pY2F+MDh8Q2VudGFyIMW9dXBhfjc4fMSMYcWha2F+MDh8xIxlxaFpbm92by1PYmxlxaFldm9+ODF8xIx1xI1lciBTYW5kZXZvfjgyfERlYmFyfjIxfERlYmFyY2F+MjJ8RGVsxI1ldm9+MjN8RGVtaXIgSGlzYXJ+MjV8RGVtaXIgS2FwaWphfjI0fERvcmFufjI2fERvbG5lbml+Mjd8R2V2Z2VsaWphfjE4fEdvc3RpdmFyfjE5fEdyYWRza29+MjB8SWxpbmRlbn4zNHxKZWd1bm92Y2V+MzV8S2FyYmluY2l+Mzd8S2F2YWRhcmNpfjM2fEtpxI1ldm9+NDB8S2/EjWFuaX40MnxLb27EjWV+NDF8S3JhdG92b340M3xLcml2YSBQYWxhbmthfjQ0fEtyaXZvZ2HFoXRhbml+NDV8S3J1xaFldm9+NDZ8S3VtYW5vdm9+NDd8TGlwa292b340OHxMb3pvdm9+NDl8TWFrZWRvbnNrYSBLYW1lbmljYX41MXxNYWtlZG9uc2tpIEJyb2R+NTJ8TWF2cm92byBpIFJvc3R1xaFhfjUwfE1vZ2lsYX41M3xOZWdvdGlub341NHxOb3ZhY2l+NTV8Tm92byBTZWxvfjU2fE9ocmlkfjU4fFBlaMSNZXZvfjYwfFBldHJvdmVjfjU5fFBsYXNuaWNhfjYxfFByaWxlcH42MnxQcm9iacWhdGlwfjYzfFJhZG92acWhfnxSYW5rb3ZjZX42NXxSZXNlbn42NnxSb3NvbWFufjY3fFNrb3BqZX44NXxTb3BpxaF0ZX43MHxTdGFybyBOYWdvcmnEjWFuZX43MXxTdHJ1Z2F+NzJ8U3RydW1pY2F+NzN8U3R1ZGVuacSNYW5pfjc0fFN2ZXRpIE5pa29sZX42OXzFoHRpcH44M3xUZWFyY2V+NzV8VGV0b3Zvfjc2fFZhbGFuZG92b34xMHxWYXNpbGV2b34xMXxWZWxlc34xM3xWZXbEjWFuaX4xMnxWaW5pY2F+MTR8VnJhcMSNacWhdGV+MTZ8WmVsZW5pa292b34zMnxacm5vdmNpfjMzfMW9ZWxpbm9+MzBcIl0sW1wiTWFkYWdhc2NhclwiLFwiTUdcIixcIkFudGFuYW5hcml2b35UfEFudHNpcmFuYW5hfkR8RmlhbmFyYW50c29hfkZ8TWFoYWphbmdhfk18VG9hbWFzaW5hfkF8VG9saWFyYX5VXCJdLFtcIk1hbGF3aVwiLFwiTVdcIixcIkJhbGFrYX5CQXxCbGFudHlyZX5CTHxDaGlrd2F3YX5DS3xDaGlyYWR6dWx1fkNSfENoaXRpcGF+Q1R8RGVkemF+REV8RG93YX5ET3xLYXJvbmdhfktSfEthc3VuZ3V+S1N8TGlrb21hfkxLfExpbG9uZ3dlfkxJfE1hY2hpbmdhfk1IfE1hbmdvY2hpfk1HfE1jaGluaml+TUN8TXVsYW5qZX5NVXxNd2FuemF+TVd8TXppbWJhfk1afE5raGF0YSBCYXl+TkV8Tmtob3Rha290YX5OQnxOc2FuamV+TlN8TnRjaGV1fk5VfE50Y2hpc2l+Tkl8UGhhbG9tYmV+UEh8UnVtcGhpflJVfFNhbGltYX5TQXxUaHlvbG9+VEh8Wm9tYmF+Wk9cIl0sW1wiTWFsYXlzaWFcIixcIk1ZXCIsXCJKb2hvcn4wMXxLZWRhaH4wMnxLZWxhbnRhbn4wM3xNZWxha2F+MDR8TmVnZXJpIFNlbWJpbGFufjA1fFBhaGFuZ34wNnxQZXJha34wOHxQZXJsaXN+MDl8UHVsYXUgUGluYW5nfjA3fFNhYmFofjEyfFNhcmF3YWt+MTN8U2VsYW5nb3J+MTB8VGVyZW5nZ2FudX4xMXxXaWxheWFoIFBlcnNla3V0dWFuIChLdWFsYSBMdW1wdXIpfjE0fFdpbGF5YWggUGVyc2VrdXR1YW4gKExhYnVhbil+MTV8V2lsYXlhaCBQZXJzZWt1dHVhbiAoUHV0cmFqYXlhKX4xNlwiXSxbXCJNYWxkaXZlc1wiLFwiTVZcIixcIkFsaWZ1IEFsaWZ1fjAyfEFsaWZ1IERoYWFsdX4wMHxCYWF+MjB8RGhhYWx1fjE3fEZhYWZ1fjE0fEdhYWZ1IEFsaWZ1fjI3fEdhYWZ1IERoYWFsdX4yOHxHbmF2aXlhbml+Mjl8SGFhIEFsaWZ1fjA3fEhhYSBEaGFhbHV+MjN8S2FhZnV+Mjl8TGFhbXV+MDV8TGhhdml5YW5pfjAzfE1hbMOpfk1MRXxNZWVtdX4xMnxOb29udX4yNXxSYWF+MTN8U2VlbnV+MDF8U2hhdml5YW5pfjI0fFRoYWF+MDh8VmFhdnV+MDRcIl0sW1wiTWFsaVwiLFwiTUxcIixcIkJhbWFrb35CS098R2Fvfjd8S2F5ZXN+MXxLaWRhbH44fEtvdWxpa29yb34yfE1vcHRpfjV8U2Vnb3V+NHxTaWthc3NvfjN8VG9tYm91Y3RvdX42XCJdLFtcIk1hbHRhXCIsXCJNVFwiLFwiQXR0YXJkfjAxfEJhbHphbn4wMnxCaXJndX4wM3xCaXJraXJrYXJhfjA0fEJpcsW8ZWJidcShYX4wNXxCb3JtbGF+MDZ8RGluZ2xpfjA3fEZndXJhfjA4fEZsb3JpYW5hfjA5fEZvbnRhbmF+MTB8R3VkYX4xMXxHxbxpcmF+MTJ8R8SnYWpuc2llbGVtfjEzfEfEp2FyYn4xNHxHxKdhcmfEp3VyfjE1fEfEp2Fzcml+MTZ8R8SnYXhhcX4xN3zEpmFtcnVufjE4fElrbGlufjE5fElzbGF+MjB8S2Fsa2FyYX4yMXxLZXLEi2VtfjIyfEtpcmtvcH4yM3xMaWphfjI0fEx1cWF+MjV8TWFyc2F+MjZ8TWFyc2Fza2FsYX4yN3xNYXJzYXhsb2trfjI4fE1kaW5hfjI5fE1lbGxpZcSnYX4zMHxNxKFhcnJ+MzF8TW9zdGF+MzJ8TXFhYmJhfjMzfE1zaWRhfjM0fE10YXJmYX4zNXxNdW54YXJ+MzZ8TmFkdXJ+Mzd8TmF4eGFyfjM4fFBhb2xhfjM5fFBlbWJyb2tlfjQwfFBpZXTDoH40MXxRYWxhfjQyfFFvcm1pfjQzfFFyZW5kaX40NHxSYWJhdCBHxKdhd2RleH40NXxSYWJhdCBNYWx0YX40NnxTYWZpfjQ3fFNhbiDEoGlsamFufjQ4fFNhbiDEoHdhbm5+NDl8U2FuIExhd3Jlbnp+NTB8U2FuIFBhd2wgaWwtQmHEp2FyfjUxfFNhbm5hdH41MnxTYW50YSBMdcSLaWphfjUzfFNhbnRhIFZlbmVyYX41NHxTacShxKFpZXdpfjU1fFNsaWVtYX41NnxTd2llcWl+NTd8VGFpIFhiaWV4fjU4fFRhcnppZW5+NTl8VmFsbGV0dGF+NjB8WGFnxKdyYX42MXxYZXdraWphfjYyfFhnxKdhanJhfjYzfMW7YWJiYXJ+NjR8xbtlYmJ1xKEgR8SnYXdkZX42NXzFu2ViYnXEoSBNYWx0YX42NnzFu2VqdHVufjY3fMW7dXJyaWVxfjY4XCJdLFtcIk1hcnNoYWxsIElzbGFuZHNcIixcIk1IXCIsXCJBaWxpbmdsYXBsYXB+QUxMfEFpbHVrfkFMS3xBcm5vfkFSTnxBdXJ+QVVSfEJpa2luaSBhbmQgS2lsaX5LSUx8RWJvbn5FQk98SmFiYXR+SkFCfEphbHVpdH5KQUx8S3dhamFsZWlufktXQXxMYWV+TEFFfExpYn5MSUJ8TGlraWVwfkxJS3xNYWp1cm9+TUFKfE1hbG9lbGFwfk1BTHxNZWppdH5NRUp8TmFtZHJpa35OTUt8TmFtdX5OTVV8Um9uZ2VsYXB+Uk9OfFVqYWV+VUpBfFV0cmlrflVUSXxXb3Rob35XVEh8V290amV+V1RKXCJdLFtcIk1hcnRpbmlxdWVcIixcIk1RXCIsXCJNYXJ0aW5pcXVlXCJdLFtcIk1hdXJpdGFuaWFcIixcIk1SXCIsXCJBZHJhcn4wN3xBc3NhYmF+MDN8QnJha25hfjA1fERha2hsZXQgTm91YWRoaWJvdX4wOHxHb3Jnb2x+MDR8R3VpZGltYWthfjEwfEhvZGggRWNoIENoYXJndWl+MDF8SG9kaCBFbCBHaGFyYml+MDJ8SW5jaGlyaX4xMnxOb3Vha2Nob3R0IE5vcmR+MTR8Tm91YWtjaG90dCBPdWVzdH4xM3xOb3Vha2Nob3R0IFN1ZH4xNXxUYWdhbnR+MDl8VGlyaXMgWmVtbW91cn4xMXxUcmFyemF+MDZcIl0sW1wiTWF1cml0aXVzXCIsXCJNVVwiLFwiQWdhbGVnYSBJc2xhbmRzfkFHfEJlYXUgQmFzc2luLVJvc2UgSGlsbH5CUnxCbGFjayBSaXZlcn5CTHxDYXJnYWRvcyBDYXJham9zIFNob2Fsc35DQ3xDdXJlcGlwZX5DVXxGbGFjcX5GTHxHcmFuZCBQb3J0fkdQfE1va2F+TU98UGFtcGxlbW91c3Nlc35QQXxQbGFpbmVzIFdpbGhlbXN+UFd8UG9ydCBMb3VpcyAoQ2l0eSl+UFV8UG9ydCBMb3Vpc35QTHxSaXZpZXJlIGR1IFJlbXBhcnR+UlJ8Um9kcmlndWVzIElzbGFuZH5ST3xTYXZhbm5lflNBfFZhY29hcy1QaG9lbml4fkNQXCJdLFtcIk1heW90dGVcIixcIllUXCIsXCJEemFvdWR6aX4wMXxQYW1hbmR6aX4wMnxNYW1vdWR6b3V+MDN8RGVtYmVuaX4wNHxCYW5kcsOpbMOpfjA1fEthbmktS8OpbGl+MDZ8Qm91w6luaX4wN3xDaGlyb25ndWl+MDh8U2FkYX4wOXxPdWFuZ2FuaX4xMHxDaGljb25pfjExfFRzaW5nb25pfjEyfE0nVHNhbmdhbW91aml+MTN8QWNvdWF+MTR8TXRzYW1ib3JvfjE1fEJhbmRyYWJvdWF+MTZ8S291bmdvdX4xN1wiXSxbXCJNZXhpY29cIixcIk1YXCIsXCJBZ3Vhc2NhbGllbnRlc35BR1V8QmFqYSBDYWxpZm9ybmlhfkJDTnxCYWphIENhbGlmb3JuaWEgU3VyfkJDU3xDYW1wZWNoZX5DQU18Q2l1ZGFkIGRlIE3DqXhpY29+RElGfENoaWFwYXN+Q0hQfENoaWh1YWh1YX5DSEh8Q29haHVpbGEgZGUgWmFyYWdvemF+Q09BfENvbGltYX5DT0x8RHVyYW5nb35EVVJ8RXN0YWRvIGRlIE3DqXhpY29+TUVYfEd1YW5hanVhdG9+R1VBfEd1ZXJyZXJvfkdST3xIaWRhbGdvfkhJRHxKYWxpc2NvfkpBTHxNaWNob2Fjw6FuIGRlIE9jYW1wb35NSUN8TW9yZWxvc35NT1J8TmF5YXJpdH5OQVl8TnVldm8gTGXDs25+TkxFfE9heGFjYX5PQVh8UHVlYmxhflBVRXxRdWVyw6l0YXJvIGRlIEFydGVhZ2F+UVVFfFF1aW50YW5hIFJvb35ST098U2FuIEx1aXMgUG90b3PDrX5TTFB8U2luYWxvYX5TSU58U29ub3JhflNPTnxUYWJhc2NvflRBQnxUYW1hdWxpcGFzflRBTXxUbGF4Y2FsYX5UTEF8VmVyYWNydXp+VkVSfFl1Y2F0w6FufllVQ3xaYWNhdGVjYXN+WkFDXCJdLFtcIk1pY3JvbmVzaWEsIEZlZGVyYXRlZCBTdGF0ZXMgb2ZcIixcIkZNXCIsXCJDaHV1ayAoVHJ1ayl+VFJLfEtvc3JhZX5LU0F8UG9obnBlaX5QTkl8WWFwfllBUFwiXSxbXCJNb2xkb3ZhXCIsXCJNRFwiLFwiQWVuaWkgTm9pfkFOfEJhc2FyYWJlYXNjYX5CU3xCxINsyJtpfkJBfEJlbmRlcn5CRHxCcmljZW5pfkJSfENhaHVsfkNBfENhbnRlbWlyfkNUfEPEg2zEg3JhyJlpfkNMfEPEg3XImWVuaX5DU3xDaGnImWluxIN1fkNVfENpbWnImWxpYX5DTXxDcml1bGVuaX5DUnxEb25kdciZZW5pfkRPfERyb2NoaWF+RFJ8RHVixINzYXJpfkRVfEVkaW5lyJt+RUR8RsSDbGXImXRpfkZBfEZsb3JlyJl0aX5GTHxHxINnxIN1emlhfkdBfEdsb2Rlbml+R0x8SMOubmNlyJl0aX5ISXxJYWxvdmVuaX5JQXxMZW92YX5MRXxOaXNwb3Jlbml+Tkl8T2NuacibYX5PQ3xPcmhlaX5PUnxSZXppbmF+UkV8UsOuyJljYW5pflJJfFPDrm5nZXJlaX5TSXxTb3JvY2F+U098U3TDrm5nYSBOaXN0cnVsdWl+U058U3RyxIPImWVuaX5TVHzImG9sZMSDbmXImXRpflNEfMiYdGVmYW4gVm9kxIN+U1Z8VGFyYWNsaWF+VEF8VGVsZW5lyJl0aX5URXxVbmdoZW5pflVOXCJdLFtcIk1vbmFjb1wiLFwiTUNcIixcIkNvbGxlfkNMfENvbmRhbWluZX5DT3xGb250dmllaWxsZX5GT3xHYXJlfkdBfEphcmRpbiBFeG90aXF1ZX5KRXxMYXJ2b3R0b35MQXxNYWxib3VzcXVldH5NQXxNb25hY28tVmlsbGV+TU98TW9uZWdoZXR0aX5NR3xNb250ZS1DYXJsb35NQ3xNb3VsaW5zfk1VfFBvcnQtSGVyY3VsZX5QSHxTYWludC1Sb21hbn5TUnxTYWludGUtRMOpdm90ZX5TRHxTb3VyY2V+U098U3DDqWx1Z3Vlc35TUHxWYWxsb24gZGUgbGEgUm91c3NlflZSXCJdLFtcIk1vbmdvbGlhXCIsXCJNTlwiLFwiQXJoYW5nYXl+MDczfEJheWFuLU9sZ2l5fjA3MXxCYXlhbmhvbmdvcn4wNjl8QnVsZ2FufjA2N3xEYXJoYW5+MDM3fERvcm5vZH4wNjF8RG9ybm9nb3ZpfjA2M3xEdW5kZ292aX4wNTl8RHphdmhhbn4wNjV8R292aS1BbHRheX4wNjV8R292aS1TdW1iZXJ+MDY0fEhvdmR+MDQzfEhvdnNnb2x+MDQxfE9tbm9nb3ZpfjA1M3xPdm9yaGFuZ2F5fjA1NXxTZWxlbmdlfjA0OXxTdWhiYWF0YXJ+MDUxfFRvdn4wNDd8VWxhYW5iYWF0YXJ+MXxVdnN+MDQ2XCJdLFtcIk1vbnRlbmVncm9cIixcIk1FXCIsXCJBbmRyaWpldmljYX4wMXxCYXJ+MDJ8QmVyYW5lfjAzfEJpamVsbyBQb2xqZX4wNHxCdWR2YX4wNXxDZXRpbmplfjA2fERhbmlsb3ZncmFkfjA3fEd1c2luamV+MjJ8SGVyY2VnIE5vdml+MDh8S29sYcWhaW5+MDl8S290b3J+MTB8TW9qa292YWN+MTF8TmlrxaFpxId+MTJ8UGV0bmljYX4yM3xQbGF2fjEzfFBsdcW+aW5lfjE0fFBsamV2bGphfjE1fFBvZGdvcmljYX4xNnxSb8W+YWplfjE3fMWgYXZuaWt+MTh8VGl2YXR+MTl8VWxjaW5qfjIwfMW9YWJsamFrfjIxXCJdLFtcIk1vbnRzZXJyYXRcIixcIk1TXCIsXCJTYWludCBBbnRob255fFNhaW50IEdlb3JnZXN8U2FpbnQgUGV0ZXInc1wiXSxbXCJNb3JvY2NvXCIsXCJNQVwiLFwiQ2hhb3VpYS1PdWFyZGlnaGF+MDl8RG91a2hhbGEtQWJkYX4xMHxGw6hzLUJvdWxlbWFuZX4wNXxHaGFyYi1DaHJhcmRhLUJlbmkgSHNzZW5+MDJ8R3JhbmQgQ2FzYWJsYW5jYX4wOHxHdWVsbWltLUVzIFNlbWFyYX4xNHxMYcOieW91bmUtQm91amRvdXItU2FraWEgZWwgSGFtcmF+MTV8TWFycmFrZWNoLVRlbnNpZnQtQWwgSGFvdXp+MTF8TWVrbsOocy1UYWZpbGFsZXR+MDZ8T3JpZW50YWx+MDR8T3VlZCBlZCBEYWhhYi1MYWdvdWlyYX4xNnxTb3Vzcy1NYXNzYS1EcsOiYX4xM3xUYWRsYS1BemlsYWx+MTJ8VGFuZ2VyLVTDqXRvdWFufjAxfFRhemEtQWwgSG9jZWltYS1UYW91bmF0ZX4wM1wiXSxbXCJNb3phbWJpcXVlXCIsXCJNWlwiLFwiQ2FibyBEZWxnYWRvflB8R2F6YX5HfEluaGFtYmFuZX5JfE1hbmljYX5CfE1hcHV0b35MfE1hcHV0byAoQ2l0eSl+TVBNfE5hbXB1bGF+TnxOaWFzc2F+QXxTb2ZhbGF+U3xUZXRlflR8WmFtYmV6aWF+UVwiXSxbXCJNeWFubWFyXCIsXCJNTVwiLFwiQXlleWFyd2FkeX4wN3xCYWdvfjAyfENoaW5+MTR8S2FjaGlufjExfEtheWFofjEyfEtheWlufjEzfE1hZ3dheX4wM3xNYW5kYWxheX4wNHxNb25+MTV8TmF5IFB5aSBUYXd+MTh8UmFraGluZX4xNnxTYWdhaW5nfjAxfFNoYW5+MTd8VGFuaW50aGFyeWl+MDV8WWFuZ29ufjA2XCJdLFtcIk5hbWliaWFcIixcIk5BXCIsXCJFcm9uZ29+RVJ8SGFyZGFwfkhBfEthdmFuZ28gRWFzdH5LRXxLYXZhbmdvIFdlc3R+S1d8S2FyYXN+S0F8S2hvbWFzfktIfEt1bmVuZX5LVXxPaGFuZ3dlbmF+T1d8T21haGVrZX5PSHxPbXVzYXRpfk9TfE9zaGFuYX5PTnxPc2hpa290b35PVHxPdGpvem9uZGp1cGF+T0R8WmFtYmV6aX5DQVwiXSxbXCJOYXVydVwiLFwiTlJcIixcIkFpd29+MDF8QW5hYmFyfjAyfEFuZXRhbn4wM3xBbmliYXJlfjA0fEJhaXRpfjA1fEJvZX4wNnxCdWFkYX4wN3xEZW5pZ29tb2R1fjA4fEV3YX4wOXxJanV3fjEwfE1lbmVuZ34xMXxOaWJva34xMnxVYWJvZX4xM3xZYXJlbn4xNFwiXSxbXCJOZXBhbFwiLFwiTlBcIixcIkJhZ21hdGl+QkF8Qmhlcml+Qkh8RGhhd2FsYWdpcml+REh8R2FuZGFraX5HQXxKYW5ha3B1cn5KQXxLYXJuYWxpfktBfEtvc2l+S098THVtYmluaX5MVXxNYWhha2FsaX5NQXxNZWNoaX5NRXxOYXJheWFuaX5OQXxSYXB0aX5SQXxTYWdhcm1hdGhhflNBfFNldGl+U0VcIl0sW1wiTmV0aGVybGFuZHNcIixcIk5MXCIsXCJEcmVudGhlfkRSfEZsZXZvbGFuZH5GTHxGcmllc2xhbmR+RlJ8R2VsZGVybGFuZH5HRXxHcm9uaW5nZW5+R1J8TGltYnVyZ35MSXxOb29yZC1CcmFiYW50fk5CfE5vb3JkLUhvbGxhbmR+Tkh8T3Zlcmlqc3NlbH5PVnxVdHJlY2h0flVUfFplZWxhbmR+WkV8WnVpZC1Ib2xsYW5kflpIXCJdLFtcIk5ldyBDYWxlZG9uaWFcIixcIk5DXCIsXCJJbGVzIExveWF1dGV8Tm9yZHxTdWRcIl0sW1wiTmV3IFplYWxhbmRcIixcIk5aXCIsXCJBdWNrbGFuZH5BVUt8QmF5IG9mIFBsZW50eX5CT1B8Q2FudGVyYnVyeX5DQU58R2lzYm9ybmV+R0lTfEhhd2tlJ3MgQmF5fkhLQnxNYXJsYm9yb3VnaH5NQkh8TWFuYXdhdHUtV2FuZ2FudWl+TVdUfE5vcnRobGFuZH5OVEx8TmVsc29ufk5TTnxPdGFnb35PVEF8U291dGhsYW5kflNUTHxUYXJhbmFraX5US0l8VGFzbWFuflRBU3xXYWlrYXRvfldLT3xXZWxsaW5ndG9ufldHTnxXZXN0IENvYXN0fldUQ3xDaGF0aGFtIElzbGFuZHMgVGVycml0b3J5fkNJVFwiXSxbXCJOaWNhcmFndWFcIixcIk5JXCIsXCJCb2Fjb35CT3xDYXJhem9+Q0F8Q2hpbmFuZGVnYX5DSXxDaG9udGFsZXN+Q098RXN0ZWzDrX5FU3xHcmFuYWRhfkdSfEppbm90ZWdhfkpJfExlw7NufkxFfE1hZHJpen5NRHxNYW5hZ3Vhfk1OfE1hc2F5YX5NU3xNYXRhZ2FscGF+TVR8TnVldmEgU2Vnb3ZpYX5OU3xSw61vIFNhbiBKdWFuflNKfFJpdmFzflJJfEF0bMOhbnRpY28gTm9ydGV+QU58QXRsw6FudGljbyBTdXJ+QVNcIl0sW1wiTmlnZXJcIixcIk5FXCIsXCJBZ2FkZXp+MXxEaWZmYX4yfERvc3NvfjN8TWFyYWRpfjR8TmlhbWV5fjh8VGFob3VhfjV8VGlsbGFiw6lyaX42fFppbmRlcn43XCJdLFtcIk5pZ2VyaWFcIixcIk5HXCIsXCJBYmlhfkFCfEFidWphIEZlZGVyYWwgQ2FwaXRhbCBUZXJyaXRvcnl+RkN8QWRhbWF3YX5BRHxBa3dhIElib21+QUt8QW5hbWJyYX5BTnxCYXVjaGl+QkF8QmF5ZWxzYX5CWXxCZW51ZX5CRXxCb3Jub35CT3xDcm9zcyBSaXZlcn5DUnxEZWx0YX5ERXxFYm9ueWl+RUJ8RWRvfkVEfEVraXRpfkVLfEVudWd1fkVOfEdvbWJlfkdPfEltb35JTXxKaWdhd2F+Skl8S2FkdW5hfktEfEthbm9+S058S2F0c2luYX5LVHxLZWJiaX5LRXxLb2dpfktPfEt3YXJhfktXfExhZ29zfkxBfE5hc3NhcmF3YX5OQXxOaWdlcn5OSXxPZ3Vufk9HfE9uZG9+T058T3N1bn5PU3xPeW9+T1l8UGxhdGVhdX5QTHxSaXZlcnN+Ukl8U29rb3RvflNPfFRhcmFiYX5UQXxZb2JlfllPfFphbWZhcmF+WkFcIl0sW1wiTml1ZVwiLFwiTlVcIixcIk5pdWVcIl0sW1wiTm9yZm9sayBJc2xhbmRcIixcIk5GXCIsXCJOb3Jmb2xrIElzbGFuZFwiXSxbXCJOb3J0aGVybiBNYXJpYW5hIElzbGFuZHNcIixcIk1QXCIsXCJOb3J0aGVybiBJc2xhbmRzfFJvdGF8U2FpcGFufFRpbmlhblwiXSxbXCJOb3J3YXlcIixcIk5PXCIsXCJBa2Vyc2h1c34wMnxBdXN0LUFnZGVyfjA5fEJ1c2tlcnVkfjA2fEZpbm5tYXJrfjIwfEhlZG1hcmt+MDR8SG9yZGFsYW5kfjEyfE3DuHJlIG9nIFJvbXNkYWx+MTV8Tm9yZGxhbmR+MTh8Tm9yZC1UcsO4bmRlbGFnfjE3fE9wcGxhbmR+MDV8T3Nsb34wM3xSb2dhbGFuZH4xMXxTb2duIG9nIEZqb3JkYW5lfjE0fFPDuHItVHLDuG5kZWxhZ34xNnxUZWxlbWFya34wOHxUcm9tc34xOXxWZXN0LUFnZGVyfjEwfFZlc3Rmb2xkfjA3fMOYc3Rmb2xkfjAxfEphbiBNYXllbn4yMnxTdmFsYmFyZH4yMVwiXSxbXCJPbWFuXCIsXCJPTVwiLFwiQWQgRGFraGlsaXlhaH5EQXxBbCBCdXJheW1pfkJVfEFsIFd1c3RhfldVfEF6IFphaGlyYWh+WkF8SmFudWIgYWwgQmF0aW5haH5CU3xKYW51YiBhc2ggU2hhcnFpeWFoflNTfE1hc3FhdH5NQXxNdXNhbmRhbX5NVXxTaGFtYWwgYWwgQmF0aW5haH5CSnxTaGFtYWwgYXNoIFNoYXJxaXlhaH5TSnxadWZhcn5aVVwiXSxbXCJQYWtpc3RhblwiLFwiUEtcIixcIsSAesSBZCBLYXNobcSrcn5KS3xCYWzFjWNoaXN0xIFufkJBfEdpbGdpdC1CYWx0aXN0xIFufkdCfElzbMSBbcSBYsSBZH5JU3xLaGHEq2JhciBQYWtodMWrbmtod8SBc35LUHxQdW5qxIFiflBCfFNpbmRoflNEfEZlZGVyYWxseSBBZG1pbmlzdGVyZWQgVHJpYmFsIEFyZWFzflRBXCJdLFtcIlBhbGF1XCIsXCJQV1wiLFwiQWltZWxpaWt+MDAyfEFpcmFpfjAwNHxBbmdhdXJ+MDEwfEhhdG9ib2hlaX4wNTB8S2F5YW5nZWx+MTAwfEtvcm9yfjE1MHxNZWxla2Vva34yMTJ8TmdhcmFhcmR+MjE0fE5nYXJjaGVsb25nfjIxOHxOZ2FyZG1hdX4yMjJ8TmdhdHBhbmd+MjI0fE5nY2hlc2FyfjIyNnxOZ2VyZW1sZW5ndWl+MjI3fE5naXdhbH4yMjh8UGVsZWxpdX4zNTB8U29uc29yYWx+MzUwXCJdLFtcIlBhbGVzdGluZSwgU3RhdGUgb2ZcIixcIlBTXCIsXCJBayBLaGFsxKtsfkhCTnxBbCBRdWRzfkpFTXxBcsSr4bipxIEgd2FsIEFnaHfEgXJ+SlJIfEJheXQgTGHhuKltfkJUSHxEYXlyIGFsIEJhbGHhuKl+REVCfEdoYXp6YWh+R1pBfEphbsSrbn5KRU58S2jEgW4gWcWrbmlzfktZU3xOxIFibHVzfk5CU3xRYWxxxKt5YWh+UVFBfFJhZmHhuKl+UkZIfFLEgW0gQWxsxIFoIHdhbCBCxKtyYWh+UkJIfFNhbGbEq3R+U0xUfFNoYW3EgWwgR2hhenphaH5OR1p8xaLFq2LEgXN+VEJTfMWixatsa2FybX5US01cIl0sW1wiUGFuYW1hXCIsXCJQQVwiLFwiQm9jYXMgZGVsIFRvcm9+MXxDaGlyaXF1w61+NHxDb2Nsw6l+MnxDb2zDs25+M3xEYXJpw6lufjV8RW1iZXLDoX5FTXxIZXJyZXJhfjZ8S3VuYSBZYWxhfktZfExvcyBTYW50b3N+N3xOZ8OkYmUtQnVnbMOpfk5CfFBhbmFtw6F+OHxQYW5hbcOhIE9lc3RlfjEwfFZlcmFndWFzfjlcIl0sW1wiUGFwdWEgTmV3IEd1aW5lYVwiLFwiUEdcIixcIkJvdWdhaW52aWxsZX5OU0J8Q2VudHJhbH5DUE18Q2hpbWJ1fkNQS3xFYXN0IE5ldyBCcml0YWlufkVCUnxFYXN0IFNlcGlrfkVTV3xFYXN0ZXJuIEhpZ2hsYW5kc35FSEd8RW5nYX5FUFd8R3VsZn5HUEt8SGVsYX5ITEF8Sml3YWthfkpXS3xNYWRhbmd+TU9NfE1hbnVzfk1STHxNaWxuZSBCYXl+TUJBfE1vcm9iZX5NUEx8UG9ydCBNb3Jlc2J5fk5DRHxOZXcgSXJlbGFuZH5OSUt8Tm9ydGhlcm5+TlBQfFNvdXRoZXJuIEhpZ2hsYW5kc35TSE18V2VzdCBOZXcgQnJpdGFpbn5XQkt8V2VzdCBTZXBpa35TQU58V2VzdGVybn5XUER8V2VzdGVybiBIaWdobGFuZHN+V0hNXCJdLFtcIlBhcmFndWF5XCIsXCJQWVwiLFwiQWx0byBQYXJhZ3VheX4xNnxBbHRvIFBhcmFuYX4xMHxBbWFtYmF5fjEzfEFzdW5jaW9ufkFTVXxDYWFndWF6dX41fENhYXphcGF+NnxDYW5pbmRleXV+MTR8Q2VudHJhbH4xMXxDb25jZXBjaW9ufjF8Q29yZGlsbGVyYX4zfEd1YWlyYX40fEl0YXB1YX43fE1pc2lvbmVzfjh8TmVlbWJ1Y3V+MTJ8UGFyYWd1YXJpfjl8UHJlc2lkZW50ZSBIYXllc34xNXxTYW4gUGVkcm9+MlwiXSxbXCJQZXJ1XCIsXCJQRVwiLFwiQW1hem9uYXN+QU1BfEFuY2FzaH5BTkN8QXB1cmltYWN+QVBVfEFyZXF1aXBhfkFSRXxBeWFjdWNob35BWUF8Q2FqYW1hcmNhfkNBSnxDYWxsYW9+Q0FMfEN1c2NvfkNVU3xIdWFuY2F2ZWxpY2F+SFVWfEh1YW51Y29+SFVDfEljYX5JQ0F8SnVuaW5+SlVOfExhIExpYmVydGFkfkxBTHxMYW1iYXllcXVlfkxBTXxMaW1hfkxJTXxMb3JldG9+TE9SfE1hZHJlIGRlIERpb3N+TUREfE1vcXVlZ3Vhfk1PUXxNdW5pY2lwYWxpZGFkIE1ldHJvcG9saXRhbmEgZGUgTGltYX5MTUF8UGFzY29+UEFTfFBpdXJhflBJVXxQdW5vflBVTnxTYW4gTWFydGluflNBTXxUYWNuYX5UQUN8VHVtYmVzflRVTXxVY2F5YWxpflVDQVwiXSxbXCJQaGlsaXBwaW5lc1wiLFwiUEhcIixcIkFicmF+QUJSfEFndXNhbiBkZWwgTm9ydGV+QUdOfEFndXNhbiBkZWwgU3VyfkFHU3xBa2xhbn5BS0x8QWxiYXl+QUxCfEFudGlxdWV+QU5UfEFwYXlhb35BUEF8QXVyb3JhfkFVUnxCYXNpbGFufkJBU3xCYXRhYW5+QkFOfEJhdGFuZXN+QlROfEJhdGFuZ2FzfkJUR3xCZW5ndWV0fkJFTnxCaWxpcmFufkJJTHxCb2hvbH5CT0h8QnVraWRub25+QlVLfEJ1bGFjYW5+QlVMfENhZ2F5YW5+Q0FHfENhbWFyaW5lcyBOb3J0ZX5DQU58Q2FtYXJpbmVzIFN1cn5DQVN8Q2FtaWd1aW5+Q0FNfENhcGl6fkNBUHxDYXRhbmR1YW5lc35DQVR8Q2F2aXRlfkNBVnxDZWJ1fkNFQnxDb21wb3N0ZWxhfkNPTXxDb3RhYmF0b35OQ098RGF2YW8gZGVsIE5vcnRlfkRBVnxEYXZhbyBkZWwgU3VyfkRBU3xEYXZhbyBPY2NpZGVudGFsfkRWT3xEYXZhbyBPcmllbnRhbH5EQU98RGluYWdhdCBJc2xhbmRzfkRJTnxFYXN0ZXJuIFNhbWFyfkVBU3xHdWltYXJhc35HVUl8SWZ1Z2FvfklGVXxJbG9jb3MgTm9ydGV+SUxOfElsb2NvcyBTdXJ+SUxTfElsb2lsb35JTEl8SXNhYmVsYX5JU0F8S2FsaW5nYX5LQUx8TGEgVW5pb25+TFVOfExhZ3VuYX5MQUd8TGFuYW8gZGVsIE5vcnRlfkxBTnxMYW5hbyBkZWwgU3VyfkxBU3xMZXl0ZX5MRVl8TWFndWluZGFuYW9+TUFHfE1hc2JhdGV+TUFTfE1ldHJvIE1hbmlsYX4wMHxNaW5kb3JvIE9jY2lkZW50YWx+TURDfE1pbmRvcm8gT3JpZW50YWx+TURSfE1pc2FtaXMgT2NjaWRlbnRhbH5NU0N8TWlzYW1pcyBPcmllbnRhbH5NU1J8TW91bnRhaW4gUHJvdmluY2V+TU9VfE5lZ3JvcyBPY2NpZGVudGFsfk5FQ3xOZWdyb3MgT3JpZW50YWx+TkVSfE5vcnRoZXJuIFNhbWFyfk5TQXxOdWV2YSBFY2lqYX5OVUV8TnVldmEgVml6Y2F5YX5OVVZ8UGFsYXdhbn5QTFd8UGFtcGFuZ2F+UEFNfFBhbmdhc2luYW5+UEFOfFF1ZXpvbn5RVUV8UXVpcmlub35RVUl8Uml6YWx+UklafFJvbWJsb25+Uk9NfFNhbWFyfldTQXxTYXJhbmdhbml+U0FSfFNpcXVpam9yflNJR3xTb3Jzb2dvbn5TT1J8U291dGhlcm4gTGV5dGV+U0xFfFN1bHRhbiBLdWRhcmF0fkFVS3xTdWx1flNMVXxTdXJpZ2FvIGRlbCBOb3J0ZX5TVU58U3VyaWdhbyBkZWwgU3VyflNVUnxUYXJsYWN+VEFSfFRhd2ktVGF3aX5UQVd8WmFtYmFsZXN+Wk1CfFphbWJvYW5nYSBkZWwgTm9ydGV+WkFOfFphbWJvYW5nYSBkZWwgU3VyflpBU3xaYW1ib2FuZ2EgU2lidWdheX5aU0lcIl0sW1wiUGl0Y2Fpcm5cIixcIlBOXCIsXCJQaXRjYWlybiBJc2xhbmRzXCJdLFtcIlBvbGFuZFwiLFwiUExcIixcIkRvbG5vxZtsxIVza2llfkRTfEt1amF3c2tvLXBvbW9yc2tpZX5LUHzFgcOzZHpraWV+TER8THViZWxza2llfkxVfEx1YnVza2llfkxCfE1hbG9wb2xza2llfk1BfE1hem93aWVja2llfk1afE9wb2xza2llfk9QfFBvZGthcnBhY2tpZX5QS3xQb2RsYXNraWV+UER8UG9tb3Jza2llflBNfMWabMSFc2tpZX5TTHzFmndpxJl0b2tyenlza2llflNLfFdhcm1pxYRza28tbWF6dXJza2llfldOfFdpZWxrb3BvbHNraWV+V1B8WmFjaG9kbmlvcG9tb3Jza2llflpQXCJdLFtcIlBvcnR1Z2FsXCIsXCJQVFwiLFwiQWNvcmVzfjIwfEF2ZWlyb34wMXxCZWphfjAyfEJyYWdhfjAzfEJyYWdhbmNhfjA0fENhc3RlbG8gQnJhbmNvfjA1fENvaW1icmF+MDZ8RXZvcmF+MDd8RmFyb34wOHxHdWFyZGF+MDl8TGVpcmlhfjEwfExpc2JvYX4xMXxNYWRlaXJhfjMwfFBvcnRhbGVncmV+MTJ8UG9ydG9+MTN8U2FudGFyZW1+MTR8U2V0dWJhbH4xNXxWaWFuYSBkbyBDYXN0ZWxvfjE2fFZpbGEgUmVhbH4xN3xWaXNldX4xOFwiXSxbXCJQdWVydG8gUmljb1wiLFwiUFJcIixcIkFkanVudGFzfEFndWFkYXxBZ3VhZGlsbGF8QWd1YXMgQnVlbmFzfEFpYm9uaXRvfEFuYXNjb3xBcmVjaWJvfEFycm95b3xCYXJjZWxvbmV0YXxCYXJyYW5xdWl0YXN8QmF5YW1vbnxDYWJvIFJvam98Q2FndWFzfENhbXV5fENhbm92YW5hc3xDYXJvbGluYXxDYXR8Q2VpYmF8Q2lhbGVzfENpZHJhfENvYW1vfENvbWVyaW98Q29yb3phbHxDdWxlYnJhfERvcmFkb3xGYWphcmRvfEZsb3JpZGF8R3VhbmljYXxHdWF5YW1hfEd1YXlhbmlsbGF8R3VheW5hYm98R3VyYWJvfEhhdGlsbG98SG9ybWlndWVyb3N8SHVtYWNhb3xJc2FiZXxKdWFuYSBEaWF6fEp1bmNvc3xMYWphc3xMYXJlc3xMYXMgTWFyaWFzfExhcyBvaXphfEx1cXVpbGxvfE1hbmF0aXxNYXJpY2FvfE1hdW5hYm98TWF5YWd1ZXp8TW9jYXxNb3JvdmlzfE5hZ3VhYm98TmFyYW5qaXRvfE9yb2NvdmlzfFBhdGlsbGFzfFBlbnVlbGFzfFBvbmNlfFF1ZWJyYWRpbGxhc3xSaW5jb258UmlvIEdyYW5kZXxTYWJhbmEgbGluYXN8U2FuIEdlcm1hbnxTYW4gSnVhbnxTYW4gTG9yZW56b3xTYW4gU2ViYXN0aWFufFNhbnRhIElzYWJlbHxUb2EgQWx0YXxUb2EgQmFqYXxUcnVqaWxsbyBBbHRvfFV0dWFkb3xWZWdhIEFsdGF8VmVnYSB1ZXN8VmlsbGFsYmF8WWFidWNvYXxZYXVjb1wiXSxbXCJRYXRhclwiLFwiUUFcIixcIkFkIERhd+G4qWFofkRBfEFsIEtoYXdyIHdhIGFkaCBEaGFraMSrcmFofktIfEFsIFdha3JhaH5XQXxBciBSYXl5xIFuflJBfEFzaCBTaGFtxIFsfk1TfEF6zKcgWmHMp2DEgXlpbn5aQXxVbW0gxZ5hbMSBbH5VU1wiXSxbXCJSw6l1bmlvblwiLFwiUkVcIixcIlLDqXVuaW9uXCJdLFtcIlJvbWFuaWFcIixcIlJPXCIsXCJBbGJhfkFCfEFyYWR+QVJ8QXJnZXN+QUd8QmFjYXV+QkN8Qmlob3J+Qkh8QmlzdHJpdGEtTmFzYXVkfkJOfEJvdG9zYW5pfkJUfEJyYWlsYX5CUnxCcmFzb3Z+QlZ8QnVjdXJlc3RpfkJ8QnV6YXV+Qlp8Q2FsYXJhc2l+Q0x8Q2FyYXMtU2V2ZXJpbn5DU3xDbHVqfkNKfENvbnN0YW50YX5DVHxDb3Zhc25hfkNWfERhbWJvdml0YX5EQnxEb2xqfkRKfEdhbGF0aX5HTHxHaXVyZ2l1fkdSfEdvcmp+R0p8SGFyZ2hpdGF+SFJ8SHVuZWRvYXJhfkhEfElhbG9taXRhfklMfElhc2l+SVN8TWFyYW11cmVzfk1NfE1laGVkaW50aX5NSHxNdXJlc35NU3xOZWFtdH5OVHxPbHR+T1R8UHJhaG92YX5QSHxTYWxhan5TSnxTYXR1IE1hcmV+U018U2liaXV+U0J8U3VjZWF2YX5TVnxUZWxlb3JtYW5+VFJ8VGltaXN+VE18VHVsY2VhflRMfFZhbGNlYX5WTHxWYXNsdWl+VlN8VnJhbmNlYX5WTlwiXSxbXCJSdXNzaWFuIEZlZGVyYXRpb25cIixcIlJVXCIsXCJSZXB1YmxpYyBvZiBBZHlnZWF+QUR8UmVwdWJsaWMgb2YgQWx0YWkgKEdvcm5vLUFsdGF5c2spfkFMfEFsdGFpIEtyYWl+QUxUfEFtdXIgT2JsYXN0fkFNVXxBcmtoYW5nZWxzayBPYmxhc3R+QVJLfEFzdHJha2hhbiBPYmxhc3R+QVNUfFJlcHVibGljIG9mIEJhc2hrb3J0b3N0YW5+QkF8QmVsZ29yb2QgT2JsYXN0fkJFTHxCcnlhbnNrIE9ibGFzdH5CUll8UmVwdWJsaWMgb2YgQnVyeWF0aWF+QlV8Q2hlY2hlbiBSZXB1YmxpY35DRXxDaGVseWFiaW5zayBPYmxhc3R+Q0hFfENodWtvdGthIEF1dG9ub21vdXMgT2tydWd+Q0hVfENodXZhc2ggUmVwdWJsaWN+Q1V8UmVwdWJsaWMgb2YgRGFnZXN0YW5+REF8UmVwdWJsaWMgb2YgSW5ndXNoZXRpYX5JTnxJcmt1dHNrIE9ibGFzdH5JUkt8SXZhbm92byBPYmxhc3R+SVZBfEpld2lzaCBBdXRvbm9tb3VzIE9ibGFzdH5KRVd8S2FiYXJkaW5vLUJhbGthciBSZXB1YmxpY35LQnxLYWxpbmluZ3JhZCBPYmxhc3R+S0xOfFJlcHVibGljIG9mIEthbG15a2lhfktMfEthbHVnYSBPYmxhc3R+S0xVfEthbWNoYXRrYSBLcmFpfktBTXxLYXJhY2hheS1DaGVya2VzcyBSZXB1YmxpY35LQ3xSZXB1YmxpYyBvZiBLYXJlbGlhfktSfEtoYWJhcm92c2sgS3JhaX5LSEF8UmVwdWJsaWMgb2YgS2hha2Fzc2lhfktLfEtoYW50eS1NYW5zaSBBdXRvbm9tb3VzIE9rcnVnIC0gWXVncmF+S0hNfEtlbWVyb3ZvIE9ibGFzdH5LRU18S2lyb3YgT2JsYXN0fktJUnxLb21pIFJlcHVibGljfktPfEtvc3Ryb21hIE9ibGFzdH5LT1N8S3Jhc25vZGFyIEtyYWl+S0RBfEtyYXNub3lhcnNrIEtyYWl+S1lBfEt1cmdhbiBPYmxhc3R+S0dOfEt1cnNrIE9ibGFzdH5LUlN8TGVuaW5ncmFkIE9ibGFzdH5MRU58TGlwZXRzayBPYmxhc3R+TElQfE1hZ2FkYW4gT2JsYXN0fk1BR3xNYXJpIEVsIFJlcHVibGljfk1FfFJlcHVibGljIG9mIE1vcmRvdmlhfk1PfE1vc2NvdyBPYmxhc3R+TU9TfE1vc2Nvd35NT1d8TXVybWFuc2sgT2JsYXN0fk1VfE5lbmV0cyBBdXRvbm9tb3VzIE9rcnVnfk5FTnxOaXpobnkgTm92Z29yb2QgT2JsYXN0fk5JWnxOb3Znb3JvZCBPYmxhc3R+TkdSfE5vdm9zaWJpcnNrIE9ibGFzdH5OVlN8T21zayBPYmxhc3R+T01TfE9yZW5idXJnIE9ibGFzdH5PUkV8T3J5b2wgT2JsYXN0fk9STHxQZW56YSBPYmxhc3R+UE5afFBlcm0gS3JhaX5QRVJ8UHJpbW9yc2t5IEtyYWl+UFJJfFBza292IE9ibGFzdH5QU0t8Um9zdG92IE9ibGFzdH5ST1N8UnlhemFuIE9ibGFzdH5SWUF8U2FpbnQgUGV0ZXJzYnVyZ35TUEV8U2FraGEgKFlha3V0aWEpIFJlcHVibGljflNBfFNha2hhbGluIE9ibGFzdH5TQUt8U2FtYXJhIE9ibGFzdH5TQU18U2FyYXRvdiBPYmxhc3R+U0FSfFJlcHVibGljIG9mIE5vcnRoIE9zc2V0aWEtQWxhbmlhfk5PQXxTbW9sZW5zayBPYmxhc3R+U01PfFN0YXZyb3BvbCBLcmFpflNUQXxTdmVyZGxvdnNrIE9ibGFzdH5TVkV8VGFtYm92IE9ibGFzdH5UQU18UmVwdWJsaWMgb2YgVGF0YXJzdGFuflRBfFRvbXNrIE9ibGFzdH5UT018VHV2YSBSZXB1YmxpY35UVXxUdWxhIE9ibGFzdH5UVUx8VHZlciBPYmxhc3R+VFZFfFR5dW1lbiBPYmxhc3R+VFlVfFVkbXVydCBSZXB1YmxpY35VRHxVbHlhbm92c2sgT2JsYXN0flVMWXxWbGFkaW1pciBPYmxhc3R+VkxBfFZvbGdvZ3JhZCBPYmxhc3R+VkdHfFZvbG9nZGEgT2JsYXN0flZMR3xWb3JvbmV6aCBPYmxhc3R+Vk9SfFlhbWFsby1OZW5ldHMgQXV0b25vbW91cyBPa3J1Z35ZQU58WWFyb3NsYXZsIE9ibGFzdH5ZQVJ8WmFiYXlrYWxza3kgS3JhaX5aQUJcIl0sW1wiUndhbmRhXCIsXCJSV1wiLFwiS2lnYWxpfjAxfEVhc3Rlcm5+MDJ8Tm9ydGhlcm5+MDN8V2VzdGVybn4wNHxTb3V0aGVybn4wNVwiXSxbXCJTYWludCBCYXJ0aMOpbGVteVwiLFwiQkxcIixcIkF1IFZlbnR+MDJ8U291cyBsZSBWZW50fjAxXCJdLFtcIlNhaW50IEhlbGVuYSwgQXNjZW5zaW9uIGFuZCBUcmlzdGFuIGRhIEN1bmhhXCIsXCJTSFwiLFwiQXNjZW5zaW9ufkFDfFNhaW50IEhlbGVuYX5ITHxUcmlzdGFuIGRhIEN1bmhhflRBXCJdLFtcIlNhaW50IEtpdHRzIGFuZCBOZXZpc1wiLFwiS05cIixcIlNhaW50IEtpdHRzfkt8TmV2aXN+TlwiXSxbXCJTYWludCBMdWNpYVwiLFwiTENcIixcIkFuc2UtbGEtUmF5ZX4wMXxDYW5hcmllc34xMnxDYXN0cmllc34wMnxDaG9pc2V1bH4wM3xEZW5uZXJ5fjA1fEdyb3MgSXNsZXR+MDZ8TGFib3JpZX4wN3xNaWNvdWR+MDh8U291ZnJpZXJlfjEwfFZpZXV4IEZvcnR+MTFcIl0sW1wiU2FpbnQgTWFydGluXCIsXCJNRlwiLFwiU2FpbnQgTWFydGluXCJdLFtcIlNhaW50IFBpZXJyZSBhbmQgTWlxdWVsb25cIixcIlBNXCIsXCJNaXF1ZWxvbnxTYWludCBQaWVycmVcIl0sW1wiU2FpbnQgVmluY2VudCBhbmQgdGhlIEdyZW5hZGluZXNcIixcIlZDXCIsXCJDaGFybG90dGV+MDF8R3JlbmFkaW5lc34wNnxTYWludCBBbmRyZXd+MDJ8U2FpbnQgRGF2aWR+MDN8U2FpbnQgR2VvcmdlfjA0fFNhaW50IFBhdHJpY2t+MDVcIl0sW1wiU2Ftb2FcIixcIldTXCIsXCJBJ2FuYX5BQXxBaWdhLWktbGUtVGFpfkFMfEF0dWF+QVR8RmEnYXNhbGVsZWFnYX5GQXxHYWdhJ2VtYXVnYX5HRXxHYWdhaWZvbWF1Z2F+R0l8UGFsYXVsaX5QQXxTYXR1cGEnaXRlYX5TQXxUdWFtYXNhZ2F+VFV8VmEnYS1vLUZvbm90aX5WRnxWYWlzaWdhbm9+VlNcIl0sW1wiU2FuIE1hcmlub1wiLFwiU01cIixcIkFjcXVhdml2YX4wMXxCb3JnbyBNYWdnaW9yZX4wNnxDaGllc2FudW92YX4wMnxEb21hZ25hbm9+MDN8RmFldGFub34wNHxGaW9yZW50aW5vfjA1fE1vbnRlZ2lhcmRpbm9+MDh8U2FuIE1hcmlub34wN3xTZXJyYXZhbGxlfjA5XCJdLFtcIlNhbyBUb21lIGFuZCBQcmluY2lwZVwiLFwiU1RcIixcIlByaW5jaXBlflB8U2FvIFRvbWV+U1wiXSxbXCJTYXVkaSBBcmFiaWFcIixcIlNBXCIsXCInQXNpcn4xNHxBbCBCYWhhaH4xMXxBbCBIdWR1ZCBhc2ggU2hhbWFsaXlhaH4wOHxBbCBKYXdmfjEyfEFsIE1hZGluYWggYWwgTXVuYXd3YXJhaH4wM3xBbCBRYXNpbX4wNXxBciBSaXlhZH4wMXxBc2ggU2hhcnFpeWFofjA0fEhhJ2lsfjA2fEphemFufjA5fE1ha2thaCBhbCBNdWthcnJhbWFofjAyfE5hanJhbn4xMHxUYWJ1a34wN1wiXSxbXCJTZW5lZ2FsXCIsXCJTTlwiLFwiRGFrYXJ+REt8RGlvdXJiZWx+REJ8RmF0aWNrfkZLfEthZmZyaW5lfktBfEthb2xhY2t+S0x8S2Vkb3Vnb3V+S0V8S29sZGF+S0R8TG91Z2F+TEd8TWF0YW1+TVR8U2FpbnQtTG91aXN+U0x8U2VkaGlvdX5TRXxUYW1iYWNvdW5kYX5UQ3xUaGllc35USHxaaWd1aW5jaG9yflpHXCJdLFtcIlNlcmJpYVwiLFwiUlNcIixcIkJlb2dyYWQgKEJlbGdyYWRlKX4wMHxCb3Jza2l+MTR8QnJhbmnEjWV2c2tpfjExfEphYmxhbmnEjWtpfjIzfEp1xb5ub2JhxI1raX4wNnxKdcW+bm9iYW5hdHNraX4wNHxLb2x1YmFyc2tpfjA5fEtvc292c2tpfjI1fEtvc292c2tvLU1pdHJvdmHEjWtpfjI4fEtvc292c2tvLVBvbW9yYXZza2l+Mjl8TWHEjXZhbnNraX4wOHxNb3JhdmnEjWtpfjE3fE5pxaFhdnNraX4yMHxQxI1pbmpza2l+MjR8UGXEh2tpfjI2fFBpcm90c2tpfjIyfFBvZHVuYXZza2l+MTB8UG9tb3JhdnNraX4xM3xQcml6cmVuc2tpfjI3fFJhc2luc2tpfjE5fFJhxaFraX4xOHxTZXZlcm5vYmHEjWtpfjAxfFNldmVybm9iYW5hdHNraX4wM3xTcmVkbmplYmFuYXRza2l+MDJ8U3JlbXNraX4wN3zFoHVtYWRpanNraX4xMnxUb3BsacSNa2l+MjF8WmFqZcSNYXJza2l+MTV8WmFwYWRub2JhxI1raX4wNXxabGF0aWJvcnNraX4xNlwiXSxbXCJTZXljaGVsbGVzXCIsXCJTQ1wiLFwiQW5zZSBhdXggUGluc34wMXxBbnNlIEJvaWxlYXV+MDJ8QW5zZSBFdG9pbGV+MDN8QW5zZSBSb3lhbGV+MDV8QW51IENhcH4wNHxCYWllIExhemFyZX4wNnxCYWllIFNhaW50ZSBBbm5lfjA3fEJlYXUgVmFsbG9ufjA4fEJlbCBBaXJ+MDl8QmVsIE9tYnJlfjEwfENhc2NhZGV+MTF8R2xhY2lzfjEyfEdyYW5kJ0Fuc2UgTWFoZX4xM3xHcmFuZCdBbnNlIFByYXNsaW5+MTR8TGEgRGlndWV+MTV8TGEgUml2aWVyZSBBbmdsYWlzZX4xNnxMZXMgTWFtZWxsZXN+MjR8TW9udCBCdXh0b25+MTd8TW9udCBGbGV1cml+MTh8UGxhaXNhbmNlfjE5fFBvaW50ZSBMYSBSdWV+MjB8UG9ydCBHbGF1ZH4yMXxSb2NoZSBDYWltYW5+MjV8U2FpbnQgTG91aXN+MjJ8VGFrYW1ha2F+MjNcIl0sW1wiU2llcnJhIExlb25lXCIsXCJTTFwiLFwiRWFzdGVybn5FfE5vcnRoZXJufk58U291dGhlcm5+U3xXZXN0ZXJufldcIl0sW1wiU2luZ2Fwb3JlXCIsXCJTR1wiLFwiQ2VudHJhbCBTaW5nYXBvcmV+MDF8Tm9ydGggRWFzdH4wMnxOb3J0aCBXZXN0fjAzfFNvdXRoIEVhc3R+MDR8U291dGggV2VzdH4wNVwiXSxbXCJTaW50IE1hYXJ0ZW4gKER1dGNoIHBhcnQpXCIsXCJTWFwiLFwiU2ludCBNYWFydGVuXCJdLFtcIlNsb3Zha2lhXCIsXCJTS1wiLFwiQmFuc2tvYnlzdHJpY2t5fkJDfEJyYXRpc2xhdnNreX5CTHxLb3NpY2t5fktJfE5pdHJpYW5za3l+Tkl8UHJlc292c2t5flBWfFRyZW5jaWFuc2t5flRDfFRybmF2c2t5flRBfFppbGluc2t5flpJXCJdLFtcIlNsb3ZlbmlhXCIsXCJTSVwiLFwiQWpkb3ZzY2luYX4wMDF8QXBhY2V+MTk1fEJlbHRpbmNpfjAwMnxCZW5lZGlrdH4xNDh8QmlzdHJpY2Egb2IgU290bGl+MTQ5fEJsZWR+MDAzfEJsb2tlfjE1MHxCb2hpbmp+MDA0fEJvcm92bmljYX4wMDV8Qm92ZWN+MDA2fEJyYXNsb3ZjZX4xNTF8QnJkYX4wMDd8QnJlemljZX4wMDl8QnJlem92aWNhfjAwOHxDYW5rb3ZhfjE1MnxDZWxqZX4wMTF8Q2Vya2xqZSBuYSBHb3Jlbmpza2VtfjAxMnxDZXJrbmljYX4wMTN8Q2Vya25vfjAxNHxDZXJrdmVuamFrfjE1M3xDaXJrdWxhbmV+MTk2fENyZW5zb3ZjaX4wMTV8Q3JuYSBuYSBLb3Jvc2tlbX4wMTZ8Q3Jub21lbGp+MDE3fERlc3RybmlrfjAxOHxEaXZhY2F+MDE5fERvYmplfjE1NHxEb2JyZXBvbGplfjAyMHxEb2JybmF+MTU1fERvYnJvdmEtUG9saG92IEdyYWRlY34wMjF8RG9icm92bmlrfjE1NnxEb2wgcHJpIExqdWJsamFuaX4wMjJ8RG9sZW5qc2tlIFRvcGxpY2V+MTU3fERvbXphbGV+MDIzfERvcm5hdmF+MDI0fERyYXZvZ3JhZH4wMjV8RHVwbGVrfjAyNnxHb3JlbmphIFZhcy1Qb2xqYW5lfjAyN3xHb3Jpc25pY2F+MDI4fEdvcmplfjIwN3xHb3JuamEgUmFkZ29uYX4wMjl8R29ybmppIEdyYWR+MDMwfEdvcm5qaSBQZXRyb3ZjaX4wMzF8R3JhZH4xNTh8R3Jvc3VwbGplfjAzMnxIYWpkaW5hfjE1OXxIb2NlLVNsaXZuaWNhfjE2MHxIb2Rvc34xNjF8SG9yanVsfjE2MnxIcmFzdG5pa34wMzR8SHJwZWxqZS1Lb3ppbmF+MDM1fElkcmlqYX4wMzZ8SWd+MDM3fElsaXJza2EgQmlzdHJpY2F+MDM4fEl2YW5jbmEgR29yaWNhfjAzOXxJem9sYX4wNDBzfEplc2VuaWNlfjA0MXxKdXJzaW5jaX4wNDJ8S2FtbmlrfjA0M3xLYW5hbH4wNDR8S2lkcmljZXZvfjA0NXxLb2JhcmlkfjA0NnxLb2JpbGplfjA0N3xLb2NldmplfjA0OHxLb21lbn4wNDl8S29tZW5kYX4xNjR8S29wZXJ+MDUwfEtvZGFuamV2aWNhIG5hIEtya2l+MTk3fEtvc3RlbH4xNjV8S296amV+MDUxfEtyYW5qfjA1MnxLcmFuanNrYSBHb3JhfjA1M3xLcml6ZXZjaX4xNjZ8S3Jza29+MDU0fEt1bmdvdGF+MDU1fEt1em1hfjA1NnxMYXNrb34wNTd8TGVuYXJ0fjA1OHxMZW5kYXZhfjA1OXxMaXRpamF+MDY4fExqdWJsamFuYX4wNjF8TGp1Ym5vfjA2MnxManV0b21lcn4wNjN8TG9nLURyYWdvbWVyfjIwOHxMb2dhdGVjfjA2NHxMb3NrYSBEb2xpbmF+MDY1fExvc2tpIFBvdG9rfjA2NnxMb3ZyZW5jIG5hIFBvaG9yanV+MTY3fEx1a292aWNhfjA2OHxMdWNlfjA2N3xNYWpzcGVya34wNjl8TWFrb2xlfjE5OHxNYXJpYm9yfjA3MHxNYXJrb3ZjaX4xNjh8TWVkdm9kZX4wNzF8TWVuZ2VzfjA3MnxNZXRsaWthfjA3M3xNZXppY2F+MDc0fE1pa2xhdnogbmEgRHJhdnNrZW0gUG9sanV+MTY5fE1pcmVuLUtvc3RhbmpldmljYX4wNzV8TWlybmF+MjEyfE1pcm5hIFBlY34xNzB8TWlzbGluamF+MDc2fE1va3Jvbm9nLVRyZWJlbG5vfjE5OXxNb3JhdmNlfjA3N3xNb3JhdnNrZSBUb3BsaWNlfjA3OHxNb3ppcmplfjA3OXxNdXJza2EgU29ib3RhfjA4MHxOYWtsb34wODJ8TmF6YXJqZX4wODN8Tm92YSBHb3JpY2F+MDg0fE5vdm8gTWVzdG9+MDg1fE9kcmFuY2l+MDg2fE9ybW96fjA4N3xPc2lsbmljYX4wODh8UGVzbmljYX4wODl8UGlyYW5+MDkwfFBpdmthfjA5MXxQb2RjZXRydGVrfjA5MnxQb2RsZWhuaWt+MTcyfFBvZHZlbGthfjA5M3xQb2xqY2FuZX4yMDB8UG9zdG9qbmF+MDk0fFByZWJvbGR+MTc0fFByZWRkdm9yfjA5NXxQcmV2YWxqZX4xNzV8UHR1an4wOTZ8UmFjZS1GcmFtfjA5OHxSYWRlY2V+MDk5fFJhZGVuY2l+MTAwfFJhZGxqZSBvYiBEcmF2aX4xMDF8UmFkb3ZsamljYX4xMDJ8UmF2bmUgbmEgS29yb3NrZW1+MTAzfFJhemtyaXpqZX4xNzZ8UmVjaWNhIG9iIFNhdmluaml+MjA5fFJlbmNlLVZvZ3Jza29+MjAxfFJpYm5pY2F+MTA0fFJpYm5pY2EgbmEgUG9ib3JpdX4xNzd8Um9nYXNrYSBTbGF0aW5hfjEwNnxSb2dhc292Y2l+MTA1fFJvZ2F0ZWN+MTA3fFJ1c2V+MTA4fFNhbG92Y2l+MDMzfFNlbG5pY2Egb2IgRHJhdml+MTc4fFNlbWljfjEwOXxTZW1wZXRlci1WcnRvamJhfjE4M3xTZW5jdXJ+MTE3fFNlbnRpbGp+MTE4fFNlbnRqZXJuZWp+MTE5fFNlbnRqdXJ+MTIwfFNlbnRydXBlcnR+MjExfFNldm5pY2F+MTEwfFNlemFuYX4xMTF8U2tvY2phbn4xMjF8U2tvZmphIExva2F+MTIyfFNrb2ZsamljYX4xMjN8U2xvdmVuaiBHcmFkZWN+MTEyfFNsb3ZlbnNrYSBCaXN0cmljYX4xMTN8U2xvdmVuc2tlIEtvbmppY2V+MTE0fFNtYXJqZSBwcmkgZWxzYWh+MTI0fFNtYXJqZXNrZSBUb3BsaWNlfjIwNnxTbWFydG5vIG9iIFBha2l+MTI1fFNtYXJ0bm8gcHJpIExpdGlqaX4xOTR8U29kcmF6aWNhfjE3OXxTb2xjYXZhfjE4MHxTb3N0YW5qfjEyNnxTcmVkaXNjZSBvYiBEcmF2aX4yMDJ8U3RhcnNlfjExNXxTdG9yZX4xMjd8U3RyYXphfjIwM3xTdmV0YSBBbmF+MTgxfFN2ZXRhIFRyb2ppY2EgdiBTbG92ZW5za2loIEdvcmljYWh+MjA0fFN2ZXRhIEFuZHJheiB2IFNsb3ZlbnNraWggR29yaWNhaH4xODJ8U3ZldGkgSnVyaWp+MTE2fFN2ZXRpIEp1cmlqIHYgU2xvdmVuc2tpaCBHb3JpY2FofjIxMHxTdmV0aSBUb21hen4yMDV8VGFib3J+MTg0fFRpc2luYX4xMjh8VG9sbWlufjEyOHxUcmJvdmxqZX4xMjl8VHJlYm5qZX4xMzB8VHJub3Zza2EgVmFzfjE4NXxUcnppbn4xODZ8VHJ6aWN+MTMxfFR1cm5pc2NlfjEzMnxWZWxlbmplfjEzM3xWZWxpa2EgUG9sYW5hfjE4N3xWZWxpa2UgTGFzY2V+MTM0fFZlcnplan4xODh8VmlkZW1+MTM1fFZpcGF2YX4xMzZ8Vml0YW5qZX4xMzd8Vm9kaWNlfjEzOHxWb2puaWt+MTM5fFZyYW5za29+MTg5fFZyaG5pa2F+MTQwfFZ1emVuaWNhfjE0MXxaYWdvcmplIG9iIFNhdml+MTQyfFphdnJjfjE0M3xacmVjZX4xNDR8WmFsZWN+MTkwfFplbGV6bmlraX4xNDZ8WmV0YWxlfjE5MXxaaXJpfjE0N3xaaXJvdm5pY2F+MTkyfFp1emVtYmVya34xOTNcIl0sW1wiU29sb21vbiBJc2xhbmRzXCIsXCJTQlwiLFwiQ2VudHJhbH5DRXxDaG9pc2V1bH5DSHxHdWFkYWxjYW5hbH5HVXxIb25pYXJhfkNUfElzYWJlbH5JU3xNYWtpcmEtVWxhd2F+TUt8TWFsYWl0YX5NTHxSZW5uZWxsIGFuZCBCZWxsb25hflJCfFRlbW90dX5URXxXZXN0ZXJufldFXCJdLFtcIlNvbWFsaWFcIixcIlNPXCIsXCJBd2RhbH5BV3xCYWtvb2x+Qkt8QmFuYWFkaXJ+Qk58QmFyaX5CUnxCYXl+Qll8R2FsZ3VkdXVkfkdBfEdlZG9+R0V8SGlpcmFhbn5ISXxKdWJiYWRhIERoZXhlfkpEfEp1YmJhZGEgSG9vc2V+Skh8TXVkdWd+TVV8TnVnYWFsfk5VfFNhbmFhZ35TQXxTaGFiZWVsbGFoYSBEaGV4ZX5TRHxTaGFiZWVsbGFoYSBIb29zZX5TSHxTb29sflNPfFRvZ2RoZWVyflRPfFdvcW9veWkgR2FsYmVlZH5XT1wiXSxbXCJTb3V0aCBBZnJpY2FcIixcIlpBXCIsXCJFYXN0ZXJuIENhcGV+RUN8RnJlZSBTdGF0ZX5GU3xHYXV0ZW5nfkdUfEt3YVp1bHUtTmF0YWx+Tkx8TGltcG9wb35MUHxNcHVtYWxhbmdhfk1QfE5vcnRoZXJuIENhcGV+TkN8Tm9ydGggV2VzdH5OV3xXZXN0ZXJuIENhcGV+V0NcIl0sW1wiU291dGggR2VvcmdpYSBhbmQgU291dGggU2FuZHdpY2ggSXNsYW5kc1wiLFwiR1NcIixcIkJpcmQgSXNsYW5kfEJyaXN0b2wgSXNsYW5kfENsZXJrZSBSb2Nrc3xNb250YWd1IElzbGFuZHxTYXVuZGVycyBJc2xhbmR8U291dGggR2VvcmdpYXxTb3V0aGVybiBUaHVsZXxUcmF2ZXJzYXkgSXNsYW5kc1wiXSxbXCJTb3V0aCBTdWRhblwiLFwiU1NcIixcIkNlbnRyYWwgRXF1YXRvcmlhfkNFfEVhc3Rlcm4gRXF1YXRvcmlhfkVFfEpvbmdsZWl+Skd8TGFrZXN+TEt8Tm9ydGhlcm4gQmFociBlbCBHaGF6YWx+Qk58VW5pdHl+VVl8VXBwZXIgTmlsZX5OVXxXYXJyYXB+V1J8V2VzdGVybiBCYWhyIGVsIEdoYXphbH5CV3xXZXN0ZXJuIEVxdWF0b3JpYX5FV1wiXSxbXCJTcGFpblwiLFwiRVNcIixcIkFsYmFjZXRlfkNNfEFsaWNhbnRlflZDfEFsbWVyw61hfkFOfEFyYWJhL8OBbGF2YX5WSXxBc3R1cmlhc35PfMOBdmlsYX5BVnxCYWRham96fkJBfEJhcmNlbG9uYX5CfEJpemthaWF+Qkl8QnVyZ29zfkJVfEPDoWNlcmVzfkNDfEPDoWRpen5DQXxDYW50YWJyaWF+U3xDYXN0ZWxsw7NufkNTfEN1ZXRhfkNVfENpdWRhZCBSZWFsfkNSfEPDs3Jkb2JhfkNPfEEgQ29ydcOxYX5DfEN1ZW5jYX5DVXxHaXB1emtvYX5TU3xHaXJvbmF+R0l8R3JhbmFkYX5HUnxHdWFkYWxhamFyYX5HVXxIdWVsdmF+SHxIdWVzY2F+SFV8SWxsZXMgQmFsZWFyc35QTXxKYcOpbn5KfExlw7NufkxFfExsZWlkYX5MfEx1Z29+TFV8TWFkcmlkfk18TcOhbGFnYX5NQXxNZWxpbGxhfk1MfE11cmNpYX5NVXxOYXZhcnJlfk5BfE91cmVuc2V+T1J8UGFsZW5jaWF+UHxMYXMgUGFsbWFzfkdDfFBvbnRldmVkcmF+UE98TGEgUmlvamF+TE98U2FsYW1hbmNhflNBfFNhbnRhIENydXogZGUgVGVuZXJpZmV+VEZ8U2Vnb3ZpYX5TR3xTZXZpbGxhflNFfFNvcmlhflNPfFRhcnJhZ29uYX5UfFRlcnVlbH5URXxUb2xlZG9+VE98VmFsZW5jaWF+VnxWYWxsYWRvbGlkflZBfFphbW9yYX5aQXxaYXJhZ296YX5aXCJdLFtcIlNyaSBMYW5rYVwiLFwiTEtcIixcIkJhc25haGlyYX4xfERha3VudX4zfE1hZGh5YW1hfjJ8TmFlZ2VuYWhpcmF+NXxTYWJhcmFnYW11d2F+OXxVdHVydX40fFV0dXJ1bWFlZGF+N3xWYXlhbWJhfjZ8VXZhfjhcIl0sW1wiU3VkYW5cIixcIlNEXCIsXCJBbCBCYWhyIGFsIEFobWFyflJTfEFsIEphemlyYWh+R1p8QWwgS2hhcnR1bX5LSHxBbCBRYWRhcmlmfkdEfEFuIE5pbCBhbCBBYnlhZH5OV3xBbiBOaWwgYWwgQXpyYXF+TkJ8QXNoIFNoYW1hbGl5YWh+Tk98R2hhcmIgRGFyZnVyfkRXfEdoYXJiIEt1cmR1ZmFufkdLfEphbnViIERhcmZ1cn5EU3xKYW51YiBLdXJkdWZhbn5LU3xLYXNzYWxhfktBfE5haHIgYW4gTmlsfk5SfFNoYW1hbCBEYXJmdXJ+RE58U2hhcnEgRGFyZnVyfkRFfFNoaWFtYWwgS3VyZHVmYW5+S058U2lubmFyflNJfFdhc2F0IERhcmZ1ciBaYWxpbmpheX5EQ1wiXSxbXCJTdXJpbmFtZVwiLFwiU1JcIixcIkJyb2tvcG9uZG9+QlJ8Q29tbWV3aWpuZX5DTXxDb3JvbmllfkNSfE1hcm93aWpuZX5NQXxOaWNrZXJpZX5OSXxQYXJhflBSfFBhcmFtYXJpYm9+UE18U2FyYW1hY2NhflNBfFNpcGFsaXdpbml+U0l8V2FuaWNhfldBXCJdLFtcIlN3YXppbGFuZFwiLFwiU1pcIixcIkhob2hob35ISHxMdWJvbWJvfkxVfE1hbnppbml+TUF8U2hpc2Vsd2VuaX5TSFwiXSxbXCJTd2VkZW5cIixcIlNFXCIsXCJCbGVraW5nZX5LfERhbGFybmFzfld8R290bGFuZHN+WHxHYXZsZWJvcmdzfkl8SGFsbGFuZHN+TnxKYW10bGFuZHN+WnxKb25rb3BpbmdzfkZ8S2FsbWFyfkh8S3Jvbm9iZXJnc35HfE5vcnJib3R0ZW5zfkJEfE9yZWJyb35UfE9zdGVyZ290bGFuZHN+RXxTa2FuZX5NfFNvZGVybWFubGFuZHN+RHxTdG9ja2hvbG1+QUJ8VmFybWxhbmRzflN8VmFzdGVyYm90dGVuc35BQ3xWYXN0ZXJub3JybGFuZHN+WXxWYXN0bWFubGFuZHN+VXxWYXN0cmEgR290YWxhbmRzfk9cIl0sW1wiU3dpdHplcmxhbmRcIixcIkNIXCIsXCJBYXJnYXV+QUd8QXBwZW56ZWxsIEF1c3NlcnJob2Rlbn5BUnxBcHBlbnplbGwgSW5uZXJob2Rlbn5BSXxCYXNlbC1MYW5kc2NoYWZ0fkJMfEJhc2VsLVN0YWR0fkJTfEJlcm5+QkV8RnJpYm91cmd+RlJ8R2Vuw6h2ZX5HRXxHbGFydXN+R0x8R3JhdWLDvG5kZW5+R1J8SnVyYX5KVXxMdXplcm5+TFV8TmV1Y2jDonRlbH5ORXxOaWR3YWxkZW5+Tld8T2J3YWxkZW5+T1d8U2Fua3QgR2FsbGVuflNHfFNjaGFmZmhhdXNlbn5TSHxTY2h3eXp+U1p8U29sb3RodXJuflNPfFRodXJnYXV+VEd8VGljaW5vflRJfFVyaX5VUnxWYWxhaXN+VlN8VmF1ZH5WRHxadWd+Wkd8WsO8cmljaH5aSFwiXSxbXCJTeXJpYW4gQXJhYiBSZXB1YmxpY1wiLFwiU1lcIixcIkFsIEhhc2FrYWh+SEF8QWwgTGFkaGlxaXlhaH5MQXxBbCBRdW5heXRpcmFoflFVfEFyIFJhcXFhaH5SQXxBcyBTdXdheWRhJ35TVXxEYXInYX5EUnxEYXlyIGF6IFphd3J+RFl8RGltYXNocX5ESXxIYWxhYn5ITHxIYW1haH5ITXxIaW1zfkhJfElkbGlifklEfFJpZiBEaW1hc2hxflJEfFRhcnR1c35UQVwiXSxbXCJUYWl3YW5cIixcIlRXXCIsXCJDaGFuZy1odWF+Q0hBfENoaWEtaX5DWVF8SHNpbi1jaHV+SFNRfEh1YS1saWVufkhVQXxLYW8taHNpdW5nfktISHxLZWVsdW5nfktFRXxLaW5tZW5+S0lOfExpZW5jaGlhbmd+TElFfE1pYW8tbGl+TUlBfE5hbi10J291fk5BTnxQJ2VuZy1odX5QRU58TmV3IFRhaXBlaX5OV1R8UCdpbmctY2h1bmd+UElGfFQnYWktY2h1bmd+VFhHfFQnYWktbmFuflROTnxUJ2FpLXBlaX5UUEV8VCdhaS10dW5nflRUVHxUJ2FvLXl1YW5+VEFPfFlpLWxhbn5JTEF8WXVuLWxpbn5ZVU5cIl0sW1wiVGFqaWtpc3RhblwiLFwiVEpcIixcIkR1c2hhbmJlfkRVfEvFrWhpc3RvbmkgQmFkYWtoc2hvbn5HQnxLaGF0bG9ufktUfFN1Z2hkflNVXCJdLFtcIlRhbnphbmlhLCBVbml0ZWQgUmVwdWJsaWMgb2ZcIixcIlRaXCIsXCJBcnVzaGF+MDF8Q29hc3R+MTl8RGFyIGVzIFNhbGFhbX4wMnxEb2RvbWF+MDN8SXJpbmdhfjA0fEthZ2VyYX4wNXxLaWdvbWF+MDh8S2lsaW1hbmphcm9+MDl8TGluZGl+MTJ8TWFueWFyYX4yNnxNYXJhfjEzfE1iZXlhfjE0fE1vcm9nb3JvfjE2fE10d2FyYX4xN3xNd2FuemF+MTh8UGVtYmEgTm9ydGh+MDZ8UGVtYmEgU291dGh+MTB8UnVrd2F+MjB8UnV2dW1hfjIxfFNoaW55YW5nYX4yMnxTaW5naWRhfjIzfFRhYm9yYX4yNHxUYW5nYX4yNXxaYW56aWJhciBOb3J0aH4wN3xaYW56aWJhciBDZW50cmFsL1NvdXRofjExfFphbnppYmFyIFVyYmFuL1dlc3R+MTVcIl0sW1wiVGhhaWxhbmRcIixcIlRIXCIsXCJBbW5hdCBDaGFyb2VufjM3fEFuZyBUaG9uZ34xNXxCdWVuZyBLYW5+Mzh8QnVyaSBSYW1+MzF8Q2hhY2hvZW5nc2FvfjI0fENoYWkgTmF0fjE4fENoYWl5YXBodW1+MzZ8Q2hhbnRoYWJ1cml+MjJ8Q2hpYW5nIE1haX41MHxDaGlhbmcgUmFpfjU3fENob24gQnVyaX4yMHxDaHVtcGhvbn44NnxLYWxhc2lufjQ2fEthbXBoYWVuZyBQaGV0fjYyfEthbmNoYW5hYnVyaX43MXxLaG9uIEthZW5+NDB8S3JhYml+ODF8S3J1bmcgVGhlcCBNYWhhbmFraG9uIChCYW5na29rKX4xMHxMYW1wYW5nfjUyfExhbXBodW5+NTF8TG9laX40MnxMb3AgQnVyaX4xNnxNYWUgSG9uZyBTb25+NTh8TWFoYSBTYXJha2hhbX40NHxNdWtkYWhhbn40OXxOYWtob24gTmF5b2t+MjZ8TmFraG9uIFBoYXRob21+NzN8TmFraG9uIFBoYW5vbX40OHxOYWtob24gUmF0Y2hhc2ltYX4zMHxOYWtob24gU2F3YW5+NjB8TmFraG9uIFNpIFRoYW1tYXJhdH44MHxOYW5+NTV8TmFyYXRoaXdhdH45NnxOb25nIEJ1YSBMYW0gUGh1fjM5fE5vbmcgS2hhaX40M3xOb250aGFidXJpfjEyfFBhdGh1bSBUaGFuaX4xM3xQYXR0YW5pfjk0fFBoYW5nbmdhfjgyfFBoYXR0aGFsdW5nfjkzfFBoYXlhb341NnxQaGV0Y2hhYnVufjc2fFBoZXRjaGFidXJpfjc2fFBoaWNoaXR+NjZ8UGhpdHNhbnVsb2t+NjV8UGhyYSBOYWtob24gU2kgQXl1dHRoYXlhfjE0fFBocmFlfjU0fFBodWtldH44M3xQcmFjaGluIEJ1cml+MjV8UHJhY2h1YXAgS2hpcmkgS2hhbn43N3xSYW5vbmd+ODV8UmF0Y2hhYnVyaX43MHxSYXlvbmd+MjF8Um9pIEV0fjQ1fFNhIEthZW9+Mjd8U2Frb24gTmFraG9ufjQ3fFNhbXV0IFByYWthbn4xMXxTYW11dCBTYWtob25+NzR8U2FtdXQgU29uZ2tocmFtfjc1fFNhcmFidXJpfjE5fFNhdHVufjkxfFNpbmcgQnVyaX4xN3xTaSBTYSBrZXR+MzN8U29uZ2tobGF+OTB8U3VraG90aGFpfjY0fFN1cGhhbiBCdXJpfjcyfFN1cmF0IFRoYW5pfjg0fFN1cmlufjMyfFRha342M3xUcmFuZ345MnxUcmF0fjIzfFVib24gUmF0Y2hhdGhhbml+MzR8VWRvbiBUaGFuaX40MXxVdGhhaSBUaGFuaX42MXxVdHRhcmFkaXR+NTN8WWFsYX45NXxZYXNvdGhvbn4zNVwiXSxbXCJUaW1vci1MZXN0ZVwiLFwiVExcIixcIkFpbGV1fkFMfEFpbmFyb35BTnxCYXVjYXV+QkF8Qm9ib25hcm9+Qk98Q292YSBMaW1hfkNPfERpbGl+REl8RXJtZXJhfkVSfExhdXRlbX5MQXxMaXF1aWNhfkxJfE1hbmF0dXRvfk1UfE1hbnVmYWhpfk1GfE9lY3Vzc2l+T0V8VmlxdWVxdWV+VklcIl0sW1wiVG9nb1wiLFwiVEdcIixcIkNlbnRyZX5DfEthcmF+S3xNYXJpdGltZX5NfFBsYXRlYXV4flB8U2F2YW5uZXN+U1wiXSxbXCJUb2tlbGF1XCIsXCJUS1wiLFwiQXRhZnV8RmFrYW9mb3xOdWt1bm9udVwiXSxbXCJUb25nYVwiLFwiVE9cIixcIidFdWF+MDF8SGEnYXBhaX4wMnxOaXVhc34wM3xUb25nYXRhcHV+MDR8VmF2YSd1fjA1XCJdLFtcIlRyaW5pZGFkIGFuZCBUb2JhZ29cIixcIlRUXCIsXCJBcmltYX5BUkl8Q2hhZ3VhbmFzfkNIQXxDb3V2YS1UYWJhcXVpdGUtVGFscGFyb35DVFR8RGllZm8gTWFydGlufkRNTnxNYXlhcm8tUmlvIENsYXJvfk1SQ3xQZW5hbC1EZWJlflBFRHxQb2ludCBGb3J0aW5+UFRGfFBvcnQtb2YtU3BhaW5+UE9TfFByaW5jZXMgVG93bn5QUlR8U2FuIEZlcm5hbmRvflNGT3xTYW4gSnVhbi1MYXZlbnRpbGxlflNKTHxTYW5ncmUgR3JhbmRlflNHRXxTaXBhcmlhflNJUHxUb2JhZ29+VE9CfFR1bmFwdW5hLVBpYXJjb35UVVBcIl0sW1wiVHVuaXNpYVwiLFwiVE5cIixcIkFyaWFuYX4xMnxCZWphfjMxfEJlbiBBcm91c34xM3xCaXplcnRlfjIzfEdhYmVzfjgxfEdhZnNhfjcxfEplbmRvdWJhfjMyfEthaXJvdWFufjQxfEthc3NlcmluZX40MnxLZWJpbGl+NzN8S2VmfjMzfE1haGRpYX41M3xNZWRlbmluZX44MnxNb25hc3Rpcn41MnxOYWJldWx+MjF8U2ZheH42MXxTaWRpIEJvdXppZH40M3xTaWxpYW5hfjM0fFNvdXNzZX41MXxUYXRhb3VpbmV+ODN8VG96ZXVyfjcyfFR1bmlzfjExfFphZ2hvdWFufjIyXCJdLFtcIlR1cmtleVwiLFwiVFJcIixcIkFkYW5hfjAxfEFkaXlhbWFufjAyfEFmeW9ua2FyYWhpc2FyfjAzfEFncml+MDR8QWtzYXJheX42OHxBbWFzeWF+MDV8QW5rYXJhfjA2fEFudGFseWF+MDd8QXJkYWhhbn43NXxBcnR2aW5+MDh8QXlkaW5+MDl8QmFsaWtlc2lyfjEwfEJhcnRpbn43NHxCYXRtYW5+NzJ8QmF5YnVydH42OXxCaWxlY2lrfjExfEJpbmdvbH4xMnxCaXRsaXN+MTN8Qm9sdX4xNHxCdXJkdXJ+MTV8QnVyc2F+MTZ8Q2FuYWtrYWxlfjE3fENhbmtpcml+MTh8Q29ydW1+MTl8RGVuaXpsaX4yMHxEaXlhcmJha2lyfjIxfER1emNlfjgxfEVkaXJuZX4yMnxFbGF6aWd+MjN8RXJ6aW5jYW5+MjR8RXJ6dXJ1bX4yNXxFc2tpc2VoaXJ+MjZ8R2F6aWFudGVwfjI3fEdpcmVzdW5+Mjh8R3VtdXNoYW5lfjI5fEhha2thcml+MzB8SGF0YXl+MzF8SWdkaXJ+NzZ8SXNwYXJ0YX4zMnxJc3RhbmJ1bH4zNHxJem1pcn4zNXxLYWhyYW1hbm1hcmFzfjQ2fEthcmFidWt+Nzh8S2FyYW1hbn43MHxLYXJzfjM2fEthc3RhbW9udX4zN3xLYXlzZXJpfjM4fEtpbGlzfjc5fEtpcmlra2FsZX43MXxLaXJrbGFyZWxpfjM5fEtpcnNlaGlyfjQwfEtvY2FlbGl+NDF8S29ueWF+NDJ8S3V0YWh5YX40M3xNYWxhdHlhfjQ0fE1hbmlzYX40NXxNYXJkaW5+NDd8TWVyc2lufjMzfE11Z2xhfjQ4fE11c340OXxOZXZzZWhpcn41MHxOaWdkZX41MXxPcmR1fjUyfE9zbWFuaXllfjgwfFJpemV+NTN8U2FrYXJ5YX41NHxTYW1zdW5+NTV8U2FubGl1cmZhfjYzfFNpaXJ0fjU2fFNpbm9wfjU3fFNpcm5ha343M3xTaXZhc341OHxUZWtpcmRhZ341OXxUb2thdH42MHxUcmFiem9ufjYxfFR1bmNlbGl+NjJ8VXNha342NHxWYW5+NjV8WWFsb3Zhfjc3fFlvemdhdH42Nnxab25ndWxkYWt+NjdcIl0sW1wiVHVya21lbmlzdGFuXCIsXCJUTVwiLFwiQWhhbH5BfEFzZ2FiYXR+U3xCYWxrYW5+QnxEYXNob2d1en5EfExlYmFwfkx8TWFyeX5NXCJdLFtcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiLFwiVENcIixcIlR1cmtzIGFuZCBDYWljb3MgSXNsYW5kc1wiXSxbXCJUdXZhbHVcIixcIlRWXCIsXCJGdW5hZnV0aX5GVU58TmFudW1hbmdhfk5NR3xOYW51bWVhfk5NQXxOaXV0YW9+TklUfE51aX5OVUl8TnVrdWZldGF1fk5LRnxOdWt1bGFlbGFlfk5LTHxWYWl0dXB1flZBVVwiXSxbXCJVZ2FuZGFcIixcIlVHXCIsXCJBYmltfjMxN3xBZGp1bWFuaX4zMDF8QW1vbGF0YXJ+MzE0fEFtdXJpYX4yMTZ8QW11cnV+MzE5fEFwYWN+MzAyfEFydWF+MzAzfEJ1ZGFrYX4yMTd8QnVkdWRhfjIyM3xCdWdpcml+MjAxfEJ1a2VkZWF+MjI0fEJ1a3dhfjIxOHxCdWxpaXNhfjQxOXxCdW5kaWJ1Z3lvfjQwMXxCdXNoZW55aX40MDJ8QnVzaWF+MjAyfEJ1dGFsZWphfjIxOXxEb2tvbG9+MzE4fEd1bHV+MzA0fEhvaW1hfjQwM3xJYmFuZGF+NDE2fElnYW5nYX4yMDN8SXNpbmdpcm9+NDE3fEppbmphfjIwNHxLYWFib25nfjMxNXxLYWJhbGV+NDA0fEthYmFyb2xlfjQwNXxLYWJlcmFtYWlkb34yMTN8S2FsYW5nYWxhfjEwMXxLYWxpcm9+MjIwfEthbXBhbGF+MTAyfEthbXVsaX4yMDV8S2Ftd2VuZ2V+NDEzfEthbnVuZ3V+NDE0fEthcGNob3J3YX4yMDZ8S2FzZXNlfjQwNnxLYXRha3dpfjIwN3xLYXl1bmdhfjExMnxLaWJhYWxlfjQwN3xLaWJvZ2F+MTAzfEtpcnVodXJhfjQxOHxLaXNvcm9+NDA4fEtpdGd1bX4zMDV8S29ib2tvfjMxNnxLb3RpZG9+MzA2fEt1bWl+MjA4fEt5ZW5qb2pvfjQxNXxMaXJhfjMwN3xMdXdlcm9+MTA0fEx5YW50b25kZX4xMTZ8TWFuYWZ3YX4yMjF8TWFyYWNoYX4zMjB8TWFzYWthfjEwNXxNYXNpbmRpfjQwOXxNYXl1Z2V+MjE0fE1iYWxlfjIwOXxNYmFyYXJhfjQxMHxNaXR5YW5hfjExNHxNb3JvdG9+MzA4fE1veW9+MzA5fE1waWdpfjEwNnxNdWJlbmRlfjEwN3xNdWtvbm9+MTA4fE5ha2FwaXJpcGlyaXR+MzExfE5ha2FzZWtlfjExNXxOYWthc29uZ29sYX4xMDl8TmFtdXR1bWJhfjIyMnxOZWJiaX4zMTB8TnR1bmdhbW9+NDExfE95YW1+MzIxfFBhZGVyfjMxMnxQYWxsaXNhfjIxMHxSYWthaX4xMTB8UnVrdW5naXJpfjQxMnxTZW1iYWJ1bGV+MTExfFNpcm9ua29+MjE1fFNvcm90aX4yMTF8VG9yb3JvfjIxMnxXYWtpc29+MTEzfFl1bWJlfjMxM1wiXSxbXCJVa3JhaW5lXCIsXCJVQVwiLFwiQ2hlcmthc3l+NzF8Q2hlcm5paGl2fjc0fENoZXJuaXZ0c2l+Nzd8RG5pcHJvcGV0cm92c2t+MTJ8RG9uZXRza34xNHxJdmFuby1GcmFua2l2c2t+MjZ8S2hhcmtpdn42M3xLaGVyc29ufjY1fEtobWVsbnl0c2t5aX42OHxLaWV2fjMyfEtpcm92b2hyYWR+MzV8THVoYW5za34wOXxMdml2fjQ2fE15a29sYWl2fjQ4fE9kZXNzYX41MXxQb2x0YXZhfjUzfFJpdm5lfjU2fFN1bXl+NTl8VGVybm9waWx+NjF8Vmlubnl0c2lhfjA1fFZvbHlufjA3fFpha2FycGF0dGlhfjIxfFphcG9yaXpoaWF+MjN8Wmh5dG9teXJ+MTh8QXZ0b25vbW5hIFJlc3B1Ymxpa2EgS3J5bX40M3xLecOvdn4zMHxTZXZhc3RvcG9sfjQwXCJdLFtcIlVuaXRlZCBBcmFiIEVtaXJhdGVzXCIsXCJBRVwiLFwiQWJ1IERoYWJpfkFafEFqbWFufkFKfER1YmFpfkRVfEZ1amFpcmFofkZVfFJhcyBhbCBLaGFpbWFoflJLfFNoYXJqYWh+U0h8VW1tIEFsIFF1d2Fpbn5VUVwiXSxbXCJVbml0ZWQgS2luZ2RvbVwiLFwiR0JcIixcIkF2b25+QVZOfEJlZGZvcmRzaGlyZX5CREZ8QmVya3NoaXJlfkJSS3xCcmlzdG9sLCBDaXR5IG9mfkNPQnxCdWNraW5naGFtc2hpcmV+QktNfENhbWJyaWRnZXNoaXJlfkNBTXxDaGVzaGlyZX5DSFN8Q2xldmVsYW5kfkNMVnxDb3Jud2FsbH5DT058Q3VtYnJpYX5DTUF8RGVyYnlzaGlyZX5EQll8RGV2b25+REVWfERvcnNldH5ET1J8RHVyaGFtfkRVUnxFYXN0IFN1c3NleH5TWEV8RXNzZXh+RVNTfEdsb3VjZXN0ZXJzaGlyZX5HTFN8R3JlYXRlciBMb25kb25+TE5EfEdyZWF0ZXIgTWFuY2hlc3Rlcn5HVE18SGFtcHNoaXJlIChDb3VudHkgb2YgU291dGhhbXB0b24pfkhBTXxIZXJlZm9yZCBhbmQgV29yY2VzdGVyfkhXUnxIZXJlZm9yZHNoaXJlfkhFRnxIZXJ0Zm9yZHNoaXJlfkhSVHxJc2xlIG9mIFdpZ2h0fklPV3xLZW50fktFTnxMYW5jYXNoaXJlfkxBTnxMZWljZXN0ZXJzaGlyZX5MRUl8TGluY29sbnNoaXJlfkxJTnxMb25kb25+TEROfE1lcnNleXNpZGV+TVNZfE1pZGRsZXNleH5NRFh8Tm9yZm9sa35ORkt8Tm9ydGhhbXB0b25zaGlyZX5OVEh8Tm9ydGh1bWJlcmxhbmR+TkJMfE5vcnRoIEh1bWJlcnNpZGV+TkhNfE5vcnRoIFlvcmtzaGlyZX5OWUt8Tm90dGluZ2hhbXNoaXJlfk5UVHxPeGZvcmRzaGlyZX5PWEZ8UnV0bGFuZH5SVVR8U2hyb3BzaGlyZX5TQUx8U29tZXJzZXR+U09NfFNvdXRoIEh1bWJlcnNpZGV+U0hNfFNvdXRoIFlvcmtzaGlyZX5TWUt8U3RhZmZvcmRzaGlyZX5TVFN8U3VmZm9sa35TRkt8U3VycmV5flNSWXxUeW5lIGFuZCBXZWFyflRXUnxXYXJ3aWNrc2hpcmV+V0FSfFdlc3QgTWlkbGFuZHN+V01EfFdlc3QgU3Vzc2V4flNYV3xXZXN0IFlvcmtzaGlyZX5XWUt8V2lsdHNoaXJlfldJTHxXb3JjZXN0ZXJzaGlyZX5XT1J8QW50cmltfkFOVHxBcm1hZ2h+QVJNfEJlbGZhc3QsIENpdHkgb2Z+QkxGfERvd25+RE9XfEZlcm1hbmFnaH5GRVJ8TG9uZG9uZGVycnl+TERZfERlcnJ5LCBDaXR5IG9mfkRSWXxUeXJvbmV+VFlSfEFiZXJkZWVuLCBDaXR5IG9mfkFOfEFiZXJkZWVuc2hpcmV+QUJEfEFuZ3VzIChGb3JmYXJzaGlyZSl+QU5TfEFyZ3lsbH5BR0J8QXlyc2hpcmV+QVJHfEJhbmZmc2hpcmV+QkFOfEJlcndpY2tzaGlyZX5CRVd8QnV0ZX5CVVR8Q2FpdGhuZXNzfkNBSXxDbGFja21hbm5hbnNoaXJlfkNMS3xDcm9tYXJ0eXNoaXJlfkNPQ3xEdW1mcmllc3NoaXJlfkRGU3xEdW5iYXJ0b25zaGlyZSAoRHVtYmFydG9uKX5ETkJ8RHVuZGVlLCBDaXR5IG9mfkREfEVhc3QgTG90aGlhbiAoSGFkZGluZ3RvbnNoaXJlKX5FTE58RWRpbmJ1cmdoLCBDaXR5IG9mfkVCfEZpZmV+RklGfEdsYXNnb3csIENpdHkgb2Z+R0xBfEludmVybmVzcy1zaGlyZX5JTlZ8S2luY2FyZGluZXNoaXJlfktDRHxLaW5yb3NzLXNoaXJlfktSU3xLaXJrY3VkYnJpZ2h0c2hpcmV+S0tEfExhbmFya3NoaXJlfkxLU3xNaWRsb3RoaWFuIChDb3VudHkgb2YgRWRpbmJ1cmdoKX5NTE58TW9yYXkgKEVsZ2luc2hpcmUpfk1PUnxOYWlybnNoaXJlfk5BSXxPcmtuZXl+T0tJfFBlZWJsZXNzaGlyZX5QRUV8UGVydGhzaGlyZX5QRVJ8UmVuZnJld3NoaXJlflJGV3xSb3NzIGFuZCBDcm9tYXJ0eX5ST0N8Um9zcy1zaGlyZX5ST1N8Um94YnVyZ2hzaGlyZX5ST1h8U2Vsa2lya3NoaXJlflNFTHxTaGV0bGFuZCAoWmV0bGFuZCl+U0hJfFN0aXJsaW5nc2hpcmV+U1RJfFN1dGhlcmxhbmR+U1VUfFdlc3QgTG90aGlhbiAoTGlubGl0aGdvd3NoaXJlKX5XTE58V2lndG93bnNoaXJlfldJR3xDbHd5ZH5DV0R8RHlmZWR+REZEfEd3ZW50fkdOVHxHd3luZWRkfkdXTnxNaWQgR2xhbW9yZ2Fufk1HTXxQb3d5c35QT1d8U291dGggR2xhbW9yZ2FuflNHTXxXZXN0IEdsYW1vcmdhbn5XR01cIl0sW1wiVW5pdGVkIFN0YXRlc1wiLFwiVVNcIixcIkFsYWJhbWF+QUx8QWxhc2thfkFLfEFtZXJpY2FuIFNhbW9hfkFTfEFyaXpvbmF+QVp8QXJrYW5zYXN+QVJ8Q2FsaWZvcm5pYX5DQXxDb2xvcmFkb35DT3xDb25uZWN0aWN1dH5DVHxEZWxhd2FyZX5ERXxEaXN0cmljdCBvZiBDb2x1bWJpYX5EQ3xNaWNyb25lc2lhfkZNfEZsb3JpZGF+Rkx8R2VvcmdpYX5HQXxHdWFtfkdVfEhhd2FpaX5ISXxJZGFob35JRHxJbGxpbm9pc35JTHxJbmRpYW5hfklOfElvd2F+SUF8S2Fuc2FzfktTfEtlbnR1Y2t5fktZfExvdWlzaWFuYX5MQXxNYWluZX5NRXxNYXJzaGFsbCBJc2xhbmRzfk1IfE1hcnlsYW5kfk1EfE1hc3NhY2h1c2V0dHN+TUF8TWljaGlnYW5+TUl8TWlubmVzb3Rhfk1OfE1pc3Npc3NpcHBpfk1TfE1pc3NvdXJpfk1PfE1vbnRhbmF+TVR8TmVicmFza2F+TkV8TmV2YWRhfk5WfE5ldyBIYW1wc2hpcmV+Tkh8TmV3IEplcnNleX5OSnxOZXcgTWV4aWNvfk5NfE5ldyBZb3Jrfk5ZfE5vcnRoIENhcm9saW5hfk5DfE5vcnRoIERha290YX5ORHxOb3J0aGVybiBNYXJpYW5hIElzbGFuZHN+TVB8T2hpb35PSHxPa2xhaG9tYX5PS3xPcmVnb25+T1J8UGFsYXV+UFd8UGVubnN5bHZhbmlhflBBfFB1ZXJ0byBSaWNvflBSfFJob2RlIElzbGFuZH5SSXxTb3V0aCBDYXJvbGluYX5TQ3xTb3V0aCBEYWtvdGF+U0R8VGVubmVzc2VlflROfFRleGFzflRYfFV0YWh+VVR8VmVybW9udH5WVHxWaXJnaW4gSXNsYW5kc35WSXxWaXJnaW5pYX5WQXxXYXNoaW5ndG9ufldBfFdlc3QgVmlyZ2luaWF+V1Z8V2lzY29uc2lufldJfFd5b21pbmd+V1l8QXJtZWQgRm9yY2VzIEFtZXJpY2FzfkFBfEFybWVkIEZvcmNlcyBFdXJvcGUsIENhbmFkYSwgQWZyaWNhIGFuZCBNaWRkbGUgRWFzdH5BRXxBcm1lZCBGb3JjZXMgUGFjaWZpY35BUFwiXSxbXCJVbml0ZWQgU3RhdGVzIE1pbm9yIE91dGx5aW5nIElzbGFuZHNcIixcIlVNXCIsXCJCYWtlciBJc2xhbmR+ODF8SG93bGFuZCBJc2xhbmR+ODR8SmFydmlzIElzbGFuZH44NnxKb2huc3RvbiBBdG9sbH42N3xLaW5nbWFuIFJlZWZ+ODl8TWlkd2F5IElzbGFuZHN+NzF8TmF2YXNzYSBJc2xhbmR+NzZ8UGFsbXlyYSBBdG9sbH45NXxXYWtlIElzbGFuZH43OXxCYWpvIE51ZXZvIEJhbmt+Qk58U2VycmFuaWxsYSBCYW5rflNCXCJdLFtcIlVydWd1YXlcIixcIlVZXCIsXCJBcnRpZ2FzfkFSfENhbmVsb25lc35DQXxDZXJybyBMYXJnb35DTHxDb2xvbmlhfkNPfER1cmF6bm9+RFV8RmxvcmVzfkZTfEZsb3JpZGF+RkR8TGF2YWxsZWphfkxBfE1hbGRvbmFkb35NQXxNb250ZXZpZGVvfk1PfFBheXNhbmTDun5QQXxSw61vIE5lZ3JvflJOfFJpdmVyYX5SVnxSb2NoYX5ST3xTYWx0b35TQXxTYW4gSm9zw6l+U0p8U29yaWFub35TT3xUYWN1YXJlbWLDs35UQXxUcmVpbnRhIHkgVHJlc35UVFwiXSxbXCJVemJla2lzdGFuXCIsXCJVWlwiLFwiVG9zaGtlbnQgc2hhaHJpflRLfEFuZGlqb25+QU58QnV4b3JvfkJVfEZhcmfigJhvbmF+RkF8Sml6emF4fkpJfE5hbWFuZ2Fufk5HfE5hdm9peX5OV3xRYXNocWFkYXJ5byAoUWFyc2hpKX5RQXxTYW1hcnFhbmR+U0F8U2lyZGFyeW8gKEd1bGlzdG9uKX5TSXxTdXJ4b25kYXJ5byAoVGVybWl6KX5TVXxUb3Noa2VudCB3aWxveWF0aX5UT3xYb3Jhem0gKFVyZ2FuY2gpflhPfFFvcmFxYWxwb2figJhpc3RvbiBSZXNwdWJsaWthc2kgKE51a3VzKX5RUlwiXSxbXCJWYW51YXR1XCIsXCJWVVwiLFwiTWFsYW1wYX5NQVB8UMOpbmFtYX5QQU18U2FubWF+U0FNfFNow6lmYX5TRUV8VGFmw6lhflRBRXxUb3JiYX5UT0JcIl0sW1wiVmVuZXp1ZWxhLCBCb2xpdmFyaWFuIFJlcHVibGljIG9mXCIsXCJWRVwiLFwiRGVwZW5kZW5jaWFzIEZlZGVyYWxlc35XfERpc3RyaXRvIEZlZGVyYWx+QXxBbWF6b25hc35afEFuem/DoXRlZ3VpfkJ8QXB1cmV+Q3xBcmFndWF+RHxCYXJpbmFzfkV8Qm9sw612YXJ+RnxDYXJhYm9ib35HfENvamVkZXN+SHxEZWx0YSBBbWFjdXJvfll8RmFsY8Ozbn5JfEd1w6FyaWNvfkp8TGFyYX5LfE3DqXJpZGF+THxNaXJhbmRhfk18TW9uYWdhc35OfE51ZXZhIEVzcGFydGF+T3xQb3J0dWd1ZXNhflB8U3VjcmV+UnxUw6FjaGlyYX5TfFRydWppbGxvflR8VmFyZ2Fzflh8WWFyYWN1eX5VfFp1bGlhflZcIl0sW1wiVmlldG5hbVwiLFwiVk5cIixcIsSQ4buTbmcgTmFpfjM5fMSQ4buTbmcgVGjDoXB+NDV8R2lhIExhaX4zMHxIw6AgR2lhbmd+MDN8SMOgIE5hbX42M3xIw6AgVMOieX4xNXxIw6AgVMSpbmh+MjN8SOG6o2kgRMawxqFuZ342MXxI4bqtdSBHaWFuZ343M3xIw7JhIELDrG5ofjE0fEjGsG5nIFnDqm5+NjZ8S2jDoW5oIEjDsmF+MzR8S2nDqm4gR2lhbmd+NDd8S29uIFR1bX4yOHxMYWkgQ2jDonV+MDF8TMOibSDEkOG7k25nfjM1fEzhuqFuZyBTxqFufjA5fEzDoG8gQ2FpfjAyfExvbmcgQW5+NDF8TmFtIMSQ4buLbmh+Njd8Tmdo4buHIEFufjIyfE5pbmggQsOsbmh+MTh8TmluaCBUaHXhuq1ufjM2fFBow7ogVGjhu41+Njh8UGjDuiBZw6pufjMyfFF14bqjbmcgQsOsbmh+MjR8UXXhuqNuZyBOYW1+Mjd8UXXhuqNuZyBOZ8OjaX4yOXxRdeG6o25nIE5pbmh+MTN8UXXhuqNuZyBUcuG7i34yNXxTw7NjIFRyxINuZ341MnxTxqFuIExhfjA1fFTDonkgTmluaH4zN3xUaMOhaSBCw6xuaH4yMHxUaMOhaSBOZ3V5w6pufjY5fFRoYW5oIEjDs2F+MjF8VGjhu6thIFRoacOqbuKAk0h14bq/fjI2fFRp4buBbiBHaWFuZ340NnxUcsOgIFZpbmh+NTF8VHV5w6puIFF1YW5nfjA3fFbEqW5oIExvbmd+NDl8VsSpbmggUGjDumN+NzB8WcOqbiBCw6FpfjA2fEPhuqduIFRoxqF+Q1R8xJDDoCBO4bq1bmd+RE58SMOgIE7hu5lpfkhOfEjhuqNpIFBow7JuZ35IUHxI4buTIENow60gTWluaCAoU8OgaSBHw7JuKX5TR1wiXSxbXCJWaXJnaW4gSXNsYW5kcywgQnJpdGlzaFwiLFwiVkdcIixcIkFuZWdhZGF+QU5HfEpvc3QgVmFuIER5a2V+SlZEfFRvcnRvbGF+VFRBfFZpcmdpbiBHb3JkYX5WR0RcIl0sW1wiVmlyZ2luIElzbGFuZHMsIFUuUy5cIixcIlZJXCIsXCJTdC4gVGhvbWFzflNUSHxTdC4gSm9obn5TSk98U3QuIENyb2l4flNDUlwiXSxbXCJXYWxsaXMgYW5kIEZ1dHVuYVwiLFwiV0ZcIixcIkFsb35BTE98U2lnYXZlflNJR3xXYWxsaXN+V0FMXCJdLFtcIldlc3Rlcm4gU2FoYXJhXCIsXCJFSFwiLFwiRXMgU21hcmF+RVNNfEJvdWpkb3VyfkJPRHxMYcOieW91bmV+TEFBfEFvdXNzZXJkfkFPVXxPdWVkIGVkIERhaGFifk9VRFwiXSxbXCJZZW1lblwiLFwiWUVcIixcIkFiecSBbn5BQnwnQWRhbn5BRHxB4biRIOG4kMSBbGknfkRBfEFsIEJheeG4kcSBJ35CQXxBbCDhuKh1ZGF5ZGFofkhVfEFsIEphd2Z+SkF8QWwgTWFocmFofk1SfEFsIE1h4bipd8SrdH5NV3wnQW1yxIFufkFNfERoYW3EgXJ+REh84bioYeG4kXJhbWF3dH5IRHzhuKhhamphaH5ISnxJYmJ+SUJ8TGHhuKlpan5MQXxNYSdyaWJ+TUF8UmF5bWFoflJBfMWexIHigJhkYWh+U0R8xZ5hbuKAmMSBJ35TTnxTaGFid2FoflNIfFTEgeKAmGl6en5UQVwiXSxbXCJaYW1iaWFcIixcIlpNXCIsXCJDZW50cmFsfjAyfENvcHBlcmJlbHR+MDh8RWFzdGVybn4wM3xMdWFwdWxhfjA0fEx1c2FrYX4wOXxOb3J0aGVybn4wNXxOb3J0aC1XZXN0ZXJufjA2fFNvdXRoZXJufjA3fFdlc3Rlcm5+MDFcIl0sW1wiWmltYmFid2VcIixcIlpXXCIsXCJCdWxhd2F5b35CVXxIYXJhcmV+SEF8TWFuaWNhbGFuZH5NQXxNYXNob25hbGFuZCBDZW50cmFsfk1DfE1hc2hvbmFsYW5kIEVhc3R+TUV8TWFzaG9uYWxhbmQgV2VzdH5NV3xNYXN2aW5nb35NVnxNYXRhYmVsZWxhbmQgTm9ydGh+TU58TWF0YWJlbGVsYW5kIFNvdXRofk1TfE1pZGxhbmRzfk1JXCJdXSxhPWZ1bmN0aW9uKCl7bD1zO2Zvcih2YXIgYT1kb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY3JzLWNvdW50cnlcIiksbj0wO248YS5sZW5ndGg7bisrKWUoYVtuXSl9LGU9ZnVuY3Rpb24oYSl7aWYoXCJ0cnVlXCIhPT1hLmdldEF0dHJpYnV0ZShcImRhdGEtY3JzLWxvYWRlZFwiKSl7YS5sZW5ndGg9MDt2YXIgbj1hLmdldEF0dHJpYnV0ZShcImRhdGEtZGVmYXVsdC1vcHRpb25cIiksZT1ufHxcIlNlbGVjdCBjb3VudHJ5XCIsaT1hLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvdy1kZWZhdWx0LW9wdGlvblwiKTttPW51bGw9PT1pfHxcInRydWVcIj09PWk7dmFyIHI9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRlZmF1bHQtdmFsdWVcIiksbz1hLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiksbD0wO20mJihhLm9wdGlvbnNbMF09bmV3IE9wdGlvbihlLFwiXCIpKSxCKCk7dmFyIHQ9YihhKTtjb25zb2xlLmxvZyhvKTtmb3IodmFyIHM9MDtzPHQubGVuZ3RoO3MrKyl7dmFyIHU9XCJzaG9ydGNvZGVcIj09PW98fFwiMi1jaGFyXCI9PT1vP3Rbc11bMV06dFtzXVswXTt0W3NdWzRdJiYodT1cIlwiKSxhLm9wdGlvbnNbYS5sZW5ndGhdPW5ldyBPcHRpb24odFtzXVswXSx1KSxudWxsIT1yJiZyPT09dSYmKGw9cyxtJiZsKyspfWEuc2VsZWN0ZWRJbmRleD1sO3ZhciBkPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS1yZWdpb24taWRcIik7aWYoZCl7dmFyIGg9ZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZCk7aWYoaClpZihNKGgpLGEub25jaGFuZ2U9ZnVuY3Rpb24oKXtjKGEsaCl9LG51bGwhPT1yJiYwPGEuc2VsZWN0ZWRJbmRleCl7YyhhLGgpO3ZhciBTPWguZ2V0QXR0cmlidXRlKFwiZGF0YS1kZWZhdWx0LXZhbHVlXCIpLEE9XCJzaG9ydGNvZGVcIj09PWguZ2V0QXR0cmlidXRlKFwiZGF0YS12YWx1ZVwiKTtpZihudWxsIT09Uyl7dmFyIGc9dFttP2Euc2VsZWN0ZWRJbmRleC0xOmEuc2VsZWN0ZWRJbmRleF1bM107ayhoLGcsUyxBKX19ZWxzZSExPT09bSYmYyhhLGgpO2Vsc2UgY29uc29sZS5lcnJvcihcIlJlZ2lvbiBkcm9wZG93biBET00gbm9kZSB3aXRoIElEIFwiK2QrXCIgbm90IGZvdW5kLlwiKTthLnNldEF0dHJpYnV0ZShcImRhdGEtY3JzLWxvYWRlZFwiLFwidHJ1ZVwiKX1lbHNlIGNvbnNvbGUuZXJyb3IoXCJNaXNzaW5nIGRhdGEtcmVnaW9uLWlkIG9uIGNvdW50cnktcmVnaW9uLXNlbGVjdG9yIGNvdW50cnkgZmllbGQuXCIpfX0sTT1mdW5jdGlvbihhKXt2YXIgbj1hLmdldEF0dHJpYnV0ZShcImRhdGEtYmxhbmstb3B0aW9uXCIpLGU9bnx8XCItXCIsaT1hLmdldEF0dHJpYnV0ZShcImRhdGEtc2hvdy1kZWZhdWx0LW9wdGlvblwiKTtoPW51bGw9PT1pfHxcInRydWVcIj09PWksYS5sZW5ndGg9MCxoJiYoYS5vcHRpb25zWzBdPW5ldyBPcHRpb24oZSxcIlwiKSxhLnNlbGVjdGVkSW5kZXg9MCl9LEI9ZnVuY3Rpb24oKXtmb3IodmFyIGE9MDthPGwubGVuZ3RoO2ErKyl7Zm9yKHZhciBuPXtoYXNTaG9ydGNvZGVzOi9+Ly50ZXN0KGxbYV1bMl0pLHJlZ2lvbnM6W119LGU9bFthXVsyXS5zcGxpdChcInxcIiksaT0wO2k8ZS5sZW5ndGg7aSsrKXt2YXIgcj1lW2ldLnNwbGl0KFwiflwiKTtuLnJlZ2lvbnMucHVzaChbclswXSxyWzFdXSl9bFthXVszXT1ufX0saz1mdW5jdGlvbihhLG4sZSxpKXtmb3IodmFyIHI9MDtyPG4ucmVnaW9ucy5sZW5ndGg7cisrKXtpZigoaSYmbi5oYXNTaG9ydGNvZGVzJiZuLnJlZ2lvbnNbcl1bMV0/bi5yZWdpb25zW3JdWzFdOm4ucmVnaW9uc1tyXVswXSk9PT1lKXthLnNlbGVjdGVkSW5kZXg9aD9yKzE6cjticmVha319fSxjPWZ1bmN0aW9uKGEsbil7dmFyIGU9bT9hLnNlbGVjdGVkSW5kZXgtMTphLnNlbGVjdGVkSW5kZXgsaT1uLmdldEF0dHJpYnV0ZShcImRhdGEtZGVmYXVsdC1vcHRpb25cIikscj1uLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIiksbz1pfHxcIlNlbGVjdCByZWdpb25cIjtpZihcIlwiPT09YS52YWx1ZSlNKG4pO2Vsc2V7bi5sZW5ndGg9MCxoJiYobi5vcHRpb25zWzBdPW5ldyBPcHRpb24obyxcIlwiKSk7dmFyIGw9YihhKVtlXVszXSx0PVwic2hvcnRjb2RlXCI9PT1yJiZsLmhhc1Nob3J0Y29kZXMscz10PzE6MDtsLnJlZ2lvbnMuc29ydChmdW5jdGlvbihhLG4pe3ZhciBlPWFbc10udG9Mb3dlckNhc2UoKSxpPW5bc10udG9Mb3dlckNhc2UoKTtyZXR1cm4gZTxpPy0xOmk8ZT8xOjB9KTtmb3IodmFyIHU9MDt1PGwucmVnaW9ucy5sZW5ndGg7dSsrKXt2YXIgZD10P2wucmVnaW9uc1t1XVsxXTpsLnJlZ2lvbnNbdV1bMF07bi5vcHRpb25zW24ubGVuZ3RoXT1uZXcgT3B0aW9uKGwucmVnaW9uc1t1XVswXSxkKX1uLnNlbGVjdGVkSW5kZXg9MH19LGI9ZnVuY3Rpb24oYSl7dmFyIG49YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXdoaXRlbGlzdFwiKSxlPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS1ibGFja2xpc3RcIiksaT1hLmdldEF0dHJpYnV0ZShcImRhdGEtcHJlZmVycmVkXCIpLHI9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByZWZlcnJlZC1kZWxpbVwiKSxvPWw7cmV0dXJuKG58fGUpJiYobz1mdW5jdGlvbihhKXt2YXIgbj1hLndoaXRlbGlzdCtcInxcIithLmJsYWNrbGlzdCxlPTA7aWYoIXQuaGFzT3duUHJvcGVydHkobikpaWYodFtuXT1bXSxhLndoaXRlbGlzdCl7dmFyIGk9YS53aGl0ZWxpc3Quc3BsaXQoXCIsXCIpO2ZvcihlPTA7ZTxzLmxlbmd0aDtlKyspLTEhPT1pLmluZGV4T2Yoc1tlXVsxXSkmJnRbbl0ucHVzaChlKX1lbHNlIGlmKGEuYmxhY2tsaXN0KXt2YXIgcj1hLmJsYWNrbGlzdC5zcGxpdChcIixcIik7Zm9yKGU9MDtlPHMubGVuZ3RoO2UrKyktMT09PXIuaW5kZXhPZihzW2VdWzFdKSYmdFtuXS5wdXNoKGUpfXZhciBvPVtdO2ZvcihlPTA7ZTx0W25dLmxlbmd0aDtlKyspby5wdXNoKHNbdFtuXVtlXV0pO3JldHVybiBvfSh7d2hpdGVsaXN0Om4sYmxhY2tsaXN0OmV9KSksaSYmKG89dShvLGkscikpLG99LHU9ZnVuY3Rpb24oYSxuLGUpe3ZhciBpPW4uc3BsaXQoXCIsXCIpLnJldmVyc2UoKSxyPXt9LG89ITEsbD1hLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4tMT09PWkuaW5kZXhPZihhWzFdKXx8KHJbYVsxXV09YSwhKG89ITApKX0pO28mJmUmJmwudW5zaGlmdChbZSxcIlwiLFwiXCIse30sITBdKTtmb3IodmFyIHQ9MDt0PGkubGVuZ3RoO3QrKyl7dmFyIHM9aVt0XTtsLnVuc2hpZnQocltzXSl9cmV0dXJuIGx9O3JldHVybiBmdW5jdGlvbihuLGUpe3ZhciBpPSExLGE9ITAscj1uLmRvY3VtZW50LG89ci5kb2N1bWVudEVsZW1lbnQsbD1yLmFkZEV2ZW50TGlzdGVuZXI/XCJhZGRFdmVudExpc3RlbmVyXCI6XCJhdHRhY2hFdmVudFwiLHQ9ci5hZGRFdmVudExpc3RlbmVyP1wicmVtb3ZlRXZlbnRMaXN0ZW5lclwiOlwiZGV0YWNoRXZlbnRcIixzPXIuYWRkRXZlbnRMaXN0ZW5lcj9cIlwiOlwib25cIix1PWZ1bmN0aW9uKGEpe1wicmVhZHlzdGF0ZWNoYW5nZVwiPT1hLnR5cGUmJlwiY29tcGxldGVcIiE9ci5yZWFkeVN0YXRlfHwoKFwibG9hZFwiPT1hLnR5cGU/bjpyKVt0XShzK2EudHlwZSx1LCExKSwhaSYmKGk9ITApJiZlLmNhbGwobixhLnR5cGV8fGEpKX0sZD1mdW5jdGlvbigpe3RyeXtvLmRvU2Nyb2xsKFwibGVmdFwiKX1jYXRjaChhKXtyZXR1cm4gdm9pZCBzZXRUaW1lb3V0KGQsNTApfXUoXCJwb2xsXCIpfTtpZihcImNvbXBsZXRlXCI9PXIucmVhZHlTdGF0ZSllLmNhbGwobixcImxhenlcIik7ZWxzZXtpZihyLmNyZWF0ZUV2ZW50T2JqZWN0JiZvLmRvU2Nyb2xsKXt0cnl7YT0hbi5mcmFtZUVsZW1lbnR9Y2F0Y2goYSl7fWEmJmQoKX1yW2xdKHMrXCJET01Db250ZW50TG9hZGVkXCIsdSwhMSkscltsXShzK1wicmVhZHlzdGF0ZWNoYW5nZVwiLHUsITEpLG5bbF0ocytcImxvYWRcIix1LCExKX19KHdpbmRvdyxhKSx7aW5pdDphfX0pOyIsImNvbnN0IGRpc3BsYXlPYmplY3RzID0gW1xuICB7XG4gICAgbmFtZTogXCJtYWluXCIsXG4gICAgbm9kZVR5cGU6IFwibWFpblwiLFxuICAgIHBhcmVudDogXCJib2R5XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImNvbnRlbnRDb250YWluZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwibWFpblwiLFxuICAgIGNsYXNzMTogXCJjb250ZW50XCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcImNlbnRyYWxDb250YWluZXJcIixcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmNvbnRlbnRcIixcbiAgICBjbGFzczE6IFwiaW5wdXQtY29udGFpbmVyXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInRpdGxlXCIsXG4gICAgbm9kZVR5cGU6IFwiaDFcIixcbiAgICBwYXJlbnQ6IFwiLmlucHV0LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJ0aXRsZVwiLFxuICAgIHRleHQ6IFwiV2VhdGhlclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJpbnB1dFwiLFxuICAgIG5vZGVUeXBlOiBcImlucHV0XCIsXG4gICAgcGFyZW50OiBcIi5pbnB1dC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwibG9jYXRpb24taW5wdXRcIixcbiAgICBpbnB1dFR5cGU6IFwidGV4dFwiLFxuICAgIHZhbHVlOiBcIlwiLFxuICAgIHBsYWNlaG9sZGVyOiBcIlBsZWFzZSBlbnRlciBhIHRvd24gb3IgY2l0eVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJjb3VudHJ5SW5wdXRcIixcbiAgICBub2RlVHlwZTogXCJzZWxlY3RcIixcbiAgICBwYXJlbnQ6IFwiLmlucHV0LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJjcnMtY291bnRyeVwiLFxuICAgIHZhbHVlOiBcIlwiLFxuICAgIC8vIGRhdGFBdHRyVHlwZTogJ3JlZ2lvbi1pZCcsXG4gICAgZGF0YUF0dHI6ICdVU0EnLFxuICAgIHNob3J0Y29kZTogdHJ1ZSxcbiAgICBwcmVmZXJyZWQ6ICdFUyxVUyxHQicsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcInN0YXRlSW5wdXRcIixcbiAgICBub2RlVHlwZTogXCJzZWxlY3RcIixcbiAgICBwYXJlbnQ6IFwiLmlucHV0LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzdGF0ZS1pbnB1dFwiLFxuICAgIGNsYXNzMjogXCJoaWRkZW5cIixcbiAgICB2YWx1ZTogXCJcIixcbiAgICBpZDogJ1VTQScsXG4gICAgc2hvcnRjb2RlOiB0cnVlLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJzdWJtaXRcIixcbiAgICBub2RlVHlwZTogXCJpbnB1dFwiLFxuICAgIHBhcmVudDogXCIuaW5wdXQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImxvY2F0aW9uLXN1Ym1pdFwiLFxuICAgIHZhbHVlOiBcIlN1Ym1pdFwiLFxuICAgIGlucHV0VHlwZTogXCJidXR0b25cIixcbiAgfSxcbl07XG5cbmNvbnN0IGNhcmRPYmplY3RzID0ge1xuICBjYXJkOiB7XG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5jb250ZW50XCIsXG4gICAgY2xhc3MxOiBcIndlYXRoZXItY2FyZFwiLFxuICB9LFxuICBzdW1tYXJ5OiB7XG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi53ZWF0aGVyLWNhcmRcIixcbiAgICBjbGFzczE6IFwic3VtbWFyeVwiLFxuICB9LFxuICBkZXRhaWxzOiB7XG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi53ZWF0aGVyLWNhcmRcIixcbiAgICBjbGFzczE6IFwiZGV0YWlsc1wiLFxuICB9LFxuICBsb2NhdGlvbjoge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLnN1bW1hcnlcIixcbiAgICBjbGFzczE6IFwibG9jYXRpb25cIixcbiAgfSxcbiAgdGVtcENvbnRhaW5lcjoge1xuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICB9LFxuICBtYWluVGVtcENvbnRhaW5lcjoge1xuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICB9LFxuICB0ZW1wOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIudGVtcC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwidGVtcFwiLFxuICAgIGNsYXNzMjogXCJ0ZW1wZXJhdHVyZVwiLFxuICB9LFxuICB0ZW1wVW5pdHM6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgY2xhc3MxOiBcInRlbXAtdW5pdFwiLFxuICB9LFxuICBkZXNjcmlwdGlvbjoge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLnN1bW1hcnlcIixcbiAgICBjbGFzczE6IFwiZGVzY3JpcHRpb25cIixcbiAgfSxcbiAgZm9yZWNhc3REZXNjcmlwdGlvbjoge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLnN1bW1hcnlcIixcbiAgICBjbGFzczE6IFwiZm9yZWNhc3QtZGVzY3JpcHRpb25cIixcbiAgfSxcbiAgaHVtaWRpdHk6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5odW1pZGl0eS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiaHVtaWRpdHlcIixcbiAgfSxcbiAgaHVtaWRpdHlUaXRsZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLmh1bWlkaXR5LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJodW1pZGl0eS10aXRsZVwiLFxuICAgIHRleHQ6IFwiSHVtaWRpdHkgKCUpXCIsXG4gIH0sXG4gIGhpZ2g6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5oaWdoLXRlbXAtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImhpZ2hcIixcbiAgICBjbGFzczI6IFwidGVtcGVyYXR1cmVcIixcbiAgfSxcbiAgaGlnaFRpdGxlOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuaGlnaC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiaGlnaC10aXRsZVwiLFxuICAgIHRleHQ6IFwiSGlnaFwiLFxuICB9LFxuICBsb3c6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5sb3ctdGVtcC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwibG93XCIsXG4gICAgY2xhc3MyOiBcInRlbXBlcmF0dXJlXCIsXG4gIH0sXG4gIGxvd1RpdGxlOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIubG93LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJsb3ctdGl0bGVcIixcbiAgICB0ZXh0OiBcIkxvd1wiLFxuICB9LFxuICBmZWVsc0xpa2U6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5mZWVscy10ZW1wLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJmZWVsc0xpa2VcIixcbiAgICBjbGFzczI6IFwidGVtcGVyYXR1cmVcIixcbiAgfSxcbiAgZmVlbHNMaWtlVGl0bGU6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5mZWVscy1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiZmVlbHMtdGl0bGVcIixcbiAgICB0ZXh0OiBcIkZlZWxzIGxpa2VcIixcbiAgfSxcbiAgY2xvdWRzOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuY2xvdWRzLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJjbG91ZHNcIixcbiAgfSxcbiAgY2xvdWRzVGl0bGU6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5jbG91ZHMtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImNsb3Vkcy10aXRsZVwiLFxuICAgIHRleHQ6IFwiQ2xvdWQgY292ZXIgKCUpXCIsXG4gIH0sXG4gIHByZXNzdXJlOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIucHJlc3N1cmUtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInByZXNzdXJlXCIsXG4gIH0sXG4gIHByZXNzdXJlVGl0bGU6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5wcmVzc3VyZS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwicHJlc3N1cmUtdGl0bGVcIixcbiAgICB0ZXh0OiBcIlByZXNzdXJlIChtYmFyKVwiLFxuICB9LFxuICBzdW5yaXNlOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuc3VucmlzZS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwic3VucmlzZVwiLFxuICAgIGNsYXNzMjogXCJ0aW1lXCIsXG4gIH0sXG4gIHN1bnJpc2VUaXRsZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLnN1bnJpc2UtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInN1bnJpc2UtdGl0bGVcIixcbiAgICB0ZXh0OiBcIlN1bnJpc2UgdG9kYXlcIixcbiAgfSxcbiAgc3Vuc2V0OiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuc3Vuc2V0LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzdW5zZXRcIixcbiAgICBjbGFzczI6IFwidGltZVwiLFxuICB9LFxuICBzdW5zZXRUaXRsZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLnN1bnNldC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwic3Vuc2V0LXRpdGxlXCIsXG4gICAgdGV4dDogXCJTdW5zZXQgdG9kYXlcIixcbiAgfSxcbiAgdmlzOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIudmlzLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJ2aXNcIixcbiAgfSxcbiAgdmlzVGl0bGU6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi52aXMtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInZpcy10aXRsZVwiLFxuICAgIHRleHQ6IFwiVmlzaWJpbGl0eSAobWV0ZXJzKVwiLFxuICB9LFxuICB3aW5kRGlyVGl0bGU6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi53aW5kLWRpci1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwid2luZC1kaXItdGl0bGVcIixcbiAgICB0ZXh0OiBcIldpbmQgZGlyZWN0aW9uXCIsXG4gIH0sXG4gIHdpbmREaXI6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi53aW5kLWRpci1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwid2luZC1kaXJcIixcbiAgfSxcbiAgd2luZFNwZWVkVGl0bGU6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi53aW5kLXNwZWVkLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJ3aW5kLXNwZWVkLXRpdGxlXCIsXG4gICAgdGV4dDogXCJXaW5kIHNwZWVkXCIsXG4gIH0sXG4gIHdpbmRTcGVlZDoge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLndpbmQtc3BlZWQtdW5pdC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwid2luZC1zcGVlZFwiLFxuICB9LFxuICBkZXRhaWxDb250YWluZXI6IHtcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmRldGFpbHNcIixcbiAgICBjbGFzczE6IFwiZGV0YWlsLWNvbnRhaW5lclwiLFxuICB9LFxuICBkZXRhaWxUaXRsZToge1xuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICB9LFxuICB0ZW1wVW5pdENvbnRhaW5lcjoge1xuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICB9LFxuICB3aW5kVW5pdENvbnRhaW5lcjoge1xuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIud2luZC1zcGVlZC1jb250YWluZXJcIixcbiAgfSxcbiAgd2luZFVuaXRzOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIud2luZC1zcGVlZC11bml0LWNvbnRhaW5lclwiLFxuICAgIHRleHQ6IFwia20vaFwiLFxuICAgIGNsYXNzMTogXCJ3aW5kLXVuaXRzXCIsXG4gIH0sXG4gIHRvZ2dsZVVuaXRzOiB7XG4gICAgbm9kZVR5cGU6IFwiaW5wdXRcIixcbiAgICBwYXJlbnQ6IFwiLndlYXRoZXItY2FyZFwiLFxuICAgIGNsYXNzMTogXCJ0b2dnbGUtdW5pdHNcIixcbiAgICB2YWx1ZTogXCJDbGljayB0byB0b2dnbGUgdW5pdHNcIixcbiAgICBpbnB1dFR5cGU6IFwiYnV0dG9uXCIsXG4gIH0sXG4gIGZvcmVjYXN0Q29udGFpbmVyOiB7XG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi53ZWF0aGVyLWNhcmRcIixcbiAgICBjbGFzczE6IFwiZm9yZWNhc3QtY29udGFpbmVyXCIsXG4gIH0sXG4gIGZvcmVjYXN0Q2FyZDoge1xuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuZm9yZWNhc3QtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImZvcmVjYXN0XCIsXG4gIH0sXG4gIGZvcmVjYXN0VGltZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBjbGFzczE6IFwiZm9yZWNhc3QtdGltZVwiLFxuICAgIGNsYXNzMzogXCJ0aW1lXCIsXG4gIH0sXG4gIGZvcmVjYXN0VGVtcDoge1xuICAgbm9kZVR5cGU6IFwicFwiLFxuICAgY2xhc3MxOiBcImZvcmVjYXN0LXRlbXBcIixcbiAgIGNsYXNzMzogXCJ0ZW1wZXJhdHVyZVwiLFxuICB9LFxuICBmb3JlY2FzdFN1bW1hcnk6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgY2xhc3MxOiBcImZvcmVjYXN0LXN1bW1hcnlcIixcbiAgfSxcbiAgZm9yZWNhc3RIdW1pZGl0eToge1xuICAgbm9kZVR5cGU6IFwicFwiLFxuICAgY2xhc3MxOiBcImZvcmVjYXN0LWh1bWlkaXR5XCIsXG4gIH0sXG4gIGZvcmVjYXN0Q291bnQ6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgY2xhc3MxOiBcImZvcmVjYXN0LWNvdW50XCIsXG4gIH0sXG4gIGZvcmVjYXN0SWNvbjoge1xuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIGNsYXNzMTogXCJmb3JlY2FzdC1pY29uXCIsXG4gIH1cbn07XG5cbmNvbnN0IGVycm9ycyA9IHtcbiAgNDA0OiB7XG4gICAgbm9kZVR5cGU6IFwiaDJcIixcbiAgICBwYXJlbnQ6IFwiLmNvbnRlbnRcIixcbiAgICBjbGFzczE6IFwiZXJyb3JcIixcbiAgICB0ZXh0OiBcIkVycm9yIDQwNDogTG9jYXRpb24gbm90IGZvdW5kLiBQbGVhc2UgZW50ZXIgYSB2YWxpZCBsb2NhdGlvbi5cIixcbiAgfSxcbiAgNTIwOiB7XG4gICAgbm9kZVR5cGU6IFwiaDJcIixcbiAgICBwYXJlbnQ6IFwiLmNvbnRlbnRcIixcbiAgICBjbGFzczE6IFwiZXJyb3JcIixcbiAgICB0ZXh0OiBcIkVycm9yIDUyMDogRW1wdHksIHVua25vd24sIHVuZXhwZWN0ZWQsIG9yIG5vIHJlc3BvbnNlXCIsXG4gIH0sXG59O1xuXG5leHBvcnQgeyBkaXNwbGF5T2JqZWN0cywgY2FyZE9iamVjdHMsIGVycm9ycyB9O1xuIiwiaW1wb3J0IHsgY29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuL2NvbXBvbmVudEZhY3RvcnlcIjtcbmltcG9ydCB7IGNhcmRPYmplY3RzIH0gZnJvbSBcIi4vZGlzcGxheU9iamVjdHNcIjtcbmltcG9ydCBjcnNNaW4gZnJvbSBcIi4vY3JzLm1pblwiO1xuXG5jb25zdCBkcmF3Q2FyZCA9ICgpID0+IHtcbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jYXJkXCIpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWNhcmRcIikucmVtb3ZlKCk7XG4gIH1cbiAgaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZXJyb3JcIikpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpLnJlbW92ZSgpO1xuICB9XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuY2FyZCk7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuc3VtbWFyeSk7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMudG9nZ2xlVW5pdHMpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLmRldGFpbHMpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLmxvY2F0aW9uKTtcbiAgLy9cbiAgY29uc3QgdGVtcENvbnRhaW5lcjEgPSBjYXJkT2JqZWN0cy5tYWluVGVtcENvbnRhaW5lcjtcbiAgdGVtcENvbnRhaW5lcjEucGFyZW50ID0gXCIuc3VtbWFyeVwiO1xuICB0ZW1wQ29udGFpbmVyMS5jbGFzczEgPSBcInRlbXAtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkodGVtcENvbnRhaW5lcjEpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLnRlbXApO1xuICBjb25zdCB0ZW1wVW5pdDAgPSBjYXJkT2JqZWN0cy50ZW1wVW5pdHM7XG4gIHRlbXBVbml0MC5wYXJlbnQgPSBcIi50ZW1wLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KHRlbXBVbml0MCk7XG4gIC8vXG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuZGVzY3JpcHRpb24pO1xuICAvL1xuICBjb25zdCBmZWVsc0NvbnRhaW5lciA9IGNhcmRPYmplY3RzLnRlbXBDb250YWluZXI7XG4gIGZlZWxzQ29udGFpbmVyLnBhcmVudCA9IFwiLmRldGFpbHNcIjtcbiAgZmVlbHNDb250YWluZXIuY2xhc3MxID0gXCJmZWVscy1jb250YWluZXJcIjtcbiAgZmVlbHNDb250YWluZXIuY2xhc3MyID0gXCJkZXRhaWwtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkoZmVlbHNDb250YWluZXIpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLmZlZWxzTGlrZVRpdGxlKTtcbiAgY29uc3QgZmVlbHNUZW1wQ29udGFpbmVyID0gY2FyZE9iamVjdHMudGVtcFVuaXRDb250YWluZXI7XG4gIGZlZWxzVGVtcENvbnRhaW5lci5jbGFzczEgPSBcImZlZWxzLXRlbXAtY29udGFpbmVyXCI7XG4gIGZlZWxzVGVtcENvbnRhaW5lci5jbGFzczIgPSBcInRlbXAtZGV0YWlscy1jb250YWluZXJcIjtcbiAgZmVlbHNUZW1wQ29udGFpbmVyLnBhcmVudCA9IFwiLmZlZWxzLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KGZlZWxzVGVtcENvbnRhaW5lcik7XG5cbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5mZWVsc0xpa2UpO1xuICBjb25zdCBmZWVsc1VuaXRzID0gY2FyZE9iamVjdHMudGVtcFVuaXRzO1xuICBmZWVsc1VuaXRzLnBhcmVudCA9IFwiLmZlZWxzLXRlbXAtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkoZmVlbHNVbml0cyk7XG4gIC8vXG4gIGNvbnN0IGh1bWlkaXR5Q29udGFpbmVyID0gY2FyZE9iamVjdHMuZGV0YWlsQ29udGFpbmVyO1xuICBodW1pZGl0eUNvbnRhaW5lci5jbGFzczIgPSBcImh1bWlkaXR5LWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KGh1bWlkaXR5Q29udGFpbmVyKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5odW1pZGl0eVRpdGxlKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5odW1pZGl0eSk7XG4gIC8vXG5cbiAgY29uc3QgaGlnaENvbnRhaW5lciA9IGNhcmRPYmplY3RzLnRlbXBDb250YWluZXI7XG4gIGhpZ2hDb250YWluZXIucGFyZW50ID0gXCIuZGV0YWlsc1wiO1xuICBoaWdoQ29udGFpbmVyLmNsYXNzMSA9IFwiaGlnaC1jb250YWluZXJcIjtcbiAgaGlnaENvbnRhaW5lci5jbGFzczIgPSBcImRldGFpbC1jb250YWluZXJcIjtcbiAgY29tcG9uZW50RmFjdG9yeShoaWdoQ29udGFpbmVyKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5oaWdoVGl0bGUpO1xuICBjb25zdCBoaWdoVGVtcENvbnRhaW5lciA9IGNhcmRPYmplY3RzLnRlbXBVbml0Q29udGFpbmVyO1xuICBoaWdoVGVtcENvbnRhaW5lci5jbGFzczEgPSBcImhpZ2gtdGVtcC1jb250YWluZXJcIjtcbiAgaGlnaFRlbXBDb250YWluZXIuY2xhc3MyID0gXCJ0ZW1wLWRldGFpbHMtY29udGFpbmVyXCI7XG4gIGhpZ2hUZW1wQ29udGFpbmVyLnBhcmVudCA9IFwiLmhpZ2gtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkoaGlnaFRlbXBDb250YWluZXIpO1xuXG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuaGlnaCk7XG4gIGNvbnN0IGhpZ2hVbml0cyA9IGNhcmRPYmplY3RzLnRlbXBVbml0cztcbiAgaGlnaFVuaXRzLnBhcmVudCA9IFwiLmhpZ2gtdGVtcC1jb250YWluZXJcIjtcbiAgY29tcG9uZW50RmFjdG9yeShoaWdoVW5pdHMpO1xuXG4gIGNvbnN0IGxvd0NvbnRhaW5lciA9IGNhcmRPYmplY3RzLnRlbXBDb250YWluZXI7XG4gIGxvd0NvbnRhaW5lci5wYXJlbnQgPSBcIi5kZXRhaWxzXCI7XG4gIGxvd0NvbnRhaW5lci5jbGFzczEgPSBcImxvdy1jb250YWluZXJcIjtcbiAgbG93Q29udGFpbmVyLmNsYXNzMiA9IFwiZGV0YWlsLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KGxvd0NvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMubG93VGl0bGUpO1xuICBjb25zdCBsb3dUZW1wQ29udGFpbmVyID0gY2FyZE9iamVjdHMudGVtcFVuaXRDb250YWluZXI7XG4gIGxvd1RlbXBDb250YWluZXIuY2xhc3MxID0gXCJsb3ctdGVtcC1jb250YWluZXJcIjtcbiAgbG93VGVtcENvbnRhaW5lci5jbGFzczIgPSBcInRlbXAtZGV0YWlscy1jb250YWluZXJcIjtcbiAgbG93VGVtcENvbnRhaW5lci5wYXJlbnQgPSBcIi5sb3ctY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkobG93VGVtcENvbnRhaW5lcik7XG5cbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5sb3cpO1xuICBjb25zdCBsb3dVbml0cyA9IGNhcmRPYmplY3RzLnRlbXBVbml0cztcbiAgbG93VW5pdHMucGFyZW50ID0gXCIubG93LXRlbXAtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkobG93VW5pdHMpO1xuXG4gIGNvbnN0IGNsb3Vkc0NvbnRhaW5lciA9IGNhcmRPYmplY3RzLmRldGFpbENvbnRhaW5lcjtcbiAgY2xvdWRzQ29udGFpbmVyLmNsYXNzMiA9IFwiY2xvdWRzLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KGNsb3Vkc0NvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuY2xvdWRzVGl0bGUpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLmNsb3Vkcyk7XG5cbiAgY29uc3QgcHJlc3N1cmVDb250YWluZXIgPSBjYXJkT2JqZWN0cy5kZXRhaWxDb250YWluZXI7XG4gIHByZXNzdXJlQ29udGFpbmVyLmNsYXNzMiA9IFwicHJlc3N1cmUtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkocHJlc3N1cmVDb250YWluZXIpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLnByZXNzdXJlVGl0bGUpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLnByZXNzdXJlKTtcblxuICBjb25zdCBzdW5yaXNlQ29udGFpbmVyID0gY2FyZE9iamVjdHMuZGV0YWlsQ29udGFpbmVyO1xuICBzdW5yaXNlQ29udGFpbmVyLmNsYXNzMiA9IFwic3VucmlzZS1jb250YWluZXJcIjtcbiAgY29tcG9uZW50RmFjdG9yeShzdW5yaXNlQ29udGFpbmVyKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5zdW5yaXNlVGl0bGUpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLnN1bnJpc2UpO1xuXG4gIGNvbnN0IHN1bnNldENvbnRhaW5lciA9IGNhcmRPYmplY3RzLmRldGFpbENvbnRhaW5lcjtcbiAgc3Vuc2V0Q29udGFpbmVyLmNsYXNzMiA9IFwic3Vuc2V0LWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KHN1bnNldENvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuc3Vuc2V0VGl0bGUpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLnN1bnNldCk7XG5cbiAgY29uc3QgdmlzQ29udGFpbmVyID0gY2FyZE9iamVjdHMuZGV0YWlsQ29udGFpbmVyO1xuICB2aXNDb250YWluZXIuY2xhc3MyID0gXCJ2aXMtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkodmlzQ29udGFpbmVyKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy52aXNUaXRsZSk7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMudmlzKTtcblxuICBjb25zdCB3aW5kRGlyQ29udGFpbmVyID0gY2FyZE9iamVjdHMuZGV0YWlsQ29udGFpbmVyO1xuICB3aW5kRGlyQ29udGFpbmVyLmNsYXNzMiA9IFwid2luZC1kaXItY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3Rvcnkod2luZERpckNvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMud2luZERpclRpdGxlKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy53aW5kRGlyKTtcblxuICBjb25zdCB3aW5kU3BlZWRDb250YWluZXIgPSBjYXJkT2JqZWN0cy5kZXRhaWxDb250YWluZXI7XG4gIHdpbmRTcGVlZENvbnRhaW5lci5jbGFzczIgPSBcIndpbmQtc3BlZWQtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3Rvcnkod2luZFNwZWVkQ29udGFpbmVyKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy53aW5kU3BlZWRUaXRsZSk7XG4gIGNvbnN0IHdpbmRTcGVlZFVuaXRDb250YWluZXIgPSBjYXJkT2JqZWN0cy53aW5kVW5pdENvbnRhaW5lcjtcbiAgd2luZFNwZWVkVW5pdENvbnRhaW5lci5jbGFzczEgPSBcIndpbmQtc3BlZWQtdW5pdC1jb250YWluZXJcIjtcbiAgY29tcG9uZW50RmFjdG9yeSh3aW5kU3BlZWRVbml0Q29udGFpbmVyKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy53aW5kU3BlZWQpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLndpbmRVbml0cyk7XG5cbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5mb3JlY2FzdENvbnRhaW5lcik7XG59O1xuXG5leHBvcnQgeyBkcmF3Q2FyZCB9O1xuIiwiY29uc3QgZ2V0RGVzY3JpcHRpb24gPSAoaWQpID0+IHtcbiAgbGV0IHdlYXRoZXI7XG4gIGxldCBpbWc7XG4gIHN3aXRjaCAoaWQpIHtcbiAgICBjYXNlIDIwMDpcbiAgICAgIHdlYXRoZXIgPSBcIlRodW5kZXJzdG9ybSB3aXRoIGxpZ2h0IHJhaW5cIjtcbiAgICAgIGltZyA9IFwiU3Rvcm1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjAxOlxuICAgICAgd2VhdGhlciA9IFwiVGh1bmRlcnN0b3JtIHdpdGggcmFpblwiO1xuICAgICAgaW1nID0gXCJTdG9ybVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyMDI6XG4gICAgICB3ZWF0aGVyID0gXCJUaHVuZGVyc3Rvcm0gd2l0aCBoZWF2eSByYWluXCI7XG4gICAgICBpbWcgPSBcIlN0b3JtXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDIxMDpcbiAgICAgIHdlYXRoZXIgPSBcIkxpZ2h0IHRodW5kZXJzdG9ybVwiO1xuICAgICAgaW1nID0gXCJTdG9ybVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyMTE6XG4gICAgICB3ZWF0aGVyID0gXCJUaHVuZGVyc3Rvcm1cIjtcbiAgICAgIGltZyA9IFwiU3Rvcm1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjEyOlxuICAgICAgd2VhdGhlciA9IFwiSGVhdnkgdGh1bmRlcnN0b3JtXCI7XG4gICAgICBpbWcgPSBcIlN0b3JtXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDIyMTpcbiAgICAgIHdlYXRoZXIgPSBcIlJhZ2dlZCB0aHVuZGVyc3Rvcm1cIjtcbiAgICAgIGltZyA9IFwiU3Rvcm1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjMwOlxuICAgICAgd2VhdGhlciA9IFwiVGh1bmRlcnN0b3JtIHdpdGggbGlnaHQgZHJpenpsZVwiO1xuICAgICAgaW1nID0gXCJTdG9ybVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyMzE6XG4gICAgICB3ZWF0aGVyID0gXCJUaHVuZGVyc3Rvcm0gd2l0aCBkcml6emxlXCI7XG4gICAgICBpbWcgPSBcIlN0b3JtXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDIzMjpcbiAgICAgIHdlYXRoZXIgPSBcIlRodW5kZXJzdG9ybSB3aXRoIGhlYXZ5IGRyaXp6bGVcIjtcbiAgICAgIGltZyA9IFwiU3Rvcm1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzAwOlxuICAgICAgd2VhdGhlciA9IFwiTGlnaHQgaW50ZW5zaXR5IGRyaXp6bGVcIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMDE6XG4gICAgICB3ZWF0aGVyID0gXCJEcml6emxlXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzAyOlxuICAgICAgd2VhdGhlciA9IFwiSGVhdnkgaW50ZW5zaXR5IGRyaXp6bGVcIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMTA6XG4gICAgICB3ZWF0aGVyID0gXCJMaWdodCBpbnRlbnNpdHkgZHJpenpsZSByYWluXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzExOlxuICAgICAgd2VhdGhlciA9IFwiRHJpenpsZSByYWluXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzEyOlxuICAgICAgd2VhdGhlciA9IFwiSGVhdnkgaW50ZW5zaXR5IGRyaXp6bGUgcmFpblwiO1xuICAgICAgaW1nID0gXCJSYWluXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMxMzpcbiAgICAgIHdlYXRoZXIgPSBcIlNob3dlciByYWluIGFuZCBkcml6emxlXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzE0OlxuICAgICAgd2VhdGhlciA9IFwiSGVhdnkgc2hvd2VyIHJhaW4gYW5kIGRyaXp6bGVcIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMjE6XG4gICAgICB3ZWF0aGVyID0gXCJTaG93ZXIgZHJpenpsZVwiO1xuICAgICAgaW1nID0gXCJSYWluXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDUwMDpcbiAgICAgIHdlYXRoZXIgPSBcIkxpZ2h0IHJhaW5cIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MDE6XG4gICAgICB3ZWF0aGVyID0gXCJNb2RlcmF0ZSByYWluXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTAyOlxuICAgICAgd2VhdGhlciA9IFwiSGVhdnkgaW50ZW5zaXR5IHJhaW5cIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MDM6XG4gICAgICB3ZWF0aGVyID0gXCJWZXJ5IGhlYXZ5IHJhaW5cIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MDQ6XG4gICAgICB3ZWF0aGVyID0gXCJFeHRyZW1lIHJhaW5cIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MjA6XG4gICAgICB3ZWF0aGVyID0gXCJMaWdodCBpbnRlbnNpdHkgc2hvd2VyIHJhaW5cIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MjE6XG4gICAgICB3ZWF0aGVyID0gXCJTaG93ZXIgcmFpbiBcIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MjI6XG4gICAgICB3ZWF0aGVyID0gXCJIZWF2eSBpbnRlbnNpdHkgc2hvd2VyIHJhaW4gXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTMxOlxuICAgICAgd2VhdGhlciA9IFwiUmFnZ2VkIHNob3dlciByYWluXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjAwOlxuICAgICAgd2VhdGhlciA9IFwiTGlnaHQgc25vd1wiO1xuICAgICAgaW1nID0gXCJTbm93XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDYwMTpcbiAgICAgIHdlYXRoZXIgPSBcIlNub3dcIjtcbiAgICAgIGltZyA9IFwiU25vd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MDI6XG4gICAgICB3ZWF0aGVyID0gXCJIZWF2eSBzbm93XCI7XG4gICAgICBpbWcgPSBcIlNub3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjExOlxuICAgICAgd2VhdGhlciA9IFwiU2xlZXRcIjtcbiAgICAgIGltZyA9IFwiU25vd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MTI6XG4gICAgICB3ZWF0aGVyID0gXCJMaWdodCBzaG93ZXIgc2xlZXRcIjtcbiAgICAgIGltZyA9IFwiU25vd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MTM6XG4gICAgICB3ZWF0aGVyID0gXCJTaG93ZXIgc2xlZXRcIjtcbiAgICAgIGltZyA9IFwiU25vd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MTU6XG4gICAgICB3ZWF0aGVyID0gXCJMaWdodCByYWluIGFuZCBzbm93XCI7XG4gICAgICBpbWcgPSBcIlNub3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjE2OlxuICAgICAgd2VhdGhlciA9IFwiUmFpbiBhbmQgc25vd1wiO1xuICAgICAgaW1nID0gXCJTbm93XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDYyMDpcbiAgICAgIHdlYXRoZXIgPSBcIkxpZ2h0IHNob3dlciBzbm93XCI7XG4gICAgICBpbWcgPSBcIlNub3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjIxOlxuICAgICAgd2VhdGhlciA9IFwiU2hvd2VyIHNub3dcIjtcbiAgICAgIGltZyA9IFwiU25vd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MjI6XG4gICAgICB3ZWF0aGVyID0gXCJIZWF2eSBzaG93ZXIgc25vd1wiO1xuICAgICAgaW1nID0gXCJTbm93XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDcwMTpcbiAgICAgIHdlYXRoZXIgPSBcIk1pc3RcIjtcbiAgICAgIGltZyA9IFwiRm9nXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDcxMTpcbiAgICAgIHdlYXRoZXIgPSBcIlNtb2tlXCI7XG4gICAgICBpbWcgPSBcIlNtb2tlXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDcyMTpcbiAgICAgIHdlYXRoZXIgPSBcIkhhemVcIjtcbiAgICAgIGltZyA9IFwiSGF6ZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3MzE6XG4gICAgICB3ZWF0aGVyID0gXCJEdXN0XCI7XG4gICAgICBpbWcgPSBcIkR1c3RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzQxOlxuICAgICAgd2VhdGhlciA9IFwiRm9nXCI7XG4gICAgICBpbWcgPSBcIkZvZ1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3NTE6XG4gICAgICB3ZWF0aGVyID0gXCJTYW5kXCI7XG4gICAgICBpbWcgPSBcIkR1c3RcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzYxOlxuICAgICAgd2VhdGhlciA9IFwiRHVzdFwiO1xuICAgICAgaW1nID0gXCJEdXN0XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc2MjpcbiAgICAgIHdlYXRoZXIgPSBcIkFzaFwiO1xuICAgICAgaW1nID0gXCJBc2hcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzcxOlxuICAgICAgd2VhdGhlciA9IFwiU3F1YWxsc1wiO1xuICAgICAgaW1nID0gXCJXaW5kXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc4MTpcbiAgICAgIHdlYXRoZXIgPSBcIlRvcm5hZG9cIjtcbiAgICAgIGltZyA9IFwiU3Rvcm1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODAwOlxuICAgICAgd2VhdGhlciA9IFwiQ2xlYXJcIjtcbiAgICAgIGltZyA9IFwiQ2xlYXJcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODAxOlxuICAgICAgd2VhdGhlciA9IFwiRmV3IGNsb3VkczogMTEtMjUlIFwiO1xuICAgICAgaW1nID0gXCJMQ2xvdWRzXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDgwMjpcbiAgICAgIHdlYXRoZXIgPSBcIlNjYXR0ZXJlZCBjbG91ZHM6IDI1LTUwJVwiO1xuICAgICAgaW1nID0gXCJMQ2xvdWRzXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDgwMzpcbiAgICAgIHdlYXRoZXIgPSBcIkJyb2tlbiBjbG91ZHM6IDUxLTg0JVwiO1xuICAgICAgaW1nID0gXCJDbG91ZHNcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODA0OlxuICAgICAgd2VhdGhlciA9IFwib3ZlcmNhc3QgY2xvdWRzOiA4NS0xMDAlXCI7XG4gICAgICBpbWcgPSBcIkNsb3Vkc1wiO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHdlYXRoZXIgPSBcIkVycm9yISBDb3VsZG4ndCBmaW5kIHdlYXRoZXIgY29kZS5cIjtcbiAgICAgIGltZyA9IFwiQ2xlYXJcIjtcbiAgfVxuICByZXR1cm4gW3dlYXRoZXIsIGltZ107XG59O1xuXG5leHBvcnQgeyBnZXREZXNjcmlwdGlvbiB9O1xuIiwiaW1wb3J0IHsgY2FyZE9iamVjdHMsIGRpc3BsYXlPYmplY3RzLCBlcnJvcnMgfSBmcm9tIFwiLi9kaXNwbGF5T2JqZWN0c1wiO1xuaW1wb3J0IHsgcHJvY2Vzc0lucHV0IH0gZnJvbSBcIi4vYXBwXCI7XG5pbXBvcnQgeyBnZXREZXNjcmlwdGlvbiB9IGZyb20gXCIuL2dldERlc2NyaXB0aW9uXCI7XG5pbXBvcnQgeyBkcmF3Q2FyZCB9IGZyb20gXCIuL2RyYXdDYXJkXCI7XG5pbXBvcnQgeyBjb21wb25lbnRGYWN0b3J5IH0gZnJvbSBcIi4vY29tcG9uZW50RmFjdG9yeVwiO1xuaW1wb3J0IHsgc2V0QmFja2dyb3VuZCB9IGZyb20gXCIuL3NldEJhY2tncm91bmRcIjtcbmltcG9ydCB7IHNldEZvcmVjYXN0SWNvbiB9IGZyb20gXCIuL3NldEZvcmVjYXN0SWNvblwiO1xuaW1wb3J0IHtcbiAgcm91bmRUZW1wLFxuICBjb252ZXJ0VGltZXMsXG4gIGNvbnZlcnRUZW1wcyxcbiAgY29udmVydFZpcyxcbiAgY29udmVydFdpbmQsXG4gIGNvbnZlcnRGcm9tS2VsdmluLFxuICBjb252ZXJ0VGltZXNGcm9tVW5peCxcbn0gZnJvbSBcIi4vY29udmVyc2lvbnNcIjtcblxuY29uc3QgYnVpbGRJbnRlcmZhY2UgPSAoKSA9PiB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZGlzcGxheU9iamVjdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBlbGVtZW50ID0gZGlzcGxheU9iamVjdHNbaV07XG4gICAgY29tcG9uZW50RmFjdG9yeShlbGVtZW50KTtcbiAgfVxuICBhZGRMaXN0ZW5lcnMoKTtcbn07XG5cbmNvbnN0IHRvZ2dsZVVuaXRzID0gKCkgPT4ge1xuICBjb25zdCB1bml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVtcC11bml0XCIpO1xuICBpZiAodW5pdHNbMF0udGV4dENvbnRlbnQgPT09IFwiwrBDXCIpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB1bml0c1tpXS50ZXh0Q29udGVudCA9IFwiwrBGXCI7XG4gICAgfVxuICAgIGNvbnZlcnRUZW1wcygwKTtcbiAgICBjb252ZXJ0VGltZXMoMSk7XG4gICAgY29udmVydFdpbmQoMCk7XG4gICAgY29uc3QgdmlzVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpcy10aXRsZVwiKTtcbiAgICB2aXNUaXRsZS50ZXh0Q29udGVudCA9IFwiVmlzaWJpbGl0eSAoeWFyZHMpXCI7XG4gICAgY29uc3QgdmlzaWJpbGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlzXCIpLnRleHRDb250ZW50O1xuICAgIGNvbnZlcnRWaXModmlzaWJpbGl0eSwgMCk7XG4gIH0gZWxzZSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB1bml0cy5sZW5ndGg7IGkrKykge1xuICAgICAgdW5pdHNbaV0udGV4dENvbnRlbnQgPSBcIsKwQ1wiO1xuICAgIH1cbiAgICBjb252ZXJ0VGVtcHMoMSk7XG4gICAgY29udmVydFRpbWVzKDApO1xuICAgIGNvbnZlcnRXaW5kKDEpO1xuICAgIGNvbnN0IHZpc1RpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXMtdGl0bGVcIik7XG4gICAgdmlzVGl0bGUudGV4dENvbnRlbnQgPSBcIlZpc2liaWxpdHkgKG1ldGVycylcIjtcbiAgICBjb25zdCB2aXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXNcIikudGV4dENvbnRlbnQ7XG4gICAgY29udmVydFZpcyh2aXNpYmlsaXR5LCAxKTtcbiAgfVxufTtcblxuY29uc3QgcG9wdWxhdGVGb3JlY2FzdENhcmQgPSAoZm9yZWNhc3QsIGksIG9mZnNldCkgPT4ge1xuICBjb25zb2xlLmxvZyhcbiAgICBcInBvcHVsYXRlRm9yZWNhc3RDYXJkISBmb3JlY2FzdCwgaSwgb2Zmc2V0IGlzXCIsXG4gICAgZm9yZWNhc3QsXG4gICAgaSxcbiAgICBvZmZzZXRcbiAgKTtcbiAgY29uc3QgZm9yZWNhc3RTdW1tYXJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0LXN1bW1hcnkke2l9YCk7XG4gIGNvbnN0IGZvcmVjYXN0VGVtcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JlY2FzdC10ZW1wJHtpfWApO1xuICBjb25zdCBmb3JlY2FzdEh1bWlkaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0LWh1bWlkaXR5JHtpfWApO1xuICBjb25zdCBmb3JlY2FzdFRpbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3QtdGltZSR7aX1gKTtcbiAgY29uc3QgZm9yZWNhc3RDb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JlY2FzdC1jb3VudCR7aX1gKTtcbiAgc2V0Rm9yZWNhc3RJY29uKGZvcmVjYXN0LndlYXRoZXJbMF0uaWQsIGkpO1xuICBmb3JlY2FzdFN1bW1hcnkudGV4dENvbnRlbnQgPSBmb3JlY2FzdC53ZWF0aGVyWzBdLm1haW47XG4gIGZvcmVjYXN0VGVtcC50ZXh0Q29udGVudCA9IGBUZW1wOiAke2NvbnZlcnRGcm9tS2VsdmluKGZvcmVjYXN0Lm1haW4udGVtcCl9YDtcbiAgZm9yZWNhc3RIdW1pZGl0eS50ZXh0Q29udGVudCA9IGBIdW1pZGl0eTogJHtmb3JlY2FzdC5tYWluLmh1bWlkaXR5fSAlYDtcbiAgY29uc3QgeyBkdCB9ID0gZm9yZWNhc3Q7XG4gIGNvbnN0IGZvcmVjYXN0VGltZTI0aCA9IGNvbnZlcnRUaW1lc0Zyb21Vbml4KGR0LCBvZmZzZXQpO1xuICBmb3JlY2FzdFRpbWUudGV4dENvbnRlbnQgPSBmb3JlY2FzdFRpbWUyNGg7XG4gIGlmIChpID09PSAwKSB7XG4gICAgY29uc29sZS5sb2coXCJmb3JlY2FzdENvdW50IGlzXCIsIGZvcmVjYXN0Q291bnQpO1xuICAgIGZvcmVjYXN0Q291bnQudGV4dENvbnRlbnQgPSBcIkZpcnN0IGZvcmVjYXN0XCI7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGhvdXJzID0gaSAqIDM7XG4gICAgaWYgKGhvdXJzIDwgMjQpIHtcbiAgICAgIGZvcmVjYXN0Q291bnQudGV4dENvbnRlbnQgPSBgKyAke2hvdXJzfSBob3Vyc2A7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkYXlzID0gaG91cnMgLyAyNDtcbiAgICAgIC8vY29uc3QgcmVtYWluZGVyID0gMjQgJSBob3VycztcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF5cyBpc1wiLCBkYXlzKTtcbiAgICAgIC8vY29uc29sZS5sb2coJ3JlbWFpbmRlciBpcycsIHJlbWFpbmRlcik7XG4gICAgICBjb25zdCBkYXlzUmVtYWluZGVyID0gZGF5cyAlIDE7XG4gICAgICBjb25zdCBkYXlzUm91bmRlZCA9IGRheXMgLSBkYXlzUmVtYWluZGVyO1xuICAgICAgZm9yZWNhc3RDb3VudC50ZXh0Q29udGVudCA9IGArICR7ZGF5c1JvdW5kZWR9IGRheXNgO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZHJhd0ZvcmVjYXN0Q2FyZCA9IChmb3JlY2FzdCwgaSwgb2Zmc2V0KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBmb3JlY2FzdENhcmQsXG4gICAgZm9yZWNhc3RUaW1lLFxuICAgIGZvcmVjYXN0VGVtcCxcbiAgICBmb3JlY2FzdERlc2NyaXB0aW9uLFxuICAgIGZvcmVjYXN0SHVtaWRpdHksXG4gICAgdGVtcENvbnRhaW5lcixcbiAgICB0ZW1wVW5pdHMsXG4gICAgZm9yZWNhc3RDb3VudCxcbiAgICBmb3JlY2FzdEljb24sXG4gIH0gPSBjYXJkT2JqZWN0cztcbiAgY29uc29sZS5sb2coXCJkcmF3Rm9yZWNhc3RDYXJkLiBmb3JlY2FzdCwgaSBpc1wiLCBmb3JlY2FzdCwgaSk7XG4gIGZvcmVjYXN0Q2FyZC5jbGFzczIgPSBgZm9yZWNhc3Qke2l9YDtcbiAgY29tcG9uZW50RmFjdG9yeShmb3JlY2FzdENhcmQpO1xuICBmb3JlY2FzdFRpbWUuY2xhc3MyID0gYGZvcmVjYXN0LXRpbWUke2l9YDtcbiAgZm9yZWNhc3RUaW1lLnBhcmVudCA9IGAuZm9yZWNhc3Qke2l9YDtcbiAgZm9yZWNhc3RUZW1wLmNsYXNzMiA9IGBmb3JlY2FzdC10ZW1wJHtpfWA7XG4gIGZvcmVjYXN0VGVtcC5wYXJlbnQgPSBgLmZvcmVjYXN0LXRlbXAtY29udGFpbmVyJHtpfWA7XG4gIGZvcmVjYXN0SHVtaWRpdHkuY2xhc3MyID0gYGZvcmVjYXN0LWh1bWlkaXR5JHtpfWA7XG4gIGZvcmVjYXN0SHVtaWRpdHkucGFyZW50ID0gYC5mb3JlY2FzdCR7aX1gO1xuICBmb3JlY2FzdERlc2NyaXB0aW9uLmNsYXNzMiA9IGBmb3JlY2FzdC1zdW1tYXJ5JHtpfWA7XG4gIGZvcmVjYXN0RGVzY3JpcHRpb24ucGFyZW50ID0gYC5mb3JlY2FzdCR7aX1gO1xuICB0ZW1wVW5pdHMuY2xhc3MyID0gYGZvcmVjYXN0LXRlbXAtdW5pdHMke2l9YDtcbiAgdGVtcFVuaXRzLnBhcmVudCA9IGAuZm9yZWNhc3QtdGVtcC1jb250YWluZXIke2l9YDtcbiAgdGVtcENvbnRhaW5lci5wYXJlbnQgPSBgLmZvcmVjYXN0JHtpfWA7XG4gIHRlbXBDb250YWluZXIuY2xhc3MyID0gYGZvcmVjYXN0LXRlbXAtY29udGFpbmVyJHtpfWA7XG4gIGZvcmVjYXN0Q291bnQucGFyZW50ID0gYC5mb3JlY2FzdCR7aX1gO1xuICBmb3JlY2FzdENvdW50LmNsYXNzMiA9IGBmb3JlY2FzdC1jb3VudCR7aX1gO1xuICBmb3JlY2FzdEljb24ucGFyZW50ID0gYC5mb3JlY2FzdCR7aX1gO1xuICBmb3JlY2FzdEljb24uY2xhc3MyID0gYGZvcmVjYXN0LWljb24ke2l9YDtcbiAgY29tcG9uZW50RmFjdG9yeShmb3JlY2FzdEljb24pO1xuICBjb21wb25lbnRGYWN0b3J5KGZvcmVjYXN0RGVzY3JpcHRpb24pO1xuICBjb21wb25lbnRGYWN0b3J5KHRlbXBDb250YWluZXIpO1xuICBjb21wb25lbnRGYWN0b3J5KGZvcmVjYXN0VGVtcCk7XG4gIGNvbXBvbmVudEZhY3RvcnkodGVtcFVuaXRzKTtcbiAgY29tcG9uZW50RmFjdG9yeShmb3JlY2FzdEh1bWlkaXR5KTtcbiAgY29tcG9uZW50RmFjdG9yeShmb3JlY2FzdFRpbWUpO1xuICBjb21wb25lbnRGYWN0b3J5KGZvcmVjYXN0Q291bnQpO1xuICBwb3B1bGF0ZUZvcmVjYXN0Q2FyZChmb3JlY2FzdCwgaSwgb2Zmc2V0KTtcbn07XG5cbmNvbnN0IHBvcHVsYXRlRm9yZWNhc3RzID0gKGZvcmVjYXN0cywgb2Zmc2V0KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwicG9wdWxhdGVGb3JlY2FzdHMhIGZvcmVjYXN0cyBpc1wiLCBmb3JlY2FzdHMpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGZvcmVjYXN0cy5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBmb3JlY2FzdHNbaV07XG4gICAgZHJhd0ZvcmVjYXN0Q2FyZChlbGVtZW50LCBpLCBvZmZzZXQpO1xuICB9XG59O1xuXG5jb25zdCBwb3B1bGF0ZUNhcmQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKFwicG9wdWxhdGVDYXJkIVwiKTtcbiAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGdldElucHV0KCk7XG4gIGNvbnNvbGUubG9nKFwicG9wdWxhdGVDYXJkISB3ZWF0aGVyIGlzXCIsIHdlYXRoZXIpO1xuICBpZiAodHlwZW9mIHdlYXRoZXIgPT09IFwibnVtYmVyXCIpIHtcbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWNhcmRcIikpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jYXJkXCIpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKS5yZW1vdmUoKTtcbiAgICB9XG4gICAgaWYgKHdlYXRoZXIgPT09IDQwNCkge1xuICAgICAgY29tcG9uZW50RmFjdG9yeShlcnJvcnNbNDA0XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbXBvbmVudEZhY3RvcnkoZXJyb3JzWzUyMF0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkcmF3Q2FyZCgpO1xuICAgIGRvY3VtZW50XG4gICAgICAucXVlcnlTZWxlY3RvcihcIi50b2dnbGUtdW5pdHNcIilcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlVW5pdHMpO1xuICAgIHdlYXRoZXIudW5pdHMgPSAwO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcIi5sb2NhdGlvblwiXG4gICAgKS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXIucGxhY2VOYW1lfSwgJHt3ZWF0aGVyLmNvdW50cnl9YDtcbiAgICBjb25zdCBhaXJUZW1wUm91bmRlZCA9IHJvdW5kVGVtcCh3ZWF0aGVyLmFpclRlbXApO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudGVtcFwiKS50ZXh0Q29udGVudCA9IGFpclRlbXBSb3VuZGVkO1xuICAgIGNvbnN0IHN1bnJpc2UgPSB3ZWF0aGVyLnN1bnJpc2VUaW1lO1xuICAgIGNvbnN0IHN1bnNldCA9IHdlYXRoZXIuc3Vuc2V0VGltZTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGdldERlc2NyaXB0aW9uKHdlYXRoZXIuaWQpO1xuICAgIHNldEJhY2tncm91bmQoZGVzY3JpcHRpb25bMV0pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3VucmlzZVwiKS50ZXh0Q29udGVudCA9IHN1bnJpc2U7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5zZXRcIikudGV4dENvbnRlbnQgPSBzdW5zZXQ7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5kZXNjcmlwdGlvblwiKS50ZXh0Q29udGVudCA9IGRlc2NyaXB0aW9uWzBdO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaHVtaWRpdHlcIikudGV4dENvbnRlbnQgPSB3ZWF0aGVyLmh1bWlkaXR5O1xuICAgIGNvbnN0IG1heFJvdW5kZWQgPSByb3VuZFRlbXAod2VhdGhlci50ZW1wTWF4KTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmhpZ2hcIikudGV4dENvbnRlbnQgPSBtYXhSb3VuZGVkO1xuICAgIGNvbnN0IG1pblJvdW5kZWQgPSByb3VuZFRlbXAod2VhdGhlci50ZW1wTWluKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvd1wiKS50ZXh0Q29udGVudCA9IG1pblJvdW5kZWQ7XG4gICAgY29uc3QgZmVlbHNSb3VuZGVkID0gcm91bmRUZW1wKHdlYXRoZXIuZmVlbHNMaWtlKTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZlZWxzTGlrZVwiKS50ZXh0Q29udGVudCA9IGZlZWxzUm91bmRlZDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3Vkc1wiKS50ZXh0Q29udGVudCA9IHdlYXRoZXIuY2xvdWRzO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJlc3N1cmVcIikudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnByZXNzdXJlO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlzXCIpLnRleHRDb250ZW50ID0gd2VhdGhlci52aXNpYmlsaXR5O1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2luZC1kaXJcIikudGV4dENvbnRlbnQgPSB3ZWF0aGVyLndpbmRbMV1bMF07XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kLXNwZWVkXCIpLnRleHRDb250ZW50ID0gd2VhdGhlci53aW5kWzBdO1xuICAgIHBvcHVsYXRlRm9yZWNhc3RzKHdlYXRoZXIuZm9yZWNhc3QsIHdlYXRoZXIub2Zmc2V0KTtcbiAgICBjb25zdCB0ZW1wVW5pdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRlbXAtdW5pdFwiKTtcbiAgICBpZiAod2VhdGhlci51bml0cyA9PT0gMCkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wVW5pdHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgdGVtcFVuaXRzW2ldLnRleHRDb250ZW50ID0gXCLCsENcIjtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGdldElucHV0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB0b3duQ2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5sb2NhdGlvbi1pbnB1dFwiKTtcbiAgY29uc3QgdG93bkNpdHlWYWx1ZSA9IHRvd25DaXR5SW5wdXQudmFsdWU7XG4gIGNvbnN0IGNvdW50cnlTZWxlY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmNycy1jb3VudHJ5XCIpO1xuICBjb25zdCBjb3VudHJ5U2VsZWN0VmFsdWUgPSBjb3VudHJ5U2VsZWN0LnZhbHVlO1xuICBsZXQgc3RhdGVTZWxlY3RWYWx1ZTtcbiAgbGV0IHdlYXRoZXJPYmplY3Q7XG4gIGlmIChjb3VudHJ5U2VsZWN0VmFsdWUgPT09IFwiVVNcIikge1xuICAgIHN0YXRlU2VsZWN0VmFsdWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXRlLWlucHV0XCIpLnZhbHVlO1xuICAgIHdlYXRoZXJPYmplY3QgPSBhd2FpdCBwcm9jZXNzSW5wdXQoW1xuICAgICAgdG93bkNpdHlWYWx1ZSxcbiAgICAgIGNvdW50cnlTZWxlY3RWYWx1ZSxcbiAgICAgIHN0YXRlU2VsZWN0VmFsdWUsXG4gICAgXSk7XG4gICAgY29uc29sZS5sb2coXCJ3ZWF0aGVyT2JqZWN0IGlzXCIsIHdlYXRoZXJPYmplY3QpO1xuICAgIHJldHVybiB3ZWF0aGVyT2JqZWN0O1xuICB9XG4gIHdlYXRoZXJPYmplY3QgPSBhd2FpdCBwcm9jZXNzSW5wdXQoW3Rvd25DaXR5VmFsdWUsIGNvdW50cnlTZWxlY3RWYWx1ZV0pO1xuICBjb25zb2xlLmxvZyhcIndlYXRoZXJPYmplY3QgaXNcIiwgd2VhdGhlck9iamVjdCk7XG4gIHJldHVybiB3ZWF0aGVyT2JqZWN0O1xufTtcblxuY29uc3Qgc2hvd1N0YXRlaWZVUyA9ICgpID0+IHtcbiAgY29uc3QgY291bnRyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JzLWNvdW50cnlcIik7XG4gIGNvbnNvbGUubG9nKFwiY291bnRyeSBpc1wiLCBjb3VudHJ5LCBcInZhbHVlIGlzXCIsIGNvdW50cnkudmFsdWUpO1xuICBpZiAoY291bnRyeS52YWx1ZSA9PSBcIlVTXCIpIHtcbiAgICBjb25zdCBzdGF0ZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdGF0ZS1pbnB1dFwiKTtcbiAgICBzdGF0ZUlucHV0LmNsYXNzTGlzdC5yZW1vdmUoXCJoaWRkZW5cIik7XG4gIH1cbiAgaWYgKGNvdW50cnkudmFsdWUgIT09IFwiVVNcIikge1xuICAgIGNvbnN0IHN0YXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXRlLWlucHV0XCIpO1xuICAgIHN0YXRlSW5wdXQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgfVxufTtcblxuY29uc3QgYWRkTGlzdGVuZXJzID0gKCkgPT4ge1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLXN1Ym1pdFwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgcG9wdWxhdGVDYXJkKTtcbiAgZG9jdW1lbnRcbiAgICAucXVlcnlTZWxlY3RvcihcIi5jcnMtY291bnRyeVwiKVxuICAgIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1N0YXRlaWZVUyk7XG59O1xuXG5leHBvcnQgeyBidWlsZEludGVyZmFjZSB9O1xuIiwiaW1wb3J0IHsgYXBpS2V5IH0gZnJvbSBcIi4vYXBpa2V5XCI7XG5cbmNvbnN0IG9idGFpbldlYXRoZXIgPSBhc3luYyAobG9jYXRpb24pID0+IHtcbiAgY29uc29sZS5sb2coJ29idGFpbldlYXRoZXIhIGxvY2F0aW9uIGlzJywgbG9jYXRpb24pO1xuICB0cnkge1xuICAgIGxldCBmZXRjaENvb3JkcztcbiAgICBpZiAobG9jYXRpb25bMl0pIHtcbiAgICAgIGZldGNoQ29vcmRzID0gYXdhaXQgZmV0Y2ggKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvblswXX0sJHtsb2NhdGlvblsyXX0sJHtsb2NhdGlvblsxXX0mbGltaXQ9NSZhcHBpZD0ke2FwaUtleX1gLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZldGNoQ29vcmRzID0gYXdhaXQgZmV0Y2ggKFxuICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtsb2NhdGlvblswXX0sJHtsb2NhdGlvblsxXX0mbGltaXQ9NSZhcHBpZD0ke2FwaUtleX1gLFxuICAgICAgICB7XG4gICAgICAgICAgbW9kZTogXCJjb3JzXCIsXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIGNvbnN0IHJlbW90ZUNvb3JkcyA9IGF3YWl0IGZldGNoQ29vcmRzLmpzb24oKTtcbiAgICBjb25zb2xlLmxvZygncmVtb3RlQ29vcmRzIGlzJywgcmVtb3RlQ29vcmRzKTtcbiAgICBcbiAgICBjb25zdCBmZXRjaEZvcmVjYXN0ID0gYXdhaXQgZmV0Y2ggKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS9mb3JlY2FzdD9sYXQ9JHtyZW1vdGVDb29yZHNbMF0ubGF0fSZsb249JHtyZW1vdGVDb29yZHNbMF0ubG9ufSZBUFBJRD0ke2FwaUtleX1gLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApO1xuXG4gICAgXG4gICAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBhd2FpdCBmZXRjaChcbiAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8yLjUvd2VhdGhlcj9sYXQ9JHtyZW1vdGVDb29yZHNbMF0ubGF0fSZsb249JHtyZW1vdGVDb29yZHNbMF0ubG9ufSZBUFBJRD0ke2FwaUtleX1gLFxuICAgICAge1xuICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgIH1cbiAgICApO1xuXG4gICAgXG4gICAgXG4gICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGN1cnJlbnRXZWF0aGVyLmpzb24oKTtcbiAgICAvLyBjb25zb2xlLmxvZygnd2VhdGhlciBpcycsIHdlYXRoZXIpO1xuICAgIGNvbnN0IGZvcmVjYXN0ID0gYXdhaXQgZmV0Y2hGb3JlY2FzdC5qc29uKCk7XG4gICAgLy8gY29uc29sZS5sb2coJ2ZvcmVjYXN0IGlzJywgZm9yZWNhc3QpO1xuICAgIHdlYXRoZXIuZm9yZWNhc3QgPSBmb3JlY2FzdC5saXN0O1xuICAgIFxuICAgIFxuICAgIGlmICh3ZWF0aGVyLmNvZCA9PT0gXCI0MDRcIikge1xuICAgICAgcmV0dXJuIDQwNDtcbiAgICB9XG4gICAgY29uc29sZS5sb2coJ3dlYXRoZXIgaXMnLCB3ZWF0aGVyKTtcbiAgICByZXR1cm4gd2VhdGhlcjtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gNTIwO1xuICB9XG59O1xuXG5leHBvcnQgeyBvYnRhaW5XZWF0aGVyIH07XG4iLCJpbXBvcnQgQXNoIGZyb20gXCIuL2ltYWdlcy9hc2guanBnXCI7XG5pbXBvcnQgQ2xlYXIgZnJvbSBcIi4vaW1hZ2VzL2NsZWFyLmpwZ1wiO1xuaW1wb3J0IENsb3VkcyBmcm9tIFwiLi9pbWFnZXMvY2xvdWRzLmpwZ1wiO1xuaW1wb3J0IER1c3QgZnJvbSBcIi4vaW1hZ2VzL2R1c3QuanBnXCI7XG5pbXBvcnQgRm9nIGZyb20gXCIuL2ltYWdlcy9mb2cuanBnXCI7XG5pbXBvcnQgSGF6ZSBmcm9tIFwiLi9pbWFnZXMvaGF6ZS5qcGdcIjtcbmltcG9ydCBMQ2xvdWRzIGZyb20gXCIuL2ltYWdlcy9sY2xvdWRzLmpwZ1wiO1xuaW1wb3J0IFJhaW4gZnJvbSBcIi4vaW1hZ2VzL3JhaW4uanBnXCI7XG5pbXBvcnQgU21va2UgZnJvbSBcIi4vaW1hZ2VzL3Ntb2tlLmpwZ1wiO1xuaW1wb3J0IFNub3cgZnJvbSBcIi4vaW1hZ2VzL3Nub3cuanBnXCI7XG5pbXBvcnQgU3Rvcm0gZnJvbSBcIi4vaW1hZ2VzL3N0b3JtLmpwZ1wiO1xuaW1wb3J0IFdpbmQgZnJvbSBcIi4vaW1hZ2VzL3dpbmQuanBnXCI7XG5cbmNvbnN0IHNldEJhY2tncm91bmQgPSAoaW1nKSA9PiB7XG4gIGNvbnN0IGNhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItY2FyZFwiKTtcbiAgbGV0IGltZ1N0cjtcbiAgc3dpdGNoIChpbWcpIHtcbiAgICBjYXNlIFwiQXNoXCI6XG4gICAgICBpbWdTdHIgPSBgdXJsKCcke0FzaH0nKWA7XG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGltZ1N0cjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJDbGVhclwiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtDbGVhcn0nKWA7XG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGltZ1N0cjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJDbG91ZHNcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7Q2xvdWRzfScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkR1c3RcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7RHVzdH0nKWA7XG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGltZ1N0cjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJGb2dcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7Rm9nfScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkhhemVcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7SGF6ZX0nKWA7XG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGltZ1N0cjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJMQ2xvdWRzXCI6XG4gICAgICBpbWdTdHIgPSBgdXJsKCcke0xDbG91ZHN9JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiUmFpblwiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtSYWlufScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlNtb2tlXCI6XG4gICAgICBpbWdTdHIgPSBgdXJsKCcke1Ntb2tlfScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlN0b3JtXCI6XG4gICAgICBpbWdTdHIgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIlNub3dcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7U25vd30nKWA7XG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGltZ1N0cjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJXaW5kXCI6XG4gICAgICBpbWdTdHIgPSBgdXJsKCcke1dpbmR9JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtDbGVhcn0nKWA7XG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGltZ1N0cjtcbiAgfVxufTtcblxuZXhwb3J0IHsgc2V0QmFja2dyb3VuZCB9O1xuIiwiaW1wb3J0IENsb3VkQWxlcnQgZnJvbSBcIi4vaW1hZ2VzL2Nsb3VkLWFsZXJ0LnN2Z1wiO1xuaW1wb3J0IENsb3VkIGZyb20gXCIuL2ltYWdlcy9jbG91ZC5zdmdcIjtcbmltcG9ydCBGb2cgZnJvbSBcIi4vaW1hZ2VzL2ZvZy5zdmdcIjtcblxuaW1wb3J0IFJhaW4gZnJvbSBcIi4vaW1hZ2VzL3JhaW4uc3ZnXCI7XG5pbXBvcnQgU2xlZXQgZnJvbSBcIi4vaW1hZ2VzL3NsZWV0LnN2Z1wiO1xuaW1wb3J0IFNub3cgZnJvbSBcIi4vaW1hZ2VzL3Nub3cuc3ZnXCI7XG5pbXBvcnQgU3Rvcm0gZnJvbSBcIi4vaW1hZ2VzL3N0b3JtLnN2Z1wiO1xuaW1wb3J0IFN1biBmcm9tIFwiLi9pbWFnZXMvc3VuLnN2Z1wiO1xuaW1wb3J0IER1c3QgZnJvbSBcIi4vaW1hZ2VzL3dlYXRoZXItZHVzdC5zdmdcIjtcbmltcG9ydCBXaW5kIGZyb20gXCIuL2ltYWdlcy93ZWF0aGVyLXdpbmR5LnN2Z1wiO1xuaW1wb3J0IFRoZXJtb21ldGVyIGZyb20gXCIuL2ltYWdlcy90aGVybW9tZXRlci5zdmdcIjtcbmltcG9ydCB7IGdldERlc2NyaXB0aW9uIH0gZnJvbSBcIi4vZ2V0RGVzY3JpcHRpb25cIjtcblxuY29uc3Qgc2V0Rm9yZWNhc3RJY29uID0gKGZvcmVjYXN0LCBpKSA9PiB7XG4gIGNvbnNvbGUubG9nKCdzZXRGb3JlY2FzdEljb24hIGZvcmVjYXN0LCBpIGFyZScsIGZvcmVjYXN0LCBpICk7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3QtaWNvbiR7aX1gKTtcbiAgY29uc29sZS5sb2coJ0lDT04gSVMnLCBpY29uKTtcbiAgc3dpdGNoIChmb3JlY2FzdCkge1xuICAgIGNhc2UgMjAwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjAxOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjAyOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjEwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjExOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjEyOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjIxOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjMwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjMxOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjMyOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1N0b3JtfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzAwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMDE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7UmFpbn0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMwMjpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtSYWlufScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzEwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMTE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7UmFpbn0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMxMjpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtSYWlufScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzEzOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMTQ6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7UmFpbn0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMyMTpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtSYWlufScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTAwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MDE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7UmFpbn0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDUwMjpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtSYWlufScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTAzOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MDQ6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7UmFpbn0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDUyMDpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtSYWlufScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTIxOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MjI6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7UmFpbn0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDUzMTpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtSYWlufScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjAwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1Nub3d9JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MDE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7U25vd30nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDYwMjpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtTbm93fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjExOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1NsZWV0fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjEyOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1NsZWV0fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjEzOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1NsZWV0fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjE1OlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1NsZWV0fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjE2OlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1NsZWV0fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjIwOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke1Nub3d9JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MjE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7U25vd30nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDYyMjpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtTbm93fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzAxOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke0ZvZ30nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDcxMTpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtGb2d9JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3MjE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7Rm9nfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzMxOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke0ZvZ30nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc0MTpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtGb2d9JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3NTE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7RHVzdH0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc2MTpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtEdXN0fScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzYyOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke0Nsb3VkQWxlcnR9JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3NzE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7V2luZH0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc4MTpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtTdG9ybX0nKWA7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDgwMDpcbiAgICAgIGljb24uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgnJHtTdW59JylgO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA4MDE6XG4gICAgICBpY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJyR7U3VufScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODAyOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke0Nsb3VkfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODAzOlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke0Nsb3VkfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgODA0OlxuICAgICAgaWNvbi5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBgdXJsKCcke0Nsb3VkfScpYDtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB3ZWF0aGVyID0gXCJFcnJvciEgQ291bGRuJ3QgZmluZCB3ZWF0aGVyIGNvZGUuXCI7XG4gICAgICBpbWcgPSBcIkNsZWFyXCI7XG4gIH1cbiAgLy9pY29uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IFxuICAvKlxuICBsZXQgaW1nU3RyO1xuICBzd2l0Y2ggKGltZykge1xuICAgIGNhc2UgXCJBc2hcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7QXNofScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNsZWFyXCI6XG4gICAgICBpbWdTdHIgPSBgdXJsKCcke0NsZWFyfScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNsb3Vkc1wiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtDbG91ZHN9JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRHVzdFwiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtEdXN0fScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkZvZ1wiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtGb2d9JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiSGF6ZVwiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtIYXplfScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkxDbG91ZHNcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7TENsb3Vkc30nKWA7XG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGltZ1N0cjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJSYWluXCI6XG4gICAgICBpbWdTdHIgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiU21va2VcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7U21va2V9JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiU3Rvcm1cIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7U3Rvcm19JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiU25vd1wiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtTbm93fScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIldpbmRcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7V2luZH0nKWA7XG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGltZ1N0cjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpbWdTdHIgPSBgdXJsKCcke0NsZWFyfScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICB9XG4gICovXG59O1xuXG5leHBvcnQgeyBzZXRGb3JlY2FzdEljb24gfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCIvKiBpbXBvcnQgeyB0ZXN0IH0gZnJvbSBcIi4vYXBwXCI7ICovXG5pbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgYnVpbGRJbnRlcmZhY2UgfSBmcm9tIFwiLi9pbnRlcmZhY2VcIjtcblxuLyogY29uc3QgcnVuVGVzdCA9IGFzeW5jICgpID0+IHtcbiAgY29uc3QgcmVzdWx0ID0gYXdhaXQgdGVzdCgpO1xuICBjb25zb2xlLmxvZyhcInJlc3VsdCBpc1wiLCByZXN1bHQpO1xufTtcblxucnVuVGVzdCgpOyAqL1xuYnVpbGRJbnRlcmZhY2UoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==