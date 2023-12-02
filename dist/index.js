"use strict";var v=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var s=v(function(I,u){
var f=require('@stdlib/math-base-assert-is-nan/dist'),n=require('@stdlib/math-base-assert-is-integer/dist'),o=require('@stdlib/math-base-assert-is-even/dist'),q=require('@stdlib/constants-float64-pinf/dist'),N=301;function c(e){var r,t,i,a;if(f(e))return NaN;if(e>N)return q;if(e<0||n(e)===!1)return NaN;if(i=e|0,i===0|0||i===1|0)return 1;for(o(i)?r=2:r=3,t=1,a=i|0;a>=r;a-=2)t*=a|0;return t}u.exports=c
});var l=s();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
