let catchText = document.querySelector('#main_header_catchText')
let img = document.querySelector('#main_header_img')


window.addEventListener('scroll', function() {
    let value = window.scrollY
    catchText.style.top = value * 0.5 + 'px';
    img.style.top = value * 0.05 + 'px';
})