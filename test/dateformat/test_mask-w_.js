const { describe, it } = require('node:test')
const { dateFormat } = require('./../../index.js')

describe("Mask: 'W'", function () {
  it("should format '1876-03-22' as '12'", (t) => {
    const date = new Date('1876-03-22')
    const d = dateFormat(date, 'W')
    t.assert.strictEqual(d, '12')
  })

  it("should format '2013-12-11' as '50'", (t) => {
    const date = new Date('2013-12-11')
    const d = dateFormat(date, 'W')
    t.assert.strictEqual(d, '50')
  })

  it("should format '2020-08-29' as '35'", (t) => {
    const d = dateFormat('2020-08-29', 'W')
    t.assert.strictEqual(d, '35')
  })

  it("should format '2020-09-22' as '39'", (t) => {
    const d = dateFormat('2020-09-22', 'W')
    t.assert.strictEqual(d, '39')
  })
})
