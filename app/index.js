import Home from './pages/Home/Index'
import About from './pages/About/Index'
import { each } from '../node_modules/lodash'

class App {
  constructor () {
    this.createContent()
    this.createPages()
    this.createLinks()
  }

  createPages () {
    this.pages = {
      home: new Home('.home'),
      about: new About('.about')
    }

    this.page = this.pages[this.template]
    this.page.show()
  }

  async fetchPages (url) {
    await this.page.hide()

    const request = await window.fetch(url)
    const response = await request.text()

    const div = document.createElement('div')
    div.innerHTML = response

    const DIV_WITH_NEW_CONTENT = div.querySelector('.content')
    this.content.innerHTML = DIV_WITH_NEW_CONTENT.innerHTML

    this.newTemplate = DIV_WITH_NEW_CONTENT.getAttribute('data-template')
    this.content.setAttribute('data-template', this.newTemplate)
    this.page = this.pages[this.newTemplate]

    // pushing actual page in url
    window.history.pushState(null, null, url)

    await this.page.show()
  }

  createLinks () {
    this.links = document.querySelectorAll('a')

    each(this.links, link => {
      link.onclick = event => {
        event.preventDefault()
        this.fetchPages(event.target.href)
      }
    })
  }

  createContent () {
    this.content = document.querySelector('.content')
    this.template = this.content.getAttribute('data-template')
  }
}

/* eslint no-new: 'off' */
new App()
