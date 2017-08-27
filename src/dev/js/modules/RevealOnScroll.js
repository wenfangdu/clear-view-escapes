import $ from "jquery"
import "waypoints"

export default class RevealOnScroll {
  constructor(els, offset) {
    this.hideInitially(els)
    this.createWaypoints(els, offset)
  }
  hideInitially(els) {
    els.addClass("reveal-item")
  }
  createWaypoints(els, offset) {
    els.each(function() {
      let item = this
      new Waypoint({
        element: item,
        handler: function() {
          $(item).addClass("reveal-item--is-visible")
        },
        offset: offset
      })
    })
  }
}
