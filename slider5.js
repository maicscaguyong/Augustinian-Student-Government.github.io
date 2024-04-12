const content_con5 = [...document.querySelectorAll('.content-container5')];
const rightbtn5 = [...document.querySelectorAll('.right-btn5')];
const leftbtn5 = [...document.querySelectorAll('.left-btn5')];

content_con5.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    rightbtn5[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    leftbtn5[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});
