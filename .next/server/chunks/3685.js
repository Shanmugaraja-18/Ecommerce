"use strict";
exports.id = 3685;
exports.ids = [3685];
exports.modules = {

/***/ 40499:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var GetIntrinsic = __webpack_require__(5556);
var callBind = __webpack_require__(63354);
var $indexOf = callBind(GetIntrinsic("String.prototype.indexOf"));
module.exports = function callBoundIntrinsic(name, allowMissing) {
    var intrinsic = GetIntrinsic(name, !!allowMissing);
    if (typeof intrinsic === "function" && $indexOf(name, ".prototype.") > -1) {
        return callBind(intrinsic);
    }
    return intrinsic;
};


/***/ }),

/***/ 63354:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var bind = __webpack_require__(96311);
var GetIntrinsic = __webpack_require__(5556);
var $apply = GetIntrinsic("%Function.prototype.apply%");
var $call = GetIntrinsic("%Function.prototype.call%");
var $reflectApply = GetIntrinsic("%Reflect.apply%", true) || bind.call($call, $apply);
var $gOPD = GetIntrinsic("%Object.getOwnPropertyDescriptor%", true);
var $defineProperty = GetIntrinsic("%Object.defineProperty%", true);
var $max = GetIntrinsic("%Math.max%");
if ($defineProperty) {
    try {
        $defineProperty({}, "a", {
            value: 1
        });
    } catch (e) {
        // IE 8 has a broken defineProperty
        $defineProperty = null;
    }
}
module.exports = function callBind(originalFunction) {
    var func = $reflectApply(bind, $call, arguments);
    if ($gOPD && $defineProperty) {
        var desc = $gOPD(func, "length");
        if (desc.configurable) {
            // original length, plus the receiver, minus any additional arguments (after the receiver)
            $defineProperty(func, "length", {
                value: 1 + $max(0, originalFunction.length - (arguments.length - 1))
            });
        }
    }
    return func;
};
var applyBind = function applyBind() {
    return $reflectApply(bind, $apply, arguments);
};
if ($defineProperty) {
    $defineProperty(module.exports, "apply", {
        value: applyBind
    });
} else {
    module.exports.apply = applyBind;
}


/***/ }),

/***/ 32890:
/***/ ((module) => {


/* eslint no-invalid-this: 1 */ var ERROR_MESSAGE = "Function.prototype.bind called on incompatible ";
var slice = Array.prototype.slice;
var toStr = Object.prototype.toString;
var funcType = "[object Function]";
module.exports = function bind(that) {
    var target = this;
    if (typeof target !== "function" || toStr.call(target) !== funcType) {
        throw new TypeError(ERROR_MESSAGE + target);
    }
    var args = slice.call(arguments, 1);
    var bound;
    var binder = function() {
        if (this instanceof bound) {
            var result = target.apply(this, args.concat(slice.call(arguments)));
            if (Object(result) === result) {
                return result;
            }
            return this;
        } else {
            return target.apply(that, args.concat(slice.call(arguments)));
        }
    };
    var boundLength = Math.max(0, target.length - args.length);
    var boundArgs = [];
    for(var i = 0; i < boundLength; i++){
        boundArgs.push("$" + i);
    }
    bound = Function("binder", "return function (" + boundArgs.join(",") + "){ return binder.apply(this,arguments); }")(binder);
    if (target.prototype) {
        var Empty = function Empty() {};
        Empty.prototype = target.prototype;
        bound.prototype = new Empty();
        Empty.prototype = null;
    }
    return bound;
};


/***/ }),

/***/ 96311:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var implementation = __webpack_require__(32890);
module.exports = Function.prototype.bind || implementation;


/***/ }),

/***/ 5556:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var undefined;
var $SyntaxError = SyntaxError;
var $Function = Function;
var $TypeError = TypeError;
// eslint-disable-next-line consistent-return
var getEvalledConstructor = function(expressionSyntax) {
    try {
        return $Function('"use strict"; return (' + expressionSyntax + ").constructor;")();
    } catch (e) {}
};
var $gOPD = Object.getOwnPropertyDescriptor;
if ($gOPD) {
    try {
        $gOPD({}, "");
    } catch (e) {
        $gOPD = null; // this is IE 8, which has a broken gOPD
    }
}
var throwTypeError = function() {
    throw new $TypeError();
};
var ThrowTypeError = $gOPD ? function() {
    try {
        // eslint-disable-next-line no-unused-expressions, no-caller, no-restricted-properties
        arguments.callee; // IE 8 does not throw here
        return throwTypeError;
    } catch (calleeThrows) {
        try {
            // IE 8 throws on Object.getOwnPropertyDescriptor(arguments, '')
            return $gOPD(arguments, "callee").get;
        } catch (gOPDthrows) {
            return throwTypeError;
        }
    }
}() : throwTypeError;
var hasSymbols = __webpack_require__(55941)();
var hasProto = __webpack_require__(70213)();
var getProto = Object.getPrototypeOf || (hasProto ? function(x) {
    return x.__proto__;
} // eslint-disable-line no-proto
 : null);
var needsEval = {};
var TypedArray = typeof Uint8Array === "undefined" || !getProto ? undefined : getProto(Uint8Array);
var INTRINSICS = {
    "%AggregateError%": typeof AggregateError === "undefined" ? undefined : AggregateError,
    "%Array%": Array,
    "%ArrayBuffer%": typeof ArrayBuffer === "undefined" ? undefined : ArrayBuffer,
    "%ArrayIteratorPrototype%": hasSymbols && getProto ? getProto([][Symbol.iterator]()) : undefined,
    "%AsyncFromSyncIteratorPrototype%": undefined,
    "%AsyncFunction%": needsEval,
    "%AsyncGenerator%": needsEval,
    "%AsyncGeneratorFunction%": needsEval,
    "%AsyncIteratorPrototype%": needsEval,
    "%Atomics%": typeof Atomics === "undefined" ? undefined : Atomics,
    "%BigInt%": typeof BigInt === "undefined" ? undefined : BigInt,
    "%BigInt64Array%": typeof BigInt64Array === "undefined" ? undefined : BigInt64Array,
    "%BigUint64Array%": typeof BigUint64Array === "undefined" ? undefined : BigUint64Array,
    "%Boolean%": Boolean,
    "%DataView%": typeof DataView === "undefined" ? undefined : DataView,
    "%Date%": Date,
    "%decodeURI%": decodeURI,
    "%decodeURIComponent%": decodeURIComponent,
    "%encodeURI%": encodeURI,
    "%encodeURIComponent%": encodeURIComponent,
    "%Error%": Error,
    "%eval%": eval,
    "%EvalError%": EvalError,
    "%Float32Array%": typeof Float32Array === "undefined" ? undefined : Float32Array,
    "%Float64Array%": typeof Float64Array === "undefined" ? undefined : Float64Array,
    "%FinalizationRegistry%": typeof FinalizationRegistry === "undefined" ? undefined : FinalizationRegistry,
    "%Function%": $Function,
    "%GeneratorFunction%": needsEval,
    "%Int8Array%": typeof Int8Array === "undefined" ? undefined : Int8Array,
    "%Int16Array%": typeof Int16Array === "undefined" ? undefined : Int16Array,
    "%Int32Array%": typeof Int32Array === "undefined" ? undefined : Int32Array,
    "%isFinite%": isFinite,
    "%isNaN%": isNaN,
    "%IteratorPrototype%": hasSymbols && getProto ? getProto(getProto([][Symbol.iterator]())) : undefined,
    "%JSON%": typeof JSON === "object" ? JSON : undefined,
    "%Map%": typeof Map === "undefined" ? undefined : Map,
    "%MapIteratorPrototype%": typeof Map === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Map()[Symbol.iterator]()),
    "%Math%": Math,
    "%Number%": Number,
    "%Object%": Object,
    "%parseFloat%": parseFloat,
    "%parseInt%": parseInt,
    "%Promise%": typeof Promise === "undefined" ? undefined : Promise,
    "%Proxy%": typeof Proxy === "undefined" ? undefined : Proxy,
    "%RangeError%": RangeError,
    "%ReferenceError%": ReferenceError,
    "%Reflect%": typeof Reflect === "undefined" ? undefined : Reflect,
    "%RegExp%": RegExp,
    "%Set%": typeof Set === "undefined" ? undefined : Set,
    "%SetIteratorPrototype%": typeof Set === "undefined" || !hasSymbols || !getProto ? undefined : getProto(new Set()[Symbol.iterator]()),
    "%SharedArrayBuffer%": typeof SharedArrayBuffer === "undefined" ? undefined : SharedArrayBuffer,
    "%String%": String,
    "%StringIteratorPrototype%": hasSymbols && getProto ? getProto(""[Symbol.iterator]()) : undefined,
    "%Symbol%": hasSymbols ? Symbol : undefined,
    "%SyntaxError%": $SyntaxError,
    "%ThrowTypeError%": ThrowTypeError,
    "%TypedArray%": TypedArray,
    "%TypeError%": $TypeError,
    "%Uint8Array%": typeof Uint8Array === "undefined" ? undefined : Uint8Array,
    "%Uint8ClampedArray%": typeof Uint8ClampedArray === "undefined" ? undefined : Uint8ClampedArray,
    "%Uint16Array%": typeof Uint16Array === "undefined" ? undefined : Uint16Array,
    "%Uint32Array%": typeof Uint32Array === "undefined" ? undefined : Uint32Array,
    "%URIError%": URIError,
    "%WeakMap%": typeof WeakMap === "undefined" ? undefined : WeakMap,
    "%WeakRef%": typeof WeakRef === "undefined" ? undefined : WeakRef,
    "%WeakSet%": typeof WeakSet === "undefined" ? undefined : WeakSet
};
if (getProto) {
    try {
        null.error; // eslint-disable-line no-unused-expressions
    } catch (e) {
        // https://github.com/tc39/proposal-shadowrealm/pull/384#issuecomment-1364264229
        var errorProto = getProto(getProto(e));
        INTRINSICS["%Error.prototype%"] = errorProto;
    }
}
var doEval = function doEval(name) {
    var value;
    if (name === "%AsyncFunction%") {
        value = getEvalledConstructor("async function () {}");
    } else if (name === "%GeneratorFunction%") {
        value = getEvalledConstructor("function* () {}");
    } else if (name === "%AsyncGeneratorFunction%") {
        value = getEvalledConstructor("async function* () {}");
    } else if (name === "%AsyncGenerator%") {
        var fn = doEval("%AsyncGeneratorFunction%");
        if (fn) {
            value = fn.prototype;
        }
    } else if (name === "%AsyncIteratorPrototype%") {
        var gen = doEval("%AsyncGenerator%");
        if (gen && getProto) {
            value = getProto(gen.prototype);
        }
    }
    INTRINSICS[name] = value;
    return value;
};
var LEGACY_ALIASES = {
    "%ArrayBufferPrototype%": [
        "ArrayBuffer",
        "prototype"
    ],
    "%ArrayPrototype%": [
        "Array",
        "prototype"
    ],
    "%ArrayProto_entries%": [
        "Array",
        "prototype",
        "entries"
    ],
    "%ArrayProto_forEach%": [
        "Array",
        "prototype",
        "forEach"
    ],
    "%ArrayProto_keys%": [
        "Array",
        "prototype",
        "keys"
    ],
    "%ArrayProto_values%": [
        "Array",
        "prototype",
        "values"
    ],
    "%AsyncFunctionPrototype%": [
        "AsyncFunction",
        "prototype"
    ],
    "%AsyncGenerator%": [
        "AsyncGeneratorFunction",
        "prototype"
    ],
    "%AsyncGeneratorPrototype%": [
        "AsyncGeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%BooleanPrototype%": [
        "Boolean",
        "prototype"
    ],
    "%DataViewPrototype%": [
        "DataView",
        "prototype"
    ],
    "%DatePrototype%": [
        "Date",
        "prototype"
    ],
    "%ErrorPrototype%": [
        "Error",
        "prototype"
    ],
    "%EvalErrorPrototype%": [
        "EvalError",
        "prototype"
    ],
    "%Float32ArrayPrototype%": [
        "Float32Array",
        "prototype"
    ],
    "%Float64ArrayPrototype%": [
        "Float64Array",
        "prototype"
    ],
    "%FunctionPrototype%": [
        "Function",
        "prototype"
    ],
    "%Generator%": [
        "GeneratorFunction",
        "prototype"
    ],
    "%GeneratorPrototype%": [
        "GeneratorFunction",
        "prototype",
        "prototype"
    ],
    "%Int8ArrayPrototype%": [
        "Int8Array",
        "prototype"
    ],
    "%Int16ArrayPrototype%": [
        "Int16Array",
        "prototype"
    ],
    "%Int32ArrayPrototype%": [
        "Int32Array",
        "prototype"
    ],
    "%JSONParse%": [
        "JSON",
        "parse"
    ],
    "%JSONStringify%": [
        "JSON",
        "stringify"
    ],
    "%MapPrototype%": [
        "Map",
        "prototype"
    ],
    "%NumberPrototype%": [
        "Number",
        "prototype"
    ],
    "%ObjectPrototype%": [
        "Object",
        "prototype"
    ],
    "%ObjProto_toString%": [
        "Object",
        "prototype",
        "toString"
    ],
    "%ObjProto_valueOf%": [
        "Object",
        "prototype",
        "valueOf"
    ],
    "%PromisePrototype%": [
        "Promise",
        "prototype"
    ],
    "%PromiseProto_then%": [
        "Promise",
        "prototype",
        "then"
    ],
    "%Promise_all%": [
        "Promise",
        "all"
    ],
    "%Promise_reject%": [
        "Promise",
        "reject"
    ],
    "%Promise_resolve%": [
        "Promise",
        "resolve"
    ],
    "%RangeErrorPrototype%": [
        "RangeError",
        "prototype"
    ],
    "%ReferenceErrorPrototype%": [
        "ReferenceError",
        "prototype"
    ],
    "%RegExpPrototype%": [
        "RegExp",
        "prototype"
    ],
    "%SetPrototype%": [
        "Set",
        "prototype"
    ],
    "%SharedArrayBufferPrototype%": [
        "SharedArrayBuffer",
        "prototype"
    ],
    "%StringPrototype%": [
        "String",
        "prototype"
    ],
    "%SymbolPrototype%": [
        "Symbol",
        "prototype"
    ],
    "%SyntaxErrorPrototype%": [
        "SyntaxError",
        "prototype"
    ],
    "%TypedArrayPrototype%": [
        "TypedArray",
        "prototype"
    ],
    "%TypeErrorPrototype%": [
        "TypeError",
        "prototype"
    ],
    "%Uint8ArrayPrototype%": [
        "Uint8Array",
        "prototype"
    ],
    "%Uint8ClampedArrayPrototype%": [
        "Uint8ClampedArray",
        "prototype"
    ],
    "%Uint16ArrayPrototype%": [
        "Uint16Array",
        "prototype"
    ],
    "%Uint32ArrayPrototype%": [
        "Uint32Array",
        "prototype"
    ],
    "%URIErrorPrototype%": [
        "URIError",
        "prototype"
    ],
    "%WeakMapPrototype%": [
        "WeakMap",
        "prototype"
    ],
    "%WeakSetPrototype%": [
        "WeakSet",
        "prototype"
    ]
};
var bind = __webpack_require__(96311);
var hasOwn = __webpack_require__(80294);
var $concat = bind.call(Function.call, Array.prototype.concat);
var $spliceApply = bind.call(Function.apply, Array.prototype.splice);
var $replace = bind.call(Function.call, String.prototype.replace);
var $strSlice = bind.call(Function.call, String.prototype.slice);
var $exec = bind.call(Function.call, RegExp.prototype.exec);
/* adapted from https://github.com/lodash/lodash/blob/4.17.15/dist/lodash.js#L6735-L6744 */ var rePropName = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g;
var reEscapeChar = /\\(\\)?/g; /** Used to match backslashes in property paths. */ 
var stringToPath = function stringToPath(string) {
    var first = $strSlice(string, 0, 1);
    var last = $strSlice(string, -1);
    if (first === "%" && last !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected closing `%`");
    } else if (last === "%" && first !== "%") {
        throw new $SyntaxError("invalid intrinsic syntax, expected opening `%`");
    }
    var result = [];
    $replace(string, rePropName, function(match, number, quote, subString) {
        result[result.length] = quote ? $replace(subString, reEscapeChar, "$1") : number || match;
    });
    return result;
};
/* end adaptation */ var getBaseIntrinsic = function getBaseIntrinsic(name, allowMissing) {
    var intrinsicName = name;
    var alias;
    if (hasOwn(LEGACY_ALIASES, intrinsicName)) {
        alias = LEGACY_ALIASES[intrinsicName];
        intrinsicName = "%" + alias[0] + "%";
    }
    if (hasOwn(INTRINSICS, intrinsicName)) {
        var value = INTRINSICS[intrinsicName];
        if (value === needsEval) {
            value = doEval(intrinsicName);
        }
        if (typeof value === "undefined" && !allowMissing) {
            throw new $TypeError("intrinsic " + name + " exists, but is not available. Please file an issue!");
        }
        return {
            alias: alias,
            name: intrinsicName,
            value: value
        };
    }
    throw new $SyntaxError("intrinsic " + name + " does not exist!");
};
module.exports = function GetIntrinsic(name, allowMissing) {
    if (typeof name !== "string" || name.length === 0) {
        throw new $TypeError("intrinsic name must be a non-empty string");
    }
    if (arguments.length > 1 && typeof allowMissing !== "boolean") {
        throw new $TypeError('"allowMissing" argument must be a boolean');
    }
    if ($exec(/^%?[^%]*%?$/, name) === null) {
        throw new $SyntaxError("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
    }
    var parts = stringToPath(name);
    var intrinsicBaseName = parts.length > 0 ? parts[0] : "";
    var intrinsic = getBaseIntrinsic("%" + intrinsicBaseName + "%", allowMissing);
    var intrinsicRealName = intrinsic.name;
    var value = intrinsic.value;
    var skipFurtherCaching = false;
    var alias = intrinsic.alias;
    if (alias) {
        intrinsicBaseName = alias[0];
        $spliceApply(parts, $concat([
            0,
            1
        ], alias));
    }
    for(var i = 1, isOwn = true; i < parts.length; i += 1){
        var part = parts[i];
        var first = $strSlice(part, 0, 1);
        var last = $strSlice(part, -1);
        if ((first === '"' || first === "'" || first === "`" || last === '"' || last === "'" || last === "`") && first !== last) {
            throw new $SyntaxError("property names with quotes must have matching quotes");
        }
        if (part === "constructor" || !isOwn) {
            skipFurtherCaching = true;
        }
        intrinsicBaseName += "." + part;
        intrinsicRealName = "%" + intrinsicBaseName + "%";
        if (hasOwn(INTRINSICS, intrinsicRealName)) {
            value = INTRINSICS[intrinsicRealName];
        } else if (value != null) {
            if (!(part in value)) {
                if (!allowMissing) {
                    throw new $TypeError("base intrinsic for " + name + " exists, but the property is not available.");
                }
                return void undefined;
            }
            if ($gOPD && i + 1 >= parts.length) {
                var desc = $gOPD(value, part);
                isOwn = !!desc;
                // By convention, when a data property is converted to an accessor
                // property to emulate a data property that does not suffer from
                // the override mistake, that accessor's getter is marked with
                // an `originalValue` property. Here, when we detect this, we
                // uphold the illusion by pretending to see that original data
                // property, i.e., returning the value rather than the getter
                // itself.
                if (isOwn && "get" in desc && !("originalValue" in desc.get)) {
                    value = desc.get;
                } else {
                    value = value[part];
                }
            } else {
                isOwn = hasOwn(value, part);
                value = value[part];
            }
            if (isOwn && !skipFurtherCaching) {
                INTRINSICS[intrinsicRealName] = value;
            }
        }
    }
    return value;
};


/***/ }),

/***/ 70213:
/***/ ((module) => {


var test = {
    foo: {}
};
var $Object = Object;
module.exports = function hasProto() {
    return ({
        __proto__: test
    }).foo === test.foo && !(({
        __proto__: null
    }) instanceof $Object);
};


/***/ }),

/***/ 55941:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var origSymbol = typeof Symbol !== "undefined" && Symbol;
var hasSymbolSham = __webpack_require__(29058);
module.exports = function hasNativeSymbols() {
    if (typeof origSymbol !== "function") {
        return false;
    }
    if (typeof Symbol !== "function") {
        return false;
    }
    if (typeof origSymbol("foo") !== "symbol") {
        return false;
    }
    if (typeof Symbol("bar") !== "symbol") {
        return false;
    }
    return hasSymbolSham();
};


/***/ }),

/***/ 29058:
/***/ ((module) => {


/* eslint complexity: [2, 18], max-statements: [2, 33] */ module.exports = function hasSymbols() {
    if (typeof Symbol !== "function" || typeof Object.getOwnPropertySymbols !== "function") {
        return false;
    }
    if (typeof Symbol.iterator === "symbol") {
        return true;
    }
    var obj = {};
    var sym = Symbol("test");
    var symObj = Object(sym);
    if (typeof sym === "string") {
        return false;
    }
    if (Object.prototype.toString.call(sym) !== "[object Symbol]") {
        return false;
    }
    if (Object.prototype.toString.call(symObj) !== "[object Symbol]") {
        return false;
    }
    // temp disabled per https://github.com/ljharb/object.assign/issues/17
    // if (sym instanceof Symbol) { return false; }
    // temp disabled per https://github.com/WebReflection/get-own-property-symbols/issues/4
    // if (!(symObj instanceof Symbol)) { return false; }
    // if (typeof Symbol.prototype.toString !== 'function') { return false; }
    // if (String(sym) !== Symbol.prototype.toString.call(sym)) { return false; }
    var symVal = 42;
    obj[sym] = symVal;
    for(sym in obj){
        return false;
    } // eslint-disable-line no-restricted-syntax, no-unreachable-loop
    if (typeof Object.keys === "function" && Object.keys(obj).length !== 0) {
        return false;
    }
    if (typeof Object.getOwnPropertyNames === "function" && Object.getOwnPropertyNames(obj).length !== 0) {
        return false;
    }
    var syms = Object.getOwnPropertySymbols(obj);
    if (syms.length !== 1 || syms[0] !== sym) {
        return false;
    }
    if (!Object.prototype.propertyIsEnumerable.call(obj, sym)) {
        return false;
    }
    if (typeof Object.getOwnPropertyDescriptor === "function") {
        var descriptor = Object.getOwnPropertyDescriptor(obj, sym);
        if (descriptor.value !== symVal || descriptor.enumerable !== true) {
            return false;
        }
    }
    return true;
};


/***/ }),

/***/ 80294:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var bind = __webpack_require__(96311);
module.exports = bind.call(Function.call, Object.prototype.hasOwnProperty);


/***/ }),

