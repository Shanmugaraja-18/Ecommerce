exports.id = 1604;
exports.ids = [1604];
exports.modules = {

/***/ 53927:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 47734, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 88709, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 62698, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 7833, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 29150, 23))

/***/ }),

/***/ 42573:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 37351));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 9536))

/***/ }),

/***/ 99593:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (/* binding */ ComponentLevelLoader)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29924);
/* harmony import */ var react_spinners__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spinners__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ default auto */ 

function ComponentLevelLoader({ text, color, loading, size }) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
        className: "flex gap-1 items-center",
        children: [
            text,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_spinners__WEBPACK_IMPORTED_MODULE_1__.PulseLoader, {
                color: color,
                loading: loading,
                size: size || 10,
                "data-testid": "loader"
            })
        ]
    });
}


/***/ }),

/***/ 9536:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./src/context/index.js
var context = __webpack_require__(37351);
// EXTERNAL MODULE: ./src/utils/index.js
var utils = __webpack_require__(99066);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/transitions/transition.js + 4 modules
var transition = __webpack_require__(86235);
// EXTERNAL MODULE: ./node_modules/@headlessui/react/dist/components/dialog/dialog.js + 33 modules
var dialog = __webpack_require__(32962);
;// CONCATENATED MODULE: ./src/components/CommonModal/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 


function CommonModal({ modalTitle, mainContent, showButtons, buttonComponent, show, setShow, showModalTitle }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Root, {
        show: show,
        as: react_.Fragment,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(dialog/* Dialog */.V, {
            as: "div",
            className: "relative z-10",
            onClose: setShow,
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                    as: react_.Fragment,
                    enter: "ease-in-out duration-900",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in-out duration-500",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "fixed inset-0 overflow-hidden",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "absolute inset-0 overflow-hidden",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "fixed inset-y-0 right-0 flex max-w-full pl-10",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(transition/* Transition */.u.Child, {
                                as: react_.Fragment,
                                enter: "ease-in-out duration-900",
                                enterFrom: "opacity-0",
                                enterTo: "opacity-100",
                                leave: "ease-in-out duration-500",
                                leaveFrom: "opacity-100",
                                leaveTo: "opacity-0",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(dialog/* Dialog */.V.Panel, {
                                    className: "w-screen max-w-md",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex h-full flex-col overflow-y-scroll bg-white shadow-xl",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex-1 overflow-y-auto px-4 py-6 sm:px-6",
                                                children: [
                                                    showModalTitle ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "flex items-start justify-between",
                                                        children: /*#__PURE__*/ jsx_runtime_.jsx(dialog/* Dialog */.V.Title, {
                                                            children: modalTitle
                                                        })
                                                    }) : null,
                                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                        className: "mt-20",
                                                        children: mainContent
                                                    })
                                                ]
                                            }),
                                            showButtons ? /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                className: "border-none px-4 py-6 sm:px-6",
                                                children: buttonComponent
                                            }) : null
                                        ]
                                    })
                                })
                            })
                        })
                    })
                })
            ]
        })
    });
}

// EXTERNAL MODULE: ./node_modules/js-cookie/dist/js.cookie.mjs
var js_cookie = __webpack_require__(97270);
// EXTERNAL MODULE: ./node_modules/next/navigation.js
var navigation = __webpack_require__(59483);
// EXTERNAL MODULE: ./src/services/cart/index.js
var cart = __webpack_require__(71320);
// EXTERNAL MODULE: ./node_modules/react-toastify/dist/react-toastify.esm.mjs
var react_toastify_esm = __webpack_require__(93578);
// EXTERNAL MODULE: ./src/components/Loader/componentlevel/index.js
var componentlevel = __webpack_require__(99593);
;// CONCATENATED MODULE: ./src/components/CartModal/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 







