const portfolioItems = document.querySelectorAll(".portfolio__elem")

portfolioItems.forEach((portfolioItem) => {
    const button = portfolioItem.querySelector(".portfolio__elem__button")
    const popup = portfolioItem.querySelector(".popup-wrapper")
    button.addEventListener("click", () => {
        popup.classList.add("visible")
        document.body.classList.add('overflow-hidden');
    })
})