webpackHotUpdate_N_E("pages/account",{

/***/ "./components/Account.js":
/*!*******************************!*\
  !*** ./components/Account.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Account; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ \"./components/User.js\");\n\n\nvar _jsxFileName = \"/Users/rossmacdonald/Projects/stitchsell/frontend/components/Account.js\",\n    _s = $RefreshSig$();\n\n\nfunction Account() {\n  _s();\n\n  var _user$cart$,\n      _user$cart,\n      _this = this;\n\n  var user = Object(_User__WEBPACK_IMPORTED_MODULE_1__[\"useUser\"])();\n  console.log(user);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h2\", {\n      children: \"Account\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Name: \", user === null || user === void 0 ? void 0 : user.name]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: [\"Email: \", user === null || user === void 0 ? void 0 : user.email]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h3\", {\n      children: \"Cart:\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }, this), (user === null || user === void 0 ? void 0 : (_user$cart$ = user.cart[0]) === null || _user$cart$ === void 0 ? void 0 : _user$cart$.product) === null ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: \"Your cart is empty.\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }, this) : user === null || user === void 0 ? void 0 : (_user$cart = user.cart) === null || _user$cart === void 0 ? void 0 : _user$cart.map(function (item) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n        children: item.product\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 16,\n        columnNumber: 18\n      }, _this);\n    })]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Account, \"BPnln+wUpxLjLAxQmw7xYz9C+QI=\", false, function () {\n  return [_User__WEBPACK_IMPORTED_MODULE_1__[\"useUser\"]];\n});\n\n_c = Account;\n\nvar _c;\n\n$RefreshReg$(_c, \"Account\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9BY2NvdW50LmpzP2ZkYWYiXSwibmFtZXMiOlsiQWNjb3VudCIsInVzZXIiLCJ1c2VVc2VyIiwiY29uc29sZSIsImxvZyIsIm5hbWUiLCJlbWFpbCIsImNhcnQiLCJwcm9kdWN0IiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBRWUsU0FBU0EsT0FBVCxHQUFtQjtBQUFBOztBQUFBO0FBQUE7QUFBQTs7QUFDaEMsTUFBTUMsSUFBSSxHQUFHQyxxREFBTyxFQUFwQjtBQUNBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsSUFBWjtBQUNBLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUVFO0FBQUEsMkJBQVVBLElBQVYsYUFBVUEsSUFBVix1QkFBVUEsSUFBSSxDQUFFSSxJQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFGRixlQUdFO0FBQUEsNEJBQVdKLElBQVgsYUFBV0EsSUFBWCx1QkFBV0EsSUFBSSxDQUFFSyxLQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsRUFLRyxDQUFBTCxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDJCQUFBQSxJQUFJLENBQUVNLElBQU4sQ0FBVyxDQUFYLDZEQUFlQyxPQUFmLE1BQTJCLElBQTNCLGdCQUNDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREQsR0FHQ1AsSUFIRCxhQUdDQSxJQUhELHFDQUdDQSxJQUFJLENBQUVNLElBSFAsK0NBR0MsV0FBWUUsR0FBWixDQUFnQixVQUFDQyxJQUFELEVBQVU7QUFDeEIsMEJBQU87QUFBQSxrQkFBSUEsSUFBSSxDQUFDRjtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFBUDtBQUNELEtBRkQsQ0FSSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWVEOztHQWxCdUJSLE87VUFDVEUsNkM7OztLQURTRixPIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9BY2NvdW50LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlVXNlciB9IGZyb20gXCIuL1VzZXJcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQWNjb3VudCgpIHtcbiAgY29uc3QgdXNlciA9IHVzZVVzZXIoKTtcbiAgY29uc29sZS5sb2codXNlcik7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoMj5BY2NvdW50PC9oMj5cbiAgICAgIDxwPk5hbWU6IHt1c2VyPy5uYW1lfTwvcD5cbiAgICAgIDxwPkVtYWlsOiB7dXNlcj8uZW1haWx9PC9wPlxuICAgICAgPGgzPkNhcnQ6PC9oMz5cbiAgICAgIHt1c2VyPy5jYXJ0WzBdPy5wcm9kdWN0ID09PSBudWxsID8gKFxuICAgICAgICA8cD5Zb3VyIGNhcnQgaXMgZW1wdHkuPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgdXNlcj8uY2FydD8ubWFwKChpdGVtKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIDxwPntpdGVtLnByb2R1Y3R9PC9wPjtcbiAgICAgICAgfSlcbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Account.js\n");

/***/ })

})