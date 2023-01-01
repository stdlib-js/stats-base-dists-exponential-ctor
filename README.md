<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Exponential

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Exponential distribution constructor.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import Exponential from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-ctor@esm/index.mjs';
```

#### Exponential( \[lambda] )

Returns an [exponential][exponential-distribution] distribution object.

```javascript
var exponential = new Exponential();

var mu = exponential.mean;
// returns 1.0
```

By default, `lambda = 1.0`. To create a distribution having a different rate parameter `lambda`, provide a parameter value.

```javascript
var exponential = new Exponential( 4.0 );

var mu = exponential.mean;
// returns 0.25
```

* * *

## exponential

An [exponential][exponential-distribution] distribution object has the following properties and methods...

### Writable Properties

#### exponential.lambda

Rate parameter of the distribution. `lambda` **must** be a positive number.

```javascript
var exponential = new Exponential( 2.0 );

var lambda = exponential.lambda;
// returns 2.0

exponential.lambda = 3.0;

lambda = exponential.lambda;
// returns 3.0
```

* * *

### Computed Properties

#### Exponential.prototype.entropy

Returns the [differential entropy][entropy].

```javascript
var exponential = new Exponential( 4.0 );

var entropy = exponential.entropy;
// returns ~-0.386
```

#### Exponential.prototype.kurtosis

Returns the [excess kurtosis][kurtosis].

```javascript
var exponential = new Exponential( 4.0 );

var kurtosis = exponential.kurtosis;
// returns 6.0
```

#### Exponential.prototype.mean

Returns the [expected value][expected-value].

```javascript
var exponential = new Exponential( 4.0 );

var mu = exponential.mean;
// returns 0.25
```

#### Exponential.prototype.median

Returns the [median][median].

```javascript
var exponential = new Exponential( 4.0 );

var median = exponential.median;
// returns ~0.173
```

#### Exponential.prototype.mode

Returns the [mode][mode].

```javascript
var exponential = new Exponential( 4.0 );

var mode = exponential.mode;
// returns 0.0
```

#### Exponential.prototype.skewness

Returns the [skewness][skewness].

```javascript
var exponential = new Exponential( 4.0 );

var skewness = exponential.skewness;
// returns 2.0
```

#### Exponential.prototype.stdev

Returns the [standard deviation][standard-deviation].

```javascript
var exponential = new Exponential( 4.0 );

var s = exponential.stdev;
// returns 0.25
```

#### Exponential.prototype.variance

Returns the [variance][variance].

```javascript
var exponential = new Exponential( 4.0 );

var s2 = exponential.variance;
// returns ~0.063
```

* * *

### Methods

#### Exponential.prototype.cdf( x )

Evaluates the [cumulative distribution function][cdf] (CDF).

```javascript
var exponential = new Exponential( 2.0 );

var y = exponential.cdf( 0.5 );
// returns ~0.632
```

#### Exponential.prototype.logcdf( x )

Evaluates the natural logarithm of the [cumulative distribution function][cdf] (CDF).

```javascript
var exponential = new Exponential( 2.0 );

var y = exponential.logcdf( 0.5 );
// returns ~-0.459
```

#### Exponential.prototype.logpdf( x )

Evaluates the natural logarithm of the [probability density function][pdf] (PDF).

```javascript
var exponential = new Exponential( 2.0 );

var y = exponential.logpdf( 0.8 );
// returns ~-0.907
```

#### Exponential.prototype.mgf( t )

Evaluates the [moment-generating function][mgf] (MGF).

```javascript
var exponential = new Exponential( 2.0 );

var y = exponential.mgf( 0.5 );
// returns ~1.333
```

#### Exponential.prototype.pdf( x )

Evaluates the [probability density function][pdf] (PDF).

```javascript
var exponential = new Exponential( 2.0 );

var y = exponential.pdf( 0.8 );
// returns ~0.404
```

#### Exponential.prototype.quantile( p )

Evaluates the [quantile function][quantile-function] at probability `p`.

```javascript
var exponential = new Exponential( 2.0 );

var y = exponential.quantile( 0.5 );
// returns ~0.347

y = exponential.quantile( 1.9 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

* * *

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Exponential from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-exponential-ctor@esm/index.mjs';

var exponential = new Exponential( 2.0 );

var mu = exponential.mean;
// returns 0.5

var mode = exponential.mode;
// returns 0.0

var s2 = exponential.variance;
// returns 0.25

var y = exponential.cdf( 0.8 );
// returns ~0.798

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-exponential-ctor.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-exponential-ctor

[test-image]: https://github.com/stdlib-js/stats-base-dists-exponential-ctor/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/stats-base-dists-exponential-ctor/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-exponential-ctor/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-exponential-ctor?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-exponential-ctor.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-exponential-ctor/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-exponential-ctor/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-exponential-ctor/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-exponential-ctor/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-exponential-ctor/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-exponential-ctor/main/LICENSE

[exponential-distribution]: https://en.wikipedia.org/wiki/Exponential_distribution

[cdf]: https://en.wikipedia.org/wiki/Cumulative_distribution_function

[mgf]: https://en.wikipedia.org/wiki/Moment-generating_function

[pdf]: https://en.wikipedia.org/wiki/Probability_density_function

[quantile-function]: https://en.wikipedia.org/wiki/Quantile_function

[entropy]: https://en.wikipedia.org/wiki/Entropy_%28information_theory%29

[expected-value]: https://en.wikipedia.org/wiki/Expected_value

[kurtosis]: https://en.wikipedia.org/wiki/Kurtosis

[median]: https://en.wikipedia.org/wiki/Median

[mode]: https://en.wikipedia.org/wiki/Mode_%28statistics%29

[skewness]: https://en.wikipedia.org/wiki/Skewness

[standard-deviation]: https://en.wikipedia.org/wiki/Standard_deviation

[variance]: https://en.wikipedia.org/wiki/Variance

</section>

<!-- /.links -->