function CartModal() {
    const { showCartModal, setShowCartModal, cartItems, setCartItems, user, setComponentLevelLoader, componentLevelLoader } = (0,react_.useContext)(context.GlobalContext);
    const router = (0,navigation.useRouter)();
    async function extractAllCartItems() {
        const res = await (0,cart/* getAllCartItems */.tQ)(user?._id);
        if (res.success) {
            const updatedData = res.data && res.data.length ? res.data.map((item)=>({
                    ...item,
                    productID: {
                        ...item.productID,
                        price: item.productID.onSale === "yes" ? parseInt((item.productID.price - item.productID.price * (item.productID.priceDrop / 100)).toFixed(2)) : item.productID.price
                    }
                })) : [];
            setCartItems(updatedData);
            localStorage.setItem("cartItems", JSON.stringify(updatedData));
        }
        console.log(res);
    }
    (0,react_.useEffect)(()=>{
        if (user !== null) extractAllCartItems();
    }, [
        user
    ]);
    async function handleDeleteCartItem(getCartItemID) {
        setComponentLevelLoader({
            loading: true,
            id: getCartItemID
        });
        const res = await (0,cart/* deleteFromCart */.EI)(getCartItemID);
        if (res.success) {
            setComponentLevelLoader({
                loading: false,
                id: ""
            });
            react_toastify_esm/* toast */.Am.success(res.message, {
                position: react_toastify_esm/* toast */.Am.POSITION.TOP_RIGHT
            });
            extractAllCartItems();
        } else {
            react_toastify_esm/* toast */.Am.error(res.message, {
                position: react_toastify_esm/* toast */.Am.POSITION.TOP_RIGHT
            });
            setComponentLevelLoader({
                loading: false,
                id: getCartItemID
            });
        }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx(CommonModal, {
        showButtons: true,
        show: showCartModal,
        setShow: setShowCartModal,
        mainContent: cartItems && cartItems.length ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            role: "list",
            className: "-my-6 divide-y divide-gray-300",
            children: cartItems.map((cartItem)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                    className: "flex py-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                                src: cartItem && cartItem.productID && cartItem.productID.imageUrl,
                                alt: "Cart Item",
                                className: "h-full w-full object-cover object-center"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "ml-4 flex flex-1 flex-col",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "flex justify-between text-base font-medium text-gray-900",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    children: cartItem && cartItem.productID && cartItem.productID.name
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                                            className: "mt-1 text-sm text-gray-600",
                                            children: [
                                                "$",
                                                cartItem && cartItem.productID && cartItem.productID.price
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "flex flex-1 items-end justify-between text-sm",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        type: "button",
                                        className: "font-medium text-yellow-600 sm:order-2",
                                        onClick: ()=>handleDeleteCartItem(cartItem._id),
                                        children: componentLevelLoader && componentLevelLoader.loading && componentLevelLoader.id === cartItem._id ? /*#__PURE__*/ jsx_runtime_.jsx(componentlevel/* default */.Z, {
                                            text: "Removing",
                                            color: "#000000",
                                            loading: componentLevelLoader && componentLevelLoader.loading
                                        }) : "Remove"
                                    })
                                })
                            ]
                        })
                    ]
                }, cartItem.id))
        }) : null,
        buttonComponent: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    type: "button",
                    onClick: ()=>{
                        router.push("/cart");
                        setShowCartModal(false);
                    },
                    className: "mt-1.5 w-full inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide",
                    children: "Go To Cart"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("button", {
                    disabled: cartItems && cartItems.length === 0,
                    type: "button",
                    onClick: ()=>{
                        router.push("/checkout");
                        setShowCartModal(false);
                    },
                    className: "mt-1.5 w-full inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide disabled:opacity-50",
                    children: "Checkout"
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "mt-6 flex justify-center text-center text-sm text-gray-600",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                        type: "button",
                        className: "font-medium text-grey",
                        children: [
                            "Continue Shopping",
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                "aria-hidden": "true",
                                children: " →"
                            })
                        ]
                    })
                })
            ]
        })
    });
}

;// CONCATENATED MODULE: ./src/components/Navbar/index.js
/* __next_internal_client_entry_do_not_use__ default auto */ 







