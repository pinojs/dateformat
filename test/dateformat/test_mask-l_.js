const { describe, it } = require('node:test')
const { dateFormat } = require('./../../index.js')

describe("Mask: 'L'", function () {
  it("should format '2020-10-10T08:48:02.436' as '44'", (t) => {
    const date = new Date('2020-10-10T08:48:02.436')
    const d = dateFormat(date, 'L')
    t.assert.strictEqual(d, '43')
  })

  it("should format '1993-02-16T14:22:12.654' as '65'", (t) => {
    const date = new Date('1993-02-16T14:22:12.654')
    const d = dateFormat(date, 'L')
    t.assert.strictEqual(d, '65')
  })

  it("should format '2076-01-03T18:23:30.064' as '06'", (t) => {
    const d = dateFormat('2076-01-03T18:23:30.064', 'L')
    t.assert.strictEqual(d, '06')
  })

  it("should format '2002-12-25T19:35:55.655' as '66'", (t) => {
    const d = dateFormat('2002-12-25T19:35:55.655', 'L')
    t.assert.strictEqual(d, '65')
  })

  it("should format '2126-07-23T03:15:25.999' as '99'", (t) => {
    const d = dateFormat('2126-07-23T03:15:25.999', 'L')
    t.assert.strictEqual(d, '99')
  })
})
