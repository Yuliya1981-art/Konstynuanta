document.addEventListener("DOMContentLoaded", function() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");
    const buttonLinks = document.querySelectorAll(".button-large, .button");

    function showSection(id) {
        sections.forEach(section => {
            section.classList.remove("active");
            if (section.id === id) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            showSection(targetId);
        });
    });

    buttonLinks.forEach(button => {
        button.addEventListener("click", function(event) {
            const targetUrl = this.getAttribute("href");
            if (targetUrl.startsWith("#")) {
                event.preventDefault();
                const targetId = targetUrl.substring(1);
                showSection(targetId);
            } else {
                // For external links, we just change the window location
                window.location.href = targetUrl;
            }
        });
    });

    window.addEventListener("scroll", function() {
        let currentSection = "";
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    });
});
{
    const invisibleButton = document.querySelector(".invisible-button");

    invisibleButton.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        targetElement.scrollIntoView({ behavior: 'smooth' });
    });
} 
document.addEventListener('DOMContentLoaded', function () {
    
   
    const menuToggle = document.querySelector('.menu-toggle');
         const navMenu = document.querySelector('nav ul');
          menuToggle.
          menuToggle.
          menuTog
          men
    
    
       
    addEventListener('click', function () {
            navMenu.
            navMenu.
            nav
    
    classList.toggle('showing');
        });
    });
    
       