webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/Pagination.js":
/*!**********************************!*\
  !*** ./components/Pagination.js ***!
  \**********************************/
/*! exports provided: PAGINATION_QUERY, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"PAGINATION_QUERY\", function() { return PAGINATION_QUERY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Pagination; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Users_rossmacdonald_Projects_stitchsell_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ \"./node_modules/graphql-tag/src/index.js\");\n/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./styles/PaginationStyles */ \"./components/styles/PaginationStyles.js\");\n/* harmony import */ var _ErrorMessage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ErrorMessage */ \"./components/ErrorMessage.js\");\n/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ \"./config.js\");\n\n\n\nvar _jsxFileName = \"/Users/rossmacdonald/Projects/stitchsell/frontend/components/Pagination.js\",\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_Users_rossmacdonald_Projects_stitchsell_frontend_node_modules_next_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__[\"default\"])([\"\\n  query PAGINATION_QUERY {\\n    _allProductsMeta {\\n      count\\n    }\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\n\n\nvar PAGINATION_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());\nfunction Pagination(_ref) {\n  _s();\n\n  var page = _ref.page;\n\n  var _useQuery = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"])(PAGINATION_QUERY),\n      error = _useQuery.error,\n      loading = _useQuery.loading,\n      data = _useQuery.data;\n\n  if (loading) return \"Loading...\";\n  if (error) return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_ErrorMessage__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    error: error\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 21\n  }, this);\n  var count = data._allProductsMeta.count;\n  var pageCount = Math.ceil(count / _config__WEBPACK_IMPORTED_MODULE_8__[\"perPage\"]);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_styles_PaginationStyles__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: [\"Stitch by Nicole - Page \", page, \" of \", pageCount]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      href: \"/products/\".concat(page - 1),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        \"aria-disabled\": page <= 1,\n        children: \"\\u2190 Prev\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Page \", page, \" of \", pageCount]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {\n      href: \"/products/\".concat(page + 1),\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        \"aria-disabled\": page >= pageCount,\n        children: \"Next \\u2192\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 37,\n        columnNumber: 9\n      }, this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 24,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Pagination, \"MadqETWYtkFh3dDWW9IjxDLlwQw=\", false, function () {\n  return [_apollo_client__WEBPACK_IMPORTED_MODULE_2__[\"useQuery\"]];\n});\n\n_c = Pagination;\n\nvar _c;\n\n$RefreshReg$(_c, \"Pagination\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzPzJiMzMiXSwibmFtZXMiOlsiUEFHSU5BVElPTl9RVUVSWSIsImdxbCIsIlBhZ2luYXRpb24iLCJwYWdlIiwidXNlUXVlcnkiLCJlcnJvciIsImxvYWRpbmciLCJkYXRhIiwiY291bnQiLCJfYWxsUHJvZHVjdHNNZXRhIiwicGFnZUNvdW50IiwiTWF0aCIsImNlaWwiLCJwZXJQYWdlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sSUFBTUEsZ0JBQWdCLEdBQUdDLGtEQUFILG1CQUF0QjtBQVFRLFNBQVNDLFVBQVQsT0FBOEI7QUFBQTs7QUFBQSxNQUFSQyxJQUFRLFFBQVJBLElBQVE7O0FBQUEsa0JBQ1ZDLCtEQUFRLENBQUNKLGdCQUFELENBREU7QUFBQSxNQUNuQ0ssS0FEbUMsYUFDbkNBLEtBRG1DO0FBQUEsTUFDNUJDLE9BRDRCLGFBQzVCQSxPQUQ0QjtBQUFBLE1BQ25CQyxJQURtQixhQUNuQkEsSUFEbUI7O0FBRTNDLE1BQUlELE9BQUosRUFBYSxPQUFPLFlBQVA7QUFDYixNQUFJRCxLQUFKLEVBQVcsb0JBQU8scUVBQUMscURBQUQ7QUFBYyxTQUFLLEVBQUVBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBUDtBQUhnQyxNQUluQ0csS0FKbUMsR0FJekJELElBQUksQ0FBQ0UsZ0JBSm9CLENBSW5DRCxLQUptQztBQUszQyxNQUFNRSxTQUFTLEdBQUdDLElBQUksQ0FBQ0MsSUFBTCxDQUFVSixLQUFLLEdBQUdLLCtDQUFsQixDQUFsQjtBQUNBLHNCQUNFLHFFQUFDLGdFQUFEO0FBQUEsNEJBQ0UscUVBQUMsZ0RBQUQ7QUFBQSw2QkFDRTtBQUFBLCtDQUMyQlYsSUFEM0IsVUFDcUNPLFNBRHJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQU1FLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxzQkFBZVAsSUFBSSxHQUFHLENBQXRCLENBQVY7QUFBQSw2QkFDRTtBQUFHLHlCQUFlQSxJQUFJLElBQUksQ0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFTRTtBQUFBLDBCQUNRQSxJQURSLFVBQ2tCTyxTQURsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFURixlQVlFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxzQkFBZVAsSUFBSSxHQUFHLENBQXRCLENBQVY7QUFBQSw2QkFDRTtBQUFHLHlCQUFlQSxJQUFJLElBQUlPLFNBQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0JEOztHQXhCdUJSLFU7VUFDV0UsdUQ7OztLQURYRixVIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9QYWdpbmF0aW9uLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlUXVlcnkgfSBmcm9tIFwiQGFwb2xsby9jbGllbnRcIjtcbmltcG9ydCBncWwgZnJvbSBcImdyYXBocWwtdGFnXCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgUGFnaW5hdGlvblN0eWxlcyBmcm9tIFwiLi9zdHlsZXMvUGFnaW5hdGlvblN0eWxlc1wiO1xuaW1wb3J0IERpc3BsYXlFcnJvciBmcm9tIFwiLi9FcnJvck1lc3NhZ2VcIjtcbmltcG9ydCB7IHBlclBhZ2UgfSBmcm9tIFwiLi4vY29uZmlnXCI7XG5cbmV4cG9ydCBjb25zdCBQQUdJTkFUSU9OX1FVRVJZID0gZ3FsYFxuICBxdWVyeSBQQUdJTkFUSU9OX1FVRVJZIHtcbiAgICBfYWxsUHJvZHVjdHNNZXRhIHtcbiAgICAgIGNvdW50XG4gICAgfVxuICB9XG5gO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWdpbmF0aW9uKHsgcGFnZSB9KSB7XG4gIGNvbnN0IHsgZXJyb3IsIGxvYWRpbmcsIGRhdGEgfSA9IHVzZVF1ZXJ5KFBBR0lOQVRJT05fUVVFUlkpO1xuICBpZiAobG9hZGluZykgcmV0dXJuIFwiTG9hZGluZy4uLlwiO1xuICBpZiAoZXJyb3IpIHJldHVybiA8RGlzcGxheUVycm9yIGVycm9yPXtlcnJvcn0gLz47XG4gIGNvbnN0IHsgY291bnQgfSA9IGRhdGEuX2FsbFByb2R1Y3RzTWV0YTtcbiAgY29uc3QgcGFnZUNvdW50ID0gTWF0aC5jZWlsKGNvdW50IC8gcGVyUGFnZSk7XG4gIHJldHVybiAoXG4gICAgPFBhZ2luYXRpb25TdHlsZXM+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPlxuICAgICAgICAgIFN0aXRjaCBieSBOaWNvbGUgLSBQYWdlIHtwYWdlfSBvZiB7cGFnZUNvdW50fVxuICAgICAgICA8L3RpdGxlPlxuICAgICAgPC9IZWFkPlxuICAgICAgPExpbmsgaHJlZj17YC9wcm9kdWN0cy8ke3BhZ2UgLSAxfWB9PlxuICAgICAgICA8YSBhcmlhLWRpc2FibGVkPXtwYWdlIDw9IDF9PuKGkCBQcmV2PC9hPlxuICAgICAgPC9MaW5rPlxuICAgICAgPHA+XG4gICAgICAgIFBhZ2Uge3BhZ2V9IG9mIHtwYWdlQ291bnR9XG4gICAgICA8L3A+XG4gICAgICA8TGluayBocmVmPXtgL3Byb2R1Y3RzLyR7cGFnZSArIDF9YH0+XG4gICAgICAgIDxhIGFyaWEtZGlzYWJsZWQ9e3BhZ2UgPj0gcGFnZUNvdW50fT5OZXh0IOKGkjwvYT5cbiAgICAgIDwvTGluaz5cbiAgICA8L1BhZ2luYXRpb25TdHlsZXM+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Pagination.js\n");

