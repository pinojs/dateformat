const { describe, it } = require('node:test')
const { dateFormat } = require('./../../index.js')

describe("Mask: 'p'", function () {
  it('should get timezone for any date as something like [+-]XX:XX', (t) => {
    const date = new Date()
    const d = dateFormat(date, 'p')
    t.assert.ok(d.match(/^[+-]\d{2}:\d{2}$/), d)

    console.log(dateFormat(date, 'isoDateTime'))
  })
})
