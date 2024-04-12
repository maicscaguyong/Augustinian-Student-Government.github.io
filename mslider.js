function initializeSlider(container) {
    let slideImages = container.querySelectorAll('.slides img');
    let next = container.querySelector('.next');
    let prev = container.querySelector('.prev');
    let dots = container.querySelectorAll('.dot');

    let counter = 0;
    let deletInterval;
    let isAnimating = false; 

    next.addEventListener('click', slideNext);
    function slideNext() {
        if (!isAnimating) {
            isAnimating = true;
            slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
            counter = (counter + 1) % slideImages.length;
            slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
            setTimeout(() => { isAnimating = false; }, 500); 
            indicators();
        }
    }

    prev.addEventListener('click', slidePrev);
    function slidePrev() {
        if (!isAnimating) {
            isAnimating = true;
            slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
            counter = (counter - 1 + slideImages.length) % slideImages.length;
            slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
            setTimeout(() => { isAnimating = false; }, 500);
            indicators();
        }
    }

    function autoSliding() {
        deletInterval = setInterval(timer, 3000);
        function timer() {
            slideNext();
        }
    }
    autoSliding();

    container.addEventListener('mouseover', function () {
        clearInterval(deletInterval);
    });

    container.addEventListener('mouseout', autoSliding);

    function indicators() {
        for (let i = 0; i < dots.length; i++) {
            dots[i].classList.remove('active');
        }
        dots[counter].classList.add('active');
    }

    function switchImage(currentImage) {
        if (!isAnimating) {
            isAnimating = true;
            currentImage.classList.add('active');
            let imageId = parseInt(currentImage.getAttribute('attr'));
            if (imageId > counter) {
                slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
                counter = imageId;
                slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
            } else if (imageId < counter) {
                slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
                counter = imageId;
                slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
            }
            setTimeout(() => { isAnimating = false; }, 500); 
            indicators();
        }
    }

    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            switchImage(dot);
        });
    });
}

initializeSlider(document.querySelector('.ee1 .slide-container'));

initializeSlider(document.querySelector('.ee2 .slide-container'));

initializeSlider(document.querySelector('.ee3 .slide-container'));

