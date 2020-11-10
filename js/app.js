const navbar=document.querySelector('.navbar');
const navLinks =document.querySelector('.nav-links');
const links = document.querySelector('.nav-links li');

navbar.addEventListener("click",()=>{
    navLinks.classList.toggle("open");
});