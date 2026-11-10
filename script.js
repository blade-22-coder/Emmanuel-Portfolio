//MOBILE NAVIGATION//
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
});

//close mobile menu aftet clicking a link
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        nvbar.classList.remove("open");
    });
});

//SCROLL REVEAL ANIMATIONS
const revealElements = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
    entries => {
        entries.forEach(entry => {
            if (entry.isInteracting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
                
            }
            
        });
    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(element => {
    observer.observe(element);
});

//ACTIVE NAVIGATION
const sections = document.querySelectorAll("section[id]");
window.addEventListener("scroll", () => {
    let currentSection = "";

    sections.forEach(element => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 150){
            currentSection = section.getAttribute("id");
        }
        
    });
    navLinks.forEach(element => {
        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }
    });
})