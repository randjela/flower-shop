document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("#navlinks a") ;

    navLinks.forEach(link => {
        link.addEventListener("click", smoothScroll);
    });

    function smoothScroll(event) {
        event.preventDefault();

        const targetId = event.target.getAttribute("href");
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
            
            window.scrollTo({
                top: offsetTop,
                behavior: "smooth"
            });
        }
    }
});
const navbar = document.getElementById('navbar');


window.addEventListener('scroll', () => {
    
    if (window.scrollY > 40) {
        navbar.classList.add('stuck');
    } else {
        navbar.classList.remove('stuck');
    }
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
const mobileMenuItems = mobileMenu.querySelectorAll('a'); 

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
});

mobileMenuItems.forEach((menuItem) => {
  menuItem.addEventListener('click', (event) => {
    event.preventDefault(); 
    mobileMenu.classList.remove('active'); 
    setTimeout(() => {
      window.location.href = event.target.href; 
    }, 200); 
  });
});



window.addEventListener('scroll', () => {
    const orderForm = document.getElementById('order-form');
    const productList = document.querySelector('table');
    const productListRect = productList.getBoundingClientRect();

    if (window.scrollY > productListRect.bottom) {
        orderForm.style.top = '20px'; 
        orderForm.style.position = 'sticky';
    } else {
        orderForm.style.position = 'static';
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("myButton");

    button.addEventListener("click", function () {
        const url = "Stranice/porudzbina.html";

        window.location.href = url;
    });
});
