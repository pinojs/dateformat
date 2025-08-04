const { describe, it } = require('node:test')

const dateFormat = require('./../../lib/date-format.js')

describe('isoUtcDateTime', function () {
  it('should correctly format the timezone part', (t) => {
    const actual = dateFormat('2014-06-02T13:23:21-08:00', 'isoUtcDateTime')
    t.assert.strictEqual(actual, '2014-06-02T21:23:21Z')
    const epochTime = dateFormat(0, 'isoUtcDateTime')
    t.assert.strictEqual(epochTime, '1970-01-01T00:00:00Z')
  })
})
