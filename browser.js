// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var e,r;e=this,r=function(){"use strict";var e=Math.floor;function r(r){return e(r)===r}var n=Number.POSITIVE_INFINITY;return function(e){var t,f,o,i,u;if((u=e)!=u)return NaN;if(e>=301)return n;if(e<0||!1===r(e))return NaN;if(0==(o=0|e)|0||1===o|0)return 1;for(t=function(e){return r(e/2)}(o)?2:3,f=1,i=0|o;i>=t;i-=2)f*=0|i;return f}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(e="undefined"!=typeof globalThis?globalThis:e||self).factorial2=r();
//# sourceMappingURL=browser.js.map
