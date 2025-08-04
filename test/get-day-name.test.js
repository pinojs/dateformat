'use strict'

const { describe, it } = require('node:test')
const getDayName = require('../lib/get-day-name')
const i18n = require('../lib/i18n').i18n

describe('getDayName', () => {
  it('should return "Today" for today\'s date', (t) => {
    const today = new Date()
    t.assert.strictEqual(getDayName({ date: today, D: t.assert.fail, short: false, i18n }), 'Today')
  })

  it('should return "Tdy" for today\'s date with short names', (t) => {
    const today = new Date()
    t.assert.strictEqual(getDayName({ date: today, D: t.assert.fail, short: true, i18n }), 'Tdy')
  })

  it('should return "Tomorrow" for tomorrow\'s date', (t) => {
    const tomorrow = new Date(Date.now() + 86400000) // 24 hours later
    t.assert.strictEqual(getDayName({ date: tomorrow, D: t.assert.fail, short: false, i18n }), 'Tomorrow')
  })

  it('should return "Tmw" for tomorrow\'s date with short names', (t) => {
    const tomorrow = new Date(Date.now() + 86400000) // 24 hours later
    t.assert.strictEqual(getDayName({ date: tomorrow, D: t.assert.fail, short: true, i18n }), 'Tmw')
  })

  it('should return "Yesterday" for yesterday\'s date', (t) => {
    const yesterday = new Date(Date.now() - 86400000) // 24 hours earlier
    t.assert.strictEqual(getDayName({ date: yesterday, D: t.assert.fail, short: false, i18n }), 'Yesterday')
  })

  it('should return "Ysd" for yesterday\'s date with short names', (t) => {
    const yesterday = new Date(Date.now() - 86400000) // 24 hours earlier
    t.assert.strictEqual(getDayName({ date: yesterday, D: t.assert.fail, short: true, i18n }), 'Ysd')
  })
})
