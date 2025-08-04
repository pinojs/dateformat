const { describe, it } = require('node:test')
const { dateFormat } = require('./../../index.js')

describe("Mask: 'mmmm'", function () {
  it("should format '1993-02-11' as 'February'", function (t) {
    const date = new Date('1993-02-11')
    const d = dateFormat(date, 'mmmm')
    t.assert.strictEqual(d, 'February')
  })

  it("should format '2023-11-13' as 'November'", function (t) {
    const date = new Date('2023-11-13')
    const d = dateFormat(date, 'mmmm')
    t.assert.strictEqual(d, 'November')
  })

  it("should format '2077-10-01' as 'October'", function (t) {
    const date = new Date('2077-10-01')
    const d = dateFormat(date, 'mmmm')
    t.assert.strictEqual(d, 'October')
  })
})
