let navs = document.querySelector('.nav-links')
let burger = document.querySelector('.burger')
let burgetLineFirst = document.querySelector('.burger-line-first')
let burgetLineSecond = document.querySelector('.burger-line-second')
let burgerLineLast = document.querySelector('.last')

burger.addEventListener('click', function () {
    navs.classList.toggle('show-links')
    this.classList.toggle('burger-closing')
    burgetLineFirst.classList.toggle('rotate-1')
    burgetLineSecond.classList.toggle('rotate-2')
    burgerLineLast.classList.toggle('remove-line')
})

// CONTAINER 
let burger2 = document.getElementById('burger-2')
let navig = document.querySelector('.navigation')
let close = document.querySelector('.exit')

burger2.addEventListener('click', function () {
    navig.classList.toggle('navigation-opened')
    document.body.classList.toggle('overlay')
})
close.addEventListener('click', function () {
    navig.classList.remove('navigation-opened')
    document.body.classList.remove('overlay')
})