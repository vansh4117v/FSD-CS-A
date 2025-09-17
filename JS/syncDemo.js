function register() {
    waitfor5seconds();
    console.log("register end");
}
function login() {
    waitfor5seconds();
    console.log("login");
}
function sendEmail() {
    waitfor5seconds();
    console.log("sendEmail");
}
function getData() {
    waitfor5seconds();
    console.log("getData");
}
function displayData() {
    waitfor5seconds();
    console.log("displayData");
}
function waitfor5seconds() {
    const ms = new Date().getTime() + 5000;
    while (new Date().getTime() < ms) { }
}
   
register();
login();
sendEmail();
getData();
displayData();
console.log("call other functions");