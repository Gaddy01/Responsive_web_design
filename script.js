/*This ensures the JavaScript runs only after the HTML document is fully loaded.*/
/* It also Listens for a click on the hamburger.*/
document.addEventListener("DOMContentLoaded", function () { 
    const hamburger = document.querySelector(".hamburger");
    const menu = document.querySelector(".menu");

    /* Toggle menu on click */
    hamburger.addEventListener("click", function () {
        menu.classList.toggle("active");
    });

    /* Smooth scrolling for navigation links */
    document.querySelectorAll("nav a").forEach(link => { //Finds all navigation links (<a> inside <nav>).
        link.addEventListener("click", function (e) { //Adds an event listener so when a link is clicked
            
            e.preventDefault(); //Prevents default behavior to stop instant jumps.
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId); //Gets the id of the target section.
            
            window.scrollTo({ //Scrolls smoothly to the target section.
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
            menu.classList.remove("active"); // Hides the menu after clicking (for small screens).
        });
    });

    /* Back to top button */
    const backToTop = document.createElement("button"); //Creates a new button (⬆ Back to Top) using JavaScript.
    backToTop.innerText = "⬆ Back to Top";
    backToTop.classList.add("back-to-top");
    document.body.appendChild(backToTop); //Adds the button to the page

    backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    /* Making "Back to Top" Button Work */
    window.addEventListener("scroll", function () { //Listens for a click on the button.
        backToTop.style.display = window.scrollY > 300 ? "block" : "none"; //Scrolls back to the top of the page smoothly.
    });
});
