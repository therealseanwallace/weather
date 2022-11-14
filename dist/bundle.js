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
___CSS_LOADER_EXPORT___.push([module.id, "/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n* {\n  font-family: \"Merriweather\", serif;\n}\n\n/* STYLES */\n\n.input-container {\n  background-color: rgba(73, 73, 73, 0.85);\n  color: whitesmoke;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  margin: 32px 0 32px 0;\n  border-radius: 10px;\n}\n\n.content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 400px;\n  margin: auto;\n  margin-bottom: 40px;\n  /* height: 1vh; */\n}\n\n.weather-card {\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.summary,\n.details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: whitesmoke;\n  background-color: rgba(73, 73, 73, 0.85);\n  padding: 28px 0 42px 0;\n  width: 80%;\n  margin: 74px auto 24px auto;\n  border-radius: 10px;\n}\n\n.details {\n  padding: 14px 0 21px 0;\n  margin-top: 24px;\n}\n\n.summary > p:first-of-type {\n  font-size: 1.9rem;\n}\n\n.summary > p:last-of-type {\n  font-size: 1.6rem;\n}\n\n.temp-container,\n.high-container,\n.low-container,\n.feels-container {\n  display: flex;\n  gap: 10px;\n}\n\n.temp-container > p {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n.description {\n  font-size: 1.4rem;\n}\n\n.detail-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0px 20px 0px 20px;\n}\n\n.detail-container > p:first-of-type {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.detail-container > p:nth-of-type(2) {\n  font-size: 18px;\n}\n\n.temp-details-container > * {\n  font-size: 20px;\n}\n\n.temp-details-container {\n  display: flex;\n  gap: 2px;\n}\n\n.toggle-units {\n  color: whitesmoke;\n  background-color: rgba(73, 73, 73, 0.85);\n  font-size: 12px;\n  padding: 8px;\n  font-weight: bold;\n  border: 0;\n  border-radius: 10px;\n}\n\n.location-input {\n  margin-bottom: 12px;\n  margin-bottom: 12px;\n  color: black;\n  font-weight: bold;\n}\n\n.location-input::placeholder {\n  color: rgba(73, 73, 73, 0.85);\n}\n\n.wind-speed-unit-container {\n  display: flex;\n  gap: 3px;\n  font-size: 18px;\n}\n\n.hidden {\n  display: none;\n}\n\n.forecast-container {\n  display: flex;\n  overflow-x: scroll;\n  width: 80%;\n  margin-bottom: 40px;\n  scrollbar-color: rgba(0, 0, 0, 0.774) whitesmoke;\n  padding: 20px;\n  background-color: rgba(73, 73, 73, 0.85);\n  color: whitesmoke;\n  border-radius: 10px;\n}\n\n.forecast {\n  margin-right: 20px;\n  background-color: rgba(73, 73, 73, 0.85);\n  border-radius: 10px;\n  padding: 20px;\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,iBAAiB;;AAEjB;;;EAGE,sBAAsB;AACxB;AACA;EACE,SAAS;AACX;AACA;;EAEE,YAAY;AACd;AACA;EACE,gBAAgB;EAChB,mCAAmC;AACrC;AACA;;;;;EAKE,cAAc;EACd,eAAe;AACjB;AACA;;;;EAIE,aAAa;AACf;AACA;;;;;;;EAOE,yBAAyB;AAC3B;AACA;;EAEE,kBAAkB;AACpB;;AAEA;EACE,kCAAkC;AACpC;;AAEA,WAAW;;AAEX;EACE,wCAAwC;EACxC,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,aAAa;EACb,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,sBAAsB;EACtB,YAAY;EACZ,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;;EAEE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,iBAAiB;EACjB,wCAAwC;EACxC,sBAAsB;EACtB,UAAU;EACV,2BAA2B;EAC3B,mBAAmB;AACrB;;AAEA;EACE,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;;EAIE,aAAa;EACb,SAAS;AACX;;AAEA;EACE,eAAe;EACf,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,8BAA8B;EAC9B,0BAA0B;AAC5B;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,iBAAiB;EACjB,wCAAwC;EACxC,eAAe;EACf,YAAY;EACZ,iBAAiB;EACjB,SAAS;EACT,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,mBAAmB;EACnB,YAAY;EACZ,iBAAiB;AACnB;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,kBAAkB;EAClB,UAAU;EACV,mBAAmB;EACnB,gDAAgD;EAChD,aAAa;EACb,wCAAwC;EACxC,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,wCAAwC;EACxC,mBAAmB;EACnB,aAAa;AACf","sourcesContent":["/* RESET STYLES */\n\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\n* {\n  margin: 0;\n}\nhtml,\nbody {\n  height: 100%;\n}\nbody {\n  line-height: 1.5;\n  -webkit-font-smoothing: antialiased;\n}\nimg,\npicture,\nvideo,\ncanvas,\nsvg {\n  display: block;\n  max-width: 100%;\n}\ninput,\nbutton,\ntextarea,\nselect {\n  font: inherit;\n}\np,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n  overflow-wrap: break-word;\n}\n#root,\n#__next {\n  isolation: isolate;\n}\n\n* {\n  font-family: \"Merriweather\", serif;\n}\n\n/* STYLES */\n\n.input-container {\n  background-color: rgba(73, 73, 73, 0.85);\n  color: whitesmoke;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  margin: 32px 0 32px 0;\n  border-radius: 10px;\n}\n\n.content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n  width: 400px;\n  margin: auto;\n  margin-bottom: 40px;\n  /* height: 1vh; */\n}\n\n.weather-card {\n  width: 400px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border-radius: 10px;\n}\n\n.summary,\n.details {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  color: whitesmoke;\n  background-color: rgba(73, 73, 73, 0.85);\n  padding: 28px 0 42px 0;\n  width: 80%;\n  margin: 74px auto 24px auto;\n  border-radius: 10px;\n}\n\n.details {\n  padding: 14px 0 21px 0;\n  margin-top: 24px;\n}\n\n.summary > p:first-of-type {\n  font-size: 1.9rem;\n}\n\n.summary > p:last-of-type {\n  font-size: 1.6rem;\n}\n\n.temp-container,\n.high-container,\n.low-container,\n.feels-container {\n  display: flex;\n  gap: 10px;\n}\n\n.temp-container > p {\n  font-size: 3rem;\n  font-weight: bold;\n}\n\n.description {\n  font-size: 1.4rem;\n}\n\n.detail-container {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  padding: 0px 20px 0px 20px;\n}\n\n.detail-container > p:first-of-type {\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.detail-container > p:nth-of-type(2) {\n  font-size: 18px;\n}\n\n.temp-details-container > * {\n  font-size: 20px;\n}\n\n.temp-details-container {\n  display: flex;\n  gap: 2px;\n}\n\n.toggle-units {\n  color: whitesmoke;\n  background-color: rgba(73, 73, 73, 0.85);\n  font-size: 12px;\n  padding: 8px;\n  font-weight: bold;\n  border: 0;\n  border-radius: 10px;\n}\n\n.location-input {\n  margin-bottom: 12px;\n  margin-bottom: 12px;\n  color: black;\n  font-weight: bold;\n}\n\n.location-input::placeholder {\n  color: rgba(73, 73, 73, 0.85);\n}\n\n.wind-speed-unit-container {\n  display: flex;\n  gap: 3px;\n  font-size: 18px;\n}\n\n.hidden {\n  display: none;\n}\n\n.forecast-container {\n  display: flex;\n  overflow-x: scroll;\n  width: 80%;\n  margin-bottom: 40px;\n  scrollbar-color: rgba(0, 0, 0, 0.774) whitesmoke;\n  padding: 20px;\n  background-color: rgba(73, 73, 73, 0.85);\n  color: whitesmoke;\n  border-radius: 10px;\n}\n\n.forecast {\n  margin-right: 20px;\n  background-color: rgba(73, 73, 73, 0.85);\n  border-radius: 10px;\n  padding: 20px;\n}"],"sourceRoot":""}]);
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
/* harmony import */ var _conversions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./conversions */ "./src/conversions.js");








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
    (0,_conversions__WEBPACK_IMPORTED_MODULE_6__.convertTemps)(0);
    (0,_conversions__WEBPACK_IMPORTED_MODULE_6__.convertTimes)(1);
    (0,_conversions__WEBPACK_IMPORTED_MODULE_6__.convertWind)(0);
    const visTitle = document.querySelector(".vis-title");
    visTitle.textContent = "Visibility (yards)";
    const visibility = document.querySelector(".vis").textContent;
    (0,_conversions__WEBPACK_IMPORTED_MODULE_6__.convertVis)(visibility, 0);
  } else {
    for (let i = 0; i < units.length; i++) {
      units[i].textContent = "°C";
    }
    (0,_conversions__WEBPACK_IMPORTED_MODULE_6__.convertTemps)(1);
    (0,_conversions__WEBPACK_IMPORTED_MODULE_6__.convertTimes)(0);
    (0,_conversions__WEBPACK_IMPORTED_MODULE_6__.convertWind)(1);
    const visTitle = document.querySelector(".vis-title");
    visTitle.textContent = "Visibility (meters)";
    const visibility = document.querySelector(".vis").textContent;
    (0,_conversions__WEBPACK_IMPORTED_MODULE_6__.convertVis)(visibility, 1);
  }
};

const trimDateTime = (dateTime) => {
  
}
const populateForecastCard = (forecast, i, offset) => {
  console.log("populateForecastCard! forecast, i, offset is", forecast, i, offset);
  const forecastSummary = document.querySelector(`.forecast-summary${i}`);
  const forecastTemp = document.querySelector(`.forecast-temp${i}`);
  const forecastHumidity = document.querySelector(`.forecast-humidity${i}`);
  const forecastTime = document.querySelector(`.forecast-time${i}`);
  const forecastCount = document.querySelector(`.forecast-count${i}`);
  forecastSummary.textContent = forecast.weather[0].main;
  forecastTemp.textContent = (0,_conversions__WEBPACK_IMPORTED_MODULE_6__.convertFromKelvin)(forecast.main.temp);
  forecastHumidity.textContent = forecast.main.humidity;
  const { dt } = forecast;
  const forecastTime24h = (0,_conversions__WEBPACK_IMPORTED_MODULE_6__.convertTimesFromUnix)(dt, offset);
  forecastTime.textContent = forecastTime24h;
  if (i === 0) {
    console.log('forecastCount is', forecastCount);
    forecastCount.textContent = 'First forecast';
  } else {
    let hours = i * 3;
    if (hours < 24) {
      forecastCount.textContent = `+ ${hours} hours`;
    } else {
      let days = hours / 24;
      //const remainder = 24 % hours;
      console.log('days is', days);
      //console.log('remainder is', remainder);
      const daysRemainder = days % 1;
      const daysRounded = days - daysRemainder;
      console.log('daysRounded is', daysRounded);
      forecastCount.textContent = `+ ${daysRounded} days`;
    }
    
    console.log('hours is', hours);

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
  tempContainer.class2  = `forecast-temp-container${i}`;
  forecastCount.parent = `.forecast${i}`;
  forecastCount.class2  = `forecast-count${i}`;
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
    const airTempRounded = (0,_conversions__WEBPACK_IMPORTED_MODULE_6__.roundTemp)(weather.airTemp);
    document.querySelector(".temp").textContent = airTempRounded;
    const sunrise = weather.sunriseTime;
    const sunset = weather.sunsetTime;
    const description = (0,_getDescription__WEBPACK_IMPORTED_MODULE_2__.getDescription)(weather.id);
    (0,_setBackground__WEBPACK_IMPORTED_MODULE_5__.setBackground)(description[1]);
    document.querySelector(".sunrise").textContent = sunrise;
    document.querySelector(".sunset").textContent = sunset;
    document.querySelector(".description").textContent = description[0];
    document.querySelector(".humidity").textContent = weather.humidity;
    const maxRounded = (0,_conversions__WEBPACK_IMPORTED_MODULE_6__.roundTemp)(weather.tempMax);
    document.querySelector(".high").textContent = maxRounded;
    const minRounded = (0,_conversions__WEBPACK_IMPORTED_MODULE_6__.roundTemp)(weather.tempMin);
    document.querySelector(".low").textContent = minRounded;
    const feelsRounded = (0,_conversions__WEBPACK_IMPORTED_MODULE_6__.roundTemp)(weather.feelsLike);
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

/***/ "./src/images/storm.jpg":
/*!******************************!*\
  !*** ./src/images/storm.jpg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4a5a55c8dad07a48d02e.jpg";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Vyw2Q0FBNkMsS0FBSyxvQ0FBb0MsSUFBSSxrQkFBa0IsVUFBVSxPQUFPLHFGQUFxRixZQUFZLFFBQVE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVHB2bEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0Es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dUIsOENBQUksQ0FBQztBQUM1QjtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsOENBQUssQ0FBQztBQUM3QjtBQUNBO0FBQ0E7O0FBRXlCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkV6QjtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NmQTs7Ozs7Ozs7Ozs7Ozs7QUNBQSxZQUFZLE9BQU8sY0FBYztBQUNaO0FBQ3dCOztBQUU3QztBQUNBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1gsMERBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXBpa2V5LmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY29tcG9uZW50RmFjdG9yeS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2NvbnZlcnNpb25zLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvY3JzLm1pbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2Rpc3BsYXlPYmplY3RzLmpzIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvZHJhd0NhcmQuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9nZXREZXNjcmlwdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL2ludGVyZmFjZS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLy4vc3JjL29idGFpbldlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci8uL3NyYy9zZXRCYWNrZ3JvdW5kLmpzIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vd2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYXRoZXIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXIvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBSRVNFVCBTVFlMRVMgKi9cXG5cXG4qLFxcbio6OmJlZm9yZSxcXG4qOjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qIHtcXG4gIG1hcmdpbjogMDtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxufVxcbmltZyxcXG5waWN0dXJlLFxcbnZpZGVvLFxcbmNhbnZhcyxcXG5zdmcge1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcbmlucHV0LFxcbmJ1dHRvbixcXG50ZXh0YXJlYSxcXG5zZWxlY3Qge1xcbiAgZm9udDogaW5oZXJpdDtcXG59XFxucCxcXG5oMSxcXG5oMixcXG5oMyxcXG5oNCxcXG5oNSxcXG5oNiB7XFxuICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xcbn1cXG4jcm9vdCxcXG4jX19uZXh0IHtcXG4gIGlzb2xhdGlvbjogaXNvbGF0ZTtcXG59XFxuXFxuKiB7XFxuICBmb250LWZhbWlseTogXFxcIk1lcnJpd2VhdGhlclxcXCIsIHNlcmlmO1xcbn1cXG5cXG4vKiBTVFlMRVMgKi9cXG5cXG4uaW5wdXQtY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC44NSk7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDMycHggMCAzMnB4IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHdpZHRoOiA0MDBweDtcXG4gIG1hcmdpbjogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAvKiBoZWlnaHQ6IDF2aDsgKi9cXG59XFxuXFxuLndlYXRoZXItY2FyZCB7XFxuICB3aWR0aDogNDAwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uc3VtbWFyeSxcXG4uZGV0YWlscyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC44NSk7XFxuICBwYWRkaW5nOiAyOHB4IDAgNDJweCAwO1xcbiAgd2lkdGg6IDgwJTtcXG4gIG1hcmdpbjogNzRweCBhdXRvIDI0cHggYXV0bztcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5kZXRhaWxzIHtcXG4gIHBhZGRpbmc6IDE0cHggMCAyMXB4IDA7XFxuICBtYXJnaW4tdG9wOiAyNHB4O1xcbn1cXG5cXG4uc3VtbWFyeSA+IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LXNpemU6IDEuOXJlbTtcXG59XFxuXFxuLnN1bW1hcnkgPiBwOmxhc3Qtb2YtdHlwZSB7XFxuICBmb250LXNpemU6IDEuNnJlbTtcXG59XFxuXFxuLnRlbXAtY29udGFpbmVyLFxcbi5oaWdoLWNvbnRhaW5lcixcXG4ubG93LWNvbnRhaW5lcixcXG4uZmVlbHMtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDEwcHg7XFxufVxcblxcbi50ZW1wLWNvbnRhaW5lciA+IHAge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5kZXNjcmlwdGlvbiB7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLmRldGFpbC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgcGFkZGluZzogMHB4IDIwcHggMHB4IDIwcHg7XFxufVxcblxcbi5kZXRhaWwtY29udGFpbmVyID4gcDpmaXJzdC1vZi10eXBlIHtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uZGV0YWlsLWNvbnRhaW5lciA+IHA6bnRoLW9mLXR5cGUoMikge1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzLWNvbnRhaW5lciA+ICoge1xcbiAgZm9udC1zaXplOiAyMHB4O1xcbn1cXG5cXG4udGVtcC1kZXRhaWxzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAycHg7XFxufVxcblxcbi50b2dnbGUtdW5pdHMge1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuODUpO1xcbiAgZm9udC1zaXplOiAxMnB4O1xcbiAgcGFkZGluZzogOHB4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXI6IDA7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4ubG9jYXRpb24taW5wdXQge1xcbiAgbWFyZ2luLWJvdHRvbTogMTJweDtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBjb2xvcjogYmxhY2s7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0OjpwbGFjZWhvbGRlciB7XFxuICBjb2xvcjogcmdiYSg3MywgNzMsIDczLCAwLjg1KTtcXG59XFxuXFxuLndpbmQtc3BlZWQtdW5pdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogM3B4O1xcbiAgZm9udC1zaXplOiAxOHB4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5mb3JlY2FzdC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG92ZXJmbG93LXg6IHNjcm9sbDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgc2Nyb2xsYmFyLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzc0KSB3aGl0ZXNtb2tlO1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC44NSk7XFxuICBjb2xvcjogd2hpdGVzbW9rZTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbi5mb3JlY2FzdCB7XFxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuODUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsaUJBQWlCOztBQUVqQjs7O0VBR0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxTQUFTO0FBQ1g7QUFDQTs7RUFFRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7QUFDQTs7Ozs7RUFLRSxjQUFjO0VBQ2QsZUFBZTtBQUNqQjtBQUNBOzs7O0VBSUUsYUFBYTtBQUNmO0FBQ0E7Ozs7Ozs7RUFPRSx5QkFBeUI7QUFDM0I7QUFDQTs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLHdDQUF3QztFQUN4QyxpQkFBaUI7RUFDakIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsYUFBYTtFQUNiLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtBQUNyQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixpQkFBaUI7RUFDakIsd0NBQXdDO0VBQ3hDLHNCQUFzQjtFQUN0QixVQUFVO0VBQ1YsMkJBQTJCO0VBQzNCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLHNCQUFzQjtFQUN0QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7Ozs7RUFJRSxhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixXQUFXO0VBQ1gsOEJBQThCO0VBQzlCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsUUFBUTtBQUNWOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHdDQUF3QztFQUN4QyxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsYUFBYTtFQUNiLFFBQVE7RUFDUixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsbUJBQW1CO0VBQ25CLGdEQUFnRDtFQUNoRCxhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsd0NBQXdDO0VBQ3hDLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogUkVTRVQgU1RZTEVTICovXFxuXFxuKixcXG4qOjpiZWZvcmUsXFxuKjo6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuKiB7XFxuICBtYXJnaW46IDA7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xcbn1cXG5pbWcsXFxucGljdHVyZSxcXG52aWRlbyxcXG5jYW52YXMsXFxuc3ZnIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5pbnB1dCxcXG5idXR0b24sXFxudGV4dGFyZWEsXFxuc2VsZWN0IHtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxufVxcbnAsXFxuaDEsXFxuaDIsXFxuaDMsXFxuaDQsXFxuaDUsXFxuaDYge1xcbiAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcXG59XFxuI3Jvb3QsXFxuI19fbmV4dCB7XFxuICBpc29sYXRpb246IGlzb2xhdGU7XFxufVxcblxcbioge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNZXJyaXdlYXRoZXJcXFwiLCBzZXJpZjtcXG59XFxuXFxuLyogU1RZTEVTICovXFxuXFxuLmlucHV0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuODUpO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwYWRkaW5nOiAyMHB4O1xcbiAgbWFyZ2luOiAzMnB4IDAgMzJweCAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmNvbnRlbnQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB3aWR0aDogNDAwcHg7XFxuICBtYXJnaW46IGF1dG87XFxuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgLyogaGVpZ2h0OiAxdmg7ICovXFxufVxcblxcbi53ZWF0aGVyLWNhcmQge1xcbiAgd2lkdGg6IDQwMHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLnN1bW1hcnksXFxuLmRldGFpbHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuODUpO1xcbiAgcGFkZGluZzogMjhweCAwIDQycHggMDtcXG4gIHdpZHRoOiA4MCU7XFxuICBtYXJnaW46IDc0cHggYXV0byAyNHB4IGF1dG87XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZGV0YWlscyB7XFxuICBwYWRkaW5nOiAxNHB4IDAgMjFweCAwO1xcbiAgbWFyZ2luLXRvcDogMjRweDtcXG59XFxuXFxuLnN1bW1hcnkgPiBwOmZpcnN0LW9mLXR5cGUge1xcbiAgZm9udC1zaXplOiAxLjlyZW07XFxufVxcblxcbi5zdW1tYXJ5ID4gcDpsYXN0LW9mLXR5cGUge1xcbiAgZm9udC1zaXplOiAxLjZyZW07XFxufVxcblxcbi50ZW1wLWNvbnRhaW5lcixcXG4uaGlnaC1jb250YWluZXIsXFxuLmxvdy1jb250YWluZXIsXFxuLmZlZWxzLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4udGVtcC1jb250YWluZXIgPiBwIHtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5kZXRhaWwtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHBhZGRpbmc6IDBweCAyMHB4IDBweCAyMHB4O1xcbn1cXG5cXG4uZGV0YWlsLWNvbnRhaW5lciA+IHA6Zmlyc3Qtb2YtdHlwZSB7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmRldGFpbC1jb250YWluZXIgPiBwOm50aC1vZi10eXBlKDIpIHtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLnRlbXAtZGV0YWlscy1jb250YWluZXIgPiAqIHtcXG4gIGZvbnQtc2l6ZTogMjBweDtcXG59XFxuXFxuLnRlbXAtZGV0YWlscy1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGdhcDogMnB4O1xcbn1cXG5cXG4udG9nZ2xlLXVuaXRzIHtcXG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MywgNzMsIDczLCAwLjg1KTtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIHBhZGRpbmc6IDhweDtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyOiAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcXG59XFxuXFxuLmxvY2F0aW9uLWlucHV0IHtcXG4gIG1hcmdpbi1ib3R0b206IDEycHg7XFxuICBtYXJnaW4tYm90dG9tOiAxMnB4O1xcbiAgY29sb3I6IGJsYWNrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5sb2NhdGlvbi1pbnB1dDo6cGxhY2Vob2xkZXIge1xcbiAgY29sb3I6IHJnYmEoNzMsIDczLCA3MywgMC44NSk7XFxufVxcblxcbi53aW5kLXNwZWVkLXVuaXQtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDNweDtcXG4gIGZvbnQtc2l6ZTogMThweDtcXG59XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uZm9yZWNhc3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBvdmVyZmxvdy14OiBzY3JvbGw7XFxuICB3aWR0aDogODAlO1xcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcXG4gIHNjcm9sbGJhci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc3NCkgd2hpdGVzbW9rZTtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDczLCA3MywgNzMsIDAuODUpO1xcbiAgY29sb3I6IHdoaXRlc21va2U7XFxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbn1cXG5cXG4uZm9yZWNhc3Qge1xcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3MywgNzMsIDczLCAwLjg1KTtcXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICBwYWRkaW5nOiAyMHB4O1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcblxuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG5cbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cblxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcblxuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG5cbiAgY3NzICs9IG9iai5jc3M7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IGFwaUtleSA9IFwiZTU2NjQxNDQ2YWQzYzc2MTA0MDNlM2MxN2Q4Y2U4ODZcIjtcblxuZXhwb3J0IHsgYXBpS2V5IH07XG4iLCJpbXBvcnQgeyBvYnRhaW5XZWF0aGVyIH0gZnJvbSBcIi4vb2J0YWluV2VhdGhlclwiO1xuaW1wb3J0IHsgY29udmVydEZyb21LZWx2aW4sIGNvbnZlcnRUaW1lc0Zyb21Vbml4IH0gZnJvbSBcIi4vY29udmVyc2lvbnNcIjtcblxuXG5cblxuY29uc3QgY29udmVydFdpbmQgPSAoZGVnKSA9PiB7XG4gIC8vIFRha2VzIHdpbmQgZGlyZWN0aW9uIGFzIGRlZ3JlZXMgYW5kIHJldHVybnMgYSBodW1hbi1yZWFkYWJsZSBzdHJpbmdcbiAgbGV0IGRpcmVjdGlvbjtcbiAgbGV0IGluZGV4O1xuICBzd2l0Y2ggKHRydWUpIHtcbiAgICBjYXNlIGRlZyA+PSAzMzcuNSB8fCBkZWcgPCAyMi41OlxuICAgICAgZGlyZWN0aW9uID0gXCJOb3J0aFwiO1xuICAgICAgaW5kZXggPSAwO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkZWcgPCA2Ny41OlxuICAgICAgZGlyZWN0aW9uID0gXCJOb3J0aC1FYXN0XCI7XG4gICAgICBpbmRleCA9IDE7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA8IDExMi41OlxuICAgICAgZGlyZWN0aW9uID0gXCJFYXN0XCI7XG4gICAgICBpbmRleCA9IDI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA8IDE1Ny41OlxuICAgICAgZGlyZWN0aW9uID0gXCJTb3V0aC1FYXN0XCI7XG4gICAgICBpbmRleCA9IDM7XG4gICAgICBicmVhaztcbiAgICBjYXNlIGRlZyA8IDIwMi41OlxuICAgICAgZGlyZWN0aW9uID0gXCJTb3V0aFwiO1xuICAgICAgaW5kZXggPSA0O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkZWcgPCAyNDcuNTpcbiAgICAgIGRpcmVjdGlvbiA9IFwiU291dGgtV2VzdFwiO1xuICAgICAgaW5kZXggPSA1O1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBkZWcgPCAyOTIuNTpcbiAgICAgIGRpcmVjdGlvbiA9IFwiV2VzdFwiO1xuICAgICAgaW5kZXggPSA2O1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIGRpcmVjdGlvbiA9IFwiTm9ydGgtV2VzdFwiO1xuICB9XG4gIHJldHVybiBbZGlyZWN0aW9uLCBpbmRleF07XG59O1xuXG5jb25zdCB3ZWF0aGVyRmFjdG9yeSA9ICh3ZWF0aGVyKSA9PiB7XG4gIC8vIFRha2VzIHRoZSBvYmplY3QgcmVjZWl2ZWQgZnJvbSBPcGVuIFdlYXRoZXIncyBBUEkgYW5kIHJldHVybnMgYSB3ZWF0aGVyIG9iamVjdCBjb250YWluaW5nXG4gIC8vIG9ubHkgdGhlIHdlYXRoZXIgZGF0YSB3ZSB3aWxsIHVzZSBpbiB0aGlzIGFwcFxuICBjb25zb2xlLmxvZygnd2VhdGhlckZhY3RvcnkhIHdlYXRoZXIgaXMnLCB3ZWF0aGVyKTtcbiAgY29uc3QgcGxhY2VOYW1lID0gd2VhdGhlci5uYW1lOyBcbiAgY29uc3QgeyBjb3VudHJ5LCBzdW5yaXNlLCBzdW5zZXQgfSA9IHdlYXRoZXIuc3lzO1xuICBjb25zdCBjbG91ZHMgPSB3ZWF0aGVyLmNsb3Vkcy5hbGw7XG4gIGNvbnN0IHsgaHVtaWRpdHksIHByZXNzdXJlLCB0ZW1wIH0gPSB3ZWF0aGVyLm1haW47XG4gIGNvbnN0IHsgaWQgfSA9IHdlYXRoZXIud2VhdGhlclswXTtcbiAgY29uc3QgeyBkdCwgZm9yZWNhc3QgfSA9IHdlYXRoZXI7XG4gIGNvbnN0IGZlZWxzTGlrZSA9IGNvbnZlcnRGcm9tS2VsdmluKHdlYXRoZXJbXCJtYWluXCJdW1wiZmVlbHNfbGlrZVwiXSk7XG4gIGNvbnN0IHRlbXBNaW4gPSBjb252ZXJ0RnJvbUtlbHZpbih3ZWF0aGVyW1wibWFpblwiXVtcInRlbXBfbWluXCJdKTtcbiAgY29uc3QgdGVtcE1heCA9IGNvbnZlcnRGcm9tS2VsdmluKHdlYXRoZXJbXCJtYWluXCJdW1widGVtcF9tYXhcIl0pO1xuICBjb25zdCBhaXJUZW1wID0gY29udmVydEZyb21LZWx2aW4od2VhdGhlcltcIm1haW5cIl1bXCJ0ZW1wXCJdKTtcbiAgY29uc3Qgb2Zmc2V0ID0gd2VhdGhlci50aW1lem9uZTtcbiAgY29uc3Qgc3VucmlzZVRpbWUgPSBjb252ZXJ0VGltZXNGcm9tVW5peChzdW5yaXNlLCBvZmZzZXQpO1xuICBjb25zdCBzdW5zZXRUaW1lID0gY29udmVydFRpbWVzRnJvbVVuaXgoc3Vuc2V0LCBvZmZzZXQpO1xuICBjb25zdCByZWFkaW5nVGltZSA9IGNvbnZlcnRUaW1lc0Zyb21Vbml4KGR0LCBvZmZzZXQpO1xuICBjb25zdCB7IHZpc2liaWxpdHkgfSA9IHdlYXRoZXI7XG4gIGNvbnN0IHdpbmRDb252ZXJ0ZWQgPSBjb252ZXJ0V2luZCh3ZWF0aGVyLndpbmQuZGVnKTtcbiAgY29uc3Qgd2luZFNwZWVka21oID0gTWF0aC5yb3VuZCh3ZWF0aGVyLndpbmQuc3BlZWQgKiAzLjYpO1xuICBjb25zdCB3aW5kID0gW3dpbmRTcGVlZGttaCwgd2luZENvbnZlcnRlZF07XG4gIHJldHVybiB7XG4gICAgcGxhY2VOYW1lLFxuICAgIGNvdW50cnksXG4gICAgY2xvdWRzLFxuICAgIGh1bWlkaXR5LFxuICAgIHByZXNzdXJlLFxuICAgIGFpclRlbXAsXG4gICAgZmVlbHNMaWtlLFxuICAgIHRlbXBNYXgsXG4gICAgdGVtcE1pbixcbiAgICBzdW5yaXNlVGltZSxcbiAgICBzdW5zZXRUaW1lLFxuICAgIHZpc2liaWxpdHksXG4gICAgd2luZCxcbiAgICBpZCxcbiAgICByZWFkaW5nVGltZSxcbiAgICBmb3JlY2FzdCxcbiAgICBvZmZzZXQsXG4gIH07XG59O1xuXG5jb25zdCB0ZXN0ID0gYXN5bmMgKCkgPT4ge1xuICBjb25zdCB0ZXN0UmVzcG9uc2UgPSBhd2FpdCBvYnRhaW5XZWF0aGVyKFwiQXRsYW50YVwiKTtcbiAgY29uc3QgdGVzdFByb2Nlc3NlZCA9IHdlYXRoZXJGYWN0b3J5KHRlc3RSZXNwb25zZSk7XG4gIHJldHVybiB0ZXN0UHJvY2Vzc2VkO1xufTtcblxuY29uc3QgcHJvY2Vzc0lucHV0ID0gYXN5bmMgKGlucHV0KSA9PiB7XG4gIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBvYnRhaW5XZWF0aGVyKGlucHV0KTtcbiAgaWYgKHR5cGVvZiB3ZWF0aGVyID09PSBcIm51bWJlclwiKSB7XG4gICAgcmV0dXJuIHdlYXRoZXI7XG4gIH1cbiAgY29uc3Qgd2VhdGhlclByb2Nlc3NlZCA9IHdlYXRoZXJGYWN0b3J5KHdlYXRoZXIpO1xuICByZXR1cm4gd2VhdGhlclByb2Nlc3NlZDtcbn07XG5cbmV4cG9ydCB7IHRlc3QsIHByb2Nlc3NJbnB1dCB9O1xuIiwiY29uc3QgY29tcG9uZW50RmFjdG9yeSA9IChlbGVtZW50KSA9PiB7XG4gIGNvbnN0IHtcbiAgICBuYW1lLFxuICAgIG5vZGVUeXBlLFxuICAgIHBhcmVudCxcbiAgICB0ZXh0LFxuICAgIGlucHV0VHlwZSxcbiAgICB2YWx1ZSxcbiAgICBjbGFzczEsXG4gICAgY2xhc3MyLFxuICAgIGNsYXNzMyxcbiAgICB0YXNrSUQsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgZGF0YUF0dHIsXG4gICAgaWQsXG4gICAgc2hvcnRjb2RlLFxuICAgIHByZWZlcnJlZCxcbiAgfSA9IGVsZW1lbnQ7XG4gIGNvbnN0IGNyZWF0ZURPTU5vZGUgPSAoKSA9PiB7XG4gICAgY29uc3QgcGFyZW50Tm9kZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IocGFyZW50KTtcbiAgICBjb25zdCBuZXdET01Ob2RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChub2RlVHlwZSk7XG4gICAgaWYgKHRleHQpIHtcbiAgICAgIG5ld0RPTU5vZGUuaW5uZXJIVE1MID0gdGV4dDtcbiAgICB9XG4gICAgaWYgKGlucHV0VHlwZSkge1xuICAgICAgbmV3RE9NTm9kZS50eXBlID0gaW5wdXRUeXBlO1xuICAgIH1cbiAgICBpZiAodmFsdWUpIHtcbiAgICAgIG5ld0RPTU5vZGUudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgaWYgKGNsYXNzMSkge1xuICAgICAgbmV3RE9NTm9kZS5jbGFzc0xpc3QuYWRkKGNsYXNzMSk7XG4gICAgfVxuICAgIGlmIChjbGFzczIpIHtcbiAgICAgIG5ld0RPTU5vZGUuY2xhc3NMaXN0LmFkZChjbGFzczIpO1xuICAgIH1cbiAgICBpZiAoY2xhc3MzKSB7XG4gICAgICBuZXdET01Ob2RlLmNsYXNzTGlzdC5hZGQoY2xhc3MzKTtcbiAgICB9XG4gICAgaWYgKHBsYWNlaG9sZGVyKSB7XG4gICAgICBuZXdET01Ob2RlLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgfVxuICAgIGlmICh0ZXh0KSB7XG4gICAgICBuZXdET01Ob2RlLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICB9XG4gICAgaWYgKGRhdGFBdHRyKSB7XG4gICAgICBuZXdET01Ob2RlLnNldEF0dHJpYnV0ZSgnZGF0YS1yZWdpb24taWQnLCAnVVNBJyk7XG4gICAgfVxuICAgIGlmIChzaG9ydGNvZGUpIHtcbiAgICAgIG5ld0RPTU5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXZhbHVlJywgJ3Nob3J0Y29kZScpO1xuICAgIH1cbiAgICBpZiAoaWQpIHtcbiAgICAgIG5ld0RPTU5vZGUuaWQgPSBpZDtcbiAgICB9XG4gICAgaWYgKHByZWZlcnJlZCkge1xuICAgICAgbmV3RE9NTm9kZS5zZXRBdHRyaWJ1dGUoJ2RhdGEtcHJlZmVycmVkJywgcHJlZmVycmVkKTtcbiAgICAgIG5ld0RPTU5vZGUuc2V0QXR0cmlidXRlKCdkYXRhLXByZWZlcnJlZC1kZWxpbScsICctLS0tLScpO1xuICAgIH1cbiAgICBwYXJlbnROb2RlLmFwcGVuZChuZXdET01Ob2RlKTtcbiAgICBcbiAgfTtcbiAgY3JlYXRlRE9NTm9kZSgpO1xuXG4gIHJldHVybiB7XG4gICAgbmFtZSxcbiAgICBub2RlVHlwZSxcbiAgICBwYXJlbnQsXG4gICAgdGV4dCxcbiAgICBpbnB1dFR5cGUsXG4gICAgdmFsdWUsXG4gICAgY2xhc3MxLFxuICAgIGNsYXNzMixcbiAgICB0YXNrSUQsXG4gIH07XG59O1xuXG5leHBvcnQgeyBjb21wb25lbnRGYWN0b3J5IH07XG4iLCJjb25zdCBjb252ZXJ0VGVtcCA9ICh0ZW1wLCB1bml0KSA9PiB7XG4gIGxldCBuZXdUZW1wO1xuICBpZiAodW5pdCA9PT0gMCkge1xuICAgIG5ld1RlbXAgPSB0ZW1wICogMS44ICsgMzI7XG4gIH0gZWxzZSB7XG4gICAgbmV3VGVtcCA9ICh0ZW1wIC0gMzIpICogMC41NTU2O1xuICB9XG4gIHJldHVybiBuZXdUZW1wO1xufTtcblxuY29uc3Qgcm91bmRUZW1wID0gKHRlbXApID0+IHtcbiAgbGV0IG5ld1RlbXAgPSB0ZW1wO1xuICBuZXdUZW1wID0gTWF0aC5yb3VuZCh0ZW1wICogMTApIC8gMTA7XG4gIHJldHVybiBuZXdUZW1wO1xufTtcblxuY29uc3QgY29udmVydFRpbWUgPSAob2xkVGltZSwgdW5pdCkgPT4ge1xuICBpZiAodW5pdCA9PT0gMCkge1xuICAgIC8vIGkuZS4gaWYgdGltZSBpcyBjdXJyZW50bHkgaW4gQU0vUE0gbm90YXRpb25cbiAgICBjb25zdCBvbGRUaW1lU3BsaXQgPSBvbGRUaW1lLnNwbGl0KFwiIFwiKTtcbiAgICBjb25zdCB0aW1lU3BsaXQgPSBvbGRUaW1lU3BsaXRbMF0uc3BsaXQoXCI6XCIpO1xuICAgIGxldCBuZXdUaW1lO1xuICAgIGlmICh0aW1lU3BsaXRbMF0gPCAxMCAmJiBvbGRUaW1lU3BsaXRbMV0gPT09IFwiQU1cIikge1xuICAgICAgbmV3VGltZSA9IGAwJHt0aW1lU3BsaXRbMF19OiR7dGltZVNwbGl0WzFdfWA7XG4gICAgfVxuICAgIGlmICh0aW1lU3BsaXRbMF0gPj0gMTAgJiYgb2xkVGltZVNwbGl0WzFdID09PSBcIkFNXCIpIHtcbiAgICAgIG5ld1RpbWUgPSBgJHt0aW1lU3BsaXRbMF19OiR7dGltZVNwbGl0WzFdfWA7XG4gICAgfVxuICAgIGlmICh0aW1lU3BsaXRbMF0gPT09IDEyICYmIG9sZFRpbWVTcGxpdFsxXSA9PT0gXCJQTVwiKSB7XG4gICAgICBuZXdUaW1lID0gYDAke3RpbWVTcGxpdFswXX06JHt0aW1lU3BsaXRbMV19YDtcbiAgICB9XG4gICAgaWYgKHRpbWVTcGxpdFswXSA8PSAxMSAmJiBvbGRUaW1lU3BsaXRbMV0gPT09IFwiUE1cIikge1xuICAgICAgbmV3VGltZSA9IGAke051bWJlcih0aW1lU3BsaXRbMF0pICsgMTJ9OiR7dGltZVNwbGl0WzFdfWA7XG4gICAgfVxuICAgIHJldHVybiBuZXdUaW1lO1xuICB9XG4gIC8vIHRpbWUgaXMgaW4gMjRoIG5vdGF0aW9uXG4gIGNvbnN0IG9sZFRpbWVTcGxpdCA9IG9sZFRpbWUuc3BsaXQoXCI6XCIpO1xuICBjb25zdCBjaGFyMSA9IG9sZFRpbWVTcGxpdFswXS5jaGFyQXQoMCk7XG4gIGlmIChOdW1iZXIoY2hhcjEpID09PSAwKSB7XG4gICAgb2xkVGltZVNwbGl0WzBdID0gb2xkVGltZVNwbGl0WzBdLmNoYXJBdCgxKTtcbiAgfVxuICBsZXQgbmV3VGltZTtcbiAgaWYgKG9sZFRpbWVTcGxpdFswXSA8PSAxMSkge1xuICAgIG5ld1RpbWUgPSBgJHtvbGRUaW1lU3BsaXRbMF19OiR7b2xkVGltZVNwbGl0WzFdfSBBTWA7XG4gIH1cbiAgaWYgKG9sZFRpbWVTcGxpdFswXSA9PT0gMTIpIHtcbiAgICBuZXdUaW1lID0gYCR7b2xkVGltZVNwbGl0WzBdfToke29sZFRpbWVTcGxpdFsxXX0gUE1gO1xuICB9XG4gIGlmIChvbGRUaW1lU3BsaXRbMF0gPiAxMikge1xuICAgIG5ld1RpbWUgPSBgJHtvbGRUaW1lU3BsaXRbMF0gLSAxMn06JHtvbGRUaW1lU3BsaXRbMV19IFBNYDtcbiAgfVxuICByZXR1cm4gbmV3VGltZTtcbn07XG5cbmNvbnN0IGNvbnZlcnRUaW1lc0Zyb21Vbml4ID0gKHRpbWUsIG9mZnNldCkgPT4ge1xuICAvLyBUYWtlcyB1bml4IHRpbWUgZnJvbSBPcGVuIFdlYXRoZXIgYW5kIHJldHVybnMgYSBzdHJpbmcgd2l0aCB0aGUgcmVtb3RlXG4gIC8vIHRpbWUgKGkuZS4gdGhlIHBsYWNlIHdlJ3JlIGdldHRpbmcgd2VhdGhlciBmb3IpIGluIGh1bWFuLXJlYWRhYmxlIGZvcm1hdFxuICBjb25zdCB0aW1lT2Zmc2V0ID0gdGltZSArIG9mZnNldDtcbiAgY29uc3QgdGltZUNvbnZlcnRlZCA9IHRpbWVPZmZzZXQgKiAxMDAwO1xuICBjb25zdCBkID0gbmV3IERhdGUodGltZUNvbnZlcnRlZCk7XG4gIGNvbnN0IGRTdHJpbmcgPSBKU09OLnN0cmluZ2lmeShkKTtcbiAgY29uc3QgcmVnZXggPSAvKFswMV1cXGR8MlswLTNdKTpbMC01XVxcZC87XG4gIGNvbnN0IHRpbWUyNGggPSBkU3RyaW5nLm1hdGNoKHJlZ2V4KVswXTtcbiAgcmV0dXJuIHRpbWUyNGg7XG59O1xuXG5jb25zdCBjb252ZXJ0VGltZXMgPSAodW5pdCkgPT4ge1xuICBjb25zdCB0aW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGltZVwiKTtcbiAgaWYgKHVuaXQgPT09IDApIHtcbiAgICAvLyBpLmUuIGlmIHRpbWUgaXMgY3VycmVudGx5IGluIEFNL1BNIG5vdGF0aW9uXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aW1lcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgZWxlbWVudCA9IHRpbWVzW2ldLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgbmV3VGltZSA9IGNvbnZlcnRUaW1lKGVsZW1lbnQsIDApO1xuICAgICAgdGltZXNbaV0udGV4dENvbnRlbnQgPSBuZXdUaW1lO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBpLmUuIGlmIHRpbWUgaXMgY3VycmVudGx5IGluIDI0aCBub3RhdGlvblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGltZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aW1lc1tpXS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IG5ld1RpbWUgPSBjb252ZXJ0VGltZShlbGVtZW50LCAxKTtcbiAgICAgIHRpbWVzW2ldLnRleHRDb250ZW50ID0gbmV3VGltZTtcbiAgICB9XG4gIH1cbn07XG5cbmNvbnN0IGNvbnZlcnRUZW1wcyA9ICh1bml0KSA9PiB7XG4gIGNvbnN0IHRlbXBlcmF0dXJlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVtcGVyYXR1cmVcIik7XG4gIGlmICh1bml0ID09PSAwKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZW1wZXJhdHVyZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGVsID0gdGVtcGVyYXR1cmVzW2ldLnRleHRDb250ZW50O1xuICAgICAgY29uc3QgbmV3VGVtcCA9IGNvbnZlcnRUZW1wKGVsLCAwKTtcbiAgICAgIGNvbnN0IG5ld1RlbXBSb3VuZGVkID0gcm91bmRUZW1wKG5ld1RlbXApO1xuICAgICAgdGVtcGVyYXR1cmVzW2ldLnRleHRDb250ZW50ID0gbmV3VGVtcFJvdW5kZWQ7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGVtcGVyYXR1cmVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBjb25zdCBlbCA9IHRlbXBlcmF0dXJlc1tpXS50ZXh0Q29udGVudDtcbiAgICAgIGNvbnN0IG5ld1RlbXAgPSBjb252ZXJ0VGVtcChlbCwgMSk7XG4gICAgICBjb25zdCBuZXdUZW1wUm91bmRlZCA9IHJvdW5kVGVtcChuZXdUZW1wKTtcbiAgICAgIHRlbXBlcmF0dXJlc1tpXS50ZXh0Q29udGVudCA9IG5ld1RlbXBSb3VuZGVkO1xuICAgIH1cbiAgfVxufTtcblxuY29uc3QgY29udmVydFdpbmQgPSAodW5pdCkgPT4ge1xuICBjb25zdCB3aW5kID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kLXNwZWVkXCIpO1xuICBjb25zdCB3aW5kVW5pdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtdW5pdHNcIik7XG4gIGlmICh1bml0ID09PSAwKSB7XG4gICAgd2luZC5kYXRhc2V0LmttaCA9IHdpbmQudGV4dENvbnRlbnQ7XG4gICAgY29uc3Qga21Ub00gPSB3aW5kLnRleHRDb250ZW50ICogMC42MjEzNzE7XG4gICAgd2luZC50ZXh0Q29udGVudCA9IE1hdGgucm91bmQoa21Ub00pO1xuICAgIHdpbmRVbml0cy50ZXh0Q29udGVudCA9IFwibXBoXCI7XG4gIH0gZWxzZSB7XG4gICAgd2luZC50ZXh0Q29udGVudCA9IHdpbmQuZGF0YXNldC5rbWg7XG4gICAgd2luZFVuaXRzLnRleHRDb250ZW50ID0gXCJrbS9oXCI7XG4gIH1cbn07XG5cbmNvbnN0IGNvbnZlcnRWaXMgPSAodmFsdWUsIHVuaXQpID0+IHtcbiAgY29uc3QgdmlzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXNcIik7XG4gIGlmICh1bml0ID09PSAwKSB7XG4gICAgdmlzLnRleHRDb250ZW50ID0gTWF0aC5yb3VuZCh2aXMudGV4dENvbnRlbnQgKiAxLjA5MzYxKTtcbiAgfSBlbHNlIHtcbiAgICB2aXMudGV4dENvbnRlbnQgPSBNYXRoLnJvdW5kKHZpcy50ZXh0Q29udGVudCAqIDAuOTE0NCk7XG4gIH1cbn07XG5cbmNvbnN0IGNvbnZlcnRGcm9tS2VsdmluID0gKHRlbXApID0+IHtcbiAgY29uc3QgbmV3VGVtcCA9IHRlbXAgLSAyNzMuMTU7XG4gIGNvbnN0IHRlbXBSb3VuZGVkID0gTWF0aC5yb3VuZChuZXdUZW1wICogMTAwKSAvIDEwMDtcbiAgcmV0dXJuIHRlbXBSb3VuZGVkO1xufTtcblxuZXhwb3J0IHtcbiAgcm91bmRUZW1wLFxuICBjb252ZXJ0VGltZXMsXG4gIGNvbnZlcnRUaW1lLFxuICBjb252ZXJ0VGVtcHMsXG4gIGNvbnZlcnRWaXMsXG4gIGNvbnZlcnRXaW5kLFxuICBjb252ZXJ0RnJvbUtlbHZpbixcbiAgY29udmVydFRpbWVzRnJvbVVuaXhcbn07XG4iLCIvKiFcbiogY291bnRyeS1yZWdpb24tc2VsZWN0b3JcbiogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4qIDAuNS4wXG4qIEBhdXRob3IgQmVuIEtlZW5cbiogQHJlcG8gaHR0cHM6Ly9naXRodWIuY29tL2JlbmtlZW4vY291bnRyeS1yZWdpb24tc2VsZWN0b3JcbiogQGxpY2VuY2UgTUlUXG4qL1xuXG4hZnVuY3Rpb24oYSxuKXtpZihcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQpZGVmaW5lKFtdLG4pO2Vsc2UgaWYoXCJvYmplY3RcIj09dHlwZW9mIGV4cG9ydHMpdHJ5e21vZHVsZS5leHBvcnRzPW4ocmVxdWlyZSgpKX1jYXRjaChhKXttb2R1bGUuZXhwb3J0cz1uKCl9ZWxzZSBhLmNycz1uKCl9KHRoaXMsZnVuY3Rpb24oKXtcInVzZSBzdHJpY3RcIjt2YXIgbT0hMCxoPSEwLGw9W10sdD17fSxzPVtbXCJBZmdoYW5pc3RhblwiLFwiQUZcIixcIkJhZGFraHNoYW5+QkRTfEJhZGdoaXN+QkRHfEJhZ2hsYW5+QkdMfEJhbGtofkJBTHxCYW15YW5+QkFNfERheWt1bmRpfkRBWXxGYXJhaH5GUkF8RmFyeWFifkZZQnxHaGF6bml+R0hBfEdob3J+R0hPfEhlbG1hbmR+SEVMfEhlcmF0fkhFUnxKb3d6amFufkpPV3xLYWJ1bH5LQUJ8S2FuZGFoYXJ+S0FOfEthcGlzYX5LQVB8S2hvc3R+S0hPfEt1bmFyfktOUnxLdW5kdXp+S0RafExhZ2htYW5+TEFHfExvZ2FyfkxPV3xNYWlkYW4gV2FyZGFrfldBUnxOYW5nYXJoYXJ+TkFOfE5pbXJ1en5OSU18TnVyaXN0YW5+TlVSfFBha3RpYX5QSUF8UGFrdGlrYX5QS0F8UGFuanNoaXJ+UEFOfFBhcndhbn5QQVJ8U2FtYW5nYW5+U0FNfFNhci1lIFBvbH5TQVJ8VGFraGFyflRBS3xVcm96Z2Fufk9SVXxaYWJ1bH5aQUJcIl0sW1wiw4VsYW5kIElzbGFuZHNcIixcIkFYXCIsXCJCcsOkbmTDtn5CUnxFY2tlcsO2fkVDfEZpbnN0csO2bX5GTnxGw7ZnbMO2fkZHfEdldGF+R1R8SGFtbWFybGFuZH5ITXxKb21hbGF+Sk18S3VtbGluZ2V+S018S8O2a2FyfktLfExlbWxhbmR+TEV8THVtcGFybGFuZH5MVXxNYXJpZWhhbW5+TUh8U2FsdHZpa35TVnxTb3R0dW5nYX5TVHxTdW5kflNEfFbDpXJkw7Z+VlJcIl0sW1wiQWxiYW5pYVwiLFwiQUxcIixcIkJlcmF0fjAxfERpYsOrcn4wOXxEdXJyw6tzfjAyfEVsYmFzYW5+MDN8Rmllcn4wNHxHamlyb2thc3TDq3J+MDV8S29yw6fDq34wNnxLdWvDq3N+MDd8TGV6aMOrfjA4fFNoa29kw6tyfjEwfFRpcmFuYX4xMXxWbG9yw6t+MTJcIl0sW1wiQWxnZXJpYVwiLFwiRFpcIixcIkFkcmFyfjAxfEHDr24gRGVmbGF+NDR8QcOvbiBUw6ltb3VjaGVudH40NnxBbGdpZXJzfjE2fEFubmFiYX4yM3xCYXRuYX4wNXxCw6ljaGFyfjA4fELDqWphw69hfjA2fEJpc2tyYX4wN3xCbGlkYX4wOXxCb3JkaiBCb3UgQXJyw6lyaWRqfjM0fEJvdcOvcmF+MTB8Qm91bWVyZMOoc34zNXxDaGxlZn4wMnxDb25zdGFudGluZX4yNXxEamVsZmF+MTd8RWwgQmF5YWRofjMyfEVsIE91ZWR+Mzl8RWwgVGFyZn4zNnxHaGFyZGHDr2F+NDd8R3VlbG1hfjI0fElsbGl6aX4zM3xKaWplbH4xOHxLaGVuY2hlbGF+NDB8TGFnaG91YXR+MDN8TWFzY2FyYX4yOXxNw6lkw6lhfjI2fE1pbGF+NDN8TW9zdGFnYW5lbX4yN3xNc2lsYX4yOHxOYcOibWF+NDV8T3Jhbn4zMXxPdWFyZ2xhfjMwfE91bSBlbCBCb3VhZ2hpfjA0fFJlbGl6YW5lfjQ4fFNhw69kYX4yMHxTw6l0aWZ+MTl8U2lkaSBCZWwgQWJiw6hzfjIyfFNraWtkYX4yMXxTb3VrIEFocmFzfjQxfFRhbWFuZ2hhc3NldH4xMXxUw6liZXNzYX4xMnxUaWFyZXR+MTR8VGluZG91Zn4zN3xUaXBhemF+NDJ8VGlzc2Vtc2lsdH4zOHxUaXppIE91em91fjE1fFRsZW1jZW5+MTNcIl0sW1wiQW1lcmljYW4gU2Ftb2FcIixcIkFTXCIsXCJUdXR1aWxhfjAxfEF1bnUndX4wMnxUYSfFq34wM3xPZnXigJFPbG9zZWdhfjA0fFJvc2UgQXRvbGx+MjF8U3dhaW5zIElzbGFuZH4yMlwiXSxbXCJBbmRvcnJhXCIsXCJBRFwiLFwiQW5kb3JyYSBsYSBWZWxsYX4wN3xDYW5pbGxvfjAyfEVuY2FtcH4wM3xFc2NhbGRlcy1FbmdvcmRhbnl+MDh8TGEgTWFzc2FuYX4wNHxPcmRpbm9+MDV8U2FudCBKdWxpw6AgZGUgTMOycmlhfjA2XCJdLFtcIkFuZ29sYVwiLFwiQU9cIixcIkJlbmdvfkJHT3xCZW5ndWVsYX5CR1V8QmnDqX5CSUV8Q2FiaW5kYX5DQUJ8Q3VhbmRvIEN1YmFuZ29+Q0NVfEN1YW56YSBOb3J0ZX5DTk98Q3VhbnphIFN1bH5DVVN8Q3VuZW5lfkNOTnxIdWFtYm9+SFVBfEh1w61sYX5IVUl8THVhbmRhfkxVQXxMdW5kYSBOb3J0ZX5MTk98THVuZGEgU3VsfkxTVXxNYWxhbmplfk1BTHxNb3hpY29+TU9YfE5hbWliZX5OQU18VcOtZ2V+VUlHfFphaXJlflpBSVwiXSxbXCJBbmd1aWxsYVwiLFwiQUlcIixcIkFuZ3VpbGxhfjAxfEFuZ3VpbGxpdGEgSXNsYW5kfjAyfEJsb3dpbmcgUm9ja34wM3xDb3ZlIENheX4wNHxDcm9jdXMgQ2F5fjA1fERlYWRtYW4ncyBDYXl+MDZ8RG9nIElzbGFuZH4wN3xFYXN0IENheX4wOHxMaXR0bGUgSXNsYW5kfjA5fExpdHRsZSBTY3J1YiBJc2xhbmR+MTB8TWlkIENheX4xMXxOb3J0aCBDYXl+MTJ8UHJpY2tseSBQZWFyIENheXN+MTN8UmFiYml0IElzbGFuZH4xNHxTYW5keSBJc2xhbmQvU2FuZCBJc2xhbmR+MTV8U2NpbGx5IENheX4xNnxTY3J1YiBJc2xhbmR+MTd8U2VhbCBJc2xhbmR+MTh8U29tYnJlcm8vSGF0IElzbGFuZH4xOXxTb3V0aCBDYXl+MjB8U291dGggV2FnZXIgSXNsYW5kfjIxfFdlc3QgQ2F5fjIyXCJdLFtcIkFudGFyY3RpY2FcIixcIkFRXCIsXCJBbnRhcmN0aWNhfkFRXCJdLFtcIkFudGlndWEgYW5kIEJhcmJ1ZGFcIixcIkFHXCIsXCJBbnRpZ3VhIElzbGFuZH4wMXxCYXJidWRhIElzbGFuZH4wMnxCaXJkIElzbGFuZH4wNHxCaXNob3AgSXNsYW5kfjA1fEJsYWtlIElzbGFuZH4wNnxDcnVtcCBJc2xhbmR+MDl8RHVsY2luYSBJc2xhbmR+MTB8RXhjaGFuZ2UgSXNsYW5kfjExfEZpdmUgSXNsYW5kc34xMnxHcmVhdCBCaXJkIElzbGFuZH4xM3xHcmVlbiBJc2xhbmR+MTR8R3VpYW5hIElzbGFuZH4xNXxIYXdlcyBJc2xhbmR+MTd8SGVsbHMgR2F0ZSBJc2xhbmR+MTZ8SGVucnkgSXNsYW5kfjE4fEpvaG5zb24gSXNsYW5kfjE5fEtpZCBJc2xhbmR+MjB8TG9ic3RlciBJc2xhbmR+MjJ8TWFpZGVuIElzbGFuZH4yNHxNb29yIElzbGFuZH4yNXxOYW5ueSBJc2xhbmR+MjZ8UGVsaWNhbiBJc2xhbmR+Mjd8UHJpY2tseSBQZWFyIElzbGFuZH4yOHxSYWJiaXQgSXNsYW5kfjI5fFJlZCBIZWFkIElzbGFuZH4zMXxSZWRvbmRhIElzbGFuZH4wM3xTYW5keSBJc2xhbmR+MzJ8U21pdGggSXNsYW5kfjMzfFRoZSBTaXN0ZXJzfjM0fFZlcm5vbiBJc2xhbmR+MzV8V2lja2VkIFdpbGwgSXNsYW5kfjM2fFlvcmsgSXNsYW5kfjM3XCJdLFtcIkFyZ2VudGluYVwiLFwiQVJcIixcIkJ1ZW5vcyBBaXJlc35CfENhcGl0YWwgRmVkZXJhbH5DfENhdGFtYXJjYX5LfENoYWNvfkh8Q2h1YnV0flV8Q8OzcmRvYmF+WHxDb3JyaWVudGVzfld8RW50cmUgUsOtb3N+RXxGb3Jtb3NhflB8SnVqdXl+WXxMYSBQYW1wYX5MfExhIFJpb2phfkZ8TWVuZG96YX5NfE1pc2lvbmVzfk58TmV1cXXDqW5+UXxSw61vIE5lZ3JvflJ8U2FsdGF+QXxTYW4gSnVhbn5KfFNhbiBMdWlzfkR8U2FudGEgQ3J1en5afFNhbnRhIEZlflN8U2FudGlhZ28gZGVsIEVzdGVyb35HfFRpZXJyYSBkZWwgRnVlZ29+VnxUdWN1bcOhbn5UXCJdLFtcIkFybWVuaWFcIixcIkFNXCIsXCJBcmFnYXRzb3RufkFHfEFyYXJhdH5BUnxBcm1hdmlyfkFWfEdlZ2hhcmt1bmlrfkdSfEtvdGF5a35LVHxMb3JpfkxPfFNoaXJha35TSHxTeXVuaWt+U1V8VGF2dXNoflRWfFZheW90cyBEem9yflZEfFllcmV2YW5+RVJcIl0sW1wiQXJ1YmFcIixcIkFXXCIsXCJBcnViYX5BV1wiXSxbXCJBdXN0cmFsaWFcIixcIkFVXCIsXCJBdXN0cmFsaWFuIENhcGl0YWwgVGVycml0b3J5fkFDVHxOZXcgU291dGggV2FsZXN+TlNXfE5vcnRoZXJuIFRlcnJpdG9yeX5OVHxRdWVlbnNsYW5kflFMRHxTb3V0aCBBdXN0cmFsaWF+U0F8VGFzbWFuaWF+VEFTfFZpY3RvcmlhflZJQ3xXZXN0ZXJuIEF1c3RyYWxpYX5XQVwiXSxbXCJBdXN0cmlhXCIsXCJBVFwiLFwiQnVyZ2VubGFuZH4xfEvDpHJudGVufjJ8TmllZGVyw7ZzdGVycmVpY2h+M3xPYmVyw7ZzdGVycmVpY2h+NHxTYWx6YnVyZ341fFN0ZWllcm1hcmt+NnxUaXJvbH43fFZvcmFybGJlcmd+OHxXaWVufjlcIl0sW1wiQXplcmJhaWphblwiLFwiQVpcIixcIkFixZ9lcm9ufkFCU3xBxJ9jYWLJmWRpfkFHQ3xBxJ9kYW1+QUdNfEHEn2RhxZ9+QUdTfEHEn3N0YWZhfkFHQXxBxJ9zdX5BR1V8QXN0YXJhfkFTVHxCYWLJmWt+QkFCfEJhbGFryZlufkJBTHxCyZlyZMmZfkJBUnxCZXlsyZlxYW5+QkVZfEJpbMmZc3V2YXJ+QklMfEPJmWJyYXnEsWx+Q0FCfEPJmWxpbGFiYWR+Q0FMfEN1bGZhfkNVTHxEYcWfa8mZc8mZbn5EQVN8RsO8enVsaX5GVVp8R8mZZMmZYsmZeX5HQUR8R29yYW5ib3l+R09SfEfDtnnDp2F5fkdPWXxHw7Z5Z8O2bH5HWUd8SGFjxLFxYWJ1bH5IQUN8xLBtacWfbGl+SU1JfMSwc21hecSxbGzEsX5JU018S8mZbGLJmWPJmXJ+S0FMfEvHnW5nx51ybGl+S0FOfEvDvHJkyZltaXJ+S1VSfExhw6fEsW5+TEFDfEzJmW5ryZlyYW5+TEFOfExlcmlrfkxFUnxNYXNhbGzEsX5NQVN8TmVmdMOnYWxhfk5FRnxPxJ91en5PR1V8T3JkdWJhZH5PUkR8UcmZYsmZbMmZflFBQnxRYXh+UUFYfFFhemF4flFBWnxRb2J1c3Rhbn5RT0J8UXViYX5RQkF8UXViYWRsaX5RQkl8UXVzYXJ+UVVTfFNhYXRsxLF+U0FUfFNhYmlyYWJhZH5TQUJ8xZ5hYnJhbn5TQk58U8mZZMmZcsmZa35TQUR8xZ5haGJ1en5TQUh8xZ7JmWtpflNBS3xTYWx5YW5+U0FMfMWeYW1heMSxflNNSXzFnsmZbWtpcn5TS1J8U2FtdXh+U01YfMWeyZlydXJ+U0FSfFNpecmZesmZbn5TSVl8xZ51xZ9hflNVU3xUyZlydMmZcn5UQVJ8VG92dXp+VE9WfFVjYXJ+VUNBfFhhw6dtYXp+WEFDfFjEsXrEsX5YSVp8WG9jYWzEsX5YQ0l8WG9jYXbJmW5kflhWRHxZYXJkxLFtbMSxfllBUnxZZXZsYXh+WUVWfFrJmW5naWxhbn5aQU58WmFxYXRhbGF+WkFRfFrJmXJkYWJ+WkFSXCJdLFtcIkJhaGFtYXNcIixcIkJTXCIsXCJBY2tsaW5zIElzbGFuZH4wMXxCZXJyeSBJc2xhbmRzfjIyfEJpbWluaX4wMnxCbGFjayBQb2ludH4yM3xDYXQgSXNsYW5kfjAzfENlbnRyYWwgQWJhY29+MjR8Q3Jvb2tlZCBJc2xhbmQgYW5kIExvbmcgQ2F5fjI4fEVhc3QgR3JhbmQgQmFoYW1hfjI5fEV4dW1hfjA0fEZyZWVwb3J0fjA1fEZyZXNoIENyZWVrfjA2fEdvdmVybm9yJ3MgSGFyYm91cn4wN3xHcmVlbiBUdXJ0bGUgQ2F5fjA4fEhhcmJvdXIgSXNsYW5kfjA5fEhpZ2ggUm9ja34xMHxJbmFndWF+MTF8S2VtcHMgQmF5fjEyfExvbmcgSXNsYW5kfjEzfE1hcnNoIEhhcmJvdXJ+MTR8TWF5YWd1YW5hfjE1fE1vb3Jl4oCZcyBJc2xhbmR+NDB8TmV3IFByb3ZpZGVuY2V+MTZ8TmljaG9sbHN0b3duIGFuZCBCZXJyeSBJc2xhbmRzfjE3fE5vcnRoIEFiYWNvfjQyfE5vcnRoIEFuZHJvc340MXxOb3J0aCBFbGV1dGhlcmF+MzN8UmFnZ2VkIElzbGFuZH4xOHxSb2NrIFNvdW5kfjE5fFNhbiBTYWx2YWRvciBhbmQgUnVtIENheX4yMHxTYW5keSBQb2ludH4yMXxTb3V0aCBBYmFjb34zNXxTb3V0aCBBbmRyb3N+MzZ8U291dGggRWxldXRoZXJhfjM3fFdlc3QgR3JhbmQgQmFoYW1hfjM5XCJdLFtcIkJhaHJhaW5cIixcIkJIXCIsXCJBbCBKYW7Fq2LEq3lhaH4xNHxBbCBNYW7EgW1haH4xM3xBbCBNdeG4qWFycmFxfjE1fEFsIFd1c8Wjw6F+MTZ8QXNoIFNoYW3EgWzEq3lhaH4xN1wiXSxbXCJCYW5nbGFkZXNoXCIsXCJCRFwiLFwiQmFyaXNhbH5BfENoaXR0YWdvbmd+QnxEaGFrYX5DfEtodWxuYX5EfE15bWVuc2luZ2h+TXxSYWpzaGFoaX5FfFJhbmdwdXJ+RnxTeWxoZXR+R1wiXSxbXCJCYXJiYWRvc1wiLFwiQkJcIixcIkNocmlzdCBDaHVyY2h+MDF8U2FpbnQgQW5kcmV3fjAyfFNhaW50IEdlb3JnZX4wM3xTYWludCBKYW1lc34wNHxTYWludCBKb2hufjA1fFNhaW50IEpvc2VwaH4wNnxTYWludCBMdWN5fjA3fFNhaW50IE1pY2hhZWx+MDh8U2FpbnQgUGV0ZXJ+MDl8U2FpbnQgUGhpbGlwfjEwfFNhaW50IFRob21hc34xMVwiXSxbXCJCZWxhcnVzXCIsXCJCWVwiLFwiQnJlc3Qgdm9ibGFzdH5CUnxHb3JvZCBNaW5za35IT3xIb21pZWwgdm9ibGFzdH5IT3xIcm9kbmEgdm9ibGFzdH5IUnxNYWhpbHlvdyB2b2JsYXN0fk1BfE1pbnNrIHZvYmxhc3R+TUl8Vml0c2Vic2sgdm9ibGFzdH5WSVwiXSxbXCJCZWxnaXVtXCIsXCJCRVwiLFwiQnJ1eGVsbGVzLUNhcGl0YWxlfkJSVXxSw6lnaW9uIEZsYW1hbmRlflZMR3xSw6lnaW9uIFdhbGxvbmnDq35XQUxcIl0sW1wiQmVsaXplXCIsXCJCWlwiLFwiQmVsaXplIERpc3RyaWN0fkJafENheW8gRGlzdHJpY3R+Q1l8Q29yb3phbCBEaXN0cmljdH5DWkx8T3JhbmdlIFdhbGsgRGlzdHJpY3R+T1d8U3Rhbm4gQ3JlZWsgRGlzdHJpY3R+U0N8VG9sZWRvIERpc3RyaWN0flRPTFwiXSxbXCJCZW5pblwiLFwiQkpcIixcIkFsaWJvcml+QUx8QXRha29yYX5BS3xBdGxhbnRpcXVlfkFRfEJvcmdvdX5CT3xDb2xsaW5lcyBEZXBhcnRtZW50fkNPfERvbmdhfkRPfEtvdWZmb35LT3xMaXR0b3JhbCBEZXBhcnRtZW50fkxJfE1vbm8gRGVwYXJ0bWVudH5NT3xPdcOpbcOpfk9VfFBsYXRlYXV+UEx8Wm91flpPXCJdLFtcIkJlcm11ZGFcIixcIkJNXCIsXCJDaXR5IG9mIEhhbWlsdG9ufjAzfERldm9uc2hpcmUgUGFyaXNofjAxfEhhbWlsdG9uIFBhcmlzaH4wMnxQYWdldCBQYXJpc2h+MDR8UGVtYnJva2UgUGFyaXNofjA1fFNhbmR5cyBQYXJpc2h+MDh8U21pdGgncyBQYXJpc2h+MDl8U291dGhhbXB0b24gUGFyaXNofjEwfFN0LiBHZW9yZ2UncyBQYXJpc2h+MDd8VG93biBvZiBTdC4gR2VvcmdlfjA2fFdhcndpY2sgUGFyaXNofjExXCJdLFtcIkJodXRhblwiLFwiQlRcIixcIkJ1bXRoYW5nfjMzfENoaHVraGF+MTJ8RGFnYW5hfjIyfEdhc2F+R0F8SGFhfjEzfExodW50c2V+NDR8TW9uZ2FyfjQyfFBhcm9+MTF8UGVtYWdhdHNoZWx+NDN8UHVuYWtoYX4yM3xTYW1kcnVwIEpvbmdraGFyfjQ1fFNhbXRzZX4xNHxTYXJwYW5nfjMxfFRoaW1waHV+MTV8VHJhc2hpZ2FuZ340MXxUcmFzaGl5YW5ndHNlflRZfFRyb25nc2F+MzJ8VHNpcmFuZ34yMXxXYW5nZHVlIFBob2RyYW5nfjI0fFpoZW1nYW5nfjM0XCJdLFtcIkJvbGl2aWFcIixcIkJPXCIsXCJCZW5pfkJ8Q2h1cXVpc2FjYX5IfENvY2hhYmFtYmF+Q3xMYSBQYXp+THxPcnVyb35PfFBhbmRvfk58UG90b3PDrX5QfFNhbnRhIENydXp+U3xUYXJpamF+VFwiXSxbXCJCb25haXJlLCBTaW50IEV1c3RhdGl1cyBhbmQgU2FiYVwiLFwiQlFcIixcIkJvbmFpcmV+Qk98U2FiYSBJc2FuZH5TQXxTaW50IEV1c3RhdGl1c35TRVwiXSxbXCJCb3NuaWEgYW5kIEhlcnplZ292aW5hXCIsXCJCQVwiLFwiQnLEjWtvIERpc3RyaWt0fkJSQ3xGZWRlcmFjaWphIEJvc25lIGkgSGVyY2Vnb3ZpbmV+QklIfFJlcHVibGlrYSBTcnBza2F+U1JQXCJdLFtcIkJvdHN3YW5hXCIsXCJCV1wiLFwiQ2VudHJhbH5DRXxHaGFueml+R0h8S2dhbGFnYWRpfktHfEtnYXRsZW5nfktMfEt3ZW5lbmd+S1d8Tm9ydGggV2VzdH5OV3xOb3J0aC1FYXN0fk5FfFNvdXRoIEVhc3R+U0V8U291dGhlcm5+U09cIl0sW1wiQm91dmV0IElzbGFuZFwiLFwiQlZcIixcIkJvdXZldCBJc2xhbmR+QlZcIl0sW1wiQnJhemlsXCIsXCJCUlwiLFwiQWNyZX5BQ3xBbGFnb2FzfkFMfEFtYXDDoX5BUHxBbWF6b25hc35BTXxCYWhpYX5CQXxDZWFyw6F+Q0V8RGlzdHJpdG8gRmVkZXJhbH5ERnxFc3DDrXJpdG8gU2FudG9+RVN8R29pw6FzfkdPfE1hcmFuaMOjb35NQXxNYXRvIEdyb3Nzb35NVHxNYXRvIEdyb3NzbyBkbyBTdWx+TVN8TWluYXMgR2VyYWlzfk1HfFBhcsOhflBBfFBhcmHDrWJhflBCfFBhcmFuw6F+UFJ8UGVybmFtYnVjb35QRXxQaWF1w61+UEl8UmlvIGRlIEphbmVpcm9+Ukp8UmlvIEdyYW5kZSBkbyBOb3J0ZX5STnxSaW8gR3JhbmRlIGRvIFN1bH5SU3xSb25kw7RuaWF+Uk98Um9yYWltYX5SUnxTYW50YSBDYXRhcmluYX5TQ3xTw6NvIFBhdWxvflNQfFNlcmdpcGV+U0V8VG9jYW50aW5zflRPXCJdLFtcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeVwiLFwiSU9cIixcIkJyaXRpc2ggSW5kaWFuIE9jZWFuIFRlcnJpdG9yeX5JT1wiXSxbXCJCcnVuZWkgRGFydXNzYWxhbVwiLFwiQk5cIixcIkJlbGFpdH5CRXxCcnVuZWkgTXVhcmF+Qk18VGVtYnVyb25nflRFfFR1dG9uZ35UVVwiXSxbXCJCdWxnYXJpYVwiLFwiQkdcIixcIkJsYWdvZXZncmFkfjAxfEJ1cmdhc34wMnxEb2JyaWNofjA4fEdhYnJvdm9+MDd8SmFtYm9sfjI4fEtoYXNrb3ZvfjI2fEtqdXN0ZW5kaWx+MTB8S3VyZHpoYWxpfjA5fExvdmVjaH4xMXxNb250YW5hfjEyfFBhemFyZHpoaWt+MTN8UGVybmlrfjE0fFBsZXZlbn4xNXxQbG92ZGl2fjE2fFJhemdyYWR+MTd8UnVzZX4xOHxTaHVtZW5+Mjd8U2lsaXN0cmF+MTl8U2xpdmVufjIwfFNtb2xqYW5+MjF8U29maWphfjIzfFNvZmlqYS1HcmFkfjIyfFN0YXJhIFphZ29yYX4yNHxUdXJnb3Zpc2hoZX4yNXxWYXJuYX4wM3xWZWxpa28gVHVybm92b34wNHxWaWRpbn4wNXxWcmFjYX4wNlwiXSxbXCJCdXJraW5hIEZhc29cIixcIkJGXCIsXCJCYWzDqX5CQUx8QmFtL0xha2UgQmFtfkJBTXxCYW53YSBQcm92aW5jZX5CQU58QmF6w6hnYX5CQVp8Qm91Z291cmliYX5CR1J8Qm91bGdvdSBQcm92aW5jZX5CTEd8Qm91bGtpZW1kw6l+QkxLfENvbW/DqS9Lb21vZX5DT018R2Fuem91cmdvdSBQcm92aW5jZX5HQU58R25hZ25hfkdOQXxHb3VybWEgUHJvdmluY2V+R09VfEhvdWV0fkhPVXxJb2JhfklPQnxLYWRpb2dvfktBRHxLw6luw6lkb3Vnb3V+S0VOfEtvbW9uZGphcml+S01EfEtvbXBpZW5nYX5LTVB8S29zc2kgUHJvdmluY2V+S09TfEtvdWxww6lsb2dvfktPUHxLb3VyaXRlbmdhfktPVHxLb3Vyd8Opb2dvfktPV3xMw6lyYWJhfkxFUnxMb3JvdW1+TE9SfE1vdWhvdW5+TU9VfE5hbWVudGVuZ2F+TkFNfE5hb3VyaS9OYWhvdXJpfk5BT3xOYXlhbGF+TkFZfE5vdW1iaWVsfk5PVXxPdWJyaXRlbmdhfk9VQnxPdWRhbGFufk9VRHxQYXNzb3LDqX5QQVN8UG9uaX5QT058U2FuZ3Vpw6l+U05HfFNhbm1hdGVuZ2F+U01UfFPDqW5vflNFTnxTaXNzaWxpflNJU3xTb3VtflNPTXxTb3Vyb3V+U09SfFRhcG9hflRBUHxUdWkvVHV5flRVSXxZYWdoYX5ZQUd8WWF0ZW5nYX5ZQVR8Wmlyb35aSVJ8Wm9uZG9tYX5aT058Wm91bmR3w6lvZ29+Wk9VXCJdLFtcIkJ1cnVuZGlcIixcIkJJXCIsXCJCdWJhbnphfkJCfEJ1anVtYnVyYSBNYWlyaWV+Qk18QnVqdW1idXJhIFJ1cmFsfkJMfEJ1cnVyaX5CUnxDYW5rdXpvfkNBfENpYml0b2tlfkNJfEdpdGVnYX5HSXxLYXJ1eml+S1J8S2F5YW56YX5LWXxLaXJ1bmRvfktJfE1ha2FtYmF+TUF8TXVyYW12eWF+TVV8TXV5aW5nYX5NWXxNd2Fyb35NV3xOZ296aX5OR3xSdXRhbmF+UlR8UnV5aWdpflJZXCJdLFtcIkNhbWJvZGlhXCIsXCJLSFwiLFwiQmFhdCBEYW1iYW5nfjJ8QmFudGVheSBNZWFuIENoZXl+MXxLYW1wb25nIENoYWFtfjN8S2FtcG9uZyBDaGhuYW5nfjR8S2FtcG9uZyBTcHVldX41fEthbXBvbmcgVGh1bX42fEthbXBvdH43fEthbmRhYWx+OHxLYW9oIEtvbmd+OXxLcmFjaGVofjEwfEtyb25nIEthZWJ+MjN8S3JvbmcgUGFpbGlufjI0fEtyb25nIFByZWFoIFNpaGFub3VrfjE4fE1vbmRvbCBLaXJpfjExfE90ZGFyIE1lYW4gQ2hleX4yMnxQaG5vbSBQZW5ofjEyfFBvdXNhYXR+MTV8UHJlYWggVmloZWFyfjEzfFByZXkgVmVhZW5nfjE0fFJvdGFuYWggS2lyaX4xNnxTaWVtIFJlYWJ+MTd8U3R1ZW5nIFRyZW5nfjE5fFN2YWF5IFJpZW5nfjIwfFRhYWthZXZ+MjF8VGJvbmcgS2htdW1+MjVcIl0sW1wiQ2FtZXJvb25cIixcIkNNXCIsXCJBZGFtYW91YX5BRHxDZW50cmV+Q0V8RXN0fkVTfEV4dHLDqm1lLU5vcmR+RU58TGl0dG9yYWx+TFR8Tm9yZH5OT3xOb3JkLU91ZXN0fk5XfE91ZXN0fk9VfFN1ZH5TVXxTdWQtT3Vlc3R+U1dcIl0sW1wiQ2FuYWRhXCIsXCJDQVwiLFwiQWxiZXJ0YX5BQnxCcml0aXNoIENvbHVtYmlhfkJDfE1hbml0b2Jhfk1CfE5ldyBCcnVuc3dpY2t+TkJ8TmV3Zm91bmRsYW5kIGFuZCBMYWJyYWRvcn5OTHxOb3J0aHdlc3QgVGVycml0b3JpZXN+TlR8Tm92YSBTY290aWF+TlN8TnVuYXZ1dH5OVXxPbnRhcmlvfk9OfFByaW5jZSBFZHdhcmQgSXNsYW5kflBFfFF1ZWJlY35RQ3xTYXNrYXRjaGV3YW5+U0t8WXVrb25+WVRcIl0sW1wiQ2FwZSBWZXJkZVwiLFwiQ1ZcIixcIkJvYSBWaXN0YX5CVnxCcmF2YX5CUnxDYWxoZXRhIGRlIFPDo28gTWlndWVsfkNTfE1haW9+TUF8TW9zdGVpcm9zfk1PfFBhw7psflBBfFBvcnRvIE5vdm9+UE58UHJhaWF+UFJ8UmliZWlyYSBCcmF2YX5SQnxSaWJlaXJhIEdyYW5kZX5SR3xTYWx+U0x8U2FudGEgQ2F0YXJpbmF+Q0F8U2FudGEgQ3J1en5DUnxTw6NvIERvbWluZ29zflNEfFPDo28gRmlsaXBlflNGfFPDo28gTmljb2xhdX5TTnxTw6NvIFZpY2VudGV+U1Z8VGFycmFmYWx+VEF8VGFycmFmYWwgZGUgU8OjbyBOaWNvbGF1flRTXCJdLFtcIkNheW1hbiBJc2xhbmRzXCIsXCJLWVwiLFwiQ3JlZWt8RWFzdGVybnxNaWRsYW5kfFNvdXRoIFRvd258U3BvdCBCYXl8U3Rha2UgQmF5fFdlc3QgRW5kfFdlc3Rlcm5cIl0sW1wiQ2VudHJhbCBBZnJpY2FuIFJlcHVibGljXCIsXCJDRlwiLFwiQmFtaW5ndWktQmFuZ29yYW5+QkJ8QmFuZ3VpfkJHRnxCYXNzZS1Lb3R0b35CS3xIYXV0ZS1Lb3R0b35IS3xIYXV0LU1ib21vdX5ITXxLw6ltb35LR3xMb2JheWV+TEJ8TWFtYsOpcsOpLUthZMOpw69+SFN8TWJvbW91fk1CfE5hbmEtR3JlYml6aX4xMHxOYW5hLU1hbWLDqXLDqX5OTXxPbWJlbGxhLU0nUG9rb35NUHxPdWFrYX5VS3xPdWhhbX5BQ3xPdWhhbSBQw6luZMOpfk9QfFNhbmdoYS1NYmHDqXLDqX5TRXxWYWthZ2F+VktcIl0sW1wiQ2hhZFwiLFwiVERcIixcIkJhaHIgZWwgR2hhemFsfkJHfEJhdGhhfkJBfEJvcmtvdX5CT3xDaGFyaS1CYWd1aXJtaX5DQnxFbm5lZGktRXN0fkVFfEVubmVkaS1PdWVzdH5FT3xHdcOpcmF+R1J8SGFkamVyIExhbWlzfkhMfEthbmVtfktBfExhY35MQ3xMb2dvbmUgT2NjaWRlbnRhbH5MT3xMb2dvbmUgT3JpZW50YWx+TFJ8TW9uZG91bH5NQXxNYXlvLUvDqWJiaS1Fc3R+TUV8TW95ZW4tQ2hhcml+TUN8T3VhZGRhaX5PRHxTYWxhbWF0flNBfFNpbGF+U0l8VGFuZGppbMOpflRBfFRpYmVzdGl+VEl8VmlsbGUgZGUgTmRqYW1lbmF+TkR8V2FkaSBGaXJhfldGXCJdLFtcIkNoaWxlXCIsXCJDTFwiLFwiQWlzw6luIGRlbCBHZW5lcmFsIENhcmxvcyBJYsOhw7FleiBkZWwgQ2FtcG9+QUl8QW50b2ZhZ2FzdGF+QU58QXJhdWNhbsOtYX5BUnxBcmljYSB5IFBhcmluYWNvdGF+QVB8QXRhY2FtYX5BVHxCw61vLULDrW9+Qkl8Q29xdWltYm9+Q098TGliZXJ0YWRvciBHZW5lcmFsIEJlcm5hcmRvIE8nSGlnZ2luc35MSXxMb3MgTGFnb3N+TEx8TG9zIFLDrW9zfkxSfE1hZ2FsbGFuZXMgeSBBbnRhcnRpY2EgQ2hpbGVuYX5NQXxNYXJnYS1NYXJnYX58TWF1bGV+TUx8UmVnacOzbiBNZXRyb3BvbGl0YW5hIGRlIFNhbnRpYWdvflJNfFRhcmFwYWPDoX5UQXxWYWxwYXJhw61zb35WU1wiXSxbXCJDaGluYVwiLFwiQ05cIixcIkFuaHVpfjM0fEJlaWppbmd+MTF8Q2hvbmdxaW5nfjUwfEZ1amlhbn4zNXxHYW5zdX42MnxHdWFuZ2Rvbmd+NDR8R3Vhbmd4aX40NXxHdWl6aG91fjUyfEhhaW5hbn40NnxIZWJlaX4xM3xIZWlsb25namlhbmd+MjN8SGVuYW5+NDF8SG9uZyBLb25nfjkxfEh1YmVpfjQyfEh1bmFufjQzfElubmVyIE1vbmdvbGlhfjE1fEppYW5nc3V+MzJ8Smlhbmd4aX4zNnxKaWxpbn4yMnxMaWFvbmluZ34yMXxNYWNhdX45MnxOaW5neGlhfjY0fFFpbmdoYWl+NjN8U2hhYW54aX42MXxTaGFuZG9uZ34zN3xTaGFuZ2hhaX4zMXxTaGFueGl+MTR8U2ljaHVhbn41MXxUaWFuamlufjEyfFRpYmV0fjU0fFhpbmppYW5nfjY1fFl1bm5hbn41M3xaaGVqaWFuZ34zM1wiXSxbXCJDaHJpc3RtYXMgSXNsYW5kXCIsXCJDWFwiLFwiQ2hyaXN0bWFzIElzbGFuZH5DWFwiXSxbXCJDb2NvcyAoS2VlbGluZykgSXNsYW5kc1wiLFwiQ0NcIixcIkRpcmVjdGlvbiBJc2xhbmR+REl8SG9tZSBJc2xhbmR+SE18SG9yc2J1cmdoIElzbGFuZH5IUnxOb3J0aCBLZWVsaW5nIElzbGFuZH5OS3xTb3V0aCBJc2xhbmR+U0l8V2VzdCBJc2xhbmR+V0lcIl0sW1wiQ29sb21iaWFcIixcIkNPXCIsXCJBbWF6b25hc35BTUF8QW50aW9xdWlhfkFOVHxBcmF1Y2F+QVJBfEFyY2hpcGnDqWxhZ28gZGUgU2FuIEFuZHLDqXN+U0FQfEF0bMOhbnRpY29+QVRMfEJvZ290w6EgRC5DLn5EQ3xCb2zDrXZhcn5CT0x8Qm95YWPDoX5CT1l8Q2FsZGFzfkNBTHxDYXF1ZXTDoX5DQVF8Q2FzYW5hcmV+Q0FTfENhdWNhfkNBVXxDZXNhcn5DRVN8Q2hvY8OzfkNIT3xDw7NyZG9iYX5DT1J8Q3VuZGluYW1hcmNhfkNVTnxHdWFpbsOtYX5HVUF8R3VhdmlhcmV+R1VWfEh1aWxhfkhVSXxMYSBHdWFqaXJhfkxBR3xNYWdkYWxlbmF+TUFHfE1ldGF+TUVUfE5hcmnDsW9+TkFSfE5vcnRlIGRlIFNhbnRhbmRlcn5OU0F8UHV0dW1heW9+UFVUfFF1aW5kw61vflFVSXxSaXNhcmFsZGF+UklTfFNhbnRhbmRlcn5TQU58U3VjcmV+U1VDfFRvbGltYX5UT0x8VmFsbGUgZGVsIENhdWNhflZBQ3xWYXVww6lzflZBVXxWaWNoYWRhflZJRFwiXSxbXCJDb21vcm9zXCIsXCJLTVwiLFwiQW5kamF6w65kamF+R3xBbmRqb3XDom5+QXxNb8O7aMOubMOufk1cIl0sW1wiQ29uZ28sIFJlcHVibGljIG9mIHRoZSAoQnJhenphdmlsbGUpXCIsXCJDR1wiLFwiQm91ZW56YX4xMXxCcmF6emF2aWxsZX5CWlZ8Q3V2ZXR0ZX44fEN1dmV0dGUtT3Vlc3R+MTV8S291aWxvdX41fEzDqWtvdW1vdX4yfExpa291YWxhfjd8Tmlhcml+OXxQbGF0ZWF1eH4xNHxQb2ludGUtTm9pcmV+MTZ8UG9vbH4xMnxTYW5naGF+MTNcIl0sW1wiQ29uZ28sIHRoZSBEZW1vY3JhdGljIFJlcHVibGljIG9mIHRoZSAoS2luc2hhc2EpXCIsXCJDRFwiLFwiQmFuZHVuZHV+Qk58QmFzLUNvbmdvfkJDfMOJcXVhdGV1cn5FUXxLYXNhw68tT2NjaWRlbnRhbH5LRXxLYXNhw68tT3JpZW50YWx+S1d8S2F0YW5nYX5LQXxLaW5zaGFzYX5LTnxNYW5pZW1hfk1BfE5vcmQtS2l2dX5OS3xPcmllbnRhbGV+T1J8U3VkLUtpdnV+U0tcIl0sW1wiQ29vayBJc2xhbmRzXCIsXCJDS1wiLFwiQWl0dXRha2l8QXRpdXxBdmFydWF8TWFuZ2FpYXxNYW5paGlraXxNYSd1a2V8TWl0aWFyb3xOYXNzYXV8UGFsbWVyc3RvbnxQZW5yaHlufFB1a2FwdWthfFJha2FoYW5nYVwiXSxbXCJDb3N0YSBSaWNhXCIsXCJDUlwiLFwiQWxhanVlbGF+MnxDYXJ0YWdvfjN8R3VhbmFjYXN0ZX41fEhlcmVkaWF+NHxMaW3Ds25+N3xQdW50YXJlbmFzfjZ8U2FuIEpvc8OpfjFcIl0sW1wiQ8O0dGUgZCdJdm9pcmUsIFJlcHVibGljIG9mXCIsXCJDSVwiLFwiQWduw6lieX4xNnxCYWZpbmd+MTd8QmFzLVNhc3NhbmRyYX4wOXxEZW5ndcOpbMOpfjEwfERpeC1IdWl0IE1vbnRhZ25lc34wNnxGcm9tYWdlcn4xOHxIYXV0LVNhc3NhbmRyYX4wMnxMYWNzfjA3fExhZ3VuZXN+MDF8TWFyYWhvdcOpfjEyfE1veWVuLUNhdmFsbHl+MTl8TW95ZW4tQ29tb8OpfjA1fE4nemktQ29tb8OpfjExfFNhdmFuZXN+MDN8U3VkLUJhbmRhbWF+MTV8U3VkLUNvbW/DqX4xM3xWYWxsw6llIGR1IEJhbmRhbWF+MDR8V29yb2RvdWdvdX4xNHxaYW56YW5+MDhcIl0sW1wiQ3JvYXRpYVwiLFwiSFJcIixcIkJqZWxvdmFyc2tvLUJpbG9nb3Jza2Egxb11cGFuaWphfjA3fEJyb2Rza28tUG9zYXZza2Egxb11cGFuaWphfjEyfER1YnJvdmHEjWtvLU5lcmV0dmFuc2thIMW9dXBhbmlqYX4xOXxHcmFkIFphZ3JlYn4yMXxJc3RhcnNrYSDFvXVwYW5pamF+MTh8S2FybG92YcSNa2Egxb11cGFuaWphfjA0fEtvcHJpdm5pxI1rby1Lcml6ZXZhxI1rYSDFvXVwYW5pamF+MDZ8S3JhcGluc2tvLVphZ29yc2thIMW9dXBhbmlqYX4wMnxMacSNa28tU2VuanNrYSDFvXVwYW5pamF+MDl8TWXEkWltdXJza2Egxb11cGFuaWphfjIwfE9zamXEjWtvLUJhcmFuanNrYSDFvXVwYW5pamF+MTR8UG/FvmXFoWtvLVNsYXZvbnNrYSDFvXVwYW5pamF+MTF8UHJpbW9yc2tvLUdvcmFuc2thIMW9dXBhbmlqYX4wOHxTaXNhxI1rby1Nb3NsYXZhxI1rYSDFvXVwYW5pamF+MDN8U3BsaXRza28tRGFsbWF0aW5za2Egxb11cGFuaWphfjE3fFNpYmVuc2tvLUtuaW5za2Egxb11cGFuaWphfjE1fFZhcmHFvmRpbnNrYSDFvXVwYW5pamF+MDV8Vmlyb3ZpdGnEjWtvLVBvZHJhdnNrYSDFvXVwYW5pamF+MTB8VnVrb3ZhcnNrby1TcmlqZW1za2Egxb11cGFuaWphfjE2fFphZGFyc2thIMW9dXBhbmlqYX4xM3xaYWdyZWJhY2thIFp1cGFuaWphfjAxXCJdLFtcIkN1YmFcIixcIkNVXCIsXCJBcnRlbWlzYX4xNXxDYW1hZ8O8ZXl+MDl8Q2llZ28gZGUgw4F2aWxhfjA4fENpZW5mdWVnb3N+MDZ8R3Jhbm1hfjEyfEd1YW50w6FuYW1vfjE0fEhvbGd1w61ufjExfElzbGEgZGUgbGEgSnV2ZW50dWR+OTl8TGEgSGFiYW5hfjAzfExhcyBUdW5hc34xMHxNYXRhbnphc34wNHxNYXlhYmVxdWV+MTZ8UGluYXIgZGVsIFLDrW9+MDF8U2FuY3RpIFNww61yaXR1c34wN3xTYW50aWFnbyBkZSBDdWJhfjEzfFZpbGxhIENsYXJhfjA1XCJdLFtcIkN1cmHDp2FvXCIsXCJDV1wiLFwiQ3VyYcOnYW9+Q1dcIl0sW1wiQ3lwcnVzXCIsXCJDWVwiLFwiQW1tb2Nob3N0b3N+MDR8S2VyeW5laWF+MDV8TGFybmFrYX4wM3xMZWZrb3NpYX4wMXxMZW1lc29zfjAyfFBhZm9zfjA1XCJdLFtcIkN6ZWNoIFJlcHVibGljXCIsXCJDWlwiLFwiSGxhdm7DrSBtxJtzdG8gUHJhaGF+UFJ8Smlob8SNZXNrw70ga3Jhan5KQ3xKaWhvbW9yYXZza8O9IGtyYWp+Sk18S2FybG92YXJza8O9IGtyYWp+S0F8S3LDoWxvdsOpaHJhZGVja8O9IGtyYWp+S1J8TGliZXJlY2vDvSBrcmFqfkxJfE1vcmF2c2tvc2xlenNrw70ga3Jhan5NT3xPbG9tb3Vja8O9IGtyYWp+T0x8UGFyZHViaWNrw70ga3Jhan5QQXxQbHplxYhza8O9IGtyYWp+UEx8U3TFmWVkb8SNZXNrw70ga3Jhan5TVHzDmnN0ZWNrw70ga3Jhan5VU3xWeXNvxI1pbmF+Vll8WmzDrW5za8O9IGtyYWp+WkxcIl0sW1wiRGVubWFya1wiLFwiREtcIixcIkhvdmVkc3RhZGVufjg0fEt1amFsbGVxfkdMLUtVfE1pZHRqeWxsYW5kfjgyfE5vcmRlcsO4ZXJuZX5GTy0wMXxOb3JkanlsbGFuZH44MXzDmHN0ZXLDuH5GTy0wNnxRYWFzdWl0c3VwfkdMLVFBfFFlcXFhdGF+R0wtUUV8U2FuZMO4fkZPLTAyfFNlcm1lcnNvb3F+R0wtU018U2rDpmxsYW5kfjg1fFN0csO4bcO4fkZPLTAzfFN1ZGVyw7h+Rk8tMDR8U3lkZGFubWFya344M3xWw6Vnw7h+Rk8tMDVcIl0sW1wiRGppYm91dGlcIixcIkRKXCIsXCJBbGkgU2FiaWVofkFTfEFydGF+QVJ8RGlraGlsfkRJfE9ib2Nrfk9CfFRhZGpvdXJhaH5UQVwiXSxbXCJEb21pbmljYVwiLFwiRE1cIixcIlNhaW50IEFuZHJldyBQYXJpc2h+MDJ8U2FpbnQgRGF2aWQgUGFyaXNofjAzfFNhaW50IEdlb3JnZSBQYXJpc2h+MDR8U2FpbnQgSm9obiBQYXJpc2h+MDV8U2FpbnQgSm9zZXBoIFBhcmlzaH4wNnxTYWludCBMdWtlIFBhcmlzaH4wN3xTYWludCBNYXJrIFBhcmlzaH4wOHxTYWludCBQYXRyaWNrIFBhcmlzaH4wOXxTYWludCBQYXVsIFBhcmlzaH4xMHxTYWludCBQZXRlciBQYXJpc2h+MTFcIl0sW1wiRG9taW5pY2FuIFJlcHVibGljXCIsXCJET1wiLFwiQ2liYW8gQ2VudHJhbH4wMnxEZWwgVmFsbGV+Mzd8RGlzdHJpdG8gTmFjaW9uYWx+MDF8RW5yaXF1aWxsb34zOHxOb3JjZW50cmFsfjA0fE5vcmRlc3RlfjM0fE5vcm9lc3RlfjM0fE5vcnRlfjM1fFZhbGRlc2lhfjQyXCJdLFtcIkVjdWFkb3JcIixcIkVDXCIsXCJBenVheX5BfEJvbMOtdmFyfkJ8Q2HDsWFyfkZ8Q2FyY2hpfkN8Q2hpbWJvcmF6b35IfENvdG9wYXhpflh8RWwgT3Jvfk98RXNtZXJhbGRhc35FfEdhbMOhcGFnb3N+V3xHdWF5YXN+R3xJbWJhYnVyYX5JfExvamF+THxMb3MgUsOtb3N+UnxNYW5hYsOtfk18TW9yb25hLVNhbnRpYWdvflN8TmFwb35OfE9yZWxsYW5hfkR8UGFzdGF6YX5ZfFBpY2hpbmNoYX5QfFNhbnRhIEVsZW5hflNFfFNhbnRvIERvbWluZ28gZGUgbG9zIFRzw6FjaGlsYXN+U0R8U3VjdW1iw61vc35VfFR1bmd1cmFodWF+VHxaYW1vcmEtQ2hpbmNoaXBlflpcIl0sW1wiRWd5cHRcIixcIkVHXCIsXCJBbGV4YW5kcmlhfkFMWHxBc3dhbn5BU058QXN5b3V0fkFTVHxCYW5pIFN1ZWlmfkJOU3xCZWhlaXJhfkJIfENhaXJvfkN8RGFxYWhsaWF+REt8RHVtaWF0fkRUfEVsIEJhaHIgRWwgQWhtYXJ+QkF8RWwgSXNtYWlsaWF+SVN8RWwgU3Vlen5TVVp8RWwgV2FkaSBFbCBHZWRlZWR+V0FEfEZheW91bX5GWU18R2hhcmJpYX5HSHxHaXphflNVWnxIZWx3YW5+SFV8S2FmciBFbCBTaGVpa2h+S0ZTfEx1eG9yfkxYfE1hdHJvdWh+TVR8TWVuaWF+TU58TWVub2ZpYX5NTkZ8Tm9ydGggU2luYWl+U0lOfFBvcnQgU2FpZH5QVFN8UWFsdWJpYX5LQnxRZW5hfktOfFNoYXJxaWF+U0hSfFNpeHRoIG9mIE9jdG9iZXJ+U1V8U29oYWd+U0hHfFNvdXRoIFNpbmFpfkpTXCJdLFtcIkVsIFNhbHZhZG9yXCIsXCJTVlwiLFwiQWh1YWNoYXDDoW5+QUh8Q2FiYcOxYXN+Q0F8Q3VzY2F0bMOhbn5DVXxDaGFsYXRlbmFuZ29+Q0h8TGEgTGliZXJ0YWR+TEl8TGEgUGF6flBBfExhIFVuacOzbn5VTnxNb3JhesOhbn5NT3xTYW4gTWlndWVsflNNfFNhbiBTYWx2YWRvcn5TU3xTYW50YSBBbmF+U0F8U2FuIFZpY2VudGV+U1Z8U29uc29uYXRlflNPfFVzdWx1dMOhbn5VU1wiXSxbXCJFcXVhdG9yaWFsIEd1aW5lYVwiLFwiR1FcIixcIkFubm9iw7NufkFOfEJpb2tvIE5vcnRlfkJOfEJpb2tvIFN1cn5CU3xDZW50cm8gU3VyfkNTfEtpw6ktTnRlbX5LTnxMaXRvcmFsfkxJfFdlbGUtTnphc35XTlwiXSxbXCJFcml0cmVhXCIsXCJFUlwiLFwiQW5zZWJhfkFOfERlYnVifkRVfERlYnViLUtlaWgtQmFocml+REt8R2FzaC1CYXJrYX5HQnxNYWVrZWx+TUF8U2VtaWVuLUtlaWgtQmFocml+U0tcIl0sW1wiRXN0b25pYVwiLFwiRUVcIixcIkhhcmp1bWFhIChUYWxsaW5uKX4zN3xIaWl1bWFhIChLYXJkbGEpfjM5fElkYS1WaXJ1bWFhIChKb2h2aSl+NDR8SsOkcnZhbWFhIChQYWlkZSl+NDF8SsO1Z2V2YW1hYSAoSm9nZXZhKX40OXxMw6TDpG5lbWFhfjU3fEzDpMOkbmUtVmlydW1hYSAoUmFrdmVyZSl+NTl8UMOkcm51bWFhIChQYXJudSl+Njd8UMO1bHZhbWFhIChQb2x2YSl+NjV8UmFwbGFtYWEgKFJhcGxhKX43MHxTYWFyZW1hYSAoS3Vlc3NhYXJlKX43NHxUYXJ0dW1hYSAoVGFydHUpfjc4fFZhbGdhbWFhIChWYWxnYSl+ODJ8VmlsamFuZGltYWEgKFZpbGphbmRpKX44NHxWw7VydW1hYSAoVm9ydSl+ODZcIl0sW1wiRXRoaW9waWFcIixcIkVUXCIsXCJBZGRpcyBBYmFiYX5BQXxBZmFyfkFGfEFtaGFyYX5BTXxCZW5zaGFuZ3VsLUd1bWF6fkJFfERpcmUgRGF3YX5ERHxHYW1iZWxhfkdBfEhhcmFyaX5IQXxPcm9taWF+T1J8U29tYWxpflNPfFNvdXRoZXJuIE5hdGlvbnMgTmF0aW9uYWxpdGllcyBhbmQgUGVvcGxlJ3MgUmVnaW9uflNOfFRpZ3JheX5USVwiXSxbXCJGYWxrbGFuZCBJc2xhbmRzIChJc2xhcyBNYWx2aW5hcylcIixcIkZLXCIsXCJGYWxrbGFuZCBJc2xhbmRzIChJc2xhcyBNYWx2aW5hcylcIl0sW1wiRmFyb2UgSXNsYW5kc1wiLFwiRk9cIixcIkJvcmRveXxFeXN0dXJveXxNeWtpbmVzfFNhbmRveXxTa3V2b3l8U3RyZXltb3l8U3VkdXJveXxUdm9yb3lyaXxWYWdhclwiXSxbXCJGaWppXCIsXCJGSlwiLFwiQmF+MDF8QnVhfjAxfENha2F1ZHJvdmV+MDN8S2FkYXZ1fjA0fExhdX4wNXxMb21haXZpdGl+MDZ8TWFjdWF0YX4wN3xOYWRyb2dhIGFuZCBOYXZvc2F+MDh8TmFpdGFzaXJpfjA5fE5hbW9zaX4xMHxSYX4wMTF8UmV3YX4xMnxSb3R1bWF+UnxTZXJ1YX4xMnxUYWlsZXZ1fjE0XCJdLFtcIkZpbmxhbmRcIixcIkZJXCIsXCJBaHZlbmFubWFhbiBsw6TDpG5pfkFMfEV0ZWzDpC1TdW9tZW4gbMOkw6RuaX5FU3xJdMOkLVN1b21lbiBsw6TDpG5pfklTfEzDpG5zaS1TdW9tZW4gbMOkw6RuaX5MU3xMYXBpbiBsw6TDpG5pfkxMfE91bHVuIGzDpMOkbml+T0xcIl0sW1wiRnJhbmNlXCIsXCJGUlwiLFwiQXV2ZXJnbmUtUmjDtG5lLUFscGVzfkFSQXxCb3VyZ29nbmUtRnJhbmNoZS1Db210w6l+QkZDfEJyZXRhZ25lfkJSRXxDZW50cmUtVmFsIGRlIExvaXJlfkNWTHxDb3JzZX5DT1J8R3JhbmQgRXN0fkdFU3xIYXV0cy1kZS1GcmFuY2V+SERGfMOObGUtZGUtRnJhbmNlfklERnxOb3JtYW5kaWV+Tk9SfE5vdXZlbGxlLUFxdWl0YWluZX5OQVF8T2NjaXRhbmllfk9DQ3xQYXlzIGRlIGxhIExvaXJlflBETHxQcm92ZW5jZS1BbHBlcy1Db3RlIGQnQXp1cn5QQUN8Q2xpcHBlcnRvbn5DUHxHdWFkZWxvdXBlfkdQfEd1eWFuZX5HRnxNYXJ0aW5pcXVlfk1RfE1heW90dGV+WVR8Tm92ZWxsZS1DYWzDqWRvbmllfk5DfFBvbHluw6lzaWV+UEZ8U2FpbnQtUGllcnJlLWV0LU1pcXVlbG9uflBNfFNhaW50IEJhcnRow6lsZW15fkJMfFNhaW50IE1hcnRpbn5NRnxSw6l1bmlvbn5SRXxUZXJyZXMgQXVzdHJhbGVzIEZyYW7Dp2Fpc2VzflRGfFdhbGxpcy1ldC1GdXR1bmF+V0ZcIl0sW1wiRnJlbmNoIEd1aWFuYVwiLFwiR0ZcIixcIkZyZW5jaCBHdWlhbmFcIl0sW1wiRnJlbmNoIFBvbHluZXNpYVwiLFwiUEZcIixcIkFyY2hpcGVsIGRlcyBNYXJxdWlzZXN8QXJjaGlwZWwgZGVzIFR1YW1vdHV8QXJjaGlwZWwgZGVzIFR1YnVhaXxJbGVzIGR1IFZlbnR8SWxlcyBTb3VzLWxlLVZlbnRcIl0sW1wiRnJlbmNoIFNvdXRoZXJuIGFuZCBBbnRhcmN0aWMgTGFuZHNcIixcIlRGXCIsXCJBZGVsaWUgTGFuZHxJbGUgQ3JvemV0fElsZXMgS2VyZ3VlbGVufElsZXMgU2FpbnQtUGF1bCBldCBBbXN0ZXJkYW1cIl0sW1wiR2Fib25cIixcIkdBXCIsXCJFc3R1YWlyZX4xfEhhdXQtT2dvb3XDqX4yfE1veWVuLU9nb291w6l+M3xOZ291bmnDqX40fE55YW5nYX41fE9nb291w6ktSXZpbmRvfjZ8T2dvb3XDqS1Mb2xvfjd8T2dvb3XDqS1NYXJpdGltZX44fFdvbGV1LU50ZW1+OVwiXSxbXCJHYW1iaWEsIFRoZVwiLFwiR01cIixcIkJhbmp1bH5CfENlbnRyYWwgUml2ZXJ+TXxMb3dlciBSaXZlcn5MfE5vcnRoIEJhbmt+TnxVcHBlciBSaXZlcn5VfFdlc3Rlcm5+V1wiXSxbXCJHZW9yZ2lhXCIsXCJHRVwiLFwiQWJraGF6aWEgKFNva2h1bWkpfkFCfEFqYXJpYSAoQmF0J3VtaSl+QUp8R3VyaWF+R1V8SW1lcmV0aX5JTXxLJ2FraGV0aX5LQXxLdmVtbyBLYXJ0bGl+S0t8TXRzaGtoZXRhLU10aWFuZXRpfk1NfFJhY2gnYS1MZXhoa3VtaS1LdmVtb1N2YW5ldGl+Ukx8U2FtZWdyZWxvLVplbW8gU3ZhbmV0aX5TWnxTYW10c2toZS1KYXZha2hldGl+U0p8U2hpZGEgS2FydGxpflNLfFRiaWxpc2l+VEJcIl0sW1wiR2VybWFueVwiLFwiREVcIixcIkJhZGVuLVfDvHJ0dGVtYmVyZ35CV3xCYXllcm5+Qll8QmVybGlufkJFfEJyYW5kZW5idXJnfkJCfEJyZW1lbn5IQnxIYW1idXJnfkhIfEhlc3Nlbn5IRXxNZWNrbGVuYnVyZy1Wb3Jwb21tZXJufk1WfE5pZWRlcnNhY2hzZW5+Tkl8Tm9yZHJoZWluLVdlc3RmYWxlbn5OV3xSaGVpbmxhbmQtUGZhbHp+UlB8U2FhcmxhbmR+U0x8U2FjaHNlbn5TTnxTYWNoc2VuLUFuaGFsdH5TVHxTY2hsZXN3aWctSG9sc3RlaW5+U0h8VGjDvHJpbmdlbn5USFwiXSxbXCJHaGFuYVwiLFwiR0hcIixcIkFzaGFudGl+QUh8QnJvbmctQWhhZm9+QkF8Q2VudHJhbH5DUHxFYXN0ZXJufkVQfEdyZWF0ZXIgQWNjcmF+QUF8Tm9ydGhlcm5+TlB8VXBwZXIgRWFzdH5VRXxVcHBlciBXZXN0flVXfFZvbHRhflRWfFdlc3Rlcm5+V1BcIl0sW1wiR2licmFsdGFyXCIsXCJHSVwiLFwiR2licmFsdGFyXCJdLFtcIkdyZWVjZVwiLFwiR1JcIixcIkFuYXRvbGlrw60gTWFrZWRvbsOtYSBrYWkgVGhyw6FraX5BfEF0dGlr4bivfkl8RHl0aWvDrSBFbGzDoWRhfkd8RHl0aWvDrSBNYWtlZG9uw61hfkN8SW9uw61hIE7DrXNpYX5GfEtlbnRyaWvDrSBNYWtlZG9uw61hfkJ8S3LDrXTDrX5NfE5vdMOtbyBBaWdhw61vfkx8UGVsb3Bvbm7DrXNvc35KfFN0ZXJlw6EgRWxsw6FkYX5IfFRoZXNzYWzDrWF+RXxWb3Jlw61vIEFpZ2HDrW9+S3zDjXBlaXJvc35EfMOBZ2lvbiDDk3Jvc342OVwiXSxbXCJHcmVlbmxhbmRcIixcIkdMXCIsXCJLb21tdW5lIEt1amFsbGVxfktVfEtvbW11bmVxYXJmaWsgU2VybWVyc29vcX5TTXxRYWFzdWl0c3VwIEtvbW11bmlhflFBfFFlcXFhdGEgS29tbXVuaWF+UUVcIl0sW1wiR3JlbmFkYVwiLFwiR0RcIixcIlNhaW50IEFuZHJld34wMXxTYWludCBEYXZpZH4wMnxTYWludCBHZW9yZ2V+MDN8U2FpbnQgSm9obn4wNHxTYWludCBNYXJrfjA1fFNhaW50IFBhdHJpY2t+MDZ8U291dGhlcm4gR3JlbmFkaW5lIElzbGFuZHN+MTBcIl0sW1wiR3VhZGVsb3VwZVwiLFwiR1BcIixcIkd1YWRlbG91cGVcIl0sW1wiR3VhbVwiLFwiR1VcIixcIkd1YW1cIl0sW1wiR3VhdGVtYWxhXCIsXCJHVFwiLFwiQWx0YSBWZXJhcGF6fkFWfEJhamEgVmVyYXBhen5CVnxDaGltYWx0ZW5hbmdvfkNNfENoaXF1aW11bGF+Q1F8RWwgUHJvZ3Jlc29+UFJ8RXNjdWludGxhfkVTfEd1YXRlbWFsYX5HVXxIdWVodWV0ZW5hbmdvfkhVfEl6YWJhbH5JWnxKYWxhcGF+SkF8SnV0aWFwYX5KVXxQZXTDqW5+UEV8UXVldHphbHRlbmFuZ29+UVp8UXVpY2jDqX5RQ3xSZXRhbGh1bGV1flJlfFNhY2F0ZXDDqXF1ZXp+U0F8U2FuIE1hcmNvc35TTXxTYW50YSBSb3NhflNSfFNvbG9sw6F+U098U3VjaGl0ZXDDqXF1ZXp+U1V8VG90b25pY2Fww6FuflRPfFphY2FwYX5aQVwiXSxbXCJHdWVybnNleVwiLFwiR0dcIixcIkNhc3RlbHxGb3Jlc3R8U3QuIEFuZHJld3xTdC4gTWFydGlufFN0LiBQZXRlciBQb3J0fFN0LiBQaWVycmUgZHUgQm9pc3xTdC4gU2FtcHNvbnxTdC4gU2F2aW91cnxUb3J0ZXZhbHxWYWxlXCJdLFtcIkd1aW5lYVwiLFwiR05cIixcIkJva8OpfkJ8Q29uYWtyeX5DfEZhcmFuYWh+RnxLYW5rYW5+S3xLaW5kaWF+RHxMYWLDqX5MfE1hbW91fk18TnrDqXLDqWtvcsOpfk5cIl0sW1wiR3VpbmVhLUJpc3NhdVwiLFwiR1dcIixcIkJhZmF0w6F+QkF8QmlvbWJvfkJNfEJpc3NhdX5CU3xCb2xhbWEtQmlqYWdvc35CTHxDYWNoZXV+Q0F8R2Fiw7p+R0F8T2lvfk9JfFF1aW5hcmF+UVV8VG9tYmFsaX5UT1wiXSxbXCJHdXlhbmFcIixcIkdZXCIsXCJCYXJpbWEtV2Fpbml+QkF8Q3V5dW5pLU1hemFydW5pfkNVfERlbWVyYXJhLU1haGFpY2F+REV8RWFzdCBCZXJiaWNlLUNvcmVudHluZX5FQnxFc3NlcXVpYm8gSXNsYW5kcy1XZXN0IERlbWVyYXJhfkVTfE1haGFpY2EtQmVyYmljZX5NQXxQb21lcm9vbi1TdXBlbmFhbX5QTXxQb3Rhcm8tU2lwYXJ1bml+UFR8VXBwZXIgRGVtZXJhcmEtQmVyYmljZX5VRHxVcHBlciBUYWt1dHUtVXBwZXIgRXNzZXF1aWJvflVUXCJdLFtcIkhhaXRpXCIsXCJIVFwiLFwiQXJ0aWJvbml0ZX5BUnxDZW50cmV+Q0V8R3JhbmQnQW5zZX5HQXxOaXBwZXN+Tkl8Tm9yZH5ORHxOb3JkLUVzdH5ORXxOb3JkLU91ZXN0fk5PfE91ZXN0fk9VfFN1ZH5TRHxTdWQtRXN0flNFXCJdLFtcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wiLFwiSE1cIixcIkhlYXJkIElzbGFuZCBhbmQgTWNEb25hbGQgSXNsYW5kc1wiXSxbXCJIb2x5IFNlZSAoVmF0aWNhbiBDaXR5KVwiLFwiVkFcIixcIkhvbHkgU2VlIChWYXRpY2FuIENpdHkpfjAxXCJdLFtcIkhvbmR1cmFzXCIsXCJITlwiLFwiQXRsw6FudGlkYX5BVHxDaG9sdXRlY2F+Q0h8Q29sw7NufkNMfENvbWF5YWd1YX5DTXxDb3DDoW5+Q1B8Q29ydMOpc35DUnxFbCBQYXJhw61zb35FUHxGcmFuY2lzY28gTW9yYXphbn5GTXxHcmFjaWFzIGEgRGlvc35HRHxJbnRpYnVjw6F+SU58SXNsYXMgZGUgbGEgQmFow61hfklCfExhIFBhen5MUHxMZW1waXJhfkxFfE9jb3RlcGVxdWV+T0N8T2xhbmNob35PTHxTYW50YSBCw6FyYmFyYX5TQnxWYWxsZX5WQXxZb3JvfllPXCJdLFtcIkhvbmcgS29uZ1wiLFwiSEtcIixcIkhvbmcgS29uZ1wiXSxbXCJIdW5nYXJ5XCIsXCJIVVwiLFwiQsOhY3MtS2lza3VufkJLfEJhcmFueWF+QkF8QsOpa8Opc35CRXxCw6lrw6lzY3NhYmF+QkN8Qm9yc29kLUFiYXVqLVplbXBsZW5+Qlp8QnVkYXBlc3R+QlV8Q3Nvbmdyw6FkfkNTfERlYnJlY2VufkRFfER1bmHDump2w6Fyb3N+RFV8RWdlcn5FR3zDiXJkfkVSfEZlasOpcn5GRXxHecWRcn5HWXxHecWRci1Nb3Nvbi1Tb3Byb25+R1N8SGFqZMO6LUJpaGFyfkhCfEhldmVzfkhFfEjDs2RtZXrFkXbDoXPDoXJoZWx5fkhWfErDoXN6LU5hZ3lrdW4tU3pvbG5va35OfEthcG9zdsOhcn5LVnxLZWNza2Vtw6l0fktNfEtvbcOhcm9tLUVzenRlcmdvbX5LRXxNaXNrb2xjfk1JfE5hZ3lrYW5penNhfk5LfE7Ds2dyw6Fkfk5PfE55w61yZWd5aMOhemF+Tll8UMOpY3N+UFN8UGVzdH5QRXxTYWxnw7N0YXJqw6FuflNUfFNvbW9neX5TT3xTb3Byb25+U058U3phYm9sY3Mtw6EtQmVyZWd+U1p8U3plZ2VkflNEfFN6w6lrZXNmZWjDqXJ2w6FyflNGfFN6ZWtzesOhcmR+U1N8U3pvbG5va35TS3xTem9tYmF0aGVseX5TSHxUYXRhYsOhbnlhflRCfFRvbG5hflRPfFZhc35WQXxWZXN6cHLDqW1+VkV8VmVzenByw6ltIChDaXR5KX5WTXxaYWxhflpBfFphbGFlZ2Vyc3plZ35aRVwiXSxbXCJJY2VsYW5kXCIsXCJJU1wiLFwiQXVzdHVybGFuZH43fEjDtmZ1w7Bib3JnYXJzdsOmw7BpIHV0YW4gUmV5a2phdsOta3VyfjF8Tm9yw7B1cmxhbmQgZXlzdHJhfjZ8Tm9yw7B1cmxhbmQgdmVzdHJhfjV8U3XDsHVybGFuZH44fFN1w7B1cm5lc34yfFZlc3RmaXLDsGlyfjR8VmVzdHVybGFuZH4zXCJdLFtcIkluZGlhXCIsXCJJTlwiLFwiQW5kYW1hbiBhbmQgTmljb2JhciBJc2xhbmRzfkFOfEFuZGhyYSBQcmFkZXNofkFQfEFydW5hY2hhbCBQcmFkZXNofkFSfEFzc2FtfkFTfEJpaGFyfkJSfENoYW5kaWdhcmh+Q0h8Q2hoYXR0aXNnYXJofkNUfERhZHJhIGFuZCBOYWdhciBIYXZlbGl+RE58RGFtYW4gYW5kIERpdX5ERHxEZWxoaX5ETHxHb2F+R0F8R3VqYXJhdH5HSnxIYXJ5YW5hfkhSfEhpbWFjaGFsIFByYWRlc2h+SFB8SmFtbXUgYW5kIEthc2htaXJ+Skt8SmhhcmtoYW5kfkpIfEthcm5hdGFrYX5LQXxLZXJhbGF+S0x8TGFrc2hhZHdlZXB+TER8TWFkaHlhIFByYWRlc2h+TVB8TWFoYXJhc2h0cmF+TUh8TWFuaXB1cn5NTnxNZWdoYWxheWF+TUx8TWl6b3JhbX5NWnxOYWdhbGFuZH5OTHxPZGlzaGF+T1J8UHVkdWNoZXJyeX5QWXxQdW5qYWJ+UEJ8UmFqYXN0aGFuflJKfFNpa2tpbX5XS3xUYW1pbCBOYWR1flROfFRlbGFuZ2FuYX5UR3xUcmlwdXJhflRSfFV0dGFyYWtoYW5kflVUfFV0dGFyIFByYWRlc2h+VVB8V2VzdCBCZW5nYWx+V0JcIl0sW1wiSW5kb25lc2lhXCIsXCJJRFwiLFwiQWNlaH5BQ3xCYWxpfkJBfEJhbmdrYSBCZWxpdHVuZ35CQnxCYW50ZW5+QlR8QmVuZ2t1bHV+QkV8R29yb250YWxvfkdPfEpha2FydGEgUmF5YX5KS3xKYW1iaX5KQXxKYXdhIEJhcmF0fkpCfEphd2EgVGVuZ2FofkpUfEphd2EgVGltdXJ+Skl8S2FsaW1hbnRhbiBCYXJhdH5LQnxLYWxpbWFudGFuIFNlbGF0YW5+S1N8S2FsaW1hbnRhbiBUZW5nYWh+S1R8S2FsaW1hbnRhbiBUaW11cn5LSXxLYWxpbWFudGFuIFV0YXJhfktVfEtlcHVsYXVhbiBSaWF1fktSfExhbXB1bmd+TEF8TWFsdWt1fk1BfE1hbHVrdSBVdGFyYX5NVXxOdXNhIFRlbmdnYXJhIEJhcmF0fk5CfE51c2EgVGVuZ2dhcmEgVGltdXJ+TlR8UGFwdWF+UEF8UGFwdWEgQmFyYXR+UEJ8UmlhdX5SSXxTdWxhd2VzaSBTZWxhdGFuflNSfFN1bGF3ZXNpIFRlbmdhaH5TVHxTdWxhd2VzaSBUZW5nZ2FyYX5TR3xTdWxhd2VzaSBVdGFyYX5TQXxTdW1hdGVyYSBCYXJhdH5TQnxTdW1hdGVyYSBTZWxhdGFuflNTfFN1bWF0ZXJhIFV0YXJhflNVfFlvZ3lha2FydGF+WU9cIl0sW1wiSXJhbiwgSXNsYW1pYyBSZXB1YmxpYyBvZlwiLFwiSVJcIixcIkFsYm9yen4zMnxBcmRhYsSrbH4wM3zEgHrMhGFyYsSBeWrEgW4tZSBHaGFyYsSrfjAyfMSAesyEYXJixIF5asSBbi1lIFNoYXJxxKt+MDF8QsWrc2hlaHJ+MDZ8Q2hhaMSBciBNYeG4qcSBbCB2YSBCYWtodMSrxIFyxKt+MDh8RcWfZmFoxIFufjA0fEbEgXJzfjE0fEfEq2zEgW5+MTl8R29sZXN0xIFufjI3fEhhbWFkxIFufjI0fEhvcm1vemfEgW5+MjN8xKpsxIFtfjA1fEtlcm3EgW5+MTV8S2VybcSBbnNoxIFofjE3fEtob3LEgXPEgW4tZSBKb27Fq2LEq34yOXxLaG9yxIFzxIFuLWUgUmHhupVhdsSrfjMwfEtob3LEgXPEgW4tZSBTaG9txIFsxKt+NjF8S2jFq3plc3TEgW5+MTB8S29oZ8SrbMWreWVoIHZhIEJvd3llciBB4bipbWFkfjE4fEtvcmRlc3TEgW5+MTZ8TG9yZXN0xIFufjIwfE1hcmtheml+MjJ8TcSBemFuZGFyxIFufjIxfFFhenbEq25+Mjh8UW9tfjI2fFNlbW7EgW5+MTJ8U8Src3TEgW4gdmEgQmFsxatjaGVzdMSBbn4xM3xUZWhyxIFufjA3fFlhemR+MjV8WmFuasSBbn4xMVwiXSxbXCJJcmFxXCIsXCJJUVwiLFwiQWwgQW5ixIFyfkFOfEFsIEJhxZ9yYWh+QkF8QWwgTXV0aGFubsOhfk1VfEFsIFHEgWRpc8SreWFoflFBfEFuIE5hamFmfk5BfEFyYsSrbH5BUnxBcyBTdWxheW3EgW7Eq3lhaH5TVXxCxIFiaWx+QkJ8QmFnaGTEgWR+Qkd8RG9odWt+REF8RGjEqyBRxIFyfkRRfERpecSBbMOhfkRJfEthcmJhbMSBJ35LQXxLaXJrdWt+S0l8TWF5c8SBbn5NQXxOxKtuYXfDoX5OSXzFnmFsxIHhuKkgYWQgRMSrbn5TRHxXxIFzacWjfldBXCJdLFtcIklyZWxhbmRcIixcIklFXCIsXCJDYXJsb3d+Q1d8Q2F2YW5+Q058Q2xhcmV+Q0V8Q29ya35DT3xEb25lZ2FsfkRMfER1Ymxpbn5EfEdhbHdheX5HfEtlcnJ5fktZfEtpbGRhcmV+S0V8S2lsa2Vubnl+S0t8TGFvaXN+TFN8TGVpdHJpbX5MTXxMaW1lcmlja35MS3xMb25nZm9yZH5MRHxMb3V0aH5MSHxNYXlvfk1PfE1lYXRofk1IfE1vbmFnaGFufk1OfE9mZmFseX5PWXxSb3Njb21tb25+Uk58U2xpZ29+U098VGlwcGVyYXJ5flRBfFdhdGVyZm9yZH5XRHxXZXN0bWVhdGh+V0h8V2V4Zm9yZH5XWHxXaWNrbG93fldXXCJdLFtcIklzbGUgb2YgTWFuXCIsXCJJTVwiLFwiSXNsZSBvZiBNYW5cIl0sW1wiSXNyYWVsXCIsXCJJTFwiLFwiSGFEYXJvbX5EfEhhTWVya2F6fk18SGFUc2Fmb25+WnxIzLFlZmF+SEF8VGVsLUF2aXZ+VEF8WWVydXNoYWxheWltfkpNXCJdLFtcIkl0YWx5XCIsXCJJVFwiLFwiQWJydXp6b342NXxCYXNpbGljYXRhfjc3fENhbGFicmlhfjc4fENhbXBhbmlhfjcyfEVtaWxpYS1Sb21hZ25hfjQ1fEZyaXVsaS1WZW5lemlhIEdpdWxpYX4zNnxMYXppb342MnxMaWd1cmlhfjQyfExvbWJhcmRpYX4yNXxNYXJjaGV+NTd8TW9saXNlfjY3fFBpZW1vbnRlfjIxfFB1Z2xpYX43NXxTYXJkZWduYX44OHxTaWNpbGlhfjgyfFRvc2NhbmF+NTJ8VHJlbnRpbm8tQWx0byBBZGlnZX4zMnxVbWJyaWF+NTV8VmFsbGUgZCdBb3N0YX4yM3xWZW5ldG9+MzRcIl0sW1wiSmFtYWljYVwiLFwiSk1cIixcIkNsYXJlbmRvbn4xM3xIYW5vdmVyfjA5fEtpbmdzdG9ufjAxfE1hbmNoZXN0ZXJ+MTJ8UG9ydGxhbmR+MDR8U2FpbnQgQW5kcmV3fjAyfFNhaW50IEFubn4wNnxTYWludCBDYXRoZXJpbmV+MTR8U2FpbnQgRWxpemFiZXRofjExfFNhaW50IEphbWVzfjA4fFNhaW50IE1hcnl+MDV8U2FpbnQgVGhvbWFzfjAzfFRyZWxhd255fjA3fFdlc3Rtb3JlbGFuZH4xMFwiXSxbXCJKYXBhblwiLFwiSlBcIixcIkFpY2hpfjIzfEFraXRhfjA1fEFvbW9yaX4wMnxDaGliYX4xMnxFaGltZX4zOHxGdWt1aX4xOHxGdWt1b2thfjQwfEZ1a3VzaGltYX4wN3xHaWZ1fjIxfEd1bm1hfjEwfEhpcm9zaGltYX4zNHxIb2trYWlkb34wMXxIeW9nb34yOHxJYmFyYWtpfjA4fElzaGlrYXdhfjE3fEl3YXRlfjAzfEthZ2F3YX4zN3xLYWdvc2hpbWF+NDZ8S2FuYWdhd2F+MTR8S29jaGl+Mzl8S3VtYW1vdG9+NDN8S3lvdG9+MjZ8TWllfjI0fE1peWFnaX4wNHxNaXlhemFraX40NXxOYWdhbm9+MjB8TmFnYXNha2l+NDJ8TmFyYX4yOXxOaWlnYXRhfjE1fE9pdGF+NDR8T2theWFtYX4zM3xPa2luYXdhfjQ3fE9zYWthfjI3fFNhZ2F+NDF8U2FpdGFtYX4xMXxTaGlnYX4yNXxTaGltYW5lfjMyfFNoaXp1b2thfjIyfFRvY2hpZ2l+MDl8VG9rdXNoaW1hfjM2fFRva3lvfjEzfFRvdHRvcml+MzF8VG95YW1hfjE2fFdha2F5YW1hfjMwfFlhbWFnYXRhfjA2fFlhbWFndWNoaX4zNXxZYW1hbmFzaGl+MTlcIl0sW1wiSmVyc2V5XCIsXCJKRVwiLFwiSmVyc2V5XCJdLFtcIkpvcmRhblwiLFwiSk9cIixcIuKAmEFqbMWrbn5BSnxBbCAnQXFhYmFofkFRfEFsIEJhbHHEgeKAmX5CQXxBbCBLYXJha35LQXxBbCBNYWZyYXF+TUF8QWwg4oCYQcyFxZ9pbWFofkFNfEHFoyDFomFmxKtsYWh+QVR8QXogWmFyccSB4oCZfkFafElyYmlkfklSfEphcmFzaH5KQXxNYeKAmMSBbn5NTnxNxIFkYWLEgX5NRFwiXSxbXCJLYXpha2hzdGFuXCIsXCJLWlwiLFwiQWxtYXR5fkFMQXxBcW1vbGF+QUtNfEFxdG9iZX5BS1R8QXN0YW5hfkFTVHxBdHlyYXV+QVRZfEJhdHlzIFFhemFxc3Rhbn5aQVB8QmF5cW9uZ3lyfE1hbmdnaHlzdGF1fk1BTnxPbmd0dXN0aWsgUWF6YXFzdGFufllVWnxQYXZsb2Rhcn5QQVZ8UWFyYWdoYW5keX5LQVJ8UW9zdGFuYXl+S1VTfFF5enlsb3JkYX5LWll8U2h5Z2h5cyBRYXphcXN0YW5+Vk9TfFNvbHR1c3RpayBRYXphcXN0YW5+U0VWfFpoYW1ieWx+WkhBXCJdLFtcIktlbnlhXCIsXCJLRVwiLFwiQmFyaW5nb34wMXxCb21ldH4wMnxCdW5nb21hfjAzfEJ1c2lhfjA0fEVsZXlvL01hcmFrd2V0fjA1fEVtYnV+MDZ8R2FyaXNzYX4wN3xIb21hIEJheX4wOHxJc2lvbG9+MDl8S2FqaWFkb34xMHxLYWthbWVnYX4xMXxLZXJpY2hvfjEyfEtpYW1idX4xM3xLaWxpZml+MTR8S2lyaW55YWdhfjE1fEtpc2lpfjE2fEtpc3VtdX4xN3xLaXR1aX4xOHxLd2FsZX4xOXxMYWlraXBpYX4yMHxMYW11fjIxfE1hY2hha29zfjIyfE1ha3Vlbml+MjN8TWFuZGVyYX4yNHxNYXJzYWJpdH4yNXxNZXJ1fjI2fE1pZ29yaX4yN3xNb21iYXNhfjI4fE11cmFuZydhfjI5fE5haXJvYmkgQ2l0eX4zMHxOYWt1cnV+MzF8TmFuZGl+MzJ8TmFyb2t+MzN8TnlhbWlyYX4zNHxOeWFuZGFydWF+MzV8Tnllcml+MzZ8U2FtYnVydX4zN3xTaWF5YX4zOHxUYWl0YS9UYXZldGF+Mzl8VGFuYSBSaXZlcn40MHxUaGFyYWthLU5pdGhpfjQxfFRyYW5zIE56b2lhfjQyfFR1cmthbmF+NDN8VWFzaW4gR2lzaHV+NDR8VmloaWdhfjQ1fFdhamlyfjQ2fFdlc3QgUG9rb3R+NDdcIl0sW1wiS2lyaWJhdGlcIixcIktJXCIsXCJBYmFpYW5nfEFiZW1hbWF8QXJhbnVrYXxBcm9yYWV8QmFuYWJhfEJlcnV8QnV0YXJpdGFyaXxDZW50cmFsIEdpbGJlcnRzfEdpbGJlcnQgSXNsYW5kc35HfEthbnRvbnxLaXJpdGltYXRpfEt1cmlhfExpbmUgSXNsYW5kc35MfE1haWFuYXxNYWtpbnxNYXJha2VpfE5pa3VuYXV8Tm9ub3V0aXxOb3J0aGVybiBHaWxiZXJ0c3xPbm90b2F8UGhvZW5peCBJc2xhbmRzflB8U291dGhlcm4gR2lsYmVydHN8VGFiaXRldWVhfFRhYnVhZXJhbnxUYW1hbmF8VGFyYXdhfFRlcmFpbmFcIl0sW1wiS29yZWEsIERlbW9jcmF0aWMgUGVvcGxlJ3MgUmVwdWJsaWMgb2ZcIixcIktQXCIsXCJDaGFnYW5nLWRvIChDaGFnYW5nIFByb3ZpbmNlKX4wNHxIYW1neW9uZy1idWt0byAoTm9ydGggSGFtZ3lvbmcgUHJvdmluY2UpfjA5fEhhbWd5b25nLW5hbWRvIChTb3V0aCBIYW1neW9uZyBQcm92aW5jZSl+MDh8SHdhbmdoYWUtYnVrdG8gKE5vcnRoIEh3YW5naGFlIFByb3ZpbmNlKX4wNnxId2FuZ2hhZS1uYW1kbyAoU291dGggSHdhbmdoYWUgUHJvdmluY2UpfjA1fEthbmd3b24tZG8gKEthbmd3b24gUHJvdmluY2UpfjA3fE5hc8WPbiAoTmFqaW4tU8WPbmJvbmcpfjEzfFAneW9uZ2FuLWJ1a3RvIChOb3J0aCBQJ3lvbmdhbiBQcm92aW5jZSl+MDN8UCd5b25nYW4tbmFtZG8gKFNvdXRoIFAneW9uZ2FuIFByb3ZpbmNlKX4wMnxQJ3lvbmd5YW5nLXNpIChQJ3lvbmd5YW5nIENpdHkpfjAxfFlhbmdnYW5nLWRvIChZYW5nZ2FuZyBQcm92aW5jZSl+MTBcIl0sW1wiS29yZWEsIFJlcHVibGljIG9mXCIsXCJLUlwiLFwiQ2gndW5nY2gnb25nYnVrLWRvfjQzfENoJ3VuZ2NoJ29uZ25hbS1kb340NHxDaGVqdS1kb340OXxDaG9sbGFidWstZG9+NDV8Q2hvbGxhbmFtLWRvfjQ2fEluY2gnb24tS3dhbmd5b2toaX4yOHxLYW5nLXdvbi1kb340MnxLd2FuZ2p1LUt3YW5neW9rc2hpfjI4fEt5b25nZ2ktZG9+NDF8S3lvbmdzYW5nYnVrLWRvfjQ3fEt5b25nc2FuZ25hbS1kb340OHxQdXNhbi1Ld2FuZ3lva3NoaX4yNnxTZW91bC1UJ3VrcHlvbHNoaX4xMXxTZWpvbmd+NTB8VGFlZ3UtS3dhbmd5b2tzaGl+Mjd8VGFlam9uLUt3YW5neW9rc2hpfjMwfFVsc2FuLUt3YW5neW9rc2hpfjMxXCJdLFtcIkt1d2FpdFwiLFwiS1dcIixcIkFsIEHhuKltYWRpfkFIfEFsIEZhcnfEgW7Eq3lhaH5GQXxBbCBKYWhyxIHigJl+SkF8QWwg4oCYxIDFn2ltYWh+S1V84bioYXdhbGzEq35IQXxNdWLEgXJhayBhbCBLYWJpcn5NVVwiXSxbXCJLeXJneXpzdGFuXCIsXCJLR1wiLFwiQmF0a2VuIE9ibGFzdHl+QnxCaXNoa2VrIFNoYWFyeX5HQnxDaHV5IE9ibGFzdHkgKEJpc2hrZWspfkN8SmFsYWwtQWJhZCBPYmxhc3R5fkp8TmFyeW4gT2JsYXN0eX5OfE9zaCBPYmxhc3R5fk98VGFsYXMgT2JsYXN0eX5UfFlzeWstS29sIE9ibGFzdHkgKEthcmFrb2wpfllcIl0sW1wiTGFvc1wiLFwiTEFcIixcIkF0dGFwdX5BVHxCb2vDqG9+Qkt8Qm9saWtoYW14YWl+Qkx8Q2hhbXBhc2FrfkNIfEhvdWFwaGFufkhPfEtoYW1tb3Vhbn5LSHxMb3VhbmcgTmFtdGhhfkxNfExvdWFuZ3BoYWJhbmd+TFB8T3Vkw7RteGFpfk9VfFBow7RuZ3NhbGl+UEh8U2FsYXZhbn5TTHxTYXZhbm5ha2jDqXR+U1Z8VmllbnRpYW5lflZJfFhhaWduYWJvdWxpflhBfFjDqWtvbmd+WEV8WGFpc29tYm91bn5YU3xYaWFuZ2tob3Vhbmd+WElcIl0sW1wiTGF0dmlhXCIsXCJMVlwiLFwiQWdsb25hfjAwMXxBaXprcmF1a2xlfjAwMnxBaXpwdXRlfjAwM3xBa27Eq3N0ZX4wMDR8QWxvamF+MDA1fEFsc3VuZ2F+MDZ8QWzFq2tzbmV+MDA3fEFtYXRhfjAwOHxBcGV+MDA5fEF1Y2V+MDEwfMSAZGHFvml+MDExfEJhYsSrdGV+MDEyfEJhbGRvbmV+MDEzfEJhbHRpbmF2YX4wMTR8QmFsdml+MDE1fEJhdXNrYX4wMTZ8QmV2ZXLEq25hfjAxN3xCcm9jxJNuaX4wMTh8QnVydG5pZWtpfjAxOXxDYXJuaWthdmF+MDIwfENlc3ZhaW5lfjAyMXxDxJNzaXN+MDIyfENpYmxhfjAyM3xEYWdkYX4wMjR8RGF1Z2F2cGlsc34wMjV8RGF1Z2F2cGlscyAoQ2l0eSl+REdWfERvYmVsZX4wMjZ8RHVuZGFnYX4wMjd8RHVyYmV+MDI4fEVuZ3VyZX4wMjl8xJJyZ8S8aX4wMzB8R2Fya2FsbmV+MDMxfEdyb2JpxYZhfjAzMnxHdWxiZW5lfjAzM3xJZWNhdmF+MDM0fElrxaHEt2lsZX4wMzV8SWzFq2tzdGV+MDM2fEluxI11a2FsbnN+MDM3fEphdW5qZWxnYXZhfjAzOHxKYXVucGllYmFsZ2F+MDM5fEphdW5waWxzfjA0MHxKZWxnYXZhfjA0MXxKZWxnYXZhIChDaXR5KX5KRUx8SsSTa2FicGlsc34wNDJ8SsSTa2FicGlscyAoQ2l0eSl+SktCfErFq3JtYWxhIChDaXR5KX5KVVJ8S2FuZGF2YX4wNDN8S8SBcnNhdmF+MDQ0fEtvY8STbml+MDQ1fEtva25lc2V+MDQ2fEtyxIFzbGF2YX4wNDd8S3JpbXVsZGF+MDQ4fEtydXN0cGlsc34wNDl8S3VsZMSrZ2F+MDUwfMS2ZWd1bXN+MDUxfMS2ZWthdmF+MDUyfExpZWx2xIFyZGV+MDUzfExpZXDEgWphfkxQWHxMaW1iYcW+aX4wNTR8TMSrZ2F0bmV+MDU1fEzEq3bEgW5pfjA1NnxMdWLEgW5hfjA1N3xMdWR6YX4wNTh8TWFkb25hfjA1OXxNYXpzYWxhY2F+MDYwfE3EgWxwaWxzfjA2MXxNxIFydXBlfjA2MnxNxJNyc3JhZ3N+MDYzfE5hdWvFocSTbml+MDY0fE5lcmV0YX4wNjV8TsSrY2F+MDY2fE9ncmV+MDY3fE9sYWluZX4wNjh8T3pvbG5pZWtpfjA2OXxQxIFyZ2F1amF+MDcwfFDEgXZpbG9zdGF+MDcxfFDEvGF2acWGYXN+MDcyfFByZWnEvGl+MDczfFByaWVrdWxlfjA3NHxQcmlla3XEvGl+MDc1fFJhdW5hfjA3NnxSxJN6ZWtuZX4wNzd8UsSTemVrbmUgKENpdHkpflJFWnxSaWViacWGaX4wNzh8UsSrZ2F+UklYfFJvamF+MDc5fFJvcGHFvml+MDgwfFJ1Y2F2YX4wODF8UnVnxIFqaX4wODJ8UnVuZMSBbGV+MDgzfFLFq2ppZW5hfjA4NHxTYWxhfjA4NXxTYWxhY2dyxKt2YX4wODZ8U2FsYXNwaWxzfjA4N3xTYWxkdXN+MDg4fFNhdWxrcmFzdGl+MDg5fFPEk2phfjA5MHxTaWd1bGRhfjA5MXxTa3LEq3Zlcml+MDkyfFNrcnVuZGF+MDkzfFNtaWx0ZW5lfjA5NHxTdG9wacWGaX4wOTV8U3RyZW7EjWl+MDk2fFRhbHNpfjA5N3xUxJNydmV0ZX4wOTh8VHVrdW1zfjA5OXxWYWnFhm9kZX4xMDB8VmFsa2F+MTAxfFZhbG1pZXJhflZNUnxWYXJha8S8xIFuaX4xMDJ8VsSBcmthdmF+MTAzfFZlY3BpZWJhbGdhfjEwNHxWZWN1bW5pZWtpfjEwNXxWZW50c3BpbHN+MTA2fFZlbnRzcGlscyAoQ2l0eSl+VkVOfFZpZXPEq3RlfjEwN3xWacS8YWthfjEwOHxWacS8xIFuaX4xMDl8WmlsdXBlfjExMFwiXSxbXCJMZWJhbm9uXCIsXCJMQlwiLFwiQWFra8Oicn5BS3xCYWFsYmVsay1IZXJtZWx+Qkh8QsOpcWFhfkJJfEJleXJvdXRofkJBfExpYmFuLU5vcmR+QVN8TGliYW4tU3VkfkpBfE1vbnQtTGliYW5+Skx8TmFiYXTDrnnDqX5OQVwiXSxbXCJMZXNvdGhvXCIsXCJMU1wiLFwiQmVyZWF+RHxCdXRoYS1CdXRoZX5CfExlcmliZX5DfE1hZmV0ZW5nfkV8TWFzZXJ1fkF8TW9oYWxlcyBIb2VrfkZ8TW9raG90bG9uZ35KfFFhY2hhJ3MgTmVrfkh8UXV0aGluZ35HfFRoYWJhLVRzZWthfktcIl0sW1wiTGliZXJpYVwiLFwiTFJcIixcIkJvbWl+Qk18Qm9uZ35CR3xHYmFycG9sdX5HUHxHcmFuZCBCYXNzYX5HQnxHcmFuZCBDYXBlIE1vdW50fkNNfEdyYW5kIEdlZGVofkdHfEdyYW5kIEtydX5HS3xMb2ZhfkxPfE1hcmdpYml+TUd8TWFyeWxhbmR+TVl8TW9udHNlcnJhZG9+TU98TmltYmF+Tkl8Uml2ZXIgQ2Vzc35SSXxSaXZlciBHZWVlflJHfFNpbm9lflNJXCJdLFtcIkxpYnlhXCIsXCJMWVwiLFwiQWwgQnXFo27EgW5+QlV8QWwgSmFiYWwgYWwgQWto4biRYXJ+SkF8QWwgSmFiYWwgYWwgR2hhcmLEq35KR3xBbCBKYWbEgXJhaH5KQXxBbCBKdWZyYWh+SlV8QWwgS3VmcmFofkZLfEFsIE1hcmp+TUp8QWwgTWFycXVhYn5NQnxBbCBXxIHhuKnEgXR+V0F8QW4gTnVxYcWjIGFsIEtoYW1zfk5RfEF6IFrEgXdpeWFoflpBfEJhbmdoxIF6xKt+QkF8RGFybmFofkRSfEdoxIF0fkdIfE1pxZ9yxIF0YWh+TUl8TXVyenVxfk1RfE7EgWzFq3R+Tkx8U2FiaMSBflNCfFN1cnR+U1J8xaJhcsSBYnVsdXN+VEJ8WWFmcmFufldEfFfEgWTEqyBhc2ggU2jEgcWjacq+fldTXCJdLFtcIkxpZWNodGVuc3RlaW5cIixcIkxJXCIsXCJCYWx6ZXJzfjAxfEVzY2hlbn4wMnxHYW1wcmlufjAzfE1hdXJlbn4wNHxQbGFua2VufjA1fFJ1Z2dlbGx+MDZ8U2NoYWFufjA3fFNjaGVsbGVuYmVyZ34wOHxUcmllc2VufjA5fFRyaWVzZW5iZXJnfjEwfFZhZHV6fjExXCJdLFtcIkxpdGh1YW5pYVwiLFwiTFRcIixcIkFseXRhdXN+QUx8S2F1bm9+S1V8S2xhaXDEl2Rvc35LTHxNYXJpamFtcG9sxJdzfk1SfFBhbmV2xJfFvmlvflBOfMWgaWF1bGnFs35TQXxUYXVyYWfEl3N+VEF8VGVsxaFpxbN+VEV8VXRlbm9zflVUfFZpbG5pYXVzflZMXCJdLFtcIkx1eGVtYm91cmdcIixcIkxVXCIsXCJDYXBlbGxlbn5DQXxDbGV2YXV4fkNMfERpZWtpcmNofkRJfEVjaHRlcm5hY2h+RUN8RXNjaC1zdXItQWx6ZXR0ZX5FU3xHcmV2ZW5tYWNoZXJ+R1J8THV4ZW1ib3VyZ35MVXxNZXJzY2h+TUV8UmVkYW5nZX5SRHxSZW1pY2h+Uk18VmlhbmRlbn5WRHxXaWx0en5XSVwiXSxbXCJNYWNhb1wiLFwiTU9cIixcIk1hY2FvXCJdLFtcIk1hY2Vkb25pYSwgUmVwdWJsaWMgb2ZcIixcIk1LXCIsXCJBcmHEjWlub3ZvfjAyfEJlcm92b34wM3xCaXRvbGF+MDR8Qm9nZGFuY2l+MDV8Qm9nb3ZpbmplfjA2fEJvc2lsb3ZvfjA3fEJydmVuaWNhfjA4fENlbnRhciDFvXVwYX43OHzEjGHFoWthfjA4fMSMZcWhaW5vdm8tT2JsZcWhZXZvfjgxfMSMdcSNZXIgU2FuZGV2b344MnxEZWJhcn4yMXxEZWJhcmNhfjIyfERlbMSNZXZvfjIzfERlbWlyIEhpc2FyfjI1fERlbWlyIEthcGlqYX4yNHxEb3Jhbn4yNnxEb2xuZW5pfjI3fEdldmdlbGlqYX4xOHxHb3N0aXZhcn4xOXxHcmFkc2tvfjIwfElsaW5kZW5+MzR8SmVndW5vdmNlfjM1fEthcmJpbmNpfjM3fEthdmFkYXJjaX4zNnxLacSNZXZvfjQwfEtvxI1hbml+NDJ8S29uxI1lfjQxfEtyYXRvdm9+NDN8S3JpdmEgUGFsYW5rYX40NHxLcml2b2dhxaF0YW5pfjQ1fEtydcWhZXZvfjQ2fEt1bWFub3ZvfjQ3fExpcGtvdm9+NDh8TG96b3ZvfjQ5fE1ha2Vkb25za2EgS2FtZW5pY2F+NTF8TWFrZWRvbnNraSBCcm9kfjUyfE1hdnJvdm8gaSBSb3N0dcWhYX41MHxNb2dpbGF+NTN8TmVnb3Rpbm9+NTR8Tm92YWNpfjU1fE5vdm8gU2Vsb341NnxPaHJpZH41OHxQZWjEjWV2b342MHxQZXRyb3ZlY341OXxQbGFzbmljYX42MXxQcmlsZXB+NjJ8UHJvYmnFoXRpcH42M3xSYWRvdmnFoX58UmFua292Y2V+NjV8UmVzZW5+NjZ8Um9zb21hbn42N3xTa29wamV+ODV8U29wacWhdGV+NzB8U3Rhcm8gTmFnb3JpxI1hbmV+NzF8U3RydWdhfjcyfFN0cnVtaWNhfjczfFN0dWRlbmnEjWFuaX43NHxTdmV0aSBOaWtvbGV+Njl8xaB0aXB+ODN8VGVhcmNlfjc1fFRldG92b343NnxWYWxhbmRvdm9+MTB8VmFzaWxldm9+MTF8VmVsZXN+MTN8VmV2xI1hbml+MTJ8VmluaWNhfjE0fFZyYXDEjWnFoXRlfjE2fFplbGVuaWtvdm9+MzJ8WnJub3ZjaX4zM3zFvWVsaW5vfjMwXCJdLFtcIk1hZGFnYXNjYXJcIixcIk1HXCIsXCJBbnRhbmFuYXJpdm9+VHxBbnRzaXJhbmFuYX5EfEZpYW5hcmFudHNvYX5GfE1haGFqYW5nYX5NfFRvYW1hc2luYX5BfFRvbGlhcmF+VVwiXSxbXCJNYWxhd2lcIixcIk1XXCIsXCJCYWxha2F+QkF8QmxhbnR5cmV+Qkx8Q2hpa3dhd2F+Q0t8Q2hpcmFkenVsdX5DUnxDaGl0aXBhfkNUfERlZHphfkRFfERvd2F+RE98S2Fyb25nYX5LUnxLYXN1bmd1fktTfExpa29tYX5MS3xMaWxvbmd3ZX5MSXxNYWNoaW5nYX5NSHxNYW5nb2NoaX5NR3xNY2hpbmppfk1DfE11bGFuamV+TVV8TXdhbnphfk1XfE16aW1iYX5NWnxOa2hhdGEgQmF5fk5FfE5raG90YWtvdGF+TkJ8TnNhbmplfk5TfE50Y2hldX5OVXxOdGNoaXNpfk5JfFBoYWxvbWJlflBIfFJ1bXBoaX5SVXxTYWxpbWF+U0F8VGh5b2xvflRIfFpvbWJhflpPXCJdLFtcIk1hbGF5c2lhXCIsXCJNWVwiLFwiSm9ob3J+MDF8S2VkYWh+MDJ8S2VsYW50YW5+MDN8TWVsYWthfjA0fE5lZ2VyaSBTZW1iaWxhbn4wNXxQYWhhbmd+MDZ8UGVyYWt+MDh8UGVybGlzfjA5fFB1bGF1IFBpbmFuZ34wN3xTYWJhaH4xMnxTYXJhd2FrfjEzfFNlbGFuZ29yfjEwfFRlcmVuZ2dhbnV+MTF8V2lsYXlhaCBQZXJzZWt1dHVhbiAoS3VhbGEgTHVtcHVyKX4xNHxXaWxheWFoIFBlcnNla3V0dWFuIChMYWJ1YW4pfjE1fFdpbGF5YWggUGVyc2VrdXR1YW4gKFB1dHJhamF5YSl+MTZcIl0sW1wiTWFsZGl2ZXNcIixcIk1WXCIsXCJBbGlmdSBBbGlmdX4wMnxBbGlmdSBEaGFhbHV+MDB8QmFhfjIwfERoYWFsdX4xN3xGYWFmdX4xNHxHYWFmdSBBbGlmdX4yN3xHYWFmdSBEaGFhbHV+Mjh8R25hdml5YW5pfjI5fEhhYSBBbGlmdX4wN3xIYWEgRGhhYWx1fjIzfEthYWZ1fjI5fExhYW11fjA1fExoYXZpeWFuaX4wM3xNYWzDqX5NTEV8TWVlbXV+MTJ8Tm9vbnV+MjV8UmFhfjEzfFNlZW51fjAxfFNoYXZpeWFuaX4yNHxUaGFhfjA4fFZhYXZ1fjA0XCJdLFtcIk1hbGlcIixcIk1MXCIsXCJCYW1ha29+QktPfEdhb343fEtheWVzfjF8S2lkYWx+OHxLb3VsaWtvcm9+MnxNb3B0aX41fFNlZ291fjR8U2lrYXNzb34zfFRvbWJvdWN0b3V+NlwiXSxbXCJNYWx0YVwiLFwiTVRcIixcIkF0dGFyZH4wMXxCYWx6YW5+MDJ8QmlyZ3V+MDN8Qmlya2lya2FyYX4wNHxCaXLFvGViYnXEoWF+MDV8Qm9ybWxhfjA2fERpbmdsaX4wN3xGZ3VyYX4wOHxGbG9yaWFuYX4wOXxGb250YW5hfjEwfEd1ZGF+MTF8R8W8aXJhfjEyfEfEp2FqbnNpZWxlbX4xM3xHxKdhcmJ+MTR8R8SnYXJnxKd1cn4xNXxHxKdhc3JpfjE2fEfEp2F4YXF+MTd8xKZhbXJ1bn4xOHxJa2xpbn4xOXxJc2xhfjIwfEthbGthcmF+MjF8S2VyxItlbX4yMnxLaXJrb3B+MjN8TGlqYX4yNHxMdXFhfjI1fE1hcnNhfjI2fE1hcnNhc2thbGF+Mjd8TWFyc2F4bG9ra34yOHxNZGluYX4yOXxNZWxsaWXEp2F+MzB8TcShYXJyfjMxfE1vc3RhfjMyfE1xYWJiYX4zM3xNc2lkYX4zNHxNdGFyZmF+MzV8TXVueGFyfjM2fE5hZHVyfjM3fE5heHhhcn4zOHxQYW9sYX4zOXxQZW1icm9rZX40MHxQaWV0w6B+NDF8UWFsYX40MnxRb3JtaX40M3xRcmVuZGl+NDR8UmFiYXQgR8SnYXdkZXh+NDV8UmFiYXQgTWFsdGF+NDZ8U2FmaX40N3xTYW4gxKBpbGphbn40OHxTYW4gxKB3YW5ufjQ5fFNhbiBMYXdyZW56fjUwfFNhbiBQYXdsIGlsLUJhxKdhcn41MXxTYW5uYXR+NTJ8U2FudGEgTHXEi2lqYX41M3xTYW50YSBWZW5lcmF+NTR8U2nEocShaWV3aX41NXxTbGllbWF+NTZ8U3dpZXFpfjU3fFRhaSBYYmlleH41OHxUYXJ6aWVufjU5fFZhbGxldHRhfjYwfFhhZ8SncmF+NjF8WGV3a2lqYX42MnxYZ8SnYWpyYX42M3zFu2FiYmFyfjY0fMW7ZWJidcShIEfEp2F3ZGV+NjV8xbtlYmJ1xKEgTWFsdGF+NjZ8xbtlanR1bn42N3zFu3VycmllcX42OFwiXSxbXCJNYXJzaGFsbCBJc2xhbmRzXCIsXCJNSFwiLFwiQWlsaW5nbGFwbGFwfkFMTHxBaWx1a35BTEt8QXJub35BUk58QXVyfkFVUnxCaWtpbmkgYW5kIEtpbGl+S0lMfEVib25+RUJPfEphYmF0fkpBQnxKYWx1aXR+SkFMfEt3YWphbGVpbn5LV0F8TGFlfkxBRXxMaWJ+TElCfExpa2llcH5MSUt8TWFqdXJvfk1BSnxNYWxvZWxhcH5NQUx8TWVqaXR+TUVKfE5hbWRyaWt+Tk1LfE5hbXV+Tk1VfFJvbmdlbGFwflJPTnxVamFlflVKQXxVdHJpa35VVEl8V290aG9+V1RIfFdvdGplfldUSlwiXSxbXCJNYXJ0aW5pcXVlXCIsXCJNUVwiLFwiTWFydGluaXF1ZVwiXSxbXCJNYXVyaXRhbmlhXCIsXCJNUlwiLFwiQWRyYXJ+MDd8QXNzYWJhfjAzfEJyYWtuYX4wNXxEYWtobGV0IE5vdWFkaGlib3V+MDh8R29yZ29sfjA0fEd1aWRpbWFrYX4xMHxIb2RoIEVjaCBDaGFyZ3VpfjAxfEhvZGggRWwgR2hhcmJpfjAyfEluY2hpcml+MTJ8Tm91YWtjaG90dCBOb3JkfjE0fE5vdWFrY2hvdHQgT3Vlc3R+MTN8Tm91YWtjaG90dCBTdWR+MTV8VGFnYW50fjA5fFRpcmlzIFplbW1vdXJ+MTF8VHJhcnphfjA2XCJdLFtcIk1hdXJpdGl1c1wiLFwiTVVcIixcIkFnYWxlZ2EgSXNsYW5kc35BR3xCZWF1IEJhc3Npbi1Sb3NlIEhpbGx+QlJ8QmxhY2sgUml2ZXJ+Qkx8Q2FyZ2Fkb3MgQ2FyYWpvcyBTaG9hbHN+Q0N8Q3VyZXBpcGV+Q1V8RmxhY3F+Rkx8R3JhbmQgUG9ydH5HUHxNb2thfk1PfFBhbXBsZW1vdXNzZXN+UEF8UGxhaW5lcyBXaWxoZW1zflBXfFBvcnQgTG91aXMgKENpdHkpflBVfFBvcnQgTG91aXN+UEx8Uml2aWVyZSBkdSBSZW1wYXJ0flJSfFJvZHJpZ3VlcyBJc2xhbmR+Uk98U2F2YW5uZX5TQXxWYWNvYXMtUGhvZW5peH5DUFwiXSxbXCJNYXlvdHRlXCIsXCJZVFwiLFwiRHphb3Vkeml+MDF8UGFtYW5keml+MDJ8TWFtb3Vkem91fjAzfERlbWJlbml+MDR8QmFuZHLDqWzDqX4wNXxLYW5pLUvDqWxpfjA2fEJvdcOpbml+MDd8Q2hpcm9uZ3VpfjA4fFNhZGF+MDl8T3Vhbmdhbml+MTB8Q2hpY29uaX4xMXxUc2luZ29uaX4xMnxNJ1RzYW5nYW1vdWppfjEzfEFjb3VhfjE0fE10c2FtYm9yb34xNXxCYW5kcmFib3VhfjE2fEtvdW5nb3V+MTdcIl0sW1wiTWV4aWNvXCIsXCJNWFwiLFwiQWd1YXNjYWxpZW50ZXN+QUdVfEJhamEgQ2FsaWZvcm5pYX5CQ058QmFqYSBDYWxpZm9ybmlhIFN1cn5CQ1N8Q2FtcGVjaGV+Q0FNfENpdWRhZCBkZSBNw6l4aWNvfkRJRnxDaGlhcGFzfkNIUHxDaGlodWFodWF+Q0hIfENvYWh1aWxhIGRlIFphcmFnb3phfkNPQXxDb2xpbWF+Q09MfER1cmFuZ29+RFVSfEVzdGFkbyBkZSBNw6l4aWNvfk1FWHxHdWFuYWp1YXRvfkdVQXxHdWVycmVyb35HUk98SGlkYWxnb35ISUR8SmFsaXNjb35KQUx8TWljaG9hY8OhbiBkZSBPY2FtcG9+TUlDfE1vcmVsb3N+TU9SfE5heWFyaXR+TkFZfE51ZXZvIExlw7Nufk5MRXxPYXhhY2F+T0FYfFB1ZWJsYX5QVUV8UXVlcsOpdGFybyBkZSBBcnRlYWdhflFVRXxRdWludGFuYSBSb29+Uk9PfFNhbiBMdWlzIFBvdG9zw61+U0xQfFNpbmFsb2F+U0lOfFNvbm9yYX5TT058VGFiYXNjb35UQUJ8VGFtYXVsaXBhc35UQU18VGxheGNhbGF+VExBfFZlcmFjcnV6flZFUnxZdWNhdMOhbn5ZVUN8WmFjYXRlY2FzflpBQ1wiXSxbXCJNaWNyb25lc2lhLCBGZWRlcmF0ZWQgU3RhdGVzIG9mXCIsXCJGTVwiLFwiQ2h1dWsgKFRydWspflRSS3xLb3NyYWV+S1NBfFBvaG5wZWl+UE5JfFlhcH5ZQVBcIl0sW1wiTW9sZG92YVwiLFwiTURcIixcIkFlbmlpIE5vaX5BTnxCYXNhcmFiZWFzY2F+QlN8QsSDbMibaX5CQXxCZW5kZXJ+QkR8QnJpY2VuaX5CUnxDYWh1bH5DQXxDYW50ZW1pcn5DVHxDxINsxINyYciZaX5DTHxDxIN1yJllbml+Q1N8Q2hpyJlpbsSDdX5DVXxDaW1pyJlsaWF+Q018Q3JpdWxlbml+Q1J8RG9uZHXImWVuaX5ET3xEcm9jaGlhfkRSfER1YsSDc2FyaX5EVXxFZGluZcibfkVEfEbEg2xlyJl0aX5GQXxGbG9yZciZdGl+Rkx8R8SDZ8SDdXppYX5HQXxHbG9kZW5pfkdMfEjDrm5jZciZdGl+SEl8SWFsb3Zlbml+SUF8TGVvdmF+TEV8TmlzcG9yZW5pfk5JfE9jbmnIm2F+T0N8T3JoZWl+T1J8UmV6aW5hflJFfFLDrsiZY2FuaX5SSXxTw65uZ2VyZWl+U0l8U29yb2NhflNPfFN0w65uZ2EgTmlzdHJ1bHVpflNOfFN0csSDyJllbml+U1R8yJhvbGTEg25lyJl0aX5TRHzImHRlZmFuIFZvZMSDflNWfFRhcmFjbGlhflRBfFRlbGVuZciZdGl+VEV8VW5naGVuaX5VTlwiXSxbXCJNb25hY29cIixcIk1DXCIsXCJDb2xsZX5DTHxDb25kYW1pbmV+Q098Rm9udHZpZWlsbGV+Rk98R2FyZX5HQXxKYXJkaW4gRXhvdGlxdWV+SkV8TGFydm90dG9+TEF8TWFsYm91c3F1ZXR+TUF8TW9uYWNvLVZpbGxlfk1PfE1vbmVnaGV0dGl+TUd8TW9udGUtQ2FybG9+TUN8TW91bGluc35NVXxQb3J0LUhlcmN1bGV+UEh8U2FpbnQtUm9tYW5+U1J8U2FpbnRlLUTDqXZvdGV+U0R8U291cmNlflNPfFNww6lsdWd1ZXN+U1B8VmFsbG9uIGRlIGxhIFJvdXNzZX5WUlwiXSxbXCJNb25nb2xpYVwiLFwiTU5cIixcIkFyaGFuZ2F5fjA3M3xCYXlhbi1PbGdpeX4wNzF8QmF5YW5ob25nb3J+MDY5fEJ1bGdhbn4wNjd8RGFyaGFufjAzN3xEb3Jub2R+MDYxfERvcm5vZ292aX4wNjN8RHVuZGdvdml+MDU5fER6YXZoYW5+MDY1fEdvdmktQWx0YXl+MDY1fEdvdmktU3VtYmVyfjA2NHxIb3ZkfjA0M3xIb3ZzZ29sfjA0MXxPbW5vZ292aX4wNTN8T3ZvcmhhbmdheX4wNTV8U2VsZW5nZX4wNDl8U3VoYmFhdGFyfjA1MXxUb3Z+MDQ3fFVsYWFuYmFhdGFyfjF8VXZzfjA0NlwiXSxbXCJNb250ZW5lZ3JvXCIsXCJNRVwiLFwiQW5kcmlqZXZpY2F+MDF8QmFyfjAyfEJlcmFuZX4wM3xCaWplbG8gUG9samV+MDR8QnVkdmF+MDV8Q2V0aW5qZX4wNnxEYW5pbG92Z3JhZH4wN3xHdXNpbmplfjIyfEhlcmNlZyBOb3ZpfjA4fEtvbGHFoWlufjA5fEtvdG9yfjEwfE1vamtvdmFjfjExfE5pa8WhacSHfjEyfFBldG5pY2F+MjN8UGxhdn4xM3xQbHXFvmluZX4xNHxQbGpldmxqYX4xNXxQb2Rnb3JpY2F+MTZ8Um/FvmFqZX4xN3zFoGF2bmlrfjE4fFRpdmF0fjE5fFVsY2luan4yMHzFvWFibGpha34yMVwiXSxbXCJNb250c2VycmF0XCIsXCJNU1wiLFwiU2FpbnQgQW50aG9ueXxTYWludCBHZW9yZ2VzfFNhaW50IFBldGVyJ3NcIl0sW1wiTW9yb2Njb1wiLFwiTUFcIixcIkNoYW91aWEtT3VhcmRpZ2hhfjA5fERvdWtoYWxhLUFiZGF+MTB8RsOocy1Cb3VsZW1hbmV+MDV8R2hhcmItQ2hyYXJkYS1CZW5pIEhzc2VufjAyfEdyYW5kIENhc2FibGFuY2F+MDh8R3VlbG1pbS1FcyBTZW1hcmF+MTR8TGHDonlvdW5lLUJvdWpkb3VyLVNha2lhIGVsIEhhbXJhfjE1fE1hcnJha2VjaC1UZW5zaWZ0LUFsIEhhb3V6fjExfE1la27DqHMtVGFmaWxhbGV0fjA2fE9yaWVudGFsfjA0fE91ZWQgZWQgRGFoYWItTGFnb3VpcmF+MTZ8U291c3MtTWFzc2EtRHLDomF+MTN8VGFkbGEtQXppbGFsfjEyfFRhbmdlci1Uw6l0b3Vhbn4wMXxUYXphLUFsIEhvY2VpbWEtVGFvdW5hdGV+MDNcIl0sW1wiTW96YW1iaXF1ZVwiLFwiTVpcIixcIkNhYm8gRGVsZ2Fkb35QfEdhemF+R3xJbmhhbWJhbmV+SXxNYW5pY2F+QnxNYXB1dG9+THxNYXB1dG8gKENpdHkpfk1QTXxOYW1wdWxhfk58Tmlhc3NhfkF8U29mYWxhflN8VGV0ZX5UfFphbWJlemlhflFcIl0sW1wiTXlhbm1hclwiLFwiTU1cIixcIkF5ZXlhcndhZHl+MDd8QmFnb34wMnxDaGlufjE0fEthY2hpbn4xMXxLYXlhaH4xMnxLYXlpbn4xM3xNYWd3YXl+MDN8TWFuZGFsYXl+MDR8TW9ufjE1fE5heSBQeWkgVGF3fjE4fFJha2hpbmV+MTZ8U2FnYWluZ34wMXxTaGFufjE3fFRhbmludGhhcnlpfjA1fFlhbmdvbn4wNlwiXSxbXCJOYW1pYmlhXCIsXCJOQVwiLFwiRXJvbmdvfkVSfEhhcmRhcH5IQXxLYXZhbmdvIEVhc3R+S0V8S2F2YW5nbyBXZXN0fktXfEthcmFzfktBfEtob21hc35LSHxLdW5lbmV+S1V8T2hhbmd3ZW5hfk9XfE9tYWhla2V+T0h8T211c2F0aX5PU3xPc2hhbmF+T058T3NoaWtvdG9+T1R8T3Rqb3pvbmRqdXBhfk9EfFphbWJleml+Q0FcIl0sW1wiTmF1cnVcIixcIk5SXCIsXCJBaXdvfjAxfEFuYWJhcn4wMnxBbmV0YW5+MDN8QW5pYmFyZX4wNHxCYWl0aX4wNXxCb2V+MDZ8QnVhZGF+MDd8RGVuaWdvbW9kdX4wOHxFd2F+MDl8SWp1d34xMHxNZW5lbmd+MTF8Tmlib2t+MTJ8VWFib2V+MTN8WWFyZW5+MTRcIl0sW1wiTmVwYWxcIixcIk5QXCIsXCJCYWdtYXRpfkJBfEJoZXJpfkJIfERoYXdhbGFnaXJpfkRIfEdhbmRha2l+R0F8SmFuYWtwdXJ+SkF8S2FybmFsaX5LQXxLb3NpfktPfEx1bWJpbml+TFV8TWFoYWthbGl+TUF8TWVjaGl+TUV8TmFyYXlhbml+TkF8UmFwdGl+UkF8U2FnYXJtYXRoYX5TQXxTZXRpflNFXCJdLFtcIk5ldGhlcmxhbmRzXCIsXCJOTFwiLFwiRHJlbnRoZX5EUnxGbGV2b2xhbmR+Rkx8RnJpZXNsYW5kfkZSfEdlbGRlcmxhbmR+R0V8R3JvbmluZ2VufkdSfExpbWJ1cmd+TEl8Tm9vcmQtQnJhYmFudH5OQnxOb29yZC1Ib2xsYW5kfk5IfE92ZXJpanNzZWx+T1Z8VXRyZWNodH5VVHxaZWVsYW5kflpFfFp1aWQtSG9sbGFuZH5aSFwiXSxbXCJOZXcgQ2FsZWRvbmlhXCIsXCJOQ1wiLFwiSWxlcyBMb3lhdXRlfE5vcmR8U3VkXCJdLFtcIk5ldyBaZWFsYW5kXCIsXCJOWlwiLFwiQXVja2xhbmR+QVVLfEJheSBvZiBQbGVudHl+Qk9QfENhbnRlcmJ1cnl+Q0FOfEdpc2Jvcm5lfkdJU3xIYXdrZSdzIEJheX5IS0J8TWFybGJvcm91Z2h+TUJIfE1hbmF3YXR1LVdhbmdhbnVpfk1XVHxOb3J0aGxhbmR+TlRMfE5lbHNvbn5OU058T3RhZ29+T1RBfFNvdXRobGFuZH5TVEx8VGFyYW5ha2l+VEtJfFRhc21hbn5UQVN8V2Fpa2F0b35XS098V2VsbGluZ3Rvbn5XR058V2VzdCBDb2FzdH5XVEN8Q2hhdGhhbSBJc2xhbmRzIFRlcnJpdG9yeX5DSVRcIl0sW1wiTmljYXJhZ3VhXCIsXCJOSVwiLFwiQm9hY29+Qk98Q2FyYXpvfkNBfENoaW5hbmRlZ2F+Q0l8Q2hvbnRhbGVzfkNPfEVzdGVsw61+RVN8R3JhbmFkYX5HUnxKaW5vdGVnYX5KSXxMZcOzbn5MRXxNYWRyaXp+TUR8TWFuYWd1YX5NTnxNYXNheWF+TVN8TWF0YWdhbHBhfk1UfE51ZXZhIFNlZ292aWF+TlN8UsOtbyBTYW4gSnVhbn5TSnxSaXZhc35SSXxBdGzDoW50aWNvIE5vcnRlfkFOfEF0bMOhbnRpY28gU3VyfkFTXCJdLFtcIk5pZ2VyXCIsXCJORVwiLFwiQWdhZGV6fjF8RGlmZmF+MnxEb3Nzb34zfE1hcmFkaX40fE5pYW1leX44fFRhaG91YX41fFRpbGxhYsOpcml+NnxaaW5kZXJ+N1wiXSxbXCJOaWdlcmlhXCIsXCJOR1wiLFwiQWJpYX5BQnxBYnVqYSBGZWRlcmFsIENhcGl0YWwgVGVycml0b3J5fkZDfEFkYW1hd2F+QUR8QWt3YSBJYm9tfkFLfEFuYW1icmF+QU58QmF1Y2hpfkJBfEJheWVsc2F+Qll8QmVudWV+QkV8Qm9ybm9+Qk98Q3Jvc3MgUml2ZXJ+Q1J8RGVsdGF+REV8RWJvbnlpfkVCfEVkb35FRHxFa2l0aX5FS3xFbnVndX5FTnxHb21iZX5HT3xJbW9+SU18SmlnYXdhfkpJfEthZHVuYX5LRHxLYW5vfktOfEthdHNpbmF+S1R8S2ViYml+S0V8S29naX5LT3xLd2FyYX5LV3xMYWdvc35MQXxOYXNzYXJhd2F+TkF8TmlnZXJ+Tkl8T2d1bn5PR3xPbmRvfk9OfE9zdW5+T1N8T3lvfk9ZfFBsYXRlYXV+UEx8Uml2ZXJzflJJfFNva290b35TT3xUYXJhYmF+VEF8WW9iZX5ZT3xaYW1mYXJhflpBXCJdLFtcIk5pdWVcIixcIk5VXCIsXCJOaXVlXCJdLFtcIk5vcmZvbGsgSXNsYW5kXCIsXCJORlwiLFwiTm9yZm9sayBJc2xhbmRcIl0sW1wiTm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzXCIsXCJNUFwiLFwiTm9ydGhlcm4gSXNsYW5kc3xSb3RhfFNhaXBhbnxUaW5pYW5cIl0sW1wiTm9yd2F5XCIsXCJOT1wiLFwiQWtlcnNodXN+MDJ8QXVzdC1BZ2Rlcn4wOXxCdXNrZXJ1ZH4wNnxGaW5ubWFya34yMHxIZWRtYXJrfjA0fEhvcmRhbGFuZH4xMnxNw7hyZSBvZyBSb21zZGFsfjE1fE5vcmRsYW5kfjE4fE5vcmQtVHLDuG5kZWxhZ34xN3xPcHBsYW5kfjA1fE9zbG9+MDN8Um9nYWxhbmR+MTF8U29nbiBvZyBGam9yZGFuZX4xNHxTw7hyLVRyw7huZGVsYWd+MTZ8VGVsZW1hcmt+MDh8VHJvbXN+MTl8VmVzdC1BZ2Rlcn4xMHxWZXN0Zm9sZH4wN3zDmHN0Zm9sZH4wMXxKYW4gTWF5ZW5+MjJ8U3ZhbGJhcmR+MjFcIl0sW1wiT21hblwiLFwiT01cIixcIkFkIERha2hpbGl5YWh+REF8QWwgQnVyYXltaX5CVXxBbCBXdXN0YX5XVXxBeiBaYWhpcmFoflpBfEphbnViIGFsIEJhdGluYWh+QlN8SmFudWIgYXNoIFNoYXJxaXlhaH5TU3xNYXNxYXR+TUF8TXVzYW5kYW1+TVV8U2hhbWFsIGFsIEJhdGluYWh+Qkp8U2hhbWFsIGFzaCBTaGFycWl5YWh+U0p8WnVmYXJ+WlVcIl0sW1wiUGFraXN0YW5cIixcIlBLXCIsXCLEgHrEgWQgS2FzaG3Eq3J+Skt8QmFsxY1jaGlzdMSBbn5CQXxHaWxnaXQtQmFsdGlzdMSBbn5HQnxJc2zEgW3EgWLEgWR+SVN8S2hhxKtiYXIgUGFraHTFq25raHfEgXN+S1B8UHVuasSBYn5QQnxTaW5kaH5TRHxGZWRlcmFsbHkgQWRtaW5pc3RlcmVkIFRyaWJhbCBBcmVhc35UQVwiXSxbXCJQYWxhdVwiLFwiUFdcIixcIkFpbWVsaWlrfjAwMnxBaXJhaX4wMDR8QW5nYXVyfjAxMHxIYXRvYm9oZWl+MDUwfEtheWFuZ2VsfjEwMHxLb3Jvcn4xNTB8TWVsZWtlb2t+MjEyfE5nYXJhYXJkfjIxNHxOZ2FyY2hlbG9uZ34yMTh8TmdhcmRtYXV+MjIyfE5nYXRwYW5nfjIyNHxOZ2NoZXNhcn4yMjZ8TmdlcmVtbGVuZ3VpfjIyN3xOZ2l3YWx+MjI4fFBlbGVsaXV+MzUwfFNvbnNvcmFsfjM1MFwiXSxbXCJQYWxlc3RpbmUsIFN0YXRlIG9mXCIsXCJQU1wiLFwiQWsgS2hhbMSrbH5IQk58QWwgUXVkc35KRU18QXLEq+G4qcSBIHdhbCBBZ2h3xIFyfkpSSHxCYXl0IExh4bipbX5CVEh8RGF5ciBhbCBCYWxh4bipfkRFQnxHaGF6emFofkdaQXxKYW7Eq25+SkVOfEtoxIFuIFnFq25pc35LWVN8TsSBYmx1c35OQlN8UWFsccSreWFoflFRQXxSYWZh4bipflJGSHxSxIFtIEFsbMSBaCB3YWwgQsSrcmFoflJCSHxTYWxmxKt0flNMVHxTaGFtxIFsIEdoYXp6YWh+TkdafMWixatixIFzflRCU3zFosWrbGthcm1+VEtNXCJdLFtcIlBhbmFtYVwiLFwiUEFcIixcIkJvY2FzIGRlbCBUb3JvfjF8Q2hpcmlxdcOtfjR8Q29jbMOpfjJ8Q29sw7NufjN8RGFyacOpbn41fEVtYmVyw6F+RU18SGVycmVyYX42fEt1bmEgWWFsYX5LWXxMb3MgU2FudG9zfjd8TmfDpGJlLUJ1Z2zDqX5OQnxQYW5hbcOhfjh8UGFuYW3DoSBPZXN0ZX4xMHxWZXJhZ3Vhc345XCJdLFtcIlBhcHVhIE5ldyBHdWluZWFcIixcIlBHXCIsXCJCb3VnYWludmlsbGV+TlNCfENlbnRyYWx+Q1BNfENoaW1idX5DUEt8RWFzdCBOZXcgQnJpdGFpbn5FQlJ8RWFzdCBTZXBpa35FU1d8RWFzdGVybiBIaWdobGFuZHN+RUhHfEVuZ2F+RVBXfEd1bGZ+R1BLfEhlbGF+SExBfEppd2FrYX5KV0t8TWFkYW5nfk1PTXxNYW51c35NUkx8TWlsbmUgQmF5fk1CQXxNb3JvYmV+TVBMfFBvcnQgTW9yZXNieX5OQ0R8TmV3IElyZWxhbmR+TklLfE5vcnRoZXJufk5QUHxTb3V0aGVybiBIaWdobGFuZHN+U0hNfFdlc3QgTmV3IEJyaXRhaW5+V0JLfFdlc3QgU2VwaWt+U0FOfFdlc3Rlcm5+V1BEfFdlc3Rlcm4gSGlnaGxhbmRzfldITVwiXSxbXCJQYXJhZ3VheVwiLFwiUFlcIixcIkFsdG8gUGFyYWd1YXl+MTZ8QWx0byBQYXJhbmF+MTB8QW1hbWJheX4xM3xBc3VuY2lvbn5BU1V8Q2FhZ3VhenV+NXxDYWF6YXBhfjZ8Q2FuaW5kZXl1fjE0fENlbnRyYWx+MTF8Q29uY2VwY2lvbn4xfENvcmRpbGxlcmF+M3xHdWFpcmF+NHxJdGFwdWF+N3xNaXNpb25lc344fE5lZW1idWN1fjEyfFBhcmFndWFyaX45fFByZXNpZGVudGUgSGF5ZXN+MTV8U2FuIFBlZHJvfjJcIl0sW1wiUGVydVwiLFwiUEVcIixcIkFtYXpvbmFzfkFNQXxBbmNhc2h+QU5DfEFwdXJpbWFjfkFQVXxBcmVxdWlwYX5BUkV8QXlhY3VjaG9+QVlBfENhamFtYXJjYX5DQUp8Q2FsbGFvfkNBTHxDdXNjb35DVVN8SHVhbmNhdmVsaWNhfkhVVnxIdWFudWNvfkhVQ3xJY2F+SUNBfEp1bmlufkpVTnxMYSBMaWJlcnRhZH5MQUx8TGFtYmF5ZXF1ZX5MQU18TGltYX5MSU18TG9yZXRvfkxPUnxNYWRyZSBkZSBEaW9zfk1ERHxNb3F1ZWd1YX5NT1F8TXVuaWNpcGFsaWRhZCBNZXRyb3BvbGl0YW5hIGRlIExpbWF+TE1BfFBhc2NvflBBU3xQaXVyYX5QSVV8UHVub35QVU58U2FuIE1hcnRpbn5TQU18VGFjbmF+VEFDfFR1bWJlc35UVU18VWNheWFsaX5VQ0FcIl0sW1wiUGhpbGlwcGluZXNcIixcIlBIXCIsXCJBYnJhfkFCUnxBZ3VzYW4gZGVsIE5vcnRlfkFHTnxBZ3VzYW4gZGVsIFN1cn5BR1N8QWtsYW5+QUtMfEFsYmF5fkFMQnxBbnRpcXVlfkFOVHxBcGF5YW9+QVBBfEF1cm9yYX5BVVJ8QmFzaWxhbn5CQVN8QmF0YWFufkJBTnxCYXRhbmVzfkJUTnxCYXRhbmdhc35CVEd8QmVuZ3VldH5CRU58QmlsaXJhbn5CSUx8Qm9ob2x+Qk9IfEJ1a2lkbm9ufkJVS3xCdWxhY2FufkJVTHxDYWdheWFufkNBR3xDYW1hcmluZXMgTm9ydGV+Q0FOfENhbWFyaW5lcyBTdXJ+Q0FTfENhbWlndWlufkNBTXxDYXBpen5DQVB8Q2F0YW5kdWFuZXN+Q0FUfENhdml0ZX5DQVZ8Q2VidX5DRUJ8Q29tcG9zdGVsYX5DT018Q290YWJhdG9+TkNPfERhdmFvIGRlbCBOb3J0ZX5EQVZ8RGF2YW8gZGVsIFN1cn5EQVN8RGF2YW8gT2NjaWRlbnRhbH5EVk98RGF2YW8gT3JpZW50YWx+REFPfERpbmFnYXQgSXNsYW5kc35ESU58RWFzdGVybiBTYW1hcn5FQVN8R3VpbWFyYXN+R1VJfElmdWdhb35JRlV8SWxvY29zIE5vcnRlfklMTnxJbG9jb3MgU3VyfklMU3xJbG9pbG9+SUxJfElzYWJlbGF+SVNBfEthbGluZ2F+S0FMfExhIFVuaW9ufkxVTnxMYWd1bmF+TEFHfExhbmFvIGRlbCBOb3J0ZX5MQU58TGFuYW8gZGVsIFN1cn5MQVN8TGV5dGV+TEVZfE1hZ3VpbmRhbmFvfk1BR3xNYXNiYXRlfk1BU3xNZXRybyBNYW5pbGF+MDB8TWluZG9ybyBPY2NpZGVudGFsfk1EQ3xNaW5kb3JvIE9yaWVudGFsfk1EUnxNaXNhbWlzIE9jY2lkZW50YWx+TVNDfE1pc2FtaXMgT3JpZW50YWx+TVNSfE1vdW50YWluIFByb3ZpbmNlfk1PVXxOZWdyb3MgT2NjaWRlbnRhbH5ORUN8TmVncm9zIE9yaWVudGFsfk5FUnxOb3J0aGVybiBTYW1hcn5OU0F8TnVldmEgRWNpamF+TlVFfE51ZXZhIFZpemNheWF+TlVWfFBhbGF3YW5+UExXfFBhbXBhbmdhflBBTXxQYW5nYXNpbmFuflBBTnxRdWV6b25+UVVFfFF1aXJpbm9+UVVJfFJpemFsflJJWnxSb21ibG9uflJPTXxTYW1hcn5XU0F8U2FyYW5nYW5pflNBUnxTaXF1aWpvcn5TSUd8U29yc29nb25+U09SfFNvdXRoZXJuIExleXRlflNMRXxTdWx0YW4gS3VkYXJhdH5BVUt8U3VsdX5TTFV8U3VyaWdhbyBkZWwgTm9ydGV+U1VOfFN1cmlnYW8gZGVsIFN1cn5TVVJ8VGFybGFjflRBUnxUYXdpLVRhd2l+VEFXfFphbWJhbGVzflpNQnxaYW1ib2FuZ2EgZGVsIE5vcnRlflpBTnxaYW1ib2FuZ2EgZGVsIFN1cn5aQVN8WmFtYm9hbmdhIFNpYnVnYXl+WlNJXCJdLFtcIlBpdGNhaXJuXCIsXCJQTlwiLFwiUGl0Y2Fpcm4gSXNsYW5kc1wiXSxbXCJQb2xhbmRcIixcIlBMXCIsXCJEb2xub8WbbMSFc2tpZX5EU3xLdWphd3Nrby1wb21vcnNraWV+S1B8xYHDs2R6a2llfkxEfEx1YmVsc2tpZX5MVXxMdWJ1c2tpZX5MQnxNYWxvcG9sc2tpZX5NQXxNYXpvd2llY2tpZX5NWnxPcG9sc2tpZX5PUHxQb2RrYXJwYWNraWV+UEt8UG9kbGFza2llflBEfFBvbW9yc2tpZX5QTXzFmmzEhXNraWV+U0x8xZp3acSZdG9rcnp5c2tpZX5TS3xXYXJtacWEc2tvLW1henVyc2tpZX5XTnxXaWVsa29wb2xza2llfldQfFphY2hvZG5pb3BvbW9yc2tpZX5aUFwiXSxbXCJQb3J0dWdhbFwiLFwiUFRcIixcIkFjb3Jlc34yMHxBdmVpcm9+MDF8QmVqYX4wMnxCcmFnYX4wM3xCcmFnYW5jYX4wNHxDYXN0ZWxvIEJyYW5jb34wNXxDb2ltYnJhfjA2fEV2b3JhfjA3fEZhcm9+MDh8R3VhcmRhfjA5fExlaXJpYX4xMHxMaXNib2F+MTF8TWFkZWlyYX4zMHxQb3J0YWxlZ3JlfjEyfFBvcnRvfjEzfFNhbnRhcmVtfjE0fFNldHViYWx+MTV8VmlhbmEgZG8gQ2FzdGVsb34xNnxWaWxhIFJlYWx+MTd8VmlzZXV+MThcIl0sW1wiUHVlcnRvIFJpY29cIixcIlBSXCIsXCJBZGp1bnRhc3xBZ3VhZGF8QWd1YWRpbGxhfEFndWFzIEJ1ZW5hc3xBaWJvbml0b3xBbmFzY298QXJlY2lib3xBcnJveW98QmFyY2Vsb25ldGF8QmFycmFucXVpdGFzfEJheWFtb258Q2FibyBSb2pvfENhZ3Vhc3xDYW11eXxDYW5vdmFuYXN8Q2Fyb2xpbmF8Q2F0fENlaWJhfENpYWxlc3xDaWRyYXxDb2Ftb3xDb21lcmlvfENvcm96YWx8Q3VsZWJyYXxEb3JhZG98RmFqYXJkb3xGbG9yaWRhfEd1YW5pY2F8R3VheWFtYXxHdWF5YW5pbGxhfEd1YXluYWJvfEd1cmFib3xIYXRpbGxvfEhvcm1pZ3Vlcm9zfEh1bWFjYW98SXNhYmV8SnVhbmEgRGlhenxKdW5jb3N8TGFqYXN8TGFyZXN8TGFzIE1hcmlhc3xMYXMgb2l6YXxMdXF1aWxsb3xNYW5hdGl8TWFyaWNhb3xNYXVuYWJvfE1heWFndWV6fE1vY2F8TW9yb3Zpc3xOYWd1YWJvfE5hcmFuaml0b3xPcm9jb3Zpc3xQYXRpbGxhc3xQZW51ZWxhc3xQb25jZXxRdWVicmFkaWxsYXN8UmluY29ufFJpbyBHcmFuZGV8U2FiYW5hIGxpbmFzfFNhbiBHZXJtYW58U2FuIEp1YW58U2FuIExvcmVuem98U2FuIFNlYmFzdGlhbnxTYW50YSBJc2FiZWx8VG9hIEFsdGF8VG9hIEJhamF8VHJ1amlsbG8gQWx0b3xVdHVhZG98VmVnYSBBbHRhfFZlZ2EgdWVzfFZpbGxhbGJhfFlhYnVjb2F8WWF1Y29cIl0sW1wiUWF0YXJcIixcIlFBXCIsXCJBZCBEYXfhuKlhaH5EQXxBbCBLaGF3ciB3YSBhZGggRGhha2jEq3JhaH5LSHxBbCBXYWtyYWh+V0F8QXIgUmF5ecSBbn5SQXxBc2ggU2hhbcSBbH5NU3xBesynIFphzKdgxIF5aW5+WkF8VW1tIMWeYWzEgWx+VVNcIl0sW1wiUsOpdW5pb25cIixcIlJFXCIsXCJSw6l1bmlvblwiXSxbXCJSb21hbmlhXCIsXCJST1wiLFwiQWxiYX5BQnxBcmFkfkFSfEFyZ2VzfkFHfEJhY2F1fkJDfEJpaG9yfkJIfEJpc3RyaXRhLU5hc2F1ZH5CTnxCb3Rvc2FuaX5CVHxCcmFpbGF+QlJ8QnJhc292fkJWfEJ1Y3VyZXN0aX5CfEJ1emF1fkJafENhbGFyYXNpfkNMfENhcmFzLVNldmVyaW5+Q1N8Q2x1an5DSnxDb25zdGFudGF+Q1R8Q292YXNuYX5DVnxEYW1ib3ZpdGF+REJ8RG9san5ESnxHYWxhdGl+R0x8R2l1cmdpdX5HUnxHb3JqfkdKfEhhcmdoaXRhfkhSfEh1bmVkb2FyYX5IRHxJYWxvbWl0YX5JTHxJYXNpfklTfE1hcmFtdXJlc35NTXxNZWhlZGludGl+TUh8TXVyZXN+TVN8TmVhbXR+TlR8T2x0fk9UfFByYWhvdmF+UEh8U2FsYWp+U0p8U2F0dSBNYXJlflNNfFNpYml1flNCfFN1Y2VhdmF+U1Z8VGVsZW9ybWFuflRSfFRpbWlzflRNfFR1bGNlYX5UTHxWYWxjZWF+Vkx8VmFzbHVpflZTfFZyYW5jZWF+Vk5cIl0sW1wiUnVzc2lhbiBGZWRlcmF0aW9uXCIsXCJSVVwiLFwiUmVwdWJsaWMgb2YgQWR5Z2VhfkFEfFJlcHVibGljIG9mIEFsdGFpIChHb3Juby1BbHRheXNrKX5BTHxBbHRhaSBLcmFpfkFMVHxBbXVyIE9ibGFzdH5BTVV8QXJraGFuZ2Vsc2sgT2JsYXN0fkFSS3xBc3RyYWtoYW4gT2JsYXN0fkFTVHxSZXB1YmxpYyBvZiBCYXNoa29ydG9zdGFufkJBfEJlbGdvcm9kIE9ibGFzdH5CRUx8QnJ5YW5zayBPYmxhc3R+QlJZfFJlcHVibGljIG9mIEJ1cnlhdGlhfkJVfENoZWNoZW4gUmVwdWJsaWN+Q0V8Q2hlbHlhYmluc2sgT2JsYXN0fkNIRXxDaHVrb3RrYSBBdXRvbm9tb3VzIE9rcnVnfkNIVXxDaHV2YXNoIFJlcHVibGljfkNVfFJlcHVibGljIG9mIERhZ2VzdGFufkRBfFJlcHVibGljIG9mIEluZ3VzaGV0aWF+SU58SXJrdXRzayBPYmxhc3R+SVJLfEl2YW5vdm8gT2JsYXN0fklWQXxKZXdpc2ggQXV0b25vbW91cyBPYmxhc3R+SkVXfEthYmFyZGluby1CYWxrYXIgUmVwdWJsaWN+S0J8S2FsaW5pbmdyYWQgT2JsYXN0fktMTnxSZXB1YmxpYyBvZiBLYWxteWtpYX5LTHxLYWx1Z2EgT2JsYXN0fktMVXxLYW1jaGF0a2EgS3JhaX5LQU18S2FyYWNoYXktQ2hlcmtlc3MgUmVwdWJsaWN+S0N8UmVwdWJsaWMgb2YgS2FyZWxpYX5LUnxLaGFiYXJvdnNrIEtyYWl+S0hBfFJlcHVibGljIG9mIEtoYWthc3NpYX5LS3xLaGFudHktTWFuc2kgQXV0b25vbW91cyBPa3J1ZyAtIFl1Z3JhfktITXxLZW1lcm92byBPYmxhc3R+S0VNfEtpcm92IE9ibGFzdH5LSVJ8S29taSBSZXB1YmxpY35LT3xLb3N0cm9tYSBPYmxhc3R+S09TfEtyYXNub2RhciBLcmFpfktEQXxLcmFzbm95YXJzayBLcmFpfktZQXxLdXJnYW4gT2JsYXN0fktHTnxLdXJzayBPYmxhc3R+S1JTfExlbmluZ3JhZCBPYmxhc3R+TEVOfExpcGV0c2sgT2JsYXN0fkxJUHxNYWdhZGFuIE9ibGFzdH5NQUd8TWFyaSBFbCBSZXB1YmxpY35NRXxSZXB1YmxpYyBvZiBNb3Jkb3ZpYX5NT3xNb3Njb3cgT2JsYXN0fk1PU3xNb3Njb3d+TU9XfE11cm1hbnNrIE9ibGFzdH5NVXxOZW5ldHMgQXV0b25vbW91cyBPa3J1Z35ORU58Tml6aG55IE5vdmdvcm9kIE9ibGFzdH5OSVp8Tm92Z29yb2QgT2JsYXN0fk5HUnxOb3Zvc2liaXJzayBPYmxhc3R+TlZTfE9tc2sgT2JsYXN0fk9NU3xPcmVuYnVyZyBPYmxhc3R+T1JFfE9yeW9sIE9ibGFzdH5PUkx8UGVuemEgT2JsYXN0flBOWnxQZXJtIEtyYWl+UEVSfFByaW1vcnNreSBLcmFpflBSSXxQc2tvdiBPYmxhc3R+UFNLfFJvc3RvdiBPYmxhc3R+Uk9TfFJ5YXphbiBPYmxhc3R+UllBfFNhaW50IFBldGVyc2J1cmd+U1BFfFNha2hhIChZYWt1dGlhKSBSZXB1YmxpY35TQXxTYWtoYWxpbiBPYmxhc3R+U0FLfFNhbWFyYSBPYmxhc3R+U0FNfFNhcmF0b3YgT2JsYXN0flNBUnxSZXB1YmxpYyBvZiBOb3J0aCBPc3NldGlhLUFsYW5pYX5OT0F8U21vbGVuc2sgT2JsYXN0flNNT3xTdGF2cm9wb2wgS3JhaX5TVEF8U3ZlcmRsb3ZzayBPYmxhc3R+U1ZFfFRhbWJvdiBPYmxhc3R+VEFNfFJlcHVibGljIG9mIFRhdGFyc3Rhbn5UQXxUb21zayBPYmxhc3R+VE9NfFR1dmEgUmVwdWJsaWN+VFV8VHVsYSBPYmxhc3R+VFVMfFR2ZXIgT2JsYXN0flRWRXxUeXVtZW4gT2JsYXN0flRZVXxVZG11cnQgUmVwdWJsaWN+VUR8VWx5YW5vdnNrIE9ibGFzdH5VTFl8VmxhZGltaXIgT2JsYXN0flZMQXxWb2xnb2dyYWQgT2JsYXN0flZHR3xWb2xvZ2RhIE9ibGFzdH5WTEd8Vm9yb25lemggT2JsYXN0flZPUnxZYW1hbG8tTmVuZXRzIEF1dG9ub21vdXMgT2tydWd+WUFOfFlhcm9zbGF2bCBPYmxhc3R+WUFSfFphYmF5a2Fsc2t5IEtyYWl+WkFCXCJdLFtcIlJ3YW5kYVwiLFwiUldcIixcIktpZ2FsaX4wMXxFYXN0ZXJufjAyfE5vcnRoZXJufjAzfFdlc3Rlcm5+MDR8U291dGhlcm5+MDVcIl0sW1wiU2FpbnQgQmFydGjDqWxlbXlcIixcIkJMXCIsXCJBdSBWZW50fjAyfFNvdXMgbGUgVmVudH4wMVwiXSxbXCJTYWludCBIZWxlbmEsIEFzY2Vuc2lvbiBhbmQgVHJpc3RhbiBkYSBDdW5oYVwiLFwiU0hcIixcIkFzY2Vuc2lvbn5BQ3xTYWludCBIZWxlbmF+SEx8VHJpc3RhbiBkYSBDdW5oYX5UQVwiXSxbXCJTYWludCBLaXR0cyBhbmQgTmV2aXNcIixcIktOXCIsXCJTYWludCBLaXR0c35LfE5ldmlzfk5cIl0sW1wiU2FpbnQgTHVjaWFcIixcIkxDXCIsXCJBbnNlLWxhLVJheWV+MDF8Q2FuYXJpZXN+MTJ8Q2FzdHJpZXN+MDJ8Q2hvaXNldWx+MDN8RGVubmVyeX4wNXxHcm9zIElzbGV0fjA2fExhYm9yaWV+MDd8TWljb3VkfjA4fFNvdWZyaWVyZX4xMHxWaWV1eCBGb3J0fjExXCJdLFtcIlNhaW50IE1hcnRpblwiLFwiTUZcIixcIlNhaW50IE1hcnRpblwiXSxbXCJTYWludCBQaWVycmUgYW5kIE1pcXVlbG9uXCIsXCJQTVwiLFwiTWlxdWVsb258U2FpbnQgUGllcnJlXCJdLFtcIlNhaW50IFZpbmNlbnQgYW5kIHRoZSBHcmVuYWRpbmVzXCIsXCJWQ1wiLFwiQ2hhcmxvdHRlfjAxfEdyZW5hZGluZXN+MDZ8U2FpbnQgQW5kcmV3fjAyfFNhaW50IERhdmlkfjAzfFNhaW50IEdlb3JnZX4wNHxTYWludCBQYXRyaWNrfjA1XCJdLFtcIlNhbW9hXCIsXCJXU1wiLFwiQSdhbmF+QUF8QWlnYS1pLWxlLVRhaX5BTHxBdHVhfkFUfEZhJ2FzYWxlbGVhZ2F+RkF8R2FnYSdlbWF1Z2F+R0V8R2FnYWlmb21hdWdhfkdJfFBhbGF1bGl+UEF8U2F0dXBhJ2l0ZWF+U0F8VHVhbWFzYWdhflRVfFZhJ2Etby1Gb25vdGl+VkZ8VmFpc2lnYW5vflZTXCJdLFtcIlNhbiBNYXJpbm9cIixcIlNNXCIsXCJBY3F1YXZpdmF+MDF8Qm9yZ28gTWFnZ2lvcmV+MDZ8Q2hpZXNhbnVvdmF+MDJ8RG9tYWduYW5vfjAzfEZhZXRhbm9+MDR8RmlvcmVudGlub34wNXxNb250ZWdpYXJkaW5vfjA4fFNhbiBNYXJpbm9+MDd8U2VycmF2YWxsZX4wOVwiXSxbXCJTYW8gVG9tZSBhbmQgUHJpbmNpcGVcIixcIlNUXCIsXCJQcmluY2lwZX5QfFNhbyBUb21lflNcIl0sW1wiU2F1ZGkgQXJhYmlhXCIsXCJTQVwiLFwiJ0FzaXJ+MTR8QWwgQmFoYWh+MTF8QWwgSHVkdWQgYXNoIFNoYW1hbGl5YWh+MDh8QWwgSmF3Zn4xMnxBbCBNYWRpbmFoIGFsIE11bmF3d2FyYWh+MDN8QWwgUWFzaW1+MDV8QXIgUml5YWR+MDF8QXNoIFNoYXJxaXlhaH4wNHxIYSdpbH4wNnxKYXphbn4wOXxNYWtrYWggYWwgTXVrYXJyYW1haH4wMnxOYWpyYW5+MTB8VGFidWt+MDdcIl0sW1wiU2VuZWdhbFwiLFwiU05cIixcIkRha2FyfkRLfERpb3VyYmVsfkRCfEZhdGlja35GS3xLYWZmcmluZX5LQXxLYW9sYWNrfktMfEtlZG91Z291fktFfEtvbGRhfktEfExvdWdhfkxHfE1hdGFtfk1UfFNhaW50LUxvdWlzflNMfFNlZGhpb3V+U0V8VGFtYmFjb3VuZGF+VEN8VGhpZXN+VEh8WmlndWluY2hvcn5aR1wiXSxbXCJTZXJiaWFcIixcIlJTXCIsXCJCZW9ncmFkIChCZWxncmFkZSl+MDB8Qm9yc2tpfjE0fEJyYW5pxI1ldnNraX4xMXxKYWJsYW5pxI1raX4yM3xKdcW+bm9iYcSNa2l+MDZ8SnXFvm5vYmFuYXRza2l+MDR8S29sdWJhcnNraX4wOXxLb3NvdnNraX4yNXxLb3NvdnNrby1NaXRyb3ZhxI1raX4yOHxLb3NvdnNrby1Qb21vcmF2c2tpfjI5fE1hxI12YW5za2l+MDh8TW9yYXZpxI1raX4xN3xOacWhYXZza2l+MjB8UMSNaW5qc2tpfjI0fFBlxIdraX4yNnxQaXJvdHNraX4yMnxQb2R1bmF2c2tpfjEwfFBvbW9yYXZza2l+MTN8UHJpenJlbnNraX4yN3xSYXNpbnNraX4xOXxSYcWha2l+MTh8U2V2ZXJub2JhxI1raX4wMXxTZXZlcm5vYmFuYXRza2l+MDN8U3JlZG5qZWJhbmF0c2tpfjAyfFNyZW1za2l+MDd8xaB1bWFkaWpza2l+MTJ8VG9wbGnEjWtpfjIxfFphamXEjWFyc2tpfjE1fFphcGFkbm9iYcSNa2l+MDV8WmxhdGlib3Jza2l+MTZcIl0sW1wiU2V5Y2hlbGxlc1wiLFwiU0NcIixcIkFuc2UgYXV4IFBpbnN+MDF8QW5zZSBCb2lsZWF1fjAyfEFuc2UgRXRvaWxlfjAzfEFuc2UgUm95YWxlfjA1fEFudSBDYXB+MDR8QmFpZSBMYXphcmV+MDZ8QmFpZSBTYWludGUgQW5uZX4wN3xCZWF1IFZhbGxvbn4wOHxCZWwgQWlyfjA5fEJlbCBPbWJyZX4xMHxDYXNjYWRlfjExfEdsYWNpc34xMnxHcmFuZCdBbnNlIE1haGV+MTN8R3JhbmQnQW5zZSBQcmFzbGlufjE0fExhIERpZ3VlfjE1fExhIFJpdmllcmUgQW5nbGFpc2V+MTZ8TGVzIE1hbWVsbGVzfjI0fE1vbnQgQnV4dG9ufjE3fE1vbnQgRmxldXJpfjE4fFBsYWlzYW5jZX4xOXxQb2ludGUgTGEgUnVlfjIwfFBvcnQgR2xhdWR+MjF8Um9jaGUgQ2FpbWFufjI1fFNhaW50IExvdWlzfjIyfFRha2FtYWthfjIzXCJdLFtcIlNpZXJyYSBMZW9uZVwiLFwiU0xcIixcIkVhc3Rlcm5+RXxOb3J0aGVybn5OfFNvdXRoZXJuflN8V2VzdGVybn5XXCJdLFtcIlNpbmdhcG9yZVwiLFwiU0dcIixcIkNlbnRyYWwgU2luZ2Fwb3JlfjAxfE5vcnRoIEVhc3R+MDJ8Tm9ydGggV2VzdH4wM3xTb3V0aCBFYXN0fjA0fFNvdXRoIFdlc3R+MDVcIl0sW1wiU2ludCBNYWFydGVuIChEdXRjaCBwYXJ0KVwiLFwiU1hcIixcIlNpbnQgTWFhcnRlblwiXSxbXCJTbG92YWtpYVwiLFwiU0tcIixcIkJhbnNrb2J5c3RyaWNreX5CQ3xCcmF0aXNsYXZza3l+Qkx8S29zaWNreX5LSXxOaXRyaWFuc2t5fk5JfFByZXNvdnNreX5QVnxUcmVuY2lhbnNreX5UQ3xUcm5hdnNreX5UQXxaaWxpbnNreX5aSVwiXSxbXCJTbG92ZW5pYVwiLFwiU0lcIixcIkFqZG92c2NpbmF+MDAxfEFwYWNlfjE5NXxCZWx0aW5jaX4wMDJ8QmVuZWRpa3R+MTQ4fEJpc3RyaWNhIG9iIFNvdGxpfjE0OXxCbGVkfjAwM3xCbG9rZX4xNTB8Qm9oaW5qfjAwNHxCb3Jvdm5pY2F+MDA1fEJvdmVjfjAwNnxCcmFzbG92Y2V+MTUxfEJyZGF+MDA3fEJyZXppY2V+MDA5fEJyZXpvdmljYX4wMDh8Q2Fua292YX4xNTJ8Q2VsamV+MDExfENlcmtsamUgbmEgR29yZW5qc2tlbX4wMTJ8Q2Vya25pY2F+MDEzfENlcmtub34wMTR8Q2Vya3Zlbmpha34xNTN8Q2lya3VsYW5lfjE5NnxDcmVuc292Y2l+MDE1fENybmEgbmEgS29yb3NrZW1+MDE2fENybm9tZWxqfjAxN3xEZXN0cm5pa34wMTh8RGl2YWNhfjAxOXxEb2JqZX4xNTR8RG9icmVwb2xqZX4wMjB8RG9icm5hfjE1NXxEb2Jyb3ZhLVBvbGhvdiBHcmFkZWN+MDIxfERvYnJvdm5pa34xNTZ8RG9sIHByaSBManVibGphbml+MDIyfERvbGVuanNrZSBUb3BsaWNlfjE1N3xEb216YWxlfjAyM3xEb3JuYXZhfjAyNHxEcmF2b2dyYWR+MDI1fER1cGxla34wMjZ8R29yZW5qYSBWYXMtUG9samFuZX4wMjd8R29yaXNuaWNhfjAyOHxHb3JqZX4yMDd8R29ybmphIFJhZGdvbmF+MDI5fEdvcm5qaSBHcmFkfjAzMHxHb3JuamkgUGV0cm92Y2l+MDMxfEdyYWR+MTU4fEdyb3N1cGxqZX4wMzJ8SGFqZGluYX4xNTl8SG9jZS1TbGl2bmljYX4xNjB8SG9kb3N+MTYxfEhvcmp1bH4xNjJ8SHJhc3RuaWt+MDM0fEhycGVsamUtS296aW5hfjAzNXxJZHJpamF+MDM2fElnfjAzN3xJbGlyc2thIEJpc3RyaWNhfjAzOHxJdmFuY25hIEdvcmljYX4wMzl8SXpvbGF+MDQwc3xKZXNlbmljZX4wNDF8SnVyc2luY2l+MDQyfEthbW5pa34wNDN8S2FuYWx+MDQ0fEtpZHJpY2V2b34wNDV8S29iYXJpZH4wNDZ8S29iaWxqZX4wNDd8S29jZXZqZX4wNDh8S29tZW5+MDQ5fEtvbWVuZGF+MTY0fEtvcGVyfjA1MHxLb2RhbmpldmljYSBuYSBLcmtpfjE5N3xLb3N0ZWx+MTY1fEtvemplfjA1MXxLcmFuan4wNTJ8S3Jhbmpza2EgR29yYX4wNTN8S3JpemV2Y2l+MTY2fEtyc2tvfjA1NHxLdW5nb3RhfjA1NXxLdXptYX4wNTZ8TGFza29+MDU3fExlbmFydH4wNTh8TGVuZGF2YX4wNTl8TGl0aWphfjA2OHxManVibGphbmF+MDYxfExqdWJub34wNjJ8TGp1dG9tZXJ+MDYzfExvZy1EcmFnb21lcn4yMDh8TG9nYXRlY34wNjR8TG9za2EgRG9saW5hfjA2NXxMb3NraSBQb3Rva34wNjZ8TG92cmVuYyBuYSBQb2hvcmp1fjE2N3xMdWtvdmljYX4wNjh8THVjZX4wNjd8TWFqc3Blcmt+MDY5fE1ha29sZX4xOTh8TWFyaWJvcn4wNzB8TWFya292Y2l+MTY4fE1lZHZvZGV+MDcxfE1lbmdlc34wNzJ8TWV0bGlrYX4wNzN8TWV6aWNhfjA3NHxNaWtsYXZ6IG5hIERyYXZza2VtIFBvbGp1fjE2OXxNaXJlbi1Lb3N0YW5qZXZpY2F+MDc1fE1pcm5hfjIxMnxNaXJuYSBQZWN+MTcwfE1pc2xpbmphfjA3NnxNb2tyb25vZy1UcmViZWxub34xOTl8TW9yYXZjZX4wNzd8TW9yYXZza2UgVG9wbGljZX4wNzh8TW96aXJqZX4wNzl8TXVyc2thIFNvYm90YX4wODB8TmFrbG9+MDgyfE5hemFyamV+MDgzfE5vdmEgR29yaWNhfjA4NHxOb3ZvIE1lc3RvfjA4NXxPZHJhbmNpfjA4NnxPcm1ven4wODd8T3NpbG5pY2F+MDg4fFBlc25pY2F+MDg5fFBpcmFufjA5MHxQaXZrYX4wOTF8UG9kY2V0cnRla34wOTJ8UG9kbGVobmlrfjE3MnxQb2R2ZWxrYX4wOTN8UG9samNhbmV+MjAwfFBvc3Rvam5hfjA5NHxQcmVib2xkfjE3NHxQcmVkZHZvcn4wOTV8UHJldmFsamV+MTc1fFB0dWp+MDk2fFJhY2UtRnJhbX4wOTh8UmFkZWNlfjA5OXxSYWRlbmNpfjEwMHxSYWRsamUgb2IgRHJhdml+MTAxfFJhZG92bGppY2F+MTAyfFJhdm5lIG5hIEtvcm9za2VtfjEwM3xSYXprcml6amV+MTc2fFJlY2ljYSBvYiBTYXZpbmppfjIwOXxSZW5jZS1Wb2dyc2tvfjIwMXxSaWJuaWNhfjEwNHxSaWJuaWNhIG5hIFBvYm9yaXV+MTc3fFJvZ2Fza2EgU2xhdGluYX4xMDZ8Um9nYXNvdmNpfjEwNXxSb2dhdGVjfjEwN3xSdXNlfjEwOHxTYWxvdmNpfjAzM3xTZWxuaWNhIG9iIERyYXZpfjE3OHxTZW1pY34xMDl8U2VtcGV0ZXItVnJ0b2piYX4xODN8U2VuY3VyfjExN3xTZW50aWxqfjExOHxTZW50amVybmVqfjExOXxTZW50anVyfjEyMHxTZW50cnVwZXJ0fjIxMXxTZXZuaWNhfjExMHxTZXphbmF+MTExfFNrb2NqYW5+MTIxfFNrb2ZqYSBMb2thfjEyMnxTa29mbGppY2F+MTIzfFNsb3ZlbmogR3JhZGVjfjExMnxTbG92ZW5za2EgQmlzdHJpY2F+MTEzfFNsb3ZlbnNrZSBLb25qaWNlfjExNHxTbWFyamUgcHJpIGVsc2FofjEyNHxTbWFyamVza2UgVG9wbGljZX4yMDZ8U21hcnRubyBvYiBQYWtpfjEyNXxTbWFydG5vIHByaSBMaXRpaml+MTk0fFNvZHJhemljYX4xNzl8U29sY2F2YX4xODB8U29zdGFuan4xMjZ8U3JlZGlzY2Ugb2IgRHJhdml+MjAyfFN0YXJzZX4xMTV8U3RvcmV+MTI3fFN0cmF6YX4yMDN8U3ZldGEgQW5hfjE4MXxTdmV0YSBUcm9qaWNhIHYgU2xvdmVuc2tpaCBHb3JpY2FofjIwNHxTdmV0YSBBbmRyYXogdiBTbG92ZW5za2loIEdvcmljYWh+MTgyfFN2ZXRpIEp1cmlqfjExNnxTdmV0aSBKdXJpaiB2IFNsb3ZlbnNraWggR29yaWNhaH4yMTB8U3ZldGkgVG9tYXp+MjA1fFRhYm9yfjE4NHxUaXNpbmF+MTI4fFRvbG1pbn4xMjh8VHJib3ZsamV+MTI5fFRyZWJuamV+MTMwfFRybm92c2thIFZhc34xODV8VHJ6aW5+MTg2fFRyemljfjEzMXxUdXJuaXNjZX4xMzJ8VmVsZW5qZX4xMzN8VmVsaWthIFBvbGFuYX4xODd8VmVsaWtlIExhc2NlfjEzNHxWZXJ6ZWp+MTg4fFZpZGVtfjEzNXxWaXBhdmF+MTM2fFZpdGFuamV+MTM3fFZvZGljZX4xMzh8Vm9qbmlrfjEzOXxWcmFuc2tvfjE4OXxWcmhuaWthfjE0MHxWdXplbmljYX4xNDF8WmFnb3JqZSBvYiBTYXZpfjE0MnxaYXZyY34xNDN8WnJlY2V+MTQ0fFphbGVjfjE5MHxaZWxlem5pa2l+MTQ2fFpldGFsZX4xOTF8WmlyaX4xNDd8Wmlyb3ZuaWNhfjE5MnxadXplbWJlcmt+MTkzXCJdLFtcIlNvbG9tb24gSXNsYW5kc1wiLFwiU0JcIixcIkNlbnRyYWx+Q0V8Q2hvaXNldWx+Q0h8R3VhZGFsY2FuYWx+R1V8SG9uaWFyYX5DVHxJc2FiZWx+SVN8TWFraXJhLVVsYXdhfk1LfE1hbGFpdGF+TUx8UmVubmVsbCBhbmQgQmVsbG9uYX5SQnxUZW1vdHV+VEV8V2VzdGVybn5XRVwiXSxbXCJTb21hbGlhXCIsXCJTT1wiLFwiQXdkYWx+QVd8QmFrb29sfkJLfEJhbmFhZGlyfkJOfEJhcml+QlJ8QmF5fkJZfEdhbGd1ZHV1ZH5HQXxHZWRvfkdFfEhpaXJhYW5+SEl8SnViYmFkYSBEaGV4ZX5KRHxKdWJiYWRhIEhvb3NlfkpIfE11ZHVnfk1VfE51Z2FhbH5OVXxTYW5hYWd+U0F8U2hhYmVlbGxhaGEgRGhleGV+U0R8U2hhYmVlbGxhaGEgSG9vc2V+U0h8U29vbH5TT3xUb2dkaGVlcn5UT3xXb3Fvb3lpIEdhbGJlZWR+V09cIl0sW1wiU291dGggQWZyaWNhXCIsXCJaQVwiLFwiRWFzdGVybiBDYXBlfkVDfEZyZWUgU3RhdGV+RlN8R2F1dGVuZ35HVHxLd2FadWx1LU5hdGFsfk5MfExpbXBvcG9+TFB8TXB1bWFsYW5nYX5NUHxOb3J0aGVybiBDYXBlfk5DfE5vcnRoIFdlc3R+Tld8V2VzdGVybiBDYXBlfldDXCJdLFtcIlNvdXRoIEdlb3JnaWEgYW5kIFNvdXRoIFNhbmR3aWNoIElzbGFuZHNcIixcIkdTXCIsXCJCaXJkIElzbGFuZHxCcmlzdG9sIElzbGFuZHxDbGVya2UgUm9ja3N8TW9udGFndSBJc2xhbmR8U2F1bmRlcnMgSXNsYW5kfFNvdXRoIEdlb3JnaWF8U291dGhlcm4gVGh1bGV8VHJhdmVyc2F5IElzbGFuZHNcIl0sW1wiU291dGggU3VkYW5cIixcIlNTXCIsXCJDZW50cmFsIEVxdWF0b3JpYX5DRXxFYXN0ZXJuIEVxdWF0b3JpYX5FRXxKb25nbGVpfkpHfExha2VzfkxLfE5vcnRoZXJuIEJhaHIgZWwgR2hhemFsfkJOfFVuaXR5flVZfFVwcGVyIE5pbGV+TlV8V2FycmFwfldSfFdlc3Rlcm4gQmFociBlbCBHaGF6YWx+Qld8V2VzdGVybiBFcXVhdG9yaWF+RVdcIl0sW1wiU3BhaW5cIixcIkVTXCIsXCJBbGJhY2V0ZX5DTXxBbGljYW50ZX5WQ3xBbG1lcsOtYX5BTnxBcmFiYS/DgWxhdmF+Vkl8QXN0dXJpYXN+T3zDgXZpbGF+QVZ8QmFkYWpven5CQXxCYXJjZWxvbmF+QnxCaXprYWlhfkJJfEJ1cmdvc35CVXxDw6FjZXJlc35DQ3xDw6FkaXp+Q0F8Q2FudGFicmlhflN8Q2FzdGVsbMOzbn5DU3xDdWV0YX5DVXxDaXVkYWQgUmVhbH5DUnxDw7NyZG9iYX5DT3xBIENvcnXDsWF+Q3xDdWVuY2F+Q1V8R2lwdXprb2F+U1N8R2lyb25hfkdJfEdyYW5hZGF+R1J8R3VhZGFsYWphcmF+R1V8SHVlbHZhfkh8SHVlc2NhfkhVfElsbGVzIEJhbGVhcnN+UE18SmHDqW5+SnxMZcOzbn5MRXxMbGVpZGF+THxMdWdvfkxVfE1hZHJpZH5NfE3DoWxhZ2F+TUF8TWVsaWxsYX5NTHxNdXJjaWF+TVV8TmF2YXJyZX5OQXxPdXJlbnNlfk9SfFBhbGVuY2lhflB8TGFzIFBhbG1hc35HQ3xQb250ZXZlZHJhflBPfExhIFJpb2phfkxPfFNhbGFtYW5jYX5TQXxTYW50YSBDcnV6IGRlIFRlbmVyaWZlflRGfFNlZ292aWF+U0d8U2V2aWxsYX5TRXxTb3JpYX5TT3xUYXJyYWdvbmF+VHxUZXJ1ZWx+VEV8VG9sZWRvflRPfFZhbGVuY2lhflZ8VmFsbGFkb2xpZH5WQXxaYW1vcmF+WkF8WmFyYWdvemF+WlwiXSxbXCJTcmkgTGFua2FcIixcIkxLXCIsXCJCYXNuYWhpcmF+MXxEYWt1bnV+M3xNYWRoeWFtYX4yfE5hZWdlbmFoaXJhfjV8U2FiYXJhZ2FtdXdhfjl8VXR1cnV+NHxVdHVydW1hZWRhfjd8VmF5YW1iYX42fFV2YX44XCJdLFtcIlN1ZGFuXCIsXCJTRFwiLFwiQWwgQmFociBhbCBBaG1hcn5SU3xBbCBKYXppcmFofkdafEFsIEtoYXJ0dW1+S0h8QWwgUWFkYXJpZn5HRHxBbiBOaWwgYWwgQWJ5YWR+Tld8QW4gTmlsIGFsIEF6cmFxfk5CfEFzaCBTaGFtYWxpeWFofk5PfEdoYXJiIERhcmZ1cn5EV3xHaGFyYiBLdXJkdWZhbn5HS3xKYW51YiBEYXJmdXJ+RFN8SmFudWIgS3VyZHVmYW5+S1N8S2Fzc2FsYX5LQXxOYWhyIGFuIE5pbH5OUnxTaGFtYWwgRGFyZnVyfkROfFNoYXJxIERhcmZ1cn5ERXxTaGlhbWFsIEt1cmR1ZmFufktOfFNpbm5hcn5TSXxXYXNhdCBEYXJmdXIgWmFsaW5qYXl+RENcIl0sW1wiU3VyaW5hbWVcIixcIlNSXCIsXCJCcm9rb3BvbmRvfkJSfENvbW1ld2lqbmV+Q018Q29yb25pZX5DUnxNYXJvd2lqbmV+TUF8Tmlja2VyaWV+Tkl8UGFyYX5QUnxQYXJhbWFyaWJvflBNfFNhcmFtYWNjYX5TQXxTaXBhbGl3aW5pflNJfFdhbmljYX5XQVwiXSxbXCJTd2F6aWxhbmRcIixcIlNaXCIsXCJIaG9oaG9+SEh8THVib21ib35MVXxNYW56aW5pfk1BfFNoaXNlbHdlbml+U0hcIl0sW1wiU3dlZGVuXCIsXCJTRVwiLFwiQmxla2luZ2V+S3xEYWxhcm5hc35XfEdvdGxhbmRzflh8R2F2bGVib3Jnc35JfEhhbGxhbmRzfk58SmFtdGxhbmRzflp8Sm9ua29waW5nc35GfEthbG1hcn5IfEtyb25vYmVyZ3N+R3xOb3JyYm90dGVuc35CRHxPcmVicm9+VHxPc3RlcmdvdGxhbmRzfkV8U2thbmV+TXxTb2Rlcm1hbmxhbmRzfkR8U3RvY2tob2xtfkFCfFZhcm1sYW5kc35TfFZhc3RlcmJvdHRlbnN+QUN8VmFzdGVybm9ycmxhbmRzfll8VmFzdG1hbmxhbmRzflV8VmFzdHJhIEdvdGFsYW5kc35PXCJdLFtcIlN3aXR6ZXJsYW5kXCIsXCJDSFwiLFwiQWFyZ2F1fkFHfEFwcGVuemVsbCBBdXNzZXJyaG9kZW5+QVJ8QXBwZW56ZWxsIElubmVyaG9kZW5+QUl8QmFzZWwtTGFuZHNjaGFmdH5CTHxCYXNlbC1TdGFkdH5CU3xCZXJufkJFfEZyaWJvdXJnfkZSfEdlbsOodmV+R0V8R2xhcnVzfkdMfEdyYXViw7xuZGVufkdSfEp1cmF+SlV8THV6ZXJufkxVfE5ldWNow6J0ZWx+TkV8Tmlkd2FsZGVufk5XfE9id2FsZGVufk9XfFNhbmt0IEdhbGxlbn5TR3xTY2hhZmZoYXVzZW5+U0h8U2Nod3l6flNafFNvbG90aHVybn5TT3xUaHVyZ2F1flRHfFRpY2lub35USXxVcml+VVJ8VmFsYWlzflZTfFZhdWR+VkR8WnVnflpHfFrDvHJpY2h+WkhcIl0sW1wiU3lyaWFuIEFyYWIgUmVwdWJsaWNcIixcIlNZXCIsXCJBbCBIYXNha2FofkhBfEFsIExhZGhpcWl5YWh+TEF8QWwgUXVuYXl0aXJhaH5RVXxBciBSYXFxYWh+UkF8QXMgU3V3YXlkYSd+U1V8RGFyJ2F+RFJ8RGF5ciBheiBaYXdyfkRZfERpbWFzaHF+REl8SGFsYWJ+SEx8SGFtYWh+SE18SGltc35ISXxJZGxpYn5JRHxSaWYgRGltYXNocX5SRHxUYXJ0dXN+VEFcIl0sW1wiVGFpd2FuXCIsXCJUV1wiLFwiQ2hhbmctaHVhfkNIQXxDaGlhLWl+Q1lRfEhzaW4tY2h1fkhTUXxIdWEtbGllbn5IVUF8S2FvLWhzaXVuZ35LSEh8S2VlbHVuZ35LRUV8S2lubWVufktJTnxMaWVuY2hpYW5nfkxJRXxNaWFvLWxpfk1JQXxOYW4tdCdvdX5OQU58UCdlbmctaHV+UEVOfE5ldyBUYWlwZWl+TldUfFAnaW5nLWNodW5nflBJRnxUJ2FpLWNodW5nflRYR3xUJ2FpLW5hbn5UTk58VCdhaS1wZWl+VFBFfFQnYWktdHVuZ35UVFR8VCdhby15dWFuflRBT3xZaS1sYW5+SUxBfFl1bi1saW5+WVVOXCJdLFtcIlRhamlraXN0YW5cIixcIlRKXCIsXCJEdXNoYW5iZX5EVXxLxa1oaXN0b25pIEJhZGFraHNob25+R0J8S2hhdGxvbn5LVHxTdWdoZH5TVVwiXSxbXCJUYW56YW5pYSwgVW5pdGVkIFJlcHVibGljIG9mXCIsXCJUWlwiLFwiQXJ1c2hhfjAxfENvYXN0fjE5fERhciBlcyBTYWxhYW1+MDJ8RG9kb21hfjAzfElyaW5nYX4wNHxLYWdlcmF+MDV8S2lnb21hfjA4fEtpbGltYW5qYXJvfjA5fExpbmRpfjEyfE1hbnlhcmF+MjZ8TWFyYX4xM3xNYmV5YX4xNHxNb3JvZ29yb34xNnxNdHdhcmF+MTd8TXdhbnphfjE4fFBlbWJhIE5vcnRofjA2fFBlbWJhIFNvdXRofjEwfFJ1a3dhfjIwfFJ1dnVtYX4yMXxTaGlueWFuZ2F+MjJ8U2luZ2lkYX4yM3xUYWJvcmF+MjR8VGFuZ2F+MjV8WmFuemliYXIgTm9ydGh+MDd8WmFuemliYXIgQ2VudHJhbC9Tb3V0aH4xMXxaYW56aWJhciBVcmJhbi9XZXN0fjE1XCJdLFtcIlRoYWlsYW5kXCIsXCJUSFwiLFwiQW1uYXQgQ2hhcm9lbn4zN3xBbmcgVGhvbmd+MTV8QnVlbmcgS2FufjM4fEJ1cmkgUmFtfjMxfENoYWNob2VuZ3Nhb34yNHxDaGFpIE5hdH4xOHxDaGFpeWFwaHVtfjM2fENoYW50aGFidXJpfjIyfENoaWFuZyBNYWl+NTB8Q2hpYW5nIFJhaX41N3xDaG9uIEJ1cml+MjB8Q2h1bXBob25+ODZ8S2FsYXNpbn40NnxLYW1waGFlbmcgUGhldH42MnxLYW5jaGFuYWJ1cml+NzF8S2hvbiBLYWVufjQwfEtyYWJpfjgxfEtydW5nIFRoZXAgTWFoYW5ha2hvbiAoQmFuZ2tvayl+MTB8TGFtcGFuZ341MnxMYW1waHVufjUxfExvZWl+NDJ8TG9wIEJ1cml+MTZ8TWFlIEhvbmcgU29ufjU4fE1haGEgU2FyYWtoYW1+NDR8TXVrZGFoYW5+NDl8TmFraG9uIE5heW9rfjI2fE5ha2hvbiBQaGF0aG9tfjczfE5ha2hvbiBQaGFub21+NDh8TmFraG9uIFJhdGNoYXNpbWF+MzB8TmFraG9uIFNhd2FufjYwfE5ha2hvbiBTaSBUaGFtbWFyYXR+ODB8TmFufjU1fE5hcmF0aGl3YXR+OTZ8Tm9uZyBCdWEgTGFtIFBodX4zOXxOb25nIEtoYWl+NDN8Tm9udGhhYnVyaX4xMnxQYXRodW0gVGhhbml+MTN8UGF0dGFuaX45NHxQaGFuZ25nYX44MnxQaGF0dGhhbHVuZ345M3xQaGF5YW9+NTZ8UGhldGNoYWJ1bn43NnxQaGV0Y2hhYnVyaX43NnxQaGljaGl0fjY2fFBoaXRzYW51bG9rfjY1fFBocmEgTmFraG9uIFNpIEF5dXR0aGF5YX4xNHxQaHJhZX41NHxQaHVrZXR+ODN8UHJhY2hpbiBCdXJpfjI1fFByYWNodWFwIEtoaXJpIEtoYW5+Nzd8UmFub25nfjg1fFJhdGNoYWJ1cml+NzB8UmF5b25nfjIxfFJvaSBFdH40NXxTYSBLYWVvfjI3fFNha29uIE5ha2hvbn40N3xTYW11dCBQcmFrYW5+MTF8U2FtdXQgU2FraG9ufjc0fFNhbXV0IFNvbmdraHJhbX43NXxTYXJhYnVyaX4xOXxTYXR1bn45MXxTaW5nIEJ1cml+MTd8U2kgU2Ega2V0fjMzfFNvbmdraGxhfjkwfFN1a2hvdGhhaX42NHxTdXBoYW4gQnVyaX43MnxTdXJhdCBUaGFuaX44NHxTdXJpbn4zMnxUYWt+NjN8VHJhbmd+OTJ8VHJhdH4yM3xVYm9uIFJhdGNoYXRoYW5pfjM0fFVkb24gVGhhbml+NDF8VXRoYWkgVGhhbml+NjF8VXR0YXJhZGl0fjUzfFlhbGF+OTV8WWFzb3Rob25+MzVcIl0sW1wiVGltb3ItTGVzdGVcIixcIlRMXCIsXCJBaWxldX5BTHxBaW5hcm9+QU58QmF1Y2F1fkJBfEJvYm9uYXJvfkJPfENvdmEgTGltYX5DT3xEaWxpfkRJfEVybWVyYX5FUnxMYXV0ZW1+TEF8TGlxdWljYX5MSXxNYW5hdHV0b35NVHxNYW51ZmFoaX5NRnxPZWN1c3Npfk9FfFZpcXVlcXVlflZJXCJdLFtcIlRvZ29cIixcIlRHXCIsXCJDZW50cmV+Q3xLYXJhfkt8TWFyaXRpbWV+TXxQbGF0ZWF1eH5QfFNhdmFubmVzflNcIl0sW1wiVG9rZWxhdVwiLFwiVEtcIixcIkF0YWZ1fEZha2FvZm98TnVrdW5vbnVcIl0sW1wiVG9uZ2FcIixcIlRPXCIsXCInRXVhfjAxfEhhJ2FwYWl+MDJ8Tml1YXN+MDN8VG9uZ2F0YXB1fjA0fFZhdmEndX4wNVwiXSxbXCJUcmluaWRhZCBhbmQgVG9iYWdvXCIsXCJUVFwiLFwiQXJpbWF+QVJJfENoYWd1YW5hc35DSEF8Q291dmEtVGFiYXF1aXRlLVRhbHBhcm9+Q1RUfERpZWZvIE1hcnRpbn5ETU58TWF5YXJvLVJpbyBDbGFyb35NUkN8UGVuYWwtRGViZX5QRUR8UG9pbnQgRm9ydGluflBURnxQb3J0LW9mLVNwYWluflBPU3xQcmluY2VzIFRvd25+UFJUfFNhbiBGZXJuYW5kb35TRk98U2FuIEp1YW4tTGF2ZW50aWxsZX5TSkx8U2FuZ3JlIEdyYW5kZX5TR0V8U2lwYXJpYX5TSVB8VG9iYWdvflRPQnxUdW5hcHVuYS1QaWFyY29+VFVQXCJdLFtcIlR1bmlzaWFcIixcIlROXCIsXCJBcmlhbmF+MTJ8QmVqYX4zMXxCZW4gQXJvdXN+MTN8Qml6ZXJ0ZX4yM3xHYWJlc344MXxHYWZzYX43MXxKZW5kb3ViYX4zMnxLYWlyb3Vhbn40MXxLYXNzZXJpbmV+NDJ8S2ViaWxpfjczfEtlZn4zM3xNYWhkaWF+NTN8TWVkZW5pbmV+ODJ8TW9uYXN0aXJ+NTJ8TmFiZXVsfjIxfFNmYXh+NjF8U2lkaSBCb3V6aWR+NDN8U2lsaWFuYX4zNHxTb3Vzc2V+NTF8VGF0YW91aW5lfjgzfFRvemV1cn43MnxUdW5pc34xMXxaYWdob3Vhbn4yMlwiXSxbXCJUdXJrZXlcIixcIlRSXCIsXCJBZGFuYX4wMXxBZGl5YW1hbn4wMnxBZnlvbmthcmFoaXNhcn4wM3xBZ3JpfjA0fEFrc2FyYXl+Njh8QW1hc3lhfjA1fEFua2FyYX4wNnxBbnRhbHlhfjA3fEFyZGFoYW5+NzV8QXJ0dmlufjA4fEF5ZGlufjA5fEJhbGlrZXNpcn4xMHxCYXJ0aW5+NzR8QmF0bWFufjcyfEJheWJ1cnR+Njl8QmlsZWNpa34xMXxCaW5nb2x+MTJ8Qml0bGlzfjEzfEJvbHV+MTR8QnVyZHVyfjE1fEJ1cnNhfjE2fENhbmFra2FsZX4xN3xDYW5raXJpfjE4fENvcnVtfjE5fERlbml6bGl+MjB8RGl5YXJiYWtpcn4yMXxEdXpjZX44MXxFZGlybmV+MjJ8RWxhemlnfjIzfEVyemluY2FufjI0fEVyenVydW1+MjV8RXNraXNlaGlyfjI2fEdhemlhbnRlcH4yN3xHaXJlc3VufjI4fEd1bXVzaGFuZX4yOXxIYWtrYXJpfjMwfEhhdGF5fjMxfElnZGlyfjc2fElzcGFydGF+MzJ8SXN0YW5idWx+MzR8SXptaXJ+MzV8S2FocmFtYW5tYXJhc340NnxLYXJhYnVrfjc4fEthcmFtYW5+NzB8S2Fyc34zNnxLYXN0YW1vbnV+Mzd8S2F5c2VyaX4zOHxLaWxpc343OXxLaXJpa2thbGV+NzF8S2lya2xhcmVsaX4zOXxLaXJzZWhpcn40MHxLb2NhZWxpfjQxfEtvbnlhfjQyfEt1dGFoeWF+NDN8TWFsYXR5YX40NHxNYW5pc2F+NDV8TWFyZGlufjQ3fE1lcnNpbn4zM3xNdWdsYX40OHxNdXN+NDl8TmV2c2VoaXJ+NTB8TmlnZGV+NTF8T3JkdX41MnxPc21hbml5ZX44MHxSaXplfjUzfFNha2FyeWF+NTR8U2Ftc3VufjU1fFNhbmxpdXJmYX42M3xTaWlydH41NnxTaW5vcH41N3xTaXJuYWt+NzN8U2l2YXN+NTh8VGVraXJkYWd+NTl8VG9rYXR+NjB8VHJhYnpvbn42MXxUdW5jZWxpfjYyfFVzYWt+NjR8VmFufjY1fFlhbG92YX43N3xZb3pnYXR+NjZ8Wm9uZ3VsZGFrfjY3XCJdLFtcIlR1cmttZW5pc3RhblwiLFwiVE1cIixcIkFoYWx+QXxBc2dhYmF0flN8QmFsa2FufkJ8RGFzaG9ndXp+RHxMZWJhcH5MfE1hcnl+TVwiXSxbXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIixcIlRDXCIsXCJUdXJrcyBhbmQgQ2FpY29zIElzbGFuZHNcIl0sW1wiVHV2YWx1XCIsXCJUVlwiLFwiRnVuYWZ1dGl+RlVOfE5hbnVtYW5nYX5OTUd8TmFudW1lYX5OTUF8Tml1dGFvfk5JVHxOdWl+TlVJfE51a3VmZXRhdX5OS0Z8TnVrdWxhZWxhZX5OS0x8VmFpdHVwdX5WQVVcIl0sW1wiVWdhbmRhXCIsXCJVR1wiLFwiQWJpbX4zMTd8QWRqdW1hbml+MzAxfEFtb2xhdGFyfjMxNHxBbXVyaWF+MjE2fEFtdXJ1fjMxOXxBcGFjfjMwMnxBcnVhfjMwM3xCdWRha2F+MjE3fEJ1ZHVkYX4yMjN8QnVnaXJpfjIwMXxCdWtlZGVhfjIyNHxCdWt3YX4yMTh8QnVsaWlzYX40MTl8QnVuZGlidWd5b340MDF8QnVzaGVueWl+NDAyfEJ1c2lhfjIwMnxCdXRhbGVqYX4yMTl8RG9rb2xvfjMxOHxHdWx1fjMwNHxIb2ltYX40MDN8SWJhbmRhfjQxNnxJZ2FuZ2F+MjAzfElzaW5naXJvfjQxN3xKaW5qYX4yMDR8S2FhYm9uZ34zMTV8S2FiYWxlfjQwNHxLYWJhcm9sZX40MDV8S2FiZXJhbWFpZG9+MjEzfEthbGFuZ2FsYX4xMDF8S2FsaXJvfjIyMHxLYW1wYWxhfjEwMnxLYW11bGl+MjA1fEthbXdlbmdlfjQxM3xLYW51bmd1fjQxNHxLYXBjaG9yd2F+MjA2fEthc2VzZX40MDZ8S2F0YWt3aX4yMDd8S2F5dW5nYX4xMTJ8S2liYWFsZX40MDd8S2lib2dhfjEwM3xLaXJ1aHVyYX40MTh8S2lzb3JvfjQwOHxLaXRndW1+MzA1fEtvYm9rb34zMTZ8S290aWRvfjMwNnxLdW1pfjIwOHxLeWVuam9qb340MTV8TGlyYX4zMDd8THV3ZXJvfjEwNHxMeWFudG9uZGV+MTE2fE1hbmFmd2F+MjIxfE1hcmFjaGF+MzIwfE1hc2FrYX4xMDV8TWFzaW5kaX40MDl8TWF5dWdlfjIxNHxNYmFsZX4yMDl8TWJhcmFyYX40MTB8TWl0eWFuYX4xMTR8TW9yb3RvfjMwOHxNb3lvfjMwOXxNcGlnaX4xMDZ8TXViZW5kZX4xMDd8TXVrb25vfjEwOHxOYWthcGlyaXBpcml0fjMxMXxOYWthc2VrZX4xMTV8TmFrYXNvbmdvbGF+MTA5fE5hbXV0dW1iYX4yMjJ8TmViYml+MzEwfE50dW5nYW1vfjQxMXxPeWFtfjMyMXxQYWRlcn4zMTJ8UGFsbGlzYX4yMTB8UmFrYWl+MTEwfFJ1a3VuZ2lyaX40MTJ8U2VtYmFidWxlfjExMXxTaXJvbmtvfjIxNXxTb3JvdGl+MjExfFRvcm9yb34yMTJ8V2FraXNvfjExM3xZdW1iZX4zMTNcIl0sW1wiVWtyYWluZVwiLFwiVUFcIixcIkNoZXJrYXN5fjcxfENoZXJuaWhpdn43NHxDaGVybml2dHNpfjc3fERuaXByb3BldHJvdnNrfjEyfERvbmV0c2t+MTR8SXZhbm8tRnJhbmtpdnNrfjI2fEtoYXJraXZ+NjN8S2hlcnNvbn42NXxLaG1lbG55dHNreWl+Njh8S2lldn4zMnxLaXJvdm9ocmFkfjM1fEx1aGFuc2t+MDl8THZpdn40NnxNeWtvbGFpdn40OHxPZGVzc2F+NTF8UG9sdGF2YX41M3xSaXZuZX41NnxTdW15fjU5fFRlcm5vcGlsfjYxfFZpbm55dHNpYX4wNXxWb2x5bn4wN3xaYWthcnBhdHRpYX4yMXxaYXBvcml6aGlhfjIzfFpoeXRvbXlyfjE4fEF2dG9ub21uYSBSZXNwdWJsaWthIEtyeW1+NDN8S3nDr3Z+MzB8U2V2YXN0b3BvbH40MFwiXSxbXCJVbml0ZWQgQXJhYiBFbWlyYXRlc1wiLFwiQUVcIixcIkFidSBEaGFiaX5BWnxBam1hbn5BSnxEdWJhaX5EVXxGdWphaXJhaH5GVXxSYXMgYWwgS2hhaW1haH5SS3xTaGFyamFoflNIfFVtbSBBbCBRdXdhaW5+VVFcIl0sW1wiVW5pdGVkIEtpbmdkb21cIixcIkdCXCIsXCJBdm9ufkFWTnxCZWRmb3Jkc2hpcmV+QkRGfEJlcmtzaGlyZX5CUkt8QnJpc3RvbCwgQ2l0eSBvZn5DT0J8QnVja2luZ2hhbXNoaXJlfkJLTXxDYW1icmlkZ2VzaGlyZX5DQU18Q2hlc2hpcmV+Q0hTfENsZXZlbGFuZH5DTFZ8Q29ybndhbGx+Q09OfEN1bWJyaWF+Q01BfERlcmJ5c2hpcmV+REJZfERldm9ufkRFVnxEb3JzZXR+RE9SfER1cmhhbX5EVVJ8RWFzdCBTdXNzZXh+U1hFfEVzc2V4fkVTU3xHbG91Y2VzdGVyc2hpcmV+R0xTfEdyZWF0ZXIgTG9uZG9ufkxORHxHcmVhdGVyIE1hbmNoZXN0ZXJ+R1RNfEhhbXBzaGlyZSAoQ291bnR5IG9mIFNvdXRoYW1wdG9uKX5IQU18SGVyZWZvcmQgYW5kIFdvcmNlc3Rlcn5IV1J8SGVyZWZvcmRzaGlyZX5IRUZ8SGVydGZvcmRzaGlyZX5IUlR8SXNsZSBvZiBXaWdodH5JT1d8S2VudH5LRU58TGFuY2FzaGlyZX5MQU58TGVpY2VzdGVyc2hpcmV+TEVJfExpbmNvbG5zaGlyZX5MSU58TG9uZG9ufkxETnxNZXJzZXlzaWRlfk1TWXxNaWRkbGVzZXh+TURYfE5vcmZvbGt+TkZLfE5vcnRoYW1wdG9uc2hpcmV+TlRIfE5vcnRodW1iZXJsYW5kfk5CTHxOb3J0aCBIdW1iZXJzaWRlfk5ITXxOb3J0aCBZb3Jrc2hpcmV+TllLfE5vdHRpbmdoYW1zaGlyZX5OVFR8T3hmb3Jkc2hpcmV+T1hGfFJ1dGxhbmR+UlVUfFNocm9wc2hpcmV+U0FMfFNvbWVyc2V0flNPTXxTb3V0aCBIdW1iZXJzaWRlflNITXxTb3V0aCBZb3Jrc2hpcmV+U1lLfFN0YWZmb3Jkc2hpcmV+U1RTfFN1ZmZvbGt+U0ZLfFN1cnJleX5TUll8VHluZSBhbmQgV2Vhcn5UV1J8V2Fyd2lja3NoaXJlfldBUnxXZXN0IE1pZGxhbmRzfldNRHxXZXN0IFN1c3NleH5TWFd8V2VzdCBZb3Jrc2hpcmV+V1lLfFdpbHRzaGlyZX5XSUx8V29yY2VzdGVyc2hpcmV+V09SfEFudHJpbX5BTlR8QXJtYWdofkFSTXxCZWxmYXN0LCBDaXR5IG9mfkJMRnxEb3dufkRPV3xGZXJtYW5hZ2h+RkVSfExvbmRvbmRlcnJ5fkxEWXxEZXJyeSwgQ2l0eSBvZn5EUll8VHlyb25lflRZUnxBYmVyZGVlbiwgQ2l0eSBvZn5BTnxBYmVyZGVlbnNoaXJlfkFCRHxBbmd1cyAoRm9yZmFyc2hpcmUpfkFOU3xBcmd5bGx+QUdCfEF5cnNoaXJlfkFSR3xCYW5mZnNoaXJlfkJBTnxCZXJ3aWNrc2hpcmV+QkVXfEJ1dGV+QlVUfENhaXRobmVzc35DQUl8Q2xhY2ttYW5uYW5zaGlyZX5DTEt8Q3JvbWFydHlzaGlyZX5DT0N8RHVtZnJpZXNzaGlyZX5ERlN8RHVuYmFydG9uc2hpcmUgKER1bWJhcnRvbil+RE5CfER1bmRlZSwgQ2l0eSBvZn5ERHxFYXN0IExvdGhpYW4gKEhhZGRpbmd0b25zaGlyZSl+RUxOfEVkaW5idXJnaCwgQ2l0eSBvZn5FQnxGaWZlfkZJRnxHbGFzZ293LCBDaXR5IG9mfkdMQXxJbnZlcm5lc3Mtc2hpcmV+SU5WfEtpbmNhcmRpbmVzaGlyZX5LQ0R8S2lucm9zcy1zaGlyZX5LUlN8S2lya2N1ZGJyaWdodHNoaXJlfktLRHxMYW5hcmtzaGlyZX5MS1N8TWlkbG90aGlhbiAoQ291bnR5IG9mIEVkaW5idXJnaCl+TUxOfE1vcmF5IChFbGdpbnNoaXJlKX5NT1J8TmFpcm5zaGlyZX5OQUl8T3JrbmV5fk9LSXxQZWVibGVzc2hpcmV+UEVFfFBlcnRoc2hpcmV+UEVSfFJlbmZyZXdzaGlyZX5SRld8Um9zcyBhbmQgQ3JvbWFydHl+Uk9DfFJvc3Mtc2hpcmV+Uk9TfFJveGJ1cmdoc2hpcmV+Uk9YfFNlbGtpcmtzaGlyZX5TRUx8U2hldGxhbmQgKFpldGxhbmQpflNISXxTdGlybGluZ3NoaXJlflNUSXxTdXRoZXJsYW5kflNVVHxXZXN0IExvdGhpYW4gKExpbmxpdGhnb3dzaGlyZSl+V0xOfFdpZ3Rvd25zaGlyZX5XSUd8Q2x3eWR+Q1dEfER5ZmVkfkRGRHxHd2VudH5HTlR8R3d5bmVkZH5HV058TWlkIEdsYW1vcmdhbn5NR018UG93eXN+UE9XfFNvdXRoIEdsYW1vcmdhbn5TR018V2VzdCBHbGFtb3JnYW5+V0dNXCJdLFtcIlVuaXRlZCBTdGF0ZXNcIixcIlVTXCIsXCJBbGFiYW1hfkFMfEFsYXNrYX5BS3xBbWVyaWNhbiBTYW1vYX5BU3xBcml6b25hfkFafEFya2Fuc2FzfkFSfENhbGlmb3JuaWF+Q0F8Q29sb3JhZG9+Q098Q29ubmVjdGljdXR+Q1R8RGVsYXdhcmV+REV8RGlzdHJpY3Qgb2YgQ29sdW1iaWF+REN8TWljcm9uZXNpYX5GTXxGbG9yaWRhfkZMfEdlb3JnaWF+R0F8R3VhbX5HVXxIYXdhaWl+SEl8SWRhaG9+SUR8SWxsaW5vaXN+SUx8SW5kaWFuYX5JTnxJb3dhfklBfEthbnNhc35LU3xLZW50dWNreX5LWXxMb3Vpc2lhbmF+TEF8TWFpbmV+TUV8TWFyc2hhbGwgSXNsYW5kc35NSHxNYXJ5bGFuZH5NRHxNYXNzYWNodXNldHRzfk1BfE1pY2hpZ2Fufk1JfE1pbm5lc290YX5NTnxNaXNzaXNzaXBwaX5NU3xNaXNzb3VyaX5NT3xNb250YW5hfk1UfE5lYnJhc2thfk5FfE5ldmFkYX5OVnxOZXcgSGFtcHNoaXJlfk5IfE5ldyBKZXJzZXl+Tkp8TmV3IE1leGljb35OTXxOZXcgWW9ya35OWXxOb3J0aCBDYXJvbGluYX5OQ3xOb3J0aCBEYWtvdGF+TkR8Tm9ydGhlcm4gTWFyaWFuYSBJc2xhbmRzfk1QfE9oaW9+T0h8T2tsYWhvbWF+T0t8T3JlZ29ufk9SfFBhbGF1flBXfFBlbm5zeWx2YW5pYX5QQXxQdWVydG8gUmljb35QUnxSaG9kZSBJc2xhbmR+Ukl8U291dGggQ2Fyb2xpbmF+U0N8U291dGggRGFrb3RhflNEfFRlbm5lc3NlZX5UTnxUZXhhc35UWHxVdGFoflVUfFZlcm1vbnR+VlR8VmlyZ2luIElzbGFuZHN+Vkl8VmlyZ2luaWF+VkF8V2FzaGluZ3Rvbn5XQXxXZXN0IFZpcmdpbmlhfldWfFdpc2NvbnNpbn5XSXxXeW9taW5nfldZfEFybWVkIEZvcmNlcyBBbWVyaWNhc35BQXxBcm1lZCBGb3JjZXMgRXVyb3BlLCBDYW5hZGEsIEFmcmljYSBhbmQgTWlkZGxlIEVhc3R+QUV8QXJtZWQgRm9yY2VzIFBhY2lmaWN+QVBcIl0sW1wiVW5pdGVkIFN0YXRlcyBNaW5vciBPdXRseWluZyBJc2xhbmRzXCIsXCJVTVwiLFwiQmFrZXIgSXNsYW5kfjgxfEhvd2xhbmQgSXNsYW5kfjg0fEphcnZpcyBJc2xhbmR+ODZ8Sm9obnN0b24gQXRvbGx+Njd8S2luZ21hbiBSZWVmfjg5fE1pZHdheSBJc2xhbmRzfjcxfE5hdmFzc2EgSXNsYW5kfjc2fFBhbG15cmEgQXRvbGx+OTV8V2FrZSBJc2xhbmR+Nzl8QmFqbyBOdWV2byBCYW5rfkJOfFNlcnJhbmlsbGEgQmFua35TQlwiXSxbXCJVcnVndWF5XCIsXCJVWVwiLFwiQXJ0aWdhc35BUnxDYW5lbG9uZXN+Q0F8Q2Vycm8gTGFyZ29+Q0x8Q29sb25pYX5DT3xEdXJhem5vfkRVfEZsb3Jlc35GU3xGbG9yaWRhfkZEfExhdmFsbGVqYX5MQXxNYWxkb25hZG9+TUF8TW9udGV2aWRlb35NT3xQYXlzYW5kw7p+UEF8UsOtbyBOZWdyb35STnxSaXZlcmF+UlZ8Um9jaGF+Uk98U2FsdG9+U0F8U2FuIEpvc8OpflNKfFNvcmlhbm9+U098VGFjdWFyZW1iw7N+VEF8VHJlaW50YSB5IFRyZXN+VFRcIl0sW1wiVXpiZWtpc3RhblwiLFwiVVpcIixcIlRvc2hrZW50IHNoYWhyaX5US3xBbmRpam9ufkFOfEJ1eG9yb35CVXxGYXJn4oCYb25hfkZBfEppenpheH5KSXxOYW1hbmdhbn5OR3xOYXZvaXl+Tld8UWFzaHFhZGFyeW8gKFFhcnNoaSl+UUF8U2FtYXJxYW5kflNBfFNpcmRhcnlvIChHdWxpc3Rvbil+U0l8U3VyeG9uZGFyeW8gKFRlcm1peil+U1V8VG9zaGtlbnQgd2lsb3lhdGl+VE98WG9yYXptIChVcmdhbmNoKX5YT3xRb3JhcWFscG9n4oCYaXN0b24gUmVzcHVibGlrYXNpIChOdWt1cyl+UVJcIl0sW1wiVmFudWF0dVwiLFwiVlVcIixcIk1hbGFtcGF+TUFQfFDDqW5hbWF+UEFNfFNhbm1hflNBTXxTaMOpZmF+U0VFfFRhZsOpYX5UQUV8VG9yYmF+VE9CXCJdLFtcIlZlbmV6dWVsYSwgQm9saXZhcmlhbiBSZXB1YmxpYyBvZlwiLFwiVkVcIixcIkRlcGVuZGVuY2lhcyBGZWRlcmFsZXN+V3xEaXN0cml0byBGZWRlcmFsfkF8QW1hem9uYXN+WnxBbnpvw6F0ZWd1aX5CfEFwdXJlfkN8QXJhZ3VhfkR8QmFyaW5hc35FfEJvbMOtdmFyfkZ8Q2FyYWJvYm9+R3xDb2plZGVzfkh8RGVsdGEgQW1hY3Vyb35ZfEZhbGPDs25+SXxHdcOhcmljb35KfExhcmF+S3xNw6lyaWRhfkx8TWlyYW5kYX5NfE1vbmFnYXN+TnxOdWV2YSBFc3BhcnRhfk98UG9ydHVndWVzYX5QfFN1Y3JlflJ8VMOhY2hpcmF+U3xUcnVqaWxsb35UfFZhcmdhc35YfFlhcmFjdXl+VXxadWxpYX5WXCJdLFtcIlZpZXRuYW1cIixcIlZOXCIsXCLEkOG7k25nIE5haX4zOXzEkOG7k25nIFRow6FwfjQ1fEdpYSBMYWl+MzB8SMOgIEdpYW5nfjAzfEjDoCBOYW1+NjN8SMOgIFTDonl+MTV8SMOgIFTEqW5ofjIzfEjhuqNpIETGsMahbmd+NjF8SOG6rXUgR2lhbmd+NzN8SMOyYSBCw6xuaH4xNHxIxrBuZyBZw6pufjY2fEtow6FuaCBIw7JhfjM0fEtpw6puIEdpYW5nfjQ3fEtvbiBUdW1+Mjh8TGFpIENow6J1fjAxfEzDom0gxJDhu5NuZ34zNXxM4bqhbmcgU8ahbn4wOXxMw6BvIENhaX4wMnxMb25nIEFufjQxfE5hbSDEkOG7i25ofjY3fE5naOG7hyBBbn4yMnxOaW5oIELDrG5ofjE4fE5pbmggVGh14bqtbn4zNnxQaMO6IFRo4buNfjY4fFBow7ogWcOqbn4zMnxRdeG6o25nIELDrG5ofjI0fFF14bqjbmcgTmFtfjI3fFF14bqjbmcgTmfDo2l+Mjl8UXXhuqNuZyBOaW5ofjEzfFF14bqjbmcgVHLhu4t+MjV8U8OzYyBUcsSDbmd+NTJ8U8ahbiBMYX4wNXxUw6J5IE5pbmh+Mzd8VGjDoWkgQsOsbmh+MjB8VGjDoWkgTmd1ecOqbn42OXxUaGFuaCBIw7NhfjIxfFRo4burYSBUaGnDqm7igJNIdeG6v34yNnxUaeG7gW4gR2lhbmd+NDZ8VHLDoCBWaW5ofjUxfFR1ecOqbiBRdWFuZ34wN3xWxKluaCBMb25nfjQ5fFbEqW5oIFBow7pjfjcwfFnDqm4gQsOhaX4wNnxD4bqnbiBUaMahfkNUfMSQw6AgTuG6tW5nfkROfEjDoCBO4buZaX5ITnxI4bqjaSBQaMOybmd+SFB8SOG7kyBDaMOtIE1pbmggKFPDoGkgR8Oybil+U0dcIl0sW1wiVmlyZ2luIElzbGFuZHMsIEJyaXRpc2hcIixcIlZHXCIsXCJBbmVnYWRhfkFOR3xKb3N0IFZhbiBEeWtlfkpWRHxUb3J0b2xhflRUQXxWaXJnaW4gR29yZGF+VkdEXCJdLFtcIlZpcmdpbiBJc2xhbmRzLCBVLlMuXCIsXCJWSVwiLFwiU3QuIFRob21hc35TVEh8U3QuIEpvaG5+U0pPfFN0LiBDcm9peH5TQ1JcIl0sW1wiV2FsbGlzIGFuZCBGdXR1bmFcIixcIldGXCIsXCJBbG9+QUxPfFNpZ2F2ZX5TSUd8V2FsbGlzfldBTFwiXSxbXCJXZXN0ZXJuIFNhaGFyYVwiLFwiRUhcIixcIkVzIFNtYXJhfkVTTXxCb3VqZG91cn5CT0R8TGHDonlvdW5lfkxBQXxBb3Vzc2VyZH5BT1V8T3VlZCBlZCBEYWhhYn5PVURcIl0sW1wiWWVtZW5cIixcIllFXCIsXCJBYnnEgW5+QUJ8J0FkYW5+QUR8QeG4kSDhuJDEgWxpJ35EQXxBbCBCYXnhuJHEgSd+QkF8QWwg4biodWRheWRhaH5IVXxBbCBKYXdmfkpBfEFsIE1haHJhaH5NUnxBbCBNYeG4qXfEq3R+TVd8J0FtcsSBbn5BTXxEaGFtxIFyfkRIfOG4qGHhuJFyYW1hd3R+SER84bioYWpqYWh+SEp8SWJifklCfExh4bipaWp+TEF8TWEncmlifk1BfFJheW1haH5SQXzFnsSB4oCYZGFoflNEfMWeYW7igJjEgSd+U058U2hhYndhaH5TSHxUxIHigJhpenp+VEFcIl0sW1wiWmFtYmlhXCIsXCJaTVwiLFwiQ2VudHJhbH4wMnxDb3BwZXJiZWx0fjA4fEVhc3Rlcm5+MDN8THVhcHVsYX4wNHxMdXNha2F+MDl8Tm9ydGhlcm5+MDV8Tm9ydGgtV2VzdGVybn4wNnxTb3V0aGVybn4wN3xXZXN0ZXJufjAxXCJdLFtcIlppbWJhYndlXCIsXCJaV1wiLFwiQnVsYXdheW9+QlV8SGFyYXJlfkhBfE1hbmljYWxhbmR+TUF8TWFzaG9uYWxhbmQgQ2VudHJhbH5NQ3xNYXNob25hbGFuZCBFYXN0fk1FfE1hc2hvbmFsYW5kIFdlc3R+TVd8TWFzdmluZ29+TVZ8TWF0YWJlbGVsYW5kIE5vcnRofk1OfE1hdGFiZWxlbGFuZCBTb3V0aH5NU3xNaWRsYW5kc35NSVwiXV0sYT1mdW5jdGlvbigpe2w9cztmb3IodmFyIGE9ZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNycy1jb3VudHJ5XCIpLG49MDtuPGEubGVuZ3RoO24rKyllKGFbbl0pfSxlPWZ1bmN0aW9uKGEpe2lmKFwidHJ1ZVwiIT09YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWNycy1sb2FkZWRcIikpe2EubGVuZ3RoPTA7dmFyIG49YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRlZmF1bHQtb3B0aW9uXCIpLGU9bnx8XCJTZWxlY3QgY291bnRyeVwiLGk9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3ctZGVmYXVsdC1vcHRpb25cIik7bT1udWxsPT09aXx8XCJ0cnVlXCI9PT1pO3ZhciByPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS1kZWZhdWx0LXZhbHVlXCIpLG89YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpLGw9MDttJiYoYS5vcHRpb25zWzBdPW5ldyBPcHRpb24oZSxcIlwiKSksQigpO3ZhciB0PWIoYSk7Y29uc29sZS5sb2cobyk7Zm9yKHZhciBzPTA7czx0Lmxlbmd0aDtzKyspe3ZhciB1PVwic2hvcnRjb2RlXCI9PT1vfHxcIjItY2hhclwiPT09bz90W3NdWzFdOnRbc11bMF07dFtzXVs0XSYmKHU9XCJcIiksYS5vcHRpb25zW2EubGVuZ3RoXT1uZXcgT3B0aW9uKHRbc11bMF0sdSksbnVsbCE9ciYmcj09PXUmJihsPXMsbSYmbCsrKX1hLnNlbGVjdGVkSW5kZXg9bDt2YXIgZD1hLmdldEF0dHJpYnV0ZShcImRhdGEtcmVnaW9uLWlkXCIpO2lmKGQpe3ZhciBoPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGQpO2lmKGgpaWYoTShoKSxhLm9uY2hhbmdlPWZ1bmN0aW9uKCl7YyhhLGgpfSxudWxsIT09ciYmMDxhLnNlbGVjdGVkSW5kZXgpe2MoYSxoKTt2YXIgUz1oLmdldEF0dHJpYnV0ZShcImRhdGEtZGVmYXVsdC12YWx1ZVwiKSxBPVwic2hvcnRjb2RlXCI9PT1oLmdldEF0dHJpYnV0ZShcImRhdGEtdmFsdWVcIik7aWYobnVsbCE9PVMpe3ZhciBnPXRbbT9hLnNlbGVjdGVkSW5kZXgtMTphLnNlbGVjdGVkSW5kZXhdWzNdO2soaCxnLFMsQSl9fWVsc2UhMT09PW0mJmMoYSxoKTtlbHNlIGNvbnNvbGUuZXJyb3IoXCJSZWdpb24gZHJvcGRvd24gRE9NIG5vZGUgd2l0aCBJRCBcIitkK1wiIG5vdCBmb3VuZC5cIik7YS5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNycy1sb2FkZWRcIixcInRydWVcIil9ZWxzZSBjb25zb2xlLmVycm9yKFwiTWlzc2luZyBkYXRhLXJlZ2lvbi1pZCBvbiBjb3VudHJ5LXJlZ2lvbi1zZWxlY3RvciBjb3VudHJ5IGZpZWxkLlwiKX19LE09ZnVuY3Rpb24oYSl7dmFyIG49YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLWJsYW5rLW9wdGlvblwiKSxlPW58fFwiLVwiLGk9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNob3ctZGVmYXVsdC1vcHRpb25cIik7aD1udWxsPT09aXx8XCJ0cnVlXCI9PT1pLGEubGVuZ3RoPTAsaCYmKGEub3B0aW9uc1swXT1uZXcgT3B0aW9uKGUsXCJcIiksYS5zZWxlY3RlZEluZGV4PTApfSxCPWZ1bmN0aW9uKCl7Zm9yKHZhciBhPTA7YTxsLmxlbmd0aDthKyspe2Zvcih2YXIgbj17aGFzU2hvcnRjb2Rlczovfi8udGVzdChsW2FdWzJdKSxyZWdpb25zOltdfSxlPWxbYV1bMl0uc3BsaXQoXCJ8XCIpLGk9MDtpPGUubGVuZ3RoO2krKyl7dmFyIHI9ZVtpXS5zcGxpdChcIn5cIik7bi5yZWdpb25zLnB1c2goW3JbMF0sclsxXV0pfWxbYV1bM109bn19LGs9ZnVuY3Rpb24oYSxuLGUsaSl7Zm9yKHZhciByPTA7cjxuLnJlZ2lvbnMubGVuZ3RoO3IrKyl7aWYoKGkmJm4uaGFzU2hvcnRjb2RlcyYmbi5yZWdpb25zW3JdWzFdP24ucmVnaW9uc1tyXVsxXTpuLnJlZ2lvbnNbcl1bMF0pPT09ZSl7YS5zZWxlY3RlZEluZGV4PWg/cisxOnI7YnJlYWt9fX0sYz1mdW5jdGlvbihhLG4pe3ZhciBlPW0/YS5zZWxlY3RlZEluZGV4LTE6YS5zZWxlY3RlZEluZGV4LGk9bi5nZXRBdHRyaWJ1dGUoXCJkYXRhLWRlZmF1bHQtb3B0aW9uXCIpLHI9bi5nZXRBdHRyaWJ1dGUoXCJkYXRhLXZhbHVlXCIpLG89aXx8XCJTZWxlY3QgcmVnaW9uXCI7aWYoXCJcIj09PWEudmFsdWUpTShuKTtlbHNle24ubGVuZ3RoPTAsaCYmKG4ub3B0aW9uc1swXT1uZXcgT3B0aW9uKG8sXCJcIikpO3ZhciBsPWIoYSlbZV1bM10sdD1cInNob3J0Y29kZVwiPT09ciYmbC5oYXNTaG9ydGNvZGVzLHM9dD8xOjA7bC5yZWdpb25zLnNvcnQoZnVuY3Rpb24oYSxuKXt2YXIgZT1hW3NdLnRvTG93ZXJDYXNlKCksaT1uW3NdLnRvTG93ZXJDYXNlKCk7cmV0dXJuIGU8aT8tMTppPGU/MTowfSk7Zm9yKHZhciB1PTA7dTxsLnJlZ2lvbnMubGVuZ3RoO3UrKyl7dmFyIGQ9dD9sLnJlZ2lvbnNbdV1bMV06bC5yZWdpb25zW3VdWzBdO24ub3B0aW9uc1tuLmxlbmd0aF09bmV3IE9wdGlvbihsLnJlZ2lvbnNbdV1bMF0sZCl9bi5zZWxlY3RlZEluZGV4PTB9fSxiPWZ1bmN0aW9uKGEpe3ZhciBuPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS13aGl0ZWxpc3RcIiksZT1hLmdldEF0dHJpYnV0ZShcImRhdGEtYmxhY2tsaXN0XCIpLGk9YS5nZXRBdHRyaWJ1dGUoXCJkYXRhLXByZWZlcnJlZFwiKSxyPWEuZ2V0QXR0cmlidXRlKFwiZGF0YS1wcmVmZXJyZWQtZGVsaW1cIiksbz1sO3JldHVybihufHxlKSYmKG89ZnVuY3Rpb24oYSl7dmFyIG49YS53aGl0ZWxpc3QrXCJ8XCIrYS5ibGFja2xpc3QsZT0wO2lmKCF0Lmhhc093blByb3BlcnR5KG4pKWlmKHRbbl09W10sYS53aGl0ZWxpc3Qpe3ZhciBpPWEud2hpdGVsaXN0LnNwbGl0KFwiLFwiKTtmb3IoZT0wO2U8cy5sZW5ndGg7ZSsrKS0xIT09aS5pbmRleE9mKHNbZV1bMV0pJiZ0W25dLnB1c2goZSl9ZWxzZSBpZihhLmJsYWNrbGlzdCl7dmFyIHI9YS5ibGFja2xpc3Quc3BsaXQoXCIsXCIpO2ZvcihlPTA7ZTxzLmxlbmd0aDtlKyspLTE9PT1yLmluZGV4T2Yoc1tlXVsxXSkmJnRbbl0ucHVzaChlKX12YXIgbz1bXTtmb3IoZT0wO2U8dFtuXS5sZW5ndGg7ZSsrKW8ucHVzaChzW3Rbbl1bZV1dKTtyZXR1cm4gb30oe3doaXRlbGlzdDpuLGJsYWNrbGlzdDplfSkpLGkmJihvPXUobyxpLHIpKSxvfSx1PWZ1bmN0aW9uKGEsbixlKXt2YXIgaT1uLnNwbGl0KFwiLFwiKS5yZXZlcnNlKCkscj17fSxvPSExLGw9YS5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuLTE9PT1pLmluZGV4T2YoYVsxXSl8fChyW2FbMV1dPWEsIShvPSEwKSl9KTtvJiZlJiZsLnVuc2hpZnQoW2UsXCJcIixcIlwiLHt9LCEwXSk7Zm9yKHZhciB0PTA7dDxpLmxlbmd0aDt0Kyspe3ZhciBzPWlbdF07bC51bnNoaWZ0KHJbc10pfXJldHVybiBsfTtyZXR1cm4gZnVuY3Rpb24obixlKXt2YXIgaT0hMSxhPSEwLHI9bi5kb2N1bWVudCxvPXIuZG9jdW1lbnRFbGVtZW50LGw9ci5hZGRFdmVudExpc3RlbmVyP1wiYWRkRXZlbnRMaXN0ZW5lclwiOlwiYXR0YWNoRXZlbnRcIix0PXIuYWRkRXZlbnRMaXN0ZW5lcj9cInJlbW92ZUV2ZW50TGlzdGVuZXJcIjpcImRldGFjaEV2ZW50XCIscz1yLmFkZEV2ZW50TGlzdGVuZXI/XCJcIjpcIm9uXCIsdT1mdW5jdGlvbihhKXtcInJlYWR5c3RhdGVjaGFuZ2VcIj09YS50eXBlJiZcImNvbXBsZXRlXCIhPXIucmVhZHlTdGF0ZXx8KChcImxvYWRcIj09YS50eXBlP246cilbdF0ocythLnR5cGUsdSwhMSksIWkmJihpPSEwKSYmZS5jYWxsKG4sYS50eXBlfHxhKSl9LGQ9ZnVuY3Rpb24oKXt0cnl7by5kb1Njcm9sbChcImxlZnRcIil9Y2F0Y2goYSl7cmV0dXJuIHZvaWQgc2V0VGltZW91dChkLDUwKX11KFwicG9sbFwiKX07aWYoXCJjb21wbGV0ZVwiPT1yLnJlYWR5U3RhdGUpZS5jYWxsKG4sXCJsYXp5XCIpO2Vsc2V7aWYoci5jcmVhdGVFdmVudE9iamVjdCYmby5kb1Njcm9sbCl7dHJ5e2E9IW4uZnJhbWVFbGVtZW50fWNhdGNoKGEpe31hJiZkKCl9cltsXShzK1wiRE9NQ29udGVudExvYWRlZFwiLHUsITEpLHJbbF0ocytcInJlYWR5c3RhdGVjaGFuZ2VcIix1LCExKSxuW2xdKHMrXCJsb2FkXCIsdSwhMSl9fSh3aW5kb3csYSkse2luaXQ6YX19KTsiLCJjb25zdCBkaXNwbGF5T2JqZWN0cyA9IFtcbiAge1xuICAgIG5hbWU6IFwibWFpblwiLFxuICAgIG5vZGVUeXBlOiBcIm1haW5cIixcbiAgICBwYXJlbnQ6IFwiYm9keVwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJjb250ZW50Q29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIm1haW5cIixcbiAgICBjbGFzczE6IFwiY29udGVudFwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJjZW50cmFsQ29udGFpbmVyXCIsXG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5jb250ZW50XCIsXG4gICAgY2xhc3MxOiBcImlucHV0LWNvbnRhaW5lclwiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJ0aXRsZVwiLFxuICAgIG5vZGVUeXBlOiBcImgxXCIsXG4gICAgcGFyZW50OiBcIi5pbnB1dC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwidGl0bGVcIixcbiAgICB0ZXh0OiBcIldlYXRoZXJcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiaW5wdXRcIixcbiAgICBub2RlVHlwZTogXCJpbnB1dFwiLFxuICAgIHBhcmVudDogXCIuaW5wdXQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImxvY2F0aW9uLWlucHV0XCIsXG4gICAgaW5wdXRUeXBlOiBcInRleHRcIixcbiAgICB2YWx1ZTogXCJcIixcbiAgICBwbGFjZWhvbGRlcjogXCJQbGVhc2UgZW50ZXIgYSB0b3duIG9yIGNpdHlcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiY291bnRyeUlucHV0XCIsXG4gICAgbm9kZVR5cGU6IFwic2VsZWN0XCIsXG4gICAgcGFyZW50OiBcIi5pbnB1dC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiY3JzLWNvdW50cnlcIixcbiAgICB2YWx1ZTogXCJcIixcbiAgICAvLyBkYXRhQXR0clR5cGU6ICdyZWdpb24taWQnLFxuICAgIGRhdGFBdHRyOiAnVVNBJyxcbiAgICBzaG9ydGNvZGU6IHRydWUsXG4gICAgcHJlZmVycmVkOiAnRVMsVVMsR0InLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJzdGF0ZUlucHV0XCIsXG4gICAgbm9kZVR5cGU6IFwic2VsZWN0XCIsXG4gICAgcGFyZW50OiBcIi5pbnB1dC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwic3RhdGUtaW5wdXRcIixcbiAgICBjbGFzczI6IFwiaGlkZGVuXCIsXG4gICAgdmFsdWU6IFwiXCIsXG4gICAgaWQ6ICdVU0EnLFxuICAgIHNob3J0Y29kZTogdHJ1ZSxcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwic3VibWl0XCIsXG4gICAgbm9kZVR5cGU6IFwiaW5wdXRcIixcbiAgICBwYXJlbnQ6IFwiLmlucHV0LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJsb2NhdGlvbi1zdWJtaXRcIixcbiAgICB2YWx1ZTogXCJTdWJtaXRcIixcbiAgICBpbnB1dFR5cGU6IFwiYnV0dG9uXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBjYXJkT2JqZWN0cyA9IHtcbiAgY2FyZDoge1xuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIuY29udGVudFwiLFxuICAgIGNsYXNzMTogXCJ3ZWF0aGVyLWNhcmRcIixcbiAgfSxcbiAgc3VtbWFyeToge1xuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIud2VhdGhlci1jYXJkXCIsXG4gICAgY2xhc3MxOiBcInN1bW1hcnlcIixcbiAgfSxcbiAgZGV0YWlsczoge1xuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIud2VhdGhlci1jYXJkXCIsXG4gICAgY2xhc3MxOiBcImRldGFpbHNcIixcbiAgfSxcbiAgbG9jYXRpb246IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5zdW1tYXJ5XCIsXG4gICAgY2xhc3MxOiBcImxvY2F0aW9uXCIsXG4gIH0sXG4gIHRlbXBDb250YWluZXI6IHtcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgfSxcbiAgbWFpblRlbXBDb250YWluZXI6IHtcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgfSxcbiAgdGVtcDoge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLnRlbXAtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInRlbXBcIixcbiAgICBjbGFzczI6IFwidGVtcGVyYXR1cmVcIixcbiAgfSxcbiAgdGVtcFVuaXRzOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIGNsYXNzMTogXCJ0ZW1wLXVuaXRcIixcbiAgfSxcbiAgZGVzY3JpcHRpb246IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5zdW1tYXJ5XCIsXG4gICAgY2xhc3MxOiBcImRlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGZvcmVjYXN0RGVzY3JpcHRpb246IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5zdW1tYXJ5XCIsXG4gICAgY2xhc3MxOiBcImZvcmVjYXN0LWRlc2NyaXB0aW9uXCIsXG4gIH0sXG4gIGh1bWlkaXR5OiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuaHVtaWRpdHktY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImh1bWlkaXR5XCIsXG4gIH0sXG4gIGh1bWlkaXR5VGl0bGU6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5odW1pZGl0eS1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiaHVtaWRpdHktdGl0bGVcIixcbiAgICB0ZXh0OiBcIkh1bWlkaXR5ICglKVwiLFxuICB9LFxuICBoaWdoOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuaGlnaC10ZW1wLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJoaWdoXCIsXG4gICAgY2xhc3MyOiBcInRlbXBlcmF0dXJlXCIsXG4gIH0sXG4gIGhpZ2hUaXRsZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLmhpZ2gtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImhpZ2gtdGl0bGVcIixcbiAgICB0ZXh0OiBcIkhpZ2hcIixcbiAgfSxcbiAgbG93OiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIubG93LXRlbXAtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImxvd1wiLFxuICAgIGNsYXNzMjogXCJ0ZW1wZXJhdHVyZVwiLFxuICB9LFxuICBsb3dUaXRsZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLmxvdy1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwibG93LXRpdGxlXCIsXG4gICAgdGV4dDogXCJMb3dcIixcbiAgfSxcbiAgZmVlbHNMaWtlOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuZmVlbHMtdGVtcC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiZmVlbHNMaWtlXCIsXG4gICAgY2xhc3MyOiBcInRlbXBlcmF0dXJlXCIsXG4gIH0sXG4gIGZlZWxzTGlrZVRpdGxlOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuZmVlbHMtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcImZlZWxzLXRpdGxlXCIsXG4gICAgdGV4dDogXCJGZWVscyBsaWtlXCIsXG4gIH0sXG4gIGNsb3Vkczoge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLmNsb3Vkcy1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwiY2xvdWRzXCIsXG4gIH0sXG4gIGNsb3Vkc1RpdGxlOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIuY2xvdWRzLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJjbG91ZHMtdGl0bGVcIixcbiAgICB0ZXh0OiBcIkNsb3VkIGNvdmVyICglKVwiLFxuICB9LFxuICBwcmVzc3VyZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLnByZXNzdXJlLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJwcmVzc3VyZVwiLFxuICB9LFxuICBwcmVzc3VyZVRpdGxlOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIucHJlc3N1cmUtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInByZXNzdXJlLXRpdGxlXCIsXG4gICAgdGV4dDogXCJQcmVzc3VyZSAobWJhcilcIixcbiAgfSxcbiAgc3VucmlzZToge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLnN1bnJpc2UtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInN1bnJpc2VcIixcbiAgICBjbGFzczI6IFwidGltZVwiLFxuICB9LFxuICBzdW5yaXNlVGl0bGU6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5zdW5yaXNlLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJzdW5yaXNlLXRpdGxlXCIsXG4gICAgdGV4dDogXCJTdW5yaXNlIHRvZGF5XCIsXG4gIH0sXG4gIHN1bnNldDoge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLnN1bnNldC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwic3Vuc2V0XCIsXG4gICAgY2xhc3MyOiBcInRpbWVcIixcbiAgfSxcbiAgc3Vuc2V0VGl0bGU6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi5zdW5zZXQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcInN1bnNldC10aXRsZVwiLFxuICAgIHRleHQ6IFwiU3Vuc2V0IHRvZGF5XCIsXG4gIH0sXG4gIHZpczoge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLnZpcy1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwidmlzXCIsXG4gIH0sXG4gIHZpc1RpdGxlOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIudmlzLWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJ2aXMtdGl0bGVcIixcbiAgICB0ZXh0OiBcIlZpc2liaWxpdHkgKG1ldGVycylcIixcbiAgfSxcbiAgd2luZERpclRpdGxlOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIud2luZC1kaXItY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcIndpbmQtZGlyLXRpdGxlXCIsXG4gICAgdGV4dDogXCJXaW5kIGRpcmVjdGlvblwiLFxuICB9LFxuICB3aW5kRGlyOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIud2luZC1kaXItY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcIndpbmQtZGlyXCIsXG4gIH0sXG4gIHdpbmRTcGVlZFRpdGxlOiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIHBhcmVudDogXCIud2luZC1zcGVlZC1jb250YWluZXJcIixcbiAgICBjbGFzczE6IFwid2luZC1zcGVlZC10aXRsZVwiLFxuICAgIHRleHQ6IFwiV2luZCBzcGVlZFwiLFxuICB9LFxuICB3aW5kU3BlZWQ6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgcGFyZW50OiBcIi53aW5kLXNwZWVkLXVuaXQtY29udGFpbmVyXCIsXG4gICAgY2xhc3MxOiBcIndpbmQtc3BlZWRcIixcbiAgfSxcbiAgZGV0YWlsQ29udGFpbmVyOiB7XG4gICAgbm9kZVR5cGU6IFwiZGl2XCIsXG4gICAgcGFyZW50OiBcIi5kZXRhaWxzXCIsXG4gICAgY2xhc3MxOiBcImRldGFpbC1jb250YWluZXJcIixcbiAgfSxcbiAgZGV0YWlsVGl0bGU6IHtcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgfSxcbiAgdGVtcFVuaXRDb250YWluZXI6IHtcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgfSxcbiAgd2luZFVuaXRDb250YWluZXI6IHtcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLndpbmQtc3BlZWQtY29udGFpbmVyXCIsXG4gIH0sXG4gIHdpbmRVbml0czoge1xuICAgIG5vZGVUeXBlOiBcInBcIixcbiAgICBwYXJlbnQ6IFwiLndpbmQtc3BlZWQtdW5pdC1jb250YWluZXJcIixcbiAgICB0ZXh0OiBcImttL2hcIixcbiAgICBjbGFzczE6IFwid2luZC11bml0c1wiLFxuICB9LFxuICB0b2dnbGVVbml0czoge1xuICAgIG5vZGVUeXBlOiBcImlucHV0XCIsXG4gICAgcGFyZW50OiBcIi53ZWF0aGVyLWNhcmRcIixcbiAgICBjbGFzczE6IFwidG9nZ2xlLXVuaXRzXCIsXG4gICAgdmFsdWU6IFwiQ2xpY2sgdG8gdG9nZ2xlIHVuaXRzXCIsXG4gICAgaW5wdXRUeXBlOiBcImJ1dHRvblwiLFxuICB9LFxuICBmb3JlY2FzdENvbnRhaW5lcjoge1xuICAgIG5vZGVUeXBlOiBcImRpdlwiLFxuICAgIHBhcmVudDogXCIud2VhdGhlci1jYXJkXCIsXG4gICAgY2xhc3MxOiBcImZvcmVjYXN0LWNvbnRhaW5lclwiLFxuICB9LFxuICBmb3JlY2FzdENhcmQ6IHtcbiAgICBub2RlVHlwZTogXCJkaXZcIixcbiAgICBwYXJlbnQ6IFwiLmZvcmVjYXN0LWNvbnRhaW5lclwiLFxuICAgIGNsYXNzMTogXCJmb3JlY2FzdFwiLFxuICB9LFxuICBmb3JlY2FzdFRpbWU6IHtcbiAgICBub2RlVHlwZTogXCJwXCIsXG4gICAgY2xhc3MxOiBcImZvcmVjYXN0LXRpbWVcIixcbiAgICBjbGFzczM6IFwidGltZVwiLFxuICB9LFxuICBmb3JlY2FzdFRlbXA6IHtcbiAgIG5vZGVUeXBlOiBcInBcIixcbiAgIGNsYXNzMTogXCJmb3JlY2FzdC10ZW1wXCIsXG4gICBjbGFzczM6IFwidGVtcGVyYXR1cmVcIixcbiAgfSxcbiAgZm9yZWNhc3RTdW1tYXJ5OiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIGNsYXNzMTogXCJmb3JlY2FzdC1zdW1tYXJ5XCIsXG4gIH0sXG4gIGZvcmVjYXN0SHVtaWRpdHk6IHtcbiAgIG5vZGVUeXBlOiBcInBcIixcbiAgIGNsYXNzMTogXCJmb3JlY2FzdC1odW1pZGl0eVwiLFxuICB9LFxuICBmb3JlY2FzdENvdW50OiB7XG4gICAgbm9kZVR5cGU6IFwicFwiLFxuICAgIGNsYXNzMTogXCJmb3JlY2FzdC1jb3VudFwiLFxuICB9LFxuXG59O1xuXG5jb25zdCBlcnJvcnMgPSB7XG4gIDQwNDoge1xuICAgIG5vZGVUeXBlOiBcImgyXCIsXG4gICAgcGFyZW50OiBcIi5jb250ZW50XCIsXG4gICAgY2xhc3MxOiBcImVycm9yXCIsXG4gICAgdGV4dDogXCJFcnJvciA0MDQ6IExvY2F0aW9uIG5vdCBmb3VuZC4gUGxlYXNlIGVudGVyIGEgdmFsaWQgbG9jYXRpb24uXCIsXG4gIH0sXG4gIDUyMDoge1xuICAgIG5vZGVUeXBlOiBcImgyXCIsXG4gICAgcGFyZW50OiBcIi5jb250ZW50XCIsXG4gICAgY2xhc3MxOiBcImVycm9yXCIsXG4gICAgdGV4dDogXCJFcnJvciA1MjA6IEVtcHR5LCB1bmtub3duLCB1bmV4cGVjdGVkLCBvciBubyByZXNwb25zZVwiLFxuICB9LFxufTtcblxuZXhwb3J0IHsgZGlzcGxheU9iamVjdHMsIGNhcmRPYmplY3RzLCBlcnJvcnMgfTtcbiIsImltcG9ydCB7IGNvbXBvbmVudEZhY3RvcnkgfSBmcm9tIFwiLi9jb21wb25lbnRGYWN0b3J5XCI7XG5pbXBvcnQgeyBjYXJkT2JqZWN0cyB9IGZyb20gXCIuL2Rpc3BsYXlPYmplY3RzXCI7XG5pbXBvcnQgY3JzTWluIGZyb20gXCIuL2Nycy5taW5cIjtcblxuY29uc3QgZHJhd0NhcmQgPSAoKSA9PiB7XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItY2FyZFwiKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jYXJkXCIpLnJlbW92ZSgpO1xuICB9XG4gIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lcnJvclwiKS5yZW1vdmUoKTtcbiAgfVxuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLmNhcmQpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLnN1bW1hcnkpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLnRvZ2dsZVVuaXRzKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5kZXRhaWxzKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5sb2NhdGlvbik7XG4gIC8vXG4gIGNvbnN0IHRlbXBDb250YWluZXIxID0gY2FyZE9iamVjdHMubWFpblRlbXBDb250YWluZXI7XG4gIHRlbXBDb250YWluZXIxLnBhcmVudCA9IFwiLnN1bW1hcnlcIjtcbiAgdGVtcENvbnRhaW5lcjEuY2xhc3MxID0gXCJ0ZW1wLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KHRlbXBDb250YWluZXIxKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy50ZW1wKTtcbiAgY29uc3QgdGVtcFVuaXQwID0gY2FyZE9iamVjdHMudGVtcFVuaXRzO1xuICB0ZW1wVW5pdDAucGFyZW50ID0gXCIudGVtcC1jb250YWluZXJcIjtcbiAgY29tcG9uZW50RmFjdG9yeSh0ZW1wVW5pdDApO1xuICAvL1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLmRlc2NyaXB0aW9uKTtcbiAgLy9cbiAgY29uc3QgZmVlbHNDb250YWluZXIgPSBjYXJkT2JqZWN0cy50ZW1wQ29udGFpbmVyO1xuICBmZWVsc0NvbnRhaW5lci5wYXJlbnQgPSBcIi5kZXRhaWxzXCI7XG4gIGZlZWxzQ29udGFpbmVyLmNsYXNzMSA9IFwiZmVlbHMtY29udGFpbmVyXCI7XG4gIGZlZWxzQ29udGFpbmVyLmNsYXNzMiA9IFwiZGV0YWlsLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KGZlZWxzQ29udGFpbmVyKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5mZWVsc0xpa2VUaXRsZSk7XG4gIGNvbnN0IGZlZWxzVGVtcENvbnRhaW5lciA9IGNhcmRPYmplY3RzLnRlbXBVbml0Q29udGFpbmVyO1xuICBmZWVsc1RlbXBDb250YWluZXIuY2xhc3MxID0gXCJmZWVscy10ZW1wLWNvbnRhaW5lclwiO1xuICBmZWVsc1RlbXBDb250YWluZXIuY2xhc3MyID0gXCJ0ZW1wLWRldGFpbHMtY29udGFpbmVyXCI7XG4gIGZlZWxzVGVtcENvbnRhaW5lci5wYXJlbnQgPSBcIi5mZWVscy1jb250YWluZXJcIjtcbiAgY29tcG9uZW50RmFjdG9yeShmZWVsc1RlbXBDb250YWluZXIpO1xuXG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuZmVlbHNMaWtlKTtcbiAgY29uc3QgZmVlbHNVbml0cyA9IGNhcmRPYmplY3RzLnRlbXBVbml0cztcbiAgZmVlbHNVbml0cy5wYXJlbnQgPSBcIi5mZWVscy10ZW1wLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KGZlZWxzVW5pdHMpO1xuICAvL1xuICBjb25zdCBodW1pZGl0eUNvbnRhaW5lciA9IGNhcmRPYmplY3RzLmRldGFpbENvbnRhaW5lcjtcbiAgaHVtaWRpdHlDb250YWluZXIuY2xhc3MyID0gXCJodW1pZGl0eS1jb250YWluZXJcIjtcbiAgY29tcG9uZW50RmFjdG9yeShodW1pZGl0eUNvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuaHVtaWRpdHlUaXRsZSk7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuaHVtaWRpdHkpO1xuICAvL1xuXG4gIGNvbnN0IGhpZ2hDb250YWluZXIgPSBjYXJkT2JqZWN0cy50ZW1wQ29udGFpbmVyO1xuICBoaWdoQ29udGFpbmVyLnBhcmVudCA9IFwiLmRldGFpbHNcIjtcbiAgaGlnaENvbnRhaW5lci5jbGFzczEgPSBcImhpZ2gtY29udGFpbmVyXCI7XG4gIGhpZ2hDb250YWluZXIuY2xhc3MyID0gXCJkZXRhaWwtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkoaGlnaENvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuaGlnaFRpdGxlKTtcbiAgY29uc3QgaGlnaFRlbXBDb250YWluZXIgPSBjYXJkT2JqZWN0cy50ZW1wVW5pdENvbnRhaW5lcjtcbiAgaGlnaFRlbXBDb250YWluZXIuY2xhc3MxID0gXCJoaWdoLXRlbXAtY29udGFpbmVyXCI7XG4gIGhpZ2hUZW1wQ29udGFpbmVyLmNsYXNzMiA9IFwidGVtcC1kZXRhaWxzLWNvbnRhaW5lclwiO1xuICBoaWdoVGVtcENvbnRhaW5lci5wYXJlbnQgPSBcIi5oaWdoLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KGhpZ2hUZW1wQ29udGFpbmVyKTtcblxuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLmhpZ2gpO1xuICBjb25zdCBoaWdoVW5pdHMgPSBjYXJkT2JqZWN0cy50ZW1wVW5pdHM7XG4gIGhpZ2hVbml0cy5wYXJlbnQgPSBcIi5oaWdoLXRlbXAtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3RvcnkoaGlnaFVuaXRzKTtcblxuICBjb25zdCBsb3dDb250YWluZXIgPSBjYXJkT2JqZWN0cy50ZW1wQ29udGFpbmVyO1xuICBsb3dDb250YWluZXIucGFyZW50ID0gXCIuZGV0YWlsc1wiO1xuICBsb3dDb250YWluZXIuY2xhc3MxID0gXCJsb3ctY29udGFpbmVyXCI7XG4gIGxvd0NvbnRhaW5lci5jbGFzczIgPSBcImRldGFpbC1jb250YWluZXJcIjtcbiAgY29tcG9uZW50RmFjdG9yeShsb3dDb250YWluZXIpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLmxvd1RpdGxlKTtcbiAgY29uc3QgbG93VGVtcENvbnRhaW5lciA9IGNhcmRPYmplY3RzLnRlbXBVbml0Q29udGFpbmVyO1xuICBsb3dUZW1wQ29udGFpbmVyLmNsYXNzMSA9IFwibG93LXRlbXAtY29udGFpbmVyXCI7XG4gIGxvd1RlbXBDb250YWluZXIuY2xhc3MyID0gXCJ0ZW1wLWRldGFpbHMtY29udGFpbmVyXCI7XG4gIGxvd1RlbXBDb250YWluZXIucGFyZW50ID0gXCIubG93LWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KGxvd1RlbXBDb250YWluZXIpO1xuXG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMubG93KTtcbiAgY29uc3QgbG93VW5pdHMgPSBjYXJkT2JqZWN0cy50ZW1wVW5pdHM7XG4gIGxvd1VuaXRzLnBhcmVudCA9IFwiLmxvdy10ZW1wLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KGxvd1VuaXRzKTtcblxuICBjb25zdCBjbG91ZHNDb250YWluZXIgPSBjYXJkT2JqZWN0cy5kZXRhaWxDb250YWluZXI7XG4gIGNsb3Vkc0NvbnRhaW5lci5jbGFzczIgPSBcImNsb3Vkcy1jb250YWluZXJcIjtcbiAgY29tcG9uZW50RmFjdG9yeShjbG91ZHNDb250YWluZXIpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLmNsb3Vkc1RpdGxlKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5jbG91ZHMpO1xuXG4gIGNvbnN0IHByZXNzdXJlQ29udGFpbmVyID0gY2FyZE9iamVjdHMuZGV0YWlsQ29udGFpbmVyO1xuICBwcmVzc3VyZUNvbnRhaW5lci5jbGFzczIgPSBcInByZXNzdXJlLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KHByZXNzdXJlQ29udGFpbmVyKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5wcmVzc3VyZVRpdGxlKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5wcmVzc3VyZSk7XG5cbiAgY29uc3Qgc3VucmlzZUNvbnRhaW5lciA9IGNhcmRPYmplY3RzLmRldGFpbENvbnRhaW5lcjtcbiAgc3VucmlzZUNvbnRhaW5lci5jbGFzczIgPSBcInN1bnJpc2UtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3Rvcnkoc3VucmlzZUNvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuc3VucmlzZVRpdGxlKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5zdW5yaXNlKTtcblxuICBjb25zdCBzdW5zZXRDb250YWluZXIgPSBjYXJkT2JqZWN0cy5kZXRhaWxDb250YWluZXI7XG4gIHN1bnNldENvbnRhaW5lci5jbGFzczIgPSBcInN1bnNldC1jb250YWluZXJcIjtcbiAgY29tcG9uZW50RmFjdG9yeShzdW5zZXRDb250YWluZXIpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLnN1bnNldFRpdGxlKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy5zdW5zZXQpO1xuXG4gIGNvbnN0IHZpc0NvbnRhaW5lciA9IGNhcmRPYmplY3RzLmRldGFpbENvbnRhaW5lcjtcbiAgdmlzQ29udGFpbmVyLmNsYXNzMiA9IFwidmlzLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KHZpc0NvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMudmlzVGl0bGUpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLnZpcyk7XG5cbiAgY29uc3Qgd2luZERpckNvbnRhaW5lciA9IGNhcmRPYmplY3RzLmRldGFpbENvbnRhaW5lcjtcbiAgd2luZERpckNvbnRhaW5lci5jbGFzczIgPSBcIndpbmQtZGlyLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KHdpbmREaXJDb250YWluZXIpO1xuICBjb21wb25lbnRGYWN0b3J5KGNhcmRPYmplY3RzLndpbmREaXJUaXRsZSk7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMud2luZERpcik7XG5cbiAgY29uc3Qgd2luZFNwZWVkQ29udGFpbmVyID0gY2FyZE9iamVjdHMuZGV0YWlsQ29udGFpbmVyO1xuICB3aW5kU3BlZWRDb250YWluZXIuY2xhc3MyID0gXCJ3aW5kLXNwZWVkLWNvbnRhaW5lclwiO1xuICBjb21wb25lbnRGYWN0b3J5KHdpbmRTcGVlZENvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMud2luZFNwZWVkVGl0bGUpO1xuICBjb25zdCB3aW5kU3BlZWRVbml0Q29udGFpbmVyID0gY2FyZE9iamVjdHMud2luZFVuaXRDb250YWluZXI7XG4gIHdpbmRTcGVlZFVuaXRDb250YWluZXIuY2xhc3MxID0gXCJ3aW5kLXNwZWVkLXVuaXQtY29udGFpbmVyXCI7XG4gIGNvbXBvbmVudEZhY3Rvcnkod2luZFNwZWVkVW5pdENvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMud2luZFNwZWVkKTtcbiAgY29tcG9uZW50RmFjdG9yeShjYXJkT2JqZWN0cy53aW5kVW5pdHMpO1xuXG4gIGNvbXBvbmVudEZhY3RvcnkoY2FyZE9iamVjdHMuZm9yZWNhc3RDb250YWluZXIpO1xufTtcblxuZXhwb3J0IHsgZHJhd0NhcmQgfTtcbiIsImNvbnN0IGdldERlc2NyaXB0aW9uID0gKGlkKSA9PiB7XG4gIGxldCB3ZWF0aGVyO1xuICBsZXQgaW1nO1xuICBzd2l0Y2ggKGlkKSB7XG4gICAgY2FzZSAyMDA6XG4gICAgICB3ZWF0aGVyID0gXCJUaHVuZGVyc3Rvcm0gd2l0aCBsaWdodCByYWluXCI7XG4gICAgICBpbWcgPSBcIlN0b3JtXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDIwMTpcbiAgICAgIHdlYXRoZXIgPSBcIlRodW5kZXJzdG9ybSB3aXRoIHJhaW5cIjtcbiAgICAgIGltZyA9IFwiU3Rvcm1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjAyOlxuICAgICAgd2VhdGhlciA9IFwiVGh1bmRlcnN0b3JtIHdpdGggaGVhdnkgcmFpblwiO1xuICAgICAgaW1nID0gXCJTdG9ybVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyMTA6XG4gICAgICB3ZWF0aGVyID0gXCJMaWdodCB0aHVuZGVyc3Rvcm1cIjtcbiAgICAgIGltZyA9IFwiU3Rvcm1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjExOlxuICAgICAgd2VhdGhlciA9IFwiVGh1bmRlcnN0b3JtXCI7XG4gICAgICBpbWcgPSBcIlN0b3JtXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDIxMjpcbiAgICAgIHdlYXRoZXIgPSBcIkhlYXZ5IHRodW5kZXJzdG9ybVwiO1xuICAgICAgaW1nID0gXCJTdG9ybVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyMjE6XG4gICAgICB3ZWF0aGVyID0gXCJSYWdnZWQgdGh1bmRlcnN0b3JtXCI7XG4gICAgICBpbWcgPSBcIlN0b3JtXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDIzMDpcbiAgICAgIHdlYXRoZXIgPSBcIlRodW5kZXJzdG9ybSB3aXRoIGxpZ2h0IGRyaXp6bGVcIjtcbiAgICAgIGltZyA9IFwiU3Rvcm1cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMjMxOlxuICAgICAgd2VhdGhlciA9IFwiVGh1bmRlcnN0b3JtIHdpdGggZHJpenpsZVwiO1xuICAgICAgaW1nID0gXCJTdG9ybVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAyMzI6XG4gICAgICB3ZWF0aGVyID0gXCJUaHVuZGVyc3Rvcm0gd2l0aCBoZWF2eSBkcml6emxlXCI7XG4gICAgICBpbWcgPSBcIlN0b3JtXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMwMDpcbiAgICAgIHdlYXRoZXIgPSBcIkxpZ2h0IGludGVuc2l0eSBkcml6emxlXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzAxOlxuICAgICAgd2VhdGhlciA9IFwiRHJpenpsZVwiO1xuICAgICAgaW1nID0gXCJSYWluXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMwMjpcbiAgICAgIHdlYXRoZXIgPSBcIkhlYXZ5IGludGVuc2l0eSBkcml6emxlXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzEwOlxuICAgICAgd2VhdGhlciA9IFwiTGlnaHQgaW50ZW5zaXR5IGRyaXp6bGUgcmFpblwiO1xuICAgICAgaW1nID0gXCJSYWluXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMxMTpcbiAgICAgIHdlYXRoZXIgPSBcIkRyaXp6bGUgcmFpblwiO1xuICAgICAgaW1nID0gXCJSYWluXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMxMjpcbiAgICAgIHdlYXRoZXIgPSBcIkhlYXZ5IGludGVuc2l0eSBkcml6emxlIHJhaW5cIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAzMTM6XG4gICAgICB3ZWF0aGVyID0gXCJTaG93ZXIgcmFpbiBhbmQgZHJpenpsZVwiO1xuICAgICAgaW1nID0gXCJSYWluXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDMxNDpcbiAgICAgIHdlYXRoZXIgPSBcIkhlYXZ5IHNob3dlciByYWluIGFuZCBkcml6emxlXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgMzIxOlxuICAgICAgd2VhdGhlciA9IFwiU2hvd2VyIGRyaXp6bGVcIjtcbiAgICAgIGltZyA9IFwiUmFpblwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA1MDA6XG4gICAgICB3ZWF0aGVyID0gXCJMaWdodCByYWluXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTAxOlxuICAgICAgd2VhdGhlciA9IFwiTW9kZXJhdGUgcmFpblwiO1xuICAgICAgaW1nID0gXCJSYWluXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDUwMjpcbiAgICAgIHdlYXRoZXIgPSBcIkhlYXZ5IGludGVuc2l0eSByYWluXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTAzOlxuICAgICAgd2VhdGhlciA9IFwiVmVyeSBoZWF2eSByYWluXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTA0OlxuICAgICAgd2VhdGhlciA9IFwiRXh0cmVtZSByYWluXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTIwOlxuICAgICAgd2VhdGhlciA9IFwiTGlnaHQgaW50ZW5zaXR5IHNob3dlciByYWluXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTIxOlxuICAgICAgd2VhdGhlciA9IFwiU2hvd2VyIHJhaW4gXCI7XG4gICAgICBpbWcgPSBcIlJhaW5cIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNTIyOlxuICAgICAgd2VhdGhlciA9IFwiSGVhdnkgaW50ZW5zaXR5IHNob3dlciByYWluIFwiO1xuICAgICAgaW1nID0gXCJSYWluXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDUzMTpcbiAgICAgIHdlYXRoZXIgPSBcIlJhZ2dlZCBzaG93ZXIgcmFpblwiO1xuICAgICAgaW1nID0gXCJSYWluXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDYwMDpcbiAgICAgIHdlYXRoZXIgPSBcIkxpZ2h0IHNub3dcIjtcbiAgICAgIGltZyA9IFwiU25vd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MDE6XG4gICAgICB3ZWF0aGVyID0gXCJTbm93XCI7XG4gICAgICBpbWcgPSBcIlNub3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjAyOlxuICAgICAgd2VhdGhlciA9IFwiSGVhdnkgc25vd1wiO1xuICAgICAgaW1nID0gXCJTbm93XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDYxMTpcbiAgICAgIHdlYXRoZXIgPSBcIlNsZWV0XCI7XG4gICAgICBpbWcgPSBcIlNub3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjEyOlxuICAgICAgd2VhdGhlciA9IFwiTGlnaHQgc2hvd2VyIHNsZWV0XCI7XG4gICAgICBpbWcgPSBcIlNub3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjEzOlxuICAgICAgd2VhdGhlciA9IFwiU2hvd2VyIHNsZWV0XCI7XG4gICAgICBpbWcgPSBcIlNub3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjE1OlxuICAgICAgd2VhdGhlciA9IFwiTGlnaHQgcmFpbiBhbmQgc25vd1wiO1xuICAgICAgaW1nID0gXCJTbm93XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDYxNjpcbiAgICAgIHdlYXRoZXIgPSBcIlJhaW4gYW5kIHNub3dcIjtcbiAgICAgIGltZyA9IFwiU25vd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA2MjA6XG4gICAgICB3ZWF0aGVyID0gXCJMaWdodCBzaG93ZXIgc25vd1wiO1xuICAgICAgaW1nID0gXCJTbm93XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDYyMTpcbiAgICAgIHdlYXRoZXIgPSBcIlNob3dlciBzbm93XCI7XG4gICAgICBpbWcgPSBcIlNub3dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNjIyOlxuICAgICAgd2VhdGhlciA9IFwiSGVhdnkgc2hvd2VyIHNub3dcIjtcbiAgICAgIGltZyA9IFwiU25vd1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3MDE6XG4gICAgICB3ZWF0aGVyID0gXCJNaXN0XCI7XG4gICAgICBpbWcgPSBcIkZvZ1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3MTE6XG4gICAgICB3ZWF0aGVyID0gXCJTbW9rZVwiO1xuICAgICAgaW1nID0gXCJTbW9rZVwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3MjE6XG4gICAgICB3ZWF0aGVyID0gXCJIYXplXCI7XG4gICAgICBpbWcgPSBcIkhhemVcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzMxOlxuICAgICAgd2VhdGhlciA9IFwiRHVzdFwiO1xuICAgICAgaW1nID0gXCJEdXN0XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc0MTpcbiAgICAgIHdlYXRoZXIgPSBcIkZvZ1wiO1xuICAgICAgaW1nID0gXCJGb2dcIjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgNzUxOlxuICAgICAgd2VhdGhlciA9IFwiU2FuZFwiO1xuICAgICAgaW1nID0gXCJEdXN0XCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc2MTpcbiAgICAgIHdlYXRoZXIgPSBcIkR1c3RcIjtcbiAgICAgIGltZyA9IFwiRHVzdFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3NjI6XG4gICAgICB3ZWF0aGVyID0gXCJBc2hcIjtcbiAgICAgIGltZyA9IFwiQXNoXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDc3MTpcbiAgICAgIHdlYXRoZXIgPSBcIlNxdWFsbHNcIjtcbiAgICAgIGltZyA9IFwiV2luZFwiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA3ODE6XG4gICAgICB3ZWF0aGVyID0gXCJUb3JuYWRvXCI7XG4gICAgICBpbWcgPSBcIlN0b3JtXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDgwMDpcbiAgICAgIHdlYXRoZXIgPSBcIkNsZWFyXCI7XG4gICAgICBpbWcgPSBcIkNsZWFyXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDgwMTpcbiAgICAgIHdlYXRoZXIgPSBcIkZldyBjbG91ZHM6IDExLTI1JSBcIjtcbiAgICAgIGltZyA9IFwiTENsb3Vkc1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA4MDI6XG4gICAgICB3ZWF0aGVyID0gXCJTY2F0dGVyZWQgY2xvdWRzOiAyNS01MCVcIjtcbiAgICAgIGltZyA9IFwiTENsb3Vkc1wiO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSA4MDM6XG4gICAgICB3ZWF0aGVyID0gXCJCcm9rZW4gY2xvdWRzOiA1MS04NCVcIjtcbiAgICAgIGltZyA9IFwiQ2xvdWRzXCI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIDgwNDpcbiAgICAgIHdlYXRoZXIgPSBcIm92ZXJjYXN0IGNsb3VkczogODUtMTAwJVwiO1xuICAgICAgaW1nID0gXCJDbG91ZHNcIjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB3ZWF0aGVyID0gXCJFcnJvciEgQ291bGRuJ3QgZmluZCB3ZWF0aGVyIGNvZGUuXCI7XG4gICAgICBpbWcgPSBcIkNsZWFyXCI7XG4gIH1cbiAgcmV0dXJuIFt3ZWF0aGVyLCBpbWddO1xufTtcblxuZXhwb3J0IHsgZ2V0RGVzY3JpcHRpb24gfTtcbiIsImltcG9ydCB7IGNhcmRPYmplY3RzLCBkaXNwbGF5T2JqZWN0cywgZXJyb3JzIH0gZnJvbSBcIi4vZGlzcGxheU9iamVjdHNcIjtcbmltcG9ydCB7IHByb2Nlc3NJbnB1dCB9IGZyb20gXCIuL2FwcFwiO1xuaW1wb3J0IHsgZ2V0RGVzY3JpcHRpb24gfSBmcm9tIFwiLi9nZXREZXNjcmlwdGlvblwiO1xuaW1wb3J0IHsgZHJhd0NhcmQgfSBmcm9tIFwiLi9kcmF3Q2FyZFwiO1xuaW1wb3J0IHsgY29tcG9uZW50RmFjdG9yeSB9IGZyb20gXCIuL2NvbXBvbmVudEZhY3RvcnlcIjtcbmltcG9ydCB7IHNldEJhY2tncm91bmQgfSBmcm9tIFwiLi9zZXRCYWNrZ3JvdW5kXCI7XG5pbXBvcnQge1xuICByb3VuZFRlbXAsXG4gIGNvbnZlcnRUaW1lcyxcbiAgY29udmVydFRlbXBzLFxuICBjb252ZXJ0VmlzLFxuICBjb252ZXJ0V2luZCxcbiAgY29udmVydEZyb21LZWx2aW4sXG4gIGNvbnZlcnRUaW1lc0Zyb21Vbml4LFxufSBmcm9tIFwiLi9jb252ZXJzaW9uc1wiO1xuXG5jb25zdCBidWlsZEludGVyZmFjZSA9ICgpID0+IHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNwbGF5T2JqZWN0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGVsZW1lbnQgPSBkaXNwbGF5T2JqZWN0c1tpXTtcbiAgICBjb21wb25lbnRGYWN0b3J5KGVsZW1lbnQpO1xuICB9XG4gIGFkZExpc3RlbmVycygpO1xufTtcblxuY29uc3QgdG9nZ2xlVW5pdHMgPSAoKSA9PiB7XG4gIGNvbnN0IHVuaXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50ZW1wLXVuaXRcIik7XG4gIGlmICh1bml0c1swXS50ZXh0Q29udGVudCA9PT0gXCLCsENcIikge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdW5pdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHVuaXRzW2ldLnRleHRDb250ZW50ID0gXCLCsEZcIjtcbiAgICB9XG4gICAgY29udmVydFRlbXBzKDApO1xuICAgIGNvbnZlcnRUaW1lcygxKTtcbiAgICBjb252ZXJ0V2luZCgwKTtcbiAgICBjb25zdCB2aXNUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIudmlzLXRpdGxlXCIpO1xuICAgIHZpc1RpdGxlLnRleHRDb250ZW50ID0gXCJWaXNpYmlsaXR5ICh5YXJkcylcIjtcbiAgICBjb25zdCB2aXNpYmlsaXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXNcIikudGV4dENvbnRlbnQ7XG4gICAgY29udmVydFZpcyh2aXNpYmlsaXR5LCAwKTtcbiAgfSBlbHNlIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHVuaXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB1bml0c1tpXS50ZXh0Q29udGVudCA9IFwiwrBDXCI7XG4gICAgfVxuICAgIGNvbnZlcnRUZW1wcygxKTtcbiAgICBjb252ZXJ0VGltZXMoMCk7XG4gICAgY29udmVydFdpbmQoMSk7XG4gICAgY29uc3QgdmlzVGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpcy10aXRsZVwiKTtcbiAgICB2aXNUaXRsZS50ZXh0Q29udGVudCA9IFwiVmlzaWJpbGl0eSAobWV0ZXJzKVwiO1xuICAgIGNvbnN0IHZpc2liaWxpdHkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnZpc1wiKS50ZXh0Q29udGVudDtcbiAgICBjb252ZXJ0VmlzKHZpc2liaWxpdHksIDEpO1xuICB9XG59O1xuXG5jb25zdCB0cmltRGF0ZVRpbWUgPSAoZGF0ZVRpbWUpID0+IHtcbiAgXG59XG5jb25zdCBwb3B1bGF0ZUZvcmVjYXN0Q2FyZCA9IChmb3JlY2FzdCwgaSwgb2Zmc2V0KSA9PiB7XG4gIGNvbnNvbGUubG9nKFwicG9wdWxhdGVGb3JlY2FzdENhcmQhIGZvcmVjYXN0LCBpLCBvZmZzZXQgaXNcIiwgZm9yZWNhc3QsIGksIG9mZnNldCk7XG4gIGNvbnN0IGZvcmVjYXN0U3VtbWFyeSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JlY2FzdC1zdW1tYXJ5JHtpfWApO1xuICBjb25zdCBmb3JlY2FzdFRlbXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3QtdGVtcCR7aX1gKTtcbiAgY29uc3QgZm9yZWNhc3RIdW1pZGl0eSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5mb3JlY2FzdC1odW1pZGl0eSR7aX1gKTtcbiAgY29uc3QgZm9yZWNhc3RUaW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLmZvcmVjYXN0LXRpbWUke2l9YCk7XG4gIGNvbnN0IGZvcmVjYXN0Q291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZm9yZWNhc3QtY291bnQke2l9YCk7XG4gIGZvcmVjYXN0U3VtbWFyeS50ZXh0Q29udGVudCA9IGZvcmVjYXN0LndlYXRoZXJbMF0ubWFpbjtcbiAgZm9yZWNhc3RUZW1wLnRleHRDb250ZW50ID0gY29udmVydEZyb21LZWx2aW4oZm9yZWNhc3QubWFpbi50ZW1wKTtcbiAgZm9yZWNhc3RIdW1pZGl0eS50ZXh0Q29udGVudCA9IGZvcmVjYXN0Lm1haW4uaHVtaWRpdHk7XG4gIGNvbnN0IHsgZHQgfSA9IGZvcmVjYXN0O1xuICBjb25zdCBmb3JlY2FzdFRpbWUyNGggPSBjb252ZXJ0VGltZXNGcm9tVW5peChkdCwgb2Zmc2V0KTtcbiAgZm9yZWNhc3RUaW1lLnRleHRDb250ZW50ID0gZm9yZWNhc3RUaW1lMjRoO1xuICBpZiAoaSA9PT0gMCkge1xuICAgIGNvbnNvbGUubG9nKCdmb3JlY2FzdENvdW50IGlzJywgZm9yZWNhc3RDb3VudCk7XG4gICAgZm9yZWNhc3RDb3VudC50ZXh0Q29udGVudCA9ICdGaXJzdCBmb3JlY2FzdCc7XG4gIH0gZWxzZSB7XG4gICAgbGV0IGhvdXJzID0gaSAqIDM7XG4gICAgaWYgKGhvdXJzIDwgMjQpIHtcbiAgICAgIGZvcmVjYXN0Q291bnQudGV4dENvbnRlbnQgPSBgKyAke2hvdXJzfSBob3Vyc2A7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxldCBkYXlzID0gaG91cnMgLyAyNDtcbiAgICAgIC8vY29uc3QgcmVtYWluZGVyID0gMjQgJSBob3VycztcbiAgICAgIGNvbnNvbGUubG9nKCdkYXlzIGlzJywgZGF5cyk7XG4gICAgICAvL2NvbnNvbGUubG9nKCdyZW1haW5kZXIgaXMnLCByZW1haW5kZXIpO1xuICAgICAgY29uc3QgZGF5c1JlbWFpbmRlciA9IGRheXMgJSAxO1xuICAgICAgY29uc3QgZGF5c1JvdW5kZWQgPSBkYXlzIC0gZGF5c1JlbWFpbmRlcjtcbiAgICAgIGNvbnNvbGUubG9nKCdkYXlzUm91bmRlZCBpcycsIGRheXNSb3VuZGVkKTtcbiAgICAgIGZvcmVjYXN0Q291bnQudGV4dENvbnRlbnQgPSBgKyAke2RheXNSb3VuZGVkfSBkYXlzYDtcbiAgICB9XG4gICAgXG4gICAgY29uc29sZS5sb2coJ2hvdXJzIGlzJywgaG91cnMpO1xuXG4gIH1cbn07XG5cbmNvbnN0IGRyYXdGb3JlY2FzdENhcmQgPSAoZm9yZWNhc3QsIGksIG9mZnNldCkgPT4ge1xuICBjb25zdCB7XG4gICAgZm9yZWNhc3RDYXJkLFxuICAgIGZvcmVjYXN0VGltZSxcbiAgICBmb3JlY2FzdFRlbXAsXG4gICAgZm9yZWNhc3REZXNjcmlwdGlvbixcbiAgICBmb3JlY2FzdEh1bWlkaXR5LFxuICAgIHRlbXBDb250YWluZXIsXG4gICAgdGVtcFVuaXRzLFxuICAgIGZvcmVjYXN0Q291bnQsXG4gIH0gPSBjYXJkT2JqZWN0cztcbiAgY29uc29sZS5sb2coXCJkcmF3Rm9yZWNhc3RDYXJkLiBmb3JlY2FzdCwgaSBpc1wiLCBmb3JlY2FzdCwgaSk7XG4gIGZvcmVjYXN0Q2FyZC5jbGFzczIgPSBgZm9yZWNhc3Qke2l9YDtcbiAgY29tcG9uZW50RmFjdG9yeShmb3JlY2FzdENhcmQpO1xuICBmb3JlY2FzdFRpbWUuY2xhc3MyID0gYGZvcmVjYXN0LXRpbWUke2l9YDtcbiAgZm9yZWNhc3RUaW1lLnBhcmVudCA9IGAuZm9yZWNhc3Qke2l9YDtcbiAgZm9yZWNhc3RUZW1wLmNsYXNzMiA9IGBmb3JlY2FzdC10ZW1wJHtpfWA7XG4gIGZvcmVjYXN0VGVtcC5wYXJlbnQgPSBgLmZvcmVjYXN0LXRlbXAtY29udGFpbmVyJHtpfWA7XG4gIGZvcmVjYXN0SHVtaWRpdHkuY2xhc3MyID0gYGZvcmVjYXN0LWh1bWlkaXR5JHtpfWA7XG4gIGZvcmVjYXN0SHVtaWRpdHkucGFyZW50ID0gYC5mb3JlY2FzdCR7aX1gO1xuICBmb3JlY2FzdERlc2NyaXB0aW9uLmNsYXNzMiA9IGBmb3JlY2FzdC1zdW1tYXJ5JHtpfWA7XG4gIGZvcmVjYXN0RGVzY3JpcHRpb24ucGFyZW50ID0gYC5mb3JlY2FzdCR7aX1gO1xuICB0ZW1wVW5pdHMuY2xhc3MyID0gYGZvcmVjYXN0LXRlbXAtdW5pdHMke2l9YDtcbiAgdGVtcFVuaXRzLnBhcmVudCA9IGAuZm9yZWNhc3QtdGVtcC1jb250YWluZXIke2l9YDtcbiAgdGVtcENvbnRhaW5lci5wYXJlbnQgPSBgLmZvcmVjYXN0JHtpfWA7XG4gIHRlbXBDb250YWluZXIuY2xhc3MyICA9IGBmb3JlY2FzdC10ZW1wLWNvbnRhaW5lciR7aX1gO1xuICBmb3JlY2FzdENvdW50LnBhcmVudCA9IGAuZm9yZWNhc3Qke2l9YDtcbiAgZm9yZWNhc3RDb3VudC5jbGFzczIgID0gYGZvcmVjYXN0LWNvdW50JHtpfWA7XG4gIGNvbXBvbmVudEZhY3RvcnkoZm9yZWNhc3REZXNjcmlwdGlvbik7XG4gIGNvbXBvbmVudEZhY3RvcnkodGVtcENvbnRhaW5lcik7XG4gIGNvbXBvbmVudEZhY3RvcnkoZm9yZWNhc3RUZW1wKTtcbiAgY29tcG9uZW50RmFjdG9yeSh0ZW1wVW5pdHMpO1xuICBjb21wb25lbnRGYWN0b3J5KGZvcmVjYXN0SHVtaWRpdHkpO1xuICBjb21wb25lbnRGYWN0b3J5KGZvcmVjYXN0VGltZSk7XG4gIGNvbXBvbmVudEZhY3RvcnkoZm9yZWNhc3RDb3VudCk7XG4gIHBvcHVsYXRlRm9yZWNhc3RDYXJkKGZvcmVjYXN0LCBpLCBvZmZzZXQpO1xufTtcblxuY29uc3QgcG9wdWxhdGVGb3JlY2FzdHMgPSAoZm9yZWNhc3RzLCBvZmZzZXQpID0+IHtcbiAgY29uc29sZS5sb2coXCJwb3B1bGF0ZUZvcmVjYXN0cyEgZm9yZWNhc3RzIGlzXCIsIGZvcmVjYXN0cyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZm9yZWNhc3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgZWxlbWVudCA9IGZvcmVjYXN0c1tpXTtcbiAgICBkcmF3Rm9yZWNhc3RDYXJkKGVsZW1lbnQsIGksIG9mZnNldCk7XG4gIH1cbn07XG5cbmNvbnN0IHBvcHVsYXRlQ2FyZCA9IGFzeW5jICgpID0+IHtcbiAgY29uc29sZS5sb2coXCJwb3B1bGF0ZUNhcmQhXCIpO1xuICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgZ2V0SW5wdXQoKTtcbiAgY29uc29sZS5sb2coXCJwb3B1bGF0ZUNhcmQhIHdlYXRoZXIgaXNcIiwgd2VhdGhlcik7XG4gIGlmICh0eXBlb2Ygd2VhdGhlciA9PT0gXCJudW1iZXJcIikge1xuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndlYXRoZXItY2FyZFwiKSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53ZWF0aGVyLWNhcmRcIikucmVtb3ZlKCk7XG4gICAgfVxuICAgIGlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmVycm9yXCIpLnJlbW92ZSgpO1xuICAgIH1cbiAgICBpZiAod2VhdGhlciA9PT0gNDA0KSB7XG4gICAgICBjb21wb25lbnRGYWN0b3J5KGVycm9yc1s0MDRdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29tcG9uZW50RmFjdG9yeShlcnJvcnNbNTIwXSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGRyYXdDYXJkKCk7XG4gICAgZG9jdW1lbnRcbiAgICAgIC5xdWVyeVNlbGVjdG9yKFwiLnRvZ2dsZS11bml0c1wiKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCB0b2dnbGVVbml0cyk7XG4gICAgd2VhdGhlci51bml0cyA9IDA7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiLmxvY2F0aW9uXCJcbiAgICApLnRleHRDb250ZW50ID0gYCR7d2VhdGhlci5wbGFjZU5hbWV9LCAke3dlYXRoZXIuY291bnRyeX1gO1xuICAgIGNvbnN0IGFpclRlbXBSb3VuZGVkID0gcm91bmRUZW1wKHdlYXRoZXIuYWlyVGVtcCk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi50ZW1wXCIpLnRleHRDb250ZW50ID0gYWlyVGVtcFJvdW5kZWQ7XG4gICAgY29uc3Qgc3VucmlzZSA9IHdlYXRoZXIuc3VucmlzZVRpbWU7XG4gICAgY29uc3Qgc3Vuc2V0ID0gd2VhdGhlci5zdW5zZXRUaW1lO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZ2V0RGVzY3JpcHRpb24od2VhdGhlci5pZCk7XG4gICAgc2V0QmFja2dyb3VuZChkZXNjcmlwdGlvblsxXSk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdW5yaXNlXCIpLnRleHRDb250ZW50ID0gc3VucmlzZTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1bnNldFwiKS50ZXh0Q29udGVudCA9IHN1bnNldDtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRlc2NyaXB0aW9uXCIpLnRleHRDb250ZW50ID0gZGVzY3JpcHRpb25bMF07XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5odW1pZGl0eVwiKS50ZXh0Q29udGVudCA9IHdlYXRoZXIuaHVtaWRpdHk7XG4gICAgY29uc3QgbWF4Um91bmRlZCA9IHJvdW5kVGVtcCh3ZWF0aGVyLnRlbXBNYXgpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaGlnaFwiKS50ZXh0Q29udGVudCA9IG1heFJvdW5kZWQ7XG4gICAgY29uc3QgbWluUm91bmRlZCA9IHJvdW5kVGVtcCh3ZWF0aGVyLnRlbXBNaW4pO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubG93XCIpLnRleHRDb250ZW50ID0gbWluUm91bmRlZDtcbiAgICBjb25zdCBmZWVsc1JvdW5kZWQgPSByb3VuZFRlbXAod2VhdGhlci5mZWVsc0xpa2UpO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZmVlbHNMaWtlXCIpLnRleHRDb250ZW50ID0gZmVlbHNSb3VuZGVkO1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvdWRzXCIpLnRleHRDb250ZW50ID0gd2VhdGhlci5jbG91ZHM7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcmVzc3VyZVwiKS50ZXh0Q29udGVudCA9IHdlYXRoZXIucHJlc3N1cmU7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi52aXNcIikudGV4dENvbnRlbnQgPSB3ZWF0aGVyLnZpc2liaWxpdHk7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53aW5kLWRpclwiKS50ZXh0Q29udGVudCA9IHdlYXRoZXIud2luZFsxXVswXTtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLndpbmQtc3BlZWRcIikudGV4dENvbnRlbnQgPSB3ZWF0aGVyLndpbmRbMF07XG4gICAgcG9wdWxhdGVGb3JlY2FzdHMod2VhdGhlci5mb3JlY2FzdCwgd2VhdGhlci5vZmZzZXQpO1xuICAgIGNvbnN0IHRlbXBVbml0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIudGVtcC11bml0XCIpO1xuICAgIGlmICh3ZWF0aGVyLnVuaXRzID09PSAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlbXBVbml0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICB0ZW1wVW5pdHNbaV0udGV4dENvbnRlbnQgPSBcIsKwQ1wiO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuY29uc3QgZ2V0SW5wdXQgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHRvd25DaXR5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmxvY2F0aW9uLWlucHV0XCIpO1xuICBjb25zdCB0b3duQ2l0eVZhbHVlID0gdG93bkNpdHlJbnB1dC52YWx1ZTtcbiAgY29uc3QgY291bnRyeVNlbGVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY3JzLWNvdW50cnlcIik7XG4gIGNvbnN0IGNvdW50cnlTZWxlY3RWYWx1ZSA9IGNvdW50cnlTZWxlY3QudmFsdWU7XG4gIGxldCBzdGF0ZVNlbGVjdFZhbHVlO1xuICBsZXQgd2VhdGhlck9iamVjdDtcbiAgaWYgKGNvdW50cnlTZWxlY3RWYWx1ZSA9PT0gXCJVU1wiKSB7XG4gICAgc3RhdGVTZWxlY3RWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdGUtaW5wdXRcIikudmFsdWU7XG4gICAgd2VhdGhlck9iamVjdCA9IGF3YWl0IHByb2Nlc3NJbnB1dChbXG4gICAgICB0b3duQ2l0eVZhbHVlLFxuICAgICAgY291bnRyeVNlbGVjdFZhbHVlLFxuICAgICAgc3RhdGVTZWxlY3RWYWx1ZSxcbiAgICBdKTtcbiAgICBjb25zb2xlLmxvZyhcIndlYXRoZXJPYmplY3QgaXNcIiwgd2VhdGhlck9iamVjdCk7XG4gICAgcmV0dXJuIHdlYXRoZXJPYmplY3Q7XG4gIH1cbiAgd2VhdGhlck9iamVjdCA9IGF3YWl0IHByb2Nlc3NJbnB1dChbdG93bkNpdHlWYWx1ZSwgY291bnRyeVNlbGVjdFZhbHVlXSk7XG4gIGNvbnNvbGUubG9nKFwid2VhdGhlck9iamVjdCBpc1wiLCB3ZWF0aGVyT2JqZWN0KTtcbiAgcmV0dXJuIHdlYXRoZXJPYmplY3Q7XG59O1xuXG5jb25zdCBzaG93U3RhdGVpZlVTID0gKCkgPT4ge1xuICBjb25zdCBjb3VudHJ5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jcnMtY291bnRyeVwiKTtcbiAgY29uc29sZS5sb2coXCJjb3VudHJ5IGlzXCIsIGNvdW50cnksIFwidmFsdWUgaXNcIiwgY291bnRyeS52YWx1ZSk7XG4gIGlmIChjb3VudHJ5LnZhbHVlID09IFwiVVNcIikge1xuICAgIGNvbnN0IHN0YXRlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN0YXRlLWlucHV0XCIpO1xuICAgIHN0YXRlSW5wdXQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuICBpZiAoY291bnRyeS52YWx1ZSAhPT0gXCJVU1wiKSB7XG4gICAgY29uc3Qgc3RhdGVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuc3RhdGUtaW5wdXRcIik7XG4gICAgc3RhdGVJbnB1dC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICB9XG59O1xuXG5jb25zdCBhZGRMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGRvY3VtZW50XG4gICAgLnF1ZXJ5U2VsZWN0b3IoXCIubG9jYXRpb24tc3VibWl0XCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBwb3B1bGF0ZUNhcmQpO1xuICBkb2N1bWVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNycy1jb3VudHJ5XCIpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93U3RhdGVpZlVTKTtcbn07XG5cbmV4cG9ydCB7IGJ1aWxkSW50ZXJmYWNlIH07XG4iLCJpbXBvcnQgeyBhcGlLZXkgfSBmcm9tIFwiLi9hcGlrZXlcIjtcblxuY29uc3Qgb2J0YWluV2VhdGhlciA9IGFzeW5jIChsb2NhdGlvbikgPT4ge1xuICBjb25zb2xlLmxvZygnb2J0YWluV2VhdGhlciEgbG9jYXRpb24gaXMnLCBsb2NhdGlvbik7XG4gIHRyeSB7XG4gICAgbGV0IGZldGNoQ29vcmRzO1xuICAgIGlmIChsb2NhdGlvblsyXSkge1xuICAgICAgZmV0Y2hDb29yZHMgPSBhd2FpdCBmZXRjaCAoXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9uWzBdfSwke2xvY2F0aW9uWzJdfSwke2xvY2F0aW9uWzFdfSZsaW1pdD01JmFwcGlkPSR7YXBpS2V5fWAsXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZmV0Y2hDb29yZHMgPSBhd2FpdCBmZXRjaCAoXG4gICAgICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2F0aW9uWzBdfSwke2xvY2F0aW9uWzFdfSZsaW1pdD01JmFwcGlkPSR7YXBpS2V5fWAsXG4gICAgICAgIHtcbiAgICAgICAgICBtb2RlOiBcImNvcnNcIixcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgcmVtb3RlQ29vcmRzID0gYXdhaXQgZmV0Y2hDb29yZHMuanNvbigpO1xuICAgIGNvbnNvbGUubG9nKCdyZW1vdGVDb29yZHMgaXMnLCByZW1vdGVDb29yZHMpO1xuICAgIFxuICAgIGNvbnN0IGZldGNoRm9yZWNhc3QgPSBhd2FpdCBmZXRjaCAoXG4gICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L2ZvcmVjYXN0P2xhdD0ke3JlbW90ZUNvb3Jkc1swXS5sYXR9Jmxvbj0ke3JlbW90ZUNvb3Jkc1swXS5sb259JkFQUElEPSR7YXBpS2V5fWAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBcbiAgICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGF3YWl0IGZldGNoKFxuICAgICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke3JlbW90ZUNvb3Jkc1swXS5sYXR9Jmxvbj0ke3JlbW90ZUNvb3Jkc1swXS5sb259JkFQUElEPSR7YXBpS2V5fWAsXG4gICAgICB7XG4gICAgICAgIG1vZGU6IFwiY29yc1wiLFxuICAgICAgfVxuICAgICk7XG5cbiAgICBcbiAgICBcbiAgICBjb25zdCB3ZWF0aGVyID0gYXdhaXQgY3VycmVudFdlYXRoZXIuanNvbigpO1xuICAgIC8vIGNvbnNvbGUubG9nKCd3ZWF0aGVyIGlzJywgd2VhdGhlcik7XG4gICAgY29uc3QgZm9yZWNhc3QgPSBhd2FpdCBmZXRjaEZvcmVjYXN0Lmpzb24oKTtcbiAgICAvLyBjb25zb2xlLmxvZygnZm9yZWNhc3QgaXMnLCBmb3JlY2FzdCk7XG4gICAgd2VhdGhlci5mb3JlY2FzdCA9IGZvcmVjYXN0Lmxpc3Q7XG4gICAgXG4gICAgXG4gICAgaWYgKHdlYXRoZXIuY29kID09PSBcIjQwNFwiKSB7XG4gICAgICByZXR1cm4gNDA0O1xuICAgIH1cbiAgICBjb25zb2xlLmxvZygnd2VhdGhlciBpcycsIHdlYXRoZXIpO1xuICAgIHJldHVybiB3ZWF0aGVyO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiA1MjA7XG4gIH1cbn07XG5cbmV4cG9ydCB7IG9idGFpbldlYXRoZXIgfTtcbiIsImltcG9ydCBBc2ggZnJvbSBcIi4vaW1hZ2VzL2FzaC5qcGdcIjtcbmltcG9ydCBDbGVhciBmcm9tIFwiLi9pbWFnZXMvY2xlYXIuanBnXCI7XG5pbXBvcnQgQ2xvdWRzIGZyb20gXCIuL2ltYWdlcy9jbG91ZHMuanBnXCI7XG5pbXBvcnQgRHVzdCBmcm9tIFwiLi9pbWFnZXMvZHVzdC5qcGdcIjtcbmltcG9ydCBGb2cgZnJvbSBcIi4vaW1hZ2VzL2ZvZy5qcGdcIjtcbmltcG9ydCBIYXplIGZyb20gXCIuL2ltYWdlcy9oYXplLmpwZ1wiO1xuaW1wb3J0IExDbG91ZHMgZnJvbSBcIi4vaW1hZ2VzL2xjbG91ZHMuanBnXCI7XG5pbXBvcnQgUmFpbiBmcm9tIFwiLi9pbWFnZXMvcmFpbi5qcGdcIjtcbmltcG9ydCBTbW9rZSBmcm9tIFwiLi9pbWFnZXMvc21va2UuanBnXCI7XG5pbXBvcnQgU25vdyBmcm9tIFwiLi9pbWFnZXMvc25vdy5qcGdcIjtcbmltcG9ydCBTdG9ybSBmcm9tIFwiLi9pbWFnZXMvc3Rvcm0uanBnXCI7XG5pbXBvcnQgV2luZCBmcm9tIFwiLi9pbWFnZXMvd2luZC5qcGdcIjtcblxuY29uc3Qgc2V0QmFja2dyb3VuZCA9IChpbWcpID0+IHtcbiAgY29uc3QgY2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIud2VhdGhlci1jYXJkXCIpO1xuICBsZXQgaW1nU3RyO1xuICBzd2l0Y2ggKGltZykge1xuICAgIGNhc2UgXCJBc2hcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7QXNofScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNsZWFyXCI6XG4gICAgICBpbWdTdHIgPSBgdXJsKCcke0NsZWFyfScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkNsb3Vkc1wiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtDbG91ZHN9JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiRHVzdFwiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtEdXN0fScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkZvZ1wiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtGb2d9JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiSGF6ZVwiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtIYXplfScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIkxDbG91ZHNcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7TENsb3Vkc30nKWA7XG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGltZ1N0cjtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJSYWluXCI6XG4gICAgICBpbWdTdHIgPSBgdXJsKCcke1JhaW59JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiU21va2VcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7U21va2V9JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiU3Rvcm1cIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7U3Rvcm19JylgO1xuICAgICAgY2FyZC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBpbWdTdHI7XG4gICAgICBicmVhaztcbiAgICBjYXNlIFwiU25vd1wiOlxuICAgICAgaW1nU3RyID0gYHVybCgnJHtTbm93fScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIldpbmRcIjpcbiAgICAgIGltZ1N0ciA9IGB1cmwoJyR7V2luZH0nKWA7XG4gICAgICBjYXJkLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGltZ1N0cjtcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpbWdTdHIgPSBgdXJsKCcke0NsZWFyfScpYDtcbiAgICAgIGNhcmQuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gaW1nU3RyO1xuICB9XG59O1xuXG5leHBvcnQgeyBzZXRCYWNrZ3JvdW5kIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiLyogaW1wb3J0IHsgdGVzdCB9IGZyb20gXCIuL2FwcFwiOyAqL1xuaW1wb3J0IFwiLi9zdHlsZS5jc3NcIjtcbmltcG9ydCB7IGJ1aWxkSW50ZXJmYWNlIH0gZnJvbSBcIi4vaW50ZXJmYWNlXCI7XG5cbi8qIGNvbnN0IHJ1blRlc3QgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHJlc3VsdCA9IGF3YWl0IHRlc3QoKTtcbiAgY29uc29sZS5sb2coXCJyZXN1bHQgaXNcIiwgcmVzdWx0KTtcbn07XG5cbnJ1blRlc3QoKTsgKi9cbmJ1aWxkSW50ZXJmYWNlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=