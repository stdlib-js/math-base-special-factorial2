// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import s from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-nan@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-integer@v0.2.2-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/math-base-assert-is-even@v0.2.1-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.2.1-esm/index.mjs";function i(i){var n,m,a,d;if(s(i))return NaN;if(i>301)return r;if(i<0||!1===t(i))return NaN;if(0===(a=0|i)|0||1===a|0)return 1;for(n=e(a)?2:3,m=1,d=0|a;d>=n;d-=2)m*=0|d;return m}export{i as default};
//# sourceMappingURL=index.mjs.map
