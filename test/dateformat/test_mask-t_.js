const { describe, it } = require('node:test')
const { dateformat } = require('./../../index.js')

describe("Mask: 'T'", function () {
  it("should format '1654-04-11T08:47:34.086' as 'A'", (t) => {
    const date = new Date('1654-04-11T08:47:34.086')
    const d = dateformat(date, 'T')
    t.assert.strictEqual(d, 'A')
  })

  it("should format '2001-02-06T15:10:43.798' as 'P'", (t) => {
    const date = new Date('2001-02-06T15:10:43.798')
    const d = dateformat(date, 'T')
    t.assert.strictEqual(d, 'P')
  })

  it("should format '1998-12-01T12:43:14.920' as 'A'", (t) => {
    const d = dateformat('2020-08-29T00:32:00.101', 'T')
    t.assert.strictEqual(d, 'A')
  })

  it("should format '2020-10-01T17:20:03.223' as 'p'", (t) => {
    const d = dateformat('2020-10-01T17:20:03.223', 'T')
    t.assert.strictEqual(d, 'P')
  })
})
