import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"
import $ from "jquery"
import StickyHeader from "./modules/StickyHeader"

new MobileMenu()
new RevealOnScroll($(".feature-item"), "80%")
new RevealOnScroll($(".testimonial"), "60%")
new StickyHeader()
