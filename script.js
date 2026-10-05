/* =========================================================
   BEN CONSTRUCTION HUB
   MAIN JAVASCRIPT
   ========================================================= */


/* =========================================================
   1. MOBILE NAVIGATION
   ========================================================= */

const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        navbar.classList.toggle("show");

        if (navbar.classList.contains("show")) {
            menuToggle.textContent = "✕";
        } else {
            menuToggle.textContent = "☰";
        }

    });

}


/* =========================================================
   2. CLOSE MOBILE MENU AFTER CLICKING A LINK
   ========================================================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbar) {
            navbar.classList.remove("show");
        }

        if (menuToggle) {
            menuToggle.textContent = "☰";
        }

    });

});


/* =========================================================
   3. AUTOMATIC COPYRIGHT YEAR
   ========================================================= */

const yearElement = document.getElementById("year");

if (yearElement) {

    const currentYear = new Date().getFullYear();

    yearElement.textContent = currentYear;

}


/* =========================================================
   4. CLOSE MENU WHEN CLICKING OUTSIDE
   ========================================================= */

document.addEventListener("click", function (event) {

    if (!navbar || !menuToggle) {
        return;
    }

    const clickedInsideMenu =
        navbar.contains(event.target);

    const clickedMenuButton =
        menuToggle.contains(event.target);

    if (
        !clickedInsideMenu &&
        !clickedMenuButton
    ) {

        navbar.classList.remove("show");

        menuToggle.textContent = "☰";

    }

});


/* =========================================================
   5. SIMPLE SCROLL ANIMATION
   ========================================================= */

const animatedElements = document.querySelectorAll(
    ".service-card, .project-card, .why-item, .intro-card"
);

const animationObserver = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                animationObserver.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.15
    }
);


animatedElements.forEach(function (element) {

    element.classList.add("animate-on-scroll");

    animationObserver.observe(element);

});


/* =========================================================
   6. CURRENT PAGE HIGHLIGHT
   ========================================================= */

const currentPage =
    window.location.pathname.split("/").pop() || "index.html";

navLinks.forEach(function (link) {

    const linkPage =
        link.getAttribute("href");

    if (linkPage === currentPage) {

        navLinks.forEach(function (item) {
            item.classList.remove("active");
        });

        link.classList.add("active");

    }

});


/* =========================================================
   7. CONSOLE MESSAGE
   ========================================================= */

console.log(
    "Ben Construction Hub loaded successfully."
);
/* =========================================================
   CONTACT FORM → WHATSAPP
   ========================================================= */

const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        /* GET FORM VALUES */

        const name = document.getElementById("name")?.value.trim() || "";
        const phone = document.getElementById("phone")?.value.trim() || "";
        const email = document.getElementById("email")?.value.trim() || "";
        const service = document.getElementById("service")?.value || "";
        const location = document.getElementById("location")?.value.trim() || "";
        const budget = document.getElementById("budget")?.value || "";
        const message = document.getElementById("message")?.value.trim() || "";

        /* CHECK REQUIRED FIELDS */

        if (!name || !phone || !service || !message) {

            alert(
                "Please fill in your name, phone number, service required and project description."
            );

            return;
        }

        /* =====================================================
           YOUR REAL WHATSAPP NUMBER
           ===================================================== */

        const whatsappNumber = "254769697212";


        /* =====================================================
           CREATE MESSAGE
           ===================================================== */

        const whatsappMessage =
`🏗️ BEN CONSTRUCTION HUB
PROJECT ENQUIRY

👤 Client Name:
${name}

📞 Phone:
${phone}

📧 Email:
${email || "Not provided"}

🔨 Service Required:
${service}

📍 Project Location:
${location || "Not provided"}

💰 Estimated Budget:
${budget || "Not provided"}

📝 Project Description:
${message}`;


        /* =====================================================
           CREATE WHATSAPP URL
           ===================================================== */

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        /* =====================================================
           OPEN WHATSAPP
           ===================================================== */

        window.location.href = whatsappURL;

    });
}
/* =========================================================
   ONGOING PROJECT FOLDER
   ========================================================= */

function toggleOngoingProject() {

    const folder = document.querySelector(".project-folder");
    const project = document.getElementById("ongoingProjectContent");

    if (!folder || !project) {
        return;
    }

    folder.classList.toggle("open");
    project.classList.toggle("open");

}