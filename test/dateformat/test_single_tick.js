const { describe, it } = require('node:test')

const { dateformat } = require('./../../index.js')

describe('single tick', function () {
  const az = '`special`'
  it('should not format single quoted substrings removing quotes', function (t) {
    const result = dateformat(new Date(), "'" + az + "'")
    t.assert.strictEqual(result, az)
  })
})
