// Validation for date done -- OD opened only for 1 week from current date

let today = new Date().toISOString().substr(0, 10);
document.querySelector("#start").value = today;


document.querySelector("#start").setAttribute('min',today);
document.querySelector("#end").setAttribute('min',today);

let theDate=new Date();
theDate.setDate(theDate.getDate()+7);
let myFutureDate=theDate.toISOString().substr(0,10);
document.querySelector("#end").setAttribute('max',myFutureDate);

document.querySelector("#start").setAttribute('max',myFutureDate);
