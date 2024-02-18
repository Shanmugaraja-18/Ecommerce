"use strict";
exports.id = 2189;
exports.ids = [2189];
exports.modules = {

/***/ 81058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ Notification)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(93578);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1536);
/* harmony import */ var react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_toastify_dist_ReactToastify_css__WEBPACK_IMPORTED_MODULE_2__);



function Notification() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_toastify__WEBPACK_IMPORTED_MODULE_1__/* .ToastContainer */ .Ix, {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        newestOnTop: false,
        closeOnClick: true,
        pauseOnFocusLoss: true,
        draggable: true,
        pauseOnHover: true,
        theme: "light",
        rtl: false
    });
}


/***/ }),

/***/ 39048:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CA: () => (/* binding */ productByCategory),
/* harmony export */   T5: () => (/* binding */ productById),
/* harmony export */   c0: () => (/* binding */ getAllAdminProducts)
/* harmony export */ });
/* unused harmony exports addNewProduct, updateAProduct, deleteAProduct */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34180);
//add a new product service

const addNewProduct = async (formData)=>{
    try {
        const response = await fetch("/api/admin/add-product", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${Cookies.get("token")}`
            },
            body: JSON.stringify(formData)
        });
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
const getAllAdminProducts = async ()=>{
    try {
        const res = await fetch("http://localhost:3000/api/admin/all-products", {
            method: "GET",
            cache: "no-store"
        });
        const data = await res.json();
        return data;
    } catch (error) {
        console.log(error);
    }
};
const updateAProduct = async (formData)=>{
    try {
        const res = await fetch("/api/admin/update-product", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${Cookies.get("token")}`
            },
            cache: "no-store",
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
const deleteAProduct = async (id)=>{
    try {
        const res = await fetch(`/api/admin/delete-product?id=${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${Cookies.get("token")}`
            }
        });
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
const productByCategory = async (id)=>{
    try {
        const res = await fetch(`http://localhost:3000/api/admin/product-by-category?id=${id}`, {
            method: "GET",
            cache: "no-store"
        });
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
const productById = async (id)=>{
    try {
        const res = await fetch(`http://localhost:3000/api/admin/product-by-id?id=${id}`, {
            method: "GET",
            cache: "no-store"
        });
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};


/***/ })

};
;