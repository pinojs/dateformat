const { describe, it } = require('node:test')
const { dateFormat } = require('./../../index.js')

describe("Mask: 'S'", function () {
  it("should format '1984-02-7' as 'th'", (t) => {
    const date = new Date('1984-02-7')
    const d = dateFormat(date, 'S')
    t.assert.strictEqual(d, 'th')
  })

  it("should format '2013-01-3' as 'rd'", (t) => {
    const date = new Date('2013-01-3')
    const d = dateFormat(date, 'S')
    t.assert.strictEqual(d, 'rd')
  })

  it("should format '2034-11-22' as 'nd'", (t) => {
    const d = dateFormat('2034-11-22', 'S')
    t.assert.strictEqual(d, 'nd')
  })

  it("should format '2002-02-1' as 'st'", (t) => {
    const d = dateFormat('2002-02-1', 'S')
    t.assert.strictEqual(d, 'st')
  })

  it("should format '2002-03-31' as 'st'", (t) => {
    const d = dateFormat('2002-03-31', 'S')
    t.assert.strictEqual(d, 'st')
  })
})
