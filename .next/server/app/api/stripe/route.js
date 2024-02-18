"use strict";
(() => {
var exports = {};
exports.id = 6417;
exports.ids = [6417];
exports.modules = {

/***/ 46517:
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 32081:
/***/ ((module) => {

module.exports = require("child_process");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

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

/***/ 65047:
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

// NAMESPACE OBJECT: ./src/app/api/stripe/route.js
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
// EXTERNAL MODULE: ./src/middleware/AuthUser.js
var AuthUser = __webpack_require__(93214);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(12023);
;// CONCATENATED MODULE: ./src/app/api/stripe/route.js


const stripe = __webpack_require__(63685)("sk_test_51NMv6ZSC6E6fnyMeTYV3h3Xge6Tot3xYQVEO6KMpiB5A6bKIrRS9YymIBEupAFqF0XM274IwwU2Zq7EXx1Pn8LiA00SyPEZqk9");
const dynamic = "force-dynamic";
async function POST(req) {
    try {
        const isAuthUser = await (0,AuthUser/* default */.Z)(req);
        if (isAuthUser) {
            const res = await req.json();
            const session = await stripe.checkout.sessions.create({
                payment_method_types: [
                    "card"
                ],
                line_items: res,
                mode: "payment",
                success_url: "http://localhost:3000/checkout" + "?status=success",
                cancel_url: "http://localhost:3000/checkout" + "?status=cancel"
            });
            return next_response/* default */.Z.json({
                success: true,
                id: session.id
            });
        } else {
            return next_response/* default */.Z.json({
                success: true,
                message: "You are not authenticated"
            });
        }
    } catch (e) {
        console.log(e);
        return next_response/* default */.Z.json({
            status: 500,
            success: false,
            message: "Something went wrong ! Please try again"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fstripe%2Froute&name=app%2Fapi%2Fstripe%2Froute&pagePath=private-next-app-dir%2Fapi%2Fstripe%2Froute.js&appDir=C%3A%5CUsers%5CVsmart%5CDesktop%5CTASK%5Cppp%5CNextJS-Ecommerce-2023-master%5Csrc%5Capp&appPaths=%2Fapi%2Fstripe%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/stripe/route","pathname":"/api/stripe","filename":"route","bundlePath":"app/api/stripe/route"},"resolvedPagePath":"C:\\Users\\Vsmart\\Desktop\\TASK\\ppp\\NextJS-Ecommerce-2023-master\\src\\app\\api\\stripe\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/stripe/route"

    

/***/ }),

/***/ 93214:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export dynamic */
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56447);
/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_0__);

const dynamic = "force-dynamic";
const AuthUser = async (req)=>{
    const token = req.headers.get("Authorization")?.split(" ")[1];
    if (!token) return false;
    try {
        const extractAuthUserInfo = jsonwebtoken__WEBPACK_IMPORTED_MODULE_0___default().verify(token, "default_secret_key");
        if (extractAuthUserInfo) return extractAuthUserInfo;
    } catch (e) {
        console.log(e);
        return false;
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthUser);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1697,8451,2023,6447,3685], () => (__webpack_exec__(65047)));
module.exports = __webpack_exports__;

})();