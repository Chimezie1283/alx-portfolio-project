let toggle = document.querySelector("#header .toggle-button");
let collapse = document.querySelectorAll("#header .collapse");

toggle.addEventListener('click', function(){
    collapse.forEach(col => col.classList.toggle("collapse-toggle"));
})

// With Masonry

new Masonry("#posts .grid",{
    ItemSelector: '.grid-item',
    gutter: 20
});

// Swipper Library Initialization
new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 5,
    autoplay: {
        delay: 3000
    },   

    // responsive breackpoint
    breakpoints: {
        '@0': {
            slidesPerView: 2
        },
        // 888px
        '@1.00': {
            slidesPerView: 3
        },
        // 110px
        '@1.25': {
            slidesPerView: 4
        },
        '@1.50': {
            slidesPerView:5
        }
    }
  })

//   Sticky Navigation
window.onscroll = function(){myFunction()};
// Gt the current value
let navbar = document.getElementById("header");

// Get the navbar position
let Sticky = navbar.offsetTop;

// Sticky Function
function myFunction() {
    if(window.pageXOffset >= Sticky){
        navbar.classList.add("sticky");
    }else {
        navbar.classList.remove("sticky");
    }
}