const byrd = require('byrd')

byrd.element('gallery', () => {
  document.title = 'Erudite Artistry | Gallery'
  return `
    <h1>Gallery <span>${byrd.data`counter`()}</span></h1>
    <br>
    <br>
    <br>
    <br>
    <a href="#">Home</a>
  `
})

module.exports = byrd.el('gallery')
