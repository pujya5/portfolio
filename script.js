/* =========================================
   MOBILE MENU
========================================= */


const menuButton = document.getElementById("menu-btn");

const navLinks = document.querySelector(".nav-links");


menuButton.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* CLOSE MENU AFTER CLICKING LINK */


document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* =========================================
   SCROLL REVEAL ANIMATION
========================================= */


const revealElements = document.querySelectorAll(

    ".section, .stat-item, .skill-card, .project-card, .timeline-item, .certification-card"

);


const revealObserver = new IntersectionObserver(

    (entries, observer) => {


        entries.forEach(entry => {


            if (entry.isIntersecting) {


                entry.target.classList.add("reveal-active");


                observer.unobserve(entry.target);


            }


        });


    },


    {

        threshold: 0.12

    }

);


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================
   ACTIVE NAVIGATION LINK
========================================= */


const sections = document.querySelectorAll("section[id]");

const navigationLinks = document.querySelectorAll(".nav-links a");


window.addEventListener("scroll", () => {


    let currentSection = "";


    sections.forEach(section => {


        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.offsetHeight;


        if (

            window.scrollY >= sectionTop &&

            window.scrollY < sectionTop + sectionHeight

        ) {

            currentSection = section.getAttribute("id");

        }


    });


    navigationLinks.forEach(link => {


        link.classList.remove("active");


        if (

            link.getAttribute("href") === `#${currentSection}`

        ) {

            link.classList.add("active");

        }


    });


});


/* =========================================
   TYPING EFFECT
========================================= */


const heroTitle = document.querySelector(".hero h2");


const roles = [

    "AI & Machine Learning Developer",

    "Python Developer",

    "Software Developer",

    "Technology Enthusiast"

];


let roleIndex = 0;

let characterIndex = 0;

let isDeleting = false;


function typeEffect() {


    const currentRole = roles[roleIndex];


    if (isDeleting) {

        heroTitle.textContent = currentRole.substring(

            0,

            characterIndex--

        );

    }

    else {

        heroTitle.textContent = currentRole.substring(

            0,

            characterIndex++

        );

    }


    let typingSpeed = isDeleting ? 50 : 90;


    if (!isDeleting && characterIndex === currentRole.length) {

        typingSpeed = 1800;

        isDeleting = true;

    }


    else if (isDeleting && characterIndex === 0) {

        isDeleting = false;

        roleIndex = (roleIndex + 1) % roles.length;

        typingSpeed = 500;

    }


    setTimeout(typeEffect, typingSpeed);

}


typeEffect();


/* =========================================
   CURRENT YEAR
========================================= */


const currentYear = new Date().getFullYear();


const footerText = document.querySelector("footer p");


if (footerText) {

    footerText.textContent = `© ${currentYear} Gona Pujya Lakshmi`;

}