'use strict'

const { GMT_FNS, UTC_FNS, PAD_4, PAD_2, PAD_0, DATE_SUFFIX, TIMEZONE_OFFSET_P, TIMEZONE_OFFSET_O, DAY_OF_WEEK, MILLISECONDS_L, PAD_3, HOURS_H, HOURS_H_PAD_2 } = require('./constants')
const { getWeekOfYear } = require('./get-week-of-year')
const { getDayName } = require('./get-day-name')
const { standardMasks, standardMaskNames } = require('./standard-masks')

class DateFormatter {
  /**
   * @type {'GMT'|'UTC'}
   */
  #mode = 'GMT'

  #mask = ''

  #d = GMT_FNS.getDate
  #D = GMT_FNS.getDay
  #H = GMT_FNS.getHours
  #L = GMT_FNS.getMilliseconds
  #M = GMT_FNS.getMinutes
  #m = GMT_FNS.getMonth
  #o = GMT_FNS.getTimezoneOffset
  #s = GMT_FNS.getSeconds
  #yyyy = GMT_FNS.getFullYear

  #tokenFns = []

  i18n = /** @type {const} */ ({
    dayNamesShort: [
      'Sun',
      'Mon',
      'Tue',
      'Wed',
      'Thu',
      'Fri',
      'Sat',
    ],
    dayNamesLong: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    monthNamesShort: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
    monthNamesLong: [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
    timeNames: ['a', 'p', 'am', 'pm', 'A', 'P', 'AM', 'PM'],
  })

  #format = (date) => {
    date = this.#validateDate(date)

    let result = ''

    for (let i = 0; i < this.#tokenFns.length; ++i) {
      result += this.#tokenFns[i](date)
    }

    return result
  }

  constructor (mask, mode = 'GMT') {
    if (typeof mode === 'string') {
      mode = mode.toUpperCase()
      if (mode !== 'GMT' && mode !== 'UTC') {
        throw TypeError("Mode must be 'GMT' or 'UTC'")
      }
      this.#mode = mode
    } else if (typeof mask === 'string') {
      if (mask === 'isoUtcDateTime') {
        this.#mode = 'UTC'
        // Allow setting the utc/gmt argument via the mask
      } else if (mask[3] === ':') {
        if (
          mask[0] === 'U' &&
          mask[1] === 'T' &&
          mask[2] === 'C'
        ) {
          this.#mode = 'UTC'
          mask = mask.slice(4)
        } else if (
          mask[0] === 'G' &&
          mask[1] === 'M' &&
          mask[2] === 'T'
        ) {
          this.#mode = 'GMT'
          mask = mask.slice(4)
        }
      }
    }

    if (typeof mask === 'string') {
      if (standardMaskNames.includes(/** @type {*} */ (mask))) {
        this.#format = standardMasks[mask]
      } else {
        this.#mask = mask
        this.#tokenize()
      }
    } else if (typeof mask === 'function') {
      this.#format = mask
    } else {
      throw TypeError('Mask must be a string or a function')
    }

    if (this.#mode === 'UTC') {
      this.#d = UTC_FNS.getDate
      this.#D = UTC_FNS.getDay
      this.#H = UTC_FNS.getHours
      this.#L = UTC_FNS.getMilliseconds
      this.#M = UTC_FNS.getMinutes
      this.#m = UTC_FNS.getMonth
      this.#o = UTC_FNS.getTimezoneOffset
      this.#s = UTC_FNS.getSeconds
      this.#yyyy = UTC_FNS.getFullYear
    }
  }

