const { describe, it } = require('node:test')
const { dateFormat } = require('./../../index.js')

describe("Mask: 'N'", function () {
  it("should format '1984-02-7' as '2'", (t) => {
    const date = new Date('1984-02-7')
    const d = dateFormat(date, 'N')
    t.assert.strictEqual(d, '2')
  })

  it("should format '2013-01-17' as '4'", (t) => {
    const date = new Date('2013-01-17')
    const d = dateFormat(date, 'N')
    t.assert.strictEqual(d, '4')
  })

  it("should format '2034-11-24' as '5'", (t) => {
    const d = dateFormat('2034-11-24', 'N')
    t.assert.strictEqual(d, '5')
  })

  it("should format '2002-02-3' as '7'", (t) => {
    const d = dateFormat('2002-02-3', 'N')
    t.assert.strictEqual(d, '7')
  })

  it("should format '2002-02-4' as '1'", (t) => {
    const d = dateFormat('2002-02-4', 'N')
    t.assert.strictEqual(d, '1')
  })
})
