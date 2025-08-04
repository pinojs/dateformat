export = DateFormatter;
declare class DateFormatter {
    /**
     * @param {string|((date: Date) => string)} mask
     * @param {'UTC'|'GMT'} mode
     */
    constructor(mask: string | ((date: Date) => string), mode?: "UTC" | "GMT");
    i18n: I18n;
    /**
     * @returns {(date: Date) => string}
     */
    get format(): (date: Date) => string;
    /**
     * Day of the month as digits; no leading zero for single-digit
     *
     * @param {Date} date
     * @returns {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|'14'|
     * '15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|'27'|'28'|
     * '29'|'30'|'31'}
     */
    d(date: Date): "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31";
    /**
     * Day of the month as digits; leading zero for single-digit days.
     *
     * @param {Date} date
     * @returns {'01'|'02'|'03'|'04'|'05'|'06'|'07'|'08'|'09'|'10'|'11'|'12'|
     * '13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|
     * '27'|'28'|'29'|'30'|'31'}
     */
    dd(date: Date): "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31";
    /**
     * Day of the week as a three-letter abbreviation.
     *
     * @param {Date} date
     * @returns {'Sun'|'Mon'|'Tue'|'Wed'|'Thu'|'Fri'|'Sat'}
     */
    ddd(date: Date): "Sun" | "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat";
    /**
     * Day of the week as its full name.
     *
     * @param {Date} date
     * @returns {'Sunday'|'Monday'|'Tuesday'|'Wednesday'|'Thursday'|'Friday'|'Saturday'}
     */
    dddd(date: Date): "Sunday" | "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday";
    /**
     * "Ysd", "Tdy" or "Tmw" if date lies within these three days. Else fall back
     * to ddd.
     *
     * @param {Date} date
     * @returns {ReturnType<typeof this.ddd>|'Tdy'|'Ysd'|'Tmw'}
     */
    DDD(date: Date): ReturnType<typeof this.ddd> | "Tdy" | "Ysd" | "Tmw";
    /**
     * "Yesterday", "Today" or "Tomorrow" if date lies within these three days.
     * Else fall back to dddd.
     *
     * @param {Date} date
     * @returns {ReturnType<typeof this.ddd>|'Today'|'Yesterday'|'Tomorrow'}
     */
    DDDD(date: Date): ReturnType<typeof this.ddd> | "Today" | "Yesterday" | "Tomorrow";
    /**
     * Hours; no leading zero for single-digit hours (12-hour clock).
     *
     * @param {Date} date
     * @returns {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'}
     */
    h(date: Date): "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
    /**
     * Hours; leading zero for single-digit hours (12-hour clock).
     * @param {Date} date
     * @returns {'01'|'02'|'03'|'04'|'05'|'06'|'07'|'08'|'09'|'10'|'11'|'12'}
     */
    hh(date: Date): "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";
    /**
     * Hours; no leading zero for single-digit hours (24-hour clock).
     *
     * @param {Date} date
     * @returns {'0'|'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|
     * '14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'}
     */
    H(date: Date): "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23";
    /**
     * Hours; leading zero for single-digit hours (24-hour clock).
     *
     * @param {Date} date
     * @returns {'00'|'01'|'02'|'03'|'04'|'05'|'06'|'07'|'08'|'09'|'10'|'11'|
     * '12'|'13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'}
     */
    HH(date: Date): "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23";
    /**
     * Milliseconds; gives 3 digits.
     *
     * @param {Date} date
     * @returns {string}
     */
    l(date: Date): string;
    /**
     * Milliseconds; gives 2 digits.
     *
     * @param {Date} date
     * @returns {string}
     */
    L(date: Date): string;
    /**
     * Month as digits; no leading zero for single-digit
     *
     * @param {Date} date
     * @returns {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'}
     */
    m(date: Date): "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
    /**
     * Day of the month as digits; leading zero for single-digit
     *
     * @param {Date} date
     * @returns {'01'|'02'|'03'|'04'|'05'|'06'|'07'|'08'|'09'|'10'|'11'|'12'}
     */
    mm(date: Date): "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12";
    /**
     * month as three-letter
     *
     * @param {Date} date
     * @returns {string}
     */
    mmm(date: Date): string;
    /**
     * Month as its full name.
     *
     * @param {Date} date
     * @returns {string}
     */
    mmmm(date: Date): string;
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
    M(date: Date): "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "22" | "23" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59";
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
    MM(date: Date): "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59";
    /**
     * ISO 8601 numeric representation of the day of the week.
     *
     * @param {Date} date
     * @returns {'1'|'2'|'3'|'4'|'5'|'6'|'7'}
     */
    N(date: Date): "1" | "2" | "3" | "4" | "5" | "6" | "7";
    /**
     * GMT/UTC timezone offset, e.g. -0500 or +0230.
     *
     * @param {Date} date
     * @returns {string}
     */
    o(date: Date): string;
    /**
     * GMT/UTC timezone offset, e.g. -05:00 or +02:30.
     *
     * @param {Date} date
     * @returns {string}
     */
    p(date: Date): string;
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
    s(date: Date): "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59";
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
    ss(date: Date): "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59";
    /**
     * The date's ordinal suffix (st, nd, rd, or th). Works well with `d`.
     *
     * @param {Date} date
     * @return {'st'|'nd'|'rd'|'th'}
     */
    S(date: Date): "st" | "nd" | "rd" | "th";
    /**
     * Lowercase, single-character time marker string: a or p.
     *
     * @param {Date} date
     * @returns {'a'|'p'}
     */
    t(date: Date): "a" | "p";
    /**
     * Lowercase, two-character time marker string: am or pm.
     *
     * @param {Date} date
     * @returns {'am'|'pm'}
     */
    tt(date: Date): "am" | "pm";
    /**
     * Uppercase, single-character time marker string: A or P.
     *
     * @param {Date} date
     * @returns {'A'|'P'}
     */
    T(date: Date): "A" | "P";
    /**
     * Uppercase, two-character time marker string: AM or PM.
     *
     * @param {Date} date
     * @returns {'AM'|'PM'}
     */
    TT(date: Date): "AM" | "PM";
    /**
     * ISO 8601 week number of the year.
     *
     * @param {Date} date
     * @returns {'1'|'2'|'3'|'4'|'5'|'6'|'7'|'8'|'9'|'10'|'11'|'12'|'13'|'14'|
     * '15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|'27'|'28'|'29'|
     * '30'|'31'|'32'|'33'|'34'|'35'|'36'|'37'|'38'|'39'|'40'|'41'|'42'|'43'|
     * '44'|'45'|'46'|'47'|'48'|'49'|'50'|'51'|'52'|'53'}
     */
    W(date: Date): "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53";
    /**
     * ISO 8601 week number of the year, leading zero for single-digit.
     *
     * @param {Date} date
     * @returns {'01'|'02'|'03'|'04'|'05'|'06'|'07'|'08'|'09'|'10'|'11'|'12'|
     * '13'|'14'|'15'|'16'|'17'|'18'|'19'|'20'|'21'|'22'|'23'|'24'|'25'|'26'|
     * '27'|'28'|'29'|'30'|'31'|'32'|'33'|'34'|'35'|'36'|'37'|'38'|'39'|'40'|
     * '41'|'42'|'43'|'44'|'45'|'46'|'47'|'48'|'49'|'50'|'51'|'52'|'53'}
     */
    WW(date: Date): "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53";
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
    yy(date: Date): "00" | "01" | "02" | "03" | "04" | "05" | "06" | "07" | "08" | "09" | "10" | "11" | "12" | "13" | "14" | "15" | "16" | "17" | "18" | "19" | "20" | "21" | "22" | "23" | "24" | "25" | "26" | "27" | "28" | "29" | "30" | "31" | "32" | "33" | "34" | "35" | "36" | "37" | "38" | "39" | "40" | "41" | "42" | "43" | "44" | "45" | "46" | "47" | "48" | "49" | "50" | "51" | "52" | "53" | "54" | "55" | "56" | "57" | "58" | "59" | "60" | "61" | "62" | "63" | "64" | "65" | "66" | "67" | "68" | "69" | "70" | "71" | "72" | "73" | "74" | "75" | "76" | "77" | "78" | "79" | "80" | "81" | "82" | "83" | "84" | "85" | "86" | "87" | "88" | "89" | "90" | "91" | "92" | "93" | "94" | "95" | "96" | "97" | "98" | "99";
    /**
     * Year represented by four digits.
     *
     * @param {Date} date
     * @returns {string}
     */
    yyyy(date: Date): string;
    /**
     * @param {Date} date
     * @returns {'UTC'|`GMT${string}`}
     */
    Z(date: Date): "UTC" | `GMT${string}`;
    #private;
}
declare namespace DateFormatter {
    export { DateFormatter as default, DateFormatter, dateFormat, getWeekOfYear, getDayName, standardMasks, standardMaskNames, i18n, I18n, DateFn };
}
/**
 * @param {string | number | Date} [date=new Date()]
 * @param {string} [mask='default']
 * @param {boolean} [utc=false]
 * @param {boolean} [gmt=true]
 */
