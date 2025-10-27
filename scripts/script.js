// Wait for document to be fully loaded
$(document).ready(function() {

    //=========================
    // Floating Icons Animation
    //=========================
function animateFloatingIcons() {
    // animate the bat
    $('.bat').animate({
        top: '+=50px',
        left: '+=30px'
    }, 3000, function() {
        $(this).animate({
            top: '-=50px',
            left: '-=30px'
        }, 3000, animateFloatingIcons);
    });

    // Animate the stars with rotation effect
        // animate the bat
    $('.stars').animate({
        top: '+=40px',
        right: '+=40px',
        opacity: 0.8
    }, 2500, function() {
        $(this).animate({
            top: '-=40px',
            right: '-=40px',
            opacity: 0.6
        }, 2500);
        });
    }

});