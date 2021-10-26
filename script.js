function fastLog(text){
    console.log(text);
    return "muhaha";
}

function buttonClicked(event){
//   console.log(event.target);

//   console.log(event.target.classList);

    event.target.classList.toggle("clicked");

    const fastLogResult = fastLog("Ezt a szöveget szeretném kilogoltatni");

    console.log(fastLogResult);
}
function loadEvent() {
    console.log('the page has loaded');


    document.getElementById('menu-btn').addEventListener('click', buttonClicked); 
//  console.log(document.getElementById('menu-btn'));
}

window.addEventListener("load", loadEvent);