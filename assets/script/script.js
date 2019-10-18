
/**
 * Image Parallax
 */
let  imgContainer = document.querySelector('.image-date-container')
window.addEventListener('mousemove', (_event) =>
{
    const ratioX = _event.clientX / window.innerWidth - 0.5
    const ratioY = _event.clientY / window.innerHeight - 0.5
    
    const translateX = - 0.008 * ratioX * 300
    const translateY = - 0.008 * ratioY * 300

    img.style.transform = `translate(${translateX}%, ${translateY}%)`
    
})


window.addEventListener('mousemove', (_event) =>
{
    const ratioX = _event.clientX / window.innerWidth - 0.5
    const ratioY = _event.clientY / window.innerHeight - 0.5
    
    const translateX = 0.008 * ratioX * 300
    const translateY = 0.008 * ratioY * 300
    
    typoContainer.style.transform = `translate(${translateX}%, ${translateY}%)`
    
})

window.addEventListener('mousemove', (_event) =>
{
    const ratioX = _event.clientX / window.innerWidth - 0.5
    const ratioY = _event.clientY / window.innerHeight - 0.5
    
    const translateX = - 0.008 * ratioX * 300
    const translateY = - 0.008 * ratioY * 300
    
    randomContainer.style.transform = `translate(${translateX}%, ${translateY}%)`
    
})

window.addEventListener('mousemove', (_event) =>
{
    const ratioX = _event.clientX / window.innerWidth - 0.5
    const ratioY = _event.clientY / window.innerHeight - 0.5
    
    const translateX = 0.008 * ratioX * 300
    const translateY = 0.008 * ratioY * 300
    
    solarContainer.style.transform = `translate(${translateX}%, ${translateY}%)`
    
})




/**
 * ANIMATION REDIRECTION 
 * PROJECT
 */

 /**
  * project 1 
  */
let date = document.querySelector('.date')
let contentWrapper = document.querySelector('.content-wrapper')
let header = document.querySelector('header')
let blackDescriptionProjet = document.querySelector('.description-container')
let img = document.querySelector('.hyphenClick')
let typo = document.querySelector('.typo')
let solar = document.querySelector('.solar')
let random = document.querySelector('.random')

// Animation on click before redirection
img.addEventListener('click', () =>
{
    window.location.href = "pages/hyphen.html";
    // //delay before redirection
    // setTimeout(function () {
    //     window.location.href = "pages/hyphen.html";
    //  }, 3000); 

//     //animation image
//     imgContainer.classList.add('animation-image')
//     img.classList.add('width-image')
//     date.style.display = "none"
//     header.style.display = "none"
//     typo.style.display = "none"  
//     solar.style.display = "none"  
//     random.style.display = "none"  
//     contentWrapper.classList.add('content-wrapper-animation')
//     setTimeout(function(){
//     blackDescriptionProjet.style.visibility = "visible"
//    }, 1000)
   
})

 /**
  * projet 2
  */

  let imgtypo = document.querySelector('.typoClick')
  let typoContainer = document.querySelector('.typoContainer')

 imgtypo.addEventListener('click', () =>
 {
    window.location.href = "pages/typography.html";
    //  //delay before redirection
    //  setTimeout(function () {
    //      window.location.href = "pages/typography.html";
    //   }, 3000); 
 
    //  //animation image
    //  typoContainer.classList.add('animation-image')
    //  imgtypo.classList.add('width-image')
    //  date.style.display = "none"
    //  header.style.display = "none"
    //  img.style.display = "none"  
    //  solar.style.display = "none"  
    //  random.style.display = "none"  
    //  contentWrapper.classList.add('content-wrapper-animation')
    //  setTimeout(function(){
    //  blackDescriptionProjet.style.visibility = "visible"
    // }, 1000)
    
 })

 /**
  * projet 3
  */

 let imgrandom = document.querySelector('.randomClick')
 let randomContainer = document.querySelector('.randomContainer')

imgrandom.addEventListener('click', () =>
{
    window.location.href = "pages/random.html";
    // //delay before redirection
    // setTimeout(function () {
    //     window.location.href = "pages/random.html";
    //  }, 3000); 

//     //animation image
//     randomContainer.classList.add('animation-image')
//     imgrandom.classList.add('width-image')
//     date.style.display = "none"
//     header.style.display = "none"
//     img.style.display = "none"  
//     solar.style.display = "none"  
//     typo.style.display = "none"  
//     contentWrapper.classList.add('content-wrapper-animation')
//     setTimeout(function(){
//     blackDescriptionProjet.style.visibility = "visible"
//    }, 1000)
   
})

 /**
  * projet 4
  */

 let imgSolar = document.querySelector('.solarClick')
 let solarContainer = document.querySelector('.solarContainer')
 let containerDate =document.querySelector('.container-date')

imgSolar.addEventListener('click', () =>
{
    window.location.href = "pages/space.html";
    // //delay before redirection
    // setTimeout(function () {
    //     window.location.href = "pages/space.html";
    //  }, 3000); 

//     //animation image
//     solarContainer.classList.add('animation-image')
//     imgSolar.classList.add('width-image')
//     date.style.display = "none"
//     containerDate.style.display = "none"
//     header.style.display = "none"
//     img.style.display = "none"  
//     random.style.display = "none"  
//     typo.style.display = "none"  
//     contentWrapper.classList.add('content-wrapper-animation')
//     setTimeout(function(){
//     blackDescriptionProjet.style.visibility = "visible"
//    }, 1000)
   
})