/***/ 57153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var hasMap = typeof Map === "function" && Map.prototype;
var mapSizeDescriptor = Object.getOwnPropertyDescriptor && hasMap ? Object.getOwnPropertyDescriptor(Map.prototype, "size") : null;
var mapSize = hasMap && mapSizeDescriptor && typeof mapSizeDescriptor.get === "function" ? mapSizeDescriptor.get : null;
var mapForEach = hasMap && Map.prototype.forEach;
var hasSet = typeof Set === "function" && Set.prototype;
var setSizeDescriptor = Object.getOwnPropertyDescriptor && hasSet ? Object.getOwnPropertyDescriptor(Set.prototype, "size") : null;
var setSize = hasSet && setSizeDescriptor && typeof setSizeDescriptor.get === "function" ? setSizeDescriptor.get : null;
var setForEach = hasSet && Set.prototype.forEach;
var hasWeakMap = typeof WeakMap === "function" && WeakMap.prototype;
var weakMapHas = hasWeakMap ? WeakMap.prototype.has : null;
var hasWeakSet = typeof WeakSet === "function" && WeakSet.prototype;
var weakSetHas = hasWeakSet ? WeakSet.prototype.has : null;
var hasWeakRef = typeof WeakRef === "function" && WeakRef.prototype;
var weakRefDeref = hasWeakRef ? WeakRef.prototype.deref : null;
var booleanValueOf = Boolean.prototype.valueOf;
var objectToString = Object.prototype.toString;
var functionToString = Function.prototype.toString;
var $match = String.prototype.match;
var $slice = String.prototype.slice;
var $replace = String.prototype.replace;
var $toUpperCase = String.prototype.toUpperCase;
var $toLowerCase = String.prototype.toLowerCase;
var $test = RegExp.prototype.test;
var $concat = Array.prototype.concat;
var $join = Array.prototype.join;
var $arrSlice = Array.prototype.slice;
var $floor = Math.floor;
var bigIntValueOf = typeof BigInt === "function" ? BigInt.prototype.valueOf : null;
var gOPS = Object.getOwnPropertySymbols;
var symToString = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? Symbol.prototype.toString : null;
var hasShammedSymbols = typeof Symbol === "function" && typeof Symbol.iterator === "object";
// ie, `has-tostringtag/shams
var toStringTag = typeof Symbol === "function" && Symbol.toStringTag && (typeof Symbol.toStringTag === hasShammedSymbols ? "object" : "symbol") ? Symbol.toStringTag : null;
var isEnumerable = Object.prototype.propertyIsEnumerable;
var gPO = (typeof Reflect === "function" ? Reflect.getPrototypeOf : Object.getPrototypeOf) || ([].__proto__ === Array.prototype // eslint-disable-line no-proto
 ? function(O) {
    return O.__proto__; // eslint-disable-line no-proto
} : null);
function addNumericSeparator(num, str) {
    if (num === Infinity || num === -Infinity || num !== num || num && num > -1000 && num < 1000 || $test.call(/e/, str)) {
        return str;
    }
    var sepRegex = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g;
    if (typeof num === "number") {
        var int = num < 0 ? -$floor(-num) : $floor(num); // trunc(num)
        if (int !== num) {
            var intStr = String(int);
            var dec = $slice.call(str, intStr.length + 1);
            return $replace.call(intStr, sepRegex, "$&_") + "." + $replace.call($replace.call(dec, /([0-9]{3})/g, "$&_"), /_$/, "");
        }
    }
    return $replace.call(str, sepRegex, "$&_");
}
var utilInspect = __webpack_require__(64637);
var inspectCustom = utilInspect.custom;
var inspectSymbol = isSymbol(inspectCustom) ? inspectCustom : null;
module.exports = function inspect_(obj, options, depth, seen) {
    var opts = options || {};
    if (has(opts, "quoteStyle") && opts.quoteStyle !== "single" && opts.quoteStyle !== "double") {
        throw new TypeError('option "quoteStyle" must be "single" or "double"');
    }
    if (has(opts, "maxStringLength") && (typeof opts.maxStringLength === "number" ? opts.maxStringLength < 0 && opts.maxStringLength !== Infinity : opts.maxStringLength !== null)) {
        throw new TypeError('option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`');
    }
    var customInspect = has(opts, "customInspect") ? opts.customInspect : true;
    if (typeof customInspect !== "boolean" && customInspect !== "symbol") {
        throw new TypeError("option \"customInspect\", if provided, must be `true`, `false`, or `'symbol'`");
    }
    if (has(opts, "indent") && opts.indent !== null && opts.indent !== "	" && !(parseInt(opts.indent, 10) === opts.indent && opts.indent > 0)) {
        throw new TypeError('option "indent" must be "\\t", an integer > 0, or `null`');
    }
    if (has(opts, "numericSeparator") && typeof opts.numericSeparator !== "boolean") {
        throw new TypeError('option "numericSeparator", if provided, must be `true` or `false`');
    }
    var numericSeparator = opts.numericSeparator;
    if (typeof obj === "undefined") {
        return "undefined";
    }
    if (obj === null) {
        return "null";
    }
    if (typeof obj === "boolean") {
        return obj ? "true" : "false";
    }
    if (typeof obj === "string") {
        return inspectString(obj, opts);
    }
    if (typeof obj === "number") {
        if (obj === 0) {
            return Infinity / obj > 0 ? "0" : "-0";
        }
        var str = String(obj);
        return numericSeparator ? addNumericSeparator(obj, str) : str;
    }
    if (typeof obj === "bigint") {
        var bigIntStr = String(obj) + "n";
        return numericSeparator ? addNumericSeparator(obj, bigIntStr) : bigIntStr;
    }
    var maxDepth = typeof opts.depth === "undefined" ? 5 : opts.depth;
    if (typeof depth === "undefined") {
        depth = 0;
    }
    if (depth >= maxDepth && maxDepth > 0 && typeof obj === "object") {
        return isArray(obj) ? "[Array]" : "[Object]";
    }
    var indent = getIndent(opts, depth);
    if (typeof seen === "undefined") {
        seen = [];
    } else if (indexOf(seen, obj) >= 0) {
        return "[Circular]";
    }
    function inspect(value, from, noIndent) {
        if (from) {
            seen = $arrSlice.call(seen);
            seen.push(from);
        }
        if (noIndent) {
            var newOpts = {
                depth: opts.depth
            };
            if (has(opts, "quoteStyle")) {
                newOpts.quoteStyle = opts.quoteStyle;
            }
            return inspect_(value, newOpts, depth + 1, seen);
        }
        return inspect_(value, opts, depth + 1, seen);
    }
    if (typeof obj === "function" && !isRegExp(obj)) {
        var name = nameOf(obj);
        var keys = arrObjKeys(obj, inspect);
        return "[Function" + (name ? ": " + name : " (anonymous)") + "]" + (keys.length > 0 ? " { " + $join.call(keys, ", ") + " }" : "");
    }
    if (isSymbol(obj)) {
        var symString = hasShammedSymbols ? $replace.call(String(obj), /^(Symbol\(.*\))_[^)]*$/, "$1") : symToString.call(obj);
        return typeof obj === "object" && !hasShammedSymbols ? markBoxed(symString) : symString;
    }
    if (isElement(obj)) {
        var s = "<" + $toLowerCase.call(String(obj.nodeName));
        var attrs = obj.attributes || [];
        for(var i = 0; i < attrs.length; i++){
            s += " " + attrs[i].name + "=" + wrapQuotes(quote(attrs[i].value), "double", opts);
        }
        s += ">";
        if (obj.childNodes && obj.childNodes.length) {
            s += "...";
        }
        s += "</" + $toLowerCase.call(String(obj.nodeName)) + ">";
        return s;
    }
    if (isArray(obj)) {
        if (obj.length === 0) {
            return "[]";
        }
        var xs = arrObjKeys(obj, inspect);
        if (indent && !singleLineValues(xs)) {
            return "[" + indentedJoin(xs, indent) + "]";
        }
        return "[ " + $join.call(xs, ", ") + " ]";
    }
    if (isError(obj)) {
        var parts = arrObjKeys(obj, inspect);
        if (!("cause" in Error.prototype) && "cause" in obj && !isEnumerable.call(obj, "cause")) {
            return "{ [" + String(obj) + "] " + $join.call($concat.call("[cause]: " + inspect(obj.cause), parts), ", ") + " }";
        }
        if (parts.length === 0) {
            return "[" + String(obj) + "]";
        }
        return "{ [" + String(obj) + "] " + $join.call(parts, ", ") + " }";
    }
    if (typeof obj === "object" && customInspect) {
        if (inspectSymbol && typeof obj[inspectSymbol] === "function" && utilInspect) {
            return utilInspect(obj, {
                depth: maxDepth - depth
            });
        } else if (customInspect !== "symbol" && typeof obj.inspect === "function") {
            return obj.inspect();
        }
    }
    if (isMap(obj)) {
        var mapParts = [];
        if (mapForEach) {
            mapForEach.call(obj, function(value, key) {
                mapParts.push(inspect(key, obj, true) + " => " + inspect(value, obj));
            });
        }
        return collectionOf("Map", mapSize.call(obj), mapParts, indent);
    }
    if (isSet(obj)) {
        var setParts = [];
        if (setForEach) {
            setForEach.call(obj, function(value) {
                setParts.push(inspect(value, obj));
            });
        }
        return collectionOf("Set", setSize.call(obj), setParts, indent);
    }
    if (isWeakMap(obj)) {
        return weakCollectionOf("WeakMap");
    }
    if (isWeakSet(obj)) {
        return weakCollectionOf("WeakSet");
    }
    if (isWeakRef(obj)) {
        return weakCollectionOf("WeakRef");
    }
    if (isNumber(obj)) {
        return markBoxed(inspect(Number(obj)));
    }
    if (isBigInt(obj)) {
        return markBoxed(inspect(bigIntValueOf.call(obj)));
    }
    if (isBoolean(obj)) {
        return markBoxed(booleanValueOf.call(obj));
    }
    if (isString(obj)) {
        return markBoxed(inspect(String(obj)));
    }
    if (!isDate(obj) && !isRegExp(obj)) {
        var ys = arrObjKeys(obj, inspect);
        var isPlainObject = gPO ? gPO(obj) === Object.prototype : obj instanceof Object || obj.constructor === Object;
        var protoTag = obj instanceof Object ? "" : "null prototype";
        var stringTag = !isPlainObject && toStringTag && Object(obj) === obj && toStringTag in obj ? $slice.call(toStr(obj), 8, -1) : protoTag ? "Object" : "";
        var constructorTag = isPlainObject || typeof obj.constructor !== "function" ? "" : obj.constructor.name ? obj.constructor.name + " " : "";
        var tag = constructorTag + (stringTag || protoTag ? "[" + $join.call($concat.call([], stringTag || [], protoTag || []), ": ") + "] " : "");
        if (ys.length === 0) {
            return tag + "{}";
        }
        if (indent) {
            return tag + "{" + indentedJoin(ys, indent) + "}";
        }
        return tag + "{ " + $join.call(ys, ", ") + " }";
    }
    return String(obj);
};
function wrapQuotes(s, defaultStyle, opts) {
    var quoteChar = (opts.quoteStyle || defaultStyle) === "double" ? '"' : "'";
    return quoteChar + s + quoteChar;
}
function quote(s) {
    return $replace.call(String(s), /"/g, "&quot;");
}
function isArray(obj) {
    return toStr(obj) === "[object Array]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isDate(obj) {
    return toStr(obj) === "[object Date]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isRegExp(obj) {
    return toStr(obj) === "[object RegExp]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isError(obj) {
    return toStr(obj) === "[object Error]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isString(obj) {
    return toStr(obj) === "[object String]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isNumber(obj) {
    return toStr(obj) === "[object Number]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
function isBoolean(obj) {
    return toStr(obj) === "[object Boolean]" && (!toStringTag || !(typeof obj === "object" && toStringTag in obj));
}
// Symbol and BigInt do have Symbol.toStringTag by spec, so that can't be used to eliminate false positives
function isSymbol(obj) {
    if (hasShammedSymbols) {
        return obj && typeof obj === "object" && obj instanceof Symbol;
    }
    if (typeof obj === "symbol") {
        return true;
    }
    if (!obj || typeof obj !== "object" || !symToString) {
        return false;
    }
    try {
        symToString.call(obj);
        return true;
    } catch (e) {}
    return false;
}
function isBigInt(obj) {
    if (!obj || typeof obj !== "object" || !bigIntValueOf) {
        return false;
    }
    try {
        bigIntValueOf.call(obj);
        return true;
    } catch (e) {}
    return false;
}
var hasOwn = Object.prototype.hasOwnProperty || function(key) {
    return key in this;
};
function has(obj, key) {
    return hasOwn.call(obj, key);
}
function toStr(obj) {
    return objectToString.call(obj);
}
function nameOf(f) {
    if (f.name) {
        return f.name;
    }
    var m = $match.call(functionToString.call(f), /^function\s*([\w$]+)/);
    if (m) {
        return m[1];
    }
    return null;
}
function indexOf(xs, x) {
    if (xs.indexOf) {
        return xs.indexOf(x);
    }
    for(var i = 0, l = xs.length; i < l; i++){
        if (xs[i] === x) {
            return i;
        }
    }
    return -1;
}
function isMap(x) {
    if (!mapSize || !x || typeof x !== "object") {
        return false;
    }
    try {
        mapSize.call(x);
        try {
            setSize.call(x);
        } catch (s) {
            return true;
        }
        return x instanceof Map; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakMap(x) {
    if (!weakMapHas || !x || typeof x !== "object") {
        return false;
    }
    try {
        weakMapHas.call(x, weakMapHas);
        try {
            weakSetHas.call(x, weakSetHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakMap; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakRef(x) {
    if (!weakRefDeref || !x || typeof x !== "object") {
        return false;
    }
    try {
        weakRefDeref.call(x);
        return true;
    } catch (e) {}
    return false;
}
function isSet(x) {
    if (!setSize || !x || typeof x !== "object") {
        return false;
    }
    try {
        setSize.call(x);
        try {
            mapSize.call(x);
        } catch (m) {
            return true;
        }
        return x instanceof Set; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isWeakSet(x) {
    if (!weakSetHas || !x || typeof x !== "object") {
        return false;
    }
    try {
        weakSetHas.call(x, weakSetHas);
        try {
            weakMapHas.call(x, weakMapHas);
        } catch (s) {
            return true;
        }
        return x instanceof WeakSet; // core-js workaround, pre-v2.5.0
    } catch (e) {}
    return false;
}
function isElement(x) {
    if (!x || typeof x !== "object") {
        return false;
    }
    if (typeof HTMLElement !== "undefined" && x instanceof HTMLElement) {
        return true;
    }
    return typeof x.nodeName === "string" && typeof x.getAttribute === "function";
}
function inspectString(str, opts) {
    if (str.length > opts.maxStringLength) {
        var remaining = str.length - opts.maxStringLength;
        var trailer = "... " + remaining + " more character" + (remaining > 1 ? "s" : "");
        return inspectString($slice.call(str, 0, opts.maxStringLength), opts) + trailer;
    }
    // eslint-disable-next-line no-control-regex
    var s = $replace.call($replace.call(str, /(['\\])/g, "\\$1"), /[\x00-\x1f]/g, lowbyte);
    return wrapQuotes(s, "single", opts);
}
function lowbyte(c) {
    var n = c.charCodeAt(0);
    var x = {
        8: "b",
        9: "t",
        10: "n",
        12: "f",
        13: "r"
    }[n];
    if (x) {
        return "\\" + x;
    }
    return "\\x" + (n < 0x10 ? "0" : "") + $toUpperCase.call(n.toString(16));
}
function markBoxed(str) {
    return "Object(" + str + ")";
}
function weakCollectionOf(type) {
    return type + " { ? }";
}
function collectionOf(type, size, entries, indent) {
    var joinedEntries = indent ? indentedJoin(entries, indent) : $join.call(entries, ", ");
    return type + " (" + size + ") {" + joinedEntries + "}";
}
function singleLineValues(xs) {
    for(var i = 0; i < xs.length; i++){
        if (indexOf(xs[i], "\n") >= 0) {
            return false;
        }
    }
    return true;
}
function getIndent(opts, depth) {
    var baseIndent;
    if (opts.indent === "	") {
        baseIndent = "	";
    } else if (typeof opts.indent === "number" && opts.indent > 0) {
        baseIndent = $join.call(Array(opts.indent + 1), " ");
    } else {
        return null;
    }
    return {
        base: baseIndent,
        prev: $join.call(Array(depth + 1), baseIndent)
    };
}
function indentedJoin(xs, indent) {
    if (xs.length === 0) {
        return "";
    }
    var lineJoiner = "\n" + indent.prev + indent.base;
    return lineJoiner + $join.call(xs, "," + lineJoiner) + "\n" + indent.prev;
}
function arrObjKeys(obj, inspect) {
    var isArr = isArray(obj);
    var xs = [];
    if (isArr) {
        xs.length = obj.length;
        for(var i = 0; i < obj.length; i++){
            xs[i] = has(obj, i) ? inspect(obj[i], obj) : "";
        }
    }
    var syms = typeof gOPS === "function" ? gOPS(obj) : [];
    var symMap;
    if (hasShammedSymbols) {
        symMap = {};
        for(var k = 0; k < syms.length; k++){
            symMap["$" + syms[k]] = syms[k];
        }
    }
    for(var key in obj){
        if (!has(obj, key)) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (isArr && String(Number(key)) === key && key < obj.length) {
            continue;
        } // eslint-disable-line no-restricted-syntax, no-continue
        if (hasShammedSymbols && symMap["$" + key] instanceof Symbol) {
            continue; // eslint-disable-line no-restricted-syntax, no-continue
        } else if ($test.call(/[^\w$]/, key)) {
            xs.push(inspect(key, obj) + ": " + inspect(obj[key], obj));
        } else {
            xs.push(key + ": " + inspect(obj[key], obj));
        }
    }
    if (typeof gOPS === "function") {
        for(var j = 0; j < syms.length; j++){
            if (isEnumerable.call(obj, syms[j])) {
                xs.push("[" + inspect(syms[j]) + "]: " + inspect(obj[syms[j]], obj));
            }
        }
    }
    return xs;
}


/***/ }),

/***/ 64637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


module.exports = __webpack_require__(73837).inspect;


/***/ }),

/***/ 43023:
/***/ ((module) => {


var replace = String.prototype.replace;
var percentTwenties = /%20/g;
var Format = {
    RFC1738: "RFC1738",
    RFC3986: "RFC3986"
};
module.exports = {
    "default": Format.RFC3986,
    formatters: {
        RFC1738: function(value) {
            return replace.call(value, percentTwenties, "+");
        },
        RFC3986: function(value) {
            return String(value);
        }
    },
    RFC1738: Format.RFC1738,
    RFC3986: Format.RFC3986
};


/***/ }),

/***/ 36931:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var stringify = __webpack_require__(45780);
var parse = __webpack_require__(74896);
var formats = __webpack_require__(43023);
module.exports = {
    formats: formats,
    parse: parse,
    stringify: stringify
};


/***/ }),

/***/ 74896:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var utils = __webpack_require__(97077);
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var defaults = {
    allowDots: false,
    allowPrototypes: false,
    allowSparse: false,
    arrayLimit: 20,
    charset: "utf-8",
    charsetSentinel: false,
    comma: false,
    decoder: utils.decode,
    delimiter: "&",
    depth: 5,
    ignoreQueryPrefix: false,
    interpretNumericEntities: false,
    parameterLimit: 1000,
    parseArrays: true,
    plainObjects: false,
    strictNullHandling: false
};
var interpretNumericEntities = function(str) {
    return str.replace(/&#(\d+);/g, function($0, numberStr) {
        return String.fromCharCode(parseInt(numberStr, 10));
    });
};
var parseArrayValue = function(val, options) {
    if (val && typeof val === "string" && options.comma && val.indexOf(",") > -1) {
        return val.split(",");
    }
    return val;
};
// This is what browsers will submit when the ✓ character occurs in an
// application/x-www-form-urlencoded body and the encoding of the page containing
// the form is iso-8859-1, or when the submitted form has an accept-charset
// attribute of iso-8859-1. Presumably also with other charsets that do not contain
// the ✓ character, such as us-ascii.
var isoSentinel = "utf8=%26%2310003%3B"; // encodeURIComponent('&#10003;')
// These are the percent-encoded utf-8 octets representing a checkmark, indicating that the request actually is utf-8 encoded.
var charsetSentinel = "utf8=%E2%9C%93"; // encodeURIComponent('✓')
var parseValues = function parseQueryStringValues(str, options) {
    var obj = {
        __proto__: null
    };
    var cleanStr = options.ignoreQueryPrefix ? str.replace(/^\?/, "") : str;
    var limit = options.parameterLimit === Infinity ? undefined : options.parameterLimit;
    var parts = cleanStr.split(options.delimiter, limit);
    var skipIndex = -1; // Keep track of where the utf8 sentinel was found
    var i;
    var charset = options.charset;
    if (options.charsetSentinel) {
        for(i = 0; i < parts.length; ++i){
            if (parts[i].indexOf("utf8=") === 0) {
                if (parts[i] === charsetSentinel) {
                    charset = "utf-8";
                } else if (parts[i] === isoSentinel) {
                    charset = "iso-8859-1";
                }
                skipIndex = i;
                i = parts.length; // The eslint settings do not allow break;
            }
        }
    }
    for(i = 0; i < parts.length; ++i){
        if (i === skipIndex) {
            continue;
        }
        var part = parts[i];
        var bracketEqualsPos = part.indexOf("]=");
        var pos = bracketEqualsPos === -1 ? part.indexOf("=") : bracketEqualsPos + 1;
        var key, val;
        if (pos === -1) {
            key = options.decoder(part, defaults.decoder, charset, "key");
            val = options.strictNullHandling ? null : "";
        } else {
            key = options.decoder(part.slice(0, pos), defaults.decoder, charset, "key");
            val = utils.maybeMap(parseArrayValue(part.slice(pos + 1), options), function(encodedVal) {
                return options.decoder(encodedVal, defaults.decoder, charset, "value");
            });
        }
        if (val && options.interpretNumericEntities && charset === "iso-8859-1") {
            val = interpretNumericEntities(val);
        }
        if (part.indexOf("[]=") > -1) {
            val = isArray(val) ? [
                val
            ] : val;
        }
        if (has.call(obj, key)) {
            obj[key] = utils.combine(obj[key], val);
        } else {
            obj[key] = val;
        }
    }
    return obj;
};
var parseObject = function(chain, val, options, valuesParsed) {
    var leaf = valuesParsed ? val : parseArrayValue(val, options);
    for(var i = chain.length - 1; i >= 0; --i){
        var obj;
        var root = chain[i];
        if (root === "[]" && options.parseArrays) {
            obj = [].concat(leaf);
        } else {
            obj = options.plainObjects ? Object.create(null) : {};
            var cleanRoot = root.charAt(0) === "[" && root.charAt(root.length - 1) === "]" ? root.slice(1, -1) : root;
            var index = parseInt(cleanRoot, 10);
            if (!options.parseArrays && cleanRoot === "") {
                obj = {
                    0: leaf
                };
            } else if (!isNaN(index) && root !== cleanRoot && String(index) === cleanRoot && index >= 0 && options.parseArrays && index <= options.arrayLimit) {
                obj = [];
                obj[index] = leaf;
            } else if (cleanRoot !== "__proto__") {
                obj[cleanRoot] = leaf;
            }
        }
        leaf = obj;
    }
    return leaf;
};
var parseKeys = function parseQueryStringKeys(givenKey, val, options, valuesParsed) {
    if (!givenKey) {
        return;
    }
    // Transform dot notation to bracket notation
    var key = options.allowDots ? givenKey.replace(/\.([^.[]+)/g, "[$1]") : givenKey;
    // The regex chunks
    var brackets = /(\[[^[\]]*])/;
    var child = /(\[[^[\]]*])/g;
    // Get the parent
    var segment = options.depth > 0 && brackets.exec(key);
    var parent = segment ? key.slice(0, segment.index) : key;
    // Stash the parent if it exists
    var keys = [];
    if (parent) {
        // If we aren't using plain objects, optionally prefix keys that would overwrite object prototype properties
        if (!options.plainObjects && has.call(Object.prototype, parent)) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(parent);
    }
    // Loop through children appending to the array until we hit depth
    var i = 0;
    while(options.depth > 0 && (segment = child.exec(key)) !== null && i < options.depth){
        i += 1;
        if (!options.plainObjects && has.call(Object.prototype, segment[1].slice(1, -1))) {
            if (!options.allowPrototypes) {
                return;
            }
        }
        keys.push(segment[1]);
    }
    // If there's a remainder, just add whatever is left
    if (segment) {
        keys.push("[" + key.slice(segment.index) + "]");
    }
    return parseObject(keys, val, options, valuesParsed);
};
var normalizeParseOptions = function normalizeParseOptions(opts) {
    if (!opts) {
        return defaults;
    }
    if (opts.decoder !== null && opts.decoder !== undefined && typeof opts.decoder !== "function") {
        throw new TypeError("Decoder has to be a function.");
    }
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var charset = typeof opts.charset === "undefined" ? defaults.charset : opts.charset;
    return {
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        allowPrototypes: typeof opts.allowPrototypes === "boolean" ? opts.allowPrototypes : defaults.allowPrototypes,
        allowSparse: typeof opts.allowSparse === "boolean" ? opts.allowSparse : defaults.allowSparse,
        arrayLimit: typeof opts.arrayLimit === "number" ? opts.arrayLimit : defaults.arrayLimit,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        comma: typeof opts.comma === "boolean" ? opts.comma : defaults.comma,
        decoder: typeof opts.decoder === "function" ? opts.decoder : defaults.decoder,
        delimiter: typeof opts.delimiter === "string" || utils.isRegExp(opts.delimiter) ? opts.delimiter : defaults.delimiter,
        // eslint-disable-next-line no-implicit-coercion, no-extra-parens
        depth: typeof opts.depth === "number" || opts.depth === false ? +opts.depth : defaults.depth,
        ignoreQueryPrefix: opts.ignoreQueryPrefix === true,
        interpretNumericEntities: typeof opts.interpretNumericEntities === "boolean" ? opts.interpretNumericEntities : defaults.interpretNumericEntities,
        parameterLimit: typeof opts.parameterLimit === "number" ? opts.parameterLimit : defaults.parameterLimit,
        parseArrays: opts.parseArrays !== false,
        plainObjects: typeof opts.plainObjects === "boolean" ? opts.plainObjects : defaults.plainObjects,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(str, opts) {
    var options = normalizeParseOptions(opts);
    if (str === "" || str === null || typeof str === "undefined") {
        return options.plainObjects ? Object.create(null) : {};
    }
    var tempObj = typeof str === "string" ? parseValues(str, options) : str;
    var obj = options.plainObjects ? Object.create(null) : {};
    // Iterate over the keys and setup the new object
    var keys = Object.keys(tempObj);
    for(var i = 0; i < keys.length; ++i){
        var key = keys[i];
        var newObj = parseKeys(key, tempObj[key], options, typeof str === "string");
        obj = utils.merge(obj, newObj, options);
    }
    if (options.allowSparse === true) {
        return obj;
    }
    return utils.compact(obj);
};


/***/ }),

/***/ 45780:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var getSideChannel = __webpack_require__(90547);
var utils = __webpack_require__(97077);
var formats = __webpack_require__(43023);
var has = Object.prototype.hasOwnProperty;
var arrayPrefixGenerators = {
    brackets: function brackets(prefix) {
        return prefix + "[]";
    },
    comma: "comma",
    indices: function indices(prefix, key) {
        return prefix + "[" + key + "]";
    },
    repeat: function repeat(prefix) {
        return prefix;
    }
};
var isArray = Array.isArray;
var push = Array.prototype.push;
var pushToArray = function(arr, valueOrArray) {
    push.apply(arr, isArray(valueOrArray) ? valueOrArray : [
        valueOrArray
    ]);
};
var toISO = Date.prototype.toISOString;
var defaultFormat = formats["default"];
var defaults = {
    addQueryPrefix: false,
    allowDots: false,
    charset: "utf-8",
    charsetSentinel: false,
    delimiter: "&",
    encode: true,
    encoder: utils.encode,
    encodeValuesOnly: false,
    format: defaultFormat,
    formatter: formats.formatters[defaultFormat],
    // deprecated
    indices: false,
    serializeDate: function serializeDate(date) {
        return toISO.call(date);
    },
    skipNulls: false,
    strictNullHandling: false
};
var isNonNullishPrimitive = function isNonNullishPrimitive(v) {
    return typeof v === "string" || typeof v === "number" || typeof v === "boolean" || typeof v === "symbol" || typeof v === "bigint";
};
var sentinel = {};
var stringify = function stringify(object, prefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, sideChannel) {
    var obj = object;
    var tmpSc = sideChannel;
    var step = 0;
    var findFlag = false;
    while((tmpSc = tmpSc.get(sentinel)) !== void undefined && !findFlag){
        // Where object last appeared in the ref tree
        var pos = tmpSc.get(object);
        step += 1;
        if (typeof pos !== "undefined") {
            if (pos === step) {
                throw new RangeError("Cyclic object value");
            } else {
                findFlag = true; // Break while
            }
        }
        if (typeof tmpSc.get(sentinel) === "undefined") {
            step = 0;
        }
    }
    if (typeof filter === "function") {
        obj = filter(prefix, obj);
    } else if (obj instanceof Date) {
        obj = serializeDate(obj);
    } else if (generateArrayPrefix === "comma" && isArray(obj)) {
        obj = utils.maybeMap(obj, function(value) {
            if (value instanceof Date) {
                return serializeDate(value);
            }
            return value;
        });
    }
    if (obj === null) {
        if (strictNullHandling) {
            return encoder && !encodeValuesOnly ? encoder(prefix, defaults.encoder, charset, "key", format) : prefix;
        }
        obj = "";
    }
    if (isNonNullishPrimitive(obj) || utils.isBuffer(obj)) {
        if (encoder) {
            var keyValue = encodeValuesOnly ? prefix : encoder(prefix, defaults.encoder, charset, "key", format);
            return [
                formatter(keyValue) + "=" + formatter(encoder(obj, defaults.encoder, charset, "value", format))
            ];
        }
        return [
            formatter(prefix) + "=" + formatter(String(obj))
        ];
    }
    var values = [];
    if (typeof obj === "undefined") {
        return values;
    }
    var objKeys;
    if (generateArrayPrefix === "comma" && isArray(obj)) {
        // we need to join elements in
        if (encodeValuesOnly && encoder) {
            obj = utils.maybeMap(obj, encoder);
        }
        objKeys = [
            {
                value: obj.length > 0 ? obj.join(",") || null : void undefined
            }
        ];
    } else if (isArray(filter)) {
        objKeys = filter;
    } else {
        var keys = Object.keys(obj);
        objKeys = sort ? keys.sort(sort) : keys;
    }
    var adjustedPrefix = commaRoundTrip && isArray(obj) && obj.length === 1 ? prefix + "[]" : prefix;
    for(var j = 0; j < objKeys.length; ++j){
        var key = objKeys[j];
        var value = typeof key === "object" && typeof key.value !== "undefined" ? key.value : obj[key];
        if (skipNulls && value === null) {
            continue;
        }
        var keyPrefix = isArray(obj) ? typeof generateArrayPrefix === "function" ? generateArrayPrefix(adjustedPrefix, key) : adjustedPrefix : adjustedPrefix + (allowDots ? "." + key : "[" + key + "]");
        sideChannel.set(object, step);
        var valueSideChannel = getSideChannel();
        valueSideChannel.set(sentinel, sideChannel);
        pushToArray(values, stringify(value, keyPrefix, generateArrayPrefix, commaRoundTrip, strictNullHandling, skipNulls, generateArrayPrefix === "comma" && encodeValuesOnly && isArray(obj) ? null : encoder, filter, sort, allowDots, serializeDate, format, formatter, encodeValuesOnly, charset, valueSideChannel));
    }
    return values;
};
var normalizeStringifyOptions = function normalizeStringifyOptions(opts) {
    if (!opts) {
        return defaults;
    }
    if (opts.encoder !== null && typeof opts.encoder !== "undefined" && typeof opts.encoder !== "function") {
        throw new TypeError("Encoder has to be a function.");
    }
    var charset = opts.charset || defaults.charset;
    if (typeof opts.charset !== "undefined" && opts.charset !== "utf-8" && opts.charset !== "iso-8859-1") {
        throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
    }
    var format = formats["default"];
    if (typeof opts.format !== "undefined") {
        if (!has.call(formats.formatters, opts.format)) {
            throw new TypeError("Unknown format option provided.");
        }
        format = opts.format;
    }
    var formatter = formats.formatters[format];
    var filter = defaults.filter;
    if (typeof opts.filter === "function" || isArray(opts.filter)) {
        filter = opts.filter;
    }
    return {
        addQueryPrefix: typeof opts.addQueryPrefix === "boolean" ? opts.addQueryPrefix : defaults.addQueryPrefix,
        allowDots: typeof opts.allowDots === "undefined" ? defaults.allowDots : !!opts.allowDots,
        charset: charset,
        charsetSentinel: typeof opts.charsetSentinel === "boolean" ? opts.charsetSentinel : defaults.charsetSentinel,
        delimiter: typeof opts.delimiter === "undefined" ? defaults.delimiter : opts.delimiter,
        encode: typeof opts.encode === "boolean" ? opts.encode : defaults.encode,
        encoder: typeof opts.encoder === "function" ? opts.encoder : defaults.encoder,
        encodeValuesOnly: typeof opts.encodeValuesOnly === "boolean" ? opts.encodeValuesOnly : defaults.encodeValuesOnly,
        filter: filter,
        format: format,
        formatter: formatter,
        serializeDate: typeof opts.serializeDate === "function" ? opts.serializeDate : defaults.serializeDate,
        skipNulls: typeof opts.skipNulls === "boolean" ? opts.skipNulls : defaults.skipNulls,
        sort: typeof opts.sort === "function" ? opts.sort : null,
        strictNullHandling: typeof opts.strictNullHandling === "boolean" ? opts.strictNullHandling : defaults.strictNullHandling
    };
};
module.exports = function(object, opts) {
    var obj = object;
    var options = normalizeStringifyOptions(opts);
    var objKeys;
    var filter;
    if (typeof options.filter === "function") {
        filter = options.filter;
        obj = filter("", obj);
    } else if (isArray(options.filter)) {
        filter = options.filter;
        objKeys = filter;
    }
    var keys = [];
    if (typeof obj !== "object" || obj === null) {
        return "";
    }
    var arrayFormat;
    if (opts && opts.arrayFormat in arrayPrefixGenerators) {
        arrayFormat = opts.arrayFormat;
    } else if (opts && "indices" in opts) {
        arrayFormat = opts.indices ? "indices" : "repeat";
    } else {
        arrayFormat = "indices";
    }
    var generateArrayPrefix = arrayPrefixGenerators[arrayFormat];
    if (opts && "commaRoundTrip" in opts && typeof opts.commaRoundTrip !== "boolean") {
        throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
    }
    var commaRoundTrip = generateArrayPrefix === "comma" && opts && opts.commaRoundTrip;
    if (!objKeys) {
        objKeys = Object.keys(obj);
    }
    if (options.sort) {
        objKeys.sort(options.sort);
    }
    var sideChannel = getSideChannel();
    for(var i = 0; i < objKeys.length; ++i){
        var key = objKeys[i];
        if (options.skipNulls && obj[key] === null) {
            continue;
        }
        pushToArray(keys, stringify(obj[key], key, generateArrayPrefix, commaRoundTrip, options.strictNullHandling, options.skipNulls, options.encode ? options.encoder : null, options.filter, options.sort, options.allowDots, options.serializeDate, options.format, options.formatter, options.encodeValuesOnly, options.charset, sideChannel));
    }
    var joined = keys.join(options.delimiter);
    var prefix = options.addQueryPrefix === true ? "?" : "";
    if (options.charsetSentinel) {
        if (options.charset === "iso-8859-1") {
            // encodeURIComponent('&#10003;'), the "numeric entity" representation of a checkmark
            prefix += "utf8=%26%2310003%3B&";
        } else {
            // encodeURIComponent('✓')
            prefix += "utf8=%E2%9C%93&";
        }
    }
    return joined.length > 0 ? prefix + joined : "";
};


/***/ }),

/***/ 97077:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var formats = __webpack_require__(43023);
var has = Object.prototype.hasOwnProperty;
var isArray = Array.isArray;
var hexTable = function() {
    var array = [];
    for(var i = 0; i < 256; ++i){
        array.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
    }
    return array;
}();
var compactQueue = function compactQueue(queue) {
    while(queue.length > 1){
        var item = queue.pop();
        var obj = item.obj[item.prop];
        if (isArray(obj)) {
            var compacted = [];
            for(var j = 0; j < obj.length; ++j){
                if (typeof obj[j] !== "undefined") {
                    compacted.push(obj[j]);
                }
            }
            item.obj[item.prop] = compacted;
        }
    }
};
var arrayToObject = function arrayToObject(source, options) {
    var obj = options && options.plainObjects ? Object.create(null) : {};
    for(var i = 0; i < source.length; ++i){
        if (typeof source[i] !== "undefined") {
            obj[i] = source[i];
        }
    }
    return obj;
};
var merge = function merge(target, source, options) {
    /* eslint no-param-reassign: 0 */ if (!source) {
        return target;
    }
    if (typeof source !== "object") {
        if (isArray(target)) {
            target.push(source);
        } else if (target && typeof target === "object") {
            if (options && (options.plainObjects || options.allowPrototypes) || !has.call(Object.prototype, source)) {
                target[source] = true;
            }
        } else {
            return [
                target,
                source
            ];
        }
        return target;
    }
    if (!target || typeof target !== "object") {
        return [
            target
        ].concat(source);
    }
    var mergeTarget = target;
    if (isArray(target) && !isArray(source)) {
        mergeTarget = arrayToObject(target, options);
    }
    if (isArray(target) && isArray(source)) {
        source.forEach(function(item, i) {
            if (has.call(target, i)) {
                var targetItem = target[i];
                if (targetItem && typeof targetItem === "object" && item && typeof item === "object") {
                    target[i] = merge(targetItem, item, options);
                } else {
                    target.push(item);
                }
            } else {
                target[i] = item;
            }
        });
        return target;
    }
    return Object.keys(source).reduce(function(acc, key) {
        var value = source[key];
        if (has.call(acc, key)) {
            acc[key] = merge(acc[key], value, options);
        } else {
            acc[key] = value;
        }
        return acc;
    }, mergeTarget);
};
var assign = function assignSingleSource(target, source) {
    return Object.keys(source).reduce(function(acc, key) {
        acc[key] = source[key];
        return acc;
    }, target);
};
var decode = function(str, decoder, charset) {
    var strWithoutPlus = str.replace(/\+/g, " ");
    if (charset === "iso-8859-1") {
        // unescape never throws, no try...catch needed:
        return strWithoutPlus.replace(/%[0-9a-f]{2}/gi, unescape);
    }
    // utf-8
    try {
        return decodeURIComponent(strWithoutPlus);
    } catch (e) {
        return strWithoutPlus;
    }
};
var encode = function encode(str, defaultEncoder, charset, kind, format) {
    // This code was originally written by Brian White (mscdex) for the io.js core querystring library.
    // It has been adapted here for stricter adherence to RFC 3986
    if (str.length === 0) {
        return str;
    }
    var string = str;
    if (typeof str === "symbol") {
        string = Symbol.prototype.toString.call(str);
    } else if (typeof str !== "string") {
        string = String(str);
    }
    if (charset === "iso-8859-1") {
        return escape(string).replace(/%u[0-9a-f]{4}/gi, function($0) {
            return "%26%23" + parseInt($0.slice(2), 16) + "%3B";
        });
    }
    var out = "";
    for(var i = 0; i < string.length; ++i){
        var c = string.charCodeAt(i);
        if (c === 0x2D // -
         || c === 0x2E // .
         || c === 0x5F // _
         || c === 0x7E // ~
         || c >= 0x30 && c <= 0x39 // 0-9
         || c >= 0x41 && c <= 0x5A // a-z
         || c >= 0x61 && c <= 0x7A // A-Z
         || format === formats.RFC1738 && (c === 0x28 || c === 0x29) // ( )
        ) {
            out += string.charAt(i);
            continue;
        }
        if (c < 0x80) {
            out = out + hexTable[c];
            continue;
        }
        if (c < 0x800) {
            out = out + (hexTable[0xC0 | c >> 6] + hexTable[0x80 | c & 0x3F]);
            continue;
        }
        if (c < 0xD800 || c >= 0xE000) {
            out = out + (hexTable[0xE0 | c >> 12] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F]);
            continue;
        }
        i += 1;
        c = 0x10000 + ((c & 0x3FF) << 10 | string.charCodeAt(i) & 0x3FF);
        /* eslint operator-linebreak: [2, "before"] */ out += hexTable[0xF0 | c >> 18] + hexTable[0x80 | c >> 12 & 0x3F] + hexTable[0x80 | c >> 6 & 0x3F] + hexTable[0x80 | c & 0x3F];
    }
    return out;
};
var compact = function compact(value) {
    var queue = [
        {
            obj: {
                o: value
            },
            prop: "o"
        }
    ];
    var refs = [];
    for(var i = 0; i < queue.length; ++i){
        var item = queue[i];
        var obj = item.obj[item.prop];
        var keys = Object.keys(obj);
        for(var j = 0; j < keys.length; ++j){
            var key = keys[j];
            var val = obj[key];
            if (typeof val === "object" && val !== null && refs.indexOf(val) === -1) {
                queue.push({
                    obj: obj,
                    prop: key
                });
                refs.push(val);
            }
        }
    }
    compactQueue(queue);
    return value;
};
var isRegExp = function isRegExp(obj) {
    return Object.prototype.toString.call(obj) === "[object RegExp]";
};
var isBuffer = function isBuffer(obj) {
    if (!obj || typeof obj !== "object") {
        return false;
    }
    return !!(obj.constructor && obj.constructor.isBuffer && obj.constructor.isBuffer(obj));
};
var combine = function combine(a, b) {
    return [].concat(a, b);
};
var maybeMap = function maybeMap(val, fn) {
    if (isArray(val)) {
        var mapped = [];
        for(var i = 0; i < val.length; i += 1){
            mapped.push(fn(val[i]));
        }
        return mapped;
    }
    return fn(val);
};
module.exports = {
    arrayToObject: arrayToObject,
    assign: assign,
    combine: combine,
    compact: compact,
    decode: decode,
    encode: encode,
    isBuffer: isBuffer,
    isRegExp: isRegExp,
    maybeMap: maybeMap,
    merge: merge
};


/***/ }),

/***/ 90547:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {


var GetIntrinsic = __webpack_require__(5556);
var callBound = __webpack_require__(40499);
var inspect = __webpack_require__(57153);
var $TypeError = GetIntrinsic("%TypeError%");
var $WeakMap = GetIntrinsic("%WeakMap%", true);
var $Map = GetIntrinsic("%Map%", true);
var $weakMapGet = callBound("WeakMap.prototype.get", true);
var $weakMapSet = callBound("WeakMap.prototype.set", true);
var $weakMapHas = callBound("WeakMap.prototype.has", true);
var $mapGet = callBound("Map.prototype.get", true);
var $mapSet = callBound("Map.prototype.set", true);
var $mapHas = callBound("Map.prototype.has", true);
/*
 * This function traverses the list returning the node corresponding to the
 * given key.
 *
 * That node is also moved to the head of the list, so that if it's accessed
 * again we don't need to traverse the whole list. By doing so, all the recently
 * used nodes can be accessed relatively quickly.
 */ var listGetNode = function(list, key) {
    for(var prev = list, curr; (curr = prev.next) !== null; prev = curr){
        if (curr.key === key) {
            prev.next = curr.next;
            curr.next = list.next;
            list.next = curr; // eslint-disable-line no-param-reassign
            return curr;
        }
    }
};
var listGet = function(objects, key) {
    var node = listGetNode(objects, key);
    return node && node.value;
};
var listSet = function(objects, key, value) {
    var node = listGetNode(objects, key);
    if (node) {
        node.value = value;
    } else {
        // Prepend the new node to the beginning of the list
        objects.next = {
            key: key,
            next: objects.next,
            value: value
        };
    }
};
var listHas = function(objects, key) {
    return !!listGetNode(objects, key);
};
module.exports = function getSideChannel() {
    var $wm;
    var $m;
    var $o;
    var channel = {
        assert: function(key) {
            if (!channel.has(key)) {
                throw new $TypeError("Side channel does not contain " + inspect(key));
            }
        },
        get: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) {
                    return $weakMapGet($wm, key);
                }
            } else if ($Map) {
                if ($m) {
                    return $mapGet($m, key);
                }
            } else {
                if ($o) {
                    return listGet($o, key);
                }
            }
        },
        has: function(key) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if ($wm) {
                    return $weakMapHas($wm, key);
                }
            } else if ($Map) {
                if ($m) {
                    return $mapHas($m, key);
                }
            } else {
                if ($o) {
                    return listHas($o, key);
                }
            }
            return false;
        },
        set: function(key, value) {
            if ($WeakMap && key && (typeof key === "object" || typeof key === "function")) {
                if (!$wm) {
                    $wm = new $WeakMap();
                }
                $weakMapSet($wm, key, value);
            } else if ($Map) {
                if (!$m) {
                    $m = new $Map();
                }
                $mapSet($m, key, value);
            } else {
                if (!$o) {
                    /*
					 * Initialize the linked list as an empty node, so that we don't have
					 * to special-case handling of the first node: we can always refer to
					 * it as (previous node).next, instead of something like (list).head
					 */ $o = {
                        key: {},
                        next: null
                    };
                }
                listSet($o, key, value);
            }
        }
    };
    return channel;
};


