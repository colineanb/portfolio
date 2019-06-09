
/**
 * Image Parallax
 */
let img = document.querySelector('.image-date-container img')
window.addEventListener('mousemove', (_event) =>
{
    const ratioX = _event.clientX / window.innerWidth - 0.5
    const ratioY = _event.clientY / window.innerHeight - 0.5
    
    const translateX = - 0.008 * ratioX * 300
    const translateY = - 0.008 * ratioY * 300

    img.style.transform = `translate(${translateX}%, ${translateY}%)`
    
})


/**
 * ANIMATION REDIRECTION 
 * PROJECT
 */

 /**
  * project 1 
  */
 
let imgContainer = document.querySelector('.image-date-container')
let date = document.querySelector('.date')

let blackDescriptionProjet = document.querySelector('.description-container')

// Animation on click before redirection
imgContainer.addEventListener('click', () =>
{

    //delay before redirection
    setTimeout(function () {
        window.location.href = "hyphen.php";
     }, 3000); 

    //animation image
   imgContainer.classList.add('animation-image')
   img.classList.add('width-image')
   date.style.display = "none"
   setTimeout(function(){
    blackDescriptionProjet.style.visibility = "visible"
   }, 1000)
   
})