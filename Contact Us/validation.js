document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    var firstName = document.querySelector('.first-name').value;
    var email = document.querySelector('.email').value;
    var phone = document.querySelector('.phone').value;
    var prefer = document.querySelector('.choose').value;
    var message = document.querySelector('.message').value;
    

    if (!firstName ||   !email || !phone ||!prefer ||!message) {
        alert("All fields must be completed.");
        return false;
    }

    var emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        alert("Invalid email format.");
        return false;
    }

    var phonePattern = /^[0-9]{10,15}$/;
    if (!phone.match(phonePattern)) {
        alert("Invalid phone number format.");
        return false;
    }

    if (prefer !== "Email" && prefer !== "Phone") {
        alert("Invalid preferred contact method. Please choose either 'Email' or 'Phone'.");
        return false;
    }

    alert("Form has been submitted successfully.");
});