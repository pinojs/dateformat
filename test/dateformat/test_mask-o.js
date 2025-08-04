const { describe, it } = require('node:test')
const dateFormat = require('./../../lib/date-format.js')

describe("Mask: 'o'", function () {
  it('should get timezone for any date as something like [+-]XXXX', (t) => {
    const date = new Date()
    const d = dateFormat(date, 'o')
    t.assert.ok(d.match(/^[+-]\d{4}$/), d)
  })
})