/***/ }),

/***/ "./node_modules/framer-motion/dist/es/animation/animate.js":
false,

/***/ "./node_modules/framer-motion/dist/es/animation/animation-controls.js":
false,

/***/ "./node_modules/framer-motion/dist/es/animation/use-animated-state.js":
false,

/***/ "./node_modules/framer-motion/dist/es/animation/use-animation.js":
false,

/***/ "./node_modules/framer-motion/dist/es/animation/utils/default-transitions.js":
false,

/***/ "./node_modules/framer-motion/dist/es/animation/utils/easing.js":
false,

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animatable.js":
false,

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-animation-controls.js":
false,

/***/ "./node_modules/framer-motion/dist/es/animation/utils/is-keyframes-target.js":
false,

/***/ "./node_modules/framer-motion/dist/es/animation/utils/transitions.js":
false,

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/PresenceChild.js":
false,

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/index.js":
false,

/***/ "./node_modules/framer-motion/dist/es/components/AnimatePresence/use-presence.js":
false,

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/index.js":
false,

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/types.js":
false,

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/batcher.js":
false,

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/crossfader.js":
false,

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/rotate.js":
false,

/***/ "./node_modules/framer-motion/dist/es/components/AnimateSharedLayout/utils/stack.js":
false,

/***/ "./node_modules/framer-motion/dist/es/components/LazyMotion/index.js":
false,

