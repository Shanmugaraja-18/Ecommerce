"use strict";
(() => {
var exports = {};
exports.id = 9828;
exports.ids = [9828];
exports.modules = {

/***/ 46517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 64598:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/order/create-order/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  POST: () => (POST),
  dynamic: () => (dynamic)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(36519);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(53488);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/database/index.js
var database = __webpack_require__(17495);
// EXTERNAL MODULE: ./src/middleware/AuthUser.js
var AuthUser = __webpack_require__(93214);
// EXTERNAL MODULE: ./src/models/cart.js
var cart = __webpack_require__(24838);
// EXTERNAL MODULE: ./src/models/order.js
var order = __webpack_require__(75404);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(12023);
;// CONCATENATED MODULE: ./src/app/api/order/create-order/route.js





const dynamic = "force-dynamic";
async function POST(req) {
    try {
        await (0,database/* default */.Z)();
        const isAuthUser = await (0,AuthUser/* default */.Z)(req);
        if (isAuthUser) {
            const data = await req.json();
            const { user } = data;
            const saveNewOrder = await order/* default */.Z.create(data);
            if (saveNewOrder) {
                await cart/* default */.Z.deleteMany({
                    userID: user
                });
                return next_response/* default */.Z.json({
                    success: true,
                    message: "Products are on the way !"
                });
            } else {
                return next_response/* default */.Z.json({
                    success: false,
                    message: "Failed to create a order ! Please try again"
                });
            }
        } else {
            return next_response/* default */.Z.json({
                success: false,
                message: "You are not authticated"
            });
        }
    } catch (e) {
        return next_response/* default */.Z.json({
            success: false,
            message: "Something went wrong ! Please try again later"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Forder%2Fcreate-order%2Froute&name=app%2Fapi%2Forder%2Fcreate-order%2Froute&pagePath=private-next-app-dir%2Fapi%2Forder%2Fcreate-order%2Froute.js&appDir=C%3A%5CUsers%5CVsmart%5CDesktop%5CTASK%5Cppp%5CNextJS-Ecommerce-2023-master%5Csrc%5Capp&appPaths=%2Fapi%2Forder%2Fcreate-order%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/order/create-order/route","pathname":"/api/order/create-order","filename":"route","bundlePath":"app/api/order/create-order/route"},"resolvedPagePath":"C:\\Users\\Vsmart\\Desktop\\TASK\\ppp\\NextJS-Ecommerce-2023-master\\src\\app\\api\\order\\create-order\\route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/order/create-order/route"

    

/***/ }),

/***/ 24838:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const CartSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    userID: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "User"
    },
    productID: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "Products"
    },
    quantity: {
        type: Number,
        required: true,
        default: 1
    }
}, {
    timestamps: true
});
const Cart = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Cart || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Cart", CartSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Cart);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1697,8451,2023,6447,6847], () => (__webpack_exec__(64598)));
module.exports = __webpack_exports__;

})();