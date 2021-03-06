/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-restricted-syntax, no-invalid-this */

'use strict';

// MODULES //

var defineProperty = require( '@stdlib/utils-define-property' );
var setReadOnly = require( '@stdlib/utils-define-nonenumerable-read-only-property' );
var setReadOnlyAccessor = require( '@stdlib/utils-define-nonenumerable-read-only-accessor' );
var isPositive = require( '@stdlib/assert-is-positive-number' ).isPrimitive;
var entropy = require( '@stdlib/stats-base-dists-exponential-entropy' );
var kurtosis = require( '@stdlib/stats-base-dists-exponential-kurtosis' );
var mean = require( '@stdlib/stats-base-dists-exponential-mean' );
var median = require( '@stdlib/stats-base-dists-exponential-median' );
var mode = require( '@stdlib/stats-base-dists-exponential-mode' );
var skewness = require( '@stdlib/stats-base-dists-exponential-skewness' );
var stdev = require( '@stdlib/stats-base-dists-exponential-stdev' );
var variance = require( '@stdlib/stats-base-dists-exponential-variance' );
var cdf = require( '@stdlib/stats-base-dists-exponential-cdf' );
var logcdf = require( '@stdlib/stats-base-dists-exponential-logcdf' );
var logpdf = require( '@stdlib/stats-base-dists-exponential-logpdf' );
var mgf = require( '@stdlib/stats-base-dists-exponential-mgf' );
var pdf = require( '@stdlib/stats-base-dists-exponential-pdf' );
var quantile = require( '@stdlib/stats-base-dists-exponential-quantile' );
var format = require( '@stdlib/string-format' );


// FUNCTIONS //

/**
* Evaluates the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated CDF
*/
function exponentialCDF( x ) {
	return cdf( x, this.lambda );
}

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logCDF
*/
function exponentialLogCDF( x ) {
	return logcdf( x, this.lambda );
}

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated logPDF
*/
function exponentialLogPDF( x ) {
	return logpdf( x, this.lambda );
}

/**
* Evaluates the moment-generating function (MGF).
*
* @private
* @param {number} t - input value
* @returns {number} evaluated MGF
*/
function exponentialMGF( t ) {
	return mgf( t, this.lambda );
}

/**
* Evaluates the probability density function (PDF).
*
* @private
* @param {number} x - input value
* @returns {number} evaluated PDF
*/
function exponentialPDF( x ) {
	return pdf( x, this.lambda );
}

/**
* Evaluates the quantile function.
*
* @private
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
*/
function exponentialQuantile( p ) {
	return quantile( p, this.lambda );
}


// MAIN //

/**
* Exponential distribution constructor.
*
* @constructor
* @param {PositiveNumber} [lambda=1.0] - rate parameter
* @throws {TypeError} `lambda` must be a positive number
* @returns {Exponential} distribution instance
*
* @example
* var exponential = new Exponential( 1.0 );
*
* var y = exponential.cdf( 0.8 );
* // returns ~0.551
*
* var v = exponential.mode;
* // returns 0.0
*/
function Exponential() {
	var lambda;
	if ( !(this instanceof Exponential) ) {
		if ( arguments.length === 0 ) {
			return new Exponential();
		}
		return new Exponential( arguments[ 0 ] );
	}
	if ( arguments.length ) {
		lambda = arguments[ 0 ];
		if ( !isPositive( lambda ) ) {
			throw new TypeError( format( 'invalid argument. Rate parameter must be a positive number. Value: `%s`.', lambda ) );
		}
	} else {
		lambda = 1.0;
	}
	defineProperty( this, 'lambda', {
		'configurable': false,
		'enumerable': true,
		'get': function get() {
			return lambda;
		},
		'set': function set( value ) {
			if ( !isPositive( value ) ) {
				throw new TypeError( format( 'invalid assignment. Must be a positive number. Value: `%s`.', value ) );
			}
			lambda = value;
		}
	});
	return this;
}

/**
* Exponential distribution differential entropy.
*
* @name entropy
* @memberof Exponential.prototype
* @type {number}
* @see [differential entropy]{@link https://en.wikipedia.org/wiki/Entropy_%28information_theory%29}
*
* @example
* var exponential = new Exponential( 4.0 );
*
* var v = exponential.entropy;
* // returns ~-0.386
*/
setReadOnlyAccessor( Exponential.prototype, 'entropy', function get() {
	return entropy( this.lambda );
});

/**
* Exponential distribution excess kurtosis.
*
* @name kurtosis
* @memberof Exponential.prototype
* @type {number}
* @see [kurtosis]{@link https://en.wikipedia.org/wiki/Kurtosis}
*
* @example
* var exponential = new Exponential( 4.0 );
*
* var v = exponential.kurtosis;
* // returns 6.0
*/
setReadOnlyAccessor( Exponential.prototype, 'kurtosis', function get() {
	return kurtosis( this.lambda );
});

/**
* Exponential distribution expected value.
*
* @name mean
* @memberof Exponential.prototype
* @type {number}
* @see [expected value]{@link https://en.wikipedia.org/wiki/Expected_value}
*
* @example
* var exponential = new Exponential( 4.0 );
*
* var v = exponential.mean;
* // returns 0.25
*/
setReadOnlyAccessor( Exponential.prototype, 'mean', function get() {
	return mean( this.lambda );
});

