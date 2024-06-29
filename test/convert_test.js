import { convert } from '../src'
import { expect } from 'chai'

describe('convert().to()', () => {
  it('converts standard weight measures to their metric equivalent', () => {
    expect(
      convert('1.2lb 6oz').to('kg')
    ).to.eq(
      0.62368947
    )
  })
})

describe('convert().toBaseUnits()', () => {
  it('reduces a mix of measures to a shared base unit', () => {
    expect(
      convert('1lb 6oz').inBaseUnits().toString()
    ).to.eq(
      '22oz'
    )
  })
})
