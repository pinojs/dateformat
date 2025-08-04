const { describe, it } = require('node:test')
const { dateFormat } = require('./../../index.js')

describe("Mask: 'TT'", function () {
  it("should format '1876-04-23T07:35:20.830' as 'AM'", (t) => {
    const date = new Date('1876-04-23T07:35:20.830')
    const d = dateFormat(date, 'TT')
    t.assert.strictEqual(d, 'AM')
  })

  it("should format '2018-04-27T18:50:35.567' as 'PM'", (t) => {
    const date = new Date('2018-04-27T18:50:35.567')
    const d = dateFormat(date, 'TT')
    t.assert.strictEqual(d, 'PM')
  })

  it("should format '2032-05-07T06:45:41.382' as 'AM'", (t) => {
    const d = dateFormat('2032-05-07T06:45:41.382', 'TT')
    t.assert.strictEqual(d, 'AM')
  })

  it("should format '1976-11-25T19:44:08.918' as 'PM'", (t) => {
    const d = dateFormat('1976-11-25T19:44:08.918', 'TT')
    t.assert.strictEqual(d, 'PM')
  })
})
