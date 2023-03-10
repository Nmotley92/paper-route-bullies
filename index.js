// event handler for contact us button
function contactUs() {
    console.log("contact us button clicked");
    // sets banner to display noen
    document.getElementById("banner").style.display = "none";

    //sets contact us to display block
    document.getElementById("contactUs").style.display = "block";
    // set the contact us button to display none
    document.getElementById("contactUsBtn").style.display = "none";
    // set the our dogs button to display block
    document.getElementById("ourDogsBtn").style.display = "block";
    // set the our dogs section to display none
    document.getElementById("ourDogs").style.display = "none";
    // if home button is display none set if to block 
    if (document.getElementById("homeBtn").style.display === "none") {
        document.getElementById("homeBtn").style.display = "block";
    }
}
document.getElementById("contactUsBtn").addEventListener("click", contactUs);


// event handler for the home button 
function home() {
    console.log("home button clicked");
    // if contact us is display block set it to none
    if (document.getElementById("contactUs").style.display === "block") {
        document.getElementById("contactUs").style.display = "none";
    }
    document.getElementById("ourDogs").style.display = "none";
    // bring back the contact us button the contact us button
    document.getElementById("contactUsBtn").style.display = "block";
    // hide the home button
    document.getElementById("homeBtn").style.display = "none";
    // bring back the banner
    document.getElementById("banner").style.display = "block";
    // bring back the our dogs button
    document.getElementById("ourDogsBtn").style.display = "block";
}
document.getElementById("homeBtn").addEventListener("click", home);

// event handler for our dogs button
function ourDogs() {
    console.log("our dogs button clicked");
    // set the banner to display none
    document.getElementById("banner").style.display = "none";
    // display block the our dogs section
    document.getElementById("ourDogs").style.display = "block";
    // hide the our dogs button
    document.getElementById("ourDogsBtn").style.display = "none";
    // show the home button
    document.getElementById("homeBtn").style.display = "block";
    // show the contact us button
    document.getElementById("contactUsBtn").style.display = "block";
    // hide the contact us section
    document.getElementById("contactUs").style.display = "none";
}
document.getElementById("ourDogsBtn").addEventListener("click", ourDogs);