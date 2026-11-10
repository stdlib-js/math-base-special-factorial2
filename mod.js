// Copyright (c) 2026 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function n(n){return function(n){return r(n)===n}(n/2)}var t=Number.POSITIVE_INFINITY;function u(u){var e,f,o,a,i;if((i=u)!=i||!function(n){return r(n)===n&&n>=0}(u))return NaN;if(u>300)return t;if(0===(o=0|u)|0||1===o|0)return 1;for(e=n(o)?2:3,f=1,a=0|o;a>=e;a-=2)f*=0|a;return f}export{u as default};
//# sourceMappingURL=mod.js.map
