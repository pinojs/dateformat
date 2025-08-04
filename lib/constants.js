'use strict'

const DATE_SUFFIX = /** @type {const} */([
  '',
  'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
  'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
  'st', 'nd', 'rd', 'th', 'th', 'th', 'th', 'th', 'th', 'th',
  'st'
])

const PAD_0 = new Array(1e3).fill(0).map((_, i) => String(i))
const PAD_2 = new Array(1e2).fill(0).map((_, i) => String(i).padStart(2, '0'))
const PAD_3 = new Array(1e3).fill(0).map((_, i) => String(i).padStart(3, '0'))
const PAD_4 = new Array(1e4).fill(0).map((_, i) => String(i).padStart(4, '0'))

/** @type {('1' | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | '11' | '12')[]} */
const HOURS_H = new Array(24).fill(0).map((_, i) => String(i % 12 || 12))
/** @type {('01' | '02' | '03' | '04' | '05' | '06' | '07' | '08' | '09' | '10' | '11' | '12')[]} */
const HOURS_H_PAD_2 = HOURS_H.map(v => v.padStart(2, '0'))
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
  DAY_OF_WEEK
}
