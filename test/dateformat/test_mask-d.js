const { describe, it } = require('node:test')
const { dateFormat } = require('./../../index.js')

describe("Mask: 'd'", function () {
  it("should format '1993-03-12' as '12'", (t) => {
    const date = new Date('1993-03-12')
    const d = dateFormat(date, 'd')
    t.assert.strictEqual(d, '12')
  })

  it("should format '2020-11-1' as '1'", (t) => {
    const date = new Date('2020-11-1')
    const d = dateFormat(date, 'd')
    t.assert.strictEqual(d, '1')
  })

  it("should format '1830-01-20' as '20'", (t) => {
    const date = new Date('1830-01-20')
    const d = dateFormat(date, 'd')
    t.assert.strictEqual(d, '20')
  })

  it("should not format '1830-01-06' as '06'", (t) => {
    const date = new Date('1830-01-20')
    const d = dateFormat(date, 'd')
    t.assert.notStrictEqual(d, '06')
  })
})
