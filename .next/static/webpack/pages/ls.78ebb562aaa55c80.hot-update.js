"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/ls",{

/***/ "./components/searchbar.js":
/*!*********************************!*\
  !*** ./components/searchbar.js ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_google_places_autocomplete__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-google-places-autocomplete */ \"./node_modules/react-google-places-autocomplete/build/index.es.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"/Users/cheny39/Documents/work/tmp/tikfood/components/searchbar.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst Container = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div.withConfig({\n  displayName: \"searchbar__Container\",\n  componentId: \"sc-1xiluqm-0\"\n})({});\n\n_c = Container;\n\nfunction Search(props) {\n  _s();\n\n  const {\n    0: searchTerm,\n    1: setSearchTerm\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');\n\n  const handleSearch = searchTerm => {\n    props.handleSearch(searchTerm);\n  };\n\n  const updateSearch = e => {\n    setSearchTerm(e.target.value);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"form\", {\n      action: \"search\",\n      class: \"home_search_form\",\n      id: \"home_search_form\",\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n        class: \"d-flex flex-lg-row flex-column align-items-start justify-content-lg-between justify-content-start\",\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"span\", {\n          class: \"search_input_word\",\n          children: \"Near\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 10\n        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"button\", {\n          class: \"home_search_button\",\n          disabled: searchTerm == null || searchTerm == \"\",\n          onClick: event => handleSearch(event),\n          children: \"search\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 27,\n          columnNumber: 10\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 6\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 23,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Search, \"YAxLNde9buDBdNo+a8YOFgSd3e4=\");\n\n_c2 = Search;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Search);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Search\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NlYXJjaGJhci5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7QUFHQyxNQUFNRyxTQUFTLEdBQUdDLHdFQUFIO0VBQUE7RUFBQTtBQUFBLEdBQVMsRUFBVCxDQUFmOztLQUFNRDs7QUFFUCxTQUFTRyxNQUFULENBQWdCQyxLQUFoQixFQUF1QjtFQUFBOztFQUd2QixNQUFNO0lBQUEsR0FBQ0MsVUFBRDtJQUFBLEdBQVlDO0VBQVosSUFBNkJSLCtDQUFRLENBQUMsRUFBRCxDQUEzQzs7RUFFQSxNQUFNUyxZQUFZLEdBQUVGLFVBQUQsSUFBZTtJQUM5QkQsS0FBSyxDQUFDRyxZQUFOLENBQW1CRixVQUFuQjtFQUNGLENBRkY7O0VBSUEsTUFBTUcsWUFBWSxHQUFJQyxDQUFELElBQU87SUFDMUJILGFBQWEsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBYjtFQUNELENBRkQ7O0VBTUUsb0JBQ0UsOERBQUMsU0FBRDtJQUFBLHVCQUNDO01BQU0sTUFBTSxFQUFDLFFBQWI7TUFBc0IsS0FBSyxFQUFDLGtCQUE1QjtNQUErQyxFQUFFLEVBQUMsa0JBQWxEO01BQUEsdUJBQ0c7UUFBSyxLQUFLLEVBQUMsbUdBQVg7UUFBQSx3QkFDQztVQUFNLEtBQUssRUFBQyxtQkFBWjtVQUFBO1FBQUE7VUFBQTtVQUFBO1VBQUE7UUFBQSxRQURELGVBRUM7VUFBUSxLQUFLLEVBQUMsb0JBQWQ7VUFBb0MsUUFBUSxFQUFFTixVQUFVLElBQUUsSUFBWixJQUFrQkEsVUFBVSxJQUFFLEVBQTVFO1VBQWdGLE9BQU8sRUFBR08sS0FBRCxJQUFTTCxZQUFZLENBQUNLLEtBQUQsQ0FBOUc7VUFBQTtRQUFBO1VBQUE7VUFBQTtVQUFBO1FBQUEsUUFGRDtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUE7SUFESDtNQUFBO01BQUE7TUFBQTtJQUFBO0VBREQ7SUFBQTtJQUFBO0lBQUE7RUFBQSxRQURGO0FBV0Q7O0dBMUJRVDs7TUFBQUE7QUE2QlQsK0RBQWVBLE1BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWFyY2hiYXIuanM/OWUxMSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QseyB1c2VTdGF0ZSB9ZnJvbSAncmVhY3QnO1xuaW1wb3J0IEdvb2dsZVBsYWNlc0F1dG9jb21wbGV0ZSBmcm9tICdyZWFjdC1nb29nbGUtcGxhY2VzLWF1dG9jb21wbGV0ZSc7XG5pbXBvcnQgdHcgZnJvbSBcInR3aW4ubWFjcm9cIjtcblxuIGNvbnN0IENvbnRhaW5lciA9IHR3LmRpdmBgO1xuXG5mdW5jdGlvbiBTZWFyY2gocHJvcHMpIHtcblxuXG5jb25zdCBbc2VhcmNoVGVybSxzZXRTZWFyY2hUZXJtXSA9IHVzZVN0YXRlKCcnKTtcbiBcbmNvbnN0IGhhbmRsZVNlYXJjaD0oc2VhcmNoVGVybSk9PiB7XG4gICAgcHJvcHMuaGFuZGxlU2VhcmNoKHNlYXJjaFRlcm0pO1xuIH1cbiBcbmNvbnN0IHVwZGF0ZVNlYXJjaCA9IChlKSA9PiB7XG5cdFx0c2V0U2VhcmNoVGVybShlLnRhcmdldC52YWx1ZSk7XG59O1xuXG5cblxuICByZXR1cm4gKFxuICBcdFx0PENvbnRhaW5lcj5cbiAgXHRcdFx0PGZvcm0gYWN0aW9uPVwic2VhcmNoXCIgY2xhc3M9XCJob21lX3NlYXJjaF9mb3JtXCIgaWQ9XCJob21lX3NlYXJjaF9mb3JtXCI+XG5cdFx0XHRcdFx0XHRcdFx0PGRpdiBjbGFzcz1cImQtZmxleCBmbGV4LWxnLXJvdyBmbGV4LWNvbHVtbiBhbGlnbi1pdGVtcy1zdGFydCBqdXN0aWZ5LWNvbnRlbnQtbGctYmV0d2VlbiBqdXN0aWZ5LWNvbnRlbnQtc3RhcnRcIj5cblx0XHRcdFx0XHRcdFx0XHRcdDxzcGFuIGNsYXNzPVwic2VhcmNoX2lucHV0X3dvcmRcIj5OZWFyPC9zcGFuPlxuXHRcdFx0XHRcdFx0XHRcdFx0PGJ1dHRvbiBjbGFzcz1cImhvbWVfc2VhcmNoX2J1dHRvblwiICBkaXNhYmxlZD17c2VhcmNoVGVybT09bnVsbHx8c2VhcmNoVGVybT09XCJcIn0gb25DbGljaz17KGV2ZW50KT0+aGFuZGxlU2VhcmNoKGV2ZW50KX0+c2VhcmNoPC9idXR0b24+XG5cdFx0XHRcdFx0XHRcdFx0PC9kaXY+XG5cdFx0XHRcdDwvZm9ybT5cblxuICBcdFx0PC9Db250YWluZXI+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBTZWFyY2g7Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJHb29nbGVQbGFjZXNBdXRvY29tcGxldGUiLCJDb250YWluZXIiLCJ0dyIsImRpdiIsIlNlYXJjaCIsInByb3BzIiwic2VhcmNoVGVybSIsInNldFNlYXJjaFRlcm0iLCJoYW5kbGVTZWFyY2giLCJ1cGRhdGVTZWFyY2giLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJldmVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/searchbar.js\n"));

/***/ })

});