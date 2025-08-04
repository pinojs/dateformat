const { describe, it, beforeEach } = require('node:test')

const { dateFormat } = require('../../index.js')

const dayNamesShort = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
const dayNamesLong = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
const threeDays = ['Yesterday', 'Today', 'Tomorrow', 'Ysd', 'Tdy', 'Tmw']

describe('threeDays', function () {
  let date, DDD, DDDD
  beforeEach(function () {
    date = new Date()
  })
  it('should return "Yesterday" (Today - 1 day)', (t) => {
    date.setDate(date.getDate() - 1)
    DDDD = dateFormat(date, 'DDDD')
    t.assert.strictEqual(DDDD, 'Yesterday')
  })
  it('should return "Ysd" (Today - 1 day)', (t) => {
    date.setDate(date.getDate() - 1)
    DDD = dateFormat(date, 'DDD')
    t.assert.strictEqual(DDD, 'Ysd')
  })
  it('should return "Today" (Today)', (t) => {
    DDDD = dateFormat(date, 'DDDD')
    t.assert.strictEqual(DDDD, 'Today')
  })
  it('should return "Tdy" (Today)', (t) => {
    DDD = dateFormat(date, 'DDD')
    t.assert.strictEqual(DDD, 'Tdy')
  })
  it('should return "Tomorrow" (Today + 1 day)', (t) => {
    date.setDate(date.getDate() + 1)
    DDDD = dateFormat(date, 'DDDD')
    t.assert.strictEqual(DDDD, 'Tomorrow')
  })
  it('should return "Tmw" (Today + 1 day)', (t) => {
    date.setDate(date.getDate() + 1)
    DDD = dateFormat(date, 'DDD')
    t.assert.strictEqual(DDD, 'Tmw')
  })
  it('should not return "Yesterday", "Today", "Tomorrow", "Ysd", "Tdy", or "Tmw" (Today - 2 days)', (t) => {
    date.setDate(date.getDate() - 2)
    DDD = dateFormat(date, 'DDD')
    DDDD = dateFormat(date, 'DDDD')
    t.assert.strictEqual(threeDays.indexOf(DDD), -1)
    t.assert.strictEqual(threeDays.indexOf(DDDD), -1)
  })
  it('should not return "Yesterday", "Today" or "Tomorrow", "Ysd", "Tdy", or "Tmw" (Today + 2 days)', (t) => {
    date.setDate(date.getDate() + 2)
    DDD = dateFormat(date, 'DDD')
    DDDD = dateFormat(date, 'DDDD')
    t.assert.strictEqual(threeDays.indexOf(DDD), -1)
    t.assert.strictEqual(threeDays.indexOf(DDDD), -1)
  })
  it('should return short day name (Today - 2 days)', (t) => {
    date.setDate(date.getDate() - 2)
    DDD = dateFormat(date, 'DDD')
    t.assert.notStrictEqual(dayNamesShort.indexOf(DDD), -1)
  })
  it('should return short day name (Today + 2 days)', (t) => {
    date.setDate(date.getDate() + 2)
    DDD = dateFormat(date, 'DDD')
    t.assert.notStrictEqual(dayNamesShort.indexOf(DDD), -1)
  })
  it('should return long day name (Today - 2 days)', (t) => {
    date.setDate(date.getDate() - 2)
    DDDD = dateFormat(date, 'DDDD')
    t.assert.notStrictEqual(dayNamesLong.indexOf(DDDD), -1)
  })
  it('should return short day name (Today + 2 days)', (t) => {
    date.setDate(date.getDate() + 2)
    DDDD = dateFormat(date, 'DDDD')
    t.assert.notStrictEqual(dayNamesLong.indexOf(DDDD), -1)
  })
})
