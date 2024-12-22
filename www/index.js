const byrd = require('byrd')

//libs
require('./lib/counter.js')

const app = document.createElement('div')
document.body.appendChild(app)

byrd.init(
  app, 
  {
    '#': require('./el/route/home.js'),
    '#about': require('./el/route/about.js'),  
    '#gallery': require('./el/route/gallery.js'),  
    '#contact': require('./el/route/contact.js'),  
    '#showcase': require('./el/route/showcase.js')  
  }
)
