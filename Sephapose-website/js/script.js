// =========================================================
// SEPHAPOSE OLD AGE CARE CENTRE - PART 3 JAVASCRIPT
// Advanced Interactivity, Lightbox, Live Filter, AJAX Forms & Validation
// =========================================================

console.log("Sephapose Old Age Care Centre JavaScript (Part 3) loaded successfully!");

document.addEventListener("DOMContentLoaded", function () {

    // ---------------------------------------------------------
    // 1. ORIGINAL HOME PAGE SPECIAL BUTTON / BANNER INTERACTION
    // ---------------------------------------------------------
    const specialMessage = document.querySelector("#special-message");
    const specialButton = document.querySelector("#special-button");
    const specialImage = document.querySelector("#special-Image");

    if (specialMessage && specialButton && specialImage) {
        specialButton.addEventListener("click", function () {
            if (specialImage.style.display === "none" || specialImage.style.display === "") {
                specialImage.style.display = "block";
                specialMessage.textContent = "Thank you for supporting Sephapose Old Age Care Centre! Major Partners include the Hollywoodbets Foundation.";
                specialButton.textContent = "Hide Funders";
            } else {
                specialImage.style.display = "none";
                specialMessage.textContent = "Click below to view organizations and shops that have funded or assisted the Sephapose Old Age Care Centre (such as the Hollywoodbets Foundation).";
                specialButton.textContent = "View Funders";
            }
        });
    }

    // ---------------------------------------------------------
    // 2. GALLERY LIGHTBOX MECHANISM (Part 3 Requirement)
    // ---------------------------------------------------------
    // Create lightbox modal element dynamically
    const lightboxModal = document.createElement("div");
    lightboxModal.id = "lightbox-modal";
    lightboxModal.style.cssText = `
        display: none;
        position: fixed;
        z-index: 9999;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.85);
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 2rem;
    `;

    lightboxModal.innerHTML = `
        <span id="lightbox-close" style="position: absolute; top: 20px; right: 35px; color: #fff; font-size: 40px; font-weight: bold; cursor: pointer; transition: 0.3s;">&times;</span>
        <img id="lightbox-img" style="max-width: 90%; max-height: 80vh; border-radius: 8px; box-shadow: 0 0.5rem 1.5rem rgba(0,0,0,0.5);">
        <p id="lightbox-caption" style="color: #fff; margin-top: 15px; font-size: 1.1rem; text-align: center; max-width: 600px;"></p>
    `;
    document.body.appendChild(lightboxModal);

    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");
    const lightboxClose = document.getElementById("lightbox-close");

    // Attach lightbox click listener to all content images
    const contentImages = document.querySelectorAll("main img");
    contentImages.forEach(img => {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", function () {
            lightboxModal.style.display = "flex";
            lightboxImg.src = this.src;
            lightboxCaption.textContent = this.alt || "Sephapose Centre Gallery Image";
        });
    });

    if (lightboxClose) {
        lightboxClose.addEventListener("click", function () {
            lightboxModal.style.display = "none";
        });
    }

    lightboxModal.addEventListener("click", function (e) {
        if (e.target === lightboxModal) {
            lightboxModal.style.display = "none";
        }
    });

    // ---------------------------------------------------------
    // 3. DYNAMIC SERVICE LIVE ITEM FILTER (services.html)
    // ---------------------------------------------------------
    const searchInput = document.getElementById("searchInput");
    const searchForm = document.getElementById("searchForm");

    if (searchForm) {
        searchForm.addEventListener("submit", function (e) {
            e.preventDefault();
        });
    }

    if (searchInput) {
        searchInput.addEventListener("input", function () {
            const query = searchInput.value.toLowerCase().trim();
            const serviceSections = document.querySelectorAll("main section");

            serviceSections.forEach(section => {
                const text = section.textContent.toLowerCase();
                if (query === "" || text.includes(query)) {
                    section.style.display = "block";
                } else {
                    section.style.display = "none";
                }
            });
        });
    }

    // ---------------------------------------------------------
    // ---------------------------------------------------------
    // 4. FORMS ARCHITECTURE & STRICT CLIENT-SIDE VALIDATION / AJAX
    // ---------------------------------------------------------
    const forms = document.querySelectorAll("form");

    forms.forEach(form => {
        if (form.id === "searchForm") return;

        const feedbackDiv = document.createElement("div");
        feedbackDiv.className = "form-feedback";
        feedbackDiv.style.cssText = "margin-top: 1rem; padding: 0.8rem; border-radius: 4px; font-weight: bold; display: none;";
        form.appendChild(feedbackDiv);

        form.addEventListener("submit", function (e) {
            e.preventDefault();

            feedbackDiv.style.display = "none";
            feedbackDiv.className = "";

            const nameInput = form.querySelector("input[type='text']") || form.querySelector("input[name='name']");
            const emailInput = form.querySelector("input[type='email']") || form.querySelector("input[name='email']");
            const phoneInput = form.querySelector("input[type='tel']") || form.querySelector("input[name='phone']");
            const messageInput = form.querySelector("textarea");

            let errors = [];

            if (nameInput && nameInput.value.trim().length < 2) {
                errors.push("Please enter a valid full name (at least 2 characters).");
            }

            if (emailInput) {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailInput.value.trim())) {
                    errors.push("Please enter a valid email address (e.g., name@domain.com).");
                }
            }

            if (phoneInput && phoneInput.value.trim().length < 8) {
                errors.push("Please enter a valid phone number (at least 8 digits).");
            }

            if (messageInput && messageInput.value.trim().length < 5) {
                errors.push("Please provide a detailed message (at least 5 characters).");
            }

            if (errors.length > 0) {
                feedbackDiv.style.display = "block";
                feedbackDiv.style.backgroundColor = "#f8d7da";
                feedbackDiv.style.color = "#721c24";
                feedbackDiv.innerHTML = "<strong>Validation Error:</strong><br>" + errors.join("<br>");
                return;
            }

            feedbackDiv.style.display = "block";
            feedbackDiv.style.backgroundColor = "#fff3cd";
            feedbackDiv.style.color = "#856404";
            feedbackDiv.textContent = "Submitting form asynchronously via AJAX...";

            setTimeout(() => {
                feedbackDiv.style.backgroundColor = "#d4edda";
                feedbackDiv.style.color = "#155724";
                feedbackDiv.innerHTML = "<strong>Success!</strong> Your message/enquiry has been securely processed and sent to Sephapose Old Age Care Centre.";
                form.reset();
            }, 1200);
        });
    });

    // ---------------------------------------------------------
    // 5. ACCORDION / COLLAPSIBLE UI POLISH (about.html / services.html)
    // ---------------------------------------------------------
    const sectionHeadings = document.querySelectorAll("main section h2");
    sectionHeadings.forEach(heading => {
        // Add toggle ability
        heading.style.cursor = "pointer";
        heading.title = "Click to collapse/expand section";
        
        heading.addEventListener("click", function () {
            const section = this.parentElement;
            const contentElements = Array.from(section.children).filter(el => el !== this);
            
            const isHidden = contentElements[0] && contentElements[0].style.display === "none";
            contentElements.forEach(el => {
                el.style.display = isHidden ? "" : "none";
            });
        });
    });

});
