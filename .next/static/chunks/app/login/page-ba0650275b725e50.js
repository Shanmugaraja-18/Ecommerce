(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[626],{2047:function(e,t,l){Promise.resolve().then(l.bind(l,5601))},5601:function(e,t,l){"use strict";l.r(t),l.d(t,{default:function(){return y}});var n=l(9268),i=l(8707),a=l(156),o=l(6304),r=l(5579);let s=async e=>{try{let t=await fetch("/api/login",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(e)}),l=await t.json();return l}catch(e){console.log(e)}};var d=l(8147),u=l(1712),c=l(6008),p=l(6006),m=l(474);let f={email:"",password:""};function y(){let[e,t]=(0,p.useState)(f),{isAuthUser:l,setIsAuthUser:y,user:h,setUser:b,componentLevelLoader:g,setComponentLevelLoader:x}=(0,p.useContext)(r.GlobalContext),w=(0,c.useRouter)();async function v(){x({loading:!0,id:""});let l=await s(e);if(console.log(l),l.success){var n,i,a;m.Am.success(l.message,{position:m.Am.POSITION.TOP_RIGHT}),y(!0),b(null==l?void 0:null===(n=l.finalData)||void 0===n?void 0:n.user),t(f),u.Z.set("token",null==l?void 0:null===(i=l.finalData)||void 0===i?void 0:i.token),localStorage.setItem("user",JSON.stringify(null==l?void 0:null===(a=l.finalData)||void 0===a?void 0:a.user)),x({loading:!1,id:""})}else m.Am.error(l.message,{position:m.Am.POSITION.TOP_RIGHT}),y(!1),x({loading:!1,id:""})}return console.log(e),console.log(l,h),(0,p.useEffect)(()=>{l&&w.push("/")},[l]),(0,n.jsxs)("div",{className:"bg-white relative",children:[(0,n.jsx)("div",{className:"flex flex-col items-center justify-between pt-0 pr-10 pb-0 pl-10 mt-8 mr-auto xl:px-5 lg:flex-row",children:(0,n.jsx)("div",{className:"flex flex-col justify-center items-center w-full pr-10 pl-10 lg:flex-row",children:(0,n.jsx)("div",{className:"w-full mt-10 mr-0 mb-0 ml-0 relative max-w-2xl lg:mt-0 lg:w-5/12",children:(0,n.jsxs)("div",{className:"flex flex-col items-center justify-start pt-10 pr-10 pb-10 pl-10 bg-white shadow-2xl rounded-xl relative z-10",children:[(0,n.jsx)("p",{className:"w-full text-4xl font-medium text-center font-serif",children:"Login"}),(0,n.jsxs)("div",{className:"w-full mt-6 mr-0 mb-0 ml-0 relative space-y-8",children:[d.vV.map(l=>"input"===l.componentType?(0,n.jsx)(i.Z,{type:l.type,placeholder:l.placeholder,label:l.label,value:e[l.id],onChange:n=>{t({...e,[l.id]:n.target.value})}}):null),(0,n.jsx)("button",{className:"disabled:opacity-50 inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg  text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide ",disabled:!(e&&e.email&&""!==e.email.trim()&&e.password&&""!==e.password.trim()),onClick:v,children:g&&g.loading?(0,n.jsx)(a.Z,{text:"Logging In",color:"#ffffff",loading:g&&g.loading}):"Login"}),(0,n.jsxs)("div",{className:"flex flex-col gap-2",children:[(0,n.jsx)("p",{children:"New to website ?"}),(0,n.jsx)("button",{className:"inline-flex w-full items-center justify-center bg-black px-6 py-4 text-lg  text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide ",onClick:()=>w.push("/register"),children:"Register"})]})]})]})})})}),(0,n.jsx)(o.Z,{})]})}},8707:function(e,t,l){"use strict";l.d(t,{Z:function(){return i}});var n=l(9268);function i(e){let{label:t,placeholder:l,onChange:i,value:a,type:o}=e;return(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("p",{className:" pt-0 pr-2 pb-0 pl-2 absolute -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 bg-white",children:t}),(0,n.jsx)("input",{placeholder:l,type:o||"text",value:a,onChange:i,className:"border placeholder-gray-400 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"})]})}},156:function(e,t,l){"use strict";l.d(t,{Z:function(){return a}});var n=l(9268),i=l(2120);function a(e){let{text:t,color:l,loading:a,size:o}=e;return(0,n.jsxs)("span",{className:"flex gap-1 items-center",children:[t,(0,n.jsx)(i.Z,{color:l,loading:a,size:o||10,"data-testid":"loader"})]})}},6304:function(e,t,l){"use strict";l.d(t,{Z:function(){return a}});var n=l(9268),i=l(474);function a(){return(0,n.jsx)(i.Ix,{position:"top-right",autoClose:4e3,hideProgressBar:!1,newestOnTop:!1,closeOnClick:!0,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light",rtl:!1})}l(2657)},5579:function(e,t,l){"use strict";l.r(t),l.d(t,{GlobalContext:function(){return r},default:function(){return c},initialCheckoutFormData:function(){return s}});var n=l(9268),i=l(1712),a=l(6008),o=l(6006);let r=(0,o.createContext)(null),s={shippingAddress:{},paymentMethod:"",totalPrice:0,isPaid:!1,paidAt:new Date,isProcessing:!0},d=["cart","checkout","account","orders","admin-view"],u=["/admin-view","/admin-view/add-product","/admin-view/all-products"];function c(e){let{children:t}=e,[l,c]=(0,o.useState)(!1),[p,m]=(0,o.useState)(!0),[f,y]=(0,o.useState)({loading:!1,id:""}),[h,b]=(0,o.useState)(null),[g,x]=(0,o.useState)(null),[w,v]=(0,o.useState)(null),[S,N]=(0,o.useState)(!1),[j,T]=(0,o.useState)([]),[k,E]=(0,o.useState)([]),[P,O]=(0,o.useState)({fullName:"",city:"",country:"",postalCode:"",address:""}),[C,I]=(0,o.useState)(s),[A,D]=(0,o.useState)([]),[Z,G]=(0,o.useState)(null),[M,_]=(0,o.useState)([]),L=(0,a.useRouter)(),H=(0,a.usePathname)();return(0,o.useEffect)(()=>{if(void 0!==i.Z.get("token")){b(!0);let e=JSON.parse(localStorage.getItem("user"))||{},t=JSON.parse(localStorage.getItem("cartItems"))||[];x(e),T(t)}else b(!1),x({})},[i.Z]),(0,o.useEffect)(()=>{"/register"!==H&&!H.includes("product")&&"/"!==H&&g&&0===Object.keys(g).length&&d.includes(H)>-1&&L.push("/login")},[g,H]),(0,o.useEffect)(()=>{null!==g&&g&&Object.keys(g).length>0&&(null==g?void 0:g.role)!=="admin"&&u.indexOf(H)>-1&&L.push("/unauthorized-page")},[g,H]),(0,n.jsx)(r.Provider,{value:{showNavModal:l,setShowNavModal:c,pageLevelLoader:p,setPageLevelLoader:m,isAuthUser:h,setIsAuthUser:b,user:g,setUser:x,componentLevelLoader:f,setComponentLevelLoader:y,currentUpdatedProduct:w,setCurrentUpdatedProduct:v,showCartModal:S,setShowCartModal:N,cartItems:j,setCartItems:T,addresses:k,setAddresses:E,addressFormData:P,setAddressFormData:O,checkoutFormData:C,setCheckoutFormData:I,allOrdersForUser:A,setAllOrdersForUser:D,orderDetails:Z,setOrderDetails:G,allOrdersForAllUsers:M,setAllOrdersForAllUsers:_},children:t})}},8147:function(e,t,l){"use strict";l.d(t,{GP:function(){return c},GU:function(){return i},Hp:function(){return a},d2:function(){return r},jJ:function(){return s},mO:function(){return u},p8:function(){return n},qe:function(){return d},vV:function(){return o}});let n=[{id:"home",label:"Home",path:"/"},{id:"listing",label:"All Products",path:"/product/listing/all-products"},{id:"listingMen",label:"Men",path:"/product/listing/men"},{id:"listingWomen",label:"Women",path:"/product/listing/women"},{id:"listingKids",label:"kids",path:"/product/listing/kids"}],i=[{id:"adminListing",label:"Manage All Products",path:"/admin-view/all-products"},{id:"adminNewProduct",label:"Add New Product",path:"/admin-view/add-product"}],a=[{id:"name",type:"text",placeholder:"Enter your name",label:"Name",componentType:"input"},{id:"email",type:"email",placeholder:"Enter your email",label:"Email",componentType:"input"},{id:"password",type:"password",placeholder:"Enter your password",label:"Password",componentType:"input"},{id:"role",type:"",placeholder:"",label:"Role",componentType:"select",options:[{id:"admin",label:"Admin"},{id:"customer",label:"customer"}]}],o=[{id:"email",type:"email",placeholder:"Enter your email",label:"Email",componentType:"input"},{id:"password",type:"password",placeholder:"Enter your password",label:"Password",componentType:"input"}],r=[{id:"name",type:"text",placeholder:"Enter name",label:"Name",componentType:"input"},{id:"price",type:"number",placeholder:"Enter price",label:"Price",componentType:"input"},{id:"description",type:"text",placeholder:"Enter description",label:"Description",componentType:"input"},{id:"category",type:"",placeholder:"",label:"Category",componentType:"select",options:[{id:"men",label:"Men"},{id:"women",label:"Women"},{id:"kids",label:"Kids"}]},{id:"deliveryInfo",type:"text",placeholder:"Enter deliveryInfo",label:"Delivery Info",componentType:"input"},{id:"onSale",type:"",placeholder:"",label:"On Sale",componentType:"select",options:[{id:"yes",label:"Yes"},{id:"no",label:"No"}]},{id:"priceDrop",type:"number",placeholder:"Enter Price Drop",label:"Price Drop",componentType:"input"}],s=[{id:"s",label:"S"},{id:"m",label:"M"},{id:"l",label:"L"}],d={apiKey:"AIzaSyClXiS1MZnGiQAmDfsSdrBpUautYZIzS1c",authDomain:"finalyear-f7084.firebaseapp.com",projectId:"finalyear-f7084",storageBucket:"finalyear-f7084.appspot.com",messagingSenderId:"970233027421",appId:"1:970233027421:web:d922e12d7eb9696d92e6b4",measurementId:"G-8M1SCHLKN2"},u="gs://finalyear-f7084.appspot.com",c=[{id:"fullName",type:"input",placeholder:"Enter your full name",label:"Full Name",componentType:"input"},{id:"address",type:"input",placeholder:"Enter your full address",label:"Address",componentType:"input"},{id:"city",type:"input",placeholder:"Enter your city",label:"City",componentType:"input"},{id:"country",type:"input",placeholder:"Enter your country",label:"Country",componentType:"input"},{id:"postalCode",type:"input",placeholder:"Enter your postal code",label:"Postal Code",componentType:"input"}]},2657:function(){}},function(e){e.O(0,[513,253,698,744],function(){return e(e.s=2047)}),_N_E=e.O()}]);