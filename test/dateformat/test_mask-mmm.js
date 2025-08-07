const { describe, it } = require('node:test')
const { dateformat } = require('./../../index.js')

describe("Mask: 'mmm'", function () {
  it("should format '2099-1-11' as 'Jan'", (t) => {
    const date = new Date('2099-1-11')
    const d = dateformat(date, 'mmm')
    t.assert.strictEqual(d, 'Jan')
  })

  it("should format '1982-10-01' as 'Oct'", (t) => {
    const date = new Date('1982-10-01')
    const d = dateformat(date, 'mmm')
    t.assert.strictEqual(d, 'Oct')
  })

  it("should format '1871-03-22' as 'Mar'", (t) => {
    const date = new Date('1871-03-22')
    const d = dateformat(date, 'mmm')
    t.assert.strictEqual(d, 'Mar')
  })
})
