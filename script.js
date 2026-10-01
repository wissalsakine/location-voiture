
/* =========================================
   MENU MOBILE
========================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


/* Fermer le menu après avoir cliqué */

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


/* =========================================
   FILTRE DES VOITURES
========================================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const carCards =
    document.querySelectorAll(".car-card");


filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        /* enlever active */

        filterButtons.forEach(btn => {

            btn.classList.remove("active");

        });

        /* ajouter active */

        button.classList.add("active");


        const filter =
            button.dataset.filter;


        carCards.forEach(card => {

            const category =
                card.dataset.category;


            if (
                filter === "all" ||
                category === filter
            ) {

                card.style.display = "block";

            } else {

                card.style.display = "none";

            }

        });

    });

});


/* =========================================
   FAVORIS
========================================= */

const favoriteButtons =
    document.querySelectorAll(".favorite");


favoriteButtons.forEach(button => {

    button.addEventListener("click", () => {

        button.classList.toggle("active");


        const icon =
            button.querySelector("i");


        if (button.classList.contains("active")) {

            icon.classList.remove("fa-regular");

            icon.classList.add("fa-solid");

        } else {

            icon.classList.remove("fa-solid");

            icon.classList.add("fa-regular");

        }

    });

});


/* =========================================
   MODAL RESERVATION
========================================= */

const modal =
    document.getElementById("bookingModal");

const closeModal =
    document.getElementById("closeModal");

const selectedCar =
    document.getElementById("selectedCar");

const rentButtons =
    document.querySelectorAll(".rent-btn");


rentButtons.forEach(button => {

    button.addEventListener("click", () => {

        const carName =
            button.dataset.car;

        selectedCar.textContent =
            carName;

        modal.classList.add("active");

    });

});


/* fermer */

closeModal.addEventListener("click", () => {

    modal.classList.remove("active");

});


/* fermer en cliquant autour */

modal.addEventListener("click", (event) => {

    if (event.target === modal) {

        modal.classList.remove("active");

    }

});


/* =========================================
   DATE MINIMUM
========================================= */

const today =
    new Date().toISOString().split("T")[0];


const startDate =
    document.getElementById("startDate");

const endDate =
    document.getElementById("endDate");

const bookingStart =
    document.getElementById("bookingStart");

const bookingEnd =
    document.getElementById("bookingEnd");


startDate.min = today;

endDate.min = today;

bookingStart.min = today;

bookingEnd.min = today;


/* =========================================
   DATE RETOUR
========================================= */

startDate.addEventListener("change", () => {

    endDate.min = startDate.value;

});


bookingStart.addEventListener("change", () => {

    bookingEnd.min = bookingStart.value;

});


/* =========================================
   RECHERCHE
========================================= */

const searchBtn =
    document.getElementById("searchBtn");


searchBtn.addEventListener("click", () => {

    const location =
        document.getElementById("pickupLocation").value;

    const start =
        startDate.value;

    const end =
        endDate.value;


    if (!start || !end) {

        alert(
            "Veuillez sélectionner les dates de départ et de retour."
        );

        return;

    }


    if (end < start) {

        alert(
            "La date de retour doit être après la date de départ."
        );

        return;

    }


    document.getElementById("cars").scrollIntoView({
        behavior: "smooth"
    });


    alert(
        `Recherche pour ${location} du ${start} au ${end}.`
    );

});


/* =========================================
   BOUTON RÉSERVER
========================================= */

const bookingForm =
    document.getElementById("bookingForm");


bookingForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("bookingName").value;

    const car =
        selectedCar.textContent;


    alert(
        `Merci ${name} ! Votre demande pour ${car} a bien été enregistrée.`
    );


    bookingForm.reset();

    modal.classList.remove("active");

});


/* =========================================
   CONTACT FORM
========================================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", (event) => {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    alert(
        `Merci ${name}, votre message a bien été envoyé.`
    );


    contactForm.reset();

});


/* =========================================
   HEADER AU SCROLL
========================================= */

window.addEventListener("scroll", () => {

    const header =
        document.querySelector(".header");


    if (window.scrollY > 50) {

        header.style.background =
            "rgba(5,5,5,0.96)";

    } else {

        header.style.background =
            "rgba(8,8,8,0.80)";

    }

});

