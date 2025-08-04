const { describe, it } = require('node:test')
const { dateFormat } = require('./../../index.js')

describe("Mask: 'dddd'", function () {
  it("should format '1934-11-13' as 'Tuesday'", (t) => {
    const date = new Date('1934-11-13')
    const d = dateFormat(date, 'dddd')
    t.assert.strictEqual(d, 'Tuesday')
  })

  it("should format '1834-01-2' as 'Thursday'", (t) => {
    const date = new Date('1834-01-2')
    const d = dateFormat(date, 'dddd')
    t.assert.strictEqual(d, 'Thursday')
  })

  it("should format '2077-7-22' as 'Thursday'", (t) => {
    const date = new Date('2077-7-22')
    const d = dateFormat(date, 'dddd')
    t.assert.strictEqual(d, 'Thursday')
  })
})
