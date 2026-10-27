//this code is for cheacking if the js or script is link to the pages
console.log("Sephapose old age java script is connected!");

//select HTML ELEMENT
const specialMessage = document.querySelector("#special-message");
const specialButton = document.querySelector("#special-button");
const specialImage = document.querySelector("#special-Image");

//Response to a button click 
if(specialMessage && specialButton && specialImage){
specialButton.addEventListener("click",function(){
//update speacial message text
specialMessage.textContent = "Thank you for choosing sephapose old age";

//make image visible
specialImage.hidden = false;

//chang the button label and show that it has been cancelled
specialButton.textContent = "enquiry sent";
specialButton.disabled = true;



});

}