declare function dateFormat(date?: string | number | Date, mask?: string, utc?: boolean, gmt?: boolean): string;
/**
 * Get the ISO 8601 week number for a given date.
 *
 * @param  {Date} date
 * @return {Number}
 */
declare function getWeekOfYear(date: Date): number;
/**
 * Returns the name of the day for a given date.
 *
 * Yesterday, Today, Tomorrow if the date lies within, else fallback to Monday - Sunday
 * @param  {Object} options
 * @param  {Date} options.date - The date
 * @param  {function} options.D - Function to get the day of the week (0-6)
 * @param  {boolean} options.short - Whether to return short names (Tdy, Ysd, Tmw)
 * @param  {I18n} options.i18n - Object containing i18n day names
 * @return {string}
 */
declare function getDayName({ date, D, short, i18n }: {
    date: Date;
    D: Function;
    short: boolean;
    i18n: I18n;
}): string;
declare const standardMasks: Record<"default" | "shortDate" | "paddedShortDate" | "mediumDate" | "longDate" | "fullDate" | "isoDate" | "shortTime" | "mediumTime" | "longTime" | "isoTime" | "isoDateTime" | "isoUtcDateTime" | "expiresHeaderFormat", (this: DateFormatter, date: Date) => string>;
declare const standardMaskNames: readonly ["default", "shortDate", "paddedShortDate", "mediumDate", "longDate", "fullDate", "isoDate", "shortTime", "mediumTime", "longTime", "isoTime", "isoDateTime", "isoUtcDateTime", "expiresHeaderFormat"];
declare namespace i18n {
    let dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let dayNamesLong: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    let monthNamesLong: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"];
}
type I18n = {
    /**
     * - Short names of the days of the week
     */
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    /**
     * - Long names of the days of the week
     */
    dayNamesLong: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    /**
     * - Short names of the months
     */
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    /**
     * - Long names of the months
     */
    monthNamesLong: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    /**
     * - Time names (am, pm, etc.)
     */
    timeNames: ["a", "p", "am", "pm", "A", "P", "AM", "PM"];
};
type DateFn = "getDate" | "getDay" | "getMonth" | "getFullYear" | "getHours" | "getMinutes" | "getSeconds" | "getMilliseconds" | "getTimezoneOffset";
