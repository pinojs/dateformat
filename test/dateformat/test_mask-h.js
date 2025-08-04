const { describe, it } = require('node:test')
const dateFormat = require('./../../lib/date-format.js')

describe("Mask: 'h'", function () {
  it("should format '2020-10-22T22:10:59.736' as '10'", (t) => {
    const date = new Date('2020-10-22T22:10:59.736')
    const d = dateFormat(date, 'h')
    t.assert.strictEqual(d, '10')
  })

  it("should format '2020-10-13T13:30:41.278' as '1'", (t) => {
    const date = new Date('2020-10-13T13:30:41.278')
    const d = dateFormat(date, 'h')
    t.assert.strictEqual(d, '1')
  })

  it("should format '1993-02-19T03:18:18.711' as '3'", (t) => {
    const d = dateFormat('1993-02-19T03:18:18.711', 'h')
    t.assert.strictEqual(d, '3')
  })

  it("should format '2134-01-25T02:20:42.816' as '2'", (t) => {
    const d = dateFormat('2134-01-25T02:20:42.816', 'h')
    t.assert.strictEqual(d, '2')
  })
})
