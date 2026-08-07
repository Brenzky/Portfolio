/* ======================================
   TYPING EFFECT
====================================== */

const typingText = document.getElementById("typing");

const words = [
    "Web Developer",
    "Data Analyst",
    "Machine Learning Enthusiast",
    "IT Enthusiast"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect(){

    const currentWord = words[wordIndex];

    if(!deleting){

        typingText.textContent =
        currentWord.substring(0,charIndex+1);

        charIndex++;

        if(charIndex === currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1500);

            return;
        }

    }else{

        typingText.textContent =
        currentWord.substring(0,charIndex-1);

        charIndex--;

        if(charIndex === 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect,deleting ? 70 : 120);

}

typeEffect();


/* ======================================
   MOBILE MENU
====================================== */

const menuBtn =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector(".nav-menu");

menuBtn.addEventListener("click",()=>{

    navMenu.classList.toggle("active");

});


/* ======================================
   CLOSE MENU WHEN CLICK LINK
====================================== */

const navLinks =
document.querySelectorAll(".nav-menu a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });

});


/* ======================================
   STICKY NAVBAR
====================================== */

const navbar =
document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

    if(window.scrollY>50){

        navbar.style.background="#020617";

        navbar.style.boxShadow=
        "0 5px 20px rgba(0,0,0,.3)";

    }else{

        navbar.style.background=
        "rgba(15,23,42,.75)";

        navbar.style.boxShadow="none";

    }

});


/* ======================================
   BACK TO TOP
====================================== */

const topBtn =
document.getElementById("topBtn");

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

        topBtn.style.display="block";

    }else{

        topBtn.style.display="none";

    }

});

topBtn.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});


/* ======================================
   SCROLL ANIMATION
====================================== */

const observer =
new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

const hidden =
document.querySelectorAll(".section");

hidden.forEach(sec=>{

    sec.classList.add("fade");

    observer.observe(sec);

});


/* ======================================
   ACTIVE MENU
====================================== */

const sections =
document.querySelectorAll("section");

window.addEventListener("scroll",()=>{

    let current="";

    sections.forEach(section=>{

        const top=section.offsetTop-120;

        const height=section.clientHeight;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/* ======================================
   SMOOTH SCROLL
====================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

    anchor.addEventListener("click",function(e){

        e.preventDefault();

        document.querySelector(
            this.getAttribute("href")
        ).scrollIntoView({

            behavior:"smooth"

        });

    });

});