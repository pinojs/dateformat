const { describe, it } = require('node:test')
const { dateformat } = require('./../../index.js')

describe("Mask: 'mm'", function () {
  it("should format '2014-11-17' as '11'", (t) => {
    const date = new Date('2014-11-17')
    const d = dateformat(date, 'mm')
    t.assert.strictEqual(d, '11')
  })

  it("should format '1992-02-11' as '02'", (t) => {
    const date = new Date('1992-02-11')
    const d = dateformat(date, 'mm')
    t.assert.strictEqual(d, '02')
  })

  it("should format '2077-01-25' as '01'", (t) => {
    const date = new Date('2077-01-25')
    const d = dateformat(date, 'mm')
    t.assert.strictEqual(d, '01')
  })
})
