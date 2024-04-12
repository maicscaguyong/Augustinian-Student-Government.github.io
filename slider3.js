const content_con3 = [...document.querySelectorAll('.content-container3')];
const rightbtn3 = [...document.querySelectorAll('.right-btn3')];
const leftbtn3 = [...document.querySelectorAll('.left-btn3')];

content_con3.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    rightbtn3[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    leftbtn3[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});