/***/ "./node_modules/framer-motion/dist/es/components/MotionConfig/index.js":
false,

/***/ "./node_modules/framer-motion/dist/es/context/LayoutGroupContext.js":
false,

/***/ "./node_modules/framer-motion/dist/es/context/LazyContext.js":
false,

/***/ "./node_modules/framer-motion/dist/es/context/MotionConfigContext.js":
false,

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/create.js":
false,

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/index.js":
false,

/***/ "./node_modules/framer-motion/dist/es/context/MotionContext/utils.js":
false,

/***/ "./node_modules/framer-motion/dist/es/context/PresenceContext.js":
false,

/***/ "./node_modules/framer-motion/dist/es/context/SharedLayoutContext.js":
false,

/***/ "./node_modules/framer-motion/dist/es/events/event-info.js":
false,

/***/ "./node_modules/framer-motion/dist/es/events/use-dom-event.js":
false,

/***/ "./node_modules/framer-motion/dist/es/events/use-pointer-event.js":
false,

/***/ "./node_modules/framer-motion/dist/es/events/utils.js":
false,

/***/ "./node_modules/framer-motion/dist/es/gestures/PanSession.js":
false,

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/VisualElementDragControls.js":
false,

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/use-drag-controls.js":
false,

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/use-drag.js":
false,

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/constraints.js":
false,

/***/ "./node_modules/framer-motion/dist/es/gestures/drag/utils/lock.js":
false,

/***/ "./node_modules/framer-motion/dist/es/gestures/use-focus-gesture.js":
false,

/***/ "./node_modules/framer-motion/dist/es/gestures/use-hover-gesture.js":
false,

/***/ "./node_modules/framer-motion/dist/es/gestures/use-pan-gesture.js":
false,

/***/ "./node_modules/framer-motion/dist/es/gestures/use-tap-gesture.js":
false,

/***/ "./node_modules/framer-motion/dist/es/gestures/utils/event-type.js":
false,

/***/ "./node_modules/framer-motion/dist/es/gestures/utils/is-node-or-child.js":
false,

/***/ "./node_modules/framer-motion/dist/es/index.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/features/animations.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/features/definitions.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/features/drag.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/features/gestures.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/Animate.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/Measure.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/index.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/features/layout/utils.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/features/use-features.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/index.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/utils/is-forced-motion-value.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/utils/make-renderless-component.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-motion-ref.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-element.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/utils/use-visual-state.js":
false,

/***/ "./node_modules/framer-motion/dist/es/motion/utils/valid-prop.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/create-visual-element.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/features-animation.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/features-max.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion-minimal.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion-proxy.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/motion.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/default-scale-correctors.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/measure.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/projection/scale-correction.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/use-render.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/camel-to-dash.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/create-config.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/css-variables-conversion.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/filter-props.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-css-variable.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/is-svg-component.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/parse-dom-variant.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/utils/unit-conversion.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/animatable-none.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/defaults.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/dimensions.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/find.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/get-as-type.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/number.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/test.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-auto.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/dom/value-types/type-int.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/html/config-motion.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/html/use-props.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-projection-transform.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-styles.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/build-transform.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/create-render-state.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/render.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/scrape-motion-values.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/html/utils/transform.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/html/visual-element.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/index.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/svg/config-motion.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/svg/lowercase-elements.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/svg/use-props.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/build-attrs.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/camel-case-attrs.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/create-render-state.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/path.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/render.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/scrape-motion-values.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/svg/utils/transform-origin.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/svg/visual-element.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/utils/animation-state.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/utils/animation.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/utils/lifecycles.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/utils/motion-values.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/utils/projection.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/utils/setters.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/utils/state.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/utils/types.js":
false,

/***/ "./node_modules/framer-motion/dist/es/render/utils/variants.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/array.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/each-axis.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/geometry/delta-apply.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/geometry/delta-calc.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/geometry/index.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/is-browser.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/is-numerical-string.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/is-ref-object.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/noop.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/resolve-value.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/shallow-compare.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/subscription-manager.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/time-conversion.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/transform.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/use-constant.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/use-cycle.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/use-force-update.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/use-isomorphic-effect.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/use-reduced-motion.js":
false,

