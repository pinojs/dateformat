'use strict'

const { DateFormatter } = require('./date-formatter')

/**
 * @param {string | number | Date} date
 * @param {string} mask
 * @param {boolean} [utc=false]
 * @param {boolean} [gmt=true]
 */
function dateFormat (date, mask, utc, gmt) {
  if (typeof date === 'string' || typeof date === 'number') {
    date = new Date(date)
  }
  if (!mask) {
    mask = 'default'
  } if (mask === 'isoUtcDateTime') {
    utc = true
  }
  const mode = utc ? 'UTC' : 'GMT'
  const dateFormatter = new DateFormatter(mask, mode)
  return dateFormatter.format(date)
}

module.exports = dateFormat
module.exports.default = dateFormat
module.exports.dateFormat = dateFormat
