'use strict'

const addEventOnElements = function (elements, eventType, callback) {
  for(let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback)
  }
}

// HEADER

const navbar = document.querySelector("[data-navbar]")
const navbarToggler = document.querySelector("[data-navbar-toggler]")
const navbarLinks = document.querySelectorAll("[data-navbar-link]")

const toggleNavbar = function () {
  navbar.classList.toggle("active")
  this.classList.toggle("active")
}

navbarToggler.addEventListener("click", toggleNavbar)

const navbarClose = () => {
  navbar.classList.remove("active")
  navbarToggler.classList.remove("active")
}

addEventOnElements(navbarLinks, "click", navbarClose)

// header will be active(fixed) after scrolled down to 100px (i think, i can doing this in css)

const header = document.querySelector("[data-header]")

const activeElement = function () {
  if(window.scrollY > 100) {
    header.classList.add("active")
  } else {
    header.classList.remove("active")
  }
}

window.addEventListener("scroll", activeElement)

//Hero section

const buttons = document.querySelectorAll("[data-btn]")

const buttonHoverRipple = function(event) {
  this.style.setProperty("--top", ${event.offsetY}px)
  this.style.setProperty("--left", ${event.offsetX}px)
}

addEventOnElements(buttons, "mousemove", buttonHoverRipple)