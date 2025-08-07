const { describe, it } = require('node:test')
const { dateformat } = require('./../../index.js')

describe("Mask: 'ddd'", function () {
  it("should format '2023-01-07' as 'Sat'", (t) => {
    const date = new Date('2023-01-07')
    const d = dateformat(date, 'ddd')
    t.assert.strictEqual(d, 'Sat')
  })

  it("should format '1873-12-17' as 'Wed'", (t) => {
    const date = new Date('1873-12-17')
    const d = dateformat(date, 'ddd')
    t.assert.strictEqual(d, 'Wed')
  })

  it("should format '2112-10-25' as 'Tue'", (t) => {
    const date = new Date('2112-10-25')
    const d = dateformat(date, 'ddd')
    t.assert.strictEqual(d, 'Tue')
  })
})
