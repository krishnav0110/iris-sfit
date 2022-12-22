const galleryContainer = document.querySelector(".gallery .gallery-container");
const galleryCards = document.querySelectorAll(".gallery .gallery-card");
const galleryCardsLength = galleryCards.length;
const highestZIndex = (galleryCardsLength >> 1) + 1;
let order = 1;

galleryCards.forEach((galleryCard) => {
    let zIndex = galleryCardsLength % order + 1;
    galleryCard.style.order = order++;
    galleryCard.style.zIndex = zIndex;
    galleryCard.firstElementChild.style.transform = `scale(${zIndex / highestZIndex})`;
});

const slideRight = () => {
    galleryCards.forEach((galleryCard) => {
        let changedOrder = parseInt(galleryCard.style.order) + 1;
        changedOrder = changedOrder > galleryCardsLength ? 1 : changedOrder;
        let zIndex = galleryCardsLength % changedOrder + 1;

        galleryCard.style.order = changedOrder;
        galleryCard.style.zIndex = zIndex;
        galleryCard.firstElementChild.style.transform = `scale(${zIndex / highestZIndex})`;
    });
}
const slideLeft = () => {
    galleryCards.forEach((galleryCard) => {
        let changedOrder = parseInt(galleryCard.style.order) - 1;
        changedOrder = changedOrder < 1 ? galleryCardsLength : changedOrder;
        let zIndex = galleryCardsLength % changedOrder + 1;

        galleryCard.style.order = changedOrder;
        galleryCard.style.zIndex = zIndex;
        galleryCard.firstElementChild.style.transform = `scale(${zIndex / highestZIndex})`;
    });
}



let touchStart;
galleryContainer.addEventListener('touchstart', e => {
    e.preventDefault();
    touchStart = e.touches[0].clientX;
});
galleryContainer.addEventListener('mousedown', e => {
    e.preventDefault();
    touchStart = e.clientX;
});

galleryContainer.addEventListener('touchend', e => {
    e.preventDefault();
    let touchEnd = e.changedTouches[0].clientX;
    if(touchEnd > touchStart + 30)
        slideRight();
    else if(touchEnd < touchStart - 30)
        slideLeft();
});
galleryContainer.addEventListener('mouseup', e => {
    e.preventDefault();
    let touchEnd = e.clientX;
    if(touchEnd > touchStart + 30)
        slideRight();
    else if(touchEnd < touchStart - 30)
        slideLeft();
});