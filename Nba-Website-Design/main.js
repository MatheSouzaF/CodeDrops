let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');

menu.addEventListener('click',function(){
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('nav-toogle');
});

window.addEventListener('scroll',() => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('nav-toogle');
})