/***/ }),

/***/ 98071:
/***/ ((__unused_webpack_module, exports) => {


/* eslint-disable camelcase */ Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.StripeUnknownError = exports.StripeInvalidGrantError = exports.StripeIdempotencyError = exports.StripeSignatureVerificationError = exports.StripeConnectionError = exports.StripeRateLimitError = exports.StripePermissionError = exports.StripeAuthenticationError = exports.StripeAPIError = exports.StripeInvalidRequestError = exports.StripeCardError = exports.StripeError = exports.generate = void 0;
const generate = (rawStripeError)=>{
    switch(rawStripeError.type){
        case "card_error":
            return new StripeCardError(rawStripeError);
        case "invalid_request_error":
            return new StripeInvalidRequestError(rawStripeError);
        case "api_error":
            return new StripeAPIError(rawStripeError);
        case "authentication_error":
            return new StripeAuthenticationError(rawStripeError);
        case "rate_limit_error":
            return new StripeRateLimitError(rawStripeError);
        case "idempotency_error":
            return new StripeIdempotencyError(rawStripeError);
        case "invalid_grant":
            return new StripeInvalidGrantError(rawStripeError);
        default:
            return new StripeUnknownError(rawStripeError);
    }
};
exports.generate = generate;
/**
 * StripeError is the base error from which all other more specific Stripe errors derive.
 * Specifically for errors returned from Stripe's REST API.
 */ class StripeError extends Error {
    constructor(raw = {}){
        super(raw.message);
        this.type = this.constructor.name;
        this.raw = raw;
        this.rawType = raw.type;
        this.code = raw.code;
        this.doc_url = raw.doc_url;
        this.param = raw.param;
        this.detail = raw.detail;
        this.headers = raw.headers;
        this.requestId = raw.requestId;
        this.statusCode = raw.statusCode;
        // @ts-ignore
        this.message = raw.message;
        this.charge = raw.charge;
        this.decline_code = raw.decline_code;
        this.payment_intent = raw.payment_intent;
        this.payment_method = raw.payment_method;
        this.payment_method_type = raw.payment_method_type;
        this.setup_intent = raw.setup_intent;
        this.source = raw.source;
    }
}
exports.StripeError = StripeError;
/**
 * Helper factory which takes raw stripe errors and outputs wrapping instances
 */ StripeError.generate = exports.generate;
// Specific Stripe Error types:
/**
 * CardError is raised when a user enters a card that can't be charged for
 * some reason.
 */ class StripeCardError extends StripeError {
}
exports.StripeCardError = StripeCardError;
/**
 * InvalidRequestError is raised when a request is initiated with invalid
 * parameters.
 */ class StripeInvalidRequestError extends StripeError {
}
exports.StripeInvalidRequestError = StripeInvalidRequestError;
/**
 * APIError is a generic error that may be raised in cases where none of the
 * other named errors cover the problem. It could also be raised in the case
 * that a new error has been introduced in the API, but this version of the
 * Node.JS SDK doesn't know how to handle it.
 */ class StripeAPIError extends StripeError {
}
exports.StripeAPIError = StripeAPIError;
/**
 * AuthenticationError is raised when invalid credentials are used to connect
 * to Stripe's servers.
 */ class StripeAuthenticationError extends StripeError {
}
exports.StripeAuthenticationError = StripeAuthenticationError;
/**
 * PermissionError is raised in cases where access was attempted on a resource
 * that wasn't allowed.
 */ class StripePermissionError extends StripeError {
}
exports.StripePermissionError = StripePermissionError;
/**
 * RateLimitError is raised in cases where an account is putting too much load
 * on Stripe's API servers (usually by performing too many requests). Please
 * back off on request rate.
 */ class StripeRateLimitError extends StripeError {
}
exports.StripeRateLimitError = StripeRateLimitError;
/**
 * StripeConnectionError is raised in the event that the SDK can't connect to
 * Stripe's servers. That can be for a variety of different reasons from a
 * downed network to a bad TLS certificate.
 */ class StripeConnectionError extends StripeError {
}
exports.StripeConnectionError = StripeConnectionError;
/**
 * SignatureVerificationError is raised when the signature verification for a
 * webhook fails
 */ class StripeSignatureVerificationError extends StripeError {
    constructor(header, payload, raw = {}){
        super(raw);
        this.header = header;
        this.payload = payload;
    }
}
exports.StripeSignatureVerificationError = StripeSignatureVerificationError;
/**
 * IdempotencyError is raised in cases where an idempotency key was used
 * improperly.
 */ class StripeIdempotencyError extends StripeError {
}
exports.StripeIdempotencyError = StripeIdempotencyError;
/**
 * InvalidGrantError is raised when a specified code doesn't exist, is
 * expired, has been used, or doesn't belong to you; a refresh token doesn't
 * exist, or doesn't belong to you; or if an API key's mode (live or test)
 * doesn't match the mode of a code or refresh token.
 */ class StripeInvalidGrantError extends StripeError {
}
exports.StripeInvalidGrantError = StripeInvalidGrantError;
/**
 * Any other error from Stripe not specifically captured above
 */ class StripeUnknownError extends StripeError {
}
exports.StripeUnknownError = StripeUnknownError;


/***/ }),

