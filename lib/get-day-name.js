'use strict'

/**
 * Returns the name of the day for a given date.
 *
 * Yesterday, Today, Tomorrow if the date lies within, else fallback to Monday - Sunday
 * @param  {Object} options
 * @param  {Date} options.date - The date
 * @param  {function} options.D - Function to get the day of the week (0-6)
 * @param  {boolean} options.short - Whether to return short names (Tdy, Ysd, Tmw)
 * @param  {Object} options.i18n - Object containing i18n day names
 * @return {String}
 */
const getDayName = ({ date, D, short, i18n }) => {
  // Get the timestamp of the date in milliseconds, since epoch in UTC
  const dateTimestamp = date.getTime()

  // Get the timestamp of the beginning of today in UTC by using Date.UTC,
  // We use the provided date's year, month, and date, and set hours, minutes,
  // seconds and milliseconds to 0.
  const localNow = new Date()
  const todayBeginTimestamp = new Date(
    localNow.getFullYear(),
    localNow.getMonth(),
    localNow.getDate()
  ).getTime()

  if (dateTimestamp >= todayBeginTimestamp) {
    if (dateTimestamp < (todayBeginTimestamp + 86400000)) { // within 24 hours
      return short ? 'Tdy' : 'Today'
    } else if (dateTimestamp < (todayBeginTimestamp + 172800000)) { // within 48 hours
      return short ? 'Tmw' : 'Tomorrow'
    }
  } else if (dateTimestamp > (todayBeginTimestamp - 86400000)) { // within the last 24 hours
    return short ? 'Ysd' : 'Yesterday'
  }

  return short ? i18n.dayNamesShort[D(date)] : i18n.dayNamesLong[D(date)]
}

module.exports = getDayName
module.exports.default = getDayName
module.exports.getDayName = getDayName
