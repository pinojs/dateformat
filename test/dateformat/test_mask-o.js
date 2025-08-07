const { describe, it } = require('node:test')
const { dateformat } = require('./../../index.js')

describe("Mask: 'o'", function () {
  it('should get timezone for any date as something like [+-]XXXX', (t) => {
    const date = new Date()
    const d = dateformat(date, 'o')
    t.assert.ok(d.match(/^[+-]\d{4}$/), d)
  })
})