/***/ 62361:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.RequestSender = void 0;
const Error_js_1 = __webpack_require__(98071);
const utils_js_1 = __webpack_require__(72566);
const HttpClient_js_1 = __webpack_require__(82543);
const MAX_RETRY_AFTER_WAIT = 60;
class RequestSender {
    constructor(stripe, maxBufferedRequestMetric){
        this._stripe = stripe;
        this._maxBufferedRequestMetric = maxBufferedRequestMetric;
    }
    _addHeadersDirectlyToObject(obj, headers) {
        // For convenience, make some headers easily accessible on
        // lastResponse.
        // NOTE: Stripe responds with lowercase header names/keys.
        obj.requestId = headers["request-id"];
        obj.stripeAccount = obj.stripeAccount || headers["stripe-account"];
        obj.apiVersion = obj.apiVersion || headers["stripe-version"];
        obj.idempotencyKey = obj.idempotencyKey || headers["idempotency-key"];
    }
    _makeResponseEvent(requestEvent, statusCode, headers) {
        const requestEndTime = Date.now();
        const requestDurationMs = requestEndTime - requestEvent.request_start_time;
        return (0, utils_js_1.removeNullish)({
            api_version: headers["stripe-version"],
            account: headers["stripe-account"],
            idempotency_key: headers["idempotency-key"],
            method: requestEvent.method,
            path: requestEvent.path,
            status: statusCode,
            request_id: this._getRequestId(headers),
            elapsed: requestDurationMs,
            request_start_time: requestEvent.request_start_time,
            request_end_time: requestEndTime
        });
    }
    _getRequestId(headers) {
        return headers["request-id"];
    }
    /**
     * Used by methods with spec.streaming === true. For these methods, we do not
     * buffer successful responses into memory or do parse them into stripe
     * objects, we delegate that all of that to the user and pass back the raw
     * http.Response object to the callback.
     *
     * (Unsuccessful responses shouldn't make it here, they should
     * still be buffered/parsed and handled by _jsonResponseHandler -- see
     * makeRequest)
     */ _streamingResponseHandler(requestEvent, callback) {
        return (res)=>{
            const headers = res.getHeaders();
            const streamCompleteCallback = ()=>{
                const responseEvent = this._makeResponseEvent(requestEvent, res.getStatusCode(), headers);
                this._stripe._emitter.emit("response", responseEvent);
                this._recordRequestMetrics(this._getRequestId(headers), responseEvent.elapsed);
            };
            const stream = res.toStream(streamCompleteCallback);
            // This is here for backwards compatibility, as the stream is a raw
            // HTTP response in Node and the legacy behavior was to mutate this
            // response.
            this._addHeadersDirectlyToObject(stream, headers);
            return callback(null, stream);
        };
    }
    /**
     * Default handler for Stripe responses. Buffers the response into memory,
     * parses the JSON and returns it (i.e. passes it to the callback) if there
     * is no "error" field. Otherwise constructs/passes an appropriate Error.
     */ _jsonResponseHandler(requestEvent, callback) {
        return (res)=>{
            const headers = res.getHeaders();
            const requestId = this._getRequestId(headers);
            const statusCode = res.getStatusCode();
            const responseEvent = this._makeResponseEvent(requestEvent, statusCode, headers);
            this._stripe._emitter.emit("response", responseEvent);
            res.toJSON().then((jsonResponse)=>{
                if (jsonResponse.error) {
                    let err;
                    // Convert OAuth error responses into a standard format
                    // so that the rest of the error logic can be shared
                    if (typeof jsonResponse.error === "string") {
                        jsonResponse.error = {
                            type: jsonResponse.error,
                            message: jsonResponse.error_description
                        };
                    }
                    jsonResponse.error.headers = headers;
                    jsonResponse.error.statusCode = statusCode;
                    jsonResponse.error.requestId = requestId;
                    if (statusCode === 401) {
                        err = new Error_js_1.StripeAuthenticationError(jsonResponse.error);
                    } else if (statusCode === 403) {
                        err = new Error_js_1.StripePermissionError(jsonResponse.error);
                    } else if (statusCode === 429) {
                        err = new Error_js_1.StripeRateLimitError(jsonResponse.error);
                    } else {
                        err = Error_js_1.StripeError.generate(jsonResponse.error);
                    }
                    throw err;
                }
                return jsonResponse;
            }, (e)=>{
                throw new Error_js_1.StripeAPIError({
                    message: "Invalid JSON received from the Stripe API",
                    exception: e,
                    requestId: headers["request-id"]
                });
            }).then((jsonResponse)=>{
                this._recordRequestMetrics(requestId, responseEvent.elapsed);
                // Expose raw response object.
                const rawResponse = res.getRawResponse();
                this._addHeadersDirectlyToObject(rawResponse, headers);
                Object.defineProperty(jsonResponse, "lastResponse", {
                    enumerable: false,
                    writable: false,
                    value: rawResponse
                });
                callback(null, jsonResponse);
            }, (e)=>callback(e, null));
        };
    }
    static _generateConnectionErrorMessage(requestRetries) {
        return `An error occurred with our connection to Stripe.${requestRetries > 0 ? ` Request was retried ${requestRetries} times.` : ""}`;
    }
    // For more on when and how to retry API requests, see https://stripe.com/docs/error-handling#safely-retrying-requests-with-idempotency
    static _shouldRetry(res, numRetries, maxRetries, error) {
        if (error && numRetries === 0 && HttpClient_js_1.HttpClient.CONNECTION_CLOSED_ERROR_CODES.includes(error.code)) {
            return true;
        }
        // Do not retry if we are out of retries.
        if (numRetries >= maxRetries) {
            return false;
        }
        // Retry on connection error.
        if (!res) {
            return true;
        }
        // The API may ask us not to retry (e.g., if doing so would be a no-op)
        // or advise us to retry (e.g., in cases of lock timeouts); we defer to that.
        if (res.getHeaders()["stripe-should-retry"] === "false") {
            return false;
        }
        if (res.getHeaders()["stripe-should-retry"] === "true") {
            return true;
        }
        // Retry on conflict errors.
        if (res.getStatusCode() === 409) {
            return true;
        }
        // Retry on 500, 503, and other internal errors.
        //
        // Note that we expect the stripe-should-retry header to be false
        // in most cases when a 500 is returned, since our idempotency framework
        // would typically replay it anyway.
        if (res.getStatusCode() >= 500) {
            return true;
        }
        return false;
    }
    _getSleepTimeInMS(numRetries, retryAfter = null) {
        const initialNetworkRetryDelay = this._stripe.getInitialNetworkRetryDelay();
        const maxNetworkRetryDelay = this._stripe.getMaxNetworkRetryDelay();
        // Apply exponential backoff with initialNetworkRetryDelay on the
        // number of numRetries so far as inputs. Do not allow the number to exceed
        // maxNetworkRetryDelay.
        let sleepSeconds = Math.min(initialNetworkRetryDelay * Math.pow(numRetries - 1, 2), maxNetworkRetryDelay);
        // Apply some jitter by randomizing the value in the range of
        // (sleepSeconds / 2) to (sleepSeconds).
        sleepSeconds *= 0.5 * (1 + Math.random());
        // But never sleep less than the base sleep seconds.
        sleepSeconds = Math.max(initialNetworkRetryDelay, sleepSeconds);
        // And never sleep less than the time the API asks us to wait, assuming it's a reasonable ask.
        if (Number.isInteger(retryAfter) && retryAfter <= MAX_RETRY_AFTER_WAIT) {
            sleepSeconds = Math.max(sleepSeconds, retryAfter);
        }
        return sleepSeconds * 1000;
    }
    // Max retries can be set on a per request basis. Favor those over the global setting
    _getMaxNetworkRetries(settings = {}) {
        return settings.maxNetworkRetries && Number.isInteger(settings.maxNetworkRetries) ? settings.maxNetworkRetries : this._stripe.getMaxNetworkRetries();
    }
    _defaultIdempotencyKey(method, settings) {
        // If this is a POST and we allow multiple retries, ensure an idempotency key.
        const maxRetries = this._getMaxNetworkRetries(settings);
        if (method === "POST" && maxRetries > 0) {
            return `stripe-node-retry-${this._stripe._platformFunctions.uuid4()}`;
        }
        return null;
    }
    _makeHeaders(auth, contentLength, apiVersion, clientUserAgent, method, userSuppliedHeaders, userSuppliedSettings) {
        const defaultHeaders = {
            // Use specified auth token or use default from this stripe instance:
            Authorization: auth ? `Bearer ${auth}` : this._stripe.getApiField("auth"),
            Accept: "application/json",
            "Content-Type": "application/x-www-form-urlencoded",
            "User-Agent": this._getUserAgentString(),
            "X-Stripe-Client-User-Agent": clientUserAgent,
            "X-Stripe-Client-Telemetry": this._getTelemetryHeader(),
            "Stripe-Version": apiVersion,
            "Stripe-Account": this._stripe.getApiField("stripeAccount"),
            "Idempotency-Key": this._defaultIdempotencyKey(method, userSuppliedSettings)
        };
        // As per https://datatracker.ietf.org/doc/html/rfc7230#section-3.3.2:
        //   A user agent SHOULD send a Content-Length in a request message when
        //   no Transfer-Encoding is sent and the request method defines a meaning
        //   for an enclosed payload body.  For example, a Content-Length header
        //   field is normally sent in a POST request even when the value is 0
        //   (indicating an empty payload body).  A user agent SHOULD NOT send a
        //   Content-Length header field when the request message does not contain
        //   a payload body and the method semantics do not anticipate such a
        //   body.
        //
        // These method types are expected to have bodies and so we should always
        // include a Content-Length.
        const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
        // If a content length was specified, we always include it regardless of
        // whether the method semantics anticipate such a body. This keeps us
        // consistent with historical behavior. We do however want to warn on this
        // and fix these cases as they are semantically incorrect.
        if (methodHasPayload || contentLength) {
            if (!methodHasPayload) {
                (0, utils_js_1.emitWarning)(`${method} method had non-zero contentLength but no payload is expected for this verb`);
            }
            defaultHeaders["Content-Length"] = contentLength;
        }
        return Object.assign((0, utils_js_1.removeNullish)(defaultHeaders), // If the user supplied, say 'idempotency-key', override instead of appending by ensuring caps are the same.
        (0, utils_js_1.normalizeHeaders)(userSuppliedHeaders));
    }
    _getUserAgentString() {
        const packageVersion = this._stripe.getConstant("PACKAGE_VERSION");
        const appInfo = this._stripe._appInfo ? this._stripe.getAppInfoAsString() : "";
        return `Stripe/v1 NodeBindings/${packageVersion} ${appInfo}`.trim();
    }
    _getTelemetryHeader() {
        if (this._stripe.getTelemetryEnabled() && this._stripe._prevRequestMetrics.length > 0) {
            const metrics = this._stripe._prevRequestMetrics.shift();
            return JSON.stringify({
                last_request_metrics: metrics
            });
        }
    }
    _recordRequestMetrics(requestId, requestDurationMs) {
        if (this._stripe.getTelemetryEnabled() && requestId) {
            if (this._stripe._prevRequestMetrics.length > this._maxBufferedRequestMetric) {
                (0, utils_js_1.emitWarning)("Request metrics buffer is full, dropping telemetry message.");
            } else {
                this._stripe._prevRequestMetrics.push({
                    request_id: requestId,
                    request_duration_ms: requestDurationMs
                });
            }
        }
    }
    _request(method, host, path, data, auth, options = {}, callback, requestDataProcessor = null) {
        let requestData;
        const retryRequest = (requestFn, apiVersion, headers, requestRetries, retryAfter)=>{
            return setTimeout(requestFn, this._getSleepTimeInMS(requestRetries, retryAfter), apiVersion, headers, requestRetries + 1);
        };
        const makeRequest = (apiVersion, headers, numRetries)=>{
            // timeout can be set on a per-request basis. Favor that over the global setting
            const timeout = options.settings && options.settings.timeout && Number.isInteger(options.settings.timeout) && options.settings.timeout >= 0 ? options.settings.timeout : this._stripe.getApiField("timeout");
            const req = this._stripe.getApiField("httpClient").makeRequest(host || this._stripe.getApiField("host"), this._stripe.getApiField("port"), path, method, headers, requestData, this._stripe.getApiField("protocol"), timeout);
            const requestStartTime = Date.now();
            // @ts-ignore
            const requestEvent = (0, utils_js_1.removeNullish)({
                api_version: apiVersion,
                account: headers["Stripe-Account"],
                idempotency_key: headers["Idempotency-Key"],
                method,
                path,
                request_start_time: requestStartTime
            });
            const requestRetries = numRetries || 0;
            const maxRetries = this._getMaxNetworkRetries(options.settings || {});
            this._stripe._emitter.emit("request", requestEvent);
            req.then((res)=>{
                if (RequestSender._shouldRetry(res, requestRetries, maxRetries)) {
                    return retryRequest(makeRequest, apiVersion, headers, requestRetries, // @ts-ignore
                    res.getHeaders()["retry-after"]);
                } else if (options.streaming && res.getStatusCode() < 400) {
                    return this._streamingResponseHandler(requestEvent, callback)(res);
                } else {
                    return this._jsonResponseHandler(requestEvent, callback)(res);
                }
            }).catch((error)=>{
                if (RequestSender._shouldRetry(null, requestRetries, maxRetries, error)) {
                    return retryRequest(makeRequest, apiVersion, headers, requestRetries, null);
                } else {
                    const isTimeoutError = error.code && error.code === HttpClient_js_1.HttpClient.TIMEOUT_ERROR_CODE;
                    return callback(new Error_js_1.StripeConnectionError({
                        message: isTimeoutError ? `Request aborted due to timeout being reached (${timeout}ms)` : RequestSender._generateConnectionErrorMessage(requestRetries),
                        // @ts-ignore
                        detail: error
                    }));
                }
            });
        };
        const prepareAndMakeRequest = (error, data)=>{
            if (error) {
                return callback(error);
            }
            requestData = data;
            this._stripe.getClientUserAgent((clientUserAgent)=>{
                var _a, _b;
                const apiVersion = this._stripe.getApiField("version");
                const headers = this._makeHeaders(auth, requestData.length, apiVersion, clientUserAgent, method, (_a = options.headers) !== null && _a !== void 0 ? _a : null, (_b = options.settings) !== null && _b !== void 0 ? _b : {});
                makeRequest(apiVersion, headers, 0);
            });
        };
        if (requestDataProcessor) {
            requestDataProcessor(method, data, options.headers, prepareAndMakeRequest);
        } else {
            prepareAndMakeRequest(null, (0, utils_js_1.stringifyRequestData)(data || {}));
        }
    }
}
exports.RequestSender = RequestSender;


/***/ }),

/***/ 65141:
/***/ ((__unused_webpack_module, exports) => {


// ResourceNamespace allows you to create nested resources, i.e. `stripe.issuing.cards`.
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.resourceNamespace = void 0;
// It also works recursively, so you could do i.e. `stripe.billing.invoicing.pay`.
function ResourceNamespace(stripe, resources) {
    for(const name in resources){
        const camelCaseName = name[0].toLowerCase() + name.substring(1);
        const resource = new resources[name](stripe);
        this[camelCaseName] = resource;
    }
}
function resourceNamespace(namespace, resources) {
    return function(stripe) {
        return new ResourceNamespace(stripe, resources);
    };
}
exports.resourceNamespace = resourceNamespace;


/***/ }),

/***/ 58990:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.stripeMethod = void 0;
const utils_js_1 = __webpack_require__(72566);
const autoPagination_js_1 = __webpack_require__(38400);
/**
 * Create an API method from the declared spec.
 *
 * @param [spec.method='GET'] Request Method (POST, GET, DELETE, PUT)
 * @param [spec.path=''] Path to be appended to the API BASE_PATH, joined with
 *  the instance's path (e.g. 'charges' or 'customers')
 * @param [spec.fullPath=''] Fully qualified path to the method (eg. /v1/a/b/c).
 *  If this is specified, path should not be specified.
 * @param [spec.urlParams=[]] Array of required arguments in the order that they
 *  must be passed by the consumer of the API. Subsequent optional arguments are
 *  optionally passed through a hash (Object) as the penultimate argument
 *  (preceding the also-optional callback argument
 * @param [spec.encode] Function for mutating input parameters to a method.
 *  Usefully for applying transforms to data on a per-method basis.
 * @param [spec.host] Hostname for the request.
 *
 * <!-- Public API accessible via Stripe.StripeResource.method -->
 */ function stripeMethod(spec) {
    if (spec.path !== undefined && spec.fullPath !== undefined) {
        throw new Error(`Method spec specified both a 'path' (${spec.path}) and a 'fullPath' (${spec.fullPath}).`);
    }
    return function(...args) {
        const callback = typeof args[args.length - 1] == "function" && args.pop();
        spec.urlParams = (0, utils_js_1.extractUrlParams)(spec.fullPath || this.createResourcePathWithSymbols(spec.path || ""));
        const requestPromise = (0, utils_js_1.callbackifyPromiseWithTimeout)(this._makeRequest(args, spec, {}), callback);
        Object.assign(requestPromise, (0, autoPagination_js_1.makeAutoPaginationMethods)(this, args, spec, requestPromise));
        return requestPromise;
    };
}
exports.stripeMethod = stripeMethod;


/***/ }),

/***/ 68449:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.StripeResource = void 0;
const utils_js_1 = __webpack_require__(72566);
const StripeMethod_js_1 = __webpack_require__(58990);
// Provide extension mechanism for Stripe Resource Sub-Classes
StripeResource.extend = utils_js_1.protoExtend;
// Expose method-creator
StripeResource.method = StripeMethod_js_1.stripeMethod;
StripeResource.MAX_BUFFERED_REQUEST_METRICS = 100;
/**
 * Encapsulates request logic for a Stripe Resource
 */ function StripeResource(stripe, deprecatedUrlData) {
    this._stripe = stripe;
    if (deprecatedUrlData) {
        throw new Error("Support for curried url params was dropped in stripe-node v7.0.0. Instead, pass two ids.");
    }
    this.basePath = (0, utils_js_1.makeURLInterpolator)(// @ts-ignore changing type of basePath
    this.basePath || stripe.getApiField("basePath"));
    // @ts-ignore changing type of path
    this.resourcePath = this.path;
    // @ts-ignore changing type of path
    this.path = (0, utils_js_1.makeURLInterpolator)(this.path);
    this.initialize(...arguments);
}
exports.StripeResource = StripeResource;
StripeResource.prototype = {
    _stripe: null,
    // @ts-ignore the type of path changes in ctor
    path: "",
    resourcePath: "",
    // Methods that don't use the API's default '/v1' path can override it with this setting.
    basePath: null,
    initialize () {},
    // Function to override the default data processor. This allows full control
    // over how a StripeResource's request data will get converted into an HTTP
    // body. This is useful for non-standard HTTP requests. The function should
    // take method name, data, and headers as arguments.
    requestDataProcessor: null,
    // Function to add a validation checks before sending the request, errors should
    // be thrown, and they will be passed to the callback/promise.
    validateRequest: null,
    createFullPath (commandPath, urlData) {
        const urlParts = [
            this.basePath(urlData),
            this.path(urlData)
        ];
        if (typeof commandPath === "function") {
            const computedCommandPath = commandPath(urlData);
            // If we have no actual command path, we just omit it to avoid adding a
            // trailing slash. This is important for top-level listing requests, which
            // do not have a command path.
            if (computedCommandPath) {
                urlParts.push(computedCommandPath);
            }
        } else {
            urlParts.push(commandPath);
        }
        return this._joinUrlParts(urlParts);
    },
    // Creates a relative resource path with symbols left in (unlike
    // createFullPath which takes some data to replace them with). For example it
    // might produce: /invoices/{id}
    createResourcePathWithSymbols (pathWithSymbols) {
        // If there is no path beyond the resource path, we want to produce just
        // /<resource path> rather than /<resource path>/.
        if (pathWithSymbols) {
            return `/${this._joinUrlParts([
                this.resourcePath,
                pathWithSymbols
            ])}`;
        } else {
            return `/${this.resourcePath}`;
        }
    },
    _joinUrlParts (parts) {
        // Replace any accidentally doubled up slashes. This previously used
        // path.join, which would do this as well. Unfortunately we need to do this
        // as the functions for creating paths are technically part of the public
        // interface and so we need to preserve backwards compatibility.
        return parts.join("/").replace(/\/{2,}/g, "/");
    },
    _getRequestOpts (requestArgs, spec, overrideData) {
        // Extract spec values with defaults.
        const requestMethod = (spec.method || "GET").toUpperCase();
        const urlParams = spec.urlParams || [];
        const encode = spec.encode || ((data)=>data);
        const isUsingFullPath = !!spec.fullPath;
        const commandPath = (0, utils_js_1.makeURLInterpolator)(isUsingFullPath ? spec.fullPath : spec.path || "");
        // When using fullPath, we ignore the resource path as it should already be
        // fully qualified.
        const path = isUsingFullPath ? spec.fullPath : this.createResourcePathWithSymbols(spec.path);
        // Don't mutate args externally.
        const args = [].slice.call(requestArgs);
        // Generate and validate url params.
        const urlData = urlParams.reduce((urlData, param)=>{
            const arg = args.shift();
            if (typeof arg !== "string") {
                throw new Error(`Stripe: Argument "${param}" must be a string, but got: ${arg} (on API request to \`${requestMethod} ${path}\`)`);
            }
            urlData[param] = arg;
            return urlData;
        }, {});
        // Pull request data and options (headers, auth) from args.
        const dataFromArgs = (0, utils_js_1.getDataFromArgs)(args);
        const data = encode(Object.assign({}, dataFromArgs, overrideData));
        const options = (0, utils_js_1.getOptionsFromArgs)(args);
        const host = options.host || spec.host;
        const streaming = !!spec.streaming;
        // Validate that there are no more args.
        if (args.filter((x)=>x != null).length) {
            throw new Error(`Stripe: Unknown arguments (${args}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options. (on API request to ${requestMethod} \`${path}\`)`);
        }
        // When using full path, we can just invoke the URL interpolator directly
        // as we don't need to use the resource to create a full path.
        const requestPath = isUsingFullPath ? commandPath(urlData) : this.createFullPath(commandPath, urlData);
        const headers = Object.assign(options.headers, spec.headers);
        if (spec.validator) {
            spec.validator(data, {
                headers
            });
        }
        const dataInQuery = spec.method === "GET" || spec.method === "DELETE";
        const bodyData = dataInQuery ? {} : data;
        const queryData = dataInQuery ? data : {};
        return {
            requestMethod,
            requestPath,
            bodyData,
            queryData,
            auth: options.auth,
            headers,
            host: host !== null && host !== void 0 ? host : null,
            streaming,
            settings: options.settings
        };
    },
    _makeRequest (requestArgs, spec, overrideData) {
        return new Promise((resolve, reject)=>{
            var _a;
            let opts;
            try {
                opts = this._getRequestOpts(requestArgs, spec, overrideData);
            } catch (err) {
                reject(err);
                return;
            }
            function requestCallback(err, response) {
                if (err) {
                    reject(err);
                } else {
                    resolve(spec.transformResponseData ? spec.transformResponseData(response) : response);
                }
            }
            const emptyQuery = Object.keys(opts.queryData).length === 0;
            const path = [
                opts.requestPath,
                emptyQuery ? "" : "?",
                (0, utils_js_1.stringifyRequestData)(opts.queryData)
            ].join("");
            const { headers, settings } = opts;
            this._stripe._requestSender._request(opts.requestMethod, opts.host, path, opts.bodyData, opts.auth, {
                headers,
                settings,
                streaming: opts.streaming
            }, requestCallback, (_a = this.requestDataProcessor) === null || _a === void 0 ? void 0 : _a.bind(this));
        });
    }
};


/***/ }),

/***/ 22510:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createWebhooks = void 0;
const Error_js_1 = __webpack_require__(98071);
const CryptoProvider_js_1 = __webpack_require__(32436);
function createWebhooks(platformFunctions) {
    const Webhook = {
        DEFAULT_TOLERANCE: 300,
        // @ts-ignore
        signature: null,
        constructEvent (payload, header, secret, tolerance, cryptoProvider, receivedAt) {
            try {
                this.signature.verifyHeader(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
            } catch (e) {
                if (e instanceof CryptoProvider_js_1.CryptoProviderOnlySupportsAsyncError) {
                    e.message += "\nUse `await constructEventAsync(...)` instead of `constructEvent(...)`";
                }
                throw e;
            }
            const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(payload)) : JSON.parse(payload);
            return jsonPayload;
        },
        async constructEventAsync (payload, header, secret, tolerance, cryptoProvider, receivedAt) {
            await this.signature.verifyHeaderAsync(payload, header, secret, tolerance || Webhook.DEFAULT_TOLERANCE, cryptoProvider, receivedAt);
            const jsonPayload = payload instanceof Uint8Array ? JSON.parse(new TextDecoder("utf8").decode(payload)) : JSON.parse(payload);
            return jsonPayload;
        },
        /**
         * Generates a header to be used for webhook mocking
         *
         * @typedef {object} opts
         * @property {number} timestamp - Timestamp of the header. Defaults to Date.now()
         * @property {string} payload - JSON stringified payload object, containing the 'id' and 'object' parameters
         * @property {string} secret - Stripe webhook secret 'whsec_...'
         * @property {string} scheme - Version of API to hit. Defaults to 'v1'.
         * @property {string} signature - Computed webhook signature
         * @property {CryptoProvider} cryptoProvider - Crypto provider to use for computing the signature if none was provided. Defaults to NodeCryptoProvider.
         */ generateTestHeaderString: function(opts) {
            if (!opts) {
                throw new Error_js_1.StripeError({
                    message: "Options are required"
                });
            }
            opts.timestamp = Math.floor(opts.timestamp) || Math.floor(Date.now() / 1000);
            opts.scheme = opts.scheme || signature.EXPECTED_SCHEME;
            opts.cryptoProvider = opts.cryptoProvider || getCryptoProvider();
            opts.signature = opts.signature || opts.cryptoProvider.computeHMACSignature(opts.timestamp + "." + opts.payload, opts.secret);
            const generatedHeader = [
                "t=" + opts.timestamp,
                opts.scheme + "=" + opts.signature
            ].join(",");
            return generatedHeader;
        }
    };
    const signature = {
        EXPECTED_SCHEME: "v1",
        verifyHeader (encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
            const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
            const secretContainsWhitespace = /\s/.test(secret);
            cryptoProvider = cryptoProvider || getCryptoProvider();
            const expectedSignature = cryptoProvider.computeHMACSignature(makeHMACContent(payload, details), secret);
            validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
            return true;
        },
        async verifyHeaderAsync (encodedPayload, encodedHeader, secret, tolerance, cryptoProvider, receivedAt) {
            const { decodedHeader: header, decodedPayload: payload, details, suspectPayloadType } = parseEventDetails(encodedPayload, encodedHeader, this.EXPECTED_SCHEME);
            const secretContainsWhitespace = /\s/.test(secret);
            cryptoProvider = cryptoProvider || getCryptoProvider();
            const expectedSignature = await cryptoProvider.computeHMACSignatureAsync(makeHMACContent(payload, details), secret);
            return validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt);
        }
    };
    function makeHMACContent(payload, details) {
        return `${details.timestamp}.${payload}`;
    }
    function parseEventDetails(encodedPayload, encodedHeader, expectedScheme) {
        if (!encodedPayload) {
            throw new Error_js_1.StripeSignatureVerificationError(encodedHeader, encodedPayload, {
                message: "No webhook payload was provided."
            });
        }
        const suspectPayloadType = typeof encodedPayload != "string" && !(encodedPayload instanceof Uint8Array);
        const textDecoder = new TextDecoder("utf8");
        const decodedPayload = encodedPayload instanceof Uint8Array ? textDecoder.decode(encodedPayload) : encodedPayload;
        // Express's type for `Request#headers` is `string | []string`
        // which is because the `set-cookie` header is an array,
        // but no other headers are an array (docs: https://nodejs.org/api/http.html#http_message_headers)
        // (Express's Request class is an extension of http.IncomingMessage, and doesn't appear to be relevantly modified: https://github.com/expressjs/express/blob/master/lib/request.js#L31)
        if (Array.isArray(encodedHeader)) {
            throw new Error("Unexpected: An array was passed as a header, which should not be possible for the stripe-signature header.");
        }
        if (encodedHeader == null || encodedHeader == "") {
            throw new Error_js_1.StripeSignatureVerificationError(encodedHeader, encodedPayload, {
                message: "No stripe-signature header value was provided."
            });
        }
        const decodedHeader = encodedHeader instanceof Uint8Array ? textDecoder.decode(encodedHeader) : encodedHeader;
        const details = parseHeader(decodedHeader, expectedScheme);
        if (!details || details.timestamp === -1) {
            throw new Error_js_1.StripeSignatureVerificationError(decodedHeader, decodedPayload, {
                message: "Unable to extract timestamp and signatures from header"
            });
        }
        if (!details.signatures.length) {
            throw new Error_js_1.StripeSignatureVerificationError(decodedHeader, decodedPayload, {
                message: "No signatures found with expected scheme"
            });
        }
        return {
            decodedPayload,
            decodedHeader,
            details,
            suspectPayloadType
        };
    }
    function validateComputedSignature(payload, header, details, expectedSignature, tolerance, suspectPayloadType, secretContainsWhitespace, receivedAt) {
        const signatureFound = !!details.signatures.filter(platformFunctions.secureCompare.bind(platformFunctions, expectedSignature)).length;
        const docsLocation = "\nLearn more about webhook signing and explore webhook integration examples for various frameworks at " + "https://github.com/stripe/stripe-node#webhook-signing";
        const whitespaceMessage = secretContainsWhitespace ? "\n\nNote: The provided signing secret contains whitespace. This often indicates an extra newline or space is in the value" : "";
        if (!signatureFound) {
            if (suspectPayloadType) {
                throw new Error_js_1.StripeSignatureVerificationError(header, payload, {
                    message: "Webhook payload must be provided as a string or a Buffer (https://nodejs.org/api/buffer.html) instance representing the _raw_ request body." + "Payload was provided as a parsed JavaScript object instead. \n" + "Signature verification is impossible without access to the original signed material. \n" + docsLocation + "\n" + whitespaceMessage
                });
            }
            throw new Error_js_1.StripeSignatureVerificationError(header, payload, {
                message: "No signatures found matching the expected signature for payload." + " Are you passing the raw request body you received from Stripe? \n" + docsLocation + "\n" + whitespaceMessage
            });
        }
        const timestampAge = Math.floor((typeof receivedAt === "number" ? receivedAt : Date.now()) / 1000) - details.timestamp;
        if (tolerance > 0 && timestampAge > tolerance) {
            // @ts-ignore
            throw new Error_js_1.StripeSignatureVerificationError(header, payload, {
                message: "Timestamp outside the tolerance zone"
            });
        }
        return true;
    }
    function parseHeader(header, scheme) {
        if (typeof header !== "string") {
            return null;
        }
        return header.split(",").reduce((accum, item)=>{
            const kv = item.split("=");
            if (kv[0] === "t") {
                accum.timestamp = parseInt(kv[1], 10);
            }
            if (kv[0] === scheme) {
                accum.signatures.push(kv[1]);
            }
            return accum;
        }, {
            timestamp: -1,
            signatures: []
        });
    }
    let webhooksCryptoProviderInstance = null;
    /**
     * Lazily instantiate a CryptoProvider instance. This is a stateless object
     * so a singleton can be used here.
     */ function getCryptoProvider() {
        if (!webhooksCryptoProviderInstance) {
            webhooksCryptoProviderInstance = platformFunctions.createDefaultCryptoProvider();
        }
        return webhooksCryptoProviderInstance;
    }
    Webhook.signature = signature;
    return Webhook;
}
exports.createWebhooks = createWebhooks;


