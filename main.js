


const open = document.querySelector('.open');
const close = document.querySelector('.close');
const nav = document.querySelector('.nav-links');



open.addEventListener('click', ()=>{
    nav.style.top = '0';
})
close.addEventListener('click', ()=>{
    nav.style.top = '-50rem';
})
