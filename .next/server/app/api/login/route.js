"use strict";
(() => {
var exports = {};
exports.id = 5740;
exports.ids = [5740];
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

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 65902:
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

// NAMESPACE OBJECT: ./src/app/api/login/route.js
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
// EXTERNAL MODULE: ./src/models/user.js
var user = __webpack_require__(3029);
// EXTERNAL MODULE: ./node_modules/bcryptjs/index.js
var bcryptjs = __webpack_require__(19978);
// EXTERNAL MODULE: ./node_modules/joi/lib/index.js
var lib = __webpack_require__(62830);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./node_modules/jsonwebtoken/index.js
var jsonwebtoken = __webpack_require__(56447);
var jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(12023);
;// CONCATENATED MODULE: ./src/app/api/login/route.js






const schema = lib_default().object({
    email: lib_default().string().email().required(),
    password: lib_default().string().required()
});
const dynamic = "force-dynamic";
async function POST(req) {
    await (0,database/* default */.Z)();
    const { email, password } = await req.json();
    const { error } = schema.validate({
        email,
        password
    });
    if (error) {
        return next_response/* default */.Z.json({
            success: false,
            message: error.details[0].message
        });
    }
    try {
        const checkUser = await user/* default */.Z.findOne({
            email
        });
        if (!checkUser) {
            return next_response/* default */.Z.json({
                success: false,
                message: "Account not found with this email"
            });
        }
        const checkPassword = await (0,bcryptjs.compare)(password, checkUser.password);
        if (!checkPassword) {
            return next_response/* default */.Z.json({
                success: false,
                message: "Incorrect password. Please try again !"
            });
        }
        const token = jsonwebtoken_default().sign({
            id: checkUser._id,
            email: checkUser?.email,
            role: checkUser?.role
        }, "default_secret_key", {
            expiresIn: "1d"
        });
        const finalData = {
            token,
            user: {
                email: checkUser.email,
                name: checkUser.name,
                _id: checkUser._id,
                role: checkUser.role
            }
        };
        return next_response/* default */.Z.json({
            success: true,
            message: "Login successfull!",
            finalData
        });
    } catch (e) {
        console.log("Error while logging In. Please try again");
        return next_response/* default */.Z.json({
            success: false,
            message: "Something went wrong ! Please try again later"
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Flogin%2Froute&name=app%2Fapi%2Flogin%2Froute&pagePath=private-next-app-dir%2Fapi%2Flogin%2Froute.js&appDir=C%3A%5CUsers%5CVsmart%5CDesktop%5CTASK%5Cppp%5CNextJS-Ecommerce-2023-master%5Csrc%5Capp&appPaths=%2Fapi%2Flogin%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/login/route","pathname":"/api/login","filename":"route","bundlePath":"app/api/login/route"},"resolvedPagePath":"C:\\Users\\Vsmart\\Desktop\\TASK\\ppp\\NextJS-Ecommerce-2023-master\\src\\app\\api\\login\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/login/route"

    

/***/ }),

/***/ 17495:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const configOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
const connectToDB = async ()=>{
    const connectionUrl = "mongodb+srv://shanmugaraja:chi1234@cluster0.ltxupr9.mongodb.net/";
    mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(connectionUrl, configOptions).then(()=>console.log("Ecommerce database connected successfully!")).catch((err)=>console.log(`Getting Error from DB connection ${err.message}`));
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectToDB);


/***/ }),

/***/ 3029:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: String,
    email: String,
    password: String,
    role: String
});
const User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("User", UserSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [1697,8451,2023,6447,8961,9978], () => (__webpack_exec__(65902)));
module.exports = __webpack_exports__;

})();