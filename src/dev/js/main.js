import MobileMenu from "./modules/MobileMenu"
import RevealOnScroll from "./modules/RevealOnScroll"
import $ from "jquery"
import StickyHeader from "./modules/StickyHeader"
import Modal from "./modules/Modal"

new MobileMenu()
new RevealOnScroll($(".feature-item"), "80%")
new RevealOnScroll($(".testimonial"), "70%")
new StickyHeader()
new Modal()
