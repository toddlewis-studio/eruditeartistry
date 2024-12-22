const byrd = require('byrd')

byrd.element('contact', () => {
  document.title = 'Erudite Artistry | Contact'
  return `
    <h1>Contact <span>${byrd.data`counter`()}</span></h1>
    <br>
    <br>
    <br>
    <br>
    <a href="#">Home</a>
  `
})

module.exports = byrd.el('contact')
