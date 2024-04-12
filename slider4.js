const content_con4 = [...document.querySelectorAll('.content-container4')];
const rightbtn4 = [...document.querySelectorAll('.right-btn4')];
const leftbtn4 = [...document.querySelectorAll('.left-btn4')];

content_con4.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    rightbtn4[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    leftbtn4[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});
