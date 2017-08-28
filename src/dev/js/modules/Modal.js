import $ from "jquery"

export default class Modal {
  constructor() {
    this.openBtn = $(".open-modal")
    this.modal = $(".modal")
    this.closeBtn = $(".modal__close")
    this.events()
  }
  events() {
    this.openBtn.click(() => this.openModal())
    this.closeBtn.click(() => this.closeModal())
    $(document).keyup(e => this.keyHandler(e))
  }
  openModal() {
    this.modal.addClass("modal--is-visible")
    return false
  }
  closeModal() {
    this.modal.removeClass("modal--is-visible")
  }
  keyHandler(e) {
    let key = e.keyCode || e.which
    if (key == 27) {
      this.closeModal()
    }
  }
}