/***/ }),

/***/ 47012:
/***/ ((__unused_webpack_module, exports) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ApiVersion = void 0;
exports.ApiVersion = "2022-11-15";


/***/ }),

/***/ 38400:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.makeAutoPaginationMethods = void 0;
const utils_js_1 = __webpack_require__(72566);
class StripeIterator {
    constructor(firstPagePromise, requestArgs, spec, stripeResource){
        this.index = 0;
        this.pagePromise = firstPagePromise;
        this.promiseCache = {
            currentPromise: null
        };
        this.requestArgs = requestArgs;
        this.spec = spec;
        this.stripeResource = stripeResource;
    }
    async iterate(pageResult) {
        if (!(pageResult && pageResult.data && typeof pageResult.data.length === "number")) {
            throw Error("Unexpected: Stripe API response does not have a well-formed `data` array.");
        }
        const reverseIteration = isReverseIteration(this.requestArgs);
        if (this.index < pageResult.data.length) {
            const idx = reverseIteration ? pageResult.data.length - 1 - this.index : this.index;
            const value = pageResult.data[idx];
            this.index += 1;
            return {
                value,
                done: false
            };
        } else if (pageResult.has_more) {
            // Reset counter, request next page, and recurse.
            this.index = 0;
            this.pagePromise = this.getNextPage(pageResult);
            const nextPageResult = await this.pagePromise;
            return this.iterate(nextPageResult);
        }
        return {
            done: true,
            value: undefined
        };
    }
    /** @abstract */ getNextPage(_pageResult) {
        throw new Error("Unimplemented");
    }
    async _next() {
        return this.iterate(await this.pagePromise);
    }
    next() {
        /**
         * If a user calls `.next()` multiple times in parallel,
         * return the same result until something has resolved
         * to prevent page-turning race conditions.
         */ if (this.promiseCache.currentPromise) {
            return this.promiseCache.currentPromise;
        }
        const nextPromise = (async ()=>{
            const ret = await this._next();
            this.promiseCache.currentPromise = null;
            return ret;
        })();
        this.promiseCache.currentPromise = nextPromise;
        return nextPromise;
    }
}
class ListIterator extends StripeIterator {
    getNextPage(pageResult) {
        const reverseIteration = isReverseIteration(this.requestArgs);
        const lastId = getLastId(pageResult, reverseIteration);
        return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
            [reverseIteration ? "ending_before" : "starting_after"]: lastId
        });
    }
}
class SearchIterator extends StripeIterator {
    getNextPage(pageResult) {
        if (!pageResult.next_page) {
            throw Error("Unexpected: Stripe API response does not have a well-formed `next_page` field, but `has_more` was true.");
        }
        return this.stripeResource._makeRequest(this.requestArgs, this.spec, {
            page: pageResult.next_page
        });
    }
}
const makeAutoPaginationMethods = (stripeResource, requestArgs, spec, firstPagePromise)=>{
    if (spec.methodType === "search") {
        return makeAutoPaginationMethodsFromIterator(new SearchIterator(firstPagePromise, requestArgs, spec, stripeResource));
    }
    if (spec.methodType === "list") {
        return makeAutoPaginationMethodsFromIterator(new ListIterator(firstPagePromise, requestArgs, spec, stripeResource));
    }
    return null;
};
exports.makeAutoPaginationMethods = makeAutoPaginationMethods;
const makeAutoPaginationMethodsFromIterator = (iterator)=>{
    const autoPagingEach = makeAutoPagingEach((...args)=>iterator.next(...args));
    const autoPagingToArray = makeAutoPagingToArray(autoPagingEach);
    const autoPaginationMethods = {
        autoPagingEach,
        autoPagingToArray,
        // Async iterator functions:
        next: ()=>iterator.next(),
        return: ()=>{
            // This is required for `break`.
            return {};
        },
        [getAsyncIteratorSymbol()]: ()=>{
            return autoPaginationMethods;
        }
    };
    return autoPaginationMethods;
};
/**
 * ----------------
 * Private Helpers:
 * ----------------
 */ function getAsyncIteratorSymbol() {
    if (typeof Symbol !== "undefined" && Symbol.asyncIterator) {
        return Symbol.asyncIterator;
    }
    // Follow the convention from libraries like iterall: https://github.com/leebyron/iterall#asynciterator-1
    return "@@asyncIterator";
}
function getDoneCallback(args) {
    if (args.length < 2) {
        return null;
    }
    const onDone = args[1];
    if (typeof onDone !== "function") {
        throw Error(`The second argument to autoPagingEach, if present, must be a callback function; received ${typeof onDone}`);
    }
    return onDone;
}
/**
 * We allow four forms of the `onItem` callback (the middle two being equivalent),
 *
 *   1. `.autoPagingEach((item) => { doSomething(item); return false; });`
 *   2. `.autoPagingEach(async (item) => { await doSomething(item); return false; });`
 *   3. `.autoPagingEach((item) => doSomething(item).then(() => false));`
 *   4. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
 *
 * In addition to standard validation, this helper
 * coalesces the former forms into the latter form.
 */ function getItemCallback(args) {
    if (args.length === 0) {
        return undefined;
    }
    const onItem = args[0];
    if (typeof onItem !== "function") {
        throw Error(`The first argument to autoPagingEach, if present, must be a callback function; received ${typeof onItem}`);
    }
    // 4. `.autoPagingEach((item, next) => { doSomething(item); next(false); });`
    if (onItem.length === 2) {
        return onItem;
    }
    if (onItem.length > 2) {
        throw Error(`The \`onItem\` callback function passed to autoPagingEach must accept at most two arguments; got ${onItem}`);
    }
    // This magically handles all three of these usecases (the latter two being functionally identical):
    // 1. `.autoPagingEach((item) => { doSomething(item); return false; });`
    // 2. `.autoPagingEach(async (item) => { await doSomething(item); return false; });`
    // 3. `.autoPagingEach((item) => doSomething(item).then(() => false));`
    return function _onItem(item, next) {
        const shouldContinue = onItem(item);
        next(shouldContinue);
    };
}
function getLastId(listResult, reverseIteration) {
    const lastIdx = reverseIteration ? 0 : listResult.data.length - 1;
    const lastItem = listResult.data[lastIdx];
    const lastId = lastItem && lastItem.id;
    if (!lastId) {
        throw Error("Unexpected: No `id` found on the last item while auto-paging a list.");
    }
    return lastId;
}
function makeAutoPagingEach(asyncIteratorNext) {
    return function autoPagingEach() {
        const args = [].slice.call(arguments);
        const onItem = getItemCallback(args);
        const onDone = getDoneCallback(args);
        if (args.length > 2) {
            throw Error(`autoPagingEach takes up to two arguments; received ${args}`);
        }
        const autoPagePromise = wrapAsyncIteratorWithCallback(asyncIteratorNext, // @ts-ignore we might need a null check
        onItem);
        return (0, utils_js_1.callbackifyPromiseWithTimeout)(autoPagePromise, onDone);
    };
}
function makeAutoPagingToArray(autoPagingEach) {
    return function autoPagingToArray(opts, onDone) {
        const limit = opts && opts.limit;
        if (!limit) {
            throw Error("You must pass a `limit` option to autoPagingToArray, e.g., `autoPagingToArray({limit: 1000});`.");
        }
        if (limit > 10000) {
            throw Error("You cannot specify a limit of more than 10,000 items to fetch in `autoPagingToArray`; use `autoPagingEach` to iterate through longer lists.");
        }
        const promise = new Promise((resolve, reject)=>{
            const items = [];
            autoPagingEach((item)=>{
                items.push(item);
                if (items.length >= limit) {
                    return false;
                }
            }).then(()=>{
                resolve(items);
            }).catch(reject);
        });
        // @ts-ignore
        return (0, utils_js_1.callbackifyPromiseWithTimeout)(promise, onDone);
    };
}
function wrapAsyncIteratorWithCallback(asyncIteratorNext, onItem) {
    return new Promise((resolve, reject)=>{
        function handleIteration(iterResult) {
            if (iterResult.done) {
                resolve();
                return;
            }
            const item = iterResult.value;
            return new Promise((next)=>{
                // Bit confusing, perhaps; we pass a `resolve` fn
                // to the user, so they can decide when and if to continue.
                // They can return false, or a promise which resolves to false, to break.
                onItem(item, next);
            }).then((shouldContinue)=>{
                if (shouldContinue === false) {
                    return handleIteration({
                        done: true,
                        value: undefined
                    });
                } else {
                    return asyncIteratorNext().then(handleIteration);
                }
            });
        }
        asyncIteratorNext().then(handleIteration).catch(reject);
    });
}
function isReverseIteration(requestArgs) {
    const args = [].slice.call(requestArgs);
    const dataFromArgs = (0, utils_js_1.getDataFromArgs)(args);
    return !!dataFromArgs.ending_before;
}


/***/ }),

/***/ 32436:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.CryptoProviderOnlySupportsAsyncError = exports.CryptoProvider = void 0;
/**
 * Interface encapsulating the various crypto computations used by the library,
 * allowing pluggable underlying crypto implementations.
 */ class CryptoProvider {
    /**
     * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
     * The output HMAC should be encoded in hexadecimal.
     *
     * Sample values for implementations:
     * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
     * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
     */ computeHMACSignature(payload, secret) {
        throw new Error("computeHMACSignature not implemented.");
    }
    /**
     * Asynchronous version of `computeHMACSignature`. Some implementations may
     * only allow support async signature computation.
     *
     * Computes a SHA-256 HMAC given a secret and a payload (encoded in UTF-8).
     * The output HMAC should be encoded in hexadecimal.
     *
     * Sample values for implementations:
     * - computeHMACSignature('', 'test_secret') => 'f7f9bd47fb987337b5796fdc1fdb9ba221d0d5396814bfcaf9521f43fd8927fd'
     * - computeHMACSignature('\ud83d\ude00', 'test_secret') => '837da296d05c4fe31f61d5d7ead035099d9585a5bcde87de952012a78f0b0c43
     */ computeHMACSignatureAsync(payload, secret) {
        throw new Error("computeHMACSignatureAsync not implemented.");
    }
}
exports.CryptoProvider = CryptoProvider;
/**
 * If the crypto provider only supports asynchronous operations,
 * throw CryptoProviderOnlySupportsAsyncError instead of
 * a generic error so that the caller can choose to provide
 * a more helpful error message to direct the user to use
 * an asynchronous pathway.
 */ class CryptoProviderOnlySupportsAsyncError extends Error {
}
exports.CryptoProviderOnlySupportsAsyncError = CryptoProviderOnlySupportsAsyncError;


/***/ }),

/***/ 26930:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NodeCryptoProvider = void 0;
const crypto = __webpack_require__(6113);
const CryptoProvider_js_1 = __webpack_require__(32436);
/**
 * `CryptoProvider which uses the Node `crypto` package for its computations.
 */ class NodeCryptoProvider extends CryptoProvider_js_1.CryptoProvider {
    /** @override */ computeHMACSignature(payload, secret) {
        return crypto.createHmac("sha256", secret).update(payload, "utf8").digest("hex");
    }
    /** @override */ async computeHMACSignatureAsync(payload, secret) {
        const signature = await this.computeHMACSignature(payload, secret);
        return signature;
    }
}
exports.NodeCryptoProvider = NodeCryptoProvider;


/***/ }),

/***/ 64215:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SubtleCryptoProvider = void 0;
const CryptoProvider_js_1 = __webpack_require__(32436);
/**
 * `CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
 *
 * This only supports asynchronous operations.
 */ class SubtleCryptoProvider extends CryptoProvider_js_1.CryptoProvider {
    constructor(subtleCrypto){
        super();
        // If no subtle crypto is interface, default to the global namespace. This
        // is to allow custom interfaces (eg. using the Node webcrypto interface in
        // tests).
        this.subtleCrypto = subtleCrypto || crypto.subtle;
    }
    /** @override */ computeHMACSignature(payload, secret) {
        throw new CryptoProvider_js_1.CryptoProviderOnlySupportsAsyncError("SubtleCryptoProvider cannot be used in a synchronous context.");
    }
    /** @override */ async computeHMACSignatureAsync(payload, secret) {
        const encoder = new TextEncoder();
        const key = await this.subtleCrypto.importKey("raw", encoder.encode(secret), {
            name: "HMAC",
            hash: {
                name: "SHA-256"
            }
        }, false, [
            "sign"
        ]);
        const signatureBuffer = await this.subtleCrypto.sign("hmac", key, encoder.encode(payload));
        // crypto.subtle returns the signature in base64 format. This must be
        // encoded in hex to match the CryptoProvider contract. We map each byte in
        // the buffer to its corresponding hex octet and then combine into a string.
        const signatureBytes = new Uint8Array(signatureBuffer);
        const signatureHexCodes = new Array(signatureBytes.length);
        for(let i = 0; i < signatureBytes.length; i++){
            signatureHexCodes[i] = byteHexMapping[signatureBytes[i]];
        }
        return signatureHexCodes.join("");
    }
}
exports.SubtleCryptoProvider = SubtleCryptoProvider;
// Cached mapping of byte to hex representation. We do this once to avoid re-
// computing every time we need to convert the result of a signature to hex.
const byteHexMapping = new Array(256);
for(let i = 0; i < byteHexMapping.length; i++){
    byteHexMapping[i] = i.toString(16).padStart(2, "0");
}


/***/ }),

/***/ 98105:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.multipartRequestDataProcessor = void 0;
const utils_js_1 = __webpack_require__(72566);
// Method for formatting HTTP body for the multipart/form-data specification
// Mostly taken from Fermata.js
// https://github.com/natevw/fermata/blob/5d9732a33d776ce925013a265935facd1626cc88/fermata.js#L315-L343
const multipartDataGenerator = (method, data, headers)=>{
    const segno = (Math.round(Math.random() * 1e16) + Math.round(Math.random() * 1e16)).toString();
    headers["Content-Type"] = `multipart/form-data; boundary=${segno}`;
    const textEncoder = new TextEncoder();
    let buffer = new Uint8Array(0);
    const endBuffer = textEncoder.encode("\r\n");
    function push(l) {
        const prevBuffer = buffer;
        const newBuffer = l instanceof Uint8Array ? l : new Uint8Array(textEncoder.encode(l));
        buffer = new Uint8Array(prevBuffer.length + newBuffer.length + 2);
        buffer.set(prevBuffer);
        buffer.set(newBuffer, prevBuffer.length);
        buffer.set(endBuffer, buffer.length - 2);
    }
    function q(s) {
        return `"${s.replace(/"|"/g, "%22").replace(/\r\n|\r|\n/g, " ")}"`;
    }
    const flattenedData = (0, utils_js_1.flattenAndStringify)(data);
    for(const k in flattenedData){
        const v = flattenedData[k];
        push(`--${segno}`);
        if (Object.prototype.hasOwnProperty.call(v, "data")) {
            const typedEntry = v;
            push(`Content-Disposition: form-data; name=${q(k)}; filename=${q(typedEntry.name || "blob")}`);
            push(`Content-Type: ${typedEntry.type || "application/octet-stream"}`);
            push("");
            push(typedEntry.data);
        } else {
            push(`Content-Disposition: form-data; name=${q(k)}`);
            push("");
            push(v);
        }
    }
    push(`--${segno}--`);
    return buffer;
};
function multipartRequestDataProcessor(method, data, headers, callback) {
    data = data || {};
    if (method !== "POST") {
        return callback(null, (0, utils_js_1.stringifyRequestData)(data));
    }
    this._stripe._platformFunctions.tryBufferData(data).then((bufferedData)=>{
        const buffer = multipartDataGenerator(method, bufferedData, headers);
        return callback(null, buffer);
    }).catch((err)=>callback(err, null));
}
exports.multipartRequestDataProcessor = multipartRequestDataProcessor;


/***/ }),

/***/ 59216:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FetchHttpClientResponse = exports.FetchHttpClient = void 0;
const HttpClient_js_1 = __webpack_require__(82543);
/**
 * HTTP client which uses a `fetch` function to issue requests.
 *
 * By default relies on the global `fetch` function, but an optional function
 * can be passed in. If passing in a function, it is expected to match the Web
 * Fetch API. As an example, this could be the function provided by the
 * node-fetch package (https://github.com/node-fetch/node-fetch).
 */ class FetchHttpClient extends HttpClient_js_1.HttpClient {
    constructor(fetchFn){
        super();
        this._fetchFn = fetchFn;
    }
    /** @override. */ getClientName() {
        return "fetch";
    }
    makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        const isInsecureConnection = protocol === "http";
        const url = new URL(path, `${isInsecureConnection ? "http" : "https"}://${host}`);
        url.port = port;
        // For methods which expect payloads, we should always pass a body value
        // even when it is empty. Without this, some JS runtimes (eg. Deno) will
        // inject a second Content-Length header. See https://github.com/stripe/stripe-node/issues/1519
        // for more details.
        const methodHasPayload = method == "POST" || method == "PUT" || method == "PATCH";
        const body = requestData || (methodHasPayload ? "" : undefined);
        const fetchFn = this._fetchFn || fetch;
        const fetchPromise = fetchFn(url.toString(), {
            method,
            // @ts-ignore
            headers,
            // @ts-ignore
            body
        });
        // The Fetch API does not support passing in a timeout natively, so a
        // timeout promise is constructed to race against the fetch and preempt the
        // request, simulating a timeout.
        //
        // This timeout behavior differs from Node:
        // - Fetch uses a single timeout for the entire length of the request.
        // - Node is more fine-grained and resets the timeout after each stage of
        //   the request.
        //
        // As an example, if the timeout is set to 30s and the connection takes 20s
        // to be established followed by 20s for the body, Fetch would timeout but
        // Node would not. The more fine-grained timeout cannot be implemented with
        // fetch.
        let pendingTimeoutId;
        const timeoutPromise = new Promise((_, reject)=>{
            pendingTimeoutId = setTimeout(()=>{
                pendingTimeoutId = null;
                reject(HttpClient_js_1.HttpClient.makeTimeoutError());
            }, timeout);
        });
        return Promise.race([
            fetchPromise,
            timeoutPromise
        ]).then((res)=>{
            return new FetchHttpClientResponse(res);
        }).finally(()=>{
            if (pendingTimeoutId) {
                clearTimeout(pendingTimeoutId);
            }
        });
    }
}
exports.FetchHttpClient = FetchHttpClient;
class FetchHttpClientResponse extends HttpClient_js_1.HttpClientResponse {
    constructor(res){
        super(res.status, FetchHttpClientResponse._transformHeadersToObject(res.headers));
        this._res = res;
    }
    getRawResponse() {
        return this._res;
    }
    toStream(streamCompleteCallback) {
        // Unfortunately `fetch` does not have event handlers for when the stream is
        // completely read. We therefore invoke the streamCompleteCallback right
        // away. This callback emits a response event with metadata and completes
        // metrics, so it's ok to do this without waiting for the stream to be
        // completely read.
        streamCompleteCallback();
        // Fetch's `body` property is expected to be a readable stream of the body.
        return this._res.body;
    }
    toJSON() {
        return this._res.json();
    }
    static _transformHeadersToObject(headers) {
        // Fetch uses a Headers instance so this must be converted to a barebones
        // JS object to meet the HttpClient interface.
        const headersObj = {};
        for (const entry of headers){
            if (!Array.isArray(entry) || entry.length != 2) {
                throw new Error("Response objects produced by the fetch function given to FetchHttpClient do not have an iterable headers map. Response#headers should be an iterable object.");
            }
            headersObj[entry[0]] = entry[1];
        }
        return headersObj;
    }
}
exports.FetchHttpClientResponse = FetchHttpClientResponse;


/***/ }),

/***/ 82543:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.HttpClientResponse = exports.HttpClient = void 0;
/**
 * Encapsulates the logic for issuing a request to the Stripe API.
 *
 * A custom HTTP client should should implement:
 * 1. A response class which extends HttpClientResponse and wraps around their
 *    own internal representation of a response.
 * 2. A client class which extends HttpClient and implements all methods,
 *    returning their own response class when making requests.
 */ class HttpClient {
    /** The client name used for diagnostics. */ getClientName() {
        throw new Error("getClientName not implemented.");
    }
    makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        throw new Error("makeRequest not implemented.");
    }
    /** Helper to make a consistent timeout error across implementations. */ static makeTimeoutError() {
        const timeoutErr = new TypeError(HttpClient.TIMEOUT_ERROR_CODE);
        timeoutErr.code = HttpClient.TIMEOUT_ERROR_CODE;
        return timeoutErr;
    }
}
exports.HttpClient = HttpClient;
// Public API accessible via Stripe.HttpClient
HttpClient.CONNECTION_CLOSED_ERROR_CODES = [
    "ECONNRESET",
    "EPIPE"
];
HttpClient.TIMEOUT_ERROR_CODE = "ETIMEDOUT";
class HttpClientResponse {
    constructor(statusCode, headers){
        this._statusCode = statusCode;
        this._headers = headers;
    }
    getStatusCode() {
        return this._statusCode;
    }
    getHeaders() {
        return this._headers;
    }
    getRawResponse() {
        throw new Error("getRawResponse not implemented.");
    }
    toStream(streamCompleteCallback) {
        throw new Error("toStream not implemented.");
    }
    toJSON() {
        throw new Error("toJSON not implemented.");
    }
}
exports.HttpClientResponse = HttpClientResponse;


/***/ }),

/***/ 50592:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NodeHttpClientResponse = exports.NodeHttpClient = void 0;
const http = __webpack_require__(13685);
const https = __webpack_require__(95687);
const HttpClient_js_1 = __webpack_require__(82543);
const defaultHttpAgent = new http.Agent({
    keepAlive: true
});
const defaultHttpsAgent = new https.Agent({
    keepAlive: true
});
/**
 * HTTP client which uses the Node `http` and `https` packages to issue
 * requests.`
 */ class NodeHttpClient extends HttpClient_js_1.HttpClient {
    constructor(agent){
        super();
        this._agent = agent;
    }
    /** @override. */ getClientName() {
        return "node";
    }
    makeRequest(host, port, path, method, headers, requestData, protocol, timeout) {
        const isInsecureConnection = protocol === "http";
        let agent = this._agent;
        if (!agent) {
            agent = isInsecureConnection ? defaultHttpAgent : defaultHttpsAgent;
        }
        const requestPromise = new Promise((resolve, reject)=>{
            const req = (isInsecureConnection ? http : https).request({
                host: host,
                port: port,
                path,
                method,
                agent,
                headers,
                ciphers: "DEFAULT:!aNULL:!eNULL:!LOW:!EXPORT:!SSLv2:!MD5"
            });
            req.setTimeout(timeout, ()=>{
                req.destroy(HttpClient_js_1.HttpClient.makeTimeoutError());
            });
            req.on("response", (res)=>{
                resolve(new NodeHttpClientResponse(res));
            });
            req.on("error", (error)=>{
                reject(error);
            });
            req.once("socket", (socket)=>{
                if (socket.connecting) {
                    socket.once(isInsecureConnection ? "connect" : "secureConnect", ()=>{
                        // Send payload; we're safe:
                        req.write(requestData);
                        req.end();
                    });
                } else {
                    // we're already connected
                    req.write(requestData);
                    req.end();
                }
            });
        });
        return requestPromise;
    }
}
exports.NodeHttpClient = NodeHttpClient;
class NodeHttpClientResponse extends HttpClient_js_1.HttpClientResponse {
    constructor(res){
        // @ts-ignore
        super(res.statusCode, res.headers || {});
        this._res = res;
    }
    getRawResponse() {
        return this._res;
    }
    toStream(streamCompleteCallback) {
        // The raw response is itself the stream, so we just return that. To be
        // backwards compatible, we should invoke the streamCompleteCallback only
        // once the stream has been fully consumed.
        this._res.once("end", ()=>streamCompleteCallback());
        return this._res;
    }
    toJSON() {
        return new Promise((resolve, reject)=>{
            let response = "";
            this._res.setEncoding("utf8");
            this._res.on("data", (chunk)=>{
                response += chunk;
            });
            this._res.once("end", ()=>{
                try {
                    resolve(JSON.parse(response));
                } catch (e) {
                    reject(e);
                }
            });
        });
    }
}
exports.NodeHttpClientResponse = NodeHttpClientResponse;


