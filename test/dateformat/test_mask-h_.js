const { describe, it } = require('node:test')
const dateFormat = require('./../../lib/date-format.js')

describe("Mask: 'H'", function () {
  it("should format '1883-03-22T07:35:26.419' as '7'", (t) => {
    const date = new Date('1883-03-22T07:35:26.419')
    const d = dateFormat(date, 'H')
    t.assert.strictEqual(d, '7')
  })

  it("should format '2012-11-07T14:39:48.988' as '14'", (t) => {
    const date = new Date('2012-11-07T14:39:48.988')
    const d = dateFormat(date, 'H')
    t.assert.strictEqual(d, '14')
  })

  it("should format '1882-01-16T19:37:45.965' as '19'", (t) => {
    const d = dateFormat('1882-01-16T19:37:45.965', 'H')
    t.assert.strictEqual(d, '19')
  })

  it("should format '2020-08-29T11:20:47.128' as '11'", (t) => {
    const d = dateFormat('2020-08-29T11:20:47.128', 'H')
    t.assert.strictEqual(d, '11')
  })
})
