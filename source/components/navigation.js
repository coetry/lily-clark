var html = require('choo/html')
var css = require('sheetify')

var styles = css`
  :host {
    display: flex;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0.5rem;
    z-index: 9;
  }

  :host a {
    display: block;
    margin: 0.5rem;
  }

  :host a.active {
    pointer-events: none;
    color: #ccc;
  }

  @media (min-width: 767px) {
    :host.fixed { position: fixed }
  }
`

module.exports = navigation

function navigation (state, emit, props) {
  props = props || { }
  return html`
    <div class="${styles} ${props.fixed ? 'fixed' : ''}">
      <a href="/about" class="${state.href === '/about' ? 'active' : ''}">About</a>
      <a href="/archive">Archive</a>
    </div>
  `
}
