const openButtons = document.querySelectorAll(".portfolio__elem")

openButtons.forEach((openButton) => {
    openButton.addEventListener("click", () => {
        openButton.parentElement.querySelector(".popup-wrapper").classList.add("visible")
        document.body.classList.add('overflow-hidden');
    })
})



const portfolioItems = document.querySelectorAll(".portfolio__elem")

portfolioItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        item.classList.add("active")
    })
    item.addEventListener("mouseout", () => {
        item.classList.remove("active")
    })
})