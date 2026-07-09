"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var v=s(function(l,u){
var n=require('@stdlib/math-base-assert-is-nan/dist'),f=require('@stdlib/math-base-assert-is-nonnegative-integer/dist'),o=require('@stdlib/math-base-assert-is-even/dist'),q=require('@stdlib/constants-float64-pinf/dist'),N=require('@stdlib/constants-float64-max-nth-double-factorial/dist');function c(e){var r,i,a,t;if(n(e)||!f(e))return NaN;if(e>N)return q;if(a=e|0,a===0|0||a===1|0)return 1;for(o(a)?r=2:r=3,i=1,t=a|0;t>=r;t-=2)i*=t|0;return i}u.exports=c
});var A=v();module.exports=A;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
