const { Bench } = require('tinybench')
const { DateFormatter } = require('../index.js')

const masks = [
  'd',
  'W',
  'o',
  'N',
  'H',
  'S',
  'L',
  'yy',
  'yyyy',
  'default',
  'shortDate', 'paddedShortDate', 'mediumDate', 'longDate', 'fullDate', 'isoDate',
  'shortTime', 'mediumTime', 'longTime', 'isoTime',
  'isoDateTime', 'isoUtcDateTime',
  'expiresHeaderFormat'
]

const bench = new Bench({ name: 'simple benchmark', time: 100 })

masks.forEach((mask) => {
  const date = new Date()
  const dateFormatter = new DateFormatter(mask)
  bench.add(`DateFormatter ${mask}`, () => {
    dateFormatter.format(date)
  })
})

{
  const date = new Date()
  const dateFormatter = new DateFormatter('DDDD')

  bench.add('DateFormatter DDDD - today', () => {
    dateFormatter.format(date)
  })
}

{
  const date = new Date()
  date.setDate(new Date().getDate() + 1)

  const dateFormatter = new DateFormatter('DDDD')
  bench.add('DateFormatter DDDD - tomorrow', () => {
    dateFormatter.format(date)
  })
}

{
  const date = new Date()
  date.setDate(new Date().getDate() - 1)

  const dateFormatter = new DateFormatter('DDDD')
  bench.add('DateFormatter DDDD - yesterday', () => {
    dateFormatter.format(date)
  })
}

bench.run().then(() => {
  console.table(bench.table())
}).catch((error) => {
  console.error('Benchmark failed:', error)
})
