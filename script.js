/* when icon is clicked, navbar container height is increased, navbar is shown in column grid*/

const openMenuButton= document.getElementById('openMenuButton')
const closeMenuButton= document.getElementById('closeMenuButton')
const navbarContainer = document.getElementById('navbarContainer')
const navbarButtons = document.getElementsByClassName('navbarButtons')
const navbarHeightMobile= getComputedStyle(document.querySelector(":root")).getPropertyValue("--navbar-height-mobile")
const navbarHeight =getComputedStyle(document.querySelector(":root")).getPropertyValue("--navbar-height")
let windowSize= window.matchMedia("(min-width: 600px)")

console.log(navbarButtons)

openMenuButton.addEventListener('click', openMenu)
closeMenuButton.addEventListener('click', closeMenu)
windowSize.addListener(mediaQuery)

function openMenu () {
    /*make navbar bigger*/
    navbarContainer.style.height="37vh"

    /*show menuButtons*/
    for (let i = 0; i<navbarButtons.length; i++){
        navbarButtons[i].style.display="block"
    }
    
    /*hide OpenMenuButton*/
    openMenuButton.style.display="none"

    /*show closeMenuButton*/
    closeMenuButton.style.display="block"


}

function closeMenu() {
    /*make navbar small*/
    navbarContainer.style.height=navbarHeightMobile

    /*hide menuButtons*/
    for (let i = 0; i<navbarButtons.length; i++){
        navbarButtons[i].style.display="none"
    }

    /*show OpenMenuButton*/
    openMenuButton.style.display="block"

    /*hide closeMenuButton*/
    closeMenuButton.style.display="none"
}

function mediaQuery(){
    if (windowSize.matches) { // If media query matches
        navbarContainer.style.height=navbarHeight
        closeMenuButton.style.display="none"
        openMenuButton.style.display="none"
        for (let i = 0; i<navbarButtons.length; i++){
            navbarButtons[i].style.display="block"
        }

      } else {
        navbarContainer.style.height=navbarHeightMobile
        openMenuButton.style.display="block"
      }
}
