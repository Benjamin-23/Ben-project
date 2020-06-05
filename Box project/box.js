var notification = 0 //Setting the initial count to 0

/* Getting the html elements */
var count = document.getElementById("count")//the counter
var form = document.getElementById("fill-form") // the form 


/* reading the form input values */

var firstname = document.getElementById('name').value
var lastname = document.getElementById('lastname').value
var email = document.getElementById('mail').value


/* Creating the person object */
let person = { 
    firstname : firstname,
    lastname : lastname,
    email: email

 }

/* Adding an event listener to the form */
form.addEventListener("submit", function (value) {
    // the event name is 'submit'

    value.preventDefault() //block the form fr0m submitting
    console.log(person.firstname,lastname)
    notification++ //  increamenting the notification count same as notification=notification+1
    count.innerHTML=notification //set the html value of count to the notification variable
} )

var like = 0

var initialnumber = document.getElementById("intialnumber")
var likebotton = document.getElementById("like")

likebotton.addEventListener("click", function(){
    like++
    initialnumber.innerHTML = like
} )