/***/ }),

/***/ 62134:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.NodePlatformFunctions = void 0;
const crypto = __webpack_require__(6113);
const events_1 = __webpack_require__(82361);
const NodeCryptoProvider_js_1 = __webpack_require__(26930);
const NodeHttpClient_js_1 = __webpack_require__(50592);
const PlatformFunctions_js_1 = __webpack_require__(23623);
const Error_js_1 = __webpack_require__(98071);
const utils_js_1 = __webpack_require__(72566);
const child_process_1 = __webpack_require__(32081);
class StreamProcessingError extends Error_js_1.StripeError {
}
/**
 * Specializes WebPlatformFunctions using APIs available in Node.js.
 */ class NodePlatformFunctions extends PlatformFunctions_js_1.PlatformFunctions {
    constructor(){
        super();
        this._exec = child_process_1.exec;
        this._UNAME_CACHE = null;
    }
    /** @override */ uuid4() {
        // available in: v14.17.x+
        if (crypto.randomUUID) {
            return crypto.randomUUID();
        }
        return super.uuid4();
    }
    /**
     * @override
     * Node's built in `exec` function sometimes throws outright,
     * and sometimes has a callback with an error,
     * depending on the type of error.
     *
     * This unifies that interface by resolving with a null uname
     * if an error is encountered.
     */ getUname() {
        if (!this._UNAME_CACHE) {
            this._UNAME_CACHE = new Promise((resolve, reject)=>{
                try {
                    this._exec("uname -a", (err, uname)=>{
                        if (err) {
                            return resolve(null);
                        }
                        resolve(uname);
                    });
                } catch (e) {
                    resolve(null);
                }
            });
        }
        return this._UNAME_CACHE;
    }
    /**
     * @override
     * Secure compare, from https://github.com/freewil/scmp
     */ secureCompare(a, b) {
        if (!a || !b) {
            throw new Error("secureCompare must receive two arguments");
        }
        // return early here if buffer lengths are not equal since timingSafeEqual
        // will throw if buffer lengths are not equal
        if (a.length !== b.length) {
            return false;
        }
        // use crypto.timingSafeEqual if available (since Node.js v6.6.0),
        // otherwise use our own scmp-internal function.
        if (crypto.timingSafeEqual) {
            const textEncoder = new TextEncoder();
            const aEncoded = textEncoder.encode(a);
            const bEncoded = textEncoder.encode(b);
            return crypto.timingSafeEqual(aEncoded, bEncoded);
        }
        return super.secureCompare(a, b);
    }
    createEmitter() {
        return new events_1.EventEmitter();
    }
    /** @override */ tryBufferData(data) {
        if (!(data.file.data instanceof events_1.EventEmitter)) {
            return Promise.resolve(data);
        }
        const bufferArray = [];
        return new Promise((resolve, reject)=>{
            data.file.data.on("data", (line)=>{
                bufferArray.push(line);
            }).once("end", ()=>{
                // @ts-ignore
                const bufferData = Object.assign({}, data);
                bufferData.file.data = (0, utils_js_1.concat)(bufferArray);
                resolve(bufferData);
            }).on("error", (err)=>{
                reject(new StreamProcessingError({
                    message: "An error occurred while attempting to process the file for upload.",
                    detail: err
                }));
            });
        });
    }
    /** @override */ createNodeHttpClient(agent) {
        return new NodeHttpClient_js_1.NodeHttpClient(agent);
    }
    /** @override */ createDefaultHttpClient() {
        return new NodeHttpClient_js_1.NodeHttpClient();
    }
    /** @override */ createNodeCryptoProvider() {
        return new NodeCryptoProvider_js_1.NodeCryptoProvider();
    }
    /** @override */ createDefaultCryptoProvider() {
        return this.createNodeCryptoProvider();
    }
}
exports.NodePlatformFunctions = NodePlatformFunctions;


/***/ }),

/***/ 23623:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.PlatformFunctions = void 0;
const FetchHttpClient_js_1 = __webpack_require__(59216);
const SubtleCryptoProvider_js_1 = __webpack_require__(64215);
/**
 * Interface encapsulating various utility functions whose
 * implementations depend on the platform / JS runtime.
 */ class PlatformFunctions {
    constructor(){
        this._fetchFn = null;
        this._agent = null;
    }
    /**
     * Gets uname with Node's built-in `exec` function, if available.
     */ getUname() {
        throw new Error("getUname not implemented.");
    }
    /**
     * Generates a v4 UUID. See https://stackoverflow.com/a/2117523
     */ uuid4() {
        return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (c)=>{
            const r = Math.random() * 16 | 0;
            const v = c === "x" ? r : r & 0x3 | 0x8;
            return v.toString(16);
        });
    }
    /**
     * Compares strings in constant time.
     */ secureCompare(a, b) {
        // return early here if buffer lengths are not equal
        if (a.length !== b.length) {
            return false;
        }
        const len = a.length;
        let result = 0;
        for(let i = 0; i < len; ++i){
            result |= a.charCodeAt(i) ^ b.charCodeAt(i);
        }
        return result === 0;
    }
    /**
     * Creates an event emitter.
     */ createEmitter() {
        throw new Error("createEmitter not implemented.");
    }
    /**
     * Checks if the request data is a stream. If so, read the entire stream
     * to a buffer and return the buffer.
     */ tryBufferData(data) {
        throw new Error("tryBufferData not implemented.");
    }
    /**
     * Creates an HTTP client which uses the Node `http` and `https` packages
     * to issue requests.
     */ createNodeHttpClient(agent) {
        throw new Error("createNodeHttpClient not implemented.");
    }
    /**
     * Creates an HTTP client for issuing Stripe API requests which uses the Web
     * Fetch API.
     *
     * A fetch function can optionally be passed in as a parameter. If none is
     * passed, will default to the default `fetch` function in the global scope.
     */ createFetchHttpClient(fetchFn) {
        return new FetchHttpClient_js_1.FetchHttpClient(fetchFn);
    }
    /**
     * Creates an HTTP client using runtime-specific APIs.
     */ createDefaultHttpClient() {
        throw new Error("createDefaultHttpClient not implemented.");
    }
    /**
     * Creates a CryptoProvider which uses the Node `crypto` package for its computations.
     */ createNodeCryptoProvider() {
        throw new Error("createNodeCryptoProvider not implemented.");
    }
    /**
     * Creates a CryptoProvider which uses the SubtleCrypto interface of the Web Crypto API.
     */ createSubtleCryptoProvider(subtleCrypto) {
        return new SubtleCryptoProvider_js_1.SubtleCryptoProvider(subtleCrypto);
    }
    createDefaultCryptoProvider() {
        throw new Error("createDefaultCryptoProvider not implemented.");
    }
}
exports.PlatformFunctions = PlatformFunctions;


/***/ }),

/***/ 44231:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FinancialConnections = exports.Checkout = exports.BillingPortal = exports.Apps = exports.WebhookEndpoints = exports.Transfers = exports.Topups = exports.Tokens = exports.TaxRates = exports.TaxCodes = exports.Subscriptions = exports.SubscriptionSchedules = exports.SubscriptionItems = exports.Sources = exports.ShippingRates = exports.SetupIntents = exports.SetupAttempts = exports.Reviews = exports.Refunds = exports.Quotes = exports.PromotionCodes = exports.Products = exports.Prices = exports.Plans = exports.Payouts = exports.PaymentMethods = exports.PaymentLinks = exports.PaymentIntents = exports.OAuth = exports.Mandates = exports.Invoices = exports.InvoiceItems = exports.Files = exports.FileLinks = exports.ExchangeRates = exports.Events = exports.EphemeralKeys = exports.Disputes = exports.Customers = exports.CreditNotes = exports.Coupons = exports.CountrySpecs = exports.Charges = exports.BalanceTransactions = exports.Balance = exports.ApplicationFees = exports.ApplePayDomains = exports.Accounts = exports.AccountLinks = exports.Account = void 0;
exports.Treasury = exports.TestHelpers = exports.Terminal = exports.Tax = exports.Sigma = exports.Reporting = exports.Radar = exports.Issuing = exports.Identity = void 0;
const ResourceNamespace_js_1 = __webpack_require__(65141);
const Accounts_js_1 = __webpack_require__(36177);
const Authorizations_js_1 = __webpack_require__(58619);
const Calculations_js_1 = __webpack_require__(38338);
const Cardholders_js_1 = __webpack_require__(3106);
const Cards_js_1 = __webpack_require__(55658);
const Cards_js_2 = __webpack_require__(65635);
const Configurations_js_1 = __webpack_require__(66078);
const Configurations_js_2 = __webpack_require__(57704);
const ConnectionTokens_js_1 = __webpack_require__(85213);
const CreditReversals_js_1 = __webpack_require__(39054);
const Customers_js_1 = __webpack_require__(34874);
const DebitReversals_js_1 = __webpack_require__(38324);
const Disputes_js_1 = __webpack_require__(34285);
const EarlyFraudWarnings_js_1 = __webpack_require__(86095);
const FinancialAccounts_js_1 = __webpack_require__(95709);
const InboundTransfers_js_1 = __webpack_require__(85888);
const InboundTransfers_js_2 = __webpack_require__(2187);
const Locations_js_1 = __webpack_require__(81172);
const OutboundPayments_js_1 = __webpack_require__(52746);
const OutboundPayments_js_2 = __webpack_require__(6697);
const OutboundTransfers_js_1 = __webpack_require__(49295);
const OutboundTransfers_js_2 = __webpack_require__(72778);
const Readers_js_1 = __webpack_require__(10712);
const Readers_js_2 = __webpack_require__(3850);
const ReceivedCredits_js_1 = __webpack_require__(19061);
const ReceivedCredits_js_2 = __webpack_require__(38339);
const ReceivedDebits_js_1 = __webpack_require__(9721);
const ReceivedDebits_js_2 = __webpack_require__(70293);
const Refunds_js_1 = __webpack_require__(48008);
const ReportRuns_js_1 = __webpack_require__(67338);
const ReportTypes_js_1 = __webpack_require__(24544);
const ScheduledQueryRuns_js_1 = __webpack_require__(36348);
const Secrets_js_1 = __webpack_require__(98817);
const Sessions_js_1 = __webpack_require__(1655);
const Sessions_js_2 = __webpack_require__(79923);
const Sessions_js_3 = __webpack_require__(18896);
const TestClocks_js_1 = __webpack_require__(32145);
const TransactionEntries_js_1 = __webpack_require__(47475);
const Transactions_js_1 = __webpack_require__(5421);
const Transactions_js_2 = __webpack_require__(66763);
const Transactions_js_3 = __webpack_require__(90302);
const ValueListItems_js_1 = __webpack_require__(79228);
const ValueLists_js_1 = __webpack_require__(64938);
const VerificationReports_js_1 = __webpack_require__(87940);
const VerificationSessions_js_1 = __webpack_require__(81864);
var Accounts_js_2 = __webpack_require__(57567);
Object.defineProperty(exports, "Account", ({
    enumerable: true,
    get: function() {
        return Accounts_js_2.Accounts;
    }
}));
var AccountLinks_js_1 = __webpack_require__(53957);
Object.defineProperty(exports, "AccountLinks", ({
    enumerable: true,
    get: function() {
        return AccountLinks_js_1.AccountLinks;
    }
}));
var Accounts_js_3 = __webpack_require__(57567);
Object.defineProperty(exports, "Accounts", ({
    enumerable: true,
    get: function() {
        return Accounts_js_3.Accounts;
    }
}));
var ApplePayDomains_js_1 = __webpack_require__(4573);
Object.defineProperty(exports, "ApplePayDomains", ({
    enumerable: true,
    get: function() {
        return ApplePayDomains_js_1.ApplePayDomains;
    }
}));
var ApplicationFees_js_1 = __webpack_require__(8304);
Object.defineProperty(exports, "ApplicationFees", ({
    enumerable: true,
    get: function() {
        return ApplicationFees_js_1.ApplicationFees;
    }
}));
var Balance_js_1 = __webpack_require__(39959);
Object.defineProperty(exports, "Balance", ({
    enumerable: true,
    get: function() {
        return Balance_js_1.Balance;
    }
}));
var BalanceTransactions_js_1 = __webpack_require__(47121);
Object.defineProperty(exports, "BalanceTransactions", ({
    enumerable: true,
    get: function() {
        return BalanceTransactions_js_1.BalanceTransactions;
    }
}));
var Charges_js_1 = __webpack_require__(65504);
Object.defineProperty(exports, "Charges", ({
    enumerable: true,
    get: function() {
        return Charges_js_1.Charges;
    }
}));
var CountrySpecs_js_1 = __webpack_require__(5756);
Object.defineProperty(exports, "CountrySpecs", ({
    enumerable: true,
    get: function() {
        return CountrySpecs_js_1.CountrySpecs;
    }
}));
var Coupons_js_1 = __webpack_require__(17023);
Object.defineProperty(exports, "Coupons", ({
    enumerable: true,
    get: function() {
        return Coupons_js_1.Coupons;
    }
}));
var CreditNotes_js_1 = __webpack_require__(20098);
Object.defineProperty(exports, "CreditNotes", ({
    enumerable: true,
    get: function() {
        return CreditNotes_js_1.CreditNotes;
    }
}));
var Customers_js_2 = __webpack_require__(75521);
Object.defineProperty(exports, "Customers", ({
    enumerable: true,
    get: function() {
        return Customers_js_2.Customers;
    }
}));
var Disputes_js_2 = __webpack_require__(87015);
Object.defineProperty(exports, "Disputes", ({
    enumerable: true,
    get: function() {
        return Disputes_js_2.Disputes;
    }
}));
var EphemeralKeys_js_1 = __webpack_require__(62385);
Object.defineProperty(exports, "EphemeralKeys", ({
    enumerable: true,
    get: function() {
        return EphemeralKeys_js_1.EphemeralKeys;
    }
}));
var Events_js_1 = __webpack_require__(22752);
Object.defineProperty(exports, "Events", ({
    enumerable: true,
    get: function() {
        return Events_js_1.Events;
    }
}));
var ExchangeRates_js_1 = __webpack_require__(57095);
Object.defineProperty(exports, "ExchangeRates", ({
    enumerable: true,
    get: function() {
        return ExchangeRates_js_1.ExchangeRates;
    }
}));
var FileLinks_js_1 = __webpack_require__(26447);
Object.defineProperty(exports, "FileLinks", ({
    enumerable: true,
    get: function() {
        return FileLinks_js_1.FileLinks;
    }
}));
var Files_js_1 = __webpack_require__(95189);
Object.defineProperty(exports, "Files", ({
    enumerable: true,
    get: function() {
        return Files_js_1.Files;
    }
}));
var InvoiceItems_js_1 = __webpack_require__(91914);
Object.defineProperty(exports, "InvoiceItems", ({
    enumerable: true,
    get: function() {
        return InvoiceItems_js_1.InvoiceItems;
    }
}));
var Invoices_js_1 = __webpack_require__(82652);
Object.defineProperty(exports, "Invoices", ({
    enumerable: true,
    get: function() {
        return Invoices_js_1.Invoices;
    }
}));
var Mandates_js_1 = __webpack_require__(32312);
Object.defineProperty(exports, "Mandates", ({
    enumerable: true,
    get: function() {
        return Mandates_js_1.Mandates;
    }
}));
var OAuth_js_1 = __webpack_require__(78730);
Object.defineProperty(exports, "OAuth", ({
    enumerable: true,
    get: function() {
        return OAuth_js_1.OAuth;
    }
}));
var PaymentIntents_js_1 = __webpack_require__(65432);
Object.defineProperty(exports, "PaymentIntents", ({
    enumerable: true,
    get: function() {
        return PaymentIntents_js_1.PaymentIntents;
    }
}));
var PaymentLinks_js_1 = __webpack_require__(96361);
Object.defineProperty(exports, "PaymentLinks", ({
    enumerable: true,
    get: function() {
        return PaymentLinks_js_1.PaymentLinks;
    }
}));
var PaymentMethods_js_1 = __webpack_require__(40791);
Object.defineProperty(exports, "PaymentMethods", ({
    enumerable: true,
    get: function() {
        return PaymentMethods_js_1.PaymentMethods;
    }
}));
var Payouts_js_1 = __webpack_require__(96290);
Object.defineProperty(exports, "Payouts", ({
    enumerable: true,
    get: function() {
        return Payouts_js_1.Payouts;
    }
}));
var Plans_js_1 = __webpack_require__(2425);
Object.defineProperty(exports, "Plans", ({
    enumerable: true,
    get: function() {
        return Plans_js_1.Plans;
    }
}));
var Prices_js_1 = __webpack_require__(38365);
Object.defineProperty(exports, "Prices", ({
    enumerable: true,
    get: function() {
        return Prices_js_1.Prices;
    }
}));
var Products_js_1 = __webpack_require__(51308);
Object.defineProperty(exports, "Products", ({
    enumerable: true,
    get: function() {
        return Products_js_1.Products;
    }
}));
var PromotionCodes_js_1 = __webpack_require__(65451);
Object.defineProperty(exports, "PromotionCodes", ({
    enumerable: true,
    get: function() {
        return PromotionCodes_js_1.PromotionCodes;
    }
}));
var Quotes_js_1 = __webpack_require__(7475);
Object.defineProperty(exports, "Quotes", ({
    enumerable: true,
    get: function() {
        return Quotes_js_1.Quotes;
    }
}));
var Refunds_js_2 = __webpack_require__(99501);
Object.defineProperty(exports, "Refunds", ({
    enumerable: true,
    get: function() {
        return Refunds_js_2.Refunds;
    }
}));
var Reviews_js_1 = __webpack_require__(81738);
Object.defineProperty(exports, "Reviews", ({
    enumerable: true,
    get: function() {
        return Reviews_js_1.Reviews;
    }
}));
var SetupAttempts_js_1 = __webpack_require__(71457);
Object.defineProperty(exports, "SetupAttempts", ({
    enumerable: true,
    get: function() {
        return SetupAttempts_js_1.SetupAttempts;
    }
}));
var SetupIntents_js_1 = __webpack_require__(81338);
Object.defineProperty(exports, "SetupIntents", ({
    enumerable: true,
    get: function() {
        return SetupIntents_js_1.SetupIntents;
    }
}));
var ShippingRates_js_1 = __webpack_require__(33793);
Object.defineProperty(exports, "ShippingRates", ({
    enumerable: true,
    get: function() {
        return ShippingRates_js_1.ShippingRates;
    }
}));
var Sources_js_1 = __webpack_require__(80812);
Object.defineProperty(exports, "Sources", ({
    enumerable: true,
    get: function() {
        return Sources_js_1.Sources;
    }
}));
var SubscriptionItems_js_1 = __webpack_require__(63199);
Object.defineProperty(exports, "SubscriptionItems", ({
    enumerable: true,
    get: function() {
        return SubscriptionItems_js_1.SubscriptionItems;
    }
}));
var SubscriptionSchedules_js_1 = __webpack_require__(41055);
Object.defineProperty(exports, "SubscriptionSchedules", ({
    enumerable: true,
    get: function() {
        return SubscriptionSchedules_js_1.SubscriptionSchedules;
    }
}));
var Subscriptions_js_1 = __webpack_require__(12169);
Object.defineProperty(exports, "Subscriptions", ({
    enumerable: true,
    get: function() {
        return Subscriptions_js_1.Subscriptions;
    }
}));
var TaxCodes_js_1 = __webpack_require__(32935);
Object.defineProperty(exports, "TaxCodes", ({
    enumerable: true,
    get: function() {
        return TaxCodes_js_1.TaxCodes;
    }
}));
var TaxRates_js_1 = __webpack_require__(616);
Object.defineProperty(exports, "TaxRates", ({
    enumerable: true,
    get: function() {
        return TaxRates_js_1.TaxRates;
    }
}));
var Tokens_js_1 = __webpack_require__(98370);
Object.defineProperty(exports, "Tokens", ({
    enumerable: true,
    get: function() {
        return Tokens_js_1.Tokens;
    }
}));
var Topups_js_1 = __webpack_require__(73670);
Object.defineProperty(exports, "Topups", ({
    enumerable: true,
    get: function() {
        return Topups_js_1.Topups;
    }
}));
var Transfers_js_1 = __webpack_require__(67333);
Object.defineProperty(exports, "Transfers", ({
    enumerable: true,
    get: function() {
        return Transfers_js_1.Transfers;
    }
}));
var WebhookEndpoints_js_1 = __webpack_require__(72025);
Object.defineProperty(exports, "WebhookEndpoints", ({
    enumerable: true,
    get: function() {
        return WebhookEndpoints_js_1.WebhookEndpoints;
    }
}));
exports.Apps = (0, ResourceNamespace_js_1.resourceNamespace)("apps", {
    Secrets: Secrets_js_1.Secrets
});
exports.BillingPortal = (0, ResourceNamespace_js_1.resourceNamespace)("billingPortal", {
    Configurations: Configurations_js_1.Configurations,
    Sessions: Sessions_js_1.Sessions
});
exports.Checkout = (0, ResourceNamespace_js_1.resourceNamespace)("checkout", {
    Sessions: Sessions_js_2.Sessions
});
exports.FinancialConnections = (0, ResourceNamespace_js_1.resourceNamespace)("financialConnections", {
    Accounts: Accounts_js_1.Accounts,
    Sessions: Sessions_js_3.Sessions
});
exports.Identity = (0, ResourceNamespace_js_1.resourceNamespace)("identity", {
    VerificationReports: VerificationReports_js_1.VerificationReports,
    VerificationSessions: VerificationSessions_js_1.VerificationSessions
});
exports.Issuing = (0, ResourceNamespace_js_1.resourceNamespace)("issuing", {
    Authorizations: Authorizations_js_1.Authorizations,
    Cardholders: Cardholders_js_1.Cardholders,
    Cards: Cards_js_2.Cards,
    Disputes: Disputes_js_1.Disputes,
    Transactions: Transactions_js_1.Transactions
});
exports.Radar = (0, ResourceNamespace_js_1.resourceNamespace)("radar", {
    EarlyFraudWarnings: EarlyFraudWarnings_js_1.EarlyFraudWarnings,
    ValueListItems: ValueListItems_js_1.ValueListItems,
    ValueLists: ValueLists_js_1.ValueLists
});
exports.Reporting = (0, ResourceNamespace_js_1.resourceNamespace)("reporting", {
    ReportRuns: ReportRuns_js_1.ReportRuns,
    ReportTypes: ReportTypes_js_1.ReportTypes
});
exports.Sigma = (0, ResourceNamespace_js_1.resourceNamespace)("sigma", {
    ScheduledQueryRuns: ScheduledQueryRuns_js_1.ScheduledQueryRuns
});
exports.Tax = (0, ResourceNamespace_js_1.resourceNamespace)("tax", {
    Calculations: Calculations_js_1.Calculations,
    Transactions: Transactions_js_2.Transactions
});
exports.Terminal = (0, ResourceNamespace_js_1.resourceNamespace)("terminal", {
    Configurations: Configurations_js_2.Configurations,
    ConnectionTokens: ConnectionTokens_js_1.ConnectionTokens,
    Locations: Locations_js_1.Locations,
    Readers: Readers_js_2.Readers
});
exports.TestHelpers = (0, ResourceNamespace_js_1.resourceNamespace)("testHelpers", {
    Customers: Customers_js_1.Customers,
    Refunds: Refunds_js_1.Refunds,
    TestClocks: TestClocks_js_1.TestClocks,
    Issuing: (0, ResourceNamespace_js_1.resourceNamespace)("issuing", {
        Cards: Cards_js_1.Cards
    }),
    Terminal: (0, ResourceNamespace_js_1.resourceNamespace)("terminal", {
        Readers: Readers_js_1.Readers
    }),
    Treasury: (0, ResourceNamespace_js_1.resourceNamespace)("treasury", {
        InboundTransfers: InboundTransfers_js_1.InboundTransfers,
        OutboundPayments: OutboundPayments_js_1.OutboundPayments,
        OutboundTransfers: OutboundTransfers_js_1.OutboundTransfers,
        ReceivedCredits: ReceivedCredits_js_1.ReceivedCredits,
        ReceivedDebits: ReceivedDebits_js_1.ReceivedDebits
    })
});
exports.Treasury = (0, ResourceNamespace_js_1.resourceNamespace)("treasury", {
    CreditReversals: CreditReversals_js_1.CreditReversals,
    DebitReversals: DebitReversals_js_1.DebitReversals,
    FinancialAccounts: FinancialAccounts_js_1.FinancialAccounts,
    InboundTransfers: InboundTransfers_js_2.InboundTransfers,
    OutboundPayments: OutboundPayments_js_2.OutboundPayments,
    OutboundTransfers: OutboundTransfers_js_2.OutboundTransfers,
    ReceivedCredits: ReceivedCredits_js_2.ReceivedCredits,
    ReceivedDebits: ReceivedDebits_js_2.ReceivedDebits,
    TransactionEntries: TransactionEntries_js_1.TransactionEntries,
    Transactions: Transactions_js_3.Transactions
});


/***/ }),

/***/ 53957:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.AccountLinks = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.AccountLinks = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/account_links"
    })
});


/***/ }),

