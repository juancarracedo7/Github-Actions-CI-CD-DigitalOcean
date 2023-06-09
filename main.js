import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>GITHUB ACTIONS CI/CD</h1>
    <h2>Juan Cruz Carracedo</h2>
    // crea una search bar que busque en la api de github
    <input type="text" id="search" placeholder="Search for a user" />
  </div>
`

setupCounter(document.querySelector('#counter'))
