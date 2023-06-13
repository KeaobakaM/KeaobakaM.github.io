const navLinks = document.querySelectorAll(".nav-link");
const menu = document.querySelector(".checkbtn");
const navbar = document.querySelector(".navbar");
const screenSize = window.matchMedia("screen and (max-device-width: 750px)");
const bigScreen = window.matchMedia("screen and (min-width: 750px)");

navbar.style.display = "none";
if(bigScreen.matches === true){
   navbar.style.display = "initial";
   navLinks.forEach((link) => {
   link.addEventListener("click", () => {
      document.querySelector('.active')?.classList.remove('active');
      link.classList.add("active");
      navbar.style.display = "initial";
   })
    });  
    menu.addEventListener("click", () => {
      if(navbar.style.display === "none"){
        navbar.style.display = "initial"
      } else navbar.style.display = "none";
    });
}

if(screenSize.matches === true){
   navbar.style.display = "none";
   navLinks.forEach((link) => {
   link.addEventListener("click", () => {
      document.querySelector('.active')?.classList.remove('active');
      link.classList.add("active");
   })
    });
}

    menu.addEventListener("click", () => {
      if(navbar.style.display === "none"){
        navbar.style.display = "initial"
      } else navbar.style.display = "none";
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbar.style.display = "initial";
        document.querySelector('.active')?.classList.remove('active');
        link.classList.add("active");
        if ((navbar.style.display = "initial") && (screenSize.matches) | (bigScreen.matches != true)) {
          navbar.style.display = "none";
        }
      });
    });

screenSize.addEventListener("change", (e) => {
  if (e.matches) {
    navbar.style.display = "none";

    menu.addEventListener("click", () => {
      if(navbar.style.display === "none"){
        navbar.style.display = "initial"
      } else navbar.style.display = "none";
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        navbar.style.display = "initial";
        document.querySelector('.active')?.classList.remove('active');
        link.classList.add("active");
        if ((navbar.style.display = "initial")) {
          navbar.style.display = "none";
        }
      });
    });
  } else {
    menu.addEventListener("click", () => {
      if(navbar.style.display === "none"){
        navbar.style.display = "initial"
      } else navbar.style.display = "none";
    });
    navbar.style.display = "initial";
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        link.classList.add("active");
        navbar.style.display = "initial";
      });
    });
  }
});

bigScreen.addEventListener("change", (e) => {
  if (e.matches) {
    menu.addEventListener("click", () => {
      if(navbar.style.display === "none"){
        navbar.style.display = "initial"
      } else navbar.style.display = "none";
    });
    navbar.style.display = "initial";
    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        link.classList.add("active");
      });
    });
  }
  else {
    console.log( 'money')
    navbar.style.display = "none";
    menu.addEventListener("click", () => {
      if(navbar.style.display === "none"){
        navbar.style.display = "initial"
      } else navbar.style.display = "none";
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        document.querySelector('.active')?.classList.remove('active');
        link.classList.add("active");
        if ((navbar.style.display === "initial")  && (screenSize.matches)) {
          navbar.style.display = "none";
        } 
      });
    });
  }
});