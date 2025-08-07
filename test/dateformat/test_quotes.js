const { describe, it } = require('node:test')

const { dateformat } = require('./../../index.js')

describe('quoted substrings', function () {
  const az = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
  it('should not format single quoted substrings removing quotes', function (t) {
    const result = dateformat(new Date(), "'" + az + "'")
    t.assert.strictEqual(result, az)
  })

  it('should not format double quoted substrings removing quotes', function (t) {
    const result = dateformat(new Date(), '"' + az + '"')
    t.assert.strictEqual(result, az)
  })
})
