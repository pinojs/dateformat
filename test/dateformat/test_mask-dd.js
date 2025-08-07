const { describe, it } = require('node:test')
const { dateformat } = require('./../../index.js')

describe("Mask: 'dd'", function () {
  it("should format '2003-9-11' as '11'", (t) => {
    const date = new Date('2003-9-11')
    const d = dateformat(date, 'dd')
    t.assert.strictEqual(d, '11')
  })

  it("should format '1992-02-2' as '02'", (t) => {
    const date = new Date('1992-02-2')
    const d = dateformat(date, 'dd')
    t.assert.strictEqual(d, '02')
  })

  it("should format '1032-12-07' as '07'", (t) => {
    const date = new Date('1032-12-07')
    const d = dateformat(date, 'dd')
    t.assert.strictEqual(d, '07')
  })

  it("should not format '2077-10-06' as '6'", (t) => {
    const date = new Date('2077-10-06')
    const d = dateformat(date, 'dd')
    t.assert.notStrictEqual(d, '6')
  })
})
