//MENU BUTTON

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const navLinks = document.querySelectorAll("nav ul li a"); // Select all menu links

    if (menuToggle && navMenu) {
        // Toggle menu open/close
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });

        // Close menu when clicking outside
        document.addEventListener("click", function (event) {
            if (!navMenu.contains(event.target) && !menuToggle.contains(event.target)) {
                navMenu.classList.remove("active");
            }
        });

        // Close menu when clicking a menu link
        navLinks.forEach(link => {
            link.addEventListener("click", function () {
                navMenu.classList.remove("active");
            });
        });
    }
});



// PARTICLES
src="https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js"
particlesJS('particles-js', {
    particles: {
        number: { value: 100, density: { enable: true, value_area: 800 } },
        color: { value: ["#fcea6f"]},
        shape: { type: "circle" },
        opacity: { value: 1.5 },
        size: { value: 3, random: true },
        move: { enable: true, speed: 4 },
        line_linked: { enable: true, distance: 200, color: "#fcf8de", opacity: 0.7, width: 1 }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" }
        },
        modes: {
            grab: { distance: 120, line_linked: { opacity: 1 } },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

//--------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
    const circles = document.querySelectorAll(".circle");

    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return rect.top < window.innerHeight - 100; // Trigger slightly before fully in view
    }

    function animateCircles() {
        console.log("Animating Circles...");  // ✅ Check if function runs on scroll
    
        circles.forEach((circle) => {
            if (isInViewport(circle) && !circle.classList.contains("animated")) {
                console.log(`Animating: ${circle.querySelector("p").textContent}`); // ✅ See which circle is animating
    
                const percent = parseInt(circle.getAttribute("data-percent"));
                const progress = circle.querySelector(".progress");
                const percentageText = circle.querySelector(".percentage");
    
                const offset = 314 - (percent * 3.14);
    
                setTimeout(() => {
                    console.log(`Setting stroke-dashoffset: ${offset}`);  // ✅ Check if offset is updating
                    progress.style.strokeDashoffset = offset;
                }, 200);
    
                // Animate Percentage Counter
                let counter = 0;
                const interval = setInterval(() => {
                    if (counter >= percent) {
                        clearInterval(interval);
                    } else {
                        counter++;
                        percentageText.textContent = counter + "%";
                    }
                }, 20); // Speed of the counter
    
                circle.classList.add("animated"); // Prevent re-triggering
            }
        });
    }
    

    // Trigger animation on scroll
    window.addEventListener("scroll", animateCircles);

    // Run once in case elements are already in view
    animateCircles();
});
window.addEventListener("scroll", () => {
    console.log("Scroll event triggered!");
});

//----------------------------------------------------------------------

function toggleCard(card) {
    // Toggle the 'active' class on the clicked card
    card.classList.toggle("active");
  
    // Close other open cards
    document.querySelectorAll(".experience-card").forEach(otherCard => {
      if (otherCard !== card) {
        otherCard.classList.remove("active");
      }
    });
  }
  
  
  




