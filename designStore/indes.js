const bar = document.getElementById('bar')
const nav = document.getElementById('header__navbar')

if(bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active')
    })
}