"use strict";
exports.id = 2141;
exports.ids = [2141];
exports.modules = {

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


/***/ }),

/***/ 74911:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const NewAddressSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    userID: {
        type: (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema).Types.ObjectId,
        ref: "User"
    },
    fullName: String,
    address: String,
    city: String,
    country: String,
    postalCode: String
}, {
    timestamps: true
});
const Address = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Address || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Address", NewAddressSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Address);


/***/ })

};
;