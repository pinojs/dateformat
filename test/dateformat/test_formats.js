const { describe, it } = require('node:test')
const { dateformat, standardMasks: masks, formatStandardMask } = require('../../index.js')

const expects = {
  default: 'Sat Mar 08 2014 13:19:44',
  shortDate: '3/8/14',
  paddedShortDate: '03/08/2014',
  mediumDate: 'Mar 8, 2014',
  longDate: 'March 8, 2014',
  fullDate: 'Saturday, March 8, 2014',
  shortTime: '1:19 PM',
  mediumTime: '1:19:44 PM',
  longTime: '1:19:44 PM %TZ_PREFIX%%TZ_OFFSET%',
  isoDate: '2014-03-08',
  isoTime: '13:19:44',
  isoDateTime: '2014-03-08T13:19:44%TZ_OFFSET%',
  isoUtcDateTime: '2014-03-08T12:19:44Z',
  expiresHeaderFormat: 'Sat, 08 Mar 2014 13:19:44 %TZ_PREFIX%%TZ_OFFSET%',
  'ddd mmm dd yyyy HH:MM:ss': 'Sat Mar 08 2014 13:19:44',
  'm/d/yy': '3/8/14',
  'mm/dd/yyyy': '03/08/2014',
  'mmm d, yyyy': 'Mar 8, 2014',
  'mmmm d, yyyy': 'March 8, 2014',
  'dddd, mmmm d, yyyy': 'Saturday, March 8, 2014',
  'yyyy-mm-dd': '2014-03-08',
  'HH:MM:ss': '13:19:44',
  'h:MM TT': '1:19 PM',
  'h:MM:ss TT': '1:19:44 PM',
  'h:MM:ss TT Z': '1:19:44 PM %TZ_PREFIX%%TZ_OFFSET%',
  'yyyy-mm-dd\'T\'HH:MM:sso': '2014-03-08T13:19:44%TZ_OFFSET%',
  'UTC:yyyy-mm-dd\'T\'HH:MM:ss\'Z\'': '2014-03-08T12:19:44Z',
  'ddd, dd mmm yyyy HH:MM:ss Z': 'Sat, 08 Mar 2014 13:19:44 %TZ_PREFIX%%TZ_OFFSET%',
  'HH:MM:ss.l': '13:19:44.000',
  'yyyy-mm-dd HH:MM:ss.l o': '2014-03-08 13:19:44.000 %TZ_OFFSET%',
  'HH:MM:ss.l \'YES\'': '13:19:44.000 YES',
}

function pad (num, size) {
  let s = num + ''
  while (s.length < size) {
    s = '0' + s
  }
  return s
}

function parseOffset (date) {
  const offset = date.getTimezoneOffset()
  const hours = Math.floor((-1 * offset) / 60)
  const minutes = -1 * offset - hours * 60
  const sign = offset > 0 ? '-' : '+'
  return {
    offset,
    hours,
    minutes,
    sign,
  }
}

function timezoneOffset (date) {
  const offset = parseOffset(date)
  return offset.sign + pad(offset.hours, 2) + pad(offset.minutes, 2)
}

describe('dateformat([now], [mask])', function () {
  Object.keys(masks).forEach(function (key) {
    it('should format `' + key + '` mask', (t) => {
      const now = new Date(2014, 2, 8, 13, 19, 44)
      const tzOffset = timezoneOffset(now)
      let expected = expects[key]
        .replace(/%TZ_PREFIX%/, 'GMT')
        .replace(/%TZ_OFFSET%/g, tzOffset)
        .replace(/GMT\+0000/g, 'UTC')
      if (key === 'isoUtcDateTime') {
        const offset = parseOffset(now)
        now.setHours(
          now.getHours() - offset.hours,
          now.getMinutes() - offset.minutes
        )
        expected = now.toISOString().replace(/\.000/g, '')
      }
      const actual = dateformat(now, key)
      t.assert.strictEqual(actual, expected)
    })
  })

  Object.keys(formatStandardMask).forEach(function (key) {
    it('should format `' + key + '` mask', (t) => {
      const now = new Date(2014, 2, 8, 13, 19, 44)
      const tzOffset = timezoneOffset(now)
      let expected = expects[key]
        .replace(/%TZ_PREFIX%/, 'GMT')
        .replace(/%TZ_OFFSET%/g, tzOffset)
        .replace(/GMT\+0000/g, 'UTC')
      if (key === 'isoUtcDateTime') {
        const offset = parseOffset(now)
        now.setHours(
          now.getHours() - offset.hours,
          now.getMinutes() - offset.minutes
        )
        expected = now.toISOString().replace(/\.000/g, '')
      }
      const actual = dateformat(now, key)
      t.assert.strictEqual(actual, expected)
    })
  })
  it('should use `default` mask, when `mask` is empty', (t) => {
    const now = new Date(2014, 2, 8, 13, 19, 44)
    const expected = expects['default']
    const actual = dateformat(now)

    t.assert.strictEqual(actual, expected)
  })
})
