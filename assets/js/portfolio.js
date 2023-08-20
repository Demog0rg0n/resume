const openButtons = document.querySelectorAll(".portfolio__elem__preview")

openButtons.forEach((openButton) => {
    openButton.addEventListener("click", () => {
        openButton.parentElement.querySelector(".popup-wrapper").classList.add("visible")
        document.body.classList.remove('overflow-hidden');
    })
})