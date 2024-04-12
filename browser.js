// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,t;r=this,t=function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null,t=Object.defineProperty;function n(r){return"number"==typeof r}function e(r){var t,n="";for(t=0;t<r;t++)n+="0";return n}function i(r,t,n){var i=!1,a=t-r.length;return a<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=n?r+e(a):e(a)+r,i&&(r="-"+r)),r}var a=String.prototype.toLowerCase,o=String.prototype.toUpperCase;function u(r){var t,e,u;switch(r.specifier){case"b":t=2;break;case"o":t=8;break;case"x":case"X":t=16;break;default:t=10}if(e=r.arg,u=parseInt(e,10),!isFinite(u)){if(!n(e))throw new Error("invalid integer. Value: "+e);u=0}return u<0&&("u"===r.specifier||10!==t)&&(u=4294967295+u+1),u<0?(e=(-u).toString(t),r.precision&&(e=i(e,r.precision,r.padRight)),e="-"+e):(e=u.toString(t),u||r.precision?r.precision&&(e=i(e,r.precision,r.padRight)):e="",r.sign&&(e=r.sign+e)),16===t&&(r.alternate&&(e="0x"+e),e=r.specifier===o.call(r.specifier)?o.call(e):a.call(e)),8===t&&r.alternate&&"0"!==e.charAt(0)&&(e="0"+e),e}var c=Math.abs,f=String.prototype.toLowerCase,s=String.prototype.toUpperCase,p=String.prototype.replace,l=/e\+(\d)$/,y=/e-(\d)$/,d=/^(\d+)$/,g=/^(\d+)e/,h=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function w(r){var t,e,i=parseFloat(r.arg);if(!isFinite(i)){if(!n(r.arg))throw new Error("invalid floating-point number. Value: "+e);i=r.arg}switch(r.specifier){case"e":case"E":e=i.toExponential(r.precision);break;case"f":case"F":e=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((t=r.precision)>0&&(t-=1),e=i.toExponential(t)):e=i.toPrecision(r.precision),r.alternate||(e=p.call(e,v,"$1e"),e=p.call(e,b,"e"),e=p.call(e,h,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return e=p.call(e,l,"e+0$1"),e=p.call(e,y,"e-0$1"),r.alternate&&(e=p.call(e,d,"$1."),e=p.call(e,g,"$1.e")),i>=0&&r.sign&&(e=r.sign+e),e=r.specifier===s.call(r.specifier)?s.call(e):f.call(e)}function m(r){var t,n="";for(t=0;t<r;t++)n+=" ";return n}var N=String.fromCharCode,A=isNaN,_=Array.isArray;function E(r){var t={};return t.specifier=r.specifier,t.precision=void 0===r.precision?1:r.precision,t.width=r.width,t.flags=r.flags||"",t.mapping=r.mapping,t}function U(r){var t,n,e,a,o,c,f,s,p,l,y,d,g;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,s=0;s<r.length;s++)if("string"==typeof(e=r[s]))c+=e;else{if(t=void 0!==e.precision,!(e=E(e)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+s+"`. Value: `"+e+"`.");for(e.mapping&&(f=e.mapping),n=e.flags,p=0;p<n.length;p++)switch(a=n.charAt(p)){case" ":e.sign=" ";break;case"+":e.sign="+";break;case"-":e.padRight=!0,e.padZeros=!1;break;case"0":e.padZeros=n.indexOf("-")<0;break;case"#":e.alternate=!0;break;default:throw new Error("invalid flag: "+a)}if("*"===e.width){if(e.width=parseInt(arguments[f],10),f+=1,A(e.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+e.width+"`.");e.width<0&&(e.padRight=!0,e.width=-e.width)}if(t&&"*"===e.precision){if(e.precision=parseInt(arguments[f],10),f+=1,A(e.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+e.precision+"`.");e.precision<0&&(e.precision=1,t=!1)}switch(e.arg=arguments[f],e.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":t&&(e.padZeros=!1),e.arg=u(e);break;case"s":e.maxWidth=t?e.precision:-1;break;case"c":if(!A(e.arg)){if((o=parseInt(e.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+e.arg);e.arg=A(o)?String(e.arg):N(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":t||(e.precision=6),e.arg=w(e);break;default:throw new Error("invalid specifier: "+e.specifier)}e.maxWidth>=0&&e.arg.length>e.maxWidth&&(e.arg=e.arg.substring(0,e.maxWidth)),e.padZeros?e.arg=i(e.arg,e.width||e.precision,e.padRight):e.width&&(e.arg=(l=e.arg,y=e.width,d=e.padRight,g=void 0,(g=y-l.length)<0?l:l=d?l+m(g):m(g)+l)),c+=e.arg||"",f+=1}return c}var I=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function S(r){var t={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(t.precision="1"),t}function j(r){var t,n,e,i;for(n=[],i=0,e=I.exec(r);e;)(t=r.slice(i,I.lastIndex-e[0].length)).length&&n.push(t),n.push(S(e)),i=I.lastIndex,e=I.exec(r);return(t=r.slice(i)).length&&n.push(t),n}function k(r){var t,n;if("string"!=typeof r)throw new TypeError(k("invalid argument. First argument must be a string. Value: `%s`.",r));for(t=[j(r)],n=1;n<arguments.length;n++)t.push(arguments[n]);return U.apply(null,t)}var x=Object.prototype,F=x.toString,T=x.__defineGetter__,O=x.__defineSetter__,V=x.__lookupGetter__,$=x.__lookupSetter__,G=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?t:function(r,t,n){var e,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===F.call(r))throw new TypeError(k("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===F.call(n))throw new TypeError(k("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(V.call(r,t)||$.call(r,t)?(e=r.__proto__,r.__proto__=x,delete r[t],r[t]=n.value,r.__proto__=e):r[t]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&T&&T.call(r,t,n.get),o&&O&&O.call(r,t,n.set),r};function P(r,t,n){G(r,t,{configurable:!1,enumerable:!1,writable:!1,value:n})}function C(r,t,n){G(r,t,{configurable:!1,enumerable:!1,get:n})}function H(r){return"number"==typeof r}var W="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function L(){return W&&"symbol"==typeof Symbol.toStringTag}var R=Object.prototype.toString,Z=Object.prototype.hasOwnProperty,M="function"==typeof Symbol?Symbol:void 0,X="function"==typeof M?M.toStringTag:"",z=L()?function(r){var t,n,e,i,a;if(null==r)return R.call(r);n=r[X],a=X,t=null!=(i=r)&&Z.call(i,a);try{r[X]=void 0}catch(t){return R.call(r)}return e=R.call(r),t?r[X]=n:delete r[X],e}:function(r){return R.call(r)},q=Number,Y=q.prototype.toString,B=L();function D(r){return"object"==typeof r&&(r instanceof q||(B?function(r){try{return Y.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function J(r){return H(r)||D(r)}function K(r){return H(r)&&r>0}function Q(r){return D(r)&&r.valueOf()>0}function rr(r){return K(r)||Q(r)}function tr(r){return r!=r}P(J,"isPrimitive",H),P(J,"isObject",D),P(rr,"isPrimitive",K),P(rr,"isObject",Q);var nr,er="function"==typeof Uint32Array,ir="function"==typeof Uint32Array?Uint32Array:null,ar="function"==typeof Uint32Array?Uint32Array:void 0;nr=function(){var r,t,n;if("function"!=typeof ir)return!1;try{t=new ir(t=[1,3.14,-3.14,4294967296,4294967297]),n=t,r=(er&&n instanceof Uint32Array||"[object Uint32Array]"===z(n))&&1===t[0]&&3===t[1]&&4294967293===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?ar:function(){throw new Error("not implemented")};var or,ur=nr,cr="function"==typeof Float64Array,fr="function"==typeof Float64Array?Float64Array:null,sr="function"==typeof Float64Array?Float64Array:void 0;or=function(){var r,t,n;if("function"!=typeof fr)return!1;try{t=new fr([1,3.14,-3.14,NaN]),n=t,r=(cr&&n instanceof Float64Array||"[object Float64Array]"===z(n))&&1===t[0]&&3.14===t[1]&&-3.14===t[2]&&t[3]!=t[3]}catch(t){r=!1}return r}()?sr:function(){throw new Error("not implemented")};var pr,lr=or,yr="function"==typeof Uint8Array,dr="function"==typeof Uint8Array?Uint8Array:null,gr="function"==typeof Uint8Array?Uint8Array:void 0;pr=function(){var r,t,n;if("function"!=typeof dr)return!1;try{t=new dr(t=[1,3.14,-3.14,256,257]),n=t,r=(yr&&n instanceof Uint8Array||"[object Uint8Array]"===z(n))&&1===t[0]&&3===t[1]&&253===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?gr:function(){throw new Error("not implemented")};var hr,br=pr,vr="function"==typeof Uint16Array,wr="function"==typeof Uint16Array?Uint16Array:null,mr="function"==typeof Uint16Array?Uint16Array:void 0;hr=function(){var r,t,n;if("function"!=typeof wr)return!1;try{t=new wr(t=[1,3.14,-3.14,65536,65537]),n=t,r=(vr&&n instanceof Uint16Array||"[object Uint16Array]"===z(n))&&1===t[0]&&3===t[1]&&65533===t[2]&&0===t[3]&&1===t[4]}catch(t){r=!1}return r}()?mr:function(){throw new Error("not implemented")};var Nr,Ar={uint16:hr,uint8:br};(Nr=new Ar.uint16(1))[0]=4660;var _r=52===new Ar.uint8(Nr.buffer)[0],Er=!0===_r?1:0,Ur=new lr(1),Ir=new ur(Ur.buffer);function Sr(r){return Ur[0]=r,Ir[Er]}var jr=!0===_r?1:0,kr=new lr(1),xr=new ur(kr.buffer);function Fr(r,t){return kr[0]=r,xr[jr]=t>>>0,kr[0]}var Tr=1023,Or=q.NEGATIVE_INFINITY,Vr=.6931471803691238,$r=1.9082149292705877e-10,Gr=0x40000000000000,Pr=.3333333333333333,Cr=1048575,Hr=2146435072,Wr=1048576,Lr=1072693248;function Rr(r){var t,n,e,i,a,o,u,c,f,s,p,l;return 0===r?Or:tr(r)||r<0?NaN:(a=0,(n=Sr(r))<Wr&&(a-=54,n=Sr(r*=Gr)),n>=Hr?r+r:(a+=(n>>20)-Tr|0,a+=(c=614244+(n&=Cr)&1048576|0)>>20|0,u=(r=Fr(r,n|c^Lr))-1,(Cr&2+n)<3?0===u?0===a?0:a*Vr+a*$r:(o=u*u*(.5-Pr*u),0===a?u-o:a*Vr-(o-a*$r-u)):(c=n-398458|0,f=440401-n|0,i=(p=(l=(s=u/(2+u))*s)*l)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),e=l*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),o=e+i,(c|=f)>0?(t=.5*u*u,0===a?u-(t-s*(t+o)):a*Vr-(t-(s*(t+o)+a*$r)-u)):0===a?u-s*(u-o):a*Vr-(s*(u-o)-a*$r-u))))}var Zr=Math.floor,Mr=Math.ceil;function Xr(r){return r<0?Mr(r):Zr(r)}var zr=Number.POSITIVE_INFINITY,qr=1023,Yr=-1023,Br=-1074;function Dr(r){return r===zr||r===Or}var Jr,Kr,Qr=2147483648,rt=2147483647;!0===_r?(Jr=1,Kr=0):(Jr=0,Kr=1);var tt,nt,et={HIGH:Jr,LOW:Kr},it=new lr(1),at=new ur(it.buffer),ot=et.HIGH,ut=et.LOW;function ct(r,t,n,e){return it[0]=r,t[e]=at[ot],t[e+n]=at[ut],t}function ft(r){return ct(r,[0,0],1,0)}P(ft,"assign",ct),!0===_r?(tt=1,nt=0):(tt=0,nt=1);var st={HIGH:tt,LOW:nt},pt=new lr(1),lt=new ur(pt.buffer),yt=st.HIGH,dt=st.LOW;function gt(r,t){return lt[yt]=r,lt[dt]=t,pt[0]}var ht=[0,0],bt=22250738585072014e-324,vt=4503599627370496;function wt(r,t,n,e){return tr(r)||Dr(r)?(t[e]=r,t[e+n]=0,t):0!==r&&function(r){return Math.abs(r)}(r)<bt?(t[e]=r*vt,t[e+n]=-52,t):(t[e]=r,t[e+n]=0,t)}P((function(r){return wt(r,[0,0],1,0)}),"assign",wt);var mt=2146435072,Nt=2220446049250313e-31,At=2148532223,_t=[0,0],Et=[0,0];function Ut(r,t){var n,e,i,a,o,u;return 0===t||0===r||tr(r)||Dr(r)?r:(wt(r,_t,1,0),r=_t[0],t+=_t[1],t+=function(r){var t=Sr(r);return(t=(t&mt)>>>20)-Tr|0}(r),t<Br?(i=0,a=r,ft.assign(i,ht,1,0),o=ht[0],o&=rt,u=Sr(a),gt(o|=u&=Qr,ht[1])):t>qr?r<0?Or:zr:(t<=Yr?(t+=52,e=Nt):e=1,ft.assign(r,Et,1,0),n=Et[0],n&=At,e*gt(n|=t+Tr<<20,Et[1])))}var It=.6931471803691238,St=1.9082149292705877e-10,jt=1.4426950408889634,kt=709.782712893384,xt=-745.1332191019411,Ft=1/(1<<28),Tt=-Ft;function Ot(r){var t;return tr(r)||r===zr?r:r===Or?0:r>kt?zr:r<xt?0:r>Tt&&r<Ft?1+r:function(r,t,n){var e,i,a,o;return Ut(1-(t-(e=r-t)*(a=e-(i=e*e)*(0===(o=i)?.16666666666666602:.16666666666666602+o*(o*(6613756321437934e-20+o*(4.1381367970572385e-8*o-16533902205465252e-22))-.0027777777777015593)))/(2-a)-r),n)}(r-(t=Xr(r<0?jt*r-.5:jt*r+.5))*It,t*St,t)}function Vt(r,t){return tr(t)||t<0||t===zr?NaN:r<0?0:1-Ot(-t*r)}function $t(r){return function(){return r}}P(Vt,"factory",(function(r){return tr(r)||r<0||r===zr?$t(NaN):function(t){return t<0?0:1-Ot(-r*t)}}));var Gt=.6931471803691238,Pt=1.9082149292705877e-10,Ct=.41421356237309503,Ht=-.2928932188134525,Wt=1.862645149230957e-9,Lt=5551115123125783e-32,Rt=9007199254740992,Zt=.6666666666666666;function Mt(r){var t,n,e,i,a,o,u,c,f,s;if(r<-1||tr(r))return NaN;if(-1===r)return Or;if(r===zr)return r;if(0===r)return r;if(s=1,(e=r<0?-r:r)<Ct){if(e<Wt)return e<Lt?r:r-r*r*.5;r>Ht&&(s=0,i=r,n=1)}return 0!==s&&(e<Rt?(a=(s=((n=Sr(f=1+r))>>20)-Tr)>0?1-(f-r):r-(f-1),a/=f):(s=((n=Sr(f=r))>>20)-Tr,a=0),(n&=1048575)<434334?f=Fr(f,1072693248|n):(s+=1,f=Fr(f,1071644672|n),n=1048576-n>>2),i=f-1),t=.5*i*i,0===n?0===i?s*Gt+(a+=s*Pt):s*Gt-((c=t*(1-Zt*i))-(s*Pt+a)-i):(c=(u=(o=i/(2+i))*o)*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.3999999999940942+r*(.2857142874366239+r*(.22222198432149784+r*(.1818357216161805+r*(.15313837699209373+.14798198605116586*r)))))}(u),0===s?i-(t-o*(t+c)):s*Gt-(t-(o*(t+c)+(s*Pt+a))-i))}function Xt(r,t){return tr(t)||t<0||t===zr?NaN:r<0?Or:Mt(-Ot(-t*r))}function zt(r,t){return tr(r)||tr(t)||t<0||t===zr?NaN:r<0?Or:-r*t+Rr(t)}function qt(r,t){return tr(r)||tr(t)||t<=0||t===zr||r>=t?NaN:t/(t-r)}function Yt(r,t){var n;return tr(r)||tr(t)||t<0||t===zr?NaN:r<0?0:Ot(-r/(n=1/t))/n}function Bt(r,t){return tr(t)||t<0||t===zr||tr(r)||r<0||r>1?NaN:-Rr(1-r)/t}function Dt(){var r,t=arguments,n="https://stdlib.io/e/"+t[0]+"?";for(r=1;r<t.length;r++)n+="&arg[]="+encodeURIComponent(t[r]);return n}function Jt(){var r;if(!(this instanceof Jt))return 0===arguments.length?new Jt:new Jt(arguments[0]);if(arguments.length){if(!K(r=arguments[0]))throw new TypeError(Dt("0zX8q",r))}else r=1;return G(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return r},set:function(t){if(!K(t))throw new TypeError(Dt("0zX8k",t));r=t}}),this}return P(Xt,"factory",(function(r){return tr(r)||r<0||r===zr?$t(NaN):function(t){return t<0?Or:Mt(-Ot(-r*t))}})),P(zt,"factory",(function(r){return tr(r)||r<0||r===zr?$t(NaN):function(t){return tr(t)?NaN:t<0?Or:-t*r+Rr(r)}})),P(qt,"factory",(function(r){return tr(r)||r<=0||r===zr?$t(NaN):function(t){return tr(t)||t>=r?NaN:r/(r-t)}})),P(Yt,"factory",(function(r){var t;return tr(r)||r<0||r===zr?$t(NaN):(t=1/r,function(r){return tr(r)?NaN:r<0?0:Ot(-r/t)/t})})),P(Bt,"factory",(function(r){return r<0||r===zr||tr(r)?$t(NaN):function(t){return tr(t)||t<0||t>1?NaN:-Rr(1-t)/r}})),C(Jt.prototype,"entropy",(function(){return tr(r=this.lambda)||r<0?NaN:1-Rr(r);var r})),C(Jt.prototype,"kurtosis",(function(){return tr(r=this.lambda)||r<0?NaN:6;var r})),C(Jt.prototype,"mean",(function(){return tr(r=this.lambda)||r<0?NaN:1/r;var r})),C(Jt.prototype,"median",(function(){return tr(r=this.lambda)||r<0?NaN:1/r*.6931471805599453;var r})),C(Jt.prototype,"mode",(function(){return tr(r=this.lambda)||r<0?NaN:0;var r})),C(Jt.prototype,"skewness",(function(){return tr(r=this.lambda)||r<0?NaN:2;var r})),C(Jt.prototype,"stdev",(function(){return tr(r=this.lambda)||r<0?NaN:1/r;var r})),C(Jt.prototype,"variance",(function(){return tr(r=this.lambda)||r<0?NaN:1/(r*r);var r})),P(Jt.prototype,"cdf",(function(r){return Vt(r,this.lambda)})),P(Jt.prototype,"logcdf",(function(r){return Xt(r,this.lambda)})),P(Jt.prototype,"logpdf",(function(r){return zt(r,this.lambda)})),P(Jt.prototype,"mgf",(function(r){return qt(r,this.lambda)})),P(Jt.prototype,"pdf",(function(r){return Yt(r,this.lambda)})),P(Jt.prototype,"quantile",(function(r){return Bt(r,this.lambda)})),Jt},"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(r="undefined"!=typeof globalThis?globalThis:r||self).Exponential=t();
//# sourceMappingURL=browser.js.map
