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

/***/ "./components/video/video.js":
/*!***********************************!*\
  !*** ./components/video/video.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ \"./node_modules/@fortawesome/react-fontawesome/index.es.js\");\n/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ \"./node_modules/@fortawesome/free-solid-svg-icons/index.mjs\");\n/* harmony import */ var _assets_images_restaurant_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/images/restaurant.png */ \"./assets/images/restaurant.png\");\n/* harmony import */ var _video_footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./video_footer */ \"./components/video/video_footer.js\");\n/* harmony import */ var _video_side_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./video_side_bar */ \"./components/video/video_side_bar.js\");\n/* harmony import */ var _hooks_useElementOnScreen__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../hooks/useElementOnScreen */ \"./hooks/useElementOnScreen.js\");\n/* harmony import */ var _video_play_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./video_play_button */ \"./components/video/video_play_button.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__);\nvar _jsxFileName = \"/Users/cheny39/Documents/work/tmp/tikfood/components/video/video.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nconst CardBox = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"video__CardBox\",\n  componentId: \"sc-1my0ce2-0\"\n})({\n  \"marginTop\": \"2rem\",\n  \"marginBottom\": \"2rem\",\n  \"width\": \"100%\",\n  \"borderRadius\": \"0.5rem\",\n  \"borderWidth\": \"1px\",\n  \"borderStyle\": \"solid\",\n  \"--tw-border-opacity\": \"1\",\n  \"borderColor\": \"rgb(203 213 225 / var(--tw-border-opacity))\",\n  \"--tw-bg-opacity\": \"1\",\n  \"backgroundColor\": \"rgb(255 255 255 / var(--tw-bg-opacity))\",\n  \"@media (min-width: 768px)\": {\n    \"marginLeft\": \"0.5rem\",\n    \"marginRight\": \"0.5rem\"\n  },\n  \"@media (min-width: 1024px)\": {\n    \"padding\": \"0.5rem\"\n  }\n});\n\n_c = CardBox;\n\nconst CardHead = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"video__CardHead\",\n  componentId: \"sc-1my0ce2-1\"\n})({\n  \"float\": \"right\",\n  \"display\": \"inline-block\",\n  \"width\": \"100%\",\n  \"paddingTop\": \"0.5rem\",\n  \"paddingBottom\": \"0.5rem\"\n});\n\n_c2 = CardHead;\n\nconst CardTitle = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"video__CardTitle\",\n  componentId: \"sc-1my0ce2-2\"\n})({\n  \"display\": \"inline-block\",\n  \"alignContent\": \"center\",\n  \"paddingLeft\": \"0.5rem\",\n  \"paddingRight\": \"0.5rem\",\n  \"verticalAlign\": \"middle\",\n  \"fontFamily\": \"Roboto, sans-serif\",\n  \"color\": \"currentColor\"\n});\n\n_c3 = CardTitle;\n\nconst CardMoreIcon = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"video__CardMoreIcon\",\n  componentId: \"sc-1my0ce2-3\"\n})({\n  \"float\": \"right\",\n  \"display\": \"inline-block\",\n  \"paddingRight\": \"0.5rem\"\n});\n\n_c4 = CardMoreIcon;\n\nconst CardHeadImg = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"video__CardHeadImg\",\n  componentId: \"sc-1my0ce2-4\"\n})({\n  \"float\": \"left\",\n  \"display\": \"inline-block\",\n  \"paddingLeft\": \"0.5rem\",\n  \"paddingRight\": \"0.5rem\"\n});\n\n_c5 = CardHeadImg;\n\nconst CardBody = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"video__CardBody\",\n  componentId: \"sc-1my0ce2-5\"\n})({\n  \"position\": \"relative\",\n  \"marginLeft\": \"0.5rem\",\n  \"marginRight\": \"0.5rem\"\n});\n\n_c6 = CardBody;\n\nconst CardTextDesc = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"video__CardTextDesc\",\n  componentId: \"sc-1my0ce2-6\"\n})({\n  \"margin\": \"0.5rem\"\n});\n\n_c7 = CardTextDesc;\n\nconst RestaurantName = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"video__RestaurantName\",\n  componentId: \"sc-1my0ce2-7\"\n})({\n  \"fontSize\": \"1.5rem\",\n  \"lineHeight\": \"2rem\",\n  \"fontWeight\": \"600\"\n});\n\n_c8 = RestaurantName;\n\nconst RestaurantDesc = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"video__RestaurantDesc\",\n  componentId: \"sc-1my0ce2-8\"\n})({\n  \"marginTop\": \"0.5rem\",\n  \"marginBottom\": \"0.5rem\"\n});\n\n_c9 = RestaurantDesc;\n\nconst RestaurantSection = styled_components__WEBPACK_IMPORTED_MODULE_9__[\"default\"].div.withConfig({\n  displayName: \"video__RestaurantSection\",\n  componentId: \"sc-1my0ce2-9\"\n})({\n  \"fontSize\": \"1.125rem\",\n  \"lineHeight\": \"1.75rem\"\n});\n\n_c10 = RestaurantSection;\n\nconst Video = _ref => {\n  _s();\n\n  let {\n    url,\n    channel,\n    description,\n    song,\n    likes,\n    messages,\n    shares\n  } = _ref;\n  const {\n    0: playing,\n    1: setPlaying\n  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);\n  const videoRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n  const options = {\n    root: null,\n    rootMargin: '0px',\n    threshold: 0.3\n  };\n  const isVisibile = (0,_hooks_useElementOnScreen__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(options, videoRef);\n\n  const onVideoClick = () => {\n    if (playing) {\n      videoRef.current.pause();\n      setPlaying(!playing);\n    } else {\n      videoRef.current.play();\n      setPlaying(!playing);\n    }\n  };\n\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {\n    if (isVisibile) {\n      if (!playing) {\n        videoRef.current.play();\n        setPlaying(true);\n      }\n    } else {\n      if (playing) {\n        videoRef.current.pause();\n        setPlaying(false);\n      }\n    }\n  }, [isVisibile]); // <video className=\"video_player\" loop preload=\"true\" ref={videoRef} onClick={onVideoClick} src={url}></video>\n  // <VideoFooter channel={channel} description={description} song={song} />\n  // <VideoSidebar likes={likes} messages={messages} shares={shares} />\n  // {!playing && <VideoPlayButton onVideoClick={onVideoClick} />}\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"div\", {\n    className: \"video\",\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(CardBox, {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(CardHead, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(CardHeadImg, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n            src: _assets_images_restaurant_png__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n            alt: \"restaurant\",\n            className: \"w-9 h-9 rounded-full mt-1\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 21\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 81,\n          columnNumber: 19\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(CardTitle, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n            className: \"text-slate-600\",\n            children: \"Alex DC Foodie \"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 85,\n            columnNumber: 21\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"p\", {\n            className: \"text-slate-500\",\n            children: \"A nice restaurant at DMV area\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 86,\n            columnNumber: 21\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 84,\n          columnNumber: 19\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(CardMoreIcon, {\n          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n            icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faEllipsis,\n            className: \"leading-9 px-2 float-right cursor-pointer\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 89,\n            columnNumber: 21\n          }, undefined)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 88,\n          columnNumber: 19\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(CardBody, {\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_2__.FontAwesomeIcon, {\n          icon: (_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faRegular, _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_10__.faCirclePlay),\n          className: \"absolute bottom-1/2 left-1/2 text-white text-4xl cursor-pointer drop-shadow-lg\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 93,\n          columnNumber: 19\n        }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(\"video\", {\n          className: \"video_player\",\n          loop: true,\n          preload: \"true\",\n          ref: videoRef,\n          onClick: onVideoClick,\n          src: url\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 94,\n          columnNumber: 19\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 17\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(CardTextDesc, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(RestaurantSection, {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(RestaurantName, {\n            children: \"Hornets Nest Grille\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 99,\n            columnNumber: 22\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxDEV)(RestaurantDesc, {\n            children: \"the cutest hidden gem in New York #nyc#hiddengem#nyclife#travel#restaurant#fyp\"\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 100,\n            columnNumber: 22\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 98,\n          columnNumber: 19\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 17\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 79,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 78,\n    columnNumber: 5\n  }, undefined);\n};\n\n_s(Video, \"DQgdQdpQ3Ini7T+5cagvi4YKmqk=\", false, function () {\n  return [_hooks_useElementOnScreen__WEBPACK_IMPORTED_MODULE_6__[\"default\"]];\n});\n\n_c11 = Video;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Video);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;\n\n$RefreshReg$(_c, \"CardBox\");\n$RefreshReg$(_c2, \"CardHead\");\n$RefreshReg$(_c3, \"CardTitle\");\n$RefreshReg$(_c4, \"CardMoreIcon\");\n$RefreshReg$(_c5, \"CardHeadImg\");\n$RefreshReg$(_c6, \"CardBody\");\n$RefreshReg$(_c7, \"CardTextDesc\");\n$RefreshReg$(_c8, \"RestaurantName\");\n$RefreshReg$(_c9, \"RestaurantDesc\");\n$RefreshReg$(_c10, \"RestaurantSection\");\n$RefreshReg$(_c11, \"Video\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBO1VBQUE7UUFBQSxhQURGLGVBRUU7VUFBTyxTQUFTLEVBQUMsY0FBakI7VUFBZ0MsSUFBSSxNQUFwQztVQUFxQyxPQUFPLEVBQUMsTUFBN0M7VUFBb0QsR0FBRyxFQUFFOEIsUUFBekQ7VUFBbUUsT0FBTyxFQUFFTSxZQUE1RTtVQUEwRixHQUFHLEVBQUVmO1FBQS9GO1VBQUE7VUFBQTtVQUFBO1FBQUEsYUFGRjtNQUFBO1FBQUE7UUFBQTtRQUFBO01BQUEsYUFiVixlQWtCVSw4REFBQyxZQUFEO1FBQUEsdUJBQ0UsOERBQUMsaUJBQUQ7VUFBQSx3QkFDRyw4REFBQyxjQUFEO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLGFBREgsZUFFRyw4REFBQyxjQUFEO1lBQUE7VUFBQTtZQUFBO1lBQUE7WUFBQTtVQUFBLGFBRkg7UUFBQTtVQUFBO1VBQUE7VUFBQTtRQUFBO01BREY7UUFBQTtRQUFBO1FBQUE7TUFBQSxhQWxCVjtJQUFBO01BQUE7TUFBQTtNQUFBO0lBQUE7RUFERjtJQUFBO0lBQUE7SUFBQTtFQUFBLGFBREY7QUE4QkQsQ0EvRUQ7O0dBQU1EO1VBWWVkOzs7T0FaZmM7QUFnRk4sK0RBQWVBLEtBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy92aWRlby92aWRlby5qcz8yOGRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVJlZiwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB0dyBmcm9tIFwidHdpbi5tYWNyb1wiO1xuaW1wb3J0IEltYWdlIGZyb20gJ25leHQvaW1hZ2UnO1xuaW1wb3J0IHsgRm9udEF3ZXNvbWVJY29uIH0gZnJvbSAnQGZvcnRhd2Vzb21lL3JlYWN0LWZvbnRhd2Vzb21lJ1xuaW1wb3J0IHsgZmFDaXJjbGVQbGF5LCBmYVJlZ3VsYXIsIGZhRWxsaXBzaXMgfSBmcm9tICdAZm9ydGF3ZXNvbWUvZnJlZS1zb2xpZC1zdmctaWNvbnMnXG5pbXBvcnQgcmVzdGF1cmFudCBmcm9tICcuLi8uLi9hc3NldHMvaW1hZ2VzL3Jlc3RhdXJhbnQucG5nJztcbmltcG9ydCBWaWRlb0Zvb3RlciBmcm9tIFwiLi92aWRlb19mb290ZXJcIjtcbmltcG9ydCBWaWRlb1NpZGViYXIgZnJvbSBcIi4vdmlkZW9fc2lkZV9iYXJcIjtcbmltcG9ydCB1c2VFbGVtZW50T25TY3JlZW4gZnJvbSAnLi4vLi4vaG9va3MvdXNlRWxlbWVudE9uU2NyZWVuJ1xuaW1wb3J0IFZpZGVvUGxheUJ1dHRvbiBmcm9tIFwiLi92aWRlb19wbGF5X2J1dHRvblwiO1xuXG4gXG4gY29uc3QgQ2FyZEJveCA9IHR3LmRpdmBteS04IGJnLXdoaXRlIHJvdW5kZWQtbGcgbWQ6bXgtMiAgdy1mdWxsICBib3JkZXItc29saWQgYm9yZGVyLXNsYXRlLTMwMCBib3JkZXIgbGc6cC0yYDtcbiBjb25zdCBDYXJkSGVhZCA9IHR3LmRpdmBpbmxpbmUtYmxvY2sgdy1mdWxsIHB5LTIgZmxvYXQtcmlnaHRgO1xuIGNvbnN0IENhcmRUaXRsZSA9IHR3LmRpdmBjb250ZW50LWNlbnRlciBpbmxpbmUtYmxvY2sgYWxpZ24tbWlkZGxlIHRleHQtY3VycmVudCAgcHgtMiBmb250LXJvYm90b2A7XG4gY29uc3QgQ2FyZE1vcmVJY29uID0gdHcuZGl2YGlubGluZS1ibG9jayBmbG9hdC1yaWdodCBwci0yYDtcbiBjb25zdCBDYXJkSGVhZEltZyA9dHcuZGl2YGlubGluZS1ibG9jayBmbG9hdC1sZWZ0IHB4LTIgYDtcbiBjb25zdCBDYXJkQm9keSA9IHR3LmRpdmByZWxhdGl2ZSBteC0yYDtcbiBjb25zdCBDYXJkVGV4dERlc2MgPSB0dy5kaXZgbS0yYDtcblxuIGNvbnN0IFJlc3RhdXJhbnROYW1lID0gdHcuZGl2YHRleHQtMnhsIGZvbnQtc2VtaWJvbGRgO1xuIGNvbnN0IFJlc3RhdXJhbnREZXNjID0gdHcuZGl2YG15LTIgYDtcbiBjb25zdCBSZXN0YXVyYW50U2VjdGlvbiA9IHR3LmRpdmB0ZXh0LWxnIGA7XG5cblxuXG5cbmNvbnN0IFZpZGVvID0gKHsgdXJsLCBjaGFubmVsLCBkZXNjcmlwdGlvbiwgc29uZywgbGlrZXMsIG1lc3NhZ2VzLCBzaGFyZXMgfSkgPT4ge1xuIFxuXG5cbiAgY29uc3QgW3BsYXlpbmcsIHNldFBsYXlpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IHZpZGVvUmVmID0gdXNlUmVmKG51bGwpO1xuXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICByb290OiBudWxsLFxuICAgICAgcm9vdE1hcmdpbjogJzBweCcsXG4gICAgICB0aHJlc2hvbGQ6IDAuM1xuICB9XG4gIGNvbnN0IGlzVmlzaWJpbGUgPSB1c2VFbGVtZW50T25TY3JlZW4ob3B0aW9ucywgdmlkZW9SZWYpXG4gIFxuXG5cbiAgY29uc3Qgb25WaWRlb0NsaWNrID0gKCkgPT4ge1xuICAgIGlmIChwbGF5aW5nKSB7XG4gICAgICB2aWRlb1JlZi5jdXJyZW50LnBhdXNlKCk7XG4gICAgICBzZXRQbGF5aW5nKCFwbGF5aW5nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgIHZpZGVvUmVmLmN1cnJlbnQucGxheSgpO1xuICAgICAgICBzZXRQbGF5aW5nKCFwbGF5aW5nKTtcbiAgICAgIH1cbiAgfTtcblxuXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaXNWaXNpYmlsZSkge1xuICAgICAgaWYgKCFwbGF5aW5nKSB7ICAgICAgICBcbiAgICAgICAgdmlkZW9SZWYuY3VycmVudC5wbGF5KCk7XG4gICAgICAgIHNldFBsYXlpbmcodHJ1ZSlcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBpZiAocGxheWluZykgeyAgICAgICAgXG4gICAgICAgIHZpZGVvUmVmLmN1cnJlbnQucGF1c2UoKTtcbiAgICAgICAgc2V0UGxheWluZyhmYWxzZSlcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtpc1Zpc2liaWxlXSlcblxuXG4gLy8gPHZpZGVvIGNsYXNzTmFtZT1cInZpZGVvX3BsYXllclwiIGxvb3AgcHJlbG9hZD1cInRydWVcIiByZWY9e3ZpZGVvUmVmfSBvbkNsaWNrPXtvblZpZGVvQ2xpY2t9IHNyYz17dXJsfT48L3ZpZGVvPlxuICAgICAgLy8gPFZpZGVvRm9vdGVyIGNoYW5uZWw9e2NoYW5uZWx9IGRlc2NyaXB0aW9uPXtkZXNjcmlwdGlvbn0gc29uZz17c29uZ30gLz5cbiAgICAgIC8vIDxWaWRlb1NpZGViYXIgbGlrZXM9e2xpa2VzfSBtZXNzYWdlcz17bWVzc2FnZXN9IHNoYXJlcz17c2hhcmVzfSAvPlxuICAgICAgLy8geyFwbGF5aW5nICYmIDxWaWRlb1BsYXlCdXR0b24gb25WaWRlb0NsaWNrPXtvblZpZGVvQ2xpY2t9IC8+fVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ2aWRlb1wiPlxuICAgICAgPENhcmRCb3g+XG4gICAgICAgICAgICAgICAgPENhcmRIZWFkPlxuICAgICAgICAgICAgICAgICAgPENhcmRIZWFkSW1nPlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc3JjPXtyZXN0YXVyYW50fSBhbHQ9J3Jlc3RhdXJhbnQnIGNsYXNzTmFtZT1cInctOSBoLTkgcm91bmRlZC1mdWxsIG10LTFcIi8+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRIZWFkSW1nPlxuICAgICAgICAgICAgICAgICAgPENhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1zbGF0ZS02MDBcIj5BbGV4IERDIEZvb2RpZSA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtc2xhdGUtNTAwXCI+QSBuaWNlIHJlc3RhdXJhbnQgYXQgRE1WIGFyZWE8L3A+XG4gICAgICAgICAgICAgICAgICA8L0NhcmRUaXRsZT5cbiAgICAgICAgICAgICAgICAgIDxDYXJkTW9yZUljb24gPlxuICAgICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhRWxsaXBzaXN9IGNsYXNzTmFtZT1cImxlYWRpbmctOSBweC0yIGZsb2F0LXJpZ2h0IGN1cnNvci1wb2ludGVyXCIvPlxuICAgICAgICAgICAgICAgICAgPC9DYXJkTW9yZUljb24+XG4gICAgICAgICAgICAgICAgPC9DYXJkSGVhZD5cbiAgICAgICAgICAgICAgICA8Q2FyZEJvZHk+XG4gICAgICAgICAgICAgICAgICA8Rm9udEF3ZXNvbWVJY29uIGljb249e2ZhUmVndWxhcixmYUNpcmNsZVBsYXl9ICBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMS8yIGxlZnQtMS8yIHRleHQtd2hpdGUgdGV4dC00eGwgY3Vyc29yLXBvaW50ZXIgZHJvcC1zaGFkb3ctbGdcIi8+XG4gICAgICAgICAgICAgICAgICA8dmlkZW8gY2xhc3NOYW1lPVwidmlkZW9fcGxheWVyXCIgbG9vcCBwcmVsb2FkPVwidHJ1ZVwiIHJlZj17dmlkZW9SZWZ9IG9uQ2xpY2s9e29uVmlkZW9DbGlja30gc3JjPXt1cmx9IFxuICAgICAgICAgICAgICAgICAgPjwvdmlkZW8+XG4gICAgICAgICAgICAgICAgPC9DYXJkQm9keT5cbiAgICAgICAgICAgICAgICA8Q2FyZFRleHREZXNjID5cbiAgICAgICAgICAgICAgICAgIDxSZXN0YXVyYW50U2VjdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgIDxSZXN0YXVyYW50TmFtZT5Ib3JuZXRzIE5lc3QgR3JpbGxlPC9SZXN0YXVyYW50TmFtZT5cbiAgICAgICAgICAgICAgICAgICAgIDxSZXN0YXVyYW50RGVzYz50aGUgY3V0ZXN0IGhpZGRlbiBnZW0gaW4gTmV3IFlvcmsgI255YyNoaWRkZW5nZW0jbnljbGlmZSN0cmF2ZWwjcmVzdGF1cmFudCNmeXA8L1Jlc3RhdXJhbnREZXNjPlxuICAgICAgICAgICAgICAgICAgPC9SZXN0YXVyYW50U2VjdGlvbj5cbiAgICAgICAgICAgICAgICA8L0NhcmRUZXh0RGVzYz5cbiAgICAgICAgICAgICAgPC9DYXJkQm94PlxuICAgICBcbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBWaWRlbzsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VSZWYiLCJ1c2VTdGF0ZSIsIkltYWdlIiwiRm9udEF3ZXNvbWVJY29uIiwiZmFDaXJjbGVQbGF5IiwiZmFSZWd1bGFyIiwiZmFFbGxpcHNpcyIsInJlc3RhdXJhbnQiLCJWaWRlb0Zvb3RlciIsIlZpZGVvU2lkZWJhciIsInVzZUVsZW1lbnRPblNjcmVlbiIsIlZpZGVvUGxheUJ1dHRvbiIsIkNhcmRCb3giLCJ0dyIsImRpdiIsIkNhcmRIZWFkIiwiQ2FyZFRpdGxlIiwiQ2FyZE1vcmVJY29uIiwiQ2FyZEhlYWRJbWciLCJDYXJkQm9keSIsIkNhcmRUZXh0RGVzYyIsIlJlc3RhdXJhbnROYW1lIiwiUmVzdGF1cmFudERlc2MiLCJSZXN0YXVyYW50U2VjdGlvbiIsIlZpZGVvIiwidXJsIiwiY2hhbm5lbCIsImRlc2NyaXB0aW9uIiwic29uZyIsImxpa2VzIiwibWVzc2FnZXMiLCJzaGFyZXMiLCJwbGF5aW5nIiwic2V0UGxheWluZyIsInZpZGVvUmVmIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwiaXNWaXNpYmlsZSIsIm9uVmlkZW9DbGljayIsImN1cnJlbnQiLCJwYXVzZSIsInBsYXkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/video/video.js\n"));

/***/ })

});