function toggleClicked (event) {
    event.target.classList.toggle("clicked");
    document.getElementById("nav").classList.toggle("clicked");
    console.log("the button is clicked")
}

function loadEvent() {
    console.log('the page has loaded');

    document.getElementById('menu-btn').addEventListener('click', toggleClicked); 

}

window.addEventListener("load", loadEvent);

//body kapjon id-t, a click esemény a gombon hívódjon meg, a body kapja a click class nevet, és működjön a CSS