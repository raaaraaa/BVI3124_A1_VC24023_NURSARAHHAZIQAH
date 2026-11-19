// Wait until the HTML document is ready
document.addEventListener("DOMContentLoaded", function () {

    // 1. Show the current year automatically in the footer
    const yearElements = document.querySelectorAll(".current-year");
    const currentYear = new Date().getFullYear();

    yearElements.forEach(function (element) {
        element.textContent = currentYear;
    });

    // 2. Open and close the mobile navigation menu
    const menuButton = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");

    if (menuButton && navLinks) {
        menuButton.addEventListener("click", function () {
            navLinks.classList.toggle("open");

            const menuIsOpen = navLinks.classList.contains("open");
            menuButton.setAttribute("aria-expanded", menuIsOpen);
            menuButton.textContent = menuIsOpen ? "✕" : "☰";
        });
    }

    // 3. Switch between light mode and dark mode
    const themeButton = document.querySelector(".theme-toggle");

    if (themeButton) {
        themeButton.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeButton.textContent = "Light mode";
            } else {
                themeButton.textContent = "Dark mode";
            }
        });
    }

    // 4. Filter project cards by category
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const selectedCategory = button.getAttribute("data-filter");

            filterButtons.forEach(function (item) {
                item.classList.remove("selected");
            });
            button.classList.add("selected");

            projectCards.forEach(function (card) {
                const cardCategory = card.getAttribute("data-category");

                if (selectedCategory === "all" || cardCategory.split(" ").includes(selectedCategory)) {
                    card.classList.remove("hidden");
                } else {
                    card.classList.add("hidden");
                }
            });
        });
    });

    // 5. Validate the contact form
    const contactForm = document.querySelector("#contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const name = document.querySelector("#name").value.trim();
            const email = document.querySelector("#email").value.trim();
            const subject = document.querySelector("#subject").value.trim();
            const message = document.querySelector("#message").value.trim();
            const formMessage = document.querySelector("#formMessage");

            if (name === "" || email === "" || subject === "" || message === "") {
                formMessage.textContent = "Please complete all fields.";
                formMessage.className = "form-message error";
            } else if (!email.includes("@") || !email.includes(".")) {
                formMessage.textContent = "Please enter a valid email address.";
                formMessage.className = "form-message error";
            } else {
                formMessage.textContent = "All fields are valid. This demo does not send the message.";
                formMessage.className = "form-message success";
                contactForm.reset();
            }
        });
    }

    // 6. Show the back-to-top button after scrolling
    const topButton = document.querySelector(".back-to-top");

    if (topButton) {
        window.addEventListener("scroll", function () {
            if (window.scrollY > 300) {
                topButton.classList.add("show");
            } else {
                topButton.classList.remove("show");
            }
        });

        topButton.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }
});
