/**
 * Hamburger navgiation bar expand/collapse on click.
 */
function toggleMenu() {
    document.querySelector(".hb-links").classList.toggle("open");;
    document.querySelector(".hb-icon").classList.toggle("open");;
}

/**
 * Load particles script.
 */
particlesJS.load('particles-js', '../assets/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

/**
 * Set project cards view.
 */
$(document).ready(() => {
    // Load project content
    $("#projects").load("../sections/projects.html", () => {
        let projects = document.querySelectorAll(".project-card");
        let nextProject = document.getElementById("next-project");
        let prevProject = document.getElementById("prev-project");

        let active = 0;
        function loadProjects() {
            projects[active].style.transform = `none`;
            projects[active].style.zIndex = 1;
            projects[active].style.filter = "none";
            projects[active].style.opacity = 1;

            let srr = 0;
            for (let i = active + 1; i < projects.length; i++) {
                srr++;
                projects[i].style.transform = `translateX(${120 * srr}px) scale(${1 - 0.2 * srr}) perspective(16px) rotateY(-1deg)`;
                projects[i].style.zIndex = -srr;
                projects[i].style.filter = "blur(5px)";
                projects[i].style.opacity = srr > 2 ? 0 : 0.6;
            }

            let sll = 0;
            for (let i = active - 1; i >= 0; i--) {
                sll++;
                projects[i].style.transform = `translateX(${-120 * sll}px) scale(${1 - 0.2 * sll}) perspective(16px) rotateY(1deg)`;
                projects[i].style.zIndex = -sll;
                projects[i].style.filter = "blur(5px)";
                projects[i].style.opacity = sll > 2 ? 0 : 0.6;
            }

            // Toggle project arrow display
            if (active === 0) prevProject.style.display = "none";
            else prevProject.style.display = "";

            if (active === projects.length - 1) nextProject.style.display = "none";
            else nextProject.style.display = "";
        }
        loadProjects();

        nextProject.onclick = function() {
            active = active + 1 < projects.length ? active + 1 : active;
            loadProjects();
        }
        prevProject.onclick = function() {
            active = active - 1 >= 0 ? active - 1 : active;
            loadProjects();
        }
    });
});