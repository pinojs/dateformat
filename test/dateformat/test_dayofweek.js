'use strict'

const { describe, it } = require('node:test')

const { dateformat } = require('./../../index.js')

describe('dayOfWeek', function () {
  it('should correctly format the timezone part', function (t) {
    const start = 10 // the 10 of March 2013 is a Sunday
    for (let dow = 1; dow <= 7; dow++) {
      const date = new Date('2013-03-' + (start + dow))
      const N = dateformat(date, 'N')
      t.assert.strictEqual(N, String(dow))
    }
  })
})
