const { describe, it } = require('node:test')
const dateFormat = require('./../../lib/date-format.js')

describe("Mask: 'Z'", { skip: true }, function (t) {
  it("should format 'Tue Sep 08 2020 13:26:11 GMT-0500 (Central Daylight Time)' as 'CDT'", (t) => {
    const d = formatTimezone('Tue Sep 08 2020 13:26:11 GMT-0500 (Central Daylight Time)')
    t.assert.strictEqual(d, 'CDT')
  })

  it("should format 'Tue Sep 08 2020 12:26:11 GMT-0600 (Mountain Daylight Time)' as 'MDT'", (t) => {
    const d = formatTimezone('Tue Sep 08 2020 12:26:11 GMT-0600 (Mountain Daylight Time)')
    t.assert.strictEqual(d, 'MDT')
  })

  it("should format 'Wed Sep 09 2020 04:28:21 GMT+1000 (Australian Eastern Standard Time)' as 'AEST'", (t) => {
    const d = formatTimezone('Wed Sep 09 2020 04:28:21 GMT+1000 (Australian Eastern Standard Time)')
    t.assert.strictEqual(d, 'AEST')
  })

  it("should format 'Wed Sep 09 2020 03:56:05 GMT+0930 (Australian Central Standard Time)' as 'ACST'", (t) => {
    const d = formatTimezone('Wed Sep 09 2020 03:56:05 GMT+0930 (Australian Central Standard Time)')
    t.assert.strictEqual(d, 'ACST')
  })

  it("should format 'Tue Feb 02 2021 09:51:33 GMT+1030 (Australian Central Daylight Time)' as 'ACDT'", (t) => {
    const d = formatTimezone('Tue Feb 02 2021 09:51:33 GMT+1030 (Australian Central Daylight Time)')
    t.assert.strictEqual(d, 'ACDT')
  })

  /* Since CEST is not currently supported abbreviation we fall back to GMT+xxxx */
  it("should format 'Tue Feb 02 2021 00:21:33 GMT+0100 (Central European Standard Time)' as 'GMT+0100' (fallback)", (t) => {
    const d = formatTimezone('Tue Feb 02 2021 00:21:33 GMT+0100 (Central European Standard Time)')
    t.assert.strictEqual(d, 'GMT+0100')
  })

  it("should format 'Tue Sep 08 2020 20:26:22 GMT+0200 (Central European Summer Time)' as 'GMT+0200' (fallback)", (t) => {
    const d = formatTimezone('Tue Sep 08 2020 20:26:22 GMT+0200 (Central European Summer Time)')
    t.assert.strictEqual(d, 'GMT+0200')
  })
})
