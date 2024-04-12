var scrollPositionBeforeMenuOpen = 0;
    
function openSlideMenu(event) {
    event.preventDefault(); // Prevent the default behavior of the anchor tag
    var sideMenu = document.getElementById('side-menu');
    var screenWidth = window.innerWidth;
    var menuWidth = "";

    if (screenWidth >= 1366) {
        menuWidth = "200px";
    } else if (screenWidth >= 1280) {
        menuWidth = "180px";
    } else if (screenWidth >= 1024) {
        menuWidth = "160px";
    } else if (screenWidth >= 768) {
        menuWidth = "140px";
    } else if (screenWidth >= 640) {
        menuWidth = "140px";
    } else if (screenWidth >= 475) {
        menuWidth = "140px";
    } else {
        menuWidth = "140px";
    }

    sideMenu.style.width = menuWidth;
    sideMenu.classList.add('open'); 
    scrollPositionBeforeMenuOpen = window.scrollY; // Store scroll position before opening
}

function closeSlideMenu(event) {
    event.preventDefault(); 
    var sideMenu = document.getElementById('side-menu');
    sideMenu.style.width = '0';
    sideMenu.classList.remove('open'); 
    window.scrollTo(0, scrollPositionBeforeMenuOpen); 
}

window.addEventListener("resize", function() {
    openSlideMenu();
});