  #tokenize () {
    const tokenRE = /d{1,4}|D{3,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|W{1,2}|[LlopSZN]|"[^"]*"|'[^']*'/g
    let match
    let pos = 0
    while ((match = tokenRE.exec(this.#mask)) != null) {
      if (pos !== match.index) {
        const token = this.#mask.slice(pos, match.index)
        this.#tokenFns.push(() => token)
      }
      switch (match[0]) {
        case 'd':
          this.#tokenFns.push(this.d.bind(this))
          break
        case 'dd':
          this.#tokenFns.push(this.dd.bind(this))
          break
        case 'ddd':
          this.#tokenFns.push(this.ddd.bind(this))
          break
        case 'dddd':
          this.#tokenFns.push(this.dddd.bind(this))
          break
        case 'DDD':
          this.#tokenFns.push(this.DDD.bind(this))
          break
        case 'DDDD':
          this.#tokenFns.push(this.DDDD.bind(this))
          break
        case 'h':
          this.#tokenFns.push(this.h.bind(this))
          break
        case 'hh':
          this.#tokenFns.push(this.hh.bind(this))
          break
        case 'H':
          this.#tokenFns.push(this.H.bind(this))
          break
        case 'HH':
          this.#tokenFns.push(this.HH.bind(this))
          break
        case 'l':
          this.#tokenFns.push(this.l.bind(this))
          break
        case 'L':
          this.#tokenFns.push(this.L.bind(this))
          break
        case 'm':
          this.#tokenFns.push(this.m.bind(this))
          break
        case 'mm':
          this.#tokenFns.push(this.mm.bind(this))
          break
        case 'mmm':
          this.#tokenFns.push(this.mmm.bind(this))
          break
        case 'mmmm':
          this.#tokenFns.push(this.mmmm.bind(this))
          break
        case 'M':
          this.#tokenFns.push(this.M.bind(this))
          break
        case 'MM':
          this.#tokenFns.push(this.MM.bind(this))
          break
        case 'N':
          this.#tokenFns.push(this.N.bind(this))
          break
        case 'o':
          this.#tokenFns.push(this.o.bind(this))
          break
        case 'p':
          this.#tokenFns.push(this.p.bind(this))
          break
        case 's':
          this.#tokenFns.push(this.s.bind(this))
          break
        case 'ss':
          this.#tokenFns.push(this.ss.bind(this))
          break
        case 'S':
          this.#tokenFns.push(this.S.bind(this))
          break
        case 't':
          this.#tokenFns.push(this.t.bind(this))
          break
        case 'tt':
          this.#tokenFns.push(this.tt.bind(this))
          break
        case 'T':
          this.#tokenFns.push(this.T.bind(this))
          break
        case 'TT':
          this.#tokenFns.push(this.TT.bind(this))
          break
        case 'W':
          this.#tokenFns.push(this.W.bind(this))
          break
        case 'WW':
          this.#tokenFns.push(this.WW.bind(this))
          break
        case 'yy':
          this.#tokenFns.push(this.yy.bind(this))
          break
        case 'yyyy':
          this.#tokenFns.push(this.yyyy.bind(this))
          break
        case 'Z':
          this.#tokenFns.push(this.Z.bind(this))
          break
        default:
          if (
            (match[0][0] === '\'' && match[0][match[0].length - 1] === '\'') ||
            (match[0][0] === '"' && match[0][match[0].length - 1] === '"')
          ) {
            const token = match[0].slice(1, -1)
            this.#tokenFns.push(() => token)
            break
          }
          console.log('Unknown token:', match[0])
      }
      pos = tokenRE.lastIndex
    }

    if (pos !== this.#mask.length) {
      const token = this.#mask.slice(pos)
      this.#tokenFns.push(() => token)
    }
  }

  #validateDate (date) {
    if (date instanceof Date) {
      if (Number.isNaN(date.getTime())) {
        throw TypeError('Invalid date')
      }
    } else if (date || date === 0) {
      date = new Date(date)

      if (Number.isNaN(date.getTime())) {
        throw TypeError('Invalid date')
      }
    } else {
      date = new Date()
    }

    return date
  }

  /**
   * @returns {(date: Date) => string}
   */
  get format () {
    return this.#format
  }

