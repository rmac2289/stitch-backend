webpackHotUpdate_N_E("pages/products",{

/***/ "./components/styles/DropDown.js":
/*!***************************************!*\
  !*** ./components/styles/DropDown.js ***!
  \***************************************/
/*! exports provided: DropDown, DropDownItem, SearchStyles, SearchContainerStyles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DropDown\", function() { return DropDown; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DropDownItem\", function() { return DropDownItem; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchStyles\", function() { return SearchStyles; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SearchContainerStyles\", function() { return SearchContainerStyles; });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\nvar DropDown = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"DropDown\",\n  componentId: \"n5d97g-0\"\n})([\"position:absolute;width:100%;z-index:2;border-top:1px solid lightgrey;outline:none;\"]);\nvar DropDownItem = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"DropDown__DropDownItem\",\n  componentId: \"n5d97g-1\"\n})([\"border-bottom:1px solid lightgrey;background:\", \";padding:1rem;transition:all 0.2s;\", \";display:flex;align-items:center;border-left:10px solid \", \";img{margin-right:10px;}\"], function (props) {\n  return props.highlighted ? \"#f7f7f7\" : \"white\";\n}, function (props) {\n  return props.highlighted ? \"padding-left: 2rem;\" : null;\n}, function (props) {\n  return props.highlighted ? props.theme.lightgrey : \"white\";\n});\nvar glow = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__[\"keyframes\"])([\"from{box-shadow:0 0 0px black;}to{box-shadow:0 0 10px 1px black;}\"]);\nvar SearchContainerStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"DropDown__SearchContainerStyles\",\n  componentId: \"n5d97g-2\"\n})([\"background-image:url(/search.png);background-repeat:no-repeat;background-size:1.5%;background-position:left;\"]);\nvar SearchStyles = styled_components__WEBPACK_IMPORTED_MODULE_0__[\"default\"].div.withConfig({\n  displayName: \"DropDown__SearchStyles\",\n  componentId: \"n5d97g-3\"\n})([\"position:relative;input{width:100%;background:transparent;padding:10px;margin-left:15px;border:0;font-size:1.5rem;outline:none;&.loading{animation:\", \" 0.5s ease-in-out infinite alternate;}}\"], glow);\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zdHlsZXMvRHJvcERvd24uanM/MWUwNyJdLCJuYW1lcyI6WyJEcm9wRG93biIsInN0eWxlZCIsImRpdiIsIkRyb3BEb3duSXRlbSIsInByb3BzIiwiaGlnaGxpZ2h0ZWQiLCJ0aGVtZSIsImxpZ2h0Z3JleSIsImdsb3ciLCJrZXlmcmFtZXMiLCJTZWFyY2hDb250YWluZXJTdHlsZXMiLCJTZWFyY2hTdHlsZXMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUEsSUFBTUEsUUFBUSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLDJGQUFkO0FBUUEsSUFBTUMsWUFBWSxHQUFHRix5REFBTSxDQUFDQyxHQUFWO0FBQUE7QUFBQTtBQUFBLG9MQUVGLFVBQUNFLEtBQUQ7QUFBQSxTQUFZQSxLQUFLLENBQUNDLFdBQU4sR0FBb0IsU0FBcEIsR0FBZ0MsT0FBNUM7QUFBQSxDQUZFLEVBS2QsVUFBQ0QsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsV0FBTixHQUFvQixxQkFBcEIsR0FBNEMsSUFBeEQ7QUFBQSxDQUxjLEVBU1osVUFBQ0QsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsV0FBTixHQUFvQkQsS0FBSyxDQUFDRSxLQUFOLENBQVlDLFNBQWhDLEdBQTRDLE9BQXhEO0FBQUEsQ0FUWSxDQUFsQjtBQWVBLElBQU1DLElBQUksR0FBR0MsbUVBQUgsdUVBQVY7QUFRQSxJQUFNQyxxQkFBcUIsR0FBR1QseURBQU0sQ0FBQ0MsR0FBVjtBQUFBO0FBQUE7QUFBQSxvSEFBM0I7QUFNQSxJQUFNUyxZQUFZLEdBQUdWLHlEQUFNLENBQUNDLEdBQVY7QUFBQTtBQUFBO0FBQUEsdU1BWUNNLElBWkQsQ0FBbEI7QUFpQkEiLCJmaWxlIjoiLi9jb21wb25lbnRzL3N0eWxlcy9Ecm9wRG93bi5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IERyb3BEb3duID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgei1pbmRleDogMjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIGxpZ2h0Z3JleTtcbiAgb3V0bGluZTogbm9uZTtcbmA7XG5cbmNvbnN0IERyb3BEb3duSXRlbSA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyZXk7XG4gIGJhY2tncm91bmQ6ICR7KHByb3BzKSA9PiAocHJvcHMuaGlnaGxpZ2h0ZWQgPyBcIiNmN2Y3ZjdcIiA6IFwid2hpdGVcIil9O1xuICBwYWRkaW5nOiAxcmVtO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcbiAgJHsocHJvcHMpID0+IChwcm9wcy5oaWdobGlnaHRlZCA/IFwicGFkZGluZy1sZWZ0OiAycmVtO1wiIDogbnVsbCl9O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItbGVmdDogMTBweCBzb2xpZFxuICAgICR7KHByb3BzKSA9PiAocHJvcHMuaGlnaGxpZ2h0ZWQgPyBwcm9wcy50aGVtZS5saWdodGdyZXkgOiBcIndoaXRlXCIpfTtcbiAgaW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IGdsb3cgPSBrZXlmcmFtZXNgXG4gIGZyb20ge1xuICAgIGJveC1zaGFkb3c6IDAgMCAwcHggYmxhY2s7XG4gIH1cbiAgdG8ge1xuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IDFweCBibGFjaztcbiAgfVxuYDtcbmNvbnN0IFNlYXJjaENvbnRhaW5lclN0eWxlcyA9IHN0eWxlZC5kaXZgXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvc2VhcmNoLnBuZyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogMS41JTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdDtcbmA7XG5jb25zdCBTZWFyY2hTdHlsZXMgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGlucHV0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblxuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgYm9yZGVyOiAwO1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgJi5sb2FkaW5nIHtcbiAgICAgIGFuaW1hdGlvbjogJHtnbG93fSAwLjVzIGVhc2UtaW4tb3V0IGluZmluaXRlIGFsdGVybmF0ZTtcbiAgICB9XG4gIH1cbmA7XG5cbmV4cG9ydCB7IERyb3BEb3duLCBEcm9wRG93bkl0ZW0sIFNlYXJjaFN0eWxlcywgU2VhcmNoQ29udGFpbmVyU3R5bGVzIH07XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/styles/DropDown.js\n");

/***/ })

})