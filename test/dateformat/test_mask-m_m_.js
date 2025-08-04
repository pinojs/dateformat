const { describe, it } = require('node:test')
const dateFormat = require('./../../lib/date-format.js')

describe("Mask: 'MM'", function () {
  it("should format '1876-07-11T13:19:36.341' as '19'", (t) => {
    const date = new Date('1876-07-11T13:19:36.341')
    const d = dateFormat(date, 'MM')
    t.assert.strictEqual(d, '19')
  })

  it("should format '2013-01-23T07:08:07.942' as '08'", (t) => {
    const date = new Date('2013-01-23T07:08:07.942')
    const d = dateFormat(date, 'MM')
    t.assert.strictEqual(d, '08')
  })

  it("should format '1982-12-03T08:04:07.203' as '04'", (t) => {
    const d = dateFormat('1982-12-03T08:04:07.203', 'MM')
    t.assert.strictEqual(d, '04')
  })

  it("should format '2063-09-03T02:38:08.815' as '38'", (t) => {
    const d = dateFormat('2063-09-03T02:38:08.815', 'MM')
    t.assert.strictEqual(d, '38')
  })
})