function NavItems({ isModalView = false, isAdminView, router }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: `items-center justify-between w-full md:flex md:w-auto ${isModalView ? "" : "hidden"}`,
        id: "nav-items",
        children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
            className: `flex flex-col p-4 md:p-0 mt-4 font-medium  rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 bg-white ${isModalView ? "border-none" : "border border-gray-100"}`,
            children: isAdminView ? utils/* adminNavOptions */.GU.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0",
                    onClick: ()=>router.push(item.path),
                    children: item.label
                }, item.id)) : utils/* navOptions */.p8.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "cursor-pointer block py-2 pl-3 pr-4 text-gray-900 rounded md:p-0",
                    onClick: ()=>router.push(item.path),
                    children: item.label
                }, item.id))
        })
    });
}
function Navbar() {
    const { showNavModal, setShowNavModal } = (0,react_.useContext)(context.GlobalContext);
    const { user, isAuthUser, setIsAuthUser, setUser, currentUpdatedProduct, setCurrentUpdatedProduct, showCartModal, setShowCartModal } = (0,react_.useContext)(context.GlobalContext);
    const pathName = (0,navigation.usePathname)();
    const router = (0,navigation.useRouter)();
    console.log(currentUpdatedProduct, "navbar");
    (0,react_.useEffect)(()=>{
        if (pathName !== "/admin-view/add-product" && currentUpdatedProduct !== null) setCurrentUpdatedProduct(null);
    }, [
        pathName
    ]);
    function handleLogout() {
        setIsAuthUser(false);
        setUser(null);
        js_cookie/* default */.Z.remove("token");
        localStorage.clear();
        router.push("/");
    }
    const isAdminView = pathName.includes("admin-view");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: "bg-white fixed w-full z-20 top-0 left-0 border-b border-gray-200",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            onClick: ()=>router.push("/"),
                            className: "flex items-center cursor-pointer",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "slef-center text-2xl font-semibold whitespace-nowrap",
                                children: "Ecommercery"
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "flex md:order-2 gap-2",
                            children: [
                                !isAdminView && isAuthUser ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Fragment, {
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white",
                                            onClick: ()=>router.push("/account"),
                                            children: "Account"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white",
                                            onClick: ()=>setShowCartModal(true),
                                            children: "Cart"
                                        })
                                    ]
                                }) : null,
                                user?.role === "admin" ? isAdminView ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    className: "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white",
                                    onClick: ()=>router.push("/"),
                                    children: "Client View"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>router.push("/admin-view"),
                                    className: "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white",
                                    children: "Admin View"
                                }) : null,
                                isAuthUser ? /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: handleLogout,
                                    className: "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white",
                                    children: "Logout"
                                }) : /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                    onClick: ()=>router.push("/login"),
                                    className: "mt-1.5 inline-block bg-black px-5 py-3 text-xs font-medium upprcase tracking-wide text-white",
                                    children: "Login"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                    "data-collapse-toggle": "navbar-sticky",
                                    type: "button",
                                    className: "inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600",
                                    "aria-controls": "navbar-sticky",
                                    "aria-expanded": "false",
                                    onClick: ()=>setShowNavModal(true),
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "sr-only",
                                            children: "Open main menu"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                            className: "w-6 h-6",
                                            "aria-hidden": "true",
                                            fill: "currentColor",
                                            viewBox: "0 0 20 20",
                                            xmlns: "http://www.w3.org/2000/svg",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                "fill-rule": "evenodd",
                                                d: "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",
                                                "clip-rule": "evenodd"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(NavItems, {
                            router: router,
                            isAdminView: isAdminView
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(CommonModal, {
                showModalTitle: false,
                mainContent: /*#__PURE__*/ jsx_runtime_.jsx(NavItems, {
                    router: router,
                    isModalView: true,
                    isAdminView: isAdminView
                }),
                show: showNavModal,
                setShow: setShowNavModal
            }),
            showCartModal && /*#__PURE__*/ jsx_runtime_.jsx(CartModal, {})
        ]
    });
}


/***/ }),

/***/ 37351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GlobalContext: () => (/* binding */ GlobalContext),
/* harmony export */   "default": () => (/* binding */ GlobalState),
/* harmony export */   initialCheckoutFormData: () => (/* binding */ initialCheckoutFormData)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(97270);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(59483);
/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* __next_internal_client_entry_do_not_use__ GlobalContext,initialCheckoutFormData,default auto */ 



const GlobalContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_3__.createContext)(null);
const initialCheckoutFormData = {
    shippingAddress: {},
    paymentMethod: "",
    totalPrice: 0,
    isPaid: false,
    paidAt: new Date(),
    isProcessing: true
};
const protectedRoutes = [
    "cart",
    "checkout",
    "account",
    "orders",
    "admin-view"
];
const protectedAdminRoutes = [
    "/admin-view",
    "/admin-view/add-product",
    "/admin-view/all-products"
];
function GlobalState({ children }) {
    const [showNavModal, setShowNavModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [pageLevelLoader, setPageLevelLoader] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(true);
    const [componentLevelLoader, setComponentLevelLoader] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        loading: false,
        id: ""
    });
    const [isAuthUser, setIsAuthUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [currentUpdatedProduct, setCurrentUpdatedProduct] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [showCartModal, setShowCartModal] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(false);
    const [cartItems, setCartItems] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [addresses, setAddresses] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [addressFormData, setAddressFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)({
        fullName: "",
        city: "",
        country: "",
        postalCode: "",
        address: ""
    });
    const [checkoutFormData, setCheckoutFormData] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(initialCheckoutFormData);
    const [allOrdersForUser, setAllOrdersForUser] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const [orderDetails, setOrderDetails] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(null);
    const [allOrdersForAllUsers, setAllOrdersForAllUsers] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);
    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const pathName = (0,next_navigation__WEBPACK_IMPORTED_MODULE_2__.usePathname)();
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (js_cookie__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z.get("token") !== undefined) {
            setIsAuthUser(true);
            const userData = JSON.parse(localStorage.getItem("user")) || {};
            const getCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
            setUser(userData);
            setCartItems(getCartItems);
        } else {
            setIsAuthUser(false);
            setUser({}); //unauthenticated user
        }
    }, [
        js_cookie__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (pathName !== "/register" && !pathName.includes("product") && pathName !== "/" && user && Object.keys(user).length === 0 && protectedRoutes.includes(pathName) > -1) router.push("/login");
    }, [
        user,
        pathName
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{
        if (user !== null && user && Object.keys(user).length > 0 && user?.role !== "admin" && protectedAdminRoutes.indexOf(pathName) > -1) router.push("/unauthorized-page");
    }, [
        user,
        pathName
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(GlobalContext.Provider, {
        value: {
            showNavModal,
            setShowNavModal,
            pageLevelLoader,
            setPageLevelLoader,
            isAuthUser,
            setIsAuthUser,
            user,
            setUser,
            componentLevelLoader,
            setComponentLevelLoader,
            currentUpdatedProduct,
            setCurrentUpdatedProduct,
            showCartModal,
            setShowCartModal,
            cartItems,
            setCartItems,
            addresses,
            setAddresses,
            addressFormData,
            setAddressFormData,
            checkoutFormData,
            setCheckoutFormData,
            allOrdersForUser,
            setAllOrdersForUser,
            orderDetails,
            setOrderDetails,
            allOrdersForAllUsers,
            setAllOrdersForAllUsers
        },
        children: children
    });
}


/***/ }),

/***/ 71320:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EI: () => (/* binding */ deleteFromCart),
/* harmony export */   Xq: () => (/* binding */ addToCart),
/* harmony export */   tQ: () => (/* binding */ getAllCartItems)
/* harmony export */ });
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(97270);

