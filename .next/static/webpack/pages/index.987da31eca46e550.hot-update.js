"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/Auth.js":
/*!***********************!*\
  !*** ./pages/Auth.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var C_WorkSpace_Todo_List_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var C_WorkSpace_Todo_List_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_WorkSpace_Todo_List_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_fbase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/fbase */ \"./lib/fbase.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar Auth = function() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), email = ref[0], setEmail = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), password = ref1[0], setPassword = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true), newAccout = ref2[0], setNewAccount = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\"), error = ref3[0], setError = ref3[1];\n    var onChange = function(event) {\n        var _target = event.target, name = _target.name, value = _target.value;\n        // const name = event?.target?.name;\n        // const { name, value } = event.target;\n        if (name === \"email\") {\n            setEmail(value);\n        } else if (name === \"password\") {\n            setPassword(value);\n        }\n        console.log(event.target.name);\n    };\n    var onSubmit = function() {\n        var _ref = _asyncToGenerator(C_WorkSpace_Todo_List_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var data;\n            return C_WorkSpace_Todo_List_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        event.preventDefault();\n                        _ctx.prev = 1;\n                        ;\n                        if (!newAccout) {\n                            _ctx.next = 9;\n                            break;\n                        }\n                        _ctx.next = 6;\n                        return _lib_fbase__WEBPACK_IMPORTED_MODULE_2__.authService.createUserWithEmailAndPassword(email, password);\n                    case 6:\n                        // create account\n                        data = _ctx.sent;\n                        _ctx.next = 12;\n                        break;\n                    case 9:\n                        _ctx.next = 11;\n                        return _lib_fbase__WEBPACK_IMPORTED_MODULE_2__.authService.signInWithEmailAndPassword(email, password);\n                    case 11:\n                        // log in\n                        data = _ctx.sent;\n                    case 12:\n                        console.log(data);\n                        _ctx.next = 18;\n                        break;\n                    case 15:\n                        _ctx.prev = 15;\n                        _ctx.t0 = _ctx[\"catch\"](1);\n                        setError(_ctx.t0.message);\n                    case 18:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee, null, [\n                [\n                    1,\n                    15\n                ]\n            ]);\n        }));\n        return function onSubmit(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    var toggleAccount = function() {\n        return setNewAccount(function(prev) {\n            return !prev;\n        });\n    };\n    var onSocialClick = function() {\n        var _ref = _asyncToGenerator(C_WorkSpace_Todo_List_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(event) {\n            var name, provider, data;\n            return C_WorkSpace_Todo_List_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n                while(1)switch(_ctx.prev = _ctx.next){\n                    case 0:\n                        name = event.target.name;\n                        ;\n                        if (name === \"google\") {\n                            provider = new _lib_fbase__WEBPACK_IMPORTED_MODULE_2__.firebaseInstance.auth.GoogleAuthProvider();\n                        } else if (name === \"github\") {\n                            provider = new _lib_fbase__WEBPACK_IMPORTED_MODULE_2__.firebaseInstance.auth.GithubAuthProvider();\n                        }\n                        _ctx.next = 5;\n                        return _lib_fbase__WEBPACK_IMPORTED_MODULE_2__.authService.signInWithPopup(provider);\n                    case 5:\n                        data = _ctx.sent;\n                        console.log(data);\n                    case 7:\n                    case \"end\":\n                        return _ctx.stop();\n                }\n            }, _callee);\n        }));\n        return function onSocialClick(event) {\n            return _ref.apply(this, arguments);\n        };\n    }();\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"section\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n            onSubmit: onSubmit,\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"form\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            name: \"email\",\n                            type: \"email\",\n                            placeholder: \"Email\",\n                            required: true,\n                            value: email,\n                            onChange: onChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                            lineNumber: 55,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            name: \"password\",\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            required: true,\n                            value: password,\n                            onChange: onChange\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                            lineNumber: 56,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"input\", {\n                            type: \"submit\",\n                            value: newAccout ? \"Create Account\" : \"Log In\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                            lineNumber: 57,\n                            columnNumber: 17\n                        }, _this),\n                        error\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                    lineNumber: 54,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"span\", {\n                    onClick: toggleAccount,\n                    children: newAccout ? \"Sign In\" : \"Create Account\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                    lineNumber: 60,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"p\", {\n                            children: \"Hi\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                            lineNumber: 62,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: onSocialClick,\n                            name: \"google\",\n                            children: \"Continue with Google\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                            lineNumber: 63,\n                            columnNumber: 17\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n                            onClick: onSocialClick,\n                            name: \"github\",\n                            children: \"Continue with GitHub\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                            lineNumber: 64,\n                            columnNumber: 17\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                    lineNumber: 61,\n                    columnNumber: 13\n                }, _this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form, {\n                    name: \"basic\",\n                    labelCol: {\n                        span: 8\n                    },\n                    wrapperCol: {\n                        span: 16\n                    },\n                    initialValues: {\n                        remember: true\n                    },\n                    onFinish: onSocialClick,\n                    onFinishFailed: onSocialClick,\n                    autoComplete: \"off\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {\n                            label: \"email\",\n                            name: \"email\",\n                            rules: [\n                                {\n                                    required: true,\n                                    message: 'Please input your email!'\n                                }\n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Input, {}, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                                lineNumber: 80,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                            lineNumber: 75,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {\n                            label: \"Password\",\n                            name: \"password\",\n                            rules: [\n                                {\n                                    required: true,\n                                    message: 'Please input your password!'\n                                }\n                            ],\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Input.Password, {}, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                                lineNumber: 88,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                            lineNumber: 83,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {\n                            name: \"remember\",\n                            valuePropName: \"checked\",\n                            wrapperCol: {\n                                offset: 8,\n                                span: 16\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Checkbox, {\n                                children: \"Remember me\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                                lineNumber: 92,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                            lineNumber: 91,\n                            columnNumber: 7\n                        }, _this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Form.Item, {\n                            wrapperCol: {\n                                offset: 8,\n                                span: 16\n                            },\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                                type: \"primary\",\n                                htmlType: \"submit\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                                lineNumber: 96,\n                                columnNumber: 9\n                            }, _this)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                            lineNumber: 95,\n                            columnNumber: 7\n                        }, _this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n                    lineNumber: 66,\n                    columnNumber: 13\n                }, _this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n            lineNumber: 53,\n            columnNumber: 9\n        }, _this)\n    }, void 0, false, {\n        fileName: \"C:\\\\WorkSpace\\\\Todo-List\\\\pages\\\\Auth.js\",\n        lineNumber: 52,\n        columnNumber: 9\n    }, _this));\n};\n_s(Auth, \"haBYU6G0PVOl+03YCHfy4CMYMR8=\");\n_c = Auth;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Auth);\nvar _c;\n$RefreshReg$(_c, \"Auth\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL0F1dGguanM/OGZmOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBhdXRoU2VydmljZSwgZmlyZWJhc2VJbnN0YW5jZSB9IGZyb20gXCIuLi9saWIvZmJhc2VcIjtcclxuaW1wb3J0IFJlYWN0LCB7dXNlU3RhdGV9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQge0Zvcm0sIElucHV0LCBCdXR0b24sIENoZWNrYm94fSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgQXV0aCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gICAgY29uc3QgW25ld0FjY291dCwgc2V0TmV3QWNjb3VudF0gPSB1c2VTdGF0ZSh0cnVlKTtcclxuICAgIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUoXCJcIik7XHJcbiAgICBjb25zdCBvbkNoYW5nZSA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHt0YXJnZXQ6IHtuYW1lLCB2YWx1ZX19ID0gZXZlbnQ7XHJcbiAgICAgICAgLy8gY29uc3QgbmFtZSA9IGV2ZW50Py50YXJnZXQ/Lm5hbWU7XHJcbiAgICAgICAgLy8gY29uc3QgeyBuYW1lLCB2YWx1ZSB9ID0gZXZlbnQudGFyZ2V0O1xyXG4gICAgICAgICBcclxuICAgICAgICBpZiAobmFtZSA9PT0gXCJlbWFpbFwiKSB7XHJcbiAgICAgICAgICAgIHNldEVtYWlsKHZhbHVlKTtcclxuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwicGFzc3dvcmRcIikge1xyXG4gICAgICAgICAgICBzZXRQYXNzd29yZCh2YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGV2ZW50LnRhcmdldC5uYW1lKTtcclxuICAgIH1cclxuICAgIGNvbnN0IG9uU3VibWl0ID0gYXN5bmMoZXZlbnQpID0+IHtcclxuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGxldCBkYXRhO1xyXG4gICAgICAgICAgICBpZiAobmV3QWNjb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgYWNjb3VudFxyXG4gICAgICAgICAgICAgICAgZGF0YSA9IGF3YWl0IGF1dGhTZXJ2aWNlLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gbG9nIGluXHJcbiAgICAgICAgICAgICAgICBkYXRhID0gYXdhaXQgYXV0aFNlcnZpY2Uuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcclxuICAgICAgICB9IGNhdGNoKGVycm9yKSB7XHJcbiAgICAgICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHRvZ2dsZUFjY291bnQgPSAoKSA9PiBzZXROZXdBY2NvdW50KHByZXYgPT4gIXByZXYpO1xyXG4gICAgY29uc3Qgb25Tb2NpYWxDbGljayA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IHt0YXJnZXQ6IHtuYW1lfX0gPSBldmVudDtcclxuICAgICAgICBsZXQgcHJvdmlkZXI7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG5hbWUgPT09IFwiZ29vZ2xlXCIpIHtcclxuICAgICAgICAgICAgcHJvdmlkZXIgPSBuZXcgZmlyZWJhc2VJbnN0YW5jZS5hdXRoLkdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmFtZSA9PT0gXCJnaXRodWJcIikge1xyXG4gICAgICAgICAgICBwcm92aWRlciA9IG5ldyBmaXJlYmFzZUluc3RhbmNlLmF1dGguR2l0aHViQXV0aFByb3ZpZGVyKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBhdXRoU2VydmljZS5zaWduSW5XaXRoUG9wdXAocHJvdmlkZXIpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gICAgfTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgPGRpdiBvblN1Ym1pdD17b25TdWJtaXR9PlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwiZW1haWxcIiB0eXBlPVwiZW1haWxcIiBwbGFjZWhvbGRlcj1cIkVtYWlsXCIgcmVxdWlyZWQgdmFsdWU9e2VtYWlsfSBvbkNoYW5nZT17b25DaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgdmFsdWU9e3Bhc3N3b3JkfSBvbkNoYW5nZT17b25DaGFuZ2V9Lz5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9e25ld0FjY291dCA/IFwiQ3JlYXRlIEFjY291bnRcIiA6IFwiTG9nIEluXCJ9IC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3J9XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgPHNwYW4gb25DbGljaz17dG9nZ2xlQWNjb3VudH0+e25ld0FjY291dCA/IFwiU2lnbiBJblwiIDogXCJDcmVhdGUgQWNjb3VudFwifTwvc3Bhbj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxwPkhpPC9wPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtvblNvY2lhbENsaWNrfSBuYW1lPVwiZ29vZ2xlXCI+Q29udGludWUgd2l0aCBHb29nbGU8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17b25Tb2NpYWxDbGlja30gbmFtZT1cImdpdGh1YlwiPkNvbnRpbnVlIHdpdGggR2l0SHViPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8Rm9ybVxyXG4gICAgICBuYW1lPVwiYmFzaWNcIlxyXG4gICAgICBsYWJlbENvbD17eyBzcGFuOiA4IH19XHJcbiAgICAgIHdyYXBwZXJDb2w9e3sgc3BhbjogMTYgfX1cclxuICAgICAgaW5pdGlhbFZhbHVlcz17eyByZW1lbWJlcjogdHJ1ZSB9fVxyXG4gICAgICBvbkZpbmlzaD17b25Tb2NpYWxDbGlja31cclxuICAgICAgb25GaW5pc2hGYWlsZWQ9e29uU29jaWFsQ2xpY2t9XHJcbiAgICAgIGF1dG9Db21wbGV0ZT1cIm9mZlwiXHJcbiAgICA+XHJcbiAgICAgIDxGb3JtLkl0ZW1cclxuICAgICAgICBsYWJlbD1cImVtYWlsXCJcclxuICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgIHJ1bGVzPXtbeyByZXF1aXJlZDogdHJ1ZSwgbWVzc2FnZTogJ1BsZWFzZSBpbnB1dCB5b3VyIGVtYWlsIScgfV19XHJcbiAgICAgID5cclxuICAgICAgICA8SW5wdXQgLz5cclxuICAgICAgPC9Gb3JtLkl0ZW0+XHJcblxyXG4gICAgICA8Rm9ybS5JdGVtXHJcbiAgICAgICAgbGFiZWw9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBydWxlcz17W3sgcmVxdWlyZWQ6IHRydWUsIG1lc3NhZ2U6ICdQbGVhc2UgaW5wdXQgeW91ciBwYXNzd29yZCEnIH1dfVxyXG4gICAgICA+XHJcbiAgICAgICAgPElucHV0LlBhc3N3b3JkIC8+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG5cclxuICAgICAgPEZvcm0uSXRlbSBuYW1lPVwicmVtZW1iZXJcIiB2YWx1ZVByb3BOYW1lPVwiY2hlY2tlZFwiIHdyYXBwZXJDb2w9e3sgb2Zmc2V0OiA4LCBzcGFuOiAxNiB9fT5cclxuICAgICAgICA8Q2hlY2tib3g+UmVtZW1iZXIgbWU8L0NoZWNrYm94PlxyXG4gICAgICA8L0Zvcm0uSXRlbT5cclxuXHJcbiAgICAgIDxGb3JtLkl0ZW0gd3JhcHBlckNvbD17eyBvZmZzZXQ6IDgsIHNwYW46IDE2IH19PlxyXG4gICAgICAgIDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgU3VibWl0XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvRm9ybS5JdGVtPlxyXG4gICAgPC9Gb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGg7Il0sIm5hbWVzIjpbImF1dGhTZXJ2aWNlIiwiZmlyZWJhc2VJbnN0YW5jZSIsIlJlYWN0IiwidXNlU3RhdGUiLCJGb3JtIiwiSW5wdXQiLCJCdXR0b24iLCJDaGVja2JveCIsIkF1dGgiLCJlbWFpbCIsInNldEVtYWlsIiwicGFzc3dvcmQiLCJzZXRQYXNzd29yZCIsIm5ld0FjY291dCIsInNldE5ld0FjY291bnQiLCJlcnJvciIsInNldEVycm9yIiwib25DaGFuZ2UiLCJldmVudCIsInRhcmdldCIsIm5hbWUiLCJ2YWx1ZSIsImNvbnNvbGUiLCJsb2ciLCJvblN1Ym1pdCIsImRhdGEiLCJwcmV2ZW50RGVmYXVsdCIsImNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwibWVzc2FnZSIsInRvZ2dsZUFjY291bnQiLCJwcmV2Iiwib25Tb2NpYWxDbGljayIsInByb3ZpZGVyIiwiYXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsIkdpdGh1YkF1dGhQcm92aWRlciIsInNpZ25JbldpdGhQb3B1cCIsInNlY3Rpb24iLCJkaXYiLCJmb3JtIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInNwYW4iLCJvbkNsaWNrIiwicCIsImJ1dHRvbiIsImxhYmVsQ29sIiwid3JhcHBlckNvbCIsImluaXRpYWxWYWx1ZXMiLCJyZW1lbWJlciIsIm9uRmluaXNoIiwib25GaW5pc2hGYWlsZWQiLCJhdXRvQ29tcGxldGUiLCJJdGVtIiwibGFiZWwiLCJydWxlcyIsIlBhc3N3b3JkIiwidmFsdWVQcm9wTmFtZSIsIm9mZnNldCIsImh0bWxUeXBlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/Auth.js\n");

/***/ })

});