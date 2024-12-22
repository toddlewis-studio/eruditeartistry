const byrd = require('byrd')

byrd.element('about', () => {
  document.title = 'Erudite Artistry | About'
  return `
    <h1>About <span>${byrd.data`counter`()}</span></h1>
    <br>
    <br>
    <br>
    <br>
    <a href="#">Home</a>
  `
})

module.exports = byrd.el('about')
