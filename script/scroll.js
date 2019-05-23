
// constructor function ScrollReveal()

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

//Project background animation
ScrollReveal().reveal('.project-background', 
{
    // Objet dans lequel on passe les options
    origin: 'top',
    duration: 1500,
    distance : '50px', 
    delay : 200, 
}, 50);
