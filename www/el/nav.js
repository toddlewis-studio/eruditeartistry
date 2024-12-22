const byrd = require('byrd')

byrd.element('nav', () => {

  byrd.event.fn(() => {
    const elems = document.querySelectorAll('.sidenav')
    M.Sidenav.init(elems)
  })

  return `
    <div class="navbar-fixed">
      <nav>
        <div class="nav-wrapper">
          <a href="#" class="brand-logo">EA</a>
          <a href="#" data-target="mobile-nav" class="sidenav-trigger"><i class="material-icons">menu</i></a>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#gallery">Gallery</a></li>
          </ul>
        </div>
      </nav>
    </div>
    <ul class="sidenav" id="mobile-nav">
      <li><a href="#about">About</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#gallery">Gallery</a></li>
    </ul>
  `
})

module.exports = byrd.el('nav')
