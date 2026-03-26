// TYPING
var typed = new Typed(".text", {
    strings: ["Full Stack Developer", "MERN Stack Learner", "Frontend Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// SKILLS SECTION
const skillsSection = document.querySelector("#skills");

// OBSERVER (scroll)
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            skillsSection.classList.add("active");
        }
    });
}, {
    threshold: 0.4
});

observer.observe(skillsSection);

document.querySelector('a[href="#skills"]').addEventListener("click", () => {
    setTimeout(() => {
        skillsSection.classList.add("active");
    }, 300); // small delay for smooth scroll
});