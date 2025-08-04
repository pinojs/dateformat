'use strict'

const DATE_SUFFIX = /** @type {const} */([
  'th',
  'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
  'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
  'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
  'st'
])

const PAD_0 = new Array(1e3).fill(0).map((_, i) => String(i))
const PAD_2 = new Array(1e2).fill(0).map((_, i) => String(i).padStart(2, '0'))
const PAD_3 = new Array(1e3).fill(0).map((_, i) => String(i).padStart(3, '0'))
const PAD_4 = new Array(1e4).fill(0).map((_, i) => String(i).padStart(4, '0'))

const HOURS_H = /** @type {const} */([
  '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11',
  '12', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'
])
const HOURS_H_PAD_2 = /** @type {const} */ ([
  '12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11',
  '12', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11'
])
const MILLISECONDS_L = new Array(1e3).fill(0).map((_, i) => String(i).padStart(3, '0').slice(0, 2))

const TIMEZONE_OFFSET_O = new Map()
const TIMEZONE_OFFSET_P = new Map()

for (let tzOffset = -720; tzOffset <= 840; tzOffset += 15) {
  TIMEZONE_OFFSET_O.set(tzOffset, (tzOffset > 0 ? '-' : '+') +
    PAD_2[Math.abs((tzOffset) / 60)] +
    PAD_2[Math.abs((tzOffset) % 60)]
  )

  TIMEZONE_OFFSET_P.set(tzOffset, (tzOffset > 0 ? '-' : '+') +
    PAD_2[Math.abs((tzOffset) / 60)] + ':' + PAD_2[Math.abs((tzOffset) % 60)])
}

const DAY_OF_WEEK = /** @type {const} */(['7', '1', '2', '3', '4', '5', '6'])

/**
 * @typedef {'getDate'|'getDay'|'getMonth'|'getFullYear'|
 * 'getHours'|'getMinutes'| 'getSeconds'| 'getMilliseconds'|
 * 'getTimezoneOffset'} DateFn
 */

/** @type {Record<DateFn, ((date: Date) => number)>} */
const UTC_FNS = {
  getDate: Date.prototype.getUTCDate.call.bind(Date.prototype.getUTCDate),
  getDay: Date.prototype.getUTCDay.call.bind(Date.prototype.getUTCDay),
  getMonth: Date.prototype.getUTCMonth.call.bind(Date.prototype.getUTCMonth),
  getFullYear: Date.prototype.getUTCFullYear.call.bind(Date.prototype.getUTCFullYear),
  getHours: Date.prototype.getUTCHours.call.bind(Date.prototype.getUTCHours),
  getMinutes: Date.prototype.getUTCMinutes.call.bind(Date.prototype.getUTCMinutes),
  getSeconds: Date.prototype.getUTCSeconds.call.bind(Date.prototype.getUTCSeconds),
  getMilliseconds: Date.prototype.getUTCMilliseconds.call.bind(Date.prototype.getUTCMilliseconds),
  getTimezoneOffset: () => 0, // UTC does not have a timezone offset
}

/** @type {Record<DateFn, ((date: Date) => number)>} */
const GMT_FNS = {
  getDate: Date.prototype.getDate.call.bind(Date.prototype.getDate),
  getDay: Date.prototype.getDay.call.bind(Date.prototype.getDay),
  getMonth: Date.prototype.getMonth.call.bind(Date.prototype.getMonth),
  getFullYear: Date.prototype.getFullYear.call.bind(Date.prototype.getFullYear),
  getHours: Date.prototype.getHours.call.bind(Date.prototype.getHours),
  getMinutes: Date.prototype.getMinutes.call.bind(Date.prototype.getMinutes),
  getSeconds: Date.prototype.getSeconds.call.bind(Date.prototype.getSeconds),
  getMilliseconds: Date.prototype.getUTCMilliseconds.call.bind(Date.prototype.getUTCMilliseconds),
  getTimezoneOffset: Date.prototype.getTimezoneOffset.call.bind(Date.prototype.getTimezoneOffset),
}

module.exports = {
  DATE_SUFFIX,
  PAD_0,
  PAD_2,
  PAD_3,
  PAD_4,
  HOURS_H,
  HOURS_H_PAD_2,
  MILLISECONDS_L,
  TIMEZONE_OFFSET_O,
  TIMEZONE_OFFSET_P,
  DAY_OF_WEEK,
  UTC_FNS,
  GMT_FNS,
}
module.exports.default = {
  DATE_SUFFIX,
  PAD_0,
  PAD_2,
  PAD_3,
  PAD_4,
  HOURS_H,
  HOURS_H_PAD_2,
  MILLISECONDS_L,
  TIMEZONE_OFFSET_O,
  TIMEZONE_OFFSET_P,
  DAY_OF_WEEK,
  UTC_FNS,
  GMT_FNS,
}
module.exports.constants = {
  DATE_SUFFIX,
  PAD_0,
  PAD_2,
  PAD_3,
  PAD_4,
  HOURS_H,
  HOURS_H_PAD_2,
  MILLISECONDS_L,
  TIMEZONE_OFFSET_O,
  TIMEZONE_OFFSET_P,
  DAY_OF_WEEK,
  UTC_FNS,
  GMT_FNS,
}
