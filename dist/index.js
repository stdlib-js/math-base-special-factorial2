"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var v=s(function(l,u){
var n=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),o=require('@stdlib/math-base-assert-is-even/dist'),q=require('@stdlib/constants-float64-pinf/dist'),N=require('@stdlib/constants-float64-max-nth-double-factorial/dist');function c(e){var r,t,i,a;if(n(e)||!f(e))return NaN;if(e>N)return q;if(i=e|0,i===0|0||i===1|0)return 1;for(o(i)?r=2:r=3,t=1,a=i|0;a>=r;a-=2)t*=a|0;return t}u.exports=c
});var A=v();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
