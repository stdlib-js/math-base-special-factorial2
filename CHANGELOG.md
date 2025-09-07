# CHANGELOG

> Package changelog.

<section class="release" id="unreleased">

## Unreleased (2025-09-07)

<section class="bug-fixes">

### Bug Fixes

-   [`c73d756`](https://github.com/stdlib-js/stdlib/commit/c73d7563879d118ab9de170f49ad52c6d1d4a946) - remove unnecessary parameter checks for int32_t in `factorial2`
-   [`4df1f8c`](https://github.com/stdlib-js/stdlib/commit/4df1f8c6189981073be4fb574468a3092e0fa345) - correct imports to use `max-nth-double-factorial` constant

</section>

<!-- /.bug-fixes -->

<section class="breaking-changes">

### BREAKING CHANGES

-   [`862befd`](https://github.com/stdlib-js/stdlib/commit/862befd29f5c2dc64e14f64497ff025dd6c00921): update signature to accept doubles

    -   User code should behave similarly in the primary case of providing integer-valued input values. However, no longer will real-values truncate. Now, real-valued inputs will result in `NaN`, which is, arguably, better behavior, as real-to-integer truncation can be a source of silent bugs.

</section>

<!-- /.breaking-changes -->

<section class="commits">

### Commits

<details>

-   [`862befd`](https://github.com/stdlib-js/stdlib/commit/862befd29f5c2dc64e14f64497ff025dd6c00921) - **refactor:** modify C implementation to accept `double` instead of `int32` in `math/base/special/factorial2` [(#8029)](https://github.com/stdlib-js/stdlib/pull/8029) _(by Gunj Joshi)_
-   [`7f8011b`](https://github.com/stdlib-js/stdlib/commit/7f8011bf6102b49a19fdaed71fe493af892db695) - **chore:** add structured package data for `math/base/special/factorial2` [(#8023)](https://github.com/stdlib-js/stdlib/pull/8023) _(by Lokesh Ranjan, Athan Reines)_
-   [`5519603`](https://github.com/stdlib-js/stdlib/commit/551960360bdcf61a473e5844ce23c7c9f7717168) - **docs:** fix example code and return annotation values _(by Philipp Burckhardt)_
-   [`c73d756`](https://github.com/stdlib-js/stdlib/commit/c73d7563879d118ab9de170f49ad52c6d1d4a946) - **fix:** remove unnecessary parameter checks for int32_t in `factorial2` _(by Philipp Burckhardt)_
-   [`4df1f8c`](https://github.com/stdlib-js/stdlib/commit/4df1f8c6189981073be4fb574468a3092e0fa345) - **fix:** correct imports to use `max-nth-double-factorial` constant _(by Karan Anand)_
-   [`ed27d17`](https://github.com/stdlib-js/stdlib/commit/ed27d17c614ad01c40d4f82f269541d9f388ab96) - **docs:** remove repeated example input [(#6442)](https://github.com/stdlib-js/stdlib/pull/6442) _(by Karan Anand)_
-   [`3bc9214`](https://github.com/stdlib-js/stdlib/commit/3bc921468809e515391760ff43e78f66a263f188) - **chore:** use `FLOAT64_MAX_SAFE_NTH_DOUBLE_FACTORIAL` [(#6363)](https://github.com/stdlib-js/stdlib/pull/6363) _(by Karan Anand)_
-   [`0e887d5`](https://github.com/stdlib-js/stdlib/commit/0e887d567344c8a31a382266389022ec26f2bcca) - **style:** add missing spaces _(by Philipp Burckhardt)_
-   [`cfc0665`](https://github.com/stdlib-js/stdlib/commit/cfc0665435a1f99158d7fed39b8873dea6aa6209) - **docs:** add missing private tag _(by Philipp Burckhardt)_
-   [`3e05048`](https://github.com/stdlib-js/stdlib/commit/3e05048df523b9a45e3f0621893d9dd99aae8d9c) - **docs:** remove comment _(by Athan Reines)_
-   [`2777e4b`](https://github.com/stdlib-js/stdlib/commit/2777e4be161869d09406e3b17947d24c64b47af2) - **bench:** resolve lint errors in benchmarks _(by Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 5 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Gunj Joshi
-   Karan Anand
-   Lokesh Ranjan
-   Philipp Burckhardt

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.2.0">

## 0.2.0 (2024-07-28)

<section class="features">

### Features

-   [`5433e22`](https://github.com/stdlib-js/stdlib/commit/5433e22ea76052b48ab4503cf11dc4b64aa0ec7d) - add C implementation for `math/base/special/factorial2`

</section>

<!-- /.features -->

<section class="commits">

### Commits

<details>

-   [`40bf4fa`](https://github.com/stdlib-js/stdlib/commit/40bf4fa7b188024cd0f0a98bfeb1e7f4c2ff3ec0) - **chore:** remove trailing space _(by Philipp Burckhardt)_
-   [`d27da5d`](https://github.com/stdlib-js/stdlib/commit/d27da5ddf7d6acb8da8c4f7bdee5a05df139329e) - **chore:** update package meta data [(#1926)](https://github.com/stdlib-js/stdlib/pull/1926) _(by stdlib-bot, Athan Reines)_
-   [`5433e22`](https://github.com/stdlib-js/stdlib/commit/5433e22ea76052b48ab4503cf11dc4b64aa0ec7d) - **feat:** add C implementation for `math/base/special/factorial2` _(by Rutam Kathale, Pranav, Philipp Burckhardt)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 4 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Philipp Burckhardt
-   Pranav Goswami
-   Rutam Kathale

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

<section class="release" id="v0.1.1">

## 0.1.1 (2024-02-24)

No changes reported for this release.

</section>

<!-- /.release -->

<section class="release" id="v0.1.0">

## 0.1.0 (2024-02-14)

<section class="features">

### Features

-   [`c0dab03`](https://github.com/stdlib-js/stdlib/commit/c0dab036acafd8d1e014ee8c6c8d54d3616fd782) - add `math/base/special/factorial2` [(#1112)](https://github.com/stdlib-js/stdlib/pull/1112)

</section>

<!-- /.features -->

<section class="issues">

### Closed Issues

This release closes the following issue:

[#44](https://github.com/stdlib-js/stdlib/issues/44)

</section>

<!-- /.issues -->

<section class="commits">

### Commits

<details>

-   [`8ef1f9e`](https://github.com/stdlib-js/stdlib/commit/8ef1f9eb45527886ba9b0c341704c8ffe6cffbb3) - **docs:** update related packages sections [(#1233)](https://github.com/stdlib-js/stdlib/pull/1233) _(by stdlib-bot)_
-   [`c0dab03`](https://github.com/stdlib-js/stdlib/commit/c0dab036acafd8d1e014ee8c6c8d54d3616fd782) - **feat:** add `math/base/special/factorial2` [(#1112)](https://github.com/stdlib-js/stdlib/pull/1112) _(by Robert Gislason, Athan Reines)_

</details>

</section>

<!-- /.commits -->

<section class="contributors">

### Contributors

A total of 2 people contributed to this release. Thank you to the following contributors:

-   Athan Reines
-   Robert Gislason

</section>

<!-- /.contributors -->

</section>

<!-- /.release -->

