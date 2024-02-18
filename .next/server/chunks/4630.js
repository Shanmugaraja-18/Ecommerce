"use strict";
exports.id = 4630;
exports.ids = [4630];
exports.modules = {

/***/ 34630:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Tw: () => (/* binding */ updateAProduct),
/* harmony export */   ak: () => (/* binding */ deleteAProduct),
/* harmony export */   c0: () => (/* binding */ getAllAdminProducts),
/* harmony export */   xg: () => (/* binding */ addNewProduct)
/* harmony export */ });
/* unused harmony exports productByCategory, productById */
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97270);
//add a new product service

const addNewProduct = async (formData)=>{
    try {
        const response = await fetch("/api/admin/add-product", {
            method: "POST",
            headers: {
                "content-type": "application/json",
                Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("token")}`
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
                Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("token")}`
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
                Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.get("token")}`
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