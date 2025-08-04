const { describe, it } = require('node:test')
const { dateFormat } = require('./../../index.js')

describe("Mask: 'm'", function () {
  it("should format '1974-02-7' as '2'", (t) => {
    const date = new Date('1974-02-7')
    const d = dateFormat(date, 'm')
    t.assert.strictEqual(d, '2')
  })

  it("should format '1992-09-03' as '9'", (t) => {
    const date = new Date('1992-09-03')
    const d = dateFormat(date, 'm')
    t.assert.strictEqual(d, '9')
  })

  it("should format '2043-12-22' as '12'", (t) => {
    const date = new Date('2043-12-22')
    const d = dateFormat(date, 'm')
    t.assert.strictEqual(d, '12')
  })

  it("should format '1800-01-01' as '1'", (t) => {
    const date = new Date('1800-01-01')
    const d = dateFormat(date, 'm')
    t.assert.strictEqual(d, '1')
  })
})
