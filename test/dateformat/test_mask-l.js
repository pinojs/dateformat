const { describe, it } = require('node:test')
const { dateFormat } = require('./../../index.js')

describe("Mask: 'l'", function () {
  it("should format '2020-10-10T08:48:02.436' as '436'", (t) => {
    const date = new Date('2020-10-10T08:48:02.436')
    const d = dateFormat(date, 'l')
    t.assert.strictEqual(d, '436')
  })

  it("should format '1993-02-16T14:22:12.654' as '654'", (t) => {
    const date = new Date('1993-02-16T14:22:12.654')
    const d = dateFormat(date, 'l')
    t.assert.strictEqual(d, '654')
  })

  it("should format '2076-01-03T18:23:30.064' as '064'", (t) => {
    const d = dateFormat('2076-01-03T18:23:30.064', 'l')
    t.assert.strictEqual(d, '064')
  })

  it("should format '2002-12-25T19:35:55.655' as '655'", (t) => {
    const d = dateFormat('2002-12-25T19:35:55.655', 'l')
    t.assert.strictEqual(d, '655')
  })
})
