const { describe, it } = require('node:test')
const dateFormat = require('./../../lib/date-format.js')

describe("Mask: 's'", function () {
  it("should format '1993-10-08T10:31:40.811' as '40'", (t) => {
    const date = new Date('1993-10-08T10:31:40.811')
    const d = dateFormat(date, 's')
    t.assert.strictEqual(d, '40')
  })

  it("should format '2020-10-25T01:29:02.327' as '2'", (t) => {
    const date = new Date('2020-10-25T01:29:02.327')
    const d = dateFormat(date, 's')
    t.assert.strictEqual(d, '2')
  })

  it("should format '2003-07-02T01:29:00.327' as '0'", (t) => {
    const d = dateFormat('2003-07-02T01:29:00.327', 's')
    t.assert.strictEqual(d, '0')
  })
})
