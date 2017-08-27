import $ from "jquery"
import "waypoints"
import moduleName from "jquery-smooth-scroll"

export default class StickyHeader {
  constructor() {
    this.siteHeader = $(".site-header")
    this.triggerEl = $(".large-banner__title")
    this.pageSections = $(".page-section")
    this.headerLinks = $(".primary-nav a")
    this.createHeaderWaypoint()
    this.createPageSectionWaypoints()
    this.addSmoothScrolling()
  }
  createHeaderWaypoint() {
    let that = this
    new Waypoint({
      element: this.triggerEl[0],
      handler(direction) {
        if (direction == "down") {
          that.siteHeader.addClass("site-header--dark")
        } else {
          that.siteHeader.removeClass("site-header--dark")
        }
      }
    })
  }
  createPageSectionWaypoints() {
    let that = this
    this.pageSections.each(function() {
      let pageSection = this
      new Waypoint({
        element: pageSection,
        handler(direction) {
          let matchingLink = pageSection.getAttribute("data-matching-link")
          that.headerLinks.removeClass("is-current-link")
          $(matchingLink).addClass("is-current-link")
        },
        offset: "18%"
      })
      new Waypoint({
        element: pageSection,
        handler(direction) {
          if (direction == "up") {
            let matchingLink = pageSection.getAttribute("data-matching-link")
            that.headerLinks.removeClass("is-current-link")
            $(matchingLink).addClass("is-current-link")
          }
        },
        offset: "-40%"
      })
    })
  }
  addSmoothScrolling() {
    this.headerLinks.smoothScroll()
  }
}
