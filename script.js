// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Optimize loading of images
    const images = document.querySelectorAll("img[data-src]");
    images.forEach(img => {
        img.src = img.getAttribute("data-src");
        img.onload = () => img.removeAttribute("data-src");
    });
    // Increase font size and add a web effect
    const textElements = document.querySelectorAll("p, h1, h2, h3, h4, h5, h6");
    textElements.forEach(element => {
        element.style.transition = "transform 0.3s ease, font-size 0.3s ease";
        element.addEventListener("mouseover", () => {
            element.style.transform = "scale(1.1)";
            element.style.fontSize = "larger";
        });
        element.addEventListener("mouseout", () => {
            element.style.transform = "scale(1)";
            element.style.fontSize = "";
        });
    });
    // Smooth scrolling for anchor links
    // Add an entrance effect for elements on experiencia profissional.html
    if (window.location.pathname.includes("experiencia profissional.html")) {
        const elements = document.querySelectorAll(".animate-on-load");
        elements.forEach((element, index) => {
            element.style.opacity = "0";
            element.style.transform = "translateY(30px)";
            element.style.transition = "opacity 0.6s ease-out, transform 0.6s ease-out";
            setTimeout(() => {
                element.style.opacity = "1";
                element.style.transform = "translateY(0)";
            }, index * 200); // Staggered effect for a more professional look
        });
    }
        });
    }
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});