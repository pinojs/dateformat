const { describe, it } = require('node:test')
const { dateFormat } = require('./../../index.js')

describe("Mask: 'WW'", function () {
  it("should format '1876-01-12' as '02'", (t) => {
    const date = new Date('1876-01-12')
    const d = dateFormat(date, 'WW')
    t.assert.strictEqual(d, '02')
  })

  it("should format '2013-12-11' as '50'", (t) => {
    const date = new Date('2013-12-11')
    const d = dateFormat(date, 'WW')
    t.assert.strictEqual(d, '50')
  })

  it("should format '2020-03-04' as '10'", (t) => {
    const d = dateFormat('2020-03-04', 'WW')
    t.assert.strictEqual(d, '10')
  })

  it("should format '2020-02-01' as '05'", (t) => {
    const d = dateFormat('2020-02-01', 'WW')
    t.assert.strictEqual(d, '05')
  })
})
