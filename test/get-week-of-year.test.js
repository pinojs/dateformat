'use strict'

const { describe, it } = require('node:test')
const {getWeekOfYear} = require('../index.js')
const weekOfYear = require('./fixtures/week-of-year.json')

process.env.TZ = 'UTC'

describe('getWeekOfYear', () => {
  it('should return the correct week of year', (t) => {
    for (const [date, expected] of weekOfYear) {
      const d = new Date(date)
      t.assert.strictEqual(getWeekOfYear(d), expected, `Week of year for ${date} should be ${expected}`)
    }
  })
})
