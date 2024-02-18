"use strict";
exports.id = 9190;
exports.ids = [9190];
exports.modules = {

/***/ 99190:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AF: () => (/* binding */ addNewAddress),
/* harmony export */   _N: () => (/* binding */ deleteAddress),
/* harmony export */   ar: () => (/* binding */ fetchAllAddresses),
/* harmony export */   y3: () => (/* binding */ updateAddress)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97270);

const addNewAddress = async (formData)=>{
    try {
        const res = await fetch("/api/address/add-new-address", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("token")}`
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
const fetchAllAddresses = async (id)=>{
    try {
        const res = await fetch(`/api/address/get-all-address?id=${id}`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("token")}`
            }
        });
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
const updateAddress = async (formData)=>{
    try {
        const res = await fetch("/api/address/update-address", {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("token")}`
            },
            body: JSON.stringify(formData)
        });
        const data = await res.json();
        return data;
    } catch (e) {
        console.log(e);
    }
};
const deleteAddress = async (id)=>{
    try {
        const res = await fetch(`/api/address/delete-address?id=${id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("token")}`
            }
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