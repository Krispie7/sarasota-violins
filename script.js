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

/*Show more photos buttons */

const aymv=document.getElementById("v1")
const master=document.getElementById("v2")
const francesca=document.getElementById("v3")
const viola=document.getElementById("v4")
const collection=document.getElementById("imageCollection")
const overlay = document.getElementById("overlay")

aymv.addEventListener("click", showCollection1)
master.addEventListener("click", showCollection2)
francesca.addEventListener("click", showCollection3)
viola.addEventListener("click", showCollection4)
overlay.addEventListener("click", closeCollection)

function showCollection1(){
    /*removes all child elements*/
    let element = document.getElementById("imageCollection");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    let image1=document.createElement("img")
    image1.setAttribute('src', "../images/our-images/g-duran-aymv/1df8ab52-d9dd-430e-b6e6-d1bc28ff34bd.JPG")
    let image2=document.createElement("img")
    image2.setAttribute('src', "../images/our-images/g-duran-aymv/375beb1d-f745-4287-b790-17ee1e5ac482.JPG")
    let image3=document.createElement("img")
    image3.setAttribute('src', "../images/our-images/g-duran-aymv/ac178459-575f-4ae4-8f8a-75bea83e745b.JPG")

    image1.className="productImageContainer"
    image2.className="productImageContainer"
    image3.className="productImageContainer"
    element.appendChild(image1)
    element.appendChild(image2)
    element.appendChild(image3)

    openCollection()
}

function showCollection2(){
/*removes all child elements*/
    let element = document.getElementById("imageCollection");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    let image1=document.createElement("img")
    image1.setAttribute('src', "../images/our-images/g-duran-master/33ed26a0-d802-4d93-b69c-171855164cc6.JPG")
    let image2=document.createElement("img")
    image2.setAttribute('src', "../images/our-images/g-duran-master/94f386cc-680b-46a5-8b35-3b9c094033fc.JPG")
    let image3=document.createElement("img")
    image3.setAttribute('src', "../images/our-images/g-duran-master/ec7621fa-8882-4f6d-b3b3-1b7bc739a443.JPG")

    image1.className="productImageContainer"
    image2.className="productImageContainer"
    image3.className="productImageContainer"
    element.appendChild(image1)
    element.appendChild(image2)
    element.appendChild(image3)
    
    openCollection()
}

function showCollection3(){
    /*removes all child elements*/
    let element = document.getElementById("imageCollection");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    let image1=document.createElement("img")
    image1.setAttribute('src', "../images/our-images/g-duran-francesca/6e75746f-d0cf-44bf-b452-236de6158549.JPG")
    let image2=document.createElement("img")
    image2.setAttribute('src', "../images/our-images/g-duran-francesca/9dd70e62-9f5d-4840-8ae8-9ea8efc873ab.JPG")
    let image3=document.createElement("img")
    image3.setAttribute('src', "../images/our-images/g-duran-francesca/74c28261-5eca-4e18-a1b9-987b42f9a3ff.JPG")
    let image4=document.createElement("img")
    image4.setAttribute('src', "../images/our-images/g-duran-francesca/7305b1ab-32ca-44e8-893e-5e0055a94052.JPG")

    image1.className="productImageContainer"
    image2.className="productImageContainer"
    image3.className="productImageContainer"
    image4.className="productImageContainer"
    element.appendChild(image1)
    element.appendChild(image2)
    element.appendChild(image3)
    element.appendChild(image4)

    openCollection()
}

function showCollection4(){
    /*removes all child elements*/
    let element = document.getElementById("imageCollection");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }

    let image1=document.createElement("img")
    image1.setAttribute('src', "../images/our-images/grezgorz-bobak-viola/52c8e327-c36b-45a2-afc5-0edc2d333472.JPG")
    let image2=document.createElement("img")
    image2.setAttribute('src', "../images/our-images/grezgorz-bobak-viola/98e891e7-34c1-4078-a5c6-88c4f10fe4c1.JPG")
    let image3=document.createElement("img")
    image3.setAttribute('src', "../images/our-images/grezgorz-bobak-viola/a666fa10-d24e-480b-b1df-17fb06bd2cf0.JPG")
    let image4=document.createElement("img")
    image4.setAttribute('src', "../images/our-images/grezgorz-bobak-viola/ef644674-00e2-4cff-a061-fa6b6e8e9900.JPG")

    image1.className="productImageContainer"
    image2.className="productImageContainer"
    image3.className="productImageContainer"
    image4.className="productImageContainer"
    element.appendChild(image1)
    element.appendChild(image2)
    element.appendChild(image3)
    element.appendChild(image4)

    openCollection()
}

function openCollection(){
    collection.style.display="grid"
    overlay.style.display="block"
    collection.style.scale="1"
    overlay.style.scale="1"
}

function closeCollection(){
    collection.style.display="none"
    overlay.style.display="none"
    collection.style.scale="0"
    overlay.style.scale="0"
}