const addToCart = async (formData)=>{
    try {
        const res = await fetch("/api/cart/add-to-cart", {
            method: "POST",
            headers: {
                "content-type": "application/json",
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
const getAllCartItems = async (id)=>{
    try {
        const res = await fetch(`http://localhost:3000/api/cart/all-cart-items?id=${id}`, {
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
const deleteFromCart = async (id)=>{
    try {
        const res = await fetch(`/api/cart/delete-from-cart?id=${id}`, {
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


/***/ }),

/***/ 99066:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GP: () => (/* binding */ addNewAddressFormControls),
/* harmony export */   GU: () => (/* binding */ adminNavOptions),
/* harmony export */   Hp: () => (/* binding */ registrationFormControls),
/* harmony export */   d2: () => (/* binding */ adminAddProductformControls),
/* harmony export */   jJ: () => (/* binding */ AvailableSizes),
/* harmony export */   mO: () => (/* binding */ firebaseStroageURL),
/* harmony export */   p8: () => (/* binding */ navOptions),
/* harmony export */   qe: () => (/* binding */ firebaseConfig),
/* harmony export */   vV: () => (/* binding */ loginFormControls)
/* harmony export */ });
const navOptions = [
    {
        id: "home",
        label: "Home",
        path: "/"
    },
    {
        id: "listing",
        label: "All Products",
        path: "/product/listing/all-products"
    },
    {
        id: "listingMen",
        label: "Men",
        path: "/product/listing/men"
    },
    {
        id: "listingWomen",
        label: "Women",
        path: "/product/listing/women"
    },
    {
        id: "listingKids",
        label: "kids",
        path: "/product/listing/kids"
    }
];
const adminNavOptions = [
    {
        id: "adminListing",
        label: "Manage All Products",
        path: "/admin-view/all-products"
    },
    {
        id: "adminNewProduct",
        label: "Add New Product",
        path: "/admin-view/add-product"
    }
];
const registrationFormControls = [
    {
        id: "name",
        type: "text",
        placeholder: "Enter your name",
        label: "Name",
        componentType: "input"
    },
    {
        id: "email",
        type: "email",
        placeholder: "Enter your email",
        label: "Email",
        componentType: "input"
    },
    {
        id: "password",
        type: "password",
        placeholder: "Enter your password",
        label: "Password",
        componentType: "input"
    },
    {
        id: "role",
        type: "",
        placeholder: "",
        label: "Role",
        componentType: "select",
        options: [
            {
                id: "admin",
                label: "Admin"
            },
            {
                id: "customer",
                label: "customer"
            }
        ]
    }
];
const loginFormControls = [
    {
        id: "email",
        type: "email",
        placeholder: "Enter your email",
        label: "Email",
        componentType: "input"
    },
    {
        id: "password",
        type: "password",
        placeholder: "Enter your password",
        label: "Password",
        componentType: "input"
    }
];
const adminAddProductformControls = [
    {
        id: "name",
        type: "text",
        placeholder: "Enter name",
        label: "Name",
        componentType: "input"
    },
    {
        id: "price",
        type: "number",
        placeholder: "Enter price",
        label: "Price",
        componentType: "input"
    },
    {
        id: "description",
        type: "text",
        placeholder: "Enter description",
        label: "Description",
        componentType: "input"
    },
    {
        id: "category",
        type: "",
        placeholder: "",
        label: "Category",
        componentType: "select",
        options: [
            {
                id: "men",
                label: "Men"
            },
            {
                id: "women",
                label: "Women"
            },
            {
                id: "kids",
                label: "Kids"
            }
        ]
    },
    {
        id: "deliveryInfo",
        type: "text",
        placeholder: "Enter deliveryInfo",
        label: "Delivery Info",
        componentType: "input"
    },
    {
        id: "onSale",
        type: "",
        placeholder: "",
        label: "On Sale",
        componentType: "select",
        options: [
            {
                id: "yes",
                label: "Yes"
            },
            {
                id: "no",
                label: "No"
            }
        ]
    },
    {
        id: "priceDrop",
        type: "number",
        placeholder: "Enter Price Drop",
        label: "Price Drop",
        componentType: "input"
    }
];
const AvailableSizes = [
    {
        id: "s",
        label: "S"
    },
    {
        id: "m",
        label: "M"
    },
    {
        id: "l",
        label: "L"
    }
];
const firebaseConfig = {
    apiKey: "AIzaSyClXiS1MZnGiQAmDfsSdrBpUautYZIzS1c",
    authDomain: "finalyear-f7084.firebaseapp.com",
    projectId: "finalyear-f7084",
    storageBucket: "finalyear-f7084.appspot.com",
    messagingSenderId: "970233027421",
    appId: "1:970233027421:web:d922e12d7eb9696d92e6b4",
    measurementId: "G-8M1SCHLKN2"
};
const firebaseStroageURL = "gs://finalyear-f7084.appspot.com";
const addNewAddressFormControls = [
    {
        id: "fullName",
        type: "input",
        placeholder: "Enter your full name",
        label: "Full Name",
        componentType: "input"
    },
    {
        id: "address",
        type: "input",
        placeholder: "Enter your full address",
        label: "Address",
        componentType: "input"
    },
    {
        id: "city",
        type: "input",
        placeholder: "Enter your city",
        label: "City",
        componentType: "input"
    },
    {
        id: "country",
        type: "input",
        placeholder: "Enter your country",
        label: "Country",
        componentType: "input"
    },
    {
        id: "postalCode",
        type: "input",
        placeholder: "Enter your postal code",
        label: "Postal Code",
        componentType: "input"
    }
];


/***/ }),

/***/ 83400:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"src\\app\\layout.js","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(23773);
var target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(21913);
;// CONCATENATED MODULE: ./src/context/index.js

const proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Vsmart\Desktop\TASK\ppp\NextJS-Ecommerce-2023-master\src\context\index.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;

const e0 = proxy["GlobalContext"];

const e1 = proxy["initialCheckoutFormData"];


/* harmony default export */ const context = (__default__);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(75553);
;// CONCATENATED MODULE: ./src/components/Navbar/index.js

const Navbar_proxy = (0,module_proxy.createProxy)(String.raw`C:\Users\Vsmart\Desktop\TASK\ppp\NextJS-Ecommerce-2023-master\src\components\Navbar\index.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: Navbar_esModule, $$typeof: Navbar_$$typeof } = Navbar_proxy;
const Navbar_default_ = Navbar_proxy.default;


/* harmony default export */ const Navbar = (Navbar_default_);
;// CONCATENATED MODULE: ./src/app/layout.js





const metadata = {
    title: "Create Next App",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            className: (target_path_src_app_layout_js_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(context, {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx("main", {
                        className: "flex min-h-screen flex-col mt-[80px]",
                        children: children
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 82819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(23785);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 75553:
/***/ (() => {



/***/ })

};
;