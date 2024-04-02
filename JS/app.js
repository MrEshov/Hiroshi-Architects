// Function to toggle header class based on scroll
(function() {
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header__active');
            
        } else {
            header.classList.remove('header__active');
    
        }
    });
})();

// main page background image switch
let buttons = document.querySelectorAll('.intro__slider-button');
buttons.forEach((button, index) => {
    console.log(button, index);
 button.addEventListener('mouseover', () => {
    buttons.forEach(btn => {
        btn.style.width = '42px';
    })
    if (index == '0') {
    button.style.width = '100px';
    button.style.backgroundColor = '#fff'
    document.querySelector('.intro').style.backgroundImage = 'url("../images/main/firstBgImage.jpg")';
    document.querySelector('.intro').style.backgroundRepeat = 'no-repeat';
    document.querySelector('.intro').style.backgroundPosition = '50%';
    document.querySelector('.introSlider2').style.backgroundColor = 'rgb(150, 150, 150)';
    document.querySelector('.introSlider3').style.backgroundColor = 'rgb(150, 150, 150)';
    }
    else if (index == '1') {
    button.style.width = '100px';
    button.style.backgroundColor = '#fff'
    document.querySelector('.intro').style.backgroundImage = 'url("../images/main/secondBgImage.jpg")';
    // document.querySelector('.intro').style.backgroundRepeat = 'no-repeat';
    // document.querySelector('.intro').style.backgroundPosition = '50%';
    document.querySelector('.introSlider1').style.backgroundColor = 'rgb(150, 150, 150)';
    document.querySelector('.introSlider3').style.backgroundColor = 'rgb(150, 150, 150)';
    
    }
    else {
    button.style.width = '100px';
    button.style.backgroundColor = '#fff'
    document.querySelector('.intro').style.backgroundImage = 'url("../images/main/thirdBgImage.jpg")';
    document.querySelector('.intro').style.backgroundRepeat = 'no-repeat';
    document.querySelector('.intro').style.backgroundPosition = '50%';
    document.querySelector('.introSlider1').style.backgroundColor = 'rgb(150, 150, 150)';
    document.querySelector('.introSlider2').style.backgroundColor = 'rgb(150, 150, 150)';

    }
 })
});


// Function to handle burger menu and close button
(function() {
    const burger = document.querySelector('.header__burger');
    const menu = document.querySelector('.header__nav');
    const closeBtn = document.querySelector('.header__nav-close');

    burger.addEventListener('click', () => {
        menu.style.display = 'block';
        burger.style.opacity= '0';
    });

    closeBtn.addEventListener('click', () => {
        menu.style.display = 'none'
        burger.style.opacity= '1'
    });
})();

// webpage loading 

document.body.onload = function() {
    setTimeout (function() {
    const loader = document.querySelector('.loader__container')
    if (!loader.classList.contains('hide')) {
        loader.classList.add('hide');
    }
}, 1000)
}
