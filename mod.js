// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var r=Math.floor;function n(n){return r(n)===n}var t=Number.POSITIVE_INFINITY;function u(r){var u,e,f,a,i;if((i=r)!=i)return NaN;if(r>301)return t;if(r<0||!1===n(r))return NaN;if(0===(f=0|r)|0||1===f|0)return 1;for(u=function(r){return n(r/2)}(f)?2:3,e=1,a=0|f;a>=u;a-=2)e*=0|a;return e}export{u as default};
//# sourceMappingURL=mod.js.map
