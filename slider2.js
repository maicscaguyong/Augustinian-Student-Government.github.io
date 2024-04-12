const content_con2 = [...document.querySelectorAll('.content-container2')];
const rightbtn2 = [...document.querySelectorAll('.right-btn2')];
const leftbtn2 = [...document.querySelectorAll('.left-btn2')];

content_con2.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    rightbtn2[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    leftbtn2[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});
