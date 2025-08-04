const { describe, it } = require('node:test')
const dateFormat = require('./../../lib/date-format.js')

describe("Mask: 'yy'", function () {
  it("should format '1789-11-12' as '89'", (t) => {
    const date = new Date('1789-11-12')
    const d = dateFormat(date, 'yy')
    t.assert.strictEqual(d, '89')
  })

  it("should format '2089-10-2' as '89'", (t) => {
    const date = new Date('2089-10-2')
    const d = dateFormat(date, 'yy')
    t.assert.strictEqual(d, '89')
  })

  it("should format '2000-02-7' as '00'", (t) => {
    const date = new Date('2000-02-7')
    const d = dateFormat(date, 'yy')
    t.assert.strictEqual(d, '00')
  })

  it("should format '1999-11-27' as '99'", (t) => {
    const date = new Date('1999-11-27')
    const d = dateFormat(date, 'yy')
    t.assert.strictEqual(d, '99')
  })
})
