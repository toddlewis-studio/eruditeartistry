const byrd = require('byrd')

byrd.data`counter`(0)

byrd.register('main.counter', () => {
  const val = byrd.data`counter`() + 1
  byrd.data`counter`(val)
  return val
})

module.exports = {}
