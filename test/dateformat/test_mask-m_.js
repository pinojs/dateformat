const { describe, it } = require('node:test')
const { dateformat } = require('./../../index.js')

describe("Mask: 'M'", function () {
  it("should format '1993-02-12T17:36:01.128' as '36'", (t) => {
    const date = new Date('1993-02-12T17:36:01.128')
    const d = dateformat(date, 'M')
    t.assert.strictEqual(d, '36')
  })

  it("should format '2013-11-02T07:00:54.270' as '0'", (t) => {
    const date = new Date('2013-11-02T07:00:54.270')
    const d = dateformat(date, 'M')
    t.assert.strictEqual(d, '0')
  })

  it("should format '1873-01-04T11:11:34.700' as '11'", (t) => {
    const d = dateformat('1873-01-04T11:11:34.700', 'M')
    t.assert.strictEqual(d, '11')
  })

  it("should format '1734-12-07T09:05:07.972' as '5'", (t) => {
    const d = dateformat('1734-12-07T09:05:07.972', 'M')
    t.assert.strictEqual(d, '5')
  })
})
