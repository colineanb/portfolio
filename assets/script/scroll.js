
/**
 * ANIMATION SCROLL 
 */


//H1 animation
ScrollReveal().reveal('.title', 
{
    origin: 'top',
    duration: 2000,
    distance : '50px', 
    delay : 200, 
    // reset: true
});

//p animation
ScrollReveal().reveal('.project-title', 
{

    origin: 'top',
    duration: 2000,
    distance : '50px', 
    // reset: true
});

//Project background animation
ScrollReveal().reveal('.project-background', 
{
    origin: 'top',
    duration: 1500,
    distance : '50px', 
    delay : 500, 
}, 50);

//Footer
ScrollReveal().reveal('footer', 
{
    origin: 'top',
    duration: 1500,
    distance : '10px', 
}, 50);