/**
* Exponential distribution median.
*
* @name median
* @memberof Exponential.prototype
* @type {number}
* @see [median]{@link https://en.wikipedia.org/wiki/Median}
*
* @example
* var exponential = new Exponential( 4.0 );
*
* var v = exponential.median;
* // returns ~0.173
*/
setReadOnlyAccessor( Exponential.prototype, 'median', function get() {
	return median( this.lambda );
});

/**
* Exponential distribution mode.
*
* @name mode
* @memberof Exponential.prototype
* @type {number}
* @see [mode]{@link https://en.wikipedia.org/wiki/Mode_%28statistics%29}
*
* @example
* var exponential = new Exponential( 4.0 );
*
* var v = exponential.mode;
* // returns 0.0
*/
setReadOnlyAccessor( Exponential.prototype, 'mode', function get() {
	return mode( this.lambda );
});

/**
* Exponential distribution skewness.
*
* @name skewness
* @memberof Exponential.prototype
* @type {number}
* @see [skewness]{@link https://en.wikipedia.org/wiki/Skewness}
*
* @example
* var exponential = new Exponential( 4.0 );
*
* var v = exponential.skewness;
* // returns 2.0
*/
setReadOnlyAccessor( Exponential.prototype, 'skewness', function get() {
	return skewness( this.lambda );
});

/**
* Exponential distribution standard deviation.
*
* @name stdev
* @memberof Exponential.prototype
* @type {number}
* @see [standard deviation]{@link https://en.wikipedia.org/wiki/Standard_deviation}
*
* @example
* var exponential = new Exponential( 4.0 );
*
* var v = exponential.stdev;
* // returns ~0.25
*/
setReadOnlyAccessor( Exponential.prototype, 'stdev', function get() {
	return stdev( this.lambda );
});

/**
* Exponential distribution variance.
*
* @name variance
* @memberof Exponential.prototype
* @type {number}
* @see [variance]{@link https://en.wikipedia.org/wiki/Variance}
*
* @example
* var exponential = new Exponential( 4.0 );
*
* var v = exponential.variance;
* // returns ~0.063
*/
setReadOnlyAccessor( Exponential.prototype, 'variance', function get() {
	return variance( this.lambda );
});

/**
* Evaluates the cumulative distribution function (CDF).
*
* @name cdf
* @memberof Exponential.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated CDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var exponential = new Exponential( 2.0 );
*
* var v = exponential.cdf( 0.5 );
* // returns ~0.632
*/
setReadOnly( Exponential.prototype, 'cdf', exponentialCDF );

/**
* Evaluates the natural logarithm of the cumulative distribution function (CDF).
*
* @name logcdf
* @memberof Exponential.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logCDF
* @see [cdf]{@link https://en.wikipedia.org/wiki/Cumulative_distribution_function}
*
* @example
* var exponential = new Exponential( 2.0 );
*
* var v = exponential.logcdf( 0.5 );
* // returns ~-0.459
*/
setReadOnly( Exponential.prototype, 'logcdf', exponentialLogCDF );

/**
* Evaluates the natural logarithm of the probability density function (PDF).
*
* @name logpdf
* @memberof Exponential.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated logPDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var exponential = new Exponential( 2.0 );
*
* var v = exponential.logpdf( 0.8 );
* // returns ~-0.907
*/
setReadOnly( Exponential.prototype, 'logpdf', exponentialLogPDF );

/**
* Evaluates the moment-generating function (MGF).
*
* @name mgf
* @memberof Exponential.prototype
* @type {Function}
* @param {number} t - input value
* @returns {number} evaluated MGF
* @see [mgf]{@link https://en.wikipedia.org/wiki/Moment-generating_function}
*
* @example
* var exponential = new Exponential( 2.0 );
*
* var v = exponential.mgf( 0.5 );
* // returns ~1.333
*/
setReadOnly( Exponential.prototype, 'mgf', exponentialMGF );

/**
* Evaluates the probability density function (PDF).
*
* @name pdf
* @memberof Exponential.prototype
* @type {Function}
* @param {number} x - input value
* @returns {number} evaluated PDF
* @see [pdf]{@link https://en.wikipedia.org/wiki/Probability_density_function}
*
* @example
* var exponential = new Exponential( 2.0 );
*
* var v = exponential.pdf( 0.8 );
* // returns ~0.404
*/
setReadOnly( Exponential.prototype, 'pdf', exponentialPDF );

/**
* Evaluates the quantile function.
*
* @name quantile
* @memberof Exponential.prototype
* @type {Function}
* @param {Probability} p - input probability
* @returns {number} evaluated quantile function
* @see [quantile function]{@link https://en.wikipedia.org/wiki/Quantile_function}
*
* @example
* var exponential = new Exponential( 2.0 );
*
* var v = exponential.quantile( 0.5 );
* // returns ~0.347
*/
setReadOnly( Exponential.prototype, 'quantile', exponentialQuantile );


// EXPORTS //

module.exports = Exponential;