/***/ 57567:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Accounts = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
// Since path can either be `account` or `accounts`, support both through stripeMethod path
exports.Accounts = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts"
    }),
    retrieve (id, ...args) {
        // No longer allow an api key to be passed as the first string to this function due to ambiguity between
        // old account ids and api keys. To request the account for an api key, send null as the id
        if (typeof id === "string") {
            return stripeMethod({
                method: "GET",
                fullPath: "/v1/accounts/{id}"
            }).apply(this, [
                id,
                ...args
            ]);
        } else {
            if (id === null || id === undefined) {
                // Remove id as stripeMethod would complain of unexpected argument
                [].shift.apply([
                    id,
                    ...args
                ]);
            }
            return stripeMethod({
                method: "GET",
                fullPath: "/v1/account"
            }).apply(this, [
                id,
                ...args
            ]);
        }
    },
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/accounts/{account}"
    }),
    createExternalAccount: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/external_accounts"
    }),
    createLoginLink: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/login_links"
    }),
    createPerson: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/persons"
    }),
    deleteExternalAccount: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/accounts/{account}/external_accounts/{id}"
    }),
    deletePerson: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/accounts/{account}/persons/{person}"
    }),
    listCapabilities: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/capabilities",
        methodType: "list"
    }),
    listExternalAccounts: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/external_accounts",
        methodType: "list"
    }),
    listPersons: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/persons",
        methodType: "list"
    }),
    reject: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/reject"
    }),
    retrieveCapability: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/capabilities/{capability}"
    }),
    retrieveExternalAccount: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/external_accounts/{id}"
    }),
    retrievePerson: stripeMethod({
        method: "GET",
        fullPath: "/v1/accounts/{account}/persons/{person}"
    }),
    updateCapability: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/capabilities/{capability}"
    }),
    updateExternalAccount: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/external_accounts/{id}"
    }),
    updatePerson: stripeMethod({
        method: "POST",
        fullPath: "/v1/accounts/{account}/persons/{person}"
    })
});


/***/ }),

/***/ 4573:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ApplePayDomains = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ApplePayDomains = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/apple_pay/domains"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/apple_pay/domains/{domain}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/apple_pay/domains",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/apple_pay/domains/{domain}"
    })
});


/***/ }),

/***/ 8304:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ApplicationFees = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ApplicationFees = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/application_fees/{id}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/application_fees",
        methodType: "list"
    }),
    createRefund: stripeMethod({
        method: "POST",
        fullPath: "/v1/application_fees/{id}/refunds"
    }),
    listRefunds: stripeMethod({
        method: "GET",
        fullPath: "/v1/application_fees/{id}/refunds",
        methodType: "list"
    }),
    retrieveRefund: stripeMethod({
        method: "GET",
        fullPath: "/v1/application_fees/{fee}/refunds/{id}"
    }),
    updateRefund: stripeMethod({
        method: "POST",
        fullPath: "/v1/application_fees/{fee}/refunds/{id}"
    })
});


/***/ }),

/***/ 98817:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Secrets = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Secrets = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/apps/secrets"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/apps/secrets",
        methodType: "list"
    }),
    deleteWhere: stripeMethod({
        method: "POST",
        fullPath: "/v1/apps/secrets/delete"
    }),
    find: stripeMethod({
        method: "GET",
        fullPath: "/v1/apps/secrets/find"
    })
});


/***/ }),

/***/ 39959:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Balance = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Balance = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/balance"
    })
});


/***/ }),

/***/ 47121:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.BalanceTransactions = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.BalanceTransactions = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/balance_transactions/{id}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/balance_transactions",
        methodType: "list"
    })
});


/***/ }),

/***/ 66078:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Configurations = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Configurations = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing_portal/configurations"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/billing_portal/configurations/{configuration}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing_portal/configurations/{configuration}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/billing_portal/configurations",
        methodType: "list"
    })
});


/***/ }),

/***/ 1655:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Sessions = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Sessions = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/billing_portal/sessions"
    })
});


/***/ }),

/***/ 65504:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Charges = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Charges = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/charges"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/charges/{charge}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/charges/{charge}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/charges",
        methodType: "list"
    }),
    capture: stripeMethod({
        method: "POST",
        fullPath: "/v1/charges/{charge}/capture"
    }),
    search: stripeMethod({
        method: "GET",
        fullPath: "/v1/charges/search",
        methodType: "search"
    })
});


/***/ }),

/***/ 79923:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Sessions = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Sessions = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/checkout/sessions"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/checkout/sessions/{session}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/checkout/sessions",
        methodType: "list"
    }),
    expire: stripeMethod({
        method: "POST",
        fullPath: "/v1/checkout/sessions/{session}/expire"
    }),
    listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/checkout/sessions/{session}/line_items",
        methodType: "list"
    })
});


/***/ }),

/***/ 5756:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.CountrySpecs = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.CountrySpecs = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/country_specs/{country}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/country_specs",
        methodType: "list"
    })
});


/***/ }),

/***/ 17023:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Coupons = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Coupons = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/coupons"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/coupons/{coupon}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/coupons/{coupon}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/coupons",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/coupons/{coupon}"
    })
});


/***/ }),

/***/ 20098:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.CreditNotes = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.CreditNotes = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/credit_notes"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/credit_notes/{id}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/credit_notes/{id}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/credit_notes",
        methodType: "list"
    }),
    listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/credit_notes/{credit_note}/lines",
        methodType: "list"
    }),
    listPreviewLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/credit_notes/preview/lines",
        methodType: "list"
    }),
    preview: stripeMethod({
        method: "GET",
        fullPath: "/v1/credit_notes/preview"
    }),
    voidCreditNote: stripeMethod({
        method: "POST",
        fullPath: "/v1/credit_notes/{id}/void"
    })
});


/***/ }),

/***/ 75521:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Customers = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Customers = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/customers/{customer}"
    }),
    createFundingInstructions: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/funding_instructions"
    }),
    createBalanceTransaction: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/balance_transactions"
    }),
    createSource: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/sources"
    }),
    createTaxId: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/tax_ids"
    }),
    deleteDiscount: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/customers/{customer}/discount"
    }),
    deleteSource: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/customers/{customer}/sources/{id}"
    }),
    deleteTaxId: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/customers/{customer}/tax_ids/{id}"
    }),
    listPaymentMethods: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/payment_methods",
        methodType: "list"
    }),
    listBalanceTransactions: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/balance_transactions",
        methodType: "list"
    }),
    listCashBalanceTransactions: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/cash_balance_transactions",
        methodType: "list"
    }),
    listSources: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/sources",
        methodType: "list"
    }),
    listTaxIds: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/tax_ids",
        methodType: "list"
    }),
    retrievePaymentMethod: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/payment_methods/{payment_method}"
    }),
    retrieveBalanceTransaction: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
    }),
    retrieveCashBalance: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/cash_balance"
    }),
    retrieveCashBalanceTransaction: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/cash_balance_transactions/{transaction}"
    }),
    retrieveSource: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/sources/{id}"
    }),
    retrieveTaxId: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/{customer}/tax_ids/{id}"
    }),
    search: stripeMethod({
        method: "GET",
        fullPath: "/v1/customers/search",
        methodType: "search"
    }),
    updateBalanceTransaction: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/balance_transactions/{transaction}"
    }),
    updateCashBalance: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/cash_balance"
    }),
    updateSource: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/sources/{id}"
    }),
    verifySource: stripeMethod({
        method: "POST",
        fullPath: "/v1/customers/{customer}/sources/{id}/verify"
    })
});


/***/ }),

/***/ 87015:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Disputes = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Disputes = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/disputes/{dispute}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/disputes/{dispute}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/disputes",
        methodType: "list"
    }),
    close: stripeMethod({
        method: "POST",
        fullPath: "/v1/disputes/{dispute}/close"
    })
});


/***/ }),

/***/ 62385:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.EphemeralKeys = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.EphemeralKeys = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/ephemeral_keys",
        validator: (data, options)=>{
            if (!options.headers || !options.headers["Stripe-Version"]) {
                throw new Error("Passing apiVersion in a separate options hash is required to create an ephemeral key. See https://stripe.com/docs/api/versioning?lang=node");
            }
        }
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/ephemeral_keys/{key}"
    })
});


/***/ }),

/***/ 22752:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Events = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Events = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/events/{id}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/events",
        methodType: "list"
    })
});


/***/ }),

/***/ 57095:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ExchangeRates = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ExchangeRates = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/exchange_rates/{rate_id}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/exchange_rates",
        methodType: "list"
    })
});


/***/ }),

/***/ 26447:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FileLinks = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.FileLinks = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/file_links"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/file_links/{link}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/file_links/{link}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/file_links",
        methodType: "list"
    })
});


/***/ }),

/***/ 95189:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Files = void 0;
const multipart_js_1 = __webpack_require__(98105);
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Files = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/files",
        headers: {
            "Content-Type": "multipart/form-data"
        },
        host: "files.stripe.com"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/files/{file}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/files",
        methodType: "list"
    }),
    requestDataProcessor: multipart_js_1.multipartRequestDataProcessor
});


/***/ }),

/***/ 36177:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Accounts = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Accounts = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/financial_connections/accounts/{account}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/financial_connections/accounts",
        methodType: "list"
    }),
    disconnect: stripeMethod({
        method: "POST",
        fullPath: "/v1/financial_connections/accounts/{account}/disconnect"
    }),
    listOwners: stripeMethod({
        method: "GET",
        fullPath: "/v1/financial_connections/accounts/{account}/owners",
        methodType: "list"
    }),
    refresh: stripeMethod({
        method: "POST",
        fullPath: "/v1/financial_connections/accounts/{account}/refresh"
    })
});


/***/ }),

/***/ 18896:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Sessions = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Sessions = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/financial_connections/sessions"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/financial_connections/sessions/{session}"
    })
});


/***/ }),

/***/ 87940:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.VerificationReports = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.VerificationReports = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/identity/verification_reports/{report}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/identity/verification_reports",
        methodType: "list"
    })
});


/***/ }),

/***/ 81864:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.VerificationSessions = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.VerificationSessions = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/identity/verification_sessions"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/identity/verification_sessions/{session}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/identity/verification_sessions/{session}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/identity/verification_sessions",
        methodType: "list"
    }),
    cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/identity/verification_sessions/{session}/cancel"
    }),
    redact: stripeMethod({
        method: "POST",
        fullPath: "/v1/identity/verification_sessions/{session}/redact"
    })
});


/***/ }),

/***/ 91914:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.InvoiceItems = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.InvoiceItems = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoiceitems"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoiceitems/{invoiceitem}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoiceitems/{invoiceitem}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoiceitems",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/invoiceitems/{invoiceitem}"
    })
});


/***/ }),

/***/ 82652:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Invoices = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Invoices = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices/{invoice}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/invoices/{invoice}"
    }),
    finalizeInvoice: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/finalize"
    }),
    listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices/{invoice}/lines",
        methodType: "list"
    }),
    listUpcomingLines: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices/upcoming/lines",
        methodType: "list"
    }),
    markUncollectible: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/mark_uncollectible"
    }),
    pay: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/pay"
    }),
    retrieveUpcoming: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices/upcoming"
    }),
    search: stripeMethod({
        method: "GET",
        fullPath: "/v1/invoices/search",
        methodType: "search"
    }),
    sendInvoice: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/send"
    }),
    voidInvoice: stripeMethod({
        method: "POST",
        fullPath: "/v1/invoices/{invoice}/void"
    })
});


/***/ }),

/***/ 58619:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Authorizations = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Authorizations = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/authorizations/{authorization}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/authorizations/{authorization}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/authorizations",
        methodType: "list"
    }),
    approve: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/authorizations/{authorization}/approve"
    }),
    decline: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/authorizations/{authorization}/decline"
    })
});


/***/ }),

/***/ 3106:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Cardholders = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Cardholders = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/cardholders"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/cardholders/{cardholder}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/cardholders/{cardholder}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/cardholders",
        methodType: "list"
    })
});


/***/ }),

/***/ 65635:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Cards = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Cards = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/cards"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/cards/{card}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/cards/{card}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/cards",
        methodType: "list"
    })
});


/***/ }),

/***/ 34285:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Disputes = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Disputes = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/disputes"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/disputes/{dispute}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/disputes/{dispute}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/disputes",
        methodType: "list"
    }),
    submit: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/disputes/{dispute}/submit"
    })
});


/***/ }),

/***/ 5421:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Transactions = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Transactions = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/transactions/{transaction}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/issuing/transactions/{transaction}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/issuing/transactions",
        methodType: "list"
    })
});


/***/ }),

/***/ 32312:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Mandates = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Mandates = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/mandates/{mandate}"
    })
});


/***/ }),

/***/ 78730:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.OAuth = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const utils_js_1 = __webpack_require__(72566);
const stripeMethod = StripeResource_js_1.StripeResource.method;
const oAuthHost = "connect.stripe.com";
exports.OAuth = StripeResource_js_1.StripeResource.extend({
    basePath: "/",
    authorizeUrl (params, options) {
        params = params || {};
        options = options || {};
        let path = "oauth/authorize";
        // For Express accounts, the path changes
        if (options.express) {
            path = `express/${path}`;
        }
        if (!params.response_type) {
            params.response_type = "code";
        }
        if (!params.client_id) {
            params.client_id = this._stripe.getClientId();
        }
        if (!params.scope) {
            params.scope = "read_write";
        }
        return `https://${oAuthHost}/${path}?${(0, utils_js_1.stringifyRequestData)(params)}`;
    },
    token: stripeMethod({
        method: "POST",
        path: "oauth/token",
        host: oAuthHost
    }),
    deauthorize (spec, ...args) {
        if (!spec.client_id) {
            spec.client_id = this._stripe.getClientId();
        }
        return stripeMethod({
            method: "POST",
            path: "oauth/deauthorize",
            host: oAuthHost
        }).apply(this, [
            spec,
            ...args
        ]);
    }
});


/***/ }),

/***/ 65432:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.PaymentIntents = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.PaymentIntents = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_intents/{intent}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_intents",
        methodType: "list"
    }),
    applyCustomerBalance: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/apply_customer_balance"
    }),
    cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/cancel"
    }),
    capture: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/capture"
    }),
    confirm: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/confirm"
    }),
    incrementAuthorization: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/increment_authorization"
    }),
    search: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_intents/search",
        methodType: "search"
    }),
    verifyMicrodeposits: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_intents/{intent}/verify_microdeposits"
    })
});


/***/ }),

/***/ 96361:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.PaymentLinks = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.PaymentLinks = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_links"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_links/{payment_link}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_links/{payment_link}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_links",
        methodType: "list"
    }),
    listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_links/{payment_link}/line_items",
        methodType: "list"
    })
});


/***/ }),

/***/ 40791:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.PaymentMethods = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.PaymentMethods = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_methods"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_methods/{payment_method}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_methods/{payment_method}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payment_methods",
        methodType: "list"
    }),
    attach: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_methods/{payment_method}/attach"
    }),
    detach: stripeMethod({
        method: "POST",
        fullPath: "/v1/payment_methods/{payment_method}/detach"
    })
});


/***/ }),

/***/ 96290:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Payouts = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Payouts = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/payouts"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/payouts/{payout}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/payouts/{payout}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/payouts",
        methodType: "list"
    }),
    cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/payouts/{payout}/cancel"
    }),
    reverse: stripeMethod({
        method: "POST",
        fullPath: "/v1/payouts/{payout}/reverse"
    })
});


/***/ }),

/***/ 2425:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Plans = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Plans = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/plans"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/plans/{plan}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/plans/{plan}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/plans",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/plans/{plan}"
    })
});


/***/ }),

/***/ 38365:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Prices = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Prices = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/prices"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/prices/{price}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/prices/{price}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/prices",
        methodType: "list"
    }),
    search: stripeMethod({
        method: "GET",
        fullPath: "/v1/prices/search",
        methodType: "search"
    })
});


/***/ }),

/***/ 51308:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Products = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Products = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/products"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/products/{id}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/products/{id}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/products",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/products/{id}"
    }),
    search: stripeMethod({
        method: "GET",
        fullPath: "/v1/products/search",
        methodType: "search"
    })
});


/***/ }),

/***/ 65451:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.PromotionCodes = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.PromotionCodes = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/promotion_codes"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/promotion_codes/{promotion_code}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/promotion_codes/{promotion_code}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/promotion_codes",
        methodType: "list"
    })
});


/***/ }),

/***/ 7475:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Quotes = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Quotes = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/quotes"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/quotes/{quote}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/quotes/{quote}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/quotes",
        methodType: "list"
    }),
    accept: stripeMethod({
        method: "POST",
        fullPath: "/v1/quotes/{quote}/accept"
    }),
    cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/quotes/{quote}/cancel"
    }),
    finalizeQuote: stripeMethod({
        method: "POST",
        fullPath: "/v1/quotes/{quote}/finalize"
    }),
    listComputedUpfrontLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/quotes/{quote}/computed_upfront_line_items",
        methodType: "list"
    }),
    listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/quotes/{quote}/line_items",
        methodType: "list"
    }),
    pdf: stripeMethod({
        host: "files.stripe.com",
        method: "GET",
        fullPath: "/v1/quotes/{quote}/pdf",
        streaming: true
    })
});


/***/ }),

/***/ 86095:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.EarlyFraudWarnings = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.EarlyFraudWarnings = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/early_fraud_warnings/{early_fraud_warning}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/early_fraud_warnings",
        methodType: "list"
    })
});


/***/ }),

/***/ 79228:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ValueListItems = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ValueListItems = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/radar/value_list_items"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/value_list_items/{item}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/value_list_items",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/radar/value_list_items/{item}"
    })
});


/***/ }),

/***/ 64938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ValueLists = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ValueLists = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/radar/value_lists"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/value_lists/{value_list}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/radar/value_lists/{value_list}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/radar/value_lists",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/radar/value_lists/{value_list}"
    })
});


/***/ }),

/***/ 99501:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Refunds = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Refunds = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/refunds"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/refunds/{refund}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/refunds/{refund}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/refunds",
        methodType: "list"
    }),
    cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/refunds/{refund}/cancel"
    })
});


/***/ }),

/***/ 67338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ReportRuns = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ReportRuns = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/reporting/report_runs"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/reporting/report_runs/{report_run}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/reporting/report_runs",
        methodType: "list"
    })
});


/***/ }),

/***/ 24544:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ReportTypes = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ReportTypes = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/reporting/report_types/{report_type}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/reporting/report_types",
        methodType: "list"
    })
});


/***/ }),

/***/ 81738:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Reviews = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Reviews = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/reviews/{review}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/reviews",
        methodType: "list"
    }),
    approve: stripeMethod({
        method: "POST",
        fullPath: "/v1/reviews/{review}/approve"
    })
});


/***/ }),

/***/ 71457:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SetupAttempts = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.SetupAttempts = StripeResource_js_1.StripeResource.extend({
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/setup_attempts",
        methodType: "list"
    })
});


/***/ }),

/***/ 81338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SetupIntents = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.SetupIntents = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/setup_intents"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/setup_intents/{intent}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/setup_intents/{intent}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/setup_intents",
        methodType: "list"
    }),
    cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/setup_intents/{intent}/cancel"
    }),
    confirm: stripeMethod({
        method: "POST",
        fullPath: "/v1/setup_intents/{intent}/confirm"
    }),
    verifyMicrodeposits: stripeMethod({
        method: "POST",
        fullPath: "/v1/setup_intents/{intent}/verify_microdeposits"
    })
});


/***/ }),

/***/ 33793:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ShippingRates = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ShippingRates = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/shipping_rates"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/shipping_rates/{shipping_rate_token}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/shipping_rates/{shipping_rate_token}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/shipping_rates",
        methodType: "list"
    })
});


/***/ }),

/***/ 36348:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ScheduledQueryRuns = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ScheduledQueryRuns = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/sigma/scheduled_query_runs/{scheduled_query_run}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/sigma/scheduled_query_runs",
        methodType: "list"
    })
});


/***/ }),

/***/ 80812:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Sources = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Sources = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/sources"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/sources/{source}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/sources/{source}"
    }),
    listSourceTransactions: stripeMethod({
        method: "GET",
        fullPath: "/v1/sources/{source}/source_transactions",
        methodType: "list"
    }),
    verify: stripeMethod({
        method: "POST",
        fullPath: "/v1/sources/{source}/verify"
    })
});


/***/ }),

/***/ 63199:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SubscriptionItems = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.SubscriptionItems = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_items"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscription_items/{item}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_items/{item}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscription_items",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/subscription_items/{item}"
    }),
    createUsageRecord: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_items/{subscription_item}/usage_records"
    }),
    listUsageRecordSummaries: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscription_items/{subscription_item}/usage_record_summaries",
        methodType: "list"
    })
});


/***/ }),

/***/ 41055:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.SubscriptionSchedules = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.SubscriptionSchedules = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_schedules"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscription_schedules/{schedule}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_schedules/{schedule}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscription_schedules",
        methodType: "list"
    }),
    cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_schedules/{schedule}/cancel"
    }),
    release: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscription_schedules/{schedule}/release"
    })
});


/***/ }),

/***/ 12169:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Subscriptions = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Subscriptions = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscriptions"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscriptions/{subscription_exposed_id}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscriptions/{subscription_exposed_id}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscriptions",
        methodType: "list"
    }),
    cancel: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/subscriptions/{subscription_exposed_id}"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/subscriptions/{subscription_exposed_id}"
    }),
    deleteDiscount: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/subscriptions/{subscription_exposed_id}/discount"
    }),
    resume: stripeMethod({
        method: "POST",
        fullPath: "/v1/subscriptions/{subscription}/resume"
    }),
    search: stripeMethod({
        method: "GET",
        fullPath: "/v1/subscriptions/search",
        methodType: "search"
    })
});


/***/ }),

/***/ 32935:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.TaxCodes = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.TaxCodes = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax_codes/{id}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax_codes",
        methodType: "list"
    })
});


/***/ }),

/***/ 616:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.TaxRates = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.TaxRates = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/tax_rates"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax_rates/{tax_rate}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/tax_rates/{tax_rate}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax_rates",
        methodType: "list"
    })
});


/***/ }),

/***/ 38338:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Calculations = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Calculations = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/tax/calculations"
    }),
    listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax/calculations/{calculation}/line_items",
        methodType: "list"
    })
});


/***/ }),

/***/ 66763:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Transactions = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Transactions = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax/transactions/{transaction}"
    }),
    createFromCalculation: stripeMethod({
        method: "POST",
        fullPath: "/v1/tax/transactions/create_from_calculation"
    }),
    createReversal: stripeMethod({
        method: "POST",
        fullPath: "/v1/tax/transactions/create_reversal"
    }),
    listLineItems: stripeMethod({
        method: "GET",
        fullPath: "/v1/tax/transactions/{transaction}/line_items",
        methodType: "list"
    })
});


/***/ }),

/***/ 57704:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Configurations = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Configurations = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/configurations"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/configurations/{configuration}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/configurations/{configuration}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/configurations",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/terminal/configurations/{configuration}"
    })
});


/***/ }),

/***/ 85213:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ConnectionTokens = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ConnectionTokens = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/connection_tokens"
    })
});


/***/ }),

/***/ 81172:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Locations = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Locations = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/locations"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/locations/{location}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/locations/{location}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/locations",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/terminal/locations/{location}"
    })
});


/***/ }),

/***/ 3850:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Readers = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Readers = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/readers/{reader}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/terminal/readers",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/terminal/readers/{reader}"
    }),
    cancelAction: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/cancel_action"
    }),
    processPaymentIntent: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/process_payment_intent"
    }),
    processSetupIntent: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/process_setup_intent"
    }),
    refundPayment: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/refund_payment"
    }),
    setReaderDisplay: stripeMethod({
        method: "POST",
        fullPath: "/v1/terminal/readers/{reader}/set_reader_display"
    })
});


/***/ }),

/***/ 34874:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Customers = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Customers = StripeResource_js_1.StripeResource.extend({
    fundCashBalance: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/customers/{customer}/fund_cash_balance"
    })
});


/***/ }),

/***/ 55658:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Cards = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Cards = StripeResource_js_1.StripeResource.extend({
    deliverCard: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/deliver"
    }),
    failCard: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/fail"
    }),
    returnCard: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/return"
    }),
    shipCard: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/issuing/cards/{card}/shipping/ship"
    })
});


/***/ }),

/***/ 48008:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Refunds = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Refunds = StripeResource_js_1.StripeResource.extend({
    expire: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/refunds/{refund}/expire"
    })
});


/***/ }),

/***/ 10712:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Readers = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Readers = StripeResource_js_1.StripeResource.extend({
    presentPaymentMethod: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/terminal/readers/{reader}/present_payment_method"
    })
});


/***/ }),

/***/ 32145:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.TestClocks = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.TestClocks = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/test_clocks"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/test_helpers/test_clocks",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/test_helpers/test_clocks/{test_clock}"
    }),
    advance: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/test_clocks/{test_clock}/advance"
    })
});


/***/ }),

/***/ 85888:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.InboundTransfers = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.InboundTransfers = StripeResource_js_1.StripeResource.extend({
    fail: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/fail"
    }),
    returnInboundTransfer: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/return"
    }),
    succeed: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/inbound_transfers/{id}/succeed"
    })
});


/***/ }),

/***/ 52746:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.OutboundPayments = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.OutboundPayments = StripeResource_js_1.StripeResource.extend({
    fail: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/fail"
    }),
    post: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/post"
    }),
    returnOutboundPayment: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_payments/{id}/return"
    })
});


/***/ }),

/***/ 49295:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.OutboundTransfers = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.OutboundTransfers = StripeResource_js_1.StripeResource.extend({
    fail: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/fail"
    }),
    post: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/post"
    }),
    returnOutboundTransfer: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/outbound_transfers/{outbound_transfer}/return"
    })
});


/***/ }),

/***/ 19061:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ReceivedCredits = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ReceivedCredits = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/received_credits"
    })
});


/***/ }),

/***/ 9721:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ReceivedDebits = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ReceivedDebits = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/test_helpers/treasury/received_debits"
    })
});


/***/ }),

/***/ 98370:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Tokens = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Tokens = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/tokens"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/tokens/{token}"
    })
});


/***/ }),

/***/ 73670:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Topups = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Topups = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/topups"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/topups/{topup}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/topups/{topup}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/topups",
        methodType: "list"
    }),
    cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/topups/{topup}/cancel"
    })
});


