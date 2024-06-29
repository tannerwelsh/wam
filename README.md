# wam

Weights and measures conversion utilities for JavaScript.

## Usage

```js
import { convert } from 'wam'

// Convert weights from standard to metric
//  (or vice-versa)
convert('1lb 6oz').to('kg')
// => 0.62368947

// Supports fractions
convert('3/4oz').to('g')
// => 21.262142

// Internal conversions possible too
convert('5yds').to('ft')
// => 15

// For more specific uses, can use one of
//  a handful of utility functions
import { inCentimeters, inLiters }

inCentimeters(`3' 6-7/16"`)
// => 107.7912

inLiters('8.432 pints')
// => 3.989824
```

## Supported Measurements

#### Weight

| Measurement | Abbreviations |
|:------------|:--------------|
| `pounds`    | `lb`          |
| `ounces`    | `oz`          |
|             |               |
| `grams`     | `g`           |
| `kilograms` | `kg`          |

#### Length

| Measurement   | Abbreviations |
|:--------------|:--------------|
| `inches`      | `in`, `"`     |
| `feet`        | `ft`, `'`     |
| `yards`       | `yd`          |
| `miles`       | `mi`          |
|               |               |
| `millimeters` | `mm`          |
| `centimeters` | `cm`          |
| `meters`      | `m`           |
| `kilometers`  | `km`          |

#### Fluid Volume

_All standard measurements use US customary units._

| Measurement    | Abbreviations |
|:---------------|:--------------|
| `teaspoons`    | `tsp`         |
| `tablespoons`  | `tbsp`        |
| `fluid ounces` | `fl oz`       |
| `shots`        | `jig`         |
| `cups`         | `cp`          |
| `pints`        | `pt`          |
| `quarts`       | `qt`          |
| `gallons`      | `gal`         |
|                |               |
| `milliliters`  | `mL`          |
| `liters`       | `L`           |
