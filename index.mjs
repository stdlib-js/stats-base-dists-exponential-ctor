// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-property@v0.2.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.1.0-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-accessor@v0.1.0-esm/index.mjs";import{isPrimitive as n}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-number@v0.2.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-entropy@v0.2.0-esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-kurtosis@v0.2.0-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-mean@v0.2.0-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-median@v0.2.0-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-mode@v0.2.0-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-skewness@v0.2.0-esm/index.mjs";import p from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-stdev@v0.2.0-esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-variance@v0.2.0-esm/index.mjs";import h from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-cdf@v0.1.0-esm/index.mjs";import b from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-logcdf@v0.1.0-esm/index.mjs";import f from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-logpdf@v0.2.0-esm/index.mjs";import j from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-mgf@v0.2.0-esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-pdf@v0.1.0-esm/index.mjs";import v from"https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-quantile@v0.2.0-esm/index.mjs";import c from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@v0.1.1-esm/index.mjs";function x(){var s;if(!(this instanceof x))return 0===arguments.length?new x:new x(arguments[0]);if(arguments.length){if(!n(s=arguments[0]))throw new TypeError(c("invalid argument. Rate parameter must be a positive number. Value: `%s`.",s))}else s=1;return t(this,"lambda",{configurable:!1,enumerable:!0,get:function(){return s},set:function(t){if(!n(t))throw new TypeError(c("invalid assignment. Must be a positive number. Value: `%s`.",t));s=t}}),this}e(x.prototype,"entropy",(function(){return i(this.lambda)})),e(x.prototype,"kurtosis",(function(){return r(this.lambda)})),e(x.prototype,"mean",(function(){return d(this.lambda)})),e(x.prototype,"median",(function(){return o(this.lambda)})),e(x.prototype,"mode",(function(){return m(this.lambda)})),e(x.prototype,"skewness",(function(){return a(this.lambda)})),e(x.prototype,"stdev",(function(){return p(this.lambda)})),e(x.prototype,"variance",(function(){return l(this.lambda)})),s(x.prototype,"cdf",(function(t){return h(t,this.lambda)})),s(x.prototype,"logcdf",(function(t){return b(t,this.lambda)})),s(x.prototype,"logpdf",(function(t){return f(t,this.lambda)})),s(x.prototype,"mgf",(function(t){return j(t,this.lambda)})),s(x.prototype,"pdf",(function(t){return u(t,this.lambda)})),s(x.prototype,"quantile",(function(t){return v(t,this.lambda)}));export{x as default};
//# sourceMappingURL=index.mjs.map
