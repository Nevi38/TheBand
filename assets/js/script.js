const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.modal')
const closeBtn = document.querySelector('.js-modal-close')
const closeBtnfooter = document.querySelector('.js-footer-close')
const modalContainer = document.querySelector('.js-modal-container')
function showBuyTickets() {
    modal.classList.add('open')
}

function hiddenBuyTickets() {
    modal.classList.remove('open')
}

for (const buyBtn of buyBtns) {
    buyBtn.addEventListener('click', showBuyTickets)
}

closeBtn.addEventListener('click', hiddenBuyTickets)
closeBtnfooter.addEventListener('click', hiddenBuyTickets)
modal.addEventListener('click', hiddenBuyTickets)

modalContainer.addEventListener('click', function (event) {
    event.stopImmediatePropagation(modalContainer)
})

function automaticImage() {
    const img = document.querySelectorAll("img");
}