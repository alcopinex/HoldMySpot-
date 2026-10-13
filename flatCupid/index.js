function makeReservation() {
    //code to make a reservation
    console.log("Welcome to HoldMySpot!");
}
const customerData={};
customerData.name= prompt("Please enter your name:");
customerData.email= prompt("Please enter your email:");
customerData.phone= prompt("Please enter your phone number:");
customerData.date= prompt("Please enter the date of your reservation (YYYY-MM-DD):");
function displayReservationDetails() {
    console.log("Reservation Details:");
    console.log("Name: " + customerData.name);
    console.log("Email: " + customerData.email);
    console.log("Phone: " + customerData.phone);
    console.log("Date: " + customerData.date);
}

makeReservation();
displayReservationDetails();