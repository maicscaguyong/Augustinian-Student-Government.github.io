const content_con = [...document.querySelectorAll('.content-container')];
const rightbtn = [...document.querySelectorAll('.right-btn')];
const leftbtn = [...document.querySelectorAll('.left-btn')];

content_con.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    rightbtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    });

    leftbtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    });
});

