const byrd = require('byrd')

const nav = require('../nav.js')

byrd.element('home', () => {
  document.title = 'Erudite Artistry | Home'
  const counterId = byrd.event.guid()
  const testId = byrd.event.click(el => 
    byrd.id(counterId).innerText = 
      byrd.service`main.counter`()
  )
  return `
    ${nav()}
    <h1>Erudite Artistry <span id="${counterId}">${byrd.data`counter`()}</span></h1>
    <button id="${testId}">Test</button>
  `
})

module.exports = byrd.el('home')
