/*=============== SHOW MENU ===============*/
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
          nav = document.getElementById(navId)
 
    toggle.addEventListener('click', () =>{
        // Add show-menu class to nav menu
        nav.classList.toggle('show-menu')
 
        // Add show-icon to show and hide the menu icon
        toggle.classList.toggle('show-icon')
    })
 }
 
 showMenu('nav-toggle','nav-menu');
 /*---------------------------navbar js ends here-----------------------------*/ 
 /*--------------------------section 1 js starts here--------------------------*/
 document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
 /*--------------------------section 1 js ends here--------------------------*/
 /*--------------------------script for sec-10 starts here-------------------*/ 
 // script.js
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const updateCount = (counter) => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const speed = 200; // Adjust speed if needed
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(() => updateCount(counter), 1);
        } else {
            counter.innerText = target.toLocaleString();
        }
    };

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5 // Trigger when at least 50% of the element is visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                updateCount(counter);
                observer.unobserve(counter); // Stop observing after animation starts
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});
/*---------------------experience js ends here------------------*/
 /*--------------------------script for sec-10 ends here-------------------*/ 
 /*-------------------------section 5 js starts here-----------------------*/
let currentSlide=0;
function moveSlide(direction){
    const slider= document.querySelector(".slider");
    const totalslides=slider.children.length;
    const visibleslides=4;
    const maxSlideIndex=totalslides - visibleslides;

    currentSlide += direction;
    if(currentSlide>maxSlideIndex){
        currentSlide=0;
    }
    else if(currentSlide<0){
        currentSlide=maxSlideIndex;
    }
    const offset= -currentSlide * 25;
    slider.style.transform = `translateX(${offset}%)`;
}
 /*-------------------------section 5 js ends here-----------------------*/
 /*-------------------------section 6 js starts here-----------------------*/
 let recentSlide=0;
 function slideSlider(e){
    const totalBoxes= box-container . children .length;
    const visibleBox = 3;
    const slide= document.querySelector(".box-container");
    const maxIndex= totalBoxes - visibleBox;
    recentSlide+=e;
    if(recentSlide>maxIndex){
        recentSlide=0;
    }
    else if(recentSlide<0){
        recentSlide = maxIndex;
    }
    const offset = -recentSlide * 30;
    slide.style.transform= `translateX(${offset}%)`;
 }
 /*-------------------------section 6 js ends here-----------------------*/
 /*-------------------------about us  js starts here-----------------------*/
 var swiper = new Swiper('.swiper-container', {
    loop: true, // Allows infinite loop scrolling
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
 /*-------------------------about us  js ends here-----------------------*/
 /*------------------work section js starts here--------------------------*/

 /*------------------work section js ends here--------------------------*/
 document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
/*--------------------contact us slider js starts here---------------------*/
$('.testimonials-container').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:2000,
    margin:10,
    nav:true,
    navText:["<i class='fa-solid fa-arrow-left></i>",
            "<i class='fa-solid fa-arrow-right></i>"],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        800:{
            items:2
        },
        1000:{
            items:3
        }
    }
});
/*--------------------contact us slider js ends here---------------------*/
/*--------------------testimonial section css starts here----------------*/
let slideIndex = 0;
let slides = document.getElementsByClassName("testimonial-slide");
showSlides();

// Auto-play functionality
function showSlides() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active"); // Hide all slides
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].classList.add("active"); // Show current slide
    setTimeout(showSlides, 5000); // Change image every 5 seconds
}

// Manual slide control
function moveSlide(n) {
    slideIndex += n;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    if (slideIndex < 1) {
        slideIndex = slides.length;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active"); // Hide all slides
    }
    slides[slideIndex - 1].classList.add("active"); // Show current slide
}
/*--------------------testimonial section css ends here----------------*/
const dialog = document.getElementById('popupDialog');

function showDialog() {
    dialog.showModal();
}

function closeDialog() {
    dialog.close();
}

function checkDialogDisplay() {
    const lastShown = localStorage.getItem('dialogLastShown');
    const now = new Date().getTime();

    // If dialog has not been shown or was shown more than 1 minute ago
    if (!lastShown || now - lastShown >= 3000) {
        localStorage.setItem('dialogLastShown', now);
        showDialog();
    }
}

// Initial call to check and show the dialog
document.addEventListener('DOMContentLoaded', function() {
    checkDialogDisplay();
    // Set up to check and show the dialog every minute
    setInterval(checkDialogDisplay, 60000); // 60000 ms = 1 minute
});