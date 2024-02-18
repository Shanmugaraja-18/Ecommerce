exports.id = 1259;
exports.ids = [1259];
exports.modules = {

/***/ 48773:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 91455))

/***/ }),

/***/ 91455:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ CommonListing)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./src/components/Loader/componentlevel/index.js
var componentlevel = __webpack_require__(99593);
// EXTERNAL MODULE: ./src/context/index.js
var context = __webpack_require__(37351);
// EXTERNAL MODULE: ./src/services/cart/index.js
var cart = __webpack_require__(71320);
// EXTERNAL MODULE: ./src/services/product/index.js
var product = __webpack_require__(34630);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(93578);
;// CONCATENATED MODULE: ./src/components/CommonListing/ProductButtons/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 







function ProductButton({ item }) {
    const pathName = (0,navigation.usePathname)();
    const { setCurrentUpdatedProduct, setComponentLevelLoader, componentLevelLoader, user, showCartModal, setShowCartModal } = (0,react_.useContext)(context.GlobalContext);
    const router = (0,navigation.useRouter)();
    const isAdminView = pathName.includes("admin-view");
    async function handleDeleteProduct(item) {
        setComponentLevelLoader({
            loading: true,
            id: item._id
        });
        const res = await (0,product/* deleteAProduct */.ak)(item._id);
        if (res.success) {
            setComponentLevelLoader({
                loading: false,
                id: ""
            });
            react_toastify_esm/* toast */.Am.success(res.message, {
                position: react_toastify_esm/* toast */.Am.POSITION.TOP_RIGHT
            });
            router.refresh();
        } else {
            react_toastify_esm/* toast */.Am.error(res.message, {
                position: react_toastify_esm/* toast */.Am.POSITION.TOP_RIGHT
            });
            setComponentLevelLoader({
                loading: false,
                id: ""
            });
        }
    }
    async function handleAddToCart(getItem) {
        setComponentLevelLoader({
            loading: true,
            id: getItem._id
        });
        const res = await (0,cart/* addToCart */.Xq)({
            productID: getItem._id,
            userID: user._id
        });
        if (res.success) {
            react_toastify_esm/* toast */.Am.success(res.message, {
                position: react_toastify_esm/* toast */.Am.POSITION.TOP_RIGHT
            });
            setComponentLevelLoader({
                loading: false,
                id: ""
            });
            setShowCartModal(true);
        } else {
            react_toastify_esm/* toast */.Am.error(res.message, {
                position: react_toastify_esm/* toast */.Am.POSITION.TOP_RIGHT
            });
            setComponentLevelLoader({
                loading: false,
                id: ""
            });
            setShowCartModal(true);
        }
        console.log(res);
    }
    return isAdminView ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>{
                    setCurrentUpdatedProduct(item);
                    router.push("/admin-view/add-product");
                },
                className: "mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white",
                children: "Update"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                onClick: ()=>handleDeleteProduct(item),
                className: "mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white",
                children: componentLevelLoader && componentLevelLoader.loading && item._id === componentLevelLoader.id ? /*#__PURE__*/ jsx_runtime_.jsx(componentlevel/* default */.Z, {
                    text: "Deleting Product",
                    color: "#ffffff",
                    loading: componentLevelLoader && componentLevelLoader.loading
                }) : "DELETE"
            })
        ]
    }) : /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            onClick: ()=>handleAddToCart(item),
            className: "mt-1.5 flex w-full justify-center bg-black px-5 py-3 text-xs font-medium uppercase tracking-wide text-white",
            children: componentLevelLoader && componentLevelLoader.loading && componentLevelLoader.id === item._id ? /*#__PURE__*/ jsx_runtime_.jsx(componentlevel/* default */.Z, {
                text: "Adding to cart",
                color: "#ffffff",
                loading: componentLevelLoader && componentLevelLoader.loading
            }) : "Add To Cart"
        })
    });
}

;// CONCATENATED MODULE: ./src/components/CommonListing/ProductTile/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 

function ProductTile({ item }) {
    const router = (0,navigation.useRouter)();
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: ()=>router.push(`/product/${item._id}`),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "overflow-hideen aspect-w-1 aspect-h-1 h-52",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: item.imageUrl,
                    alt: "Product image",
                    className: "h-full w-full object-cover transition-all duration-300 group-hover:scale-125"
                })
            }),
            item.onSale === "yes" ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "absolute top-0 m-2 rounded-full bg-black",
                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                    className: "rounded-full  p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3",
                    children: "Sale"
                })
            }) : null,
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "my-4 mx-auto flex w-10/12 flex-col items-start justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-2 flex",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: `mr-3 text-sm font-semibold ${item.onSale === "yes" ? "line-through" : ""}`,
                                children: `$ ${item.price}`
                            }),
                            item.onSale === "yes" ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mr-3 text-sm font-semibold text-red-700",
                                children: `$ ${(item.price - item.price * (item.priceDrop / 100)).toFixed(2)}`
                            }) : null,
                            item.onSale === "yes" ? /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "mr-3 text-sm font-semibold",
                                children: `-(${item.priceDrop}%)off`
                            }) : null
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "md-2 text-gray-400 text-sm",
                        children: item.name
                    })
                ]
            })
        ]
    });
}

// EXTERNAL MODULE: ./src/components/Notification/index.js
var Notification = __webpack_require__(81058);
;// CONCATENATED MODULE: ./src/components/CommonListing/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 





function CommonListing({ data }) {
    const router = (0,navigation.useRouter)();
    (0,react_.useEffect)(()=>{
        router.refresh();
    }, []);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("section", {
        className: "bg-white py-12 sm:py-16",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16",
                    children: data && data.length ? data.map((item)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("article", {
                            className: "relative flex flex-col overflow-hidden border cursor-pointer",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx(ProductTile, {
                                    item: item
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(ProductButton, {
                                    item: item
                                })
                            ]
                        }, item._id)) : null
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Notification/* default */.Z, {})
        ]
    });
}


/***/ }),

/***/ 33646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZP: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony exports __esModule, $$typeof */
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21913);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`C:\Users\Vsmart\Desktop\TASK\ppp\NextJS-Ecommerce-2023-master\src\components\CommonListing\index.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;