const { describe, it } = require('node:test')
const dateFormat = require('./../../lib/date-format.js')

describe("Mask: 'yyyy'", function () {
  it("should format '1992-10-6' as '1992'", (t) => {
    const date = new Date('1992-10-6')
    const d = dateFormat(date, 'yyyy')
    t.assert.strictEqual(d, '1992')
  })

  it("should format '2078-02-11' as '2078'", (t) => {
    const date = new Date('2078-02-11')
    const d = dateFormat(date, 'yyyy')
    t.assert.strictEqual(d, '2078')
  })

  it("should format '1763-12-02' as '1763'", (t) => {
    const date = new Date('1763-12-02')
    const d = dateFormat(date, 'yyyy')
    t.assert.strictEqual(d, '1763')
  })

  it("should format '0999-01-01' as '0999'", (t) => {
    const date = new Date('0999-01-01')
    const d = dateFormat(date, 'yyyy')
    t.assert.strictEqual(d, '0999')
  })

  it("should format '0002-12-11' as '0002'", (t) => {
    const date = new Date('0002-12-11')
    const d = dateFormat(date, 'yyyy')
    t.assert.strictEqual(d, '0002')
  })
})
