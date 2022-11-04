// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r=Object.defineProperty,n=Object.prototype,e=n.toString,o=n.__defineGetter__,u=n.__defineSetter__,a=n.__lookupGetter__,i=n.__lookupSetter__;var f=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?r:function(t,r,f){var c,l,y,p;if("object"!=typeof t||null===t||"[object Array]"===e.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof f||null===f||"[object Array]"===e.call(f))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+f+"`.");if((l="value"in f)&&(a.call(t,r)||i.call(t,r)?(c=t.__proto__,t.__proto__=n,delete t[r],t[r]=f.value,t.__proto__=c):t[r]=f.value),y="get"in f,p="set"in f,l&&(y||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return y&&o&&o.call(t,r,f.get),p&&u&&u.call(t,r,f.set),t};function c(t,r,n){f(t,r,{configurable:!1,enumerable:!1,writable:!1,value:n})}function l(t,r,n){f(t,r,{configurable:!1,enumerable:!1,get:n})}function y(t){return"number"==typeof t}var p="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function v(){return p&&"symbol"==typeof Symbol.toStringTag}var b=Object.prototype.toString;var s=Object.prototype.hasOwnProperty;var N="function"==typeof Symbol?Symbol.toStringTag:"";var m=v()?function(t){var r,n,e,o,u;if(null==t)return b.call(t);n=t[N],u=N,r=null!=(o=t)&&s.call(o,u);try{t[N]=void 0}catch(r){return b.call(t)}return e=b.call(t),r?t[N]=n:delete t[N],e}:function(t){return b.call(t)},d=Number,h=d.prototype.toString;var w=v();function A(t){return"object"==typeof t&&(t instanceof d||(w?function(t){try{return h.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function _(t){return y(t)||A(t)}function g(t){return y(t)&&t>0}function U(t){return A(t)&&t.valueOf()>0}function j(t){return g(t)||U(t)}function O(t){return t!=t}c(_,"isPrimitive",y),c(_,"isObject",A),c(j,"isPrimitive",g),c(j,"isObject",U);var I="function"==typeof Uint32Array;var S="function"==typeof Uint32Array?Uint32Array:null;var E,F="function"==typeof Uint32Array?Uint32Array:void 0;E=function(){var t,r,n;if("function"!=typeof S)return!1;try{r=new S(r=[1,3.14,-3.14,4294967296,4294967297]),n=r,t=(I&&n instanceof Uint32Array||"[object Uint32Array]"===m(n))&&1===r[0]&&3===r[1]&&4294967293===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?F:function(){throw new Error("not implemented")};var T=E,H="function"==typeof Float64Array;var P="function"==typeof Float64Array?Float64Array:null;var G,V="function"==typeof Float64Array?Float64Array:void 0;G=function(){var t,r,n;if("function"!=typeof P)return!1;try{r=new P([1,3.14,-3.14,NaN]),n=r,t=(H&&n instanceof Float64Array||"[object Float64Array]"===m(n))&&1===r[0]&&3.14===r[1]&&-3.14===r[2]&&r[3]!=r[3]}catch(r){t=!1}return t}()?V:function(){throw new Error("not implemented")};var k=G,L="function"==typeof Uint8Array;var M="function"==typeof Uint8Array?Uint8Array:null;var W,x="function"==typeof Uint8Array?Uint8Array:void 0;W=function(){var t,r,n;if("function"!=typeof M)return!1;try{r=new M(r=[1,3.14,-3.14,256,257]),n=r,t=(L&&n instanceof Uint8Array||"[object Uint8Array]"===m(n))&&1===r[0]&&3===r[1]&&253===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?x:function(){throw new Error("not implemented")};var C=W,R="function"==typeof Uint16Array;var Y="function"==typeof Uint16Array?Uint16Array:null;var q,z="function"==typeof Uint16Array?Uint16Array:void 0;q=function(){var t,r,n;if("function"!=typeof Y)return!1;try{r=new Y(r=[1,3.14,-3.14,65536,65537]),n=r,t=(R&&n instanceof Uint16Array||"[object Uint16Array]"===m(n))&&1===r[0]&&3===r[1]&&65533===r[2]&&0===r[3]&&1===r[4]}catch(r){t=!1}return t}()?z:function(){throw new Error("not implemented")};var B,D={uint16:q,uint8:C};(B=new D.uint16(1))[0]=4660;var J=52===new D.uint8(B.buffer)[0],K=!0===J?1:0,Q=new k(1),X=new T(Q.buffer);function Z(t){return Q[0]=t,X[K]}var $=!0===J?1:0,tt=new k(1),rt=new T(tt.buffer);function nt(t,r){return tt[0]=t,rt[$]=r>>>0,tt[0]}var et=d.NEGATIVE_INFINITY;var ot=.6931471803691238,ut=1.9082149292705877e-10;function at(t){var r,n,e,o,u,a,i,f,c,l,y,p;return 0===t?et:O(t)||t<0?NaN:(u=0,(n=Z(t))<1048576&&(u-=54,n=Z(t*=0x40000000000000)),n>=2146435072?t+t:(u+=(n>>20)-1023|0,u+=(f=(n&=1048575)+614244&1048576|0)>>20|0,i=(t=nt(t,n|1072693248^f))-1,(1048575&2+n)<3?0===i?0===u?0:u*ot+u*ut:(a=i*i*(.5-.3333333333333333*i),0===u?i-a:u*ot-(a-u*ut-i)):(f=n-398458|0,c=440401-n|0,o=(y=(p=(l=i/(2+i))*l)*p)*function(t){return 0===t?.3999999999940942:.3999999999940942+t*(.22222198432149784+.15313837699209373*t)}(y),e=p*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.2857142874366239+t*(.1818357216161805+.14798198605116586*t))}(y),a=e+o,(f|=c)>0?(r=.5*i*i,0===u?i-(r-l*(r+a)):u*ot-(r-(l*(r+a)+u*ut)-i)):0===u?i-l*(i-a):u*ot-(l*(i-a)-u*ut-i))))}var it=Math.floor,ft=Math.ceil;function ct(t){return t<0?ft(t):it(t)}var lt,yt,pt=Number.POSITIVE_INFINITY;function vt(t){return t===pt||t===et}!0===J?(lt=1,yt=0):(lt=0,yt=1);var bt,st,Nt={HIGH:lt,LOW:yt},mt=new k(1),dt=new T(mt.buffer),ht=Nt.HIGH,wt=Nt.LOW;function At(t,r){return mt[0]=r,t[0]=dt[ht],t[1]=dt[wt],t}function _t(t,r){return 1===arguments.length?At([0,0],t):At(t,r)}!0===J?(bt=1,st=0):(bt=0,st=1);var gt={HIGH:bt,LOW:st},Ut=new k(1),jt=new T(Ut.buffer),Ot=gt.HIGH,It=gt.LOW;function St(t,r){return jt[Ot]=t,jt[It]=r,Ut[0]}var Et=[0,0];function Ft(t,r,n,e){return O(t)||vt(t)?(r[e]=t,r[e+n]=0,r):0!==t&&function(t){return Math.abs(t)}(t)<22250738585072014e-324?(r[e]=4503599627370496*t,r[e+n]=-52,r):(r[e]=t,r[e+n]=0,r)}c((function(t){return Ft(t,[0,0],1,0)}),"assign",Ft);var Tt=[0,0],Ht=[0,0];function Pt(t,r){var n,e,o,u,a;return 0===r||0===t||O(t)||vt(t)?t:(Ft(t,Tt,1,0),r+=Tt[1],r+=function(t){var r=Z(t);return(r=(2146435072&r)>>>20)-1023|0}(t=Tt[0]),r<-1074?(o=t,_t(Et,0),u=Et[0],u&=2147483647,a=Z(o),St(u|=a&=2147483648,Et[1])):r>1023?t<0?et:pt:(r<=-1023?(r+=52,e=2220446049250313e-31):e=1,_t(Ht,t),n=Ht[0],n&=2148532223,e*St(n|=r+1023<<20,Ht[1])))}function Gt(t){var r;return O(t)||t===pt?t:t===et?0:t>709.782712893384?pt:t<-745.1332191019411?0:t>-3.725290298461914e-9&&t<3.725290298461914e-9?1+t:function(t,r,n){var e,o,u,a;return Pt(1-(r-(e=t-r)*(u=e-(o=e*e)*(0===(a=o)?.16666666666666602:.16666666666666602+a*(a*(6613756321437934e-20+a*(4.1381367970572385e-8*a-16533902205465252e-22))-.0027777777777015593)))/(2-u)-t),n)}(t-.6931471803691238*(r=ct(t<0?1.4426950408889634*t-.5:1.4426950408889634*t+.5)),1.9082149292705877e-10*r,r)}function Vt(t,r){return O(r)||r<0||r===pt?NaN:t<0?0:1-Gt(-r*t)}function kt(t){return function(){return t}}c(Vt,"factory",(function(t){return O(t)||t<0||t===pt?kt(NaN):function(r){if(r<0)return 0;return 1-Gt(-t*r)}}));var Lt=.6931471803691238,Mt=1.9082149292705877e-10;function Wt(t){var r,n,e,o,u,a,i,f,c,l;if(t<-1||O(t))return NaN;if(-1===t)return et;if(t===pt)return t;if(0===t)return t;if(l=1,(e=t<0?-t:t)<.41421356237309503){if(e<1.862645149230957e-9)return e<5551115123125783e-32?t:t-t*t*.5;t>-.2928932188134525&&(l=0,o=t,n=1)}return 0!==l&&(e<9007199254740992?(u=(l=((n=Z(c=1+t))>>20)-1023)>0?1-(c-t):t-(c-1),u/=c):(l=((n=Z(c=t))>>20)-1023,u=0),(n&=1048575)<434334?c=nt(c,1072693248|n):(l+=1,c=nt(c,1071644672|n),n=1048576-n>>2),o=c-1),r=.5*o*o,0===n?0===o?l*Lt+(u+=l*Mt):l*Lt-((f=r*(1-.6666666666666666*o))-(l*Mt+u)-o):(f=(i=(a=o/(2+o))*a)*function(t){return 0===t?.6666666666666735:.6666666666666735+t*(.3999999999940942+t*(.2857142874366239+t*(.22222198432149784+t*(.1818357216161805+t*(.15313837699209373+.14798198605116586*t)))))}(i),0===l?o-(r-a*(r+f)):l*Lt-(r-(a*(r+f)+(l*Mt+u))-o))}function xt(t,r){return O(r)||r<0||r===pt?NaN:t<0?et:Wt(-Gt(-r*t))}function Ct(t,r){return O(t)||O(r)||r<0||r===pt?NaN:t<0?et:-t*r+at(r)}function Rt(t,r){return O(t)||O(r)||r<=0||r===pt||t>=r?NaN:r/(r-t)}function Yt(t,r){var n;return O(t)||O(r)||r<0||r===pt?NaN:t<0?0:Gt(-t/(n=1/r))/n}function qt(t,r){return O(r)||r<0||r===pt||O(t)||t<0||t>1?NaN:-at(1-t)/r}function zt(){var t,r=arguments,n=r[0],e="https://stdlib.io/e/"+n+"?";for(t=1;t<r.length;t++)e+="&arg[]="+encodeURIComponent(r[t]);return e}function Bt(){var t;if(!(this instanceof Bt))return 0===arguments.length?new Bt:new Bt(arguments[0]);if(arguments.length){if(!g(t=arguments[0]))throw new TypeError(zt("invalid argument. Rate parameter must be a positive number. Value: `%s`.",t))}else t=1;return f(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return t},set:function(r){if(!g(r))throw new TypeError(zt("invalid assignment. Must be a positive number. Value: `%s`.",r));t=r}}),this}c(xt,"factory",(function(t){return O(t)||t<0||t===pt?kt(NaN):function(r){if(r<0)return et;return Wt(-Gt(-t*r))}})),c(Ct,"factory",(function(t){return O(t)||t<0||t===pt?kt(NaN):function(r){if(O(r))return NaN;if(r<0)return et;return-r*t+at(t)}})),c(Rt,"factory",(function(t){return O(t)||t<=0||t===pt?kt(NaN):function(r){if(O(r)||r>=t)return NaN;return t/(t-r)}})),c(Yt,"factory",(function(t){var r;return O(t)||t<0||t===pt?kt(NaN):(r=1/t,function(t){if(O(t))return NaN;if(t<0)return 0;return Gt(-t/r)/r})})),c(qt,"factory",(function(t){return t<0||t===pt||O(t)?kt(NaN):function(r){if(O(r)||r<0||r>1)return NaN;return-at(1-r)/t}})),l(Bt.prototype,"entropy",(function(){return O(t=this.lambda)||t<0?NaN:1-at(t);var t})),l(Bt.prototype,"kurtosis",(function(){return O(t=this.lambda)||t<0?NaN:6;var t})),l(Bt.prototype,"mean",(function(){return O(t=this.lambda)||t<0?NaN:1/t;var t})),l(Bt.prototype,"median",(function(){return O(t=this.lambda)||t<0?NaN:1/t*.6931471805599453;var t})),l(Bt.prototype,"mode",(function(){return O(t=this.lambda)||t<0?NaN:0;var t})),l(Bt.prototype,"skewness",(function(){return O(t=this.lambda)||t<0?NaN:2;var t})),l(Bt.prototype,"stdev",(function(){return O(t=this.lambda)||t<0?NaN:1/t;var t})),l(Bt.prototype,"variance",(function(){return O(t=this.lambda)||t<0?NaN:1/(t*t);var t})),c(Bt.prototype,"cdf",(function(t){return Vt(t,this.lambda)})),c(Bt.prototype,"logcdf",(function(t){return xt(t,this.lambda)})),c(Bt.prototype,"logpdf",(function(t){return Ct(t,this.lambda)})),c(Bt.prototype,"mgf",(function(t){return Rt(t,this.lambda)})),c(Bt.prototype,"pdf",(function(t){return Yt(t,this.lambda)})),c(Bt.prototype,"quantile",(function(t){return qt(t,this.lambda)}));export{Bt as default};
//# sourceMappingURL=mod.js.map
