(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[36],{2054:function(e,t,s){Promise.resolve().then(s.bind(s,4479))},4479:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return o}});var r=s(9268),a=s(5579),n=s(8050),l=s(6008),i=s(6006),c=s(2120);function o(){let{pageLevelLoader:e,setPageLevelLoader:t,orderDetails:s,setOrderDetails:o,user:d}=(0,i.useContext)(a.GlobalContext),u=(0,l.useParams)(),f=(0,l.useRouter)();async function p(){t(!0);let e=await (0,n.s$)(u["order-details"]);e.success?(t(!1),o(e.data)):t(!1),console.log(e)}return((0,i.useEffect)(()=>{p()},[]),e)?(0,r.jsx)("div",{className:"w-full min-h-screen flex justify-center items-center",children:(0,r.jsx)(c.Z,{color:"#000000",loading:e,size:30,"data-testid":"loader"})}):(0,r.jsxs)("div",{className:"py-14 px-4 md:px-6",children:[(0,r.jsxs)("div",{className:"flex justify-start items-start space-y-2 flex-col",children:[(0,r.jsxs)("h1",{className:"text-3xl lg:text-4xl font-bold leading-7 lg:leading-9 text-gray-900",children:["Order #",s&&s._id]}),(0,r.jsxs)("p",{className:"text-base font-medium leadong-6 text-gray-600",children:[s&&s.createdAt&&s.createdAt.split("T")[0]," ","|"," ",s&&s.createdAt&&s.createdAt.split("T")[1].split(".")[0]]})]}),(0,r.jsxs)("div",{className:"mt-10 flex flex-col justify-center xl:flex-row items-stretch w-full xl:space-x-8 md:space-y-6 xl:space-y-0",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8",children:[(0,r.jsxs)("div",{className:"flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:p-6 xl:p-8 w-full",children:[(0,r.jsx)("p",{className:"font-bol text-lg ",children:"Your order summary"}),s&&s.orderItems&&s.orderItems.length?s.orderItems.map(e=>(0,r.jsxs)("div",{className:"mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full",children:[(0,r.jsx)("div",{className:"pb-4 md:pb-8 w-full md:w-40",children:(0,r.jsx)("img",{src:e&&e.product&&e.product.imageUrl,className:"w-full hidden md:block"})}),(0,r.jsxs)("div",{className:"border-b border-gray-300 md:flex-row flex-col flex justify-between items-start w-full pb-8 space-y-4 md:space-y-0",children:[(0,r.jsx)("div",{className:"w-full flex flex-col justify-start items-start space-y-8",children:(0,r.jsx)("h3",{className:"text-xl font-semibold leading-6 text-gray-900",children:e&&e.product&&e.product.name})}),(0,r.jsx)("div",{className:"w-full flex justify-between items-start space-x-8",children:(0,r.jsxs)("h3",{className:"text-xl font-semibold leading-6 text-gray-900",children:["$",e&&e.product&&e.product.price]})})]})]},e._id)):null]}),(0,r.jsx)("div",{className:"flex justify-center flex-col md:flex-row items-stretch w-full space-y-4 md:space-y-0 md:space-x-5 xl:space-x-8",children:(0,r.jsxs)("div",{className:"flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold leading-6 text-gray-900",children:"Summary"}),(0,r.jsxs)("div",{className:"flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4",children:[(0,r.jsxs)("div",{className:"flex justify-between w-full",children:[(0,r.jsx)("p",{className:"text-base leading-5 text-gray-800",children:"Subtotal"}),(0,r.jsxs)("p",{className:"text-base leading-5 text-gray-900",children:["$",s&&s.totalPrice]})]}),(0,r.jsxs)("div",{className:"flex justify-between w-full",children:[(0,r.jsx)("p",{className:"text-base leading-5 text-gray-800",children:"Shipping"}),(0,r.jsx)("p",{className:"text-base leading-5 text-gray-900",children:"Free"})]}),(0,r.jsxs)("div",{className:"flex justify-between w-full",children:[(0,r.jsx)("p",{className:"text-base leading-5 text-gray-800",children:"Subtotal"}),(0,r.jsxs)("p",{className:"text-base leading-5 text-gray-900",children:["$",s&&s.totalPrice]})]})]})]})})]}),(0,r.jsxs)("div",{className:"flex flex-col gap-5",children:[(0,r.jsxs)("div",{className:"bg-gray-50 w-full xl:w-96 flex  items-center md:items-start px-4 py-6 flex-col",children:[(0,r.jsx)("h3",{className:"text-xl font-semibold leading-6 text-gray-900",children:"Customer Details"}),(0,r.jsx)("div",{className:"flex flex-col justify-start items-start flex-shrink-0",children:(0,r.jsxs)("div",{className:"flex gap-4 justify-center flex-col w-full md:justify-start   py-8 border-b border-gray-200",children:[(0,r.jsxs)("p",{className:"text-base font-semibold leading-4 text-left text-gray-950",children:["Name: ",null==d?void 0:d.name]}),(0,r.jsxs)("p",{className:"text-base font-semibold leading-4 text-left text-gray-950",children:["Email: ",null==d?void 0:d.email]})]})})]}),(0,r.jsx)("div",{className:"flex justify-between xl:h-full items-stretch w-full flex-col mt-6 md:mt-0",children:(0,r.jsx)("div",{className:"flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 md:space-y-0 xl:space-y-12 md:flex-row items-center md:items-start ",children:(0,r.jsxs)("div",{className:"flex justify-center md:justify-start items-center md:items-start flex-col space-y-4 xl:mt-8",children:[(0,r.jsx)("p",{children:"Shipping Address"}),(0,r.jsxs)("p",{children:["Address :"," ",s&&s.shippingAddress.address]}),(0,r.jsxs)("p",{children:["City :",s&&s.shippingAddress.city]}),(0,r.jsxs)("p",{children:["Country :"," ",s&&s.shippingAddress.country]}),(0,r.jsxs)("p",{children:["Postal Code :"," ",s&&s.shippingAddress.postalCode]})]})})}),(0,r.jsx)("button",{onClick:()=>f.push("/"),className:"mt-5 mr-5  inline-block bg-black text-white px-5 py-3 text-xs font-medium uppercase tracking-wide",children:"Shop Again"})]})]})]})}},5579:function(e,t,s){"use strict";s.r(t),s.d(t,{GlobalContext:function(){return i},default:function(){return u},initialCheckoutFormData:function(){return c}});var r=s(9268),a=s(1712),n=s(6008),l=s(6006);let i=(0,l.createContext)(null),c={shippingAddress:{},paymentMethod:"",totalPrice:0,isPaid:!1,paidAt:new Date,isProcessing:!0},o=["cart","checkout","account","orders","admin-view"],d=["/admin-view","/admin-view/add-product","/admin-view/all-products"];function u(e){let{children:t}=e,[s,u]=(0,l.useState)(!1),[f,p]=(0,l.useState)(!0),[m,x]=(0,l.useState)({loading:!1,id:""}),[h,y]=(0,l.useState)(null),[g,j]=(0,l.useState)(null),[v,b]=(0,l.useState)(null),[w,N]=(0,l.useState)(!1),[S,O]=(0,l.useState)([]),[k,C]=(0,l.useState)([]),[E,_]=(0,l.useState)({fullName:"",city:"",country:"",postalCode:"",address:""}),[A,P]=(0,l.useState)(c),[I,R]=(0,l.useState)([]),[T,z]=(0,l.useState)(null),[B,U]=(0,l.useState)([]),D=(0,n.useRouter)(),Z=(0,n.usePathname)();return(0,l.useEffect)(()=>{if(void 0!==a.Z.get("token")){y(!0);let e=JSON.parse(localStorage.getItem("user"))||{},t=JSON.parse(localStorage.getItem("cartItems"))||[];j(e),O(t)}else y(!1),j({})},[a.Z]),(0,l.useEffect)(()=>{"/register"!==Z&&!Z.includes("product")&&"/"!==Z&&g&&0===Object.keys(g).length&&o.includes(Z)>-1&&D.push("/login")},[g,Z]),(0,l.useEffect)(()=>{null!==g&&g&&Object.keys(g).length>0&&(null==g?void 0:g.role)!=="admin"&&d.indexOf(Z)>-1&&D.push("/unauthorized-page")},[g,Z]),(0,r.jsx)(i.Provider,{value:{showNavModal:s,setShowNavModal:u,pageLevelLoader:f,setPageLevelLoader:p,isAuthUser:h,setIsAuthUser:y,user:g,setUser:j,componentLevelLoader:m,setComponentLevelLoader:x,currentUpdatedProduct:v,setCurrentUpdatedProduct:b,showCartModal:w,setShowCartModal:N,cartItems:S,setCartItems:O,addresses:k,setAddresses:C,addressFormData:E,setAddressFormData:_,checkoutFormData:A,setCheckoutFormData:P,allOrdersForUser:I,setAllOrdersForUser:R,orderDetails:T,setOrderDetails:z,allOrdersForAllUsers:B,setAllOrdersForAllUsers:U},children:t})}},8050:function(e,t,s){"use strict";s.d(t,{Bi:function(){return i},ax:function(){return n},mg:function(){return a},s$:function(){return l},wr:function(){return c}});var r=s(1712);let a=async e=>{try{let t=await fetch("/api/order/create-order",{method:"POST",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.Z.get("token"))},body:JSON.stringify(e)}),s=await t.json();return s}catch(e){console.log(e)}},n=async e=>{try{let t=await fetch("/api/order/get-all-orders?id=".concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(r.Z.get("token"))}}),s=await t.json();return s}catch(e){console.log(e)}},l=async e=>{try{let t=await fetch("/api/order/order-details?id=".concat(e),{method:"GET",headers:{Authorization:"Bearer ".concat(r.Z.get("token"))}}),s=await t.json();return s}catch(e){console.log(e)}},i=async()=>{try{let e=await fetch("/api/admin/orders/get-all-orders",{method:"GET",headers:{Authorization:"Bearer ".concat(r.Z.get("token"))}}),t=await e.json();return t}catch(e){console.log(e)}},c=async e=>{try{let t=await fetch("/api/admin/orders/update-order",{method:"PUT",headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(r.Z.get("token"))},body:JSON.stringify(e)}),s=await t.json();return s}catch(e){console.log(e)}}},3177:function(e,t,s){"use strict";/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=s(6006),a=Symbol.for("react.element"),n=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,s){var r,n={},o=null,d=null;for(r in void 0!==s&&(o=""+s),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(d=t.ref),t)l.call(t,r)&&!c.hasOwnProperty(r)&&(n[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===n[r]&&(n[r]=t[r]);return{$$typeof:a,type:e,key:o,ref:d,props:n,_owner:i.current}}t.Fragment=n,t.jsx=o,t.jsxs=o},9268:function(e,t,s){"use strict";e.exports=s(3177)},6008:function(e,t,s){e.exports=s(4e3)},2120:function(e,t,s){"use strict";s.d(t,{Z:function(){return o}});var r=s(6006),a={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){var t=function(e){if("number"==typeof e)return{value:e,unit:"px"};var t,s=(e.match(/^[0-9.]*/)||"").toString();t=s.includes(".")?parseFloat(s):parseInt(s,10);var r=(e.match(/[^0-9]*$/)||"").toString();return a[r]?{value:t,unit:r}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}(e);return"".concat(t.value).concat(t.unit)}var l=function(){return(l=Object.assign||function(e){for(var t,s=1,r=arguments.length;s<r;s++)for(var a in t=arguments[s])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e}).apply(this,arguments)},i=function(e,t){var s={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(s[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var a=0,r=Object.getOwnPropertySymbols(e);a<r.length;a++)0>t.indexOf(r[a])&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(s[r[a]]=e[r[a]]);return s},c=function(e,t,s){var r="react-spinners-".concat(e,"-").concat(s);if("undefined"==typeof window||!window.document)return r;var a=document.createElement("style");document.head.appendChild(a);var n=a.sheet,l="\n    @keyframes ".concat(r," {\n      ").concat(t,"\n    }\n  ");return n&&n.insertRule(l,0),r}("PulseLoader","0% {transform: scale(1); opacity: 1} 45% {transform: scale(0.1); opacity: 0.7} 80% {transform: scale(1); opacity: 1}","pulse"),o=function(e){var t=e.loading,s=e.color,a=void 0===s?"#000000":s,o=e.speedMultiplier,d=void 0===o?1:o,u=e.cssOverride,f=e.size,p=void 0===f?15:f,m=e.margin,x=void 0===m?2:m,h=i(e,["loading","color","speedMultiplier","cssOverride","size","margin"]),y=l({display:"inherit"},void 0===u?{}:u),g=function(e){return{backgroundColor:a,width:n(p),height:n(p),margin:n(x),borderRadius:"100%",display:"inline-block",animation:"".concat(c," ").concat(.75/d,"s ").concat(.12*e/d,"s infinite cubic-bezier(0.2, 0.68, 0.18, 1.08)"),animationFillMode:"both"}};return void 0===t||t?r.createElement("span",l({style:y},h),r.createElement("span",{style:g(1)}),r.createElement("span",{style:g(2)}),r.createElement("span",{style:g(3)})):null}},1712:function(e,t,s){"use strict";/*! js-cookie v3.0.5 | MIT */function r(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)e[r]=s[r]}return e}s.d(t,{Z:function(){return a}});var a=function e(t,s){function a(e,a,n){if("undefined"!=typeof document){"number"==typeof(n=r({},s,n)).expires&&(n.expires=new Date(Date.now()+864e5*n.expires)),n.expires&&(n.expires=n.expires.toUTCString()),e=encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g,decodeURIComponent).replace(/[()]/g,escape);var l="";for(var i in n)n[i]&&(l+="; "+i,!0!==n[i]&&(l+="="+n[i].split(";")[0]));return document.cookie=e+"="+t.write(a,e)+l}}return Object.create({set:a,get:function(e){if("undefined"!=typeof document&&(!arguments.length||e)){for(var s=document.cookie?document.cookie.split("; "):[],r={},a=0;a<s.length;a++){var n=s[a].split("="),l=n.slice(1).join("=");try{var i=decodeURIComponent(n[0]);if(r[i]=t.read(l,i),e===i)break}catch(e){}}return e?r[e]:r}},remove:function(e,t){a(e,"",r({},t,{expires:-1}))},withAttributes:function(t){return e(this.converter,r({},this.attributes,t))},withConverter:function(t){return e(r({},this.converter,t),this.attributes)}},{attributes:{value:Object.freeze(s)},converter:{value:Object.freeze(t)}})}({read:function(e){return'"'===e[0]&&(e=e.slice(1,-1)),e.replace(/(%[\dA-F]{2})+/gi,decodeURIComponent)},write:function(e){return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,decodeURIComponent)}},{path:"/"})}},function(e){e.O(0,[253,698,744],function(){return e(e.s=2054)}),_N_E=e.O()}]);