/* when icon is clicked, navbar container height is increased, navbar is shown in column grid*/

const openMenuButton= document.getElementById('openMenuButton')
const closeMenuButton= document.getElementById('closeMenuButton')
const navbarContainer = document.getElementById('navbarContainer')
const navbar = document.getElementById('navbar')
const navbarButtons = document.getElementsByClassName('navbarButtons')
const navbarHeightDesktop= getComputedStyle(document.querySelector(":root")).getPropertyValue("--navbar-height-desktop")
const navbarHeight =getComputedStyle(document.querySelector(":root")).getPropertyValue("--navbar-height")
let windowSize= window.matchMedia("(min-width: 1000px)")

console.log(navbarButtons)

openMenuButton.addEventListener('click', openMenu)
closeMenuButton.addEventListener('click', closeMenu)
windowSize.addListener(mediaQuery)

function openMenu () {
    /*make navbar bigger*/
    navbarContainer.style.height="auto"

    /*show menuButtons*/
    for (let i = 0; i<navbarButtons.length; i++){
        navbarButtons[i].style.display="block"
    }
    navbar.style.display="grid"
    /*hide OpenMenuButton*/
    openMenuButton.style.display="none"

    /*show closeMenuButton*/
    closeMenuButton.style.display="flex"


}

function closeMenu() {
    /*make navbar small*/
    if (windowSize.matches){
        navbarContainer.style.height=navbarHeightDesktop
    }
    else{
        navbarContainer.style.height=navbarHeight
    }

    /*hide menuButtons*/
    for (let i = 0; i<navbarButtons.length; i++){
        navbarButtons[i].style.display="none"
    }

    /*show OpenMenuButton*/
    openMenuButton.style.display="flex"

    /*hide closeMenuButton*/
    closeMenuButton.style.display="none"
}

function mediaQuery(){
    if (windowSize.matches) { // If media query matches
        navbarContainer.style.height=navbarHeightDesktop
        closeMenuButton.style.display="none"
        openMenuButton.style.display="none"
        navbar.style.display="grid"
        for (let i = 0; i<navbarButtons.length; i++){
            navbarButtons[i].style.display="block"
        }

      } else {
        navbarContainer.style.height=navbarHeight
        openMenuButton.style.display="flex"
        navbar.style.display="none"
      }
}
