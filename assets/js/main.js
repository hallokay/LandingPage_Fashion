const toggleBtn = document.getElementById('nav_toggle'),
    navMenu = document.getElementById('nav_menu');

if(toggleBtn && navMenu) {
    toggleBtn.addEventListener('click', () => {
        navMenu.classList.toggle('show_menu');
    })
}


        //===============animation=========
// HOME PRIMARY

TweenMax.to(".home_primary", 2, {
    width: "100%",
    ease: Expo.easeInOut
})

gsap.from('.home_title', { opacity: 0, duration: 2, delay: 1.5, y: 100});
gsap.from('.home_img img', { opacity: 0, duration: 2, delay: 1.5, y: -100});

// HOME secondary

TweenMax.to(".home_secondary", 2, {
    width: "100%",
    ease: Expo.easeInOut
})

gsap.from('.home_scroll', { opacity: 0, duration: 3, X: -100});
gsap.from('.home_year', { opacity: -1, duration: 1.5, delay: 1.5, x: -100});
