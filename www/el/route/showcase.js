const byrd = require('byrd')

byrd.element('showcase', () => {
  document.title = 'Erudite Artistry | Showcase'
  return `
    <h1>Showcase <span>${byrd.data`counter`()}</span></h1>
    <br>
    <br>
    <br>
    <br>
    <a href="#">Home</a>
  `
})

module.exports = byrd.el('showcase')