  /**
   * Day of the month as digits; no leading zero for single-digit
   *
   * @param {Date} date
   * @returns {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|'14'|
   * '15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|'27'|'28'|
   * '29'|'30'|'31'}
   */
  d (date) {
    return /** @type {*} */ (PAD_0[this.#d(date)])
  }

  /**
   * Day of the month as digits; leading zero for single-digit days.
   *
   * @param {Date} date
   * @returns {'01'|'02'|'03'|'04'|'05'|'06'|'07'|'08'|'09'|'10'|'11'|'12'|
   * '13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|
   * '27'|'28'|'29'|'30'|'31'}
   */
  dd (date) {
    return /** @type {*} */ (PAD_2[this.#d(date)])
  }

  /**
   * Day of the week as a three-letter abbreviation.
   *
   * @param {Date} date
   * @returns {'Sun'|'Mon'|'Tue'|'Wed'|'Thu'|'Fri'|'Sat'}
   */
  ddd (date) {
    return this.i18n.dayNamesShort[this.#D(date)]
  }

  /**
   * Day of the week as its full name.
   *
   * @param {Date} date
   * @returns {'Sunday'|'Monday'|'Tuesday'|'Wednesday'|'Thursday'|'Friday'|'Saturday'}
   */
  dddd (date) {
    return this.i18n.dayNamesLong[this.#D(date)]
  }

  /**
   * "Ysd", "Tdy" or "Tmw" if date lies within these three days. Else fall back
   * to ddd.
   *
   * @param {Date} date
   * @returns {ReturnType<typeof this.ddd>|'Tdy'|'Ysd'|'Tmw'}
   */
  DDD (date) {
    return /** @type {*} */(getDayName({
      date,
      D: this.#D.bind(this),
      short: true,
      i18n: this.i18n
    }))
  }

  /**
   * "Yesterday", "Today" or "Tomorrow" if date lies within these three days.
   * Else fall back to dddd.
   *
   * @param {Date} date
   * @returns {ReturnType<typeof this.ddd>|'Today'|'Yesterday'|'Tomorrow'}
   */
  DDDD (date) {
    return /** @type {*} */(getDayName({
      date,
      D: this.#D.bind(this),
      short: false,
      i18n: this.i18n
    }))
  }

  /**
   * Hours; no leading zero for single-digit hours (12-hour clock).
   *
   * @param {Date} date
   * @returns {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'}
   */
  h (date) {
    return HOURS_H[this.#H(date)]
  }

  /**
   * Hours; leading zero for single-digit hours (12-hour clock).
   * @param {Date} date
   * @returns {'01'|'02'|'03'|'04'|'05'|'06'|'07'|'08'|'09'|'10'|'11'|'12'}
   */
  hh (date) {
    return HOURS_H_PAD_2[this.#H(date)]
  }

  /**
   * Hours; no leading zero for single-digit hours (24-hour clock).
   *
   * @param {Date} date
   * @returns {'0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|
   * '14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'}
   */
  H (date) {
    return /** @type {*} */ (PAD_0[this.#H(date)])
  }

  /**
   * Hours; leading zero for single-digit hours (24-hour clock).
   *
   * @param {Date} date
   * @returns {'00'|'01'|'02'|'03'|'04'|'05'|'06'|'07'|'08'|'09'|'10'|'11'|
   * '12'|'13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'}
   */
  HH (date) {
    return /** @type {*} */ (PAD_2[this.#H(date)])
  }

  /**
   * Milliseconds; gives 3 digits.
   *
   * @param {Date} date
   * @returns {string}
   */
  l (date) {
    return PAD_3[this.#L(date)]
  }

  /**
   * Milliseconds; gives 2 digits.
   *
   * @param {Date} date
   * @returns {string}
   */
  L (date) {
    return MILLISECONDS_L[this.#L(date)]
  }

  /**
   * Month as digits; no leading zero for single-digit
   *
   * @param {Date} date
   * @returns {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'}
   */
  m (date) {
    return /** @type {*} */ (PAD_0[this.#m(date) + 1])
  }

  /**
   * Day of the month as digits; leading zero for single-digit
   *
   * @param {Date} date
   * @returns {'01'|'02'|'03'|'04'|'05'|'06'|'07'|'08'|'09'|'10'|'11'|'12'}
   */
  mm (date) {
    return /** @type {*} */ (PAD_2[this.#m(date) + 1])
  }

  /**
   * month as three-letter
   *
   * @param {Date} date
   * @returns {string}
   */
  mmm (date) {
    return this.i18n.monthNamesShort[this.#m(date)]
  }

  /**
   * Month as its full name.
   *
   * @param {Date} date
   * @returns {string}
   */
  mmmm (date) {
    return this.i18n.monthNamesLong[this.#m(date)]
  }

  /**
   * Minutes; no leading zero for single-digit
   *
   * @param {Date} date
   * @returns {'0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|
   * '14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'22'|'23'|
   * '26'|'27'|'28'|'29'|'30'|'31'|'32'|'33'|'34'|'35'|'36'|'37'|'38'|'39'|
   * '40'|'41'|'42'|'43'|'44'|'45'|'46'|'47'|'48'|'49'|'50'|'51'|'52'|'53'|
   * '54'|'55'|'56'|'57'|'58'|'59'}
   */
  M (date) {
    return /** @type {*} */ (PAD_0[this.#M(date)])
  }

  /**
   * Minutes; leading zero for single-digit minutes.
   *
   * @param {Date} date
   * @returns {'00'|'01'|'02'|'03'|'04'|'05'|'06'|'07'|'08'|'09'|'10'|'11'|
   * '12'|'13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|
   * '26'|'27'|'28'|'29'|'30'|'31'|'32'|'33'|'34'|'35'|'36'|'37'|'38'|'39'|
   * '40'|'41'|'42'|'43'|'44'|'45'|'46'|'47'|'48'|'49'|'50'|'51'|'52'|'53'|
   * '54'|'55'|'56'|'57'|'58'|'59'}
   */
  MM (date) {
    return /** @type {*} */ (PAD_2[this.#M(date)])
  }

  /**
   * ISO 8601 numeric representation of the day of the week.
   *
   * @param {Date} date
   * @returns {'1'|'2'|'3'|'4'|'5'|'6'|'7'}
   */
  N (date) {
    return DAY_OF_WEEK[this.#D(date)]
  }

  /**
   * GMT/UTC timezone offset, e.g. -0500 or +0230.
   *
   * @param {Date} date
   * @returns {string}
   */
  o (date) {
    return TIMEZONE_OFFSET_O.get(this.#o(date))
  }

  /**
   * GMT/UTC timezone offset, e.g. -05:00 or +02:30.
   *
   * @param {Date} date
   * @returns {string}
   */
  p (date) {
    return TIMEZONE_OFFSET_P.get(this.#o(date))
  }

  /**
   * Seconds; no leading zero for single-digit
   *
   * @param {Date} date
   * @returns {'0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|
   * '14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|'27'|
   * '28'|'29'|'30'|'31'|'32'|'33'|'34'|'35'|'36'|'37'|'38'|'39'|'40'|'41'|
   * '42'|'43'|'44'|'45'|'46'|'47'|'48'|'49'|'50'|'51'|'52'|'53'|'54'|'55'|
   * '56'|'57'|'58'|'59'}
   */
  s (date) {
    return /** @type {*} */ (PAD_0[this.#s(date)])
  }

  /**
   * Seconds; leading zero for single-digit seconds.
   *
   * @param {Date} date
   * @returns {'00'|'01'|'02'|'03'|'04'|'05'|'06'|'07'|'08'|'09'|'10'|'11'|
   * '12'|'13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|
   * '26'|'27'|'28'|'29'|'30'|'31'|'32'|'33'|'34'|'35'|'36'|'37'|'38'|'39'|
   * '40'|'41'|'42'|'43'|'44'|'45'|'46'|'47'|'48'|'49'|'50'|'51'|'52'|'53'|
   * '54'|'55'|'56'|'57'|'58'|'59'}
   */
  ss (date) {
    return /** @type {*} */ (PAD_2[this.#s(date)])
  }

  /**
   * The date's ordinal suffix (st, nd, rd, or th). Works well with `d`.
   *
   * @param {Date} date
   * @return {'st'|'nd'|'rd'|'th'}
   */
  S (date) {
    return DATE_SUFFIX[this.#d(date)]
  }

  /**
   * Lowercase, single-character time marker string: a or p.
   *
   * @param {Date} date
   * @returns {'a'|'p'}
   */
  t (date) {
    return this.#H(date) < 12
      ? this.i18n.timeNames[0]
      : this.i18n.timeNames[1]
  }

  /**
   * Lowercase, two-character time marker string: am or pm.
   *
   * @param {Date} date
   * @returns {'am'|'pm'}
   */
  tt (date) {
    return this.#H(date) < 12
      ? this.i18n.timeNames[2]
      : this.i18n.timeNames[3]
  }

  /**
   * Uppercase, single-character time marker string: A or P.
   *
   * @param {Date} date
   * @returns {'A'|'P'}
   */
  T (date) {
    return this.#H(date) < 12
      ? this.i18n.timeNames[4]
      : this.i18n.timeNames[5]
  }

  /**
   * Uppercase, two-character time marker string: AM or PM.
   *
   * @param {Date} date
   * @returns {'AM'|'PM'}
   */
  TT (date) {
    return this.#H(date) < 12
      ? this.i18n.timeNames[6]
      : this.i18n.timeNames[7]
  }

  /**
   * ISO 8601 week number of the year.
   *
   * @param {Date} date
   * @returns {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|'14'|
   * '15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|'27'|'28'|'29'|
   * '30'|'31'|'32'|'33'|'34'|'35'|'36'|'37'|'38'|'39'|'40'|'41'|'42'|'43'|
   * '44'|'45'|'46'|'47'|'48'|'49'|'50'|'51'|'52'|'53'}
   */
  W (date) {
    return /** @type {*} */ (PAD_0[getWeekOfYear(date)])
  }

  /**
   * ISO 8601 week number of the year, leading zero for single-digit.
   *
   * @param {Date} date
   * @returns {'01'|'02'|'03'|'04'|'05'|'06'|'07'|'08'|'09'|'10'|'11'|'12'|
   * '13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|
   * '27'|'28'|'29'|'30'|'31'|'32'|'33'|'34'|'35'|'36'|'37'|'38'|'39'|'40'|
   * '41'|'42'|'43'|'44'|'45'|'46'|'47'|'48'|'49'|'50'|'51'|'52'|'53'}
   */
  WW (date) {
    return /** @type {*} */ (PAD_2[getWeekOfYear(date)])
  }

  /**
   * Year as last two digits; leading zero for years less than 10.
   *
   * @param {Date} date
   * @returns {'00'|'01'|'02'|'03'|'04'|'05'|'06'|'07'|'08'|'09'|'10'|'11'|
   * '12'|'13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|
   * '26'|'27'|'28'|'29'|'30'|'31'|'32'|'33'|'34'|'35'|'36'|'37'|'38'|'39'|
   * '40'|'41'|'42'|'43'|'44'|'45'|'46'|'47'|'48'|'49'|'50'|'51'|'52'|'53'|
   * '54'|'55'|'56'|'57'|'58'|'59'|'60'|'61'|'62'|'63'|'64'|'65'|'66'|'67'|
   * '68'|'69'|'70'|'71'|'72'|'73'|'74'|'75'|'76'|'77'|'78'|'79'|'80'|'81'|
   * '82'|'83'|'84'|'85'|'86'|'87'|'88'|'89'|'90'|'91'|'92'|'93'|'94'|'95'|
   * '96'|'97'|'98'|'99'}
   */
  yy (date) {
    return /** @type {*} */ (PAD_2[this.#yyyy(date) % 100])
  }

  /**
   * Year represented by four digits.
   *
   * @param {Date} date
   * @returns {string}
   */
  yyyy (date) {
    return PAD_4[this.#yyyy(date)]
  }

  /**
   * @param {Date} date
   * @returns {'UTC'|`GMT${string}`}
   */
  Z (date) {
    if (this.#mode === 'UTC') {
      return 'UTC'
    }
    const offset = this.#o(date)
    return `GMT${this.o(date)}`
  }
}

module.exports = DateFormatter
module.exports.default = DateFormatter
module.exports.DateFormatter = DateFormatter
