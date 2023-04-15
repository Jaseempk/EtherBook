"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.js":
/*!***************************!*\
  !*** ./src/pages/_app.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var _web3_react_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @web3-react/core */ \"./node_modules/@web3-react/core/dist/core.esm.js\");\n/* harmony import */ var _ethersproject_providers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ethersproject/providers */ \"./node_modules/@ethersproject/providers/lib.esm/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _contracts_getContract__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../contracts/getContract */ \"./src/contracts/getContract.js\");\n/* harmony import */ var _contracts_contractAddresses_json__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../contracts/contractAddresses.json */ \"./src/contracts/contractAddresses.json\");\n/* harmony import */ var _ethersproject_units__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ethersproject/units */ \"./node_modules/@ethersproject/units/lib.esm/index.js\");\n/* harmony import */ var _utils_gasCalculator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/gasCalculator */ \"./src/utils/gasCalculator.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction getLibrary(provider) {\n    const library = new _ethersproject_providers__WEBPACK_IMPORTED_MODULE_8__.Web3Provider(provider);\n    library.pollingInterval = 12000;\n    return library;\n}\nfunction MyApp(param) {\n    let { Component , pageProps  } = param;\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const [mainContract, setMainContract] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    const [addressList, setAddressList] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [mostFrequentAddresses, setMostFrequentAddresses] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [gasPrice, setGasPrice] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);\n    // Fetch and set contract instance\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchMainContractInstance = async ()=>{\n            try {\n                const contractInstance = await (0,_contracts_getContract__WEBPACK_IMPORTED_MODULE_5__.getContract)(_contracts_contractAddresses_json__WEBPACK_IMPORTED_MODULE_6__.GasCalculatorAndAddressBook, web3Provider.getSigner());\n                setMainContract(contractInstance);\n            } catch (error) {\n                console.error(\"Error fetching main contract instance: \", error);\n            }\n        };\n        const web3Provider = window.ethereum;\n        if (web3Provider) {\n            fetchMainContractInstance();\n        } else {\n            console.error(\"Web3 provider not found. Please install MetaMask\");\n        }\n    }, []);\n    //Event Listener\n    /**\n   * \n  useEffect(() => {\n    const handleRouteChange = () => {\n      onClose();\n    };\n  \n    router.events.on('routeChangeStart', handleRouteChange);\n  \n    return () => {\n      router.events.off('routeChangeStart', handleRouteChange);\n    };\n  }, [onClose, router]);\n  */ // Fetch and set addressList\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const fetchAddressList = async ()=>{\n            const gasCalculatorAndAddressBookContract1 = await ethers.getContract(\"GasCalculatorAndAddressBookContract\");\n            try {\n                const addresses = await mainContract.getAddresses();\n                setAddressList(addresses);\n            } catch (error) {\n                console.error(\"Error fetching address list: \", error);\n            }\n        };\n        if (mainContract) {\n            fetchAddressList();\n        }\n    }, [\n        mainContract\n    ]);\n    // Calculate gas price\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const calculateGasPrice = async ()=>{\n            try {\n                const gasPriceFromOracle = await (0,_utils_gasCalculator__WEBPACK_IMPORTED_MODULE_7__.getGasPriceFromOracle)();\n                setGasPrice(gasPriceFromOracle);\n            } catch (error) {\n                console.error(\"Error calculating gas price: \", error);\n            }\n        };\n        calculateGasPrice();\n    }, []);\n    // Fetch and set most frequent addresses\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const calculateFrequentAddresses = async ()=>{\n            try {\n                const gasPriceInWei = (0,_ethersproject_units__WEBPACK_IMPORTED_MODULE_9__.parseEther)(gasPrice.toString());\n                const addresses = await gasCalculatorAndAddressBookContract.getTopAddresses(gasPriceInWei);\n                setMostFrequentAddresses(addresses);\n            } catch (error) {\n                console.error(\"Error fetching most frequent addresses: \", error);\n            }\n        };\n        if (gasPrice && gasCalculatorAndAddressBookContract) {\n            calculateFrequentAddresses();\n        }\n    }, [\n        gasPrice,\n        gasCalculatorAndAddressBookContract\n    ]);\n    // Add an address\n    const addAddress = async (address)=>{\n        try {\n            await gasCalculatorAndAddressBookContract.addAddress(address);\n            setAddressList([\n                ...addressList,\n                address\n            ]);\n        } catch (error) {\n            console.error(\"entho error\");\n        }\n    };\n    addAddress();\n    const removeAddress = async (address)=>{\n        if (!addressList) {\n            console.error(\"AddressList contract not found\");\n            return;\n        }\n        try {\n            const tx = await addressList.removeAddress(address);\n            const receipt = await tx.wait();\n            console.log(\"Address removed: \", receipt);\n        } catch (error) {\n            console.error(\"Error removing address: \", error);\n        }\n    };\n    removeAddress();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_10__.ChakraProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_web3_react_core__WEBPACK_IMPORTED_MODULE_2__.Web3ReactProvider, {\n            getLibrary: getLibrary,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps,\n                addressList: addressList,\n                mostFrequentAddresses: mostFrequentAddresses,\n                gasPrice: gasPrice,\n                addAddress: addAddress,\n                removeAddress: removeAddress\n            }, void 0, false, {\n                fileName: \"/home/jaseempk/SFPDevFolio/EtherBook/src/pages/_app.js\",\n                lineNumber: 143,\n                columnNumber: 7\n            }, this)\n        }, void 0, false, {\n            fileName: \"/home/jaseempk/SFPDevFolio/EtherBook/src/pages/_app.js\",\n            lineNumber: 142,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/jaseempk/SFPDevFolio/EtherBook/src/pages/_app.js\",\n        lineNumber: 141,\n        columnNumber: 3\n    }, this);\n}\n_s(MyApp, \"glzZNbSiCvUKlGcZUk1y52KfY74=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_4__.useRouter\n    ];\n});\n_c = MyApp;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyApp);\nvar _c;\n$RefreshReg$(_c, \"MyApp\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWU7bUJBQUlEO2dCQUFhMkI7YUFBUTtRQUMxQyxFQUFFLE9BQU9oQixPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQztRQUNoQjtJQUNGO0lBQ0FlO0lBQ0EsTUFBTUUsZ0JBQWUsT0FBTUQsVUFBVTtRQUNuQyxJQUFJLENBQUMzQixhQUFhO1lBQ2hCWSxRQUFRRCxLQUFLLENBQUM7WUFDZDtRQUNGLENBQUM7UUFFRCxJQUFJO1lBQ0YsTUFBTWtCLEtBQUssTUFBTTdCLFlBQVk0QixhQUFhLENBQUNEO1lBQzNDLE1BQU1HLFVBQVUsTUFBTUQsR0FBR0UsSUFBSTtZQUM3Qm5CLFFBQVFvQixHQUFHLENBQUMscUJBQXFCRjtRQUNuQyxFQUFFLE9BQU9uQixPQUFPO1lBQ2RDLFFBQVFELEtBQUssQ0FBQyw0QkFBNEJBO1FBQzVDO0lBQ0Y7SUFFQWlCO0lBS0YscUJBQ0UsOERBQUNqRCw2REFBY0E7a0JBQ2IsNEVBQUNDLCtEQUFpQkE7WUFBQ1UsWUFBWUE7c0JBQzdCLDRFQUFDSztnQkFBVyxHQUFHQyxTQUFTO2dCQUFFSSxhQUFhQTtnQkFBYUUsdUJBQXVCQTtnQkFBdUJFLFVBQVVBO2dCQUFVc0IsWUFBWUE7Z0JBQVlFLGVBQWVBOzs7Ozs7Ozs7Ozs7Ozs7O0FBSW5LO0dBaklTbEM7O1FBQ1FWLGtEQUFTQTs7O0tBRGpCVTtBQW1JVCwrREFBZUEsS0FBS0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC5qcz84ZmRhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vc3R5bGVzL2dsb2JhbHMuY3NzJztcbmltcG9ydCB7IENoYWtyYVByb3ZpZGVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCc7XG5pbXBvcnQgeyBXZWIzUmVhY3RQcm92aWRlciB9IGZyb20gJ0B3ZWIzLXJlYWN0L2NvcmUnO1xuaW1wb3J0IHsgV2ViM1Byb3ZpZGVyIH0gZnJvbSAnQGV0aGVyc3Byb2plY3QvcHJvdmlkZXJzJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcic7XG5pbXBvcnQgeyBnZXRDb250cmFjdCB9IGZyb20gJy4uL2NvbnRyYWN0cy9nZXRDb250cmFjdCc7XG5pbXBvcnQgY29udHJhY3RBZGRyZXNzZXMgZnJvbSAnLi4vY29udHJhY3RzL2NvbnRyYWN0QWRkcmVzc2VzLmpzb24nO1xuaW1wb3J0IHsgcGFyc2VFdGhlciB9IGZyb20gJ0BldGhlcnNwcm9qZWN0L3VuaXRzJztcbmltcG9ydCB7IGdldEdhc1ByaWNlRnJvbU9yYWNsZSwgZXN0aW1hdGVHYXNSZXF1aXJlZCB9IGZyb20gJy4uL3V0aWxzL2dhc0NhbGN1bGF0b3InO1xuXG5mdW5jdGlvbiBnZXRMaWJyYXJ5KHByb3ZpZGVyKSB7XG4gIGNvbnN0IGxpYnJhcnkgPSBuZXcgV2ViM1Byb3ZpZGVyKHByb3ZpZGVyKTtcbiAgbGlicmFyeS5wb2xsaW5nSW50ZXJ2YWwgPSAxMjAwMDtcbiAgcmV0dXJuIGxpYnJhcnk7XG59XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcbiAgY29uc3QgW21haW5Db250cmFjdCwgc2V0TWFpbkNvbnRyYWN0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbYWRkcmVzc0xpc3QsIHNldEFkZHJlc3NMaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW21vc3RGcmVxdWVudEFkZHJlc3Nlcywgc2V0TW9zdEZyZXF1ZW50QWRkcmVzc2VzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2dhc1ByaWNlLCBzZXRHYXNQcmljZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgXG4gIC8vIEZldGNoIGFuZCBzZXQgY29udHJhY3QgaW5zdGFuY2VcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaE1haW5Db250cmFjdEluc3RhbmNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY29udHJhY3RJbnN0YW5jZSA9IGF3YWl0IGdldENvbnRyYWN0KGNvbnRyYWN0QWRkcmVzc2VzLkdhc0NhbGN1bGF0b3JBbmRBZGRyZXNzQm9vaywgd2ViM1Byb3ZpZGVyLmdldFNpZ25lcigpKTtcbiAgICAgICAgc2V0TWFpbkNvbnRyYWN0KGNvbnRyYWN0SW5zdGFuY2UpO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbWFpbiBjb250cmFjdCBpbnN0YW5jZTogJywgZXJyb3IpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHdlYjNQcm92aWRlciA9IHdpbmRvdy5ldGhlcmV1bTtcbiAgICBpZiAod2ViM1Byb3ZpZGVyKSB7XG4gICAgICBmZXRjaE1haW5Db250cmFjdEluc3RhbmNlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ1dlYjMgcHJvdmlkZXIgbm90IGZvdW5kLiBQbGVhc2UgaW5zdGFsbCBNZXRhTWFzaycpO1xuICAgIH1cbiAgfSwgW10pO1xuXG4gIC8vRXZlbnQgTGlzdGVuZXJcbiAgLyoqXG4gICAqIFxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGhhbmRsZVJvdXRlQ2hhbmdlID0gKCkgPT4ge1xuICAgICAgb25DbG9zZSgpO1xuICAgIH07XG4gIFxuICAgIHJvdXRlci5ldmVudHMub24oJ3JvdXRlQ2hhbmdlU3RhcnQnLCBoYW5kbGVSb3V0ZUNoYW5nZSk7XG4gIFxuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByb3V0ZXIuZXZlbnRzLm9mZigncm91dGVDaGFuZ2VTdGFydCcsIGhhbmRsZVJvdXRlQ2hhbmdlKTtcbiAgICB9O1xuICB9LCBbb25DbG9zZSwgcm91dGVyXSk7XG4gICovXG4gIFxuXG4gIC8vIEZldGNoIGFuZCBzZXQgYWRkcmVzc0xpc3RcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBmZXRjaEFkZHJlc3NMaXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgZ2FzQ2FsY3VsYXRvckFuZEFkZHJlc3NCb29rQ29udHJhY3Q9YXdhaXQgZXRoZXJzLmdldENvbnRyYWN0KFwiR2FzQ2FsY3VsYXRvckFuZEFkZHJlc3NCb29rQ29udHJhY3RcIik7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBhZGRyZXNzZXMgPSBhd2FpdCBtYWluQ29udHJhY3QuZ2V0QWRkcmVzc2VzKCk7XG4gICAgICAgIHNldEFkZHJlc3NMaXN0KGFkZHJlc3Nlcyk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBmZXRjaGluZyBhZGRyZXNzIGxpc3Q6ICcsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobWFpbkNvbnRyYWN0KSB7XG4gICAgICBmZXRjaEFkZHJlc3NMaXN0KCk7XG4gICAgfVxuICB9LCBbbWFpbkNvbnRyYWN0XSk7XG5cbiAgLy8gQ2FsY3VsYXRlIGdhcyBwcmljZVxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGNhbGN1bGF0ZUdhc1ByaWNlID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZ2FzUHJpY2VGcm9tT3JhY2xlID0gYXdhaXQgZ2V0R2FzUHJpY2VGcm9tT3JhY2xlKCk7XG4gICAgICAgIHNldEdhc1ByaWNlKGdhc1ByaWNlRnJvbU9yYWNsZSk7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjYWxjdWxhdGluZyBnYXMgcHJpY2U6ICcsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjYWxjdWxhdGVHYXNQcmljZSgpO1xuICB9LCBbXSk7XG5cblxuICAvLyBGZXRjaCBhbmQgc2V0IG1vc3QgZnJlcXVlbnQgYWRkcmVzc2VzXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY2FsY3VsYXRlRnJlcXVlbnRBZGRyZXNzZXMgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBnYXNQcmljZUluV2VpID0gcGFyc2VFdGhlcihnYXNQcmljZS50b1N0cmluZygpKTtcbiAgICAgICAgY29uc3QgYWRkcmVzc2VzID0gYXdhaXQgZ2FzQ2FsY3VsYXRvckFuZEFkZHJlc3NCb29rQ29udHJhY3QuZ2V0VG9wQWRkcmVzc2VzKGdhc1ByaWNlSW5XZWkpO1xuICAgICAgICBzZXRNb3N0RnJlcXVlbnRBZGRyZXNzZXMoYWRkcmVzc2VzKTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGZldGNoaW5nIG1vc3QgZnJlcXVlbnQgYWRkcmVzc2VzOiAnLCBlcnJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKGdhc1ByaWNlICYmIGdhc0NhbGN1bGF0b3JBbmRBZGRyZXNzQm9va0NvbnRyYWN0KSB7XG4gICAgICBjYWxjdWxhdGVGcmVxdWVudEFkZHJlc3NlcygpO1xuICAgIH1cbiAgfSwgW2dhc1ByaWNlLCBnYXNDYWxjdWxhdG9yQW5kQWRkcmVzc0Jvb2tDb250cmFjdF0pO1xuXG4gIC8vIEFkZCBhbiBhZGRyZXNzXG4gIGNvbnN0IGFkZEFkZHJlc3MgPSBhc3luYyAoYWRkcmVzcykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBnYXNDYWxjdWxhdG9yQW5kQWRkcmVzc0Jvb2tDb250cmFjdC5hZGRBZGRyZXNzKGFkZHJlc3MpO1xuICAgICAgc2V0QWRkcmVzc0xpc3QoWy4uLmFkZHJlc3NMaXN0LCBhZGRyZXNzXSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2VudGhvIGVycm9yJylcbiAgICB9XG4gIH1cbiAgYWRkQWRkcmVzcygpO1xuICBjb25zdCByZW1vdmVBZGRyZXNzID1hc3luYyhhZGRyZXNzKT0+e1xuICAgIGlmICghYWRkcmVzc0xpc3QpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0FkZHJlc3NMaXN0IGNvbnRyYWN0IG5vdCBmb3VuZCcpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHR4ID0gYXdhaXQgYWRkcmVzc0xpc3QucmVtb3ZlQWRkcmVzcyhhZGRyZXNzKTtcbiAgICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCB0eC53YWl0KCk7XG4gICAgICBjb25zb2xlLmxvZygnQWRkcmVzcyByZW1vdmVkOiAnLCByZWNlaXB0KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgcmVtb3ZpbmcgYWRkcmVzczogJywgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIHJlbW92ZUFkZHJlc3MoKTtcbiAgXG5cblxuXG5yZXR1cm4gKFxuICA8Q2hha3JhUHJvdmlkZXI+XG4gICAgPFdlYjNSZWFjdFByb3ZpZGVyIGdldExpYnJhcnk9e2dldExpYnJhcnl9PlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBhZGRyZXNzTGlzdD17YWRkcmVzc0xpc3R9IG1vc3RGcmVxdWVudEFkZHJlc3Nlcz17bW9zdEZyZXF1ZW50QWRkcmVzc2VzfSBnYXNQcmljZT17Z2FzUHJpY2V9IGFkZEFkZHJlc3M9e2FkZEFkZHJlc3N9IHJlbW92ZUFkZHJlc3M9e3JlbW92ZUFkZHJlc3N9IC8+XG4gICAgPC9XZWIzUmVhY3RQcm92aWRlcj5cbiAgPC9DaGFrcmFQcm92aWRlcj5cbik7XG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwO1xuXG4iXSwibmFtZXMiOlsiQ2hha3JhUHJvdmlkZXIiLCJXZWIzUmVhY3RQcm92aWRlciIsIldlYjNQcm92aWRlciIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUm91dGVyIiwiZ2V0Q29udHJhY3QiLCJjb250cmFjdEFkZHJlc3NlcyIsInBhcnNlRXRoZXIiLCJnZXRHYXNQcmljZUZyb21PcmFjbGUiLCJlc3RpbWF0ZUdhc1JlcXVpcmVkIiwiZ2V0TGlicmFyeSIsInByb3ZpZGVyIiwibGlicmFyeSIsInBvbGxpbmdJbnRlcnZhbCIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIiwicm91dGVyIiwibWFpbkNvbnRyYWN0Iiwic2V0TWFpbkNvbnRyYWN0IiwiYWRkcmVzc0xpc3QiLCJzZXRBZGRyZXNzTGlzdCIsIm1vc3RGcmVxdWVudEFkZHJlc3NlcyIsInNldE1vc3RGcmVxdWVudEFkZHJlc3NlcyIsImdhc1ByaWNlIiwic2V0R2FzUHJpY2UiLCJmZXRjaE1haW5Db250cmFjdEluc3RhbmNlIiwiY29udHJhY3RJbnN0YW5jZSIsIkdhc0NhbGN1bGF0b3JBbmRBZGRyZXNzQm9vayIsIndlYjNQcm92aWRlciIsImdldFNpZ25lciIsImVycm9yIiwiY29uc29sZSIsIndpbmRvdyIsImV0aGVyZXVtIiwiZmV0Y2hBZGRyZXNzTGlzdCIsImdhc0NhbGN1bGF0b3JBbmRBZGRyZXNzQm9va0NvbnRyYWN0IiwiZXRoZXJzIiwiYWRkcmVzc2VzIiwiZ2V0QWRkcmVzc2VzIiwiY2FsY3VsYXRlR2FzUHJpY2UiLCJnYXNQcmljZUZyb21PcmFjbGUiLCJjYWxjdWxhdGVGcmVxdWVudEFkZHJlc3NlcyIsImdhc1ByaWNlSW5XZWkiLCJ0b1N0cmluZyIsImdldFRvcEFkZHJlc3NlcyIsImFkZEFkZHJlc3MiLCJhZGRyZXNzIiwicmVtb3ZlQWRkcmVzcyIsInR4IiwicmVjZWlwdCIsIndhaXQiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.js\n"));

/***/ })

});