/***/ }),

/***/ 67333:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Transfers = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Transfers = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/transfers"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/transfers/{transfer}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/transfers/{transfer}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/transfers",
        methodType: "list"
    }),
    createReversal: stripeMethod({
        method: "POST",
        fullPath: "/v1/transfers/{id}/reversals"
    }),
    listReversals: stripeMethod({
        method: "GET",
        fullPath: "/v1/transfers/{id}/reversals",
        methodType: "list"
    }),
    retrieveReversal: stripeMethod({
        method: "GET",
        fullPath: "/v1/transfers/{transfer}/reversals/{id}"
    }),
    updateReversal: stripeMethod({
        method: "POST",
        fullPath: "/v1/transfers/{transfer}/reversals/{id}"
    })
});


/***/ }),

/***/ 39054:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.CreditReversals = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.CreditReversals = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/credit_reversals"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/credit_reversals/{credit_reversal}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/credit_reversals",
        methodType: "list"
    })
});


/***/ }),

/***/ 38324:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.DebitReversals = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.DebitReversals = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/debit_reversals"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/debit_reversals/{debit_reversal}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/debit_reversals",
        methodType: "list"
    })
});


/***/ }),

/***/ 95709:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.FinancialAccounts = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.FinancialAccounts = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/financial_accounts"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/financial_accounts/{financial_account}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/financial_accounts/{financial_account}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/financial_accounts",
        methodType: "list"
    }),
    retrieveFeatures: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
    }),
    updateFeatures: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/financial_accounts/{financial_account}/features"
    })
});


/***/ }),

/***/ 2187:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.InboundTransfers = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.InboundTransfers = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/inbound_transfers"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/inbound_transfers/{id}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/inbound_transfers",
        methodType: "list"
    }),
    cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/inbound_transfers/{inbound_transfer}/cancel"
    })
});


/***/ }),

/***/ 6697:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.OutboundPayments = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.OutboundPayments = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/outbound_payments"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/outbound_payments/{id}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/outbound_payments",
        methodType: "list"
    }),
    cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/outbound_payments/{id}/cancel"
    })
});


/***/ }),

/***/ 72778:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.OutboundTransfers = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.OutboundTransfers = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/outbound_transfers"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/outbound_transfers",
        methodType: "list"
    }),
    cancel: stripeMethod({
        method: "POST",
        fullPath: "/v1/treasury/outbound_transfers/{outbound_transfer}/cancel"
    })
});


/***/ }),

/***/ 38339:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ReceivedCredits = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ReceivedCredits = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/received_credits/{id}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/received_credits",
        methodType: "list"
    })
});


/***/ }),

/***/ 70293:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.ReceivedDebits = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.ReceivedDebits = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/received_debits/{id}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/received_debits",
        methodType: "list"
    })
});


/***/ }),

/***/ 47475:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.TransactionEntries = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.TransactionEntries = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/transaction_entries/{id}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/transaction_entries",
        methodType: "list"
    })
});


/***/ }),

/***/ 90302:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.Transactions = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.Transactions = StripeResource_js_1.StripeResource.extend({
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/transactions/{id}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/treasury/transactions",
        methodType: "list"
    })
});


/***/ }),

/***/ 72025:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// File generated from our OpenAPI spec
Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.WebhookEndpoints = void 0;
const StripeResource_js_1 = __webpack_require__(68449);
const stripeMethod = StripeResource_js_1.StripeResource.method;
exports.WebhookEndpoints = StripeResource_js_1.StripeResource.extend({
    create: stripeMethod({
        method: "POST",
        fullPath: "/v1/webhook_endpoints"
    }),
    retrieve: stripeMethod({
        method: "GET",
        fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
    }),
    update: stripeMethod({
        method: "POST",
        fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
    }),
    list: stripeMethod({
        method: "GET",
        fullPath: "/v1/webhook_endpoints",
        methodType: "list"
    }),
    del: stripeMethod({
        method: "DELETE",
        fullPath: "/v1/webhook_endpoints/{webhook_endpoint}"
    })
});


/***/ }),

/***/ 63685:
/***/ ((module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
const NodePlatformFunctions_js_1 = __webpack_require__(62134);
const stripe_core_js_1 = __webpack_require__(22831);
const Stripe = (0, stripe_core_js_1.createStripe)(new NodePlatformFunctions_js_1.NodePlatformFunctions());
module.exports = Stripe;
// expose constructor as a named property to enable mocking with Sinon.JS
module.exports.Stripe = Stripe;
// Allow use with the TypeScript compiler without `esModuleInterop`.
// We may also want to add `Object.defineProperty(exports, "__esModule", {value: true});` in the future, so that Babel users will use the `default` version.
module.exports["default"] = Stripe;


/***/ }),

/***/ 22831:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.createStripe = void 0;
const _Error = __webpack_require__(98071);
const apiVersion = __webpack_require__(47012);
const resources = __webpack_require__(44231);
const HttpClient_js_1 = __webpack_require__(82543);
const utils_js_1 = __webpack_require__(72566);
const CryptoProvider_js_1 = __webpack_require__(32436);
const RequestSender_js_1 = __webpack_require__(62361);
const StripeResource_js_1 = __webpack_require__(68449);
const Webhooks_js_1 = __webpack_require__(22510);
const DEFAULT_HOST = "api.stripe.com";
const DEFAULT_PORT = "443";
const DEFAULT_BASE_PATH = "/v1/";
const DEFAULT_API_VERSION = apiVersion.ApiVersion;
const DEFAULT_TIMEOUT = 80000;
const MAX_NETWORK_RETRY_DELAY_SEC = 2;
const INITIAL_NETWORK_RETRY_DELAY_SEC = 0.5;
const APP_INFO_PROPERTIES = [
    "name",
    "version",
    "url",
    "partner_id"
];
const ALLOWED_CONFIG_PROPERTIES = [
    "apiVersion",
    "typescript",
    "maxNetworkRetries",
    "httpAgent",
    "httpClient",
    "timeout",
    "host",
    "port",
    "protocol",
    "telemetry",
    "appInfo",
    "stripeAccount"
];
const defaultRequestSenderFactory = (stripe)=>new RequestSender_js_1.RequestSender(stripe, StripeResource_js_1.StripeResource.MAX_BUFFERED_REQUEST_METRICS);
function createStripe(platformFunctions, requestSender = defaultRequestSenderFactory) {
    Stripe.PACKAGE_VERSION = "12.12.0";
    Stripe.USER_AGENT = Object.assign({
        bindings_version: Stripe.PACKAGE_VERSION,
        lang: "node",
        publisher: "stripe",
        uname: null,
        typescript: false
    }, (0, utils_js_1.determineProcessUserAgentProperties)());
    Stripe.StripeResource = StripeResource_js_1.StripeResource;
    Stripe.resources = resources;
    Stripe.HttpClient = HttpClient_js_1.HttpClient;
    Stripe.HttpClientResponse = HttpClient_js_1.HttpClientResponse;
    Stripe.CryptoProvider = CryptoProvider_js_1.CryptoProvider;
    function Stripe(key, config = {}) {
        if (!(this instanceof Stripe)) {
            return new Stripe(key, config);
        }
        const props = this._getPropsFromConfig(config);
        this._platformFunctions = platformFunctions;
        Object.defineProperty(this, "_emitter", {
            value: this._platformFunctions.createEmitter(),
            enumerable: false,
            configurable: false,
            writable: false
        });
        this.VERSION = Stripe.PACKAGE_VERSION;
        this.on = this._emitter.on.bind(this._emitter);
        this.once = this._emitter.once.bind(this._emitter);
        this.off = this._emitter.removeListener.bind(this._emitter);
        if (props.protocol && props.protocol !== "https" && (!props.host || /\.stripe\.com$/.test(props.host))) {
            throw new Error("The `https` protocol must be used when sending requests to `*.stripe.com`");
        }
        const agent = props.httpAgent || null;
        this._api = {
            auth: null,
            host: props.host || DEFAULT_HOST,
            port: props.port || DEFAULT_PORT,
            protocol: props.protocol || "https",
            basePath: DEFAULT_BASE_PATH,
            version: props.apiVersion || DEFAULT_API_VERSION,
            timeout: (0, utils_js_1.validateInteger)("timeout", props.timeout, DEFAULT_TIMEOUT),
            maxNetworkRetries: (0, utils_js_1.validateInteger)("maxNetworkRetries", props.maxNetworkRetries, 0),
            agent: agent,
            httpClient: props.httpClient || (agent ? this._platformFunctions.createNodeHttpClient(agent) : this._platformFunctions.createDefaultHttpClient()),
            dev: false,
            stripeAccount: props.stripeAccount || null
        };
        const typescript = props.typescript || false;
        if (typescript !== Stripe.USER_AGENT.typescript) {
            // The mutation here is uncomfortable, but likely fastest;
            // serializing the user agent involves shelling out to the system,
            // and given some users may instantiate the library many times without switching between TS and non-TS,
            // we only want to incur the performance hit when that actually happens.
            Stripe.USER_AGENT.typescript = typescript;
        }
        if (props.appInfo) {
            this._setAppInfo(props.appInfo);
        }
        this._prepResources();
        this._setApiKey(key);
        this.errors = _Error;
        this.webhooks = (0, Webhooks_js_1.createWebhooks)(platformFunctions);
        this._prevRequestMetrics = [];
        this._enableTelemetry = props.telemetry !== false;
        this._requestSender = requestSender(this);
        // Expose StripeResource on the instance too
        // @ts-ignore
        this.StripeResource = Stripe.StripeResource;
    }
    Stripe.errors = _Error;
    Stripe.webhooks = Webhooks_js_1.createWebhooks;
    Stripe.createNodeHttpClient = platformFunctions.createNodeHttpClient;
    /**
     * Creates an HTTP client for issuing Stripe API requests which uses the Web
     * Fetch API.
     *
     * A fetch function can optionally be passed in as a parameter. If none is
     * passed, will default to the default `fetch` function in the global scope.
     */ Stripe.createFetchHttpClient = platformFunctions.createFetchHttpClient;
    /**
     * Create a CryptoProvider which uses the built-in Node crypto libraries for
     * its crypto operations.
     */ Stripe.createNodeCryptoProvider = platformFunctions.createNodeCryptoProvider;
    /**
     * Creates a CryptoProvider which uses the Subtle Crypto API from the Web
     * Crypto API spec for its crypto operations.
     *
     * A SubtleCrypto interface can optionally be passed in as a parameter. If none
     * is passed, will default to the default `crypto.subtle` object in the global
     * scope.
     */ Stripe.createSubtleCryptoProvider = platformFunctions.createSubtleCryptoProvider;
    Stripe.prototype = {
        // Properties are set in the constructor above
        _appInfo: undefined,
        on: null,
        off: null,
        once: null,
        VERSION: null,
        StripeResource: null,
        webhooks: null,
        errors: null,
        _api: null,
        _prevRequestMetrics: null,
        _emitter: null,
        _enableTelemetry: null,
        _requestSender: null,
        _platformFunctions: null,
        /**
         * @private
         */ _setApiKey (key) {
            if (key) {
                this._setApiField("auth", `Bearer ${key}`);
            }
        },
        /**
         * @private
         * This may be removed in the future.
         */ _setAppInfo (info) {
            if (info && typeof info !== "object") {
                throw new Error("AppInfo must be an object.");
            }
            if (info && !info.name) {
                throw new Error("AppInfo.name is required");
            }
            info = info || {};
            this._appInfo = APP_INFO_PROPERTIES.reduce((accum, prop)=>{
                if (typeof info[prop] == "string") {
                    accum = accum || {};
                    accum[prop] = info[prop];
                }
                return accum;
            }, // @ts-ignore
            undefined);
        },
        /**
         * @private
         * This may be removed in the future.
         */ _setApiField (key, value) {
            this._api[key] = value;
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         */ getApiField (key) {
            return this._api[key];
        },
        setClientId (clientId) {
            this._clientId = clientId;
        },
        getClientId () {
            return this._clientId;
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         */ getConstant: (c)=>{
            switch(c){
                case "DEFAULT_HOST":
                    return DEFAULT_HOST;
                case "DEFAULT_PORT":
                    return DEFAULT_PORT;
                case "DEFAULT_BASE_PATH":
                    return DEFAULT_BASE_PATH;
                case "DEFAULT_API_VERSION":
                    return DEFAULT_API_VERSION;
                case "DEFAULT_TIMEOUT":
                    return DEFAULT_TIMEOUT;
                case "MAX_NETWORK_RETRY_DELAY_SEC":
                    return MAX_NETWORK_RETRY_DELAY_SEC;
                case "INITIAL_NETWORK_RETRY_DELAY_SEC":
                    return INITIAL_NETWORK_RETRY_DELAY_SEC;
            }
            return Stripe[c];
        },
        getMaxNetworkRetries () {
            return this.getApiField("maxNetworkRetries");
        },
        /**
         * @private
         * This may be removed in the future.
         */ _setApiNumberField (prop, n, defaultVal) {
            const val = (0, utils_js_1.validateInteger)(prop, n, defaultVal);
            this._setApiField(prop, val);
        },
        getMaxNetworkRetryDelay () {
            return MAX_NETWORK_RETRY_DELAY_SEC;
        },
        getInitialNetworkRetryDelay () {
            return INITIAL_NETWORK_RETRY_DELAY_SEC;
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         *
         * Gets a JSON version of a User-Agent and uses a cached version for a slight
         * speed advantage.
         */ getClientUserAgent (cb) {
            return this.getClientUserAgentSeeded(Stripe.USER_AGENT, cb);
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         *
         * Gets a JSON version of a User-Agent by encoding a seeded object and
         * fetching a uname from the system.
         */ getClientUserAgentSeeded (seed, cb) {
            this._platformFunctions.getUname().then((uname)=>{
                var _a;
                const userAgent = {};
                for(const field in seed){
                    userAgent[field] = encodeURIComponent((_a = seed[field]) !== null && _a !== void 0 ? _a : "null");
                }
                // URI-encode in case there are unusual characters in the system's uname.
                userAgent.uname = encodeURIComponent(uname || "UNKNOWN");
                const client = this.getApiField("httpClient");
                if (client) {
                    userAgent.httplib = encodeURIComponent(client.getClientName());
                }
                if (this._appInfo) {
                    userAgent.application = this._appInfo;
                }
                cb(JSON.stringify(userAgent));
            });
        },
        /**
         * @private
         * Please open or upvote an issue at github.com/stripe/stripe-node
         * if you use this, detailing your use-case.
         *
         * It may be deprecated and removed in the future.
         */ getAppInfoAsString () {
            if (!this._appInfo) {
                return "";
            }
            let formatted = this._appInfo.name;
            if (this._appInfo.version) {
                formatted += `/${this._appInfo.version}`;
            }
            if (this._appInfo.url) {
                formatted += ` (${this._appInfo.url})`;
            }
            return formatted;
        },
        getTelemetryEnabled () {
            return this._enableTelemetry;
        },
        /**
         * @private
         * This may be removed in the future.
         */ _prepResources () {
            for(const name in resources){
                // @ts-ignore
                this[(0, utils_js_1.pascalToCamelCase)(name)] = new resources[name](this);
            }
        },
        /**
         * @private
         * This may be removed in the future.
         */ _getPropsFromConfig (config) {
            // If config is null or undefined, just bail early with no props
            if (!config) {
                return {};
            }
            // config can be an object or a string
            const isString = typeof config === "string";
            const isObject = config === Object(config) && !Array.isArray(config);
            if (!isObject && !isString) {
                throw new Error("Config must either be an object or a string");
            }
            // If config is a string, we assume the old behavior of passing in a string representation of the api version
            if (isString) {
                return {
                    apiVersion: config
                };
            }
            // If config is an object, we assume the new behavior and make sure it doesn't contain any unexpected values
            const values = Object.keys(config).filter((value)=>!ALLOWED_CONFIG_PROPERTIES.includes(value));
            if (values.length > 0) {
                throw new Error(`Config object may only contain the following: ${ALLOWED_CONFIG_PROPERTIES.join(", ")}`);
            }
            return config;
        }
    };
    return Stripe;
}
exports.createStripe = createStripe;


/***/ }),

/***/ 72566:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({
    value: true
}));
exports.concat = exports.determineProcessUserAgentProperties = exports.validateInteger = exports.flattenAndStringify = exports.isObject = exports.emitWarning = exports.pascalToCamelCase = exports.callbackifyPromiseWithTimeout = exports.normalizeHeader = exports.normalizeHeaders = exports.removeNullish = exports.protoExtend = exports.getOptionsFromArgs = exports.getDataFromArgs = exports.extractUrlParams = exports.makeURLInterpolator = exports.stringifyRequestData = exports.isOptionsHash = void 0;
const qs = __webpack_require__(36931);
const OPTIONS_KEYS = [
    "apiKey",
    "idempotencyKey",
    "stripeAccount",
    "apiVersion",
    "maxNetworkRetries",
    "timeout",
    "host"
];
function isOptionsHash(o) {
    return o && typeof o === "object" && OPTIONS_KEYS.some((prop)=>Object.prototype.hasOwnProperty.call(o, prop));
}
exports.isOptionsHash = isOptionsHash;
/**
 * Stringifies an Object, accommodating nested objects
 * (forming the conventional key 'parent[child]=value')
 */ function stringifyRequestData(data) {
    return qs.stringify(data, {
        serializeDate: (d)=>Math.floor(d.getTime() / 1000).toString()
    })// Don't use strict form encoding by changing the square bracket control
    // characters back to their literals. This is fine by the server, and
    // makes these parameter strings easier to read.
    .replace(/%5B/g, "[").replace(/%5D/g, "]");
}
exports.stringifyRequestData = stringifyRequestData;
/**
 * Outputs a new function with interpolated object property values.
 * Use like so:
 *   const fn = makeURLInterpolator('some/url/{param1}/{param2}');
 *   fn({ param1: 123, param2: 456 }); // => 'some/url/123/456'
 */ exports.makeURLInterpolator = (()=>{
    const rc = {
        "\n": "\\n",
        '"': '\\"',
        "\u2028": "\\u2028",
        "\u2029": "\\u2029"
    };
    return (str)=>{
        const cleanString = str.replace(/["\n\r\u2028\u2029]/g, ($0)=>rc[$0]);
        return (outputs)=>{
            return cleanString.replace(/\{([\s\S]+?)\}/g, ($0, $1)=>// @ts-ignore
                encodeURIComponent(outputs[$1] || ""));
        };
    };
})();
function extractUrlParams(path) {
    const params = path.match(/\{\w+\}/g);
    if (!params) {
        return [];
    }
    return params.map((param)=>param.replace(/[{}]/g, ""));
}
exports.extractUrlParams = extractUrlParams;
/**
 * Return the data argument from a list of arguments
 *
 * @param {object[]} args
 * @returns {object}
 */ function getDataFromArgs(args) {
    if (!Array.isArray(args) || !args[0] || typeof args[0] !== "object") {
        return {};
    }
    if (!isOptionsHash(args[0])) {
        return args.shift();
    }
    const argKeys = Object.keys(args[0]);
    const optionKeysInArgs = argKeys.filter((key)=>OPTIONS_KEYS.includes(key));
    // In some cases options may be the provided as the first argument.
    // Here we're detecting a case where there are two distinct arguments
    // (the first being args and the second options) and with known
    // option keys in the first so that we can warn the user about it.
    if (optionKeysInArgs.length > 0 && optionKeysInArgs.length !== argKeys.length) {
        emitWarning(`Options found in arguments (${optionKeysInArgs.join(", ")}). Did you mean to pass an options object? See https://github.com/stripe/stripe-node/wiki/Passing-Options.`);
    }
    return {};
}
exports.getDataFromArgs = getDataFromArgs;
/**
 * Return the options hash from a list of arguments
 */ function getOptionsFromArgs(args) {
    const opts = {
        auth: null,
        host: null,
        headers: {},
        settings: {}
    };
    if (args.length > 0) {
        const arg = args[args.length - 1];
        if (typeof arg === "string") {
            opts.auth = args.pop();
        } else if (isOptionsHash(arg)) {
            const params = Object.assign({}, args.pop());
            const extraKeys = Object.keys(params).filter((key)=>!OPTIONS_KEYS.includes(key));
            if (extraKeys.length) {
                emitWarning(`Invalid options found (${extraKeys.join(", ")}); ignoring.`);
            }
            if (params.apiKey) {
                opts.auth = params.apiKey;
            }
            if (params.idempotencyKey) {
                opts.headers["Idempotency-Key"] = params.idempotencyKey;
            }
            if (params.stripeAccount) {
                opts.headers["Stripe-Account"] = params.stripeAccount;
            }
            if (params.apiVersion) {
                opts.headers["Stripe-Version"] = params.apiVersion;
            }
            if (Number.isInteger(params.maxNetworkRetries)) {
                opts.settings.maxNetworkRetries = params.maxNetworkRetries;
            }
            if (Number.isInteger(params.timeout)) {
                opts.settings.timeout = params.timeout;
            }
            if (params.host) {
                opts.host = params.host;
            }
        }
    }
    return opts;
}
exports.getOptionsFromArgs = getOptionsFromArgs;
/**
 * Provide simple "Class" extension mechanism.
 * <!-- Public API accessible via Stripe.StripeResource.extend -->
 */ function protoExtend(sub) {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const Super = this;
    const Constructor = Object.prototype.hasOwnProperty.call(sub, "constructor") ? sub.constructor : function(...args) {
        Super.apply(this, args);
    };
    // This initialization logic is somewhat sensitive to be compatible with
    // divergent JS implementations like the one found in Qt. See here for more
    // context:
    //
    // https://github.com/stripe/stripe-node/pull/334
    Object.assign(Constructor, Super);
    Constructor.prototype = Object.create(Super.prototype);
    Object.assign(Constructor.prototype, sub);
    return Constructor;
}
exports.protoExtend = protoExtend;
/**
 * Remove empty values from an object
 */ function removeNullish(obj) {
    if (typeof obj !== "object") {
        throw new Error("Argument must be an object");
    }
    return Object.keys(obj).reduce((result, key)=>{
        if (obj[key] != null) {
            result[key] = obj[key];
        }
        return result;
    }, {});
}
exports.removeNullish = removeNullish;
/**
 * Normalize standard HTTP Headers:
 * {'foo-bar': 'hi'}
 * becomes
 * {'Foo-Bar': 'hi'}
 */ function normalizeHeaders(obj) {
    if (!(obj && typeof obj === "object")) {
        return obj;
    }
    return Object.keys(obj).reduce((result, header)=>{
        result[normalizeHeader(header)] = obj[header];
        return result;
    }, {});
}
exports.normalizeHeaders = normalizeHeaders;
/**
 * Stolen from https://github.com/marten-de-vries/header-case-normalizer/blob/master/index.js#L36-L41
 * without the exceptions which are irrelevant to us.
 */ function normalizeHeader(header) {
    return header.split("-").map((text)=>text.charAt(0).toUpperCase() + text.substr(1).toLowerCase()).join("-");
}
exports.normalizeHeader = normalizeHeader;
function callbackifyPromiseWithTimeout(promise, callback) {
    if (callback) {
        // Ensure callback is called outside of promise stack.
        return promise.then((res)=>{
            setTimeout(()=>{
                callback(null, res);
            }, 0);
        }, (err)=>{
            setTimeout(()=>{
                callback(err, null);
            }, 0);
        });
    }
    return promise;
}
exports.callbackifyPromiseWithTimeout = callbackifyPromiseWithTimeout;
/**
 * Allow for special capitalization cases (such as OAuth)
 */ function pascalToCamelCase(name) {
    if (name === "OAuth") {
        return "oauth";
    } else {
        return name[0].toLowerCase() + name.substring(1);
    }
}
exports.pascalToCamelCase = pascalToCamelCase;
function emitWarning(warning) {
    if (typeof process.emitWarning !== "function") {
        return console.warn(`Stripe: ${warning}`); /* eslint-disable-line no-console */ 
    }
    return process.emitWarning(warning, "Stripe");
}
exports.emitWarning = emitWarning;
function isObject(obj) {
    const type = typeof obj;
    return (type === "function" || type === "object") && !!obj;
}
exports.isObject = isObject;
// For use in multipart requests
function flattenAndStringify(data) {
    const result = {};
    const step = (obj, prevKey)=>{
        Object.keys(obj).forEach((key)=>{
            // @ts-ignore
            const value = obj[key];
            const newKey = prevKey ? `${prevKey}[${key}]` : key;
            if (isObject(value)) {
                if (!(value instanceof Uint8Array) && !Object.prototype.hasOwnProperty.call(value, "data")) {
                    // Non-buffer non-file Objects are recursively flattened
                    return step(value, newKey);
                } else {
                    // Buffers and file objects are stored without modification
                    result[newKey] = value;
                }
            } else {
                // Primitives are converted to strings
                result[newKey] = String(value);
            }
        });
    };
    step(data, null);
    return result;
}
exports.flattenAndStringify = flattenAndStringify;
function validateInteger(name, n, defaultVal) {
    if (!Number.isInteger(n)) {
        if (defaultVal !== undefined) {
            return defaultVal;
        } else {
            throw new Error(`${name} must be an integer`);
        }
    }
    return n;
}
exports.validateInteger = validateInteger;
function determineProcessUserAgentProperties() {
    return typeof process === "undefined" ? {} : {
        lang_version: process.version,
        platform: process.platform
    };
}
exports.determineProcessUserAgentProperties = determineProcessUserAgentProperties;
/**
 * Joins an array of Uint8Arrays into a single Uint8Array
 */ function concat(arrays) {
    const totalLength = arrays.reduce((len, array)=>len + array.length, 0);
    const merged = new Uint8Array(totalLength);
    let offset = 0;
    arrays.forEach((array)=>{
        merged.set(array, offset);
        offset += array.length;
    });
    return merged;
}
exports.concat = concat;


/***/ })

};
;