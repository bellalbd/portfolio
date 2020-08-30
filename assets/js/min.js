const humberger = document.querySelector('.humberger')
const navclick = document.querySelector('.nav-items')
const name = document.querySelector('.name')

humberger.addEventListener('click', function(){
    navclick.classList.toggle('nav-full')
})

humberger.addEventListener('click', function(){
    name.classList.toggle('name-show')
})


          