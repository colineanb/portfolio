
/**
 * ANIMATION SCROLL 
 */

/**
 * Random stuffs page
 */

//H1 animation
ScrollReveal().reveal('.title', 
{
    // Objet dans lequel on passe les options
    origin: 'top',
    duration: 2000,
    distance : '50px', 
    delay : 200, 
    // reset: true
});

//p animation
ScrollReveal().reveal('.project-title', 
{
    // Objet dans lequel on passe les options
    origin: 'top',
    duration: 2000,
    distance : '50px', 
    // reset: true
});

//Project background animation
ScrollReveal().reveal('.project-background', 
{
    // Objet dans lequel on passe les options
    origin: 'top',
    duration: 1500,
    distance : '50px', 
    delay : 500, 
}, 50);

//Footer
ScrollReveal().reveal('footer', 
{
    // Objet dans lequel on passe les options
    origin: 'top',
    duration: 1500,
    distance : '10px', 
}, 50);

