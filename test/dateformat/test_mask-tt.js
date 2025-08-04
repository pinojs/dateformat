const { describe, it } = require('node:test')
const dateFormat = require('./../../lib/date-format.js')

describe("Mask: 'tt'", function () {
  it("should format '1876-03-22T23:08:02.429' as 'pm'", (t) => {
    const date = new Date('1876-03-22T23:08:02.429')
    const d = dateFormat(date, 'tt')
    t.assert.strictEqual(d, 'pm')
  })

  it("should format '2013-12-11T05:34:35.350' as 'am'", (t) => {
    const date = new Date('2013-12-11T05:34:35.350')
    const d = dateFormat(date, 'tt')
    t.assert.strictEqual(d, 'am')
  })

  it("should format '2020-08-29T00:32:00.101' as 'am'", (t) => {
    const d = dateFormat('2020-08-29T00:32:00.101', 'tt')
    t.assert.strictEqual(d, 'am')
  })

  it("should format '2020-09-22T23:04:09.358' as 'pm'", (t) => {
    const d = dateFormat('2020-09-22T23:04:09.358', 'tt')
    t.assert.strictEqual(d, 'pm')
  })
})
