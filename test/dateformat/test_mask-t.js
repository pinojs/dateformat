const { describe, it } = require('node:test')
const { dateformat } = require('./../../index.js')

describe("Mask: 't'", function () {
  it("should format '1876-03-22T23:08:02.429' as 'p'", (t) => {
    const date = new Date('1876-03-22T23:08:02.429')
    const d = dateformat(date, 't')
    t.assert.strictEqual(d, 'p')
  })

  it("should format '2013-12-11T05:34:35.350' as 'a'", (t) => {
    const date = new Date('2013-12-11T05:34:35.350')
    const d = dateformat(date, 't')
    t.assert.strictEqual(d, 'a')
  })

  it("should format '2020-08-29T00:32:00.101' as 'a'", (t) => {
    const d = dateformat('2020-08-29T00:32:00.101', 't')
    t.assert.strictEqual(d, 'a')
  })

  it("should format '2020-09-22T23:04:09.358' as 'p'", (t) => {
    const d = dateformat('2020-09-22T23:04:09.358', 't')
    t.assert.strictEqual(d, 'p')
  })
})
