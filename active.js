
const navLinks = document.querySelectorAll('.nav-link');
const menu = document.querySelector('.checkbtn');
const navbar = document.querySelector('.navbar');
const screenSize = window.matchMedia("screen and (max-device-width: 750px)");

screenSize.addEventListener("change", e => {
   if(e.matches){
      navbar.style.display = 'none';
menu.addEventListener('click', () => {
   navbar.style.display = 'initial';
})

navLinks.forEach(link => {
   link.addEventListener('click', () => {
    navbar.style.display = 'initial';
    document.querySelector('.active')?.classList.remove('active');
    link.classList.add('active');
    if(navbar.style.display = 'initial'){
      navbar.style.display = 'none';
    }
    
   }) 
})
} else {
     navbar.style.display = 'initial';
     navLinks.forEach(link => {
      link.addEventListener('click', () => {
       navbar.style.display = 'initial';
      })
   })
 }
})