import gsap from '../../../node_modules/gsap/'

export default class Pages {
  constructor (element) {
    this.element = document.querySelector(element)
  }

  show () {
    return new Promise(resolve => {
      gsap.from(this.element, {
        opacity: 0,
        duration: 1,
        onComplete: resolve
      })
    })
  }

  hide () {
    return new Promise(resolve => {
      gsap.to(this.element, {
        opacity: 0,
        duration: 1,
        onComplete: resolve
      })
    })
  }
}
