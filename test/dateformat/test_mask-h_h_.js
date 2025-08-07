const { describe, it } = require('node:test')
const { dateformat } = require('./../../index.js')

describe("Mask: 'HH'", function () {
  it("should format '1872-02-01T15:55:16.524' as '15'", (t) => {
    const date = new Date('1872-02-01T15:55:16.524')
    const d = dateformat(date, 'HH')
    t.assert.strictEqual(d, '15')
  })

  it("should format '2020-10-08T14:32:24.438' as '14'", (t) => {
    const date = new Date('2020-10-08T14:32:24.438')
    const d = dateformat(date, 'HH')
    t.assert.strictEqual(d, '14')
  })

  it("should format '2077-12-24T04:20:55.795' as '04'", (t) => {
    const d = dateformat('2077-12-24T04:20:55.795', 'HH')
    t.assert.strictEqual(d, '04')
  })

  it("should format '1782-02-11T01:09:41.403' as '01'", (t) => {
    const d = dateformat('1782-02-11T01:09:41.403', 'HH')
    t.assert.strictEqual(d, '01')
  })
})
