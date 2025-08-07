const { describe, it } = require('node:test')
const { dateformat } = require('./../../index.js')

describe("Mask: 'ss'", function () {
  it("should format '1876-03-22T23:08:02.429' as '02'", (t) => {
    const date = new Date('1876-03-22T23:08:02.429')
    const d = dateformat(date, 'ss')
    t.assert.strictEqual(d, '02')
  })

  it("should format '2013-12-11T05:34:35.350' as '35'", (t) => {
    const date = new Date('2013-12-11T05:34:35.350')
    const d = dateformat(date, 'ss')
    t.assert.strictEqual(d, '35')
  })

  it("should format '2020-08-29T00:32:00.101' as '00'", (t) => {
    const d = dateformat('2020-08-29T00:32:00.101', 'ss')
    t.assert.strictEqual(d, '00')
  })

  it("should format '2020-09-22T07:04:09.358' as '09'", (t) => {
    const d = dateformat('2020-09-22T07:04:09.358', 'ss')
    t.assert.strictEqual(d, '09')
  })
})
