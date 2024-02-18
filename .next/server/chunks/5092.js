"use strict";
exports.id = 5092;
exports.ids = [5092];
exports.modules = {

/***/ 95092:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Bi: () => (/* binding */ getAllOrdersForAllUsers),
/* harmony export */   ax: () => (/* binding */ getAllOrdersForUser),
/* harmony export */   mg: () => (/* binding */ createNewOrder),
/* harmony export */   s$: () => (/* binding */ getOrderDetails),
/* harmony export */   wr: () => (/* binding */ updateStatusOfOrder)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97270);

const createNewOrder = async (formData)=>{
    try {
        const res = await fetch("/api/order/create-order", {
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
const getAllOrdersForUser = async (id)=>{
    try {
        const res = await fetch(`/api/order/get-all-orders?id=${id}`, {
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
const getOrderDetails = async (id)=>{
    try {
        const res = await fetch(`/api/order/order-details?id=${id}`, {
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
const getAllOrdersForAllUsers = async ()=>{
    try {
        const res = await fetch(`/api/admin/orders/get-all-orders`, {
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
const updateStatusOfOrder = async (formData)=>{
    try {
        const res = await fetch(`/api/admin/orders/update-order`, {
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


/***/ })

};
;