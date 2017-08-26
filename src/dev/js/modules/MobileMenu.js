import Vue from "vue"

export default class MobileMenu {
  constructor() {
    new Vue({
      el: "#site-header",
      data: {
        show: false,
        menuIcon: "",
        menuContent: "",
        siteHeader: ""
      },
      methods: {
        toggleMenu() {
          this.show = !this.show
          if (this.show == true) {
            this.menuIcon = "site-header__menu-icon--close"
            this.menuContent = "site-header__menu-content--is-visible"
            this.siteHeader = "site-header--is-expanded"
          } else {
            this.menuIcon = ""
            this.menuContent = ""
            this.siteHeader = ""
          }
        }
      }
    })
  }
}