/***/ "./node_modules/framer-motion/dist/es/utils/use-unmount-effect.js":
false,

/***/ "./node_modules/framer-motion/dist/es/value/index.js":
false,

/***/ "./node_modules/framer-motion/dist/es/value/scroll/use-element-scroll.js":
false,

/***/ "./node_modules/framer-motion/dist/es/value/scroll/use-viewport-scroll.js":
false,

/***/ "./node_modules/framer-motion/dist/es/value/scroll/utils.js":
false,

/***/ "./node_modules/framer-motion/dist/es/value/use-combine-values.js":
false,

/***/ "./node_modules/framer-motion/dist/es/value/use-inverted-scale.js":
false,

/***/ "./node_modules/framer-motion/dist/es/value/use-motion-template.js":
false,

/***/ "./node_modules/framer-motion/dist/es/value/use-motion-value.js":
false,

/***/ "./node_modules/framer-motion/dist/es/value/use-on-change.js":
false,

/***/ "./node_modules/framer-motion/dist/es/value/use-spring.js":
false,

/***/ "./node_modules/framer-motion/dist/es/value/use-transform.js":
false,

/***/ "./node_modules/framer-motion/dist/es/value/use-velocity.js":
false,

/***/ "./node_modules/framer-motion/dist/es/value/utils/is-motion-value.js":
false,

/***/ "./node_modules/framer-motion/dist/es/value/utils/resolve-motion-value.js":
false,

/***/ "./node_modules/framer-motion/node_modules/tslib/tslib.es6.js":
false,

/***/ "./node_modules/framesync/dist/es/create-render-step.js":
false,

/***/ "./node_modules/framesync/dist/es/index.js":
false,

/***/ "./node_modules/framesync/dist/es/on-next-frame.js":
false,

/***/ "./node_modules/hey-listen/dist/hey-listen.es.js":
false,

/***/ "./node_modules/popmotion/dist/es/animations/generators/decay.js":
false,

/***/ "./node_modules/popmotion/dist/es/animations/generators/keyframes.js":
false,

/***/ "./node_modules/popmotion/dist/es/animations/generators/spring.js":
false,

/***/ "./node_modules/popmotion/dist/es/animations/index.js":
false,

/***/ "./node_modules/popmotion/dist/es/animations/inertia.js":
false,

/***/ "./node_modules/popmotion/dist/es/animations/utils/detect-animation-from-options.js":
false,

/***/ "./node_modules/popmotion/dist/es/animations/utils/elapsed.js":
false,

/***/ "./node_modules/popmotion/dist/es/animations/utils/find-spring.js":
false,

/***/ "./node_modules/popmotion/dist/es/easing/cubic-bezier.js":
false,

/***/ "./node_modules/popmotion/dist/es/easing/index.js":
false,

/***/ "./node_modules/popmotion/dist/es/easing/steps.js":
false,

/***/ "./node_modules/popmotion/dist/es/easing/utils.js":
false,

/***/ "./node_modules/popmotion/dist/es/index.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/angle.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/apply-offset.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/attract.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/clamp.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/degrees-to-radians.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/distance.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/inc.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/interpolate.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/is-point-3d.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/is-point.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/mix-color.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/mix-complex.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/mix.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/pipe.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/point-from-vector.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/progress.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/radians-to-degrees.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/smooth-frame.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/smooth.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/snap.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/to-decimal.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/velocity-per-frame.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/velocity-per-second.js":
false,

/***/ "./node_modules/popmotion/dist/es/utils/wrap.js":
false,

/***/ "./node_modules/style-value-types/dist/es/color/hex.js":
false,

/***/ "./node_modules/style-value-types/dist/es/color/hsla.js":
false,

/***/ "./node_modules/style-value-types/dist/es/color/index.js":
false,

/***/ "./node_modules/style-value-types/dist/es/color/rgba.js":
false,

/***/ "./node_modules/style-value-types/dist/es/color/utils.js":
false,

/***/ "./node_modules/style-value-types/dist/es/complex/filter.js":
false,

/***/ "./node_modules/style-value-types/dist/es/complex/index.js":
false,

/***/ "./node_modules/style-value-types/dist/es/index.js":
false,

/***/ "./node_modules/style-value-types/dist/es/numbers/index.js":
false,

/***/ "./node_modules/style-value-types/dist/es/numbers/units.js":
false,

/***/ "./node_modules/style-value-types/dist/es/utils.js":
false

})