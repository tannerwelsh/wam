import { uniq } from 'lodash'

const sum = (a, b) => a + b
const self = (a) => a
const multBy = (b) => (a) => a * b
const divBy = (b) => (a) => a / b

const UNIT_LIST = {
  'oz': { base: 'oz', reduce: self, symbols: new Set(['oz', 'ounces']) },
  'lb': { base: 'oz', reduce: multBy(16), symbols: new Set(['lb', 'pounds']) },
  'g': { base: 'g', reduce: self, symbols: new Set(['g', 'grams']) },
  'kg': { base: 'g', reduce: multBy(1000), symbols: new Set(['kg', 'kilograms']) }
}



function getUnit(unitName) {
  let unit = UNIT_LIST[unitName]
  if (unit) return unit

  return Object.values(UNIT_LIST).find(u => u.symbols.has(unitName))
}

function findBase(units) {
  units = uniq(units)
  const base = uniq(units.map(unit => getUnit(unit).base))
  if (base.length > 1) {
    throw new Error(`Units ${units} do not share the same base`)
  }

  return base[0]
}

class Measurement {
  constructor(amts) {
    this.amts = amts
    this.baseUnit = findBase(Object.keys(amts))
  }

  inBaseUnits() {
    const total = Object.entries(this.amts)
      .map(([unit, amt]) => getUnit(unit).reduce(amt))
      .reduce(sum)

    const amts = {}
    amts[this.baseUnit] = total
    return new Measurement(amts)
  }

  to(unit) {
    if (this.baseUnit === unit) return this.inBaseUnits()
    // switch (unit) {
    //   case 'kg':
    //
    //     break;
    //   default:
    //
    // }
  }

  toString() {
    return Object.entries(this.amts)
      .map(([unit, amt]) => `${amt}${unit}`)
      .join(' ')
  }
}

function convert(meas) {
  if (typeof meas === 'object') return new Measurement(meas)
  return parse(meas)
}

function parse(meas) {
  const pattern = /((\d+[./]\d+|\d+)\s*(\D+))/g
  const amts = {}
  let match

  while ((match = pattern.exec(meas)) !== null) {
    if (match.index === pattern.lastIndex) pattern.lastIndex++

    const [amt, unit] = match.slice(2, 4).map(s => s.trim())
    amts[unit] = Number(amt)
  }

  return new Measurement(amts)
}

export {
  convert
}
