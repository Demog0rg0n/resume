const portfolioItems = document.querySelectorAll(".portfolio__elem")

portfolioItems.forEach((portfolioItem) => {
    console.log(portfolioItem)
    const button = portfolioItem.querySelector(".portfolio__elem__button")
    const popup = portfolioItem.querySelector(".popup-wrapper")
    button.addEventListener("click", () => {
        console.log(button)
        console.log(popup)
        popup.classList.add("visible")
        document.body.classList.add('overflow-hidden');
    })
})