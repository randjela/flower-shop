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
