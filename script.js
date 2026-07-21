const viewDetails = document.querySelector(".view-details");

const totalCard = document.querySelector(".total-amount-card");


viewDetails.addEventListener("click", () => {

    totalCard.classList.toggle("active");

});

const btn = document.querySelector(".view-details");
const dropdown = document.querySelector(".amount-dropdown");
const icon = btn.querySelector("i");

btn.addEventListener("click", () => {

    if(dropdown.style.display === "block"){

        dropdown.style.display = "none";
        icon.classList.replace("fa-angle-up","fa-angle-down");

    }else{

        dropdown.style.display = "block";
        icon.classList.replace("fa-angle-down","fa-angle-up");

    }

});

// PAYMENT METHOD CARD

const tops = document.querySelectorAll(".payment-top");

tops.forEach((top) => {

    top.addEventListener("click", () => {

        const card = top.parentElement;

        const allCards =
        document.querySelectorAll(".payment-method-card");


        allCards.forEach((item) => {

            if(item !== card){

                item.classList.remove("active");

            }

        });

        card.classList.toggle("active");

    });

});
