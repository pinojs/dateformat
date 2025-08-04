'use strict'

/** @type {Map<number, Date>} */
const firstThursdays = new Map()

/** @type {(1|2|3|4|5|6|7)[]} */
const FIRST_DAYS_OF_WEEK = [1, 7, 6, 5, 4, 3, 2]

/** @type {(0|1|2|3|4|5|6)[]} */
const THURSDAY_SAME_WEEK = [6, 0, 1, 2, 3, 4, 5]

/**
 * Get the ISO 8601 week number for a given date.
 *
 * @param  {Date} date
 * @return {Number}
 */
const getWeekOfYear = (date) => {
  const Y = date.getFullYear()
  const m = date.getMonth()
  const d = date.getDate()

  // Remove time components of date
  const targetThursday = new Date(
    Y,
    m,
    d
  )

  // Change date to Thursday same week
  targetThursday.setDate(
    d - THURSDAY_SAME_WEEK[targetThursday.getDay()] + 3
  )

  const targetThursdayYear = targetThursday.getFullYear()

  let firstThursday = firstThursdays.get(targetThursdayYear)
  if (!firstThursday) {
    // Take January 4th as it is always in week 1 (see ISO 8601)
    firstThursday = new Date(targetThursdayYear, 0, 4)

    // Change date to Thursday same week
    firstThursday.setDate(FIRST_DAYS_OF_WEEK[firstThursday.getDay()])
    firstThursdays.set(targetThursdayYear, firstThursday)
  }

  // Check if daylight-saving-time-switch occurred and correct for it
  const ds =
    targetThursday.getTimezoneOffset() - firstThursday.getTimezoneOffset()
  targetThursday.setHours(targetThursday.getHours() - ds)

  // Number of weeks between target Thursday and first Thursday
  const weekDiff = (targetThursday.getTime() - firstThursday.getTime()) / 604800000
  return (1 + ~~(weekDiff))
}

module.exports = getWeekOfYear
module.exports.default = getWeekOfYear
module.exports.getWeekOfYear = getWeekOfYear
