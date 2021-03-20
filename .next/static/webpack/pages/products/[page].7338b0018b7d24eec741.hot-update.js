webpackHotUpdate_N_E("pages/products/[page]",{

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return OrderPage; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/client/router */ \"./node_modules/next/dist/client/router.js\");\n/* harmony import */ var next_dist_client_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Pagination */ \"./components/Pagination.js\");\n/* harmony import */ var _components_Products__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/Products */ \"./components/Products.js\");\n/* harmony import */ var _components_Search__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/Search */ \"./components/Search.js\");\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! framer-motion */ \"./node_modules/framer-motion/dist/es/index.js\");\n\n\nvar _jsxFileName = \"/Users/rossmacdonald/Projects/stitchsell/frontend/pages/products/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\nfunction OrderPage() {\n  _s();\n\n  var _useRouter = Object(next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])(),\n      query = _useRouter.query;\n\n  var page = parseInt(query.page);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(framer_motion__WEBPACK_IMPORTED_MODULE_5__[\"motion\"].div, {\n    initial: {\n      opacity: 0.5,\n      x: -400\n    },\n    animate: {\n      opacity: 1,\n      x: 0\n    },\n    exit: {\n      opacity: 0.5,\n      x: -400\n    },\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Search__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Pagination__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      page: page || 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 18,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Products__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n      page: page || 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Pagination__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n      page: page || 1\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 11,\n    columnNumber: 5\n  }, this);\n}\n\n_s(OrderPage, \"wby5GzzI23pLfTlf5I7v7XLG1RQ=\", false, function () {\n  return [next_dist_client_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"]];\n});\n\n_c = OrderPage;\n\nvar _c;\n\n$RefreshReg$(_c, \"OrderPage\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanM/OWIyZSJdLCJuYW1lcyI6WyJPcmRlclBhZ2UiLCJ1c2VSb3V0ZXIiLCJxdWVyeSIsInBhZ2UiLCJwYXJzZUludCIsIm9wYWNpdHkiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsU0FBVCxHQUFxQjtBQUFBOztBQUFBLG1CQUNoQkMseUVBQVMsRUFETztBQUFBLE1BQzFCQyxLQUQwQixjQUMxQkEsS0FEMEI7O0FBRWxDLE1BQU1DLElBQUksR0FBR0MsUUFBUSxDQUFDRixLQUFLLENBQUNDLElBQVAsQ0FBckI7QUFDQSxzQkFDRSxxRUFBQyxvREFBRCxDQUFRLEdBQVI7QUFDRSxXQUFPLEVBQUU7QUFBRUUsYUFBTyxFQUFFLEdBQVg7QUFBZ0JDLE9BQUMsRUFBRSxDQUFDO0FBQXBCLEtBRFg7QUFFRSxXQUFPLEVBQUU7QUFBRUQsYUFBTyxFQUFFLENBQVg7QUFBY0MsT0FBQyxFQUFFO0FBQWpCLEtBRlg7QUFHRSxRQUFJLEVBQUU7QUFBRUQsYUFBTyxFQUFFLEdBQVg7QUFBZ0JDLE9BQUMsRUFBRSxDQUFDO0FBQXBCLEtBSFI7QUFBQSw0QkFLRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFPRSxxRUFBQyw4REFBRDtBQUFZLFVBQUksRUFBRUgsSUFBSSxJQUFJO0FBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFQRixlQVNFLHFFQUFDLDREQUFEO0FBQVUsVUFBSSxFQUFFQSxJQUFJLElBQUk7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVRGLGVBVUUscUVBQUMsOERBQUQ7QUFBWSxVQUFJLEVBQUVBLElBQUksSUFBSTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFjRDs7R0FqQnVCSCxTO1VBQ0pDLGlFOzs7S0FESUQsUyIsImZpbGUiOiIuL3BhZ2VzL3Byb2R1Y3RzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvZGlzdC9jbGllbnQvcm91dGVyXCI7XG5pbXBvcnQgUGFnaW5hdGlvbiBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9QYWdpbmF0aW9uXCI7XG5pbXBvcnQgUHJvZHVjdHMgZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvUHJvZHVjdHNcIjtcbmltcG9ydCBTZWFyY2ggZnJvbSBcIi4uLy4uL2NvbXBvbmVudHMvU2VhcmNoXCI7XG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBPcmRlclBhZ2UoKSB7XG4gIGNvbnN0IHsgcXVlcnkgfSA9IHVzZVJvdXRlcigpO1xuICBjb25zdCBwYWdlID0gcGFyc2VJbnQocXVlcnkucGFnZSk7XG4gIHJldHVybiAoXG4gICAgPG1vdGlvbi5kaXZcbiAgICAgIGluaXRpYWw9e3sgb3BhY2l0eTogMC41LCB4OiAtNDAwIH19XG4gICAgICBhbmltYXRlPXt7IG9wYWNpdHk6IDEsIHg6IDAgfX1cbiAgICAgIGV4aXQ9e3sgb3BhY2l0eTogMC41LCB4OiAtNDAwIH19XG4gICAgPlxuICAgICAgPFNlYXJjaCAvPlxuXG4gICAgICA8UGFnaW5hdGlvbiBwYWdlPXtwYWdlIHx8IDF9IC8+XG5cbiAgICAgIDxQcm9kdWN0cyBwYWdlPXtwYWdlIHx8IDF9IC8+XG4gICAgICA8UGFnaW5hdGlvbiBwYWdlPXtwYWdlIHx8IDF9IC8+XG4gICAgPC9tb3Rpb24uZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/products/index.js\n");

/***/ })

})