/*!
* Start Bootstrap - Grayscale v7.0.5 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', (event) => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});

var fields = {};

document.addEventListener("DOMContentLoaded", function() {
    fields.name = document.getElementById('name');
    fields.email = document.getElementById('email');
    fields.message = document.getElementById('message');
});

function sendForm() {   
    Email.send({
        Host : "smtp.gmail.com",
        Username : "itws@rpi.edu",
        Password : "password",
        To : 'itws@rpi.edu',
        From : document.getElementById("email").value,
        Subject : document.getElementById("name").value + " - Contact Form",
        Body : document.getElementById("message").value
    }).then(
      message => alert(message)
    );
    
    const l1 = document.getElementById('sub1');
    const l2 = document.getElementById('sub2');
    l1.style.display = 'visible';
    l2.style.display = 'visible';
}