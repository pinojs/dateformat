'use strict'

const standardMaskNames = /** @type {const} */([
  'default',
  'shortDate', 'paddedShortDate', 'mediumDate', 'longDate', 'fullDate', 'isoDate',
  'shortTime', 'mediumTime', 'longTime', 'isoTime',
  'isoDateTime', 'isoUtcDateTime',
  'expiresHeaderFormat'
])

const standardMasks = /** @type {Record<maskNames[number], (this: DateFormatter, date:Date) => string>} */ ({
  default: function (date) { return `${this.ddd(date)} ${this.mmm(date)} ${this.dd(date)} ${this.yyyy(date)} ${this.HH(date)}:${this.MM(date)}:${this.ss(date)}` },
  shortDate: function (date) { return `${this.m(date)}/${this.d(date)}/${this.yy(date)}` },
  paddedShortDate: function (date) { return `${this.mm(date)}/${this.dd(date)}/${this.yyyy(date)}` },
  mediumDate: function (date) { return `${this.mmm(date)} ${this.d(date)}, ${this.yyyy(date)}` },
  longDate: function (date) { return `${this.mmmm(date)} ${this.d(date)}, ${this.yyyy(date)}` },
  fullDate: function (date) { return `${this.dddd(date)}, ${this.mmmm(date)} ${this.d(date)}, ${this.yyyy(date)}` },
  shortTime: function (date) { return `${this.h(date)}:${this.MM(date)} ${this.TT(date)}` },
  mediumTime: function (date) { return `${this.h(date)}:${this.MM(date)}:${this.ss(date)} ${this.TT(date)}` },
  longTime: function (date) { return `${this.h(date)}:${this.MM(date)}:${this.ss(date)} ${this.TT(date)} ${this.Z(date)}` },
  isoDate: function (date) { return `${this.yyyy(date)}-${this.mm(date)}-${this.dd(date)}` },
  isoTime: function (date) { return `${this.HH(date)}:${this.MM(date)}:${this.ss(date)}` },
  isoDateTime: function (date) { return `${this.yyyy(date)}-${this.mm(date)}-${this.dd(date)}T${this.HH(date)}:${this.MM(date)}:${this.ss(date)}${this.o(date)}` },
  isoUtcDateTime: function (date) { return `${this.yyyy(date)}-${this.mm(date)}-${this.dd(date)}T${this.HH(date)}:${this.MM(date)}:${this.ss(date)}Z` },
  expiresHeaderFormat: function (date) { return `${this.ddd(date)}, ${this.dd(date)} ${this.mmm(date)} ${this.yyyy(date)} ${this.HH(date)}:${this.MM(date)}:${this.ss(date)} ${this.Z(date)}` },
})

module.exports = {
  standardMasks,
  standardMaskNames,
}
module.exports.default = {
  standardMasks,
  standardMaskNames,
}
